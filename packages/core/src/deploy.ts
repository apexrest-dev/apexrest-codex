import path from 'node:path';
import { readFile, mkdir, cp, open } from 'node:fs/promises';
import { randomUUID, verify } from 'node:crypto';
import { z } from 'zod';
import { canonical, contained, exists, hash, inventory, readJson, writeJson, withLock } from './fs.ts';
import { environment, managedHome, parse, policy, requireTrust, refName } from './config.ts';
import type { ProjectContext, Environment } from './config.ts';
import { resolveConnection } from './connections.ts';
import type { Connection } from './connections.ts';
import { Fault } from './result.ts';
import { OracleAdapter, sqlLiteral, sqlclToken } from './oracle.ts';
import { LocalDeploymentControl, coordination } from './deployment-control.ts';
const digestSchema = z.string().regex(/^[a-f0-9]{64}$/);
const filesSchema = z.record(z.string(), digestSchema);
export const deployPlanSchema = z.strictObject({
  schemaVersion: z.literal(1),
  id: z.uuid(),
  projectId: refName,
  projectRoot: z.string(),
  environment: refName,
  createdAt: z.iso.datetime(),
  expiresAt: z.iso.datetime(),
  sourceDigest: digestSchema,
  sources: filesSchema,
  configurationDigest: digestSchema,
  toolchainDigest: digestSchema,
  compiler: z.string(),
  targetDigest: digestSchema,
  target: z.record(z.string(), z.unknown()),
  fingerprint: digestSchema,
  migrationHistory: z.array(z.record(z.string(), z.unknown())),
  coordination: z.strictObject({
    backend: z.enum(['local', 'database']),
    scope: z.enum(['managed-home-schema', 'database-application']),
    storeDigest: digestSchema,
  }),
  scope: z.literal('full-application-import'),
  operations: z.array(
    z.strictObject({
      kind: z.enum(['migration', 'package', 'import', 'verify', 'test']),
      file: z.string().optional(),
      sha256: digestSchema.optional(),
    }),
  ),
  risks: z.array(z.string()),
  approval: z.literal('external-policy-required'),
  backupRequired: z.boolean(),
  digest: digestSchema,
  restore: z.strictObject({ backupId: z.uuid(), checksum: digestSchema }).optional(),
});
export type DeployPlan = z.infer<typeof deployPlanSchema>;
export type DeployState =
  | 'planned'
  | 'approved'
  | 'backing_up'
  | 'migrating'
  | 'importing'
  | 'verifying'
  | 'testing'
  | 'succeeded'
  | 'failed'
  | 'outcome_unknown';
const next: Record<DeployState, DeployState[]> = {
  planned: ['approved'],
  approved: ['backing_up'],
  backing_up: ['migrating'],
  migrating: ['importing'],
  importing: ['verifying'],
  verifying: ['testing'],
  testing: ['succeeded'],
  succeeded: [],
  failed: [],
  outcome_unknown: [],
};
export function assertTransition(from: DeployState, to: DeployState) {
  if (!next[from].includes(to) && !['failed', 'outcome_unknown'].includes(to))
    throw new Fault('INVALID_DEPLOY_STATE', `Invalid transition ${from} to ${to}.`, 5);
}
export function planDigest(value: Omit<DeployPlan, 'digest'> | DeployPlan) {
  const { digest: _digest, ...unsigned } = value as DeployPlan;
  return hash(canonical(unsigned));
}
export function targetDigest(env: Environment) {
  return hash(
    canonical({
      ...env.databaseIdentity,
      workspace: env.workspace,
      schema: env.parsingSchema,
      applicationId: env.applicationId,
    }),
  );
}
export function migrationRisk(sql: string): string[] {
  const risks: string[] = [];
  if (/\b(?:drop|truncate|delete|revoke|grant)\b|\balter\s+(?:table|user|system|database)\b/i.test(sql))
    risks.push('destructive-or-privileged-sql');
  if (/^\s*(?:host|!|connect|conn|start|@|@@|exit|quit|script|javascript)\b/im.test(sql))
    risks.push('sqlcl-script-control');
  return risks;
}
export async function authorizePlan(ctx: ProjectContext, plan: DeployPlan, env: Environment) {
  await requireTrust(ctx.root);
  if (plan.risks.some((r) => r !== 'application-restore'))
    throw new Fault(
      'RECOVERY_REVIEW_REQUIRED',
      'Destructive, authentication or unsupported changes need an explicit recovery implementation and reviewed external workflow.',
      4,
      'blocked',
    );
  if (env.kind === 'production') {
    if (
      process.env.CI !== 'true' ||
      !process.env.APEXREST_APPROVAL_PUBLIC_KEY_FILE ||
      !process.env.APEXREST_APPROVAL_FILE
    )
      throw new Fault(
        'PRODUCTION_CI_REQUIRED',
        'Production requires a protected CI runner and externally signed approval bound to this plan.',
        4,
        'blocked',
      );
    const attestation = parse(
      z.strictObject({
        planDigest: digestSchema,
        targetDigest: digestSchema,
        expiresAt: z.iso.datetime(),
        reviewer: z.string().min(1),
        signature: z.string().min(1),
      }),
      await readJson(process.env.APEXREST_APPROVAL_FILE),
    );
    const { signature, ...payload } = attestation;
    if (
      payload.planDigest !== plan.digest ||
      payload.targetDigest !== plan.targetDigest ||
      Date.parse(payload.expiresAt) <= Date.now() ||
      !verify(
        null,
        Buffer.from(canonical(payload)),
        await readFile(process.env.APEXREST_APPROVAL_PUBLIC_KEY_FILE),
        Buffer.from(signature, 'base64'),
      )
    )
      throw new Fault(
        'APPROVAL_INVALID',
        'External approval is invalid, expired or for another plan/target.',
        4,
      );
    return;
  }
  const grants = (await policy()).grants;
  if (
    !grants.some(
      (g) =>
        g.projectRoot === ctx.root &&
        g.targetDigest === plan.targetDigest &&
        g.operations.includes('deploy') &&
        Date.parse(g.expiresAt) > Date.now() &&
        (plan.restore ? g.planDigest === plan.digest : !g.planDigest || g.planDigest === plan.digest),
    )
  )
    throw new Fault(
      'DEPLOY_APPROVAL_REQUIRED',
      'A user-owned development grant for this project and target is required.',
      4,
      'blocked',
    );
}
export async function sourceInventory(ctx: ProjectContext) {
  const files: Record<string, string> = {};
  for (const relative of [
    ctx.config.application.sourceDir,
    ctx.config.database.migrationsDir,
    ctx.config.database.packagesDir,
    ctx.config.database.testsDir,
    ctx.config.tests.unitDir,
    ctx.config.tests.apiDir,
    ctx.config.tests.e2eDir,
  ]) {
    const dir = await contained(ctx.root, relative);
    if (await exists(dir))
      for (const [file, sha] of Object.entries(await inventory(dir))) files[relative + '/' + file] = sha;
  }
  for (const relative of [
    'package.json',
    'package-lock.json',
    'playwright.config.ts',
    'playwright.config.mjs',
  ])
    if (await exists(path.join(ctx.root, relative)))
      files[relative] = hash(await readFile(await contained(ctx.root, relative)));
  return Object.fromEntries(Object.entries(files).sort());
}
export class DeploymentService {
  constructor(
    private oracle = new OracleAdapter(),
    private runTests?: (ctx: ProjectContext, env: string) => Promise<{ ok: boolean; data: unknown }>,
  ) {}
  async history(env: Environment, connection: Connection) {
    if (coordination(env).backend === 'local') return new LocalDeploymentControl(env).history();
    return this.oracle.jsonQuery(
      'select version,checksum,status,run_id from apexrest_migrations order by version',
      connection,
    );
  }
  async fingerprint(env: Environment, connection: Connection) {
    const target = await this.oracle.verifyTarget(env, connection);
    const history = await this.history(env, connection);
    const exported = target.application
      ? await this.oracle.exportApplication(env, connection, 'APEXLANG')
      : null;
    return {
      target,
      history,
      exported,
      fingerprint: hash(canonical({ target, history, exportDigest: exported?.digest ?? null })),
    };
  }
  async plan(ctx: ProjectContext, name: string): Promise<DeployPlan> {
    await requireTrust(ctx.root);
    const env = environment(ctx, name),
      connection = await resolveConnection(env.readConnectionRef);
    // Target reads and compilation use independent inputs. Settle both before
    // returning an error so a failed preflight leaves no Oracle work running.
    const [targetCheck, sourceCheck] = await Promise.allSettled([
      this.fingerprint(env, connection),
      (async () => {
        const sources = await sourceInventory(ctx);
        const validation = await this.oracle.validate(
          await contained(ctx.root, ctx.config.application.sourceDir),
        );
        const lock = await contained(ctx.root, ctx.config.toolchain.lockFile);
        if (!(await exists(lock)))
          throw new Fault('TOOLCHAIN_LOCK_REQUIRED', 'The project needs its pinned toolchain lock.', 3);
        return { sources, validation, lock };
      })(),
    ]);
    if (targetCheck.status === 'rejected') throw targetCheck.reason;
    if (sourceCheck.status === 'rejected') throw sourceCheck.reason;
    const current = targetCheck.value,
      { sources, validation, lock } = sourceCheck.value,
      risks: string[] = [];
    const operations: DeployPlan['operations'] = [];
    const history = new Map(current.history.map((row) => [String(row.version), row]));
    if (current.history.some((row) => row.status !== 'succeeded'))
      throw new Fault(
        'MIGRATION_HISTORY_CONFLICT',
        'An earlier migration has an unresolved outcome. Reconcile it before any new deployment.',
        5,
      );
    for (const [file, sha256] of Object.entries(sources)) {
      const migration = file.startsWith(ctx.config.database.migrationsDir + '/');
      const pkg = file.startsWith(ctx.config.database.packagesDir + '/');
      if (!migration && !pkg) continue;
      if (!file.endsWith('.sql'))
        throw new Fault('UNSUPPORTED_DB_SOURCE', 'Database execution directories accept .sql files only.', 3);
      const sql = await readFile(await contained(ctx.root, file), 'utf8');
      risks.push(...migrationRisk(sql).map((r) => `${r}:${file}`));
      if (migration) {
        const version = path.basename(file);
        if (!/^\d{4,}__[A-Za-z0-9_-]+\.sql$/.test(version))
          throw new Fault(
            'INVALID_MIGRATION_NAME',
            'Use ordered immutable migration names such as 0001__customers.sql.',
            2,
          );
        const previous = history.get(version);
        if (previous && (previous.checksum !== sha256 || previous.status !== 'succeeded'))
          throw new Fault(
            'MIGRATION_HISTORY_CONFLICT',
            'An existing migration changed checksum or has an unresolved outcome.',
            5,
          );
        if (!previous) operations.push({ kind: 'migration', file, sha256 });
      } else operations.push({ kind: 'package', file, sha256 });
    }
    if (current.exported) {
      const prefix = ctx.config.application.sourceDir + '/';
      for (const [file, sha] of Object.entries(current.exported.files))
        if (/authenticat|authoriz/i.test(file) && sources[prefix + file] !== sha)
          risks.push('authentication-or-authorization-change');
    }
    operations.sort(
      (a, b) =>
        (a.kind === 'migration' ? 0 : 1) - (b.kind === 'migration' ? 0 : 1) ||
        (a.file ?? '').localeCompare(b.file ?? ''),
    );
    operations.push({ kind: 'import' }, { kind: 'verify' }, { kind: 'test' });
    const plan: DeployPlan = {
      schemaVersion: 1,
      id: randomUUID(),
      projectId: ctx.config.projectId,
      projectRoot: ctx.root,
      environment: name,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 30 * 60000).toISOString(),
      sourceDigest: hash(canonical(sources)),
      sources,
      configurationDigest: hash(canonical(ctx.config)),
      toolchainDigest: hash(await readFile(lock)),
      compiler: validation.compiler.version,
      targetDigest: targetDigest(env),
      target: current.target,
      fingerprint: current.fingerprint,
      migrationHistory: current.history,
      coordination: coordination(env),
      scope: 'full-application-import',
      operations,
      risks: [...new Set(risks)],
      approval: 'external-policy-required',
      backupRequired: !!current.target.application,
      digest: '0'.repeat(64),
    };
    plan.digest = planDigest(plan);
    return plan;
  }
  async checkLocal(ctx: ProjectContext, value: unknown) {
    const plan = parse(deployPlanSchema, value),
      env = environment(ctx, plan.environment);
    if (plan.sourceDigest !== hash(canonical(plan.sources)) || plan.digest !== planDigest(plan))
      throw new Fault('PLAN_TAMPERED', 'Plan digest verification failed.', 5);
    if (
      plan.projectId !== ctx.config.projectId ||
      plan.projectRoot !== ctx.root ||
      plan.targetDigest !== targetDigest(env)
    )
      throw new Fault('PLAN_TARGET_MISMATCH', 'Plan project or target differs from the current request.', 5);
    if (Date.parse(plan.expiresAt) <= Date.now())
      throw new Fault('PLAN_EXPIRED', 'Create and review a new plan.', 5);
    if (
      plan.sourceDigest !== hash(canonical(await sourceInventory(ctx))) ||
      plan.configurationDigest !== hash(canonical(ctx.config)) ||
      plan.toolchainDigest !== hash(await readFile(await contained(ctx.root, ctx.config.toolchain.lockFile)))
    )
      throw new Fault('SOURCE_DRIFT', 'Sources, configuration or toolchain lock changed after review.', 5);
    if (plan.backupRequired !== Boolean(plan.target.application))
      throw new Fault('PLAN_TAMPERED', 'Backup requirement does not match reviewed target.', 5);
    if (canonical(plan.coordination) !== canonical(coordination(env)))
      throw new Fault(
        'CONTROL_STORE_CHANGED',
        'Deployment control mode or local history store changed. Re-plan using the original durable state.',
        5,
      );
    const expected: DeployPlan['operations'] = [];
    if (!plan.restore) {
      const history = new Map(plan.migrationHistory.map((row) => [String(row.version), row]));
      for (const [file, sha256] of Object.entries(plan.sources)) {
        const kind = file.startsWith(ctx.config.database.migrationsDir + '/')
          ? 'migration'
          : file.startsWith(ctx.config.database.packagesDir + '/')
            ? 'package'
            : undefined;
        if (!kind) continue;
        if (!file.endsWith('.sql'))
          throw new Fault('UNSUPPORTED_DB_SOURCE', 'Database sources must be SQL files.', 5);
        const previous = history.get(path.basename(file));
        if (
          kind === 'migration' &&
          previous &&
          (previous.checksum !== sha256 || previous.status !== 'succeeded')
        )
          throw new Fault('MIGRATION_HISTORY_CONFLICT', 'Migration requires reconciliation.', 5);
        if (kind !== 'migration' || !previous) expected.push({ kind, file, sha256 });
        const risks = migrationRisk(await readFile(await contained(ctx.root, file), 'utf8')).map(
          (r) => `${r}:${file}`,
        );
        if (risks.some((r) => !plan.risks.includes(r)))
          throw new Fault('PLAN_TAMPERED', 'Plan omits a SQL risk.', 5);
      }
      expected.sort(
        (a, b) =>
          (a.kind === 'migration' ? 0 : 1) - (b.kind === 'migration' ? 0 : 1) ||
          (a.file ?? '').localeCompare(b.file ?? ''),
      );
    }
    expected.push({ kind: 'import' }, { kind: 'verify' }, { kind: 'test' });
    if (canonical(expected) !== canonical(plan.operations))
      throw new Fault(
        'PLAN_TAMPERED',
        'Plan operations do not match reviewed sources and migration history.',
        5,
      );
    return { plan, env };
  }
  async lease(env: Environment, connection: Connection, runId: string, acquire: boolean) {
    if (coordination(env).backend === 'local') {
      const control = new LocalDeploymentControl(env);
      if (acquire) await control.acquire(runId);
      else await control.assertOwner(runId);
      return;
    }
    const key = sqlLiteral(targetDigest(env)),
      owner = sqlLiteral(runId);
    if (acquire)
      await this.oracle.session(
        `begin\n update apexrest_deploy_locks set owner_id=${owner}, lease_until=systimestamp+interval '90' second where target_key=${key} and lease_until<systimestamp and phase='preparing';\n if sql%rowcount=0 then\n  begin insert into apexrest_deploy_locks(target_key,owner_id,lease_until) values(${key},${owner},systimestamp+interval '90' second);\n  exception when dup_val_on_index then raise_application_error(-20001,'APEXREST_TARGET_LOCKED'); end;\n end if;\n commit;\nend;\n/`,
        connection,
        true,
      );
    else
      await this.oracle.session(
        `begin\n update apexrest_deploy_locks set lease_until=systimestamp+interval '90' second where target_key=${key} and owner_id=${owner} and lease_until>systimestamp;\n if sql%rowcount<>1 then raise_application_error(-20002,'APEXREST_LEASE_LOST'); end if;\n commit;\nend;\n/`,
        connection,
        true,
      );
  }
  async apply(ctx: ProjectContext, value: unknown, signal?: AbortSignal) {
    if (signal?.aborted)
      throw new Fault('CANCELLED', 'Deployment cancelled before execution.', 6, 'cancelled');
    const { plan, env } = await this.checkLocal(ctx, value);
    await authorizePlan(ctx, plan, env);
    const readConnection = await resolveConnection(env.readConnectionRef),
      deployConnection = await resolveConnection(env.deployConnectionRef);
    const [deployTargetCheck, fingerprintCheck, capabilityCheck] = await Promise.allSettled([
      this.oracle.verifyTarget(env, deployConnection),
      this.fingerprint(env, readConnection),
      this.oracle.requireCapability('import'),
    ]);
    if (deployTargetCheck.status === 'rejected') throw deployTargetCheck.reason;
    if (fingerprintCheck.status === 'rejected') throw fingerprintCheck.reason;
    if (fingerprintCheck.value.fingerprint !== plan.fingerprint)
      throw new Fault('TARGET_DRIFT', 'Target or migration history changed after review.', 5);
    if (capabilityCheck.status === 'rejected') throw capabilityCheck.reason;
    const capability = capabilityCheck.value;
    if (capability.version !== plan.compiler)
      throw new Fault('COMPILER_DRIFT', 'SQLcl version changed after plan.', 5);
    if (signal?.aborted)
      throw new Fault('CANCELLED', 'Deployment cancelled before lease acquisition.', 6, 'cancelled');
    const runId = randomUUID(),
      runs = path.join(ctx.root, '.apexrest/deployments'),
      runDir = path.join(runs, runId);
    await mkdir(runDir, { recursive: true, mode: 0o700 });
    let state: DeployState = 'planned',
      writeStarted = false;
    const controller = new AbortController();
    const abort = () => controller.abort();
    signal?.addEventListener('abort', abort, { once: true });
    if (signal?.aborted) abort();
    const record = async (nextState: DeployState, details: unknown = {}) => {
      assertTransition(state, nextState);
      state = nextState;
      const event = {
        runId,
        planId: plan.id,
        planDigest: plan.digest,
        targetDigest: plan.targetDigest,
        state,
        at: new Date().toISOString(),
        details,
      };
      const journal = await open(path.join(runDir, 'journal.jsonl'), 'a', 0o600);
      try {
        await journal.writeFile(JSON.stringify(event) + '\n');
        await journal.sync();
      } finally {
        await journal.close();
      }
      await writeJson(path.join(runDir, 'state.json'), event);
    };
    await writeJson(path.join(runDir, 'plan.json'), plan);
    await record('approved');
    await this.lease(env, deployConnection, runId, true);
    let renewing = false,
      leaseLost = false;
    const heartbeat =
      coordination(env).backend === 'database'
        ? setInterval(() => {
            if (renewing) return;
            renewing = true;
            void this.lease(env, deployConnection, runId, false)
              .catch(() => {
                leaseLost = true;
                controller.abort();
              })
              .finally(() => {
                renewing = false;
              });
          }, 20000)
        : undefined;
    heartbeat?.unref();
    try {
      await record('backing_up');
      if (plan.backupRequired) {
        const backup = await this.oracle.exportApplication(env, readConnection, 'SQL');
        const backupId = randomUUID(),
          directory = path.join(ctx.root, '.apexrest/backups', backupId);
        await mkdir(directory, { recursive: true, mode: 0o700 });
        await cp(backup.directory, path.join(directory, 'application'), { recursive: true });
        const files = await inventory(path.join(directory, 'application'));
        if (!Object.keys(files).length || hash(canonical(files)) !== backup.digest)
          throw new Fault('BACKUP_INVALID', 'Backup copy failed checksum verification.', 1);
        await writeJson(path.join(directory, 'backup.json'), {
          schemaVersion: 1,
          backupId,
          targetDigest: plan.targetDigest,
          environment: plan.environment,
          digest: backup.digest,
          files,
          restoreProcedure:
            'Reviewed SQL export import; application metadata only. Schema/data recovery is separate.',
        });
      }
      await this.checkLocal(ctx, plan);
      if ((await this.fingerprint(env, readConnection)).fingerprint !== plan.fingerprint)
        throw new Fault('TARGET_DRIFT', 'Target changed during backup.', 5);
      // Execute a frozen copy. A later working-tree edit cannot alter reviewed bytes.
      const snapshot = path.join(runDir, 'snapshot');
      await mkdir(snapshot);
      for (const [file, sha] of Object.entries(plan.sources)) {
        const source = await contained(ctx.root, file),
          destination = await contained(snapshot, file);
        await mkdir(path.dirname(destination), { recursive: true });
        await cp(source, destination);
        if (hash(await readFile(destination)) !== sha)
          throw new Fault('SOURCE_DRIFT', 'Source changed while freezing deployment.', 5);
      }
      if (controller.signal.aborted)
        throw new Fault('CANCELLED', 'Deployment cancelled before writes.', 6, 'cancelled');
      await record('migrating');
      // Once writes begin an expired lease is never automatically stolen. A DBA must reconcile it.
      if (coordination(env).backend === 'local') await new LocalDeploymentControl(env).markWriting(runId);
      else
        await this.oracle.session(
          `update apexrest_deploy_locks set phase='writing' where target_key=${sqlLiteral(plan.targetDigest)} and owner_id=${sqlLiteral(runId)};\ncommit;`,
          deployConnection,
          true,
        );
      for (const operation of plan.operations.filter((o) => ['migration', 'package'].includes(o.kind))) {
        if (leaseLost || controller.signal.aborted)
          throw new Fault(
            'LEASE_OR_CANCELLATION',
            'Execution was interrupted.',
            6,
            writeStarted ? 'outcome_unknown' : 'cancelled',
          );
        await this.lease(env, deployConnection, runId, false);
        const file = await contained(snapshot, operation.file!);
        const version = sqlLiteral(path.basename(file));
        if (operation.kind === 'migration') {
          if (coordination(env).backend === 'local')
            await new LocalDeploymentControl(env).migration(
              runId,
              path.basename(file),
              operation.sha256!,
              'started',
            );
          else
            await this.oracle.session(
              `insert into apexrest_migrations(version,checksum,status,run_id) values(${version},${sqlLiteral(operation.sha256!)},'started',${sqlLiteral(runId)});\ncommit;`,
              deployConnection,
              true,
            );
        }
        writeStarted = true;
        await this.oracle.session(
          `@${sqlclToken(file)}\nprompt APEXREST_SCRIPT_COMPLETE`,
          deployConnection,
          true,
          controller.signal,
        );
        if (operation.kind === 'migration') {
          if (coordination(env).backend === 'local')
            await new LocalDeploymentControl(env).migration(
              runId,
              path.basename(file),
              operation.sha256!,
              'succeeded',
            );
          else
            await this.oracle.session(
              `update apexrest_migrations set status='succeeded',finished_at=systimestamp where version=${version} and run_id=${sqlLiteral(runId)};\ncommit;`,
              deployConnection,
              true,
            );
        }
      }
      await record('importing');
      await this.lease(env, deployConnection, runId, false);
      await this.oracle.verifyTarget(env, deployConnection);
      writeStarted = true;
      if (plan.restore) {
        const backupRoot = await contained(
          ctx.root,
          '.apexrest/backups/' + plan.restore.backupId + '/application',
        );
        if (hash(canonical(await inventory(backupRoot))) !== plan.restore.checksum)
          throw new Fault('BACKUP_INVALID', 'Restore source changed after approval.', 5);
        const frozen = path.join(runDir, 'restore');
        await cp(backupRoot, frozen, { recursive: true });
        const files = await inventory(frozen);
        if (hash(canonical(files)) !== plan.restore.checksum)
          throw new Fault('BACKUP_INVALID', 'Restore copy changed.', 5);
        const main = Object.keys(files).filter((f) => /^f\d+\.sql$/i.test(f));
        if (main.length !== 1)
          throw new Fault(
            'RESTORE_LAYOUT_UNSUPPORTED',
            'Restore requires one complete non-split Oracle SQL export.',
            3,
          );
        await this.oracle.session(
          `begin\n apex_application_install.set_workspace(${sqlLiteral(env.workspace)});\n apex_application_install.set_schema(${sqlLiteral(env.parsingSchema)});\n apex_application_install.set_application_id(${env.applicationId});\nend;\n/\n@${sqlclToken(path.join(frozen, main[0]!))}`,
          deployConnection,
          true,
          controller.signal,
        );
      } else
        await this.oracle.importApplication(
          ctx,
          env,
          deployConnection,
          path.join(snapshot, ctx.config.application.sourceDir),
          controller.signal,
        );
      await record('verifying');
      const target = await this.oracle.verifyTarget(env, readConnection);
      if (
        !target.application ||
        String(target.application.alias).toLowerCase() !==
          String(
            plan.restore
              ? (plan.target.application as { alias: string }).alias
              : ctx.config.application.alias,
          ).toLowerCase()
      )
        throw new Fault('POST_DEPLOY_IDENTITY_FAILED', 'Expected imported app was not found.', 1);
      await record('testing');
      if (ctx.config.tests.requiredSuites.length) {
        if (!this.runTests)
          throw new Fault('TEST_RUNNER_REQUIRED', 'Required post-deploy tests are unavailable.', 3);
        await this.checkLocal(ctx, plan);
        const tests = await this.runTests(ctx, plan.environment);
        if (!tests.ok)
          throw new Fault('POST_DEPLOY_TEST_FAILED', 'Required post-deploy suites did not pass.', 1);
      }
      await record('succeeded');
      return { runId, state, directory: runDir };
    } catch (error) {
      const unknown = writeStarted && (!(error instanceof Fault) || error.exitCode === 6 || leaseLost);
      await record(unknown ? 'outcome_unknown' : 'failed', {
        code: error instanceof Fault ? error.code : 'UNEXPECTED_FAILURE',
      });
      if (unknown)
        throw new Fault(
          'OUTCOME_UNKNOWN',
          `Deployment ${runId} requires reconciliation before retry.`,
          6,
          'outcome_unknown',
        );
      throw error;
    } finally {
      if (heartbeat) clearInterval(heartbeat);
      signal?.removeEventListener('abort', abort);
      if ((state as DeployState) !== 'outcome_unknown') {
        if (coordination(env).backend === 'local')
          await new LocalDeploymentControl(env).release(runId).catch(() => {});
        else
          await this.oracle
            .session(
              `delete from apexrest_deploy_locks where target_key=${sqlLiteral(plan.targetDigest)} and owner_id=${sqlLiteral(runId)};\ncommit;`,
              deployConnection,
              true,
            )
            .catch(() => {});
      }
    }
  }
  async reconcile(ctx: ProjectContext, runId: string) {
    parse(z.uuid(), runId);
    const directory = await contained(ctx.root, '.apexrest/deployments/' + runId);
    const plan = parse(deployPlanSchema, await readJson(path.join(directory, 'plan.json'))),
      env = environment(ctx, plan.environment);
    const current = await this.fingerprint(env, await resolveConnection(env.readConnectionRef));
    const state = await readJson(path.join(directory, 'state.json'));
    return {
      runId,
      state,
      currentTarget: current.target,
      currentFingerprint: current.fingerprint,
      targetUnchanged: current.fingerprint === plan.fingerprint,
      history: current.history,
      retryAllowed: false,
      nextActions: [
        'Review target export and migration history. Reconciliation does not assume process termination rolled back Oracle.',
      ],
    };
  }
  async restorePlan(ctx: ProjectContext, backupId: string) {
    parse(z.uuid(), backupId);
    const directory = await contained(ctx.root, '.apexrest/backups/' + backupId);
    const backup = (await readJson(path.join(directory, 'backup.json'))) as {
      digest: string;
      environment: string;
      targetDigest: string;
    };
    const files = await inventory(path.join(directory, 'application'));
    if (hash(canonical(files)) !== backup.digest)
      throw new Fault('BACKUP_INVALID', 'Backup digest does not match.', 5);
    const plan = await this.plan(ctx, backup.environment);
    if (plan.targetDigest !== backup.targetDigest)
      throw new Fault('BACKUP_TARGET_MISMATCH', 'Backup belongs to another target.', 5);
    plan.restore = { backupId, checksum: backup.digest };
    plan.risks = ['application-restore'];
    plan.operations = [{ kind: 'import' }, { kind: 'verify' }, { kind: 'test' }];
    plan.digest = planDigest(plan);
    return plan;
  }
}
