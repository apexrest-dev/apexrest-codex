// Local retrieval measurements only: not a model-generation, Oracle or native-host benchmark.
import { build } from 'esbuild';
import { readFile, writeFile, mkdtemp, rm, mkdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const fixtures = JSON.parse(await readFile('tests/fixtures/apexlang-retrieval.json', 'utf8'));
const queries = ['pageItemsToSubmit', 'pageAccessProtection', 'dynamicAction', 'sqlQuery', 'chart series'];
const median = (samples) => [...samples].sort((a, b) => a - b)[Math.floor(samples.length / 2)];
if (process.argv[2] === '--child') {
  const implementation = await import(pathToFileURL(path.resolve(process.argv[3])).href);
  process.env.APEXREST_RESOURCES = path.resolve(process.argv[4]);
  const start = performance.now();
  await implementation.referenceSearch(queries[0]);
  const coldSearchMs = performance.now() - start;
  const samples = [];
  for (let i = 0; i < 100; i++) {
    const at = performance.now();
    await implementation.referenceSearch(queries[i % queries.length]);
    samples.push(performance.now() - at);
  }
  const quality = [];
  const unversionedQuality = [];
  for (const fixture of fixtures) {
    const found = await implementation.referenceSearch(fixture.query, '26.1', {
      kind: fixture.kind,
      limit: 3,
    });
    const unversioned = await implementation.referenceSearch(fixture.query, undefined, {
      kind: fixture.kind,
      limit: 3,
    });
    const label =
      unversioned[0]?.title ?? unversioned[0]?.text.match(/^<([^>]+)>/)?.[1] ?? unversioned[0]?.id;
    unversionedQuality.push({
      query: fixture.query,
      top1: Boolean(label?.includes(fixture.expected)),
      visible: !fixture.visible || Boolean(unversioned[0]?.text.includes(fixture.visible)),
    });
    quality.push({
      query: fixture.query,
      firstIds: found.map((entry) => entry.id),
      top1: Boolean(found[0] && (found[0].title ?? found[0].id).includes(fixture.expected)),
      visible: !fixture.visible || Boolean(found[0]?.text.includes(fixture.visible)),
      responseBytes: Buffer.byteLength(JSON.stringify(found)),
    });
  }
  console.log(
    JSON.stringify({
      coldSearchMs,
      repeatedMedianMs: median(samples.slice(10)),
      quality,
      unversionedQuality,
    }),
  );
} else {
  const output = process.argv[2];
  if (!output)
    throw new Error(
      'Usage: node scripts/benchmark-apexlang-references.mjs OUTPUT.json [BASELINE_MODULE BASELINE_RESOURCES]',
    );
  const temporary = await mkdtemp(path.join(tmpdir(), 'apexrest-retrieval-benchmark-'));
  try {
    const module = path.join(temporary, 'current.mjs');
    await build({
      entryPoints: ['packages/core/src/references.ts'],
      outfile: module,
      bundle: true,
      platform: 'node',
      format: 'esm',
      target: 'node24',
    });
    const variants = [{ name: 'current', module, resources: path.resolve('resources') }];
    if (process.argv[3] && process.argv[4])
      variants.unshift({
        name: 'baseline',
        module: path.resolve(process.argv[3]),
        resources: path.resolve(process.argv[4]),
      });
    const results = {};
    for (const variant of variants) {
      const samples = [];
      for (let i = 0; i < 7; i++) {
        const child = spawnSync(
          process.execPath,
          [import.meta.filename, '--child', variant.module, variant.resources],
          { encoding: 'utf8', timeout: 30000 },
        );
        if (child.status !== 0) throw new Error(child.stderr || child.stdout);
        samples.push(JSON.parse(child.stdout));
      }
      results[variant.name] = {
        moduleSha256: createHash('sha256')
          .update(await readFile(variant.module))
          .digest('hex'),
        corpusSha256: createHash('sha256')
          .update(await readFile(path.join(variant.resources, 'references/index.json')))
          .digest('hex'),
        coldSearchMedianMs: median(samples.map((s) => s.coldSearchMs)),
        repeatedSearchMedianMs: median(samples.map((s) => s.repeatedMedianMs)),
        samples: samples.map(({ quality, unversionedQuality, ...timings }) => timings),
        quality: samples[0].quality,
        unversionedQuality: samples[0].unversionedQuality,
        unversionedTop1Passes: samples[0].unversionedQuality.filter((q) => q.top1 && q.visible).length,
        top1Passes: samples[0].quality.filter((q) => q.top1 && q.visible).length,
      };
    }
    await mkdir(path.dirname(output), { recursive: true });
    await writeFile(
      output,
      JSON.stringify(
        {
          schemaVersion: 1,
          timestamp: new Date().toISOString(),
          scope:
            'Local deterministic retrieval only. Seven fresh processes, 100 repeated requests per process, warm filesystem. Baseline uses the previous corpus and API; current uses expanded corpus and kind/version filters. Does not measure Codex generation success, Oracle compilation or native-host performance.',
          platform: process.platform,
          arch: process.arch,
          node: process.version,
          fixtureSha256: createHash('sha256')
            .update(await readFile('tests/fixtures/apexlang-retrieval.json'))
            .digest('hex'),
          cases: fixtures.length,
          results,
        },
        null,
        2,
      ) + '\n',
    );
    console.log(
      JSON.stringify(
        Object.fromEntries(
          Object.entries(results).map(([key, value]) => [
            key,
            {
              coldMs: value.coldSearchMedianMs,
              warmMs: value.repeatedSearchMedianMs,
              top1: value.top1Passes,
              cases: fixtures.length,
            },
          ]),
        ),
      ),
    );
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}
