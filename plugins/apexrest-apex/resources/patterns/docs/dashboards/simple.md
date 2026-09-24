# Simple dashboard / Проста панель показників

A compact service overview combines three metric cards, an ordered completion trend and an operational status list.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    110
  ],
  "examples": [],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  {
    "role": "summary",
    "regions": [
      "open-work",
      "completed-work",
      "on-time"
    ],
    "layout": "Three 4-column metric cards on the first row."
  },
  {
    "role": "trend",
    "regions": [
      "throughput"
    ],
    "layout": "8-column native line chart on a new row."
  },
  {
    "role": "context",
    "regions": [
      "operating-status"
    ],
    "layout": "4-column native Content Row list next to the trend."
  }
]
```

## Interaction and states

```json
[
  {
    "trigger": "Page load",
    "effect": "Render a read-only summary and trend; no write or navigation controls."
  }
]
```

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
  }
]
```

## Recipes

- pattern:dashboards/simple/recipes/basic: ready

## Adaptation

- Choose an available page number and alias; rename page items and every bind and dynamic-action reference consistently.
- Replace the synthetic queries with authorized source queries that preserve each component projection and documented metric units.
- Reuse compatible destination theme templates and preserve existing authentication, authorizations and application settings.
- Keep KPI definitions, chart totals and support-list scope consistent; compile the complete application after adaptation.

## Limits

- Original reduced composition informed by source-page structure; it does not reproduce every chart, menu or navigation action in the source application.
- No write, drill-down or navigation action is included. Add actions only with a real destination/API contract and destination authorization.
- Offline compilation does not prove SQL execution, import, responsive layout or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
