# Local release {{version}}

English | [Українська](releases.uk.md)

This minor beta is a local, unpublished candidate. Updating its version does not create a Git tag, GitHub release or npm publication.

## Changes

- Default to one agent. Enable teams explicitly in Settings; older saved defaults do not count as opt-in, and existing runs keep their recorded mode.
- Return three reference search results by default, support explicit pagination and avoid treating alternative APEXlang process types as required dependencies.
- Bound peer summaries, reuse unchanged context and record completed tool activity once.
- Return compact MCP summaries with paged access to full details while preserving operation outcomes. Keep automatic result archives outside project sources and full panel snapshots in UI metadata. Enforce UTF-8 payload budgets in local checks.

See the [release notes](../../docs/release-notes.md) for the full scope and [execution settings](../../docs/work-modes.md) for single-agent and team behavior. Existing [ORDS functionality](../../docs/ords.md) remains available. Smaller payloads do not establish billed-token savings.

## Existing verification

[Connected evidence](../../docs/evidence/ords-connected.json) records one unchanged APEXlang round trip with all 21 files matching byte for byte, a real checksum-verified SQL backup and a separate matching native MCP export. [Settings evidence](../../docs/evidence/connection-settings-local.json) covers the built panel and Codex in-app actions with synthetic credentials; [native discovery](../../docs/evidence/connection-settings-native.json) checks the real local SQLcl name list without a database login. The reports retain their original versions and source digests, rather than claiming new connected runs for this minor beta.

Changed imports, broader component/static-file/MMD variants, SQL restore, interrupted-response recovery and Windows remain unverified. Application browser verification was deferred. This local beta is not qualified for a stable release.

## Local artifacts

This build produces native ZIPs, platform runtime ZIPs, bootstraps, checksums, a CycloneDX SBOM, provenance and a static site ZIP. Runtime ZIPs contain APEXREST JavaScript and permitted dependency notices; Oracle binaries are downloaded separately after consent.

The generated `releases/manifest.json` binds installer and native artifact versions/checksums. The full local manifest and release-readiness report are in `dist/releases/`. Unsigned beta artifacts are not a published stable release.

The repository marketplace supports installation from source control today. Stable release qualification separately requires source-bound native-host evidence on each target platform and the remaining Oracle, utPLSQL and authenticated application test evidence. Local tests do not replace those broader release gates. Dry run never creates tags, releases or npm packages.
