// Offline, reproducible import of a reviewed Oracle snapshot. Never downloads at runtime.
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { unzipSync } from 'fflate';
import { buildReferencePostings } from '../packages/core/src/reference-index.ts';

const commit = 'b0afa3bfd7c7e3547458d7fe52649ab1b59706b7';
const archiveSha256 = 'e74a9d1479f2d5bf9276fe2cc408e136b05cea9cf0419cb4d5e92750cf52ce9e';
const archive = process.argv[2];
if (!archive) throw new Error('Usage: node scripts/build-apexlang-references.mjs ORACLE_SKILLS_ZIP');
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const bytes = await readFile(archive);
if (bytes.length > 20 * 1024 * 1024 || sha256(bytes) !== archiveSha256)
  throw new Error('Archive does not match the reviewed Oracle snapshot.');
const prefix = `skills-${commit}/apex/apexlang/`;
const selected = (file) =>
  file === 'assets/grammar/apexlang.ebnf' ||
  (file.endsWith('.md') &&
    (file.startsWith('templates/') ||
      file.startsWith('references/policies/memory-bank/30-pages/') ||
      file.startsWith('references/policies/memory-bank/40-components/') ||
      [
        'references/policies/memory-bank/20-data/apex.sql.md',
        'references/policies/memory-bank/20-data/apex.logic.md',
      ].includes(file)));
const unpacked = unzipSync(bytes, {
  filter: ({ name, originalSize }) => {
    if (originalSize > 4 * 1024 * 1024) throw new Error('Oversized upstream file.');
    return name.startsWith(prefix) && selected(name.slice(prefix.length));
  },
});
const sourceFiles = Object.fromEntries(
  Object.entries(unpacked).map(([name, value]) => [
    name.slice(prefix.length),
    Buffer.from(value).toString('utf8'),
  ]),
);
const aliases = {
  'templates/page-examples/form-page/form-page.example.md': 'oracle-form-example',
  'templates/page-examples/interactive-report-page/interactive-report-page.example.md':
    'oracle-report-example',
  'templates/page-examples/dashboard-page/dashboard-page.example.md': 'oracle-dashboard-example',
};
const idFor = (file) => aliases[file] ?? `oracle:${file.replace(/\.md$/, '')}`;
const records = Object.entries(sourceFiles)
  .filter(([file]) => file.endsWith('.md'))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([file, text]) => {
    const dir = path.posix.dirname(file);
    const stem = path.posix.basename(dir);
    const kind =
      file.startsWith('references/') || path.posix.basename(file) === 'README.md'
        ? 'guide'
        : /\._(?:index|common|columns|series|axis|saved-report)/.test(file)
          ? 'contract'
          : 'template';
    const resolve = (link) => {
      const direct = link.replace(/^\.\//, '');
      return sourceFiles[direct] !== undefined ? direct : path.posix.normalize(path.posix.join(dir, link));
    };
    const linked = [...text.matchAll(/(?:`|\]\(|^\s*-\s+)([^`\s()]+\.md)(?:`|\)|\s|$)/gm)]
      .map((match) => resolve(match[1]))
      .filter((target) => target !== file && sourceFiles[target] !== undefined);
    const imports = text.match(/^imports:\s*\n((?:\s+-[^\n]*\n)+)/m)?.[1] ?? '';
    const required = [
      ...[...imports.matchAll(/-\s+(\S+)/g)].map((match) =>
        resolve(match[1].endsWith('.md') ? match[1] : match[1] + '.md'),
      ),
      ...(/\._index\.md$/.test(file)
        ? [`${dir}/${stem}._common.md`]
        : kind === 'template'
          ? [`${dir}/${stem}._index.md`, `${dir}/${stem}._common.md`]
          : []),
    ];
    return {
      id: idFor(file),
      version: `26.1@${commit.slice(0, 7)}`,
      source: `https://github.com/oracle/skills/blob/${commit}/apex/apexlang/${file}`,
      title: file.replace(/^templates\//, '').replace(/\.md$/, ''),
      kind,
      family: dir.replace(/^templates\//, ''),
      requires: [
        ...new Set(
          required.filter((target) => target !== file && sourceFiles[target] !== undefined).map(idFor),
        ),
      ],
      related: [...new Set(linked.map(idFor))],
      sha256: sha256(text),
      text,
    };
  });
const grammar = sourceFiles['assets/grammar/apexlang.ebnf'];
if (!grammar) throw new Error('Missing Oracle grammar.');
const productions = grammar.split(/(?=^<[^>\n]+>\s*::=)/m);
const grammarRecords = productions.map((text, i) => ({
  id: `oracle-grammar-${i}`,
  version: `26.1@${commit.slice(0, 7)}`,
  source: `https://github.com/oracle/skills/blob/${commit}/apex/apexlang/assets/grammar/apexlang.ebnf`,
  title: text.match(/^<([^>]+)>\s*::=/)?.[1] ?? 'APEXlang syntax conventions',
  kind: 'grammar',
  family: 'grammar',
  text,
}));
const existing = JSON.parse(await readFile('resources/references/index.json', 'utf8'));
for (const record of existing.filter(({ id }) => id.startsWith('oracle-grammar-'))) {
  if (grammarRecords.find(({ id }) => id === record.id)?.text !== record.text)
    throw new Error(`Grammar boundary drift for ${record.id}; review IDs before updating.`);
}
const legacy = Object.values(aliases).map((id) => records.find((record) => record.id === id));
const index = [
  ...legacy,
  ...grammarRecords,
  ...records.filter(({ id }) => !Object.values(aliases).includes(id)),
];
const output = JSON.stringify(index, null, 2) + '\n';
await writeFile('resources/references/index.json', output);
await writeFile(
  'resources/references/search.json',
  JSON.stringify({ schemaVersion: 1, indexSha256: sha256(output), postings: buildReferencePostings(index) }) +
    '\n',
);
await writeFile(
  'resources/references/oracle-snapshot.json',
  JSON.stringify(
    {
      schemaVersion: 1,
      commit,
      archiveSha256,
      indexSha256: sha256(output),
      scope:
        'Oracle grammar, component templates and selected SQL/page/component syntax guidance. No vendor agent orchestration or deployment policy is adopted.',
      records: index.length,
      sourceFiles: Object.fromEntries(
        Object.entries(sourceFiles)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([file, text]) => [file, sha256(text)]),
      ),
    },
    null,
    2,
  ) + '\n',
);
console.log(
  `Imported ${records.length} complete Oracle documents and ${grammarRecords.length} grammar fragments.`,
);
