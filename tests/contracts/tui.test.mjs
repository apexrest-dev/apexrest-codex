import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const run = (...args) =>
  spawnSync(process.execPath, ['dist/runtime/apexrest.mjs', ...args], {
    encoding: 'utf8',
    timeout: 10000,
  });

test('bare CLI remains non-interactive in pipes and help includes the full command catalog', () => {
  const bare = run();
  assert.equal(bare.status, 0, bare.stderr);
  assert.match(bare.stdout, /tui \[--project PATH\]/);
  assert.match(bare.stdout, /docs read/);
  assert.match(bare.stdout, /metadata read/);
  assert.doesNotMatch(bare.stdout, /\x1b/);
  assert.equal(run('--help').stdout, bare.stdout);
});

test('explicit TUI rejects pipes and incompatible options with structured input failures', () => {
  for (const args of [
    ['tui'],
    ['tui', '--json'],
    ['tui', '--project'],
    ['tui', '--env', 'dev'],
    ['tui', '--project', '--json'],
  ]) {
    const result = run(...args);
    assert.equal(result.status, 2, result.stdout + result.stderr);
    const parsed = JSON.parse(result.stdout);
    assert.equal(parsed.ok, false);
    assert.equal(parsed.diagnostics[0].code, args.length === 1 ? 'TTY_REQUIRED' : 'INVALID_INPUT');
    assert.doesNotMatch(result.stdout, /\x1b/);
  }
});

test('explicit commands preserve JSON output and core failures without opening a TUI', () => {
  const version = run('version', '--json');
  assert.equal(version.status, 0);
  assert.equal(JSON.parse(version.stdout).operation, 'version');
  assert.equal(version.stdout.trim().split('\n').length, 1);
  assert.doesNotMatch(version.stdout, /\x1b/);
  const invalid = run('project', 'adopt', '--app-id', '0', '--env', 'dev', '--json');
  assert.equal(invalid.status, 2);
  assert.equal(JSON.parse(invalid.stdout).ok, false);
});

test('SQLcl mode CLI persists across processes and rejects unsupported modes without changing the saved value', async (t) => {
  const home = await mkdtemp(path.join(tmpdir(), 'apexrest-mode-cli-'));
  t.after(() => rm(home, { recursive: true, force: true }));
  const command = (...args) =>
    spawnSync(process.execPath, ['dist/runtime/apexrest.mjs', 'sqlcl', ...args, '--json'], {
      encoding: 'utf8',
      env: { ...process.env, APEXREST_HOME: home },
      timeout: 10000,
    });
  assert.equal(JSON.parse(command('status').stdout).data.mode, 'cli');
  assert.equal(command('configure', '--mode', 'mcp', '--mcp-restrict-level', '1').status, 0);
  assert.deepEqual(JSON.parse(command('status').stdout).data, {
    schemaVersion: 1,
    mode: 'mcp',
    mcpRestrictLevel: '1',
  });
  const saved = await readFile(path.join(home, 'sqlcl.json'), 'utf8');
  assert.equal(command('configure', '--mode', 'unknown').status, 2);
  assert.equal(command('configure', '--mode', 'mcp', '--mcp-restrict-level', '0').status, 2);
  assert.equal(await readFile(path.join(home, 'sqlcl.json'), 'utf8'), saved);
});
