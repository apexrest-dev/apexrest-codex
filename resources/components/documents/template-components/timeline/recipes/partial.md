# Timeline partial

Timeline partial with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 3006. Component: component:template-components/timeline.

## Data contract

```json
{
  "source": "localDatabase/sqlQuery; synthetic DUAL rows",
  "columns": [
    {
      "name": "USER_NAME",
      "type": "varchar2"
    },
    {
      "name": "TITLE",
      "type": "varchar2"
    },
    {
      "name": "EVENT_DATE",
      "type": "timestamp"
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
    region example (
        name: Timeline
        type: themeTemplateComponent/timeline
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Example user' USER_NAME, 'Record created' TITLE, timestamp '2026-01-01 09:00:00' EVENT_DATE from dual where rownum <= 1
                ```
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            display: partial
        }
        settings {
            userName: USER_NAME
            title: TITLE
            date: EVENT_DATE
        }
        column USER_NAME (
            layout {
                sequence: 10
            }
            source {
                databaseColumn: USER_NAME
                dataType: varchar2
            }
        )
        column TITLE (
            layout {
                sequence: 20
            }
            source {
                databaseColumn: TITLE
                dataType: varchar2
            }
        )
        column EVENT_DATE (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: EVENT_DATE
                dataType: timestamp
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
    "sourceSha256": "b254375f947e7d1d1c72063d1b46c87a12ff8bbfae2ff4af63459649dbc61af2",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
