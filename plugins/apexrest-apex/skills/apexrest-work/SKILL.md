---
name: apexrest-work
description: Complete Oracle APEX changes directly in the current Codex chat. Excludes setup, reference questions and Salesforce Apex.
---

# APEX work

Work directly in the user's current Codex session. Preserve its task, context, model, permissions and read-only constraints. Resolve the absolute application project containing `apexrest.json`; reuse known project settings or call `apexrest_project_inspect` with `detail: "summary"` when needed. No plugin task registration or startup call is required. Configured target identity is not live verification.

Read relevant source and focused reference matches; follow offsets/contracts when needed. Reuse discovery until its inputs change, batch coherent edits and independent reads, and run relevant checks once per change. Broaden checks only for a failure or unresolved risk. Long MCP tools wait up to 25 seconds automatically. For completed jobs, inspect `data.result.ok` and actual checks; completion alone is not success. For queued/running jobs, use `apexrest_job_status` with the existing ID and `waitSeconds: 25`. Never rerun an operation to retrieve output. Read full artifacts only for omitted details needed to proceed; reconcile uncertain writes before retrying.

For visible changes, call `apexrest_browser_open` for the configured environment and honor the returned browser preference; follow [browser verification](../apexrest-test/SKILL.md#in-app-browser-verification). A URL is not verified behavior; report missing controls/login. Open the [development panel](../apexrest-panel/SKILL.md) only when useful or requested.

An identified authorized application import follows [deploy](../apexrest-deploy/SKILL.md): fresh target checks, backup, source/target drift, plan/apply and runtime verification remain required. Preserve required suites and unknown-outcome recovery. Report actual changes, checks and limitations in this conversation. No broader DB changes, downloads, publication or external messages are implied.
