# Smart filter report — original example / Звіт зі смарт-фільтрами

Combine a compact Smart Filters controller and a Classic Report backed by the same authoritative projection.

Status: ready.

Source: universal-theme-reference; pages 1412.

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
- Keep refinements and result SQL within the same authorization and row scope.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Smart filter report
    alias: HOME
    title: Smart filter report
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region filters (
        name: Filters
        type: smartFilters
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
        filter P1_SEARCH (
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
        filter P1_STATUS (
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
    "sourceSha256": "d7ec92e569c0deec90998b78bdba29a1ab4d5c59d10d2b4e93bf9cf70f8fe443",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
