# Full-page search: parameters

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
    "context": "page 1 / pageItem P1_QUERY",
    "path": "pageItem.label.label",
    "type": "text",
    "value": "Search title or description"
  },
  {
    "context": "page 1 / region results",
    "path": "region.source.pageItemsToSubmit",
    "type": "item list",
    "required": true,
    "value": "P1_QUERY"
  },
  {
    "context": "page 1 / region results",
    "path": "region.source.sqlQuery",
    "type": "bind contract",
    "required": true,
    "value": ":P1_QUERY",
    "notes": "Use a bind variable; never concatenate the search term into SQL."
  },
  {
    "context": "page 1 / dynamicAction query-changed",
    "path": "dynamicAction.execution.type and dynamicAction.execution.time",
    "type": "debounce and milliseconds",
    "value": {
      "type": "debounce",
      "time": 250
    }
  },
  {
    "context": "page 1 / dynamicAction query-changed / action refresh-results",
    "path": "action.affectedElements.region",
    "type": "region reference",
    "required": true,
    "value": "@results"
  },
  {
    "context": "page 1 / region results",
    "path": "region.messages.whenNoDataFound",
    "type": "text",
    "value": "No matching records. Change or clear your search."
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
  "bindings": [
    "P1_QUERY"
  ],
  "submittedItems": [
    "P1_QUERY"
  ],
  "facetItems": [],
  "writeContract": "Read-only. No editing or persistence API is claimed.",
  "searchContract": "Case-insensitive literal substring search over TITLE and DESCRIPTION; trim whitespace and return zero rows for an empty term. Bind P1_QUERY and submit it on every results refresh; % and _ are ordinary characters because INSTR is used."
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
