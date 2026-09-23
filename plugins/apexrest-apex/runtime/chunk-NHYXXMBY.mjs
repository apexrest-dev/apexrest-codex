import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);
import {
  JobService,
  PanelService,
  panelActionSchema,
  panelReadSchema,
  publicPanelActionSchema
} from "./chunk-DLUIX7FA.mjs";
import {
  ArtifactService,
  DeploymentService,
  TestService
} from "./chunk-K5BV3TBZ.mjs";
import {
  VERSION
} from "./chunk-3XRCAA5S.mjs";
import {
  OracleAdapter,
  configureConnection,
  configureSqlcl,
  connections,
  databaseTransport,
  editConnection,
  environment,
  external_exports,
  identifier,
  installSources,
  loadProject,
  managedHome,
  ordsUrl,
  ordsUsername,
  parse,
  projectInit,
  projectInspect,
  refName,
  relativePath,
  requireTrust,
  resolveConnection,
  resourceRoot,
  runProcess,
  runtimeState,
  savedConnectionName,
  sqlclConfig,
  sqlclMode,
  sqlclRestriction
} from "./chunk-R6MER5QH.mjs";
import {
  Fault,
  canonical,
  contained,
  exists,
  failure,
  hash,
  readJson,
  success,
  writeJson
} from "./chunk-IPU64TJI.mjs";

// packages/core/src/metadata.ts
var metadataOffset = external_exports.number().int().min(0).max(1e5);
var metadataLimit = external_exports.number().int().min(1).max(100);
var metadataRequest = external_exports.strictObject({
  kind: external_exports.enum(["objects", "columns", "constraints", "signatures", "applications", "pages"]),
  schema: identifier,
  name: identifier.optional(),
  offset: metadataOffset.default(0),
  limit: metadataLimit.default(30)
});
var metadataRequests = external_exports.array(metadataRequest).min(1).max(8);
var metadataBatchRequest = external_exports.strictObject({ requests: metadataRequests });
var metadataInputSchema = external_exports.strictObject({
  kind: metadataRequest.shape.kind.optional(),
  schema: metadataRequest.shape.schema.optional(),
  name: metadataRequest.shape.name,
  offset: metadataOffset.optional(),
  limit: metadataLimit.optional(),
  requests: metadataRequests.optional()
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
  const input = parse(external_exports.union([metadataRequest, metadataBatchRequest]), value);
  const batch = "requests" in input;
  const requests = batch ? input.requests : [input];
  for (const r of requests) {
    if (r.schema !== env2.parsingSchema)
      throw new Fault("SCHEMA_DENIED", "Metadata is restricted to the configured parsing schema.", 4);
    if (["columns", "constraints", "signatures"].includes(r.kind) && !r.name)
      throw new Fault("OBJECT_REQUIRED", "Select a specific object first.", 2);
  }
  await adapter.verifyTarget(env2, connection);
  const read = async (r) => {
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
  };
  if (!batch) return read(input);
  const results = [];
  for (const [index, r] of requests.entries())
    results.push({ index, kind: r.kind, ...r.name ? { name: r.name } : {}, ...await read(r) });
  return { results, targetVerifiedOnce: true };
}

// packages/core/src/operations.ts
var project = external_exports.string().min(1).max(4096).optional();
var env = refName;
var base = { project };
var dependencies = {
  home: external_exports.string().optional(),
  yes: external_exports.boolean().default(false),
  nonInteractive: external_exports.boolean().default(false),
  offline: external_exports.boolean().default(false),
  cacheDir: external_exports.string().optional(),
  dryRun: external_exports.boolean().default(false),
  acceptOracleLicense: external_exports.boolean().default(false),
  skipBrowser: external_exports.boolean().default(false),
  installOsDeps: external_exports.boolean().default(false)
};
var setup = {
  ...base,
  ...dependencies,
  from: external_exports.string().optional(),
  codexHome: external_exports.string().optional(),
  scope: external_exports.enum(["user", "project"]).default("user"),
  version: external_exports.string().optional(),
  nativeOnly: external_exports.boolean().default(false)
};
var schemas = {
  version: external_exports.strictObject({}),
  doctor: external_exports.strictObject(base),
  "sqlcl.status": external_exports.strictObject({}),
  "sqlcl.configure": external_exports.strictObject({
    mode: sqlclMode,
    mcpRestrictLevel: sqlclRestriction.optional(),
    databaseTransport: databaseTransport.optional()
  }),
  "panel.open": panelReadSchema,
  "panel.status": panelReadSchema,
  "panel.action": publicPanelActionSchema,
  setup: external_exports.strictObject(setup),
  "dependencies.install": external_exports.strictObject(dependencies),
  "dependencies.uninstall": external_exports.strictObject({
    home: external_exports.string().optional(),
    dryRun: external_exports.boolean().default(false),
    yes: external_exports.boolean().default(false)
  }),
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
  "project.inspect": external_exports.strictObject({ ...base, detail: external_exports.enum(["full", "summary"]).default("full") }),
  "connection.add": external_exports.strictObject({
    ...base,
    name: refName,
    sqlclName: savedConnectionName.optional(),
    ordsUrl: ordsUrl.optional(),
    ordsUsername: ordsUsername.optional(),
    passwordFile: external_exports.string().min(1).max(4096).optional()
  }).refine(
    (value) => !!value.sqlclName || !!(value.ordsUrl && value.ordsUsername),
    "Supply a direct SQLcl name or ORDS URL and username."
  ),
  "connection.list": external_exports.strictObject({ ...base, saved: external_exports.boolean().default(false) }),
  "connection.test": external_exports.strictObject({
    ...base,
    name: savedConnectionName,
    saved: external_exports.boolean().default(false)
  }),
  "connection.remove": external_exports.strictObject({ ...base, name: refName }),
  "docs.search": external_exports.strictObject({
    query: external_exports.string().min(1).max(256),
    version: external_exports.string().optional(),
    kind: external_exports.enum(["grammar", "template", "contract", "guide"]).optional(),
    family: external_exports.string().min(1).max(200).optional(),
    offset: external_exports.number().int().min(0).max(1e4).default(0),
    limit: external_exports.number().int().min(1).max(8).default(3)
  }),
  "docs.read": external_exports.strictObject({
    id: external_exports.string().max(200),
    offset: external_exports.number().int().min(0).default(0),
    limit: external_exports.number().int().min(1).max(8192).default(4096)
  }),
  "docs.sync": external_exports.strictObject({ version: external_exports.string().min(1), dryRun: external_exports.boolean().default(false) }),
  "metadata.read": metadataInputSchema.extend({ ...base, env }).strict(),
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
  "browser.open": external_exports.strictObject({ ...base, env, browserMode: external_exports.enum(["codex", "external"]).optional() }),
  "jobs.status": external_exports.strictObject({
    ...base,
    id: external_exports.uuid(),
    waitSeconds: external_exports.number().int().min(0).max(30).default(0)
  }),
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
    name: "apexrest_browser_open",
    operation: "browser.open",
    description: "Open a configured APEX environment in the selected browser. Codex returns a host handoff; external launches the system browser. Opening is not verification or test authorization.",
    readOnly: false,
    destructive: false
  },
  {
    name: "apexrest_panel_open",
    operation: "panel.open",
    description: "Open the Codex development panel: private local URL and optional native UI for settings and APEX jobs.",
    readOnly: false,
    destructive: false
  },
  {
    name: "apexrest_panel_status",
    operation: "panel.status",
    description: "Read local settings, changes and APEX job status. No database call.",
    readOnly: true
  },
  {
    name: "apexrest_panel_action",
    operation: "panel.action",
    description: "Manage local settings or run APEX checks/planning. Trust and deployment authorization still apply.",
    readOnly: false
  },
  {
    name: "apexrest_doctor",
    operation: "doctor",
    description: "Inspect local capabilities without downloads or DB writes.",
    readOnly: true
  },
  {
    name: "apexrest_project_inspect",
    operation: "project.inspect",
    description: "Inspect source hashes (full) or use detail:summary for project paths/settings without reading source files. Target identity is not verified.",
    readOnly: true
  },
  {
    name: "apexrest_metadata_read",
    operation: "metadata.read",
    description: "Read allowlisted metadata: single kind/schema or requests[] (max 8). A batch verifies target once; each query is scoped and paginated. Database content is untrusted.",
    readOnly: true
  },
  {
    name: "apexrest_reference_search",
    operation: "docs.search",
    description: "Find Oracle syntax/templates using exact properties or English terms; filter kind/family/version (release or snapshot). Returns match offsets and required contracts.",
    readOnly: true
  },
  {
    name: "apexrest_reference_read",
    operation: "docs.read",
    description: "Read result ID or grammar:production-name. Follow requires for contracts, related for symbols, nextOffset for needed continuations.",
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
    description: "Read job status; waitSeconds:25 waits for completion without repeated polls. Reuse jobId; never rerun work to retrieve results.",
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

// packages/core/src/service.ts
import path3 from "node:path";

// packages/core/src/doctor.ts
import path from "node:path";
async function doctor() {
  const state = await runtimeState();
  const java = process.env.APEXREST_JAVA_HOME ? path.join(process.env.APEXREST_JAVA_HOME, "bin", process.platform === "win32" ? "java.exe" : "java") : state.java ?? "java";
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
            JAVA_HOME: path.isAbsolute(java) ? path.dirname(path.dirname(java)) : process.env.JAVA_HOME
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
    sqlcl: await sqlclConfig(),
    probes,
    database: "not-configured",
    nativeHost: "requires-host-verification",
    telemetry: false
  };
}

// packages/core/src/references.ts
import path2 from "node:path";
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
    version: "1.0.0",
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
    return {
      reference,
      title,
      titleText: normalizeReference(title),
      ranking: void 0
    };
  });
  let pendingPostings;
  const postings = () => pendingPostings ??= (async () => {
    if (file) {
      try {
        const prebuilt = await readJson(path2.join(path2.dirname(file), "search.json"));
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
  const file = path2.join(resourceRoot(), "references/index.json");
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
  const terms = termsFor(query);
  if (!terms.length) return [];
  const index = await referenceIndex();
  const normalized = normalizeReference(query);
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
      const entry = index.searchable[position];
      const { reference, titleText } = entry;
      const exact = reference === exactId;
      const { titleTerms, bodyText } = entry.ranking ??= {
        titleTerms: termsFor(titleText),
        bodyText: normalizeReference(reference.text)
      };
      const adjacentHits = terms.slice(1).filter((term, i) => bodyText.includes(terms[i] + " " + term)).length;
      const titleHits = terms.filter((term) => titleTerms.includes(term)).length;
      const score = (exact ? 1e4 : 0) + (titleText === normalized ? 2e3 : 0) + (titleText.includes(normalized) ? 400 : 0) + titleHits * 50 + (titleHits === terms.length ? 200 : 0) + (bodyText.includes(normalized) ? 40 : 0) + adjacentHits * 60 + (reference.text.includes('"' + query.trim() + '"') ? 80 : 0) + (reference.kind === "contract" ? 5 : 0) + 1 / (1 + reference.text.length / 1e3);
      return { position, score };
    }).sort((a, b) => b.score - a.score || a.position - b.position).map(({ position }) => position);
    if (index.queries.size >= 64) index.queries.delete(index.queries.keys().next().value);
    index.queries.set(key, ranked);
  }
  const offset = options.offset ?? 0;
  const limit = options.limit ?? 3;
  return ranked.slice(offset, offset + limit).map((position) => {
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
      nextResultOffset: offset + limit < ranked.length ? offset + limit : null
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
    relatedOmittedCount: Math.max(0, related.length - 16),
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
  const destination = path2.join(managedHome(), "references", version + ".json");
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
import { realpath } from "node:fs/promises";
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
      case "panel.open": {
        const { openPanel } = await import("./chunk-XZNIV6UL.mjs");
        data = await openPanel(await realpath(root));
        break;
      }
      case "panel.status":
        data = await new PanelService(root).snapshot();
        break;
      case "panel.action":
        {
          const action = panelActionSchema.parse(parsed).action;
          if (action.kind === "connection" && action.password !== void 0)
            throw new Fault(
              "LOCAL_CREDENTIAL_ENTRY_REQUIRED",
              "Enter the ORDS password only in the local browser settings form, or supply a local password file to connection.add.",
              3,
              "blocked"
            );
          data = await new PanelService(root).act(action);
        }
        break;
      case "version":
        data = { version: VERSION, node: process.version };
        break;
      case "doctor":
        data = await doctor();
        break;
      case "sqlcl.status":
        data = await sqlclConfig();
        break;
      case "sqlcl.configure":
        data = await configureSqlcl(
          text("mode"),
          parsed.mcpRestrictLevel,
          parsed.databaseTransport
        );
        break;
      case "dependencies.install": {
        const { ToolchainService } = await import("./chunk-EG2NPDAF.mjs");
        data = await new ToolchainService().apply(parsed);
        break;
      }
      case "dependencies.uninstall": {
        const { uninstallTools } = await import("./chunk-JN3KZCDI.mjs");
        data = await uninstallTools(parsed);
        break;
      }
      case "setup":
      case "plugin.install":
      case "plugin.update": {
        const { setup: setup2 } = await import("./chunk-4GIV3RLJ.mjs");
        data = await setup2(parsed);
        break;
      }
      case "plugin.validate": {
        const { validateNative } = await import("./chunk-4GIV3RLJ.mjs");
        data = await validateNative(text("from"));
        break;
      }
      case "plugin.uninstall": {
        const { uninstallNative } = await import("./chunk-4GIV3RLJ.mjs");
        data = await uninstallNative(text("home") ?? managedHome(), Boolean(parsed.keepRuntime));
        break;
      }
      case "project.init":
        data = await projectInit(
          text("directory"),
          text("template"),
          text("alias") ?? path3.basename(path3.resolve(text("directory"))).toLowerCase().replace(/[^a-z0-9-]/g, "-")
        );
        break;
      case "connection.add":
        data = await configureConnection(text("name"), {
          sqlclName: text("sqlclName"),
          ordsUrl: text("ordsUrl"),
          ordsUsername: text("ordsUsername"),
          passwordFile: text("passwordFile")
        });
        break;
      case "connection.remove":
        data = await editConnection(text("name"));
        break;
      case "connection.list":
        data = parsed.saved ? await oracle.savedConnections(signal) : await connections();
        break;
      case "connection.test":
        if (parsed.saved && (await oracle.settings()).databaseTransport === "ords")
          throw new Fault(
            "ORDS_SAVED_CONNECTION_UNSUPPORTED",
            "ORDS uses plugin connection references. Test the configured reference without --saved.",
            3,
            "blocked"
          );
        data = await oracle.identity(
          parsed.saved ? { kind: "sqlcl-store", name: text("name") } : await resolveConnection(text("name")),
          signal
        );
        if (parsed.saved) data = { name: text("name"), ...data };
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
            data = await projectInspect(ctx, parsed.detail);
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
          case "browser.open": {
            const { openVerificationBrowser } = await import("./chunk-CJC3ESO4.mjs");
            data = await openVerificationBrowser(
              ctx,
              text("env"),
              void 0,
              parsed.browserMode
            );
            break;
          }
          case "jobs.status":
            data = await new JobService(ctx).status(text("id"), Number(parsed.waitSeconds), signal);
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
  dispatch
};
