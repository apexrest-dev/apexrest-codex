import path from 'node:path';
import { readFile, realpath, stat } from 'node:fs/promises';
import { z } from 'zod';
import { hash } from './fs.ts';
import { resourceRoot } from './project.ts';
import { artifactPage, Fault, redact, sanitized } from './result.ts';
import { normalizeReference, referenceWords } from './reference-index.ts';
import type { SearchOptions } from './references.ts';

const digest = z.string().regex(/^[a-f0-9]{64}$/);
const ascii = (max: number) =>
  z
    .string()
    .min(1)
    .max(max)
    .regex(/^[\x20-\x7e]+$/);
const referenceId = ascii(200);
const compatibilitySchema = z.object({
  apexVersion: ascii(64),
  themeVersion: ascii(64),
  mmdVersion: ascii(64),
});
const entrySchema = z.object({
  id: referenceId.refine((id) => id.startsWith('component:')),
  title: z.string().min(1).max(240),
  kind: z.enum(['contract', 'template', 'guide']),
  family: ascii(200),
  version: ascii(120),
  source: ascii(2048),
  document: ascii(240),
  sha256: digest,
  searchText: z.string().max(200000),
  requires: z.array(referenceId),
  related: z.array(referenceId),
  readiness: z.enum(['ready', 'reference', 'unresolved']),
  compatibility: compatibilitySchema,
  length: z.number().int().nonnegative().optional(),
});
const manifestSchema = z.object({
  schemaVersion: z.literal(1),
  catalogVersion: ascii(120),
  source: z.object({ apexVersion: ascii(64), themeVersion: ascii(64), mmdVersion: ascii(64) }).passthrough(),
  indexSha256: digest,
  files: z.record(z.string(), digest),
  counts: z.record(z.string(), z.unknown()),
});
export type ComponentReference = z.infer<typeof entrySchema>;

function invalid(message: string): never {
  throw new Fault('COMPONENT_CATALOG_INVALID', message, 3);
}
function relativeFile(file: string) {
  if (
    !/^[A-Za-z0-9_./-]+$/.test(file) ||
    path.isAbsolute(file) ||
    file.split('/').some((part) => !part || part === '.' || part === '..')
  )
    invalid('Component catalog contains an unsafe file path.');
  return file;
}
async function containedFile(root: string, file: string) {
  const resolved = await realpath(path.join(root, relativeFile(file)));
  const relative = path.relative(root, resolved);
  if (!relative || relative.startsWith('..' + path.sep) || relative === '..' || path.isAbsolute(relative))
    invalid('Component catalog file resolves outside its resource directory.');
  return resolved;
}
async function stamp(file: string) {
  const info = await stat(file, { bigint: true });
  return `${info.dev}:${info.ino}:${info.size}:${info.mtimeNs}:${info.ctimeNs}`;
}
async function loadIndex(root: string, manifestFile: string, indexFile: string) {
  try {
    const manifest = manifestSchema.parse(JSON.parse(await readFile(manifestFile, 'utf8')));
    for (const file of Object.keys(manifest.files)) relativeFile(file);
    if (manifest.files['index.json'] !== manifest.indexSha256)
      invalid('Component catalog manifest index hashes disagree.');
    const raw = await readFile(indexFile, 'utf8');
    if (hash(raw) !== manifest.indexSha256)
      invalid('Component catalog index checksum does not match its manifest.');
    const entries = z.array(entrySchema).parse(JSON.parse(raw));
    const byId = new Map<string, ComponentReference>();
    const searchable = entries.map((entry) => {
      relativeFile(entry.document);
      if (!entry.document.startsWith('documents/') || !entry.document.endsWith('.md'))
        invalid('Component documents must be Markdown files inside documents/.');
      if (manifest.files[entry.document] !== entry.sha256)
        invalid('Component document checksum is missing or disagrees with its manifest.');
      if (byId.has(entry.id)) invalid('Component catalog contains duplicate reference IDs.');
      byId.set(entry.id, entry);
      return {
        entry,
        words: new Set(referenceWords(`${entry.id} ${entry.title} ${entry.searchText}`)),
        title: normalizeReference(entry.title),
        body: normalizeReference(entry.searchText),
      };
    });
    for (const entry of entries)
      for (const id of [...entry.requires, ...entry.related])
        if (id.startsWith('component:') && !byId.has(id))
          invalid('Component catalog contains an unresolved component reference.');
    return { root, manifest, byId, searchable };
  } catch (error) {
    if (error instanceof Fault) throw error;
    invalid('Component catalog manifest or index cannot be read or has an invalid format.');
  }
}
let cached: { root: string; stamp: string; pending: ReturnType<typeof loadIndex> } | undefined;
async function componentIndex() {
  let root: string, manifestFile: string, indexFile: string, revision: string;
  try {
    root = await realpath(path.join(resourceRoot(), 'components'));
    manifestFile = await containedFile(root, 'manifest.json');
    indexFile = await containedFile(root, 'index.json');
    revision = (await stamp(manifestFile)) + ':' + (await stamp(indexFile));
  } catch (error) {
    cached = undefined;
    if (error instanceof Fault) throw error;
    throw new Fault(
      'COMPONENT_CATALOG_UNAVAILABLE',
      'Install a reviewed release containing the component catalog.',
      3,
    );
  }
  if (cached?.root === root && cached.stamp === revision) return cached.pending;
  const pending = loadIndex(root, manifestFile, indexFile);
  cached = { root, stamp: revision, pending };
  try {
    return await pending;
  } catch (error) {
    if (cached?.pending === pending) cached = undefined;
    throw error;
  }
}
const stopwords = new Set(['a', 'an', 'the', 'for', 'with', 'and', 'of', 'to', 'in']);
// Redaction can expand short secret-like examples into longer markers. Account
// for the actual public envelope, not only its pre-sanitization representation.
const bytes = (value: unknown) => Buffer.byteLength(JSON.stringify(sanitized(value)), 'utf8');
function metadata(entry: ComponentReference) {
  return {
    id: entry.id,
    title: entry.title,
    kind: entry.kind,
    family: entry.family,
    version: entry.version,
    source: entry.source,
    readiness: entry.readiness,
    compatibility: entry.compatibility,
    classification: 'component-reference-data' as const,
  };
}
function links(entry: ComponentReference, count: number) {
  return {
    requires: entry.requires.slice(0, count),
    requiresCount: entry.requires.length,
    requiresOmittedCount: Math.max(0, entry.requires.length - count),
    related: entry.related.slice(0, count),
    relatedCount: entry.related.length,
    relatedOmittedCount: Math.max(0, entry.related.length - count),
  };
}
function window(text: string, start: number, length: number) {
  let end = Math.min(text.length, start + length);
  // Keep valid Unicode when a page ends between the UTF-16 halves of a character.
  if (end > start && /[\uD800-\uDBFF]/.test(text[end - 1]!) && /[\uDC00-\uDFFF]/.test(text[end] ?? ''))
    end += end - start === 1 ? 1 : -1;
  return text.slice(start, end);
}

export async function componentSearch(query: string, version?: string, options: SearchOptions = {}) {
  const terms = [...new Set(referenceWords(query).filter((term) => !stopwords.has(term)))];
  if (!terms.length) return [];
  const index = await componentIndex();
  const normalized = normalizeReference(query);
  const ranked = index.searchable
    .filter(
      ({ entry, words }) =>
        (entry.id === query.trim() || terms.every((term) => words.has(term))) &&
        (!version ||
          entry.version === version ||
          (!version.includes('@') && entry.version.split('@')[0] === version)) &&
        (!options.kind || entry.kind === options.kind) &&
        (!options.family || entry.family === options.family || entry.family.startsWith(options.family + '/')),
    )
    .map(({ entry, title, body }) => ({
      entry,
      score:
        (entry.id === query.trim() ? 10000 : 0) +
        (title === normalized ? 2000 : 0) +
        (title.includes(normalized) ? 400 : 0) +
        terms.filter((term) => [...referenceWords(title)].includes(term)).length * 50 +
        (body.includes(normalized) ? 80 : 0) +
        (entry.readiness === 'ready' ? 10 : 0) +
        (entry.kind === 'contract' ? 5 : 0),
    }))
    .sort((a, b) => b.score - a.score || (a.entry.id < b.entry.id ? -1 : a.entry.id > b.entry.id ? 1 : 0));
  const offset = Math.max(0, options.offset ?? 0),
    limit = Math.max(1, Math.min(8, options.limit ?? 3));
  const candidates = ranked.slice(offset, offset + limit).map(({ entry }) => {
    const first = terms.map((term) => entry.searchText.toLowerCase().indexOf(term)).filter((n) => n >= 0);
    const matchOffset = first.length ? Math.min(...first) : null;
    let snippetOffset = Math.max(0, (matchOffset ?? 0) - 80);
    if (
      snippetOffset &&
      /[\uDC00-\uDFFF]/.test(entry.searchText[snippetOffset] ?? '') &&
      /[\uD800-\uDBFF]/.test(entry.searchText[snippetOffset - 1] ?? '')
    )
      snippetOffset--;
    const text = window(entry.searchText, snippetOffset, 600);
    return {
      ...metadata(entry),
      ...links(entry, 2),
      text,
      // Index summaries are intentionally independent of documents; read a result at offset 0.
      snippetSource: 'index' as const,
      readOffset: 0,
      offset: snippetOffset,
      matchOffset,
      length: entry.searchText.length,
      nextOffset: null,
      totalMatches: ranked.length,
      nextResultOffset: null as number | null,
    };
  });
  const results: typeof candidates = [];
  for (const hit of candidates) {
    // Reserve room for the Result envelope. Measure serialized UTF-8, including escaping.
    while (bytes([...results, hit]) > 7000 && hit.text.length) {
      const remaining = Math.floor(hit.text.length / 2);
      hit.text = remaining < 2 ? '' : window(hit.text, 0, remaining);
    }
    if (bytes([...results, hit]) > 7000) break;
    results.push(hit);
  }
  if (!results.length && candidates.length) invalid('Component result metadata exceeds the response budget.');
  const next = offset + results.length < ranked.length ? offset + results.length : null;
  for (const result of results) result.nextResultOffset = next;
  return results;
}

export async function componentRead(id: string, offset: number, limit: number) {
  const index = await componentIndex();
  const entry = index.byId.get(id);
  if (!entry) throw new Fault('REFERENCE_NOT_FOUND', 'No registered component reference with this ID.', 2);
  let raw: string;
  try {
    raw = await readFile(await containedFile(index.root, entry.document), 'utf8');
  } catch (error) {
    if (error instanceof Fault) throw error;
    invalid('Component document cannot be read.');
  }
  if (hash(raw) !== entry.sha256) invalid('Component document checksum does not match the catalog.');
  if (entry.length !== undefined && entry.length !== raw.length)
    invalid('Component document length does not match the catalog.');
  // All links remain readable through the existing text pagination interface, even
  // if compact navigation arrays must omit many dependencies or related recipes.
  const navigation =
    '\n\n## Catalog navigation\n\n' +
    entry.requires.map((target) => `- requires: ${target}\n`).join('') +
    entry.related.map((target) => `- related: ${target}\n`).join('');
  const safeRaw = redact(raw);
  const document = safeRaw + redact(navigation);
  const start = Math.max(0, offset);
  let count = Math.max(1, Math.min(8192, limit));
  const create = () =>
    artifactPage(document, 'text', id, start, count, {
      ...metadata(entry),
      ...links(entry, 16),
      length: document.length,
      documentLength: safeRaw.length,
      sourceDocumentLength: raw.length,
      contentSanitized: true,
      navigationOffset: safeRaw.length,
      sha256: entry.sha256,
    });
  let result = create();
  while (bytes(result) > 30000 && count > 1) {
    count = Math.max(1, Math.floor(count / 2));
    result = create();
  }
  if (bytes(result) > 30000) invalid('Component document metadata exceeds the response budget.');
  return result;
}
