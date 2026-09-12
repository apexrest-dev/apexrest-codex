// Native Codex discovery and read-only retrieval in a disposable local profile; no model turn.
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { codexRpc } from './codex-rpc.mjs';
import { sourceDigest } from './lib/release.mjs';
const output = process.argv[2] ?? 'docs/evidence/apexlang-codex.json';
const root = await mkdtemp(path.join(tmpdir(), 'apexrest-codex-lookup-'));
const home = path.join(root, 'codex'),
  project = path.join(root, 'project');
await mkdir(home);
await mkdir(project);
const evidence = {
  schemaVersion: 1,
  timestamp: new Date().toISOString(),
  sourceDigest: await sourceDigest(),
  scope:
    'Isolated native Codex profile, plugin/skill/tool discovery and read-only APEXlang retrieval. No model-generated response, Oracle connection, installation update in the user profile or app import.',
  platform: process.platform,
  arch: process.arch,
  status: 'running',
  checks: [],
};
let rpc;
try {
  const command = (args) => {
    const r = spawnSync('codex', args, {
      cwd: project,
      env: { ...process.env, CODEX_HOME: home },
      encoding: 'utf8',
      timeout: 45000,
    });
    if (r.status !== 0) throw new Error(r.stderr || r.stdout);
    return r.stdout;
  };
  evidence.host = command(['--version']).trim();
  command(['plugin', 'marketplace', 'add', path.resolve('dist/codex-compat'), '--json']);
  command(['plugin', 'add', 'apexrest-apex@apexrest', '--json']);
  rpc = await codexRpc({ home, cwd: project });
  const skills = await rpc.call('skills/list', { cwds: [project], forceReload: true });
  const serializedSkills = JSON.stringify(skills);
  if (!serializedSkills.includes('apexrest-apexlang')) throw new Error('APEXlang skill not discovered');
  evidence.checks.push('apexlang-skill-discovered');
  const started = await rpc.call('thread/start', { cwd: project, ephemeral: true });
  const threadId = started.thread.id;
  const servers = await rpc.call('mcpServerStatus/list', { threadId });
  const server = (servers.data ?? []).find((entry) =>
    JSON.stringify(entry).includes('apexrest_reference_search'),
  );
  if (!server) throw new Error('APEXREST MCP not discovered');
  const call = async (tool, args) => {
    const result = await rpc.call('mcpServer/tool/call', {
      threadId,
      server: server.name,
      tool,
      arguments: args,
    });
    const envelope = JSON.parse(result.content.find((item) => item.type === 'text').text);
    if (!envelope.ok) throw new Error(envelope.summary);
    return envelope.data;
  };
  const found = await call('apexrest_reference_search', {
    query: 'pageItemsToSubmit',
    version: '26.1',
    kind: 'grammar',
    limit: 3,
  });
  if (found.length !== 3 || found.some((entry) => !entry.text.includes('pageItemsToSubmit')))
    throw new Error('Missing native match windows');
  evidence.checks.push('release-version-filter', 'three-visible-property-windows');
  evidence.search = found.map(({ id, offset, version }) => ({ id, offset, version }));
  const chart = await call('apexrest_reference_read', {
    id: 'oracle:templates/region-components/chart/chart._index',
  });
  if (chart.requires.length !== 3) throw new Error('Missing chart contracts');
  evidence.checks.push('direct-chart-route-with-three-contracts');
  const grammar = await call('apexrest_reference_read', { id: 'grammar:series-source-property' });
  if (grammar.id !== 'oracle-grammar-3042') throw new Error('Grammar alias did not resolve');
  evidence.checks.push('semantic-grammar-id');
  evidence.status = 'passed';
} catch (error) {
  evidence.status = 'blocked';
  evidence.blocker = String(error).replaceAll(root, '<temporary-directory>');
  process.exitCode = 3;
} finally {
  rpc?.close();
  await rm(root, { recursive: true, force: true });
}
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, JSON.stringify(evidence, null, 2) + '\n');
console.log(JSON.stringify(evidence));
