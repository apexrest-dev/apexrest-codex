# Faceted report with current filters and reset / Фасетний звіт з активними фільтрами та скиданням

A Faceted Search controller filters a Classic Report while exposing removable selections in a separate strip, per-value counts and an explicit page-scoped reset.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1411
  ],
  "examples": [
    {
      "pageId": 1411,
      "componentKeys": [
        "button-bar",
        "filters",
        "search-results",
        "reset"
      ],
      "behavior": "A Faceted Search controller filters a Classic Report while exposing removable selections in a separate strip, per-value counts and an explicit page-scoped reset."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "A summary strip provides the active-facet DOM target and reset button.",
  "Faceted Search owns a title search and status checkbox facet.",
  "One Classic Report supplies both results and facet counts."
]
```

## Interaction and states

```json
[
  "Typing or selecting a status refreshes the native faceted result set.",
  "Removing a current facet broadens the result set.",
  "Reset reloads the recipe page with its page cache cleared."
]
```

## Data contract

```json
{
  "source": "Three original synthetic records from DUAL.",
  "tables": [],
  "bindings": [],
  "submittedItems": [],
  "columns": [
    {
      "name": "ID",
      "type": "NUMBER",
      "role": "Record identity"
    },
    {
      "name": "TITLE",
      "type": "VARCHAR2",
      "role": "Searchable record title"
    },
    {
      "name": "STATUS",
      "type": "VARCHAR2",
      "role": "Status refinement"
    }
  ],
  "writeContract": "Read-only; no save action or DML is implied."
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

- pattern:ut-workflows/faceted-report-reset/recipes/basic: ready

## Adaptation

- Use free page numbers; rename page items, static IDs, region/action identifiers and all references together.
- Merge only the selected composition into the destination application; preserve authentication, authorization and existing settings.
- Keep source SQL projections, type mappings and all local links closed after adaptation.
- Rename workflow_active_filters and currentFacetsSelector as one pair.
- Native facets manage their own AJAX state; do not add duplicate SQL predicates for the same facet items.

## Limits

- Derived from observed structure in Universal Theme Reference; recipe code and explanatory text are original APEXREST material.
- Offline compilation does not prove SQL execution, import or browser behavior.
- Reset clears all item state on this recipe page; do not attach it unchanged to a larger page with unrelated state.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
