---
name: apexrest-debug
description: Diagnose APEXREST compiler, deployment and test failures with a bounded repair loop.
---

For a new implementation task, follow [work routing](../apexrest-work/SKILL.md) once. Current-session work and assigned team members continue here without restarting orchestration.

Pass the user's absolute workspace as `project` on project-scoped calls.
Classify the failure before changing code: input, dependency, auth/policy, conflict, source, target, assertion or unknown outcome. Read bounded registered artifacts; do not ingest full schema dumps or traces. Fix the smallest causal component, rerun compiler and affected test, then the required suite gate. After three unsuccessful attempts at the same cause, stop and report evidence and the missing input. Never weaken security or delete failing tests to obtain green.

For UI failures, use the [in-app browser verification rule](../apexrest-test/SKILL.md#in-app-browser-verification) to reproduce the issue and verify the repair when available on the authorized target.
