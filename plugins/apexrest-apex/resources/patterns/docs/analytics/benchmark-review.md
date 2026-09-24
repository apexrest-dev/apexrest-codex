# Actual and target review / Порівняння факту та цілі

Actual and target series use the same ordered periods and unit. An accompanying table reports the variance and preserves null actual values for incomplete periods.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    1130,
    130
  ],
  "examples": [
    {
      "pageId": 1130,
      "componentKeys": [
        "combination-chart",
        "multi-series-line-chart",
        "grouped-bar-chart-actual-target"
      ],
      "behavior": "Comparable series share a time grain, scale and explicit missing-actual meaning."
    },
    {
      "pageId": 130,
      "componentKeys": [
        "actual-vs-target-series",
        "stock-chart"
      ],
      "behavior": "Executive comparisons combine measured results and target values."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Actual and target series use the same ordered periods and unit.",
  "An accompanying table reports the variance and preserves null actual values for incomplete periods."
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

- pattern:analytics/benchmark-review/recipes/bar-with-target: ready
- pattern:analytics/benchmark-review/recipes/line-comparison: ready

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

## Limits

- Original APEXREST recipe; source implementation assets and explanatory prose are not redistributed.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
