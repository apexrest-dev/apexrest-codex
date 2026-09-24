import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, mkdir, readFile, writeFile, rm, symlink } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  parsePatternCaptureArgs,
  classifyPatternPage,
  structuralReferences,
  normalizePatternSnapshot,
  writePatternSnapshot,
} from '../../scripts/lib/pattern-source.mjs';
import { parseApxDeclarations } from '../../scripts/lib/component-source.mjs';

async function fixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'pattern-source-test-'));
  await mkdir(path.join(root, 'sample/pages'), { recursive: true });
  const capture = {
    schemaVersion: 1,
    capturedAt: '2026-09-24T00:00:00.000Z',
    applicationId: 101,
    workspace: 'PRIVATE_WORKSPACE',
    schema: 'PRIVATE_SCHEMA',
    sourceId: 'fixture-source',
    exportDirectory: 'sample',
  };
  const metadata = {
    identity: [
      {
        application_id: 101,
        alias: 'SAMPLE',
        application_name: 'Fixture application',
        workspace: capture.workspace,
        owner: capture.schema,
        session_user: capture.schema,
        current_schema: capture.schema,
        apex_version: '26.1.4',
      },
    ],
    themes: [
      {
        theme_number: 42,
        theme_name: 'Universal Theme',
        version: '26.1',
        current_theme_style: 'Iris',
        is_current: 'Yes',
      },
    ],
    pages: [
      {
        page_id: 1,
        page_name: 'Example',
        page_alias: 'EXAMPLE',
        page_mode: 'Normal',
        page_template: 'Standard',
      },
    ],
    regions: [
      {
        page_id: 1,
        region_id: '99999999999999999999',
        region_static_id: 'example',
        region_name: 'Example',
        source_type_code: 'NATIVE_STATIC',
        template: 'Standard',
      },
    ],
    items: [],
    buttons: [],
    dynamicActions: [],
    actions: [],
    processes: [],
    validations: [],
    branches: [],
    lists: [],
    listEntries: [],
    plugins: [],
  };
  await writeFile(path.join(root, 'capture.json'), JSON.stringify(capture));
  await writeFile(path.join(root, 'metadata.json'), JSON.stringify(metadata));
  await writeFile(path.join(root, 'apexlang_meta_data.json'), JSON.stringify({ buildID: '26.1.0+3102' }));
  await writeFile(path.join(root, 'apexlang.zip'), 'private compiler fixture');
  await writeFile(
    path.join(root, 'sample/application.apx'),
    'app SAMPLE (\n    version: 1\n    sessionStateProtection {\n        checksumSalt: NEVER_PUBLISH_SECRET\n    }\n)\n',
  );
  await writeFile(
    path.join(root, 'sample/pages/p00001-example.apx'),
    'page 1 (\n    name: Example\n    region example (\n        name: Example\n        type: staticContent\n        source {\n            htmlCode:\n                ```html\n                <p>Copyrighted prose NEVER_PUBLISH_PROSE</p>\n                ```\n        }\n        appearance {\n            template: @/standard\n        }\n        comments {\n            comments: https://private.invalid/NEVER_PUBLISH_URL\n        }\n    )\n)\n',
  );
  return { root, capture, metadata };
}

test('pattern capture arguments keep source namespaces separate and require explicit replacement', () => {
  const offline = parsePatternCaptureArgs([
    '--snapshot',
    '/tmp/private',
    '--publish',
    '/tmp/public',
    '--source-id',
    'second-source',
    '--replace',
  ]);
  assert.equal(offline.sourceId, 'second-source');
  assert.equal(offline.replace, true);
  for (const invalid of [
    ['--snapshot', '/tmp/a', '--publish', '/tmp/b', '--source-id', '../escape'],
    ['--snapshot', '/tmp/a', '--publish', '/tmp/b', '--replace', '--replace'],
    ['--snapshot', '/tmp/a', '--publish', '/tmp/b', '--source-id'],
    ['--snapshot', '/tmp/a', '--publish', '/tmp/b', '--unknown', 'x'],
  ])
    assert.throws(() => parsePatternCaptureArgs(invalid));
  const live = [
    '--connection',
    'test',
    '--application',
    '101',
    '--workspace',
    'WORKSPACE',
    '--schema',
    'SCHEMA',
    '--output',
    '/tmp/capture',
    '--compiler',
    '/tmp/compiler.jar',
    '--source-id',
    'fixture-source',
  ];
  assert.throws(() => parsePatternCaptureArgs([...live, '--replace']), /offline/);
  assert.throws(() => parsePatternCaptureArgs(live.slice(0, -2)), /Required: --source-id/);
  assert.throws(
    () => parsePatternCaptureArgs(['--snapshot', '/tmp/a', '--publish', '/tmp/b']),
    /Required: --source-id/,
  );
  assert.throws(
    () => parsePatternCaptureArgs(live.map((v) => (v === '101' ? '9007199254740992' : v))),
    /positive safe integer/,
  );
});

test('reviewed source page map distinguishes patterns, groups, primitives and unknown sources', () => {
  assert.equal(classifyPatternPage(110), 'pattern');
  assert.equal(classifyPatternPage(500), 'group');
  assert.equal(classifyPatternPage(1110), 'primitives');
  assert.equal(classifyPatternPage(3), 'documentation');
  assert.equal(classifyPatternPage(110, 'another-source'), 'unclassified');
});

test('structural reference extraction excludes prompts, credentials, URLs and literal code', () => {
  const [d] = parseApxDeclarations(
    "region demo (\n    appearance {\n        template: @/standard\n    }\n    source {\n        sqlQuery:\n            ```sql\n            select '@private-ref' from dual\n            ```\n    }\n    credentials {\n        token: @private-token\n    }\n    help {\n        helpText: @private-prose\n    }\n)",
  );
  assert.deepEqual(structuralReferences(d), [
    { property: 'appearance.template', reference: '@/standard', scope: 'theme' },
  ]);
});

test('normalization is deterministic and excludes source code, prose, secrets and private identity', async () => {
  const f = await fixture();
  try {
    const first = await normalizePatternSnapshot(f.root);
    const second = await normalizePatternSnapshot(f.root);
    assert.deepEqual(first, second);
    const text = JSON.stringify(first);
    assert.doesNotMatch(
      text,
      /NEVER_PUBLISH|PRIVATE_SCHEMA|PRIVATE_WORKSPACE|private\.invalid|checksumSalt|htmlCode/,
    );
    assert.equal(first.inventory.regions[0].oracleId, '99999999999999999999');
    assert.equal(first.snapshot.rights.status, 'unverified');
    assert.equal(first.snapshot.source.officialUrl, null);
    assert.equal(first.snapshot.source.apexVersion, '26.1.4');
    assert.equal(first.inventory.pages[0].classification, 'unclassified');
    assert.equal(first.inventory.regions[0].readiness, 'candidate');
    assert.match(first.inventory.regions[0].provenance.sha256, /^[a-f0-9]{64}$/);
  } finally {
    await rm(f.root, { recursive: true, force: true });
  }
});

test('snapshot normalization fails closed on identity drift and incomplete inventory', async () => {
  const f = await fixture();
  try {
    f.metadata.identity[0].current_schema = 'WRONG';
    await writeFile(path.join(f.root, 'metadata.json'), JSON.stringify(f.metadata));
    await assert.rejects(normalizePatternSnapshot(f.root), /identity/);
    f.metadata.identity[0].current_schema = f.capture.schema;
    f.metadata.regions = [];
    await writeFile(path.join(f.root, 'metadata.json'), JSON.stringify(f.metadata));
    await assert.rejects(normalizePatternSnapshot(f.root), /count mismatch/);
  } finally {
    await rm(f.root, { recursive: true, force: true });
  }
});

test('untrusted export paths cannot escape private snapshots', async () => {
  const f = await fixture();
  try {
    f.capture.exportDirectory = '../outside';
    await writeFile(path.join(f.root, 'capture.json'), JSON.stringify(f.capture));
    await assert.rejects(normalizePatternSnapshot(f.root), /export directory/);
    f.capture.exportDirectory = 'sample';
    await writeFile(path.join(f.root, 'capture.json'), JSON.stringify(f.capture));
    if (process.platform !== 'win32') {
      await symlink(path.join(f.root, 'metadata.json'), path.join(f.root, 'sample/linked.apx'));
      await assert.rejects(normalizePatternSnapshot(f.root), /symbolic links/);
    }
  } finally {
    await rm(f.root, { recursive: true, force: true });
  }
});

test('publishing a second source preserves existing source and replacement reports count drift', async () => {
  const f = await fixture();
  try {
    const normalized = await normalizePatternSnapshot(f.root);
    const output = path.join(f.root, 'published');
    await writePatternSnapshot(normalized, output);
    await assert.rejects(writePatternSnapshot(normalized, output), /--replace/);
    const prior = await readFile(path.join(output, 'fixture-source/snapshot.json'), 'utf8');
    const other = await normalizePatternSnapshot(f.root, { sourceId: 'second-source' });
    await writePatternSnapshot(other, output);
    assert.equal(await readFile(path.join(output, 'fixture-source/snapshot.json'), 'utf8'), prior);
    normalized.snapshot.counts.pages = 2;
    const diff = await writePatternSnapshot(normalized, output, { replace: true });
    assert.deepEqual(diff.countDiff, [{ key: 'pages', previous: 1, current: 2 }]);
  } finally {
    await rm(f.root, { recursive: true, force: true });
  }
});

test('published UX source accounts for the complete read-only capture without claiming recipe readiness', async () => {
  const base = new URL('../../resources/patterns/source/ux-pattern-catalog/', import.meta.url);
  const snapshot = JSON.parse(await readFile(new URL('snapshot.json', base), 'utf8'));
  const inventory = JSON.parse(await readFile(new URL('inventory.json', base), 'utf8'));
  for (const [key, expected] of Object.entries({
    pages: 28,
    regions: 230,
    items: 32,
    buttons: 58,
    dynamicActions: 12,
    dynamicActionSteps: 20,
    actions: 74,
    processes: 2,
    validations: 0,
    branches: 0,
    lists: 4,
    listEntries: 39,
    plugins: 10,
  })) {
    assert.equal(snapshot.counts[key], expected, key);
    assert.equal(inventory[key].length, expected, key);
  }
  const ids = new Set(inventory.objects.map((o) => o.id));
  assert.equal(ids.size, inventory.objects.length);
  assert.ok(inventory.objects.every((o) => o.readiness === 'candidate'));
  assert.ok(inventory.sharedReferences.every((ref) => ids.has(ref.ownerId)));
  assert.ok(
    inventory.dynamicActionSteps.every((action) =>
      inventory.dynamicActions.some((da) => da.id === action.parentId),
    ),
  );
  assert.equal(inventory.pages.find((p) => p.pageId === 500).coverage, 'placeholder-only');
  assert.match(inventory.pages.find((p) => p.pageId === 410).limitations.join(' '), /no save\/DML/);
  for (const value of [snapshot, inventory])
    assert.doesNotMatch(
      JSON.stringify(value),
      /WKSP_APEXAPP|APEX-APP|oraclecloud(?:apps)?\.com|\/Users\/|checksumSalt|```|\bSELECT\s.+\bFROM\b/i,
    );
  assert.equal(snapshot.rights.sourceLicense, null);
  assert.equal(snapshot.verification.browser, 'not-run');
});

test('normalization preserves anonymous branches, quoted identifiers and distinct DOM/key namespaces', async () => {
  const f = await fixture();
  try {
    f.metadata.regions[0].region_static_id = 'example';
    f.metadata.regions[0].static_id = 'instructions';
    f.metadata.regions.push({
      page_id: 1,
      region_id: '99999999999999999998',
      region_static_id: 'instructions',
      region_name: 'Instructions',
    });
    f.metadata.branches = [
      { page_id: 1, branch_id: '101', process_sequence: 10 },
      { page_id: 1, branch_id: '102', process_sequence: 20 },
    ];
    await writeFile(path.join(f.root, 'metadata.json'), JSON.stringify(f.metadata));
    await writeFile(
      path.join(f.root, 'sample/pages/p00001-example.apx'),
      `page 1 (
    name: Example
    region example (
        name: Example
        type: staticContent
        column '#A01#' (
            name: Attribute
        )
    )
    region instructions (
        name: Instructions
        type: staticContent
    )
    branch (
        execution {
            sequence: 10
        }
    )
    branch (
        execution {
            sequence: 20
        }
    )
)
`,
    );
    await mkdir(path.join(f.root, 'sample/shared-components'), { recursive: true });
    await writeFile(
      path.join(f.root, 'sample/shared-components/options.apx'),
      `templateOptionGroup display-mode (
    templateType: page
    name: Display Mode
)
templateOptionGroup display-mode (
    templateType: region
    name: Display Mode
)
installScript "Create Sample Table" (
    sequence: 10
)
`,
    );
    const { inventory } = await normalizePatternSnapshot(f.root);
    assert.equal(inventory.regions.find((r) => r.key === 'example').oracleId, '99999999999999999999');
    assert.equal(inventory.regions.find((r) => r.key === 'instructions').oracleId, '99999999999999999998');
    assert.deepEqual(
      inventory.branches.map((r) => r.oracleId),
      ['101', '102'],
    );
    assert.equal(new Set(inventory.objects.map((r) => r.id)).size, inventory.objects.length);
    assert.ok(inventory.objects.some((r) => r.id.includes('column:~%27%23A01%23%27')));
    assert.ok(inventory.objects.some((r) => r.id.includes('templateOptionGroup:page/display-mode')));
    assert.ok(inventory.objects.some((r) => r.id.includes('templateOptionGroup:region/display-mode')));
    assert.ok(inventory.objects.some((r) => r.id.includes('Create%20Sample%20Table')));
    assert.equal(inventory.objects.find((r) => r.kind === 'page').name, 'Example');
  } finally {
    await rm(f.root, { recursive: true, force: true });
  }
});
