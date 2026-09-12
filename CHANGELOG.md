# Changelog

English | [Українська](CHANGELOG.uk.md)

## Unreleased

- Maintain English and Ukrainian guides, README files and diagrams, with reciprocal language links.
- Add Ukrainian site routes, localized navigation and search, and a switch to the same page in the other language.
- Check documentation coverage, executable-example parity and local links alongside the site packaging checks.

## 0.1.0-beta.1 — repository distribution

- Install directly from the GitHub repository through a native Codex marketplace. The checked-in bundle includes the CLI, MCP server, references, templates and eight skills.
- Verify bundled files against source and artifact hashes in local checks and Linux, macOS and Windows CI. Regenerate the bundle with `npm run plugin:sync` after source changes.
- Fix native MCP startup from Codex's installed cache; require an explicit workspace path for project operations.
- Add English onboarding, configuration, architecture, testing, security and contributor documentation, plus accessible architecture and deployment diagrams.
- Render documentation tables, diagrams, lists and anchors on the static site, with validated links and safe Markdown handling.
- Preserve the optimized APEX workflow: reuse discovery, combine independent reads, validate during planning, and complete authorized test-app imports with backup, identity and drift checks.

This is the initial public beta source distribution. It is not a signed stable release. Real Oracle and native-host results retain their scope and source digests; the [release gates](docs/next-actions.md) remain authoritative.
