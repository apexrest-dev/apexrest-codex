// Compare actual local plugin catalog/skill bytes. No model or Oracle calls.
import assert from 'node:assert/strict';
import path from 'node:path';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { sha256 } from './lib/release.mjs';
const [before, after, output] = process.argv.slice(2);
if (!before || !after || !output)
  throw new Error(
    'Usage: node scripts/benchmark-plugin-context.mjs BASELINE_PLUGIN CURRENT_PLUGIN OUTPUT.json',
  );
async function measure(directory) {
  const root = path.resolve(directory);
  const manifest = JSON.parse(await readFile(path.join(root, '.codex-plugin/plugin.json'), 'utf8'));
  const skills = {};
  for (const name of (await readdir(path.join(root, 'skills'))).sort()) {
    const content = await readFile(path.join(root, 'skills', name, 'SKILL.md'));
    skills[name] = { bytes: content.length, sha256: sha256(content) };
  }
  const client = new Client({ name: 'plugin-context-benchmark', version: '1' });
  const env = { ...process.env };
  delete env.APEXREST_RESOURCES;
  try {
    await client.connect(
      new StdioClientTransport({
        command: process.execPath,
        args: [path.join(root, 'runtime/mcp.mjs')],
        cwd: root,
        env,
        stderr: 'pipe',
      }),
    );
    const catalog = await client.listTools();
    return {
      version: manifest.version,
      skills,
      skillEntrypointBytes: Object.values(skills).reduce((sum, skill) => sum + skill.bytes, 0),
      catalogBytes: Buffer.byteLength(JSON.stringify(catalog)),
      catalogSha256: sha256(JSON.stringify(catalog)),
      toolNames: catalog.tools.map((tool) => tool.name).sort(),
    };
  } finally {
    await client.close();
  }
}
const baseline = await measure(before),
  current = await measure(after);
assert.equal(current.toolNames.length, 18);
assert.ok(current.toolNames.every((name) => !/^apexrest_(team|work)_/.test(name)));
assert.equal(current.skills['apexrest-team'], undefined);
const removedTools = baseline.toolNames.filter((name) => !current.toolNames.includes(name));
const report = {
  timestamp: new Date().toISOString(),
  scope:
    'Local stdio discovery and aggregate SKILL.md UTF-8 bytes. Skills load on demand; these are not token, billing, native-model latency or Oracle measurements.',
  baseline,
  current,
  removedTools,
  reductionPercent: Object.fromEntries(
    ['skillEntrypointBytes', 'catalogBytes'].map((key) => [
      key,
      Number(((1 - current[key] / baseline[key]) * 100).toFixed(2)),
    ]),
  ),
};
await writeFile(output, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ output, removedTools, reductionPercent: report.reductionPercent }));
