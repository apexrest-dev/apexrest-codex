import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { stripVTControlCharacters } from 'node:util';
import {
  apexlangCatalogue,
  filterApexlang,
  loadApexlangCatalogue,
} from '../../packages/cli/src/tui-apexlang.ts';
import { homeFrame } from '../../packages/cli/src/tui-home.ts';
import { commands } from '../../packages/cli/src/tui-catalog.ts';
import { clip } from '../../packages/cli/src/tui-view.ts';

const file = 'resources/references/index.json';

test('dashboard lists actual Oracle families, combining nested chart references and excluding scaffolding', async () => {
  const source = JSON.parse(await readFile(file, 'utf8'));
  const catalogue = await loadApexlangCatalogue(file);
  assert.equal(catalogue.version, '26.1@b94ccf4');
  assert.equal(catalogue.items.filter((item) => item.group === 'Page items').length, 23);
  assert.equal(new Set(catalogue.items.map((item) => item.family)).size, catalogue.items.length);
  for (const item of catalogue.items) {
    const documents = source.filter(
      (record: { kind: string; family?: string }) =>
        record.kind !== 'grammar' &&
        (record.family === item.family || record.family?.startsWith(item.family + '/')),
    );
    assert.equal(item.documents, documents.length, item.family);
  }
  for (const family of [
    'region-components/chart',
    'shared-components/ai-agents',
    'business-logic/validations',
    'workspace-components/credentials',
    'template-components/comments',
    'buttons',
  ])
    assert.ok(
      catalogue.items.some((item) => item.family === family),
      family,
    );
  assert.ok(catalogue.items.every((item) => !/policies|_shared|config\/|grammar/.test(item.family)));
  assert.equal(catalogue.items.filter((item) => item.family.startsWith('region-components/chart')).length, 1);
  assert.deepEqual(
    filterApexlang(catalogue, 'page items select').map((item) => item.name),
    ['Select list', 'Select many', 'Select one'],
  );
  assert.equal(filterApexlang(catalogue, 'select-list').length, 1);
  assert.equal(filterApexlang(catalogue, 'unsupported-nothing').length, 0);
});

test('unreadable, empty or malformed catalogues cannot appear as supported inventories', async () => {
  await assert.rejects(loadApexlangCatalogue('/tmp/apexrest-nonexistent-catalogue/index.json'));
  assert.throws(() => apexlangCatalogue({ items: [] }));
  assert.throws(() => apexlangCatalogue([]));
  assert.throws(() => apexlangCatalogue([null]));
  assert.throws(() => apexlangCatalogue([{ kind: 'template', family: 'items/text-field' }]));
});

test('home dashboard fits supported sizes and exposes every catalogue row through selection', async () => {
  const catalogue = await loadApexlangCatalogue(file);
  for (const [width, height] of [
    [28, 9],
    [48, 13],
    [78, 23],
    [108, 23],
    [118, 35],
  ]) {
    for (const focus of ['actions', 'apexlang'] as const) {
      for (const color of [false, true]) {
        const frame = homeFrame({
          width: width!,
          height: height!,
          color,
          actions: commands,
          selected: 5,
          query: '',
          focus,
          catalogue,
          catalogueError: false,
          catalogueQuery: '',
          catalogueSelected: catalogue.items.length - 1,
        });
        assert.equal(frame.length, height);
        assert.match(stripVTControlCharacters(frame.at(-1)!), /Tab.*Esc/);
        for (const line of frame) assert.equal(clip(line, width!), stripVTControlCharacters(line));
        assert.match(frame.map(stripVTControlCharacters).join('\n'), /APEXREST/);
      }
    }
  }
  for (let selected = 0; selected < catalogue.items.length; selected++) {
    const frame = homeFrame({
      width: 78,
      height: 23,
      color: false,
      actions: commands,
      selected: 0,
      query: '',
      focus: 'apexlang',
      catalogue,
      catalogueError: false,
      catalogueQuery: '',
      catalogueSelected: selected,
    });
    assert.ok(
      frame.some((line) => line.startsWith('> ') && line.includes(catalogue.items[selected]!.name)),
      catalogue.items[selected]!.name,
    );
  }
});
