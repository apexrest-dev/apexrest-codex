import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { setTimeout as delay } from 'node:timers/promises';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import type { ProcessRequest, ProcessResult } from './process.ts';
import { Fault, redact } from './result.ts';

export interface SqlclMcpRequest extends ProcessRequest {
  connectionName?: string;
  mutation: boolean;
}

// Each adapter session owns one official SQLcl server. Never share connections
// across projects, retry a submitted command, or silently switch to the CLI.
export async function runSqlclMcp(request: SqlclMcpRequest): Promise<ProcessResult> {
  const client = new Client({ name: 'apexrest-sqlcl', version: '1.0.0' });
  const transport = new StdioClientTransport({
    command: request.executable,
    args: request.args,
    cwd: request.cwd,
    env: Object.fromEntries(
      Object.entries(request.env ?? process.env).filter(
        (entry): entry is [string, string] => entry[1] !== undefined,
      ),
    ),
    stderr: 'pipe',
    maxBufferSize: 2 * 1024 * 1024,
  });
  // Drain startup logs without exposing connection details or accumulating them.
  transport.stderr?.on('data', () => {});
  const deadline = Date.now() + (request.timeoutMs ?? 180000);
  let submitted = false;
  const options = () => {
    if (request.signal?.aborted) throw new Error('SQLcl MCP cancelled.');
    const timeout = deadline - Date.now();
    if (timeout <= 0) throw new Error('SQLcl MCP timed out.');
    return { timeout, ...(request.signal ? { signal: request.signal } : {}) };
  };
  const text = (result: CallToolResult) => {
    const output = result.content
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n');
    if (Buffer.byteLength(output) > (request.maxBytes ?? 1024 * 1024))
      throw new Fault(
        'OUTPUT_LIMIT',
        'SQLcl MCP output exceeded the session limit.',
        6,
        submitted && request.mutation ? 'outcome_unknown' : 'failed',
      );
    return redact(output);
  };
  const call = async (name: string, args: Record<string, unknown>) => {
    const result = (await client.callTool({ name, arguments: args }, undefined, options())) as CallToolResult;
    text(result);
    return result;
  };
  const resultOf = async (initial: CallToolResult, canPoll: boolean) => {
    let result = initial;
    const id = result.structuredContent?.tool_request_id;
    if (typeof id !== 'string' || result.isError) return result;
    if (!canPoll) throw new Error('SQLcl returned a background request without request_status support.');
    for (;;) {
      options();
      await delay(250, undefined, request.signal ? { signal: request.signal } : {});
      const status = await call('request_status', { tool_request_id: id });
      if (status.isError) throw new Error('SQLcl could not confirm background execution status.');
      const data = status.structuredContent;
      // SQLcl 26.1 returns a plain status while running, then plain command
      // output. The adapter still requires its unique completion marker.
      if (!data) {
        if (text(status).trim() === 'RUNNING') continue;
        return status;
      }
      if (data?.status === 'RUNNING') continue;
      if (data?.status === 'FINISHED' || data?.status === 'FAILED') {
        const payload = data.result as CallToolResult | undefined;
        if (!payload || !Array.isArray(payload.content))
          throw new Error('SQLcl returned an unrecognized background result.');
        result = { ...payload, isError: data.status === 'FAILED' || payload.isError === true };
        text(result);
        return result;
      }
      throw new Error('SQLcl returned an unrecognized background status.');
    }
  };
  try {
    await client.connect(transport, options());
    const tools = (await client.listTools({}, options())).tools;
    const run = tools.find((tool) => ['sqlcl_run', 'run-sqlcl', 'run_sqlcl'].includes(tool.name));
    if (!run || !run.inputSchema.properties?.sqlcl)
      throw new Fault(
        'UNSUPPORTED_CAPABILITY',
        'SQLcl MCP does not advertise a supported SQLcl command tool.',
        3,
        'blocked',
      );
    if (request.connectionName) {
      if (!tools.some((tool) => tool.name === 'connect' && tool.inputSchema.properties?.connection_name))
        throw new Fault(
          'UNSUPPORTED_CAPABILITY',
          'SQLcl MCP does not advertise named connections.',
          3,
          'blocked',
        );
      const connected = await call('connect', { connection_name: request.connectionName });
      if (connected.isError)
        return {
          code: 1,
          stdout: text(connected),
          stderr: '',
          timedOut: false,
          cancelled: false,
          truncated: false,
        };
    }
    const args: Record<string, unknown> = { sqlcl: request.input ?? '' };
    if (run.inputSchema.properties?.execution_type) args.execution_type = 'SYNCHRONOUS';
    options();
    submitted = true;
    const result = await resultOf(
      await call(run.name, args),
      tools.some((tool) => tool.name === 'request_status'),
    );
    return {
      code: result.isError ? 1 : 0,
      stdout: text(result),
      stderr: '',
      timedOut: false,
      cancelled: false,
      truncated: false,
    };
  } catch (error) {
    if (error instanceof Fault) throw error;
    const uncertain = submitted && request.mutation;
    throw new Fault(
      uncertain ? 'SQLCL_MCP_OUTCOME_UNKNOWN' : request.signal?.aborted ? 'CANCELLED' : 'SQLCL_MCP_FAILED',
      uncertain
        ? 'SQLcl MCP did not confirm the submitted write. Reconcile the target before retrying.'
        : `SQLcl MCP failed: ${redact(error instanceof Error ? error.message : String(error))}`,
      uncertain || request.signal?.aborted ? 6 : 3,
      uncertain ? 'outcome_unknown' : request.signal?.aborted ? 'cancelled' : 'blocked',
    );
  } finally {
    await client.close().catch(() => {});
  }
}
