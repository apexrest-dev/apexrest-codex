import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const spec = await readFile('APEXREST_CODEX_PLUGIN_BUILD_SPEC.md', 'utf8');
const sources = [...spec.matchAll(/^\| (S\d+) \| \[([^\]]+)\]\((https:[^)]+)\)/gm)];
await mkdir('.apexrest/research/sources', { recursive: true });
const reports = await Promise.all(
  sources.map(async ([, id, title, url]) => {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
      const body = await response.text();
      await writeFile(`.apexrest/research/sources/${id}.html`, body);
      return {
        id,
        title,
        url,
        resolvedUrl: response.url,
        status: response.status,
        retrievedAt: new Date().toISOString(),
        sha256: createHash('sha256').update(body).digest('hex'),
      };
    } catch (e) {
      return { id, title, url, status: 'blocked', reason: String(e) };
    }
  }),
);
await writeFile('docs/evidence/research-sources.json', JSON.stringify(reports, null, 2) + '\n');
console.log(reports.map(({ id, status }) => ({ id, status })));
