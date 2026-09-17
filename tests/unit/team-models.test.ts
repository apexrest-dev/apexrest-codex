import test from 'node:test';
import assert from 'node:assert/strict';
import {
  discoverTeamModels,
  selectTeamModel,
  reportedTokenUsage,
  type TeamModel,
} from '../../packages/core/src/team-models.ts';
import { compactTeamContext } from '../../packages/core/src/team-context.ts';
import { teamStartSchema, type TeamState } from '../../packages/core/src/team-schema.ts';

const model = (name: string, efforts = ['low', 'medium', 'high']): TeamModel => ({
  model: name,
  hidden: false,
  isDefault: name === 'gpt-6-astra',
  inputModalities: ['text'],
  defaultReasoningEffort: 'high',
  supportedReasoningEfforts: efforts.map((reasoningEffort) => ({
    reasoningEffort: reasoningEffort as 'low' | 'medium' | 'high',
  })),
});
const catalog = ['gpt-6-astra', 'gpt-5.6-sol', 'gpt-5.6-luna'].map((name) => model(name));
const policy = (complexity: 'simple' | 'standard' | 'complex', repairFailures = 0) => ({
  mode: 'auto' as const,
  complexity,
  repairFailures,
  reason: 'Manager assessment.',
});

test('Auto keeps independent reviewers balanced, routes simple work cheaply and reserves strong for complexity or repeated repairs', () => {
  assert.equal(selectTeamModel(catalog, 'manager', 'planning', policy('complex')).model, 'gpt-5.6-sol');
  assert.equal(
    selectTeamModel(catalog, 'developer-1', 'development', policy('simple')).model,
    'gpt-5.6-luna',
  );
  assert.equal(selectTeamModel(catalog, 'developer-1', 'development', policy('simple')).effort, 'low');
  for (const role of ['manager', 'qa'] as const) {
    const choice = selectTeamModel(catalog, role, 'qa', policy('simple'));
    assert.equal(choice.model, 'gpt-5.6-sol');
    assert.equal(choice.effort, 'medium');
  }
  assert.equal(selectTeamModel(catalog, 'manager', 'code_review', policy('complex')).model, 'gpt-6-astra');
  assert.equal(selectTeamModel(catalog, 'qa', 'qa', policy('complex')).model, 'gpt-5.6-sol');
  assert.equal(selectTeamModel(catalog, 'developer-1', 'development', policy('simple', 1)).tier, 'balanced');
  assert.equal(selectTeamModel(catalog, 'qa', 'qa', policy('standard', 2)).effort, 'high');
  assert.equal(teamStartSchema.safeParse({ task: 'Test', model: 'gpt-6-astra' }).success, false);
});

test('catalog discovery paginates and ignores hidden, malformed or unsupported entries', async () => {
  const calls: unknown[] = [];
  const models = await discoverTeamModels({
    async call(_method, params) {
      calls.push(params);
      return calls.length === 1
        ? { data: [{ ...model('hidden'), hidden: true }, { model: 'incomplete' }], nextCursor: 'page2' }
        : {
            data: [model('gpt-5.6-sol'), { ...model('audio'), inputModalities: ['audio'] }],
            nextCursor: null,
          };
    },
    async close() {},
  });
  assert.deepEqual(
    models.map((m) => m.model),
    ['gpt-5.6-sol'],
  );
  assert.equal((calls[1] as { cursor: string }).cursor, 'page2');
  await assert.rejects(
    discoverTeamModels({
      async call() {
        return { data: [], nextCursor: 'loop' };
      },
      async close() {},
    }),
    /pagination/,
  );
  await assert.rejects(
    discoverTeamModels({
      async call() {
        return { data: [model('ultra-only', ['ultra'])] };
      },
      async close() {},
    }),
    /No supported/,
  );
});

test('Auto only sends available model and reasoning values and explains fallbacks', () => {
  const choice = selectTeamModel(
    [model('catalog-default', ['low'])],
    'manager',
    'code_review',
    policy('complex'),
  );
  assert.equal(choice.model, 'catalog-default');
  assert.equal(choice.effort, 'low');
  assert.match(choice.reason, /catalog fallback/);
  assert.match(choice.reason, /supported level/);
  assert.throws(() => selectTeamModel([], 'qa', 'qa', policy('standard')), /No model/);
});

test('usage preserves cumulative counters and cached subset without adding or inventing values', () => {
  assert.deepEqual(
    reportedTokenUsage({
      totalTokens: 100,
      inputTokens: 80,
      cachedInputTokens: 60,
      outputTokens: 20,
      reasoningOutputTokens: NaN,
    }),
    { totalTokens: 100, inputTokens: 80, cachedInputTokens: 60, outputTokens: 20 },
  );
  assert.equal(reportedTokenUsage({ totalTokens: -1 }), undefined);
  assert.equal(reportedTokenUsage({ totalTokens: Infinity }), undefined);
});

test('turn context omits repeated raw tool transcripts and provides full evidence location', () => {
  const state: TeamState = {
    id: 'fixture',
    status: 'running',
    phase: 'qa',
    revision: 1,
    updatedAt: '',
    result: '',
    diagnostics: [],
    reviews: [],
    qa: [],
    messages: [],
    members: ['manager', 'developer-1', 'qa'].map((role) => ({
      role: role as 'manager' | 'developer-1' | 'qa',
      threadId: role,
      sessionId: role,
      status: 'completed',
      result: 'x'.repeat(16000),
    })),
    observations: Array.from({ length: 30 }, () => ({
      role: 'developer-1',
      revision: 1,
      phase: 'development',
      kind: 'commandExecution',
      detail: 'raw-output'.repeat(200),
    })),
  };
  const context = compactTeamContext(state, 'qa', '/project/.apexrest/teams/fixture/state.json');
  assert.equal(context.fullReport, '/project/.apexrest/teams/fixture/state.json');
  assert.ok(!JSON.stringify(context).includes('raw-output'));
  assert.ok(JSON.stringify(context).length < 3500);
  assert.match(context.evidenceNote, /Independently inspect/);
});
