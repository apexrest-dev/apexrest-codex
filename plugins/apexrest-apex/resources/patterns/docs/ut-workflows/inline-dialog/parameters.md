# Inline dialog open and close: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "region example",
    "path": "region.appearance.template",
    "type": "UT region template",
    "value": "@/inline-dialog"
  },
  {
    "context": "open and close dynamic actions",
    "path": "action.affectedElements.region",
    "type": "region reference",
    "value": "@example"
  },
  {
    "context": "open and close actions",
    "path": "action.execution.fireOnInit",
    "type": "boolean",
    "value": false
  },
  {
    "context": "Overlay region",
    "path": "region.appearance.templateOptions",
    "type": "verified UT option tokens",
    "value": [
      "js-dialog-autoheight",
      "js-dialog-size600x400"
    ],
    "notes": "Observed source variants. #DEFAULT# means template defaults, not a CSS class; compatible option groups must not be combined arbitrarily."
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
