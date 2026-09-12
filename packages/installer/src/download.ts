import path from 'node:path';
import { createHash } from 'node:crypto';
import { atomicWrite, exists, hashFile } from '../../core/src/fs.ts';
import { Fault } from '../../core/src/result.ts';
export interface Artifact {
  id: string;
  version: string;
  url: string;
  sha256: string;
  os: string;
  arch: string;
  type: 'tar.gz' | 'zip';
  executable: string;
  allowedHosts: string[];
  license: string;
  consentRequired: boolean;
}
export async function download(
  artifact: Artifact,
  cache: string,
  offline = false,
  fetcher: typeof fetch = fetch,
): Promise<string> {
  if (!/^[a-f0-9]{64}$/.test(artifact.sha256) || /(?:latest|main)(?:[./?]|$)/.test(artifact.url))
    throw new Fault('UNPINNED_ARTIFACT', 'Downloads require an immutable version URL and SHA-256.', 2);
  const file = path.join(cache, artifact.sha256);
  if (await exists(file)) {
    if ((await hashFile(file)) !== artifact.sha256)
      throw new Fault(
        'INTEGRITY_FAILURE',
        'Cached artifact SHA-256 does not match the trusted lock.',
        3,
        'blocked',
      );
    return file;
  }
  if (offline)
    throw new Fault(
      'OFFLINE_CACHE_MISS',
      `Artifact ${artifact.id} ${artifact.version} is absent from the offline cache.`,
      3,
      'blocked',
    );
  let url = new URL(artifact.url);
  for (let redirect = 0; redirect < 6; redirect++) {
    if (
      url.protocol !== 'https:' ||
      url.username ||
      url.password ||
      !artifact.allowedHosts.includes(url.hostname)
    )
      throw new Fault(
        'DOWNLOAD_ORIGIN_DENIED',
        'Download redirect left the vendor origin allowlist.',
        4,
        'blocked',
      );
    let response: Response | undefined;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        response = await fetcher(url, { redirect: 'manual', signal: AbortSignal.timeout(120000) });
        if (response.status < 500) break;
        await response.body?.cancel();
      } catch (e) {
        if (attempt === 2)
          throw new Fault(
            'DOWNLOAD_FAILED',
            e instanceof Error ? e.message : 'Vendor download failed.',
            3,
            'blocked',
          );
      }
    }
    if (!response) throw new Fault('DOWNLOAD_FAILED', 'No download response.', 3);
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const next = response.headers.get('location');
      await response.body?.cancel();
      if (!next) throw new Fault('DOWNLOAD_FAILED', 'Missing redirect destination.', 3);
      url = new URL(next, url);
      continue;
    }
    if (!response.ok || !response.body) {
      await response.body?.cancel();
      throw new Fault('DOWNLOAD_FAILED', `Vendor returned HTTP ${response.status}.`, 3, 'blocked');
    }
    const body = response.body;
    async function* verifiedChunks() {
      let size = 0;
      const digest = createHash('sha256');
      for await (const value of body as unknown as AsyncIterable<Uint8Array>) {
        size += value.length;
        if (size > 512 * 1024 * 1024) throw new Fault('DOWNLOAD_LIMIT', 'Download exceeds 512 MiB.', 3);
        digest.update(value);
        yield value;
      }
      if (digest.digest('hex') !== artifact.sha256)
        throw new Fault(
          'INTEGRITY_FAILURE',
          'Download SHA-256 does not match the trusted lock. Nothing was executed.',
          3,
          'blocked',
        );
    }
    try {
      // atomicWrite publishes only after the entire stream passes size and checksum checks.
      await atomicWrite(file, verifiedChunks());
    } finally {
      await body.cancel().catch(() => {});
    }
    return file;
  }
  throw new Fault('DOWNLOAD_REDIRECT_LIMIT', 'Too many vendor redirects.', 3);
}
