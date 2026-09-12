# Troubleshooting

Run `doctor --json` first. Detected executables, locally validated compiler, native host discovery and database readiness are separate states. Setup can return needs-user-action after successful native registration when connection or consent is missing.

Codex 0.154.0: use the codex-compat ZIP. The portable manifest passed schema validation and plugin discovery, but this tested host did not load its MCP tools. Reload/new thread after enablement. Inspect the plugin's native registration; never add a second global MCP server as a workaround.

SQLcl: use the pinned 26.1.2.132.1334 with Java 21. The system may have a different Java; `APEXREST_JAVA_HOME` or managed setup selects the reviewed JRE. Compilation diagnostics may occur with process exit 0; the adapter checks output and success markers. Preserve `.apex/apexlang.json`; do not fabricate an MMD version.

Offline: preload exact SHA-keyed vendor artifacts and npm/browser caches. A cache miss is a blocker; `--offline` never falls back to download. Corrupted cache fails integrity. Disk space, TLS/proxy and Linux browser OS dependencies are reported separately. `--install-os-deps` is an explicit request for Playwright's system package installation and may require elevation.

Concurrent setup returns LOCKED. An exclusive lock with a proven dead PID on this same host is recovered under a separate recovery gate. Unknown ownership, another host or an interrupted recovery gate remains blocked for manual inspection; never guess that a live lock is stale. Native package copies use a staging directory and atomic rename; completed components are probed on rerun.

`OUTCOME_UNKNOWN` after a write: inspect deployment state/journal and actual target history. A DB writing lease must not be cleared on TTL alone. Contact the target administrator for reconciliation. No generic force option exists.
