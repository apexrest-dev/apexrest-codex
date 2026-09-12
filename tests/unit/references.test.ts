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
      (result) => result.length === 8 && result[0]?.id === 'fixture-0' && result[0]?.text.length === 1200,
    ),
  );
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
  assert.equal((await referenceSearch('keyword')).length, 8);
  await rm(file);
  assert.deepEqual(await referenceSearch('keyword'), []);
  await writeJson(file, entries);
  assert.equal((await referenceSearch('keyword')).length, 8);

  const other = path.join(root, 'other');
  await mkdir(other);
  process.env.APEXREST_RESOURCES = other;
  assert.deepEqual(await referenceSearch('keyword'), []);
  assert.equal((await referenceRead(references[0]!.id, 0, 5000)).content, references[0]!.text);
});
