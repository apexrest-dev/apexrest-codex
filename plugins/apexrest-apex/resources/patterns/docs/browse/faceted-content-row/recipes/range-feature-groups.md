# Faceted content-row with date range and grouped flags / Рядки вмісту з фасетами діапазону дат і групами ознак

Adds date-range refinement, exclusive priority and four independent feature checkboxes to the existing search/category/status filters.

Status: ready.

Source: ux-pattern-catalog; pages 220.

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "ID": "number",
    "TITLE": "varchar2",
    "DESCRIPTION": "varchar2",
    "CATEGORY": "varchar2",
    "STATUS": "varchar2",
    "UPDATED_ON": "date",
    "PRIORITY": "varchar2",
    "FLAG_1": "Y/N",
    "FLAG_2": "Y/N",
    "FLAG_3": "Y/N",
    "FLAG_4": "Y/N"
  },
  "bindings": [],
  "submittedItems": [],
  "writeContract": "Read-only.",
  "facetItems": [
    "P1_SEARCH",
    "P1_CATEGORY",
    "P1_STATUS",
    "P1_UPDATED",
    "P1_PRIORITY",
    "P1_FLAG_1",
    "P1_FLAG_2",
    "P1_FLAG_3",
    "P1_FLAG_4"
  ]
}
```

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

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
        facet P1_UPDATED (
            type: range
            label {
                label: Updated date
            }
            layout {
                sequence: 40
            }
            source {
                databaseColumn: UPDATED_ON
                dataType: date
            }
        )
        facet P1_PRIORITY (
            type: radioGroup
            label {
                label: Priority
            }
            layout {
                sequence: 50
            }
            lov {
                type: distinctValues
            }
            source {
                databaseColumn: PRIORITY
            }
        )
        facetGroup feature-flags (
            label: Features
            layout {
                sequence: 60
            }
            checkbox P1_FLAG_1 (
                type: checkbox
                label {
                    label: Feature 1
                }
                settings {
                    useDefaults: false
                    checkedValue: Y
                }
                layout {
                    sequence: 10
                }
                source {
                    databaseColumn: FLAG_1
                }
            )
            checkbox P1_FLAG_2 (
                type: checkbox
                label {
                    label: Feature 2
                }
                settings {
                    useDefaults: false
                    checkedValue: Y
                }
                layout {
                    sequence: 20
                }
                source {
                    databaseColumn: FLAG_2
                }
            )
            checkbox P1_FLAG_3 (
                type: checkbox
                label {
                    label: Feature 3
                }
                settings {
                    useDefaults: false
                    checkedValue: Y
                }
                layout {
                    sequence: 30
                }
                source {
                    databaseColumn: FLAG_3
                }
            )
            checkbox P1_FLAG_4 (
                type: checkbox
                label {
                    label: Feature 4
                }
                settings {
                    useDefaults: false
                    checkedValue: Y
                }
                layout {
                    sequence: 40
                }
                source {
                    databaseColumn: FLAG_4
                }
            )
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
                select base.*, date '2026-01-01' + ID UPDATED_ON, case when ID <= 2 then 'High' else 'Normal' end PRIORITY, case when mod(ID,2)=0 then 'Y' else 'N' end FLAG_1, 'Y' FLAG_2, 'N' FLAG_3, case when ID=1 then 'Y' else 'N' end FLAG_4 from (
select 1 ID, 'Archive review' TITLE, 'Review the retention schedule.' DESCRIPTION, 'Operations' CATEGORY, 'Open' STATUS from dual
                union all select 2, 'Catalog refresh', 'Publish the current catalog entries.', 'Documentation', 'Open' from dual
                union all select 3, 'Access audit', 'Check the project access list.', 'Operations', 'Done' from dual
                union all select 4, 'Service notes', 'Record the latest support observations.', 'Documentation', 'Done' from dual
                ) base
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
        column UPDATED_ON (
            layout {
                sequence: 10
            }
            source {
                databaseColumn: UPDATED_ON
                dataType: date
            }
        )
        column PRIORITY (
            layout {
                sequence: 20
            }
            source {
                databaseColumn: PRIORITY
                dataType: varchar2
            }
        )
        column FLAG_1 (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: FLAG_1
                dataType: varchar2
            }
        )
        column FLAG_2 (
            layout {
                sequence: 40
            }
            source {
                databaseColumn: FLAG_2
                dataType: varchar2
            }
        )
        column FLAG_3 (
            layout {
                sequence: 50
            }
            source {
                databaseColumn: FLAG_3
                dataType: varchar2
            }
        )
        column FLAG_4 (
            layout {
                sequence: 60
            }
            source {
                databaseColumn: FLAG_4
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
    "sourceSha256": "b158eceb1f7a9a241c36864a7c90d7ffe4ce95c1b3ca052122e9504399d6fe51",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
