# Open and dismiss an information dialog: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "button.behavior.target.page",
    "description": "Destination must be the modal page."
  },
  {
    "path": "page.appearance.pageMode",
    "description": "modalDialog"
  },
  {
    "path": "dynamicAction.action.action",
    "description": "cancelDialog closes the dialog."
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
