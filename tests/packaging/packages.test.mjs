import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, writeFile, mkdir, cp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { Ajv2020 } from 'ajv/dist/2020.js';
import { zipSync, unzipSync } from 'fflate';
import { sha256, zipTree, files } from '../../scripts/lib/release.mjs';
const pkg = JSON.parse(await readFile('package.json', 'utf8'));
test('portable package validates against retrieved official schemas', async () => {
  const ajv = new Ajv2020({ strict: false });
  for (const name of ['plugin', 'mcp']) {
    const schema = JSON.parse(await readFile(`schemas/vendor/${name}.schema.json`));
    const value = JSON.parse(await readFile(`dist/portable/plugins/apexrest-apex/${name}.json`));
    assert.ok(ajv.validate(schema, value), ajv.errorsText());
  }
});
test('both profiles are self-contained, same version, eight bounded skills and no author paths', async () => {
  for (const profile of ['portable', 'codex-compat']) {
    const root = `dist/${profile}/plugins/apexrest-apex`;
    const list = await files(root);
    assert.equal(list.filter((f) => /^skills\/[^/]+\/SKILL.md$/.test(f)).length, 8);
    const manifest = JSON.parse(
      await readFile(root + '/' + (profile === 'portable' ? 'plugin.json' : '.codex-plugin/plugin.json')),
    );
    assert.equal(manifest.version, pkg.version);
    assert.ok(list.includes('resources/templates/blank-app/application/.apex/apexlang.json'));
    for (const file of list.filter((f) => /\.(?:json|mjs|md)$/.test(f))) {
      const bytes = await readFile(root + '/' + file, 'utf8');
      assert.ok(!bytes.includes('/Users/oleksii/'), file);
      assert.ok(!/BEGIN (?:RSA |OPENSSH )?PRIVATE KEY/.test(bytes), file);
    }
    const temp = await mkdtemp(path.join(tmpdir(), 'apexrest-package-'));
    await cp(root, temp, { recursive: true });
    const r = spawnSync(
      process.execPath,
      [path.join(temp, 'runtime/apexrest.mjs'), 'plugin', 'validate', '--from', temp, '--json'],
      { cwd: temp, encoding: 'utf8' },
    );
    assert.equal(r.status, 0, r.stdout + r.stderr);
  }
});
test('ZIP generation is deterministic and includes dotfiles, licenses and native metadata', async () => {
  const first = await zipTree('dist/codex-compat', zipSync),
    second = await zipTree('dist/codex-compat', zipSync);
  assert.equal(sha256(first), sha256(second));
  const entries = unzipSync(first);
  assert.ok(entries['.agents/plugins/marketplace.json']);
  assert.ok(entries['plugins/apexrest-apex/.mcp.json']);
  assert.ok(entries['plugins/apexrest-apex/LICENSE']);
});
test('bootstrap refuses tampered ZIP before any installation code', async () => {
  const temp = await mkdtemp(path.join(tmpdir(), 'apexrest-integrity-'));
  const archive = path.join(temp, 'bad.zip');
  await writeFile(archive, 'not-a-release');
  const r = spawnSync(
    process.execPath,
    ['scripts/bootstrap-runtime.mjs', '--bundle', archive, '--sha256', '0'.repeat(64), '--yes'],
    { encoding: 'utf8' },
  );
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /integrity failure/);
});
test('site has all required routes, working internal links and accessible structure', async () => {
  const all = await files('site-dist');
  assert.ok(all.includes('llms.txt'));
  for (const file of all.filter((f) => f.endsWith('.html'))) {
    const html = await readFile('site-dist/' + file, 'utf8');
    assert.match(html, /<html lang="en"/);
    assert.match(html, /id="main"/);
    assert.match(html, /for="search"/);
    for (const link of [...html.matchAll(/(?:href|src)="(\/codex\/[^"#]*)"/g)].map((m) => m[1])) {
      let target = link.slice('/codex/'.length);
      if (!target || target.endsWith('/')) target += 'index.html';
      assert.ok(all.includes(target), `${file}: broken ${link}`);
    }
  }
});
