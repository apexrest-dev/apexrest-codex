# Next actions and verification limits

English | [Українська](next-actions.uk.md)

## Release 1.1.0

Use the [catalog evidence](evidence/component-catalog-local.json) and [release notes](release-notes.md) for the exact checks and distribution state. Registry integrity and clean local/global installs for `apexrest@1.1.0` on npm `latest` are recorded in the [1.1.0 publication record](evidence/npm-110-publication.json). Verify the installed plugin in a new Codex conversation after update. Keep npm metadata, the checked-in native bundle and canonical GitHub source aligned; a registry clean install does not establish desktop behavior or Oracle correctness.

## Connected and platform verification

- For the [component catalog](component-catalog.md), test adapted recipes on a separately authorized development application. Record source-query, import and browser evidence independently of offline compilation; the reference application remains read-only. npm publication does not establish application runtime behavior.

- Exercise changed APEX imports, component/static-file/MMD preservation and SQL restore on an explicitly authorized test target, with source/target identity and verified backups.
- Record real database interruption, lost-response reconciliation and coordination evidence. Separate homes/machines need external serialization or explicitly configured database coordination.
- Run nonempty configured utPLSQL, API and authenticated application tests; verify changed pages in the selected browser. Missing suites or access are limitations, not passes.
- Refresh native Codex installation, discovery and panel/browser observations for current supported hosts. Linux, Windows and WSL2 retain their documented gaps until actually exercised.
- Compare matched tasks using actual Codex usage counters if token or end-to-end latency claims are needed. Local UTF-8 bytes and tool counts measure payloads and surface area only.

## Preserve scope

The [acceptance matrix](acceptance.json) records which older requirements are retired. Do not reintroduce plugin session orchestration to satisfy historical requirements. The original build specification and older JSON reports remain provenance; the current product runs in the user's open Codex session.

Continue to preserve project trust, explicit mutation scope, production approval, backup, drift, required suites and unknown-outcome recovery. Do not change a live Oracle target merely to close an evidence gap without active authorization.
