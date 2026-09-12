# Getting started

Install the native Codex plugin, verify its local runtime, then configure an explicit Oracle target. The repository includes the plugin runtime: users do not need to build TypeScript or run `npm ci` for native installation.

The current distribution is beta. Native-host evidence is specific to the tested Codex and platform combination; [stable release gates](next-actions.md) remain open.

## Prerequisites

| Requirement                             | When it is needed                                                   |
| --------------------------------------- | ------------------------------------------------------------------- |
| Codex with native plugin support        | Plugin registration; Codex CLI 0.154.0 was exercised on macOS arm64 |
| Node 24 LTS available on `PATH`         | Starting the repository plugin's bundled MCP runtime                |
| Java 21 and reviewed SQLcl 26.1.2       | Oracle generation, validation, export and import                    |
| Existing supported Oracle APEX target   | Connected workflows require APEX 26.1+                              |
| Named SQLcl connections                 | Authorized access to the configured target, saved locally           |
| Chromium and relevant test dependencies | Browser/API suites; utPLSQL only when a SQL suite requires it       |

An existing clean APEX installation is enough for ordinary deployment. Service tables, utPLSQL and a provisioned sandbox are not blanket prerequisites for an application-only import. Source installation does not include Oracle binaries, browser credentials or a database account.

## Install the plugin

In a terminal where Node 24 and the Codex CLI are available:

```sh
node --version
codex --version
codex plugin marketplace add apexrest-dev/apexrest-codex
codex plugin add apexrest-apex@apexrest
codex plugin list --json
```

Native plugin installation was verified with Codex 0.154.0, Node 24.21.0 and macOS arm64; the [native installation report](evidence/native-repository.json) records the exact installation source and verification scope.

This registers the repository's `apexrest` marketplace and its `apexrest-apex` plugin in the selected Codex profile. Start a new Codex task after installation, then ask:

> Use APEXREST to check my setup. Call the plugin's doctor and distinguish native tool availability, compiler readiness and database connectivity. Guide me through any missing local setup without requesting passwords in chat.

Verify the actual `apexrest_doctor` result. A successful registration or list entry alone does not prove that MCP started, SQLcl compiles or the target is reachable. The native bundle performs no downloads during MCP startup and needs no manually added global MCP server.

Managed-workspace plugin availability can be restricted by the workspace administrator. The CLI commands above are local native registration, not an organization-wide deployment. See [troubleshooting](troubleshooting.md) if the host does not expose the tools.

### Managed runtime installation

The managed installer is an alternative when you want reviewed user-local Node, Java, SQLcl and Playwright setup. From a reviewed source checkout with Node 24:

```sh
git clone https://github.com/apexrest-dev/apexrest-codex.git
cd apexrest-codex
npm ci --ignore-scripts
npm run build
npm run site:build
npm run release:dry-run
```

Open `dist/releases/install-local.txt`, which contains the exact Bash or PowerShell command with the generated archive name and SHA-256. Review that command before running it. `--yes` authorizes technical setup; `--accept-oracle-license` is separate consent to the linked vendor terms. The installer can reuse compatible existing runtimes and writes managed dependencies under `~/.apexrest` by default.

Supported options include `--dry-run`, `--offline`, `--cache-dir`, `--home`, `--codex-home` and `--native-only`. Project-only Codex enablement is blocked on the tested host; a dedicated profile through `--codex-home` is available. No shell profile is edited. Registration uses the same plugin identity, so do not keep competing installations of that identity in different marketplaces or add a duplicate global MCP server.

The local packaging command generates unsigned beta artifacts and reports readiness. It does not publish or certify a stable release.

## Connect and configure

Save the needed connections interactively in SQLcl's local store. Use separate read and deploy connections when available. Give Codex the connection reference names and non-secret target identity:

> Configure an APEXREST test environment using the locally saved SQLcl connections `saved-read-connection` and `saved-deploy-connection`. The workspace is `YOUR_WORKSPACE`, parsing schema `YOUR_SCHEMA`, application ID `100`, database unique name `YOUR_DB`, service `YOUR_SERVICE`, and application URL `https://your-host.example/ords/r/workspace/app/`. Verify that the read connection matches this identity.

Replace every placeholder with the actual target. APEXREST records names rather than passwords. No target environment is invented by project initialization. Follow [configuration](configuration.md) for the exact environment schema, private trust policy and test origins.

## Create or adopt a project

For a new app, use a new directory and choose the relevant template:

> Use APEXREST to create a blank application in a new `sales-app` project. Configure the identified test target, add a dashboard using real source measures, then complete the plan, authorized import and browser checks.

For an existing app:

> Use APEXREST to initialize an existing-app project in a new `sales-app` directory and adopt the identified test application. Preserve all Oracle IDs, `.apex` metadata, unrelated pages, shared components and authentication. Add the requested dashboard, import it into that same app and verify the result.

Adoption and export use new local directories and fail if they would overwrite local edits. Preserve the generated Oracle metadata in version control. Subsequent changes should use the existing working source; do not re-adopt the app each time. See [existing applications](existing-app.md).

## Edit, plan, import and verify

The plugin inspects the project and target configuration once, reuses bounded version-aware references and batches related source edits. Planning includes real compiler validation, so a separate identical compilation is usually unnecessary immediately before it.

Review the concrete plan's target and scope. It binds the source, toolchain, current target and history, and expires after 30 minutes. An explicit request to create, update or import an identified development/test app authorizes that necessary scoped import. Codex records the existing authorization for the exact plan and continues without requesting the same permission twice. Unrelated schema writes, authentication changes, other targets and production are outside that scope.

Apply checks fresh identity and drift, makes a verified SQL backup for an existing app, freezes the source and uses durable coordination. Long MCP operations return a job ID; monitor it until completion instead of starting the same operation again. A failed or unknown write outcome requires diagnosis or reconciliation before retrying.

For a page or dashboard, reconcile relevant read-only source queries and inspect the imported behavior in the Codex in-app browser when available. Let asynchronous APEX regions finish loading, then check changed filters, charts, dates and empty states. Run the configured automated suites appropriate to the change. Record manual browser observations separately; an empty suite list does not mean automated tests passed. See [testing](testing.md).

## Use the CLI

Native installation exposes the plugin to Codex; it does not add an `apexrest` shell command to `PATH`. A reviewed source checkout can run its checked-in CLI directly with Node 24:

```sh
node plugins/apexrest-apex/runtime/apexrest.mjs doctor --json
node plugins/apexrest-apex/runtime/apexrest.mjs project init ./crm --template customer-crm
```

Managed installation creates `~/.apexrest/bin/apexrest` on macOS/Linux or `apexrest.ps1` in the managed `bin` directory on Windows. Use the corresponding `<home>/bin` path when you selected a custom home. The following examples abbreviate that launcher as `apexrest`; replace it with its full path or the checked-in Node command:

```sh
apexrest connection add dev-read --sqlcl-name saved-read-connection
apexrest connection add dev-deploy --sqlcl-name saved-deploy-connection
apexrest project inspect --project ./crm --json
apexrest deploy plan --project ./crm --env dev --out plans/dev.json
apexrest deploy apply --project ./crm --plan plans/dev.json
```

Configure `environments.dev`, review and trust the project, and supply the authorized exact-target policy before the target operations. The CRM template includes schema changes and required SQL/E2E suites, so its import needs their applicable authorization and dependencies. For a diagnostics-only compiler run, use `apexrest apex validate --project ./crm --json`.

Command help is available through `--help`. CLI `apex export` uses `--output`; `deploy plan` uses `--out`. JSON output reports classified results and exit codes. CLI and MCP share the same core checks.

When calling project-scoped MCP tools, pass the absolute application project directory in the `project` argument. The native server starts in its installed plugin directory, so missing or relative project paths are rejected before work starts. CLI examples resolve `--project` from the terminal working directory.

## Remove the repository plugin

For the direct repository installation:

```sh
codex plugin remove apexrest-apex@apexrest
codex plugin marketplace remove apexrest
```

Remove the marketplace only when you no longer need its entries. Start a new Codex task after removal. This unregisters the native plugin; it is not a request to delete application projects, backups, SQLcl credentials or durable deployment history. A managed installation has its own `apexrest plugin uninstall` command with ownership checks.

## Next steps

Read [deployment safety](deployment-safety.md) before operating a target, [security](../SECURITY.md) before sharing artifacts and the [verification status](implementation-status.md) before selecting this beta for a production workflow. The [documentation index](index.md) links the complete guides and evidence.
