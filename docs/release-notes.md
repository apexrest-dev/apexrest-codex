# 0.5.0-beta.1 — minor beta

English | [Українська](release-notes.uk.md)

The 2026-09-22 minor update refreshes the plugin skills and pinned reference corpus from [Oracle APEXlang Skills 2026.09.21](https://github.com/oracle/skills/blob/b94ccf4dec34b27859c2378fa71ba2bad884f2fe/apex/apexlang/release-notes.json).

## Changes

- Pin Oracle commit `b94ccf4dec34b27859c2378fa71ba2bad884f2fe` and verify the archive SHA-256 before importing. The corpus contains 658 complete documents and 4,872 grammar fragments: 21 new documents, 30 updated documents and no removals. Grammar text and existing IDs are unchanged.
- Add direct skill routes and focused guidance for Media List, Comments, Metric Card, Smart Filters/Search, Cards and Region Display Selector. Follow the selected component's source, parent, projection, navigation and authorization contracts; compiler metadata remains authoritative.
- Preserve bounded reference search, lazy loading, exact snapshot selection and the offline runtime. The reference version is `26.1@b94ccf4`; `26.1` still selects the bundled snapshot.
- Synchronize package, plugin, runtime, acceptance metadata and bilingual documentation to `0.5.0-beta.1`. Existing current-session execution, explicit team opt-in and authorized deployment/browser safeguards remain in force.

## Verification and publication

[Version-specific local evidence](evidence/minor-050-local.json) records the checks for this update. Upstream validator and compiler-conformance claims describe Oracle's release; this plugin imports reference documents, not Oracle's validator implementation. Local corpus/retrieval and packaging checks do not establish live Oracle or application-browser verification for the new component workflows.

The npm release target is `apexrest@0.5.0-beta.1` on the `beta` channel. The [publication record](evidence/npm-050-publication.json) tracks publication status and registry verification. The `latest` channel remains on `0.4.0-beta.1`; no Git tag or GitHub release is part of this update. Earlier evidence below retains its original version and scope.

## 0.4.0-beta.1 — 2026-09-21

The 2026-09-21 minor update keeps single work in the current Codex chat and moves routine orchestration into program code. The plugin remains exclusive to Codex desktop and CLI.

### Changes

- Single mode uses the user's existing session without a child agent, App Server startup or automatic panel. Teams with independent reviews require explicit opt-in.
- Six long MCP operations start once and wait up to 25 seconds by default (`waitSeconds: 0–30`). Completed failures propagate as MCP errors while retaining the job ID, diagnostics and artifacts; ending the wait does not cancel or replay the job.
- `metadata_read` accepts up to eight scoped requests, validates the whole batch before SQL and verifies the target once. Single work includes compact project context; `project_inspect` offers `detail: "summary"` without source hashing or Oracle calls, with full inspection still the default.
- Shorter skills/tool descriptions, cached reference normalization and compact recoverable output reduce repeated context. Deployment-plan safety details and existing authorization, identity, backup, drift and unknown-outcome safeguards remain intact.

### Verification and publication

[Version-specific local checks](evidence/minor-040-local.json) track this minor beta. The preceding [automation checks](evidence/codex-automation-local.json) passed 253 tests; its [runtime record](evidence/codex-automation-runtime.json) covers local CLI/MCP behavior and synthetic response sizes. Those reports keep their original build versions and source digests. They do not establish new native task, Oracle/application-browser or billed-token evidence. See the [automation analysis](codex-automation.md) and [remaining gates](next-actions.md).

The authorized commit and push update `main`. They do not create a Git tag, GitHub release or npm publication. This remains a beta; stable qualification is separate.

## 0.3.0-beta.1 — 2026-09-21

The 2026-09-21 minor update reduces repeated context and tool output while preserving task results, required checks and deployment safeguards.

### Changes

- Use one agent by default; teams require explicit Settings opt-in with `multiAgentEnabled: true`. Persistent role sessions reuse task/plan context, receive relevant updates and stop on unchanged missing prerequisites.
- Return three reference matches by default, retain pagination and load only the selected application-process scenario and required contracts. Original Oracle reference texts remain intact.
- Return bounded MCP previews with paged result recovery, preserving operation status and polling cursors. The embedded panel receives complete data through UI metadata and initializes after its controls exist; legacy response formats remain supported.

### Verification and publication

[Token-optimization checks](evidence/token-optimization-local.json) and [native discovery](evidence/token-optimization-native.json) document the preceding `0.2.0-beta.1` build. Verification for `0.3.0-beta.1` is tracked separately in the [local build record](evidence/minor-update-030.json) and [native record](evidence/minor-update-030-native.json). Payload-byte measurements do not establish billed-token savings or new Oracle coverage.

No Git tag is created. Committing and pushing to `main` does not publish a GitHub release or npm package; npm publication remains pending.

## 0.2.0-beta.1 — 2026-09-19

This minor version adds ORDS HTTP(S) access and clearer connection settings to the native Codex plugin. It is a local, unpublished beta candidate. The version change does not create a Git tag, GitHub release or npm publication.

### Changes

- Switch the plugin's database transport between the direct Oracle listener and ORDS HTTP(S). Save the ORDS schema URL and existing database username/password in private plugin-level storage, with separate read/deploy references where needed.
- Use ORDS for APEXlang export/adoption and import, SQL backup export and restore. The Oracle compiler produces the import blocks, which run in one REST request with their installation context. Export preserves Oracle `.apex` metadata, shared components and binary files. Offline generation/validation and existing deployment safeguards remain available.
- Enter ORDS credentials under **Database username** and **Database password**. Direct mode provides a saved SQLcl connection selector with refresh/retry states; switching transport preserves both configurations. The schema alias in an ORDS URL may differ from the database username.
- Maintain matching English/Ukrainian guides, site pages and release notes. The supported plugin product is Codex desktop and CLI; the former portable profile is discontinued.

### Verification and limits

Existing [connected ORDS evidence](evidence/ords-connected.json) records one authorized unchanged application round trip, a real checksum-verified SQL backup, and equality of all 21 files after import: 14 APEXlang, two JSON and five PNG. A separate export through the installed plugin's exact native MCP call matched the same files. This demonstrates the tested application and operation, not every APEX component or import variant.

[Settings evidence](evidence/connection-settings-local.json) covers 20 checks of the built panel and actual Codex in-app rendering/saving with synthetic credentials. [Native discovery](evidence/connection-settings-native.json) confirms 24 tools and an exact saved-connections call matching 21 real local SQLcl names, with only the count published. That UI revision did not attempt a database login. All reports retain their original build versions and source digests; a minor-version bump does not rerun those checks.

Changed imports, additional component/static-file/MMD variants, SQL restore, interrupted-response recovery and Windows remain open. Application browser verification was deferred at the user's request. ORDS APEXlang operations require SQLcl/APEX 26.1+ and a JDK 21+ with `jdk.compiler`; future Oracle library versions need their own compatibility checks. See [ORDS setup](ords.md), [implementation status](implementation-status.md) and [remaining release gates](next-actions.md).
