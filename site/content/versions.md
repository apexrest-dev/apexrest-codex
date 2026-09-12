# Supported versions and evidence

Release {{version}} targets Node 24 LTS, SQLcl 26.1.2.132.1334, Java 21 and APEX 26.1+. Local generated MMD: 26.1.0+3102. Playwright is pinned at 1.63.0 with its matching browser revisions.

- macOS arm64: local native host, client setup and compiler checks completed.
- Linux x64: locked client artifacts and installer code; platform CI not yet run.
- Windows x64: locked client artifacts and PowerShell bootstrap; platform CI not yet run.
- WSL2: separate environment; no inherited Windows verification claim.
- Codex compatibility profile: exercised on 0.154.0.
- Portable profile: manifest valid; MCP not discovered on the tested Codex build.
- Sandbox: unsupported until a complete licensed Oracle/APEX/ORDS tuple is provisioned and verified.

Compatibility describes observed behavior, not full APEX component coverage. Exact vendor hashes are in the packaged toolchain lock.
