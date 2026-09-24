# Nested region tabs / Вкладки вкладених регіонів

Place independently defined child regions in a Tabs Container so users switch sections without leaving the page.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1907
  ],
  "examples": [
    {
      "pageId": 1907,
      "componentKeys": [
        "tabs-container",
        "tab",
        "tab-2",
        "tab-3"
      ],
      "behavior": "Place independently defined child regions in a Tabs Container so users switch sections without leaving the page."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "A Tabs Container is the parent region.",
  "Overview and checklist child regions occupy its regionBody slot."
]
```

## Interaction and states

```json
[
  "The native tab controls show the selected child region.",
  "Each child keeps its own content and future authorization rules."
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

- pattern:ut-workflows/nested-region-tabs/recipes/basic: ready

## Adaptation

- Use free page numbers; rename page items, static IDs, region/action identifiers and all references together.
- Merge only the selected composition into the destination application; preserve authentication, authorization and existing settings.
- Keep source SQL projections, type mappings and all local links closed after adaptation.

## Limits

- Derived from observed structure in Universal Theme Reference; recipe code and explanatory text are original APEXREST material.
- Offline compilation does not prove SQL execution, import or browser behavior.
- Switching tabs is presentation, not authorization.
- The source also contains a List-template tab example with placeholder links; that visual primitive is not treated as another working navigation flow.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
