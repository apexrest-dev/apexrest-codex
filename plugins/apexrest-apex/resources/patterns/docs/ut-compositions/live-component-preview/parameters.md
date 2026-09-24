# Live button configuration preview: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "region.preview.source.pageItemsToSubmit",
    "value": "P1_LABEL,P1_STYLE"
  },
  {
    "path": "pageItem.P1_STYLE.lov.staticValues",
    "values": [
      "NORMAL",
      "HOT"
    ]
  }
]
```

## Data mappings

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_LABEL",
    "P1_STYLE"
  ],
  "submittedItems": [
    "P1_LABEL",
    "P1_STYLE"
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
