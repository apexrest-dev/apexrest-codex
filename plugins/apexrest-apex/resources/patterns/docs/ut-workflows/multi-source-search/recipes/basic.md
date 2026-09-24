# Native search across two collections — original example / Нативний пошук у двох колекціях

Use one native Search input to search two local shared search configurations and render their results in a common search region.

Status: ready.

Source: universal-theme-reference; pages 1413.

## Data contract

```json
{
  "source": "Two separately named shared search configurations, each with two original synthetic DUAL rows.",
  "tables": [],
  "bindings": [],
  "submittedItems": [
    "P1_SEARCH (native Search region-owned query input)"
  ],
  "columns": [
    {
      "name": "ID",
      "type": "NUMBER"
    },
    {
      "name": "TITLE",
      "type": "VARCHAR2"
    },
    {
      "name": "DESCRIPTION",
      "type": "VARCHAR2"
    }
  ],
  "searchContract": "Native Search reads settings.searchPageItem; each configuration defines its searchable column allowlist. The native engine owns query submission and result rendering."
}
```

## Adaptation

- Use free page numbers; rename page items, static IDs, region/action identifiers and all references together.
- Merge only the selected composition into the destination application; preserve authentication, authorization and existing settings.
- Keep source SQL projections, type mappings and all local links closed after adaptation.
- Merge the two shared search configurations into an existing search-configs file rather than overwriting unrelated definitions.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Search two collections
    alias: HOME
    title: Search two collections
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
        searchSource handbook (
            name: Handbook entries
            searchConfig: @workflow-handbook
            layout {
                sequence: 10
            }
        )
        searchSource notes (
            name: Service notes
            searchConfig: @workflow-notes
            layout {
                sequence: 20
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
searchConfig workflow-handbook (
    name: Workflow handbook
    source {
        location: localDatabase
        type: sqlQuery
        sqlQuery:
            ```sql
            select 1 ID, 'Equipment guide' TITLE, 'Steps for maintaining shared equipment.' DESCRIPTION from dual union all select 2, 'Travel guide', 'Planning work travel.' from dual
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
searchConfig workflow-notes (
    name: Workflow notes
    source {
        location: localDatabase
        type: sqlQuery
        sqlQuery:
            ```sql
            select 10 ID, 'Equipment service' TITLE, 'A scheduled equipment inspection.' DESCRIPTION from dual union all select 11, 'Workspace update', 'A summary of workspace changes.' from dual
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
    "sourceSha256": "fa15430ae19dec670cecb7cc5a27c41664b12f4dc2f9fa29a4fa6a9c9b02759d",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
