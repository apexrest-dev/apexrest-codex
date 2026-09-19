import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);
import {
  resolveWorkRequest,
  teamMessageSchema,
  teamStartSchema
} from "./chunk-F762AFRT.mjs";
import {
  external_exports,
  parse,
  requireTrust
} from "./chunk-TM25I7KG.mjs";
import {
  Fault,
  canonical,
  contained,
  exists,
  hash,
  hashFile,
  readJson,
  withLock,
  writeJson
} from "./chunk-MJC6ZMRG.mjs";

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
    const request = await resolveWorkRequest(this.ctx.root, parse(teamStartSchema, input));
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
      executionMode: request.executionMode,
      browserMode: request.browserMode,
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
      executionMode: request.executionMode,
      browserMode: request.browserMode,
      status: "queued",
      nextAction: "Use team status for progress and verification evidence; team message sends task updates; team cancel requests a stop."
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
    const single = state.executionMode === "single";
    if (state.status === "completed" && (single ? state.completedDigest : state.approvedDigest) !== await teamSourceDigest(this.ctx.root)) {
      state.status = single ? "result_stale" : "review_stale";
      state.diagnostics.push(
        single ? "Project files changed after verification. Verify the new source." : "Project files changed after approval. Run the full review cycle for the new source."
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
      verification: (state.verification ?? []).slice(-3).map((v) => ({
        ...v,
        report: {
          ...v.report,
          summary: v.report.summary.slice(0, 400),
          checks: v.report.checks.slice(0, 4).map((c) => ({ ...c, name: c.name.slice(0, 100), evidence: c.evidence.slice(0, 200) }))
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
  teamSourceDigest,
  teamActive,
  teamRuntime,
  TeamService
};
