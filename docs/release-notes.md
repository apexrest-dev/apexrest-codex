# 1.1.0 — ready component catalog

English | [Українська](release-notes.uk.md)

## Changes — 2026-09-24

- Find components offline across **109 families**, inspect contextual parameter contracts and adapt **138 compiler-checked APEXlang recipes**. One unsupported template-component recipe remains visible with its unresolved reason.
- Select `corpus: "components"` through the existing MCP reference tools or CLI. Existing Oracle reference IDs and the default `corpus: "apexlang"` behavior remain compatible.
- Keep distinct contracts for native regions, report/list templates, template components, page items, buttons and page layouts. Preserve source coverage, English/Ukrainian search vocabulary, parameter defaults and dependencies, UPL descriptions, and stable IDs with content hashes.
- Package the catalog for offline use without a project or Oracle connection. Recipes include synthetic data and explicit prerequisite contracts; the maintainer capture workflow remains read-only and separate from retrieval.
- Preserve the current Codex session workflow, 18 MCP tools, 12 skills, SQLcl/ORDS operations, deployment safeguards and existing authorization boundaries.

Browse the [Universal Theme component list and examples](https://apex.oracle.com/ut), then follow the [catalog guide](component-catalog.md).

## Verification and limits

[Catalog evidence](evidence/component-catalog-local.json) records 138 real offline Oracle compiler passes without warnings, bound to the exact scaffold and recipe files. It also records 181 unit tests, 42 contract tests, 19 packaging tests, deterministic catalog checks, bilingual documentation checks, plugin synchronization and relocated offline CLI/MCP retrieval. These checks establish their stated local behavior; prerequisite SQL execution, application import, authenticated browser behavior and native host model execution remain separate and not run for this catalog work.

`ready` means a complete declared local dependency set with matching compiler evidence. It does not mean a recipe has been imported or tested against a live database. Payload measurements use UTF-8 bytes, not billed tokens.

## Distribution

The stable npm target is `apexrest@1.1.0`. Commit, push and npm publication are authorized; **publication and registry verification are pending** in the [1.1.0 publication record](evidence/npm-110-publication.json). The previous 1.0.0 publication remains recorded separately below.

npm publication is separate from the disabled protected GitHub artifact publisher. It does not claim signed GitHub artifacts, a Git tag, website deployment or full platform/Oracle qualification. Updating the active Codex plugin cache and opening a new conversation to load its tools are separate installation actions.

[Implementation status](implementation-status.md), the [acceptance matrix](acceptance.json), [publisher setup](publishing.md) and [open verification](next-actions.md) track those boundaries.

## Historical releases

These records describe earlier versions, not the current product. Their source digests, outcomes and limitations remain unchanged.

| Version                     | Historical record                                                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1.0.0                       | [Current-session checks](evidence/current-session-100-local.json), [npm publication](evidence/npm-100-publication.json) |
| 0.5.0                       | [Stable npm publication](evidence/npm-050-stable-publication.json)                                                      |
| 0.5.0-beta.1                | [Oracle reference update](evidence/minor-050-local.json), [npm publication](evidence/npm-050-publication.json)          |
| 0.4.0-beta.1                | [Minor release checks](evidence/minor-040-local.json), [deterministic automation](evidence/codex-automation-local.json) |
| 0.3.0-beta.1                | [Local checks](evidence/minor-update-030.json), [native record](evidence/minor-update-030-native.json)                  |
| Earlier ORDS implementation | [Authorized unchanged round trip](evidence/ords-connected.json)                                                         |

Historical reports include removed functionality. They are retained as provenance, not current APIs or workflow instructions. Existing Oracle evidence does not establish changed imports, SQL restore or new native-platform coverage for 1.1.0.
