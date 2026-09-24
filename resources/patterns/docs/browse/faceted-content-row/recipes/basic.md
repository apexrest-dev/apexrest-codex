# Faceted content row browser — synthetic example / Базовий перегляд списку з фасетними фільтрами

Combine native Faceted Search with a Content Row template component report so text, category and status refinements update one shared result set, current selections and counts.

Status: ready.

Source: ux-pattern-catalog; pages 220.

## Data contract

```json
{
  "source": "Four original synthetic rows selected from DUAL; no application tables, views, packages or external resources.",
  "tables": [],
  "columns": [
    {
      "name": "ID",
      "type": "NUMBER",
      "role": "Stable record identity"
    },
    {
      "name": "TITLE",
      "type": "VARCHAR2",
      "role": "Record title and searchable text"
    },
    {
      "name": "DESCRIPTION",
      "type": "VARCHAR2",
      "role": "Record summary and searchable text"
    },
    {
      "name": "CATEGORY",
      "type": "VARCHAR2",
      "role": "Category refinement"
    },
    {
      "name": "STATUS",
      "type": "VARCHAR2",
      "role": "Status refinement"
    }
  ],
  "bindings": [],
  "submittedItems": [],
  "facetItems": [
    "P1_SEARCH",
    "P1_CATEGORY",
    "P1_STATUS"
  ],
  "writeContract": "Read-only. No editing or persistence API is claimed.",
  "filterContract": "The native facets engine applies TITLE/DESCRIPTION search and CATEGORY/STATUS refinements to the authoritative results region and manages facet AJAX state; no duplicate SQL predicates or manual submitted-items list is needed."
}
```

## Adaptation

- Choose a free page number and rename every P1_ item, region reference and dynamic action consistently.
- Replace the synthetic SELECT with an authorized project query; preserve column aliases, types and a stable unique ID.
- Merge the composition into the destination application and preserve its authentication, authorization and page-access policy.
- Verify populated, empty, restored-session and narrow-screen states after importing into an identified test target.
- Keep facet databaseColumn/dbColumns aliases synchronized with the result query; let native facets own their AJAX submissions and filtering.
- Retain showCurrentFacets and showTotalRowCount when adapting the layout; if moving them to external selectors, provide matching unique DOM elements.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Faceted content row browser
    alias: HOME
    title: Faceted content row browser
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region filters (
        name: Refine records
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
            showCurrentFacets: true
            showTotalRowCount: true
            totalRowCountLabel: Matching records
        }
        facet P1_SEARCH (
            type: search
            label {
                label: Find records
            }
            layout {
                sequence: 10
            }
            source {
                dbColumns: TITLE,DESCRIPTION
            }
        )
        facet P1_CATEGORY (
            type: checkboxGroup
            label {
                label: Category
            }
            layout {
                sequence: 20
            }
            lov {
                type: distinctValues
            }
            source {
                databaseColumn: CATEGORY
            }
            listEntries {
                computeCounts: true
                showCounts: true
            }
        )
        facet P1_STATUS (
            type: checkboxGroup
            label {
                label: Status
            }
            layout {
                sequence: 30
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
        name: Matching records
        type: themeTemplateComponent/contentRow
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 1 ID, 'Archive review' TITLE, 'Review the retention schedule.' DESCRIPTION, 'Operations' CATEGORY, 'Open' STATUS from dual
                union all select 2, 'Catalog refresh', 'Publish the current catalog entries.', 'Documentation', 'Open' from dual
                union all select 3, 'Access audit', 'Check the project access list.', 'Operations', 'Done' from dual
                union all select 4, 'Service notes', 'Record the latest support observations.', 'Documentation', 'Done' from dual
                ```
        }
        layout {
            sequence: 20
            slot: body
        }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            display: report
        }
        settings {
            title: &TITLE.
            description: &DESCRIPTION.
        }
        messages {
            whenNoDataFound: No matching records. Change or clear your search.
        }
        column ID (
            layout {
                sequence: 10
            }
            source {
                databaseColumn: ID
                dataType: number
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
        column DESCRIPTION (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: DESCRIPTION
                dataType: varchar2
            }
        )
        column CATEGORY (
            layout {
                sequence: 40
            }
            source {
                databaseColumn: CATEGORY
                dataType: varchar2
            }
        )
        column STATUS (
            layout {
                sequence: 50
            }
            source {
                databaseColumn: STATUS
                dataType: varchar2
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
    "sourceSha256": "7b459141a1bcd88987f967e53a052728eab7dfa5d46dc4f2422aca33349ae7c2",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
