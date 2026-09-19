# Development panel

English | [Українська](panel.uk.md)

Settings also select **Direct Oracle listener / ORDS HTTP(S)** and manage plugin-level connection references. For ORDS, enter the schema URL, **Database username** and **Database password** of an existing Oracle database account with access through ORDS. No separate ORDS account is needed. These fields configure the plugin's connection to that account. ORDS uses CLI execution. See [ORDS setup and APEXlang behavior](ords.md).

For direct Oracle access, choose an existing SQLcl saved connection from the selector. Opening Direct connection settings loads the list; **Refresh saved connections** reads it again on request. Loading reads SQLcl's local connection names without connecting to a database. The control shows loading, empty-list and error states, with **Retry** after a failure. Existing mappings remain available even if SQLcl does not return them in the refreshed list. Switching database transport preserves each reference's direct mapping and stored ORDS credentials.

Choose execution mode (`team` or `single`) and verification browser (`codex` or `external`) in project settings. See [mode settings](work-modes.md). Independent review/QA descriptions below apply to team mode; screenshots from September 17 show the earlier panel.

[APEX work from chat](chat-workflow.md) automatically opens the selected team view; the web task form is optional. Auto routing reasons, cumulative token breakdowns and the task time limit appear on the team cards. Cached input and reasoning output are subsets, not extra tokens or a price estimate.

For a complete walkthrough with actual screenshots, see [Agent workflow: from task to reviewed result](agent-workflow.md).

Open `$apexrest-panel` in Codex desktop for a live workspace view in the in-app browser. The skill calls `apexrest_panel_open` with the absolute application project directory and opens the returned private local URL. Use the application project, not the plugin source or its installed cache. A folder without `apexrest.json` can be inspected but cannot start development work.

In Codex CLI:

```sh
apexrest panel tui --project /absolute/application
apexrest panel status --project /absolute/application --json
apexrest panel open --project /absolute/application --json
```

The TUI uses the same snapshot. Keys `1`–`4` or left/right switch views, up/down or page keys scroll, `r` refreshes and `q` exits. It restores terminal state on exit. Use CLI/MCP actions to make changes from the console; images are displayed in the desktop panel, names and roles in the terminal.

## Views and actions

| View | Recorded information and available work |
| --- | --- |
| Overview | Task, current phase, review gate, effective SQLcl mode, Git changes and observed agent tool activity |
| Agents | Separate sessions, current tool, actual model/reasoning/sandbox, reported token usage, peer messages, manager reviews, independent QA checks and task updates/cancellation |
| APEX operations | Real background jobs and nested result status, diagnostics/artifact references, durable deployment/import state; queue source compilation, tests or an explicit-environment deployment plan |
| Settings | Full project configuration, environment identity and connection references, toolchain lock, required suites, browser/artifact settings and grant metadata; edit SQLcl CLI/MCP mode and defaults for future teams |

Refresh runs every two seconds while the view is visible. The saved SQLcl connection list is loaded by an explicit action, independently of this refresh. Focused inputs are preserved. Settings changes affect future work; do not switch transport during active database work. Secret stores are never read for display. History is bounded to twelve recent runs, with concise team events and reports; the durable local records retain the original details. Token counts are the totals reported by Codex, including input context, not an estimate of cost.

`apexrest_panel_action` accepts an explicit allowlisted action. CLI example:

```sh
apexrest panel action --project /absolute/application --action '{"kind":"validate"}' --json
```

Supported kinds: `preferences`, `sqlcl`, `connection`, `saved-connections`, `start`, `message`, `cancel-team`, `cancel-job`, `validate`, `test`, `browser`, `plan`. The `saved-connections` action reads the selected SQLcl installation's saved names. Only the local browser form accepts an ORDS password; MCP connection actions exclude that field. New implementations use the selected single-agent or reviewed-team mode. The panel cannot submit review approvals, grant trust or apply a deployment directly. An authorized import still uses the existing [deploy workflow](deployment-safety.md). An expired heartbeat or a lost mutation response is not success; reconcile recorded state before retrying. Cancellation does not undo changes.

## Pokémon identities

| Name | Role |
| --- | --- |
| Mewtwo | Project manager |
| Pikachu | Developer 1 |
| Charmander | Developer 2 |
| Bulbasaur | Developer 3 |
| Squirtle | Independent QA |

Names are stable within every team and accompany role labels in the panel, terminal, roster and agent instructions. Role keys still control communication, sandbox policy and review authority. Ephemeral App Server sessions reject `thread/name/set`, so these are plugin-owned identities, not renamed tasks attached to the current desktop conversation. Avatars are bundled locally from [PokeAPI sprites](https://github.com/PokeAPI/sprites); source revisions, hashes and upstream image copyright are retained in `packages/panel/assets`. No external image requests are made while using the panel. The project’s APEXREST logo is unchanged.

## Codex integration and evidence

The local server binds only to loopback, validates Host/Origin, requires a private session capability for data/actions and serves a fixed asset allowlist. It stops after one hour without authorized requests. The capability is kept in the URL fragment and private project state; do not publish the URL or session file. Existing project trust, exact target/plan authorization, backups and drift checks remain enforced by the underlying operations. Runtime team tools cannot launch another panel or team.

The MCP server also advertises a self-contained `text/html;profile=mcp-app` resource and the documented UI bridge for Codex hosts that expose it. Resource discovery and content checks do **not** establish embedded MCP UI rendering. The verified desktop route is the actual Codex in-app browser, not a custom sidebar extension. No Codex fork or other-agent compatibility layer is used. See the [source audit](codex-integration.md).

[Panel evidence](evidence/panel-local-checks.json) separates local security/contracts, actual in-app browser observations, console PTY checks and native plugin discovery. [Native team evidence](evidence/panel-team-native.json) uses real Codex inference on an isolated local coding task. No Oracle import, production change, Windows panel run or private desktop subagent attachment is claimed.

The connection-settings revision has separate [local evidence](evidence/connection-settings-local.json) and [native-host evidence](evidence/connection-settings-native.json). Their recorded results define which controls and calls were actually checked; implementing the labels and selector does not itself establish browser rendering or a successful database connection. Earlier panel evidence retains its original scope.
