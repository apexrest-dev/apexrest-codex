# Implementation status — beta 0.1.0-beta.1

English | [Українська](implementation-status.uk.md)

The original build specification remains unchanged. This is working code and an installable beta, not a stable-qualified product. [acceptance.json](acceptance.json) separates implementation, verification, evidence and blockers for every A01–A28 criterion.

## Plugin and documentation logo

The owner-supplied [APEXREST pencil-and-ruler logo](assets/README.md) is included in the native plugin, both README languages, the documentation index and every generated site header. The horizontal source is used in site headers, and the composer icon frames the symbol. Display SVGs preserve the original paths and colors while trimming empty margins and adding a white background. This change concerns branding and packaging; Oracle and native-host lifecycle evidence retains its original scope.

Local verification on 2026-09-12 passed: build, bundle freshness/integrity, both plugin manifest validations, lint, 37 EN/UK documentation pairs and 13 packaging tests. XML checks confirmed that original vector geometry and colors are preserved, and asset comparisons confirmed identical documentation/plugin logo copies. Separate Codex in-app browser observations verified the Ukrainian documentation at desktop width, the English documentation at 320 px width, and the icon at 98 px and 32 px on light and dark backgrounds. The installed plugin has not been refreshed for this branding change; native logo rendering remains unverified.

## Plugin website metadata

The plugin metadata declares `interface.websiteURL` as `https://apex.rest` for the Codex details page. The generated and installed native manifests carry the same value. On 2026-09-12, Codex CLI confirmed that the plugin from the local repository marketplace was installed and enabled; all 198 installed bundle file hashes matched and the installed CLI validated the package. Visual confirmation of the Website field remains unavailable because the computer-use tool does not permit access to the Codex app. This scoped installation check does not refresh the full native lifecycle or Oracle evidence.

## APEXlang retrieval for Codex

The [APEXlang optimization](apexlang-optimization.md) adds direct component routes, complete pinned Oracle contracts/templates, ranked bounded lookup, release-version matching, grammar aliases and an offline search accelerator. Twelve deterministic retrieval cases pass. The [native check](evidence/apexlang-codex.json) verifies discovery and retrieval in an isolated Codex 0.154.0 macOS arm64 profile. The [compiler check](evidence/apexlang-compiler.json) verifies three offline application compositions with unchanged MMD. These checks do not establish model generation success rates, connected SQL results or application browser behavior. The build now emits only the Codex native package; existing installations and publication are unchanged.

| Area                | Implemented                                                                                                                       | Public verification                                                                                                                   | Remaining boundary                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Native plugin       | One Codex layout, one identity, eight skills, bundled CLI/MCP and native registration                                                  | Codex 0.154.0 on macOS arm64: installation outside the checkout, tool discovery, generate/validate jobs, enable/disable and uninstall | Other native host/platform combinations and a refreshed complete lifecycle for release             |
| Client installation | Bash/PowerShell bootstrap, pinned hashes, safe archives, managed dependencies, locks and recovery                                 | macOS setup, repeated offline setup, Chromium launch, settings preservation and installer fixtures                                    | Clean-machine Linux/Windows/WSL2 execution and complete interruption/upgrade matrix                |
| APEXlang            | SQLcl generate/export/adopt/validate/diff, non-overwrite staging and metadata preservation                                        | Real blank-app and CRM compiler reports; source and preservation fixtures                                                             | Connected existing-app round trips, broader component coverage and unsupported-component rejection |
| Deployment          | Immutable plans, fresh identity and drift checks, SQL backups, frozen sources, migration history, coordination and reconciliation | Local fixtures exercise policy, checksums, backups, locks and failure handling                                                        | Source-bound connected import, restore and fault-injection qualification                           |
| Application tests   | Unit, utPLSQL, API and browser runners; required-suite gates and private reports                                                  | Local test parsing, gate and subprocess fixtures                                                                                      | Live authenticated CRUD, negative validation, applicable SQL suites and recovery evidence          |
| Release and website | Native/runtime ZIPs, checksums, SBOM, provenance, guarded publishing and a static documentation site                              | Local packaging, schema, integrity and link checks; hosted quality gates; scoped in-app site observations                             | Unsigned beta; protected signing/publication and stable qualification remain open                  |
| Sandbox             | Capability diagnostics and a fail-closed unsupported profile                                                                      | No supported provisioned sandbox claimed                                                                                              | Complete licensed Oracle/APEX/ORDS/utPLSQL provisioning and verification                           |

## Current checks and source binding

[evidence/local-checks.json](evidence/local-checks.json) records the latest consolidated local run: Node version, source digest, exit codes, durations and log hashes. Private console logs remain under `.apexrest/check-logs/`. The suite contains 64 unit, 14 installer, six CLI/MCP contract and 12 packaging tests. Unit and installer fixtures are not Oracle integration evidence.

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
