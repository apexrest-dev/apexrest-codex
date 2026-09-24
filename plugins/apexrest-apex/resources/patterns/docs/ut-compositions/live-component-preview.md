# Live button configuration preview / Живий перегляд налаштувань кнопки

Input controls refresh an escaped button preview and the corresponding source markup without exposing an active business action.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    6100
  ],
  "examples": [
    {
      "pageId": 6100,
      "componentKeys": [
        "builder",
        "appearance",
        "preview",
        "advanced"
      ],
      "behavior": "Input controls refresh an escaped button preview and the corresponding source markup without exposing an active business action."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Label/style controls",
  "Disabled live preview",
  "Escaped source markup"
]
```

## Interaction and states

```json
[
  "Changing either input submits both values and refreshes preview and code together.",
  "Preview buttons are deliberately disabled; configuration preview does not imply a server action."
]
```

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_LABEL",
    "P1_STYLE"
  ],
  "submittedItems": [
    "P1_LABEL",
    "P1_STYLE"
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

- pattern:ut-compositions/live-component-preview/recipes/basic: ready

## Adaptation

- Rename page, item, region and DOM IDs together, preserving SQL bindings and submitted items.
- Replace synthetic DUAL projections with an authorized data contract; preserve key uniqueness and deterministic ordering.
- Preserve destination authentication and authorization; compile after adaptation.

## Limits

- Offline compilation does not verify SQL execution, import or browser behavior.
- User labels are length-bounded and escaped; CSS classes come from a fixed allowlist. Keep this boundary when adding options.
- The full source builder has icon and advanced template options; the recipe intentionally exposes its own two reviewed configuration fields.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
