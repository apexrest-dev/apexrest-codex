// Standalone pre-dependency bootstrap: only Node standard-library modules.
// Accepts a local, user-selected archive and its independently obtained SHA-256.
import { readFile, mkdir, writeFile, mkdtemp, realpath } from 'node:fs/promises';
import path from 'node:path';
import { tmpdir } from 'node:os';
import { createHash, verify } from 'node:crypto';
import { inflateRawSync } from 'node:zlib';
import { spawnSync } from 'node:child_process';
const args = process.argv.slice(2);
const take = (flag) => {
  const i = args.indexOf(flag);
  if (i < 0 || !args[i + 1]) throw new Error(`Missing ${flag}`);
  return args[i + 1];
};
const file = path.resolve(take('--bundle')),
  expected = take('--sha256');
if (!/^[a-f0-9]{64}$/.test(expected))
  throw new Error('Supply the independently verified SHA-256 of the local release archive');
const bytes = await readFile(file);
if (bytes.length > 128 * 1024 * 1024) throw new Error('Native archive exceeds 128 MiB');
if (createHash('sha256').update(bytes).digest('hex') !== expected)
  throw new Error('Release archive integrity failure');
if (args.includes('--manifest')) {
  const manifest = JSON.parse(await readFile(take('--manifest'), 'utf8'));
  const { signature, ...payload } = manifest;
  if (
    !signature ||
    !verify(
      null,
      Buffer.from(JSON.stringify(payload)),
      await readFile(take('--public-key')),
      Buffer.from(signature, 'base64'),
    )
  )
    throw new Error('Release manifest signature invalid');
  if (!payload.artifacts.some((a) => a.sha256 === expected))
    throw new Error('Archive is not in signed release manifest');
}
const root = await realpath(await mkdtemp(path.join(tmpdir(), 'apexrest-bootstrap-')));
// Read central directory first. Reject ZIP64, encrypted entries, links, duplicate paths and bombs.
let eocd = -1;
for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 65557); i--)
  if (bytes.readUInt32LE(i) === 0x06054b50) {
    eocd = i;
    break;
  }
if (eocd < 0) throw new Error('Invalid ZIP directory');
const count = bytes.readUInt16LE(eocd + 10);
let pos = bytes.readUInt32LE(eocd + 16),
  total = 0;
const seen = new Set(),
  entries = [];
if (count > 50000 || count === 65535) throw new Error('ZIP entry limit');
for (let i = 0; i < count; i++) {
  if (pos + 46 > bytes.length || bytes.readUInt32LE(pos) !== 0x02014b50)
    throw new Error('Invalid ZIP central entry');
  const flags = bytes.readUInt16LE(pos + 8),
    method = bytes.readUInt16LE(pos + 10),
    compressed = bytes.readUInt32LE(pos + 20),
    size = bytes.readUInt32LE(pos + 24),
    len = bytes.readUInt16LE(pos + 28),
    extra = bytes.readUInt16LE(pos + 30),
    comment = bytes.readUInt16LE(pos + 32),
    mode = bytes.readUInt32LE(pos + 38) >>> 16,
    offset = bytes.readUInt32LE(pos + 42);
  const name = bytes.subarray(pos + 46, pos + 46 + len).toString('utf8');
  pos += 46 + len + extra + comment;
  total += size;
  if (
    flags & 1 ||
    ![0, 8].includes(method) ||
    (mode & 0o170000) === 0o120000 ||
    name.startsWith('/') ||
    name.includes('\\') ||
    name.split('/').includes('..') ||
    /^[A-Za-z]:|[\x00-\x1f]/.test(name) ||
    seen.has(name) ||
    total > 512 * 1024 * 1024 ||
    size > 64 * 1024 * 1024
  )
    throw new Error('Unsafe ZIP entry');
  seen.add(name);
  if (offset + 30 > bytes.length || bytes.readUInt32LE(offset) !== 0x04034b50)
    throw new Error('Invalid local ZIP entry');
  const localNameLength = bytes.readUInt16LE(offset + 26),
    localExtraLength = bytes.readUInt16LE(offset + 28),
    start = offset + 30 + localNameLength + localExtraLength;
  if (
    start + compressed > bytes.length ||
    bytes.subarray(offset + 30, offset + 30 + localNameLength).toString('utf8') !== name
  )
    throw new Error('ZIP local/central mismatch');
  entries.push({ name, method, compressed, size, mode, start });
}
for (const e of entries) {
  const destination = path.join(root, e.name);
  if (e.name.endsWith('/')) {
    await mkdir(destination, { recursive: true, mode: 0o700 });
    continue;
  }
  await mkdir(path.dirname(destination), { recursive: true, mode: 0o700 });
  const packed = bytes.subarray(e.start, e.start + e.compressed);
  const output = e.method === 0 ? packed : inflateRawSync(packed, { maxOutputLength: Math.max(e.size, 1) });
  if (output.length !== e.size) throw new Error('ZIP expanded size mismatch');
  await writeFile(destination, output, { flag: 'wx', mode: e.mode & 0o111 ? 0o700 : 0o600 });
}
const cli = path.join(root, 'plugins/apexrest-apex/runtime/apexrest.mjs');
const passthrough = [];
for (let i = 0; i < args.length; i++) {
  if (['--bundle', '--sha256', '--manifest', '--public-key'].includes(args[i])) {
    i++;
    continue;
  }
  passthrough.push(args[i]);
}
const result = spawnSync(process.execPath, [cli, 'setup', '--from', root, ...passthrough], {
  stdio: 'inherit',
  env: process.env,
});
process.exitCode = result.status ?? 1;
