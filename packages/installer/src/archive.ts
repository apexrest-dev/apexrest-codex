import path from 'node:path';
import { mkdir, lstat, symlink, link } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import * as tar from 'tar';
import yauzl from 'yauzl';
import type { Entry } from 'yauzl';
import { contained } from '../../core/src/fs.ts';
import { Fault } from '../../core/src/result.ts';
const maxExpanded = 2 * 1024 * 1024 * 1024,
  maxEntries = 50000;
export function archivePath(name: string) {
  if (
    !name ||
    name.includes('\\') ||
    /^[A-Za-z]:/.test(name) ||
    name.startsWith('/') ||
    name.split('/').includes('..') ||
    /[\x00-\x1f]/.test(name)
  )
    throw new Fault('UNSAFE_ARCHIVE', 'Archive entry escapes its extraction root.', 2);
  return name.replace(/^\.\//, '');
}
export async function extractArchive(
  file: string,
  target: string,
  type: 'zip' | 'tar.gz',
  allowLinks = false,
) {
  await mkdir(target, { recursive: true, mode: 0o700 });
  let total = 0,
    count = 0;
  const seen = new Set<string>();
  const check = (name: string, size: number) => {
    const clean = archivePath(name);
    total += size;
    count++;
    if (total > maxExpanded || count > maxEntries || size > 512 * 1024 * 1024)
      throw new Fault('ARCHIVE_LIMIT', 'Archive exceeds the expanded size or entry limit.', 2);
    if (seen.has(clean)) throw new Fault('DUPLICATE_ARCHIVE_ENTRY', 'Archive contains duplicate paths.', 2);
    seen.add(clean);
    return clean;
  };
  if (type === 'tar.gz') {
    const links: { name: string; target: string; hard: boolean }[] = [];
    let invalid: unknown;
    await tar.t({
      file,
      strict: true,
      onReadEntry: (entry) => {
        if (invalid) return;
        try {
          const name = check(entry.path, entry.size);
          if (entry.type === 'SymbolicLink' || entry.type === 'Link') {
            if (!allowLinks)
              throw new Fault('UNSAFE_ARCHIVE', 'Links are not allowed in native packages.', 2);
            if (!entry.linkpath) throw new Fault('UNSAFE_ARCHIVE', 'Link has no target.', 2);
            const linkTarget =
              entry.type === 'Link'
                ? entry.linkpath
                : path.posix.join(path.posix.dirname(name), entry.linkpath);
            if (path.isAbsolute(entry.linkpath))
              throw new Fault('UNSAFE_ARCHIVE', 'Absolute link target.', 2);
            archivePath(linkTarget);
            links.push({ name, target: linkTarget, hard: entry.type === 'Link' });
          } else if (
            !['File', 'Directory', 'OldFile', 'ExtendedHeader', 'GlobalExtendedHeader'].includes(entry.type)
          )
            throw new Fault('UNSAFE_ARCHIVE', 'Unsupported archive entry type.', 2);
        } catch (error) {
          invalid = error;
        }
      },
    });
    if (invalid) throw invalid;
    await tar.x({
      file,
      cwd: target,
      strict: true,
      preservePaths: false,
      noChmod: false,
      filter: (_name, entry) => 'type' in entry && ['File', 'Directory', 'OldFile'].includes(entry.type),
    });
    for (const entry of links) {
      const destination = await contained(target, entry.name),
        source = await contained(target, entry.target);
      await lstat(source);
      await mkdir(path.dirname(destination), { recursive: true });
      if (entry.hard) await link(source, destination);
      else await symlink(path.relative(path.dirname(destination), source), destination);
    }
    return;
  }
  await new Promise<void>((resolve, reject) => {
    yauzl.open(file, { lazyEntries: true, validateEntrySizes: true, strictFileNames: true }, (error, zip) => {
      if (error || !zip) {
        reject(error);
        return;
      }
      const fail = (e: unknown) => {
        zip.close();
        reject(e);
      };
      zip.on('error', fail);
      zip.on('end', resolve);
      zip.on('entry', (entry: Entry) => {
        void (async () => {
          const name = check(entry.fileName, entry.uncompressedSize);
          const mode = entry.externalFileAttributes >>> 16;
          if ((mode & 0o170000) === 0o120000 || entry.generalPurposeBitFlag & 1)
            throw new Fault('UNSAFE_ARCHIVE', 'Encrypted entries and symlinks are not accepted.', 2);
          const destination = await contained(target, name);
          if (name.endsWith('/')) await mkdir(destination, { recursive: true, mode: 0o700 });
          else {
            await mkdir(path.dirname(destination), { recursive: true, mode: 0o700 });
            const stream = await new Promise<NodeJS.ReadableStream>((res, rej) =>
              zip.openReadStream(entry, (e, s) => (e || !s ? rej(e) : res(s))),
            );
            await pipeline(
              stream,
              createWriteStream(destination, { flags: 'wx', mode: mode & 0o111 ? 0o700 : 0o600 }),
            );
          }
          zip.readEntry();
        })().catch(fail);
      });
      zip.readEntry();
    });
  });
}
