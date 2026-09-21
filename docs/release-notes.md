# 0.3.0-beta.1 — minor beta

English | [Українська](release-notes.uk.md)

The 2026-09-21 minor update reduces repeated context and tool output while preserving task results, required checks and deployment safeguards.

## Changes

- Use one agent by default; teams require explicit Settings opt-in with `multiAgentEnabled: true`. Persistent role sessions reuse task/plan context, receive relevant updates and stop on unchanged missing prerequisites.
- Return three reference matches by default, retain pagination and load only the selected application-process scenario and required contracts. Original Oracle reference texts remain intact.
- Return bounded MCP previews with paged result recovery, preserving operation status and polling cursors. The embedded panel receives complete data through UI metadata and initializes after its controls exist; legacy response formats remain supported.

## Verification and publication

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
