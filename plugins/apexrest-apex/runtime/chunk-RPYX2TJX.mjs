import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);
import {
  clip,
  paint,
  wrap
} from "./chunk-ZRUGD4ND.mjs";
import {
  teamLabel
} from "./chunk-GFRSRK3K.mjs";
import {
  PanelService
} from "./chunk-TLBRWMVR.mjs";
import "./chunk-TKVKS5YD.mjs";
import "./chunk-F762AFRT.mjs";
import "./chunk-G26NEU3N.mjs";
import "./chunk-TM25I7KG.mjs";
import {
  Fault
} from "./chunk-MJC6ZMRG.mjs";

// packages/cli/src/panel-tui.ts
import { emitKeypressEvents } from "node:readline";
function panelLines(data, tab) {
  const team = data.team;
  if (tab === 3)
    return [
      `Database network: ${data.sqlcl.databaseTransport === "ords" ? "ORDS HTTP(S)" : "Direct Oracle listener"}`,
      `SQLcl execution: ${data.sqlcl.mode.toUpperCase()} \xB7 restriction ${data.sqlcl.mcpRestrictLevel}`,
      `Trusted: ${data.trusted} \xB7 configured: ${data.configured}`,
      "Future work defaults: " + JSON.stringify(data.preferences),
      "Model selection: Auto (task complexity and implementation repair results; no manual override).",
      ...JSON.stringify(
        {
          project: data.configuration,
          toolchain: data.toolchain,
          connections: data.connections,
          authorization: data.permissions
        },
        null,
        2
      ).split("\n")
    ];
  if (tab === 2)
    return [
      "APEX OPERATIONS",
      ...data.jobs.flatMap((job) => [`${job.operation} \xB7 ${job.status}`, job.summary]),
      ...data.jobs.length ? [] : ["No operation jobs recorded."],
      "",
      "DEPLOYMENT & IMPORT JOURNAL",
      ...data.deployments.flatMap((run) => [run.status + " \xB7 " + run.at, run.details]),
      "",
      "Commands: apexrest apex validate \xB7 apexrest test unit \xB7 apexrest deploy plan --env NAME --out PATH",
      "Existing project trust and deployment authorization remain required."
    ];
  const lines = [
    team ? `${team.executionMode === "single" ? "SINGLE AGENT" : "TEAM"} \xB7 ${team.status} \xB7 ${team.phase} \xB7 revision ${team.revision}` : 'No team yet. Use apexrest team start "Task" in Codex.',
    ""
  ];
  if (data.task) lines.push(data.task, "");
  if (team?.modelPolicy)
    lines.push("Auto models \xB7 " + team.modelPolicy.complexity + " \xB7 " + team.modelPolicy.reason);
  if (team?.limits) lines.push("Task time limit: " + team.limits.timeoutSeconds + " seconds");
  if (team?.members.length)
    lines.push("Tokens are cumulative, including cached input; not a cost estimate.", "");
  for (const member of team?.members ?? [])
    lines.push(
      `${teamLabel(member.role)} \xB7 ${member.status}`,
      member.currentAction?.title ?? "No active tool reported",
      [
        member.configuration?.model,
        member.configuration?.reasoningEffort,
        member.configuration?.sandbox,
        member.totalTokens == null ? "" : member.totalTokens + " tokens"
      ].filter(Boolean).join(" \xB7 "),
      member.selection ? "Auto \xB7 " + member.selection.tier + " \xB7 " + member.selection.reason : "",
      member.tokenUsage ? [
        member.tokenUsage.inputTokens == null ? "" : "Input " + member.tokenUsage.inputTokens,
        member.tokenUsage.cachedInputTokens == null ? "" : "Cached input " + member.tokenUsage.cachedInputTokens,
        member.tokenUsage.outputTokens == null ? "" : "Output " + member.tokenUsage.outputTokens,
        member.tokenUsage.reasoningOutputTokens == null ? "" : "Reasoning output " + member.tokenUsage.reasoningOutputTokens
      ].filter(Boolean).join(" \xB7 ") : "",
      ""
    );
  if (tab === 1) {
    lines.push(team?.executionMode === "single" ? "AGENT VERIFICATION" : "MANDATORY REVIEWS");
    for (const v of team?.verification ?? [])
      lines.push(
        `${v.report.decision} \xB7 revision ${v.revision}`,
        v.report.summary,
        ...v.report.checks.map((c) => `${c.status} \xB7 ${c.name}: ${c.evidence}`)
      );
    for (const r of team?.reviews ?? [])
      lines.push(
        `${r.phase}: ${r.report.decision} \xB7 revision ${r.revision}`,
        r.report.summary,
        ...r.report.findings
      );
    for (const q of team?.qa ?? [])
      lines.push(
        `QA: ${q.report.decision} \xB7 revision ${q.revision}`,
        q.report.summary,
        ...q.report.checks.map((c) => `${c.status} \xB7 ${c.name}: ${c.evidence}`)
      );
    lines.push("", "PEER MESSAGES");
    for (const m of team?.messages ?? [])
      lines.push(`${teamLabel(m.from)} \u2192 ${teamLabel(m.to)} \xB7 ${m.status}`, m.text);
  } else {
    lines.push("WORKING CHANGES", ...data.changes.files, "", "OBSERVED AGENT STEPS");
    for (const o of [...team?.observations ?? []].reverse())
      lines.push(`${teamLabel(o.role)} \xB7 ${o.kind}`, o.detail);
  }
  if (team?.diagnostics.length) lines.push("", ...team.diagnostics);
  return lines;
}
async function runPanelTui(root) {
  if (!process.stdin.isTTY || !process.stdout.isTTY || process.env.TERM === "dumb")
    throw new Fault("TTY_REQUIRED", "Use an interactive Codex terminal, or apexrest panel status --json.", 2);
  const service = new PanelService(root), output = process.stdout, input = process.stdin;
  let data, error = "", tab = 0, offset = 0, refreshing = false, stopped = false;
  const color = !process.env.NO_COLOR;
  const draw = () => {
    if (stopped) return;
    const width = Math.max(20, output.columns || 80), height = Math.max(7, output.rows || 24);
    const body = data ? panelLines(data, tab).flatMap((line) => wrap(line, width - 2)) : [];
    offset = Math.max(0, Math.min(offset, Math.max(0, body.length - (height - 6))));
    const lines = [
      paint(" APEXREST \xB7 Development panel", "accent", color),
      clip(" " + root, width),
      ["Overview", "Agent team", "APEX operations", "Settings"].map((name, i) => `${i + 1} ${i === tab ? "[" + name + "]" : name}`).join("  "),
      error ? "Disconnected \xB7 " + error : data ? "Live \xB7 " + new Date(data.updatedAt).toLocaleTimeString() : "Connecting\u2026",
      ...body.slice(offset, offset + height - 6),
      "1\u20134 / \u2190\u2192 views \xB7 \u2191\u2193 scroll \xB7 r refresh \xB7 q exit | Actions: apexrest panel action --help"
    ];
    output.write("\x1B[H\x1B[2J" + lines.map((line, i) => i === 0 ? line : clip(line, width)).join("\r\n"));
  };
  const refresh = async () => {
    if (refreshing || stopped) return;
    refreshing = true;
    try {
      data = await service.snapshot();
      error = "";
    } catch (e) {
      error = e instanceof Error ? e.message : String(e);
    } finally {
      refreshing = false;
      draw();
    }
  };
  const wasRaw = input.isRaw;
  emitKeypressEvents(input);
  input.setRawMode(true);
  input.resume();
  output.write("\x1B[?1049h\x1B[?25l");
  await new Promise((resolve) => {
    const close = () => {
      if (stopped) return;
      stopped = true;
      clearInterval(timer);
      input.off("keypress", key);
      output.off("resize", draw);
      process.off("SIGINT", close);
      process.off("SIGTERM", close);
      input.setRawMode(wasRaw);
      input.pause();
      output.write("\x1B[?25h\x1B[?1049l");
      resolve();
    };
    const key = (_text, k) => {
      if (k.name === "q" || k.ctrl && k.name === "c") return close();
      if (/^[1-4]$/.test(k.name ?? "")) {
        tab = Number(k.name) - 1;
        offset = 0;
      }
      if (k.name === "right" || k.name === "left") {
        tab = (tab + (k.name === "right" ? 1 : 3)) % 4;
        offset = 0;
      }
      if (k.name === "up") offset--;
      if (k.name === "down") offset++;
      if (k.name === "pageup") offset -= 10;
      if (k.name === "pagedown") offset += 10;
      if (k.name === "r") void refresh();
      else draw();
    };
    const timer = setInterval(() => {
      void refresh();
    }, 2e3);
    input.on("keypress", key);
    output.on("resize", draw);
    process.once("SIGINT", close);
    process.once("SIGTERM", close);
    void refresh();
  });
}
export {
  panelLines,
  runPanelTui
};
