# Classic Report Content Row

Classic Report Content Row with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 1407. Component: component:reports/content-row.

## Data contract

```json
{
  "source": "localDatabase/sqlQuery; synthetic DUAL rows",
  "columns": [
    {
      "name": "TITLE",
      "type": "varchar2"
    },
    {
      "name": "DESCRIPTION",
      "type": "varchar2"
    },
    {
      "name": "MISC",
      "type": "varchar2"
    },
    {
      "name": "ICON_CLASS",
      "type": "varchar2"
    },
    {
      "name": "ACTIONS",
      "type": "varchar2"
    }
  ],
  "tables": [
    "DUAL"
  ],
  "bindings": [],
  "submittedItems": [],
  "writes": false
}
```

## Adaptation

- Choose a free page number and rename all P1_ items consistently.
- Rename region, button and DOM identifiers before merging into an existing page.
- Preserve the target application authentication and authorization.
- Replace synthetic projections with authorized project SQL; retain projected column names and types.

Apply the files below as an overlay to component:scaffold for offline validation. In an existing project, adapt and merge the component into its existing page and shared objects. The example is not an import authorization.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Component Example
    alias: HOME
    title: Component Example
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region results (
        name: Legacy Report Template
        type: classicReport
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Example title' TITLE, 'Example description' DESCRIPTION, 'Example misc' MISC, 'fa-info-circle' ICON_CLASS, cast(null as varchar2(100)) ACTIONS from dual
                ```
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            template: @/content-row
            templateOptions: #DEFAULT#
        }
        column TITLE (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: Title
            }
            layout {
                sequence: 10
            }
        )
        column DESCRIPTION (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: Description
            }
            layout {
                sequence: 20
            }
        )
        column MISC (
            reportColumnQueryId: 3
            derivedColumn: N
            heading {
                heading: Misc
            }
            layout {
                sequence: 30
            }
        )
        column ICON_CLASS (
            reportColumnQueryId: 4
            derivedColumn: N
            heading {
                heading: Icon Class
            }
            layout {
                sequence: 40
            }
        )
        column ACTIONS (
            reportColumnQueryId: 5
            derivedColumn: N
            heading {
                heading: Actions
            }
            layout {
                sequence: 50
            }
        )
    )

)

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "314beebbd25e9fc4908343522f1ff3196d9cb96f3c0f03d0e5be29c7eb8ef075",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
