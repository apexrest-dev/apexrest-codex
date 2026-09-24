# Nested flexible workspace / Вкладена гнучка робоча область

A row container owns two column containers, each retaining its own content order when the available width changes.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    3008
  ],
  "examples": [
    {
      "pageId": 3008,
      "componentKeys": [
        "row",
        "column",
        "left-column",
        "right-column"
      ],
      "behavior": "A row container owns two column containers, each retaining its own content order when the available width changes."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Wrapping horizontal parent",
  "Two independent vertical columns",
  "Ordered main and supporting regions"
]
```

## Interaction and states

```json
[
  "Container wrapping follows available space while each child remains in its declared column order."
]
```

## Data contract

```json
{
  "source": "Static, original HTML sections only; no SQL or bindings.",
  "tables": [],
  "bindings": [],
  "submittedItems": []
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

- pattern:ut-compositions/nested-flex-workspace/recipes/basic: ready

## Adaptation

- Rename page, item, region and DOM IDs together, preserving SQL bindings and submitted items.
- Replace static sections with project-specific regions while preserving parent IDs, plugin-body slots and their independent content order.
- Preserve destination authentication and authorization; compile after adaptation.

## Limits

- Offline compilation does not verify SQL execution, import or browser behavior.
- Wrapping and alignment are structural settings; narrow-screen behavior requires browser validation.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
