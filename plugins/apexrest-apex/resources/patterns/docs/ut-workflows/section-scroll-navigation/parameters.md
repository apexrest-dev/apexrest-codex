# Scroll navigation across page sections: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "region selector",
    "path": "region.settings.mode",
    "type": "enum",
    "value": "scrollWindow"
  },
  {
    "context": "eligible content regions",
    "path": "region.advanced.regionDisplaySelector",
    "type": "boolean",
    "value": true
  },
  {
    "context": "eligible content regions",
    "path": "region.advanced.htmlDomId",
    "type": "DOM ID",
    "value": [
      "workflow_overview",
      "workflow_checklist"
    ]
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
