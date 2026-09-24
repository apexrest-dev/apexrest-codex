# Faceted card browser / Перегляд карток із фасетними фільтрами

Combine native Faceted Search with native Cards so text, category and status refinements update one shared result set, current selections and counts.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    210
  ],
  "examples": [],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "A Faceted Search controller owns the search, category and status facets.",
  "The controller targets the sibling results region through source.filteredRegion.",
  "Current facet selections and matching-row count appear in the controller.",
  "The results region presents one card per matching record."
]
```

## Interaction and states

```json
[
  "Entering text searches TITLE and DESCRIPTION.",
  "Selecting one or more category/status values refreshes the results through native facet AJAX behavior.",
  "Facet entry counts and total matching count use the filtered results source.",
  "Removing active selections broadens the result set; a zero-match query shows the results message."
]
```

## Data contract

```json
{
  "source": "Four original synthetic rows selected from DUAL; no application tables, views, packages or external resources.",
  "tables": [],
  "columns": [
    {
      "name": "ID",
      "type": "NUMBER",
      "role": "Stable record identity"
    },
    {
      "name": "TITLE",
      "type": "VARCHAR2",
      "role": "Record title and searchable text"
    },
    {
      "name": "DESCRIPTION",
      "type": "VARCHAR2",
      "role": "Record summary and searchable text"
    },
    {
      "name": "CATEGORY",
      "type": "VARCHAR2",
      "role": "Category refinement"
    },
    {
      "name": "STATUS",
      "type": "VARCHAR2",
      "role": "Status refinement"
    }
  ],
  "bindings": [],
  "submittedItems": [],
  "facetItems": [
    "P1_SEARCH",
    "P1_CATEGORY",
    "P1_STATUS"
  ],
  "writeContract": "Read-only. No editing or persistence API is claimed.",
  "filterContract": "The native facets engine applies TITLE/DESCRIPTION search and CATEGORY/STATUS refinements to the authoritative results region and manages facet AJAX state; no duplicate SQL predicates or manual submitted-items list is needed."
}
```

## Dependencies

```json
[
  "Oracle APEX 26.1 native components",
  "Universal Theme 26.1 inherited templates",
  "pattern:scaffold for offline compiler validation only"
]
```

## Recipes

- pattern:browse/faceted-cards/recipes/basic: ready
- pattern:browse/faceted-cards/recipes/range-feature-groups: ready

## Adaptation

- Choose a free page number and rename every P1_ item, region reference and dynamic action consistently.
- Replace the synthetic SELECT with an authorized project query; preserve column aliases, types and a stable unique ID.
- Merge the composition into the destination application and preserve its authentication, authorization and page-access policy.
- Verify populated, empty, restored-session and narrow-screen states after importing into an identified test target.
- Keep facet databaseColumn/dbColumns aliases synchronized with the result query; let native facets own their AJAX submissions and filtering.
- Retain showCurrentFacets and showTotalRowCount when adapting the layout; if moving them to external selectors, provide matching unique DOM elements.

## Limits

- The source application contributes structural observations only; recipe text, SQL and data are original APEXREST material.
- The recipe is read-only and does not include business actions, editing, persistence or an authorization model for a real data set.
- Offline compiler validation does not prove SQL execution, application import or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
