import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);
import {
  OracleAdapter,
  environment,
  external_exports,
  managedHome,
  parse,
  policy,
  refName,
  requireTrust,
  resolveConnection,
  resourceRoot,
  runProcess,
  runtimeState,
  sqlLiteral,
  sqlclToken
} from "./chunk-TM25I7KG.mjs";
import {
  Fault,
  atomicWrite,
  canonical,
  contained,
  exists,
  hash,
  inventory,
  readJson,
  redact,
  withLock,
  writeJson
} from "./chunk-MJC6ZMRG.mjs";

// packages/core/src/testing.ts
import path4 from "node:path";
import { spawn } from "node:child_process";
import { mkdir as mkdir2, readFile as readFile3, cp as cp2, chmod } from "node:fs/promises";
import { randomUUID as randomUUID3 } from "node:crypto";

// packages/core/src/artifacts.ts
import path from "node:path";
import { randomUUID } from "node:crypto";
import { readFile, readdir, rm } from "node:fs/promises";
var ArtifactService = class {
  constructor(ctx) {
    this.ctx = ctx;
  }
  ctx;
  async save(content, kind) {
    const id = randomUUID(), directory = await contained(this.ctx.root, this.ctx.config.artifacts.directory);
    const sanitized = redact(content);
    await atomicWrite(path.join(directory, id + ".txt"), sanitized);
    await writeJson(path.join(directory, id + ".json"), {
      id,
      kind,
      sha256: hash(sanitized),
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      expiresAt: new Date(Date.now() + this.ctx.config.artifacts.retentionDays * 864e5).toISOString(),
      classification: "private-sanitized-text"
    });
    return id;
  }
  async read(id, offset = 0, limit = 4096) {
    parse(external_exports.uuid(), id);
    parse(external_exports.number().int().min(0).max(1e7), offset);
    parse(external_exports.number().int().min(1).max(16384), limit);
    const directory = await contained(this.ctx.root, this.ctx.config.artifacts.directory);
    const metadata = await readJson(await contained(directory, id + ".json"));
    if (Date.parse(metadata.expiresAt) < Date.now())
      throw new Fault("ARTIFACT_EXPIRED", "Artifact retention has expired.", 3);
    if (/auth|wallet|credential/i.test(metadata.kind))
      throw new Fault(
        "PRIVATE_ARTIFACT_DENIED",
        "Authentication and credential artifacts cannot be read through tools.",
        4
      );
    const content = await readFile(await contained(directory, id + ".txt"), "utf8");
    if (hash(content) !== metadata.sha256)
      throw new Fault("ARTIFACT_CHANGED", "Artifact integrity check failed.", 5);
    return {
      id,
      offset,
      content: redact(content.slice(offset, offset + limit)),
      nextOffset: offset + limit < content.length ? offset + limit : null,
      dataClassification: "untrusted_operation_output"
    };
  }
  async prune() {
    const directory = await contained(this.ctx.root, this.ctx.config.artifacts.directory);
    let removed = 0;
    if (!await exists(directory)) return { removed };
    for (const file of await readdir(directory))
      if (/^[a-f0-9-]{36}\.json$/.test(file)) {
        const metadata = await readJson(path.join(directory, file));
        if (Date.parse(metadata.expiresAt) < Date.now()) {
          await rm(path.join(directory, file));
          await rm(path.join(directory, file.replace(".json", ".txt")), { force: true });
          removed++;
        }
      }
    return { removed };
  }
};

// packages/core/src/deploy.ts
import path3 from "node:path";
import { readFile as readFile2, mkdir, cp, open } from "node:fs/promises";
import { randomUUID as randomUUID2, verify } from "node:crypto";

// packages/core/src/deployment-control.ts
import path2 from "node:path";
import { hostname } from "node:os";
import { rm as rm2 } from "node:fs/promises";
function coordination(env) {
  const backend = env.deploymentControl ?? "local";
  return {
    backend,
    scope: backend === "local" ? "managed-home-schema" : "database-application",
    // Bind plans to the history store. Moving a plan to a fresh home is not migration recovery.
    storeDigest: hash(
      canonical(
        backend === "local" ? { home: managedHome(), ...env.databaseIdentity, schema: env.parsingSchema } : { ...env.databaseIdentity, schema: env.parsingSchema }
      )
    )
  };
}
var ownerSchema = external_exports.strictObject({
  runId: external_exports.string(),
  pid: external_exports.number().int().positive(),
  hostname: external_exports.string(),
  phase: external_exports.enum(["preparing", "writing"]),
  createdAt: external_exports.string()
});
var historySchema = external_exports.array(
  external_exports.strictObject({
    version: external_exports.string(),
    checksum: external_exports.string().regex(/^[a-f0-9]{64}$/),
    status: external_exports.enum(["started", "succeeded"]),
    run_id: external_exports.string()
  })
);
var LocalDeploymentControl = class {
  directory;
  constructor(env) {
    const key = hash(canonical({ ...env.databaseIdentity, schema: env.parsingSchema }));
    this.directory = path2.join(managedHome(), "deployment-control", key);
  }
  file(name) {
    return path2.join(this.directory, name);
  }
  async history() {
    const file = this.file("history.json");
    return await exists(file) ? parse(historySchema, await readJson(file)) : [];
  }
  async owner() {
    const file = this.file("active.json");
    return await exists(file) ? parse(ownerSchema, await readJson(file)) : void 0;
  }
  async acquire(runId) {
    await withLock(this.file("control.lock"), async () => {
      const owner = await this.owner();
      if (owner) {
        let dead = false;
        if (owner.hostname === hostname()) {
          try {
            process.kill(owner.pid, 0);
          } catch (e) {
            dead = e.code === "ESRCH";
          }
        }
        if (!dead || owner.phase === "writing")
          throw new Fault(
            "TARGET_LOCKED",
            "A runner owns this schema or an interrupted write needs reconciliation. Preserve its control state.",
            5,
            "conflict"
          );
      }
      await writeJson(this.file("active.json"), {
        runId,
        pid: process.pid,
        hostname: hostname(),
        phase: "preparing",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    });
  }
  async assertOwner(runId) {
    const owner = await this.owner();
    if (owner?.runId !== runId || owner.pid !== process.pid || owner.hostname !== hostname())
      throw new Fault(
        "LEASE_LOST",
        "Local deployment ownership is no longer confirmed.",
        6,
        "outcome_unknown"
      );
    return owner;
  }
  async markWriting(runId) {
    await withLock(this.file("control.lock"), async () => {
      await writeJson(this.file("active.json"), { ...await this.assertOwner(runId), phase: "writing" });
    });
  }
  async migration(runId, version, checksum, status) {
    await withLock(this.file("control.lock"), async () => {
      await this.assertOwner(runId);
      const history = await this.history(), previous = history.find((row) => row.version === version);
      if (status === "started" ? Boolean(previous) : !previous || previous.run_id !== runId || previous.checksum !== checksum || previous.status !== "started")
        throw new Fault(
          "MIGRATION_HISTORY_CONFLICT",
          "Migration history requires reconciliation; it cannot be replayed or overwritten.",
          5
        );
      const next2 = history.filter((row) => row.version !== version);
      next2.push({ version, checksum, status, run_id: runId });
      await writeJson(
        this.file("history.json"),
        next2.sort((a, b) => a.version.localeCompare(b.version))
      );
    });
  }
  async release(runId) {
    await withLock(this.file("control.lock"), async () => {
      await this.assertOwner(runId);
      await rm2(this.file("active.json"));
    });
  }
};

// packages/core/src/deploy.ts
var digestSchema = external_exports.string().regex(/^[a-f0-9]{64}$/);
var filesSchema = external_exports.record(external_exports.string(), digestSchema);
var deployPlanSchema = external_exports.strictObject({
  schemaVersion: external_exports.literal(1),
  id: external_exports.uuid(),
  projectId: refName,
  projectRoot: external_exports.string(),
  environment: refName,
  createdAt: external_exports.iso.datetime(),
  expiresAt: external_exports.iso.datetime(),
  sourceDigest: digestSchema,
  sources: filesSchema,
  configurationDigest: digestSchema,
  toolchainDigest: digestSchema,
  compiler: external_exports.string(),
  targetDigest: digestSchema,
  target: external_exports.record(external_exports.string(), external_exports.unknown()),
  fingerprint: digestSchema,
  migrationHistory: external_exports.array(external_exports.record(external_exports.string(), external_exports.unknown())),
  coordination: external_exports.strictObject({
    backend: external_exports.enum(["local", "database"]),
    scope: external_exports.enum(["managed-home-schema", "database-application"]),
    storeDigest: digestSchema
  }),
  scope: external_exports.literal("full-application-import"),
  operations: external_exports.array(
    external_exports.strictObject({
      kind: external_exports.enum(["migration", "package", "import", "verify", "test"]),
      file: external_exports.string().optional(),
      sha256: digestSchema.optional()
    })
  ),
  risks: external_exports.array(external_exports.string()),
  approval: external_exports.literal("external-policy-required"),
  backupRequired: external_exports.boolean(),
  digest: digestSchema,
  restore: external_exports.strictObject({ backupId: external_exports.uuid(), checksum: digestSchema }).optional()
});
var next = {
  planned: ["approved"],
  approved: ["backing_up"],
  backing_up: ["migrating"],
  migrating: ["importing"],
  importing: ["verifying"],
  verifying: ["testing"],
  testing: ["succeeded"],
  succeeded: [],
  failed: [],
  outcome_unknown: []
};
function assertTransition(from, to) {
  if (!next[from].includes(to) && !["failed", "outcome_unknown"].includes(to))
    throw new Fault("INVALID_DEPLOY_STATE", `Invalid transition ${from} to ${to}.`, 5);
}
function planDigest(value) {
  const { digest: _digest, ...unsigned } = value;
  return hash(canonical(unsigned));
}
function targetDigest(env) {
  return hash(
    canonical({
      ...env.databaseIdentity,
      workspace: env.workspace,
      schema: env.parsingSchema,
      applicationId: env.applicationId
    })
  );
}
function migrationRisk(sql) {
  const risks = [];
  if (/\b(?:drop|truncate|delete|revoke|grant)\b|\balter\s+(?:table|user|system|database)\b/i.test(sql))
    risks.push("destructive-or-privileged-sql");
  if (/^\s*(?:host|!|connect|conn|start|@|@@|exit|quit|script|javascript)\b/im.test(sql))
    risks.push("sqlcl-script-control");
  return risks;
}
async function authorizePlan(ctx, plan, env) {
  await requireTrust(ctx.root);
  if (plan.risks.some((r) => r !== "application-restore"))
    throw new Fault(
      "RECOVERY_REVIEW_REQUIRED",
      "Destructive, authentication or unsupported changes need an explicit recovery implementation and reviewed external workflow.",
      4,
      "blocked"
    );
  if (env.kind === "production") {
    if (process.env.CI !== "true" || !process.env.APEXREST_APPROVAL_PUBLIC_KEY_FILE || !process.env.APEXREST_APPROVAL_FILE)
      throw new Fault(
        "PRODUCTION_CI_REQUIRED",
        "Production requires a protected CI runner and externally signed approval bound to this plan.",
        4,
        "blocked"
      );
    const attestation = parse(
      external_exports.strictObject({
        planDigest: digestSchema,
        targetDigest: digestSchema,
        expiresAt: external_exports.iso.datetime(),
        reviewer: external_exports.string().min(1),
        signature: external_exports.string().min(1)
      }),
      await readJson(process.env.APEXREST_APPROVAL_FILE)
    );
    const { signature, ...payload } = attestation;
    if (payload.planDigest !== plan.digest || payload.targetDigest !== plan.targetDigest || Date.parse(payload.expiresAt) <= Date.now() || !verify(
      null,
      Buffer.from(canonical(payload)),
      await readFile2(process.env.APEXREST_APPROVAL_PUBLIC_KEY_FILE),
      Buffer.from(signature, "base64")
    ))
      throw new Fault(
        "APPROVAL_INVALID",
        "External approval is invalid, expired or for another plan/target.",
        4
      );
    return;
  }
  const grants = (await policy()).grants;
  if (!grants.some(
    (g) => g.projectRoot === ctx.root && g.targetDigest === plan.targetDigest && g.operations.includes("deploy") && Date.parse(g.expiresAt) > Date.now() && (plan.restore ? g.planDigest === plan.digest : !g.planDigest || g.planDigest === plan.digest)
  ))
    throw new Fault(
      "DEPLOY_APPROVAL_REQUIRED",
      "A user-owned development grant for this project and target is required.",
      4,
      "blocked"
    );
}
async function sourceInventory(ctx) {
  const files = {};
  for (const relative of [
    ctx.config.application.sourceDir,
    ctx.config.database.migrationsDir,
    ctx.config.database.packagesDir,
    ctx.config.database.testsDir,
    ctx.config.tests.unitDir,
    ctx.config.tests.apiDir,
    ctx.config.tests.e2eDir
  ]) {
    const dir = await contained(ctx.root, relative);
    if (await exists(dir))
      for (const [file, sha] of Object.entries(await inventory(dir))) files[relative + "/" + file] = sha;
  }
  for (const relative of [
    "package.json",
    "package-lock.json",
    "playwright.config.ts",
    "playwright.config.mjs"
  ])
    if (await exists(path3.join(ctx.root, relative)))
      files[relative] = hash(await readFile2(await contained(ctx.root, relative)));
  return Object.fromEntries(Object.entries(files).sort());
}
var DeploymentService = class {
  constructor(oracle = new OracleAdapter(), runTests) {
    this.oracle = oracle;
    this.runTests = runTests;
  }
  oracle;
  runTests;
  async history(env, connection) {
    if (coordination(env).backend === "local") return new LocalDeploymentControl(env).history();
    return this.oracle.jsonQuery(
      "select version,checksum,status,run_id from apexrest_migrations order by version",
      connection
    );
  }
  async fingerprint(env, connection) {
    const target = await this.oracle.verifyTarget(env, connection);
    const history = await this.history(env, connection);
    const exported = target.application ? await this.oracle.exportApplication(env, connection, "APEXLANG") : null;
    return {
      target,
      history,
      exported,
      fingerprint: hash(canonical({ target, history, exportDigest: exported?.digest ?? null }))
    };
  }
  async plan(ctx, name) {
    await requireTrust(ctx.root);
    const env = environment(ctx, name), connection = await resolveConnection(env.readConnectionRef);
    const [targetCheck, sourceCheck] = await Promise.allSettled([
      this.fingerprint(env, connection),
      (async () => {
        const sources2 = await sourceInventory(ctx);
        const validation2 = await this.oracle.validate(
          await contained(ctx.root, ctx.config.application.sourceDir)
        );
        const lock2 = await contained(ctx.root, ctx.config.toolchain.lockFile);
        if (!await exists(lock2))
          throw new Fault("TOOLCHAIN_LOCK_REQUIRED", "The project needs its pinned toolchain lock.", 3);
        return { sources: sources2, validation: validation2, lock: lock2 };
      })()
    ]);
    if (targetCheck.status === "rejected") throw targetCheck.reason;
    if (sourceCheck.status === "rejected") throw sourceCheck.reason;
    const current = targetCheck.value, { sources, validation, lock } = sourceCheck.value, risks = [];
    const operations = [];
    const history = new Map(current.history.map((row) => [String(row.version), row]));
    if (current.history.some((row) => row.status !== "succeeded"))
      throw new Fault(
        "MIGRATION_HISTORY_CONFLICT",
        "An earlier migration has an unresolved outcome. Reconcile it before any new deployment.",
        5
      );
    for (const [file, sha256] of Object.entries(sources)) {
      const migration = file.startsWith(ctx.config.database.migrationsDir + "/");
      const pkg = file.startsWith(ctx.config.database.packagesDir + "/");
      if (!migration && !pkg) continue;
      if (!file.endsWith(".sql"))
        throw new Fault("UNSUPPORTED_DB_SOURCE", "Database execution directories accept .sql files only.", 3);
      const sql = await readFile2(await contained(ctx.root, file), "utf8");
      risks.push(...migrationRisk(sql).map((r) => `${r}:${file}`));
      if (migration) {
        const version = path3.basename(file);
        if (!/^\d{4,}__[A-Za-z0-9_-]+\.sql$/.test(version))
          throw new Fault(
            "INVALID_MIGRATION_NAME",
            "Use ordered immutable migration names such as 0001__customers.sql.",
            2
          );
        const previous = history.get(version);
        if (previous && (previous.checksum !== sha256 || previous.status !== "succeeded"))
          throw new Fault(
            "MIGRATION_HISTORY_CONFLICT",
            "An existing migration changed checksum or has an unresolved outcome.",
            5
          );
        if (!previous) operations.push({ kind: "migration", file, sha256 });
      } else operations.push({ kind: "package", file, sha256 });
    }
    if (current.exported) {
      const prefix = ctx.config.application.sourceDir + "/";
      for (const [file, sha] of Object.entries(current.exported.files))
        if (/authenticat|authoriz/i.test(file) && sources[prefix + file] !== sha)
          risks.push("authentication-or-authorization-change");
    }
    operations.sort(
      (a, b) => (a.kind === "migration" ? 0 : 1) - (b.kind === "migration" ? 0 : 1) || (a.file ?? "").localeCompare(b.file ?? "")
    );
    operations.push({ kind: "import" }, { kind: "verify" }, { kind: "test" });
    const plan = {
      schemaVersion: 1,
      id: randomUUID2(),
      projectId: ctx.config.projectId,
      projectRoot: ctx.root,
      environment: name,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      expiresAt: new Date(Date.now() + 30 * 6e4).toISOString(),
      sourceDigest: hash(canonical(sources)),
      sources,
      configurationDigest: hash(canonical(ctx.config)),
      toolchainDigest: hash(await readFile2(lock)),
      compiler: validation.compiler.version,
      targetDigest: targetDigest(env),
      target: current.target,
      fingerprint: current.fingerprint,
      migrationHistory: current.history,
      coordination: coordination(env),
      scope: "full-application-import",
      operations,
      risks: [...new Set(risks)],
      approval: "external-policy-required",
      backupRequired: !!current.target.application,
      digest: "0".repeat(64)
    };
    plan.digest = planDigest(plan);
    return plan;
  }
  async checkLocal(ctx, value) {
    const plan = parse(deployPlanSchema, value), env = environment(ctx, plan.environment);
    if (plan.sourceDigest !== hash(canonical(plan.sources)) || plan.digest !== planDigest(plan))
      throw new Fault("PLAN_TAMPERED", "Plan digest verification failed.", 5);
    if (plan.projectId !== ctx.config.projectId || plan.projectRoot !== ctx.root || plan.targetDigest !== targetDigest(env))
      throw new Fault("PLAN_TARGET_MISMATCH", "Plan project or target differs from the current request.", 5);
    if (Date.parse(plan.expiresAt) <= Date.now())
      throw new Fault("PLAN_EXPIRED", "Create and review a new plan.", 5);
    if (plan.sourceDigest !== hash(canonical(await sourceInventory(ctx))) || plan.configurationDigest !== hash(canonical(ctx.config)) || plan.toolchainDigest !== hash(await readFile2(await contained(ctx.root, ctx.config.toolchain.lockFile))))
      throw new Fault("SOURCE_DRIFT", "Sources, configuration or toolchain lock changed after review.", 5);
    if (plan.backupRequired !== Boolean(plan.target.application))
      throw new Fault("PLAN_TAMPERED", "Backup requirement does not match reviewed target.", 5);
    if (canonical(plan.coordination) !== canonical(coordination(env)))
      throw new Fault(
        "CONTROL_STORE_CHANGED",
        "Deployment control mode or local history store changed. Re-plan using the original durable state.",
        5
      );
    const expected = [];
    if (!plan.restore) {
      const history = new Map(plan.migrationHistory.map((row) => [String(row.version), row]));
      for (const [file, sha256] of Object.entries(plan.sources)) {
        const kind = file.startsWith(ctx.config.database.migrationsDir + "/") ? "migration" : file.startsWith(ctx.config.database.packagesDir + "/") ? "package" : void 0;
        if (!kind) continue;
        if (!file.endsWith(".sql"))
          throw new Fault("UNSUPPORTED_DB_SOURCE", "Database sources must be SQL files.", 5);
        const previous = history.get(path3.basename(file));
        if (kind === "migration" && previous && (previous.checksum !== sha256 || previous.status !== "succeeded"))
          throw new Fault("MIGRATION_HISTORY_CONFLICT", "Migration requires reconciliation.", 5);
        if (kind !== "migration" || !previous) expected.push({ kind, file, sha256 });
        const risks = migrationRisk(await readFile2(await contained(ctx.root, file), "utf8")).map(
          (r) => `${r}:${file}`
        );
        if (risks.some((r) => !plan.risks.includes(r)))
          throw new Fault("PLAN_TAMPERED", "Plan omits a SQL risk.", 5);
      }
      expected.sort(
        (a, b) => (a.kind === "migration" ? 0 : 1) - (b.kind === "migration" ? 0 : 1) || (a.file ?? "").localeCompare(b.file ?? "")
      );
    }
    expected.push({ kind: "import" }, { kind: "verify" }, { kind: "test" });
    if (canonical(expected) !== canonical(plan.operations))
      throw new Fault(
        "PLAN_TAMPERED",
        "Plan operations do not match reviewed sources and migration history.",
        5
      );
    return { plan, env };
  }
  async lease(env, connection, runId, acquire) {
    if (coordination(env).backend === "local") {
      const control = new LocalDeploymentControl(env);
      if (acquire) await control.acquire(runId);
      else await control.assertOwner(runId);
      return;
    }
    const key = sqlLiteral(targetDigest(env)), owner = sqlLiteral(runId);
    if (acquire)
      await this.oracle.session(
        `begin
 update apexrest_deploy_locks set owner_id=${owner}, lease_until=systimestamp+interval '90' second where target_key=${key} and lease_until<systimestamp and phase='preparing';
 if sql%rowcount=0 then
  begin insert into apexrest_deploy_locks(target_key,owner_id,lease_until) values(${key},${owner},systimestamp+interval '90' second);
  exception when dup_val_on_index then raise_application_error(-20001,'APEXREST_TARGET_LOCKED'); end;
 end if;
 commit;
end;
/`,
        connection,
        true
      );
    else
      await this.oracle.session(
        `begin
 update apexrest_deploy_locks set lease_until=systimestamp+interval '90' second where target_key=${key} and owner_id=${owner} and lease_until>systimestamp;
 if sql%rowcount<>1 then raise_application_error(-20002,'APEXREST_LEASE_LOST'); end if;
 commit;
end;
/`,
        connection,
        true
      );
  }
  async apply(ctx, value, signal) {
    if (signal?.aborted)
      throw new Fault("CANCELLED", "Deployment cancelled before execution.", 6, "cancelled");
    const { plan, env } = await this.checkLocal(ctx, value);
    await authorizePlan(ctx, plan, env);
    await this.oracle.requireMutationSupport();
    const readConnection = await resolveConnection(env.readConnectionRef), deployConnection = await resolveConnection(env.deployConnectionRef);
    const [deployTargetCheck, fingerprintCheck, capabilityCheck] = await Promise.allSettled([
      this.oracle.verifyTarget(env, deployConnection),
      this.fingerprint(env, readConnection),
      this.oracle.requireCapability("import")
    ]);
    if (deployTargetCheck.status === "rejected") throw deployTargetCheck.reason;
    if (fingerprintCheck.status === "rejected") throw fingerprintCheck.reason;
    if (fingerprintCheck.value.fingerprint !== plan.fingerprint)
      throw new Fault("TARGET_DRIFT", "Target or migration history changed after review.", 5);
    if (capabilityCheck.status === "rejected") throw capabilityCheck.reason;
    const capability = capabilityCheck.value;
    if (capability.version !== plan.compiler)
      throw new Fault("COMPILER_DRIFT", "SQLcl version changed after plan.", 5);
    if (signal?.aborted)
      throw new Fault("CANCELLED", "Deployment cancelled before lease acquisition.", 6, "cancelled");
    const runId = randomUUID2(), runs = path3.join(ctx.root, ".apexrest/deployments"), runDir = path3.join(runs, runId);
    await mkdir(runDir, { recursive: true, mode: 448 });
    let state = "planned", writeStarted = false;
    const controller = new AbortController();
    const abort = () => controller.abort();
    signal?.addEventListener("abort", abort, { once: true });
    if (signal?.aborted) abort();
    const record = async (nextState, details = {}) => {
      assertTransition(state, nextState);
      state = nextState;
      const event = {
        runId,
        planId: plan.id,
        planDigest: plan.digest,
        targetDigest: plan.targetDigest,
        state,
        at: (/* @__PURE__ */ new Date()).toISOString(),
        details
      };
      const journal = await open(path3.join(runDir, "journal.jsonl"), "a", 384);
      try {
        await journal.writeFile(JSON.stringify(event) + "\n");
        await journal.sync();
      } finally {
        await journal.close();
      }
      await writeJson(path3.join(runDir, "state.json"), event);
    };
    await writeJson(path3.join(runDir, "plan.json"), plan);
    await record("approved");
    await this.lease(env, deployConnection, runId, true);
    let renewing = false, leaseLost = false;
    const heartbeat = coordination(env).backend === "database" ? setInterval(() => {
      if (renewing) return;
      renewing = true;
      void this.lease(env, deployConnection, runId, false).catch(() => {
        leaseLost = true;
        controller.abort();
      }).finally(() => {
        renewing = false;
      });
    }, 2e4) : void 0;
    heartbeat?.unref();
    try {
      await record("backing_up");
      if (plan.backupRequired) {
        const backup = await this.oracle.exportApplication(env, readConnection, "SQL");
        const backupId = randomUUID2(), directory = path3.join(ctx.root, ".apexrest/backups", backupId);
        await mkdir(directory, { recursive: true, mode: 448 });
        await cp(backup.directory, path3.join(directory, "application"), { recursive: true });
        const files = await inventory(path3.join(directory, "application"));
        if (!Object.keys(files).length || hash(canonical(files)) !== backup.digest)
          throw new Fault("BACKUP_INVALID", "Backup copy failed checksum verification.", 1);
        await writeJson(path3.join(directory, "backup.json"), {
          schemaVersion: 1,
          backupId,
          targetDigest: plan.targetDigest,
          environment: plan.environment,
          digest: backup.digest,
          files,
          restoreProcedure: "Reviewed SQL export import; application metadata only. Schema/data recovery is separate."
        });
      }
      await this.checkLocal(ctx, plan);
      if ((await this.fingerprint(env, readConnection)).fingerprint !== plan.fingerprint)
        throw new Fault("TARGET_DRIFT", "Target changed during backup.", 5);
      const snapshot = path3.join(runDir, "snapshot");
      await mkdir(snapshot);
      for (const [file, sha] of Object.entries(plan.sources)) {
        const source = await contained(ctx.root, file), destination = await contained(snapshot, file);
        await mkdir(path3.dirname(destination), { recursive: true });
        await cp(source, destination);
        if (hash(await readFile2(destination)) !== sha)
          throw new Fault("SOURCE_DRIFT", "Source changed while freezing deployment.", 5);
      }
      if (controller.signal.aborted)
        throw new Fault("CANCELLED", "Deployment cancelled before writes.", 6, "cancelled");
      await record("migrating");
      if (coordination(env).backend === "local") await new LocalDeploymentControl(env).markWriting(runId);
      else
        await this.oracle.session(
          `update apexrest_deploy_locks set phase='writing' where target_key=${sqlLiteral(plan.targetDigest)} and owner_id=${sqlLiteral(runId)};
commit;`,
          deployConnection,
          true
        );
      for (const operation of plan.operations.filter((o) => ["migration", "package"].includes(o.kind))) {
        if (leaseLost || controller.signal.aborted)
          throw new Fault(
            "LEASE_OR_CANCELLATION",
            "Execution was interrupted.",
            6,
            writeStarted ? "outcome_unknown" : "cancelled"
          );
        await this.lease(env, deployConnection, runId, false);
        const file = await contained(snapshot, operation.file);
        const version = sqlLiteral(path3.basename(file));
        if (operation.kind === "migration") {
          if (coordination(env).backend === "local")
            await new LocalDeploymentControl(env).migration(
              runId,
              path3.basename(file),
              operation.sha256,
              "started"
            );
          else
            await this.oracle.session(
              `insert into apexrest_migrations(version,checksum,status,run_id) values(${version},${sqlLiteral(operation.sha256)},'started',${sqlLiteral(runId)});
commit;`,
              deployConnection,
              true
            );
        }
        writeStarted = true;
        await this.oracle.session(
          `@${sqlclToken(file)}
prompt APEXREST_SCRIPT_COMPLETE`,
          deployConnection,
          true,
          controller.signal
        );
        if (operation.kind === "migration") {
          if (coordination(env).backend === "local")
            await new LocalDeploymentControl(env).migration(
              runId,
              path3.basename(file),
              operation.sha256,
              "succeeded"
            );
          else
            await this.oracle.session(
              `update apexrest_migrations set status='succeeded',finished_at=systimestamp where version=${version} and run_id=${sqlLiteral(runId)};
commit;`,
              deployConnection,
              true
            );
        }
      }
      await record("importing");
      await this.lease(env, deployConnection, runId, false);
      await this.oracle.verifyTarget(env, deployConnection);
      writeStarted = true;
      if (plan.restore) {
        const backupRoot = await contained(
          ctx.root,
          ".apexrest/backups/" + plan.restore.backupId + "/application"
        );
        if (hash(canonical(await inventory(backupRoot))) !== plan.restore.checksum)
          throw new Fault("BACKUP_INVALID", "Restore source changed after approval.", 5);
        const frozen = path3.join(runDir, "restore");
        await cp(backupRoot, frozen, { recursive: true });
        const files = await inventory(frozen);
        if (hash(canonical(files)) !== plan.restore.checksum)
          throw new Fault("BACKUP_INVALID", "Restore copy changed.", 5);
        const main = Object.keys(files).filter((f) => /^f\d+\.sql$/i.test(f));
        if (main.length !== 1)
          throw new Fault(
            "RESTORE_LAYOUT_UNSUPPORTED",
            "Restore requires one complete non-split Oracle SQL export.",
            3
          );
        await this.oracle.restoreApplication(
          env,
          deployConnection,
          path3.join(frozen, main[0]),
          controller.signal
        );
      } else
        await this.oracle.importApplication(
          ctx,
          env,
          deployConnection,
          path3.join(snapshot, ctx.config.application.sourceDir),
          controller.signal
        );
      await record("verifying");
      const target = await this.oracle.verifyTarget(env, readConnection);
      if (!target.application || String(target.application.alias).toLowerCase() !== String(
        plan.restore ? plan.target.application.alias : ctx.config.application.alias
      ).toLowerCase())
        throw new Fault("POST_DEPLOY_IDENTITY_FAILED", "Expected imported app was not found.", 1);
      await record("testing");
      if (ctx.config.tests.requiredSuites.length) {
        if (!this.runTests)
          throw new Fault("TEST_RUNNER_REQUIRED", "Required post-deploy tests are unavailable.", 3);
        await this.checkLocal(ctx, plan);
        const tests = await this.runTests(ctx, plan.environment);
        if (!tests.ok)
          throw new Fault("POST_DEPLOY_TEST_FAILED", "Required post-deploy suites did not pass.", 1);
      }
      await record("succeeded");
      return { runId, state, directory: runDir };
    } catch (error) {
      const unknown = writeStarted && (!(error instanceof Fault) || error.exitCode === 6 || leaseLost);
      await record(unknown ? "outcome_unknown" : "failed", {
        code: error instanceof Fault ? error.code : "UNEXPECTED_FAILURE"
      });
      if (unknown)
        throw new Fault(
          "OUTCOME_UNKNOWN",
          `Deployment ${runId} requires reconciliation before retry.`,
          6,
          "outcome_unknown"
        );
      throw error;
    } finally {
      if (heartbeat) clearInterval(heartbeat);
      signal?.removeEventListener("abort", abort);
      if (state !== "outcome_unknown") {
        if (coordination(env).backend === "local")
          await new LocalDeploymentControl(env).release(runId).catch(() => {
          });
        else
          await this.oracle.session(
            `delete from apexrest_deploy_locks where target_key=${sqlLiteral(plan.targetDigest)} and owner_id=${sqlLiteral(runId)};
commit;`,
            deployConnection,
            true
          ).catch(() => {
          });
      }
    }
  }
  async reconcile(ctx, runId) {
    parse(external_exports.uuid(), runId);
    const directory = await contained(ctx.root, ".apexrest/deployments/" + runId);
    const plan = parse(deployPlanSchema, await readJson(path3.join(directory, "plan.json"))), env = environment(ctx, plan.environment);
    const current = await this.fingerprint(env, await resolveConnection(env.readConnectionRef));
    const state = await readJson(path3.join(directory, "state.json"));
    return {
      runId,
      state,
      currentTarget: current.target,
      currentFingerprint: current.fingerprint,
      targetUnchanged: current.fingerprint === plan.fingerprint,
      history: current.history,
      retryAllowed: false,
      nextActions: [
        "Review target export and migration history. Reconciliation does not assume process termination rolled back Oracle."
      ]
    };
  }
  async restorePlan(ctx, backupId) {
    parse(external_exports.uuid(), backupId);
    const directory = await contained(ctx.root, ".apexrest/backups/" + backupId);
    const backup = await readJson(path3.join(directory, "backup.json"));
    const files = await inventory(path3.join(directory, "application"));
    if (hash(canonical(files)) !== backup.digest)
      throw new Fault("BACKUP_INVALID", "Backup digest does not match.", 5);
    const plan = await this.plan(ctx, backup.environment);
    if (plan.targetDigest !== backup.targetDigest)
      throw new Fault("BACKUP_TARGET_MISMATCH", "Backup belongs to another target.", 5);
    plan.restore = { backupId, checksum: backup.digest };
    plan.risks = ["application-restore"];
    plan.operations = [{ kind: "import" }, { kind: "verify" }, { kind: "test" }];
    plan.digest = planDigest(plan);
    return plan;
  }
};

// packages/core/src/testing.ts
function qualityGate(results, required) {
  return results.every((r) => !["failed", "cancelled"].includes(r.status)) && required.every(
    (s) => results.some(
      (r) => r.suite === s && r.status === "passed" && r.tests > r.skipped && r.failures === 0 && r.skipped === 0
    )
  );
}
function parseJUnit(xml) {
  if (/<!DOCTYPE|<!ENTITY/i.test(xml))
    throw new Fault("UNSAFE_REPORT", "DTD/entities are not allowed in test reports.", 1);
  const cases = [...xml.matchAll(/<testcase\b[^>]*?\/>|<testcase\b[^>]*>[\s\S]*?<\/testcase>/g)].map(
    (m) => m[0]
  );
  return {
    tests: cases.length,
    failures: cases.filter((c) => /<(?:failure|error)\b/.test(c)).length,
    skipped: cases.filter((c) => /<skipped\b/.test(c)).length
  };
}
function allowedOrigin(url, origins) {
  const u = new URL(url);
  if (!["https:", "http:"].includes(u.protocol) || u.username || u.password || u.hostname.endsWith(".invalid") || u.protocol === "http:" && !["localhost", "127.0.0.1", "[::1]"].includes(u.hostname) || !origins.includes(u.origin))
    throw new Fault("ORIGIN_DENIED", "The target origin is outside the configured allowlist.", 4);
  return u;
}
var TestService = class {
  constructor(oracle = new OracleAdapter()) {
    this.oracle = oracle;
  }
  oracle;
  async authorize(ctx, name) {
    await requireTrust(ctx.root);
    const env = environment(ctx, name);
    if (env.kind === "production" || !ctx.config.tests.mutationAllowedEnvironments.includes(name))
      throw new Fault(
        "TEST_MUTATION_DENIED",
        "Remote tests require a non-production environment explicitly allowed for mutations.",
        4,
        "blocked"
      );
    if (!(await policy()).grants.some(
      (g) => g.projectRoot === ctx.root && g.targetDigest === targetDigest(env) && g.operations.includes("test") && Date.parse(g.expiresAt) > Date.now()
    ))
      throw new Fault(
        "TEST_APPROVAL_REQUIRED",
        "User-owned policy must authorize tests for this exact target.",
        4,
        "blocked"
      );
    allowedOrigin(env.baseUrl, [new URL(env.baseUrl).origin, ...env.allowedOrigins]);
    return env;
  }
  async run(ctx, suite, envName, signal, headed = false) {
    try {
      await requireTrust(ctx.root);
      const dir = await contained(
        ctx.root,
        suite === "sql" ? ctx.config.database.testsDir : ctx.config.tests[`${suite}Dir`]
      );
      if (!await exists(dir)) return { suite, status: "not_configured", tests: 0, failures: 0, skipped: 0 };
      const files = Object.keys(await inventory(dir));
      if (!files.length) return { suite, status: "empty", tests: 0, failures: 0, skipped: 0 };
      const artifacts = new ArtifactService(ctx);
      if (suite === "unit") {
        const tests = files.filter((f) => /\.(?:test|spec)\.(?:mjs|js|ts)$/.test(f));
        if (!tests.length) return { suite, status: "empty", tests: 0, failures: 0, skipped: 0 };
        const result2 = await runProcess({
          executable: process.execPath,
          args: [
            "--experimental-strip-types",
            "--test",
            "--test-reporter=junit",
            ...tests.map((f) => path4.join(dir, f))
          ],
          cwd: ctx.root,
          ...signal ? { signal } : {},
          timeoutMs: 18e4
        });
        const counts2 = parseJUnit(result2.stdout);
        const artifactId2 = await artifacts.save(result2.stdout + result2.stderr, "unit-report");
        return {
          suite,
          status: result2.timedOut || result2.cancelled ? "cancelled" : !counts2.tests ? "empty" : result2.code === 0 && !counts2.failures ? "passed" : "failed",
          ...counts2,
          artifactId: artifactId2
        };
      }
      if (!envName) throw new Fault("ENVIRONMENT_REQUIRED", "Remote test suites require --env.", 2);
      const env = await this.authorize(ctx, envName);
      if (suite === "sql") {
        await this.oracle.requireMutationSupport();
        const connection = await resolveConnection(env.deployConnectionRef);
        await this.oracle.verifyTarget(env, connection);
        const framework = await this.oracle.jsonQuery(
          "select owner,object_name from all_objects where object_name='UT' and object_type='PACKAGE'",
          connection
        );
        if (!framework.length)
          return {
            suite,
            status: "dependency_missing",
            tests: 0,
            failures: 0,
            skipped: 0,
            diagnostic: "utPLSQL is absent. Review a separate framework installation plan."
          };
        for (const file of files.filter((f) => f.endsWith(".sql")).sort())
          await this.oracle.session(`@${sqlclToken(await contained(dir, file))}`, connection, true, signal);
        const result2 = await this.oracle.session(
          `set serveroutput on size unlimited
begin
 ut.run(${sqlLiteral(env.parsingSchema)}, ut_junit_reporter());
end;
/`,
          connection,
          true,
          signal
        );
        const counts2 = parseJUnit(result2.output), artifactId2 = await artifacts.save(result2.output, "utplsql-junit");
        return {
          suite,
          status: !counts2.tests ? "empty" : counts2.failures ? "failed" : "passed",
          ...counts2,
          artifactId: artifactId2
        };
      }
      const state = await runtimeState();
      if (!state.playwright || !state.node)
        return {
          suite,
          status: "dependency_missing",
          tests: 0,
          failures: 0,
          skipped: 0,
          diagnostic: "Run apexrest setup to install pinned Playwright and Chromium."
        };
      const runId = randomUUID3(), runnerRoot = path4.resolve(state.playwright, "../../../.."), run = path4.join(runnerRoot, "runs", runId);
      await mkdir2(run, { recursive: true, mode: 448 });
      await cp2(dir, path4.join(run, "tests"), { recursive: true });
      await cp2(path4.join(resourceRoot(), "testkit"), path4.join(run, "testkit"), { recursive: true });
      const auth = path4.join(ctx.root, ".apexrest/auth", envName, "state.json"), authMeta = auth + ".meta.json";
      if (suite === "e2e" && (!await exists(auth) || !await exists(authMeta) || Date.parse((await readJson(authMeta)).expiresAt) < Date.now()))
        return {
          suite,
          status: "blocked",
          tests: 0,
          failures: 0,
          skipped: 0,
          diagnostic: "Authenticated browser state is missing or expired. Run test auth interactively."
        };
      await atomicWrite(
        path4.join(run, "playwright.config.mjs"),
        `export default ${JSON.stringify({ testDir: "./tests", forbidOnly: true, retries: 0, timeout: 3e4, workers: 1, reporter: [["json", { outputFile: path4.join(run, "report.json") }]], use: { baseURL: env.baseUrl, browserName: "chromium", serviceWorkers: "block", trace: "off", screenshot: "off", video: "off", ...suite === "e2e" ? { storageState: auth } : {} } })};
`
      );
      const result = await runProcess({
        executable: state.node,
        args: [
          state.playwright,
          "test",
          "--config",
          path4.join(run, "playwright.config.mjs"),
          ...headed ? ["--headed"] : []
        ],
        cwd: run,
        env: {
          ...process.env,
          PLAYWRIGHT_BROWSERS_PATH: path4.join(managedHome(), "browsers"),
          APEXREST_ALLOWED_ORIGINS: JSON.stringify([new URL(env.baseUrl).origin, ...env.allowedOrigins]),
          APEXREST_EXPECTED_MARKER: env.expectedMarker ?? ""
        },
        timeoutMs: 3e5,
        ...signal ? { signal } : {}
      });
      const reportFile = path4.join(run, "report.json");
      if (!await exists(reportFile))
        return {
          suite,
          status: result.timedOut || result.cancelled ? "cancelled" : "failed",
          tests: 0,
          failures: 1,
          skipped: 0,
          diagnostic: redact(result.stderr).slice(0, 2e3)
        };
      const report = await readJson(reportFile);
      const stats = report.stats, counts = {
        tests: stats.expected + stats.unexpected + stats.flaky + stats.skipped,
        failures: stats.unexpected + stats.flaky + (report.errors?.length ?? 0),
        skipped: stats.skipped
      };
      const artifactId = await artifacts.save(await readFile3(reportFile, "utf8"), "playwright-report");
      return {
        suite,
        status: result.timedOut || result.cancelled ? "cancelled" : !counts.tests ? "empty" : result.code === 0 && !counts.failures ? "passed" : "failed",
        ...counts,
        artifactId
      };
    } catch (e) {
      return {
        suite,
        status: e instanceof Fault && e.exitCode === 3 ? "dependency_missing" : e instanceof Fault && e.exitCode === 6 ? "cancelled" : "blocked",
        tests: 0,
        failures: 0,
        skipped: 0,
        diagnostic: redact(e instanceof Error ? e.message : "Test runner failed.")
      };
    }
  }
  async all(ctx, name, signal) {
    const results = [];
    for (const suite of ["unit", "sql", "api", "e2e"])
      results.push(await this.run(ctx, suite, name, signal));
    const runId = randomUUID3(), ok = qualityGate(results, ctx.config.tests.requiredSuites);
    const report = {
      runId,
      ok,
      environment: name,
      results,
      required: ctx.config.tests.requiredSuites,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    await writeJson(path4.join(ctx.root, ".apexrest/test-runs", runId + ".json"), report);
    return { ok, data: report };
  }
  async auth(ctx, name) {
    const env = await this.authorize(ctx, name), state = await runtimeState();
    if (!state.playwright || !state.node)
      throw new Fault("SETUP_REQUIRED", "Install Playwright through setup first.", 3);
    if (!process.stdin.isTTY)
      throw new Fault(
        "INTERACTIVE_LOGIN_REQUIRED",
        "Run test auth in a local interactive terminal. Do not send passwords to Codex.",
        4
      );
    const destination = path4.join(ctx.root, ".apexrest/auth", name, "state.json");
    await mkdir2(path4.dirname(destination), { recursive: true, mode: 448 });
    const helper = path4.join(path4.resolve(state.playwright, "../../../.."), "auth.mjs");
    await cp2(path4.join(resourceRoot(), "playwright/auth.mjs"), helper);
    const code = await new Promise((resolve, reject) => {
      const child = spawn(
        state.node,
        [
          helper,
          destination,
          env.baseUrl,
          JSON.stringify([new URL(env.baseUrl).origin, ...env.allowedOrigins])
        ],
        {
          cwd: ctx.root,
          env: { ...process.env, PLAYWRIGHT_BROWSERS_PATH: path4.join(managedHome(), "browsers") },
          stdio: ["inherit", "ignore", "inherit"]
        }
      );
      child.once("error", reject);
      child.once("exit", resolve);
    });
    if (code !== 0 || !await exists(destination))
      throw new Fault("AUTH_NOT_SAVED", "Login did not save browser state.", 4);
    await chmod(destination, 384);
    await writeJson(destination + ".meta.json", {
      expiresAt: new Date(Date.now() + 8 * 36e5).toISOString(),
      origin: new URL(env.baseUrl).origin
    });
    return { state: "stored", expiresInHours: 8, authentication: "verified-by-required-E2E-marker" };
  }
};

// packages/core/src/team-schema.ts
var workPreferencesSchema = external_exports.strictObject({
  executionMode: external_exports.enum(["team", "single"]).default("team"),
  browserMode: external_exports.enum(["codex", "external"]).default("codex"),
  developers: external_exports.number().int().min(1).max(3).default(1),
  sandbox: external_exports.enum(["read-only", "workspace-write"]).default("workspace-write"),
  timeoutSeconds: external_exports.number().int().min(30).max(3600).default(900)
});
var teamStartSchema = external_exports.strictObject({
  executionMode: workPreferencesSchema.shape.executionMode.removeDefault().optional(),
  browserMode: workPreferencesSchema.shape.browserMode.removeDefault().optional(),
  developers: workPreferencesSchema.shape.developers.removeDefault().optional(),
  sandbox: workPreferencesSchema.shape.sandbox.removeDefault().optional(),
  timeoutSeconds: workPreferencesSchema.shape.timeoutSeconds.removeDefault().optional(),
  project: external_exports.string().optional(),
  task: external_exports.string().trim().min(1).max(16e3)
});
var resolvedTeamStartSchema = workPreferencesSchema.extend({
  project: external_exports.string().optional(),
  task: teamStartSchema.shape.task
});
var teamIdSchema = external_exports.strictObject({ project: external_exports.string().optional(), id: external_exports.uuid() });
var workStartSchema = teamStartSchema.extend({ requestId: external_exports.uuid() });
var teamWaitSchema = teamIdSchema.extend({
  cursor: external_exports.string().regex(/^[a-f0-9]{64}$/).optional(),
  waitSeconds: external_exports.number().int().min(1).max(30).default(25)
});
var teamMessageSchema = teamIdSchema.extend({ message: external_exports.string().trim().min(1).max(8e3) });
var planningSchema = external_exports.strictObject({
  plan: external_exports.string().min(1).max(6e3),
  complexity: external_exports.enum(["simple", "standard", "complex"]),
  reason: external_exports.string().min(1).max(600)
});
var reviewSchema = external_exports.strictObject({
  decision: external_exports.enum(["approve", "revise"]),
  summary: external_exports.string().min(1).max(4e3),
  findings: external_exports.array(external_exports.string().min(1).max(2e3)).max(20)
});
var routedReviewSchema = reviewSchema.extend({
  revisionCause: external_exports.enum(["none", "implementation", "prerequisite"])
});
var qaSchema = external_exports.strictObject({
  decision: external_exports.enum(["pass", "fail", "blocked"]),
  summary: external_exports.string().min(1).max(4e3),
  checks: external_exports.array(
    external_exports.strictObject({
      name: external_exports.string().min(1).max(500),
      status: external_exports.enum(["passed", "failed", "not_run"]),
      evidence: external_exports.string().min(1).max(2e3)
    })
  ).min(1).max(20)
});

// packages/core/src/work-preferences.ts
async function workPreferences(root) {
  const file = await contained(root, ".apexrest/panel/preferences.json");
  return parse(workPreferencesSchema, await exists(file) ? await readJson(file) : {});
}
async function resolveWorkRequest(root, input) {
  const fields = parse(teamStartSchema, input);
  const overrides = Object.fromEntries(Object.entries(fields).filter(([, value]) => value !== void 0));
  const request = resolvedTeamStartSchema.parse({
    ...await workPreferences(root),
    ...overrides,
    project: root
  });
  if (request.executionMode === "single") request.developers = 1;
  return request;
}

// packages/core/src/browser.ts
function browserInstructions(mode) {
  return `Interactive APEX verification browser: ${mode}. ` + (mode === "external" ? "Use apexrest_browser_open for the explicit environment to open the system browser. Use available external-browser controls and the user's interactive SSO session. Do not substitute the Codex in-app browser." : "Use apexrest_browser_open for the explicit environment, then open its URL with the host Codex in-app browser controls. Do not substitute an external browser.") + " Opening a URL is not verification. Inspect the affected interactions with controls for the selected browser; if those controls or authentication are unavailable, report the check as not_run and the exact limitation. Never read or copy browser profiles, cookies or credentials. Login is interactive, without login capture. Automated Playwright suites remain separate and do not inherit system-browser or Codex cookies.";
}
function externalBrowserCommand(url, platform = process.platform) {
  if (platform === "darwin") return { executable: "/usr/bin/open", args: [url] };
  if (platform === "win32")
    return {
      executable: "powershell.exe",
      args: [
        "-NoProfile",
        "-NonInteractive",
        "-Command",
        "Start-Process -FilePath '" + url.replaceAll("'", "''") + "'"
      ]
    };
  return { executable: "xdg-open", args: [url] };
}
async function openVerificationBrowser(ctx, name, launch = runProcess) {
  await requireTrust(ctx.root);
  const target = environment(ctx, name);
  const url = allowedOrigin(target.baseUrl, [
    new URL(target.baseUrl).origin,
    ...target.allowedOrigins
  ]).toString();
  const pinned = process.env.APEXREST_TEAM_WORKER === "1" ? process.env.APEXREST_BROWSER_MODE : void 0;
  const mode = pinned === "external" || pinned === "codex" ? pinned : (await workPreferences(ctx.root)).browserMode;
  const common = {
    browserMode: mode,
    environment: name,
    url,
    verified: false,
    nextAction: browserInstructions(mode)
  };
  if (mode === "codex") return { ...common, status: "host_action_required" };
  const result = await launch({ ...externalBrowserCommand(url), cwd: ctx.root, timeoutMs: 1e4 });
  if (result.code !== 0 || result.timedOut || result.cancelled)
    throw new Fault(
      "BROWSER_OPEN_FAILED",
      "The system browser could not be opened. Check the local desktop session; no browser verification was performed.",
      3,
      "blocked"
    );
  return { ...common, status: "opened" };
}

export {
  workPreferencesSchema,
  teamStartSchema,
  resolvedTeamStartSchema,
  teamIdSchema,
  workStartSchema,
  teamWaitSchema,
  teamMessageSchema,
  planningSchema,
  routedReviewSchema,
  qaSchema,
  DeploymentService,
  ArtifactService,
  TestService,
  workPreferences,
  resolveWorkRequest,
  browserInstructions,
  externalBrowserCommand,
  openVerificationBrowser
};
