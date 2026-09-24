# Searchable icon browser with preview / Пошук іконок з попереднім переглядом

Search a fixed icon dictionary, navigate to a selected icon and preview its allowed class name.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    4000
  ],
  "examples": [
    {
      "pageId": 4000,
      "componentKeys": [
        "search",
        "icon-builder-dialog",
        "icon-preview"
      ],
      "behavior": "Search a fixed icon dictionary, navigate to a selected icon and preview its allowed class name."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Search item",
  "Allowed icon dictionary with signed selection URLs",
  "Selected icon preview"
]
```

## Interaction and states

```json
[
  "Change the search term to refresh the bounded dictionary.",
  "Follow an icon link to display its selected preview.",
  "Unknown selections produce no preview; no user-supplied CSS class is rendered."
]
```

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_QUERY",
    "P1_ICON"
  ],
  "submittedItems": [
    "P1_QUERY",
    "P1_ICON"
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

- pattern:ut-compositions/icon-browser-preview/recipes/basic: ready
- pattern:ut-compositions/icon-browser-preview/recipes/modal-picker: unresolved — The source popup picker depends on gallery JavaScript and an application icon dictionary. The included original browser uses native page navigation. A reviewed dialog return-item contract, complete allowed dictionary and close/focus handling are required for the modal variant.

## Adaptation

- Rename page, item, region and DOM IDs together, preserving SQL bindings and submitted items.
- Replace synthetic DUAL projections with an authorized data contract; preserve key uniqueness and deterministic ordering.
- Preserve destination authentication and authorization; compile after adaptation.

## Limits

- Offline compilation does not verify SQL execution, import or browser behavior.
- This original recipe uses native page navigation and three Universal Theme icons; it does not redistribute the source icon-search JavaScript or claim a complete Font APEX inventory.
- The source dialog sizing/builder options remain source gallery variants, not hidden behavior in this read-only recipe.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
