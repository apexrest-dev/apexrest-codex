---
name: apexrest-panel
description: Open the APEXREST panel inside Codex; inspect settings, agent work, reviews and APEX jobs, or steer an enabled team.
---

# Development panel

Call `apexrest_panel_open` with the absolute application project. Open its exact URL in Codex's in-app browser (`open_in_codex` when available). Keep the URL's session capability out of public evidence, commits and messages to others. Verify rendering; a URL alone proves none. In Codex CLI, use interactive `apexrest panel tui --project PATH` or `apexrest_panel_status` for a snapshot.

The panel shows project/target settings, SQLcl mode, execution/browser preferences, worker models/tools/messages/reviews/QA, Git changes and durable APEX jobs. Names: Mewtwo (manager), Pikachu/Charmander/Bulbasaur (developers), Squirtle (QA); role keys control routing/permissions.

For implementation, use [work routing](../apexrest-work/SKILL.md). Single returns a current-chat handoff; the panel cannot inject it into chat or start a background agent. Enabled teams can start through the panel or `apexrest_team_start`. Panel actions retain project trust, schemas and deploy policy; the panel cannot approve work, grant deploy authorization or bypass backup, identity, drift or unknown-outcome safeguards. Complete authorized imports through [deployment](../apexrest-deploy/SKILL.md). Settings affect future runs; never switch transport during a database operation.

Separate observations, agent claims, fixtures and real Oracle/browser evidence. Inner job failure remains failure even after a normal worker exit; stale workers remain unknown. Reconcile lost mutation responses before retrying. Report missing setup, credentials or browser access as limitations.

`executionMode: team|single` and `browserMode: codex|external` apply to chat, CLI and panel launches. Single uses current-chat self-verification; team retains mandatory reviews/independent QA. The browser choice applies to APEX checks; the dashboard stays in Codex.

For `sqlcl.databaseTransport: ords`, read [ORDS setup](../apexrest-setup/references/ords.md) before connection or transport changes; never silently switch transport or send passwords through chat/MCP.

Single is the default. Set `multiAgentEnabled` only on an explicit Settings request; launch overrides and legacy `executionMode: team` alone cannot enable teams.
