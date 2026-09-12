// Interactive login only. No code generation, screenshots, video, tracing or password logging.
import { chromium } from '@playwright/test';
import { createInterface } from 'node:readline/promises';
import { chmod, rename } from 'node:fs/promises';
const [destination, baseURL, encodedOrigins] = process.argv.slice(2);
const origins = JSON.parse(encodedOrigins);
const browser = await chromium.launch({ headless: false });
const context = await browser.newContext({ serviceWorkers: 'block' });
const rl = createInterface({ input: process.stdin, output: process.stderr });
const timeout = setTimeout(() => { void browser.close(); rl.close(); process.exitCode = 4; }, 600000);
try {
  await context.route('**/*', route => origins.includes(new URL(route.request().url()).origin) ? route.continue() : route.abort('blockedbyclient'));
  const page = await context.newPage(); await page.goto(baseURL);
  await rl.question('Complete login in the browser, verify the application, then press Enter here to save private state: ');
  await context.storageState({ path: destination + '.tmp' });
  await chmod(destination + '.tmp', 0o600); await rename(destination + '.tmp', destination);
} finally { clearTimeout(timeout); rl.close(); await browser.close(); }
