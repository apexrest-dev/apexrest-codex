# Capacity consumption summary / Огляд використання місткості

Independent gauges retain the unit and maximum appropriate to their resource. A textual usage table exposes exact values without depending on gauge color.

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
        "pattern-percent-capacity",
        "pattern-seat-capacity",
        "pattern-budget-capacity"
      ],
      "behavior": "Gauges distinguish percentages, absolute counts and currency budgets."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Independent gauges retain the unit and maximum appropriate to their resource.",
  "A textual usage table exposes exact values without depending on gauge color."
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
    "LABEL": "varchar2 resource",
    "VALUE": "number nonnegative used amount",
    "MAX_VALUE": "number positive maximum",
    "UNIT": "varchar2 common unit per row"
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

- pattern:metrics/capacity-summary/recipes/unit-aware: ready

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

## Limits

- Original APEXREST recipe; source implementation assets and explanatory prose are not redistributed.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
