# Implementation status

English | [Українська](implementation-status.uk.md)

## Current scope — 1.0.0, 2026-09-23

APEXREST works directly in the current Codex conversation. The plugin provides 18 bounded MCP tools, 12 focused skills, a CLI and an optional panel for Oracle/APEX operations and settings. Codex owns the task, context, model, permissions and native collaboration. No plugin work-start call, model session controller, role routing or model selection is part of the product.

The release preserves APEXlang generation/export/validation, pinned reference retrieval, scoped metadata batches, SQLcl CLI/MCP and ORDS transports, deployment plan/apply, configured tests, browser handoff, durable jobs and bounded artifact recovery. The panel keeps project/connection settings and the verification-browser preference.

Deployment still requires actual target identity, authorization, source/target drift checks, coordination and a verified backup for an existing application. Unknown write outcomes require reconciliation. Required suites cannot pass with empty, skipped or blocked results. Production needs protected external approval.

## Verification

[Current local evidence](evidence/current-session-100-local.json) records the exact source/build and checks executed for 1.0.0. CLI/stdio MCP, unit, packaging and UI fixtures establish their stated local behavior; they do not establish live Codex reasoning, Oracle execution or desktop rendering unless the record explicitly includes those observations.

[Historical connected evidence](evidence/ords-connected.json) establishes one authorized unchanged APEXlang export/import/export with 21 byte-identical files and a checksum-verified SQL backup. Earlier native installation and Oracle template compiler reports keep their original versions and scope. This refactor does not rerun those connected operations or broaden their claims.

The [acceptance matrix](acceptance.json) distinguishes current criteria, retired requirements, available evidence and open verification. The original [build specification](../APEXREST_CODEX_PLUGIN_BUILD_SPEC.md) remains unchanged as historical input. Historical JSON reports are retained for provenance, including reports of removed functionality; they are not a description of 1.0.0.

## Distribution and remaining checks

The package and native plugin version is `1.0.0`. [Release notes](release-notes.md) track distribution separately from implementation and verification. Registry installation, local packaging, GitHub source and deployed website are separate outcomes.

Broader native-platform coverage, changed Oracle imports, SQL restore, real interruption/recovery, utPLSQL and authenticated application checks remain open where the existing evidence does not cover them. UTF-8 payload measurements are not paid-token measurements. See [next actions](next-actions.md).
