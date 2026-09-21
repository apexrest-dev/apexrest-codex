import { contained, exists, readJson } from './fs.ts';
import { parse } from './config.ts';
import { Fault } from './result.ts';
import {
  workPreferencesSchema,
  resolvedTeamStartSchema,
  teamStartSchema,
  type TeamRequest,
} from './team-schema.ts';

export async function workPreferences(root: string) {
  const file = await contained(root, '.apexrest/panel/preferences.json');
  const preferences = parse(workPreferencesSchema, (await exists(file)) ? await readJson(file) : {});
  if (!preferences.multiAgentEnabled) preferences.executionMode = 'single';
  return preferences;
}

export async function resolveWorkRequest(root: string, input: TeamRequest) {
  const fields = parse(teamStartSchema, input);
  const overrides = Object.fromEntries(Object.entries(fields).filter(([, value]) => value !== undefined));
  const { multiAgentEnabled, ...preferences } = await workPreferences(root);
  const request = resolvedTeamStartSchema.parse({
    ...preferences,
    ...overrides,
    project: root,
  });
  if (request.executionMode === 'team' && !multiAgentEnabled)
    throw new Fault(
      'MULTI_AGENT_DISABLED',
      'Multi-agent work is disabled. The user must explicitly enable multiAgentEnabled in Settings before starting a team.',
      2,
    );
  if (request.executionMode === 'single') request.developers = 1;
  return request;
}
