# Inline dialog open and close / Вбудований діалог із відкриттям і закриттям

Open and dismiss an inline dialog from explicit page controls while retaining the surrounding page context.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1911
  ],
  "examples": [
    {
      "pageId": 1911,
      "componentKeys": [
        "demo",
        "auto-height",
        "toggle-region-content",
        "open-auto-size",
        "cancel"
      ],
      "behavior": "Open and dismiss an inline dialog from explicit page controls while retaining the surrounding page context."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "A controls region contains an opener button.",
  "The overlay uses the corresponding UT inline template and a stable DOM ID.",
  "A close button is scoped to the overlay.",
  "A collapsible child exposes additional detail inside the overlay."
]
```

## Interaction and states

```json
[
  "Click Open to execute native openRegion.",
  "Click Close to execute native closeRegion.",
  "Neither action runs at initialization."
]
```

## Data contract

```json
{
  "source": "Original static instructional content; no persistent writes or external resources.",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Dependencies

```json
[
  "APEX 26.1 native components",
  "Universal Theme 26.1 inherited templates",
  "pattern:scaffold for compilation only"
]
```

## Recipes

- pattern:ut-workflows/inline-dialog/recipes/basic: ready

## Adaptation

- Use free page numbers; rename page items, static IDs, region/action identifiers and all references together.
- Merge only the selected composition into the destination application; preserve authentication, authorization and existing settings.
- Keep source SQL projections, type mappings and all local links closed after adaptation.
- Replace legacy javascript: opener URLs with the declared native openRegion action; never copy source application JavaScript.

## Limits

- Derived from observed structure in Universal Theme Reference; recipe code and explanatory text are original APEXREST material.
- Offline compilation does not prove SQL execution, import or browser behavior.
- Sizing, anchoring/callout and drawer-side options are visual parameters; this recipe does not claim a persistence or confirmation API.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
