# Row context menu with local navigation / Контекстне меню рядка з переходами

A content-row primary link and dropdown menu carry the same record identity into distinct read-only detail views.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    3004
  ],
  "examples": [
    {
      "pageId": 3004,
      "componentKeys": [
        "components-content-row",
        "actions",
        "edit"
      ],
      "behavior": "A content-row primary link and dropdown menu carry the same record identity into distinct read-only detail views."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Content rows",
  "Primary button and dropdown action",
  "Shared selected-key/view contract"
]
```

## Interaction and states

```json
[
  "Summary and Activity target the same record but choose different read-only projections."
]
```

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_SELECTED_ID",
    "P1_VIEW"
  ],
  "submittedItems": [
    "P1_SELECTED_ID",
    "P1_VIEW"
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

- pattern:ut-compositions/row-context-navigation/recipes/basic: ready
- pattern:ut-compositions/row-context-navigation/recipes/mutations: unresolved — Source business action URLs are #. Destination record APIs, permissions, transactional semantics, validation and success/error refresh must be defined before these are working commands.

## Adaptation

- Rename page, item, region and DOM IDs together, preserving SQL bindings and submitted items.
- Replace synthetic DUAL projections with an authorized data contract; preserve key uniqueness and deterministic ordering.
- Preserve destination authentication and authorization; compile after adaptation.

## Limits

- Offline compilation does not verify SQL execution, import or browser behavior.
- Source Create, Edit, Duplicate and Delete targets are placeholders. The recipe implements navigation only; persistence and destructive actions require a separately authorized API.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
