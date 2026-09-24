# Workspace with persistent supporting columns: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "page.appearance.pageTemplate",
    "description": "Select one or both side columns."
  },
  {
    "path": "region.layout.slot",
    "description": "body, leftColumn or rightColumn."
  },
  {
    "path": "page.navigationMenu",
    "description": "Combine with an application-menu recipe if needed."
  }
]
```

## Data mappings

```json
{
  "source": "Original static sample content and local page targets; no application tables.",
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
    "requirement": "Use compatible native templates and preserve application authentication."
  }
]
```
