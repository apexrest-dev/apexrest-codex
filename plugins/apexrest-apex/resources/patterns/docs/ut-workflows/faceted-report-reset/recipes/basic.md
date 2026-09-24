# Faceted report with current filters and reset — original example / Фасетний звіт із поточними фільтрами та скиданням

A Faceted Search controller filters a Classic Report while exposing removable selections in a separate strip, per-value counts and an explicit page-scoped reset.

Status: ready.

Source: universal-theme-reference; pages 1411.

## Data contract

```json
{
  "source": "Three original synthetic records from DUAL.",
  "tables": [],
  "bindings": [],
  "submittedItems": [],
  "columns": [
    {
      "name": "ID",
      "type": "NUMBER",
      "role": "Record identity"
    },
    {
      "name": "TITLE",
      "type": "VARCHAR2",
      "role": "Searchable record title"
    },
    {
      "name": "STATUS",
      "type": "VARCHAR2",
      "role": "Status refinement"
    }
  ],
  "writeContract": "Read-only; no save action or DML is implied."
}
```

## Adaptation

- Use free page numbers; rename page items, static IDs, region/action identifiers and all references together.
- Merge only the selected composition into the destination application; preserve authentication, authorization and existing settings.
- Keep source SQL projections, type mappings and all local links closed after adaptation.
- Rename workflow_active_filters and currentFacetsSelector as one pair.
- Native facets manage their own AJAX state; do not add duplicate SQL predicates for the same facet items.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Faceted report with reset
    alias: HOME
    title: Faceted report with reset
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region filter-summary (
        name: Active filters
        type: staticContent
        source {
            htmlCode: <div id="workflow_active_filters"></div>
        }
        layout {
            sequence: 5
            slot: body
        }
        appearance {
            template: @/buttons-container
            templateOptions: #DEFAULT#
        }
    )
    button reset (
        buttonName: RESET
        label: Reset filters
        layout {
            sequence: 10
            region: @filter-summary
            slot: next
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: redirectThisApp
            target: {
                page: 1
                clearCache: 1
            }
        }
    )
    region filters (
        name: Filters
        type: facetedSearch
        source {
            filteredRegion: @results
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#
        }
        settings {
            showCurrentFacets: selector
            currentFacetsSelector: #workflow_active_filters
            showTotalRowCount: true
            totalRowCountLabel: Matching records
        }
        facet P1_SEARCH (
            type: search
            label {
                label: Search title
            }
            layout {
                sequence: 10
            }
            source {
                dbColumns: TITLE
            }
        )
        facet P1_STATUS (
            type: checkboxGroup
            label {
                label: Status
            }
            layout {
                sequence: 20
            }
            lov {
                type: distinctValues
            }
            source {
                databaseColumn: STATUS
            }
            listEntries {
                computeCounts: true
                showCounts: true
            }
        )
    )
    region results (
        name: Example Results
        type: classicReport
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 1 ID, 'Review schedule' TITLE, 'Open' STATUS from dual union all select 2, 'Update handbook', 'Closed' from dual union all select 3, 'Check inventory', 'Open' from dual
                ```
        }
        layout {
            sequence: 20
            slot: body
        }
        appearance {
            template: @/interactive-report
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        column ID (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: Id
            }
            layout {
                sequence: 10
            }
        )
        column TITLE (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: Title
            }
            layout {
                sequence: 20
            }
        )
        column STATUS (
            reportColumnQueryId: 3
            derivedColumn: N
            heading {
                heading: Status
            }
            layout {
                sequence: 30
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
    "sourceSha256": "43061279760cdf646ecfb232f3c376258659a651f5d5b737c59cc02bb2503c4b",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
