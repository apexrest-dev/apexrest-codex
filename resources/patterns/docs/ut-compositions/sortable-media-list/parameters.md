# Sortable media list: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "pageItem.P1_SORT.lov.staticValues",
    "values": [
      "NAME",
      "STATUS"
    ]
  },
  {
    "path": "region.results.source.pageItemsToSubmit",
    "value": "P1_SORT"
  }
]
```

## Data mappings

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_SORT"
  ],
  "submittedItems": [
    "P1_SORT"
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
