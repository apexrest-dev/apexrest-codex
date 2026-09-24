# Install APEXREST

English | [Українська](install.uk.md)

Install the APEXREST CLI from npm, open its terminal menu, install client tools and the Codex plugin, then test a saved SQLcl connection. The npm package includes a built bundle; ordinary installation requires no TypeScript build.

## 1. Open the terminal menu

Use Node.js 24 LTS on PATH (supported range: Node 24–26). Plugin installation also requires a Codex CLI with native plugin support.

```sh
npm install -g apexrest
apexrest --version
apexrest
```

The default npm tag is `latest`. To pin release 1.2.0, use `npm install -g apexrest@1.2.0`. See [release notes](../../docs/release-notes.md) for distribution and verification status.

For a project-local CLI installation, run these commands from the project directory:

```sh
npm install apexrest
npx apexrest --version
npx apexrest
```

npm installs the CLI and bundled resources. Register the Codex plugin separately through **Install plugin** in step 2; project-local npm installation does not create a project-only Codex plugin registration.

Alternatively, use Git to open the built CLI from the [source repository](https://github.com/apexrest-dev/apexrest-codex):

```sh
git clone https://github.com/apexrest-dev/apexrest-codex.git
cd apexrest-codex
node plugins/apexrest-apex/runtime/apexrest.mjs
```

If you already have a checkout, run the last command from it. All routes open the same menu. The APEXREST logo appears with seven actions: **Install tools**, **Uninstall tools**, **Install plugin**, **Uninstall plugin**, **List saved SQLcl connections** and **Test saved SQLcl connection**.

**SQLcl mode: CLI / MCP** saves the Oracle execution backend: SQLcl CLI or the official SQLcl MCP server (`sql -mcp`). This separate TUI action does not change plugin registration. See [SQLcl modes](../../docs/tui.md#sqlcl-mode-cli-or-mcp).

The home screen also includes a table of APEXlang types from the bundled Oracle reference. Tab switches between actions and the catalogue; type a name or group to search. Browsing needs no database connection.

## 2. Install tools and the plugin

Choose **Install tools**. Read the [Oracle terms](https://www.oracle.com/downloads/licenses/oracle-free-license.html) and enable **Accept Oracle license terms** if you agree. **Skip browser installation** omits Playwright and Chromium; permission for browser system packages is a separate advanced option. Ctrl+R opens **Review**, and Enter installs.

Then choose **Install plugin** and press Enter on **Review**. This action uses the existing runtime. Esc and Ctrl+O expose another Codex profile, package source or managed directory. If you customized the tools directory, use the same directory for the plugin.

There are no **Preview only** or **Approve changes** toggles in the TUI: Enter on review executes the action. Read the actual result and any unfinished steps. Restart Codex and start a new task after registration.

## 3. Add the launcher

Global npm installation already provides the `apexrest` command; skip this step when it is available. For a project-local npm installation, use `npx apexrest` from that project. Managed plugin installation also creates a launcher. To use that launcher from the default directory on macOS/Linux:

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

## Codex Cloud

Use the [Cloud setup guide](../../docs/codex-cloud.md) for a repository-backed cloud task. Copy its example scripts into the application repository, configure the environment and Secret, and use the CLI launcher for ORDS HTTPS operations. The example does not install the desktop interface or verify native Cloud MCP discovery.

## Uninstall

In the TUI, choose **Uninstall tools** or **Uninstall plugin**, review the action and press Enter. If removing both, uninstall tools first: removing plugin files removes the code targeted by the managed launcher. **Keep plugin files** retains that code after unregistering the plugin.

Projects, backups, saved connections, cache and external runtimes are preserved. Node.js needed by the launcher or a recorded installation is also retained. Direct Codex installations use the Codex removal commands in the [removal guide](../../docs/getting-started.md#remove-the-repository-plugin).

To remove the globally installed npm CLI after any desired tool/plugin removal:

```sh
npm uninstall -g apexrest
```

For a project-local installation, run `npm uninstall apexrest` from that project. npm removal does not unregister the Codex plugin or remove managed tools; those are separate actions above.

## Builds and verification scope

For plugin development or reproducible packaging from the checkout:

```sh
npm ci --ignore-scripts
npm run plugin:sync
npm run site:build
npm run release:dry-run
```

`dist/releases/install-local.txt` contains generated local bundle hashes and Bash/PowerShell installation commands. Packaging does not publish a release. [Implementation status](../../docs/implementation-status.md) separates Linux terminal checks, local fixtures and earlier native checks from unverified live connections and remaining platforms. Other APEX workflows remain available through the plugin and explicit CLI.
