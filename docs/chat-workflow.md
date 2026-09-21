# APEX work from Codex chat and automatic model routing

English | [Українська](chat-workflow.uk.md)

Single-agent execution is the default. Multi-agent work runs only after the user explicitly selects **Agent team** in **Settings → Defaults for new work** and saves it (`multiAgentEnabled: true`). A launch override cannot enable a team. Choose verification browser (`codex` or `external`) in the same settings. See [mode settings](work-modes.md). Independent review/QA descriptions below apply only to enabled team mode; screenshots from September 17 show the earlier panel.

Describe an Oracle APEX change in the current Codex chat. The [APEX work from chat skill](../plugins/apexrest-apex/skills/apexrest-work/SKILL.md) resolves the configured mode. Single mode performs the work directly in this existing session. Enabled team mode starts separate role sessions and opens their live panel. The user does not need to create a task in the web interface.

## Single mode in the current chat

1. Codex resolves the application project and preserves the user's request, constraints and authorization.
2. `apexrest_work_start` returns `executionHost: current_session` and `status: current_session`. A fresh UUID `requestId` identifies the request; an exact retry reuses the receipt, and changed inputs with that UUID are rejected. The compatibility `teamId` is a receipt identifier, not a background run or completion result.
3. The current session reads only relevant source/reference material, makes the change and performs applicable checks. No separate agent, App Server startup, model discovery/routing, extra planning turn, panel autostart or `apexrest_team_wait` is needed. Batch independent reads and avoid repeated context or checks without a new reason.
4. For visible APEX changes, use `apexrest_browser_open` for the configured environment and honor the saved or explicit browser preference. Opening a URL does not establish verification. Existing import authorization, target identity, backup, drift and deployment safeguards still apply.
5. Report actual changes, verification and limitations in the same conversation. The host's model, approval policy and sandbox govern execution. The plugin does not independently meter this chat, enforce its task timeout or issue a digest-bound completion result. User corrections and cancellation use the current Codex conversation.

## Team chat lifecycle

With team mode explicitly enabled, `apexrest_work_start` creates the internal run and private panel URL. The host opens it inside Codex, then uses `apexrest_team_wait` for meaningful progress or terminal results. An `unchanged: true` response remains compact; `apexrest_team_status` provides bounded reports. Codex relays corrections to the existing team and returns its two manager reviews, independent QA and limitations to the same chat. Only `completed` with a current source digest counts as reviewed team completion; it does not authorize deployment.

A panel failure preserves the team ID and monitoring path. Do not start a replacement because display failed. An interrupted host turn can recover using the existing team ID. Codex CLI can display the panel in an interactive terminal or report progress in the current conversation when no additional terminal surface is available. Team review order, source binding, sandboxes and trust remain those of the [team workflow](team.md).

The plugin has no global chat interceptor or callback into arbitrary conversations. Native skill discovery selects the workflow; installing or updating the plugin requires a new Codex task to refresh its cached skill/tool catalog. Standalone reference questions, setup and connection diagnostics use individual tools.

## Auto models

Auto applies only to separate team sessions. Single mode uses the model already selected in the current Codex chat. For teams, Auto discovers the account's current models and supported reasoning levels through Codex App Server `model/list`. It supplies the model and supported effort on each `turn/start`, retaining the same separate role sessions. The manager's planning turn supplies a structured complexity assessment, so classification adds no model call. Negative scope restrictions alone do not imply complex work.

| Work | Preferred selection |
| --- | --- |
| Initial manager plan | GPT-5.6 Sol, medium |
| Simple developer task | GPT-5.6 Luna, low |
| Ordinary implementation, manager review and QA | GPT-5.6 Sol, medium |
| Complex implementation and manager review | GPT-6 Astra, high; QA starts on Sol, medium |
| First implementation repair | At least balanced/medium |
| Two failed implementation cycles | Strong/high for subsequent scheduled turns, within the existing three-revision limit |

Revision causes distinguish implementation defects from missing setup, permissions or evidence. Blocked prerequisites do not trigger model escalation. A new user requirement clears the earlier simple classification. Classification and escalation only affect model selection; neither can grant access or bypass failed QA.

Only models present in the current catalog can be selected. Known alternatives include Terra and GPT-5.5; an available catalog default is the final fallback. Unsupported reasoning levels fall back to a supported low/medium/high or minimal/none level, with a recorded explanation. Auto never chooses extra-high/max/ultra reasoning. An empty, unsupported or malformed catalog blocks startup instead of silently inheriting an expensive model.

The panel and CLI show the selected model, effort, routing reason, cumulative token counts, available input/cache/output/reasoning breakdowns and the whole-task time limit. Cached input is a subset of input; reasoning output is a subset of output. Do not add these subsets again or interpret token counts as a bill. Model rerouting reported by Codex updates the displayed effective model and event history. The task has a time limit, not a hard token-spend cap.

## Context and evidence

Each team role gets a bounded roster, relevant peer messages and recent review/QA summaries. Raw command transcripts are retained in the private durable report instead of being copied into every turn. Truncated summaries point to the full report; independent source inspection and actual checks are still required. This reduces repeated context, but does not establish a percentage saving across different tasks or Codex subscription usage.

[App Server documentation](https://learn.chatgpt.com/docs/app-server) describes model discovery, per-turn model/effort overrides and token notifications. Local fixture tests cover routing, fallback, required review gates, start retry identity and waiting. Real Codex model execution, browser rendering and Oracle verification are separate evidence layers; see [implementation status](implementation-status.md).
