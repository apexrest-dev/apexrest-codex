# Native Cards

Native Cards with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 3110. Component: component:regions/cards.

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
      "name": "STATUS",
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
    region cards (
        name: Cards
        type: cards
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 1 ID, 'Example one' TITLE, 'Open' STATUS from dual union all select 2, 'Example two', 'Closed' from dual
                ```
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/cards-container
            templateOptions: #DEFAULT#
        }
        card {
            primaryKeyColumn1: ID
        }
        title {
            column: TITLE
        }
        body {
            column: STATUS
        }
    )

)

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "deaa1f66ea683d1dc9d697dcd1769c2986e932b6f9248ef8998cec771d82b94e",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
