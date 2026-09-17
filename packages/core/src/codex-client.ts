import { spawn, type ChildProcessWithoutNullStreams } from 'node:child_process';
import { Fault, redact } from './result.ts';
import { StringDecoder } from 'node:string_decoder';

export type RpcObject = Record<string, unknown>;
export interface CodexClient {
  call(method: string, params?: RpcObject): Promise<RpcObject>;
  close(): Promise<void>;
}

// App Server is a bidirectional JSON-RPC stream, not an MCP server. This client
// owns its process and never attaches to, resumes or steers an unrelated session.
export async function connectCodex(
  cwd: string,
  notify: (method: string, params: RpcObject) => void,
  toolCall: (params: RpcObject) => Promise<RpcObject> = async () => {
    throw new Error('No dynamic tools.');
  },
  executable = process.env.APEXREST_CODEX ?? 'codex',
): Promise<CodexClient> {
  const env: NodeJS.ProcessEnv = { ...process.env, APEXREST_TEAM_WORKER: '1' };
  delete env.NODE_OPTIONS;
  const child: ChildProcessWithoutNullStreams = spawn(executable, ['app-server', '--stdio'], {
    cwd,
    env,
    stdio: 'pipe',
    windowsHide: true,
    detached: process.platform !== 'win32',
  });
  const pending = new Map<
    number,
    {
      resolve: (value: RpcObject) => void;
      reject: (error: Error) => void;
      timer: NodeJS.Timeout;
    }
  >();
  let sequence = 0,
    buffer = '',
    closed = false;
  const decoder = new StringDecoder('utf8');
  const fail = (error: Error) => {
    for (const request of pending.values()) {
      clearTimeout(request.timer);
      request.reject(error);
    }
    pending.clear();
  };
  const send = (message: RpcObject) => child.stdin.write(JSON.stringify(message) + '\n');
  child.stderr.on('data', () => {});
  child.stdin.on('error', () => {});
  child.on('error', () =>
    fail(new Fault('CODEX_UNAVAILABLE', 'Cannot start Codex App Server.', 3, 'blocked')),
  );
  child.on('exit', () => {
    closed = true;
    fail(
      new Fault(
        'CODEX_DISCONNECTED',
        'Codex App Server disconnected; inspect team changes before retrying.',
        6,
        'outcome_unknown',
      ),
    );
    notify('apexrest/disconnected', {});
  });
  child.stdout.on('data', (chunk: Buffer) => {
    buffer += decoder.write(chunk);
    if (Buffer.byteLength(buffer) > 4 * 1024 * 1024) {
      fail(new Fault('OUTPUT_LIMIT', 'Codex protocol frame exceeded its limit.', 6, 'outcome_unknown'));
      child.kill();
      return;
    }
    for (;;) {
      const end = buffer.indexOf('\n');
      if (end < 0) break;
      const line = buffer.slice(0, end);
      buffer = buffer.slice(end + 1);
      let message: RpcObject;
      try {
        message = JSON.parse(line) as RpcObject;
      } catch {
        continue;
      }
      if (typeof message.method === 'string') {
        const params = (message.params ?? {}) as RpcObject;
        if (message.id !== undefined) {
          if (message.method === 'item/tool/call') {
            void toolCall(params).then(
              (result) => send({ jsonrpc: '2.0', id: message.id, result }),
              () =>
                send({
                  jsonrpc: '2.0',
                  id: message.id,
                  result: {
                    success: false,
                    contentItems: [{ type: 'inputText', text: 'Team tool request rejected.' }],
                  },
                }),
            );
            continue;
          }
          // Never auto-approve a command, permission, credential refresh or tool
          // request on behalf of the user. Unsupported requests fail explicitly.
          send({
            jsonrpc: '2.0',
            id: message.id,
            error: {
              code: -32601,
              message: 'This background client cannot grant approvals or supply interactive input.',
            },
          });
          notify('apexrest/inputRequired', { method: message.method });
        } else notify(message.method, params);
      } else if (typeof message.id === 'number') {
        const waiter = pending.get(message.id);
        if (!waiter) continue;
        pending.delete(message.id);
        clearTimeout(waiter.timer);
        if (message.error)
          waiter.reject(
            new Fault(
              'CODEX_RPC_FAILED',
              `Codex rejected the requested team operation: ${redact(String((message.error as RpcObject).message ?? 'unknown error')).slice(0, 1000)}`,
              3,
              'blocked',
            ),
          );
        else waiter.resolve((message.result ?? {}) as RpcObject);
      }
    }
  });
  const client: CodexClient = {
    async call(method, params = {}) {
      if (closed) throw new Fault('CODEX_DISCONNECTED', 'Codex App Server is closed.', 6, 'outcome_unknown');
      return new Promise<RpcObject>((resolve, reject) => {
        const id = ++sequence;
        const timer = setTimeout(() => {
          pending.delete(id);
          reject(
            new Fault(
              'CODEX_RPC_TIMEOUT',
              'Codex did not acknowledge the request; it was not retried.',
              6,
              'outcome_unknown',
            ),
          );
        }, 30000);
        pending.set(id, { resolve, reject, timer });
        send({ jsonrpc: '2.0', id, method, params });
      });
    },
    async close() {
      closed = true;
      fail(new Fault('CANCELLED', 'Team connection closed.', 6, 'cancelled'));
      child.stdin.end();
      const kill = (signal: NodeJS.Signals) => {
        try {
          if (process.platform !== 'win32' && child.pid) process.kill(-child.pid, signal);
          else child.kill(signal);
        } catch {
          /* already exited */
        }
      };
      kill('SIGTERM');
      if (child.exitCode === null)
        await new Promise<void>((resolve) => {
          const timer = setTimeout(() => {
            kill('SIGKILL');
            resolve();
          }, 1500);
          child.once('exit', () => {
            clearTimeout(timer);
            resolve();
          });
        });
    },
  };
  try {
    await client.call('initialize', {
      clientInfo: { name: 'apexrest-team', version: '1.0.0' },
      capabilities: { experimentalApi: true },
    });
    send({ jsonrpc: '2.0', method: 'initialized', params: {} });
    return client;
  } catch (error) {
    await client.close();
    throw error;
  }
}
