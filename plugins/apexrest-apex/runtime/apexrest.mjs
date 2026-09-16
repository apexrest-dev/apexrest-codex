#!/usr/bin/env node
import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);
import {
  dispatch,
  executeJob,
  schemas
} from "./chunk-WCTSQOSE.mjs";
import "./chunk-4ACPFYCB.mjs";
import {
  Fault,
  failure,
  loadProject
} from "./chunk-FAC6KCSL.mjs";

// packages/cli/src/main.ts
var argv = process.argv.slice(2);
var positional = {
  "project.init": ["directory"],
  "connection.add": ["name"],
  "connection.test": ["name"],
  "connection.remove": ["name"],
  "docs.search": ["query"],
  "docs.read": ["id"],
  "jobs.status": ["id"],
  "jobs.cancel": ["id"],
  "artifacts.read": ["id"]
};
function operationFrom(args) {
  const first = args[0];
  if (["doctor", "version", "setup"].includes(first ?? "")) return { op: first, start: 1 };
  if (first === "test" && ["unit", "sql", "api", "e2e", "all"].includes(args[1] ?? ""))
    return { op: "test.run", start: 2, suite: args[1] };
  return { op: args.slice(0, 2).join("."), start: 2 };
}
var selected = operationFrom(argv);
function help() {
  const key = selected.op;
  const lines = [
    "APEXREST for Codex \u2014 independent Oracle APEX developer tools",
    "Usage: apexrest [command] [options]",
    "Run apexrest in a terminal to manage tools, plugins and saved SQLcl connections.",
    "  tui [--project PATH]   Open the terminal UI explicitly",
    "",
    ...Object.keys(schemas).filter((x) => x !== "test.run").map((x) => "  " + x.replace(".", " ")),
    "  test unit|sql|api|e2e|all [--env NAME]",
    "  mcp",
    "",
    "--json emits one structured JSON result; diagnostics use stderr.",
    "Use --project PATH for project operations. Environment never defaults.",
    "Exit codes: 0 success, 1 failed, 2 input, 3 dependency, 4 approval, 5 conflict, 6 unknown/cancelled."
  ];
  if (schemas[key])
    lines.push(
      "",
      `Options for ${selected.op.replace(".", " ")}:`,
      ...Object.keys(schemas[key].shape).map(
        (k) => "  --" + k.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase())
      ),
      ...(positional[key] ?? []).map((p) => "  <" + p + ">")
    );
  if (key === "dependencies.install")
    lines.push(
      "",
      "Install managed Node.js, Java, SQLcl, Playwright and Chromium without registering the plugin.",
      "Preview: apexrest dependencies install --dry-run",
      "Install: apexrest dependencies install --yes",
      "--accept-oracle-license records separate consent to the Oracle terms shown in the preview.",
      "--skip-browser omits Playwright/Chromium; --install-os-deps explicitly enables browser OS packages.",
      "--offline uses cached downloads; --home and --cache-dir select managed storage."
    );
  if (key === "dependencies.uninstall")
    lines.push(
      "",
      "Preview: apexrest dependencies uninstall --dry-run",
      "Remove managed tools: apexrest dependencies uninstall --yes",
      "Preserves external runtimes, projects, saved connections and cache.",
      "Node.js required by the APEXREST launcher or plugin is retained."
    );
  if (key === "connection.list" || key === "connection.test")
    lines.push("", "--saved uses the SQLcl connection store directly, without an APEXREST reference.");
  if (key === "sqlcl.configure" || key === "sqlcl.status")
    lines.push(
      "",
      "Select the Oracle backend for CLI and APEXREST MCP operations; existing sessions keep their mode.",
      "apexrest sqlcl configure --mode cli|mcp --json",
      "cli: SQLcl subprocess (default). mcp: official SQLcl stdio server (sql -mcp).",
      "--mcp-restrict-level 4|1: 4 is the default; 1 explicitly permits scripts but blocks host commands.",
      "Saved in APEXREST_HOME/sqlcl.json. No connection, download or Codex registration is changed.",
      "SQLcl MCP can write its own database audit log on connected operations. No silent CLI fallback."
    );
  console.log(lines.join("\n"));
}
try {
  if (argv.includes("--help") || argv.includes("-h")) help();
  else if (argv[0] === "tui" || !argv.length && process.stdin.isTTY && process.stdout.isTTY && process.env.TERM !== "dumb") {
    if (argv.length > 1 && (argv.length !== 3 || argv[1] !== "--project" || !argv[2] || argv[2].startsWith("--")))
      throw new Fault("INVALID_INPUT", "Usage: apexrest tui [--project PATH]", 2);
    const { runTui } = await import("./chunk-42MMO3E2.mjs");
    await runTui(argv[2] ? { project: argv[2] } : {});
  } else if (!argv.length) help();
  else if (argv[0] === "--job-worker") {
    if (argv.length !== 3) throw new Fault("INVALID_INPUT", "Invalid internal job request.", 2);
    await executeJob(await loadProject(argv[1]), argv[2], dispatch);
  } else if (argv[0] === "mcp") {
    if (argv.length !== 1) throw new Fault("INVALID_INPUT", "mcp accepts no arguments.", 2);
    const { startMcp } = await import("./chunk-WTNYLSQC.mjs");
    await startMcp();
  } else {
    const selectedOp = argv[0] === "--version" ? { op: "version", start: 1 } : selected;
    if (!(selectedOp.op in schemas)) throw new Fault("INVALID_INPUT", "Unknown command. Use --help.", 2);
    const schema = schemas[selectedOp.op];
    const input = selected.suite ? { suite: selected.suite } : {};
    const booleans = /* @__PURE__ */ new Set([
      "json",
      "yes",
      "nonInteractive",
      "offline",
      "dryRun",
      "acceptOracleLicense",
      "skipBrowser",
      "installOsDeps",
      "nativeOnly",
      "keepRuntime",
      "headed",
      "saved"
    ]);
    const numbers = /* @__PURE__ */ new Set(["appId", "offset", "limit"]);
    let index = 0;
    for (let i = selectedOp.start; i < argv.length; i++) {
      const token = argv[i];
      if (token.startsWith("--")) {
        const name = token.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        if (name === "json") continue;
        if (!(name in schema.shape) || name in input)
          throw new Fault("INVALID_INPUT", `Unknown or duplicate option: ${token}`, 2);
        if (booleans.has(name)) input[name] = true;
        else {
          const value = argv[++i];
          if (!value || value.startsWith("--"))
            throw new Fault("INVALID_INPUT", `Missing value for ${token}`, 2);
          input[name] = numbers.has(name) ? Number(value) : value;
        }
      } else {
        const field = positional[selectedOp.op]?.[index++];
        if (!field || field in input) throw new Fault("INVALID_INPUT", `Unexpected argument: ${token}`, 2);
        input[field] = token;
      }
    }
    const result = await dispatch(selectedOp.op, input);
    console.log(JSON.stringify(result, null, argv.includes("--json") ? 0 : 2));
    process.exitCode = result.exitCode;
  }
} catch (e) {
  const result = failure(selected.op, e);
  console.log(JSON.stringify(result));
  process.exitCode = result.exitCode;
}
