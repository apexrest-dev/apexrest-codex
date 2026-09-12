# Deployment without service tables

The user amended the plugin rules on 2026-09-12: missing APEXREST service tables must not block ordinary deployment to a clean supported APEX installation. The original build specification is preserved; this amendment is recorded in AGENTS.md and ADR 007.

## Implemented

- Omitted `deploymentControl` now selects `local` for both plan and apply. No APEXREST table query or setup DDL is executed in this mode.
- Local migration history records checksums and `started` before SQL execution. Successful migrations are not replayed; changed checksums and unresolved history stop a subsequent plan.
- Local ownership serializes apps sharing a DB/service/parsing schema within one managed home. A dead preparing owner may recover; writing ownership after an unknown outcome requires reconciliation.
- Plans bind the coordination backend, scope and local store identity. Source/target drift, authorization, backups, required tests and restore policy are retained.
- `deploymentControl: "database"` remains optional for explicitly configured table-backed coordination. It never silently switches to an empty local history if its selected backend fails.
- Deploy, database and setup skills instruct Codex to proceed without requesting service tables for ordinary deployment. utPLSQL is a dependency of SQL suites, not of an application-only deploy.

Local state belongs to `$APEXREST_HOME/deployment-control/` and must persist between runs. Different machines/homes do not share a lock or migration history: use a durable externally serialized CI runner, or explicitly configured database coordination. If migrating from the optional database backend, preserve/reconcile its history; switching to a new empty local store is not a safe migration strategy.

## Verified

[Machine-readable evidence](evidence/clean-apex-deployment.json) records current source/archive hashes and actual results.

- On the supplied `megasport` connection, app 175 and APEX 26.1.1, CLI `deploy plan` succeeds with exit 0 and no service tables. It declares local coordination, requires an existing-app backup, and proposes import/verify/test with no schema migration.
- The rebuilt native ZIP is installed into a fresh isolated Codex profile outside this checkout. Actual MCP metadata, validation, export and deploy-plan jobs succeed; no CLI equivalence is used as native evidence.
- 46 unit, 10 installer, 3 contract and 5 packaging tests pass. New tests cover plan/apply with no control-table calls, persisted migration history, checksum rejection, interrupted-write retention, schema contention, a separate Node runner, dead-owner behavior and store-change rejection. Oracle writes in these unit tests are explicitly fixtures.
- Lint, typecheck, build, plugin/skill validators and site link/package checks pass. A new documentation link initially failed the site route check; it was corrected and the check rerun successfully.

## Verification scope and later follow-up

This original connected checkpoint used an existing app without APEXREST service tables, not a newly provisioned Oracle/APEX server. At that checkpoint, apply, restore and authenticated application checks were unexecuted.

The later [dashboard follow-up](dashboard-app175.md) records authorized actual imports, verified SQL backups, component/MMD preservation, read-only source-query reconciliation and authenticated in-app dashboard observations using local coordination. It does not establish restore, migration failure injection, full automated SQL/CRUD suites or independent-machine concurrency. utPLSQL remains a dependency of the applicable SQL suite, not of ordinary application-only deployment. Established required-suite results are preserved.

The original connected read-only report records the earlier ORA-00942 failure and remains historical evidence. It is superseded for the default deploy-plan behavior by this change. Earlier complete native lifecycle/setup/template-compiler evidence has its original source digest; it is not relabelled as current verification. Stable release readiness remains false.
