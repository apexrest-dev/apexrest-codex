# Nested region tabs: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "region example",
    "path": "region.appearance.template",
    "type": "UT region template",
    "value": "@/tabs-container"
  },
  {
    "context": "child regions first-panel and second-panel",
    "path": "region.layout.parentRegion",
    "type": "region reference",
    "value": "@example"
  },
  {
    "context": "child regions",
    "path": "region.layout.slot",
    "type": "slot",
    "value": "regionBody"
  }
]
```

## Data mappings

```json
{
  "source": "Original static instructional content; no persistent writes or external resources.",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Dependencies

```json
[
  "APEX 26.1 native components",
  "Universal Theme 26.1 inherited templates",
  "pattern:scaffold for compilation only"
]
```
