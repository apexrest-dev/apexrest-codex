# Connected verification: megasport / application 175

Historical pre-amendment report. The missing-service-table deploy-plan blocker below is resolved by [clean APEX deployment](clean-apex-deployment.md); retain the original observations as evidence.

Verified on 2026-09-12 using the user's existing SQLcl connection `megasport`. The tested beta source digest and exact archive SHA-256 are recorded in [oracle-app175-readonly.json](evidence/oracle-app175-readonly.json). No application import, database DDL/DML, framework installation or authentication change was performed.

| Check | Actual result | Scope |
|---|---|---|
| SQLcl connection / APEX | Passed; SQLcl 26.1.2.132.1334, APEX 26.1.1 | Real named connection; no embedded credentials |
| Application identity | Passed; app 175, `apexlang-plugin-test`, pages 0, 1, 9999 | DB unique name, service, schema, workspace, owner and app ID checked through product adapter |
| Existing-app adopt | Passed | Fresh isolated local project, 21 exported files |
| Oracle compiler | Passed; `Validation successful.` | Exported MMD 26.1.0+3102 retained; source hashes unchanged |
| Repeated export / diff | Passed; zero changed file hashes | No import occurred; this is not a component round trip |
| Existing local page edit | Passed; repeated adopt exits 5 / `LOCAL_EDITS_CONFLICT` | An actual page 1 title edit and every file hash survive; task-created edits subsequently restored |
| Incorrect target | Passed negative checks; exit 5 | Wrong requested app ID and deliberately incorrect service cannot proceed |
| SQL backup | Exported; 96,227 bytes, app ID and import begin/end checked | `f175.sql` SHA-256 recorded; restore not tested |
| Installed native plugin | Passed in an isolated Codex profile outside the repository; 14 tools discovered | Exact `apexrest_metadata_read`, `apexrest_apex_validate`, `apexrest_apex_export` calls succeed; native export matches CLI adopt byte-for-byte |
| Native deploy plan | Blocked; ORA-00942 for `APEXREST_MIGRATIONS` | Product currently returns generic `ORACLE_COMMAND_FAILED`, exit 1. No plan/import was produced |
| Framework/control prerequisites | Unavailable | No visible UT package and neither APEXREST control table found |
| Browser runtime | Blocked; HTTP 400, `Unauthorized access.` | Actual Chromium with fresh anonymous context; active scheme is Developer / internalAppExtension |
| Required SQL/E2E gate | Correctly rejected; exit 1 / `QUALITY_GATE_FAILED` | Empty configured suites do not pass. No SQL suite or authenticated CRUD execution claimed |

The source remains the small existing starter application. It has no CRM pages or installed test suites. Browser rendering of its access error is evidence of a blocker, not a successful application E2E test. The schema's production/test classification was not supplied; the isolated inspection configuration conservatively uses production policy with no mutation grants or allowed mutation environments.

## Evidence and local artifacts

The sanitized JSON report contains durations, CLI exit/diagnostic codes, file-preservation hashes, SQL backup hash, source/archive digests and separate blocker fields. Raw SQL output, application exports, isolated configuration, native results and the browser screenshot stay in the ignored private directory `.apexrest/verification/app175/`. No raw application source or browser state was added to release packages.

The fresh local project is `.apexrest/verification/app175/project`. With the verified managed Node runtime and `APEXREST_HOME` pointing to `.apexrest/verification/app175/managed`, the executed product operations were:

```sh
apexrest connection test inspect --json
apexrest metadata read --project "$APEXREST_CHECK_PROJECT" --env inspection --kind pages --schema MEGASPORT --json
apexrest project adopt --project "$APEXREST_CHECK_PROJECT" --env inspection --app-id 175 --json
apexrest apex validate --project "$APEXREST_CHECK_PROJECT" --json
apexrest apex diff --project "$APEXREST_CHECK_PROJECT" --env inspection --json
apexrest test all --project "$APEXREST_CHECK_PROJECT" --env inspection --json
```

Here `inspect` resolves to SQLcl's stored `megasport` connection. Adopt now intentionally returns a local conflict because the project already contains the verified export. The last command intentionally fails because its required SQL and E2E suites are empty.

## Remaining work

Application import/restore, schema changes, utPLSQL installation and mutation tests need a separately authorized target scope. The existing [control-table setup script](../templates/database-control/install.sql) creates exactly `APEXREST_DEPLOY_LOCKS` and `APEXREST_MIGRATIONS`; it was not executed. Framework installation must be a separate reviewed setup, as required by the build specification. Authenticated runtime access must be provided through local login or an approved authentication configuration, without storing credentials in project files.

Post-import no-op preservation, a one-page change with shared LOV preservation, real lock contention, migration/disconnect recovery and authenticated CRUD remain unverified. The acceptance matrix stays partial and the stable release gate remains blocked. No implementation source was changed during this follow-up, and prior local unit/installer tests are not relabelled as connected Oracle evidence.
