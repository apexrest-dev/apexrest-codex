# Local release {{version}}

English | [Українська](releases.uk.md)

This 0.4 minor beta is distributed through the source repository. The authorized commit/push does not create a Git tag, GitHub release or npm publication.

## Changes

- Single mode uses the existing Codex chat without a separate agent or automatic panel startup. Enable teams explicitly in Settings; older saved defaults do not count as opt-in, and existing runs keep their recorded mode.
- Six long MCP tools start once and wait for completion in the same call, with a default of 25 seconds. Keep the same job ID for later status; propagate terminal failures as MCP errors with their diagnostics and artifacts.
- Batch up to eight scoped metadata reads with one target check; include compact project context in single work and offer summary inspection without source hashing or Oracle calls.
- Shorten skills and tool descriptions, cache reference normalization and keep compact output with paged access to details. Preserve deployment-plan safety information, target identity, authorization, backups, drift and unknown-outcome checks.

See the [release notes](../../docs/release-notes.md) for the full scope and [execution settings](../../docs/work-modes.md) for single-agent and team behavior. Existing [ORDS functionality](../../docs/ords.md) remains available. Smaller payloads do not establish billed-token savings.

## Existing verification

[Version-specific local checks](../../docs/evidence/minor-040-local.json) track this build. The [automation analysis](../../docs/codex-automation.md) distinguishes mechanical execution from Codex reasoning. Earlier response-byte measurements and native/Oracle reports retain their original build identity; a minor-version change does not rerun them.

[Connected evidence](../../docs/evidence/ords-connected.json) records one unchanged APEXlang round trip with all 21 files matching byte for byte, a real checksum-verified SQL backup and a separate matching native MCP export. [Settings evidence](../../docs/evidence/connection-settings-local.json) covers the built panel and Codex in-app actions with synthetic credentials; [native discovery](../../docs/evidence/connection-settings-native.json) checks the real local SQLcl name list without a database login. The reports retain their original versions and source digests, rather than claiming new connected runs for this minor beta.

Changed imports, broader component/static-file/MMD variants, SQL restore, interrupted-response recovery and Windows remain unverified. Application browser verification was deferred. This local beta is not qualified for a stable release.

## Local artifacts

This build produces native ZIPs, platform runtime ZIPs, bootstraps, checksums, a CycloneDX SBOM, provenance and a static site ZIP. Runtime ZIPs contain APEXREST JavaScript and permitted dependency notices; Oracle binaries are downloaded separately after consent.

The generated `releases/manifest.json` binds installer and native artifact versions/checksums. The full local manifest and release-readiness report are in `dist/releases/`. Unsigned beta artifacts are not a published stable release.

The repository marketplace supports installation from source control today. Stable release qualification separately requires source-bound native-host evidence on each target platform and the remaining Oracle, utPLSQL and authenticated application test evidence. Local tests do not replace those broader release gates. Dry run never creates tags, releases or npm packages.
