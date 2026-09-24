import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { selectComponentParameters } from '../../scripts/lib/component-parameters.mjs';

const read = async (file) => JSON.parse(await readFile(`resources/components/source/${file}.json`, 'utf8'));
const [inventory, parameters, componentList] = await Promise.all([
  read('inventory'),
  read('parameters'),
  read('component-list'),
]);
const family = (id) => {
  const result = componentList.families.find((entry) => entry.id === `component:${id}`);
  assert.ok(result, id);
  return result;
};
const select = (id) => selectComponentParameters(family(id), inventory, parameters);

test('Metric Card owns its UT attributes, values, conditions and relative partial-host paths', () => {
  const selected = select('template-components/metric-card');
  assert.ok(selected.utAttributes.length > 0);
  assert.ok(selected.utAttributes.every((attribute) => attribute.pluginKey === 'metricCard'));
  const avatar = selected.utAttributes.find(
    (attribute) => attribute.apexlangPath === 'region.plugin-avatar.type',
  );
  assert.ok(avatar, 'Nested Avatar settings must be indexed by their compiler path.');
  assert.equal(avatar.apexlangRelativePath, 'plugin-avatar.type');
  assert.ok(selected.utAttributeValues.some((value) => value.attributeId === avatar.id));
  assert.ok(selected.utAttributes.some((attribute) => attribute.condition.attributeId));
  assert.ok(selected.hostNotes.some((note) => note.includes('partial column')));
  assert.ok(selected.currentExamples.regions.length > 0);
  assert.ok(
    selected.currentExamples.regions.every((region) =>
      /(?:themeTemplateComponent|templateComponent)\/metricCard$/.test(region.type),
    ),
  );
});

test('repeated attributes/column contexts are attached using MMD parent identity and type conditions', () => {
  const ir = select('reports/interactive-report');
  const ig = select('reports/interactive-grid');
  const ids = (selected) => new Set(selected.nativeParameters.map((parameter) => parameter.componentTypeId));
  const irIds = ids(ir),
    igIds = ids(ig);
  for (const id of ['5110', '7010', '7030', '7050']) assert.ok(irIds.has(id), `Missing IR ${id}`);
  for (const id of ['5110', '7910', '7920', '7930', '7950']) assert.ok(igIds.has(id), `Missing IG ${id}`);
  for (const id of ['7910', '7920', '7930', '8110', '8210']) assert.ok(!irIds.has(id), `IR leaked ${id}`);
  for (const id of ['7010', '7030', '7310', '8110', '8210']) assert.ok(!igIds.has(id), `IG leaked ${id}`);
  assert.ok(ir.nativeParameters.some((parameter) => parameter.componentCondition?.conditions?.length));
  assert.ok(ir.nativeParameters.some((parameter) => parameter.condition));
  assert.ok(
    select('regions/cards').nativeParameters.some((parameter) => parameter.componentTypeId === '8110'),
  );
  assert.ok(
    select('regions/chart').nativeParameters.some((parameter) => parameter.componentTypeId === '7810'),
  );
  assert.ok(select('regions/map').nativeParameters.some((parameter) => parameter.componentTypeId === '8210'));
});

test('each of 27 item families isolates its examples and native declarations while keeping app scope explicit', () => {
  const items = componentList.families.filter((entry) => entry.family === 'items');
  assert.equal(items.length, inventory.itemTypes.length);
  for (const entry of items) {
    const selected = selectComponentParameters(entry, inventory, parameters);
    const types = new Set(entry.selectors.itemTypes);
    assert.ok(selected.currentExamples.items.length > 0, entry.id);
    assert.ok(
      selected.currentExamples.items.every((item) => types.has(item.type)),
      entry.id,
    );
    assert.equal(selected.currentExamples.regions.length, 0, entry.id);
    assert.ok(
      selected.nativeParameters.some((parameter) => parameter.componentTypeId === '5120'),
      entry.id,
    );
    assert.ok(
      selected.nativeParameters.every(
        (parameter) =>
          !parameter.id.startsWith('native:') ||
          (parameter.id.startsWith('native:item/') && types.has(parameter.nativeType)),
      ),
      entry.id,
    );
    assert.ok(!selected.nativeParameters.some((parameter) => parameter.componentTypeId === '5110'), entry.id);
  }
  const checkbox = select('items/checkbox');
  assert.ok(
    checkbox.nativeParameters.some(
      (parameter) => parameter.scope === 'app' && parameter.context === 'componentSetting',
    ),
  );
  assert.ok(
    checkbox.nativeParameters.some(
      (parameter) => parameter.scope === 'component' && parameter.context === 'pageItem',
    ),
  );
});

test('option scopes preserve independent region/component surfaces and resolve groups/defaults/presets', () => {
  const list = select('lists/media-list');
  assert.ok(list.templateOptions.some((option) => option.templates.list === 'Media List'));
  assert.ok(list.templateOptions.some((option) => option.templates.region));
  assert.ok(
    list.templateDefaults.some((template) => template.type === 'list' && template.name === 'Media List'),
  );
  assert.ok(list.templateDefaults.some((template) => template.type === 'region'));
  assert.ok(
    list.templateOptions
      .filter((option) => option.groupId)
      .every((option) => list.templateOptionGroups.some((group) => group.id === option.groupId)),
  );
  assert.ok(
    list.templateDefaults.every(
      (template) => Array.isArray(template.defaultOptions) && Array.isArray(template.presetOptions),
    ),
  );
  assert.ok(
    list.currentExamples.regions.every(
      (region) => Array.isArray(region.regionOptions) && Array.isArray(region.componentOptions),
    ),
  );
  const button = select('buttons/icon');
  assert.ok(
    button.templateOptions.some(
      (option) => !Object.keys(option.templates).length && option.templateTypes.includes('BUTTON'),
    ),
  );
  assert.ok(button.templateOptionGroups.some((group) => group.templateTypes.includes('BUTTON')));
  assert.ok(
    button.templateDefaults.some((template) => template.type === 'button' && template.name === 'Icon'),
  );
  const page = select('pages/standard');
  assert.ok(page.templateDefaults.every((template) => template.type === 'page'));
  assert.ok(page.templateOptions.every((option) => !option.templates.region && !option.templates.report));
  assert.ok(page.nativeParameters.every((parameter) => parameter.context === 'page'));
});

test('classic Media List, list Media List and template Media List keep different contracts', () => {
  const report = select('reports/media-list'),
    list = select('lists/media-list'),
    component = select('template-components/media-list');
  assert.ok(report.currentExamples.regions.every((region) => region.type === 'classicReport'));
  assert.ok(list.currentExamples.regions.every((region) => region.type === 'list'));
  assert.equal(report.utAttributes.length, 0);
  assert.equal(list.utAttributes.length, 0);
  assert.ok(component.utAttributes.length > 0);
  assert.ok(report.nativeParameters.some((parameter) => parameter.componentTypeId === '7310'));
  assert.ok(!list.nativeParameters.some((parameter) => parameter.componentTypeId === '7310'));
  assert.ok(!component.nativeParameters.some((parameter) => parameter.componentTypeId === '7310'));
});

test('recipe-only families derive precise selectors without absorbing every item on a source page', () => {
  const input = { id: 'component:items/checkbox', family: 'items', pageIds: [1601], host: 'items' };
  const selected = selectComponentParameters(input, inventory, parameters);
  assert.deepEqual([...new Set(selected.currentExamples.items.map((item) => item.type))], ['checkbox']);
  assert.ok(selected.nativeParameters.some((parameter) => parameter.id.startsWith('native:item/checkbox/')));
  const badge = selectComponentParameters(
    { id: 'component:lists/badge-list', family: 'lists', pageIds: [1304], host: 'lists' },
    inventory,
    parameters,
  );
  assert.ok(badge.templateOptions.some((option) => option.templates.list === 'Badge List'));
  assert.ok(
    badge.currentExamples.regions.every(
      (region) => region.type === 'list' && region.componentTemplate === 'Badge List',
    ),
  );
});

test('observed raw type codes select generic MMD groups without making unsupported feature claims', () => {
  const selected = selectComponentParameters(
    { id: 'component:regions/example', family: 'regions', selectors: { regionTypes: ['example'] } },
    {
      regions: [{ id: 'r', pageId: 1, type: 'example', sourceTypeCode: 'NATIVE_EXAMPLE' }],
    },
    {
      nativeParameters: [
        { id: 'base', context: 'region', componentTypeId: 'base' },
        {
          id: 'generic',
          context: 'attributes',
          componentTypeId: 'generic',
          parentComponentTypeId: 'base',
          componentCondition: { type: 'NOT_IN_LIST', propertyId: '94', values: ['NATIVE_IR'] },
        },
        {
          id: 'column',
          context: 'column',
          componentTypeId: 'column',
          parentComponentTypeId: 'base',
          componentCondition: { type: 'FEATURES', propertyId: '94', values: ['COLUMNS'] },
        },
        {
          id: 'child',
          context: 'nested',
          componentTypeId: 'child',
          parentComponentTypeId: 'generic',
          componentCondition: { type: 'NOT_NULL', path: 'source.restSource' },
        },
      ],
    },
  );
  assert.deepEqual(
    selected.nativeParameters.map((parameter) => parameter.id),
    ['base', 'generic', 'child'],
  );
});
