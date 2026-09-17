import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);
import {
  Fault,
  canonical,
  contained,
  exists,
  external_exports,
  hash,
  hashFile,
  parse,
  readJson,
  requireTrust,
  withLock,
  writeJson
} from "./chunk-2M4WFEIW.mjs";

// packages/core/src/team-schema.ts
var teamStartSchema = external_exports.strictObject({
  project: external_exports.string().optional(),
  task: external_exports.string().trim().min(1).max(16e3),
  developers: external_exports.number().int().min(1).max(3).default(1),
  sandbox: external_exports.enum(["read-only", "workspace-write"]).default("workspace-write"),
  timeoutSeconds: external_exports.number().int().min(30).max(3600).default(900)
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

// packages/core/src/team-source.ts
import path from "node:path";
import { readdir, readlink } from "node:fs/promises";
async function teamSourceDigest(root) {
  const files = {};
  let count = 0;
  const walk = async (relative) => {
    for (const entry of await readdir(path.join(root, relative), { withFileTypes: true })) {
      if ([".git", ".apexrest", "node_modules", ".DS_Store"].includes(entry.name)) continue;
      const name = path.join(relative, entry.name), file = path.join(root, name);
      if (++count > 2e4)
        throw new Fault("TEAM_SOURCE_LIMIT", "The team source inventory exceeds 20000 entries.", 2);
      if (entry.isDirectory()) await walk(name);
      else if (entry.isSymbolicLink()) files[name] = "link:" + await readlink(file);
      else if (entry.isFile()) files[name] = await hashFile(file);
      else throw new Fault("TEAM_SOURCE_TYPE", "The team workspace contains an unsupported special file.", 2);
    }
  };
  await walk("");
  return hash(canonical(files));
}

// packages/core/src/team.ts
import path2 from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { readdir as readdir2 } from "node:fs/promises";
var teamActive = /* @__PURE__ */ new Set(["queued", "running", "cancelling"]);
var teamRuntime = () => path2.join(path2.dirname(fileURLToPath(import.meta.url)), "apexrest.mjs");
var TeamService = class {
  constructor(ctx) {
    this.ctx = ctx;
  }
  ctx;
  async directory(id) {
    parse(external_exports.uuid(), id);
    return contained(this.ctx.root, ".apexrest/teams/" + id);
  }
  async start(input, id = randomUUID()) {
    await requireTrust(this.ctx.root);
    if (process.env.APEXREST_TEAM_WORKER === "1")
      throw new Fault("TEAM_RECURSION", "Team workers cannot create another team.", 2);
    const request = parse(teamStartSchema, input);
    const root = await this.directory(id);
    if (await exists(path2.join(root, "request.json")))
      throw new Fault(
        "TEAM_ALREADY_STARTED",
        "This team request already exists; inspect its status.",
        5,
        "conflict"
      );
    await writeJson(path2.join(root, "request.json"), { ...request, project: this.ctx.root });
    await writeJson(path2.join(root, "state.json"), {
      id,
      status: "queued",
      phase: "queued",
      revision: 0,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      members: [],
      messages: [],
      result: "",
      diagnostics: [],
      reviews: [],
      qa: []
    });
    const worker = spawn(process.execPath, [teamRuntime(), "--team-worker", this.ctx.root, id], {
      cwd: this.ctx.root,
      env: process.env,
      detached: true,
      stdio: "ignore",
      windowsHide: true
    });
    try {
      await new Promise((resolve, reject) => {
        worker.once("spawn", resolve);
        worker.once("error", reject);
      });
      worker.unref();
    } catch {
      const state = await this.status(id);
      await writeJson(path2.join(root, "state.json"), {
        ...state,
        status: "blocked",
        diagnostics: ["Team worker could not start."]
      });
      throw new Fault("TEAM_START_FAILED", "Team worker could not start.", 3, "blocked");
    }
    return {
      teamId: id,
      status: "queued",
      nextAction: "Use team status for progress and reviewed results; team message steers the team; team cancel requests a stop."
    };
  }
  async status(id) {
    const state = await readJson(path2.join(await this.directory(id), "state.json"));
    if (teamActive.has(state.status) && Date.parse(state.updatedAt) + 6e4 < Date.now())
      return {
        ...state,
        status: "outcome_unknown",
        diagnostics: [
          ...state.diagnostics,
          "Worker heartbeat expired. Inspect changes before starting another team."
        ]
      };
    return state;
  }
  async snapshot(id) {
    const state = await this.status(id);
    if (state.status === "completed" && state.approvedDigest !== await teamSourceDigest(this.ctx.root)) {
      state.status = "review_stale";
      state.diagnostics.push(
        "Project files changed after approval. Run the full review cycle for the new source."
      );
    }
    return {
      ...state,
      observations: state.observations?.slice(-8).map((entry) => ({ ...entry, detail: entry.detail.slice(0, 200) })),
      result: state.result.slice(0, 4e3),
      members: state.members.map((m) => ({ ...m, result: m.result.slice(-800) })),
      messages: state.messages.slice(-10).map((m) => ({ ...m, text: m.text.slice(0, 160) })),
      reviews: state.reviews.slice(-6).map((r) => ({
        ...r,
        report: {
          ...r.report,
          summary: r.report.summary.slice(0, 400),
          findings: r.report.findings.slice(0, 3).map((f) => f.slice(0, 200))
        }
      })),
      qa: state.qa.slice(-3).map((q) => ({
        ...q,
        report: {
          ...q.report,
          summary: q.report.summary.slice(0, 400),
          checks: q.report.checks.slice(0, 4).map((c) => ({ ...c, name: c.name.slice(0, 100), evidence: c.evidence.slice(0, 200) }))
        }
      })),
      fullReport: ".apexrest/teams/" + id + "/state.json"
    };
  }
  async message(id, message) {
    await requireTrust(this.ctx.root);
    parse(teamMessageSchema, { id, message });
    const root = await this.directory(id);
    return withLock(path2.join(root, "control.lock"), async () => {
      if (!teamActive.has((await this.status(id)).status))
        throw new Fault("TEAM_FINISHED", "This team has ended; its result remains available.", 5, "conflict");
      const queue = await exists(path2.join(root, "inbox")) ? await readdir2(path2.join(root, "inbox")) : [];
      if (queue.length >= 100)
        throw new Fault("TEAM_MESSAGE_LIMIT", "This team reached its message limit.", 2);
      const messageId = randomUUID();
      await writeJson(await contained(root, "inbox/" + messageId + ".json"), { id: messageId, message });
      return {
        teamId: id,
        messageId,
        status: "queued",
        nextAction: "Team status reports delivery. A task change invalidates earlier approvals."
      };
    });
  }
  async cancel(id) {
    await requireTrust(this.ctx.root);
    const root = await this.directory(id);
    return withLock(path2.join(root, "control.lock"), async () => {
      if (!teamActive.has((await this.status(id)).status)) return this.snapshot(id);
      await writeJson(path2.join(root, "cancel.json"), {
        requestedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
      return { teamId: id, status: "cancellation_requested", rollbackConfirmed: false };
    });
  }
};

export {
  teamStartSchema,
  teamIdSchema,
  workStartSchema,
  teamWaitSchema,
  teamMessageSchema,
  planningSchema,
  routedReviewSchema,
  qaSchema,
  teamSourceDigest,
  teamActive,
  teamRuntime,
  TeamService
};
