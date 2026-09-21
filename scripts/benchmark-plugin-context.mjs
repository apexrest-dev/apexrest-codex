// Compare local plugin instruction/catalog bytes; no model calls or database access.
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
async function measure(root) {
  root = path.resolve(root);
  const manifest = JSON.parse(await readFile(path.join(root, '.codex-plugin/plugin.json'), 'utf8'));
  const skills = {};
  for (const name of (await readdir(path.join(root, 'skills'))).sort()) {
    const content = await readFile(path.join(root, 'skills', name, 'SKILL.md'));
    skills[name] = { bytes: content.length, sha256: sha256(content) };
  }
  const client = new Client({ name: 'plugin-context-benchmark', version: '1' });
  const env = { ...process.env };
  delete env.APEXREST_TEAM_WORKER;
  delete env.APEXREST_TEAM_ROLE;
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
      catalog,
    };
  } finally {
    await client.close();
  }
}
const baseline = await measure(before),
  current = await measure(after);
const names = (catalog) => catalog.tools.map((tool) => tool.name).sort();
assert.deepEqual(names(current.catalog), names(baseline.catalog));
// All previous argument constraints and tool permissions must survive shortening.
function constraints(value) {
  if (Array.isArray(value)) return value.map(constraints);
  if (value && typeof value === 'object')
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => key !== 'description')
        .map(([key, item]) => [
          key,
          constraints(
            key === 'required' && Array.isArray(item)
              ? item.filter((name) => value.properties?.[name]?.default === undefined).sort()
              : item,
          ),
        ]),
    );
  return value;
}
const oldCatalog = constraints(baseline.catalog),
  newCatalog = constraints(current.catalog);
// Validate known additive features before removing them from the legacy
// comparison. Both inputs may be before or after either optimization release.
function normalizeAdditions(catalog, original) {
  const rawSchemas = new Map(
    catalog.tools.map((tool) => [
      tool.inputSchema,
      original.tools.find((entry) => entry.name === tool.name).inputSchema,
    ]),
  );
  const schema = (name) => {
    const tool = catalog.tools.find((tool) => tool.name === name);
    assert.ok(tool, `Missing tool: ${name}`);
    return tool.inputSchema;
  };
  const optional = (input, field) =>
    assert.ok(!rawSchemas.get(input).required?.includes(field), `${field} must remain optional`);
  const removeWait = (name, defaultSeconds) => {
    const input = schema(name);
    if (!input.properties.waitSeconds) return false;
    assert.deepEqual(input.properties.waitSeconds, {
      type: 'integer',
      minimum: 0,
      maximum: 30,
      default: defaultSeconds,
    });
    optional(input, 'waitSeconds');
    delete input.properties.waitSeconds;
    return true;
  };
  const statusWait = removeWait('apexrest_job_status', 0);
  const longTools = [
    'apexrest_apex_generate',
    'apexrest_apex_export',
    'apexrest_apex_validate',
    'apexrest_deploy_plan',
    'apexrest_deploy_apply',
    'apexrest_test_run',
  ];
  const longToolWaits = longTools.filter((name) => removeWait(name, 25)).length;
  assert.ok([0, 6].includes(longToolWaits), 'Long-tool waits must cover all six operations.');
  const inspect = schema('apexrest_project_inspect');
  const summaryDetail = !!inspect.properties.detail;
  if (summaryDetail) {
    assert.deepEqual(inspect.properties.detail, {
      type: 'string',
      enum: ['full', 'summary'],
      default: 'full',
    });
    optional(inspect, 'detail');
    delete inspect.properties.detail;
  }
  const metadata = schema('apexrest_metadata_read');
  const requests = metadata.properties.requests;
  if (requests) {
    optional(metadata, 'requests');
    assert.equal(requests.type, 'array');
    assert.equal(requests.minItems, 1);
    assert.equal(requests.maxItems, 8);
    assert.deepEqual(Object.keys(requests).sort(), ['items', 'maxItems', 'minItems', 'type']);
    const fields = ['kind', 'schema', 'name', 'offset', 'limit'];
    assert.equal(requests.items.type, 'object');
    assert.equal(requests.items.additionalProperties, false);
    assert.deepEqual(Object.keys(requests.items).sort(), [
      'additionalProperties',
      'properties',
      'required',
      'type',
    ]);
    assert.deepEqual(Object.keys(requests.items.properties).sort(), [...fields].sort());
    assert.deepEqual(requests.items.required, ['kind', 'schema']);
    for (const field of fields) {
      optional(metadata, field);
      const item = requests.items.properties[field];
      const outer = metadata.properties[field];
      assert.ok(outer, `Metadata single request lost ${field}`);
      if (field === 'offset' || field === 'limit') {
        const expectedDefault = field === 'offset' ? 0 : 30;
        assert.equal(item.default, expectedDefault);
        assert.ok(outer.default === undefined || outer.default === expectedDefault);
        // Single-request defaults may be applied by runtime validation now.
        assert.deepEqual({ ...outer, default: expectedDefault }, item);
      } else assert.deepEqual(outer, item);
      metadata.properties[field] = item;
    }
    metadata.required = [...(metadata.required ?? []), 'kind', 'schema'].sort();
    delete metadata.properties.requests;
  }
  return { statusWait, longToolWaits, summaryDetail, metadataBatch: !!requests };
}
const additions = {
  baseline: normalizeAdditions(oldCatalog, baseline.catalog),
  current: normalizeAdditions(newCatalog, current.catalog),
};
assert.deepEqual(newCatalog, oldCatalog);
const toolCount = current.catalog.tools.length;
delete baseline.catalog;
delete current.catalog;
const reduction = (key) => Number(((1 - current[key] / baseline[key]) * 100).toFixed(2));
const report = {
  timestamp: new Date().toISOString(),
  scope:
    'UTF-8 bytes, not model tokens, billing or end-to-end editing latency. Aggregate SKILL.md bytes are not all loaded for each task; conditional references load only when needed. Local stdio tool discovery, no model sessions or Oracle calls.',
  baseline,
  current,
  toolCount,
  validatedAdditions: additions,
  reductionPercent: {
    skillEntrypoints: reduction('skillEntrypointBytes'),
    catalog: reduction('catalogBytes'),
  },
  checks: [
    'same tool names and permissions',
    'same prior argument constraints',
    'known optional waits validate bounds and defaults before normalization',
    'known inspect detail validates enum and default before normalization',
    'known metadata batch validates bounds and preserves single-request constraints',
  ],
};
await writeFile(output, JSON.stringify(report, null, 2) + '\n');
console.log(
  JSON.stringify({
    output,
    toolCount,
    before: { skills: baseline.skillEntrypointBytes, catalog: baseline.catalogBytes },
    after: { skills: current.skillEntrypointBytes, catalog: current.catalogBytes },
    reductionPercent: report.reductionPercent,
  }),
);
