# Programmatic automation for Codex

English | [Українська](codex-automation.uk.md)

The plugin targets Codex desktop and Codex CLI. The [24 MCP handlers](../packages/core/src/operations.ts) already execute ordinary program code; compilation, metadata reads and deployment do not need a model to perform their mechanical steps. Codex supplies task understanding and code changes. Explicitly enabled teams additionally use Codex App Server sessions for implementation and independent reviews.

## What runs without AI

Names below omit the `apexrest_` MCP prefix. Programmatic execution still requires appropriate authorization for writes.

| Tools | Programmatic responsibility | What Codex contributes |
| --- | --- | --- |
| `doctor`, `project_inspect` | Inspect capabilities and configured project; optionally hash sources | Interpret missing prerequisites and select relevant context |
| `metadata_read` | Validate scope, verify target, execute allowlisted paginated queries | Select objects and interpret their business meaning |
| `reference_search`, `reference_read` | Rank, cache, paginate and retrieve pinned references | Select applicable syntax and resolve design choices |
| `apex_generate`, `apex_export`, `apex_validate` | Run Oracle generation, staged export and compiler validation | Specify the application and repair source based on diagnostics |
| `deploy_plan`, `deploy_apply` | Create immutable plans; enforce identity, authorization, backup, drift, lease and outcome checks | Explain the proposed change and act within existing user authorization |
| `test_run` | Execute configured suites and collect actual evidence | Choose relevant checks, author assertions and assess coverage |
| `job_status`, `job_cancel`, `artifact_read` | Wait, track cancellation and read bounded sanitized artifacts | Interpret the result; reconcile an unknown outcome before retrying writes |
| `browser_open` | Resolve the configured URL and browser handoff | Use available Codex browser controls and assess visible behavior |
| `panel_open`, `panel_status`, `panel_action` | Serve local UI, aggregate state and dispatch validated actions | Decide which action advances the task; an explicitly enabled team action can start model work |
| `work_start`, `team_start`, `team_status`, `team_wait`, `team_message`, `team_cancel` | Route requests, persist receipts and enforce team transitions | Single work stays in the current chat; enabled teams use separate model sessions |

None of these handlers needs another model merely to format a report, poll a worker, enumerate files or look up an exact reference. Domain interpretation, application design, nontrivial edits and substantive review still require Codex reasoning. Passing deterministic gates does not establish that an application meets the user's needs.

## Implemented reductions in model round trips

- Six long MCP tools (`apex_generate`, `apex_export`, `apex_validate`, `deploy_plan`, `deploy_apply`, `test_run`) start a job once and wait inside the same call. `waitSeconds` accepts 0–30 and defaults to 25. Completion returns the existing job and its nested result, with the actual outcome also exposed in outer `ok`, `status`, `exitCode` and MCP `isError`; timeout returns the same `jobId` for `job_status`. Use 0 for immediate acknowledgement. Cancelling the MCP wait does not cancel the underlying job; explicit job cancellation retains existing safeguards.
- `metadata_read` accepts either its existing single request or `requests` containing 1–8 requests. Every request is validated before SQL; the batch verifies the target once, then executes scoped queries sequentially. Each query retains pagination and untrusted-content marking. Invalid batches do not become partial successes.
- Single `work_start` includes compact project paths, environment configuration and verification settings. `project_inspect` also accepts `detail: "summary"`; its default full inspection remains unchanged. The summary reads no application sources and makes no Oracle call. Configured target values are not verified target identity.
- Bounded MCP output preserves actionable nested failure diagnostics, artifact identifiers and deployment-plan safety details, with the complete sanitized result available through the artifact reader.

The implementation lives in [job handling](../packages/mcp/src/job-tools.ts), [metadata](../packages/core/src/metadata.ts), [project context](../packages/core/src/project.ts) and [output handling](../packages/mcp/src/output.ts). [Local validation](evidence/codex-automation-local.json) for `0.3.0-beta.1+codex.20260921193125` passed 217 unit, 22 contract and 14 packaging tests (253 total), typecheck and lint.

The [built CLI/stdio MCP check](evidence/codex-automation-runtime.json) confirms 24 tools, six with a default 25-second wait, success and failure each returned in one call with the correct outer outcome, and single work using `current_session`. For 50 synthetic source files, the project summary was 659 UTF-8 bytes versus 4,494 for full inspection (-85.34%). These are local response bytes and call counts; the checks do not measure Oracle execution time or establish billed-token savings. No model turn, App Server, Oracle or application-browser verification was part of this runtime check.

## Codex-specific execution

Use the installed Codex plugin, its local stdio MCP tools and the current chat for single work. Load only the relevant skill/reference sections; use returned summaries and job identifiers rather than reconstructing program state in prompts. Open the development panel when needed. Use App Server orchestration only for explicitly enabled teams.

No speculative API for attaching a worker to the current chat, controlling the desktop browser or extending its sidebar is introduced. Browser handoff is separate from actual browser verification. The [source audit](codex-integration.md) documents versioned host findings; metadata support alone is not proof of native UI rendering. No other-host compatibility layer is added.

Remaining verification is a matched real Codex task comparison using actual host usage counters, followed by separately authorized Oracle and application-browser checks. Local fixtures cannot prove native end-to-end speed, billed-token savings or live deployment correctness. Preserve target identity, explicit deployment scope, backups, drift checks, unknown-outcome handling and established required suites in every optimization.
