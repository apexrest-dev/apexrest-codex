# Publisher setup

English | [Українська](publishing.uk.md)

The user selected [apexrest-dev/apexrest-codex](https://github.com/apexrest-dev/apexrest-codex) as the source repository. Git origin and `publisher.config.json.githubRepository` use that repository. Source commits and pushes are authorized; the release publisher remains disabled. No GitHub release, tag, npm package, site, DNS or TLS change is made by this repository configuration.

Before release publication, the owner must create a protected release environment and externally managed signing key, verify Node/Java/SQLcl/browser licensing, run real native-host tests for each release platform, and complete Oracle/utPLSQL/CRUD evidence against the exact immutable commit. Configure GitHub private vulnerability reporting and a verified security contact. npm is optional and requires ownership verification for `@apexrest/codex`.

`release:dry-run` always writes reproducible local ZIPs, checksums, a CycloneDX SBOM, provenance, exact local install commands and release-readiness.json. Dirty/no-commit builds carry a source tree digest and cannot be stable. A manifest can be signed only with an explicitly supplied external `APEXREST_RELEASE_SIGNING_KEY_FILE`. Public-key bootstrap verification is optional for a local user-selected SHA; a future remote channel must require a trusted signature. Unsigned local beta files are not presented as published releases.

The guarded release workflow is manual and uses a protected environment. Stable readiness fails closed if any required evidence is missing, stale or from different sources. Publisher configuration must also be enabled. Copy only `site-dist/` beneath the existing `/codex/` path using `scripts/publish-site.sh --dry-run DEST`; actual copy requires explicit `--apply` and a mounted, authorized destination. Do not alter the root homepage. GitHub artifacts remain the immutable source; site installers/metadata are generated from the same release manifest.

OpenAI directory submission is a separate manual process. Prepare identity/author, license, data handling, support and native compatibility evidence. Acceptance into a public directory is not guaranteed and is not necessary for local native installation.
