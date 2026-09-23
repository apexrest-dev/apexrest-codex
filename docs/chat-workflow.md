# APEX work in the current Codex session

English | [Українська](chat-workflow.uk.md)

Describe an Oracle APEX change in the current Codex chat. The [APEX work skill](../plugins/apexrest-apex/skills/apexrest-work/SKILL.md) guides implementation directly in that conversation, using its existing context, model and permissions. There is no plugin task registration or startup call.

1. Resolve the application project and preserve the request, constraints and authorization. Reuse known configuration or request `apexrest_project_inspect` with `detail: "summary"` when needed. Configured identities are not verified live targets.
2. Read relevant source and focused references, make coherent edits, and run the checks appropriate to the change. Reuse discovery until inputs change.
3. Long operations wait within one bounded MCP call. A completed job can still have failed: inspect its actual result and diagnostics. For queued/running work, wait on the existing job ID with `apexrest_job_status`; never restart work just to retrieve output.
4. Complete authorized imports through the [deployment workflow](deployment-safety.md), preserving identity, backup, drift, coordination and unknown-outcome protections. Existing required suites remain in force.
5. For visible changes, open the configured application with `apexrest_browser_open` and follow the [browser verification rule](testing.md#in-app-browser-verification). Record actual observations separately from automated tests.
6. Report changes, checks and limitations here. User corrections and cancellation use the existing Codex conversation. Open the [panel](panel.md) when useful or requested.

Codex controls its own execution and collaboration. APEXREST provides Oracle/APEX tools; it does not create model sessions or select models. The plugin has no global chat interceptor or callback into arbitrary conversations. A new Codex task may be needed after plugin installation or update to refresh the host's cached skill/tool catalog.
