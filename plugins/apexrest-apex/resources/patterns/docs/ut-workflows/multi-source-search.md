# Native search across two collections / Нативний пошук у двох колекціях

Use one native Search input to search two local shared search configurations and render their results in a common search region.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1413
  ],
  "examples": [
    {
      "pageId": 1413,
      "componentKeys": [
        "search-region",
        "search",
        "search-2",
        "P1413_SEARCH_FIELD"
      ],
      "behavior": "Use one native Search input to search two local shared search configurations and render their results in a common search region."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "The Search region identifies its input item.",
  "Two sequenced searchSource children resolve local shared searchConfig IDs.",
  "Both sources map stable identity, title and description."
]
```

## Interaction and states

```json
[
  "Submitting the native search input searches the allowlisted text columns in both collections.",
  "The native Search region handles initial and no-match states."
]
```

## Data contract

```json
{
  "source": "Two separately named shared search configurations, each with two original synthetic DUAL rows.",
  "tables": [],
  "bindings": [],
  "submittedItems": [
    "P1_SEARCH (native Search region-owned query input)"
  ],
  "columns": [
    {
      "name": "ID",
      "type": "NUMBER"
    },
    {
      "name": "TITLE",
      "type": "VARCHAR2"
    },
    {
      "name": "DESCRIPTION",
      "type": "VARCHAR2"
    }
  ],
  "searchContract": "Native Search reads settings.searchPageItem; each configuration defines its searchable column allowlist. The native engine owns query submission and result rendering."
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

- pattern:ut-workflows/multi-source-search/recipes/basic: ready

## Adaptation

- Use free page numbers; rename page items, static IDs, region/action identifiers and all references together.
- Merge only the selected composition into the destination application; preserve authentication, authorization and existing settings.
- Keep source SQL projections, type mappings and all local links closed after adaptation.
- Merge the two shared search configurations into an existing search-configs file rather than overwriting unrelated definitions.

## Limits

- Derived from observed structure in Universal Theme Reference; recipe code and explanatory text are original APEXREST material.
- Offline compilation does not prove SQL execution, import or browser behavior.
- No target-record navigation is claimed; the example renders searchable text only.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
