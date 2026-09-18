import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);
import {
  TeamService,
  teamRuntime
} from "./chunk-OEOKHSHA.mjs";
import {
  openVerificationBrowser,
  teamStartSchema,
  workPreferences,
  workPreferencesSchema
} from "./chunk-QU2LZEF3.mjs";
import {
  VERSION
} from "./chunk-WWBXTYRS.mjs";
import {
  Fault,
  configureSqlcl,
  connections,
  contained,
  exists,
  external_exports,
  loadProject,
  parse,
  policy,
  readJson,
  requireTrust,
  runProcess,
  sanitized,
  sqlclConfig,
  sqlclConfigSchema,
  writeJson
} from "./chunk-GKQBRVST.mjs";

// packages/core/src/panel-schema.ts
var panelPreferencesSchema = workPreferencesSchema;
var panelReadSchema = external_exports.strictObject({
  project: external_exports.string().min(1).max(4096).optional(),
  team: external_exports.uuid().optional()
});
var panelActionSchema = external_exports.strictObject({
  project: external_exports.string().min(1).max(4096).optional(),
  action: external_exports.discriminatedUnion("kind", [
    external_exports.strictObject({ kind: external_exports.literal("preferences"), settings: panelPreferencesSchema }),
    external_exports.strictObject({ kind: external_exports.literal("sqlcl"), settings: sqlclConfigSchema }),
    external_exports.strictObject({ kind: external_exports.literal("start"), request: teamStartSchema.omit({ project: true }) }),
    external_exports.strictObject({ kind: external_exports.literal("message"), id: external_exports.uuid(), message: external_exports.string().trim().min(1).max(8e3) }),
    external_exports.strictObject({ kind: external_exports.literal("cancel-team"), id: external_exports.uuid() }),
    external_exports.strictObject({ kind: external_exports.literal("cancel-job"), id: external_exports.uuid() }),
    external_exports.strictObject({ kind: external_exports.literal("validate") }),
    external_exports.strictObject({ kind: external_exports.literal("browser"), env: external_exports.string().min(1).max(100) }),
    external_exports.strictObject({
      kind: external_exports.literal("test"),
      suite: external_exports.enum(["unit", "sql", "api", "e2e", "all"]),
      env: external_exports.string().min(1).max(100).optional()
    }),
    external_exports.strictObject({ kind: external_exports.literal("plan"), env: external_exports.string().min(1).max(100) })
  ])
});

// packages/core/src/jobs.ts
import path from "node:path";
import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
var JobService = class {
  constructor(ctx) {
    this.ctx = ctx;
  }
  ctx;
  async start(operation, input, runtime) {
    await requireTrust(this.ctx.root);
    if (!["apex.generate", "apex.export", "apex.validate", "deploy.plan", "deploy.apply", "test.run"].includes(
      operation
    ))
      throw new Fault("INVALID_JOB_OPERATION", "Operation cannot run as a background job.", 2);
    const id = randomUUID(), root = await contained(this.ctx.root, ".apexrest/jobs/" + id);
    await writeJson(path.join(root, "request.json"), {
      id,
      operation,
      input: { ...input, project: this.ctx.root }
    });
    await writeJson(path.join(root, "state.json"), {
      id,
      status: "queued",
      operation,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    const worker = spawn(process.execPath, [runtime, "--job-worker", this.ctx.root, id], {
      cwd: this.ctx.root,
      env: process.env,
      detached: true,
      stdio: "ignore",
      windowsHide: true
    });
    await new Promise((resolve, reject) => {
      worker.once("spawn", resolve);
      worker.once("error", reject);
    });
    worker.unref();
    return {
      jobId: id,
      status: "queued",
      nextAction: "Poll job status; cancellation does not imply database rollback."
    };
  }
  async status(id) {
    parse(external_exports.uuid(), id);
    const root = await contained(this.ctx.root, ".apexrest/jobs/" + id);
    const state = await readJson(path.join(root, "state.json"));
    if (["queued", "running"].includes(state.status) && Date.parse(state.updatedAt) + 6e4 < Date.now())
      return {
        ...state,
        status: "outcome_unknown",
        nextAction: "Worker heartbeat expired. Reconcile target before retrying."
      };
    return state;
  }
  async cancel(id) {
    await requireTrust(this.ctx.root);
    parse(external_exports.uuid(), id);
    const state = await this.status(id);
    if (!["queued", "running"].includes(state.status)) return state;
    await writeJson(await contained(this.ctx.root, ".apexrest/jobs/" + id + "/cancel.json"), {
      requestedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    return { jobId: id, status: "cancellation_requested", rollbackConfirmed: false };
  }
};
async function executeJob(ctx, id, execute) {
  await requireTrust(ctx.root);
  parse(external_exports.uuid(), id);
  const root = await contained(ctx.root, ".apexrest/jobs/" + id);
  const request = await readJson(path.join(root, "request.json"));
  const controller = new AbortController();
  let done = false;
  const pulse = async () => {
    if (done) return;
    if (await exists(path.join(root, "cancel.json"))) controller.abort();
    if (!done)
      await writeJson(path.join(root, "state.json"), {
        id,
        operation: request.operation,
        status: "running",
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
  };
  await pulse();
  let pending = Promise.resolve();
  const timer = setInterval(() => {
    pending = pending.then(pulse).catch(() => {
      controller.abort();
    });
  }, 2e3), timeout = setTimeout(() => controller.abort(), 9e5);
  try {
    const result = await execute(request.operation, request.input, controller.signal);
    done = true;
    clearInterval(timer);
    clearTimeout(timeout);
    await pending;
    await writeJson(path.join(root, "state.json"), {
      id,
      status: "completed",
      result,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  } finally {
    done = true;
    clearInterval(timer);
    clearTimeout(timeout);
  }
}

// packages/core/src/panel.ts
import { readdir, realpath, stat } from "node:fs/promises";
import { randomUUID as randomUUID2 } from "node:crypto";
var safe = (value) => sanitized(value);
var PanelService = class {
  constructor(root) {
    this.root = root;
  }
  root;
  async preferences() {
    return workPreferences(this.root);
  }
  async records(folder) {
    const base = await contained(this.root, ".apexrest/" + folder);
    if (!await exists(base)) return [];
    const entries = (await readdir(base, { withFileTypes: true })).filter(
      (e) => e.isDirectory() && external_exports.uuid().safeParse(e.name).success
    );
    if (entries.length > 2e3)
      throw new Fault(
        "PANEL_HISTORY_LIMIT",
        "Archive old operation records before loading more than 2000 runs.",
        2
      );
    const files = await Promise.all(
      entries.map(async (entry) => {
        const file = await contained(base, entry.name + "/state.json");
        const info = await stat(file).catch(() => null);
        return { id: entry.name, file, at: info?.mtimeMs ?? 0, size: info?.size ?? 0 };
      })
    );
    return Promise.all(
      files.filter((f) => f.size > 0).sort((a, b) => b.at - a.at).slice(0, 12).map(async (f) => {
        if (f.size > 2 * 1024 * 1024)
          return {
            id: f.id,
            status: "unavailable",
            diagnostics: ["Record exceeds the panel limit."]
          };
        try {
          return { ...await readJson(f.file), id: f.id };
        } catch {
          return {
            id: f.id,
            status: "unavailable",
            diagnostics: ["Cannot read this operation record."]
          };
        }
      })
    );
  }
  async snapshot(selectedTeam) {
    this.root = await realpath(this.root);
    if (selectedTeam) parse(external_exports.uuid(), selectedTeam);
    const ctx = await loadProject(this.root).catch((error) => {
      if (error instanceof Fault && error.code === "PROJECT_NOT_CONFIGURED") return null;
      throw error;
    });
    const [prefs, sqlcl, refs, security, teamRecords, jobRecords, deploymentRecords] = await Promise.all([
      this.preferences(),
      sqlclConfig(),
      connections(),
      policy(),
      this.records("teams"),
      this.records("jobs"),
      this.records("deployments")
    ]);
    const teams = teamRecords.map((row) => ({
      id: String(row.id),
      status: String(row.status),
      phase: String(row.phase ?? "unknown"),
      revision: Number(row.revision ?? 0),
      updatedAt: String(row.updatedAt ?? ""),
      members: Array.isArray(row.members) ? row.members.length : 0,
      executionMode: row.executionMode === "single" ? "single" : "team"
    })).map(
      (row) => ["queued", "running"].includes(row.status) && Date.parse(row.updatedAt) + 6e4 < Date.now() ? { ...row, status: "outcome_unknown" } : row
    );
    const chosen = selectedTeam ?? teams.find((t) => ["running", "queued"].includes(t.status))?.id ?? teams[0]?.id;
    const team = ctx && chosen ? await new TeamService(ctx).snapshot(chosen) : null;
    const assignment = ctx && chosen ? await readJson(await contained(this.root, ".apexrest/teams/" + chosen + "/request.json")).catch(
      () => null
    ) : null;
    const jobs = await Promise.all(
      jobRecords.map(async (row) => {
        const state = ctx ? await new JobService(ctx).status(String(row.id)) : row;
        const result = state.result ?? {};
        return {
          id: String(row.id),
          operation: String(row.operation ?? result.operation ?? "operation"),
          status: String(result.status ?? state.status),
          updatedAt: String(state.updatedAt ?? ""),
          summary: String(result.summary ?? "").slice(0, 1e3),
          diagnostics: Array.isArray(result.diagnostics) ? result.diagnostics.slice(0, 5) : [],
          artifacts: Array.isArray(result.artifacts) ? result.artifacts.slice(0, 10) : []
        };
      })
    );
    const deployments = deploymentRecords.map((row) => ({
      id: String(row.id),
      status: String(row.state ?? "unknown"),
      at: String(row.at ?? ""),
      details: JSON.stringify(safe(row.details ?? {})).slice(0, 1200)
    }));
    let changes = { status: "unavailable", files: [] };
    try {
      const git = await runProcess({
        executable: "git",
        args: ["status", "--porcelain=v1", "--untracked-files=normal"],
        cwd: this.root,
        timeoutMs: 3e3
      });
      if (git.code === 0)
        changes = { status: "available", files: git.stdout.split("\n").filter(Boolean).slice(0, 80) };
    } catch {
    }
    let toolchain = null;
    if (ctx) {
      const file = await contained(this.root, ctx.config.toolchain.lockFile);
      if (await exists(file)) {
        if ((await stat(file)).size <= 128e3) toolchain = await readJson(file);
      }
    }
    return safe({
      version: VERSION,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      project: this.root,
      configured: !!ctx,
      trusted: security.trustedProjects.includes(this.root),
      configuration: ctx?.config ?? null,
      sqlcl,
      preferences: prefs,
      connections: refs,
      toolchain,
      teams,
      team,
      task: typeof assignment?.task === "string" ? assignment.task.slice(0, 2e3) : null,
      jobs,
      deployments,
      changes,
      permissions: {
        activeGrants: security.grants.filter((g) => g.projectRoot === this.root && Date.parse(g.expiresAt) > Date.now()).map((g) => ({ operations: g.operations, expiresAt: g.expiresAt, exactPlan: !!g.planDigest }))
      }
    });
  }
  async act(action) {
    action = parse(panelActionSchema, { action }).action;
    this.root = await realpath(this.root);
    await requireTrust(this.root);
    if (action.kind === "preferences") {
      await writeJson(await contained(this.root, ".apexrest/panel/preferences.json"), action.settings);
      return { saved: true, appliesTo: "new-teams" };
    }
    if (action.kind === "sqlcl") {
      return configureSqlcl(action.settings.mode, action.settings.mcpRestrictLevel);
    }
    const ctx = await loadProject(this.root), team = new TeamService(ctx);
    if (action.kind === "start") return team.start({ ...action.request, project: this.root });
    if (action.kind === "browser") return openVerificationBrowser(ctx, action.env);
    if (action.kind === "message") return team.message(action.id, action.message);
    if (action.kind === "cancel-team") return team.cancel(action.id);
    if (action.kind === "cancel-job") return new JobService(ctx).cancel(action.id);
    const operation = action.kind === "validate" ? "apex.validate" : action.kind === "plan" ? "deploy.plan" : "test.run";
    const input = action.kind === "plan" ? { env: action.env, out: ".apexrest/plans/" + randomUUID2() + ".json" } : action.kind === "test" ? { suite: action.suite, ...action.env ? { env: action.env } : {} } : {};
    return new JobService(ctx).start(operation, input, teamRuntime());
  }
};

export {
  panelReadSchema,
  panelActionSchema,
  JobService,
  executeJob,
  PanelService
};
