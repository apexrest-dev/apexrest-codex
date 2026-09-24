import { mkdir, readFile, writeFile, readdir, lstat } from 'node:fs/promises';
import path from 'node:path';
import { parseCaptureArgs, parseApxDeclarations, readSnapshotFile, sha256 } from './component-source.mjs';

export function parsePatternCaptureArgs(argv) {
  const forwarded = [],
    options = {};
  for (let i = 0; i < argv.length; i++) {
    const name = argv[i];
    if (name === '--replace') {
      if (options.replace) throw new Error('Repeated capture argument: --replace');
      options.replace = true;
    } else if (name === '--source-id') {
      if (options.sourceId) throw new Error('Repeated capture argument: --source-id');
      const value = argv[++i];
      if (!value || !/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(value))
        throw new Error('Source ID must be a lowercase hyphenated identifier.');
      options.sourceId = value;
    } else forwarded.push(name);
  }
  const args = parseCaptureArgs(forwarded);
  if (options.replace && !args.snapshot) throw new Error('--replace is only for offline normalization.');
  if (!options.sourceId)
    throw new Error('Required: --source-id. Choose a stable source namespace explicitly.');
  return { ...args, ...options };
}

const label = (value) => {
  if (value == null) return null;
  const text = String(value);
  return text.length <= 240 && !/[\r\n<>]|(?:https?:|mailto:|javascript:|data:|\b\w+@\w+\.\w+)/i.test(text)
    ? text
    : '[redacted]';
};
const sourceIdValid = (value) => typeof value === 'string' && /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(value);
const identifier = (value) => {
  const text = String(value ?? '').replace(/^"([^"]+)"$/, '$1');
  if (
    !text ||
    text.length > 240 ||
    /[\r\n<>]/.test(text) ||
    text.includes('..') ||
    label(text) === '[redacted]'
  )
    throw new Error('Unsafe source declaration identifier.');
  // Exported SQL column aliases and supporting-script names can contain quotes
  // or spaces. Encode their identity without interpreting it as a file path.
  return /^[A-Za-z0-9_$#@.\/-]+$/.test(text) ? text : '~' + encodeURIComponent(text).replaceAll("'", '%27');
};
const safeProperty =
  /^(?:type|action|appearance\.(?:template|pageTemplate)|componentAppearance\.(?:display|template|reportTemplate|listTemplate|breadcrumbTemplate)|source\.(?:type|location|sampleData)|layout\.(?:parentRegion|region|slot|sequence|startNewRow|columnSpan)|execution\.(?:point|sequence|fireOnInitialization)|when\.(?:event|selectionType|region|button)|affectedElements\.(?:selectionType|region|button)|settings\.(?:type|displayAs)|serverSideCondition\.type)$/;
const cleanProperty = (value) =>
  typeof value === 'string' &&
  value.length <= 180 &&
  /^[\p{L}\p{N}_@./#:$ -]+$/u.test(value) &&
  !/(?:https?:|javascript:|\b(?:select|begin|declare|insert|update|delete)\s)/i.test(value);

export function classifyPatternPage(pageId, sourceId = 'ux-pattern-catalog') {
  if (pageId === 0) return 'scaffolding';
  if (sourceId === 'ux-pattern-catalog') {
    if ([100, 200, 300, 400, 500].includes(pageId)) return 'group';
    if ([1100, 1110, 1120, 1130].includes(pageId)) return 'primitives';
    if ([1, 2, 3, 4].includes(pageId)) return 'documentation';
    if ([110, 120, 130, 210, 220, 230, 240, 250, 310, 320, 330, 340, 410, 420].includes(pageId))
      return 'pattern';
  }
  return 'unclassified';
}

export function classifyPatternObject(kind, name, pageClassification) {
  if (
    kind === 'region' &&
    /^(?:about|catalog information|catalog updates|reusable apex ux patterns)\b/i.test(name)
  )
    return 'documentation';
  if (/^(?:breadcrumb|navigation|footer|header)\b/i.test(name) || pageClassification === 'scaffolding')
    return 'scaffolding';
  if (pageClassification === 'group' || pageClassification === 'documentation')
    return 'navigation-or-documentation';
  return pageClassification === 'primitives' ? 'primitive-example' : 'pattern-part';
}

// Remove all literal bodies before inspecting source references. Code stays private.
export function structuralReferences(declaration) {
  const references = [];
  const properties = [
    ...Object.entries(declaration.properties),
    ...Object.entries(declaration.arrays).flatMap(([key, values]) => values.map((value) => [key, value])),
  ];
  for (const [property, value] of properties) {
    if (
      /credential|secret|password|salt|schema|cookie|token|url|sql|html|javascript|code|comment|help|prompt|expression/i.test(
        property,
      )
    )
      continue;
    for (const match of String(value).matchAll(/(?:^|\s)(@[A-Za-z0-9_./-]+)/g))
      references.push({
        property,
        reference: match[1],
        scope: match[1].startsWith('@/') ? 'theme' : 'application-or-page',
      });
  }
  return references;
}

const pageNotes = (pageId, sourceId) =>
  sourceId !== 'ux-pattern-catalog'
    ? []
    : ({
        250: [
          'The inline AI assistant action requires an approved AI provider configuration; provider availability is not verified by this snapshot.',
        ],
        330: [
          'Selection behavior refers to an application JavaScript resource; custom code is not redistributed in the source facts.',
        ],
        340: [
          'Tree selection behavior includes custom JavaScript; custom code is not redistributed in the source facts.',
        ],
        410: [
          'The form uses the built-in employees sample dataset and has a form-initialization process; no save/DML process was found.',
        ],
        420: [
          'The drawer form uses the built-in employees sample dataset and has a form-initialization process; no save/DML process was found.',
        ],
        500: [
          'This category lists five conceptual variants with no target page alias; it does not implement those patterns.',
        ],
      }[pageId] ?? []);

export async function normalizePatternSnapshot(directory, { sourceId } = {}) {
  const captureBytes = await readSnapshotFile(directory, 'capture.json');
  const capture = JSON.parse(captureBytes);
  sourceId ??= capture.sourceId ?? 'ux-pattern-catalog';
  if (!sourceIdValid(sourceId)) throw new Error('Invalid stable source ID.');
  if (
    !Number.isSafeInteger(capture.applicationId) ||
    capture.applicationId < 1 ||
    typeof capture.exportDirectory !== 'string' ||
    !/^[A-Za-z0-9][A-Za-z0-9_.-]*$/.test(capture.exportDirectory)
  )
    throw new Error('Invalid private snapshot application or export directory.');
  const metadataBytes = await readSnapshotFile(directory, 'metadata.json');
  const raw = JSON.parse(metadataBytes);
  const identity = raw.identity?.[0];
  if (
    raw.identity?.length !== 1 ||
    identity.application_id !== capture.applicationId ||
    identity.workspace !== capture.workspace ||
    identity.owner !== capture.schema ||
    identity.session_user !== capture.schema ||
    identity.current_schema !== capture.schema
  )
    throw new Error('Snapshot identity does not match its capture manifest.');
  const mmdBytes = await readSnapshotFile(directory, 'apexlang_meta_data.json');
  const mmd = JSON.parse(mmdBytes);
  const bundleBytes = await readSnapshotFile(directory, 'apexlang.zip');
  const exportRoot = path.join(directory, capture.exportDirectory);
  if ((await lstat(exportRoot)).isSymbolicLink()) throw new Error('Snapshot symbolic links are not allowed.');
  const files = [],
    apxFiles = new Map();
  let total = 0;
  async function walk(current, relative = '') {
    for (const entry of (await readdir(current, { withFileTypes: true })).sort((a, b) =>
      a.name.localeCompare(b.name, 'en'),
    )) {
      const name = relative ? `${relative}/${entry.name}` : entry.name;
      if (entry.isSymbolicLink()) throw new Error('Snapshot symbolic links are not allowed.');
      if (entry.isDirectory()) {
        await walk(path.join(current, entry.name), name);
        continue;
      }
      // Deployment and compiler configuration can contain private URLs or identity settings.
      if (name.startsWith('deployments/') || name.startsWith('.apex/')) continue;
      if (++total > 20000) throw new Error('Too many source files.');
      const bytes = await readSnapshotFile(directory, `${capture.exportDirectory}/${name}`, 16 * 1024 * 1024);
      files.push({ file: name, sha256: sha256(bytes), bytes: bytes.length, contentPublished: false });
      if (name.endsWith('.apx')) apxFiles.set(name, bytes.toString('utf8'));
    }
  }
  await walk(exportRoot);
  if (!apxFiles.has('application.apx')) throw new Error('Missing application.apx.');
  const app = parseApxDeclarations(apxFiles.get('application.apx'), 0).find((d) => d.kind === 'app');
  if (!app || app.key !== identity.alias)
    throw new Error('Export application alias does not match live metadata.');
  const theme = raw.themes.find((t) => ['Yes', 'Y'].includes(t.is_current));
  if (!theme) throw new Error('Missing current theme metadata.');

  const inventory = {
    schemaVersion: 1,
    sourceId,
    pages: [],
    regions: [],
    items: [],
    buttons: [],
    dynamicActions: [],
    actions: [],
    processes: [],
    validations: [],
    branches: [],
    sharedComponents: [],
    sharedReferences: [],
    objects: [],
    resources: [],
  };
  const fileDeclarations = new Map();
  for (const [file, text] of apxFiles) {
    const declarations = parseApxDeclarations(text);
    const scoped = [];
    for (const d of declarations) {
      const endLine = d.line + d.text.split('\n').length - 1;
      const parent = scoped.findLast((old) => old.line < d.line && old.endLine > endLine);
      const context =
        d.kind === 'templateOptionGroup' && d.properties.templateType
          ? `${identifier(d.properties.templateType)}/`
          : '';
      const own = `${d.kind}:${context}${identifier(d.key)}`;
      const id = parent
        ? `${parent.id}/${own}`
        : `source:${sourceId}/${file.startsWith('pages/') ? own : `${file}/${own}`}`;
      const pageId = file.startsWith('pages/')
        ? Number(declarations.find((row) => row.kind === 'page')?.key)
        : null;
      if (pageId !== null && !Number.isSafeInteger(pageId))
        throw new Error(`Invalid page declaration in ${file}.`);
      const name = label(d.properties.name ?? d.key);
      const record = {
        id,
        sourceId,
        pageId,
        kind: d.kind,
        key: d.key,
        name,
        parentId: parent?.id ?? null,
        type: label(d.properties.type ?? d.properties.action ?? null),
        properties: Object.fromEntries(
          Object.entries(d.properties).filter(
            ([key, value]) => safeProperty.test(key) && cleanProperty(value),
          ),
        ),
        provenance: {
          sourceId,
          applicationId: capture.applicationId,
          pageId,
          sourceFile: file,
          line: d.line,
          sha256: sha256(d.text),
          rights: 'structural-facts-only',
        },
        classification: classifyPatternObject(d.kind, name, classifyPatternPage(pageId, sourceId)),
        readiness: 'candidate',
      };
      const entry = { ...record, line: d.line, endLine, declaration: d };
      scoped.push(entry);
      inventory.objects.push(record);
      for (const reference of structuralReferences(d))
        inventory.sharedReferences.push({
          id: `${id}/reference:${inventory.sharedReferences.length + 1}`,
          ownerId: id,
          pageId,
          ...reference,
          resolution: 'requires-context-review',
          provenance: record.provenance,
        });
      if (file.startsWith('shared-components/')) inventory.sharedComponents.push(record);
      if (d.kind === 'action') inventory.actions.push(record);
      if (d.kind === 'pageItem') inventory.items.push(record);
      if (['region', 'button', 'dynamicAction', 'process', 'validation', 'branch'].includes(d.kind)) {
        const category = {
          region: 'regions',
          button: 'buttons',
          dynamicAction: 'dynamicActions',
          process: 'processes',
          validation: 'validations',
          branch: 'branches',
        }[d.kind];
        inventory[category].push(record);
      }
    }
    fileDeclarations.set(file, scoped);
  }

  const matchRows = (category, kind, idField, nameField, staticFields = ['static_id']) => {
    if (!Array.isArray(raw[category])) throw new Error(`Missing live metadata set ${category}.`);
    const records = inventory[category];
    if (records.length !== raw[category].length)
      throw new Error(
        `Export/metadata count mismatch for ${category}: ${records.length}/${raw[category].length}`,
      );
    const seen = new Set();
    for (const row of raw[category]) {
      const candidates = records.filter(
        (record) =>
          record.pageId === row.page_id &&
          (staticFields.some((field) => row[field] && record.key === row[field]) ||
            record.name === row[nameField] ||
            record.key === row[nameField] ||
            (kind === 'branch' &&
              !row[nameField] &&
              row.process_sequence != null &&
              record.properties['execution.sequence'] === String(row.process_sequence))) &&
          !seen.has(record.id),
      );
      // APEXlang keys (REGION_STATIC_ID/BUTTON_STATIC_ID) and DOM static IDs
      // are different namespaces; prefer the exported key even when the DOM
      // value happens to equal another component's key.
      const exact =
        staticFields
          .map((field) => candidates.filter((record) => row[field] && record.key === row[field]))
          .find((matches) => matches.length > 0) ?? [];
      const matching = exact.length ? exact : candidates;
      if (matching.length !== 1) throw new Error(`Ambiguous live ${kind} match on page ${row.page_id}.`);
      const record = matching[0];
      seen.add(record.id);
      record.oracleId = String(row[idField]);
      if (kind === 'region')
        Object.assign(record, {
          sourceTypeCode: label(row.source_type_code),
          regionTemplate: label(row.template),
          componentTemplate: label(
            row.report_template ?? row.list_template_override ?? row.breadcrumb_template,
          ),
          parentOracleId: row.parent_region_id ? String(row.parent_region_id) : null,
        });
      if (kind === 'button') record.actionCode = label(row.button_action_code);
    }
  };
  matchRows('regions', 'region', 'region_id', 'region_name', ['region_static_id', 'static_id']);
  matchRows('items', 'item', 'item_id', 'item_name');
  matchRows('buttons', 'button', 'button_id', 'button_name', ['button_static_id', 'static_id']);
  matchRows('dynamicActions', 'dynamicAction', 'dynamic_action_id', 'dynamic_action_name');
  matchRows('processes', 'process', 'process_id', 'process_name');
  matchRows('validations', 'validation', 'validation_id', 'validation_name');
  matchRows('branches', 'branch', 'branch_id', 'branch_name');
  const daIds = new Set(inventory.dynamicActions.map((r) => r.id));
  const daSteps = inventory.actions.filter((r) => daIds.has(r.parentId));
  if (daSteps.length !== raw.actions?.length)
    throw new Error('Dynamic action step count differs from live metadata.');
  inventory.dynamicActionSteps = daSteps;
  for (const row of raw.actions) {
    const parent = inventory.dynamicActions.find(
      (record) => record.oracleId === String(row.dynamic_action_id),
    );
    const matches = daSteps.filter(
      (record) => record.parentId === parent?.id && record.key === row.static_id,
    );
    if (matches.length !== 1) throw new Error(`Ambiguous dynamic action step on page ${row.page_id}.`);
    Object.assign(matches[0], {
      oracleId: String(row.action_id),
      sourceTypeCode: label(row.action_code),
      affectedSelectionType: label(row.affected_elements_type_code),
    });
  }
  inventory.lists = inventory.sharedComponents.filter((record) => record.kind === 'list');
  inventory.listEntries = inventory.sharedComponents.filter(
    (record) => record.kind === 'entry' && record.provenance.sourceFile === 'shared-components/lists.apx',
  );
  for (const key of ['lists', 'listEntries'])
    if (inventory[key].length !== raw[key].length)
      throw new Error(`Export/metadata count mismatch for ${key}.`);
  inventory.plugins = raw.plugins.map((row) => ({
    id: `source:${sourceId}/plugin:${identifier(row.static_id ?? row.apexlang_name ?? row.plugin_id)}`,
    sourceId,
    oracleId: String(row.plugin_id),
    name: label(row.display_name),
    staticId: label(row.static_id),
    apexlangName: label(row.apexlang_name),
    type: label(row.plugin_type),
    themeNumber: row.theme_number ?? null,
    provenance: {
      sourceId,
      applicationId: capture.applicationId,
      metadataSet: 'plugins',
      rights: 'structural-facts-only',
    },
  }));
  for (const row of raw.pages) {
    const file = [...apxFiles.keys()].find((name) =>
      name.startsWith(`pages/p${String(row.page_id).padStart(5, '0')}-`),
    );
    const entries = fileDeclarations.get(file);
    const declaration = entries?.find((d) => d.kind === 'page');
    if (!declaration || Number(declaration.key) !== row.page_id)
      throw new Error(`Missing exported page ${row.page_id}.`);
    const counts = Object.fromEntries(
      [
        'regions',
        'items',
        'buttons',
        'dynamicActions',
        'dynamicActionSteps',
        'actions',
        'processes',
        'validations',
        'branches',
      ].map((key) => [key, inventory[key].filter((r) => r.pageId === row.page_id).length]),
    );
    const classification = classifyPatternPage(row.page_id, sourceId);
    const text = apxFiles.get(file);
    const resourceReferences = [
      ...new Set([...text.matchAll(/#APP_FILES#([A-Za-z0-9_./-]+)/g)].map((m) => m[1])),
    ].sort();
    inventory.pages.push({
      id: declaration.id,
      sourceId,
      pageId: row.page_id,
      name: label(row.page_name),
      alias: label(row.page_alias),
      classification,
      classificationOrigin:
        sourceId === 'ux-pattern-catalog' ? 'reviewed-source-page-map' : 'requires-maintainer-review',
      template: label(row.page_template),
      mode: label(row.page_mode),
      counts,
      regionTypes: [
        ...new Set(inventory.regions.filter((r) => r.pageId === row.page_id).map((r) => r.type)),
      ].sort(),
      resourceReferences,
      readiness: 'candidate',
      limitations: pageNotes(row.page_id, sourceId),
      coverage: sourceId === 'ux-pattern-catalog' && row.page_id === 500 ? 'placeholder-only' : 'inventoried',
      provenance: declaration.provenance,
    });
  }
  const declaredPages = inventory.objects.filter((d) => d.kind === 'page');
  if (declaredPages.length !== raw.pages.length) throw new Error('Page metadata/export count mismatch.');
  for (const file of files.filter((f) => !f.file.endsWith('.apx')))
    inventory.resources.push({
      sourceId,
      ...file,
      kind: path.extname(file.file).slice(1) || 'unknown',
      redistribution: 'not-included',
    });
  const ids = inventory.objects.map((r) => r.id);
  if (new Set(ids).size !== ids.length)
    throw new Error(`Duplicate source object ID: ${ids.find((id, i) => ids.indexOf(id) !== i)}`);
  const counts = Object.fromEntries(
    [
      'pages',
      'regions',
      'items',
      'buttons',
      'dynamicActions',
      'dynamicActionSteps',
      'actions',
      'processes',
      'validations',
      'branches',
      'sharedComponents',
      'sharedReferences',
      'objects',
      'resources',
    ].map((key) => [key, inventory[key].length]),
  );
  counts.patternPages = inventory.pages.filter((p) => p.classification === 'pattern').length;
  counts.groupPages = inventory.pages.filter((p) => p.classification === 'group').length;
  counts.primitivePages = inventory.pages.filter((p) => p.classification === 'primitives').length;
  counts.lists = raw.lists.length;
  counts.listEntries = raw.listEntries.length;
  counts.plugins = raw.plugins.length;
  const snapshot = {
    schemaVersion: 1,
    sourceId,
    capturedAt: capture.capturedAt,
    source: {
      applicationId: capture.applicationId,
      name: label(identity.application_name),
      alias: label(identity.alias),
      applicationVersion: label(app.properties.version),
      apexVersion: label(identity.apex_version),
      themeNumber: theme.theme_number,
      themeName: label(theme.theme_name),
      themeVersion: label(theme.version),
      themeStyle: label(theme.current_theme_style),
      mmdVersion: label(mmd.buildID),
      officialUrl: sourceId === 'universal-theme-reference' ? 'https://apex.oracle.com/ut' : null,
    },
    rights: {
      status: 'unverified',
      publication: 'structural-facts-and-original-summaries-only',
      sourceLicense: null,
      sourceLicenseEvidence:
        'No redistribution terms have been verified for this application; Universal Theme licensing is not assumed to cover its source code, prose or assets.',
      sourceCodeRedistributed: false,
      sourceProseRedistributed: false,
      sourceAssetsRedistributed: false,
    },
    counts,
    sourceDigests: {
      metadata: sha256(metadataBytes),
      capture: sha256(captureBytes),
      mmd: sha256(mmdBytes),
      compilerDefinitions: sha256(bundleBytes),
      export: sha256(JSON.stringify(files)),
      files,
    },
    verification: {
      provenance: 'identity-checked-read-only-export',
      recipeCompilation: 'not-established-by-source-capture',
      sourceQueries: 'not-run',
      import: 'not-run',
      browser: 'not-run',
    },
    publication: {
      excluded: [
        'raw exports',
        'deployment configuration',
        'workspace and schema values',
        'credentials and security settings',
        'source SQL and body code',
        'source prose and binary assets',
        'compiler bundle',
      ],
    },
  };
  const published = JSON.stringify({ snapshot, inventory });
  for (const privateIdentity of [capture.schema, capture.workspace])
    if (privateIdentity && published.includes(privateIdentity))
      throw new Error('Private identity leaked into normalized source facts.');
  return { snapshot, inventory };
}

export async function writePatternSnapshot(normalized, output, { replace = false } = {}) {
  const sourceId = normalized.snapshot?.sourceId;
  if (!sourceIdValid(sourceId) || normalized.inventory?.sourceId !== sourceId)
    throw new Error('Mismatched normalized source IDs.');
  if (normalized.inventory.objects?.some((record) => record.sourceId !== sourceId))
    throw new Error('Normalized object source identity mismatch.');
  await mkdir(output, { recursive: true });
  if ((await lstat(output)).isSymbolicLink()) throw new Error('Source output cannot be a symbolic link.');
  const destination = path.join(output, sourceId);
  let previous;
  try {
    const current = await lstat(destination);
    if (!replace) throw new Error('Source already exists; use --replace after reviewing the source diff.');
    if (!current.isDirectory() || current.isSymbolicLink())
      throw new Error('Invalid source output directory.');
    for (const name of ['snapshot.json', 'inventory.json']) {
      try {
        if ((await lstat(path.join(destination, name))).isSymbolicLink())
          throw new Error('Source output file cannot be a symbolic link.');
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    }
    previous = JSON.parse(await readFile(path.join(destination, 'snapshot.json')));
    if (previous.sourceId !== sourceId) throw new Error('Existing source identity mismatch.');
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    await mkdir(destination);
  }
  for (const [name, value] of Object.entries(normalized))
    if (['snapshot', 'inventory'].includes(name))
      await writeFile(path.join(destination, `${name}.json`), JSON.stringify(value, null, 2) + '\n');
  return {
    sourceId,
    countDiff: previous
      ? Object.keys(normalized.snapshot.counts)
          .filter((key) => previous.counts?.[key] !== normalized.snapshot.counts[key])
          .map((key) => ({
            key,
            previous: previous.counts?.[key] ?? null,
            current: normalized.snapshot.counts[key],
          }))
      : [],
    sourceChanged: previous
      ? previous.sourceDigests.export !== normalized.snapshot.sourceDigests.export
      : null,
  };
}
