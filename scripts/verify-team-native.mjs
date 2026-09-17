// Real Codex inference on an isolated local fixture; no Oracle or publication.
import { mkdtemp, mkdir, writeFile, readFile, realpath } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { sourceDigest, sha256 } from './lib/release.mjs';
const root = await realpath(await mkdtemp(path.join(tmpdir(), 'apexrest-native-team-')));
const project = path.join(root, 'project'),
  home = path.join(root, 'managed');
const runtime = path.resolve(process.argv[2] ?? 'dist/runtime/apexrest.mjs');
const reportFile = path.resolve(process.argv[3] ?? 'docs/evidence/team-native-local.json');
await mkdir(project);
await mkdir(home);
const env = { ...process.env, APEXREST_HOME: home };
const cli = (...args) => {
  const result = spawnSync(process.execPath, [runtime, ...args, '--json'], {
    env,
    encoding: 'utf8',
    timeout: 60000,
  });
  if (result.status !== 0) throw new Error(result.stdout || result.stderr);
  return JSON.parse(result.stdout).data;
};
const config = {
  schemaVersion: 1,
  projectId: 'team-native-fixture',
  application: { sourceDir: 'src', alias: 'team-native-fixture' },
  database: { migrationsDir: 'db/migrations', packagesDir: 'db/packages', testsDir: 'tests/sql' },
  toolchain: { lockFile: 'toolchain.json' },
  environments: {},
  tests: {
    unitDir: 'tests/unit',
    apiDir: 'tests/api',
    e2eDir: 'tests/e2e',
    requiredSuites: [],
    defaultBrowser: 'chromium',
    mutationAllowedEnvironments: [],
  },
  artifacts: { directory: '.apexrest/artifacts', retentionDays: 7 },
};
await writeFile(path.join(project, 'apexrest.json'), JSON.stringify(config));
await writeFile(path.join(project, '.gitignore'), '.apexrest/\n');
await mkdir(path.join(project, 'src'));
await writeFile(path.join(project, 'src/add.mjs'), 'export const add = (a, b) => a - b;\n');
const tests = `import test from 'node:test';
import assert from 'node:assert/strict';
import {add} from './src/add.mjs';
test('adds positive numbers',()=>assert.equal(add(2,3),5));
test('adds negative numbers',()=>assert.equal(add(-2,-3),-5));
test('rejects invalid inputs',()=>assert.throws(()=>add(NaN,3),TypeError));
`;
await writeFile(path.join(project, 'add.test.mjs'), tests);
// Give independent reviewers an inspectable, genuine pre-change baseline.
for (const args of [
  ['init', '--quiet'],
  ['add', '.gitignore', 'apexrest.json', 'src/add.mjs', 'add.test.mjs'],
  [
    '-c',
    'user.name=APEXREST fixture',
    '-c',
    'user.email=fixture@example.invalid',
    '-c',
    'commit.gpgsign=false',
    'commit',
    '--quiet',
    '-m',
    'Fixture baseline',
  ],
]) {
  const result = spawnSync('git', args, { cwd: project, encoding: 'utf8' });
  if (result.status !== 0) throw new Error('Could not initialize the isolated fixture baseline.');
}
await writeFile(
  path.join(home, 'policy.json'),
  JSON.stringify({ schemaVersion: 1, trustedProjects: [project], grants: [] }),
);
const task =
  'In this isolated local fixture, fix src/add.mjs so add(a,b) returns the sum of finite numeric arguments and throws TypeError for invalid input. Do not change add.test.mjs or any configuration. The ignored .apexrest directory is generated controller state, not pre-existing application source; its continuous updates are expected and are outside code acceptance. QA must independently run node --test add.test.mjs. Every role should call team_context and send at least one relevant message to a peer using team_message. Keep the plan and reports concise. Do not install, download, connect to a database, publish or touch files outside this project. This verifies Codex orchestration, not Oracle. Answer in English.';
const evidence = {
  timestamp: new Date().toISOString(),
  sourceDigest: await sourceDigest(),
  platform: process.platform,
  runtime: 'built-package',
  scope:
    'Actual Codex App Server sessions, constrained fixture edit, manager review, independent local QA, final manager review. No Oracle or desktop attachment.',
  status: 'running',
};
const started = cli(
  'team',
  'start',
  '--project',
  project,
  '--task',
  task,
  '--developers',
  '2',
  '--timeout-seconds',
  '600',
);
console.log(JSON.stringify({ fixture: project, teamId: started.teamId }));
let last = '';
for (;;) {
  const state = cli('team', 'status', started.teamId, '--project', project);
  if (`${state.status}:${state.phase}` !== last) {
    last = `${state.status}:${state.phase}`;
    console.log(last);
  }
  if (!['queued', 'running', 'cancelling'].includes(state.status)) {
    const final = spawnSync(process.execPath, ['--test', 'add.test.mjs'], { cwd: project, encoding: 'utf8' });
    evidence.status =
      state.status === 'completed' &&
      final.status === 0 &&
      (await readFile(path.join(project, 'add.test.mjs'), 'utf8')) === tests
        ? 'passed'
        : 'blocked';
    evidence.teamStatus = state.status;
    evidence.phases = state.reviews.map((r) => r.phase);
    evidence.separateSessions = new Set(state.members.map((m) => m.sessionId)).size;
    evidence.roles = state.members.map((m) => ({
      role: m.role,
      name: m.name,
      status: m.status,
      configuration: m.configuration,
    }));
    evidence.peerMessages = state.messages
      .filter((m) => m.from !== 'user')
      .map((m) => ({ from: m.from, to: m.to, status: m.status }));
    evidence.qa = state.qa.map((q) => ({
      revision: q.revision,
      decision: q.report.decision,
      checks: q.report.checks,
    }));
    evidence.reviewDecisions = state.reviews.map((r) => ({ phase: r.phase, decision: r.report.decision }));
    const full = JSON.parse(
      await readFile(path.join(project, '.apexrest/teams', started.teamId, 'state.json'), 'utf8'),
    );
    evidence.observedRoleTools = full.observations
      ?.filter((o) => ['team_context', 'team_message'].includes(o.kind))
      .map(({ role, kind }) => ({ role, kind }));
    evidence.qa = full.qa.map((q) => ({
      revision: q.revision,
      decision: q.report.decision,
      checks: q.report.checks,
    }));
    evidence.sourceBound =
      !!state.approvedDigest &&
      state.reviews.filter((r) => r.revision === state.revision).length === 2 &&
      state.reviews
        .filter((r) => r.revision === state.revision)
        .every((r) => r.digest === state.approvedDigest);
    evidence.preservedConfiguration =
      (await readFile(path.join(project, 'apexrest.json'), 'utf8')) === JSON.stringify(config);
    if (
      !evidence.sourceBound ||
      !evidence.preservedConfiguration ||
      evidence.separateSessions !== 4 ||
      !state.members.every(
        (m) =>
          evidence.observedRoleTools.some((o) => o.role === m.role && o.kind === 'team_context') &&
          evidence.observedRoleTools.some((o) => o.role === m.role && o.kind === 'team_message'),
      )
    )
      evidence.status = 'blocked';
    evidence.independentHarnessTests = {
      exitCode: final.status,
      logSha256: sha256(final.stdout + final.stderr),
    };
    evidence.diagnostics = state.diagnostics;
    break;
  }
  await delay(2000);
}
await mkdir(path.dirname(reportFile), { recursive: true });
await writeFile(reportFile, JSON.stringify(evidence, null, 2) + '\n');
console.log(JSON.stringify(evidence, null, 2));
process.exitCode = evidence.status === 'passed' ? 0 : 1;
