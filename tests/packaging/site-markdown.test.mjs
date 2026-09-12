import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { documentationUrl, renderMarkdown } from '../../scripts/lib/site-markdown.mjs';

const context = {
  source: 'docs/start.md',
  base: '/codex/',
  repository: 'https://github.com/apexrest-dev/apexrest-codex',
  pages: [
    { source: 'docs/start.md', slug: 'docs' },
    { source: 'docs/deployment-safety.md', slug: 'deployment' },
    { source: 'site/content/install.md', slug: 'install', aliases: ['docs/installation.md'] },
  ],
  assets: ['docs/assets/overview.svg'],
};

test('documentation renders tables, nested ordered lists, fenced code, emphasis and unique heading anchors', () => {
  const html = renderMarkdown(
    '# Quick start\n\n## Install **Codex**\n\n1. Clone the repository.\n   - Keep the lockfile.\n2. Run `npm ci`.\n\n| Check | Status |\n| --- | --- |\n| Compiler | **Passed** |\n\n```sh\necho "<script>"\n```\n\n## Install **Codex**\n',
    context,
  );
  assert.match(html, /<h1 id="quick-start">Quick start<\/h1>/);
  assert.match(html, /id="install-codex"/);
  assert.match(html, /id="install-codex-1"/);
  assert.match(html, /<ol>[\s\S]*<ul>[\s\S]*Keep the lockfile/);
  assert.match(html, /<table>[\s\S]*<th>Check<\/th>[\s\S]*<td><strong>Passed<\/strong><\/td>/);
  assert.match(html, /<code class="language-sh">echo &quot;&lt;script&gt;&quot;/);
});

test('documentation links map source files to routes, preserve anchors and fall back to the canonical repository', () => {
  assert.equal(documentationUrl('deployment-safety.md#approval', context), '/codex/deployment/#approval');
  assert.equal(documentationUrl('installation.md', context), '/codex/install/');
  assert.equal(documentationUrl('#quick-start', context), '#quick-start');
  assert.equal(documentationUrl('../LICENSE', context), context.repository + '/blob/main/LICENSE');
  assert.equal(
    documentationUrl('other-guide.md#details', context),
    context.repository + '/blob/main/docs/other-guide.md#details',
  );
  assert.equal(
    documentationUrl('../packages/core/', context),
    context.repository + '/tree/main/packages/core/',
  );
  assert.equal(documentationUrl('deployment-safety.md', { ...context, base: '/' }), '/deployment/');
});

test('heading anchors avoid collisions with generated suffixes and page chrome', () => {
  const html = renderMarkdown('# Main\n\n## Topic\n\n## Topic\n\n## Topic-1\n', context);
  const ids = [...html.matchAll(/ id="([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(ids, ['main-1', 'topic', 'topic-1', 'topic-1-1']);
});

test('documentation images use copied assets, meaningful alt text and safe attributes', () => {
  const html = renderMarkdown('![APEX workflow](assets/overview.svg "Read the workflow")', context);
  assert.match(html, /<img src="\/codex\/assets\/overview.svg" alt="APEX workflow"/);
  assert.match(html, /title="Read the workflow" loading="lazy" decoding="async"/);
  assert.equal(documentationUrl('assets/missing.svg', context, true), null);
});

test('documentation escapes raw HTML and excludes unsafe links, credential URLs and repository escapes', () => {
  for (const href of [
    'javascript:alert(1)',
    'data:text/html,bad',
    'http://example.test/',
    '//example.test/',
    'https://user:password@example.test/',
    '../../../escape.md',
    '%2e%2e/%2e%2e/escape.md',
    'https://example.test/"onclick="bad',
    'java\nscript:bad',
  ])
    assert.equal(documentationUrl(href, context), null, href);
  const html = renderMarkdown(
    '<script>alert(1)</script>\n\n[Unsafe](javascript:alert%281%29) ![Unsafe image](data:text/html,bad)\n\n<a href="https://example.test" onclick="bad()">HTML</a>',
    context,
  );
  assert.doesNotMatch(html, /<script|<a\b|<img\b/);
  assert.match(html, /&lt;script&gt;/);
});

test('built site copies infographic SVGs and keeps a restrictive browser policy', async () => {
  for (const name of ['overview.svg', 'deployment-flow.svg', 'performance.svg']) {
    assert.equal(
      await readFile('site-dist/assets/' + name, 'utf8'),
      await readFile('docs/assets/' + name, 'utf8'),
    );
  }
  const html = await readFile('site-dist/index.html', 'utf8');
  assert.match(html, /Content-Security-Policy/);
  assert.match(html, /object-src 'none'/);
  assert.match(html, /<img src="\/codex\/assets\/overview.svg"/);
});

test('built documentation links point to existing sections and each page has unique IDs', async () => {
  const config = JSON.parse(await readFile('site/site.config.json', 'utf8'));
  const pages = new Map();
  for (const page of config.pages) {
    const html = await readFile(`site-dist/${page.slug ? page.slug + '/' : ''}index.html`, 'utf8');
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, `${page.source}: duplicate IDs`);
    pages.set(`/codex/${page.slug ? page.slug + '/' : ''}`, { html, ids });
  }
  for (const [route, page] of pages) {
    for (const [, href] of page.html.matchAll(/\bhref="([^"\s]+)"/g)) {
      if (!href.startsWith('#') && !href.startsWith('/codex/')) continue;
      const target = new URL(href.replaceAll('&amp;', '&'), 'https://docs.test' + route);
      if (!target.hash) continue;
      assert.ok(
        pages.get(target.pathname)?.ids.includes(decodeURIComponent(target.hash.slice(1))),
        `${route}: missing section ${href}`,
      );
    }
  }
});
