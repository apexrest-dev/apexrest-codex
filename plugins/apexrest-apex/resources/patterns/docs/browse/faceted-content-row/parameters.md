# Faceted content row browser: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "page 1 / region results",
    "path": "region.source.sqlQuery",
    "type": "SQL",
    "required": true,
    "value": "Projection ID, TITLE, DESCRIPTION, CATEGORY, STATUS",
    "notes": "Keep authorization and row scope in this same base query."
  },
  {
    "context": "page 1 / region filters",
    "path": "region.source.filteredRegion",
    "type": "region reference",
    "required": true,
    "value": "@results"
  },
  {
    "context": "page 1 / region filters",
    "path": "region.settings.showCurrentFacets",
    "type": "boolean enum",
    "value": "true"
  },
  {
    "context": "page 1 / region filters",
    "path": "region.settings.showTotalRowCount",
    "type": "boolean enum",
    "value": "true"
  },
  {
    "context": "page 1 / region filters / facet P1_SEARCH",
    "path": "facet.source.dbColumns",
    "type": "column list",
    "value": "TITLE,DESCRIPTION"
  },
  {
    "context": "page 1 / region filters / facet P1_CATEGORY and P1_STATUS",
    "path": "facet.source.databaseColumn",
    "type": "column alias",
    "value": [
      "CATEGORY",
      "STATUS"
    ]
  },
  {
    "context": "page 1 / region filters / facet P1_CATEGORY and P1_STATUS",
    "path": "facet.listEntries.computeCounts and facet.listEntries.showCounts",
    "type": "boolean",
    "value": true
  }
]
```

## Data mappings

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
