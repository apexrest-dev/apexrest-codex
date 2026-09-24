# Advanced dashboard / Розширена панель показників

An operational overview combines three metrics with bar, line and pie charts and a support list that explains the open-work categories.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    120
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
      "backlog-age"
    ],
    "layout": "Three 4-column metric cards."
  },
  {
    "role": "comparisons",
    "regions": [
      "team-throughput",
      "weekly-volume"
    ],
    "layout": "Two 6-column native charts: bar by team and line by week."
  },
  {
    "role": "distribution",
    "regions": [
      "work-mix"
    ],
    "layout": "4-column native pie chart on a new row."
  },
  {
    "role": "context",
    "regions": [
      "queue-status"
    ],
    "layout": "8-column Content Row list describing the categories in the pie chart."
  }
]
```

## Interaction and states

```json
[
  {
    "trigger": "Page load",
    "effect": "Render independent read-only views over the same declared reporting scope."
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

- pattern:dashboards/advanced/recipes/basic: ready

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
