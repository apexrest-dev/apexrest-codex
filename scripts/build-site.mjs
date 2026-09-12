import { readFile, writeFile, mkdir, rm, cp, readdir } from 'node:fs/promises';
import { escapeHtml as escape, renderMarkdown } from './lib/site-markdown.mjs';
const config = JSON.parse(await readFile('site/site.config.json', 'utf8')),
  publisher = JSON.parse(await readFile('publisher.config.json', 'utf8')),
  pkg = JSON.parse(await readFile('package.json', 'utf8'));
const base = process.env.APEXREST_SITE_BASE_PATH ?? publisher.basePath ?? config.basePath;
if (!/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(base)) throw new Error('basePath must be an absolute directory path');
const repository = 'https://github.com/apexrest-dev/apexrest-codex';
const assets = (await readdir('docs/assets', { withFileTypes: true }))
  .filter((entry) => entry.isFile() && /\.(?:svg|png|jpe?g|webp)$/.test(entry.name))
  .map((entry) => 'docs/assets/' + entry.name);
await rm('site-dist', { recursive: true, force: true });
await mkdir('site-dist/assets', { recursive: true });
for (const file of ['styles.css', 'search.js']) await cp('site/' + file, 'site-dist/assets/' + file);
for (const asset of assets) await cp(asset, 'site-dist/assets/' + asset.slice('docs/assets/'.length));
const search = [];
for (const page of config.pages) {
  const text = (await readFile(page.source, 'utf8')).replaceAll('{{version}}', pkg.version);
  const route = base + (page.slug ? page.slug + '/' : '');
  search.push({ title: page.title, url: route, text: text.replace(/[`#*]/g, '') });
  const nav = config.pages
    .map(
      (p) =>
        `<li><a href="${base + (p.slug ? p.slug + '/' : '')}"${p.slug === page.slug ? ' aria-current="page"' : ''}>${escape(p.title)}</a></li>`,
    )
    .join('');
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https:; style-src 'self'; script-src 'self'; object-src 'none'; base-uri 'none'"><meta name="description" content="Independent APEXREST tools for native Codex and Oracle APEX development. Verified capabilities and explicit deployment evidence."><title>${escape(page.title)} · APEXREST</title><link rel="stylesheet" href="${base}assets/styles.css"><script src="${base}assets/search.js" defer></script></head><body data-base="${base}"><a class="skip" href="#main">Skip to content</a><header class="top"><a class="brand" href="${base}">APEXREST / CODEX</a><span class="badge">BETA · ${pkg.version}</span></header><div class="layout"><aside class="sidebar"><details open><summary>Documentation</summary><nav aria-label="Documentation"><ul>${nav}</ul></nav></details><label class="search-label" for="search">Search documentation</label><input id="search" type="search" placeholder="Try “backup”" autocomplete="off"><ul class="search-results" id="search-results" aria-live="polite"></ul></aside><main id="main" tabindex="-1"><div class="eyebrow">Independent Oracle APEX tooling</div>${renderMarkdown(text, { source: page.source, base, pages: config.pages, assets, repository })}</main></div><footer>APEXREST · Apache-2.0 · Source build ${pkg.version} · Not an official Oracle or OpenAI product</footer></body></html>`;
  await mkdir('site-dist/' + page.slug, { recursive: true });
  await writeFile('site-dist/' + page.slug + (page.slug ? '/' : '') + 'index.html', html);
}
await writeFile('site-dist/search-index.json', JSON.stringify(search));
await writeFile(
  'site-dist/llms.txt',
  `# APEXREST for Codex\nIndependent local beta ${pkg.version}. No published stable release.\n\n` +
    search.map((p) => `- [${p.title}](${p.url})`).join('\n') +
    '\n',
);
await mkdir('site-dist/releases', { recursive: true });
await writeFile(
  'site-dist/releases/manifest.json',
  JSON.stringify(
    {
      schemaVersion: 1,
      version: pkg.version,
      published: false,
      status: 'run release:dry-run to populate exact artifact hashes',
    },
    null,
    2,
  ),
);
console.log(
  JSON.stringify({
    status: 'built',
    directory: 'site-dist',
    basePath: base,
    pages: search.length,
    published: false,
  }),
);
