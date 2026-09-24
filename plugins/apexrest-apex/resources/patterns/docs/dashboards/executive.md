# Executive dashboard / Керівна панель показників

A reporting-period selector refreshes three aggregate metrics, a regional actual-versus-target chart and regional status rows from the same synthetic values.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    130
  ],
  "examples": [],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  {
    "role": "filter",
    "regions": [
      "period-filter"
    ],
    "items": [
      "P1_PERIOD"
    ],
    "layout": "Full-width filter region with a 4-column select list."
  },
  {
    "role": "summary",
    "regions": [
      "actual-total",
      "target-total",
      "variance"
    ],
    "layout": "Three 4-column metric cards."
  },
  {
    "role": "comparison",
    "regions": [
      "actual-target"
    ],
    "layout": "8-column native bar chart with Actual and Target series."
  },
  {
    "role": "context",
    "regions": [
      "regional-status"
    ],
    "layout": "4-column Content Row list with the corresponding actual/target result for each region."
  }
]
```

## Interaction and states

```json
[
  {
    "trigger": "Page load",
    "effect": "P1_PERIOD defaults to CURRENT; source queries also use current values for a null or unknown value."
  },
  {
    "trigger": "P1_PERIOD change",
    "effect": "Native dynamic action refreshes actual-total, target-total, variance, actual-target and regional-status. Each bound region query and both chart series submit P1_PERIOD."
  }
]
```

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

## Dependencies

```json
[
  {
    "kind": "theme",
    "name": "Universal Theme",
    "version": "26.1",
    "templates": [
      "standard",
      "blank-with-attributes"
    ]
  },
  {
    "kind": "data",
    "name": "SYS.DUAL",
    "purpose": "Synthetic rows only; no demo tables, installation scripts, external URLs or shared credentials."
  },
  {
    "kind": "theme-template",
    "name": "optional-floating",
    "purpose": "Period item label."
  }
]
```

## Recipes

- pattern:dashboards/executive/recipes/basic: ready

## Adaptation

- Choose an available page number and alias; rename page items and every bind and dynamic-action reference consistently.
- Replace the synthetic queries with authorized source queries that preserve each component projection and documented metric units.
- Reuse compatible destination theme templates and preserve existing authentication, authorizations and application settings.
- Keep KPI definitions, chart totals and support-list scope consistent; compile the complete application after adaptation.
- Keep P1_PERIOD on every bound region and chart series; refresh the period label and all numeric consumers together.
- Replace all copies of the shared synthetic CTE consistently, or use a secured shared view to keep the business definitions aligned.

## Limits

- Original reduced composition informed by source-page structure; it does not reproduce every chart, menu or navigation action in the source application.
- No write, drill-down or navigation action is included. Add actions only with a real destination/API contract and destination authorization.
- Offline compilation does not prove SQL execution, import, responsive layout or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
