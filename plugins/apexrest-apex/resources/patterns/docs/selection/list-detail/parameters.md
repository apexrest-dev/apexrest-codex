# List and detail selection: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "selection link SQL",
    "path": "apex_page.get_url.p_items",
    "type": "item-list",
    "required": true,
    "current": "P1_SELECTED_ID"
  },
  {
    "context": "detail region",
    "path": "region.source.pageItemsToSubmit",
    "type": "item-list",
    "required": true,
    "current": "P1_SELECTED_ID"
  }
]
```

## Data mappings

```json
{
  "source": "synthetic local SQL",
  "tables": [],
  "bindings": [
    "P1_SELECTED_ID"
  ],
  "submittedItems": [
    "P1_SELECTED_ID"
  ],
  "columns": {
    "ID": "number primary key",
    "TITLE": "varchar2",
    "STATUS": "varchar2"
  }
}
```

## Dependencies

```json
[
  {
    "kind": "theme",
    "reference": "Universal Theme 26.1",
    "requirement": "Use the pinned native component and template definitions."
  }
]
```
