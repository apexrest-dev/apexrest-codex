import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { rm } from 'node:fs/promises';
import childProcess from 'node:child_process';
import { syncBuiltinESMExports } from 'node:module';
import { fixture } from '../fixtures/project.ts';
import { writeJson } from '../../packages/core/src/fs.ts';
import { startWork, waitForTeam } from '../../packages/core/src/work.ts';
import { TeamService } from '../../packages/core/src/team.ts';
import { PanelService } from '../../packages/core/src/panel.ts';
import { openVerificationBrowser } from '../../packages/core/src/browser.ts';

async function setup(t: import('node:test').TestContext) {
  const { ctx } = await fixture();
  ctx.config.environments.dev!.baseUrl = 'http://127.0.0.1:8080/ords/r/demo/home';
  const previous = process.env.APEXREST_HOME;
  process.env.APEXREST_HOME = path.join(ctx.root, '.apexrest/managed');
  await writeJson(path.join(process.env.APEXREST_HOME, 'policy.json'), {
    schemaVersion: 1,
    trustedProjects: [ctx.root],
    grants: [],
  });
  const spawn = t.mock.method(childProcess, 'spawn', () => {
    throw new Error('Unexpected worker spawn');
  });
  syncBuiltinESMExports();
  t.after(async () => {
    spawn.mock.restore();
    syncBuiltinESMExports();
    if (previous === undefined) delete process.env.APEXREST_HOME;
    else process.env.APEXREST_HOME = previous;
    await rm(ctx.root, { recursive: true, force: true });
  });
  return { ctx, spawn, team: new TeamService(ctx) };
}

test('single chat start and exact retry use the current session without any spawned process or panel', async (t) => {
  const { ctx, spawn, team } = await setup(t);
  const input = { requestId: randomUUID(), task: 'Add a focused help note.' };
  const panel = async (): Promise<never> => {
    throw new Error('Unexpected panel open');
  };
  const first = await startWork(ctx, input, panel);
  assert.equal(first.executionHost, 'current_session');
  assert.ok('projectContext' in first);
  assert.equal(first.projectContext.sourceDirectories.apex, ctx.config.application.sourceDir);
  assert.equal(first.status, 'current_session');
  assert.equal(first.panel.status, 'not_requested');
  assert.match(first.nextAction, /directly in this Codex chat/);
  const directory = await team.directory(first.teamId);
  const state = await team.status(first.teamId);
  assert.deepEqual(state.members, []);
  assert.deepEqual(state.reviews, []);
  assert.equal(state.completedDigest, undefined);
  await writeJson(path.join(directory, 'state.json'), { ...state, updatedAt: new Date(0).toISOString() });
  await writeJson(path.join(ctx.root, '.apexrest/panel/preferences.json'), {
    executionMode: 'team',
    multiAgentEnabled: true,
  });
  const retry = await startWork(ctx, input, panel);
  assert.equal(retry.executionHost, 'current_session');
  assert.equal(retry.status, 'current_session');
  await assert.rejects(startWork(ctx, { ...input, task: 'Changed task' }, panel), {
    code: 'WORK_REQUEST_CONFLICT',
  });
  const waiting = await waitForTeam(ctx, { id: first.teamId, cursor: first.cursor, waitSeconds: 1 });
  assert.equal(waiting.terminal, true);
  assert.equal(waiting.team.status, 'current_session');
  assert.equal(spawn.mock.callCount(), 0);
  await writeJson(path.join(directory, 'state.json'), { ...state, status: 'cancelled' });
  const cancelled = await startWork(ctx, input, panel);
  assert.equal(cancelled.status, 'cancelled');
  assert.match(cancelled.nextAction, /do not resume/);
});

test('direct CLI/MCP and panel starts cannot create a single worker and preserve request constraints', async (t) => {
  const { ctx, team, spawn } = await setup(t);
  const direct = await team.start({ task: 'Inspect only', sandbox: 'read-only', browserMode: 'external' });
  assert.equal(direct.executionHost, 'current_session');
  assert.equal(direct.browserMode, 'external');
  assert.match(direct.nextAction, /read-only/);
  const panel = await new PanelService(ctx.root).act({ kind: 'start', request: { task: 'Add note' } });
  assert.equal((panel as typeof direct).executionHost, 'current_session');
  assert.equal(spawn.mock.callCount(), 0);
});

test('current-session browser override works without changing saved preferences', async (t) => {
  const { ctx } = await setup(t);
  await writeJson(path.join(ctx.root, '.apexrest/panel/preferences.json'), { browserMode: 'external' });
  const result = await openVerificationBrowser(
    ctx,
    'dev',
    async (): Promise<never> => {
      throw new Error('Unexpected external browser');
    },
    'codex',
  );
  assert.equal(result.browserMode, 'codex');
  assert.equal(result.verified, false);
  assert.equal((await new PanelService(ctx.root).preferences()).browserMode, 'external');
});
