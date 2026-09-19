# Local release {{version}}

English | [Українська](releases.uk.md)

This minor beta is a local, unpublished candidate. Updating its version does not create a Git tag, GitHub release or npm publication.

## Changes

- Add **Direct Oracle listener / ORDS HTTP(S)** transport selection, with schema URL and existing database username/password stored locally at plugin level.
- Implement ORDS APEXlang export/adoption and import, SQL backup export and restore. Use the Oracle compiler and one REST request for import state; preserve Oracle metadata and binary export files alongside existing deployment safeguards.
- Clarify the **Database username** and **Database password** fields. Add a direct-mode saved SQLcl connection selector with refresh/retry states; preserve direct mappings and ORDS credentials when switching transport.

See the [release notes](../../docs/release-notes.md) for the full scope and [ORDS guide](../../docs/ords.md) for setup.

## Existing verification

[Connected evidence](../../docs/evidence/ords-connected.json) records one unchanged APEXlang round trip with all 21 files matching byte for byte, a real checksum-verified SQL backup and a separate matching native MCP export. [Settings evidence](../../docs/evidence/connection-settings-local.json) covers the built panel and Codex in-app actions with synthetic credentials; [native discovery](../../docs/evidence/connection-settings-native.json) checks the real local SQLcl name list without a database login. The reports retain their original versions and source digests, rather than claiming new connected runs for this minor beta.

Changed imports, broader component/static-file/MMD variants, SQL restore, interrupted-response recovery and Windows remain unverified. Application browser verification was deferred. This local beta is not qualified for a stable release.

## Local artifacts

This build produces native ZIPs, platform runtime ZIPs, bootstraps, checksums, a CycloneDX SBOM, provenance and a static site ZIP. Runtime ZIPs contain APEXREST JavaScript and permitted dependency notices; Oracle binaries are downloaded separately after consent.

The generated `releases/manifest.json` binds installer and native artifact versions/checksums. The full local manifest and release-readiness report are in `dist/releases/`. Unsigned beta artifacts are not a published stable release.

The repository marketplace supports installation from source control today. Stable release qualification separately requires source-bound native-host evidence on each target platform and the remaining Oracle, utPLSQL and authenticated application test evidence. Local tests do not replace those broader release gates. Dry run never creates tags, releases or npm packages.
