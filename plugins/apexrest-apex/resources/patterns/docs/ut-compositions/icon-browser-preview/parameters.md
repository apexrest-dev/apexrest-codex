# Searchable icon browser with preview: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "region.icons.source.pageItemsToSubmit",
    "value": "P1_QUERY"
  },
  {
    "path": "region.preview.source.pageItemsToSubmit",
    "value": "P1_ICON"
  }
]
```

## Data mappings

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_QUERY",
    "P1_ICON"
  ],
  "submittedItems": [
    "P1_QUERY",
    "P1_ICON"
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
