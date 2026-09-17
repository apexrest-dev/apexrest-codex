# APEX work from Codex chat and automatic model routing

English | [Українська](chat-workflow.uk.md)

Describe an Oracle APEX change in the current Codex chat. The implicitly discoverable [APEX work from chat skill](../plugins/apexrest-apex/skills/apexrest-work/SKILL.md) starts a reviewed team, opens its live panel in the Codex in-app browser and returns the terminal result to the same chat. The user does not need to create a task in the web interface. The panel remains available for inspection and optional steering.

## Chat lifecycle

1. Codex resolves the configured application project and preserves the user's full request, constraints and authorization.
2. `apexrest_work_start` creates the internal team and prepares a private panel URL that selects this team and its Agent team view. A fresh UUID `requestId` identifies each task. Retrying exactly the same request reuses the team; reusing the UUID with different inputs is rejected.
3. The host opens that URL with Codex's in-app browser tool. Codex CLI can show the panel in an interactive terminal, or report progress in the current conversation when no additional terminal surface is available. No external browser or new user-owned chat is required.
4. `apexrest_team_wait` waits up to 30 seconds for a meaningful change or terminal state. Its cursor ignores heartbeat/token-only updates. The host keeps the request active, relays meaningful progress and passes user corrections to the existing team.
5. The same chat receives the actual terminal result: changes, two manager reviews, independent QA evidence and limitations. Only `completed` with a current source digest counts as reviewed completion. A successful team is not a deployment authorization.

A panel failure preserves the team ID and monitoring path. Do not start a replacement because display failed. An interrupted host turn can recover using the existing team ID. The plugin has no global chat interceptor or callback into arbitrary desktop conversations: native skill discovery selects the workflow, and the originating host turn opens the panel and reports the result. Installing or updating the plugin requires a new Codex task to refresh its cached skill/tool catalog.

Standalone reference questions, setup and connection diagnostics use individual tools rather than creating an implementation team. Review order, source binding, sandboxes, trust and deployment protections remain those of the [mandatory team workflow](team.md).

## Auto models

Auto is the only model-selection mode. It discovers the account's current models and supported reasoning levels through Codex App Server `model/list`. It supplies the model and supported effort on each `turn/start`, retaining the same separate role sessions. The manager's existing planning turn supplies a structured complexity assessment, so classification adds no model call. Negative scope restrictions alone do not imply complex work.

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

Each role gets a bounded roster, relevant peer messages and recent review/QA summaries. Raw command transcripts are retained in the private durable report instead of being copied into every turn. Truncated summaries point to the full report; independent source inspection and actual checks are still required. This reduces repeated context, but does not establish a percentage saving across different tasks or Codex subscription usage.

[App Server documentation](https://learn.chatgpt.com/docs/app-server) describes model discovery, per-turn model/effort overrides and token notifications. Local fixture tests cover routing, fallback, required review gates, start retry identity and waiting. Real Codex model execution, browser rendering and Oracle verification are separate evidence layers; see [implementation status](implementation-status.md).
