import { ArtifactService } from '../../core/src/artifacts.ts';
import { loadProject } from '../../core/src/config.ts';
import { sanitized, type Result } from '../../core/src/result.ts';
import { hash } from '../../core/src/fs.ts';

const inlineLimit = 8192;
const readerLimit = 32768;
export const panelResultKey = 'apexrest/panelResult';
const archives = new Map<string, { artifactId: string; capturedRunId: string }>();

function preview(value: unknown): unknown {
  if (Array.isArray(value)) return { count: value.length };
  if (!value || typeof value !== 'object') return typeof value === 'string' ? value.slice(0, 400) : value;
  const data = value as Record<string, unknown>;
  const result: Record<string, unknown> = {};
  for (const key of [
    'id',
    'jobId',
    'teamId',
    'cursor',
    'terminal',
    'projectId',
    'project',
    'root',
    'status',
    'phase',
    'revision',
    'ok',
    'summary',
    'configured',
    'trusted',
    'executionMode',
    'browserMode',
    'nextAction',
    'fullReport',
  ]) {
    const entry = data[key];
    if (['string', 'number', 'boolean'].includes(typeof entry))
      result[key] = typeof entry === 'string' ? entry.slice(0, 400) : entry;
  }
  for (const key of [
    'jobs',
    'teams',
    'deployments',
    'diagnostics',
    'artifacts',
    'reviews',
    'qa',
    'verification',
  ])
    if (Array.isArray(data[key])) result[key + 'Count'] = data[key].length;
  for (const key of ['result', 'team'])
    if (data[key] && typeof data[key] === 'object') {
      const nested = data[key] as Record<string, unknown>;
      result[key] = Object.fromEntries(
        ['id', 'ok', 'status', 'phase', 'revision', 'summary']
          .filter((k) => ['string', 'boolean', 'number'].includes(typeof nested[k]))
          .map((k) => [k, typeof nested[k] === 'string' ? nested[k].slice(0, 400) : nested[k]]),
      );
    }
  if (data.sources && typeof data.sources === 'object')
    result.sourceCounts = Object.fromEntries(
      Object.entries(data.sources)
        .slice(0, 8)
        .map(([key, files]) => [
          key.slice(0, 80),
          files && typeof files === 'object' ? Object.keys(files).length : null,
        ]),
    );
  return result;
}

// Keep operation outcome separate from transport size. A large successful
// operation must never become a failure that invites replaying a write.
export async function toolOutput(original: Result, project?: string) {
  const full = sanitized(original) as Result;
  const serialized = JSON.stringify(full);
  const panel = full.operation.startsWith('panel.');
  const reader = ['docs.read', 'artifacts.read'].includes(full.operation);
  let result = full;
  if (serialized.length > (reader ? readerLimit : inlineLimit)) {
    let artifactId: string | undefined;
    let capturedRunId: string | undefined;
    let recoveryError: string | undefined;
    try {
      if (!project) throw new Error('No project is available for a local result artifact.');
      const service = new ArtifactService(await loadProject(project));
      const stable = { ...full, runId: '' };
      if (full.operation === 'panel.status' && full.data && typeof full.data === 'object')
        stable.data = { ...full.data, updatedAt: '' };
      const key = hash(project + JSON.stringify(stable));
      const cached = archives.get(key);
      if (
        cached &&
        (await service.read(cached.artifactId, 0, 1).then(
          () => true,
          () => false,
        ))
      ) {
        ({ artifactId, capturedRunId } = cached);
      } else {
        artifactId = await service.saveJson(full, 'mcp-result');
        capturedRunId = full.runId;
        archives.set(key, { artifactId, capturedRunId });
        if (archives.size > 32) archives.delete(archives.keys().next().value!);
      }
    } catch {
      recoveryError =
        'The complete result could not be archived. Inspect the existing local operation record; do not rerun a completed operation.';
    }
    result = {
      ...full,
      summary: full.summary.slice(0, 600),
      diagnostics: full.diagnostics
        .slice(0, 5)
        .map((d) => ({ severity: d.severity, code: d.code.slice(0, 100), message: d.message.slice(0, 400) })),
      artifacts: artifactId ? [artifactId] : [],
      nextActions: artifactId
        ? [
            'Read the full result with apexrest_artifact_read using output.artifactId and the same project. Follow nextOffset; do not repeat the operation.',
          ]
        : [recoveryError!],
      data: {
        ...(preview(full.data) as Record<string, unknown>),
        output: {
          compacted: true,
          characters: serialized.length,
          diagnosticsCount: full.diagnostics.length,
          artifactsCount: full.artifacts.length,
          ...(artifactId ? { artifactId, capturedRunId } : { recovery: 'unavailable' }),
        },
      },
    };
    if (JSON.stringify(result).length > inlineLimit) {
      const data = result.data as Record<string, unknown>;
      result.data = Object.fromEntries(
        ['id', 'jobId', 'teamId', 'cursor', 'terminal', 'output']
          .filter((key) => data[key] !== undefined)
          .map((key) => [key, data[key]]),
      );
    }
  }
  // UI-only metadata carries the original sanitized panel envelope. Text is
  // concise and never duplicated in structuredContent. The bundled panel reads
  // full snapshots here; other consumers can recover the archived text result.
  return {
    isError: !result.ok,
    content: [{ type: 'text' as const, text: JSON.stringify(result) }],
    ...(panel ? { _meta: { [panelResultKey]: full } } : {}),
  };
}
