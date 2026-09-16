# Install APEXREST

English | [Українська](install.uk.md)

Open the terminal menu, install client tools and the Codex plugin, then test a saved SQLcl connection. The [APEXREST repository](https://github.com/apexrest-dev/apexrest-codex) includes a built bundle; ordinary installation requires no TypeScript build.

## 1. Open the terminal menu

You need Git and Node.js 24 LTS on PATH. Plugin installation also requires a Codex CLI with native plugin support.

```sh
git clone https://github.com/apexrest-dev/apexrest-codex.git
cd apexrest-codex
node plugins/apexrest-apex/runtime/apexrest.mjs
```

If you already have a checkout, run the last command from it. The APEXREST logo appears with seven actions: **Install tools**, **Uninstall tools**, **Install plugin**, **Uninstall plugin**, **List saved SQLcl connections** and **Test saved SQLcl connection**.

**SQLcl mode: CLI / MCP** saves the Oracle execution backend: SQLcl CLI or the official SQLcl MCP server (`sql -mcp`). This separate TUI action does not change plugin registration. See [SQLcl modes](../../docs/tui.md#sqlcl-mode-cli-or-mcp).

The home screen also includes a table of APEXlang types from the bundled Oracle reference. Tab switches between actions and the catalogue; type a name or group to search. Browsing needs no database connection.

## 2. Install tools and the plugin

Choose **Install tools**. Read the [Oracle terms](https://www.oracle.com/downloads/licenses/oracle-free-license.html) and enable **Accept Oracle license terms** if you agree. **Skip browser installation** omits Playwright and Chromium; permission for browser system packages is a separate advanced option. Ctrl+R opens **Review**, and Enter installs.

Then choose **Install plugin** and press Enter on **Review**. This action uses the existing runtime. Esc and Ctrl+O expose another Codex profile, package source or managed directory. If you customized the tools directory, use the same directory for the plugin.

There are no **Preview only** or **Approve changes** toggles in the TUI: Enter on review executes the action. Read the actual result and any unfinished steps. Restart Codex and start a new task after registration.

## 3. Add the launcher

Managed plugin installation creates the launcher. For the default directory on macOS/Linux:

```sh
export PATH="$HOME/.apexrest/bin:$PATH"
apexrest
```

In PowerShell:

```powershell
& "$env:USERPROFILE\.apexrest\bin\apexrest.ps1"
```

For a custom managed directory, use its `bin` path. The [CLI guide](../../docs/getting-started.md#use-the-cli) covers persistent PATH configuration and running without managed installation. Installing tools alone or registering directly through Codex does not create this launcher.

## 4. Test a saved SQLcl connection

Open **List saved SQLcl connections** or **Test saved SQLcl connection**. Type to search, select a name and press Enter to test. Ctrl+R refreshes the list. No APEXREST alias is required; save missing connections and credentials in SQLcl. Passwords are not entered in the TUI.

```sh
apexrest connection list --saved --json
apexrest connection test 'Development connection' --saved --json
```

Replace the name with your exact saved name. Application work also needs an explicit project environment; follow [Getting started](../../docs/getting-started.md#connect-and-configure). Successful plugin installation alone does not prove database access.

## Direct installation through the Codex CLI

To register the built plugin without a checkout, keep Node 24 on PATH and run:

```sh
codex plugin marketplace add apexrest-dev/apexrest-codex
codex plugin add apexrest-apex@apexrest
codex plugin list --json
```

This route does not create an `apexrest` shell command. In a new Codex task, send `Use $apexrest-menu` for all workflows or use `$apexrest-install-dependencies` for dependencies. The conversational skill menu and explicit CLI retain their additional options; the seven TUI actions are described above. The [plugin installation guide](../../docs/getting-started.md#install-the-plugin) covers verification and navigation.

## Uninstall

In the TUI, choose **Uninstall tools** or **Uninstall plugin**, review the action and press Enter. If removing both, uninstall tools first: removing plugin files removes the code targeted by the managed launcher. **Keep plugin files** retains that code after unregistering the plugin.

Projects, backups, saved connections, cache and external runtimes are preserved. Node.js needed by the launcher or a recorded installation is also retained. Direct Codex installations use the Codex removal commands in the [removal guide](../../docs/getting-started.md#remove-the-repository-plugin).

## Builds and verification scope

For plugin development or reproducible packaging from the checkout:

```sh
npm ci --ignore-scripts
npm run plugin:sync
npm run site:build
npm run release:dry-run
```

`dist/releases/install-local.txt` contains generated local bundle hashes and Bash/PowerShell installation commands. Packaging does not publish a release. [Implementation status](../../docs/implementation-status.md) separates Linux terminal checks, local fixtures and earlier native checks from unverified live connections and remaining platforms. Other APEX workflows remain available through the plugin and explicit CLI.
