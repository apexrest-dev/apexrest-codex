---
name: apexrest-panel
description: Open the APEXREST panel inside Codex to inspect Oracle/APEX operations and project, browser or connection settings.
---

# Development panel

Call `apexrest_panel_open` with the absolute application project. Open its exact URL in Codex's in-app browser (`open_in_codex` when available). Keep the URL's session capability out of public evidence, commits and messages to others. Verify rendering; a URL alone proves none. In Codex CLI, use interactive `apexrest panel tui --project PATH` or `apexrest_panel_status` for a snapshot.

The panel shows project/target settings, SQLcl execution and database transport, the verification-browser preference, Git changes and durable APEX jobs. Implementation continues in the [current chat](../apexrest-work/SKILL.md). Panel actions retain project trust, strict schemas and deploy policy; they cannot grant authorization or bypass backup, identity, drift or unknown-outcome safeguards. Complete authorized imports through [deployment](../apexrest-deploy/SKILL.md). Settings affect future operations; never switch transport during a database operation.

Separate local fixtures, actual operation outcomes and Oracle/browser observations. Inner job failure remains failure after a normal process exit; a stale job remains unknown. Reconcile lost mutation responses before retrying. Report missing setup, credentials or browser access as limitations.

`browserMode: codex|external` selects the browser for APEX checks; the dashboard stays in Codex. For `sqlcl.databaseTransport: ords`, read [ORDS setup](../apexrest-setup/references/ords.md) before connection or transport changes; never silently switch transport or send passwords through chat/MCP.
