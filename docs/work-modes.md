# Execution and verification-browser settings

English | [Українська](work-modes.uk.md)

In **Settings → Defaults for new work**, choose **Execution mode** and **Browser for APEX verification**, then **Save work defaults**. These are project preferences stored in `.apexrest/panel/preferences.json`. They apply to chat (`apexrest_work_start`), CLI, and dashboard launches. The defaults are always `single` and `codex`. To enable multi-agent work, explicitly select **Agent team** here and save; the form records `multiAgentEnabled: true`. Saving **Single agent** revokes that opt-in. The launch form cannot enable it.

Legacy files without `multiAgentEnabled: true` resolve to single even when they contain `executionMode: team`: older versions wrote that value by default, so it is not reliable evidence of user choice. Reading does not rewrite the file, and browser, developer count, sandbox and timeout preferences are preserved. Explicit opt-in survives partial settings updates. Queued team requests without recorded opt-in are blocked before dispatch; already running and historical runs are not reinterpreted or restarted.

## Execution mode

| Setting | Sessions and completion |
| --- | --- |
| `team` — Agent team | Manager, one to three developers and independent QA. Both manager reviews and all required QA checks must pass. |
| `single` — Single agent | Exactly one session plans, implements and verifies. No manager/QA sessions or peer delegation. All required self-verification checks must pass. |

Both modes retain the dashboard, observed tool activity, model and token information, user messages, cancellation, time limits and durable results. In single mode the developer count is disabled in the form and normalized to one at launch. Team mode retains the saved developer count. The single agent is Pikachu; the panel labels its role **Single agent** and its checks **Agent verification**, never independent QA.

Results bind to the final source digest and task revision. Later changes produce `result_stale` for a single agent or `review_stale` for a reviewed team. Failed checks, unavailable required checks and cancellation cannot become completed work. Repairs are limited to three revisions; unavailable prerequisites are reported. User corrections received during completion require another revision.

Explicit per-request options override saved defaults within the Settings opt-in: `executionMode: team` is rejected with `MULTI_AGENT_DISABLED` unless `multiAgentEnabled` is true. Active runs keep the options recorded at launch. An exact `requestId` retry returns the original run even if defaults have since changed; changed inputs with that ID are rejected. The API retains the `teamId` field and `team.*` control operations in both modes for compatibility. Setup and reference utilities remain directly callable.

## Verification browser

| Setting | Interactive APEX page verification |
| --- | --- |
| `codex` — Codex in-app browser | `apexrest_browser_open` returns the explicit environment URL and `host_action_required`; the host opens it through its in-app browser controls. |
| `external` — External system browser | The tool opens the explicit environment URL in the system browser. This can use the user's existing interactive browser/SSO session. |

The dashboard always stays inside Codex. Browser mode is supplied to every agent and pinned in the run's domain-tool environment. Opening a URL reports `verified: false`; rendering, navigation and affected interactions need actual controls for the selected browser. Missing controls or login remain an incomplete check. No silent browser fallback, credential/profile copying or login recording occurs.

This setting controls interactive verification, not automated Playwright suites. `test e2e` and `test auth` continue to use separate allowlisted Playwright state. System-browser login does not export cookies into those suites. Google/other identity-provider restrictions can still block automation; external browser selection does not guarantee SSO success. Opening the configured target does not authorize test mutations or imports.

## CLI and MCP

```sh
apexrest panel action --project /absolute/application --action '{"kind":"preferences","settings":{"executionMode":"single","multiAgentEnabled":false,"browserMode":"external","developers":1,"sandbox":"workspace-write","timeoutSeconds":900}}' --json
apexrest work start "Implement the requested change" --request-id REQUEST_UUID --project /absolute/application --json
apexrest browser open --project /absolute/application --env dev --json
```

Use a fresh UUID for `REQUEST_UUID`. `--execution-mode team|single` and `--browser-mode codex|external` explicitly override defaults for a run. Omitting them honors saved settings. To enable a team through CLI/MCP after an explicit user request, save `{"kind":"preferences","settings":{"multiAgentEnabled":true,"executionMode":"team"}}` with `panel action`; passing `--execution-mode team` alone cannot grant this opt-in. The MCP equivalents are `apexrest_panel_action`, `apexrest_work_start` and `apexrest_browser_open`. The browser opener accepts an explicit configured environment, not arbitrary URLs or shell commands.

See [current implementation evidence](implementation-status.md), [chat workflow](chat-workflow.md) and [panel](panel.md). Native Codex runs, local Playwright panel rendering, system-browser launch and authenticated Oracle/SSO verification are separate evidence scopes.
