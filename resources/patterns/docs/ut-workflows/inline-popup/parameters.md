# Inline popup open and close: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "region example",
    "path": "region.appearance.template",
    "type": "UT region template",
    "value": "@/inline-popup"
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
      "js-popup-noOverlay",
      "js-popup-callout",
      "js-dialog-size480x320",
      "js-dialog-size600x400"
    ],
    "notes": "Observed source variants. #DEFAULT# means template defaults, not a CSS class; compatible option groups must not be combined arbitrarily."
  },
  {
    "context": "Anchored-callout recipe / popup region",
    "path": "region.advanced.customAttributes",
    "type": "HTML data attribute",
    "value": "data-parent-element=\"#workflow_open_popup\"",
    "notes": "The CSS selector must resolve to the declared opener button DOM ID."
  },
  {
    "context": "Anchored-callout recipe / opener button",
    "path": "button.advanced.htmlDomId",
    "type": "DOM ID",
    "value": "workflow_open_popup"
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
