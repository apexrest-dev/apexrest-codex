// Browser regression for the built MCP UI resource and a synthetic host bridge.
// No Codex sessions, model calls, Oracle connections or database operations run here.
import assert from 'node:assert/strict';
import path from 'node:path';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { chromium, expect } from '@playwright/test';

const client = new Client({ name: 'panel-bridge-regression', version: '1.0.0' });
let browser;
const checks = [];
try {
  await client.connect(
    new StdioClientTransport({
      command: process.execPath,
      args: [path.resolve('dist/runtime/mcp.mjs')],
      stderr: 'pipe',
    }),
  );
  const resource = await client.readResource({ uri: 'ui://apexrest/development-panel.html' });
  const html = resource.contents[0].text;
  assert.equal(resource.contents[0].mimeType, 'text/html;profile=mcp-app');
  assert.ok(html.includes('apexrest/panelResult'), 'Build the current panel before running this regression.');
  await client.close();
  browser = await chromium.launch({
    headless: true,
    ...(process.env.APEXREST_PANEL_BROWSER_CHANNEL
      ? { channel: process.env.APEXREST_PANEL_BROWSER_CHANNEL }
      : {}),
  });
  for (const mode of ['metadata', 'structuredContent', 'text']) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    page.setDefaultTimeout(10000);
    const errors = [];
    const requests = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.route('**/*', (route) => {
      requests.push(route.request().url());
      return route.abort();
    });
    await page.setContent(
      '<iframe id="panel" title="APEXREST fixture" style="width:100%;height:960px"></iframe>',
    );
    await page.evaluate(
      ({ html, mode }) => {
        const project = '/fixture/embedded-panel';
        const snapshot = {
          version: 'fixture',
          updatedAt: '2026-09-21T00:00:00.000Z',
          project,
          configured: true,
          trusted: true,
          configuration: {
            application: { alias: 'Full bridge snapshot', sourceDir: 'src/apex/app' },
            environments: {},
            tests: { requiredSuites: [], defaultBrowser: 'chromium' },
            artifacts: { directory: '.apexrest/artifacts', retentionDays: 7 },
          },
          sqlcl: { schemaVersion: 1, mode: 'cli', databaseTransport: 'ords', mcpRestrictLevel: '4' },
          preferences: {
            executionMode: 'single',
            browserMode: 'external',
            developers: 1,
            sandbox: 'read-only',
            timeoutSeconds: 120,
          },
          connections: {},
          toolchain: null,
          teams: [],
          team: null,
          jobs: [],
          deployments: [],
          changes: { status: 'available', files: [' M full-snapshot-only.apx'] },
          permissions: { activeGrants: [] },
        };
        const envelope = (data) => ({
          ok: true,
          operation: 'panel.status',
          summary: 'Synthetic panel bridge fixture',
          data,
          diagnostics: [],
          artifacts: [],
          nextActions: [],
        });
        const wrap = (data) => {
          const full = envelope(data);
          const compact = {
            type: 'text',
            text: JSON.stringify(envelope({ project, output: { compacted: true } })),
          };
          if (mode === 'metadata') return { content: [compact], _meta: { 'apexrest/panelResult': full } };
          if (mode === 'structuredContent') return { content: [compact], structuredContent: full };
          return { content: [{ type: 'text', text: JSON.stringify(full) }] };
        };
        window.fixtureCalls = [];
        const iframe = document.getElementById('panel');
        window.addEventListener('message', (event) => {
          if (event.source !== iframe.contentWindow || event.data?.jsonrpc !== '2.0') return;
          const message = event.data;
          const send = (value) => event.source.postMessage({ jsonrpc: '2.0', ...value }, '*');
          if (message.method === 'ui/initialize') send({ id: message.id, result: {} });
          else if (message.method === 'ui/notifications/initialized') {
            // Metadata/structured notifications establish project context themselves.
            // Older text-only hosts provide it in the standard tool-input event.
            if (mode === 'text')
              send({ method: 'ui/notifications/tool-input', params: { arguments: { project } } });
            send({ method: 'ui/notifications/tool-result', params: wrap({ project }) });
          } else if (message.method === 'tools/call') {
            window.fixtureCalls.push(message.params);
            if (message.params.name === 'apexrest_panel_status')
              send({ id: message.id, result: wrap(snapshot) });
            else if (
              message.params.name === 'apexrest_panel_action' &&
              message.params.arguments.action?.kind === 'preferences'
            ) {
              snapshot.preferences = message.params.arguments.action.settings;
              send({ id: message.id, result: wrap({ status: 'saved' }) });
            } else send({ id: message.id, error: { code: -32601, message: 'Unexpected fixture action' } });
          }
        });
        iframe.srcdoc = html;
      },
      { html, mode },
    );
    const panel = page.frameLocator('#panel');
    try {
      await expect(panel.locator('#connection')).toHaveText('Live');
      await expect(panel.locator('#project-name')).toHaveText('Full bridge snapshot');
      await expect(panel.locator('#project-path')).toHaveText('/fixture/embedded-panel');
      await expect(panel.locator('#overview-live')).toContainText('full-snapshot-only.apx');
      await panel.locator('[data-view=settings]').click();
      await expect(panel.locator('#default-execution-mode')).toHaveValue('single');
      await expect(panel.locator('#default-browser-mode')).toHaveValue('external');
      await expect(panel.locator('#connection-ords-password')).toBeDisabled();
      await panel.locator('#default-execution-mode').selectOption('team');
      await panel.locator('#preferences-form button[type=submit]').click();
      await expect(panel.locator('#notice')).toHaveText('Settings saved for future runs.');
      await expect(panel.locator('#preferences-form button[type=submit]')).toBeEnabled();
      await expect(panel.locator('#settings-live')).toContainText('Agent team');
      const calls = await page.evaluate(() => window.fixtureCalls);
      assert.ok(calls.filter((call) => call.name === 'apexrest_panel_status').length >= 2);
      const actions = calls.filter((call) => call.name === 'apexrest_panel_action');
      assert.equal(actions.length, 1);
      assert.equal(actions[0].arguments.action.settings.executionMode, 'team');
      assert.ok(calls.every((call) => call.arguments.project === '/fixture/embedded-panel'));
      assert.deepEqual(errors, []);
      assert.deepEqual(requests, []);
      checks.push({ mode, rendering: 'passed', preferencesAction: 'passed', localOnly: true });
    } catch (error) {
      throw new Error(`Bridge mode: ${mode}; page errors: ${JSON.stringify(errors)}`, { cause: error });
    } finally {
      await page.close();
    }
  }
  console.log(
    JSON.stringify({
      scope:
        'Built MCP panel in local Chromium with fixture host bridge; no native-host, model or Oracle evidence.',
      checks,
      status: 'passed',
    }),
  );
} finally {
  await client.close();
  await browser?.close();
}
