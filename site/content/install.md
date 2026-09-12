# Install in Codex

English | [Українська](install.uk.md)

Install the native plugin directly from the [APEXREST repository](https://github.com/apexrest-dev/apexrest-codex). The repository includes a built plugin bundle; using it does not require compiling the TypeScript project.

## 1. Check the prerequisites

Install Node.js 24 LTS and make `node` available on `PATH`. Native plugin registration was tested with Codex 0.154.0 on macOS arm64. See the [support matrix](versions.md) for other environments.

## 2. Add the repository and plugin

```sh
codex plugin marketplace add apexrest-dev/apexrest-codex
codex plugin add apexrest-apex@apexrest
```

Reload Codex and start a new task to discover the plugin's skills and tools.

## 3. Configure Oracle access

Follow [Getting started](../../docs/getting-started.md) to inspect the toolchain and connect a named environment. Oracle operations require Java 21 and SQLcl 26.1.2; named connections remain local. Review Oracle license terms before allowing managed vendor downloads.

Then ask Codex to create an application or update an identified development/test application. The plugin validates, plans, imports and verifies the authorized change.

## Build from source or inspect release files

For plugin development or reproducible packaging, clone the repository and run:

```sh
npm ci --ignore-scripts
npm run build
npm run site:build
npm run release:dry-run
```

`dist/releases/install-local.txt` contains exact local bundle hashes and Bash/PowerShell installation commands. Those generated artifacts are separate from the repository marketplace installation above. A signed stable release has not yet been published.
