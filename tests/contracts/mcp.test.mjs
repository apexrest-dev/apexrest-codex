import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { spawnSync, spawn } from 'node:child_process';
import { cp, mkdtemp, mkdir, realpath, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { setTimeout as delay } from 'node:timers/promises';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
const runtime = path.resolve('dist/runtime');
test('real stdio MCP initialize/list/call, CLI parity and bounded catalog', async (t) => {
  const client = new Client({ name: 'contract-test', version: '1.0.0' });
  t.after(() => client.close());
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [path.join(runtime, 'mcp.mjs')],
    stderr: 'pipe',
  });
  const start = performance.now();
  await client.connect(transport);
  const catalog = await client.listTools();
  assert.equal(catalog.tools.length, 14);
  assert.ok(performance.now() - start < 10000);
  const reference = await client.callTool({
    name: 'apexrest_reference_search',
    arguments: { query: 'validate' },
  });
  const domain = JSON.parse(reference.content[0].text);
  assert.equal(domain.ok, true);
  const cli = spawnSync(
    process.execPath,
    [path.join(runtime, 'apexrest.mjs'), 'docs', 'search', 'validate', '--json'],
    { encoding: 'utf8' },
  );
  assert.equal(cli.status, 0);
  assert.deepEqual(JSON.parse(cli.stdout).data, domain.data);
  const invalid = await client.callTool({
    name: 'apexrest_deploy_apply',
    arguments: { plan: 'x', approved: true },
  });
  assert.equal(JSON.parse(invalid.content[0].text).exitCode, 2);
  assert.equal(invalid.isError, true);
  const noProject = await client.callTool({
    name: 'apexrest_deploy_apply',
    arguments: { plan: 'x', project: '/private/tmp' },
  });
  assert.equal(JSON.parse(noProject.content[0].text).ok, false);
  await client.close();
});
test('CLI stdout remains a single JSON envelope for invalid options', () => {
  const r = spawnSync(
    process.execPath,
    [path.join(runtime, 'apexrest.mjs'), 'deploy', 'apply', '--env', 'prod', '--approved', '--json'],
    { encoding: 'utf8' },
  );
  assert.equal(r.status, 2);
  assert.equal(JSON.parse(r.stdout).ok, false);
});
test('MCP malformed JSON yields protocol response without process banners', async () => {
  const child = spawn(process.execPath, [path.join(runtime, 'mcp.mjs')], { stdio: 'pipe' });
  let stdout = '';
  child.stdout.on('data', (b) => (stdout += b));
  child.stdin.end('{invalid json}\n');
  await new Promise((resolve) => child.on('exit', resolve));
  for (const line of stdout.trim().split('\n').filter(Boolean)) assert.doesNotThrow(() => JSON.parse(line));
});
for (const profile of ['portable', 'codex-compat'])
  test(`${profile} copied outside checkout resolves shared chunks, references and job worker via both entrypoints`, async (t) => {
    const root = await realpath(await mkdtemp(path.join(tmpdir(), 'apexrest-relocated-')));
    t.after(() => rm(root, { recursive: true, force: true }));
    const plugin = path.join(root, 'plugin');
    await cp(`dist/${profile}/plugins/apexrest-apex`, plugin, { recursive: true });
    const cli = path.join(plugin, 'runtime/apexrest.mjs');
    const project = path.join(root, 'project');
    const env = { ...process.env, APEXREST_HOME: path.join(root, 'home') };
    delete env.APEXREST_RESOURCES;
    // The relocated CLI is a standalone process, not a nested node:test child.
    delete env.NODE_TEST_CONTEXT;
    const initialized = spawnSync(
      process.execPath,
      [cli, 'project', 'init', project, '--template', 'existing-app', '--json'],
      { cwd: root, env, encoding: 'utf8' },
    );
    assert.equal(initialized.status, 0, initialized.stdout + initialized.stderr);
    await mkdir(env.APEXREST_HOME);
    await writeFile(
      path.join(env.APEXREST_HOME, 'policy.json'),
      JSON.stringify({ schemaVersion: 1, trustedProjects: [project], grants: [] }),
    );
    // A synthetic local unit suite exercises worker paths without Oracle or an application target.
    await writeFile(
      path.join(project, 'tests/unit/local.test.mjs'),
      "import test from 'node:test'; import assert from 'node:assert/strict'; test('fixture', () => assert.equal(2 + 2, 4));\n",
    );
    for (const args of [[path.join(plugin, 'runtime/mcp.mjs')], [cli, 'mcp']]) {
      const client = new Client({ name: 'relocated-contract', version: '1.0.0' });
      const transport = new StdioClientTransport({
        command: process.execPath,
        args,
        cwd: root,
        env,
        stderr: 'pipe',
      });
      try {
        await client.connect(transport);
        const catalog = await client.listTools();
        assert.deepEqual(await client.listTools(), catalog);
        const found = JSON.parse(
          (
            await client.callTool({
              name: 'apexrest_reference_read',
              arguments: { id: 'oracle-form-example', limit: 80 },
            })
          ).content[0].text,
        );
        assert.equal(found.ok, true);
        assert.ok(found.data.source.startsWith('https://github.com/oracle/skills/'));
        assert.equal(found.data.content.length, 80);
        const queued = JSON.parse(
          (await client.callTool({ name: 'apexrest_test_run', arguments: { project, suite: 'unit' } }))
            .content[0].text,
        );
        assert.equal(queued.ok, true);
        const deadline = Date.now() + 10000;
        let state;
        do {
          await delay(50);
          state = JSON.parse(
            (
              await client.callTool({
                name: 'apexrest_job_status',
                arguments: { project, id: queued.data.jobId },
              })
            ).content[0].text,
          );
          assert.equal(state.ok, true);
        } while (['queued', 'running'].includes(state.data.status) && Date.now() < deadline);
        assert.equal(state.data.status, 'completed');
        assert.equal(state.data.result.ok, true, JSON.stringify(state.data.result));
        assert.equal(state.data.result.data.tests, 1);
      } finally {
        await client.close();
      }
    }
  });
