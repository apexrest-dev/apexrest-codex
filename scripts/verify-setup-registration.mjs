import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { cp, mkdir, mkdtemp, readFile, readdir, realpath, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: {
    runtime: { type: 'string', default: 'dist/runtime/apexrest.mjs' },
    source: { type: 'string', default: 'dist/codex-compat' },
    codex: { type: 'string', default: 'codex' },
    help: { type: 'boolean', default: false },
  },
});
if (values.help) {
  console.log(`Verify setup adoption and repeat installation with the actual local Codex CLI.

Usage: node scripts/verify-setup-registration.mjs [options]

  --runtime PATH  Built APEXREST CLI (default: dist/runtime/apexrest.mjs)
  --source PATH   Built compatibility marketplace (default: dist/codex-compat)
  --codex PATH    Codex CLI executable (default: codex)
  --help          Show this help

Uses a fresh temporary Codex profile and managed directory. No downloads or Oracle
operations are requested. Temporary files and a report remain available for review.`);
  process.exit(0);
}

const location = await realpath(await mkdtemp(path.join(tmpdir(), 'apexrest-setup-registration-')));
const profile = path.join(location, 'codex-profile');
const managed = path.join(location, 'managed');
const previousSource = path.join(location, 'previous-source');
const unrelatedSource = path.join(location, 'unrelated-marketplace');
const runtime = await realpath(path.resolve(values.runtime));
const source = await realpath(path.resolve(values.source));
const env = { ...process.env, CODEX_HOME: profile, APEXREST_HOME: managed };
// The third install must resolve resources relative to the installed CLI itself.
delete env.APEXREST_RESOURCES;

const report = {
  schemaVersion: 1,
  scope: 'actual-isolated-codex-cli-registration',
  status: 'running',
  timestamp: new Date().toISOString(),
  platform: process.platform,
  node: process.version,
  location,
  profile,
  managed,
  runtime,
  source,
  checks: [],
  downloads: 'not-requested',
  oracle: 'not-run',
  actualUserProfile: 'not-modified',
};
const command = (label, executable, args, json = true) => {
  const result = spawnSync(executable, args, {
    cwd: location,
    env,
    encoding: 'utf8',
    timeout: 60000,
    maxBuffer: 4 * 1024 * 1024,
  });
  assert.equal(result.error, undefined, `${label}: ${String(result.error)}`);
  assert.equal(result.status, 0, `${label}: ${result.stdout}\n${result.stderr}`);
  return json ? JSON.parse(result.stdout) : result.stdout.trim();
};
const codex = (label, args) => command(label, values.codex, args);
const readJson = async (file) => JSON.parse(await readFile(file, 'utf8'));
const writeJson = async (file, value) => {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(value, null, 2) + '\n');
};
const inventory = async (root) => {
  const entries = {};
  const walk = async (directory) => {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(file);
      else {
        assert.ok(entry.isFile(), `Expected a regular fixture file: ${file}`);
        entries[path.relative(root, file).split(path.sep).join('/')] = createHash('sha256')
          .update(await readFile(file))
          .digest('hex');
      }
    }
  };
  await walk(root);
  return Object.fromEntries(Object.entries(entries).sort());
};
const marketplaces = () =>
  codex('list marketplaces', ['plugin', 'marketplace', 'list', '--json']).marketplaces;
const others = (entries) => entries.filter((entry) => entry.name !== 'apexrest');
const inside = async (directory, file) => {
  const resolved = await realpath(file);
  assert.ok(
    resolved.startsWith(directory + path.sep),
    `Expected isolated path within ${directory}: ${resolved}`,
  );
  return resolved;
};

try {
  await mkdir(profile);
  await mkdir(managed);
  const sentinel = 'hide_agent_reasoning = true';
  await writeFile(path.join(profile, 'config.toml'), sentinel + '\n');
  report.codex = command('Codex version', values.codex, ['--version'], false);
  await cp(source, previousSource, { recursive: true });
  await writeFile(
    path.join(previousSource, 'plugins/apexrest-apex/resources/previous-registration-fixture.txt'),
    'Previous same-version source; setup must preserve this file and refresh the installed cache.\n',
  );
  await writeJson(path.join(unrelatedSource, '.agents/plugins/marketplace.json'), {
    name: 'registration-preservation-fixture',
    interface: { displayName: 'Registration preservation fixture' },
    plugins: [],
  });
  codex('register previous APEXREST', ['plugin', 'marketplace', 'add', previousSource, '--json']);
  const previousInstall = codex('install previous APEXREST', [
    'plugin',
    'add',
    'apexrest-apex@apexrest',
    '--json',
  ]);
  codex('register unrelated marketplace', ['plugin', 'marketplace', 'add', unrelatedSource, '--json']);
  const previousInventory = await inventory(previousSource);
  const unrelatedInventory = await inventory(unrelatedSource);
  const initialOtherMarkets = others(marketplaces());
  assert.ok(initialOtherMarkets.some((entry) => entry.root === unrelatedSource));
  assert.deepEqual(
    await inventory(await inside(profile, previousInstall.installedPath)),
    await inventory(path.join(previousSource, 'plugins/apexrest-apex')),
  );
  report.checks.push('actual Codex registered and installed the previous same-version local source');

  const setup = (label, cli, explicitSource) => {
    const result = command(label, process.execPath, [
      cli,
      'setup',
      '--native-only',
      '--yes',
      '--home',
      managed,
      '--codex-home',
      profile,
      ...(explicitSource ? ['--from', source] : []),
      '--json',
    ]);
    assert.equal(result.ok, true, `${label}: ${result.summary}`);
    assert.equal(result.data.toolchain.status, 'not-requested');
    assert.equal(result.data.components.mcp, 'verified');
    return result.data.native;
  };
  const verify = async (native, action) => {
    assert.equal(native.registration.action, action);
    const destination = await inside(managed, native.destination);
    assert.equal(native.root, path.join(destination, 'plugins/apexrest-apex'));
    assert.equal((await readJson(await inside(managed, native.registration.transition))).status, 'completed');
    const current = marketplaces();
    assert.equal(current.find((entry) => entry.name === 'apexrest')?.root, destination);
    assert.deepEqual(others(current), initialOtherMarkets, 'Unrelated registrations remain identical');
    assert.deepEqual(
      await inventory(await inside(profile, native.installed.installedPath)),
      await inventory(native.root),
      'Actual Codex cache matches every reviewed installed file',
    );
    const listing = codex('verify plugin enablement', [
      'plugin',
      'list',
      '--marketplace',
      'apexrest',
      '--json',
    ]);
    assert.ok(
      listing.installed.some((entry) => entry.pluginId === 'apexrest-apex@apexrest' && entry.enabled),
    );
    assert.deepEqual(await inventory(previousSource), previousInventory, 'Previous source remains unchanged');
    assert.deepEqual(
      await inventory(unrelatedSource),
      unrelatedInventory,
      'Unrelated source remains unchanged',
    );
    assert.ok((await readFile(path.join(profile, 'config.toml'), 'utf8')).includes(sentinel));
    assert.equal((await readJson(path.join(managed, 'installation.json'))).destination, destination);
  };

  const adopted = setup('adopt previous registration', runtime, true);
  await verify(adopted, 'adopt');
  report.checks.push(
    'setup adopts the identified registration, completes its transition and refreshes the actual Codex cache',
  );
  const repeated = setup('repeat explicit source setup', runtime, true);
  await verify(repeated, 'update');
  assert.equal(repeated.destination, adopted.destination);
  assert.equal(repeated.sourceDigest, adopted.sourceDigest);
  report.checks.push('repeating an explicit source updates the same managed destination');
  const installedCli = path.join(adopted.root, 'runtime/apexrest.mjs');
  const defaultSource = setup(
    'repeat setup from installed CLI without a source override',
    installedCli,
    false,
  );
  await verify(defaultSource, 'update');
  assert.equal(defaultSource.destination, adopted.destination);
  assert.equal(defaultSource.sourceDigest, adopted.sourceDigest);
  report.checks.push(
    'installed CLI default source keeps the same destination despite its managed MCP bindings',
  );
  report.checks.push(
    'previous source, unrelated marketplace and sentinel config remain preserved after every setup',
  );
  report.destination = adopted.destination;
  report.sourceDigest = adopted.sourceDigest;
  report.status = 'passed';
} catch (error) {
  report.status = 'failed';
  report.failure = String(error);
  process.exitCode = 1;
} finally {
  await writeJson(path.join(location, 'report.json'), report);
  console.log(JSON.stringify(report, null, 2));
}
