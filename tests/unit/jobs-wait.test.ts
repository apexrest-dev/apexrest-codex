import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { rm } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';
import { fixture } from '../fixtures/project.ts';
import { exists, readJson, writeJson } from '../../packages/core/src/fs.ts';
import { JobService } from '../../packages/core/src/jobs.ts';

async function setup(t: import('node:test').TestContext, status = 'running') {
  const { ctx } = await fixture();
  t.after(() => rm(ctx.root, { recursive: true, force: true }));
  const id = randomUUID(),
    root = path.join(ctx.root, '.apexrest/jobs', id),
    file = path.join(root, 'state.json'),
    state = { id, status, operation: 'apex.validate', updatedAt: new Date().toISOString() };
  await writeJson(file, state);
  return { id, root, file, state, service: new JobService(ctx) };
}

test('job status keeps immediate reads as the default and validates wait bounds', async (t) => {
  const { id, state, service } = await setup(t, 'queued');
  assert.deepEqual(await service.status(id), state);
  assert.deepEqual(await service.status(id, 0), state);
  for (const invalid of [-1, 0.5, 30.01, NaN, Infinity])
    await assert.rejects(service.status(id, invalid), { code: 'INVALID_INPUT' });
});

test('job status waits through heartbeat changes and returns completion in the same call', async (t) => {
  const { id, file, state, service } = await setup(t, 'queued');
  const completed = {
    ...state,
    status: 'completed',
    result: { ok: true, status: 'succeeded', artifacts: ['validation.json'] },
  };
  const worker = (async () => {
    await delay(30);
    await writeJson(file, { ...state, status: 'running', updatedAt: new Date().toISOString() });
    await delay(300);
    await writeJson(file, completed);
  })();
  const waiting = service.status(id, 2);
  await worker;
  assert.deepEqual(await waiting, completed);
});

test('job status returns active state when the bounded wait expires without modifying the job', async (t) => {
  const { id, root, file, state, service } = await setup(t);
  const started = Date.now();
  assert.deepEqual(await service.status(id, 1), state);
  assert.ok(Date.now() - started >= 900);
  assert.deepEqual(await readJson(file), state);
  assert.equal(await exists(path.join(root, 'request.json')), false);
  assert.equal(await exists(path.join(root, 'cancel.json')), false);
});

test('aborting a status wait returns the state promptly without cancelling the job', async (t) => {
  const { id, root, file, state, service } = await setup(t);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30);
  t.after(() => clearTimeout(timeout));
  const started = Date.now();
  assert.deepEqual(await service.status(id, 30, controller.signal), state);
  assert.ok(Date.now() - started < 2000);
  assert.deepEqual(await service.status(id, 30, controller.signal), state);
  assert.deepEqual(await readJson(file), state);
  assert.equal(await exists(path.join(root, 'cancel.json')), false);
});

test('job status preserves unknown outcomes when a worker heartbeat has expired', async (t) => {
  const { id, file, state, service } = await setup(t);
  const stale = { ...state, updatedAt: new Date(0).toISOString() };
  await writeJson(file, stale);
  assert.deepEqual(await service.status(id, 30), {
    ...stale,
    status: 'outcome_unknown',
    nextAction: 'Worker heartbeat expired. Reconcile target before retrying.',
  });
  assert.deepEqual(await readJson(file), stale);
});

test('job status preserves failed results, cancellation and recorded unknown outcomes', async (t) => {
  const { id, file, state, service } = await setup(t);
  for (const status of ['failed', 'cancelled', 'cancellation_requested', 'outcome_unknown', 'completed']) {
    const terminal = {
      ...state,
      status,
      result: { ok: false, status: 'failed', diagnostics: [{ code: 'FIXTURE_FAILURE' }], exitCode: 6 },
    };
    await writeJson(file, terminal);
    assert.deepEqual(await service.status(id, 30), terminal);
  }
});
