import { z } from 'zod';
import type { CodexClient } from './codex-client.ts';
import { Fault } from './result.ts';
import type { ModelSelection, TeamPhase, TeamRole, TeamState, TokenUsage } from './team-schema.ts';

const effortSchema = z.enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh', 'max', 'ultra']);
const modelSchema = z.object({
  model: z.string().min(1).max(200),
  hidden: z.boolean().default(false),
  isDefault: z.boolean().default(false),
  inputModalities: z.array(z.string()),
  defaultReasoningEffort: effortSchema,
  supportedReasoningEfforts: z.array(z.object({ reasoningEffort: effortSchema })),
});
export type TeamModel = z.infer<typeof modelSchema>;
const automaticEfforts = ['none', 'minimal', 'low', 'medium', 'high'];
const preferences = {
  fast: ['gpt-5.6-luna', 'gpt-5.6-sol', 'gpt-5.6-terra', 'gpt-5.5'],
  balanced: ['gpt-5.6-sol', 'gpt-5.6-terra', 'gpt-5.5', 'gpt-6-astra'],
  strong: ['gpt-6-astra', 'gpt-5.6-sol', 'gpt-5.6-terra', 'gpt-5.5'],
};

export async function discoverTeamModels(client: CodexClient): Promise<TeamModel[]> {
  const models = new Map<string, TeamModel>(),
    cursors = new Set<string>();
  let cursor: string | undefined;
  for (let page = 0; page < 10; page++) {
    const response = await client.call('model/list', {
      limit: 50,
      includeHidden: false,
      ...(cursor ? { cursor } : {}),
    });
    if (!Array.isArray(response.data) || response.data.length > 100)
      throw new Fault('CODEX_MODELS_UNAVAILABLE', 'Codex returned an invalid model catalog.', 3, 'blocked');
    for (const entry of response.data) {
      const parsed = modelSchema.safeParse(entry);
      if (!parsed.success) continue;
      const model = parsed.data;
      if (
        !model.hidden &&
        model.inputModalities.includes('text') &&
        model.supportedReasoningEfforts.some((e) => automaticEfforts.includes(e.reasoningEffort))
      )
        models.set(model.model, model);
    }
    if (response.nextCursor == null) {
      if (models.size) return [...models.values()];
      throw new Fault(
        'CODEX_MODELS_UNAVAILABLE',
        'No supported text model is available for Auto routing.',
        3,
        'blocked',
      );
    }
    if (typeof response.nextCursor !== 'string' || !response.nextCursor || cursors.has(response.nextCursor))
      break;
    cursor = response.nextCursor;
    cursors.add(cursor);
  }
  throw new Fault(
    'CODEX_MODELS_UNAVAILABLE',
    'Codex model pagination exceeded its bound or repeated a cursor.',
    3,
    'blocked',
  );
}

export function selectTeamModel(
  models: TeamModel[],
  role: TeamRole,
  phase: TeamPhase,
  policy: NonNullable<TeamState['modelPolicy']>,
): ModelSelection {
  let tier: ModelSelection['tier'] = 'balanced';
  let reason =
    phase === 'planning'
      ? 'Balanced planning assesses task complexity without an extra agent call.'
      : 'Independent review and ordinary implementation use balanced reasoning.';
  if (phase !== 'planning') {
    if (policy.repairFailures >= 2) {
      tier = 'strong';
      reason = 'Two implementation repair cycles failed; escalating the next scheduled turn.';
    } else if (policy.complexity === 'complex' && role !== 'qa') {
      tier = 'strong';
      reason = 'Manager assessed complex work: ' + policy.reason;
    } else if (
      policy.complexity === 'simple' &&
      role.startsWith('developer') &&
      policy.repairFailures === 0
    ) {
      tier = 'fast';
      reason = 'Manager assessed a bounded simple change: ' + policy.reason;
    } else if (policy.repairFailures === 1) {
      reason = 'One implementation repair cycle failed; use at least balanced reasoning.';
    }
  }
  const model =
    preferences[tier].map((name) => models.find((m) => m.model === name)).find(Boolean) ??
    models.find((m) => m.isDefault) ??
    models[0];
  if (!model)
    throw new Fault('CODEX_MODELS_UNAVAILABLE', 'No model available for Auto routing.', 3, 'blocked');
  const wanted = tier === 'fast' ? 'low' : tier === 'strong' ? 'high' : 'medium';
  const available = model.supportedReasoningEfforts.map((e) => e.reasoningEffort);
  const effort = [wanted, 'medium', 'low', 'high', 'minimal', 'none'].find((e) =>
    available.includes(e as z.infer<typeof effortSchema>),
  );
  if (!effort)
    throw new Fault(
      'CODEX_MODELS_UNAVAILABLE',
      'Model has no supported automatic reasoning level.',
      3,
      'blocked',
    );
  if (model.model !== preferences[tier][0])
    reason += ' Preferred model unavailable; using a catalog fallback.';
  if (effort !== wanted) reason += ' Requested reasoning unavailable; using a supported level.';
  return { mode: 'auto', tier, model: model.model, effort, reason };
}

export function reportedTokenUsage(value: unknown): TokenUsage | undefined {
  if (!value || typeof value !== 'object') return;
  const data = value as Record<string, unknown>;
  const valid = (n: unknown): n is number => typeof n === 'number' && Number.isSafeInteger(n) && n >= 0;
  if (!valid(data.totalTokens)) return;
  const result: TokenUsage = { totalTokens: data.totalTokens };
  for (const key of [
    'inputTokens',
    'cachedInputTokens',
    'cacheWriteInputTokens',
    'outputTokens',
    'reasoningOutputTokens',
  ] as const)
    if (valid(data[key])) result[key] = data[key];
  return result;
}
