# Executive dashboard composition / Композиція керівної панелі показників

A reporting-period selector refreshes three aggregate metrics, a regional actual-versus-target chart and regional status rows from the same synthetic values. Uses original synthetic SQL and native APEX components without source-application assets.

Status: ready.

Source: ux-pattern-catalog; pages 130.

## Data contract

```json
{
  "source": "Original synthetic localDatabase/sqlQuery CTE repeated consistently in every bound query",
  "tables": [
    "SYS.DUAL"
  ],
  "bindings": [
    "P1_PERIOD"
  ],
  "submittedItems": {
    "actual-total": [
      "P1_PERIOD"
    ],
    "target-total": [
      "P1_PERIOD"
    ],
    "variance": [
      "P1_PERIOD"
    ],
    "actual-target/series/values": [
      "P1_PERIOD"
    ],
    "actual-target/series/target": [
      "P1_PERIOD"
    ],
    "regional-status": [
      "P1_PERIOD"
    ]
  },
  "period": {
    "values": [
      "CURRENT",
      "PREVIOUS"
    ],
    "default": "CURRENT",
    "unknownOrNull": "Current values; this item is a display filter, never an authorization boundary."
  },
  "rows": {
    "columns": [
      "LABEL varchar2",
      "CURRENT_ACTUAL number",
      "CURRENT_TARGET number",
      "PREVIOUS_ACTUAL number",
      "PREVIOUS_TARGET number"
    ],
    "unit": "Synthetic units",
    "values": [
      [
        "North",
        160,
        180,
        130,
        145
      ],
      [
        "Central",
        210,
        200,
        180,
        190
      ],
      [
        "South",
        130,
        150,
        110,
        120
      ]
    ]
  },
  "metrics": {
    "CURRENT": {
      "actual": 500,
      "target": 530,
      "variance": -30
    },
    "PREVIOUS": {
      "actual": 420,
      "target": 455,
      "variance": -35
    }
  },
  "mapping": {
    "metricCards": [
      "TITLE varchar2",
      "METRIC number",
      "META varchar2"
    ],
    "chartSeries": [
      "LABEL varchar2",
      "VALUE number"
    ],
    "statusRows": [
      "TITLE varchar2",
      "DESCRIPTION varchar2"
    ]
  },
  "states": {
    "populated": "Both periods have three synthetic region rows.",
    "empty": "A production source must explicitly choose zero/no-data semantics; preserve shared period and authorization scope across all queries."
  }
}
```

## Adaptation

- Choose an available page number and alias; rename page items and every bind and dynamic-action reference consistently.
- Replace the synthetic queries with authorized source queries that preserve each component projection and documented metric units.
- Reuse compatible destination theme templates and preserve existing authentication, authorizations and application settings.
- Keep KPI definitions, chart totals and support-list scope consistent; compile the complete application after adaptation.
- Keep P1_PERIOD on every bound region and chart series; refresh the period label and all numeric consumers together.
- Replace all copies of the shared synthetic CTE consistently, or use a secured shared view to keep the business definitions aligned.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Performance overview
    alias: HOME
    title: Performance overview
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region period-filter (
        name: Reporting period
        type: staticContent
        layout {
            sequence: 10
            slot: body
            columnSpan: 12
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    pageItem P1_PERIOD (
        type: selectList
        label {
            label: Period
        }
        lov {
            type: staticValues
            staticValues: STATIC:Current period;CURRENT,Previous period;PREVIOUS
            displayNullValue: false
        }
        layout {
            sequence: 10
            region: @period-filter
            slot: regionBody
            columnSpan: 4
        }
        appearance {
            template: @/optional-floating
            templateOptions: #DEFAULT#
            height: 1
        }
        default {
            type: static
            staticValue: CURRENT
        }
    )

    region actual-total (
        name: Actual total
        type: themeTemplateComponent/metricCard
        source {
            location: localDatabase
            type: sqlQuery
            pageItemsToSubmit: P1_PERIOD
            sqlQuery:
                ```sql
                with sample_values as (
                    select 'North' LABEL, 160 CURRENT_ACTUAL, 180 CURRENT_TARGET, 130 PREVIOUS_ACTUAL, 145 PREVIOUS_TARGET from dual
                    union all select 'Central', 210, 200, 180, 190 from dual
                    union all select 'South', 130, 150, 110, 120 from dual
                ), selected_values as (
                    select LABEL,
                           case when :P1_PERIOD = 'PREVIOUS' then PREVIOUS_ACTUAL else CURRENT_ACTUAL end ACTUAL,
                           case when :P1_PERIOD = 'PREVIOUS' then PREVIOUS_TARGET else CURRENT_TARGET end TARGET
                      from sample_values
                )
                select 'Actual volume' TITLE, sum(ACTUAL) METRIC, case when :P1_PERIOD = 'PREVIOUS' then 'Previous period, units' else 'Current period, units' end META from selected_values
                ```
        }
        layout {
            sequence: 20
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

    region target-total (
        name: Target total
        type: themeTemplateComponent/metricCard
        source {
            location: localDatabase
            type: sqlQuery
            pageItemsToSubmit: P1_PERIOD
            sqlQuery:
                ```sql
                with sample_values as (
                    select 'North' LABEL, 160 CURRENT_ACTUAL, 180 CURRENT_TARGET, 130 PREVIOUS_ACTUAL, 145 PREVIOUS_TARGET from dual
                    union all select 'Central', 210, 200, 180, 190 from dual
                    union all select 'South', 130, 150, 110, 120 from dual
                ), selected_values as (
                    select LABEL,
                           case when :P1_PERIOD = 'PREVIOUS' then PREVIOUS_ACTUAL else CURRENT_ACTUAL end ACTUAL,
                           case when :P1_PERIOD = 'PREVIOUS' then PREVIOUS_TARGET else CURRENT_TARGET end TARGET
                      from sample_values
                )
                select 'Target volume' TITLE, sum(TARGET) METRIC, case when :P1_PERIOD = 'PREVIOUS' then 'Previous period, units' else 'Current period, units' end META from selected_values
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

    region variance (
        name: Variance
        type: themeTemplateComponent/metricCard
        source {
            location: localDatabase
            type: sqlQuery
            pageItemsToSubmit: P1_PERIOD
            sqlQuery:
                ```sql
                with sample_values as (
                    select 'North' LABEL, 160 CURRENT_ACTUAL, 180 CURRENT_TARGET, 130 PREVIOUS_ACTUAL, 145 PREVIOUS_TARGET from dual
                    union all select 'Central', 210, 200, 180, 190 from dual
                    union all select 'South', 130, 150, 110, 120 from dual
                ), selected_values as (
                    select LABEL,
                           case when :P1_PERIOD = 'PREVIOUS' then PREVIOUS_ACTUAL else CURRENT_ACTUAL end ACTUAL,
                           case when :P1_PERIOD = 'PREVIOUS' then PREVIOUS_TARGET else CURRENT_TARGET end TARGET
                      from sample_values
                )
                select 'Actual less target' TITLE, sum(ACTUAL - TARGET) METRIC, case when :P1_PERIOD = 'PREVIOUS' then 'Previous period, units' else 'Current period, units' end META from selected_values
                ```
        }
        layout {
            sequence: 40
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

    region actual-target (
        name: Regional actual and target
        type: chart
        layout {
            sequence: 50
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
            type: bar
        }
        axis x (
            name: x
        )
        axis y (
            name: y
        )
        series values (
            name: Actual
            execution {
                sequence: 10
            }
            source {
                type: sqlQuery
                pageItemsToSubmit: P1_PERIOD
                sqlQuery:
                    ```sql
                    with sample_values as (
                        select 'North' LABEL, 160 CURRENT_ACTUAL, 180 CURRENT_TARGET, 130 PREVIOUS_ACTUAL, 145 PREVIOUS_TARGET from dual
                        union all select 'Central', 210, 200, 180, 190 from dual
                        union all select 'South', 130, 150, 110, 120 from dual
                    ), selected_values as (
                        select LABEL,
                               case when :P1_PERIOD = 'PREVIOUS' then PREVIOUS_ACTUAL else CURRENT_ACTUAL end ACTUAL,
                               case when :P1_PERIOD = 'PREVIOUS' then PREVIOUS_TARGET else CURRENT_TARGET end TARGET
                          from sample_values
                    )
                    select LABEL, ACTUAL VALUE from selected_values order by LABEL
                    ```
            }
            columnMapping {
                label: LABEL
                value: VALUE
            }
        )
        series target (
            name: Target
            execution {
                sequence: 20
            }
            source {
                type: sqlQuery
                pageItemsToSubmit: P1_PERIOD
                sqlQuery:
                    ```sql
                    with sample_values as (
                        select 'North' LABEL, 160 CURRENT_ACTUAL, 180 CURRENT_TARGET, 130 PREVIOUS_ACTUAL, 145 PREVIOUS_TARGET from dual
                        union all select 'Central', 210, 200, 180, 190 from dual
                        union all select 'South', 130, 150, 110, 120 from dual
                    ), selected_values as (
                        select LABEL,
                               case when :P1_PERIOD = 'PREVIOUS' then PREVIOUS_ACTUAL else CURRENT_ACTUAL end ACTUAL,
                               case when :P1_PERIOD = 'PREVIOUS' then PREVIOUS_TARGET else CURRENT_TARGET end TARGET
                          from sample_values
                    )
                    select LABEL, TARGET VALUE from selected_values order by LABEL
                    ```
            }
            columnMapping {
                label: LABEL
                value: VALUE
            }
        )
    )

    region regional-status (
        name: Regional results
        type: themeTemplateComponent/contentRow
        source {
            location: localDatabase
            type: sqlQuery
            pageItemsToSubmit: P1_PERIOD
            sqlQuery:
                ```sql
                with sample_values as (
                    select 'North' LABEL, 160 CURRENT_ACTUAL, 180 CURRENT_TARGET, 130 PREVIOUS_ACTUAL, 145 PREVIOUS_TARGET from dual
                    union all select 'Central', 210, 200, 180, 190 from dual
                    union all select 'South', 130, 150, 110, 120 from dual
                ), selected_values as (
                    select LABEL,
                           case when :P1_PERIOD = 'PREVIOUS' then PREVIOUS_ACTUAL else CURRENT_ACTUAL end ACTUAL,
                           case when :P1_PERIOD = 'PREVIOUS' then PREVIOUS_TARGET else CURRENT_TARGET end TARGET
                      from sample_values
                )
                select LABEL TITLE, 'Actual ' || to_char(ACTUAL, 'FM9990') || ' of target ' || to_char(TARGET, 'FM9990') || case when ACTUAL >= TARGET then ' (target met)' else ' (below target)' end DESCRIPTION from selected_values order by LABEL
                ```
        }
        layout {
            sequence: 60
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

    dynamicAction refresh-period (
        name: Refresh reporting period
        execution {
            sequence: 10
        }
        when {
            event: change
            selectionType: items
            items: P1_PERIOD
        }
        action refresh-actual-total (
            action: refresh
            affectedElements {
                selectionType: region
                region: @actual-total
            }
            execution {
                sequence: 10
            }
        )
        action refresh-target-total (
            action: refresh
            affectedElements {
                selectionType: region
                region: @target-total
            }
            execution {
                sequence: 20
            }
        )
        action refresh-variance (
            action: refresh
            affectedElements {
                selectionType: region
                region: @variance
            }
            execution {
                sequence: 30
            }
        )
        action refresh-actual-target (
            action: refresh
            affectedElements {
                selectionType: region
                region: @actual-target
            }
            execution {
                sequence: 40
            }
        )
        action refresh-regional-status (
            action: refresh
            affectedElements {
                selectionType: region
                region: @regional-status
            }
            execution {
                sequence: 50
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
    "sourceSha256": "17ec6d0df4f857e105ef31f51d0244d18181a11d13212d19b9c62150089cd771",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
