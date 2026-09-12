import { sourceDigest } from './lib/release.mjs';
import { mkdtemp, readFile, writeFile, mkdir, realpath } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
const root = await realpath(await mkdtemp(path.join(tmpdir(), 'apexrest-oracle-'))),
  home = path.join(root, 'managed');
await mkdir(home);
const env = { ...process.env, APEXREST_HOME: home };
const cli = path.resolve('dist/runtime/apexrest.mjs');
const evidence = {
  schemaVersion: 1,
  sourceDigest: await sourceDigest(),
  timestamp: new Date().toISOString(),
  platform: process.platform,
  arch: process.arch,
  node: process.version,
  sqlcl: process.env.APEXREST_SQLCL ?? 'sql',
  javaHomeConfigured: Boolean(process.env.APEXREST_JAVA_HOME),
  mock: false,
  status: 'running',
  runs: [],
};
const invoke = (args) => {
  const result = spawnSync(process.execPath, [cli, ...args, '--json'], {
    env,
    encoding: 'utf8',
    timeout: 240000,
  });
  let json;
  try {
    json = JSON.parse(result.stdout);
  } catch {
    throw new Error(result.stderr || result.stdout);
  }
  if (result.status !== 0) throw new Error(JSON.stringify(json));
  return json;
};
try {
  for (const template of ['blank-app', 'customer-crm']) {
    const project = path.join(root, template);
    const initialized = invoke(['project', 'init', project, '--template', template]);
    await writeFile(
      path.join(home, 'policy.json'),
      JSON.stringify({ schemaVersion: 1, trustedProjects: [project], grants: [] }),
    );
    const validated = invoke(['apex', 'validate', '--project', project]);
    const mmd = await readFile(path.join(project, 'src/apex', template, '.apex/apexlang.json'));
    evidence.runs.push({
      template,
      initialization: initialized.data,
      validation: validated.data,
      mmdSha256: createHash('sha256').update(mmd).digest('hex'),
    });
  }
  evidence.status = 'passed';
} catch (error) {
  evidence.status = 'blocked';
  evidence.blocker = String(error);
  process.exitCode = 3;
}
await writeFile('docs/evidence/oracle-local.json', JSON.stringify(evidence, null, 2) + '\n');
console.log(
  JSON.stringify({
    status: evidence.status,
    blocker: evidence.blocker,
    evidence: 'docs/evidence/oracle-local.json',
    root,
  }),
);
