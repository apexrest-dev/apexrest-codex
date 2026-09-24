# Classic Report Timeline

Classic Report Timeline with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 1406. Component: component:reports/timeline.

## Data contract

```json
{
  "source": "localDatabase/sqlQuery; synthetic DUAL rows",
  "columns": [
    {
      "name": "USER_AVATAR",
      "type": "varchar2"
    },
    {
      "name": "USER_NAME",
      "type": "varchar2"
    },
    {
      "name": "EVENT_DATE",
      "type": "date"
    },
    {
      "name": "EVENT_TITLE",
      "type": "varchar2"
    },
    {
      "name": "EVENT_DESC",
      "type": "varchar2"
    },
    {
      "name": "EVENT_ICON",
      "type": "varchar2"
    },
    {
      "name": "EVENT_STATUS",
      "type": "varchar2"
    },
    {
      "name": "EVENT_LINK",
      "type": "varchar2"
    },
    {
      "name": "EVENT_TYPE",
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
                select 'EX' USER_AVATAR, 'Example user name' USER_NAME, date '2026-01-01' EVENT_DATE, 'Example event title' EVENT_TITLE, 'Example event desc' EVENT_DESC, 'fa-info-circle' EVENT_ICON, 'Example event status' EVENT_STATUS, cast(null as varchar2(100)) EVENT_LINK, 'Example event type' EVENT_TYPE from dual
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
            template: @/timeline
            templateOptions: #DEFAULT#
        }
        column USER_AVATAR (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: User Avatar
            }
            layout {
                sequence: 10
            }
        )
        column USER_NAME (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: User Name
            }
            layout {
                sequence: 20
            }
        )
        column EVENT_DATE (
            reportColumnQueryId: 3
            derivedColumn: N
            heading {
                heading: Event Date
            }
            layout {
                sequence: 30
            }
        )
        column EVENT_TITLE (
            reportColumnQueryId: 4
            derivedColumn: N
            heading {
                heading: Event Title
            }
            layout {
                sequence: 40
            }
        )
        column EVENT_DESC (
            reportColumnQueryId: 5
            derivedColumn: N
            heading {
                heading: Event Desc
            }
            layout {
                sequence: 50
            }
        )
        column EVENT_ICON (
            reportColumnQueryId: 6
            derivedColumn: N
            heading {
                heading: Event Icon
            }
            layout {
                sequence: 60
            }
        )
        column EVENT_STATUS (
            reportColumnQueryId: 7
            derivedColumn: N
            heading {
                heading: Event Status
            }
            layout {
                sequence: 70
            }
        )
        column EVENT_LINK (
            reportColumnQueryId: 8
            derivedColumn: N
            heading {
                heading: Event Link
            }
            layout {
                sequence: 80
            }
        )
        column EVENT_TYPE (
            reportColumnQueryId: 9
            derivedColumn: N
            heading {
                heading: Event Type
            }
            layout {
                sequence: 90
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
    "sourceSha256": "cb9f741bdda2c8b21726001a037afda03985bc0e7adcdf0d4b248f9d61aea76c",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
