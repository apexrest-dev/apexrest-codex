# Sortable media list / Сортування медіасписку

A selector changes the ordered media-list result while retaining a stable tie-break key.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    3005
  ],
  "examples": [
    {
      "pageId": 3005,
      "componentKeys": [
        "components-media-list",
        "P3005_ORDER_BY"
      ],
      "behavior": "A selector changes the ordered media-list result while retaining a stable tie-break key."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Order selector",
  "Media list with status badge",
  "Deterministic order and refresh"
]
```

## Interaction and states

```json
[
  "Changing the selector submits P1_SORT and refreshes the list.",
  "Unknown/null selectors fall back to name order; IDs break ties."
]
```

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_SORT"
  ],
  "submittedItems": [
    "P1_SORT"
  ]
}
```

## Dependencies

```json
[
  {
    "kind": "theme",
    "reference": "Universal Theme 26.1",
    "requirement": "Use the pinned native/theme component definitions and adapt destination IDs."
  }
]
```

## Recipes

- pattern:ut-compositions/sortable-media-list/recipes/basic: ready

## Adaptation

- Rename page, item, region and DOM IDs together, preserving SQL bindings and submitted items.
- Replace synthetic DUAL projections with an authorized data contract; preserve key uniqueness and deterministic ordering.
- Preserve destination authentication and authorization; compile after adaptation.

## Limits

- Offline compilation does not verify SQL execution, import or browser behavior.
- The original uses native orderBy item mapping; this original recipe expresses the same explicit choices in bound SQL.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
