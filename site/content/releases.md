# Release {{version}}

English | [Українська](releases.uk.md)

Release 1.0.0 performs APEX work directly in your current Codex conversation. The plugin provides 18 MCP tools and 12 skills for Oracle/APEX work. Codex owns the conversation and collaboration; the plugin provides deterministic operations, settings and recoverable jobs.

## Changes

- Remove plugin-owned model sessions, role routing, task-start APIs and their panel controls.
- Keep Oracle/APEX operations, SQLcl and ORDS connections, validation, deployment safeguards, tests and browser verification guidance.
- Keep bounded output, lazy reference retrieval, metadata batching and one-call job waiting.
- Simplify the documentation and panel around current-session work.

See [release notes](../../docs/release-notes.md) and [local release evidence](../../docs/evidence/current-session-100-local.json) for exact changes, verification and distribution status. Install with `npm install -g apexrest`, or pin `apexrest@1.0.0`.

## Evidence and distribution

Current local checks and historical native/Oracle reports have separate source identities. [Earlier connected evidence](../../docs/evidence/ords-connected.json) verifies one unchanged APEXlang round trip and a checksum-verified SQL backup; it is not a new connected run of 1.0.0. Changed imports, restore, interrupted-response recovery and broader platform/application checks retain their [documented limits](../../docs/next-actions.md).

npm installation, canonical GitHub source, signed release artifacts and website deployment are distinct outcomes. Local ZIPs, checksums, SBOM and provenance do not imply publication. Use the release record to identify what actually completed.
