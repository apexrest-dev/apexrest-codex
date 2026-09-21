# Opt-in development team

English | [Українська](team.uk.md)

Single-agent execution is the default. Multi-agent work runs only after the user explicitly selects **Agent team** in **Settings → Defaults for new work** and saves it (`multiAgentEnabled: true`). A launch override cannot enable a team. Choose verification browser (`codex` or `external`) in the same settings. See [mode settings](work-modes.md). Independent review/QA descriptions below apply only to enabled team mode; screenshots from September 17 show the earlier panel.

New implementation requests use [APEX work from chat](chat-workflow.md). Single mode uses the existing Codex chat directly, without another agent, App Server launch, panel autostart, model routing or team wait. Its `current_session` response and compatibility `teamId` record the request; they do not certify completed work. The current host controls model, approvals and sandbox. The lifecycle and controls below apply to explicitly enabled teams: Codex opens their panel and returns the result to the originating conversation. [Auto routing](chat-workflow.md#auto-models) selects supported models and reasoning for each scheduled team turn.

For a complete walkthrough with actual screenshots, see [Agent workflow: from task to reviewed result](agent-workflow.md).

The primary chat entry is `$apexrest-work`; `$apexrest-team` exposes direct controls. With multi-agent enabled in Settings, the runtime creates one project manager, one to three developers and one independent QA agent as separate Codex App Server sessions. Developers work sequentially in the same project. The manager defines assignments; the controller creates the roles and enforces their order.

## Required sequence

Planning → development → manager code review → independent QA → manager review of QA → completed.

A rejected code review returns to development. After a valid QA report, the manager reviews it even when QA failed. Failed or unavailable QA checks cannot be overridden by a manager approval. Repairs repeat the reviews, with at most three revisions. Malformed reports, unsupported protocol, missing interactive input and changed files during a read-only review block success. Decisions are bound to a digest of project files; later changes make the result `review_stale`.

The digest includes untracked files and configuration, excluding `.git`, `.apexrest`, `node_modules` and `.DS_Store`. Symlinks bind their link text, not external target contents. These exclusions and external dependencies are outside this digest guarantee. A team result is not an external signature or production deployment approval; agents share the user's machine and project.

## APIs and use

| MCP tool | CLI | Purpose |
| --- | --- | --- |
| `apexrest_team_start` | `team start` | Resolve the saved mode: a current-session receipt for single, or a run ID for an enabled team |
| `apexrest_team_status` | `team status` | Read phase, roles, messages, review decisions and result |
| `apexrest_team_message` | `team message` | Queue a user correction; invalidate a completion based on earlier input |
| `apexrest_team_cancel` | `team cancel` | Request interruption; never claim rollback |

```sh
apexrest team start --project /absolute/project --task "Add the requested APEX page" --execution-mode team --developers 2 --json
apexrest team status TEAM_ID --project /absolute/project --json
apexrest team message TEAM_ID "Also verify empty results" --project /absolute/project --json
apexrest team cancel TEAM_ID --project /absolute/project --json
```

These commands assume that the user already enabled team mode in Settings. A launch flag cannot enable it. Team status/message/cancel controls do not steer or stop the current Codex chat.

The configured project must already be trusted. The Codex executable and login must work. The default developer sandbox is `workspace-write`; `--sandbox read-only` supports analysis-only work. The default time limit is 900 seconds, configurable from 30 to 3600. Models and reasoning use Auto routing as described below; there is no manual model selector. Background work uses the account's normal Codex capacity.

## Shared evidence and boundaries

Each role receives scoped `team_context` and `team_message` tools. Peer messages reach the next scheduled turn, or steer an active turn. They cannot target an unrelated session or create more agents. Context contains peer reports, actual protocol observations, review decisions and QA reports. Command summaries and message delivery are recorded locally, with redaction and size limits. This is inspectable execution evidence, not a guarantee that every test claim is correct.

Private reports are stored under `.apexrest/teams/<id>/`. Status responses are bounded; `fullReport` points to the complete local report. Queued messages may remain undelivered when their recipient has no further turn. A stale worker heartbeat is `outcome_unknown`; it does not trigger an automatic retry. Only one team holds the project lock. Cancelling stops further work without undoing existing file or database changes.

Manager and QA sessions use read-only sandboxes and read-only APEXREST MCP tools. Checks that require unavailable writes, authentication or additional permissions can block QA; the controller cannot silently waive them. Existing configured third-party tools remain subject to Codex policy; read-only file sandboxing is not a universal remote-service authorization boundary. Authorized APEX imports still need target, backup, plan and deployment grant safeguards.

The plugin owns these ephemeral sessions and reads their native completion events. It does not expose their turns through the desktop task's private subagent registry. See the [Codex source audit](codex-integration.md) for supported extension points and the exact scope of enforcement.

## Verification

Protocol fixtures in `tests/unit/team.test.ts` exercise ordering, rejection, failed QA, invalid output, isolation, source drift, user steering, cancellation and lock contention. They are not native Codex or Oracle evidence. `scripts/verify-team-native.mjs` separately runs actual Codex sessions against an isolated local coding fixture and repeats the tests independently. [The native report](evidence/team-native-local.json) records its observed outcome. Neither fixture establishes Oracle import behavior or desktop panel rendering.

Agent display names are fixed: Mewtwo (manager), Pikachu/Charmander/Bulbasaur (developers), and Squirtle (QA). The [panel](panel.md) displays their local avatars, actual configuration and current activity. Stable role keys retain review and routing authority; temporary Codex sessions cannot be renamed through metadata.
