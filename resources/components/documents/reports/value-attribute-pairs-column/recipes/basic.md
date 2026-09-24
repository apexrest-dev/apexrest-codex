# Classic Report Value Attribute Pairs Column

Classic Report Value Attribute Pairs Column with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 1403. Component: component:reports/value-attribute-pairs-column.

## Data contract

```json
{
  "source": "localDatabase/sqlQuery; synthetic DUAL rows",
  "columns": [
    {
      "name": "LABEL",
      "type": "varchar2"
    },
    {
      "name": "VALUE",
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
                select 'Example label' LABEL, 'Example value' VALUE from dual
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
            template: @/value-attribute-pairs-column
            templateOptions: #DEFAULT#
        }
        column LABEL (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: Label
            }
            layout {
                sequence: 10
            }
        )
        column VALUE (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: Value
            }
            layout {
                sequence: 20
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
    "sourceSha256": "20d99c6256e0bb7ca488e3a28092bde34bac205879098d0c489c4faef32e9e0c",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
