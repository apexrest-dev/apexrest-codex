---
name: apexrest-work
description: Complete Oracle APEX changes in the current Codex chat, or an explicitly enabled reviewed team. Excludes setup, reference questions and Salesforce Apex.
---

# APEX work

For a new task, resolve its absolute project containing `apexrest.json` and call `apexrest_work_start` once with `project`, the complete `task`/constraints/authorization and a fresh UUID `requestId`. Omit options to honor saved settings; explicit user choices may override them. Default `single`; teams require user-enabled `multiAgentEnabled`. Never enable it merely to execute work. Assigned workers and an already-started current-session task continue without restarting this workflow.

- `executionHost: current_session`: implement and verify **in this user-opened Codex chat**. Reuse returned `projectContext` for paths, targets and required suites; it does not verify live identity. Keep the current context, model and permissions; honor read-only requests. No new agents, App Server, model discovery, team polling or automatic panel. `teamId` is a retry receipt, not completion. Report actual results here; steering/cancellation stay here, without plugin token metering or worker timeouts.
- `executionHost: worker`: follow the monitoring/completion rules in [team](../apexrest-team/SKILL.md), using the returned ID rather than starting again. Open the private panel inside Codex; a panel failure never justifies replacement work. Team completion needs current source-bound manager reviews and independent QA. Historical single-worker results are self-verification.

Read only relevant files and focused reference matches; follow offsets/contracts when needed. Reuse discovery until its inputs change. Batch coherent edits and independent reads. Run relevant checks once per change; broaden them only for a failure or unresolved risk. Long MCP tools wait up to 25 seconds automatically. If `data.status: completed`, inspect `data.result.ok` and its checks immediately; completion alone is not success. For queued/running jobs only, call `apexrest_job_status` with the existing ID and `waitSeconds: 25`. Never rerun an operation to retrieve output. Avoid full reports, exhaustive searches and repeated planning when focused evidence suffices.

Use the returned `browserMode` with `apexrest_browser_open` for the configured environment and follow [browser verification](../apexrest-test/SKILL.md#in-app-browser-verification). A URL is not verified behavior; disclose missing controls/login. Open the panel only when requested in single mode.

Exact retries reuse the ID and inputs; changed inputs need a new ID. Inspect uncertain starts before retrying. CLI/panel handoffs cannot inject work into a desktop chat. An identified authorized application import follows [deploy](../apexrest-deploy/SKILL.md): target checks, backup, plan/apply and runtime verification remain required. No broader DB changes, downloads, publication or external messages are implied.
