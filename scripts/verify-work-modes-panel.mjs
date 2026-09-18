// Exercise the real local panel for a completed native run. No Oracle or SSO claim.
import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '@playwright/test';
import { sourceDigest } from './lib/release.mjs';
const mode = process.argv[2] ?? 'single';
const session = JSON.parse(await readFile(`.apexrest/${mode}-native-session.private.json`, 'utf8'));
const browser = await chromium.launch({
  headless: true,
  ...(process.env.APEXREST_PANEL_BROWSER_CHANNEL
    ? { channel: process.env.APEXREST_PANEL_BROWSER_CHANNEL }
    : {}),
});
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
const evidence = {
  timestamp: new Date().toISOString(),
  sourceDigest: await sourceDigest(),
  scope:
    'Local Chromium/Playwright rendering and actual panel HTTP settings persistence. Not Codex in-app control or Google SSO.',
  executionMode: mode,
  status: 'running',
  checks: [],
};
try {
  await page.goto(session.panel.url);
  await page.locator('#connection').filter({ hasText: 'Live' }).waitFor();
  await page.locator('[data-view=settings]').click();
  for (const executionMode of ['team', 'single'])
    for (const browserMode of ['codex', 'external']) {
      await page.locator('#default-execution-mode').selectOption(executionMode);
      await page.locator('#default-browser-mode').selectOption(browserMode);
      assert.equal(await page.locator('#default-developers').isDisabled(), executionMode === 'single');
      const saved = page.waitForResponse(
        (response) => response.url().endsWith('/api/action') && response.request().method() === 'POST',
      );
      await page.locator('#preferences-form button[type=submit]').click();
      assert.equal((await saved).status(), 200);
      await page.reload();
      await page.locator('#connection').filter({ hasText: 'Live' }).waitFor();
      await page.locator('[data-view=settings]').click();
      assert.equal(await page.locator('#default-execution-mode').inputValue(), executionMode);
      assert.equal(await page.locator('#default-browser-mode').inputValue(), browserMode);
      await page.locator('#new-task').click();
      assert.equal(await page.locator('#task-execution-mode').inputValue(), executionMode);
      assert.equal(await page.locator('#task-browser-mode').inputValue(), browserMode);
      assert.equal(await page.locator('#task-developers').isDisabled(), executionMode === 'single');
      await page.locator('#close-task').click();
      evidence.checks.push(`saved-and-reloaded-${executionMode}-${browserMode}`);
    }
  await mkdir('.apexrest/check-logs', { recursive: true });
  await page.screenshot({ path: `.apexrest/check-logs/${mode}-settings.png`, fullPage: true });
  await page.locator('[data-view=team]').click();
  const native = JSON.parse(
    await readFile(path.join(session.project, '.apexrest/teams', session.teamId, 'state.json'), 'utf8'),
  );
  assert.equal(native.executionMode, mode);
  assert.equal(await page.locator('#team-live .agent').count(), native.members.length);
  assert.equal(await page.locator('#team-live .step').count(), mode === 'single' ? 3 : 5);
  assert.ok(
    (await page.locator('#team-live').innerText()).includes(
      mode === 'single' ? 'Agent verification' : 'Independent QA',
    ),
  );
  assert.ok((await page.locator('#team-live').innerText()).includes('completed'));
  assert.ok(
    (await page.locator('#metrics').innerText()).includes(
      mode === 'single' ? 'Single-agent checks' : 'Manager + independent QA',
    ),
  );
  evidence.checks.push(
    'native-roster-phases-completion-and-verification-rendered',
    'saved-defaults-do-not-change-recorded-run',
  );
  await page.screenshot({ path: `.apexrest/check-logs/${mode}-run.png`, fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await page.screenshot({ path: `.apexrest/check-logs/${mode}-mobile.png`, fullPage: true });
  evidence.checks.push('390px-responsive-layout');
  assert.deepEqual(errors, []);
  evidence.checks.push('no-page-errors');
  evidence.status = 'passed';
} finally {
  await browser.close();
  await writeFile(`docs/evidence/${mode}-panel-browser.json`, JSON.stringify(evidence, null, 2) + '\n');
  console.log(JSON.stringify(evidence, null, 2));
}
