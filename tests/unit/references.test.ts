import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import {
  referenceRead,
  referenceSearch,
  referenceSync,
  references,
} from '../../packages/core/src/references.ts';
import { readJson, writeJson } from '../../packages/core/src/fs.ts';

test('reference cache preserves ordering and bounds and refreshes after replacement, root changes or failure', async (t) => {
  const root = await mkdtemp(path.join(tmpdir(), 'apexrest-reference-'));
  const previous = { resources: process.env.APEXREST_RESOURCES, home: process.env.APEXREST_HOME };
  t.after(async () => {
    for (const [key, value] of [
      ['APEXREST_RESOURCES', previous.resources],
      ['APEXREST_HOME', previous.home],
    ] as const)
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    await rm(root, { recursive: true, force: true });
  });
  process.env.APEXREST_RESOURCES = root;
  process.env.APEXREST_HOME = path.join(root, 'home');
  const file = path.join(root, 'references/index.json');
  const entries = Array.from({ length: 12 }, (_, i) => ({
    id: 'fixture-' + i,
    version: 'fixture',
    source: 'local-fixture',
    text: 'keyword ' + 'a'.repeat(2000),
  }));
  await writeJson(file, entries);
  const results = await Promise.all(Array.from({ length: 4 }, () => referenceSearch('keyword', 'fixture')));
  assert.ok(
    results.every(
      (result) => result.length === 3 && result[0]?.id === 'fixture-0' && result[0]?.text.length === 1200,
    ),
  );
  const expanded = await referenceSearch('keyword', 'fixture', { limit: 8 });
  assert.equal(expanded.length, 8);
  assert.deepEqual(
    results[0]!.map(({ id }) => id),
    expanded.slice(0, 3).map(({ id }) => id),
  );
  assert.equal(results[0]![0]!.nextResultOffset, 3);
  assert.equal(expanded[0]!.nextResultOffset, 8);
  const page = await referenceRead('fixture-9', 7, 10);
  assert.equal(page.content, entries[9]!.text.slice(7, 17));
  assert.equal(page.nextOffset, 17);
  await referenceSync('fixture', false);
  assert.deepEqual(await readJson(path.join(root, 'home/references/fixture.json')), entries);

  await writeJson(file, [{ ...entries[0], text: 'replacement keyword' }]);
  assert.equal((await referenceRead('fixture-0', 0, 100)).content, 'replacement keyword');
  assert.equal((await referenceSearch('keyword')).length, 1);
  await referenceSync('fixture', false);
  assert.deepEqual(await readJson(path.join(root, 'home/references/fixture.json')), [
    { ...entries[0], text: 'replacement keyword' },
  ]);

  await writeFile(file, '{invalid json');
  await assert.rejects(referenceSearch('keyword'));
  await writeJson(file, entries);
  assert.equal((await referenceSearch('keyword')).length, 3);
  await rm(file);
  assert.deepEqual(await referenceSearch('keyword'), []);
  await writeJson(file, entries);
  assert.equal((await referenceSearch('keyword')).length, 3);

  const other = path.join(root, 'other');
  await mkdir(other);
  process.env.APEXREST_RESOURCES = other;
  assert.deepEqual(await referenceSearch('keyword'), []);
  assert.equal((await referenceRead(references[0]!.id, 0, 5000)).content, references[0]!.text);
});

test('ranked lookup returns owning syntax, exact versions, match windows and stable pagination', async (t) => {
  const root = await mkdtemp(path.join(tmpdir(), 'apexrest-ranked-'));
  const previous = process.env.APEXREST_RESOURCES;
  process.env.APEXREST_RESOURCES = root;
  t.after(async () => {
    if (previous === undefined) delete process.env.APEXREST_RESOURCES;
    else process.env.APEXREST_RESOURCES = previous;
    await rm(root, { recursive: true, force: true });
  });
  const entries = Array.from({ length: 12 }, (_, i) => ({
    id: 'incidental-' + i,
    title: 'Unrelated example ' + i,
    kind: 'template',
    family: 'examples',
    version: '26.1@pinned',
    source: 'local-fixture',
    text: 'A chart series example. ' + 'x'.repeat(1800),
  }));
  entries.push({
    id: 'owner',
    title: 'chart-series',
    kind: 'grammar',
    family: 'grammar',
    version: '26.1@pinned',
    source: 'local-fixture',
    text: '<chart-series> ::= ' + 'x'.repeat(2500) + ' "pageItemsToSubmit" <query-source>\n',
  });
  entries.push({
    id: 'query-rule',
    title: 'query-source',
    kind: 'grammar',
    family: 'grammar',
    version: '26.1@pinned',
    source: 'local-fixture',
    text: '<query-source> ::= "sqlQuery"\n',
  });
  await writeJson(path.join(root, 'references/index.json'), entries);
  const first = await referenceSearch('chart series', '26.1', { limit: 3 });
  assert.equal(first[0]?.id, 'owner', 'owning production must outrank earlier incidental mentions');
  assert.equal(first[0]?.totalMatches, 13);
  assert.equal(first[0]?.nextResultOffset, 3);
  const second = await referenceSearch('chart series', '26.1', { offset: 3, limit: 3 });
  assert.ok(second.every((hit) => !first.some((prior) => prior.id === hit.id)));
  assert.equal((await referenceSearch('chart series', '26.1@other')).length, 0);
  assert.equal((await referenceSearch('chart series', '26.2')).length, 0);
  assert.equal((await referenceSearch('chart series', '26.1@pinned', { kind: 'grammar' })).length, 1);
  assert.equal((await referenceSearch('chart series', '26.1', { family: 'grammar' })).length, 1);
  const property = (await referenceSearch('pageItemsToSubmit', '26.1'))[0]!;
  assert.ok(property.offset > 1200);
  assert.match(property.text, /pageItemsToSubmit/);
  assert.equal(property.text, entries[12]!.text.slice(property.offset, property.offset + 1200));
  const spaced = (await referenceSearch('page items to submit', '26.1'))[0]!;
  assert.equal(spaced.id, property.id);
  assert.match(spaced.text, /pageItemsToSubmit/);
  assert.equal((await referenceSearch('owner'))[0]?.id, 'owner');
  assert.deepEqual(await referenceSearch('!!!'), []);
  assert.deepEqual(await referenceSearch('   '), []);
  assert.deepEqual(await referenceSearch('not-present anywhere'), []);
  const production = await referenceRead('grammar:chart-series', 2400, 500);
  assert.equal(production.id, 'owner');
  assert.ok(production.related.includes('query-rule'));
  assert.equal(production.content, entries[12]!.text.slice(2400, 2900));
});
