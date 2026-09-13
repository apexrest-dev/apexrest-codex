import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { resourceRoot } from '../../core/src/project.ts';
import { labelFor } from './tui-view.ts';

export interface ApexlangItem {
  family: string;
  group: string;
  name: string;
  documents: number;
}
export interface ApexlangCatalogue {
  version: string;
  items: ApexlangItem[];
}

// Display groups only. Component names and document counts come from the
// bundled Oracle corpus, rather than a separate, manually maintained inventory.
const groups = new Map([
  ['items', 'Page items'],
  ['region-components', 'Regions'],
  ['buttons', 'Buttons'],
  ['business-logic', 'Business logic'],
  ['shared-components', 'Shared components'],
  ['template-components', 'Template components'],
  ['page-layout-templates', 'Page layouts'],
  ['page-examples', 'Page examples'],
  ['workspace-components', 'Workspace components'],
]);
const displayName = (name: string) =>
  labelFor(name).replace(
    /\b(acl|ai|app|lovs?|rest)\b/gi,
    (word) =>
      ({ acl: 'ACL', ai: 'AI', app: 'Application', lov: 'LOV', lovs: 'LOVs', rest: 'REST' })[
        word.toLowerCase()
      ]!,
  );

export function apexlangCatalogue(records: unknown): ApexlangCatalogue {
  if (!Array.isArray(records)) throw new Error('Invalid APEXlang catalogue');
  const families = new Map<string, { item: ApexlangItem; ids: Set<string> }>();
  const versions = new Set<string>();
  for (const record of records) {
    if (!record || typeof record !== 'object') throw new Error('Invalid APEXlang record');
    if (!['template', 'contract', 'guide'].includes(record.kind)) continue;
    if (typeof record.family !== 'string') continue;
    const [root, name] = record.family.split('/') as [string, string | undefined];
    const group = groups.get(root);
    // Parent indexes, shared scaffolding and policy documents aren't components.
    if (!group || (root !== 'buttons' && (!name || name.startsWith('_')))) continue;
    if (typeof record.id !== 'string' || typeof record.version !== 'string')
      throw new Error('Invalid APEXlang component metadata');
    const family = root === 'buttons' ? root : `${root}/${name}`;
    let entry = families.get(family);
    if (!entry) {
      entry = {
        item: { family, group, name: displayName(name ?? root), documents: 0 },
        ids: new Set(),
      };
      families.set(family, entry);
    }
    entry.ids.add(record.id);
    versions.add(record.version);
  }
  if (!families.size) throw new Error('Empty APEXlang catalogue');
  const order = [...groups.values()];
  return {
    version: [...versions].sort().join(', '),
    items: [...families.values()]
      .map(({ item, ids }) => ({ ...item, documents: ids.size }))
      .sort((a, b) => order.indexOf(a.group) - order.indexOf(b.group) || a.name.localeCompare(b.name, 'en')),
  };
}

export async function loadApexlangCatalogue(
  file = path.join(resourceRoot(), 'references/index.json'),
): Promise<ApexlangCatalogue> {
  return apexlangCatalogue(JSON.parse(await readFile(file, 'utf8')));
}

export function filterApexlang(catalogue: ApexlangCatalogue | undefined, query: string): ApexlangItem[] {
  const words = query.toLowerCase().trim().split(/\s+/);
  return (catalogue?.items ?? []).filter((item) => {
    const text = `${item.name} ${item.group} ${item.family}`.toLowerCase();
    return words.every((word) => text.includes(word));
  });
}
