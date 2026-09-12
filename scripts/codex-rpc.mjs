import { spawn } from 'node:child_process';
import { createInterface } from 'node:readline';
export async function codexRpc({ home, cwd, env = globalThis.process.env }) {
  const process = spawn('codex', ['app-server', '--stdio'], {
    cwd,
    env: { ...env, CODEX_HOME: home },
    stdio: ['pipe', 'pipe', 'pipe'],
  });
  let id = 0,
    stderr = '';
  const pending = new Map();
  const events = [];
  process.stderr.on('data', (d) => {
    stderr = (stderr + d.toString()).slice(-12000);
  });
  createInterface({ input: process.stdout }).on('line', (line) => {
    let message;
    try {
      message = JSON.parse(line);
    } catch {
      return;
    }
    if ('id' in message && pending.has(message.id)) {
      const waiter = pending.get(message.id);
      pending.delete(message.id);
      clearTimeout(waiter.timer);
      if (message.error) waiter.reject(new Error(JSON.stringify(message.error)));
      else waiter.resolve(message.result);
    } else events.push(message);
  });
  const call = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const requestId = ++id;
      const timer = setTimeout(() => {
        pending.delete(requestId);
        reject(new Error(`Codex RPC timeout: ${method}\n${stderr.slice(-2000)}`));
      }, 45000);
      pending.set(requestId, { resolve, reject, timer });
      process.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: requestId, method, params }) + '\n');
    });
  await call('initialize', {
    clientInfo: { name: 'apexrest-native-smoke', version: '0.1.0' },
    capabilities: { experimentalApi: true },
  });
  process.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'initialized', params: {} }) + '\n');
  return {
    call,
    events,
    close() {
      process.stdin.end();
      process.kill();
      for (const p of pending.values()) {
        clearTimeout(p.timer);
        p.reject(new Error('RPC closed'));
      }
      pending.clear();
    },
    stderr: () => stderr,
  };
}
