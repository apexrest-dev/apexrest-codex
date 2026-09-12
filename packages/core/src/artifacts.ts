import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { readFile, readdir, rm } from 'node:fs/promises';
import { z } from 'zod';
import { contained, exists, readJson, writeJson, atomicWrite, hash } from './fs.ts';
import type { ProjectContext } from './config.ts';
import { parse } from './config.ts';
import { Fault, redact } from './result.ts';
export class ArtifactService {
  constructor(private ctx: ProjectContext) {}
  async save(content: string, kind: string) {
    const id = randomUUID(),
      directory = await contained(this.ctx.root, this.ctx.config.artifacts.directory);
    const sanitized = redact(content);
    await atomicWrite(path.join(directory, id + '.txt'), sanitized);
    await writeJson(path.join(directory, id + '.json'), {
      id,
      kind,
      sha256: hash(sanitized),
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + this.ctx.config.artifacts.retentionDays * 86400000).toISOString(),
      classification: 'private-sanitized-text',
    });
    return id;
  }
  async read(id: string, offset = 0, limit = 4096) {
    parse(z.uuid(), id);
    parse(z.number().int().min(0).max(10000000), offset);
    parse(z.number().int().min(1).max(16384), limit);
    const directory = await contained(this.ctx.root, this.ctx.config.artifacts.directory);
    const metadata = (await readJson(await contained(directory, id + '.json'))) as {
      expiresAt: string;
      sha256: string;
      kind: string;
    };
    if (Date.parse(metadata.expiresAt) < Date.now())
      throw new Fault('ARTIFACT_EXPIRED', 'Artifact retention has expired.', 3);
    if (/auth|wallet|credential/i.test(metadata.kind))
      throw new Fault(
        'PRIVATE_ARTIFACT_DENIED',
        'Authentication and credential artifacts cannot be read through tools.',
        4,
      );
    const content = await readFile(await contained(directory, id + '.txt'), 'utf8');
    if (hash(content) !== metadata.sha256)
      throw new Fault('ARTIFACT_CHANGED', 'Artifact integrity check failed.', 5);
    return {
      id,
      offset,
      content: redact(content.slice(offset, offset + limit)),
      nextOffset: offset + limit < content.length ? offset + limit : null,
      dataClassification: 'untrusted_operation_output',
    };
  }
  async prune() {
    const directory = await contained(this.ctx.root, this.ctx.config.artifacts.directory);
    let removed = 0;
    if (!(await exists(directory))) return { removed };
    for (const file of await readdir(directory))
      if (/^[a-f0-9-]{36}\.json$/.test(file)) {
        const metadata = (await readJson(path.join(directory, file))) as { expiresAt: string };
        if (Date.parse(metadata.expiresAt) < Date.now()) {
          await rm(path.join(directory, file));
          await rm(path.join(directory, file.replace('.json', '.txt')), { force: true });
          removed++;
        }
      }
    return { removed };
  }
}
