import test from 'node:test';
import assert from 'node:assert/strict';
import { OracleAdapter, type Runner } from '../../packages/core/src/oracle.ts';
import { schemas } from '../../packages/core/src/operations.ts';
import type { ProcessRequest, ProcessResult } from '../../packages/core/src/process.ts';

const result = (stdout: string, changes: Partial<ProcessResult> = {}): ProcessResult => ({
  stdout,
  stderr: '',
  code: 0,
  cancelled: false,
  timedOut: false,
  truncated: false,
  ...changes,
});
function adapter(runner: Runner) {
  const oracle = new OracleAdapter(runner);
  oracle.settings = async () => ({ executable: '/fixture/sql', javaHome: '/fixture/java' });
  oracle.stage = async () => '/tmp';
  return oracle;
}
function listOutput(request: ProcessRequest, names: string) {
  const marker = request.input!.match(/prompt (APEXREST_CONNECTIONS_\w+)_BEGIN/)![1];
  return `SQLcl startup notice\n${marker}_BEGIN\n${names}\n${marker}_END\n`;
}
test('SQLcl saved list reads names without login, connection exports or credential inspection', async () => {
  const controller = new AbortController();
  const oracle = adapter(async (request) => {
    assert.deepEqual(request.args, ['-S', '-L', '/nolog']);
    assert.match(request.input!, /connmgr list -flat/);
    assert.doesNotMatch(request.input!, /connmgr (show|export|import)|connect -save/);
    assert.equal(request.signal, controller.signal);
    return result(listOutput(request, 'Dev / Київ\nproduction\nDev / Київ'));
  });
  assert.deepEqual(await oracle.savedConnections(controller.signal), {
    source: 'sqlcl-store',
    connections: [{ name: 'Dev / Київ' }, { name: 'production' }],
  });
  assert.deepEqual(await adapter(async (request) => result(listOutput(request, ''))).savedConnections(), {
    source: 'sqlcl-store',
    connections: [],
  });
});
test('SQLcl list errors and incomplete output are never reported as an empty store', async () => {
  await assert.rejects(adapter(async () => result('')).savedConnections(), {
    code: 'CONNECTION_LIST_UNCONFIRMED',
  });
  await assert.rejects(adapter(async () => result('Unknown command: connmgr')).savedConnections(), {
    code: 'ORACLE_COMMAND_FAILED',
  });
  await assert.rejects(adapter(async () => result('', { timedOut: true })).savedConnections(), {
    code: 'TIMEOUT',
  });
  await assert.rejects(adapter(async () => result('', { cancelled: true })).savedConnections(), {
    code: 'CANCELLED',
  });
});
test('saved connection tests pass a single exact name argument and execute only the identity query', async () => {
  const name = 'Dev / Київ $(touch unsafe)';
  const controller = new AbortController();
  const identity = { db_unique_name: 'FIXTURE', service_name: 'SERVICE', parsing_schema: 'APP' };
  const oracle = adapter(async (request) => {
    assert.deepEqual(request.args, ['-S', '-L', '-name', name]);
    assert.equal(request.signal, controller.signal);
    assert.ok(!request.input!.includes(name));
    assert.match(request.input!, /select sys_context/);
    assert.doesNotMatch(request.input!, /\b(?:insert|update|delete|create|drop|alter)\b/i);
    return result(JSON.stringify({ results: [{ items: [identity] }] }));
  });
  assert.deepEqual(await oracle.identity({ kind: 'sqlcl-store', name }, controller.signal), identity);
  assert.equal(schemas['connection.test'].parse({ name, saved: true }).saved, true);
  assert.equal(
    schemas['connection.list'].parse({}).saved,
    false,
    'Existing reference-list CLI default is preserved',
  );
  assert.equal(schemas['connection.test'].safeParse({ name: 'a\nexit', saved: true }).success, false);
  await assert.rejects(
    adapter(async () => result('ORA-01017: invalid credentials')).identity({ kind: 'sqlcl-store', name }),
    { code: 'AUTHENTICATION_FAILED' },
  );
});
