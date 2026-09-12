# Install the native plugin

Build the local release with Node 24 LTS:

```sh
npm ci
npm run build
npm run site:build
npm run release:dry-run
```

Open `dist/releases/install-local.txt`. It contains the exact filename, SHA-256 and Bash/PowerShell command for this build. Review the dry-run first, then use `--yes` for technical installation. `--accept-oracle-license` is a separate choice after reviewing vendor terms.

Setup checks Node, Java, SQLcl and Playwright/Chromium; uses compatible existing installations or managed user-local files; registers a local native Codex marketplace; and verifies MCP transport. Reload Codex to discover the plugin in a new thread. No manual skills or MCP JSON editing is needed.

Use `--home DIR --codex-home DIR` for an isolated profile. `--native-only` checks just the plugin. `--offline` requires a populated verified cache. The tested client uses the codex-compat archive; the portable profile remains experimental.

**No public download has been published.** The future `/codex/install.sh` route is a deployment target, not a working curl-install promise. A remote channel needs authorized publication and a trusted signing key.
