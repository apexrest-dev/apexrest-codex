# Release {{version}}

English | [Українська](releases.uk.md)

The 0.5 release targets `apexrest@0.5.0` as npm `latest`, with the `beta` dist-tag removed. The [publication record](../../docs/evidence/npm-050-stable-publication.json) tracks the actual registry status and verification. The earlier `0.5.0-beta.1` remains available by exact version; no Git tag or GitHub release is part of this update.

## Changes

- Refresh the pinned Oracle APEXlang references and plugin skills from Oracle's September 21 release notes and the upstream snapshot merged on September 22.
- Cover Media List, Comments and Metric Card report/partial workflows; Smart Filters and Search; and the expanded Cards and Region Display Selector contracts.
- Keep the reviewed APEX 26.1 compiler baseline and preserve source, validation and deployment safeguards.

See the [release notes](../../docs/release-notes.md) for the full scope and verification. Existing [single-agent and team behavior](../../docs/work-modes.md), [bounded automation](../../docs/codex-automation.md) and [ORDS functionality](../../docs/ords.md) remain available.

## Existing verification

[Earlier 0.4 local checks](../../docs/evidence/minor-040-local.json) retain their original build identity. The [automation analysis](../../docs/codex-automation.md) distinguishes mechanical execution from Codex reasoning. Earlier response-byte measurements and native/Oracle reports retain their original scope; a minor-version change does not rerun them or establish billed-token savings.

[Connected evidence](../../docs/evidence/ords-connected.json) records one unchanged APEXlang round trip with all 21 files matching byte for byte, a real checksum-verified SQL backup and a separate matching native MCP export. [Settings evidence](../../docs/evidence/connection-settings-local.json) covers the built panel and Codex in-app actions with synthetic credentials; [native discovery](../../docs/evidence/connection-settings-native.json) checks the real local SQLcl name list without a database login. The reports retain their original versions and source digests, rather than claiming new connected runs for `0.5.0`.

Changed imports, broader component/static-file/MMD variants, SQL restore, interrupted-response recovery and Windows remain unverified. Application browser verification was deferred. The stable release-readiness gate remains blocked.

## Local artifacts

This build produces native ZIPs, platform runtime ZIPs, bootstraps, checksums, a CycloneDX SBOM, provenance and a static site ZIP. Runtime ZIPs contain APEXREST JavaScript and permitted dependency notices; Oracle binaries are downloaded separately after consent.

The generated `releases/manifest.json` binds installer and native artifact versions/checksums. The full local manifest and release-readiness report are in `dist/releases/`. Unsigned local artifacts are not a published GitHub release.

The repository marketplace supports installation from source control today. Stable release qualification separately requires source-bound native-host evidence on each target platform and the remaining Oracle, utPLSQL and authenticated application test evidence. Local tests do not replace those broader release gates. Dry run never creates tags, releases or npm packages.
