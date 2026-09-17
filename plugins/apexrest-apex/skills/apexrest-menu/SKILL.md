---
name: apexrest-menu
description: Show the APEXREST plugin menu and route to all available functions. Use when the user opens All functions or asks for the APEXREST menu, commands or capabilities.
---

# All functions

Opening this menu is navigation. Show the following choices in the conversation and let the user select an action. Route application implementation tasks through [Reviewed development team](../apexrest-team/SKILL.md): manager and QA reviews are enforced by its runtime. Route administrative or reference-only tasks directly to their workflow. Do not execute every function, start installation or import an application merely because the menu was opened.

| Menu entry | Functions | Workflow |
| --- | --- | --- |
| Reviewed development team | Fixed developer → manager code review → independent QA → manager QA review; status, messages and cancellation | [Team](../apexrest-team/SKILL.md) |
| Install dependencies | Install or preview Node.js, Java, SQLcl, Playwright and Chromium; Oracle tools only; offline/cache options | [Install dependencies](../apexrest-install-dependencies/SKILL.md) |
| Setup and connections | Diagnose tools; select SQLcl CLI or official SQLcl MCP; add, list, test or remove local connection references; inspect plugin version and installation | [Setup](../apexrest-setup/SKILL.md) |
| Projects | Create a project, adopt an identified application, inspect source and environment configuration | [Projects](../apexrest-project/SKILL.md) |
| APEX applications | Generate, edit, export, validate or compare APEXlang; pages, forms, reports, grids, charts and shared components; search/read pinned Oracle references | [APEXlang](../apexrest-apexlang/SKILL.md) |
| Database and PL/SQL | Read allowlisted metadata, design migrations and PL/SQL, plan database changes | [Database](../apexrest-database/SKILL.md) |
| Deployment and recovery | Create/review a plan, apply an authorized change, inspect deployment status, prepare a restore plan | [Deployment](../apexrest-deploy/SKILL.md) |
| Tests and browser checks | Unit, SQL, API, browser or all configured suites; interactive browser authentication; reports and in-app verification | [Tests](../apexrest-test/SKILL.md) |
| Diagnostics and jobs | Diagnose failures, inspect/cancel background jobs, read registered artifacts | [Debug](../apexrest-debug/SKILL.md) |
| Review changes | Review source preservation, deployment risk, security, package integrity and release evidence | [Review](../apexrest-review/SKILL.md) |

Load only the selected workflow. Prefer its purpose-built MCP tools. For CLI-only functions, resolve `../../runtime/apexrest.mjs` from this skill directory to an absolute path and run it with Node. Native installation does not add `apexrest` to PATH. Read the selected command's `--help` for required arguments. Pass the user's absolute application directory as `project` on project-scoped MCP calls; the plugin installation directory is not the project.

## Complete CLI index

The following entries cover the shared operation catalog. Dots below correspond to spaces in CLI commands, except `test.run`, which uses `test unit|sql|api|e2e|all`.

| Workflow | Operations |
| --- | --- |
| Setup and maintenance | `version`, `doctor`, `setup`, `plugin.validate`, `plugin.install`, `plugin.update`, `plugin.uninstall`, `connection.add`, `connection.list`, `connection.test`, `connection.remove` |
| Dependencies | `dependencies.install`, `dependencies.uninstall` |
| SQLcl backend | `sqlcl.status`, `sqlcl.configure` |
| Reviewed team | `team.start`, `team.status`, `team.message`, `team.cancel` |
| Projects | `project.init`, `project.adopt`, `project.inspect` |
| APEX and references | `apex.generate`, `apex.export`, `apex.validate`, `apex.diff`, `docs.search`, `docs.read`, `docs.sync` |
| Database | `metadata.read`, `db.plan` |
| Deployment and recovery | `deploy.plan`, `deploy.apply`, `deploy.status`, `deploy.restore-plan` |
| Tests | `test.run`, `test.report`, `test.auth` |
| Jobs and artifacts | `jobs.status`, `jobs.cancel`, `artifacts.read` |
| Sandbox capability diagnostics | `sandbox.status`, `sandbox.up`, `sandbox.down` |

`mcp` starts the server transport, not an application action. Sandbox commands currently return unsupported capability diagnostics; do not present them as working Oracle provisioning. `docs.sync` uses the runtime's pinned-reference behavior, not arbitrary downloads. Plugin maintenance uses the existing installation's documented ownership checks; never uninstall a plugin or switch its marketplace merely to display this menu.

Menu selection does not supply missing target identity, accept Oracle licenses or authorize production. Preserve explicit user scope, named local connection references, source files, backup/drift/coordination checks and unknown-outcome safeguards. Never request passwords in chat. Keep local fixtures, native discovery, Oracle results and in-app browser observations distinct.

## Development panel

Use `$apexrest-panel` to open the native Codex workspace view. `panel.open` returns the local desktop URL; `panel.status` reads the effective configuration and live work; `panel.action` starts or steers a reviewed team, saves future defaults or queues supported checks. `apexrest panel tui --project PATH` opens the terminal view.
