# Changelog

English | [Українська](CHANGELOG.uk.md)

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
