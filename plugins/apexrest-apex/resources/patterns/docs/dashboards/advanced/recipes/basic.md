# Advanced dashboard composition / Композиція розширеної панелі показників

An operational overview combines three metrics with bar, line and pie charts and a support list that explains the open-work categories. Uses original synthetic SQL and native APEX components without source-application assets.

Status: ready.

Source: ux-pattern-catalog; pages 120.

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
    "openRequests": 36,
    "completedRequests": 114,
    "averageOpenAgeDays": 2.4
  },
  "charts": {
    "team-throughput": {
      "columns": [
        "LABEL varchar2",
        "VALUE number"
      ],
      "values": [
        52,
        38,
        24
      ],
      "unit": "completed requests"
    },
    "weekly-volume": {
      "columns": [
        "LABEL varchar2",
        "VALUE number"
      ],
      "values": [
        22,
        28,
        30,
        34
      ],
      "ordering": "Explicit SORT_ORDER",
      "unit": "completed requests"
    },
    "work-mix": {
      "columns": [
        "LABEL varchar2",
        "VALUE number"
      ],
      "values": [
        18,
        12,
        6
      ],
      "unit": "open requests"
    }
  },
  "consistency": "The bar and line totals each equal 114 completed requests; the pie and status rows each describe 36 open requests.",
  "status": {
    "columns": [
      "TITLE varchar2",
      "DESCRIPTION varchar2"
    ],
    "categories": [
      "Questions",
      "Changes",
      "Incidents"
    ]
  },
  "states": {
    "populated": "Synthetic source is always populated.",
    "empty": "Define no-data semantics when replacing the sources; no empty-data behavior is claimed from compilation."
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
    name: Operational overview
    alias: HOME
    title: Operational overview
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
                select 'Open requests' TITLE, 36 METRIC, 'Across all service queues' META from dual
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
                select 'Completed this month' TITLE, 114 METRIC, 'Recorded completions' META from dual
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

    region backlog-age (
        name: Backlog age
        type: themeTemplateComponent/metricCard
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Average age (days)' TITLE, 2.4 METRIC, 'Open requests only' META from dual
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

    region team-throughput (
        name: Completed requests by team
        type: chart
        layout {
            sequence: 40
            slot: body
            startNewRow: true
            columnSpan: 6
            columnCssClasses: col-sm-12
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        chart {
            type: bar
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
                    select 'Service' LABEL, 52 VALUE from dual union all select 'Delivery', 38 from dual union all select 'Support', 24 from dual
                    ```
            }
            columnMapping {
                label: LABEL
                value: VALUE
            }
        )
    )

    region weekly-volume (
        name: Completed requests by week
        type: chart
        layout {
            sequence: 50
            slot: body
            startNewRow: false
            columnSpan: 6
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
                    select LABEL, VALUE from (select 1 SORT_ORDER, 'Week 1' LABEL, 22 VALUE from dual union all select 2, 'Week 2', 28 from dual union all select 3, 'Week 3', 30 from dual union all select 4, 'Week 4', 34 from dual) order by SORT_ORDER
                    ```
            }
            columnMapping {
                label: LABEL
                value: VALUE
            }
        )
    )

    region work-mix (
        name: Open requests by category
        type: chart
        layout {
            sequence: 60
            slot: body
            startNewRow: true
            columnSpan: 4
            columnCssClasses: col-sm-12
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        chart {
            type: pie
        }
        series values (
            name: Values
            execution {
                sequence: 10
            }
            source {
                type: sqlQuery
                sqlQuery:
                    ```sql
                    select 'Questions' LABEL, 18 VALUE from dual union all select 'Changes', 12 from dual union all select 'Incidents', 6 from dual
                    ```
            }
            columnMapping {
                label: LABEL
                value: VALUE
            }
        )
    )

    region queue-status (
        name: Queue review
        type: themeTemplateComponent/contentRow
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Questions' TITLE, '18 open requests; none past the response target.' DESCRIPTION from dual union all select 'Changes', '12 open requests; two need scheduling.' from dual union all select 'Incidents', '6 open requests; one needs specialist review.' from dual
                ```
        }
        layout {
            sequence: 70
            slot: body
            startNewRow: false
            columnSpan: 8
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
    "sourceSha256": "998b55f8e2054c84f2ac3b1e9c6daca4bdf37a8926e0a86e35600f3c29f99668",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
