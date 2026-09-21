---
name: apexrest-team
description: Inspect, steer or stop Oracle APEX work, or explicitly start a reviewed team. New implementation requests use apexrest-work.
---

For new chat tasks, use [work routing](../apexrest-work/SKILL.md). For explicit orchestration, call `apexrest_team_start` with the absolute configured application `project` and full task, constraints and existing authorization; omit overrides to honor saved preferences.

## Execution

- Default `single` returns `executionHost: current_session`, a receipt rather than a completed result. Implement and verify in the user's current Codex chat: no spawned agent, automatic panel, polling, manager or independent QA. Report actual self-verification. The panel cannot observe this chat's activity/tokens or inject tasks into it. Historical single-worker records remain readable.
- `team` requires the user's explicit `multiAgentEnabled` Settings opt-in; launch overrides cannot enable it. Never change that setting without an explicit request or replace an enabled team with model-chosen subagents. Team owns an App Server and separate sessions, not the user's desktop conversation. `developers` selects 1–3 developers with serialized edits; single ignores that count. Use the project write sandbox for implementation, `read-only` for analysis.
- Team gates: planning → development → manager code review → independent QA → manager QA review. Repairs repeat development and both reviews, at most three revisions. Only `status: completed` with a matching source digest is reviewed success. `review_stale`, `review_failed`, `blocked`, `outcome_unknown` and `cancelled` are not success. The host cannot supply approvals or mark completion. Agent reports do not prove unavailable Oracle/browser checks ran.

## Existing worker runs

Use `apexrest_team_wait` with the prior cursor and `waitSeconds: 25`; load full `apexrest_team_status` only for needed details. Report changed phases/findings. Forward user corrections with `apexrest_team_message`; distinguish queued/acknowledged messages and invalidate earlier completion decisions. Cancel via `apexrest_team_cancel` when requested; this does not revert changes. Never automatically retry unknown outcomes.

Members share project files, scoped roster, peer reports and `team_context`/`team_message`; no private desktop subagent API is assumed. Members cannot spawn more agents. Manager/QA use read-only sandboxes and APEXREST tools plus the verification-browser opener. Workers cannot approve escalations or supply interactive credentials.

## Boundaries

If `apexrest.json` is missing, [initialize/adopt the requested project](../apexrest-project/SKILL.md). Require valid project trust/Codex login; report blockers without changing trust or copying tokens. This skill grants no downloads, publication, provisioning or database changes. Authorized application imports retain [plan/apply safeguards](../apexrest-deploy/SKILL.md). Administrative/reference tools do not produce reviewed implementations.

Open [the panel](../apexrest-panel/SKILL.md) when requested; workers retain activity, tokens, steering and cancellation there. Follow the launch-pinned `browserMode` through [selected-browser verification](../apexrest-test/SKILL.md#in-app-browser-verification). The dashboard stays in Codex.
