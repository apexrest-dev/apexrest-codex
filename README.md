# APEXREST for Codex

English | [Українська](README.uk.md)

![APEXREST pencil and ruler symbol](docs/assets/apexrest-logo.svg)

[![Local quality gates](https://github.com/apexrest-dev/apexrest-codex/actions/workflows/ci.yml/badge.svg)](https://github.com/apexrest-dev/apexrest-codex/actions/workflows/ci.yml)

**Build and change Oracle APEX applications with Codex, from source to a verified import.**

APEXREST connects native Codex skills and MCP tools to Oracle SQLcl. Generate APEXlang, adopt an existing app, edit pages and shared components, plan the change, import it into an authorized target, and check the result in the Codex in-app browser.

[Get started](docs/getting-started.md) · [Documentation](docs/index.md) · [Deployment safety](docs/deployment-safety.md) · [Verification status](docs/implementation-status.md) · [Contributing](CONTRIBUTING.md)

![APEXREST connects a Codex request to APEXlang source, a verified deployment plan, Oracle APEX and runtime checks.](docs/assets/overview.svg)

> **Beta: `0.1.0-beta.1`.** Real Oracle template compilation and Codex native installation have been exercised in the environments recorded below. Stable release readiness is still blocked by the remaining integration, recovery and platform checks. Independent APEXREST tooling; not an official Oracle or OpenAI product.

## Install with the terminal menu

With Git and Node 24 LTS available, open the bundled TUI from the repository. **Install plugin** also requires a Codex CLI with native plugin support.

```sh
git clone https://github.com/apexrest-dev/apexrest-codex.git
cd apexrest-codex
node plugins/apexrest-apex/runtime/apexrest.mjs
```

1. Choose **Install tools** for Node.js, Java, SQLcl and browser tools. Read the Oracle terms and enable **Accept Oracle license terms** if you agree. **Skip browser installation** omits browser tools.
2. Choose **Install plugin** to register APEXREST in Codex using the existing runtime.
3. Restart Codex and start a new task. Add the managed `bin` directory to PATH using the [launcher instructions](docs/getting-started.md#use-the-cli) so `apexrest` opens the menu from any folder.

On **Review**, press Enter to execute the selected action. There are no **Preview only** or **Approve changes** toggles. The bundled package needs no `npm ci` or TypeScript build. The full [installation guide](docs/getting-started.md#install-with-the-terminal-menu) also covers connection checks and removal.

## Install in Codex

For direct plugin registration through the Codex CLI, keep Node 24 LTS on `PATH` and run:

```sh
codex plugin marketplace add apexrest-dev/apexrest-codex
codex plugin add apexrest-apex@apexrest
```

The repository includes the bundled runtime; no `npm ci` or local build is needed for this installation. Start a new Codex task after registration. The [installation guide](docs/getting-started.md#install-the-plugin) covers verification, Oracle runtime setup, managed installation and removal. Installation does not create a database or deploy an application.

After installation, start a new Codex task and ask:

> Use APEXREST to check my setup. Report the compiler, connection and target checks that still need attention.

You need a Codex host with native plugin support. Oracle work also needs the reviewed Node, Java and SQLcl runtimes, an existing supported APEX target and a locally saved SQLcl connection. The [quickstart](docs/getting-started.md) explains each step; never paste passwords into a prompt.

Send `Use $apexrest-menu` in the Codex message box to show **All functions** in the conversation: setup, projects, APEX, database, deployment, testing, diagnostics and review. This is a skill that displays a conversational menu; the plugin does not add a permanent APEXREST sidebar or top-menu button. See [how to find the menu](docs/getting-started.md#all-functions-in-the-codex-plugin-menu) for picker and plugin-page navigation.

To install Java, SQLcl and the other client tools, choose **Install dependencies** in the plugin menu or invoke `$apexrest-install-dependencies`. It offers all dependencies, Oracle tools without a browser, or a preview. See the [dependency command](docs/getting-started.md#install-dependencies-from-the-plugin-menu) for options and license consent.

## Terminal interface

**Install plugin** creates the managed launcher; direct registration with `codex plugin add` alone does not put `apexrest` on PATH. Saved connections come directly from the SQLcl store; listing and testing them requires no APEXREST alias.

Run `apexrest` in an interactive terminal for the APEXREST logo and six direct actions: install/uninstall tools, install/uninstall the plugin, and list/test saved SQLcl connections. Use arrow keys or type to search. In the connection picker, Enter tests the selected name and Ctrl+R refreshes. Other workflows remain explicit CLI commands. Explicit commands and `--json` retain their scripting behavior; piped input prints help.

The home screen also includes an APEXlang table: 99 types in 9 groups from the bundled Oracle reference, including 23 page items. Tab switches between actions and the catalogue; type a name or group to search and use arrows to browse. The catalogue works locally without a database connection.

The [terminal guide](docs/tui.md) covers keyboard controls and launchers. From a source checkout, `node plugins/apexrest-apex/runtime/apexrest.mjs` opens the same interface. Native Codex plugin registration alone does not put `apexrest` on your shell’s `PATH`.

## What you can build

| Workflow                       | What APEXREST does                                                                                                        |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Create an application          | Generate real Oracle APEXlang and start from a blank app or the customer CRM template.                                    |
| Change an existing application | Export into a new directory, preserve Oracle IDs and `.apex` metadata, and edit the source under version control.         |
| Build a dashboard              | Use real source queries, native APEX components, submitted filter items and runtime checks.                               |
| Deploy a change                | Bind an immutable plan to source, toolchain and target; back up an existing app; import under the required authorization. |
| Test and diagnose              | Run configured unit, SQL, API or browser suites; inspect bounded diagnostics and background-job results.                  |

An explicit request to create, update or import an identified development/test app includes the necessary scoped import. Codex records that existing authorization and completes the workflow. Production uses a separate, externally signed approval on a protected runner.

## Start with a concrete request

**Create an app**

> Use APEXREST to create a customer CRM in the configured development environment. Include customer search, a validated edit form and a dashboard. Complete the plan, authorized import and relevant runtime checks.

**Change an existing app**

> Use APEXREST to adopt application 100 from the configured test environment into a new project. Add a sales dashboard using real database measures. Preserve the existing pages, shared components and authentication, then import and verify the change.

**Make the next edit**

> Update the dashboard filters to refresh the affected native regions. Reuse the existing project and connection, reconcile the measures, import into the same test app and verify the interactions in the in-app browser.

Replace example IDs and environment names with your actual target. Codex asks for missing non-secret identity information; it does not guess a database or expand the request to unrelated schema writes.

## A short path from edit to import

![Deployment flow: inspect once, edit coherent changes, validate within planning, review the bound plan, back up and import, then verify. Identity, drift and authorization remain checked before writes.](docs/assets/deployment-flow.svg)

The workflow reuses project discovery, batches related edits and avoids a redundant compiler run immediately before planning. Independent read-only preflight checks run concurrently. Every write still requires fresh target checks, source and target drift checks, coordination, and a verified backup for an existing application.

A clean supported APEX installation is sufficient. APEXREST service tables are **not required**: durable local migration history and coordination are the default. Independent machines need external serialization or the explicitly selected database coordination mode. [Understand the deployment boundary](docs/deployment-safety.md).

## What has been verified

| Area                | Available evidence                                                                        | Remaining scope                                                                          |
| ------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Native Codex plugin | Isolated installation, discovery, tool calls and lifecycle on Codex 0.154.0 / macOS arm64 | Other host and platform combinations; evidence must be refreshed for a stable release    |
| Oracle APEXlang     | Real blank/CRM compilation with local SQLcl, without a database connection                | Connected imports, broader component coverage and unsupported-component fixtures         |
| Local runtime       | Unit, CLI/MCP contract, installer and packaging checks with explicitly labelled fixtures  | Connected recovery, fault-injection, SQL/CRUD integration and application browser checks |

Unit tests, mocked failure scenarios, real Oracle operations and native-host checks are recorded separately. See the [acceptance matrix](docs/acceptance.json), [implementation status](docs/implementation-status.md) and [remaining release gates](docs/next-actions.md). A missing or skipped integration suite is not a passing result.

## Develop locally

Use Node 24 LTS and the committed npm lockfile:

```sh
npm ci --ignore-scripts
npm run build
npm run lint
npm run typecheck
npm run test:unit
npm run test:contracts
npm run test:installers
npm run site:build
npm run test:packaging
```

After source or resource changes, run `npm run plugin:sync` to refresh the checked-in native bundle. `npm run plugin:check` compares it with a fresh build. `npm run test:repository-plugin` checks its native installation in an isolated Codex profile. Native-host and Oracle checks require their documented prerequisites. `npm run release:dry-run` creates local artifacts and a readiness report; `npm run check-release-readiness` fails while required evidence is missing. Neither command publishes a release. See [contributing](CONTRIBUTING.md) and [testing](docs/testing.md).

## Documentation and support

- [Getting started](docs/getting-started.md): install, connect, create or adopt, plan and verify.
- [Configuration](docs/configuration.md): explicit targets, connection references and private policy.
- [Architecture](docs/architecture.md): one core behind the CLI, MCP and skills.
- [Troubleshooting](docs/troubleshooting.md): setup, compiler, auth and recovery diagnostics.
- [Security](SECURITY.md): credential boundaries, trusted code and private reports.
- [Publisher setup](docs/publishing.md): protected release workflow and outstanding prerequisites.

Report reproducible bugs through [GitHub issues](https://github.com/apexrest-dev/apexrest-codex/issues), with sanitized diagnostics. Follow [SECURITY.md](SECURITY.md) for sensitive reports. Licensed under [Apache-2.0](LICENSE).
