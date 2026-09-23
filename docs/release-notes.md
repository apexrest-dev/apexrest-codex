# 1.0.0 — current Codex session

English | [Українська](release-notes.uk.md)

## Changes — 2026-09-23

- Perform APEX work directly in the user's open Codex conversation, sharing its context, model and permissions. The work skill no longer calls a plugin startup API.
- Remove the plugin-owned model-session controller, role routing, team tools/skill, execution-mode settings and related panel controls. Codex manages its own collaboration.
- Keep 18 MCP tools and 12 focused skills for useful Oracle/APEX work. The panel shows operations, project/connection settings and the verification-browser preference.
- Preserve APEXlang, SQLcl CLI/MCP, ORDS, bounded references, metadata batching, job waiting/recovery, deployment safeguards and required tests.
- Update the English/Ukrainian README, guides and site, removing retired workflow diagrams and screenshots. The original build specification remains unchanged as historical input.

## Verification and distribution

[Local release evidence](evidence/current-session-100-local.json) records the actual source, package and validation results. It does not substitute for live Codex conversation, Oracle or application-browser verification. Package/skill/catalog measurements use files, tools and UTF-8 bytes, not billed tokens.

The release version is `apexrest@1.0.0` with no prerelease suffix. npm publication and canonical GitHub synchronization are authorized for this release; registry metadata and clean-install results must be recorded after publication. A version change or `npm pack` alone is not publication. A Git tag, GitHub release and website deployment are separate actions.

[Implementation status](implementation-status.md), the [acceptance matrix](acceptance.json) and [open verification](next-actions.md) separate the implemented scope from historical and current evidence.

## Historical releases

These records describe earlier versions, not the current product. Their source digests, outcomes and limitations remain unchanged.

| Version                     | Historical record                                                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 0.5.0                       | [Stable npm publication](evidence/npm-050-stable-publication.json)                                                      |
| 0.5.0-beta.1                | [Oracle reference update](evidence/minor-050-local.json), [npm publication](evidence/npm-050-publication.json)          |
| 0.4.0-beta.1                | [Minor release checks](evidence/minor-040-local.json), [deterministic automation](evidence/codex-automation-local.json) |
| 0.3.0-beta.1                | [Local checks](evidence/minor-update-030.json), [native record](evidence/minor-update-030-native.json)                  |
| Earlier ORDS implementation | [Authorized unchanged round trip](evidence/ords-connected.json)                                                         |

Historical reports include removed functionality. They are retained as provenance, not current APIs or workflow instructions. Existing Oracle evidence does not establish changed imports, SQL restore or new native-platform coverage for 1.0.0.
