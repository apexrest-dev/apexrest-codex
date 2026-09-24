# Actual and target review — bar-with-target / Порівняння факту та цілі на стовпчиковій діаграмі

Aligned actual/target series preserve an unavailable value rather than replacing it with zero.

Status: ready.

Source: ux-pattern-catalog; pages 1130, 130.

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "PERIOD_DATE": "date ordered period",
    "ACTUAL": "number or null when unavailable",
    "TARGET": "number benchmark",
    "VARIANCE": "number actual minus target or null"
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
    name: Actual and target review
    alias: HOME
    title: Actual and target review
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region benchmark (
        name: Actual and target
        type: chart
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        chart {
            type: combination
        }
        settings {
            timeAxisType: enabled
        }
        axis x (
            name: x
        )
        axis y (
            name: y
        )
        series series-1 (
            name: Actual
            execution {
                sequence: 10
            }
            source {
                type: sqlQuery
                sqlQuery:
                    ```sql
                    select PERIOD_DATE LABEL, ACTUAL VALUE from (select date '2026-01-01' PERIOD_DATE, 18 ACTUAL, 20 TARGET from dual union all select date '2026-02-01', 24, 22 from dual union all select date '2026-03-01', cast(null as number), 25 from dual) order by PERIOD_DATE
                    ```
            }
            columnMapping {
                label: LABEL
                value: VALUE
            }
        )
        series series-2 (
            name: Target
            type: line
            execution {
                sequence: 20
            }
            source {
                type: sqlQuery
                sqlQuery:
                    ```sql
                    select PERIOD_DATE LABEL, TARGET VALUE from (select date '2026-01-01' PERIOD_DATE, 18 ACTUAL, 20 TARGET from dual union all select date '2026-02-01', 24, 22 from dual union all select date '2026-03-01', cast(null as number), 25 from dual) order by PERIOD_DATE
                    ```
            }
            columnMapping {
                label: LABEL
                value: VALUE
            }
        )
    )
    region variance (
        name: Exact period values
        type: classicReport
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select PERIOD_DATE,ACTUAL,TARGET,ACTUAL-TARGET VARIANCE from (select date '2026-01-01' PERIOD_DATE, 18 ACTUAL, 20 TARGET from dual union all select date '2026-02-01', 24, 22 from dual union all select date '2026-03-01', cast(null as number), 25 from dual) order by PERIOD_DATE
                ```
        }
        layout {
            sequence: 20
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
        column PERIOD_DATE (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: PERIOD_DATE
            }
            layout {
                sequence: 10
            }
        )
        column ACTUAL (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: ACTUAL
            }
            layout {
                sequence: 20
            }
        )
        column TARGET (
            reportColumnQueryId: 3
            derivedColumn: N
            heading {
                heading: TARGET
            }
            layout {
                sequence: 30
            }
        )
        column VARIANCE (
            reportColumnQueryId: 4
            derivedColumn: N
            heading {
                heading: VARIANCE
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
    "sourceSha256": "4429a819857c4763facf3a80afd755b71bec8b48e524bc30c17028436429e777",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
