# Paginated cards with record detail / Картки з пагінацією та деталями запису

Stable card keys, page pagination and a real read-only detail link form a reusable browse/detail composition.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    3110
  ],
  "examples": [
    {
      "pageId": 3110,
      "componentKeys": [
        "all-settings-cards"
      ],
      "behavior": "Stable card keys, page pagination and a real read-only detail link form a reusable browse/detail composition."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Two-card page window",
  "Stable card key and signed detail URL",
  "Selected record details"
]
```

## Interaction and states

```json
[
  "Navigate card pages and open a specific record.",
  "Detail SQL uses the selected key; unknown keys produce an empty result."
]
```

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_SELECTED_ID"
  ],
  "submittedItems": [
    "P1_SELECTED_ID"
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

- pattern:ut-compositions/paginated-card-detail/recipes/basic: ready
- pattern:ut-compositions/paginated-card-detail/recipes/favorite: unresolved — The source Favorite target is #. A user/record key, storage or API, authorization, toggle semantics and refresh/error behavior are not implemented in the source.

## Adaptation

- Rename page, item, region and DOM IDs together, preserving SQL bindings and submitted items.
- Replace synthetic DUAL projections with an authorized data contract; preserve key uniqueness and deterministic ordering.
- Preserve destination authentication and authorization; compile after adaptation.

## Limits

- Offline compilation does not verify SQL execution, import or browser behavior.
- The source Details and Favorite links point to #. This original recipe supplies a read-only detail route; favorite persistence remains unresolved and is not claimed.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
