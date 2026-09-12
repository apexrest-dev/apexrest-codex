# APEXREST for Codex

Source repository: [apexrest-dev/apexrest-codex](https://github.com/apexrest-dev/apexrest-codex).

Create, inspect and validate Oracle APEXlang applications from a native Codex plugin. Plan controlled deployments and run SQL and browser tests using the same core policy through CLI and MCP.

Deploy works with a clean supported APEX installation: APEXREST service tables are not required. Local durable migration history and coordination are the default; database coordination is an explicit optional mode. See [clean APEX deployment](docs/clean-apex-deployment.md) for the rule change and actual verification.

**Local beta, not a verified stable release.** Codex 0.154.0 compatibility profile and SQLcl 26.1.2 local compilation were exercised on macOS arm64. Database deployment, existing-app round trips, utPLSQL, authenticated CRM CRUD and Windows/Linux host setup require their own evidence. See [acceptance matrix](docs/acceptance.json), [actual results](docs/implementation-status.md) and [next actions](docs/next-actions.md).

Independent APEXREST tooling, not an official Oracle or OpenAI plugin. [Українською](README.uk.md).

## Install from the local release

Build with Node 24 LTS:

```sh
npm ci
npm run build
npm run site:build
npm run release:dry-run
```

The build writes `dist/releases/install-local.txt` with the exact archive filename and SHA-256 for this version. Review it, then execute that local Bash or PowerShell command. `--yes` authorizes technical setup; `--accept-oracle-license` is separate consent for the linked vendor terms. Dependencies are installed under `~/.apexrest`; existing compatible runtimes can be reused. The installer registers a local native marketplace and binds MCP to absolute paths in the managed installation. Reload Codex after setup. It does not ask you to edit MCP JSON or install global skills.

`--dry-run`, `--offline`, `--cache-dir`, `--home`, `--codex-home` and `--native-only` are supported. Project-only Codex enablement is explicitly blocked on the tested client; a dedicated Codex profile is available through `--codex-home`. Runtime binaries, database accounts and browser credentials are not included in the release.

## Use

Use `~/.apexrest/bin/apexrest` (or `<--home>/bin/apexrest`; Windows: `apexrest.ps1`). The examples below abbreviate that path as `apexrest`. Use the generated launcher in the managed home, or the bundled `runtime/apexrest.mjs` with Node 24. No shell profile is edited.

```sh
apexrest doctor --json
apexrest project init ./crm --template customer-crm
apexrest connection add dev-read --sqlcl-name saved-read-connection
apexrest connection add dev-deploy --sqlcl-name saved-deploy-connection
apexrest apex validate --project ./crm --json
apexrest deploy plan --project ./crm --env dev --out plans/dev.json
apexrest deploy apply --project ./crm --plan plans/dev.json
apexrest test auth --project ./crm --env dev
apexrest test all --project ./crm --env dev --json
```

Before executing trusted project code, review it and add its canonical path to the private user policy. Configure exact DB/service/workspace/schema/application identity in `apexrest.json`. Named SQLcl credentials stay in the local SQLcl store. Remote tests and deployment require explicit target grants; production requires an externally signed plan in protected CI. Setup and doctor never deploy an application or provision a database.

An explicit request to create or update an identified development/test app includes its necessary import. The workflow records existing user authorization as a short-lived exact-plan grant and continues through runtime verification without asking the same permission twice. Application-only checks are scoped separately from full CRUD/SQL integration; see [deployment and verification rules](docs/deployment-safety.md).

CRM contains a customers table, server validation, report, modal CRUD form and dashboard. Its APEXlang compiles with the real Oracle compiler. SQL and browser test code is supplied, but passing live application evidence is not available in this checkout.

## Build and verification

```sh
npm run lint
npm run typecheck
npm run test:unit
npm run test:contracts
npm run test:packaging
npm run test:installers
npm run test:native-codex
npm run test:integration
```

Unit/installer fixtures are not Oracle evidence. Integration exits with a blocker when prerequisites are absent. `check-release-readiness` rejects stable readiness without current native-host, Oracle integration and platform evidence. Dry run builds unsigned local artifacts and a readiness report; it never publishes.

Read [architecture](docs/architecture.md), [configuration](docs/configuration.md), [deployment safety](docs/deployment-safety.md), [testing](docs/testing.md), [troubleshooting](docs/troubleshooting.md), [research](docs/research.md), [security](SECURITY.md), [contributing](CONTRIBUTING.md) and [publisher setup](docs/publishing.md).

The static website builds to `site-dist/` for future placement under `/codex/`. No public install endpoint or remote release has been published by this build.
