// Real offline Oracle compiler checks. No connection, import or business-table execution.
import { cp, mkdtemp, readFile, readdir, rm, writeFile, mkdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import path from 'node:path';
const sqlcl = process.env.APEXREST_SQLCL ?? 'sql';
const output = process.argv[2] ?? 'docs/evidence/apexlang-compiler.json';
const root = await mkdtemp(path.join(tmpdir(), 'apexrest-patterns-'));
const sha = (bytes) => createHash('sha256').update(bytes).digest('hex');
const evidence = {
  schemaVersion: 1,
  timestamp: new Date().toISOString(),
  mock: false,
  scope:
    'Real offline Oracle APEXlang compilation only. Synthetic fixture SQL is not executed; no application import or browser/runtime validation.',
  node: process.version,
  platform: process.platform,
  arch: process.arch,
  compiler: null,
  status: 'running',
  runs: [],
};
try {
  const version = spawnSync(sqlcl, ['-version'], { encoding: 'utf8', timeout: 30000 });
  if (version.status !== 0) throw new Error(version.stderr || version.stdout);
  evidence.compiler = version.stdout.trim();
  for (const variant of ['blank', 'customer-crm', 'filtered-components']) {
    const app = path.join(root, variant);
    await cp('templates/blank-app/application', app, { recursive: true });
    if (variant === 'customer-crm') await cp('templates/customer-crm/apex-overlay', app, { recursive: true });
    if (variant === 'filtered-components')
      await cp(
        'plugins/apexrest-apex/skills/apexrest-apexlang/assets/p00020-filtered-components.apx',
        path.join(app, 'pages/p00020-filtered-components.apx'),
      );
    const mmdBefore = sha(await readFile(path.join(app, '.apex/apexlang.json')));
    const inputs = {};
    for (const file of (await readdir(path.join(app, 'pages'))).sort())
      inputs[file] = sha(await readFile(path.join(app, 'pages', file)));
    const start = performance.now();
    const result = spawnSync(sqlcl, ['-S', '/nolog'], {
      input: `apex validate -input "${app}"\nexit\n`,
      encoding: 'utf8',
      timeout: 120000,
    });
    const text = (result.stdout + '\n' + result.stderr).replaceAll(root, '<temporary-directory>');
    const passed =
      result.status === 0 &&
      /Validation successful/.test(text) &&
      !/APEXLang Compile Errors|ORA-\d{5}|\bError:|\bWarning:/i.test(text);
    const mmdAfter = sha(await readFile(path.join(app, '.apex/apexlang.json')));
    evidence.runs.push({
      variant,
      passed,
      elapsedMs: performance.now() - start,
      inputs,
      mmdBefore,
      mmdAfter,
      output: text.trim(),
    });
    if (mmdBefore !== mmdAfter) throw new Error('Compiler changed the input MMD.');
    if (!passed) throw new Error(`Compiler check failed: ${variant}`);
  }
  evidence.status = 'passed';
} catch (error) {
  evidence.status = 'blocked';
  evidence.blocker = String(error);
  process.exitCode = 3;
} finally {
  await rm(root, { recursive: true, force: true });
}
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, JSON.stringify(evidence, null, 2) + '\n');
console.log(JSON.stringify(evidence));
