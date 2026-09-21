import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { writeFile, rm } from 'node:fs/promises';
import { fixture } from '../fixtures/project.ts';
import { writeJson, readJson, withLock } from '../../packages/core/src/fs.ts';
import { executeTeam } from '../../packages/core/src/team-runner.ts';
import { TeamService } from '../../packages/core/src/team.ts';
import { type TeamState } from '../../packages/core/src/team-schema.ts';
import type { connectCodex, RpcObject } from '../../packages/core/src/codex-client.ts';

async function prepared(t: import('node:test').TestContext) {
  const { ctx } = await fixture();
  const previous = process.env.APEXREST_HOME;
  process.env.APEXREST_HOME = path.join(ctx.root, 'managed');
  t.after(async () => {
    if (previous === undefined) delete process.env.APEXREST_HOME;
    else process.env.APEXREST_HOME = previous;
    await rm(ctx.root, { recursive: true, force: true });
  });
  await writeJson(path.join(process.env.APEXREST_HOME, 'policy.json'), {
    schemaVersion: 1,
    trustedProjects: [ctx.root],
    grants: [],
  });
  const id = randomUUID(),
    root = await new TeamService(ctx).directory(id);
  await writeJson(path.join(root, 'request.json'), {
    task: 'Implement a fixture change.',
    executionMode: 'team',
    multiAgentEnabled: true,
    developers: 2,
    timeoutSeconds: 30,
    sandbox: 'workspace-write',
  });
  await writeJson(path.join(root, 'state.json'), {
    id,
    status: 'queued',
    phase: 'queued',
    revision: 0,
    updatedAt: new Date().toISOString(),
    members: [],
    messages: [],
    reviews: [],
    qa: [],
    diagnostics: [],
    result: '',
  } satisfies TeamState);
  return { ctx, id, root };
}

function protocol(
  options: {
    rejectFirst?: boolean;
    qaFail?: boolean;
    malformed?: boolean;
    failedTurn?: boolean;
    sourceEdit?: () => Promise<void>;
    taskUpdate?: () => Promise<void>;
    peer?: boolean;
    sharedSession?: boolean;
    cancelActive?: () => Promise<void>;
    prerequisite?: boolean;
    complexity?: 'simple' | 'standard' | 'complex';
  } = {},
) {
  const calls: string[] = [];
  const starts: RpcObject[] = [];
  const turnRequests: RpcObject[] = [];
  const turns = new Map<string, RpcObject>();
  const roles = new Map<string, string>();
  let reviewerTurns = 0,
    counter = 0,
    peersChecked = false;
  const connect: typeof connectCodex = async (_cwd, notify, toolCall) => ({
    async call(method, params = {}) {
      if (method === 'model/list')
        return {
          data: ['gpt-6-astra', 'gpt-5.6-sol', 'gpt-5.6-luna'].map((model) => ({
            model,
            inputModalities: ['text'],
            isDefault: model === 'gpt-6-astra',
            defaultReasoningEffort: 'high',
            supportedReasoningEfforts: ['low', 'medium', 'high'].map((reasoningEffort) => ({
              reasoningEffort,
            })),
          })),
          nextCursor: null,
        };
      if (method === 'thread/start') {
        const threadId = `thread-${++counter}`;
        const instructions = String(params.developerInstructions);
        roles.set(
          threadId,
          instructions.includes('only implementation agent')
            ? 'single'
            : instructions.includes('single project manager')
              ? 'manager'
              : instructions.includes('independent QA')
                ? 'qa'
                : 'developer',
        );
        starts.push(params);
        return {
          thread: {
            id: threadId,
            sessionId: options.sharedSession ? 'shared-session' : threadId + '-session',
          },
        };
      }
      const threadId = String(params.threadId),
        role = roles.get(threadId)!;
      if (method === 'turn/start') {
        turnRequests.push(params);
        calls.push(role);
        let output = 'Implemented fixture and inspected source.';
        if (role === 'manager') {
          reviewerTurns++;
          if (reviewerTurns > 1)
            output = JSON.stringify({
              decision: options.rejectFirst && reviewerTurns === 2 ? 'revise' : 'approve',
              summary: 'Reviewed the actual fixture source.',
              findings: options.rejectFirst && reviewerTurns === 2 ? ['Repair the input check.'] : [],
              revisionCause: options.prerequisite
                ? 'prerequisite'
                : options.rejectFirst && reviewerTurns === 2
                  ? 'implementation'
                  : 'none',
            });
          else
            output = JSON.stringify({
              plan: 'Developer 1: inputs. Developer 2: outputs. QA: validate behavior.',
              complexity: options.complexity ?? 'standard',
              reason: 'Bounded fixture task.',
            });
        }
        if (
          role === 'single' &&
          (params.outputSchema as { properties?: { plan?: unknown } } | undefined)?.properties?.plan
        )
          output = JSON.stringify({
            plan: 'Implement and verify the fixture.',
            complexity: options.complexity ?? 'standard',
            reason: 'Bounded local change.',
          });
        if (
          role === 'qa' ||
          (role === 'single' &&
            (params.outputSchema as { properties?: { checks?: unknown } } | undefined)?.properties?.checks)
        ) {
          output = options.malformed
            ? 'not a structured QA report'
            : JSON.stringify({
                decision: options.prerequisite ? 'blocked' : options.qaFail ? 'fail' : 'pass',
                summary: 'Independent verification.',
                checks: [
                  {
                    name: 'fixture verification',
                    status: options.prerequisite ? 'not_run' : options.qaFail ? 'failed' : 'passed',
                    evidence: 'Observed fixture result.',
                  },
                ],
              });
          await options.sourceEdit?.();
          if (role === 'single') await options.taskUpdate?.();
        }
        if (role === 'manager' && reviewerTurns === 3) await options.taskUpdate?.();
        const turn = {
          id: 'turn-' + ++counter,
          status: options.failedTurn ? 'failed' : 'completed',
          ...(options.failedTurn
            ? { error: { message: 'Fixture protocol error password=never-show-this' } }
            : {}),
          items: [{ type: 'agentMessage', phase: 'final_answer', text: output }],
        };
        turns.set(threadId, turn);
        await options.cancelActive?.();
        notify('turn/started', { threadId, turn: { id: turn.id, status: 'inProgress' } });
        notify('thread/tokenUsage/updated', {
          threadId,
          tokenUsage: {
            total: {
              totalTokens: 100,
              inputTokens: 80,
              cachedInputTokens: 50,
              outputTokens: 20,
              reasoningOutputTokens: 10,
            },
          },
        });
        if (options.peer && role === 'developer' && !peersChecked) {
          peersChecked = true;
          const common = { threadId, turnId: turns.get(threadId)!.id };
          const roster = await toolCall!({ ...common, tool: 'team_context', arguments: {} });
          assert.equal(roster.success, true);
          const message = await toolCall!({
            ...common,
            tool: 'team_message',
            arguments: { recipient: 'qa', message: 'Check boundary input.' },
          });
          assert.equal(message.success, true);
          await assert.rejects(
            toolCall!({ ...common, threadId: 'unrelated', tool: 'team_context', arguments: {} }),
          );
        }
        notify('item/completed', { threadId, turnId: turn.id, item: turn.items[0] });
        notify('turn/completed', { threadId, turn: { ...turn, items: [] } });
        return { turn: { id: turn.id, status: 'inProgress' } };
      }
      if (method === 'turn/steer' || method === 'turn/interrupt' || method === 'thread/name/set') return {};
      throw new Error('Unexpected fixture call: ' + method);
    },
    async close() {
      if (options.peer) {
        const threadId = [...roles].find(([, role]) => role === 'developer')![0];
        await assert.rejects(
          toolCall!({
            threadId,
            turnId: turns.get(threadId)!.id,
            tool: 'team_message',
            arguments: { recipient: 'qa', message: 'Late message.' },
          }),
        );
      }
      calls.push('closed');
    },
  });
  return { connect, calls, starts, turnRequests };
}

test('fixed team always runs developers, manager review, independent QA and final manager review in separate sessions', async (t) => {
  const { ctx, id } = await prepared(t);
  const mock = protocol({ peer: true });
  const result = await executeTeam(ctx, id, mock.connect);
  assert.equal(result.status, 'completed');
  assert.deepEqual(mock.calls, ['manager', 'developer', 'developer', 'manager', 'qa', 'manager', 'closed']);
  assert.equal(new Set(result.members.map((m) => m.sessionId)).size, 4);
  assert.deepEqual(
    result.members.map((m) => m.name),
    ['Mewtwo', 'Pikachu', 'Charmander', 'Squirtle'],
  );
  assert.deepEqual(
    mock.starts.map((p) => p.sandbox),
    ['read-only', 'workspace-write', 'workspace-write', 'read-only'],
  );
  assert.ok(mock.starts.every((p) => (p.config as RpcObject)['agents.enabled'] === false));
  assert.equal(result.messages[0]?.status, 'delivered');
  assert.ok(result.observations?.some((o) => o.kind === 'team_context'));
  assert.ok(mock.turnRequests.every((r) => r.model === 'gpt-5.6-sol' && r.effort === 'medium'));
  assert.ok(result.members.every((m) => m.totalTokens === 100 && m.tokenUsage?.cachedInputTokens === 50));
  assert.equal(result.reviews.length, 2);
  assert.equal(result.qa.length, 1);
  assert.ok(result.reviews.every((r) => r.digest === result.approvedDigest));
  await assert.rejects(executeTeam(ctx, id, mock.connect), { code: 'TEAM_ALREADY_STARTED' });
});

test('manager revision request forces new development and fresh review before QA', async (t) => {
  const { ctx, id } = await prepared(t);
  const mock = protocol({ rejectFirst: true });
  const result = await executeTeam(ctx, id, mock.connect);
  assert.equal(result.status, 'completed');
  assert.equal(result.revision, 2);
  assert.deepEqual(mock.calls, [
    'manager',
    'developer',
    'developer',
    'manager',
    'developer',
    'developer',
    'manager',
    'qa',
    'manager',
    'closed',
  ]);
});

test('simple developer uses fast/low while both mandatory reviewer roles stay balanced/medium', async (t) => {
  const { ctx, id } = await prepared(t);
  const mock = protocol({ complexity: 'simple' });
  const result = await executeTeam(ctx, id, mock.connect);
  assert.equal(result.status, 'completed');
  assert.equal(result.members.find((m) => m.role === 'developer-1')?.selection?.model, 'gpt-5.6-luna');
  assert.equal(result.members.find((m) => m.role === 'qa')?.selection?.effort, 'medium');
  assert.deepEqual(
    result.reviews.map((r) => r.phase),
    ['code_review', 'final_review'],
  );
});

test('two failed implementation cycles escalate subsequent turns without changing sessions or approvals', async (t) => {
  const { ctx, id } = await prepared(t);
  const mock = protocol({ qaFail: true });
  const result = await executeTeam(ctx, id, mock.connect);
  assert.equal(result.status, 'review_failed');
  assert.equal(mock.starts.length, 4);
  assert.ok(mock.turnRequests.some((r) => r.model === 'gpt-6-astra' && r.effort === 'high'));
  assert.equal(result.reviews.length, 6);
  assert.ok(mock.starts.every((r) => r.approvalPolicy === 'never'));
});

test('blocked prerequisites do not escalate model strength or bypass QA', async (t) => {
  const { ctx, id } = await prepared(t);
  const mock = protocol({ prerequisite: true });
  const result = await executeTeam(ctx, id, mock.connect);
  assert.equal(result.status, 'review_failed');
  assert.equal(result.modelPolicy?.repairFailures, 0);
  assert.ok(mock.turnRequests.every((r) => r.model === 'gpt-5.6-sol'));
});

test('manager approval cannot bypass failed QA; manager reviews each QA report and retries are bounded', async (t) => {
  const { ctx, id } = await prepared(t);
  const mock = protocol({ qaFail: true });
  const result = await executeTeam(ctx, id, mock.connect);
  assert.equal(result.status, 'review_failed');
  assert.equal(result.revision, 3);
  assert.equal(result.qa.length, 3);
  assert.equal(result.reviews.length, 6);
  assert.equal(result.approvedDigest, undefined);
});

test('malformed QA output fails closed without final approval', async (t) => {
  const { ctx, id } = await prepared(t);
  const mock = protocol({ malformed: true });
  const result = await executeTeam(ctx, id, mock.connect);
  assert.equal(result.status, 'blocked');
  assert.equal(result.approvedDigest, undefined);
});

test('changing reviewed source during QA invalidates the review', async (t) => {
  const { ctx, id } = await prepared(t);
  const mock = protocol({
    sourceEdit: () => writeFile(path.join(ctx.root, 'src/apex/app/application.apx'), 'changed after review'),
  });
  const result = await executeTeam(ctx, id, mock.connect);
  assert.equal(result.status, 'blocked');
  assert.match(result.diagnostics.join(' '), /Source changed/);
  assert.equal(result.approvedDigest, undefined);
});

test('user steering during final review invalidates approval and is included in the next revision', async (t) => {
  const { ctx, id } = await prepared(t);
  const mock = protocol({
    taskUpdate: async () => {
      await new TeamService(ctx).message(id, 'Also check empty input.');
    },
  });
  const result = await executeTeam(ctx, id, mock.connect);
  assert.equal(result.status, 'completed');
  assert.equal(result.revision, 2);
  assert.equal(result.messages[0]?.from, 'user');
  assert.equal(result.messages[0]?.status, 'delivered');
});

test('queued cancellation prevents any model turn and expired workers are not reported as running', async (t) => {
  const { ctx, id, root } = await prepared(t);
  const mock = protocol();
  await new TeamService(ctx).cancel(id);
  assert.equal((await executeTeam(ctx, id, mock.connect)).status, 'cancelled');
  assert.deepEqual(mock.calls, []);
  const state = (await readJson(path.join(root, 'state.json'))) as TeamState;
  await writeJson(path.join(root, 'state.json'), {
    ...state,
    status: 'running',
    updatedAt: new Date(0).toISOString(),
  });
  assert.equal((await new TeamService(ctx).status(id)).status, 'outcome_unknown');
  await assert.rejects(new TeamService(ctx).message(id, 'Do not retry.'), { code: 'TEAM_FINISHED' });
});

test('a busy project blocks another queued team without replaying or replacing the active team', async (t) => {
  const { ctx, id } = await prepared(t);
  const mock = protocol();
  await withLock(path.join(ctx.root, '.apexrest/team.lock'), async () => {
    assert.equal((await executeTeam(ctx, id, mock.connect)).status, 'blocked');
    assert.deepEqual(mock.calls, []);
  });
});

test('approved results become stale after an untracked source or configuration change', async (t) => {
  const { ctx, id } = await prepared(t);
  assert.equal((await executeTeam(ctx, id, protocol().connect)).status, 'completed');
  await writeFile(path.join(ctx.root, 'new-config.json'), '{}');
  const snapshot = await new TeamService(ctx).snapshot(id);
  assert.equal(snapshot.status, 'review_stale');
});

test('role identity reuse fails closed before any model turn', async (t) => {
  const { ctx, id } = await prepared(t);
  const mock = protocol({ sharedSession: true });
  const state = await executeTeam(ctx, id, mock.connect);
  assert.equal(state.status, 'blocked');
  assert.match(state.diagnostics.join(' '), /separate Codex sessions/);
  assert.deepEqual(mock.calls, ['closed']);
});

test('active cancellation stops the workflow without accepting an approval', async (t) => {
  const { ctx, id } = await prepared(t);
  const mock = protocol({
    cancelActive: async () => {
      await new TeamService(ctx).cancel(id);
    },
  });
  const state = await executeTeam(ctx, id, mock.connect);
  assert.equal(state.status, 'cancelled');
  assert.equal(state.approvedDigest, undefined);
  assert.deepEqual(mock.calls, ['manager', 'closed']);
});

async function preparedSingle(t: import('node:test').TestContext) {
  const f = await prepared(t);
  await writeJson(path.join(f.root, 'request.json'), {
    task: 'Implement a fixture change.',
    executionMode: 'single',
    browserMode: 'external',
    developers: 3,
    timeoutSeconds: 30,
  });
  return f;
}

test('single mode creates exactly one session for planning, implementation and verification with full activity', async (t) => {
  const { ctx, id } = await preparedSingle(t);
  const mock = protocol();
  const result = await executeTeam(ctx, id, mock.connect);
  assert.equal(result.status, 'completed');
  assert.equal(mock.starts.length, 1);
  assert.deepEqual(mock.calls, ['single', 'single', 'single', 'closed']);
  assert.equal(result.members.length, 1);
  assert.equal(result.members[0]?.tokenUsage?.totalTokens, 100);
  assert.equal(result.executionMode, 'single');
  assert.equal(result.browserMode, 'external');
  assert.equal(result.reviews.length, 0);
  assert.equal(result.qa.length, 0);
  assert.equal(result.verification?.[0]?.digest, result.completedDigest);
  assert.equal(result.approvedDigest, undefined);
  assert.ok(result.observations?.length);
  assert.match(
    String(mock.starts[0]?.developerInstructions),
    /Interactive APEX verification browser: external/,
  );
  assert.deepEqual(
    (mock.starts[0]?.dynamicTools as { name: string }[]).map((t) => t.name),
    ['team_context'],
  );
  assert.equal((mock.starts[0]?.config as RpcObject)['agents.enabled'], false);
  await writeFile(path.join(ctx.root, 'new-source.txt'), 'changed');
  assert.equal((await new TeamService(ctx).snapshot(id)).status, 'result_stale');
});

test('single verification failures cannot complete and repairs keep the same session', async (t) => {
  const { ctx, id } = await preparedSingle(t);
  const mock = protocol({ qaFail: true });
  const result = await executeTeam(ctx, id, mock.connect);
  assert.equal(result.status, 'verification_failed');
  assert.equal(result.revision, 3);
  assert.equal(mock.starts.length, 1);
  assert.equal(result.completedDigest, undefined);
});

test('single mode reports unavailable checks without pretending an independent QA pass', async (t) => {
  const { ctx, id } = await preparedSingle(t);
  const result = await executeTeam(ctx, id, protocol({ prerequisite: true }).connect);
  assert.equal(result.status, 'blocked');
  assert.equal(result.verification?.[0]?.report.checks[0]?.status, 'not_run');
  assert.equal(result.completedDigest, undefined);
});

test('single mode includes late user steering in a fresh revision and delivers it to the sole agent', async (t) => {
  const { ctx, id } = await preparedSingle(t);
  let sent = false;
  const mock = protocol({
    taskUpdate: async () => {
      if (!sent) {
        sent = true;
        await new TeamService(ctx).message(id, 'Also check empty input.');
      }
    },
  });
  const result = await executeTeam(ctx, id, mock.connect);
  assert.equal(result.status, 'completed');
  assert.equal(result.revision, 2);
  assert.equal(result.messages[0]?.to, 'developer-1');
  assert.equal(result.messages[0]?.status, 'delivered');
  assert.equal(mock.starts.length, 1);
});

test('single mode refuses source drift during verification and honours active cancellation', async (t) => {
  const { ctx, id } = await preparedSingle(t);
  let revision = 0;
  const result = await executeTeam(
    ctx,
    id,
    protocol({ sourceEdit: () => writeFile(path.join(ctx.root, 'drift.txt'), String(++revision)) }).connect,
  );
  assert.equal(result.status, 'verification_failed');
  assert.equal(result.completedDigest, undefined);
});

test('single active cancellation prevents completion', async (t) => {
  const { ctx, id } = await preparedSingle(t);
  const result = await executeTeam(
    ctx,
    id,
    protocol({
      cancelActive: async () => {
        await new TeamService(ctx).cancel(id);
      },
    }).connect,
  );
  assert.equal(result.status, 'cancelled');
  assert.equal(result.completedDigest, undefined);
});

test('single malformed verification blocks completion', async (t) => {
  const { ctx, id } = await preparedSingle(t);
  const result = await executeTeam(ctx, id, protocol({ malformed: true }).connect);
  assert.equal(result.status, 'blocked');
  assert.equal(result.completedDigest, undefined);
});

test('native turn failures retain a redacted diagnostic for the dashboard', async (t) => {
  const { ctx, id } = await preparedSingle(t);
  const result = await executeTeam(ctx, id, protocol({ failedTurn: true }).connect);
  assert.equal(result.status, 'blocked');
  assert.match(result.diagnostics.join(' '), /Fixture protocol error/);
  assert.ok(!JSON.stringify(result.diagnostics).includes('never-show-this'));
  assert.ok(result.observations?.some((o) => o.kind === 'turnError'));
});

test('queued legacy defaults launch one agent and unproven explicit team queues cannot dispatch sessions', async (t) => {
  const { ctx, id, root } = await prepared(t);
  await writeJson(path.join(root, 'request.json'), {
    task: 'Check fixture',
    developers: 3,
    timeoutSeconds: 30,
  });
  const mock = protocol();
  assert.equal((await executeTeam(ctx, id, mock.connect)).status, 'completed');
  assert.equal(mock.starts.length, 1);
  assert.deepEqual(mock.calls, ['single', 'single', 'single', 'closed']);
  const before = (await readJson(path.join(root, 'state.json'))) as TeamState;
  await writeJson(path.join(root, 'state.json'), { ...before, status: 'queued', members: [] });
  await writeJson(path.join(root, 'request.json'), { task: 'Check fixture', executionMode: 'team' });
  const denied = protocol();
  const result = await executeTeam(ctx, id, denied.connect);
  assert.equal(result.status, 'blocked');
  assert.match(result.diagnostics.join(' '), /Settings opt-in/);
  assert.equal(denied.starts.length, 0);
});

test('persistent sessions receive the assignment only once while live updates and review gates remain', async (t) => {
  const { ctx, id, root } = await preparedSingle(t);
  const task = 'UNIQUE_FULL_TASK_CONSTRAINTS';
  await writeJson(path.join(root, 'request.json'), { task, timeoutSeconds: 30 });
  const mock = protocol({ qaFail: true });
  assert.equal((await executeTeam(ctx, id, mock.connect)).status, 'verification_failed');
  const prompts = mock.turnRequests.map((r) => JSON.stringify(r.input));
  assert.equal(prompts.filter((text) => text.includes(task)).length, 1);
  assert.equal(prompts.length, 7);
  assert.ok(prompts.every((text) => text.includes('request.json') && text.includes('plan.json')));
  assert.ok(prompts.slice(3).some((text) => text.includes('Required repairs')));
});
