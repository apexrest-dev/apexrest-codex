# Native Search Region

Native Search Region with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 1413. Component: component:regions/search.

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
      "name": "DESCRIPTION",
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
    region example (
        name: Search
        type: search
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/search-results-container
            templateOptions: #DEFAULT#
        }
        settings {
            searchPageItem: P1_SEARCH
        }
        searchSource example (
            name: Example Search
            searchConfig: @example-search
            layout {
                sequence: 10
            }
        )
    )
    pageItem P1_SEARCH (
        type: textField
        label {
            label: Search
        }
        layout {
            sequence: 10
            region: @example
            slot: searchField
        }
        appearance {
            template: @/optional-floating
            templateOptions: #DEFAULT#
        }
    )

)

```

## shared-components/search-configs.apx

```apexlang
searchConfig example-search (
    name: Example Search
    source {
        location: localDatabase
        type: sqlQuery
        sqlQuery:
            ```sql
            select 1 ID, 'Example document' TITLE, 'Local searchable description' DESCRIPTION from dual
            ```
        searchableColumns: [
            TITLE
            DESCRIPTION
        ]
    }
    columnMapping {
        primaryKey1Column: ID
        titleColumn: TITLE
        descriptionColumn: DESCRIPTION
    }
)

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "e5bf150a93517e34b7cee8e30f1db768edde3c27df27a5cf25728108f9ba7af7",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
