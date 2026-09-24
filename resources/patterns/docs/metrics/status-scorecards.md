# Operational scorecards / Операційні показники зі станом

One row represents one measure with an explicit unit and context. Each readable status label is paired with a compatible native badge state.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    1120
  ],
  "examples": [
    {
      "pageId": 1120,
      "componentKeys": [
        "pattern-kpi-scorecards",
        "pattern-status-metric-cards"
      ],
      "behavior": "Metric labels, quantities and badges use a declared unit and status meaning."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "One row represents one measure with an explicit unit and context.",
  "Each readable status label is paired with a compatible native badge state."
]
```

## Interaction and states

```json
[]
```

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

## Dependencies

```json
[
  {
    "kind": "native",
    "reference": "Oracle APEX 26.1",
    "requirement": "Use the native component implementations pinned by the compiler."
  },
  {
    "kind": "theme",
    "reference": "Universal Theme 26.1",
    "requirement": "Resolve inherited templates in the destination application."
  },
  {
    "kind": "scaffold",
    "reference": "pattern:scaffold",
    "requirement": "Offline compiler scaffold only; preserve destination authentication and authorization."
  }
]
```

## Recipes

- pattern:metrics/status-scorecards/recipes/semantic-status: ready

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

## Limits

- Original APEXREST recipe; source implementation assets and explanatory prose are not redistributed.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
