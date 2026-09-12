import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);
import {
  Fault,
  OracleAdapter,
  VERSION,
  atomicWrite,
  canonical,
  contained,
  environment,
  exists,
  external_exports,
  failure,
  hash,
  identifier,
  installSources,
  inventory,
  loadProject,
  managedHome,
  parse,
  policy,
  projectInit,
  projectInspect,
  readJson,
  redact,
  refName,
  relativePath,
  requireTrust,
  resourceRoot,
  runProcess,
  runtimeState,
  sqlLiteral,
  sqlclToken,
  success,
  withLock,
  writeJson
} from "./chunk-3V2P7PPB.mjs";

// packages/core/src/metadata.ts
var metadataRequest = external_exports.strictObject({
  kind: external_exports.enum(["objects", "columns", "constraints", "signatures", "applications", "pages"]),
  schema: identifier,
  name: identifier.optional(),
  offset: external_exports.number().int().min(0).max(1e5).default(0),
  limit: external_exports.number().int().min(1).max(100).default(30)
});
var queries = {
  objects: "select object_name, object_type from all_objects where owner=:p_owner and object_type in ('TABLE','VIEW','PACKAGE') and (:p_name is null or object_name=:p_name) order by object_name, object_type",
  columns: "select table_name,column_name,data_type,nullable,column_id from all_tab_columns where owner=:p_owner and table_name=:p_name order by column_id",
  constraints: "select table_name,constraint_name,constraint_type,r_owner,r_constraint_name,status from all_constraints where owner=:p_owner and table_name=:p_name order by constraint_name",
  signatures: "select package_name,object_name,argument_name,position,in_out,data_type,overload from all_arguments where owner=:p_owner and package_name=:p_name order by object_name,overload,sequence",
  applications: "select application_id,application_name,alias from apex_applications where owner=:p_owner and application_id=:p_app_id order by application_id",
  pages: "select application_id,page_id,page_name,page_alias from apex_application_pages where application_id=:p_app_id and workspace=:p_workspace order by page_id"
};
async function metadataRead(adapter, env2, connection, value) {
  const r = parse(metadataRequest, value);
  if (r.schema !== env2.parsingSchema)
    throw new Fault("SCHEMA_DENIED", "Metadata is restricted to the configured parsing schema.", 4);
  if (["columns", "constraints", "signatures"].includes(r.kind) && !r.name)
    throw new Fault("OBJECT_REQUIRED", "Select a specific object first.", 2);
  await adapter.verifyTarget(env2, connection);
  const rows = await adapter.jsonQuery(
    queries[r.kind] + " offset :p_offset rows fetch next :p_limit rows only",
    connection,
    {
      p_owner: r.schema,
      p_name: r.name ?? "",
      p_app_id: env2.applicationId,
      p_workspace: env2.workspace,
      p_offset: r.offset,
      p_limit: r.limit
    }
  );
  return {
    dataClassification: "untrusted_database_content",
    rows,
    offset: r.offset,
    nextOffset: rows.length === r.limit ? r.offset + r.limit : null
  };
}

// packages/core/src/operations.ts
var project = external_exports.string().min(1).max(4096).optional();
var env = refName;
var base = { project };
var setup = {
  ...base,
  from: external_exports.string().optional(),
  home: external_exports.string().optional(),
  codexHome: external_exports.string().optional(),
  scope: external_exports.enum(["user", "project"]).default("user"),
  version: external_exports.string().optional(),
  yes: external_exports.boolean().default(false),
  nonInteractive: external_exports.boolean().default(false),
  offline: external_exports.boolean().default(false),
  cacheDir: external_exports.string().optional(),
  dryRun: external_exports.boolean().default(false),
  acceptOracleLicense: external_exports.boolean().default(false),
  skipBrowser: external_exports.boolean().default(false),
  installOsDeps: external_exports.boolean().default(false),
  nativeOnly: external_exports.boolean().default(false)
};
var schemas = {
  version: external_exports.strictObject({}),
  doctor: external_exports.strictObject(base),
  setup: external_exports.strictObject(setup),
  "plugin.validate": external_exports.strictObject({ ...base, from: external_exports.string().optional() }),
  "plugin.install": external_exports.strictObject(setup),
  "plugin.update": external_exports.strictObject({ ...setup, version: external_exports.string().min(1) }),
  "plugin.uninstall": external_exports.strictObject({
    ...base,
    home: external_exports.string().optional(),
    keepRuntime: external_exports.boolean().default(false)
  }),
  "project.init": external_exports.strictObject({
    ...base,
    directory: external_exports.string().min(1),
    template: external_exports.enum(["blank-app", "customer-crm", "existing-app"]).default("blank-app"),
    alias: refName.optional()
  }),
  "project.adopt": external_exports.strictObject({ ...base, env, appId: external_exports.number().int().positive() }),
  "project.inspect": external_exports.strictObject(base),
  "connection.add": external_exports.strictObject({ ...base, name: refName, sqlclName: refName }),
  "connection.list": external_exports.strictObject(base),
  "connection.test": external_exports.strictObject({ ...base, name: refName }),
  "connection.remove": external_exports.strictObject({ ...base, name: refName }),
  "docs.search": external_exports.strictObject({
    query: external_exports.string().min(1).max(256),
    version: external_exports.string().optional(),
    kind: external_exports.enum(["grammar", "template", "contract", "guide"]).optional(),
    family: external_exports.string().min(1).max(200).optional(),
    offset: external_exports.number().int().min(0).max(1e4).default(0),
    limit: external_exports.number().int().min(1).max(8).default(8)
  }),
  "docs.read": external_exports.strictObject({
    id: external_exports.string().max(200),
    offset: external_exports.number().int().min(0).default(0),
    limit: external_exports.number().int().min(1).max(8192).default(4096)
  }),
  "docs.sync": external_exports.strictObject({ version: external_exports.string().min(1), dryRun: external_exports.boolean().default(false) }),
  "metadata.read": metadataRequest.extend({ ...base, env }).strict(),
  "apex.generate": external_exports.strictObject({
    ...base,
    name: external_exports.string().min(1).max(120),
    output: relativePath,
    alias: refName.optional()
  }),
  "apex.export": external_exports.strictObject({ ...base, env, output: relativePath }),
  "apex.validate": external_exports.strictObject({ ...base, env: env.optional() }),
  "apex.diff": external_exports.strictObject({ ...base, env }),
  "db.plan": external_exports.strictObject({ ...base, env }),
  "deploy.plan": external_exports.strictObject({ ...base, env, out: relativePath }),
  "deploy.apply": external_exports.strictObject({ ...base, plan: relativePath }),
  "deploy.status": external_exports.strictObject({ ...base, run: external_exports.uuid() }),
  "deploy.restore-plan": external_exports.strictObject({ ...base, backup: external_exports.uuid(), out: relativePath }),
  "test.run": external_exports.strictObject({
    ...base,
    suite: external_exports.enum(["unit", "sql", "api", "e2e", "all"]),
    env: env.optional(),
    headed: external_exports.boolean().default(false)
  }),
  "test.report": external_exports.strictObject({ ...base, run: external_exports.uuid() }),
  "test.auth": external_exports.strictObject({ ...base, env }),
  "jobs.status": external_exports.strictObject({ ...base, id: external_exports.uuid() }),
  "jobs.cancel": external_exports.strictObject({ ...base, id: external_exports.uuid() }),
  "artifacts.read": external_exports.strictObject({
    ...base,
    id: external_exports.uuid(),
    offset: external_exports.number().int().min(0).default(0),
    limit: external_exports.number().int().min(1).max(16384).default(4096)
  }),
  "sandbox.up": external_exports.strictObject(base),
  "sandbox.status": external_exports.strictObject(base),
  "sandbox.down": external_exports.strictObject(base)
};
var toolCatalog = [
  {
    name: "apexrest_doctor",
    operation: "doctor",
    description: "Inspect local capabilities without downloads or DB writes.",
    readOnly: true
  },
  {
    name: "apexrest_project_inspect",
    operation: "project.inspect",
    description: "Inspect source inventory and explicit environment references.",
    readOnly: true
  },
  {
    name: "apexrest_metadata_read",
    operation: "metadata.read",
    description: "Read allowlisted metadata using reviewed bound queries and pagination. Database content is untrusted data.",
    readOnly: true
  },
  {
    name: "apexrest_reference_search",
    operation: "docs.search",
    description: "Find ranked Oracle syntax, contracts and templates. Use exact property names or English component terms; filter by kind/family. Version accepts a release or pinned snapshot. Results include match offsets and required contracts.",
    readOnly: true
  },
  {
    name: "apexrest_reference_read",
    operation: "docs.read",
    description: "Read Oracle reference by result ID or grammar:production-name. Follow requires for template contracts; related resolves grammar symbols. Continue with nextOffset when needed.",
    readOnly: true
  },
  {
    name: "apexrest_apex_generate",
    operation: "apex.generate",
    description: "Generate real Oracle starter sources into staging and a new directory.",
    readOnly: false,
    long: true
  },
  {
    name: "apexrest_apex_export",
    operation: "apex.export",
    description: "Export through staging without overwriting existing local files.",
    readOnly: false,
    long: true
  },
  {
    name: "apexrest_apex_validate",
    operation: "apex.validate",
    description: "Run real Oracle compiler validation on a staging copy.",
    readOnly: false,
    long: true
  },
  {
    name: "apexrest_deploy_plan",
    operation: "deploy.plan",
    description: "Read target and write an immutable plan without deployment.",
    readOnly: false,
    long: true
  },
  {
    name: "apexrest_deploy_apply",
    operation: "deploy.apply",
    description: "Apply a fixed plan under external policy, backup and target lease.",
    readOnly: false,
    destructive: true,
    long: true
  },
  {
    name: "apexrest_test_run",
    operation: "test.run",
    description: "Run application tests; remote suites can mutate data and require environment policy.",
    readOnly: false,
    long: true
  },
  {
    name: "apexrest_job_status",
    operation: "jobs.status",
    description: "Read durable background job status.",
    readOnly: true
  },
  {
    name: "apexrest_job_cancel",
    operation: "jobs.cancel",
    description: "Request cancellation; database outcome may remain unknown.",
    readOnly: false
  },
  {
    name: "apexrest_artifact_read",
    operation: "artifacts.read",
    description: "Read registered sanitized text by opaque ID and bounded range.",
    readOnly: true
  }
];

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

// packages/core/src/service.ts
import path9 from "node:path";

// packages/core/src/doctor.ts
import path2 from "node:path";
async function doctor() {
  const state = await runtimeState();
  const java = process.env.APEXREST_JAVA_HOME ? path2.join(process.env.APEXREST_JAVA_HOME, "bin", process.platform === "win32" ? "java.exe" : "java") : state.java ?? "java";
  const probes = await Promise.all(
    [
      ["codex", ["--version"]],
      [process.env.APEXREST_SQLCL ?? state.sqlcl ?? "sql", ["-version"]],
      [java, ["-version"]]
    ].map(async ([exe, args]) => {
      try {
        const r = await runProcess({
          executable: exe,
          args,
          cwd: process.env.TMPDIR ?? process.cwd(),
          timeoutMs: 1e4,
          env: {
            ...process.env,
            JAVA_HOME: path2.isAbsolute(java) ? path2.dirname(path2.dirname(java)) : process.env.JAVA_HOME
          }
        });
        return {
          command: exe,
          state: r.code === 0 ? "detected" : "unavailable",
          version: (r.stdout + r.stderr).trim().slice(0, 500)
        };
      } catch {
        return { command: exe, state: "missing" };
      }
    })
  );
  return {
    platform: process.platform,
    architecture: process.arch,
    runtime: {
      executable: process.execPath,
      version: process.version,
      baseline: process.versions.node.split(".")[0] === "24"
    },
    managedComponents: state.components,
    probes,
    database: "not-configured",
    nativeHost: "requires-host-verification",
    telemetry: false
  };
}

// packages/core/src/references.ts
import path3 from "node:path";
import { stat, readFile } from "node:fs/promises";

// packages/core/src/reference-index.ts
var referenceWords = (text) => text.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [];
var normalizeReference = (text) => referenceWords(text).join(" ");
function buildReferencePostings(entries) {
  const postings = /* @__PURE__ */ Object.create(null);
  entries.forEach((entry, position) => {
    for (const word of new Set(referenceWords(entry.id + " " + (entry.title ?? "") + " " + entry.text)))
      (postings[word] ??= []).push(position);
  });
  return postings;
}

// packages/core/src/references.ts
var references = [
  {
    id: "apexlang-lifecycle",
    version: "26.1",
    source: "https://docs.oracle.com/en/database/oracle/sql-developer-command-line/26.1/sqcug/apexlang.html",
    text: 'Generate starter files using apex generate -name "Name" -dir ./fresh. Validate with apex validate -input ./application. Export requires a connection and always uses fresh staging. Import deploys the full application and requires a reviewed plan. Preserve .apex/apexlang.json and its compiler metadata.'
  },
  {
    id: "deployment-safety",
    version: "0.1.0-beta.1",
    source: "docs/adr/007-clean-apex-deployment.md",
    text: "Use an explicit environment. Plans bind source hashes and target identity. Recheck drift, acquire local coordination by default and create an export backup before writes. Clean APEX deployment needs no service tables. Local runners must share one managed home; independent machines need external serialization or explicitly selected database coordination. DDL cannot be generally rolled back. Interrupted writes require reconciliation. Production requires an external approval boundary."
  }
];
var stopwords = /* @__PURE__ */ new Set(["a", "an", "the", "for", "with", "and", "of", "to", "in"]);
var termsFor = (text) => [...new Set(referenceWords(text).filter((word) => !stopwords.has(word)))];
function versionMatches(actual, requested) {
  if (!requested) return true;
  return actual === requested || !requested.includes("@") && actual.split("@")[0] === requested;
}
function indexReferences(upstream, file, digest) {
  const entries = [...references, ...upstream];
  const byId = /* @__PURE__ */ new Map();
  const bySymbol = /* @__PURE__ */ new Map();
  const searchable = entries.map((reference) => {
    if (!byId.has(reference.id)) byId.set(reference.id, reference);
    const symbol = reference.text.match(/^<([^>\n]+)>\s*::=/)?.[1];
    if (symbol) bySymbol.set(symbol, reference.id);
    const title = reference.title ?? symbol ?? reference.id;
    return { reference, title, titleText: normalizeReference(title) };
  });
  let pendingPostings;
  const postings = () => pendingPostings ??= (async () => {
    if (file) {
      try {
        const prebuilt = await readJson(path3.join(path3.dirname(file), "search.json"));
        if (prebuilt && prebuilt.schemaVersion === 1 && prebuilt.indexSha256 === digest && prebuilt.postings && Object.values(prebuilt.postings).every(
          (list) => Array.isArray(list) && list.every(
            (n) => Number.isInteger(n) && Number(n) >= 0 && Number(n) < upstream.length
          )
        )) {
          const result = buildReferencePostings(references);
          for (const [term, list] of Object.entries(prebuilt.postings))
            result[term] = [
              ...result[term] ?? [],
              ...list.map((position) => position + references.length)
            ];
          return result;
        }
      } catch {
      }
    }
    return buildReferencePostings(entries);
  })();
  return { upstream, byId, bySymbol, searchable, postings, queries: /* @__PURE__ */ new Map() };
}
var cached;
async function referenceIndex() {
  const file = path3.join(resourceRoot(), "references/index.json");
  let info;
  try {
    info = await stat(file, { bigint: true });
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    cached = void 0;
    return indexReferences([]);
  }
  const stamp = `${info.dev}:${info.ino}:${info.size}:${info.mtimeNs}:${info.ctimeNs}`;
  if (cached?.file === file && cached.stamp === stamp) return cached.pending;
  const pending = readFile(file, "utf8").then(
    (raw) => indexReferences(JSON.parse(raw), file, hash(raw))
  );
  cached = { file, stamp, pending };
  try {
    return await pending;
  } catch (error) {
    if (cached?.pending === pending) cached = void 0;
    throw error;
  }
}
function snippet(text, query, terms) {
  const lower = text.toLowerCase();
  let matchOffset = lower.indexOf(query.trim().toLowerCase());
  if (matchOffset < 0) {
    const pattern = referenceWords(query).join("[\\s._:-]*");
    if (pattern) matchOffset = lower.search(new RegExp(pattern, "u"));
  }
  if (matchOffset < 0) {
    const locations = terms.map((term) => lower.indexOf(term)).filter((offset2) => offset2 >= 0);
    matchOffset = locations.length ? Math.min(...locations) : -1;
  }
  const offset = Math.max(0, Math.min(matchOffset - 160, text.length - 1200));
  return {
    text: text.slice(offset, offset + 1200),
    offset,
    matchOffset: matchOffset < 0 ? null : matchOffset,
    length: text.length,
    nextOffset: offset + 1200 < text.length ? offset + 1200 : null
  };
}
async function referenceSearch(query, version, options = {}) {
  const index = await referenceIndex();
  const normalized = normalizeReference(query);
  const terms = termsFor(query);
  if (!terms.length) return [];
  const key = JSON.stringify([query.trim(), version, options.kind, options.family]);
  let ranked = index.queries.get(key);
  if (!ranked) {
    const postings = await index.postings();
    const lists = terms.map((term) => postings[term] ?? []).sort((a, b) => a.length - b.length);
    const membership = lists.slice(1).map((list) => new Set(list));
    const candidates = (lists[0] ?? []).filter((position) => membership.every((list) => list.has(position)));
    const exactId = index.byId.get(query) ?? index.byId.get(index.bySymbol.get(query.replace(/^grammar:/, "")) ?? "");
    if (exactId) {
      const position = index.searchable.findIndex(({ reference }) => reference === exactId);
      if (!candidates.includes(position)) candidates.push(position);
    }
    ranked = candidates.filter((position) => {
      const r = index.searchable[position].reference;
      return versionMatches(r.version, version) && (!options.kind || r.kind === options.kind) && (!options.family || r.family === options.family || r.family?.startsWith(options.family + "/"));
    }).map((position) => {
      const { reference, titleText } = index.searchable[position];
      const exact = reference === exactId;
      const titleTerms = termsFor(titleText);
      const bodyText = normalizeReference(reference.text);
      const adjacentHits = terms.slice(1).filter((term, i) => bodyText.includes(terms[i] + " " + term)).length;
      const titleHits = terms.filter((term) => titleTerms.includes(term)).length;
      const score = (exact ? 1e4 : 0) + (titleText === normalized ? 2e3 : 0) + (titleText.includes(normalized) ? 400 : 0) + titleHits * 50 + (titleHits === terms.length ? 200 : 0) + (bodyText.includes(normalized) ? 40 : 0) + adjacentHits * 60 + (reference.text.includes('"' + query.trim() + '"') ? 80 : 0) + (reference.kind === "contract" ? 5 : 0) + 1 / (1 + reference.text.length / 1e3);
      return { position, score };
    }).sort((a, b) => b.score - a.score || a.position - b.position).map(({ position }) => position);
    if (index.queries.size >= 64) index.queries.delete(index.queries.keys().next().value);
    index.queries.set(key, ranked);
  }
  const offset = options.offset ?? 0;
  return ranked.slice(offset, offset + (options.limit ?? 8)).map((position) => {
    const { reference: r, title } = index.searchable[position];
    return {
      id: r.id,
      title,
      version: r.version,
      source: r.source,
      kind: r.kind ?? "guide",
      family: r.family ?? "workflow",
      ...snippet(r.text, query, terms),
      requires: r.requires ?? [],
      totalMatches: ranked.length,
      nextResultOffset: offset + (options.limit ?? 8) < ranked.length ? offset + (options.limit ?? 8) : null
    };
  });
}
async function referenceRead(id, offset, limit) {
  const index = await referenceIndex();
  const item = index.byId.get(id) ?? index.byId.get(index.bySymbol.get(id.replace(/^grammar:/, "")) ?? "");
  if (!item)
    throw new Fault("REFERENCE_NOT_FOUND", "No registered reference with this ID or grammar symbol.", 2);
  const content = item.text.slice(offset, offset + limit);
  const symbols = [...content.matchAll(/<([^>\n]+)>/g)].map((match) => index.bySymbol.get(match[1]));
  const related = [
    ...new Set(
      [...item.related ?? [], ...symbols].filter(
        (target) => Boolean(target) && target !== item.id
      )
    )
  ];
  return {
    id: item.id,
    title: item.title ?? item.id,
    version: item.version,
    source: item.source,
    content,
    offset,
    length: item.text.length,
    nextOffset: offset + limit < item.text.length ? offset + limit : null,
    requires: item.requires ?? [],
    related: related.slice(0, 16),
    relatedCount: related.length,
    classification: "vendor-reference-data"
  };
}
async function referenceSync(version, dryRun) {
  const entries = (await referenceIndex()).upstream.filter((r) => versionMatches(r.version, version));
  if (!entries.length)
    throw new Fault(
      "REFERENCE_VERSION_UNAVAILABLE",
      "Requested version is not in this reviewed release snapshot. Install a reviewed release containing it.",
      3
    );
  const destination = path3.join(managedHome(), "references", version + ".json");
  const before = await exists(destination) ? hash(canonical(await readJson(destination))) : null, after = hash(canonical(entries));
  if (!dryRun && before !== after) await writeJson(destination, entries);
  return {
    status: dryRun ? "planned" : before === after ? "unchanged" : "synced",
    version,
    before,
    after,
    count: entries.length
  };
}

// packages/core/src/connections.ts
import path4 from "node:path";
var connectionSchema = external_exports.strictObject({ kind: external_exports.literal("sqlcl-store"), name: refName });
var storeSchema = external_exports.record(refName, connectionSchema);
async function connections() {
  const file = path4.join(managedHome(), "connections.json");
  return await exists(file) ? parse(storeSchema, await readJson(file)) : {};
}
async function resolveConnection(name) {
  const connection = (await connections())[name];
  if (!connection)
    throw new Fault(
      "CONNECTION_REQUIRED",
      "Configure the requested SQLcl connection reference locally; do not send credentials in chat.",
      3,
      "blocked"
    );
  return connection;
}
async function editConnection(name, value) {
  parse(refName, name);
  return withLock(path4.join(managedHome(), "connections.lock"), async () => {
    const current = await connections();
    if (value) current[name] = parse(connectionSchema, value);
    else delete current[name];
    await writeJson(path4.join(managedHome(), "connections.json"), current);
    return { name, status: value ? "configured" : "removed", credentialsDeleted: false };
  });
}

// packages/core/src/deploy.ts
import path6 from "node:path";
import { readFile as readFile2, mkdir, cp, open } from "node:fs/promises";
import { randomUUID as randomUUID2, verify } from "node:crypto";

// packages/core/src/deployment-control.ts
import path5 from "node:path";
import { hostname } from "node:os";
import { rm } from "node:fs/promises";
function coordination(env2) {
  const backend = env2.deploymentControl ?? "local";
  return {
    backend,
    scope: backend === "local" ? "managed-home-schema" : "database-application",
    // Bind plans to the history store. Moving a plan to a fresh home is not migration recovery.
    storeDigest: hash(
      canonical(
        backend === "local" ? { home: managedHome(), ...env2.databaseIdentity, schema: env2.parsingSchema } : { ...env2.databaseIdentity, schema: env2.parsingSchema }
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
  constructor(env2) {
    const key = hash(canonical({ ...env2.databaseIdentity, schema: env2.parsingSchema }));
    this.directory = path5.join(managedHome(), "deployment-control", key);
  }
  file(name) {
    return path5.join(this.directory, name);
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
      await rm(this.file("active.json"));
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
function targetDigest(env2) {
  return hash(
    canonical({
      ...env2.databaseIdentity,
      workspace: env2.workspace,
      schema: env2.parsingSchema,
      applicationId: env2.applicationId
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
async function authorizePlan(ctx, plan, env2) {
  await requireTrust(ctx.root);
  if (plan.risks.some((r) => r !== "application-restore"))
    throw new Fault(
      "RECOVERY_REVIEW_REQUIRED",
      "Destructive, authentication or unsupported changes need an explicit recovery implementation and reviewed external workflow.",
      4,
      "blocked"
    );
  if (env2.kind === "production") {
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
    if (await exists(path6.join(ctx.root, relative)))
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
  async history(env2, connection) {
    if (coordination(env2).backend === "local") return new LocalDeploymentControl(env2).history();
    return this.oracle.jsonQuery(
      "select version,checksum,status,run_id from apexrest_migrations order by version",
      connection
    );
  }
  async fingerprint(env2, connection) {
    const target = await this.oracle.verifyTarget(env2, connection);
    const history = await this.history(env2, connection);
    const exported = target.application ? await this.oracle.exportApplication(env2, connection, "APEXLANG") : null;
    return {
      target,
      history,
      exported,
      fingerprint: hash(canonical({ target, history, exportDigest: exported?.digest ?? null }))
    };
  }
  async plan(ctx, name) {
    await requireTrust(ctx.root);
    const env2 = environment(ctx, name), connection = await resolveConnection(env2.readConnectionRef);
    const [targetCheck, sourceCheck] = await Promise.allSettled([
      this.fingerprint(env2, connection),
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
        const version = path6.basename(file);
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
      targetDigest: targetDigest(env2),
      target: current.target,
      fingerprint: current.fingerprint,
      migrationHistory: current.history,
      coordination: coordination(env2),
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
    const plan = parse(deployPlanSchema, value), env2 = environment(ctx, plan.environment);
    if (plan.sourceDigest !== hash(canonical(plan.sources)) || plan.digest !== planDigest(plan))
      throw new Fault("PLAN_TAMPERED", "Plan digest verification failed.", 5);
    if (plan.projectId !== ctx.config.projectId || plan.projectRoot !== ctx.root || plan.targetDigest !== targetDigest(env2))
      throw new Fault("PLAN_TARGET_MISMATCH", "Plan project or target differs from the current request.", 5);
    if (Date.parse(plan.expiresAt) <= Date.now())
      throw new Fault("PLAN_EXPIRED", "Create and review a new plan.", 5);
    if (plan.sourceDigest !== hash(canonical(await sourceInventory(ctx))) || plan.configurationDigest !== hash(canonical(ctx.config)) || plan.toolchainDigest !== hash(await readFile2(await contained(ctx.root, ctx.config.toolchain.lockFile))))
      throw new Fault("SOURCE_DRIFT", "Sources, configuration or toolchain lock changed after review.", 5);
    if (plan.backupRequired !== Boolean(plan.target.application))
      throw new Fault("PLAN_TAMPERED", "Backup requirement does not match reviewed target.", 5);
    if (canonical(plan.coordination) !== canonical(coordination(env2)))
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
        const previous = history.get(path6.basename(file));
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
    return { plan, env: env2 };
  }
  async lease(env2, connection, runId, acquire) {
    if (coordination(env2).backend === "local") {
      const control = new LocalDeploymentControl(env2);
      if (acquire) await control.acquire(runId);
      else await control.assertOwner(runId);
      return;
    }
    const key = sqlLiteral(targetDigest(env2)), owner = sqlLiteral(runId);
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
    const { plan, env: env2 } = await this.checkLocal(ctx, value);
    await authorizePlan(ctx, plan, env2);
    const readConnection = await resolveConnection(env2.readConnectionRef), deployConnection = await resolveConnection(env2.deployConnectionRef);
    const [deployTargetCheck, fingerprintCheck, capabilityCheck] = await Promise.allSettled([
      this.oracle.verifyTarget(env2, deployConnection),
      this.fingerprint(env2, readConnection),
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
    const runId = randomUUID2(), runs = path6.join(ctx.root, ".apexrest/deployments"), runDir = path6.join(runs, runId);
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
      const journal = await open(path6.join(runDir, "journal.jsonl"), "a", 384);
      try {
        await journal.writeFile(JSON.stringify(event) + "\n");
        await journal.sync();
      } finally {
        await journal.close();
      }
      await writeJson(path6.join(runDir, "state.json"), event);
    };
    await writeJson(path6.join(runDir, "plan.json"), plan);
    await record("approved");
    await this.lease(env2, deployConnection, runId, true);
    let renewing = false, leaseLost = false;
    const heartbeat = coordination(env2).backend === "database" ? setInterval(() => {
      if (renewing) return;
      renewing = true;
      void this.lease(env2, deployConnection, runId, false).catch(() => {
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
        const backup = await this.oracle.exportApplication(env2, readConnection, "SQL");
        const backupId = randomUUID2(), directory = path6.join(ctx.root, ".apexrest/backups", backupId);
        await mkdir(directory, { recursive: true, mode: 448 });
        await cp(backup.directory, path6.join(directory, "application"), { recursive: true });
        const files = await inventory(path6.join(directory, "application"));
        if (!Object.keys(files).length || hash(canonical(files)) !== backup.digest)
          throw new Fault("BACKUP_INVALID", "Backup copy failed checksum verification.", 1);
        await writeJson(path6.join(directory, "backup.json"), {
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
      if ((await this.fingerprint(env2, readConnection)).fingerprint !== plan.fingerprint)
        throw new Fault("TARGET_DRIFT", "Target changed during backup.", 5);
      const snapshot = path6.join(runDir, "snapshot");
      await mkdir(snapshot);
      for (const [file, sha] of Object.entries(plan.sources)) {
        const source = await contained(ctx.root, file), destination = await contained(snapshot, file);
        await mkdir(path6.dirname(destination), { recursive: true });
        await cp(source, destination);
        if (hash(await readFile2(destination)) !== sha)
          throw new Fault("SOURCE_DRIFT", "Source changed while freezing deployment.", 5);
      }
      if (controller.signal.aborted)
        throw new Fault("CANCELLED", "Deployment cancelled before writes.", 6, "cancelled");
      await record("migrating");
      if (coordination(env2).backend === "local") await new LocalDeploymentControl(env2).markWriting(runId);
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
        await this.lease(env2, deployConnection, runId, false);
        const file = await contained(snapshot, operation.file);
        const version = sqlLiteral(path6.basename(file));
        if (operation.kind === "migration") {
          if (coordination(env2).backend === "local")
            await new LocalDeploymentControl(env2).migration(
              runId,
              path6.basename(file),
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
          if (coordination(env2).backend === "local")
            await new LocalDeploymentControl(env2).migration(
              runId,
              path6.basename(file),
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
      await this.lease(env2, deployConnection, runId, false);
      await this.oracle.verifyTarget(env2, deployConnection);
      writeStarted = true;
      if (plan.restore) {
        const backupRoot = await contained(
          ctx.root,
          ".apexrest/backups/" + plan.restore.backupId + "/application"
        );
        if (hash(canonical(await inventory(backupRoot))) !== plan.restore.checksum)
          throw new Fault("BACKUP_INVALID", "Restore source changed after approval.", 5);
        const frozen = path6.join(runDir, "restore");
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
        await this.oracle.session(
          `begin
 apex_application_install.set_workspace(${sqlLiteral(env2.workspace)});
 apex_application_install.set_schema(${sqlLiteral(env2.parsingSchema)});
 apex_application_install.set_application_id(${env2.applicationId});
end;
/
@${sqlclToken(path6.join(frozen, main[0]))}`,
          deployConnection,
          true,
          controller.signal
        );
      } else
        await this.oracle.importApplication(
          ctx,
          env2,
          deployConnection,
          path6.join(snapshot, ctx.config.application.sourceDir),
          controller.signal
        );
      await record("verifying");
      const target = await this.oracle.verifyTarget(env2, readConnection);
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
        if (coordination(env2).backend === "local")
          await new LocalDeploymentControl(env2).release(runId).catch(() => {
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
    const plan = parse(deployPlanSchema, await readJson(path6.join(directory, "plan.json"))), env2 = environment(ctx, plan.environment);
    const current = await this.fingerprint(env2, await resolveConnection(env2.readConnectionRef));
    const state = await readJson(path6.join(directory, "state.json"));
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
    const backup = await readJson(path6.join(directory, "backup.json"));
    const files = await inventory(path6.join(directory, "application"));
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
import path8 from "node:path";
import { spawn as spawn2 } from "node:child_process";
import { mkdir as mkdir2, readFile as readFile4, cp as cp2, chmod } from "node:fs/promises";
import { randomUUID as randomUUID4 } from "node:crypto";

// packages/core/src/artifacts.ts
import path7 from "node:path";
import { randomUUID as randomUUID3 } from "node:crypto";
import { readFile as readFile3, readdir, rm as rm2 } from "node:fs/promises";
var ArtifactService = class {
  constructor(ctx) {
    this.ctx = ctx;
  }
  ctx;
  async save(content, kind) {
    const id = randomUUID3(), directory = await contained(this.ctx.root, this.ctx.config.artifacts.directory);
    const sanitized = redact(content);
    await atomicWrite(path7.join(directory, id + ".txt"), sanitized);
    await writeJson(path7.join(directory, id + ".json"), {
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
    const content = await readFile3(await contained(directory, id + ".txt"), "utf8");
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
        const metadata = await readJson(path7.join(directory, file));
        if (Date.parse(metadata.expiresAt) < Date.now()) {
          await rm2(path7.join(directory, file));
          await rm2(path7.join(directory, file.replace(".json", ".txt")), { force: true });
          removed++;
        }
      }
    return { removed };
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
    const env2 = environment(ctx, name);
    if (env2.kind === "production" || !ctx.config.tests.mutationAllowedEnvironments.includes(name))
      throw new Fault(
        "TEST_MUTATION_DENIED",
        "Remote tests require a non-production environment explicitly allowed for mutations.",
        4,
        "blocked"
      );
    if (!(await policy()).grants.some(
      (g) => g.projectRoot === ctx.root && g.targetDigest === targetDigest(env2) && g.operations.includes("test") && Date.parse(g.expiresAt) > Date.now()
    ))
      throw new Fault(
        "TEST_APPROVAL_REQUIRED",
        "User-owned policy must authorize tests for this exact target.",
        4,
        "blocked"
      );
    allowedOrigin(env2.baseUrl, [new URL(env2.baseUrl).origin, ...env2.allowedOrigins]);
    return env2;
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
            ...tests.map((f) => path8.join(dir, f))
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
      const env2 = await this.authorize(ctx, envName);
      if (suite === "sql") {
        const connection = await resolveConnection(env2.deployConnectionRef);
        await this.oracle.verifyTarget(env2, connection);
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
 ut.run(${sqlLiteral(env2.parsingSchema)}, ut_junit_reporter());
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
      const runId = randomUUID4(), runnerRoot = path8.resolve(state.playwright, "../../../.."), run = path8.join(runnerRoot, "runs", runId);
      await mkdir2(run, { recursive: true, mode: 448 });
      await cp2(dir, path8.join(run, "tests"), { recursive: true });
      await cp2(path8.join(resourceRoot(), "testkit"), path8.join(run, "testkit"), { recursive: true });
      const auth = path8.join(ctx.root, ".apexrest/auth", envName, "state.json"), authMeta = auth + ".meta.json";
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
        path8.join(run, "playwright.config.mjs"),
        `export default ${JSON.stringify({ testDir: "./tests", forbidOnly: true, retries: 0, timeout: 3e4, workers: 1, reporter: [["json", { outputFile: path8.join(run, "report.json") }]], use: { baseURL: env2.baseUrl, browserName: "chromium", serviceWorkers: "block", trace: "off", screenshot: "off", video: "off", ...suite === "e2e" ? { storageState: auth } : {} } })};
`
      );
      const result = await runProcess({
        executable: state.node,
        args: [
          state.playwright,
          "test",
          "--config",
          path8.join(run, "playwright.config.mjs"),
          ...headed ? ["--headed"] : []
        ],
        cwd: run,
        env: {
          ...process.env,
          PLAYWRIGHT_BROWSERS_PATH: path8.join(managedHome(), "browsers"),
          APEXREST_ALLOWED_ORIGINS: JSON.stringify([new URL(env2.baseUrl).origin, ...env2.allowedOrigins]),
          APEXREST_EXPECTED_MARKER: env2.expectedMarker ?? ""
        },
        timeoutMs: 3e5,
        ...signal ? { signal } : {}
      });
      const reportFile = path8.join(run, "report.json");
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
      const artifactId = await artifacts.save(await readFile4(reportFile, "utf8"), "playwright-report");
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
    const runId = randomUUID4(), ok = qualityGate(results, ctx.config.tests.requiredSuites);
    const report = {
      runId,
      ok,
      environment: name,
      results,
      required: ctx.config.tests.requiredSuites,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    await writeJson(path8.join(ctx.root, ".apexrest/test-runs", runId + ".json"), report);
    return { ok, data: report };
  }
  async auth(ctx, name) {
    const env2 = await this.authorize(ctx, name), state = await runtimeState();
    if (!state.playwright || !state.node)
      throw new Fault("SETUP_REQUIRED", "Install Playwright through setup first.", 3);
    if (!process.stdin.isTTY)
      throw new Fault(
        "INTERACTIVE_LOGIN_REQUIRED",
        "Run test auth in a local interactive terminal. Do not send passwords to Codex.",
        4
      );
    const destination = path8.join(ctx.root, ".apexrest/auth", name, "state.json");
    await mkdir2(path8.dirname(destination), { recursive: true, mode: 448 });
    const helper = path8.join(path8.resolve(state.playwright, "../../../.."), "auth.mjs");
    await cp2(path8.join(resourceRoot(), "playwright/auth.mjs"), helper);
    const code = await new Promise((resolve, reject) => {
      const child = spawn2(
        state.node,
        [
          helper,
          destination,
          env2.baseUrl,
          JSON.stringify([new URL(env2.baseUrl).origin, ...env2.allowedOrigins])
        ],
        {
          cwd: ctx.root,
          env: { ...process.env, PLAYWRIGHT_BROWSERS_PATH: path8.join(managedHome(), "browsers") },
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
      origin: new URL(env2.baseUrl).origin
    });
    return { state: "stored", expiresInHours: 8, authentication: "verified-by-required-E2E-marker" };
  }
};

// packages/core/src/sandbox.ts
async function sandboxAction(action) {
  const engines = await Promise.all(
    ["docker", "podman"].map(async (executable) => {
      try {
        const r = await runProcess({
          executable,
          args: ["info", "--format", "{{json .}}"],
          cwd: process.cwd(),
          timeoutMs: 1e4
        });
        return { engine: executable, available: r.code === 0 };
      } catch {
        return { engine: executable, available: false };
      }
    })
  );
  const state = {
    profile: "optional",
    platform: `${process.platform}/${process.arch}`,
    engines,
    supported: false,
    reason: "No provisioned Oracle DB Free + APEX 26.1 + ORDS artifact tuple has been verified on this host.",
    volumesRemoved: false
  };
  if (action === "status") return state;
  if (action === "down") return { ...state, status: "not-configured", changed: false };
  throw new Fault(
    "SANDBOX_PROFILE_UNVERIFIED",
    state.reason + " Remote APEX targets remain independent.",
    3,
    "blocked"
  );
}

// packages/core/src/service.ts
async function dispatch(operation, input = {}, signal) {
  try {
    if (signal?.aborted)
      throw new Fault("CANCELLED", "Operation cancelled before execution.", 6, "cancelled");
    if (!(operation in schemas)) throw new Fault("INVALID_INPUT", `Unknown operation: ${operation}`, 2);
    const parsed = parse(
      schemas[operation],
      input
    );
    const text = (key) => parsed[key];
    const root = text("project") ?? process.cwd();
    const oracle = new OracleAdapter(), tests = new TestService(oracle), deployment = new DeploymentService(oracle, (ctx, env2) => tests.all(ctx, env2));
    let data;
    switch (operation) {
      case "version":
        data = { version: VERSION, node: process.version };
        break;
      case "doctor":
        data = await doctor();
        break;
      case "setup":
      case "plugin.install":
      case "plugin.update": {
        const { setup: setup2 } = await import("./chunk-LWVFSTQX.mjs");
        data = await setup2(parsed);
        break;
      }
      case "plugin.validate": {
        const { validateNative } = await import("./chunk-LWVFSTQX.mjs");
        data = await validateNative(text("from"));
        break;
      }
      case "plugin.uninstall": {
        const { uninstallNative } = await import("./chunk-LWVFSTQX.mjs");
        data = await uninstallNative(text("home") ?? managedHome(), Boolean(parsed.keepRuntime));
        break;
      }
      case "project.init":
        data = await projectInit(
          text("directory"),
          text("template"),
          text("alias") ?? path9.basename(text("directory")).toLowerCase().replace(/[^a-z0-9-]/g, "-")
        );
        break;
      case "connection.add":
        data = await editConnection(text("name"), { kind: "sqlcl-store", name: text("sqlclName") });
        break;
      case "connection.remove":
        data = await editConnection(text("name"));
        break;
      case "connection.list":
        data = await connections();
        break;
      case "connection.test":
        data = await oracle.identity(await resolveConnection(text("name")));
        break;
      case "docs.search":
        data = await referenceSearch(text("query"), text("version"), schemas["docs.search"].parse(parsed));
        break;
      case "docs.read":
        data = await referenceRead(text("id"), Number(parsed.offset), Number(parsed.limit));
        break;
      case "docs.sync":
        data = await referenceSync(text("version"), Boolean(parsed.dryRun));
        break;
      case "sandbox.up":
      case "sandbox.status":
      case "sandbox.down":
        data = await sandboxAction(operation.split(".")[1]);
        break;
      default: {
        const ctx = await loadProject(root);
        switch (operation) {
          case "project.inspect":
            data = await projectInspect(ctx);
            break;
          case "metadata.read": {
            const env2 = environment(ctx, text("env"));
            const { project: _p, env: _e, ...request } = parsed;
            data = await metadataRead(oracle, env2, await resolveConnection(env2.readConnectionRef), request);
            break;
          }
          case "apex.generate": {
            await requireTrust(ctx.root);
            const generated = await oracle.generate(
              text("name"),
              text("alias") ?? ctx.config.application.alias
            );
            data = {
              ...await installSources(generated.directory, ctx.root, text("output")),
              compiler: generated.compiler
            };
            break;
          }
          case "project.adopt":
          case "apex.export": {
            await requireTrust(ctx.root);
            const env2 = environment(ctx, text("env"));
            if (operation === "project.adopt" && env2.applicationId !== parsed.appId)
              throw new Fault(
                "APPLICATION_TARGET_MISMATCH",
                "Requested app ID differs from the environment mapping.",
                5
              );
            const connection = await resolveConnection(env2.readConnectionRef);
            await oracle.verifyTarget(env2, connection);
            const exported = await oracle.exportApplication(env2, connection);
            data = await installSources(
              exported.directory,
              ctx.root,
              operation === "project.adopt" ? ctx.config.application.sourceDir : text("output")
            );
            break;
          }
          case "apex.validate":
            await requireTrust(ctx.root);
            data = await oracle.validate(await contained(ctx.root, ctx.config.application.sourceDir), signal);
            break;
          case "apex.diff": {
            await requireTrust(ctx.root);
            const env2 = environment(ctx, text("env")), connection = await resolveConnection(env2.readConnectionRef);
            await oracle.verifyTarget(env2, connection);
            const exported = await oracle.exportApplication(env2, connection), local = (await projectInspect(ctx)).sources.apex;
            data = {
              scope: "full-application-import",
              completeness: "textual-file-hashes-only",
              changes: [.../* @__PURE__ */ new Set([...Object.keys(exported.files), ...Object.keys(local ?? {})])].filter((f) => exported.files[f] !== local?.[f]).map((file) => ({
                file,
                before: exported.files[file] ?? null,
                after: local?.[file] ?? null
              }))
            };
            break;
          }
          case "db.plan":
            data = await deployment.plan(ctx, text("env"));
            break;
          case "deploy.plan": {
            const plan = await deployment.plan(ctx, text("env"));
            await writeJson(await contained(ctx.root, text("out")), plan);
            data = plan;
            break;
          }
          case "deploy.apply":
            data = await deployment.apply(
              ctx,
              await readJson(await contained(ctx.root, text("plan"))),
              signal
            );
            break;
          case "deploy.status":
            data = await deployment.reconcile(ctx, text("run"));
            break;
          case "deploy.restore-plan": {
            const plan = await deployment.restorePlan(ctx, text("backup"));
            await writeJson(await contained(ctx.root, text("out")), plan);
            data = plan;
            break;
          }
          case "test.run": {
            const suite = text("suite");
            if (suite === "all") {
              if (!parsed.env) throw new Fault("ENVIRONMENT_REQUIRED", "test all requires --env.", 2);
              const result = await tests.all(ctx, text("env"), signal);
              data = result.data;
              if (!result.ok)
                return {
                  ...failure(operation, new Fault("QUALITY_GATE_FAILED", "Required suites did not pass.", 1)),
                  data
                };
            } else {
              const result = await tests.run(
                ctx,
                suite,
                text("env"),
                signal,
                Boolean(parsed.headed)
              );
              data = result;
              if (result.status !== "passed")
                return {
                  ...failure(
                    operation,
                    new Fault(
                      "TEST_" + result.status.toUpperCase(),
                      result.diagnostic ?? `Suite is ${result.status}.`,
                      result.status === "failed" ? 1 : 3,
                      result.status
                    )
                  ),
                  data
                };
            }
            break;
          }
          case "test.report":
            data = await readJson(await contained(ctx.root, ".apexrest/test-runs/" + text("run") + ".json"));
            break;
          case "test.auth":
            data = await tests.auth(ctx, text("env"));
            break;
          case "jobs.status":
            data = await new JobService(ctx).status(text("id"));
            break;
          case "jobs.cancel":
            data = await new JobService(ctx).cancel(text("id"));
            break;
          case "artifacts.read":
            data = await new ArtifactService(ctx).read(
              text("id"),
              Number(parsed.offset),
              Number(parsed.limit)
            );
            break;
          default:
            throw new Fault("INVALID_INPUT", "Unknown operation.", 2);
        }
      }
    }
    return success(operation, data);
  } catch (error) {
    return failure(operation, error);
  }
}

export {
  schemas,
  toolCatalog,
  JobService,
  executeJob,
  dispatch
};
