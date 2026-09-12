// Local synthetic measurements only; no vendor download, database or native Codex session.
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { sha256 } from './lib/release.mjs';

const self = fileURLToPath(import.meta.url);
const median = (values) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
if (process.argv[2] === '--download-worker') {
  const { download } = await import(pathToFileURL(process.argv[3]).href);
  const chunk = new Uint8Array(64 * 1024).fill(97);
  const chunks = 2048;
  const digest = createHash('sha256');
  for (let i = 0; i < chunks; i++) digest.update(chunk);
  const artifact = {
    id: 'synthetic',
    version: '1.0.0',
    url: 'https://vendor.test/v1.0.0/fixture.zip',
    sha256: digest.digest('hex'),
    allowedHosts: ['vendor.test'],
  };
  let fetched = 0;
  const fetcher = async () => {
    fetched++;
    let sent = 0;
    return new Response(
      new ReadableStream({
        pull(controller) {
          if (sent++ < chunks) controller.enqueue(chunk);
          else controller.close();
        },
      }),
    );
  };
  const started = performance.now();
  const file = await download(artifact, process.argv[4], false, fetcher);
  const downloadedMs = performance.now() - started;
  assert.equal((await stat(file)).size, chunk.byteLength * chunks);
  const cached = performance.now();
  assert.equal(await download(artifact, process.argv[4], true, fetcher), file);
  assert.equal(fetched, 1);
  console.log(
    JSON.stringify({
      payloadBytes: chunk.byteLength * chunks,
      downloadedMs,
      cachedVerifyMs: performance.now() - cached,
      maxRssKiB: process.resourceUsage().maxRSS,
    }),
  );
} else {
  const output = process.argv[2];
  if (!output) throw new Error('Usage: node scripts/benchmark-optimization.mjs OUTPUT.json');
  const runtime = path.resolve('dist/runtime');
  const temporary = await mkdtemp(path.join(tmpdir(), 'apexrest-benchmark-'));
  const report = {
    timestamp: new Date().toISOString(),
    node: process.version,
    platform: process.platform,
    arch: process.arch,
    scope: 'local synthetic benchmark; no Oracle or native-host evidence',
    method: 'Warm filesystem; fresh CLI/MCP processes. Medians are descriptive, not performance gates.',
  };
  try {
    const runtimeFiles = (await readdir(runtime)).filter((file) => file.endsWith('.mjs')).sort();
    report.runtime = { files: {}, totalBytes: 0 };
    for (const file of runtimeFiles) {
      const bytes = await readFile(path.join(runtime, file));
      report.runtime.files[file] = { bytes: bytes.length, sha256: sha256(bytes) };
      report.runtime.totalBytes += bytes.length;
    }
    const skills = await readdir('plugins/apexrest-apex/skills');
    report.skillBytes = 0;
    for (const skill of skills)
      report.skillBytes += (await readFile(`plugins/apexrest-apex/skills/${skill}/SKILL.md`)).length;
    report.cliStartupMs = [];
    for (let i = 0; i < 7; i++) {
      const started = performance.now();
      const result = spawnSync(process.execPath, [path.join(runtime, 'apexrest.mjs'), 'version', '--json'], {
        encoding: 'utf8',
      });
      assert.equal(result.status, 0, result.stderr);
      assert.equal(JSON.parse(result.stdout).ok, true);
      report.cliStartupMs.push(performance.now() - started);
    }
    report.mcp = [];
    for (let i = 0; i < 5; i++) {
      const client = new Client({ name: 'local-benchmark', version: '1.0.0' });
      const transport = new StdioClientTransport({
        command: process.execPath,
        args: [path.join(runtime, 'mcp.mjs')],
        stderr: 'pipe',
      });
      try {
        const started = performance.now();
        await client.connect(transport);
        const catalog = await client.listTools();
        const firstCatalogMs = performance.now() - started;
        assert.equal(catalog.tools.length, 14);
        const listed = performance.now();
        for (let n = 0; n < 20; n++) assert.deepEqual(await client.listTools(), catalog);
        const repeatedListMs = (performance.now() - listed) / 20;
        const call = () =>
          client.callTool({ name: 'apexrest_reference_search', arguments: { query: 'validate' } });
        const cold = performance.now();
        const reference = JSON.parse((await call()).content[0].text);
        const firstReferenceMs = performance.now() - cold;
        assert.equal(reference.ok, true);
        const warm = performance.now();
        for (let n = 0; n < 20; n++)
          assert.deepEqual(JSON.parse((await call()).content[0].text).data, reference.data);
        report.mcp.push({
          firstCatalogMs,
          repeatedListMs,
          firstReferenceMs,
          repeatedReferenceMs: (performance.now() - warm) / 20,
          catalogBytes: Buffer.byteLength(JSON.stringify(catalog)),
          catalogSha256: sha256(JSON.stringify(catalog)),
          referenceSha256: sha256(JSON.stringify(reference.data)),
        });
      } finally {
        await client.close();
      }
    }
    const module = path.join(temporary, 'download.mjs');
    await build({
      entryPoints: ['packages/installer/src/download.ts'],
      outfile: module,
      bundle: true,
      platform: 'node',
      format: 'esm',
      target: 'node24',
    });
    report.download = [];
    for (let i = 0; i < 3; i++) {
      const result = spawnSync(
        process.execPath,
        [self, '--download-worker', module, path.join(temporary, `cache-${i}`)],
        { encoding: 'utf8' },
      );
      assert.equal(result.status, 0, result.stderr);
      report.download.push(JSON.parse(result.stdout));
    }
    report.medians = {
      cliStartupMs: median(report.cliStartupMs),
      ...Object.fromEntries(
        ['firstCatalogMs', 'repeatedListMs', 'firstReferenceMs', 'repeatedReferenceMs'].map((key) => [
          key,
          median(report.mcp.map((run) => run[key])),
        ]),
      ),
      ...Object.fromEntries(
        ['downloadedMs', 'cachedVerifyMs', 'maxRssKiB'].map((key) => [
          key,
          median(report.download.map((run) => run[key])),
        ]),
      ),
    };
    await mkdir(path.dirname(output), { recursive: true });
    await writeFile(output, JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify({ output, runtimeBytes: report.runtime.totalBytes, medians: report.medians }));
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}
