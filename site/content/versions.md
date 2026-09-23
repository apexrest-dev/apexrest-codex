# Supported versions and evidence

English | [Українська](versions.uk.md)

Version {{version}} is published as `apexrest@0.5.0` on npm `latest` and remains available through the source repository. Install it with `npm install -g apexrest`; the `beta` dist-tag has been removed. The [publication record](../../docs/evidence/npm-050-stable-publication.json) confirms registry integrity and installation; source-bound native-platform and Oracle integration qualification remains incomplete.

The supported toolchain targets Node 24 LTS (supported range: Node 24–26), SQLcl 26.1.2.132.1334, Java 21 and APEX 26.1+. ORDS APEXlang operations require a JDK 21+ containing `jdk.compiler`; SQLcl's managed JRE alone is insufficient for the Java bridge. Local generated MMD: 26.1.0+3102. Playwright is pinned at 1.63.0 with its matching browser revisions.

Single mode uses the existing Codex session and its model and permissions; it does not start another agent or automatically open the panel. Teams require an explicit Settings opt-in. Six long MCP operations wait within one call; bounded metadata batches, summary inspection, shorter instructions and cached reference normalization reduce routine exchanges and context. Compact results retain diagnostics, artifact access and deployment safety information. Existing ORDS HTTP(S) transport, plugin-level connection settings and APEXlang import/export remain available. Payload budgets measure UTF-8 bytes; they do not establish billed-token savings. See [release notes](../../docs/release-notes.md) and [local checks for the 0.5.0-beta.1 reference update](../../docs/evidence/minor-050-local.json), promoted unchanged to `0.5.0`. No Git tag or GitHub release is implied.

- macOS arm64: local native host, client setup and compiler checks completed.
- Linux x64: locked client artifacts and installer code; hosted quality gates are configured, while native client and Oracle integration remain unverified.
- Windows x64: locked client artifacts and PowerShell bootstrap; hosted quality gates are configured, while native client and Oracle integration remain unverified.
- WSL2: separate environment; no inherited Windows verification claim.
- Codex compatibility profile: exercised on 0.154.0.
- Product scope: Codex desktop and CLI only; the former portable profile is discontinued and is not built.
- Sandbox: unsupported until a complete licensed Oracle/APEX/ORDS tuple is provisioned and verified.

Existing [ORDS evidence](../../docs/evidence/ords-connected.json) confirms one unchanged application round trip, 21 byte-identical files, a checksum-verified SQL backup and a matching installed-plugin MCP export. SQL restore, changed imports, additional component/static-file/MMD variants, interrupted-response recovery and Windows remain unverified; application browser verification was deferred. Evidence retains its recorded build versions and source digests and does not become a new connected check when this version changes.

Compatibility describes observed behavior, not full APEX component coverage. Exact vendor hashes are in the packaged toolchain lock. Future SQLcl library versions require a separate ORDS bridge compatibility check.
