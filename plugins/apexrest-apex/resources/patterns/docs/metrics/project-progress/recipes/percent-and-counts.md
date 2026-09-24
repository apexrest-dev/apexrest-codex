# Project completion with exact counts / Виконання проєкту з точними лічильниками

Percent Graph communicates completion while exact counts and a zero-total contract remain readable.

Status: ready.

Source: ux-pattern-catalog; pages 1120.

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "ID": "number project key",
    "TITLE": "varchar2 project",
    "DONE_COUNT": "number complete tasks",
    "TOTAL_COUNT": "number planned tasks",
    "PROGRESS_PCT": "number 0..100 or null for unplanned",
    "DETAIL": "varchar2 accessible count explanation"
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

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Project progress overview
    alias: HOME
    title: Project progress overview
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region progress (
        name: Project completion
        type: classicReport
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select ID, TITLE, case when TOTAL_COUNT > 0 then round(100 * DONE_COUNT / TOTAL_COUNT) end PROGRESS_PCT, to_char(DONE_COUNT) || ' of ' || to_char(TOTAL_COUNT) || ' tasks' DETAIL from (select 1 ID, 'Documentation refresh' TITLE, 6 DONE_COUNT, 8 TOTAL_COUNT from dual union all select 2, 'Access review', 2, 5 from dual union all select 3, 'New workstream', 0, 0 from dual)
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
            template: @/standard
            templateOptions: #DEFAULT#
        }
        column ID (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: ID
            }
            layout {
                sequence: 10
            }
        )
        column TITLE (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: TITLE
            }
            layout {
                sequence: 20
            }
        )
        column PROGRESS_PCT (
            reportColumnQueryId: 3
            derivedColumn: N
            type: percentGraph
            heading {
                heading: Completion
            }
            layout {
                sequence: 30
            }
        )
        column DETAIL (
            reportColumnQueryId: 4
            derivedColumn: N
            heading {
                heading: DETAIL
            }
            layout {
                sequence: 40
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
    "sourceSha256": "522fd0357c2f7281e9cbc00f367583ef5cb338f8d59a69d0fef2dc62d9dfb868",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
