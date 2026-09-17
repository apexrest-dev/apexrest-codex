import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);
import {
  Fault,
  contained,
  exists,
  external_exports,
  managedHome,
  parse,
  readJson,
  redact,
  refName,
  withLock,
  writeJson
} from "./chunk-2M4WFEIW.mjs";

// packages/core/src/process.ts
import { spawn } from "node:child_process";
async function runProcess(r) {
  if (r.signal?.aborted)
    return { code: null, stdout: "", stderr: "", timedOut: false, cancelled: true, truncated: false };
  return new Promise((resolve, reject) => {
    const child = spawn(r.executable, r.args, {
      cwd: r.cwd,
      env: r.env ?? process.env,
      shell: false,
      stdio: "pipe",
      windowsHide: true
    });
    let stdout = "", stderr = "", bytes = 0, timedOut = false, cancelled = false, truncated = false;
    const max = r.maxBytes ?? 1024 * 1024;
    const stop = () => {
      child.kill("SIGTERM");
      const hard = setTimeout(() => child.kill("SIGKILL"), 1500);
      hard.unref();
    };
    const collect = (isError) => (data) => {
      const room = Math.max(0, max - bytes);
      bytes += data.length;
      const s = data.subarray(0, room).toString();
      if (isError) stderr += s;
      else stdout += s;
      if (bytes > max) {
        truncated = true;
        stop();
      }
    };
    child.stdout.on("data", collect(false));
    child.stderr.on("data", collect(true));
    child.stdin.on("error", () => {
    });
    const timer = setTimeout(() => {
      timedOut = true;
      stop();
    }, r.timeoutMs ?? 3e4);
    const abort = () => {
      cancelled = true;
      stop();
    };
    r.signal?.addEventListener("abort", abort, { once: true });
    if (r.signal?.aborted) abort();
    child.on("error", (e) => {
      clearTimeout(timer);
      r.signal?.removeEventListener("abort", abort);
      reject(new Fault("DEPENDENCY_MISSING", e.message, 3, "dependency_missing"));
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      r.signal?.removeEventListener("abort", abort);
      resolve({ code, stdout: redact(stdout), stderr: redact(stderr), timedOut, cancelled, truncated });
    });
    child.stdin.end(r.input ?? "");
  });
}

// packages/core/src/sqlcl-config.ts
import path from "node:path";
var sqlclMode = external_exports.enum(["cli", "mcp"]);
var sqlclRestriction = external_exports.enum(["4", "1"]);
var sqlclConfigSchema = external_exports.strictObject({
  schemaVersion: external_exports.literal(1),
  mode: sqlclMode,
  mcpRestrictLevel: sqlclRestriction
});
async function sqlclConfig() {
  const home = managedHome();
  if (!await exists(home)) return { schemaVersion: 1, mode: "cli", mcpRestrictLevel: "4" };
  const file = await contained(home, "sqlcl.json");
  return await exists(file) ? parse(sqlclConfigSchema, await readJson(file)) : { schemaVersion: 1, mode: "cli", mcpRestrictLevel: "4" };
}
async function configureSqlcl(mode, level) {
  const home = managedHome();
  return withLock(path.join(home, "sqlcl-config.lock"), async () => {
    const previous = await sqlclConfig();
    const configuration = parse(sqlclConfigSchema, {
      ...previous,
      mode,
      mcpRestrictLevel: level ?? previous.mcpRestrictLevel
    });
    await writeJson(await contained(home, "sqlcl.json"), configuration);
    return configuration;
  });
}

// packages/core/src/connections.ts
import path2 from "node:path";
var savedConnectionName = external_exports.string().min(1).max(512).regex(/^[^\x00-\x1f\x7f-\x9f]+$/);
var connectionSchema = external_exports.strictObject({ kind: external_exports.literal("sqlcl-store"), name: savedConnectionName });
var storeSchema = external_exports.record(refName, connectionSchema);
async function connections() {
  const file = path2.join(managedHome(), "connections.json");
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
  return withLock(path2.join(managedHome(), "connections.lock"), async () => {
    const current = await connections();
    if (value) current[name] = parse(connectionSchema, value);
    else delete current[name];
    await writeJson(path2.join(managedHome(), "connections.json"), current);
    return { name, status: value ? "configured" : "removed", credentialsDeleted: false };
  });
}

export {
  runProcess,
  savedConnectionName,
  connections,
  resolveConnection,
  editConnection,
  sqlclMode,
  sqlclRestriction,
  sqlclConfigSchema,
  sqlclConfig,
  configureSqlcl
};
