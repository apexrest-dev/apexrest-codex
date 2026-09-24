# Actions in Interactive Report partial column

Actions in Interactive Report partial column with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 3004. Component: component:template-components/actions.

## Data contract

```json
{
  "source": "localDatabase/sqlQuery; synthetic DUAL rows",
  "columns": [
    {
      "name": "ID",
      "type": "number"
    },
    {
      "name": "TITLE",
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
        name: Action Column
        type: interactiveReport
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 1 ID, 'Example row' TITLE, 'actions' ACTIONS from dual
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
        column ID (
            type: plainText
            heading {
                heading: Id
            }
            layout {
                sequence: 10
            }
            source {
                dataType: NUMBER
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
        column ACTIONS (
            type: themeTemplateComponent/actions
            heading {
                heading: Actions
            }
            layout {
                sequence: 30
            }
            source {
                dataType: STRING
            }
            settings {
                wrapActions: true
            }
            action open-home (
                position: actions
                template: button
                label: Open home
                layout {
                    sequence: 10
                }
                behavior {
                    type: redirectThisApp
                    target: {
                        page: 1
                    }
                }
            )
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
    "sourceSha256": "6c208b4e7fbd7e93e55017bab52eb71b9a9f725fbad09e913d6f2ae85aaf9330",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
