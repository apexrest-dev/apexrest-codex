# Classic Report Comments

Classic Report Comments with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 1405. Component: component:reports/comments.

## Data contract

```json
{
  "source": "localDatabase/sqlQuery; synthetic DUAL rows",
  "columns": [
    {
      "name": "USER_ICON",
      "type": "varchar2"
    },
    {
      "name": "COMMENT_DATE",
      "type": "date"
    },
    {
      "name": "USER_NAME",
      "type": "varchar2"
    },
    {
      "name": "COMMENT_TEXT",
      "type": "varchar2"
    },
    {
      "name": "ACTIONS",
      "type": "varchar2"
    },
    {
      "name": "ATTRIBUTE_1",
      "type": "varchar2"
    },
    {
      "name": "ATTRIBUTE_2",
      "type": "varchar2"
    },
    {
      "name": "ATTRIBUTE_3",
      "type": "varchar2"
    },
    {
      "name": "ATTRIBUTE_4",
      "type": "varchar2"
    },
    {
      "name": "ICON_MODIFIER",
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
                select 'EX' USER_ICON, date '2026-01-01' COMMENT_DATE, 'Example user name' USER_NAME, 'Example comment text' COMMENT_TEXT, cast(null as varchar2(100)) ACTIONS, cast(null as varchar2(100)) ATTRIBUTE_1, cast(null as varchar2(100)) ATTRIBUTE_2, cast(null as varchar2(100)) ATTRIBUTE_3, cast(null as varchar2(100)) ATTRIBUTE_4, 'Example icon modifier' ICON_MODIFIER from dual
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
            template: @/comments
            templateOptions: #DEFAULT#
        }
        column USER_ICON (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: User Icon
            }
            layout {
                sequence: 10
            }
        )
        column COMMENT_DATE (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: Comment Date
            }
            layout {
                sequence: 20
            }
        )
        column USER_NAME (
            reportColumnQueryId: 3
            derivedColumn: N
            heading {
                heading: User Name
            }
            layout {
                sequence: 30
            }
        )
        column COMMENT_TEXT (
            reportColumnQueryId: 4
            derivedColumn: N
            heading {
                heading: Comment Text
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
        column ATTRIBUTE_1 (
            reportColumnQueryId: 6
            derivedColumn: N
            heading {
                heading: Attribute 1
            }
            layout {
                sequence: 60
            }
        )
        column ATTRIBUTE_2 (
            reportColumnQueryId: 7
            derivedColumn: N
            heading {
                heading: Attribute 2
            }
            layout {
                sequence: 70
            }
        )
        column ATTRIBUTE_3 (
            reportColumnQueryId: 8
            derivedColumn: N
            heading {
                heading: Attribute 3
            }
            layout {
                sequence: 80
            }
        )
        column ATTRIBUTE_4 (
            reportColumnQueryId: 9
            derivedColumn: N
            heading {
                heading: Attribute 4
            }
            layout {
                sequence: 90
            }
        )
        column ICON_MODIFIER (
            reportColumnQueryId: 10
            derivedColumn: N
            heading {
                heading: Icon Modifier
            }
            layout {
                sequence: 100
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
    "sourceSha256": "fe725c9c94eaac8939c8abc6fc27db7599661de2d6c3e9d07d6bc86a903682d6",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
