# Changelog

English | [Українська](CHANGELOG.uk.md)

## 1.0.0 — current-session release

- Work directly in the open Codex conversation; remove plugin-owned model sessions, task registration, role routing, team tools/skill and panel controls.
- Keep 18 MCP tools and 12 focused skills, Oracle/APEX operations, SQLcl/ORDS, bounded references, recoverable jobs and deployment/test safeguards.
- Simplify the bilingual guides and site; preserve the original specification and past JSON evidence as historical input.

See [release notes](docs/release-notes.md) and [current local evidence](docs/evidence/current-session-100-local.json) for validation and distribution status.

## Historical entries

The entries below describe earlier releases. Their removed features are not available in 1.0.0; publication statements refer to the date/version recorded.

## 0.5.0 — stable release

- Promote the reviewed `0.5.0-beta.1` code and pinned Oracle APEXlang reference snapshot to package and plugin version `0.5.0`; no new component behavior is claimed.
- Publish `apexrest@0.5.0` as npm `latest` and remove the npm `beta` dist-tag. The [publication record](docs/evidence/npm-050-stable-publication.json) tracks the actual registry outcome; the earlier beta remains available by exact version.
- Keep the release-readiness gate honest: native-platform, Oracle integration and recovery evidence required for full qualification is still incomplete. See the [release notes](docs/release-notes.md).

## 0.5.0-beta.1 — minor beta

- Refresh the pinned Oracle APEXlang references and plugin skills from Oracle's September 21 release notes and the upstream snapshot merged on September 22.
- Cover Media List, Comments and Metric Card report/partial workflows; Smart Filters and Search; and the expanded Cards and Region Display Selector contracts.
- Preserve the reviewed APEX 26.1 compiler baseline and the existing source-preservation, validation and deployment safeguards.

The npm release target is `apexrest@0.5.0-beta.1` on the `beta` channel; the [publication record](docs/evidence/npm-050-publication.json) tracks publication status and registry verification. No Git tag or GitHub release is part of this update. Earlier verification reports retain their original versions and scope; refreshing references does not establish new Oracle or native-host coverage. See the [release notes](docs/release-notes.md) for this update and its verification.

## 0.4.0-beta.1 — minor beta

- Let six long MCP tools start once and wait for completion in the same call. Preserve the job identity, propagate terminal failure to the MCP error result and retain diagnostics, run IDs and artifacts.
- Batch up to eight scoped metadata reads with one target verification; return compact project context without source hashing or Oracle access when full inspection is unnecessary.
- Shorten skills and tool descriptions, reuse reference normalization and preserve bounded output with recoverable details and deployment-plan safety information.

The product remains exclusive to Codex desktop and CLI. Deployment authorization, target identity, backups, drift checks and unknown-outcome safeguards remain enforced. See [version-specific local verification](docs/evidence/minor-040-local.json) and [release notes](docs/release-notes.md). Earlier reports retain their versions and source digests; this minor release does not establish new Oracle/native task coverage or billed-token savings. The authorized commit/push does not create a Git tag, GitHub release or npm publication; stable qualification remains open.

## 0.3.0-beta.1 — local minor beta (unpublished)

- Return three reference search results by default, with explicit pagination for more. Keep alternative APEXlang process types separate from required dependencies.
- Keep large MCP results compact while preserving success, failure and unknown outcomes. Store recoverable details outside project sources, preserve JSON pagination and deliver complete panel snapshots through UI metadata. Add UTF-8 payload budgets and repair the local optimization benchmark.

These changes retain the existing deployment safeguards and ORDS functionality. Historical Oracle evidence keeps its original version and scope; this entry claims no new connected verification or measured billing reduction. This candidate has no Git tag, GitHub release or npm publication. See [release notes](docs/release-notes.md) and [remaining gates](docs/next-actions.md).

## 0.2.0-beta.1 — local minor beta (unpublished)

- Add plugin-wide **Direct Oracle listener / ORDS HTTP(S)** selection for SQL access when the database listener is unavailable. Store ORDS schema URL, database username and password locally at plugin level, with independent read/deploy references.
- Implement ORDS APEXlang export/adoption and import, SQL backup export and restore. Import uses the Oracle compiler and one REST request to preserve installation state; export preserves Oracle metadata and binary files. Existing approval, identity, backup, drift and unknown-outcome checks remain enforced.
- Clarify **Database username** and **Database password** as credentials of an existing Oracle database account. Add a direct-mode saved SQLcl connection selector with loading, refresh, empty and retry states; preserve both direct mappings and ORDS credentials when switching transport.

- Maintain English and Ukrainian guides, README files and diagrams, with reciprocal language links.
- Add Ukrainian site routes, localized navigation and search, and a switch to the same page in the other language.
- Check documentation coverage, executable-example parity and local links alongside the site packaging checks.

Existing [connected evidence](docs/evidence/ords-connected.json) verifies one unchanged APEXlang round trip: all 21 files matched byte for byte, and the SQL backup was created and checksum-verified. A separate installed-plugin MCP export matched those files. SQL restore, changed imports, broader component variants, interrupted-response recovery and Windows remain unverified; application browser verification was deferred. [Settings checks](docs/evidence/connection-settings-local.json) and [native discovery](docs/evidence/connection-settings-native.json) retain their separate UI/local-store scope. These reports retain their original `0.1.0-beta.1` build versions and source digests; they are not new connected runs of this minor beta.

This version is a local candidate, not a published GitHub or npm release. No tag or publication is implied by the version change. See [release notes](docs/release-notes.md) and [remaining gates](docs/next-actions.md).

## 0.1.0-beta.1 — repository distribution

- Install directly from the GitHub repository through a native Codex marketplace. The checked-in bundle includes the CLI, MCP server, references, templates and eight skills.
- Verify bundled files against source and artifact hashes in local checks and Linux, macOS and Windows CI. Regenerate the bundle with `npm run plugin:sync` after source changes.
- Fix native MCP startup from Codex's installed cache; require an explicit workspace path for project operations.
- Add English onboarding, configuration, architecture, testing, security and contributor documentation, plus accessible architecture and deployment diagrams.
- Render documentation tables, diagrams, lists and anchors on the static site, with validated links and safe Markdown handling.
- Preserve the optimized APEX workflow: reuse discovery, combine independent reads, validate during planning, and complete authorized test-app imports with backup, identity and drift checks.

This is the initial public beta source distribution. It is not a signed stable release. Real Oracle and native-host results retain their scope and source digests; the [release gates](docs/next-actions.md) remain authoritative.
