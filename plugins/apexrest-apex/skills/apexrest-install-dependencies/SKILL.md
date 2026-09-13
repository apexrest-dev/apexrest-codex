---
name: apexrest-install-dependencies
description: Install Java, Oracle SQLcl and other local APEXREST client dependencies. Use for the Install dependencies plugin command, dependency installation menu, or missing Node.js, Java, SQLcl, Playwright or Chromium.
---

# Install dependencies

Use the bundled CLI at `../../runtime/apexrest.mjs` relative to this skill directory. Resolve that to an absolute path from the loaded skill location; the working directory is the user's project, not the plugin. Run it with `node`, which must already be available to start the plugin. No source checkout, npm build or native plugin re-registration is needed.

Call `apexrest_doctor` first when available; otherwise run the bundled CLI's `doctor --json`. Missing SQLcl or Java is a reason to install dependencies, not a reason to stop. Node 24 on PATH is the bootstrap prerequisite if Node cannot start. The installer uses the bundled lockfile for reviewed versions, checksums and platform support; do not substitute unpinned downloads or package-manager recipes.

## Menu

When the user opens the command without specifying an action, offer these choices using the host's question UI when available:

1. **Install all dependencies (recommended):** managed Node.js, Java, SQLcl, Playwright and Chromium.
2. **Install Oracle tools:** managed Node.js, Java and SQLcl; add `--skip-browser`.
3. **Preview only:** show destinations, reuse/download actions and license requirements; run only `--dry-run`.

Honor an action already requested. An explicit request to install Java, SQLcl and other dependencies selects all dependencies; do not ask the user to repeat that authorization.

## Execute and verify

Run the preview with the selected options:

```sh
node "<absolute-plugin-root>/runtime/apexrest.mjs" dependencies install --dry-run --json
```

Summarize the actual versions, destinations, reuse/download actions and browser selection. With existing installation authorization, continue with the same options and `--yes` in place of `--dry-run` under the host's approved filesystem/network scope. Use a background command for downloads and monitor it to completion; do not start a second installer while it is running.

`--yes` permits technical steps. Add `--accept-oracle-license` only when the user has explicitly accepted the Oracle terms linked in the preview. If consent is missing, present those exact links and ask for license consent, explaining that the installer requires it separately. If declined, omit the flag and report any `needs-consent` components; never describe a partial installation as complete. Reuse recorded consent within the same authorized task.

Preserve requested `--home`, `--cache-dir` and `--offline` options. Do not add `--install-os-deps` unless the user explicitly authorized browser OS package installation; it can require elevation. A browser OS-dependency or sandbox failure must be reported using the actual result rather than bypassing host protections. No downloads run at MCP startup.

After installation, inspect the result's component states and actions, then run `apexrest_doctor` again (or the CLI `doctor --json`). With a custom `--home`, run the CLI doctor with `APEXREST_HOME` set to the same absolute directory; the MCP process also needs that environment to use a custom home. Report actual version probes and unresolved actions separately from compiler validation, database connectivity and native menu rendering.

This command installs local client dependencies only. Existing APEX service tables, utPLSQL, database provisioning, connection credentials and application imports are outside its scope. Keep existing shell profiles, native plugin registration and project settings intact.
