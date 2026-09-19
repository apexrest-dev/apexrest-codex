# Supported versions and evidence

English | [Українська](versions.uk.md)

Local, unpublished minor beta {{version}} targets Node 24 LTS, SQLcl 26.1.2.132.1334, Java 21 and APEX 26.1+. ORDS APEXlang operations require a JDK 21+ containing `jdk.compiler`; SQLcl's managed JRE alone is insufficient for the Java bridge. Local generated MMD: 26.1.0+3102. Playwright is pinned at 1.63.0 with its matching browser revisions.

This minor version adds ORDS HTTP(S) transport, plugin-level endpoint/database credentials, APEXlang import/export and SQL backup/restore paths, plus clearer credential labels and a saved SQLcl connection selector for direct access. Switching transport preserves both mappings. See [release notes](../../docs/release-notes.md).

- macOS arm64: local native host, client setup and compiler checks completed.
- Linux x64: locked client artifacts and installer code; hosted quality gates are configured, while native client and Oracle integration remain unverified.
- Windows x64: locked client artifacts and PowerShell bootstrap; hosted quality gates are configured, while native client and Oracle integration remain unverified.
- WSL2: separate environment; no inherited Windows verification claim.
- Codex compatibility profile: exercised on 0.154.0.
- Product scope: Codex desktop and CLI only; the former portable profile is discontinued and is not built.
- Sandbox: unsupported until a complete licensed Oracle/APEX/ORDS tuple is provisioned and verified.

Existing [ORDS evidence](../../docs/evidence/ords-connected.json) confirms one unchanged application round trip, 21 byte-identical files, a checksum-verified SQL backup and a matching installed-plugin MCP export. SQL restore, changed imports, additional component/static-file/MMD variants, interrupted-response recovery and Windows remain unverified; application browser verification was deferred. Evidence retains its recorded build versions and source digests and does not become a new connected check when this version changes.

Compatibility describes observed behavior, not full APEX component coverage. Exact vendor hashes are in the packaged toolchain lock. Future SQLcl library versions require a separate ORDS bridge compatibility check.
