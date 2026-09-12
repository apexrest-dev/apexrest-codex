import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, cp, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { referenceSearch, referenceRead, type Reference } from '../../packages/core/src/references.ts';
import { buildReferencePostings } from '../../packages/core/src/reference-index.ts';
const corpusRoot = path.resolve('resources');
const digest = (text: string) => createHash('sha256').update(text).digest('hex');

test('pinned corpus retains complete documents, resolvable contracts, grammar and Codex routes', async () => {
  const raw = await readFile(path.join(corpusRoot, 'references/index.json'), 'utf8');
  const entries = JSON.parse(raw) as Reference[];
  const snapshot = JSON.parse(
    await readFile(path.join(corpusRoot, 'references/oracle-snapshot.json'), 'utf8'),
  );
  const search = JSON.parse(await readFile(path.join(corpusRoot, 'references/search.json'), 'utf8'));
  assert.equal(digest(raw), snapshot.indexSha256);
  assert.equal(search.indexSha256, snapshot.indexSha256);
  assert.deepEqual(search.postings, { ...buildReferencePostings(entries) });
  assert.equal(entries.length, snapshot.records);
  const ids = new Set(entries.map((entry) => entry.id));
  assert.equal(ids.size, entries.length);
  for (const entry of entries) {
    assert.ok(entry.id.length <= 200, entry.id);
    if (entry.sha256) assert.equal(digest(entry.text), entry.sha256, entry.id);
    for (const link of [...(entry.requires ?? []), ...(entry.related ?? [])]) assert.ok(ids.has(link), link);
  }
  for (const id of ['oracle-form-example', 'oracle-report-example', 'oracle-dashboard-example'])
    assert.ok(entries.find((entry) => entry.id === id)!.requires!.length >= 2, id);
  const routes = await readFile(
    'plugins/apexrest-apex/skills/apexrest-apexlang/references/component-routes.md',
    'utf8',
  );
  for (const match of routes.matchAll(/`(oracle:[^`]+)`/g)) assert.ok(ids.has(match[1]!), match[1]);
  const grammar = entries
    .filter(({ kind }) => kind === 'grammar')
    .map(({ text }) => text)
    .join('');
  assert.equal(digest(grammar), snapshot.sourceFiles['assets/grammar/apexlang.ebnf']);
});

test('real Oracle retrieval covers properties, component families and dependency traversal with and without accelerator', async (t) => {
  const root = await mkdtemp(path.join(tmpdir(), 'apexrest-corpus-'));
  const previous = process.env.APEXREST_RESOURCES;
  t.after(async () => {
    if (previous === undefined) delete process.env.APEXREST_RESOURCES;
    else process.env.APEXREST_RESOURCES = previous;
    await rm(root, { recursive: true, force: true });
  });
  process.env.APEXREST_RESOURCES = corpusRoot;
  const cases = JSON.parse(await readFile('tests/fixtures/apexlang-retrieval.json', 'utf8')) as {
    query: string;
    kind: 'grammar' | 'template' | 'contract' | 'guide';
    expected: string;
    visible?: string;
  }[];
  const results = [];
  for (const entry of cases) {
    const found = await referenceSearch(entry.query, '26.1', { kind: entry.kind, limit: 3 });
    assert.ok(found[0]?.title.includes(entry.expected), entry.query);
    if (entry.kind === 'grammar') assert.ok(found[0]!.text.includes(entry.query), entry.query);
    assert.ok(JSON.stringify(found).length < 8000);
    results.push(found);
  }
  const chart = await referenceRead('oracle:templates/region-components/chart/chart.bar', 0, 8192);
  assert.ok(chart.requires.some((id) => id.endsWith('chart._series._common')));
  assert.ok(chart.requires.some((id) => id.endsWith('chart._axis._common')));
  const page = await referenceRead('oracle:templates/page-examples/form-page/form-page._index', 0, 4096);
  assert.ok(page.requires.some((id) => id.endsWith('form-page._common')));
  await cp(path.join(corpusRoot, 'references'), path.join(root, 'references'), { recursive: true });
  await writeFile(path.join(root, 'references/search.json'), '{invalid accelerator');
  process.env.APEXREST_RESOURCES = root;
  for (const [i, entry] of cases.entries())
    assert.deepEqual(await referenceSearch(entry.query, '26.1', { kind: entry.kind, limit: 3 }), results[i]);
});
