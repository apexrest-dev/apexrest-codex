import { randomUUID } from 'node:crypto';
export type ExitCode = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export interface Diagnostic {
  severity: 'error' | 'warning' | 'info';
  code: string;
  message: string;
  file?: string;
}
export interface Result {
  schemaVersion: 1;
  ok: boolean;
  operation: string;
  status: string;
  runId: string;
  summary: string;
  diagnostics: Diagnostic[];
  artifacts: string[];
  nextActions: string[];
  data?: unknown;
  exitCode: ExitCode;
}
export class Fault extends Error {
  constructor(
    public code: string,
    message: string,
    public exitCode: ExitCode = 1,
    public status = 'failed',
  ) {
    super(message);
  }
}
const safeArtifactPages = new WeakSet<object>();

// Only pages produced here may bypass subsequent recursive redaction. The full
// document is sanitized first and the page is frozen; arbitrary tool objects
// cannot opt out. Re-redacting a partial JSON/secret marker corrupts pagination.
export function artifactPage(
  content: string,
  format: 'text' | 'json',
  id: string,
  offset: number,
  limit: number,
) {
  const safe = format === 'json' ? JSON.stringify(sanitized(JSON.parse(content))) : redact(content);
  let count = Math.min(limit, Math.max(0, safe.length - offset));
  const create = () => ({
    id,
    offset,
    content: safe.slice(offset, offset + count),
    nextOffset: offset + count < safe.length ? offset + count : null,
    dataClassification: 'untrusted_operation_output',
  });
  let page = create();
  while (JSON.stringify(page).length > 24000 && count > 1) {
    count = Math.floor(count / 2);
    page = create();
  }
  Object.freeze(page);
  safeArtifactPages.add(page);
  return page;
}
export function redact(value: string): string {
  return value
    .replace(
      /("(?:password|passwd|pwd|token|secret|authorization|cookie|set-cookie|wallet_location)"\s*:\s*)"(?:[^"\\]|\\.)*"/gi,
      '$1"[REDACTED]"',
    )
    .replace(/(https?:\/\/)[^\s/@]+:[^\s/@]+@/gi, '$1[REDACTED]@')
    .replace(
      /((?:password|passwd|pwd|token|secret|authorization|cookie|set-cookie|wallet_location)\s*[:=]\s*)([^\r\n,}]+)/gi,
      '$1[REDACTED]',
    )
    .replace(/\bBearer\s+[\w.\-+/=]+/gi, 'Bearer [REDACTED]');
}
export function sanitized(value: unknown): unknown {
  if (value && typeof value === 'object' && safeArtifactPages.has(value)) return value;
  if (typeof value === 'string') return redact(value);
  if (Array.isArray(value)) return value.map(sanitized);
  if (value && typeof value === 'object')
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        /^(?:password|passwd|pwd|token|secret|authorization|cookie|set-cookie|wallet_location)$/i.test(key)
          ? '[REDACTED]'
          : sanitized(item),
      ]),
    );
  return value;
}
export function success(operation: string, data: unknown, summary = 'Operation completed.'): Result {
  return {
    schemaVersion: 1,
    ok: true,
    operation,
    status: 'succeeded',
    runId: randomUUID(),
    summary,
    diagnostics: [],
    artifacts: [],
    nextActions: [],
    data: sanitized(data),
    exitCode: 0,
  };
}
export function failure(operation: string, error: unknown): Result {
  const e =
    error instanceof Fault
      ? error
      : new Fault('INTERNAL_ERROR', error instanceof Error ? error.message : 'Unknown failure');
  return {
    schemaVersion: 1,
    ok: false,
    operation,
    status: e.status,
    runId: randomUUID(),
    summary: redact(e.message),
    diagnostics: [{ severity: 'error', code: e.code, message: redact(e.message) }],
    artifacts: [],
    nextActions: [],
    exitCode: e.exitCode,
  };
}
