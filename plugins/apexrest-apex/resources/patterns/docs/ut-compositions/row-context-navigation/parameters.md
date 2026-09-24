# Row context menu with local navigation: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "region.records.action.menu.template",
    "value": "menu"
  },
  {
    "path": "region.details.source.pageItemsToSubmit",
    "value": "P1_SELECTED_ID,P1_VIEW"
  }
]
```

## Data mappings

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_SELECTED_ID",
    "P1_VIEW"
  ],
  "submittedItems": [
    "P1_SELECTED_ID",
    "P1_VIEW"
  ]
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
