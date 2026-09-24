# Simple dashboard composition / Композиція простої панелі показників

A compact service overview combines three metric cards, an ordered completion trend and an operational status list. Uses original synthetic SQL and native APEX components without source-application assets.

Status: ready.

Source: ux-pattern-catalog; pages 110.

## Data contract

```json
{
  "source": "Original synthetic localDatabase/sqlQuery sources",
  "tables": [
    "SYS.DUAL"
  ],
  "bindings": [],
  "submittedItems": [],
  "metrics": {
    "openRequests": 24,
    "completedRequests": 76,
    "onTimePercent": 97.5
  },
  "chart": {
    "region": "throughput",
    "columns": {
      "LABEL": "varchar2 week name",
      "VALUE": "number completed requests"
    },
    "values": [
      14,
      18,
      20,
      24
    ],
    "ordering": "Explicit SORT_ORDER in the SQL; weekly values sum to the completed metric."
  },
  "status": {
    "columns": {
      "TITLE": "varchar2 queue name",
      "DESCRIPTION": "varchar2 explanatory text"
    },
    "counts": [
      8,
      16
    ],
    "scope": "Status counts sum to the open-requests metric."
  },
  "states": {
    "populated": "Synthetic source is always populated.",
    "empty": "Adaptation must define how missing business data affects zero-valued metrics and region no-data messages."
  }
}
```

## Adaptation

- Choose an available page number and alias; rename page items and every bind and dynamic-action reference consistently.
- Replace the synthetic queries with authorized source queries that preserve each component projection and documented metric units.
- Reuse compatible destination theme templates and preserve existing authentication, authorizations and application settings.
- Keep KPI definitions, chart totals and support-list scope consistent; compile the complete application after adaptation.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Service overview
    alias: HOME
    title: Service overview
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region open-work (
        name: Open work
        type: themeTemplateComponent/metricCard
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Open requests' TITLE, 24 METRIC, 'Awaiting completion' META from dual
                ```
        }
        layout {
            sequence: 10
            slot: body
            startNewRow: true
            columnSpan: 4
            columnCssClasses: col-sm-12
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
            metric: &METRIC.
            meta: &META.
        }
        column TITLE (
            layout {
                sequence: 10
            }
            source {
                databaseColumn: TITLE
                dataType: varchar2
            }
        )
        column METRIC (
            layout {
                sequence: 20
            }
            source {
                databaseColumn: METRIC
                dataType: number
            }
        )
        column META (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: META
                dataType: varchar2
            }
        )
    )

    region completed-work (
        name: Completed work
        type: themeTemplateComponent/metricCard
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Completed requests' TITLE, 76 METRIC, 'This reporting period' META from dual
                ```
        }
        layout {
            sequence: 20
            slot: body
            startNewRow: false
            columnSpan: 4
            columnCssClasses: col-sm-12
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
            metric: &METRIC.
            meta: &META.
        }
        column TITLE (
            layout {
                sequence: 10
            }
            source {
                databaseColumn: TITLE
                dataType: varchar2
            }
        )
        column METRIC (
            layout {
                sequence: 20
            }
            source {
                databaseColumn: METRIC
                dataType: number
            }
        )
        column META (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: META
                dataType: varchar2
            }
        )
    )

    region on-time (
        name: On-time work
        type: themeTemplateComponent/metricCard
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'On-time delivery (%)' TITLE, 97.5 METRIC, 'Against a 95 percent target' META from dual
                ```
        }
        layout {
            sequence: 30
            slot: body
            startNewRow: false
            columnSpan: 4
            columnCssClasses: col-sm-12
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
            metric: &METRIC.
            meta: &META.
        }
        column TITLE (
            layout {
                sequence: 10
            }
            source {
                databaseColumn: TITLE
                dataType: varchar2
            }
        )
        column METRIC (
            layout {
                sequence: 20
            }
            source {
                databaseColumn: METRIC
                dataType: number
            }
        )
        column META (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: META
                dataType: varchar2
            }
        )
    )

    region throughput (
        name: Completed requests by week
        type: chart
        layout {
            sequence: 40
            slot: body
            startNewRow: true
            columnSpan: 8
            columnCssClasses: col-sm-12
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        chart {
            type: line
        }
        axis x (
            name: x
        )
        axis y (
            name: y
        )
        series values (
            name: Values
            execution {
                sequence: 10
            }
            source {
                type: sqlQuery
                sqlQuery:
                    ```sql
                    select LABEL, VALUE from (select 1 SORT_ORDER, 'Week 1' LABEL, 14 VALUE from dual union all select 2, 'Week 2', 18 from dual union all select 3, 'Week 3', 20 from dual union all select 4, 'Week 4', 24 from dual) order by SORT_ORDER
                    ```
            }
            columnMapping {
                label: LABEL
                value: VALUE
            }
        )
    )

    region operating-status (
        name: Operating status
        type: themeTemplateComponent/contentRow
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Intake' TITLE, 'Eight requests await triage.' DESCRIPTION from dual union all select 'Fulfillment', 'Sixteen requests are in progress.' from dual
                ```
        }
        layout {
            sequence: 50
            slot: body
            startNewRow: false
            columnSpan: 4
            columnCssClasses: col-sm-12
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            display: report
        }
        settings {
            title: &TITLE.
            description: &DESCRIPTION.
        }
        column TITLE (
            layout {
                sequence: 10
            }
            source {
                databaseColumn: TITLE
                dataType: varchar2
            }
        )
        column DESCRIPTION (
            layout {
                sequence: 20
            }
            source {
                databaseColumn: DESCRIPTION
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
    "sourceSha256": "97893e7670aeb7d76cede3f545e4922fc9466afc527724f1219f693c040abd1b",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
