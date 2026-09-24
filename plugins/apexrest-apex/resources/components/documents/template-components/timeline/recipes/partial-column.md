# Timeline in Interactive Report column

Timeline in Interactive Report column with self-contained synthetic data and explicit component mappings.

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
    },
    {
      "name": "COMPONENT",
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
        name: Partial Column Example
        type: interactiveReport
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Example user' USER_NAME, 'Record created' TITLE, timestamp '2026-01-01 09:00:00' EVENT_DATE, 'component' COMPONENT from dual
                ```
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/interactive-report
            templateOptions: #DEFAULT#
        }
        column USER_NAME (
            type: plainText
            heading {
                heading: User Name
            }
            layout {
                sequence: 10
            }
            source {
                dataType: STRING
            }
        )
        column TITLE (
            type: plainText
            heading {
                heading: Title
            }
            layout {
                sequence: 20
            }
            source {
                dataType: STRING
            }
        )
        column EVENT_DATE (
            type: plainText
            heading {
                heading: Event Date
            }
            layout {
                sequence: 30
            }
            source {
                dataType: DATE
            }
        )
        column COMPONENT (
            type: themeTemplateComponent/timeline
            heading {
                heading: Timeline
            }
            layout {
                sequence: 100
            }
            source {
                dataType: STRING
            }
            settings {
            userName: USER_NAME
            title: TITLE
            date: EVENT_DATE
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
    "sourceSha256": "d9431931a75bb127048cad6d92d6076a9de92e20ea7dc9b32ea6e325173976f5",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
