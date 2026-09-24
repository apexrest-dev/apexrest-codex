# Launch and close a page drawer / Відкриття та закриття сторінки-панелі

Launch an included drawer page from a parent page, inspect its content and return by a native close action.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1917,
    1918,
    1919
  ],
  "examples": [
    {
      "pageId": 1917,
      "componentKeys": [
        "open-auto-size",
        "open-fixed"
      ],
      "behavior": "Launch an included drawer page from a parent page, inspect its content and return by a native close action."
    },
    {
      "pageId": 1918,
      "componentKeys": [
        "overview",
        "collapsible-region"
      ],
      "behavior": "Launch an included drawer page from a parent page, inspect its content and return by a native close action."
    },
    {
      "pageId": 1919,
      "componentKeys": [
        "overview"
      ],
      "behavior": "Launch an included drawer page from a parent page, inspect its content and return by a native close action."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "The parent page owns a structured same-application link.",
  "An included modal page uses the UT drawer template.",
  "A native cancelDialog action closes the child without a submit or write."
]
```

## Interaction and states

```json
[
  "Open reference navigates to the included child.",
  "Expand additional detail within the child.",
  "Close returns to the originating page and never runs on load."
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

- pattern:ut-workflows/page-drawer-launcher/recipes/basic: ready

## Adaptation

- Use free page numbers; rename page items, static IDs, region/action identifiers and all references together.
- Merge only the selected composition into the destination application; preserve authentication, authorization and existing settings.
- Keep source SQL projections, type mappings and all local links closed after adaptation.

## Limits

- Derived from observed structure in Universal Theme Reference; recipe code and explanatory text are original APEXREST material.
- Offline compilation does not prove SQL execution, import or browser behavior.
- Drawer width and opening side are template options; no editing or save behavior is claimed.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
