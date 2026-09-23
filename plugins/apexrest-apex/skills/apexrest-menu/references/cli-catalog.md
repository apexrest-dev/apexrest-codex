# CLI catalog

Read when the user requests a complete command inventory or needs a CLI-only action. Dots below become spaces except `test.run`, which is `test unit|sql|api|e2e|all`.

| Workflow            | Operations                                                                                                                                                                          |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Setup/maintenance   | `version`, `doctor`, `setup`, `plugin.validate`, `plugin.install`, `plugin.update`, `plugin.uninstall`, `connection.add`, `connection.list`, `connection.test`, `connection.remove` |
| Dependencies        | `dependencies.install`, `dependencies.uninstall`                                                                                                                                    |
| SQLcl backend       | `sqlcl.status`, `sqlcl.configure`                                                                                                                                                   |
| Panel               | `panel.open`, `panel.status`, `panel.action`, `panel.tui`                                                                                                                           |
| Projects            | `project.init`, `project.adopt`, `project.inspect`                                                                                                                                  |
| APEX/references     | `apex.generate`, `apex.export`, `apex.validate`, `apex.diff`, `docs.search`, `docs.read`, `docs.sync`                                                                               |
| Database            | `metadata.read`, `db.plan`                                                                                                                                                          |
| Deployment/recovery | `deploy.plan`, `deploy.apply`, `deploy.status`, `deploy.restore-plan`                                                                                                               |
| Tests               | `test.run`, `test.report`, `test.auth`, `browser.open`                                                                                                                              |
| Jobs/artifacts      | `jobs.status`, `jobs.cancel`, `artifacts.read`                                                                                                                                      |
| Sandbox diagnostics | `sandbox.status`, `sandbox.up`, `sandbox.down`                                                                                                                                      |

`mcp` starts server transport, not an application action. Sandbox commands return unsupported diagnostics, not Oracle provisioning. `docs.sync` uses pinned references, not arbitrary downloads. Plugin maintenance retains installation ownership checks; never uninstall or switch marketplace just to display a menu.

`panel.open` returns a local desktop URL; `panel.status` reads configuration and operation state; `panel.action` updates browser/connection settings or queues checks. `panel tui --project PATH` opens the terminal view. Follow [panel guidance](../../apexrest-panel/SKILL.md).
