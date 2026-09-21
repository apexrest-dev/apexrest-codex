---
name: apexrest-debug
description: Diagnose APEXREST compiler, deployment and test failures with a bounded repair loop.
---

For an implementation or repair task in the host conversation, use [the configured work workflow](../apexrest-work/SKILL.md) before editing. Carry the full task and existing authorization into `apexrest_work_start`. Default to a single agent; multi-agent work requires explicit user opt-in in Settings. When already assigned as a member of that team, follow the specialist guidance below; never start another team.


Pass the absolute workspace `project` path on project-scoped MCP calls. The native server starts in its installed plugin directory, which is not the user project.
Classify the failure before changing code: input, dependency, auth/policy, conflict, source, target, assertion or unknown outcome. Read bounded registered artifacts; do not ingest full schema dumps or traces. Fix the smallest causal component, rerun compiler and affected test, then the required suite gate. After three unsuccessful attempts at the same cause, stop and report evidence and the missing input. Never weaken security or delete failing tests to obtain green.

For UI failures, use the [in-app browser verification rule](../apexrest-test/SKILL.md#in-app-browser-verification) to reproduce the issue and verify the repair when available on the authorized target.
