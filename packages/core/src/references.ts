export const references = [
  {
    id: 'apexlang-lifecycle',
    version: '26.1',
    source: 'https://docs.oracle.com/en/database/oracle/sql-developer-command-line/26.1/sqcug/apexlang.html',
    text: 'Generate starter files using apex generate -name "Name" -dir ./fresh. Validate with apex validate -input ./application. Export requires a connection and always uses fresh staging. Import deploys the full application and requires a reviewed plan. Preserve .apex/apexlang.json and its compiler metadata.',
  },
  {
    id: 'deployment-safety',
    version: '0.1.0-beta.1',
    source: 'docs/adr/007-clean-apex-deployment.md',
    text: 'Use an explicit environment. Plans bind source hashes and target identity. Recheck drift, acquire local coordination by default and create an export backup before writes. Clean APEX deployment needs no service tables. Local runners must share one managed home; independent machines need external serialization or explicitly selected database coordination. DDL cannot be generally rolled back. Interrupted writes require reconciliation. Production requires an external approval boundary.',
  },
];
export async function referenceSearch(query: string, version?: string) {
  const terms = query.toLowerCase().split(/\W+/).filter(Boolean);
  const results = [];
  for (const { reference, searchText } of (await referenceIndex()).searchable) {
    if ((!version || reference.version === version) && terms.every((term) => searchText.includes(term))) {
      results.push({ ...reference, text: reference.text.slice(0, 1200) });
      if (results.length === 8) break;
    }
  }
  return results;
}
import path from 'node:path';
import { stat } from 'node:fs/promises';
import { resourceRoot } from './project.ts';
import { managedHome } from './config.ts';
import { readJson, exists, writeJson, canonical, hash } from './fs.ts';
import { Fault } from './result.ts';
function indexReferences(upstream: typeof references) {
  const entries = [...references, ...upstream];
  const byId = new Map<string, (typeof references)[number]>();
  for (const entry of entries) if (!byId.has(entry.id)) byId.set(entry.id, entry);
  return {
    upstream,
    byId,
    searchable: entries.map((reference) => ({
      reference,
      searchText: (reference.id + reference.text).toLowerCase(),
    })),
  };
}
let cached:
  | {
      file: string;
      stamp: string;
      pending: Promise<ReturnType<typeof indexReferences>>;
    }
  | undefined;
async function referenceIndex() {
  const file = path.join(resourceRoot(), 'references/index.json');
  let info;
  try {
    info = await stat(file, { bigint: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
    cached = undefined;
    return indexReferences([]);
  }
  const stamp = `${info.dev}:${info.ino}:${info.size}:${info.mtimeNs}:${info.ctimeNs}`;
  if (cached?.file === file && cached.stamp === stamp) return cached.pending;
  const pending = readJson(file).then((entries) => indexReferences(entries as typeof references));
  cached = { file, stamp, pending };
  try {
    return await pending;
  } catch (error) {
    if (cached?.pending === pending) cached = undefined;
    throw error;
  }
}
export async function referenceRead(id: string, offset: number, limit: number) {
  const item = (await referenceIndex()).byId.get(id);
  if (!item) throw new Fault('REFERENCE_NOT_FOUND', 'No registered reference with this ID.', 2);
  return {
    id,
    version: item.version,
    source: item.source,
    content: item.text.slice(offset, offset + limit),
    nextOffset: offset + limit < item.text.length ? offset + limit : null,
    classification: 'vendor-reference-data',
  };
}
export async function referenceSync(version: string, dryRun: boolean) {
  const entries = (await referenceIndex()).upstream.filter((r) => r.version === version);
  if (!entries.length)
    throw new Fault(
      'REFERENCE_VERSION_UNAVAILABLE',
      'Requested version is not in this reviewed release snapshot. Install a reviewed release containing it.',
      3,
    );
  const destination = path.join(managedHome(), 'references', version + '.json');
  const before = (await exists(destination)) ? hash(canonical(await readJson(destination))) : null,
    after = hash(canonical(entries));
  if (!dryRun && before !== after) await writeJson(destination, entries);
  return {
    status: dryRun ? 'planned' : before === after ? 'unchanged' : 'synced',
    version,
    before,
    after,
    count: entries.length,
  };
}
