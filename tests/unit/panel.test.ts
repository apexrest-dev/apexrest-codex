import test from 'node:test';
import { request } from 'node:http';
import assert from 'node:assert/strict';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { rm, symlink, mkdtemp, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { fixture } from '../fixtures/project.ts';
import { writeJson } from '../../packages/core/src/fs.ts';
import { PanelService } from '../../packages/core/src/panel.ts';
import { startPanelServer, panelDocument } from '../../packages/core/src/panel-server.ts';
import { panelLines } from '../../packages/cli/src/panel-tui.ts';
import { teamIdentities } from '../../packages/core/src/team-identity.ts';
import { schemas } from '../../packages/core/src/operations.ts';

async function setup(t: import('node:test').TestContext, trusted = true) {
  const { ctx } = await fixture(),
    before = process.env.APEXREST_HOME;
  process.env.APEXREST_HOME = path.join(ctx.root, 'managed');
  await writeJson(path.join(process.env.APEXREST_HOME, 'policy.json'), {
    schemaVersion: 1,
    trustedProjects: trusted ? [ctx.root] : [],
    grants: [],
  });
  t.after(async () => {
    if (before === undefined) delete process.env.APEXREST_HOME;
    else process.env.APEXREST_HOME = before;
    await rm(ctx.root, { recursive: true, force: true });
  });
  return { ctx, service: new PanelService(ctx.root) };
}
test('panel preserves failed results and unknown workers, redacts secrets and reports effective settings', async (t) => {
  const { ctx, service } = await setup(t);
  const failed = randomUUID(),
    stale = randomUUID();
  await writeJson(path.join(ctx.root, '.apexrest/jobs', failed, 'state.json'), {
    status: 'completed',
    updatedAt: new Date().toISOString(),
    result: { operation: 'apex.validate', status: 'failed', summary: 'password=hidden' },
  });
  await writeJson(path.join(ctx.root, '.apexrest/jobs', stale, 'state.json'), {
    operation: 'test.run',
    status: 'running',
    updatedAt: new Date(0).toISOString(),
  });
  const s = await service.snapshot();
  assert.equal(s.jobs.find((j) => j.id === failed)?.status, 'failed');
  assert.equal(s.jobs.find((j) => j.id === stale)?.status, 'outcome_unknown');
  assert.ok(!JSON.stringify(s).includes('hidden'));
  assert.deepEqual(s.permissions.activeGrants, []);
  assert.equal(s.configuration?.environments.dev?.applicationId, 123);
  assert.ok(panelLines(s, 2).some((line) => line.includes('failed')));
});
test('panel trust and action allowlist cannot be bypassed; saved preferences round-trip without granting trust', async (t) => {
  const { ctx, service } = await setup(t, false);
  await assert.rejects(
    service.act({
      kind: 'preferences',
      settings: { developers: 2, sandbox: 'read-only', timeoutSeconds: 120 },
    }),
    /trust/i,
  );
  await writeJson(path.join(process.env.APEXREST_HOME!, 'policy.json'), {
    schemaVersion: 1,
    trustedProjects: [ctx.root],
    grants: [],
  });
  await service.act({
    kind: 'preferences',
    settings: { developers: 2, sandbox: 'read-only', timeoutSeconds: 120 },
  });
  assert.equal((await service.snapshot()).preferences.developers, 2);
  await assert.rejects(service.snapshot('../outside'), /Invalid/);
});
test('panel saves plugin ORDS settings, preserves direct connections, and never returns passwords', async (t) => {
  const { service } = await setup(t);
  await service.act({ kind: 'connection', name: 'dev-read', sqlclName: 'direct-read' });
  const result = await service.act({
    kind: 'connection',
    name: 'dev-read',
    ordsUrl: 'https://example.test/ords/app/',
    ordsUsername: 'app',
    password: 'local-test-secret',
  });
  await service.act({
    kind: 'sqlcl',
    settings: { schemaVersion: 1, mode: 'cli', databaseTransport: 'ords', mcpRestrictLevel: '4' },
  });
  const snapshot = await service.snapshot();
  assert.equal(snapshot.sqlcl.databaseTransport, 'ords');
  assert.equal(snapshot.connections['dev-read']?.name, 'direct-read');
  assert.deepEqual(snapshot.connections['dev-read']?.ords, {
    url: 'https://example.test/ords/app/',
    username: 'app',
  });
  assert.doesNotMatch(JSON.stringify({ result, snapshot }), /local-test-secret/);
  assert.ok(panelLines(snapshot, 3).includes('Database network: ORDS HTTP(S)'));
  await service.act({
    kind: 'connection',
    name: 'dev-read',
    ordsUrl: 'https://example.test/ords/app/',
    ordsUsername: 'app',
  });
  await assert.rejects(
    service.act({
      kind: 'connection',
      name: 'dev-read',
      ordsUrl: 'https://other.test/ords/app/',
      ordsUsername: 'app',
    }),
    /credential|password|match|changed/i,
  );
});
test('panel loads saved SQLcl names only on an explicit trusted action', async (t) => {
  const { ctx } = await setup(t, false);
  let calls = 0;
  let failure = false;
  const saved = { source: 'sqlcl-store', connections: [{ name: 'Dev / Київ' }, { name: 'QA exact name' }] };
  const service = new PanelService(ctx.root, {
    savedConnections: async () => {
      calls++;
      if (failure) throw new Error('SQLcl fixture unavailable');
      return saved;
    },
  });
  assert.equal(
    schemas['panel.action'].safeParse({ project: ctx.root, action: { kind: 'saved-connections' } }).success,
    true,
  );
  assert.equal(
    schemas['panel.action'].safeParse({ action: { kind: 'saved-connections', password: 'forbidden' } })
      .success,
    false,
  );
  await service.snapshot();
  assert.equal(calls, 0);
  await assert.rejects(service.act({ kind: 'saved-connections' }), { code: 'PROJECT_TRUST_REQUIRED' });
  assert.equal(calls, 0);
  await writeJson(path.join(process.env.APEXREST_HOME!, 'policy.json'), {
    schemaVersion: 1,
    trustedProjects: [ctx.root],
    grants: [],
  });
  assert.deepEqual(await service.act({ kind: 'saved-connections' }), saved);
  assert.equal(calls, 1);
  await service.snapshot();
  assert.equal(calls, 1, 'Status polling must not read the SQLcl store');
  failure = true;
  await assert.rejects(service.act({ kind: 'saved-connections' }), /SQLcl fixture unavailable/);
  assert.equal(calls, 2);
});
test('panel HTTP rejects unauthenticated, foreign-origin and unlisted mutations; no arbitrary file serving', async (t) => {
  const { ctx } = await setup(t),
    handle = await startPanelServer(ctx.root);
  t.after(() => handle.close());
  const base = `http://127.0.0.1:${handle.session.port}`,
    headers = { Authorization: 'Bearer ' + handle.session.token };
  assert.equal((await fetch(base + '/api/status')).status, 401);
  assert.equal(
    (await fetch(base + '/api/status', { headers: { ...headers, Origin: 'https://outside.invalid' } }))
      .status,
    403,
  );
  const foreignHost = await new Promise<number | undefined>((resolve, reject) => {
    const req = request(base + '/api/status', { headers: { ...headers, Host: 'outside.invalid' } }, (res) => {
      res.resume();
      resolve(res.statusCode);
    });
    req.on('error', reject);
    req.end();
  });
  assert.equal(foreignHost, 403);
  assert.equal((await fetch(base + '/api/status', { headers })).status, 200);
  assert.equal((await fetch(base + '/apexrest.json', { headers })).status, 404);
  const post = (action: unknown) =>
    fetch(base + '/api/action', {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify(action),
    });
  assert.equal((await post({ kind: 'deploy.apply', approved: true })).status, 400);
  assert.equal((await post({ kind: 'preferences', settings: { developers: 9 } })).status, 400);
  assert.equal(
    (
      await post({
        kind: 'preferences',
        settings: { developers: 3, timeoutSeconds: 120, sandbox: 'read-only' },
      })
    ).status,
    200,
  );
  assert.equal(
    (
      (await (await fetch(base + '/api/status', { headers })).json()) as {
        preferences: { developers: number };
      }
    ).preferences.developers,
    3,
  );
  const html = await fetch(base + '/');
  assert.equal(html.status, 200);
  assert.match(html.headers.get('content-security-policy')!, /frame-ancestors 'self'/);
  assert.ok(!(await html.text()).includes(handle.session.token));
});
test('panel rejects state directory symlinks outside its project', async (t) => {
  const { ctx, service } = await setup(t),
    outside = await mkdtemp(path.join(tmpdir(), 'panel-outside-'));
  t.after(() => rm(outside, { recursive: true, force: true }));
  await mkdir(path.join(ctx.root, '.apexrest'), { recursive: true });
  await symlink(outside, path.join(ctx.root, '.apexrest/teams'));
  await assert.rejects(service.snapshot(), /escape|outside/i);
});
test('bundled MCP panel contains its own assets and all five named agents have distinct identities', async () => {
  const html = await panelDocument();
  assert.ok(!html.includes('src="/panel.js"'));
  assert.ok(!html.includes('href="/panel.css"'));
  assert.ok(html.indexOf('<script>') > html.indexOf('id="task-form"'));
  assert.ok(html.indexOf('<script>') < html.indexOf('</body>'));
  assert.match(html, /data:image\/png;base64/);
  assert.equal(new Set(Object.values(teamIdentities).map((i) => i.name)).size, 5);
});
