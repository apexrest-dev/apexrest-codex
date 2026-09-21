import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { rm } from 'node:fs/promises';
import { fixture } from '../fixtures/project.ts';
import { writeJson, readJson } from '../../packages/core/src/fs.ts';
import { startWork, waitForTeam, teamProgressCursor } from '../../packages/core/src/work.ts';
import { TeamService } from '../../packages/core/src/team.ts';
import { teamStartSchema, type TeamRequest, type TeamState } from '../../packages/core/src/team-schema.ts';

async function setup(t: import('node:test').TestContext) {
  const { ctx } = await fixture(),
    previous = process.env.APEXREST_HOME;
  process.env.APEXREST_HOME = path.join(ctx.root, '.apexrest', 'managed');
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
  const team = new TeamService(ctx),
    requestId = randomUUID();
  const state: TeamState = {
    id: requestId,
    status: 'queued',
    phase: 'queued',
    revision: 0,
    updatedAt: new Date().toISOString(),
    members: [],
    reviews: [],
    qa: [],
    messages: [],
    result: '',
    diagnostics: [],
  };
  let starts = 0;
  // Historical worker snapshots keep retry/wait compatibility coverage.
  const fake = {
    directory: team.directory.bind(team),
    snapshot: team.snapshot.bind(team),
    async start(request: TeamRequest, id: string = requestId) {
      starts++;
      state.executionMode = request.executionMode ?? 'single';
      state.browserMode = request.browserMode ?? 'codex';
      const directory = await team.directory(id);
      await writeJson(path.join(directory, 'request.json'), request);
      await writeJson(path.join(directory, 'state.json'), state);
      return {
        teamId: id,
        executionHost: 'worker' as const,
        executionMode: state.executionMode,
        browserMode: state.browserMode,
        status: 'queued',
        nextAction: 'Wait.',
      };
    },
  };
  const input = {
    requestId,
    task: 'Add a help note.',
    developers: 1,
    sandbox: 'workspace-write' as const,
    timeoutSeconds: 120,
  };
  const panel = async () => ({
    project: ctx.root,
    url: 'http://127.0.0.1:1234/#session=private-capability',
    nextAction: 'Open.',
  });
  return { ctx, team, state, fake, input, panel, starts: () => starts };
}

test('chat start creates one team, selects it in the private panel and exact retry reuses it', async (t) => {
  const f = await setup(t);
  const first = await startWork(f.ctx, f.input, f.panel, f.fake);
  const retry = await startWork(f.ctx, f.input, f.panel, f.fake);
  assert.equal(f.starts(), 1);
  assert.equal(first.teamId, retry.teamId);
  const hash = new URLSearchParams(new URL(first.panel.url!).hash.slice(1));
  assert.equal(hash.get('team'), first.teamId);
  assert.equal(hash.get('view'), 'team');
  assert.equal(hash.get('session'), 'private-capability');
  await assert.rejects(startWork(f.ctx, { ...f.input, task: 'Different task' }, f.panel, f.fake), {
    code: 'WORK_REQUEST_CONFLICT',
  });
});

test('panel failure returns the started team and cannot trigger duplicate implementation', async (t) => {
  const f = await setup(t),
    panel = async () => {
      throw new Error('Display unavailable.');
    };
  const result = await startWork(f.ctx, f.input, panel, f.fake);
  assert.equal(result.panel.status, 'unavailable');
  assert.equal(result.teamId, f.input.requestId);
  await startWork(f.ctx, f.input, f.panel, f.fake);
  assert.equal(f.starts(), 1);
});

test('reusing a completed chat request checks its approval digest before reporting completion', async (t) => {
  const f = await setup(t);
  await startWork(f.ctx, f.input, f.panel, f.fake);
  await writeJson(path.join(f.ctx.root, '.apexrest/teams', f.state.id, 'state.json'), {
    ...f.state,
    status: 'completed',
    approvedDigest: 'outdated',
  });
  const result = await startWork(f.ctx, f.input, f.panel, f.fake);
  assert.equal(result.status, 'result_stale');
  assert.equal(f.starts(), 1);
});

test('wait ignores heartbeat and tool-only changes and returns meaningful progress or a terminal result', async (t) => {
  const f = await setup(t);
  // Public snapshots retain only ten messages. Waiting must use a cursor that
  // stays stable when a long conversation is clipped for transport.
  f.state.messages = Array.from({ length: 12 }, (_, i) => ({
    id: String(i),
    from: 'manager',
    to: 'qa',
    text: 'Evidence available.',
    status: 'delivered',
  }));
  const started = await startWork(f.ctx, f.input, f.panel, f.fake);
  const cursor = teamProgressCursor(f.state);
  assert.equal(started.cursor, cursor);
  assert.equal(teamProgressCursor({ ...f.state, updatedAt: new Date(0).toISOString() } as TeamState), cursor);
  const member = {
    role: 'manager' as const,
    status: 'inProgress',
    threadId: 'm',
    sessionId: 'm',
    result: '',
  };
  assert.equal(
    teamProgressCursor({ ...f.state, members: [member] }),
    teamProgressCursor({
      ...f.state,
      members: [
        {
          ...member,
          currentAction: { id: 'new-tool', kind: 'commandExecution', title: 'Check source', startedAt: '' },
        },
      ],
    }),
  );
  const timer = setTimeout(() => {
    void writeJson(path.join(f.ctx.root, '.apexrest/teams', f.state.id, 'state.json'), {
      ...f.state,
      status: 'running',
      phase: 'planning',
    });
  }, 100);
  t.after(() => clearTimeout(timer));
  const next = await waitForTeam(f.ctx, { id: f.state.id, cursor, waitSeconds: 1 });
  assert.equal(next.terminal, false);
  assert.equal(next.team.phase, 'planning');
  assert.notEqual(next.cursor, cursor);
  await writeJson(path.join(f.ctx.root, '.apexrest/teams', f.state.id, 'state.json'), {
    ...f.state,
    status: 'blocked',
    diagnostics: ['Missing setup.'],
  });
  const result = await waitForTeam(f.ctx, { id: f.state.id, cursor: next.cursor, waitSeconds: 1 });
  assert.equal(result.terminal, true);
  assert.equal(result.team.status, 'blocked');
});

test('chat inherits saved preferences and exact retries retain their original mode after settings change', async (t) => {
  const f = await setup(t);
  const file = path.join(f.ctx.root, '.apexrest/panel/preferences.json');
  await writeJson(file, {
    executionMode: 'single',
    browserMode: 'external',
    developers: 3,
    sandbox: 'read-only',
    timeoutSeconds: 300,
  });
  const input = { requestId: f.input.requestId, task: f.input.task };
  assert.equal(teamStartSchema.parse({ task: input.task }).developers, undefined);
  const first = await startWork(f.ctx, input, f.panel, f.fake);
  assert.equal(first.executionMode, 'single');
  assert.equal(first.browserMode, 'external');
  const saved = (await readJson(
    path.join(await f.team.directory(first.teamId), 'request.json'),
  )) as TeamRequest;
  assert.equal(saved.developers, 1);
  assert.equal(saved.sandbox, 'read-only');
  assert.equal(saved.timeoutSeconds, 300);
  await writeJson(file, { executionMode: 'team', browserMode: 'codex' });
  const retry = await startWork(f.ctx, input, f.panel, f.fake);
  assert.equal(retry.executionMode, 'single');
  assert.equal(f.starts(), 1);
  await assert.rejects(startWork(f.ctx, { ...input, executionMode: 'team' }, f.panel, f.fake), {
    code: 'WORK_REQUEST_CONFLICT',
  });
});

test('explicit launch options override preferences without silently resetting other saved options', async (t) => {
  const f = await setup(t);
  await writeJson(path.join(f.ctx.root, '.apexrest/panel/preferences.json'), {
    executionMode: 'single',
    multiAgentEnabled: true,
    browserMode: 'external',
    timeoutSeconds: 300,
  });
  await startWork(
    f.ctx,
    { requestId: f.input.requestId, task: f.input.task, executionMode: 'team', developers: 2 },
    f.panel,
    f.fake,
  );
  const saved = (await readJson(
    path.join(await f.team.directory(f.input.requestId), 'request.json'),
  )) as TeamRequest;
  assert.equal(saved.executionMode, 'team');
  assert.equal(saved.developers, 2);
  assert.equal(saved.browserMode, 'external');
  assert.equal(saved.timeoutSeconds, 300);
});

test('chat launch cannot override disabled multi-agent settings or create a duplicate on rejection', async (t) => {
  const f = await setup(t);
  await assert.rejects(startWork(f.ctx, { ...f.input, executionMode: 'team' }, f.panel, f.fake), {
    code: 'MULTI_AGENT_DISABLED',
  });
  assert.equal(f.starts(), 0);
  assert.equal((await startWork(f.ctx, f.input, f.panel, f.fake)).executionMode, 'single');
});

test('unchanged waits omit histories but terminal waits retain diagnostics and verified stale-state checks', async (t) => {
  const f = await setup(t);
  f.state.members = [
    {
      role: 'developer-1',
      threadId: 'agent',
      sessionId: 'session',
      status: 'inProgress',
      result: 'x'.repeat(4000),
    },
  ];
  const started = await startWork(f.ctx, f.input, f.panel, f.fake);
  const idle = await waitForTeam(f.ctx, { id: f.state.id, cursor: started.cursor, waitSeconds: 1 });
  assert.equal(idle.unchanged, true);
  assert.equal('members' in idle.team, false);
  assert.equal('reviews' in idle.team, false);
  assert.ok(idle.team.fullReport);
  await writeJson(path.join(await f.team.directory(f.state.id), 'state.json'), {
    ...f.state,
    status: 'completed',
    completedDigest: 'stale',
  });
  const result = await waitForTeam(f.ctx, { id: f.state.id, cursor: started.cursor, waitSeconds: 1 });
  assert.equal(result.terminal, true);
  assert.equal(result.unchanged, false);
  assert.equal(result.team.status, 'result_stale');
  assert.ok('diagnostics' in result.team && result.team.diagnostics.length > 0);
});

test('an exact retry preserves an explicitly enabled team after settings revoke future team starts', async (t) => {
  const f = await setup(t);
  const preferences = path.join(f.ctx.root, '.apexrest/panel/preferences.json');
  await writeJson(preferences, { executionMode: 'team', multiAgentEnabled: true });
  const started = await startWork(f.ctx, f.input, f.panel, f.fake);
  assert.equal(started.executionMode, 'team');
  await writeJson(preferences, { executionMode: 'single', multiAgentEnabled: false });
  assert.equal((await startWork(f.ctx, f.input, f.panel, f.fake)).executionMode, 'team');
  assert.equal(f.starts(), 1);
});
