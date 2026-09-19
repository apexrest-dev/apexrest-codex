---
name: apexrest-panel
description: Open the live APEXREST development panel inside Codex desktop or Codex CLI. Inspect project settings, named agent sessions, tools, reviews, QA, source changes and APEX operation state; start or steer single-agent or reviewed-team tasks.
---

# Development panel

Use the user's absolute application project path. Call `apexrest_panel_open` for the local panel URL. In Codex desktop, open that exact URL in the native in-app browser with `open_in_codex` when available. Keep its session capability private: never copy it into public evidence, commits or messages to other people. A returned URL alone is not proof that the panel rendered. In Codex CLI, use `apexrest panel tui --project PATH` in an interactive terminal, or `apexrest_panel_status` for a structured snapshot. These are Codex-only workflows.

The panel displays effective project and target settings, SQLcl CLI/MCP mode, execution and verification-browser defaults, actual agent models and tools, peer messages, mandatory manager reviews, independent QA, Git changes and durable APEX jobs/imports. Agent names are Mewtwo (manager), Pikachu/Charmander/Bulbasaur (developers) and Squirtle (QA); role keys still control routing and permissions. Local sprites accompany names in the desktop panel; terminals show names and roles without image-protocol dependencies.

For implementation, start a configured run through the panel or `apexrest_team_start` and follow the team skill. The panel never approves its own work. Its actions reuse existing project trust, operation schemas and deployment policy. Settings apply to future runs; do not switch transport in the middle of a database operation. The panel can prepare a deployment plan but cannot grant authorization or bypass backup, identity, drift or unknown-outcome protections. Finish an explicitly authorized application import through the existing deploy workflow.

Distinguish recorded observations from agent claims, and fixture evidence from real Oracle/browser results. A failed inner job result is failed even if its worker exited normally. Stale workers remain unknown. Do not retry a mutation after a lost response until the current state is reconciled. Missing setup, credentials or browser access are explicit limitations, not successful checks.

Settings offer `executionMode: team|single` and `browserMode: codex|external`. They apply to chat, CLI and panel launches. Single mode shows one agent and self-verification; team mode retains mandatory reviews and independent QA. The selected browser is for APEX checks; always keep this dashboard in Codex.

Plugin-level `sqlcl.databaseTransport` selects `direct` (default) or `ords`. ORDS requires CLI execution and uses plugin-managed connection URL, username and a separate private password file. Do not ask users to save OREST connections in SQLcl or send passwords through chat/MCP. Open the local dashboard for password entry, or accept a user-supplied local `--password-file` path. Public snapshots contain metadata only. Keep read/deploy references separate, preserve direct mappings when adding ORDS, and never fall back to a different transport on failure. ORDS APEXlang import/export uses the bundled bridge with Oracle SQLcl libraries; missing live verification remains a blocker, not a passed import.
