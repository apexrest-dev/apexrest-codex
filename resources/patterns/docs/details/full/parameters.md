# Full item detail: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "page.region selector",
    "path": "region.settings.mode",
    "type": "enum",
    "values": [
      "viewSingleRegion"
    ],
    "default": "viewSingleRegion"
  },
  {
    "context": "page.region section",
    "path": "region.advanced.regionDisplaySelector",
    "type": "boolean",
    "required": true
  }
]
```

## Data mappings

```json
{
  "source": "synthetic local SQL",
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
    "requirement": "Use the pinned native component and template definitions."
  }
]
```
