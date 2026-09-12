import { spawnSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { files } from './lib/release.mjs';
const targets = [];
for (const root of ['packages', 'scripts', 'tests', 'plugins', 'site'])
  for (const file of await files(root))
    if (/\.(ts|mjs|js|json|css)$/.test(file)) targets.push(root + '/' + file);
const r = spawnSync(
  process.execPath,
  ['node_modules/prettier/bin/prettier.cjs', '--check', ...targets, 'package.json', 'tsconfig.base.json'],
  { stdio: 'inherit' },
);
if (r.status !== 0) process.exitCode = 1;
for (const file of targets.filter((f) => f.startsWith('packages/') && f.endsWith('.ts'))) {
  const text = await readFile(file, 'utf8');
  if (/@ts-(?:ignore|nocheck)|shell:\s*true|eval\(/.test(text))
    throw new Error(`Unsafe or unchecked source in ${file}`);
}
const pkg = JSON.parse(await readFile('package.json', 'utf8'));
if (pkg.scripts.postinstall) throw new Error('No automatic postinstall downloads');
