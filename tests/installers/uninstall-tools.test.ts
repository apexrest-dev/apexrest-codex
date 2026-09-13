import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm, symlink } from 'node:fs/promises';
import path from 'node:path';
import { tmpdir } from 'node:os';
import { uninstallTools } from '../../packages/installer/src/uninstall-tools.ts';
import { exists } from '../../packages/core/src/fs.ts';

test('managed tools removal previews, requires approval and preserves projects, credentials, cache and external runtimes', async (t) => {
  const root = await mkdtemp(path.join(tmpdir(), 'apexrest-uninstall-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const home = path.join(root, 'managed');
  const java = path.join(home, 'toolchains/java/21/bin/java');
  const sqlcl = path.join(home, 'toolchains/sqlcl/26/bin/sql');
  const playwright = path.join(home, 'playwright/1/node_modules/playwright/cli.js');
  const node = path.join(root, 'external/bin/node');
  for (const file of [
    java,
    sqlcl,
    playwright,
    node,
    path.join(home, 'browsers/chromium/chrome'),
    path.join(home, 'cache/archive'),
    path.join(home, 'connections.json'),
    path.join(root, 'project/apexrest.json'),
  ]) {
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, 'preserved fixture');
  }
  await writeFile(
    path.join(home, 'runtime.json'),
    JSON.stringify({
      schemaVersion: 1,
      java,
      sqlcl,
      playwright,
      node,
      browser: 'fixture',
      components: { java: 'verified', sqlcl: 'verified', playwright: 'verified', node: 'verified' },
    }),
  );
  const preview = await uninstallTools({ home, dryRun: true });
  assert.equal(preview.status, 'planned');
  assert.equal(await exists(java), true);
  await assert.rejects(uninstallTools({ home }), { code: 'SETUP_APPROVAL_REQUIRED' });
  assert.equal(await exists(sqlcl), true);
  assert.equal((await uninstallTools({ home, yes: true })).status, 'uninstalled');
  for (const file of [java, sqlcl, playwright, path.join(home, 'browsers')])
    assert.equal(await exists(file), false);
  for (const file of [
    node,
    path.join(home, 'cache/archive'),
    path.join(home, 'connections.json'),
    path.join(root, 'project/apexrest.json'),
  ])
    assert.equal(await readFile(file, 'utf8'), 'preserved fixture');
  const state = JSON.parse(await readFile(path.join(home, 'runtime.json'), 'utf8'));
  assert.equal(state.node, node);
  assert.equal(state.java, undefined);
  assert.equal(state.browser, undefined);
  assert.equal((await uninstallTools({ home, yes: true })).status, 'uninstalled');
});

test('tool removal refuses symlink ownership changes before removing any component', async (t) => {
  const root = await mkdtemp(path.join(tmpdir(), 'apexrest-uninstall-symlink-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const home = path.join(root, 'managed');
  const external = path.join(root, 'external');
  const java = path.join(home, 'toolchains/java/21/bin/java');
  await mkdir(path.dirname(java), { recursive: true });
  await writeFile(java, 'keep java');
  await mkdir(path.join(external, '26/bin'), { recursive: true });
  await writeFile(path.join(external, '26/bin/sql'), 'keep external');
  await symlink(
    external,
    path.join(home, 'toolchains/sqlcl'),
    process.platform === 'win32' ? 'junction' : 'dir',
  );
  await writeFile(
    path.join(home, 'runtime.json'),
    JSON.stringify({
      schemaVersion: 1,
      java,
      sqlcl: path.join(home, 'toolchains/sqlcl/26/bin/sql'),
      components: {},
    }),
  );
  await assert.rejects(uninstallTools({ home, yes: true }), { code: 'TOOLCHAIN_OWNERSHIP_CONFLICT' });
  assert.equal(await readFile(java, 'utf8'), 'keep java');
  assert.equal(await readFile(path.join(external, '26/bin/sql'), 'utf8'), 'keep external');
});

test('Node used by the launcher or plugin remains available after tool removal', async (t) => {
  const home = await mkdtemp(path.join(tmpdir(), 'apexrest-uninstall-node-'));
  t.after(() => rm(home, { recursive: true, force: true }));
  const node = path.join(home, 'toolchains/node/24/bin/node');
  await mkdir(path.dirname(node), { recursive: true });
  await writeFile(node, 'fixture node');
  await mkdir(path.join(home, 'bin'));
  await writeFile(
    path.join(home, 'runtime.json'),
    JSON.stringify({ schemaVersion: 1, node, components: { node: 'verified' } }),
  );
  await uninstallTools({ home, yes: true });
  assert.equal(await readFile(node, 'utf8'), 'fixture node');
});
