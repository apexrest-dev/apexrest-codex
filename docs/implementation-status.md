# Implementation status — beta 0.1.0-beta.1

English | [Українська](implementation-status.uk.md)

## Illustrated agent workflow — 2026-09-17

The [complete workflow guide](agent-workflow.md) now documents setup, fixed Pokémon roles, native session communication, mandatory review/QA gates, repair limits, input/source binding, panel settings and authorized APEX delivery in English and Ukrainian. Four actual installed-panel screenshots and a paired accessible SVG explain the process. [Capture and verification metadata](evidence/agent-workflow-documentation.json) records their scope and hashes. Screenshots show a real completed local Codex team and a separate `not_configured` panel test job; they do not claim an Oracle import or new runtime verification.

## Development panel and named agents — 2026-09-17

The Codex-only development panel is implemented in the in-app browser and CLI TUI. It shares one actual snapshot of settings, targets, agent tools/models, reviews, QA, messages, Git changes and durable APEX jobs/imports. Three new MCP operations and the panel skill bring the bundle to twelve skills and twenty-one tools. Pokémon names and local sprites identify the manager, up to three developers and QA without changing role authority. See [panel behavior and limits](panel.md), [panel checks](evidence/panel-local-checks.json) and [native discovery](evidence/panel-native-discovery.json).

The actual desktop route is the Codex in-app browser. The MCP UI resource is also advertised and contract-checked; embedded MCP rendering remains unverified. Ephemeral Codex sessions do not support metadata renaming: names belong to the plugin roster and instructions. No Oracle operation or deployment was performed for panel verification. Earlier evidence below describes its own source revision, not the later panel build.

## Mandatory Codex team and source audit — 2026-09-17

The primary implementation entry now runs separate Codex App Server sessions for manager, one to three developers and independent QA. A deterministic controller requires manager code review, QA and manager review of QA before `completed`; failed checks, malformed output, source drift and later user corrections cannot be silently approved. Four project-scoped MCP/CLI operations start, inspect, message and cancel the team. The initial team build contained eleven skills and eighteen MCP tools; the panel build above expands this catalog. See [workflow and limits](team.md) and the [upstream source audit](codex-integration.md).

[Native execution](evidence/team-native-local.json) uses real Codex inference on an isolated local coding fixture, with actual peer messages and independent tests. [Native discovery](evidence/team-native-discovery.json) checks the built plugin in an isolated profile. [Local regression checks](evidence/team-local-checks.json) distinguish protocol fixtures from native execution. This does not verify Oracle imports, desktop attachment or panel rendering. The source audit confirms a private internal agent registry, public App Server orchestration, fixed CLI status items and a hosted-app-only MCP event subscription. The product remains exclusively for Codex desktop and CLI.

## SQLcl CLI / official SQLcl MCP — 2026-09-16

The seventh TUI action, **SQLcl mode: CLI / MCP**, saves the backend in private `sqlcl.json` under `APEXREST_HOME`. The home screen shows the mode; new operations use it through the shared Oracle adapter, while active operations retain their selection. `sqlcl status` and `sqlcl configure` expose the same setting. CLI remains the default. MCP starts Oracle's `sql -mcp`, discovers tools, uses exact saved names and executes synchronous batches with completion acknowledgement. There is no automatic fallback or retry of a submitted write. MCP writes require explicitly selected restriction level 1 so fail-stop scripts are available; target identity, authorization, backup, drift and unknown-outcome safeguards remain in place. Setup and menu skills explain this distinction from the Codex-facing APEXREST MCP.

[Local checks](evidence/sqlcl-transport-local.json) cover regression tests, real macOS pseudo-terminal selection/cancellation/persistence and the rebuilt repository bundle. [Real Oracle checks](evidence/sqlcl-transport-oracle-local.json) cover SQLcl 26.1.2.132.1334: CLI, MCP default level 4 and MCP level 1 list the same 21 saved connections and compile the blank application offline. The report publishes only the count. Protocol failures and write barriers use explicit fixtures. [An isolated native Codex check](evidence/sqlcl-transport-native-local.json) also passed installation, discovery of ten skills and fourteen tools, and exact reference/doctor/project calls on macOS. No database connection/import, connected transaction semantics, MCP audit writes or Windows terminal behavior were verified by this change. The user's installed bundle and saved backend were not changed.

## Skill review — 2026-09-16

Review of all ten repository skills found no confirmed actionable defects in the reviewed instructions and local contracts. [Review evidence](evidence/skill-review-local.json) records four reference tests, three selected packaging checks, 18 resolved skill links and equality of all ten source/bundled `SKILL.md` entrypoints. Real offline SQLcl 26.1.2.132.1334 compilation passed for blank, customer-crm and filtered-components, preserving MMD. These checks do not certify full bundle freshness, connected SQL execution, imports, native UI, browser behavior or complete agent authoring tasks. Skill instructions were not changed.

## npm package preparation

The `@apexrest/codex@0.1.0-beta.1` manifest now permits public npm publication with the `beta` tag and an explicit registry. A prepack build and file allowlist include the CLI, resources, native plugin and license notices. The archive was built and installed into a temporary npm prefix; version output and bundled documentation search passed. Native setup preview is blocked by an existing invalid local Codex marketplace registration. These checks provide no new Oracle or native-host evidence. Publication has not occurred: npm returned `ENEEDAUTH`; ownership of the `@apexrest` scope is unverified. The separate GitHub publisher remains disabled.

The original build specification remains unchanged. This is working code and an installable beta, not a stable-qualified product. [acceptance.json](acceptance.json) separates implementation, verification, evidence and blockers for every A01–A28 criterion.

## APEXlang TUI dashboard

The home screen now includes a table of 99 types in 9 groups derived from the bundled Oracle `26.1@b0afa3b` catalogue, including 23 page items. Tab switches between the seven actions and the catalogue, with name/group search, scrolling and document counts. The layout adapts to terminal size. Catalogue loading failures leave actions usable; Ctrl+R retries the local file. The catalogue represents reference coverage, not complete compiler certification.

[Local evidence](evidence/tui-apexlang-dashboard-local.json) separates unit checks and actual Linux pseudo-terminal execution from SQLcl fixtures. Native Codex registration and Oracle compilation were not exercised by this revision; macOS/Windows terminal verification remains open.

## Installation documentation

The README, getting-started guide, site installation page and related guides match the current TUI: seven actions, direct execution after Enter, separate license consent, Bash/PowerShell launchers, SQLcl listing/testing without an alias, and the order for removing tools and the plugin. Direct Codex CLI registration remains a documented alternative. Examples and links are synchronized in English and Ukrainian.

[Documentation verification](evidence/installation-documentation-local.json) records local documentation, command-schema and generated-site checks only. This revision does not install/remove tools, change Codex registration or add Oracle/native-host evidence.

## Terminal interface

Bare `apexrest` and explicit `apexrest tui` show the APEXREST logo and seven direct actions: install/uninstall tools, install/uninstall the plugin, list/test saved SQLcl connections, and SQLcl CLI/MCP selection. Category menus and all other TUI workflows are removed; explicit CLI commands remain available. Plugin installation fixes `nativeOnly=true` and omits tool options. Preview only and Approve changes toggles are removed: Enter on review executes with `dryRun=false` and `yes=true`, while separate license and system-package consent default to off; results offer optional JSON and cancellation preserves the actual outcome.

Connections are loaded directly from SQLcl using `connmgr list -flat`, with search, selection and refresh. Enter tests the exact saved name with a read-only identity query, without requiring an APEXREST alias. CLI `connection list/test --saved` selects this behavior; existing reference-based defaults remain available. Managed tool removal has confirmation through Enter, ownership checks and installation locks; the CLI retains `--dry-run`. It preserves external runtimes, projects, credentials, cache and Node.js needed by the launcher or plugin.

[Direct-execution evidence](evidence/tui-direct-run-local.json) records the new flow and temporary-fixture removal after Enter. [Earlier focused TUI evidence](evidence/tui-focused-local.json) separates unit/installer fixtures, CLI/packaging checks, actual Linux pseudo-terminal execution with an explicit SQLcl fixture, and a real local SQLcl listing. The local store is empty, so live database connection testing remains unverified. macOS/Windows terminal checks remain open. Rebuilding updates the repository launcher without native reinstallation. [Terminal guide](tui.md).

The earlier current-folder request remains implemented in the CLI: `project init . --template existing-app` accepts an empty folder and derives its alias from the resolved directory. Six local tests cover existing empty/new paths, existing-file preservation, symlinks and concurrent initialization. Project creation is absent from the focused TUI. Earlier menu evidence is historical.

## Setup source selection

Setup previously inventoried the entire source checkout, so an unrelated workspace symlink could produce `Source and bundle inventories reject symlinks.` The resolver now selects the actual plugin from the checked-in plugin runtime, from `dist/runtime` through its sibling `codex-compat` bundle, or from a standalone plugin. An explicit `--from` supports a standalone plugin or repository/marketplace; repository sources select only `plugins/apexrest-apex`. Installation copies that selected plugin and writes fixed marketplace metadata containing only its entry. Other workspace siblings are neither scanned nor copied, and symlinks inside the selected plugin remain rejected. Preview remains side-effect-free.

[Local setup-source evidence](evidence/setup-source-local.json) records a successful `apexrest setup --dry-run --json` and a historical Linux pseudo-terminal run of the former **Set up APEXREST** menu action showing **Preview ready**, without creating a native installation directory or writing Codex configuration. Setup-source contracts and installer regression tests passed; installer fixtures performed real copies into temporary directories with an explicit Codex stub. Existing terminal checks also passed. These fixtures do not establish live native registration, and this fix does not claim Oracle connectivity or database changes. macOS/Windows verification and a live native installation lifecycle remain open.

## Existing local plugin registration

Setup previously reported `MARKETPLACE_OWNERSHIP_CONFLICT` for an existing local APEXREST registration without a managed receipt. Preflight now recognizes an exact dedicated local marketplace with one valid APEXREST plugin and previews its migration before toolchain downloads. Existing `--yes` approval covers the update. Foreign, remote or ambiguous marketplaces remain conflicts, with the precise marketplace root and Codex profile in the diagnostic. `--native-only` omits tools from the plan and execution. The registration report’s TUI Setup preview describes the previous menu; setup remains available through the CLI.

Apply preserves the previous payload, backs up Codex configuration and saves a durable transition record under the managed home. It rechecks registration drift, uses native Codex marketplace removal/addition and verifies installed cache bytes. After a confirmed failure, recovery attempts to restore the previous marketplace and a previously enabled plugin only when the saved state still matches. Uncertain recovery remains an unknown result requiring review. Repeated setup, including execution from the installed CLI, reuses a matching installation; a changed Node executable binding creates a new installation root while retaining the old one.

[Registration evidence](evidence/setup-registration-local.json) records passing fixtures, unit/UI checks, CLI contracts, packaging and actual Linux pseudo-terminal checks separately from native-host verification. Isolated Codex 0.154.0 with Node 26.8.1 confirmed migration without a receipt, exact installed-cache refresh and MCP tool discovery. Repeated explicit setup and default setup from the installed CLI retained the same destination; the prior payload, other registrations and unrelated configuration were preserved.

The authorized repair also passed in the current user’s Codex profile: native-only setup migrated the existing dedicated local registration into managed installation, verified every cached plugin file and MCP, and preserved the previous source, unrelated marketplaces/settings and existing toolchain state. It downloaded no tools and performed no Oracle work. Historical [setup-source checks](evidence/setup-source-local.json) retain their original scope. macOS/Windows, real native failure/unknown-outcome recovery and cross-machine concurrency matrices remain open.

## Complete Codex plugin menu

The plugin provides **All functions** (`$apexrest-menu`) and nine named workflow entries. Every skill carries native display metadata and a starter prompt; the plugin-level prompts respect the host limit of three entries and 128 characters each. The menu indexes every shared CLI operation and distinguishes unsupported sandbox provisioning. [Local menu checks](evidence/plugin-menu-local.json), [isolated native menu discovery](evidence/plugin-menu-native.json) and [installed menu verification](evidence/plugin-menu-installed.json) record separate scopes. Actual Codex menu rendering cannot be visually inspected because native computer control is unavailable; host-returned labels and prompts are checked instead.

The earlier installation report records the reviewed local development build `0.1.0-beta.1+codex.20260913182252`. That verification matched all 215 installed bundle files, checked the All functions plugin starter and all ten skill labels/prompts, and confirmed unrelated marketplace registrations were preserved. Its version claim is historical: the later missing-menu investigation on 2026-09-13 found installed version `0.1.0-beta.1`, enabled, with the menu skill and metadata present. At that point, the APEXREST marketplace pointed to the local development build; the later managed migration is recorded above.

The missing-menu investigation confirmed all ten APEXREST skills exposed to the active conversation and a successful real `apexrest_doctor` MCP response (run `61d339f3-a984-4117-9bf6-14b22488c761`). It did not inspect the native UI or establish Oracle connectivity. The user reported that the menu was not visible; the cause of the UI discovery problem remains unverified. The README and getting-started guide now explain that **All functions** displays a menu in conversation, provide `Use $apexrest-menu` as the direct entry point, and distinguish the desktop `@` picker from CLI `/skills` and `$` invocation. No plugin reinstall or configuration change was performed during this investigation.

## Dependency installation command

The plugin includes **Install dependencies** (`$apexrest-install-dependencies`) with all-dependencies, Oracle-tools-only and preview choices. The shared CLI operation `dependencies install` installs the locked client toolchain without native re-registration. Its preview shows browser selection; technical approval, Oracle license consent, offline/cache controls and explicit OS-package permission remain separate. Repeating an Oracle-only installation preserves an existing browser state. The repository bundle and operation schema include the command.

Local verification is recorded separately in [dependency command checks](evidence/dependency-command-local.json): build, typecheck, lint, CLI/MCP contracts, installer fixtures, packaging, bundle integrity and both documentation languages. These checks do not establish real Java/SQLcl downloads or Oracle integration. [Isolated native discovery](evidence/dependency-command-native.json) records Codex 0.154.0 on Linux x64 discovering nine skills and 14 connected MCP tools; it does not establish visual menu rendering or clean-machine toolchain installation. The existing evidence files retain their historical scope.

## Plugin and documentation logo

The [APEXREST pencil-and-ruler symbol](assets/README.md) is used without lettering or a background in the native plugin, both README languages, the documentation index and every site header. The SVG removes the lettering paths and preserves the original symbol geometry and colors. Logo-specific site styles have no background or border. This change concerns branding and packaging; Oracle and native-host lifecycle evidence retains its original scope.

Local verification on 2026-09-12 passed: build, bundle freshness/integrity, both plugin manifest validations, lint, 37 EN/UK documentation pairs and 13 packaging tests. XML checks verified six identical source/build assets with the original symbol geometry and colors, no lettering paths and no background shapes. Separate Codex in-app browser observations confirmed transparency on the dark header and light documentation background, with no wordmark or image border. The installed plugin has not been refreshed for this branding change; native logo rendering remains unverified.

## Plugin website metadata

The plugin metadata declares `interface.websiteURL` as `https://apex.rest` for the Codex details page. The generated and installed native manifests carry the same value. On 2026-09-12, Codex CLI confirmed that the plugin from the local repository marketplace was installed and enabled; all 198 installed bundle file hashes matched and the installed CLI validated the package. Visual confirmation of the Website field remains unavailable because the computer-use tool does not permit access to the Codex app. This scoped installation check does not refresh the full native lifecycle or Oracle evidence.

## APEXlang retrieval for Codex

The [APEXlang optimization](apexlang-optimization.md) adds direct component routes, complete pinned Oracle contracts/templates, ranked bounded lookup, release-version matching, grammar aliases and an offline search accelerator. Twelve deterministic retrieval cases pass. The [native check](evidence/apexlang-codex.json) verifies discovery and retrieval in an isolated Codex 0.154.0 macOS arm64 profile. The [compiler check](evidence/apexlang-compiler.json) verifies three offline application compositions with unchanged MMD. These checks do not establish model generation success rates, connected SQL results or application browser behavior. The build now emits only the Codex native package; existing installations and publication are unchanged.

| Area                | Implemented                                                                                                                       | Public verification                                                                                                                   | Remaining boundary                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Native plugin       | One Codex layout, one identity, eleven skills, bundled CLI/MCP and native registration                                               | Codex 0.154.0 on macOS arm64: installation outside the checkout, tool discovery, generate/validate jobs, enable/disable and uninstall | Other native host/platform combinations and a refreshed complete lifecycle for release             |
| Client installation | Bash/PowerShell bootstrap, pinned hashes, safe archives, managed dependencies, locks and recovery                                 | macOS setup, repeated offline setup, Chromium launch, settings preservation and installer fixtures                                    | Clean-machine Linux/Windows/WSL2 execution and complete interruption/upgrade matrix                |
| APEXlang            | SQLcl generate/export/adopt/validate/diff, non-overwrite staging and metadata preservation                                        | Real blank-app and CRM compiler reports; source and preservation fixtures                                                             | Connected existing-app round trips, broader component coverage and unsupported-component rejection |
| Deployment          | Immutable plans, fresh identity and drift checks, SQL backups, frozen sources, migration history, coordination and reconciliation | Local fixtures exercise policy, checksums, backups, locks and failure handling                                                        | Source-bound connected import, restore and fault-injection qualification                           |
| Application tests   | Unit, utPLSQL, API and browser runners; required-suite gates and private reports                                                  | Local test parsing, gate and subprocess fixtures                                                                                      | Live authenticated CRUD, negative validation, applicable SQL suites and recovery evidence          |
| Release and website | Native/runtime ZIPs, checksums, SBOM, provenance, guarded publishing and a static documentation site                              | Local packaging, schema, integrity and link checks; hosted quality gates; scoped in-app site observations                             | Unsigned beta; protected signing/publication and stable qualification remain open                  |
| Sandbox             | Capability diagnostics and a fail-closed unsupported profile                                                                      | No supported provisioned sandbox claimed                                                                                              | Complete licensed Oracle/APEX/ORDS/utPLSQL provisioning and verification                           |

## Current checks and source binding

[evidence/local-checks.json](evidence/local-checks.json) records an earlier consolidated local run: Node version, source digest, exit codes, durations and log hashes. Private console logs remain under `.apexrest/check-logs/`. That report contains 64 unit, 14 installer, six CLI/MCP contract and 12 packaging tests. Unit and installer fixtures are not Oracle integration evidence.

The repository bundle is checked with `npm run plugin:check`. It validates source freshness, every bundled file hash, native marketplace parity and agreement with a fresh build. `npm run plugin:sync` regenerates it after source changes. These checks run in Linux, macOS and Windows CI.

The separate [bilingual documentation report](evidence/documentation-bilingual.json) records 36 English/Ukrainian document pairs, 28 generated routes and 13 passing packaging tests, including language navigation and search-index isolation. `npm run docs:check` checks companion coverage, executable-example parity, heading structure and local links. In-app browser observations cover language switching, search, diagrams and a narrow layout; they are recorded separately and do not refresh Oracle or native-host evidence.

The [hosted CI report](evidence/repository-ci.json) records its exact commit and source digest. Hosted tests exercise local code, packaging and site generation; they do not certify native Codex lifecycle or connected Oracle operations. Earlier reports retain their original source digests and must be refreshed before contributing to a stable release gate.

## Native installation and compiler evidence

The [repository installation smoke report](evidence/native-repository.json) records its installation source, platform and runtime versions, eight skills, 14 connected tools, bounded reference search, doctor and project inspection outside the plugin cache. This is a read-only native-host check without an Oracle import.

[Native lifecycle evidence](evidence/native-codex-compat.json) separately records the earlier isolated host lifecycle and real SQLcl generation/validation. [Compiler evidence](evidence/oracle-local.json) covers the blank-app and customer-CRM templates. [Managed setup evidence](evidence/setup-local.json) covers the earlier local setup and repeated offline installation. Each report's source digest limits the claim it supports.

Direct repository installation requires Node 24 on `PATH`; it needs no npm install or TypeScript build. Codex starts the native MCP server relative to its installed plugin directory. Project-scoped MCP tools require an explicit absolute project path; CLI relative-path behavior remains available.

## Deployment and browser rules

A clean supported APEX installation requires no APEXREST service tables. Durable local migration history and coordination are the default. Independent homes or machines need external serialization or the explicitly selected database coordination mode. Identity, source/target drift, backup, approval and unknown-outcome protections remain required. See [deployment safety](deployment-safety.md) and [clean APEX deployment](clean-apex-deployment.md).

An explicit request to create, update or import an identified development/test application authorizes its necessary scoped import. Production requires protected external approval. Application-only work uses the applicable checks; an absent automated suite is never recorded as passed.

For visible application changes, the skills require inspection in the Codex in-app browser when it and the deployed change are available. Browser observations are recorded separately from automated tests. This workflow rule does not itself establish application browser-test coverage.

## Runtime optimization

[Local measurements](optimization-review.md), [ADR 008](adr/008-runtime-optimization.md) and [synthetic benchmark evidence](evidence/optimization-local.json) cover shared CLI/MCP chunks, lazy installer loading, streaming downloads/checksums and bounded reference indexing. Their recorded local samples show smaller runtime size, lower peak memory use and faster repeated reference lookup. They do not establish connected Oracle or cross-platform performance guarantees.

The runtime also combines fresh target identity reads, invalidates cached compiler help when the toolchain changes and overlaps independent read-only preflight operations. Local regression fixtures cover these behaviors. Write barriers and fresh target checks remain in place.

## Public distribution

[apexrest-dev/apexrest-codex](https://github.com/apexrest-dev/apexrest-codex) is the canonical source repository. It contains the native marketplace and self-contained plugin bundle, English and Ukrainian documentation and two accessible SVG diagrams in both languages for architecture and deployment. The static site has 28 routes, 14 per language, with tables, diagrams, safe Markdown, validated anchors, a page language switch and separate search indexes.

[In-app site observations](evidence/repository-site-browser.json) describe their limited documentation-page scope. `dist/releases/` contains local archives, checksums and readiness reports; `site-dist/` contains the generated documentation. No vendor binaries, private browser state or raw local-machine evidence are included in public packages.

`npm run check-release-readiness` remains intentionally blocked while required native-host, compiler or full integration evidence is missing or stale. Publisher configuration remains disabled. See [next actions](next-actions.md) for the remaining dependencies.
