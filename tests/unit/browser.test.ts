import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { rm } from 'node:fs/promises';
import { fixture } from '../fixtures/project.ts';
import { writeJson } from '../../packages/core/src/fs.ts';
import { openVerificationBrowser, externalBrowserCommand } from '../../packages/core/src/browser.ts';
import { PanelService } from '../../packages/core/src/panel.ts';
import { resolveWorkRequest } from '../../packages/core/src/work-preferences.ts';

async function setup(t: import('node:test').TestContext) {
  const { ctx } = await fixture();
  const before = process.env.APEXREST_HOME;
  process.env.APEXREST_HOME = path.join(ctx.root, '.apexrest/managed');
  await writeJson(path.join(process.env.APEXREST_HOME, 'policy.json'), {
    schemaVersion: 1,
    trustedProjects: [ctx.root],
    grants: [],
  });
  ctx.config.environments.dev!.baseUrl = 'http://127.0.0.1:8080/ords/r/demo/home';
  t.after(async () => {
    if (before === undefined) delete process.env.APEXREST_HOME;
    else process.env.APEXREST_HOME = before;
    await rm(ctx.root, { recursive: true, force: true });
  });
  return { ctx, panel: new PanelService(ctx.root) };
}

test('legacy preferences retain defaults and saved modes drive all request resolution', async (t) => {
  const { ctx, panel } = await setup(t);
  assert.equal((await panel.preferences()).executionMode, 'team');
  assert.equal((await panel.preferences()).browserMode, 'codex');
  await panel.act({
    kind: 'preferences',
    settings: { executionMode: 'single', browserMode: 'external', developers: 3 },
  });
  const request = await resolveWorkRequest(ctx.root, { task: 'Check the source.' });
  assert.equal(request.executionMode, 'single');
  assert.equal(request.browserMode, 'external');
  assert.equal(request.developers, 1);
  assert.equal((await panel.snapshot()).preferences.browserMode, 'external');
});

test('Codex browser route requires a host action and never launches a system browser or claims verification', async (t) => {
  const { ctx } = await setup(t);
  const result = await openVerificationBrowser(ctx, 'dev', async () => {
    throw new Error('Unexpected external launch');
  });
  assert.equal(result.status, 'host_action_required');
  assert.equal(result.browserMode, 'codex');
  assert.equal(result.verified, false);
  assert.equal(result.url, ctx.config.environments.dev!.baseUrl);
});

test('external browser selection dispatches the exact configured target and reports launch failure', async (t) => {
  const { ctx, panel } = await setup(t);
  await panel.act({ kind: 'preferences', settings: { browserMode: 'external' } });
  let launched = '';
  const result = await openVerificationBrowser(ctx, 'dev', async (options) => {
    launched = JSON.stringify(options);
    return { code: 0, stdout: '', stderr: '', timedOut: false, cancelled: false, truncated: false };
  });
  assert.equal(result.status, 'opened');
  assert.equal(result.verified, false);
  assert.ok(launched.includes(ctx.config.environments.dev!.baseUrl));
  await assert.rejects(
    openVerificationBrowser(ctx, 'dev', async () => ({
      code: 1,
      stdout: '',
      stderr: '',
      timedOut: false,
      cancelled: false,
      truncated: false,
    })),
    { code: 'BROWSER_OPEN_FAILED' },
  );
});

test('browser mode is pinned for active workers and invalid targets are never launched', async (t) => {
  const { ctx, panel } = await setup(t);
  const worker = process.env.APEXREST_TEAM_WORKER,
    mode = process.env.APEXREST_BROWSER_MODE;
  process.env.APEXREST_TEAM_WORKER = '1';
  process.env.APEXREST_BROWSER_MODE = 'codex';
  t.after(() => {
    if (worker === undefined) delete process.env.APEXREST_TEAM_WORKER;
    else process.env.APEXREST_TEAM_WORKER = worker;
    if (mode === undefined) delete process.env.APEXREST_BROWSER_MODE;
    else process.env.APEXREST_BROWSER_MODE = mode;
  });
  await panel.act({ kind: 'preferences', settings: { browserMode: 'external' } });
  const result = await openVerificationBrowser(ctx, 'dev');
  assert.equal(result.browserMode, 'codex');
  ctx.config.environments.dev!.baseUrl = 'file:///etc/passwd';
  await assert.rejects(openVerificationBrowser(ctx, 'dev'), { code: 'ORIGIN_DENIED' });
  await assert.rejects(openVerificationBrowser(ctx, 'missing'), { code: 'UNKNOWN_ENVIRONMENT' });
});

test('external URL launch uses separate arguments and quotes Windows literals', () => {
  const url = "https://example.com/ords?p=1&x='$(anything)`";
  assert.deepEqual(externalBrowserCommand(url, 'darwin'), { executable: '/usr/bin/open', args: [url] });
  assert.deepEqual(externalBrowserCommand(url, 'linux'), { executable: 'xdg-open', args: [url] });
  assert.equal(
    externalBrowserCommand(url, 'win32').args.at(-1),
    "Start-Process -FilePath 'https://example.com/ords?p=1&x=''$(anything)`'",
  );
});
