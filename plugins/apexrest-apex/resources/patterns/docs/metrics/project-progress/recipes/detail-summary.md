# Project detail with completion and supporting facts / Деталі проєкту з виконанням і допоміжними відомостями

A partial Content Row contains a Percent Graph item and a key-value child report for one consistently selected project.

Status: ready.

Source: ux-pattern-catalog; pages 1120.

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "ID": "number selected project",
    "TITLE": "varchar2",
    "DESCRIPTION": "varchar2 exact completion text",
    "OWNER_NAME": "varchar2",
    "DUE_DATE": "date",
    "DONE_COUNT": "number",
    "TOTAL_COUNT": "number"
  },
  "bindings": [],
  "submittedItems": [],
  "writeContract": "Read-only."
}
```

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.
- Replace all three synthetic queries with the same authorized selected-record condition; return at most one row for the item query.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Project summary
    alias: HOME
    title: Project summary
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region project (
        name: Project summary
        type: themeTemplateComponent/contentRow
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 1 ID, 'Documentation refresh' TITLE, 'Six of eight tasks completed' DESCRIPTION, 'Example owner' OWNER_NAME, date '2026-10-01' DUE_DATE, 6 DONE_COUNT, 8 TOTAL_COUNT from dual
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
            display: partial
        }
        settings {
            title: &TITLE.
            description: &DESCRIPTION.
        }
        column ID (
            layout {
                sequence: 10
            }
            source {
                databaseColumn: ID
                dataType: number
                primaryKey: true
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
        column OWNER_NAME (
            layout {
                sequence: 40
            }
            source {
                databaseColumn: OWNER_NAME
                dataType: varchar2
            }
        )
        column DUE_DATE (
            layout {
                sequence: 50
            }
            source {
                databaseColumn: DUE_DATE
                dataType: date
            }
        )
        column DONE_COUNT (
            layout {
                sequence: 60
            }
            source {
                databaseColumn: DONE_COUNT
                dataType: number
            }
        )
        column TOTAL_COUNT (
            layout {
                sequence: 70
            }
            source {
                databaseColumn: TOTAL_COUNT
                dataType: number
            }
        )
    )
    region project-facts (
        name: Project facts
        type: classicReport
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select OWNER_NAME,DUE_DATE,DONE_COUNT,TOTAL_COUNT from (select 1 ID, 'Documentation refresh' TITLE, 'Six of eight tasks completed' DESCRIPTION, 'Example owner' OWNER_NAME, date '2026-10-01' DUE_DATE, 6 DONE_COUNT, 8 TOTAL_COUNT from dual)
                ```
        }
        layout {
            sequence: 20
            parentRegion: @project
            slot: regionBody
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            template: @/value-attribute-pairs-column
            templateOptions: #DEFAULT#
        }
        column OWNER_NAME (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: OWNER_NAME
            }
            layout {
                sequence: 10
            }
        )
        column DUE_DATE (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: DUE_DATE
            }
            layout {
                sequence: 20
            }
        )
        column DONE_COUNT (
            reportColumnQueryId: 3
            derivedColumn: N
            heading {
                heading: DONE_COUNT
            }
            layout {
                sequence: 30
            }
        )
        column TOTAL_COUNT (
            reportColumnQueryId: 4
            derivedColumn: N
            heading {
                heading: TOTAL_COUNT
            }
            layout {
                sequence: 40
            }
        )
    )
    pageItem P1_COMPLETION (
        type: percentGraph
        label {
            label: Completion
        }
        layout {
            sequence: 10
            region: @project
            slot: regionBody
        }
        appearance {
            template: @/optional-above
            templateOptions: #DEFAULT#
        }
        source {
            type: sqlQuerySingleValue
            sqlQuery:
                ```sql
                select case when TOTAL_COUNT > 0 then round(100*DONE_COUNT/TOTAL_COUNT) end from (select 1 ID, 'Documentation refresh' TITLE, 'Six of eight tasks completed' DESCRIPTION, 'Example owner' OWNER_NAME, date '2026-10-01' DUE_DATE, 6 DONE_COUNT, 8 TOTAL_COUNT from dual)
                ```
            used: always
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
    "sourceSha256": "26f3e840d663dc2cad2afeec03e443e906970f89fe5808b336c96a4921347688",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
