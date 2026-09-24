# Badge in Interactive Report column

Badge in Interactive Report column with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 3002. Component: component:template-components/badge.

## Data contract

```json
{
  "source": "localDatabase/sqlQuery; synthetic DUAL rows",
  "columns": [
    {
      "name": "STATUS",
      "type": "varchar2"
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
                select 'Open' STATUS, 'component' COMPONENT from dual
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
        column STATUS (
            type: plainText
            heading {
                heading: Status
            }
            layout {
                sequence: 10
            }
            source {
                dataType: STRING
            }
        )
        column COMPONENT (
            type: themeTemplateComponent/badge
            heading {
                heading: Badge
            }
            layout {
                sequence: 100
            }
            source {
                dataType: STRING
            }
            settings {
            label: Status
            value: STATUS
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
    "sourceSha256": "f6417ecd0b09b88e9c7cb6c47213503bd2e91b1ca2641d6ab087a5df141a3d75",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
