import { readFile, writeFile, mkdir, readdir, lstat, realpath } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { unzipSync } from 'fflate';

export function parseCaptureArgs(argv) {
  const allowed = new Set([
    'connection',
    'application',
    'workspace',
    'schema',
    'output',
    'compiler',
    'sqlcl',
    'snapshot',
    'publish',
  ]);
  const result = {};
  for (let i = 0; i < argv.length; i += 2) {
    const name = argv[i];
    if (!name?.startsWith('--') || !allowed.has(name.slice(2)))
      throw new Error(`Unknown capture argument: ${name}`);
    const key = name.slice(2),
      value = argv[i + 1];
    if (!value || value.startsWith('--')) throw new Error(`Missing value for ${name}.`);
    if (Object.hasOwn(result, key)) throw new Error(`Repeated capture argument: ${name}`);
    result[key] = value;
  }
  const required = result.snapshot
    ? ['snapshot', 'publish']
    : ['connection', 'application', 'workspace', 'schema', 'output', 'compiler'];
  for (const key of required) if (!result[key]) throw new Error(`Required: --${key}.`);
  if (result.snapshot && Object.keys(result).some((key) => !['snapshot', 'publish'].includes(key)))
    throw new Error('Offline normalization accepts only --snapshot and --publish.');
  if (!result.snapshot) {
    if (result.publish) throw new Error('Publication is a separate offline --snapshot/--publish operation.');
    if (!/^[1-9]\d*$/.test(result.application) || !Number.isSafeInteger(Number(result.application)))
      throw new Error('Application must be a positive safe integer.');
    if (
      !/^[A-Za-z0-9_.-]+$/.test(result.connection) ||
      !/^[A-Z0-9_-]+$/i.test(result.workspace) ||
      !/^[A-Z0-9_$#]+$/i.test(result.schema)
    )
      throw new Error('Unsafe connection or identity argument.');
  }
  return result;
}
export function extractCompilerResources(bytes) {
  if (bytes.length > 128 * 1024 * 1024)
    throw new Error('Compiler archive exceeds the 128 MiB acquisition limit.');
  const required = ['apexlang_meta_data.json', 'apexlang.zip'];
  const result = unzipSync(bytes, {
    filter: ({ name, originalSize }) => {
      if (!required.includes(name)) return false;
      if (originalSize > 16 * 1024 * 1024) throw new Error(`Oversized compiler resource: ${name}`);
      return true;
    },
  });
  for (const name of required) if (!result[name]) throw new Error(`Missing compiler resource: ${name}`);
  return result;
}
export async function readSnapshotFile(directory, relative, maximum = 32 * 1024 * 1024) {
  if (path.isAbsolute(relative) || relative.split(/[\\/]/).includes('..'))
    throw new Error('Snapshot path escapes its private directory.');
  const root = await realpath(directory),
    filename = path.join(root, relative);
  const parts = relative.split(/[\\/]/).filter(Boolean);
  let current = root;
  for (const part of parts) {
    current = path.join(current, part);
    if ((await lstat(current)).isSymbolicLink()) throw new Error('Snapshot symbolic links are not allowed.');
  }
  const file = await lstat(filename);
  if (!file.isFile() || file.size > maximum) throw new Error('Invalid or oversized private snapshot file.');
  if (!(await realpath(filename)).startsWith(root + path.sep))
    throw new Error('Snapshot path escapes its private directory.');
  return readFile(filename);
}

export const sourceUrl =
  'https://docs.oracle.com/en/database/oracle/apex/26.1/apxdc/universal-theme-reference-app.html';
export const sha256 = (value) => createHash('sha256').update(value).digest('hex');
export const slug = (text) =>
  String(text ?? '')
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z\d]+/g, '-')
    .replace(/^-|-$/g, '');
const yes = (value) => value === 'Yes' || value === 'Y' || value === true;
const plainText = (value) =>
  String(value ?? '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<\/(?:p|li|div|h[1-6])>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(
      /&(?:nbsp|amp|lt|gt|quot);/g,
      (v) => ({ '&nbsp;': ' ', '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '\"' })[v],
    )
    .replace(/\n\s*\n/g, '\n')
    .trim();
export function sanitizeDocumentation(value) {
  return plainText(
    String(value ?? '')
      .replace(/<(script|style|pre|code)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
      .replace(/```[\s\S]*?```/g, '')
      .replace(/<br\s*\/?>/gi, '\n'),
  )
    .replace(/https?:\/\/[^\s<>"']+/gi, '')
    .replace(/(?:f\?p=|\/ords\/)[^\s<>"']*/gi, '')
    .replace(/EBA_UT_[A-Z0-9_]+/g, '[sample table]')
    .split('\n')
    .filter(
      (line) =>
        !/\b(?:select[\s\S]+from|create\s+(?:or\s+replace\s+)?(?:table|function|procedure|trigger)|declare|begin[\s\S]*;|apex\.\w+\s*\()/i.test(
          line,
        ),
    )
    .map((line) =>
      line
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim(),
    )
    .filter(Boolean)
    .join('\n')
    .trim();
}
export function documentationForRegion(declaration) {
  if (
    declaration.kind !== 'region' ||
    declaration.properties.type !== 'staticContent' ||
    !/^(overview|configuration)$/i.test(declaration.properties.name ?? '')
  )
    return '';
  const inline = declaration.properties['source.htmlCode'];
  const fenced = declaration.text.match(/^\s+htmlCode:\s*\n\s+```(?:html)?\n([\s\S]*?)\n\s+```/m)?.[1];
  return sanitizeDocumentation(inline ?? fenced ?? '');
}
const options = (value) =>
  String(value ?? '')
    .split(':')
    .filter(Boolean);
const sorted = (list, key = 'id') =>
  list.sort((a, b) => String(a[key]).localeCompare(String(b[key]), 'en', { numeric: true }));

// SQLcl emits adjacent JSON documents and occasional non-JSON informational lines.
export function parseSqlclJson(text) {
  if (/(?:^|\n)(?:ORA-|SP2-|Error(?: at| starting| report)|Connection failed)/i.test(text))
    throw new Error('SQLcl reported a metadata acquisition error.');
  const result = [];
  for (let offset = 0; offset < text.length;) {
    const start = text.indexOf('{"results":', offset);
    if (start < 0) break;
    let depth = 0,
      quoted = false,
      escaped = false,
      end = start;
    for (; end < text.length; end++) {
      const char = text[end];
      if (quoted) {
        if (escaped) escaped = false;
        else if (char === '\\') escaped = true;
        else if (char === '"') quoted = false;
      } else if (char === '"') quoted = true;
      else if (char === '{') depth++;
      else if (char === '}' && --depth === 0) break;
    }
    const doc = JSON.parse(text.slice(start, end + 1));
    if (!Array.isArray(doc.results) || doc.results.some((row) => !Array.isArray(row.items)))
      throw new Error('Invalid SQLcl result document.');
    result.push(...doc.results.map((row) => row.items));
    offset = end + 1;
  }
  return result;
}

// Read indentation-delimited APEXlang declarations, masking literal code fences first.
export function parseApxDeclarations(text, wantedIndent) {
  const lines = text.replace(/\r\n?/g, '\n').split('\n');
  let fence = false;
  const masked = lines.map((line) => {
    if (/^\s*```/.test(line)) {
      fence = !fence;
      return '';
    }
    return fence ? '' : line;
  });
  const result = [];
  for (let i = 0; i < masked.length; i++) {
    const match = masked[i].match(/^(\s*)([A-Za-z][A-Za-z\d]*) ([^\n]+) \(\s*$/);
    if (!match || (wantedIndent !== undefined && match[1].length !== wantedIndent)) continue;
    const indent = match[1].length;
    let j = i + 1;
    for (; j < masked.length; j++) if (masked[j] === `${' '.repeat(indent)})`) break;
    if (j === masked.length) throw new Error(`Unclosed APEXlang declaration: ${match[2]} ${match[3]}`);
    const properties = {},
      stack = [],
      arrays = {};
    for (let k = i + 1; k < j; k++) {
      const line = masked[k];
      const depth = line.length - line.trimStart().length;
      // Nested component declarations do not contribute parent properties.
      if (line.match(/^\s*[A-Za-z][A-Za-z\d]* [^\n]+ \(\s*$/)) {
        while (++k < j && masked[k] !== `${' '.repeat(depth)})`) {}
        continue;
      }
      while (stack.length && stack.at(-1).indent >= depth) stack.pop();
      const group = line.match(/^\s*([\w-]+) \{\s*$/);
      if (group) {
        stack.push({ name: group[1], indent: depth });
        continue;
      }
      const property = line.match(/^\s*(\w+):\s*(.*)$/);
      if (!property) continue;
      const key = [...stack.map((s) => s.name), property[1]].join('.');
      if (property[2] === '[') {
        const values = [];
        while (++k < j && masked[k].trim() !== ']') if (masked[k].trim()) values.push(masked[k].trim());
        arrays[key] = values;
      } else if (property[2] && property[2] !== '{') properties[key] = property[2];
    }
    result.push({
      kind: match[2],
      key: match[3],
      properties,
      arrays,
      line: i + 1,
      text: lines.slice(i, j + 1).join('\n'),
    });
  }
  return result;
}
const cleanValue = (value) =>
  typeof value === 'string' &&
  !/[\r\n]|https?:|EBA_UT_|\b(?:select|begin|function)\b/i.test(value) &&
  value.length < 240;
const safeSettings = (declaration) =>
  Object.fromEntries(
    Object.entries(declaration.properties)
      .filter(([key, value]) => key.startsWith('settings.') && cleanValue(value))
      .map(([key, value]) => [key.slice(9), value]),
  );
export function classifyObject(record) {
  if (/deprecated|legacy|jquery.mobile/i.test(`${record.name} ${record.type}`)) return 'historical';
  if (/plugin\/(?:componentInstructions|previewTemplateOptions|regionSourceCode)/.test(record.type ?? ''))
    return 'scaffolding';
  if (
    /^(?:overview|configuration|instructions|introduction|about|description|notes|usage|javascript code|sql query|code|help)(?:\b|_)/i.test(
      record.name ?? '',
    )
  )
    return 'documentation';
  if (
    /^(?:breadcrumb|navigation|footer|header|search results|feedback|page zero|redirect)/i.test(
      record.name ?? '',
    ) ||
    /global-page|login-page/.test(record.key ?? '')
  )
    return 'scaffolding';
  return 'example';
}
export function resolveHelperLinks(regions, items, buttons) {
  return regions
    .filter((r) => /plugin\/(componentInstructions|previewTemplateOptions|regionSourceCode)$/.test(r.type))
    .map((helper) => {
      const helperType = helper.type.slice(7);
      const targetType = helper.settings.componentType?.toLowerCase() ?? 'region';
      const targetKey = helper.settings.staticId ?? helper.settings.regionStaticId ?? helper.settings.region;
      const candidates = (targetType === 'item' ? items : targetType === 'button' ? buttons : regions).filter(
        (row) =>
          row.pageId === helper.pageId &&
          row.id !== helper.id &&
          (targetType === 'item'
            ? row.name === targetKey
            : targetType === 'button'
              ? row.name === targetKey || row.staticId === targetKey || row.htmlDomId === targetKey
              : row.staticId === targetKey || row.htmlDomId === targetKey),
      );
      if (candidates.length > 1) throw new Error(`Ambiguous ${helper.id} target ${targetKey}`);
      return {
        sourceId: helper.id,
        pageId: helper.pageId,
        helperType,
        targetType,
        targetKey: targetKey ?? null,
        targetId: candidates[0]?.id ?? null,
        status: candidates.length ? 'resolved' : 'unresolved',
        ...(candidates.length
          ? {}
          : {
              reason: targetKey
                ? 'No matching target in the same page; retained as a source defect.'
                : 'Helper has no literal target setting.',
            }),
      };
    });
}
function normalizeCondition(condition, properties, componentTypes, currentType) {
  if (!condition) return null;
  if (condition.conditions)
    return {
      operator: condition.operator,
      conditions: condition.conditions.map((c) =>
        normalizeCondition(c, properties, componentTypes, currentType),
      ),
    };
  const type = componentTypes[condition.componentTypeId ?? currentType];
  const prop = type?.properties?.[condition.propertyId];
  const base = properties[condition.propertyId];
  return {
    type: condition.type,
    ...(condition.propertyId
      ? {
          propertyId: condition.propertyId,
          path: prop
            ? `${type.name.singular}.${prop.groupName === 'identification' ? '' : prop.groupName + '.'}${prop.propertyName}`
            : (base?.name ?? null),
        }
      : {}),
    ...(condition.hasToExist !== undefined ? { hasToExist: condition.hasToExist } : {}),
    ...(condition.value !== undefined ? { value: condition.value } : {}),
    ...(condition.values !== undefined ? { values: condition.values } : {}),
  };
}
export function extractMmdParameters(mmd) {
  const selected = new Set(
    Object.keys(mmd.componentTypes).filter(
      (id) =>
        (+id >= 5000 && +id < 8800) ||
        ['2510', '2520', '2530', '2540', '2550', '2560', '2580', '3100', '3110'].includes(id),
    ),
  );
  return Object.entries(mmd.componentTypes)
    .filter(([id]) => selected.has(id))
    .flatMap(([componentTypeId, component]) =>
      Object.entries(component.properties ?? {}).map(([propertyId, local]) => {
        const property = mmd.properties[propertyId];
        const group = local.groupName ?? property.groupName;
        const apexlangPath = `${component.name.singular}.${group === 'identification' ? '' : group + '.'}${local.propertyName ?? property.name}`;
        const values = (local.lov?.values ?? property.lov?.values ?? []).map((v) => ({
          name: v.name ?? null,
          returnValue: v.r,
          label: v.d?.en ?? v.name ?? v.r,
        }));
        return {
          id: `mmd:${componentTypeId}:${propertyId}`,
          context: component.name.singular,
          componentTypeId,
          componentTitle: component.title?.singular?.en ?? component.name.singular,
          parentContext: component.parent?.componentTypeId
            ? mmd.componentTypes[component.parent.componentTypeId]?.name.singular
            : null,
          parentComponentTypeId: component.parent?.componentTypeId ?? null,
          componentCondition: normalizeCondition(
            component.parent?.dependingOn ?? component.parent?.condition,
            mmd.properties,
            mmd.componentTypes,
            component.parent?.componentTypeId ?? componentTypeId,
          ),
          propertyId,
          builderLabel: property.label?.en ?? local.propertyName,
          apexlangPath,
          type: property.type,
          required: local.isRequired ?? false,
          defaultValue: local.defaultValue ?? property.defaultValue ?? null,
          values,
          condition: normalizeCondition(
            local.dependingOn ?? property.dependingOn,
            mmd.properties,
            mmd.componentTypes,
            componentTypeId,
          ),
          maxLength: property.maxLen ?? null,
          description: `${property.label?.en ?? local.propertyName} (${property.type.toLowerCase()}) in ${component.name.singular}${group === 'identification' ? '' : '.' + group}.`,
          descriptionOrigin: 'apexrest-factual-summary',
          source: `SQLcl MMD ${mmd.buildID}`,
          sourceHasHelp: Boolean(property.helpText),
        };
      }),
    );
}

export async function normalizeComponentSnapshot(directory) {
  const capture = JSON.parse(await readSnapshotFile(directory, 'capture.json'));
  const metadataBytes = await readSnapshotFile(directory, 'metadata.json');
  const raw = JSON.parse(metadataBytes);
  const mmdBytes = await readSnapshotFile(directory, 'apexlang_meta_data.json');
  const mmd = JSON.parse(mmdBytes);
  const bundleBytes = await readSnapshotFile(directory, 'apexlang.zip');
  let expandedBytes = 0;
  const bundle = unzipSync(bundleBytes, {
    filter: ({ originalSize }) => {
      expandedBytes += originalSize;
      if (originalSize > 8 * 1024 * 1024 || expandedBytes > 64 * 1024 * 1024)
        throw new Error('Compiler definitions exceed safe expansion bounds.');
      return true;
    },
  });
  if (
    typeof capture.exportDirectory !== 'string' ||
    !/^[A-Za-z0-9][A-Za-z0-9_.-]*$/.test(capture.exportDirectory) ||
    !Number.isSafeInteger(capture.applicationId) ||
    capture.applicationId < 1
  )
    throw new Error('Invalid private snapshot application or export directory.');
  const exportRoot = path.join(directory, capture.exportDirectory);
  if ((await lstat(exportRoot)).isSymbolicLink()) throw new Error('Snapshot symbolic links are not allowed.');
  const pages = [],
    regions = [],
    items = [],
    buttons = [],
    digests = [];
  const sourceFiles = {};
  const walk = async (dir, rel = '') => {
    for (const entry of (await readdir(dir, { withFileTypes: true })).sort((a, b) =>
      a.name.localeCompare(b.name, 'en'),
    )) {
      const relative = rel ? `${rel}/${entry.name}` : entry.name;
      if (entry.isSymbolicLink()) throw new Error('Snapshot symbolic links are not allowed.');
      if (entry.isDirectory()) await walk(path.join(dir, entry.name), relative);
      else if (entry.name.endsWith('.apx')) {
        const bytes = await readSnapshotFile(
          directory,
          `${capture.exportDirectory}/${relative}`,
          8 * 1024 * 1024,
        );
        digests.push({ file: relative, sha256: sha256(bytes) });
        sourceFiles[relative] = bytes.toString('utf8');
      }
    }
  };
  await walk(exportRoot);
  for (const live of raw.pages) {
    const filename = Object.keys(sourceFiles).find((file) =>
      file.startsWith(`pages/p${String(live.page_id).padStart(5, '0')}-`),
    );
    if (!filename) throw new Error(`Missing page export ${live.page_id}.`);
    const text = sourceFiles[filename],
      declaration = parseApxDeclarations(text, 0)[0];
    const page = {
      id: `page:${live.page_id}`,
      pageId: live.page_id,
      name: live.page_name,
      alias: live.page_alias,
      group: live.page_group,
      template: live.page_template,
      mode: live.page_mode,
      key: slug(live.page_alias),
      classification: classifyObject({ name: live.page_name, type: 'page' }),
      templateOptions: options(live.page_template_options),
      sourceDigest: sha256(text),
    };
    pages.push(page);
    for (const d of parseApxDeclarations(text, 4)) {
      const name = d.properties.name ?? d.key;
      if (d.kind === 'region') {
        const matching = raw.regions.filter(
          (r) => r.page_id === live.page_id && (r.region_static_id === d.key || r.region_name === name),
        );
        const matches = matching.filter((r) => !regions.some((old) => old.sourceId === String(r.region_id)));
        const row = matches.length === 1 ? matches[0] : matches.find((r) => r.region_static_id === d.key);
        if (!row) throw new Error(`Cannot match exported region ${live.page_id}/${d.key}.`);
        const record = {
          id: `page:${live.page_id}/region:${d.key}`,
          sourceId: String(row.region_id),
          pageId: live.page_id,
          key: d.key,
          name,
          type: d.properties.type ?? 'staticContent',
          sourceTypeCode: row.source_type_code,
          template: row.template,
          componentTemplate:
            row.report_template ?? row.list_template_override ?? row.breadcrumb_template ?? null,
          templateKey: d.properties['appearance.template'] ?? null,
          componentTemplateKey:
            d.properties['componentAppearance.template'] ??
            d.properties['componentAppearance.reportTemplate'] ??
            d.properties['componentAppearance.listTemplate'] ??
            d.properties['componentAppearance.breadcrumbTemplate'] ??
            null,
          staticId: row.static_id,
          htmlDomId: row.html_dom_id,
          parentRegion: row.parent_region_id ? String(row.parent_region_id) : null,
          host: d.properties['source.type'] ?? row.template_component_type_code ?? null,
          regionOptions: options(row.region_template_options),
          componentOptions: options(row.component_template_options),
          settings: safeSettings(d),
          sourceDigest: sha256(d.text),
        };
        record.classification = classifyObject(record);
        const description = documentationForRegion(d);
        if (description)
          Object.assign(record, {
            description,
            descriptionOrigin: 'oracle-upl',
            descriptionSource: {
              applicationId: capture.applicationId,
              pageId: live.page_id,
              componentId: record.id,
              sourceFile: filename,
              line: d.line,
              license: 'UPL-1.0',
            },
          });
        regions.push(record);
      } else if (d.kind === 'pageItem') {
        const row = raw.items.find((r) => r.page_id === live.page_id && r.item_name === d.key);
        if (!row) throw new Error(`Cannot match exported item ${live.page_id}/${d.key}.`);
        const record = {
          id: `page:${live.page_id}/item:${d.key}`,
          sourceId: String(row.item_id),
          pageId: live.page_id,
          key: d.key,
          name: d.key,
          type: d.properties.type,
          displayAs: row.display_as,
          template: row.item_label_template,
          templateOptions: options(row.item_template_options),
          settings: safeSettings(d),
          sourceDigest: sha256(d.text),
        };
        record.classification = classifyObject(record);
        items.push(record);
      } else if (d.kind === 'button') {
        const row = raw.buttons.find(
          (r) => r.page_id === live.page_id && (r.static_id === d.key || r.button_name === d.key),
        );
        if (!row) throw new Error(`Cannot match exported button ${live.page_id}/${d.key}.`);
        const record = {
          id: `page:${live.page_id}/button:${d.key}`,
          sourceId: String(row.button_id),
          pageId: live.page_id,
          key: d.key,
          name: row.button_name,
          type: 'button',
          staticId: row.button_static_id,
          htmlDomId: row.html_dom_id,
          template: row.button_template,
          templateOptions: options(row.button_template_options),
          action: row.button_action_code,
          sourceDigest: sha256(d.text),
        };
        record.classification = classifyObject(record);
        buttons.push(record);
      }
    }
  }
  for (const [key, rows] of Object.entries({ regions, items, buttons }))
    if (rows.length !== raw[key].length)
      throw new Error(`Export/metadata count mismatch for ${key}: ${rows.length}/${raw[key].length}`);
  const lists = raw.lists.map((r) => ({
    id: `list:${r.static_id ?? slug(r.list_name)}`,
    sourceId: String(r.list_id),
    key: r.static_id ?? slug(r.list_name),
    name: r.list_name,
    type: r.list_type_code,
    entries: r.list_entries,
    classification: classifyObject({ name: r.list_name, type: 'list' }),
  }));
  const listEntries = raw.listEntries.map((r) => ({
    id: `list-entry:${r.static_id ?? r.list_entry_id}`,
    listId: lists.find((l) => l.sourceId === String(r.list_id))?.id,
    parentSourceId: r.list_entry_parent_id ? String(r.list_entry_parent_id) : null,
    key: r.static_id ?? slug(r.entry_text),
    label: String(r.entry_text).replace(/<[^>]+>/g, ''),
    sequence: r.display_sequence,
    pageId: Number(r.entry_target?.match(/f\?p=[^:]*:(\d+)/i)?.[1]) || null,
  }));
  const helperLinks = resolveHelperLinks(regions, items, buttons);
  const itemTypes = [...new Set(items.map((r) => r.type))].sort();
  const inventory = {
    pages: sorted(pages),
    regions: sorted(regions),
    items: sorted(items),
    buttons: sorted(buttons),
    lists: sorted(lists),
    listEntries: sorted(listEntries),
    helperLinks: sorted(helperLinks, 'sourceId'),
    itemTypes,
  };
  const templateOptionGroups = raw.templateOptionGroups.map((r) => ({
    id: `template-group:${r.template_types.toLowerCase()}/${r.static_id ?? r.name}`,
    sourceId: String(r.template_opt_group_id),
    name: r.name,
    label: r.display_name,
    templateTypes: options(r.template_types),
    nullText: r.null_text,
    advanced: yes(r.is_advanced),
    sourceHasHelp: Boolean(r.help_text),
    description: r.help_text
      ? plainText(r.help_text)
      : `${r.display_name} choices for ${r.template_types} templates.`,
    descriptionOrigin: r.help_text ? 'oracle-upl' : 'apexrest-factual-summary',
  }));
  const templateOptions = raw.templateOptions.map((r) => ({
    id: `template-option:${r.name}`,
    name: r.name,
    label: r.display_name,
    cssClasses: options(r.css_classes),
    groupId: templateOptionGroups.find((g) => g.sourceId === String(r.group_id))?.id ?? null,
    templateTypes: options(r.template_types),
    templates: Object.fromEntries(
      ['page', 'region', 'report', 'breadcrumb', 'list', 'field', 'button']
        .filter((type) => r[`${type}_template`])
        .map((type) => [type, r[`${type}_template`]]),
    ),
    virtualTemplateType: r.virtual_template_type,
    advanced: yes(r.is_advanced),
    sourceHasHelp: Boolean(r.help_text),
    description: r.help_text
      ? plainText(r.help_text)
      : `${r.display_name}: applies ${r.css_classes ?? 'the template default'}${r.group_id ? ' within its option group' : ''}.`,
    descriptionOrigin: r.help_text ? 'oracle-upl' : 'apexrest-factual-summary',
  }));
  // Names repeat across templates; full scope is part of a stable identifier.
  for (const option of templateOptions)
    option.id = `template-option:${
      Object.entries(option.templates)
        .map(([k, v]) => `${k}/${slug(v)}`)
        .join('+') || option.templateTypes.join('+')
    }/${option.name}`;
  const templateDefaults = Object.entries(raw)
    .filter(([key]) => key.startsWith('templates_'))
    .flatMap(([key, rows]) =>
      rows.map((r) => ({
        id: `${key.slice(10)}-template:${r.static_id ?? slug(r.template_name)}`,
        type: key.slice(10),
        name: r.template_name,
        key: r.static_id ?? slug(r.template_name),
        internalName: r.internal_name,
        defaultOptions: options(r.default_template_options),
        presetOptions: options(r.preset_template_options),
      })),
    );
  const utPlugins = raw.utPlugins.map((r) => ({
    id: `ut-plugin:${r.apexlang_name}`,
    sourceId: String(r.plugin_id),
    key: r.apexlang_name,
    staticId: r.static_id,
    label: r.display_name,
    pluginType: r.plugin_type,
    supportedComponentTypes: options(r.supported_component_types),
  }));
  const utDeclarations = new Map();
  for (const [file, bytes] of Object.entries(bundle)) {
    const match = file.match(
      /central-themes\/8842\.261\/shared-components\/plugins\/template-component\/([^/]+)-theme-universal-theme\/custom-attributes.apx$/,
    );
    if (!match) continue;
    for (const declaration of parseApxDeclarations(Buffer.from(bytes).toString('utf8'), 0))
      if (declaration.kind === 'customAttribute')
        utDeclarations.set(`${match[1]}:${declaration.key}`, declaration);
  }
  const utAttributes = raw.utAttributes.map((r) => {
    const plugin = utPlugins.find((p) => p.sourceId === String(r.plugin_id));
    const declaration = utDeclarations.get(`${plugin.key}:${r.static_id}`);
    const group = declaration?.properties['appearance.attributeGroup']?.replace(/^@/, '');
    const relativePath = declaration ? `${group ? 'plugin-' + group : 'settings'}.${r.apexlang_name}` : null;
    return {
      id: `${plugin.id}/${r.attribute_scope.toLowerCase()}/${r.static_id}`,
      sourceId: String(r.plugin_attribute_id),
      pluginKey: plugin.key,
      pluginName: plugin.label,
      attributeKey: r.apexlang_name,
      staticKey: r.static_id,
      builderLabel: r.prompt,
      apexlangPath: relativePath ? `region.${relativePath}` : null,
      apexlangRelativePath: relativePath,
      pathStatus: relativePath ? 'compiler-declaration' : 'unresolved',
      context: plugin.key,
      group: r.attribute_group_title,
      type: r.attribute_type,
      scope: r.attribute_scope,
      required: r.is_required === 'Yes',
      defaultValue: r.default_value,
      minValue: r.min_value,
      maxValue: r.max_value,
      columnDataTypes: options(r.column_data_types),
      supportedComponentTypes: options(r.supported_component_types),
      condition: {
        attributeSourceId: r.depending_on_attribute_id ? String(r.depending_on_attribute_id) : null,
        componentPropertyId: r.depending_on_comp_prop_id,
        operator: r.depending_on_condition_type,
        expression: r.depending_on_expression,
      },
      sourceHasHelp: Boolean(r.help_text),
      description: r.help_text
        ? plainText(r.help_text)
        : `${r.prompt} for ${plugin.label}; ${r.attribute_type.toLowerCase()}${r.is_required === 'Yes' ? ', required' : ''}.`,
      descriptionOrigin: r.help_text ? 'oracle-upl' : 'apexrest-factual-summary',
    };
  });
  for (const attribute of utAttributes)
    attribute.condition.attributeId =
      utAttributes.find((a) => a.sourceId === attribute.condition.attributeSourceId)?.id ?? null;
  const utAttributeValues = raw.utAttributeValues.map((r) => ({
    attributeId: utAttributes.find((a) => a.sourceId === String(r.plugin_attribute_id))?.id,
    apexlangName: r.apexlang_name,
    label: r.display_value,
    returnValue: r.return_value,
    quickPick: yes(r.is_quick_pick),
  }));
  const nativeParameters = extractMmdParameters(mmd);
  const nativeTypes = new Map(
    raw.regions.map((r) => [
      r.source_type_code,
      regions.find((region) => region.sourceId === String(r.region_id))?.type,
    ]),
  );
  const nativeContext = (id, seen = new Set()) => {
    if (!id || seen.has(id)) return null;
    seen.add(id);
    const component = mmd.componentTypes[id];
    const conditions = component?.parent?.dependingOn?.conditions ?? [];
    const restriction = conditions.find((c) => c.propertyId === '94' && c.type === 'EQUALS');
    return restriction
      ? (nativeTypes.get(restriction.value) ?? null)
      : nativeContext(component?.parent?.componentTypeId, seen);
  };
  for (const parameter of nativeParameters) parameter.nativeType = nativeContext(parameter.componentTypeId);
  const declarations = [];
  for (const [file, bytes] of Object.entries(bundle)) {
    if (!file.endsWith('custom-attributes.apx') || !file.includes('/native-plugins/')) continue;
    const match = file.match(/plugins\/([^/]+)\/([^/]+)\/custom-attributes.apx$/);
    if (!match || !['region', 'item'].includes(match[1])) continue;
    for (const d of parseApxDeclarations(Buffer.from(bytes).toString('utf8'), 0))
      if (d.kind === 'customAttribute') {
        const p = d.properties;
        const attributeKey = p.apexlangName;
        if (!attributeKey) continue;
        const vals = parseApxDeclarations(d.text, 4)
          .filter((e) => e.kind === 'entry')
          .map((e) => ({ name: e.key, label: e.properties.display, returnValue: e.properties.return }));
        declarations.push({
          id: `native:${match[1]}/${match[2]}/${p.scope ?? 'component'}/${d.key}`,
          context: p.scope === 'app' ? 'componentSetting' : match[1] === 'item' ? 'pageItem' : 'region',
          scope: p.scope ?? 'component',
          nativeType: match[2],
          attributeKey,
          builderLabel: p.name,
          apexlangPath: `${p.scope === 'app' ? 'componentSetting' : match[1] === 'item' ? 'pageItem' : 'region'}.${p['appearance.attributeGroup'] ? 'plugin-' + p['appearance.attributeGroup'].replace(/^@/, '') : 'settings'}.${attributeKey}`,
          type: p.type ?? 'text',
          required: p['validation.required'] === 'true',
          defaultValue: p['default.value'] ?? null,
          values: vals,
          condition: Object.fromEntries(Object.entries(p).filter(([k]) => k.startsWith('dependingOn.'))),
          source: `SQLcl native declarations ${mmd.buildID}`,
          description: `${p.name} setting for ${match[2]}.`,
          descriptionOrigin: 'apexrest-factual-summary',
          sourceDigest: sha256(d.text),
        });
      }
  }
  const parameters = {
    templateOptions: sorted(templateOptions),
    templateOptionGroups: sorted(templateOptionGroups),
    templateDefaults: sorted(templateDefaults),
    utPlugins: sorted(utPlugins),
    utAttributes: sorted(utAttributes),
    utAttributeValues: sorted(utAttributeValues, 'attributeId'),
    nativeParameters: sorted([...nativeParameters, ...declarations]),
  };
  const entries = listEntries.filter(
    (e) => lists.find((l) => l.id === e.listId)?.name === 'Templates - Components',
  );
  const componentsList = parseApxDeclarations(sourceFiles['shared-components/lists.apx'] ?? '', 0).find(
    (d) => d.kind === 'list' && d.properties.name === 'Templates - Components',
  );
  if (!componentsList) throw new Error('Missing main component list source declaration.');
  for (const declaration of parseApxDeclarations(componentsList.text, 4).filter((d) => d.kind === 'entry')) {
    const candidates = entries.filter(
      (e) =>
        e.key === declaration.key ||
        (e.label === declaration.properties.label &&
          e.sequence === Number(declaration.properties['layout.sequence'])),
    );
    if (candidates.length !== 1)
      throw new Error(`Ambiguous source description target for component list entry ${declaration.key}.`);
    const description = sanitizeDocumentation(declaration.properties['userDefinedAttributes.1']);
    if (description)
      Object.assign(candidates[0], {
        description,
        descriptionOrigin: 'oracle-upl',
        descriptionSource: {
          applicationId: capture.applicationId,
          pageId: candidates[0].pageId,
          componentId: candidates[0].id,
          sourceFile: 'shared-components/lists.apx',
          line: componentsList.line + declaration.line - 1,
          attribute: 'userDefinedAttributes.1',
          license: 'UPL-1.0',
        },
      });
  }
  const families = buildFamilies(inventory, entries, utPlugins);
  const counts = {
    pages: pages.length,
    regions: regions.length,
    items: items.length,
    buttons: buttons.length,
    lists: lists.length,
    listEntries: listEntries.length,
    componentListEntries: entries.length,
    componentListDescriptions: entries.filter((e) => e.description).length,
    documentationDescriptions: regions.filter((r) => r.description).length,
    itemTypes: itemTypes.length,
    templateOptions: templateOptions.length,
    templateOptionsWithHelp: templateOptions.filter((r) => r.sourceHasHelp).length,
    utAttributes: utAttributes.length,
    utAttributesWithHelp: utAttributes.filter((r) => r.sourceHasHelp).length,
    helperLinks: helperLinks.length,
    helperLinksResolved: helperLinks.filter((r) => r.status === 'resolved').length,
    nativeParameters: nativeParameters.length,
    nativePluginAttributes: declarations.length,
    families: families.length,
  };
  const baseline = {
    pages: 122,
    regions: 987,
    componentListEntries: 46,
    itemTypes: 27,
    templateOptions: 539,
    templateOptionsWithHelp: 245,
    utAttributes: 164,
    utAttributesWithHelp: 137,
  };
  const baselineDiff = Object.entries(baseline)
    .filter(([key, value]) => counts[key] !== value)
    .map(([key, value]) => ({ metric: key, previous: value, current: counts[key] }));
  const identity = raw.identity[0],
    theme = raw.themes.find((r) => r.theme_number === 42);
  if (
    !identity ||
    identity.application_id !== capture.applicationId ||
    identity.workspace !== capture.workspace ||
    identity.owner !== capture.schema ||
    mmd.buildID.split('+')[0].split('.').slice(0, 2).join('.') !== theme?.version
  )
    throw new Error('Snapshot identity/version mismatch.');
  if (!/Licensed under the Universal Permissive License v 1\.0/.test(sourceFiles['application.apx'] ?? ''))
    throw new Error('Application redistribution license is not the reviewed UPL banner.');
  for (const [name, records] of Object.entries({
    pages,
    regions,
    items,
    buttons,
    lists,
    templateOptions,
    templateOptionGroups,
    templateDefaults,
    utAttributes,
    nativeParameters: parameters.nativeParameters,
    families,
  })) {
    const ids = records.map((r) => r.id);
    if (new Set(ids).size !== ids.length) throw new Error(`Duplicate source IDs in ${name}.`);
  }
  const snapshot = {
    schemaVersion: 1,
    source: {
      applicationId: identity.application_id,
      name: identity.application_name,
      alias: identity.alias,
      apexVersion: identity.apex_version,
      themeVersion: theme.version,
      themeStyle: theme.current_theme_style,
      mmdBuild: mmd.buildID,
      officialUrl: sourceUrl,
    },
    capturedAt: capture.capturedAt,
    sourceDigests: {
      metadata: sha256(metadataBytes),
      mmd: sha256(mmdBytes),
      compilerDefinitions: sha256(bundleBytes),
      export: sha256(JSON.stringify(digests)),
      files: digests,
    },
    counts,
    baselineDiff,
    publication: {
      content:
        'Identifiers, schema facts, original factual summaries and UPL-licensed application parameter descriptions; no source SQL, credentials, helper implementation or full compiler metadata.',
      sourceApplicationLicense: 'Universal Permissive License v 1.0 (application copyright banner)',
      licenseUrl: 'https://oss.oracle.com/licenses/upl/',
      verification: {
        source: 'live-read-only',
        compiler: 'not-run',
        sql: 'not-run',
        import: 'not-run',
        browser: 'not-run',
      },
    },
  };
  return { snapshot, inventory, parameters, componentList: { entries, families } };
}

export function buildFamilies(inventory, entries, plugins) {
  const families = [];
  const add = (family, key, title, selectors, host, aliases = []) => {
    const rows = [...inventory.regions, ...inventory.items].filter(
      (r) =>
        (selectors.regionTypes ?? []).includes(r.type) ||
        (selectors.itemTypes ?? []).includes(r.type) ||
        (selectors.templateNames ?? []).includes(r.template) ||
        (selectors.templateNames ?? []).includes(r.componentTemplate),
    );
    families.push({
      id: `component:${family}/${key}`,
      family,
      title,
      aliases,
      host,
      pageIds: [...new Set(rows.map((r) => r.pageId))].sort((a, b) => a - b),
      selectors,
    });
  };
  const regionMap = {
    staticContent: ['standard', 'Standard Region'],
    cards: ['cards', 'Cards'],
    interactiveReport: ['interactive-report', 'Interactive Report'],
    interactiveGrid: ['interactive-grid', 'Interactive Grid'],
    classicReport: ['classic-report', 'Classic Report'],
    smartFilters: ['smart-filters', 'Smart Filters'],
    facetedSearch: ['faceted-search', 'Faceted Search'],
    search: ['search', 'Search'],
    regionDisplaySelector: ['region-display-selector', 'Region Display Selector'],
    chart: ['chart', 'Chart'],
    calendar: ['calendar', 'Calendar'],
    map: ['map', 'Map'],
    tree: ['tree', 'Tree'],
  };
  for (const [type, [key, title]] of Object.entries(regionMap))
    if (inventory.regions.some((r) => r.type === type))
      add(
        ['interactive-report', 'interactive-grid', 'classic-report'].includes(key) ? 'reports' : 'regions',
        key,
        title,
        { regionTypes: [type] },
        'region',
      );
  for (const plugin of plugins) {
    const type = `themeTemplateComponent/${plugin.key}`;
    add(
      'template-components',
      slug(plugin.key),
      plugin.label,
      { regionTypes: [type], pluginNames: [plugin.key] },
      'template-component',
    );
  }
  for (const type of inventory.itemTypes)
    add(
      'items',
      slug(type),
      inventory.items.find((r) => r.type === type).displayAs,
      { itemTypes: [type] },
      'page-item',
    );
  for (const [type, family] of [
    ['region', 'regions'],
    ['list', 'lists'],
    ['report', 'reports'],
  ]) {
    const names = [
      ...new Set(
        inventory.regions.map((r) => (type === 'region' ? r.template : r.componentTemplate)).filter(Boolean),
      ),
    ];
    for (const name of names) {
      if (
        type !== 'region' &&
        !inventory.regions.some(
          (r) =>
            r.componentTemplate === name &&
            (type === 'list' ? r.type === 'list' : r.type === 'classicReport'),
        )
      )
        continue;
      const key =
        {
          Standard: 'standard',
          'Buttons Container': 'buttons-container',
          'Wizard Container': 'wizard-container',
          'Carousel Container': 'carousel',
          'Badge List': 'badges-list',
          Cards: type === 'list' ? 'cards' : 'legacy-cards',
          Hero: 'hero',
          'Title Bar': 'title-bar',
        }[name] ?? slug(name);
      if (families.some((f) => f.id === `component:${family}/${key}`)) continue;
      add(
        family,
        key,
        name,
        { templateNames: [name] },
        type === 'region' ? 'region-template' : `${type}-template`,
      );
    }
  }
  for (const template of [...new Set(inventory.pages.map((r) => r.template).filter(Boolean))])
    families.push({
      id: `component:pages/${slug(template)}`,
      family: 'pages',
      title: template,
      aliases: [],
      host: 'page',
      pageIds: inventory.pages.filter((r) => r.template === template).map((r) => r.pageId),
      selectors: { templateNames: [template] },
    });
  for (const [key, title] of [
    ['text', 'Text Button'],
    ['icon', 'Icon Button'],
    ['text-with-icon', 'Text With Icon Button'],
  ])
    families.push({
      id: `component:buttons/${key}`,
      family: 'buttons',
      title,
      aliases: [],
      host: 'button',
      pageIds: [
        ...new Set(
          inventory.buttons
            .filter(
              (r) => r.template === { icon: 'Icon', text: 'Text', 'text-with-icon': 'Text with Icon' }[key],
            )
            .map((r) => r.pageId),
        ),
      ],
      selectors: { templateNames: [{ icon: 'Icon', text: 'Text', 'text-with-icon': 'Text with Icon' }[key]] },
    });
  for (const entry of entries) {
    if (entry.pageId && !families.some((f) => f.pageIds.includes(entry.pageId)))
      families.push({
        id: `component:guides/${slug(entry.label)}`,
        family: 'guides',
        title: entry.label,
        aliases: [],
        host: 'guide',
        pageIds: [entry.pageId],
        selectors: {},
      });
  }
  return sorted(families);
}
export async function writeNormalizedSnapshot(normalized, output) {
  await mkdir(output, { recursive: true });
  for (const [key, value] of Object.entries(normalized))
    await writeFile(
      path.join(output, `${key === 'componentList' ? 'component-list' : key}.json`),
      JSON.stringify(value, null, 2) + '\n',
    );
}
