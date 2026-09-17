---
name: apexrest-team
description: Run Oracle APEX development through a mandatory developer, project-manager code review, independent QA and final manager review. Use as the primary APEXREST implementation entry point, or to inspect, steer or stop a team.
---

# Reviewed development team

For an implementation task, call `apexrest_team_start` with the user's absolute configured application `project` and their complete task, constraints and existing authorization. The runtime creates separate Codex sessions for the manager, developer(s) and QA. Do not replace this with optional model-chosen subagents or perform the implementation in the host conversation. Source edits default to a project write sandbox; select `read-only` for analysis-only tasks. Use `developers` for one to three developer sessions; one is the default. The runtime serializes their edits to avoid collisions.

The state machine always runs planning, development, manager code review, independent QA, and manager review of QA. A request for repairs returns to development and repeats both reviews, with at most three revisions. The host cannot mark a team complete or supply its own approvals. Only `status: completed` is a reviewed result, and its source digest must still match. `review_stale`, `review_failed`, `blocked`, `outcome_unknown` and `cancelled` are not successful completion. Reports are agent evidence, not proof that an unavailable Oracle/browser check ran.

Poll `apexrest_team_status` at reasonable intervals and summarize concrete changes in phase or findings. Use `apexrest_team_message` for user corrections while the team is active; status distinguishes queued and acknowledged messages. New user input invalidates earlier completion decisions. Use `apexrest_team_cancel` when the user stops the work. Cancellation does not revert file or database changes. Never retry an unknown outcome automatically.

The team owns its App Server process and sessions. It does not attach to the user's current desktop conversation. Its members share only this project's files, a scoped roster, peer reports and messages through `team_context` and `team_message`. The plugin supplies these tools; no public API for the desktop's private subagent bus is assumed. Members cannot spawn additional agents or managers. Manager and QA use read-only sandboxes and read-only APEXREST tools. Background sessions cannot approve escalations or provide missing interactive credentials.

If `apexrest.json` is absent, use the project workflow to initialize or adopt the requested project before starting. Project trust and Codex login must already be valid; report the exact setup blocker without changing host trust or copying tokens. This skill does not authorize downloads, publication, environment provisioning or database changes. For identified authorized application imports, preserve the existing plan/apply, target, backup and runtime-verification requirements. Administrative setup, reference lookup and connection diagnostics remain individual tools; they do not produce a reviewed application implementation.

Use `$apexrest-panel` to follow the team in Codex. Stable plugin agent names and panel avatars are Mewtwo (manager), Pikachu, Charmander and Bulbasaur (developers), and Squirtle (QA). These identities do not change review gates, sandboxes or peer routing keys.
