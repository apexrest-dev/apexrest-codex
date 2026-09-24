# Smart filter report: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "region filters",
    "path": "region.source.filteredRegion",
    "type": "region reference",
    "value": "@results"
  },
  {
    "context": "filter P1_SEARCH",
    "path": "filter.source.dbColumns",
    "type": "column list",
    "value": "TITLE"
  },
  {
    "context": "filter P1_STATUS",
    "path": "filter.source.databaseColumn",
    "type": "column alias",
    "value": "STATUS"
  }
]
```

## Data mappings

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
