# Scroll navigation across page sections / Навігація прокручуванням між секціями

Bind one Region Display Selector to explicitly eligible sections and scroll between them while keeping all sections on the page.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1923
  ],
  "examples": [
    {
      "pageId": 1923,
      "componentKeys": [
        "region-display-selector",
        "region",
        "region-2",
        "region-3",
        "region-4",
        "region-5"
      ],
      "behavior": "Bind one Region Display Selector to explicitly eligible sections and scroll between them while keeping all sections on the page."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "One controller precedes the eligible sibling regions.",
  "Stable DOM IDs identify each section.",
  "Only the intended content regions set regionDisplaySelector=true."
]
```

## Interaction and states

```json
[
  "Selecting a section scrolls to its region.",
  "All sections stay available in scrollWindow mode."
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

- pattern:ut-workflows/section-scroll-navigation/recipes/basic: ready

## Adaptation

- Use free page numbers; rename page items, static IDs, region/action identifiers and all references together.
- Merge only the selected composition into the destination application; preserve authentication, authorization and existing settings.
- Keep source SQL projections, type mappings and all local links closed after adaptation.

## Limits

- Derived from observed structure in Universal Theme Reference; recipe code and explanatory text are original APEXREST material.
- Offline compilation does not prove SQL execution, import or browser behavior.
- The source demonstrates scrollWindow; viewSingleRegion remains an existing component variant, not a newly observed workflow.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
