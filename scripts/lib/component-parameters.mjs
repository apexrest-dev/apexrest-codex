// Join reviewed source facts by host, template scope and MMD component identity.
// Repeated MMD names such as `attributes` and `column` are never ownership keys.
const slug = (value) =>
  String(value ?? '')
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z\d]+/g, '-')
    .replace(/^-|-$/g, '');
const unique = (values) => [...new Set(values.filter(Boolean))];
const scope = (value) => (value.toLowerCase() === 'label' ? 'field' : value.toLowerCase());
const rawRegionTypes = {
  interactiveReport: 'NATIVE_IR',
  classicReport: 'NATIVE_SQL_REPORT',
  interactiveGrid: 'NATIVE_IG',
  chart: 'NATIVE_JET_CHART',
  jetChart: 'NATIVE_JET_CHART',
  cards: 'NATIVE_CARDS',
  map: 'NATIVE_MAP_REGION',
  facetedSearch: 'NATIVE_FACETED_SEARCH',
  smartFilters: 'NATIVE_SMART_FILTERS',
  search: 'NATIVE_SEARCH_REGION',
  staticContent: 'NATIVE_STATIC',
  form: 'NATIVE_FORM',
};
const rawType = (type) =>
  rawRegionTypes[type] ??
  (/^(?:themeTemplateComponent|templateComponent)\//.test(type) ? 'TMPL_' + type.split('/')[1] : undefined);
function leaves(condition) {
  return condition?.conditions ? condition.conditions.flatMap(leaves) : condition ? [condition] : [];
}
// Three-valued filtering: unknown non-type conditions remain documented rather
// than being assumed satisfied. Only proven incompatible type branches vanish.
function typeCondition(condition, raw) {
  if (!condition || !raw) return null;
  if (condition.conditions) {
    const values = condition.conditions.map((child) => typeCondition(child, raw));
    if (condition.operator === 'OR')
      return values.includes(true) ? true : values.every((v) => v === false) ? false : null;
    return values.includes(false) ? false : values.includes(true) ? true : null;
  }
  if (condition.path !== 'region.type' && condition.propertyId !== '94') return null;
  switch (condition.type) {
    case 'EQUALS':
      return raw === condition.value;
    case 'NOT_EQUALS':
      return raw !== condition.value;
    case 'IN_LIST':
      return (condition.values ?? []).includes(raw);
    case 'NOT_IN_LIST':
      return !(condition.values ?? []).includes(raw);
    case 'STARTS_WITH':
      return raw.startsWith(condition.value);
    default:
      return null;
  }
}

export function selectComponentParameters(family, inventory, parameters) {
  const category = family.family;
  const key = family.id.split('/').at(-1);
  const selectors = family.selectors ?? {};
  const pages = new Set(family.pageIds ?? []);
  const pageMatches = (row) => !pages.size || pages.has(row.pageId);
  const explicitTemplates = new Set(selectors.templateNames ?? []);
  const itemTypes = new Set(selectors.itemTypes ?? []);
  const regionTypes = new Set(selectors.regionTypes ?? []);
  const plugins = new Set(selectors.pluginNames ?? []);
  const allNative = parameters.nativeParameters ?? [];
  if (category === 'items' && !itemTypes.size)
    for (const type of unique([
      ...(inventory.itemTypes ?? []),
      ...allNative.filter((p) => p.id.startsWith('native:item/')).map((p) => p.nativeType),
    ]))
      if (slug(type) === key) itemTypes.add(type);
  if (category === 'template-components')
    for (const plugin of parameters.utPlugins ?? [])
      if (slug(plugin.key) === key || plugins.has(plugin.key)) {
        plugins.add(plugin.key);
        regionTypes.add('themeTemplateComponent/' + plugin.key);
        regionTypes.add('templateComponent/' + plugin.key);
      }
  const templateType =
    category === 'pages'
      ? 'page'
      : category === 'buttons'
        ? 'button'
        : category === 'lists'
          ? 'list'
          : family.host === 'report-template'
            ? 'report'
            : 'region';
  if (!explicitTemplates.size && !['items', 'template-components', 'guides'].includes(category)) {
    const aliases = {
      'legacy-cards': 'cards',
      carousel: 'carousel-container',
      'region-image': 'image',
      'navigation-tabs': 'top-navigation-tabs',
    };
    for (const template of parameters.templateDefaults ?? [])
      if (scope(template.type) === templateType && [key, aliases[key]].includes(template.key))
        explicitTemplates.add(template.name);
  }
  if (!regionTypes.size && !['items', 'buttons', 'pages', 'guides'].includes(category)) {
    if (category === 'lists') regionTypes.add('list');
    else if (family.host === 'report-template' || (category === 'reports' && explicitTemplates.size))
      regionTypes.add('classicReport');
    else if (!explicitTemplates.size)
      for (const type of unique([
        ...(inventory.regions ?? []).map((r) => r.type),
        ...allNative.filter((p) => p.id.startsWith('native:region/')).map((p) => p.nativeType),
        ...Object.keys(rawRegionTypes),
      ]))
        if (slug(type) === key) regionTypes.add(type);
  }
  const isRegion = !['items', 'buttons', 'pages', 'guides'].includes(category);
  const regions = isRegion
    ? (inventory.regions ?? []).filter(
        (row) =>
          pageMatches(row) &&
          (!regionTypes.size || regionTypes.has(row.type)) &&
          (!explicitTemplates.size ||
            explicitTemplates.has(
              ['list', 'report'].includes(templateType) ? row.componentTemplate : row.template,
            )),
      )
    : [];
  const items =
    category === 'items'
      ? (inventory.items ?? []).filter((row) => pageMatches(row) && itemTypes.has(row.type))
      : [];
  const buttons =
    category === 'buttons'
      ? (inventory.buttons ?? []).filter(
          (row) => pageMatches(row) && (!explicitTemplates.size || explicitTemplates.has(row.template)),
        )
      : [];
  const pageExamples =
    category === 'pages'
      ? (inventory.pages ?? []).filter(
          (row) => pageMatches(row) && (!explicitTemplates.size || explicitTemplates.has(row.template)),
        )
      : [];

  // A template name only matches its own surface: a Standard page does not own
  // Standard report or region options, even when the display labels coincide.
  const templates = new Map();
  const addTemplate = (type, name) => {
    if (!templates.has(type)) templates.set(type, new Set());
    if (name) templates.get(type).add(name);
  };
  if (isRegion) {
    addTemplate('region');
    for (const name of explicitTemplates) addTemplate(templateType, name);
    for (const row of regions) {
      addTemplate('region', row.template);
      const type =
        row.type === 'list'
          ? 'list'
          : row.type === 'classicReport'
            ? 'report'
            : row.type === 'breadcrumb'
              ? 'breadcrumb'
              : null;
      if (type) addTemplate(type, row.componentTemplate);
    }
  }
  if (category === 'items') {
    addTemplate('field');
    for (const row of items) addTemplate('field', row.template);
  }
  if (category === 'buttons') {
    addTemplate('button');
    for (const name of explicitTemplates) addTemplate('button', name);
  }
  if (category === 'pages') {
    addTemplate('page');
    for (const name of explicitTemplates) addTemplate('page', name);
  }
  const templateOptions = (parameters.templateOptions ?? []).filter((option) => {
    const named = Object.entries(option.templates ?? {});
    return named.length
      ? named.some(([type, name]) => templates.get(scope(type))?.has(name))
      : (option.templateTypes ?? []).some((type) => templates.has(scope(type)));
  });
  const groupIds = new Set(templateOptions.map((option) => option.groupId));
  const templateOptionGroups = (parameters.templateOptionGroups ?? []).filter((group) =>
    groupIds.has(group.id),
  );
  const templateDefaults = (parameters.templateDefaults ?? []).filter((template) =>
    templates.get(scope(template.type))?.has(template.name),
  );
  const utAttributes = (parameters.utAttributes ?? []).filter(
    (attribute) => category === 'template-components' && plugins.has(attribute.pluginKey),
  );
  const attributeIds = new Set(utAttributes.map((attribute) => attribute.id));
  const utAttributeValues = (parameters.utAttributeValues ?? []).filter((value) =>
    attributeIds.has(value.attributeId),
  );

  const nativeTypes = new Set([...(selectors.nativeTypes ?? []), ...itemTypes, ...regionTypes]);
  // Template-only regions may host arbitrary region types. Their parameter card
  // documents the base region contract, not every report/chart nested in examples.
  const nativeBaseTypes = regionTypes.size ? [...regionTypes] : [];
  const rawTypes = unique([
    ...nativeBaseTypes.map(rawType),
    ...(inventory.regions ?? [])
      .filter((row) => nativeBaseTypes.includes(row.type))
      .map((row) => row.sourceTypeCode),
  ]);
  const context =
    category === 'items'
      ? 'pageItem'
      : category === 'buttons'
        ? 'button'
        : category === 'pages'
          ? 'page'
          : isRegion
            ? 'region'
            : null;
  const nodes = new Map();
  for (const parameter of allNative)
    if (parameter.componentTypeId && !nodes.has(parameter.componentTypeId))
      nodes.set(parameter.componentTypeId, parameter);
  const baseNode = [...nodes.values()].find(
    (node) => node.context === context && (!context || node.parentContext !== context),
  );
  const chosen = new Set(baseNode ? [baseNode.componentTypeId] : []);
  if (baseNode && context !== 'page') {
    let changed = true;
    while (changed) {
      changed = false;
      for (const node of nodes.values()) {
        if (chosen.has(node.componentTypeId) || !chosen.has(node.parentComponentTypeId)) continue;
        if (node.nativeType && !nativeTypes.has(node.nativeType)) continue;
        const direct = node.parentComponentTypeId === baseNode.componentTypeId;
        const hasType = leaves(node.componentCondition).some(
          (c) => c.path === 'region.type' || c.propertyId === '94',
        );
        if (
          context === 'region' &&
          hasType &&
          !rawTypes.some((raw) => typeCondition(node.componentCondition, raw) === true)
        )
          continue;
        if (context === 'region' && direct && !regionTypes.size) continue;
        chosen.add(node.componentTypeId);
        changed = true;
      }
    }
  }
  const nativeParameters = allNative.filter((parameter) => {
    if (parameter.componentTypeId) {
      if (!chosen.has(parameter.componentTypeId)) return false;
      if (rawTypes.length && rawTypes.every((raw) => typeCondition(parameter.condition, raw) === false))
        return false;
      return true;
    }
    const declarationKind = category === 'items' ? 'item' : isRegion ? 'region' : null;
    return (
      declarationKind &&
      parameter.id.startsWith(`native:${declarationKind}/`) &&
      nativeTypes.has(parameter.nativeType)
    );
  });
  return {
    templateOptions,
    templateOptionGroups,
    templateDefaults,
    utAttributes,
    utAttributeValues,
    nativeParameters,
    ...(category === 'template-components'
      ? {
          hostNotes: [
            'UT attribute apexlangPath describes the region host. For an IR template-component partial column, apply apexlangRelativePath to that column after selecting its type; keep column and region attributes separate.',
            'Application-scope component settings remain shared definitions and are not region or column properties.',
          ],
        }
      : {}),
    currentExamples: {
      regions: regions.map(
        ({
          id,
          pageId,
          key,
          type,
          template,
          componentTemplate,
          regionOptions,
          componentOptions,
          settings,
        }) => ({
          id,
          pageId,
          key,
          type,
          template,
          componentTemplate,
          regionOptions,
          componentOptions,
          settings,
        }),
      ),
      items: items.map(({ id, pageId, key, type, template, templateOptions, settings }) => ({
        id,
        pageId,
        key,
        type,
        template,
        templateOptions,
        settings,
      })),
      buttons: buttons.map(({ id, pageId, key, template, templateOptions, action }) => ({
        id,
        pageId,
        key,
        template,
        templateOptions,
        action,
      })),
      pages: pageExamples.map(({ id, pageId, template, templateOptions, mode }) => ({
        id,
        pageId,
        template,
        templateOptions,
        mode,
      })),
    },
  };
}
