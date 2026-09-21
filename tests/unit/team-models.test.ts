import test from 'node:test';
import assert from 'node:assert/strict';
import {
  discoverTeamModels,
  selectTeamModel,
  reportedTokenUsage,
  type TeamModel,
} from '../../packages/core/src/team-models.ts';
import { compactTeamContext, TeamContextDelivery } from '../../packages/core/src/team-context.ts';
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

const contextFixture = (): TeamState => ({
  id: 'fixture',
  status: 'running',
  phase: 'qa',
  revision: 1,
  updatedAt: '',
  result: '',
  diagnostics: [],
  messages: [],
  reviews: [],
  qa: [],
  members: ['manager', 'developer-1', 'qa'].map((role) => ({
    role: role as 'manager' | 'developer-1' | 'qa',
    threadId: role,
    sessionId: role,
    status: 'completed',
    result: 'r'.repeat(16000),
  })),
});

test('context deltas retain complete new messages per role and allow explicit retrieval without replaying summaries', () => {
  const state = contextFixture(),
    delivery = new TeamContextDelivery(),
    fullReport = '/project/state.json';
  const text = 'x'.repeat(7900) + ' Preserve the final user restriction.';
  state.messages.push({ id: 'user-update', from: 'user', to: 'manager', text, status: 'queued' });
  state.messages.push({
    id: 'private-peer',
    from: 'manager',
    to: 'developer-1',
    text: 'Private assignment.',
    status: 'queued',
  });
  const first = delivery.read(state, 'qa', fullReport);
  assert.deepEqual(first.messageIds, ['user-update']);
  assert.equal(first.context.messages?.[0]?.text, text);
  assert.equal(first.context.messages?.[0]?.reference, '/messages/0');
  state.messages[0]!.status = 'delivered';
  state.members[2]!.status = 'inProgress';
  state.members[2]!.totalTokens = 1000;
  const unchanged = delivery.read(state, 'qa', fullReport);
  assert.equal(unchanged.context.kind, 'unchanged');
  assert.equal(unchanged.context.cursor, first.context.cursor);
  assert.equal(unchanged.context.messages, undefined);
  assert.ok(JSON.stringify(unchanged.context).length < 300);
  const restored = delivery.read(state, 'qa', fullReport, 'snapshot');
  assert.equal(restored.context.kind, 'snapshot');
  assert.equal(restored.context.messages, undefined);
  assert.equal(restored.context.messageIndex?.[0]?.id, 'user-update');
  assert.equal(delivery.message(state, 'qa', 'user-update', fullReport).message.text, text);
  assert.throws(() => delivery.message(state, 'qa', 'private-peer', fullReport), /unavailable/);
  assert.deepEqual(delivery.read(state, 'manager', fullReport).messageIds, ['user-update']);
  state.messages.push({
    id: 'new-update',
    from: 'user',
    to: 'manager',
    text: 'New scope.',
    status: 'queued',
  });
  const update = delivery.read(state, 'qa', fullReport);
  assert.deepEqual(update.messageIds, ['new-update']);
  assert.equal(update.context.kind, 'changes');
});

test('rich report summaries stay bounded, expose every omission and emit each appended report once', () => {
  const state = contextFixture(),
    delivery = new TeamContextDelivery(),
    fullReport = '/project/state.json';
  state.reviews = Array.from({ length: 4 }, (_, revision) => ({
    revision,
    phase: 'code_review',
    digest: 'source',
    report: {
      decision: 'revise',
      summary: 's'.repeat(800),
      findings: Array.from({ length: 20 }, () => 'f'.repeat(300)),
    },
  }));
  state.qa = [
    {
      revision: 1,
      digest: 'source',
      report: {
        decision: 'fail',
        summary: 's'.repeat(800),
        checks: Array.from({ length: 20 }, () => ({
          name: 'n'.repeat(160),
          status: 'failed',
          evidence: 'e'.repeat(300),
        })),
      },
    },
  ];
  const compact = compactTeamContext(state, 'qa', fullReport);
  assert.ok(JSON.stringify(compact).length < 8000);
  assert.equal(compact.omitted.reviews, 2);
  assert.equal(compact.reviews[0]?.reference, '/reviews/2/report');
  assert.equal(compact.reviews[0]?.omittedFindings, 17);
  assert.equal(compact.reviews[0]?.truncatedFindings, true);
  assert.equal(compact.qa[0]?.omittedChecks, 16);
  assert.equal(compact.qa[0]?.checks[0]?.truncated, true);
  delivery.read(state, 'qa', fullReport);
  state.reviews.push({ ...state.reviews[3]!, revision: 2 });
  const changed = delivery.read(state, 'qa', fullReport).context as Record<string, unknown>;
  assert.equal((changed.reviews as { reference: string }[]).length, 1);
  assert.equal((changed.reviews as { reference: string }[])[0]?.reference, '/reviews/4/report');
  assert.equal(changed.qa, undefined);
  assert.equal(delivery.read(state, 'qa', fullReport).context.kind, 'unchanged');
});
