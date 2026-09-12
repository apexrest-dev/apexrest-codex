import { mkdtemp, mkdir, cp, readFile, writeFile, realpath } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { codexRpc } from './codex-rpc.mjs';
import { sourceDigest } from './lib/release.mjs';
const temp = await realpath(await mkdtemp(join(tmpdir(), 'apexrest-native-')));
const home = join(temp, 'codex'),
  project = join(temp, 'project');
await mkdir(home);
await mkdir(project);
// The unrelated setting is a preservation sentinel, not an authorization bypass.
await writeFile(join(home, 'config.toml'), 'hide_agent_reasoning = true\n');
const evidence = {
  schemaVersion: 1,
  sourceDigest: await sourceDigest(),
  timestamp: new Date().toISOString(),
  platform: process.platform,
  arch: process.arch,
  profile: process.env.APEXREST_TEST_PROFILE ?? 'codex-compat',
  location: temp,
  checks: [],
  status: 'running',
};
let rpc;
try {
  const version = JSON.parse(await readFile('package.json', 'utf8')).version;
  const archiveName = `apexrest-apex-${version}-${evidence.profile}.zip`;
  const archive = join(temp, archiveName);
  await cp(resolve('dist/releases', archiveName), archive);
  evidence.bundleDigest = createHash('sha256')
    .update(await readFile(archive))
    .digest('hex');
  const bootstrap = join(temp, 'bootstrap-runtime.mjs');
  await cp('dist/releases/bootstrap-runtime.mjs', bootstrap);
  const setup = spawnSync(
    process.execPath,
    [
      bootstrap,
      '--bundle',
      archive,
      '--sha256',
      evidence.bundleDigest,
      '--home',
      join(temp, 'managed'),
      '--codex-home',
      home,
      '--native-only',
      '--yes',
      '--json',
    ],
    { encoding: 'utf8', timeout: 90000 },
  );
  if (setup.status !== 0) throw new Error(setup.stdout + setup.stderr);
  evidence.setup = JSON.parse(setup.stdout);
  const repeat = spawnSync(
    process.execPath,
    [
      bootstrap,
      '--bundle',
      archive,
      '--sha256',
      evidence.bundleDigest,
      '--home',
      join(temp, 'managed'),
      '--codex-home',
      home,
      '--native-only',
      '--yes',
      '--offline',
      '--json',
    ],
    { encoding: 'utf8', timeout: 90000 },
  );
  if (repeat.status !== 0)
    throw new Error('Repeated offline install failed: ' + repeat.stdout + repeat.stderr);
  evidence.repeat = JSON.parse(repeat.stdout).data.native.sourceDigest;
  if (evidence.repeat !== evidence.setup.data.native.sourceDigest)
    throw new Error('Identical setup changed managed location');
  evidence.host = spawnSync('codex', ['--version'], { encoding: 'utf8' }).stdout.trim();
  rpc = await codexRpc({ home, cwd: project });
  evidence.plugins = await rpc.call('plugin/list', { marketplaceKinds: ['local'], cwds: [project] });
  evidence.skills = await rpc.call('skills/list', { cwds: [project], forceReload: true });
  const thread = await rpc.call('thread/start', { cwd: project, ephemeral: true });
  evidence.threadId = thread.thread.id;
  evidence.servers = await rpc.call('mcpServerStatus/list', { threadId: thread.thread.id });
  const servers = evidence.servers.data ?? [];
  const server = servers.find((s) => JSON.stringify(s).includes('apexrest_doctor'));
  if (!server) throw new Error('Native plugin MCP tools not discovered: ' + JSON.stringify(evidence.servers));
  evidence.doctor = await rpc.call('mcpServer/tool/call', {
    threadId: thread.thread.id,
    server: server.name,
    tool: 'apexrest_doctor',
    arguments: {},
  });
  evidence.reference = await rpc.call('mcpServer/tool/call', {
    threadId: thread.thread.id,
    server: server.name,
    tool: 'apexrest_reference_search',
    arguments: { query: 'validate' },
  });
  const nativeCli = join(evidence.setup.data.native.root, 'runtime/apexrest.mjs');
  const workflow = join(temp, 'workflow');
  const init = spawnSync(
    process.execPath,
    [
      nativeCli,
      'project',
      'init',
      workflow,
      '--template',
      'existing-app',
      '--alias',
      'native-fixture',
      '--json',
    ],
    { encoding: 'utf8', env: { ...process.env, APEXREST_HOME: join(temp, 'managed') } },
  );
  if (init.status !== 0) throw new Error(init.stdout + init.stderr);
  await writeFile(
    join(temp, 'managed', 'policy.json'),
    JSON.stringify({ schemaVersion: 1, trustedProjects: [workflow], grants: [] }),
  );
  const envelope = (r) => JSON.parse(r.content.find((c) => c.type === 'text').text);
  const nativeCall = async (tool, args) =>
    envelope(
      await rpc.call('mcpServer/tool/call', {
        threadId: thread.thread.id,
        server: server.name,
        tool,
        arguments: args,
      }),
    );
  const runJob = async (tool, args) => {
    const started = await nativeCall(tool, args);
    if (!started.ok) throw new Error(JSON.stringify(started));
    const deadline = Date.now() + 120000;
    while (Date.now() < deadline) {
      await new Promise((r) => setTimeout(r, 1000));
      const status = await nativeCall('apexrest_job_status', { project: workflow, id: started.data.jobId });
      if (!status.ok) throw new Error(JSON.stringify(status));
      if (status.data.status === 'completed') {
        if (!status.data.result.ok) throw new Error(JSON.stringify(status.data.result));
        return status.data.result;
      }
      if (status.data.status === 'outcome_unknown')
        throw new Error('Native worker stopped without confirmed result');
    }
    throw new Error('Native job deadline exceeded');
  };
  evidence.nativeGenerate = await runJob('apexrest_apex_generate', {
    project: workflow,
    name: 'Native Fixture',
    alias: 'native-fixture',
    output: 'src/apex/native-fixture',
  });
  evidence.nativeValidation = await runJob('apexrest_apex_validate', { project: workflow });
  evidence.config = await readFile(join(home, 'config.toml'), 'utf8');
  if (!evidence.config.includes('hide_agent_reasoning = true'))
    throw new Error('Unrelated setting was damaged');
  await rpc.call('config/value/write', {
    keyPath: 'plugins."apexrest-apex@apexrest".enabled',
    value: false,
    mergeStrategy: 'upsert',
  });
  rpc.close();
  rpc = await codexRpc({ home, cwd: project });
  const disabledThread = await rpc.call('thread/start', { cwd: project, ephemeral: true });
  evidence.disabledServers = await rpc.call('mcpServerStatus/list', { threadId: disabledThread.thread.id });
  if (JSON.stringify(evidence.disabledServers).includes('apexrest_doctor'))
    throw new Error('Disabled plugin still exposes tools');
  await rpc.call('config/value/write', {
    keyPath: 'plugins."apexrest-apex@apexrest".enabled',
    value: true,
    mergeStrategy: 'upsert',
  });
  rpc.close();
  rpc = await codexRpc({ home, cwd: project });
  const enabledThread = await rpc.call('thread/start', { cwd: project, ephemeral: true });
  evidence.enabledServers = await rpc.call('mcpServerStatus/list', { threadId: enabledThread.thread.id });
  if (!JSON.stringify(evidence.enabledServers).includes('apexrest_doctor'))
    throw new Error('Re-enabled plugin did not expose tools');
  rpc.close();
  rpc = undefined;
  const uninstall = spawnSync(
    process.execPath,
    [
      evidence.setup.data.native.root + '/runtime/apexrest.mjs',
      'plugin',
      'uninstall',
      '--home',
      join(temp, 'managed'),
      '--keep-runtime',
      '--json',
    ],
    { cwd: project, env: { ...process.env, CODEX_HOME: home }, encoding: 'utf8', timeout: 30000 },
  );
  if (uninstall.status !== 0) throw new Error(uninstall.stderr);
  rpc = await codexRpc({ home, cwd: project });
  const removedThread = await rpc.call('thread/start', { cwd: project, ephemeral: true });
  evidence.removedServers = await rpc.call('mcpServerStatus/list', { threadId: removedThread.thread.id });
  if (JSON.stringify(evidence.removedServers).includes('apexrest_doctor'))
    throw new Error('Removed plugin still exposes tools');
  if (!(await readFile(join(home, 'config.toml'), 'utf8')).includes('hide_agent_reasoning = true'))
    throw new Error('Uninstall damaged unrelated config');
  evidence.status = 'passed';
  evidence.checks.push(
    'registered',
    'host_discovery',
    'host_tool_call',
    'native-real-sqlcl-generate',
    'native-real-sqlcl-validate',
    'disable',
    'enable',
    'uninstall',
    'settings_preserved',
  );
} catch (e) {
  evidence.status = 'blocked';
  evidence.blocker = String(e);
  process.exitCode = 3;
} finally {
  rpc?.close();
  await mkdir('docs/evidence', { recursive: true });
  await writeFile(`docs/evidence/native-${evidence.profile}.json`, JSON.stringify(evidence, null, 2) + '\n');
}
console.log(
  JSON.stringify({
    status: evidence.status,
    blocker: evidence.blocker,
    location: temp,
    evidence: `docs/evidence/native-${evidence.profile}.json`,
  }),
);
