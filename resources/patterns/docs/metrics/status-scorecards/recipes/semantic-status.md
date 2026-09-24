# Metric scorecards with semantic status / Картки показників зі змістовими статусами

Quantities are presented with explicit units and readable status labels.

Status: ready.

Source: ux-pattern-catalog; pages 1120.

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "ID": "number metric key",
    "TITLE": "varchar2 metric name",
    "METRIC": "number value",
    "META": "varchar2 unit/time context",
    "STATUS": "varchar2 readable state",
    "BADGE_STATE": "success or warning"
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
    name: Operational scorecards
    alias: HOME
    title: Operational scorecards
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region scorecards (
        name: Operational measures
        type: themeTemplateComponent/metricCard
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 1 ID, 'Completed reviews' TITLE, 18 METRIC, 'Records this week' META, 'On target' STATUS, 'success' BADGE_STATE from dual union all select 2, 'Open exceptions', 3, 'Records awaiting attention', 'Review required', 'warning' from dual
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
            display: report
        }
        settings {
            title: &TITLE.
            metric: &METRIC.
            meta: &META.
        }
        plugin-badge {
            displayBadge: true
            label: State
            value: STATUS
            state: BADGE_STATE
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
        column METRIC (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: METRIC
                dataType: number
            }
        )
        column META (
            layout {
                sequence: 40
            }
            source {
                databaseColumn: META
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
        column BADGE_STATE (
            layout {
                sequence: 60
            }
            source {
                databaseColumn: BADGE_STATE
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
    "sourceSha256": "1f2c31e21dda29d9c25235a5831e04b36d71c398f864d03b753feca34f6ba949",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
