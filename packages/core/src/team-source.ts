import path from 'node:path';
import { readdir, readlink } from 'node:fs/promises';
import { hash, hashFile, canonical } from './fs.ts';
import { Fault } from './result.ts';

// Bind reviews to untracked source and configuration as well as committed files.
export async function teamSourceDigest(root: string) {
  const files: Record<string, string> = {};
  let count = 0;
  const walk = async (relative: string) => {
    for (const entry of await readdir(path.join(root, relative), { withFileTypes: true })) {
      if (['.git', '.apexrest', 'node_modules', '.DS_Store'].includes(entry.name)) continue;
      const name = path.join(relative, entry.name),
        file = path.join(root, name);
      if (++count > 20000)
        throw new Fault('TEAM_SOURCE_LIMIT', 'The team source inventory exceeds 20000 entries.', 2);
      if (entry.isDirectory()) await walk(name);
      else if (entry.isSymbolicLink()) files[name] = 'link:' + (await readlink(file));
      else if (entry.isFile()) files[name] = await hashFile(file);
      else throw new Fault('TEAM_SOURCE_TYPE', 'The team workspace contains an unsupported special file.', 2);
    }
  };
  await walk('');
  return hash(canonical(files));
}
