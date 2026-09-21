import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { rm } from 'node:fs/promises';
import { fixture } from '../fixtures/project.ts';
import { writeJson, readJson } from '../../packages/core/src/fs.ts';
import { PanelService } from '../../packages/core/src/panel.ts';
import { TeamService } from '../../packages/core/src/team.ts';
import { workPreferences, resolveWorkRequest } from '../../packages/core/src/work-preferences.ts';
import { teamStartSchema, recordedExecutionMode } from '../../packages/core/src/team-schema.ts';
import { roleInstructions } from '../../packages/core/src/team-runner.ts';
import { taskBriefing } from '../../packages/core/src/team-context.ts';

async function setup(t: import('node:test').TestContext) {
  const { ctx } = await fixture(),
    previous = process.env.APEXREST_HOME;
  process.env.APEXREST_HOME = path.join(ctx.root, '.apexrest/managed');
  await writeJson(path.join(process.env.APEXREST_HOME, 'policy.json'), {
    schemaVersion: 1,
    trustedProjects: [ctx.root],
    grants: [],
  });
  t.after(async () => {
    if (previous === undefined) delete process.env.APEXREST_HOME;
    else process.env.APEXREST_HOME = previous;
    await rm(ctx.root, { recursive: true, force: true });
  });
  return {
    ctx,
    panel: new PanelService(ctx.root),
    file: path.join(ctx.root, '.apexrest/panel/preferences.json'),
  };
}

test('fresh, missing-mode and ambiguous legacy team preferences resolve to single without rewriting history', async (t) => {
  const { ctx, file } = await setup(t);
  for (const legacy of [
    undefined,
    {},
    { developers: 3 },
    { executionMode: 'team', developers: 3, browserMode: 'external' },
  ]) {
    if (legacy) await writeJson(file, legacy);
    const request = await resolveWorkRequest(ctx.root, { task: 'Inspect source', developers: 3 });
    assert.equal(request.executionMode, 'single');
    assert.equal(request.developers, 1);
    assert.equal((await workPreferences(ctx.root)).multiAgentEnabled, false);
    if (legacy) assert.deepEqual(await readJson(file), legacy);
  }
  assert.match(roleInstructions('developer-1'), /only implementation agent/);
});

test('launch options and developer count cannot grant multi-agent opt-in', async (t) => {
  const { ctx, panel } = await setup(t);
  const request = { task: 'Inspect source', executionMode: 'team' as const, developers: 3 };
  await assert.rejects(resolveWorkRequest(ctx.root, request), { code: 'MULTI_AGENT_DISABLED' });
  await assert.rejects(new TeamService(ctx).start(request), { code: 'MULTI_AGENT_DISABLED' });
  await assert.rejects(panel.act({ kind: 'start', request }), { code: 'MULTI_AGENT_DISABLED' });
  await assert.rejects(panel.act({ kind: 'preferences', settings: { executionMode: 'team' } }), {
    code: 'MULTI_AGENT_DISABLED',
  });
  assert.equal(teamStartSchema.safeParse({ ...request, multiAgentEnabled: true }).success, false);
});

test('explicit settings opt-in survives partial updates and can be revoked for every new launch', async (t) => {
  const { ctx, panel } = await setup(t);
  await panel.act({
    kind: 'preferences',
    settings: { executionMode: 'team', multiAgentEnabled: true, developers: 2 },
  });
  await panel.act({ kind: 'preferences', settings: { browserMode: 'external' } });
  const request = await resolveWorkRequest(ctx.root, { task: 'Inspect source' });
  assert.equal(request.executionMode, 'team');
  assert.equal(request.developers, 2);
  assert.equal(request.browserMode, 'external');
  assert.equal(
    (await resolveWorkRequest(ctx.root, { task: 'Inspect source', executionMode: 'single' })).developers,
    1,
  );
  await panel.act({ kind: 'preferences', settings: { multiAgentEnabled: false } });
  assert.equal((await resolveWorkRequest(ctx.root, { task: 'Inspect source' })).executionMode, 'single');
  await assert.rejects(resolveWorkRequest(ctx.root, { task: 'Inspect source', executionMode: 'team' }), {
    code: 'MULTI_AGENT_DISABLED',
  });
});

test('invalid persisted opt-in fails closed and historical teams remain labelled accurately', async (t) => {
  const { ctx, file } = await setup(t);
  await writeJson(file, { executionMode: 'team', multiAgentEnabled: 'true' });
  await assert.rejects(workPreferences(ctx.root));
  assert.equal(recordedExecutionMode({}), 'single');
  assert.equal(recordedExecutionMode({ members: [{ role: 'manager' }] }), 'team');
  assert.equal(recordedExecutionMode({ reviews: [{}] }), 'team');
  assert.equal(recordedExecutionMode({ executionMode: 'single' }), 'single');
});

test('task briefing sends full constraints once per session and retains durable recovery pointers', () => {
  const briefing = taskBriefing(
    'Full user task with authorization constraints',
    '/project/.apexrest/teams/run',
  );
  assert.equal(briefing.next('developer-1').task, 'Full user task with authorization constraints');
  briefing.rememberPlan('developer-1');
  const repeat = briefing.next('developer-1', 'Agent-authored plan');
  assert.equal(repeat.task, undefined);
  assert.equal(repeat.plan, undefined);
  assert.match(repeat.taskFile, /request.json$/);
  assert.match(repeat.planFile, /plan.json$/);
  const independent = briefing.next('qa', 'Acceptance criteria');
  assert.equal(independent.task, 'Full user task with authorization constraints');
  assert.equal(independent.plan, 'Acceptance criteria');
  assert.equal(briefing.next('qa', 'Acceptance criteria').plan, undefined);
});
