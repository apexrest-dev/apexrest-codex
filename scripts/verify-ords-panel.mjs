// Exercise built panel assets and real local settings persistence with synthetic credentials.
// This never connects to Oracle or ORDS and is not Codex native-host evidence.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { chmod, mkdtemp, mkdir, readFile, realpath, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium, expect } from '@playwright/test';
import { sourceDigest } from './lib/release.mjs';

const keepPanel = process.argv.includes('--keep-panel');
const outputIndex = process.argv.indexOf('--output');
const reportFile =
  outputIndex >= 0
    ? process.argv[outputIndex + 1]
    : process.argv.includes('--connections')
      ? 'docs/evidence/connection-settings-local.json'
      : 'docs/evidence/ords-panel-local.json';
const directory = await realpath(await mkdtemp(path.join(tmpdir(), 'apexrest-ords-panel-')));
const project = path.join(directory, 'project');
const home = path.join(directory, 'managed');
const json = async (file, data) => {
  await mkdir(path.dirname(file), { recursive: true, mode: 0o700 });
  await writeFile(file, JSON.stringify(data, null, 2) + '\n', { mode: 0o600 });
};
await json(path.join(project, 'apexrest.json'), {
  schemaVersion: 1,
  projectId: 'ords-panel-verification',
  application: { sourceDir: 'src/apex/app', alias: 'ords-panel-verification' },
  database: { migrationsDir: 'src/db/migrations', packagesDir: 'src/db/packages', testsDir: 'tests/sql' },
  toolchain: { lockFile: 'toolchain.json' },
  environments: {
    dev: {
      kind: 'development',
      readConnectionRef: 'panel-read',
      deployConnectionRef: 'panel-deploy',
      workspace: 'PANEL_FIXTURE',
      parsingSchema: 'PANEL_FIXTURE',
      applicationId: 912345,
      baseUrl: 'https://example.invalid/ords/',
      databaseIdentity: { dbUniqueName: 'fixture', serviceName: 'fixture' },
    },
  },
  tests: {
    unitDir: 'tests/unit',
    apiDir: 'tests/api',
    e2eDir: 'tests/e2e',
    requiredSuites: ['sql', 'e2e'],
    defaultBrowser: 'chromium',
    mutationAllowedEnvironments: ['dev'],
  },
  artifacts: { directory: '.apexrest/artifacts', retentionDays: 7 },
});
await json(path.join(home, 'policy.json'), { schemaVersion: 1, trustedProjects: [project], grants: [] });
await json(path.join(home, 'sqlcl.json'), {
  schemaVersion: 1,
  mode: 'cli',
  mcpRestrictLevel: '1',
  databaseTransport: 'direct',
});
await json(path.join(home, 'connections.json'), {
  'panel-read': { kind: 'sqlcl-store', name: 'preserved-direct-read' },
});
// A deterministic local SQLcl process fixture exposes only connection names.
// It never opens a database; the real native SQLcl check is recorded separately.
const savedStore = path.join(directory, 'saved-store.json');
const listCalls = path.join(directory, 'saved-list-calls.txt');
const sqlcl = path.join(directory, 'sqlcl-fixture');
await json(savedStore, { names: ['Development / Київ', 'Read only', '<sample>'] });
await writeFile(
  sqlcl,
  `#!${process.execPath}
const fs = require('node:fs');
let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  fs.appendFileSync(${JSON.stringify(listCalls)}, 'list\\n');
  if (!input.includes('connmgr list -flat') || !process.argv.includes('/nolog')) process.exit(2);
  const state = JSON.parse(fs.readFileSync(${JSON.stringify(savedStore)}, 'utf8'));
  const marker = input.match(/prompt (APEXREST_CONNECTIONS_[a-f0-9]+)_BEGIN/)[1];
  if (state.error) { console.error('SP2-0001: fixture store unavailable'); process.exit(1); }
  console.log(marker + '_BEGIN\\n' + state.names.join('\\n') + '\\n' + marker + '_END');
});
`,
);
await chmod(sqlcl, 0o700);
await json(path.join(home, 'runtime.json'), { sqlcl });
const worker = spawn(
  process.execPath,
  [path.resolve('dist/runtime/apexrest.mjs'), '--panel-worker', project],
  {
    cwd: directory,
    env: { ...process.env, APEXREST_HOME: home, APEXREST_RESOURCES: path.resolve('dist/resources') },
    detached: true,
    stdio: 'ignore',
  },
);
worker.unref();
const evidence = {
  timestamp: new Date().toISOString(),
  sourceDigest: await sourceDigest(),
  scope:
    'Built local panel in Playwright Chrome; real loopback settings persistence with synthetic credentials. No Oracle/ORDS requests, import/export, or Codex native-host claim.',
  status: 'running',
  checks: [],
};
let browser;
try {
  let session;
  for (let attempt = 0; attempt < 100 && !session; attempt++) {
    try {
      session = JSON.parse(await readFile(path.join(project, '.apexrest/panel/session.json'), 'utf8'));
    } catch {
      await delay(100);
    }
  }
  assert.ok(session, 'The built panel worker must start');
  const origin = `http://127.0.0.1:${session.port}`;
  const url = `${origin}/#session=${session.token}`;
  const snapshot = async () => {
    const response = await fetch(`${origin}/api/status`, {
      headers: { Authorization: `Bearer ${session.token}` },
    });
    assert.equal(response.status, 200);
    return response.json();
  };
  browser = await chromium.launch({
    headless: true,
    channel: process.env.APEXREST_PANEL_BROWSER_CHANNEL || 'chrome',
  });
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  const errors = [],
    remoteRequests = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('request', (request) => {
    if (new URL(request.url()).origin !== origin) remoteRequests.push(new URL(request.url()).origin);
  });
  const openSettings = async () => {
    if (page.url().startsWith(origin + '/')) await page.reload();
    else await page.goto(url);
    await page.locator('#connection').filter({ hasText: 'Live' }).waitFor();
    await page.locator('[data-view=settings]').click();
  };
  const submit = async (form, status = 200) => {
    const saved = page.waitForResponse(
      (response) => response.url().endsWith('/api/action') && response.request().method() === 'POST',
    );
    await page.locator(`#${form} button[type=submit]`).click();
    assert.equal((await saved).status(), status);
    await expect(page.locator(`#${form} button[type=submit]`)).toBeEnabled();
  };
  const chooseReference = async () => {
    await page.locator('#connection-ref').fill('panel-read');
    await page.locator('#connection-ref').press('Tab');
    await expect(page.locator('#connection-direct')).toHaveValue('preserved-direct-read');
  };
  await openSettings();
  await expect(page.locator('#sqlcl-mode')).toHaveValue('cli');
  await expect(page.locator('#saved-connections-status')).toHaveAttribute('data-state', 'loaded');
  await expect(page.locator('#connection-direct')).toHaveValue('');
  assert.deepEqual(
    await page
      .locator('#connection-direct option')
      .evaluateAll((options) => options.filter((o) => o.value).map((o) => o.value)),
    ['Development / Київ', 'Read only', '<sample>'],
  );
  await chooseReference();
  await expect(page.locator('#connection-direct option:checked')).toContainText('preserved-direct-read');
  const refreshSaved = async () => {
    const response = page.waitForResponse(
      (r) => r.url().endsWith('/api/action') && r.request().postDataJSON()?.kind === 'saved-connections',
    );
    await page.locator('#saved-connections-refresh').click();
    return response;
  };
  await page.locator('#connection-direct').selectOption('Development / Київ');
  await expect(page.locator('#saved-connections-status')).not.toContainText('current mapping is retained');
  await refreshSaved();
  await expect(page.locator('#connection-direct')).toHaveValue('Development / Київ');
  await submit('connection-form');
  assert.equal((await snapshot()).connections['panel-read'].name, 'Development / Київ');
  await expect(page.locator('#saved-connections-status')).not.toContainText('current mapping is retained');
  await expect(page.locator('#connection-direct option[value="preserved-direct-read"]')).toHaveCount(0);
  await json(savedStore, { names: ['Development / Київ', 'Read only', '<sample>', 'preserved-direct-read'] });
  await refreshSaved();
  await page.locator('#connection-direct').selectOption('preserved-direct-read');
  await submit('connection-form');
  const listed = (await readFile(listCalls, 'utf8')).split('\n').filter(Boolean).length;
  // Three explicit status refreshes must not invoke SQLcl again.
  for (let i = 0; i < 3; i++) {
    await page.locator('#refresh').click();
    await snapshot();
  }
  assert.equal((await readFile(listCalls, 'utf8')).split('\n').filter(Boolean).length, listed);
  await json(savedStore, { names: [] });
  await refreshSaved();
  await expect(page.locator('#saved-connections-status')).toContainText(/No saved/i);
  await expect(page.locator('#connection-direct')).toHaveValue('preserved-direct-read');
  await json(savedStore, { error: true });
  assert.equal((await refreshSaved()).status(), 400);
  await expect(page.locator('#saved-connections-status')).toHaveAttribute('data-state', 'error');
  await expect(page.locator('#connection-direct')).toHaveValue('preserved-direct-read');
  await json(savedStore, { names: ['Development / Київ', 'Read only', '<sample>'] });
  await refreshSaved();
  await expect(page.locator('#saved-connections-status')).toHaveAttribute('data-state', 'loaded');
  evidence.checks.push(
    'saved-sqlcl-selection-and-save',
    'blank-selection-does-not-pick-first-name',
    'unlisted-current-alias-preserved',
    'saved-list-empty-error-retry-preserves-selection',
    'snapshot-refresh-does-not-rerun-sqlcl',
  );
  await page.locator('#sqlcl-transport').selectOption('ords');
  await expect(page.locator('#connection-direct-group')).toBeHidden();
  await expect(page.getByLabel('Database username', { exact: true })).toBeVisible();
  await expect(page.getByLabel('Database password', { exact: true })).toBeVisible();
  await expect(page.locator('#connection-ords-group')).toContainText(/database/i);
  await expect(page.locator('#sqlcl-mode')).toHaveValue('cli');
  await expect(page.locator('#sqlcl-mode option[value=mcp]')).toHaveJSProperty('disabled', true);
  await submit('sqlcl-form');
  await openSettings();
  await expect(page.locator('#sqlcl-transport')).toHaveValue('ords');
  await expect(page.locator('#sqlcl-mode')).toHaveValue('cli');
  assert.equal((await snapshot()).sqlcl.mcpRestrictLevel, '1');
  evidence.checks.push(
    'ords-switch-persists-and-forces-cli-with-mcp-disabled',
    'existing-mcp-restriction-preserved',
  );

  const password = `synthetic-only-${randomUUID()}`;
  await chooseReference();
  await page.locator('#connection-ords-url').fill('https://example.invalid/ords/panel/');
  await page.locator('#connection-ords-user').fill('panel-user');
  await page.locator('#connection-ords-password').fill(password);
  assert.equal(await page.locator('#connection-ords-password').getAttribute('type'), 'password');
  await submit('connection-form');
  await expect(page.locator('#connection-ords-password')).toHaveValue('');
  const publicState = await snapshot();
  assert.ok(!JSON.stringify(publicState).includes(password));
  assert.ok(!(await page.content()).includes(password));
  assert.deepEqual(publicState.connections['panel-read'], {
    kind: 'sqlcl-store',
    name: 'preserved-direct-read',
    ords: { url: 'https://example.invalid/ords/panel/', username: 'panel-user' },
  });
  const credentialFile = path.join(home, 'credentials/panel-read.json');
  assert.equal(JSON.parse(await readFile(credentialFile, 'utf8')).password, password);
  if (process.platform !== 'win32') assert.equal((await stat(credentialFile)).mode & 0o077, 0);
  evidence.checks.push(
    'masked-password-saved-only-in-private-plugin-store',
    'password-absent-from-snapshot-and-dom-after-save',
    'direct-alias-preserved-with-ords-settings',
  );
  await openSettings();
  await chooseReference();
  await expect(page.locator('#connection-ords-url')).toHaveValue('https://example.invalid/ords/panel/');
  await expect(page.locator('#connection-ords-user')).toHaveValue('panel-user');
  await expect(page.locator('#connection-ords-password')).toHaveValue('');
  await submit('connection-form');
  assert.equal(JSON.parse(await readFile(credentialFile, 'utf8')).password, password);
  evidence.checks.push('reference-metadata-reloads-without-secret', 'blank-password-preserves-same-identity');
  await page.locator('#connection-ords-url').fill('https://other.invalid/ords/panel/');
  await submit('connection-form', 400);
  assert.equal((await snapshot()).connections['panel-read'].ords.url, 'https://example.invalid/ords/panel/');
  evidence.checks.push('changed-endpoint-requires-new-password-without-reusing-credentials');

  await page.locator('#connection-ords-password').fill('hidden-unsaved-password');
  await page.locator('#sqlcl-transport').selectOption('direct');
  const directSave = page.waitForRequest(
    (request) => request.url().endsWith('/api/action') && request.postDataJSON()?.kind === 'connection',
  );
  await submit('connection-form');
  assert.deepEqual((await directSave).postDataJSON(), {
    kind: 'connection',
    name: 'panel-read',
    sqlclName: 'preserved-direct-read',
  });
  assert.equal((await snapshot()).connections['panel-read'].ords.url, 'https://example.invalid/ords/panel/');
  assert.equal(JSON.parse(await readFile(credentialFile, 'utf8')).password, password);
  evidence.checks.push('direct-save-does-not-submit-hidden-ords-edits-or-password');

  await openSettings();
  await page.locator('#sqlcl-transport').selectOption('direct');
  await expect(page.locator('#sqlcl-mode option[value=mcp]')).toHaveJSProperty('disabled', false);
  await submit('sqlcl-form');
  await openSettings();
  await expect(page.locator('#sqlcl-transport')).toHaveValue('direct');
  await expect(page.locator('#sqlcl-mode')).toHaveValue('cli');
  assert.equal((await snapshot()).connections['panel-read'].name, 'preserved-direct-read');
  await expect(page.locator('#connection-ords-group')).toBeHidden();
  await expect(page.locator('#connection-direct-group')).toBeVisible();
  evidence.checks.push(
    'switch-back-to-direct-preserves-connection-mappings',
    'only-selected-transport-fields-visible',
    'database-credential-labels-and-help',
  );
  await chooseReference();
  await mkdir('.apexrest/check-logs', { recursive: true });
  await page.screenshot({ path: '.apexrest/check-logs/ords-settings-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await page.locator('#sqlcl-transport').selectOption('ords');
  await submit('sqlcl-form');
  await page.screenshot({ path: '.apexrest/check-logs/ords-settings-mobile.png', fullPage: true });
  evidence.checks.push('390px-responsive-layout-and-settings-save');
  assert.deepEqual(remoteRequests, []);
  assert.deepEqual(errors, []);
  evidence.checks.push('no-remote-browser-requests', 'no-page-errors');
  if (keepPanel)
    await json('.apexrest/ords-panel-session.private.json', {
      directory,
      project,
      home,
      panel: { url, pid: session.pid },
    });
  evidence.status = 'passed';
} catch (error) {
  evidence.status = 'failed';
  throw error;
} finally {
  await browser?.close();
  if (!keepPanel || evidence.status !== 'passed') {
    try {
      process.kill(worker.pid, 'SIGTERM');
    } catch {
      /* Already exited. */
    }
    await rm(directory, { recursive: true, force: true });
  }
  await mkdir('docs/evidence', { recursive: true });
  await writeFile(reportFile, JSON.stringify(evidence, null, 2) + '\n');
  console.log(JSON.stringify(evidence, null, 2));
}
