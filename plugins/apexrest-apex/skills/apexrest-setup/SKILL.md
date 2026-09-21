---
name: apexrest-setup
description: Set up APEXREST for Codex, diagnose local toolchain capabilities and guide connection onboarding. Use for APEXREST setup or missing runtime tools.
---

Pass the user's absolute workspace as `project` on project-scoped calls.
Call apexrest_doctor first. Distinguish detected tools, validated compiler, installed native plugin and database connectivity.
The doctor's `sqlcl.mode` selects the Oracle backend: `cli` invokes SQLcl directly; `mcp` invokes the official SQLcl stdio server (`sql -mcp`). This is independent of the APEXREST MCP interface exposed to Codex. Use the TUI's **SQLcl mode: CLI / MCP** action or the bundled CLI `sqlcl configure --mode cli|mcp`; `sqlcl status --json` reads the saved choice. Resolve `../../runtime/apexrest.mjs` from this skill directory and invoke it with Node when no launcher is on PATH. The choice is saved under the active `APEXREST_HOME` and applies to new Oracle operations without reinstalling the plugin. Preserve the selected backend; never silently retry through the other backend after failure. MCP restrict level 4 is the default; use `--mcp-restrict-level 1` only when the user requests script execution. Connected Oracle MCP operations may write Oracle's own `DBTOOLS$MCP_LOG`; do not call them strictly read-only database activity. Keep application imports in the existing plan/apply workflow in both modes.
Run the bundled installer only under the host's approved filesystem/network scope. Never change host trust or copy login tokens.
Request connection references through local onboarding; never ask for passwords in chat.
If a dependency is missing, use [Install dependencies](../apexrest-install-dependencies/SKILL.md) and the bundled `dependencies install` command. This installs the client toolchain without reinstalling the native plugin. Reserve `setup` for bootstrap plus native registration. No download runs during MCP startup.
An existing clean supported APEX installation is sufficient for ordinary deployment. APEXREST service tables and utPLSQL are not client/deploy setup prerequisites. Local deployment history/coordination is the default; utPLSQL is needed only for SQL suites, and database control tables only for the explicitly selected optional database mode.
After reinstall, use a new Codex thread. A saved JSON file does not prove host discovery or readiness.

For `sqlcl.databaseTransport: ords`, read [ORDS setup](references/ords.md) before connection or transport changes; never silently switch transport or send passwords through chat/MCP.
