import assert from 'node:assert/strict';
import test from 'node:test';
import {
  parseSqlclJson,
  parseApxDeclarations,
  resolveHelperLinks,
  extractMmdParameters,
  classifyObject,
  parseCaptureArgs,
  extractCompilerResources,
  readSnapshotFile,
  sanitizeDocumentation,
  documentationForRegion,
} from '../../scripts/lib/component-source.mjs';

test('SQLcl metadata parser handles adjacent documents and escaped JSON', () => {
  const a = { results: [{ items: [{ label: 'рядок " { } \\' }] }] };
  assert.deepEqual(parseSqlclJson('Info\n' + JSON.stringify(a) + JSON.stringify(a)), [
    a.results[0].items,
    a.results[0].items,
  ]);
  assert.throws(() => parseSqlclJson('ORA-00942: missing view'), /acquisition error/);
});
test('APEXlang source reader preserves scopes and masks executable literal content', () => {
  const text =
    'page 1 (\n    region demo (\n        name: Demo\n        type: cards\n        appearance {\n            templateOptions: [\n                #DEFAULT#\n                t-Region--noBorder\n            ]\n        }\n        source {\n            sqlQuery:\n                ```sql\n    region fake (\n    )\n                ```\n        }\n        settings {\n            staticId: RealDemo\n        }\n    )\n)';
  const declarations = parseApxDeclarations(text, 4);
  assert.equal(declarations.length, 1);
  assert.equal(declarations[0].properties['settings.staticId'], 'RealDemo');
  assert.deepEqual(declarations[0].arrays['appearance.templateOptions'], ['#DEFAULT#', 't-Region--noBorder']);
});
test('helper resolution uses same-page static IDs, item names and button names', () => {
  const regions = [
    {
      id: 'h',
      pageId: 1,
      key: 'demo',
      type: 'plugin/componentInstructions',
      settings: { staticId: 'RealDemo' },
    },
    { id: 'real', pageId: 1, staticId: 'RealDemo', type: 'cards' },
    { id: 'other', pageId: 2, staticId: 'RealDemo', type: 'cards' },
  ];
  assert.equal(resolveHelperLinks(regions, [], [])[0].targetId, 'real');
  assert.throws(
    () => resolveHelperLinks([...regions, { id: 'ambiguous', pageId: 1, staticId: 'RealDemo' }], [], []),
    /Ambiguous/,
  );
  const missing = resolveHelperLinks(
    [{ id: 'h', pageId: 1, type: 'plugin/componentInstructions', settings: { staticId: 'absent' } }],
    [],
    [],
  )[0];
  assert.equal(missing.status, 'unresolved');
  assert.ok(missing.reason);
  assert.equal(
    resolveHelperLinks(
      [
        {
          id: 'i',
          pageId: 1,
          type: 'plugin/componentInstructions',
          settings: { componentType: 'ITEM', staticId: 'P1_NAME' },
        },
      ],
      [{ id: 'item', pageId: 1, name: 'P1_NAME' }],
      [],
    )[0].targetId,
    'item',
  );
});
test('MMD properties are identified by component and complete path with typed constraints', () => {
  const metadata = {
    buildID: '26.1',
    properties: {
      1: {
        name: 'type',
        groupName: 'identification',
        label: { en: 'Type' },
        type: 'SELECT LIST',
        lov: { values: [{ name: 'cards', r: 'NATIVE_CARDS', d: { en: 'Cards' } }] },
      },
    },
    componentTypes: {
      5110: {
        name: { singular: 'region' },
        title: { singular: { en: 'Region' } },
        properties: {
          1: {
            propertyName: 'type',
            groupName: 'identification',
            isRequired: true,
            defaultValue: 'NATIVE_CARDS',
          },
        },
      },
      5120: {
        name: { singular: 'pageItem' },
        properties: { 1: { propertyName: 'type', groupName: 'identification' } },
      },
    },
  };
  const params = extractMmdParameters(metadata);
  assert.deepEqual(
    params.map((p) => p.apexlangPath),
    ['region.type', 'pageItem.type'],
  );
  assert.notEqual(params[0].id, params[1].id);
  assert.deepEqual(params[0].values, [{ name: 'cards', returnValue: 'NATIVE_CARDS', label: 'Cards' }]);
});
test('source inventory classifies documentation, helpers and historical objects explicitly', () => {
  assert.equal(classifyObject({ name: 'Configuration' }), 'documentation');
  assert.equal(classifyObject({ name: 'Preview', type: 'plugin/previewTemplateOptions' }), 'scaffolding');
  assert.equal(classifyObject({ name: 'jQuery Mobile Components' }), 'historical');
  assert.equal(classifyObject({ name: 'Metric Card', type: 'templateComponent/metricCard' }), 'example');
});

test('published source inventory is complete, safely scoped and has resolved helper links', async () => {
  const { readFile } = await import('node:fs/promises');
  const directory = new URL('../../resources/components/source/', import.meta.url);
  const inventory = JSON.parse(await readFile(new URL('inventory.json', directory), 'utf8'));
  const snapshot = JSON.parse(await readFile(new URL('snapshot.json', directory), 'utf8'));
  for (const kind of ['pages', 'regions', 'items', 'buttons', 'lists']) {
    assert.equal(inventory[kind].length, snapshot.counts[kind]);
    assert.equal(new Set(inventory[kind].map((r) => r.id)).size, inventory[kind].length);
    assert.ok(
      inventory[kind].every((r) =>
        ['example', 'documentation', 'scaffolding', 'historical'].includes(r.classification),
      ),
    );
  }
  assert.deepEqual(snapshot.baselineDiff, []);
  assert.equal(inventory.itemTypes.length, 27);
  assert.equal(inventory.helperLinks.length, 117);
  const objects = [...inventory.regions, ...inventory.items, ...inventory.buttons];
  for (const helper of inventory.helperLinks) {
    assert.equal(helper.status, 'resolved');
    assert.equal(objects.find((r) => r.id === helper.targetId)?.pageId, helper.pageId);
  }
  assert.equal(inventory.helperLinks.filter((h) => h.helperType === 'componentInstructions').length, 53);
  assert.equal(inventory.helperLinks.filter((h) => h.helperType === 'previewTemplateOptions').length, 43);
  assert.equal(inventory.helperLinks.filter((h) => h.helperType === 'regionSourceCode').length, 21);
  for (const file of ['inventory.json', 'parameters.json', 'component-list.json', 'snapshot.json']) {
    const text = await readFile(new URL(file, directory), 'utf8');
    assert.doesNotMatch(
      text,
      /oraclecloudapps\.com|oraclecloud\.com|WKSP_APEXAPP|\/Users\/|checksumSalt|EBA_UT_/,
    );
  }
});

test('parameter metadata retains scoped paths, enum joins, inherited defaults and source help', async () => {
  const { readFile } = await import('node:fs/promises');
  const p = JSON.parse(
    await readFile(new URL('../../resources/components/source/parameters.json', import.meta.url), 'utf8'),
  );
  for (const kind of [
    'templateOptions',
    'templateOptionGroups',
    'templateDefaults',
    'utAttributes',
    'nativeParameters',
  ])
    assert.equal(new Set(p[kind].map((r) => r.id)).size, p[kind].length, kind);
  assert.equal(p.templateOptions.length, 539);
  assert.equal(p.templateOptions.filter((r) => r.sourceHasHelp).length, 245);
  assert.equal(p.utAttributes.length, 164);
  assert.equal(p.utAttributes.filter((r) => r.sourceHasHelp).length, 137);
  assert.ok(
    p.utAttributes.some(
      (r) => r.pluginKey === 'metricCard' && r.apexlangPath === 'region.plugin-avatar.type',
    ),
  );
  assert.ok(
    p.utAttributes.some(
      (r) => r.pluginKey === 'metricCard' && r.apexlangPath === 'region.plugin-badge.type',
    ) === false,
  );
  assert.equal(
    p.nativeParameters.find(
      (r) => r.nativeType === 'regionDisplaySelector' && r.attributeKey === 'includeSlider',
    )?.context,
    'componentSetting',
  );
  for (const value of p.utAttributeValues) assert.ok(p.utAttributes.some((r) => r.id === value.attributeId));
  for (const option of p.templateOptions)
    if (option.groupId) assert.ok(p.templateOptionGroups.some((r) => r.id === option.groupId));
  assert.ok(p.templateDefaults.some((r) => r.defaultOptions.length));
  assert.ok(p.templateDefaults.some((r) => r.presetOptions.length));
  assert.ok(p.templateOptionGroups.some((r) => r.advanced));
  assert.ok(
    p.nativeParameters.some(
      (r) =>
        r.nativeType === 'interactiveGrid' &&
        r.componentCondition?.conditions?.some((c) => c.path === 'region.type'),
    ),
  );
});

test('capture CLI rejects unsafe applications, misspelled options and mixed acquisition/publication', () => {
  const args = [
    '--connection',
    'apex-app',
    '--application',
    '100',
    '--workspace',
    'APEX-APP',
    '--schema',
    'WKSP_APEXAPP',
    '--output',
    '/tmp/new-private',
    '--compiler',
    '/path/compiler.jar',
  ];
  assert.equal(parseCaptureArgs(args).application, '100');
  for (const bad of ['0', '-1', '1e5', '9007199254740992', '100;delete'])
    assert.throws(() => parseCaptureArgs(args.map((a, i) => (i === 3 ? bad : a))), /positive safe integer/);
  assert.throws(() => parseCaptureArgs([...args, '--complier', 'x']), /Unknown/);
  assert.throws(() => parseCaptureArgs([...args, '--sqlcl']), /Missing value/);
  assert.throws(() => parseCaptureArgs([...args, '--application', '100']), /Repeated/);
  assert.throws(() => parseCaptureArgs([...args, '--publish', 'public']), /separate offline/);
  assert.throws(
    () => parseCaptureArgs(['--snapshot', 'private', '--publish', 'public', '--connection', 'apex-app']),
    /only/,
  );
});
test('compiler resource extraction selects only bounded metadata entries without external unzip', async () => {
  const { zipSync } = await import('fflate');
  const bytes = zipSync({
    'apexlang_meta_data.json': Buffer.from('{}'),
    'apexlang.zip': Buffer.from('zip'),
    'private/ignored.class': Buffer.from('never publish'),
  });
  assert.deepEqual(Object.keys(extractCompilerResources(bytes)).sort(), [
    'apexlang.zip',
    'apexlang_meta_data.json',
  ]);
  assert.throws(
    () => extractCompilerResources(zipSync({ 'apexlang.zip': Buffer.from('zip') })),
    /Missing compiler resource/,
  );
  const oversized = zipSync({
    'apexlang_meta_data.json': new Uint8Array(16 * 1024 * 1024 + 1),
    'apexlang.zip': Buffer.from('zip'),
  });
  assert.throws(() => extractCompilerResources(oversized), /Oversized compiler resource/);
});
test('private snapshot reads reject traversal and symbolic-link escapes', async () => {
  const { mkdtemp, writeFile, symlink, rm } = await import('node:fs/promises');
  const { tmpdir } = await import('node:os');
  const path = await import('node:path');
  const directory = await mkdtemp(path.join(tmpdir(), 'component-source-path-'));
  try {
    await writeFile(path.join(directory, 'safe.json'), '{}');
    assert.equal((await readSnapshotFile(directory, 'safe.json')).toString(), '{}');
    await assert.rejects(readSnapshotFile(directory, '../outside.json'), /escapes/);
    await assert.rejects(readSnapshotFile(directory, path.join(directory, 'safe.json')), /escapes/);
    await symlink('safe.json', path.join(directory, 'linked.json'));
    await assert.rejects(readSnapshotFile(directory, 'linked.json'), /symbolic/);
    await assert.rejects(readSnapshotFile(directory, 'safe.json', 1), /oversized/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test('source prose keeps meaningful instructions while excluding source code, HTML and URLs', () => {
  const text =
    '<p>Configure the title and badge.</p><pre>select password from secret_table;</pre><script>alert("no");</script><p>Read <a href="https://private.example/ords/app">the guide</a>.</p><p>https://private.example/ords/app</p>';
  const result = sanitizeDocumentation(text);
  assert.match(result, /Configure the title and badge/);
  assert.match(result, /Read the guide/);
  assert.doesNotMatch(result, /select|password|script|https?:|<|>/);
  assert.equal(
    documentationForRegion({
      kind: 'region',
      properties: { name: 'Overview', type: 'plugin/componentInstructions', 'source.htmlCode': text },
      text: '',
    }),
    '',
  );
  assert.equal(
    documentationForRegion({
      kind: 'region',
      properties: { name: 'Preview', type: 'staticContent', 'source.htmlCode': text },
      text: '',
    }),
    '',
  );
  assert.equal(
    documentationForRegion({
      kind: 'region',
      properties: { name: 'Overview', type: 'staticContent', 'source.htmlCode': '<p>Compact metrics.</p>' },
      text: '',
    }),
    'Compact metrics.',
  );
});

test('captured documentation retains exact page/component provenance and license', async () => {
  const { readFile } = await import('node:fs/promises');
  const directory = new URL('../../resources/components/source/', import.meta.url);
  const inventory = JSON.parse(await readFile(new URL('inventory.json', directory), 'utf8'));
  const list = JSON.parse(await readFile(new URL('component-list.json', directory), 'utf8'));
  const docs = inventory.regions.filter((r) => r.description);
  assert.equal(docs.length, 89);
  assert.equal(list.entries.filter((r) => r.description).length, 46);
  for (const doc of [...docs, ...list.entries]) {
    assert.equal(doc.descriptionOrigin, 'oracle-upl');
    assert.equal(doc.descriptionSource.license, 'UPL-1.0');
    assert.equal(doc.descriptionSource.componentId, doc.id);
    assert.equal(doc.descriptionSource.pageId, doc.pageId);
    assert.ok(doc.descriptionSource.line > 0);
    assert.doesNotMatch(doc.description, /https?:\/\/|<\/?[a-z][^>]*>|EBA_UT_/i);
  }
  assert.match(
    docs.find((r) => r.pageId === 3007 && r.name === 'Overview').description,
    /Metric Card.*key value/,
  );
  assert.ok(docs.some((r) => r.name === 'Configuration' && r.parentRegion));
});
