import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, realpath } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { codexRpc } from './codex-rpc.mjs';
import { sourceDigest } from './lib/release.mjs';
import { setTimeout as delay } from 'node:timers/promises';

// Actual Codex native-host check; never substitutes for Oracle integration.
// A private, temporary profile leaves the user's plugins and settings intact.
const source = process.argv[2] ?? process.cwd();
const reportFile = process.argv[3] ?? 'docs/evidence/native-repository.json';
const root = await mkdtemp(path.join(tmpdir(), 'apexrest-repository-native-'));
const home = path.join(root, 'codex');
const project = path.join(root, 'project');
await mkdir(home);
await mkdir(project);
const env = { ...process.env, CODEX_HOME: home, APEXREST_HOME: path.join(root, 'managed') };
const evidence = {
  schemaVersion: 1,
  timestamp: new Date().toISOString(),
  sourceDigest: await sourceDigest(),
  installationSource: path.isAbsolute(source) ? 'local-repository' : source,
  platform: process.platform,
  arch: process.arch,
  node: process.version,
  host: '',
  status: 'running',
  oracleIntegration: false,
  checks: [],
};
const cli = (args) => {
  const result = spawnSync('codex', args, { env, encoding: 'utf8', timeout: 90000 });
  if (result.error || result.status !== 0) throw new Error(result.error?.message ?? result.stderr);
  return result.stdout;
};
let rpc;
try {
  evidence.host = cli(['--version']).trim();
  cli(['plugin', 'marketplace', 'add', source, '--json']);
  const installed = JSON.parse(cli(['plugin', 'add', 'apexrest-apex@apexrest', '--json']));
  const manifest = JSON.parse(
    await readFile(path.join(installed.installedPath, 'bundle-manifest.json'), 'utf8'),
  );
  evidence.installedVersion = manifest.version;
  evidence.installedSourceDigest = manifest.sourceDigest;
  // Local check must prove this exact checkout. Remote check records both digests
  // and rejects old bundle sources, rather than trusting installation success.
  assert.equal(manifest.sourceDigest, evidence.sourceDigest, 'Installed bundle sources differ from checkout');
  evidence.checks.push('repository-marketplace-registration', 'native-install-without-local-build');
  const ordsHelper = await readFile(
    path.join(installed.installedPath, 'resources/ords/OrdsBridge.java'),
    'utf8',
  );
  assert.match(ordsHelper, /public class OrdsBridge\b/, 'Installed bundle is missing its ORDS helper');
  evidence.checks.push('ords-helper-bundled-in-native-installation');
  // Native Codex intentionally filters inherited MCP environment variables.
  // Bind this installed copy to its private managed home just as the managed
  // installer does; never fall back to the user's real ~/.apexrest policy.
  const installedRoot = await realpath(installed.installedPath);
  const isolatedCodexHome = await realpath(home);
  assert.ok(
    installedRoot.startsWith(isolatedCodexHome + path.sep),
    'Native test installation must remain inside the isolated Codex profile',
  );
  const mcpFile = path.join(installedRoot, '.mcp.json');
  const mcpConfiguration = JSON.parse(await readFile(mcpFile, 'utf8'));
  assert.ok(mcpConfiguration.mcpServers.apexrest, 'Installed plugin lacks the apexrest MCP server');
  mcpConfiguration.mcpServers.apexrest.env = {
    ...mcpConfiguration.mcpServers.apexrest.env,
    APEXREST_HOME: env.APEXREST_HOME,
  };
  await writeFile(mcpFile, JSON.stringify(mcpConfiguration, null, 2) + '\n', { mode: 0o600 });
  evidence.checks.push('isolated-managed-home-bound-in-installed-mcp-environment');
  await mkdir('.apexrest/check-logs', { recursive: true });
  await writeFile(
    '.apexrest/check-logs/native-installed-runtime.txt',
    path.join(installed.installedPath, 'runtime/apexrest.mjs'),
  );
  // The helper inherits APEXREST_HOME only for this subprocess launch.
  rpc = await codexRpc({ home, cwd: project, env });
  const thread = await rpc.call('thread/start', { cwd: project, ephemeral: true });
  let server;
  const readyBy = Date.now() + 30000;
  do {
    const servers = await rpc.call('mcpServerStatus/list', { threadId: thread.thread.id });
    server = servers.data.find((s) => s.pluginId === 'apexrest-apex@apexrest');
    if (server && server.runtimeStatus !== 'starting') break;
    await delay(250);
  } while (Date.now() < readyBy);
  assert.ok(server, 'Native MCP server missing');
  assert.equal(server.runtimeStatus, 'connected');
  const tools = Object.keys(server.tools).sort();
  assert.equal(tools.length, 24);
  evidence.tools = tools;
  evidence.checks.push('24-native-mcp-tools-connected');
  const skills = await rpc.call('skills/list', { cwds: [project], forceReload: true });
  const nativeSkills = skills.data.flatMap((entry) => entry.skills);
  const menu = [];
  for (const name of [
    'work',
    'panel',
    'team',
    'menu',
    'setup',
    'install-dependencies',
    'project',
    'apexlang',
    'database',
    'deploy',
    'test',
    'debug',
    'review',
  ]) {
    const skill = nativeSkills.find((item) => item.name === `apexrest-apex:apexrest-${name}`);
    assert.ok(skill?.enabled, `Missing or disabled skill: ${name}`);
    assert.ok(skill.interface?.displayName, `Missing menu label: ${name}`);
    assert.ok(skill.interface?.shortDescription, `Missing menu description: ${name}`);
    assert.ok(skill.interface?.defaultPrompt?.includes(`$apexrest-${name}`), `Missing menu prompt: ${name}`);
    menu.push({
      name: skill.name,
      displayName: skill.interface.displayName,
      shortDescription: skill.interface.shortDescription,
      defaultPrompt: skill.interface.defaultPrompt,
    });
  }
  evidence.menu = menu;
  evidence.checks.push('thirteen-native-skills-with-menu-metadata-discovered');
  const call = async (tool, args) => {
    const result = await rpc.call('mcpServer/tool/call', {
      threadId: thread.thread.id,
      server: server.name,
      tool,
      arguments: args,
    });
    const envelope = JSON.parse(result.content.find((item) => item.type === 'text').text);
    assert.equal(envelope.ok, true, `${tool}: ${JSON.stringify(envelope)}`);
    return envelope;
  };
  const reference = await call('apexrest_reference_search', { query: 'validate' });
  assert.ok(JSON.stringify(reference.data).includes('validate'));
  evidence.checks.push('bundled-reference-search-through-native-host');
  await call('apexrest_doctor', {});
  evidence.checks.push('doctor-through-native-host');
  const workflow = path.join(root, 'outside-plugin-workspace');
  const initialized = spawnSync(
    process.execPath,
    [
      path.join(installed.installedPath, 'runtime/apexrest.mjs'),
      'project',
      'init',
      workflow,
      '--template',
      'existing-app',
      '--alias',
      'native-smoke',
      '--json',
    ],
    { env, encoding: 'utf8', timeout: 30000 },
  );
  assert.equal(initialized.status, 0, initialized.stderr + initialized.stdout);
  await call('apexrest_project_inspect', { project: workflow });
  evidence.checks.push('explicit-project-inspection-outside-plugin-cache');
  const panel = await call('apexrest_panel_status', { project: workflow });
  assert.equal(panel.data.configured, true);
  assert.ok(Array.isArray(panel.data.permissions.activeGrants));
  evidence.checks.push('development-panel-status-through-native-host');
  // Trust only the generated workflow in the isolated managed profile. Preserve
  // any existing grants and trusted roots; this adds no database authorization.
  const policyFile = path.join(env.APEXREST_HOME, 'policy.json');
  let policy;
  try {
    policy = JSON.parse(await readFile(policyFile, 'utf8'));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    policy = { schemaVersion: 1, trustedProjects: [], grants: [] };
  }
  const preservedGrants = structuredClone(policy.grants);
  policy.trustedProjects = [...new Set([...policy.trustedProjects, await realpath(workflow)])];
  await mkdir(env.APEXREST_HOME, { recursive: true, mode: 0o700 });
  await writeFile(policyFile, JSON.stringify(policy, null, 2) + '\n', { mode: 0o600 });
  const trustedPanel = await call('apexrest_panel_status', { project: workflow });
  assert.equal(trustedPanel.data.trusted, true, 'Native MCP must read the isolated policy before mutation');
  for (const databaseTransport of ['ords', 'direct']) {
    await call('apexrest_panel_action', {
      project: workflow,
      action: {
        kind: 'sqlcl',
        settings: { ...panel.data.sqlcl, mode: 'cli', databaseTransport },
      },
    });
    const selected = await call('apexrest_panel_status', { project: workflow });
    assert.equal(selected.data.sqlcl.databaseTransport, databaseTransport);
    assert.equal(selected.data.sqlcl.mode, 'cli');
    assert.equal(selected.data.trusted, true);
    const persisted = JSON.parse(await readFile(path.join(env.APEXREST_HOME, 'sqlcl.json'), 'utf8'));
    assert.equal(persisted.databaseTransport, databaseTransport);
  }
  assert.deepEqual(JSON.parse(await readFile(policyFile, 'utf8')).grants, preservedGrants);
  evidence.checks.push('ords-direct-settings-toggle-through-native-panel-action-and-status');
  evidence.status = 'passed';
} catch (error) {
  evidence.status = 'failed';
  // Keep raw diagnostics private; public evidence has a classified failure only.
  await mkdir('.apexrest/check-logs', { recursive: true });
  await writeFile('.apexrest/check-logs/repository-native-error.txt', String(error));
  evidence.error = 'Native repository installation check failed; inspect private diagnostic log.';
  process.exitCode = 1;
} finally {
  rpc?.close();
  await mkdir('docs/evidence', { recursive: true });
  await writeFile(reportFile, JSON.stringify(evidence, null, 2) + '\n');
  console.log(JSON.stringify(evidence, null, 2));
}
