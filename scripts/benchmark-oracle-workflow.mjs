// Connected, read-only benchmark. Plans write local artifacts; this never calls apply.
import assert from 'node:assert/strict';
import { createHash, randomUUID } from 'node:crypto';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const [projectArg, environment, runtimeArg, output, samplesArg = '3'] = process.argv.slice(2);
const samples = Number(samplesArg);
if (
  !projectArg ||
  !environment ||
  !runtimeArg ||
  !output ||
  !Number.isInteger(samples) ||
  samples < 1 ||
  samples > 10
)
  throw new Error(
    'Usage: node scripts/benchmark-oracle-workflow.mjs PROJECT ENV RUNTIME_DIR OUTPUT.json [SAMPLES=3]. Set APEXREST_HOME to the existing authorized managed home.',
  );
const project = path.resolve(projectArg),
  runtime = path.resolve(runtimeArg);
const sha256 = (data) => createHash('sha256').update(data).digest('hex');
const report = {
  createdAt: new Date().toISOString(),
  node: process.version,
  platform: `${process.platform}-${process.arch}`,
  scope:
    'Actual SQLcl/Oracle through built stdio MCP; no native Codex discovery, database writes or automated application tests.',
  method:
    'Sequential plans of unchanged sources and target; fresh MCP and worker per sample. Wall time includes startup and up to 250 ms completion polling. Descriptive samples, not a CI threshold.',
  runtimeFiles: {},
  samples: [],
};
for (const file of (await readdir(runtime)).filter((file) => file.endsWith('.mjs')).sort())
  report.runtimeFiles[file] = sha256(await readFile(path.join(runtime, file)));
await mkdir(path.dirname(path.resolve(output)), { recursive: true });
for (let sample = 0; sample < samples; sample++) {
  const client = new Client({ name: 'apexrest-readonly-benchmark', version: '1.0.0' });
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [path.join(runtime, 'mcp.mjs')],
    env: process.env,
    stderr: 'pipe',
  });
  // Do not collect SQL output or credentials in benchmark evidence.
  transport.stderr?.resume();
  const call = async (name, args) => {
    const envelope = await client.callTool({ name, arguments: args });
    return JSON.parse(envelope.content.find((item) => item.type === 'text').text);
  };
  const start = performance.now();
  let jobId;
  try {
    await client.connect(transport);
    const queued = await call('apexrest_deploy_plan', {
      project,
      env: environment,
      out: `plans/benchmark-${randomUUID()}.json`,
    });
    assert.equal(queued.ok, true, queued.summary);
    jobId = queued.data.jobId;
    assert.ok(jobId);
    let result;
    while (performance.now() - start < 600000) {
      const state = await call('apexrest_job_status', { project, id: jobId });
      assert.equal(state.ok, true, state.summary);
      if (state.data.status === 'completed') {
        result = state.data.result;
        break;
      }
      assert.notEqual(state.data.status, 'outcome_unknown', 'Inspect the durable job before retrying.');
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    assert.ok(result, `Deadline reached; inspect job ${jobId} before retrying.`);
    assert.equal(result.ok, true, result.summary);
    const plan = result.data;
    const entry = {
      jobId,
      wallMs: performance.now() - start,
      compiler: plan.compiler,
      sourceDigest: plan.sourceDigest,
      targetDigest: plan.targetDigest,
      fingerprint: plan.fingerprint,
      configurationDigest: plan.configurationDigest,
      toolchainDigest: plan.toolchainDigest,
    };
    if (report.samples.length)
      for (const field of [
        'compiler',
        'sourceDigest',
        'targetDigest',
        'fingerprint',
        'configurationDigest',
        'toolchainDigest',
      ])
        assert.equal(entry[field], report.samples[0][field], `Benchmark inputs changed: ${field}`);
    report.samples.push(entry);
    console.log(JSON.stringify({ sample: sample + 1, wallMs: entry.wallMs }));
    await writeFile(output, JSON.stringify(report, null, 2) + '\n', { mode: 0o600 });
  } catch (error) {
    if (jobId) console.error(`Inspect durable job ${jobId}; this benchmark will not retry it.`);
    throw error;
  } finally {
    await client.close();
  }
}
report.medianMs = report.samples.map((sample) => sample.wallMs).sort((a, b) => a - b)[
  Math.floor(samples / 2)
];
await writeFile(output, JSON.stringify(report, null, 2) + '\n', { mode: 0o600 });
console.log(JSON.stringify({ output, medianMs: report.medianMs }));
