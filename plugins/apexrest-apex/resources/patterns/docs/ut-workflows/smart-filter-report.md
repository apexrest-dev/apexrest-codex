# Smart filter report / Звіт із розумними фільтрами

Combine a compact Smart Filters controller and a Classic Report backed by the same authoritative projection.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1412
  ],
  "examples": [
    {
      "pageId": 1412,
      "componentKeys": [
        "search",
        "search-results"
      ],
      "behavior": "Combine a compact Smart Filters controller and a Classic Report backed by the same authoritative projection."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Smart Filters owns the search and status refinements.",
  "Its filteredRegion points to the sibling Classic Report."
]
```

## Interaction and states

```json
[
  "Search TITLE or select a STATUS value to refine the report.",
  "Clear the active refinement to restore all rows."
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

- pattern:ut-workflows/smart-filter-report/recipes/basic: ready

## Adaptation

- Use free page numbers; rename page items, static IDs, region/action identifiers and all references together.
- Merge only the selected composition into the destination application; preserve authentication, authorization and existing settings.
- Keep source SQL projections, type mappings and all local links closed after adaptation.
- Keep refinements and result SQL within the same authorization and row scope.

## Limits

- Derived from observed structure in Universal Theme Reference; recipe code and explanatory text are original APEXREST material.
- Offline compilation does not prove SQL execution, import or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
