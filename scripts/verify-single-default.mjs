// Local CLI/MCP/settings/browser checks only. No model sessions or database access.
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { randomUUID } from 'node:crypto';
import { chromium, expect } from '@playwright/test';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { sourceDigest } from './lib/release.mjs';

await mkdir('.apexrest/check-logs', { recursive: true });
const harness = path.resolve('.apexrest/single-default-harness.mjs');
await build({
  stdin: {
    contents: [
      "export { fixture } from './tests/fixtures/project.ts';",
      "export { writeJson } from './packages/core/src/fs.ts';",
      "export { startPanelServer } from './packages/core/src/panel-server.ts';",
      "export { taskBriefing } from './packages/core/src/team-context.ts';",
      "export { TeamService } from './packages/core/src/team.ts';",
      "export { waitForTeam, teamProgressCursor } from './packages/core/src/work.ts';",
    ].join('\n'),
    resolveDir: process.cwd(),
  },
  outfile: harness,
  bundle: true,
  packages: 'external',
  platform: 'node',
  format: 'esm',
  target: 'node24',
});
const { fixture, writeJson, startPanelServer, taskBriefing, TeamService, waitForTeam, teamProgressCursor } =
  await import(pathToFileURL(harness));
const { ctx } = await fixture();
process.env.APEXREST_HOME = path.join(ctx.root, '.apexrest/managed');
process.env.APEXREST_RESOURCES = path.resolve('dist/resources');
await writeJson(path.join(process.env.APEXREST_HOME, 'runtime.json'), {
  sqlcl: path.join(ctx.root, 'sqlcl-not-configured'),
});
await writeJson(path.join(process.env.APEXREST_HOME, 'policy.json'), {
  schemaVersion: 1,
  trustedProjects: [ctx.root],
  grants: [],
});
const cli = (...args) => {
  try {
    return JSON.parse(
      execFileSync(
        process.execPath,
        [path.resolve('dist/runtime/apexrest.mjs'), ...args, '--project', ctx.root, '--json'],
        { encoding: 'utf8' },
      ),
    );
  } catch (error) {
    return JSON.parse(error.stdout);
  }
};
const runBrowser = !process.argv.includes('--skip-browser');
const report = {
  timestamp: new Date().toISOString(),
  sourceDigest: await sourceDigest(),
  status: 'running',
  scope:
    'Built CLI and local stdio MCP; deterministic UTF-8 payload measurements. No native Codex model execution, host billing or Oracle evidence.',
  browser: runBrowser ? 'Playwright Chrome, isolated local settings' : 'not run',
  checks: [],
  measurements: {},
};
const bytes = (value) => Buffer.byteLength(JSON.stringify(value), 'utf8');
const reduction = (before, after) => ({
  beforeBytes: before,
  afterBytes: after,
  reductionPercent: Math.round((1 - after / before) * 10000) / 100,
});
const task = 'Task constraint. '.repeat(700),
  plan = 'Acceptance step. '.repeat(200);
for (const revisions of [1, 3]) {
  const briefing = taskBriefing(task, '/project/.apexrest/teams/00000000-0000-4000-8000-000000000000');
  let before = bytes({ task }),
    after = bytes(briefing.next('developer-1'));
  briefing.rememberPlan('developer-1');
  for (let i = 0; i < 2 * revisions; i++) {
    before += bytes({ task, plan });
    after += bytes(briefing.next('developer-1', plan));
  }
  report.measurements['singleAssignment' + revisions + 'Revisions'] = {
    ...reduction(before, after),
    turns: 1 + 2 * revisions,
    scope:
      'Assignment fields only, same synthetic task/plan. Excludes prompts, reports, cached history and host token accounting.',
  };
}
const id = randomUUID(),
  team = new TeamService(ctx);
const state = {
  id,
  executionMode: 'single',
  browserMode: 'codex',
  status: 'running',
  phase: 'development',
  revision: 2,
  updatedAt: new Date().toISOString(),
  result: '',
  diagnostics: [],
  reviews: [],
  qa: [],
  members: [
    {
      role: 'developer-1',
      threadId: 'fixture',
      sessionId: 'fixture',
      status: 'inProgress',
      result: 'Report. '.repeat(300),
    },
  ],
  messages: Array.from({ length: 10 }, (_, i) => ({
    id: String(i),
    from: 'user',
    to: 'developer-1',
    text: 'Constraint. '.repeat(100),
    status: 'delivered',
  })),
  verification: [
    {
      revision: 1,
      digest: 'fixture',
      report: {
        decision: 'fail',
        summary: 'Repair required. '.repeat(80),
        checks: Array.from({ length: 4 }, () => ({
          name: 'Fixture check',
          status: 'failed',
          evidence: 'Observed evidence. '.repeat(80),
        })),
      },
    },
  ],
};
await writeJson(path.join(await team.directory(id), 'state.json'), state);
const oldReply = { cursor: teamProgressCursor(state), terminal: false, team: await team.snapshot(id) };
const newReply = await waitForTeam(ctx, { id, cursor: oldReply.cursor, waitSeconds: 1 });
assert.equal(newReply.unchanged, true);
report.measurements.unchangedWait = reduction(bytes(oldReply), bytes(newReply));
await rm(path.join(ctx.root, '.apexrest/teams'), { recursive: true });
let panel, browser, client;
try {
  assert.equal(cli('panel', 'status').data.preferences.executionMode, 'single');
  for (const args of [
    ['team', 'start', 'Check fixture', '--execution-mode', 'team'],
    ['work', 'start', 'Check fixture', '--request-id', randomUUID(), '--execution-mode', 'team'],
  ]) {
    const result = cli(...args);
    assert.equal(result.diagnostics[0].code, 'MULTI_AGENT_DISABLED');
  }
  report.checks.push('built CLI defaults to single and rejects team/work launch overrides without opt-in');
  client = new Client({ name: 'single-default-check', version: '1.0.0' });
  await client.connect(
    new StdioClientTransport({
      command: process.execPath,
      args: [path.resolve('dist/runtime/apexrest.mjs'), 'mcp'],
      env: { ...process.env },
    }),
  );
  for (const name of ['apexrest_team_start', 'apexrest_work_start']) {
    const response = await client.callTool({
      name,
      arguments: {
        project: ctx.root,
        task: 'Check fixture',
        executionMode: 'team',
        ...(name === 'apexrest_work_start' ? { requestId: randomUUID() } : {}),
      },
    });
    assert.match(JSON.stringify(response.content), /MULTI_AGENT_DISABLED/);
  }
  report.checks.push('built stdio MCP rejects both launch overrides without opt-in');
  if (runBrowser) {
    panel = await startPanelServer(ctx.root);
    const origin = `http://127.0.0.1:${panel.session.port}`,
      url = `${origin}/#session=${panel.session.token}`;
    browser = await chromium.launch({
      headless: true,
      channel: process.env.APEXREST_PANEL_BROWSER_CHANNEL || 'chrome',
    });
    const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(url);
    const ready = async () => {
      await expect(page.locator('#connection')).toHaveText('Live');
      await page.locator('[data-view=settings]').click();
    };
    await ready();
    await expect(page.locator('#default-execution-mode')).toHaveValue('single');
    await page.locator('#new-task').click();
    await expect(page.locator('#task-execution-mode option[value=team]')).toHaveJSProperty('disabled', true);
    await expect(page.locator('#task-developers')).toHaveValue('1');
    await page.locator('#close-task').click();
    report.checks.push('fresh Settings and launch form are single; launch team option disabled');
    const prefsFile = path.join(ctx.root, '.apexrest/panel/preferences.json');
    await writeJson(prefsFile, { executionMode: 'team', developers: 3, browserMode: 'external' });
    await page.reload();
    await ready();
    await expect(page.locator('#default-execution-mode')).toHaveValue('single');
    await expect(page.locator('#default-browser-mode')).toHaveValue('external');
    report.checks.push(
      'legacy team preference displays single while browser/developer preferences are preserved',
    );
    const save = async () => {
      const saved = page.waitForResponse(
        (r) =>
          r.url().endsWith('/api/action') &&
          r.request().method() === 'POST' &&
          r.request().postDataJSON()?.kind === 'preferences',
      );
      await page.locator('#preferences-form button[type=submit]').click();
      const response = await saved;
      assert.equal(response.status(), 200, await response.text());
      await page.reload();
      await ready();
    };
    await page.locator('#default-execution-mode').selectOption('team');
    await save();
    assert.equal(JSON.parse(await readFile(prefsFile, 'utf8')).multiAgentEnabled, true);
    await expect(page.locator('#default-execution-mode')).toHaveValue('team');
    await page.locator('#new-task').click();
    await expect(page.locator('#task-execution-mode option[value=team]')).toHaveJSProperty('disabled', false);
    await expect(page.locator('#task-execution-mode')).toHaveValue('team');
    await page.locator('#close-task').click();
    report.checks.push(
      'explicit Settings selection persists opt-in and enables team option without starting agents',
    );
    await page.locator('#default-execution-mode').selectOption('single');
    await save();
    assert.equal(JSON.parse(await readFile(prefsFile, 'utf8')).multiAgentEnabled, false);
    await page.locator('#new-task').click();
    await expect(page.locator('#task-execution-mode option[value=team]')).toHaveJSProperty('disabled', true);
    await expect(page.locator('#task-developers')).toHaveValue('1');
    await page.locator('#close-task').click();
    report.checks.push('saving single revokes opt-in and disables future team launches');
    await page.screenshot({ path: '.apexrest/check-logs/single-default-settings.png', fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: '.apexrest/check-logs/single-default-mobile.png', fullPage: true });
    assert.deepEqual(errors, []);
    report.checks.push('390px responsive layout and no browser errors');
    if (process.argv.includes('--keep-panel')) {
      await writeJson(path.resolve('.apexrest/single-default-panel.private.json'), {
        project: ctx.root,
        url,
        pid: process.pid,
      });
    }
  }
  report.status = 'passed';
} catch (error) {
  report.status = 'failed';
  throw error;
} finally {
  await client?.close();
  await browser?.close();
  await writeFile(
    runBrowser ? 'docs/evidence/single-default-local.json' : 'docs/evidence/single-default-runtime.json',
    JSON.stringify(report, null, 2) + '\n',
  );
  console.log(JSON.stringify(report, null, 2));
  if (!process.argv.includes('--keep-panel') || report.status !== 'passed') {
    await panel?.close();
    await rm(ctx.root, { recursive: true, force: true });
  }
}
