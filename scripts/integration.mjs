import { readFile, writeFile, mkdir, realpath } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { sourceDigest, files, sha256 } from './lib/release.mjs';
const evidence = {
  schemaVersion: 1,
  timestamp: new Date().toISOString(),
  sourceDigest: await sourceDigest(),
  mock: false,
  status: 'running',
  checks: [],
  prerequisites: [
    'APEXREST_INTEGRATION_PROJECT',
    'APEXREST_INTEGRATION_ENV',
    'APEXREST_INTEGRATION_ALLOW_WRITES=true',
    'Named SQLcl connections, target grants, durable local deployment state, APEX 26.1+, utPLSQL, authenticated browser profile',
  ],
};
const project = process.env.APEXREST_INTEGRATION_PROJECT,
  env = process.env.APEXREST_INTEGRATION_ENV,
  cli = path.resolve('dist/runtime/apexrest.mjs');
const invoke = (args) => {
  const r = spawnSync(process.execPath, [cli, ...args, '--project', project, '--json'], {
    encoding: 'utf8',
    timeout: 900000,
    maxBuffer: 4 * 1024 * 1024,
  });
  const result = JSON.parse(r.stdout || '{}');
  if (r.status !== 0 || !result.ok)
    throw new Error(
      `${args.slice(0, 2).join(' ')}: ${result.diagnostics?.map((d) => d.code).join(',') ?? r.error?.message ?? 'operation failed'}`,
    );
  return result;
};
try {
  if (!project || !env || process.env.APEXREST_INTEGRATION_ALLOW_WRITES !== 'true')
    throw new Error(
      'Authorized disposable integration project/environment/write consent are not configured. No DB write attempted.',
    );
  const config = JSON.parse(await readFile(path.join(project, 'apexrest.json'), 'utf8'));
  if (!config.environments[env] || config.environments[env].kind === 'production')
    throw new Error('Integration requires an explicitly configured non-production target.');
  if (!config.tests.requiredSuites.includes('sql') || !config.tests.requiredSuites.includes('e2e'))
    throw new Error('Integration requires SQL and authenticated E2E suites; an empty gate is forbidden.');
  const directory = '.apexrest/integration/' + randomUUID();
  await mkdir(path.join(project, directory), { recursive: true });
  const record = (name, result) => {
    evidence.checks.push({ name, ok: result.ok, runId: result.runId, data: result.data });
  };
  record('real-compiler', invoke(['apex', 'validate']));
  record('plan-identity', invoke(['deploy', 'plan', '--env', env, '--out', directory + '/plan.json']));
  record(
    'apply-with-backup-and-required-tests',
    invoke(['deploy', 'apply', '--plan', directory + '/plan.json']),
  );
  record('export-before-noop', invoke(['apex', 'export', '--env', env, '--output', directory + '/before']));
  record('noop-plan', invoke(['deploy', 'plan', '--env', env, '--out', directory + '/noop.json']));
  record('noop-apply', invoke(['deploy', 'apply', '--plan', directory + '/noop.json']));
  record('export-after-noop', invoke(['apex', 'export', '--env', env, '--output', directory + '/after']));
  const inventory = async (root) =>
    Object.fromEntries(
      await Promise.all(
        (await files(root)).map(async (f) => [f, sha256(await readFile(path.join(root, f)))]),
      ),
    );
  const before = await inventory(path.join(project, directory, 'before')),
    after = await inventory(path.join(project, directory, 'after'));
  if (JSON.stringify(before) !== JSON.stringify(after))
    throw new Error(
      'No-op export differs; inspect exact component/MMD differences before accepting a normalization.',
    );
  evidence.checks.push({
    name: 'noop-complete-file-and-mmd-preservation',
    ok: true,
    files: Object.keys(before).length,
  });
  record('actual-utplsql-and-authenticated-crud', invoke(['test', 'all', '--env', env]));
  // Other acceptance fixtures (target drift, cross-runner contention, unsupported components)
  // must be executed in a separately approved fault-injection environment.
  evidence.status = 'partial';
  evidence.blocker =
    'Happy-path integration completed, but cross-runner/fault-injection and existing-app page/LOV preservation fixtures require additional actual target evidence.';
  process.exitCode = 3;
} catch (error) {
  evidence.status = 'blocked';
  evidence.blocker = String(error);
  process.exitCode = 3;
}
await mkdir('docs/evidence', { recursive: true });
await writeFile('docs/evidence/oracle-integration.json', JSON.stringify(evidence, null, 2) + '\n');
console.log(
  JSON.stringify({
    status: evidence.status,
    blocker: evidence.blocker,
    evidence: 'docs/evidence/oracle-integration.json',
  }),
);
