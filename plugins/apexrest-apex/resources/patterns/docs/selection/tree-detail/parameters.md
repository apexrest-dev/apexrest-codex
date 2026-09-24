# Tree and detail selection: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "page.region selection",
    "path": "region.settings.linkColumn",
    "type": "column",
    "required": true,
    "current": "TARGET_URL"
  },
  {
    "context": "page.region selection",
    "path": "region.settings.hierarchy",
    "type": "enum",
    "current": "notComputed"
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
    "NODE_ID": "number",
    "TREE_LEVEL": "number",
    "STATUS": "number tree status",
    "TITLE": "varchar2",
    "TARGET_URL": "checksum-signed URL"
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
