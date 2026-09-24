# Interactive report browser: parameters

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
    "context": "page 1 / region results",
    "path": "region.type",
    "type": "native region type",
    "required": true,
    "value": "interactiveReport"
  },
  {
    "context": "page 1 / region results / column ID",
    "path": "column.source.dataType",
    "type": "IR column type",
    "value": "NUMBER"
  },
  {
    "context": "page 1 / region results / columns TITLE, DESCRIPTION, CATEGORY, STATUS",
    "path": "column.source.dataType",
    "type": "IR column type",
    "value": "STRING"
  },
  {
    "context": "page 1 / region results",
    "path": "region.messages.whenNoDataFound",
    "type": "text",
    "value": "No matching records. Change or reset the report filters."
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
  "facetItems": [],
  "writeContract": "Read-only. No editing or persistence API is claimed."
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
