import { readFile, writeFile, mkdir, rm, cp } from 'node:fs/promises';
const config = JSON.parse(await readFile('site/site.config.json', 'utf8')),
  publisher = JSON.parse(await readFile('publisher.config.json', 'utf8')),
  pkg = JSON.parse(await readFile('package.json', 'utf8'));
const base = process.env.APEXREST_SITE_BASE_PATH ?? publisher.basePath ?? config.basePath;
if (!/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(base)) throw new Error('basePath must be an absolute directory path');
const escape = (s) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
function inline(s) {
  return escape(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
      if (!/^(?:https:\/\/|[a-zA-Z0-9/_.-]+\/?)/.test(url)) return label;
      return `<a href="${url.startsWith('https:') ? url : base + url}">${label}</a>`;
    });
}
function markdown(text) {
  let html = '',
    paragraph = [],
    list = false,
    code = false,
    codeLines = [];
  const flush = () => {
    if (paragraph.length) {
      html += '<p>' + inline(paragraph.join(' ')) + '</p>';
      paragraph = [];
    }
  };
  for (const line of text.split('\n')) {
    if (line.startsWith('```')) {
      flush();
      if (list) {
        html += '</ul>';
        list = false;
      }
      if (code) {
        html += '<pre><code>' + escape(codeLines.join('\n')) + '</code></pre>';
        codeLines = [];
      }
      code = !code;
      continue;
    }
    if (code) {
      codeLines.push(line);
      continue;
    }
    if (/^#{1,3} /.test(line)) {
      flush();
      if (list) {
        html += '</ul>';
        list = false;
      }
      const level = line.match(/^#+/)[0].length;
      html += `<h${level}>${inline(line.slice(level + 1))}</h${level}>`;
    } else if (line.startsWith('- ')) {
      flush();
      if (!list) {
        html += '<ul>';
        list = true;
      }
      html += '<li>' + inline(line.slice(2)) + '</li>';
    } else if (!line.trim()) {
      flush();
      if (list) {
        html += '</ul>';
        list = false;
      }
    } else paragraph.push(line);
  }
  flush();
  if (list) html += '</ul>';
  if (code) throw new Error('Unclosed code fence');
  return html;
}
await rm('site-dist', { recursive: true, force: true });
await mkdir('site-dist/assets', { recursive: true });
for (const file of ['styles.css', 'search.js']) await cp('site/' + file, 'site-dist/assets/' + file);
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
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Independent APEXREST tools for native Codex and Oracle APEX development. Verified capabilities and explicit deployment evidence."><title>${escape(page.title)} · APEXREST</title><link rel="stylesheet" href="${base}assets/styles.css"><script src="${base}assets/search.js" defer></script></head><body data-base="${base}"><a class="skip" href="#main">Skip to content</a><header class="top"><a class="brand" href="${base}">APEXREST / CODEX</a><span class="badge">LOCAL BETA · ${pkg.version}</span></header><div class="layout"><aside class="sidebar"><details open><summary>Documentation</summary><nav aria-label="Documentation"><ul>${nav}</ul></nav></details><label class="search-label" for="search">Search documentation</label><input id="search" type="search" placeholder="Try “backup”" autocomplete="off"><ul class="search-results" id="search-results" aria-live="polite"></ul></aside><main id="main" tabindex="-1"><div class="eyebrow">Independent Oracle APEX tooling</div>${markdown(text)}</main></div><footer>APEXREST · Apache-2.0 · Local build ${pkg.version} · Not an official Oracle or OpenAI product</footer></body></html>`;
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
