# Nested flexible workspace: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "region.workspace.settings.direction",
    "value": "row"
  },
  {
    "path": "region.primary.settings.direction",
    "value": "column"
  },
  {
    "path": "region.overview.layout.slot",
    "value": "plugin-body"
  }
]
```

## Data mappings

```json
{
  "source": "Static, original HTML sections only; no SQL or bindings.",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Dependencies

```json
[
  {
    "kind": "theme",
    "reference": "Universal Theme 26.1",
    "requirement": "Use the pinned native/theme component definitions and adapt destination IDs."
  }
]
```
