# Faceted report with current filters and reset: parameters

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
    "context": "region filters",
    "path": "region.settings.currentFacetsSelector",
    "type": "CSS selector",
    "value": "#workflow_active_filters"
  },
  {
    "context": "button reset",
    "path": "button.behavior.target.clearCache",
    "type": "page number",
    "value": 1
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
