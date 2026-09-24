# Mobile workspace with persistent navigation actions: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "page.appearance.templateOptions",
    "description": "js-pageStickyMobileHeader enables mobile header behavior."
  },
  {
    "path": "region.appearance.templateOptions",
    "description": "t-ButtonRegion--stickToBottom anchors footer controls."
  },
  {
    "path": "region.layout.slot",
    "description": "breadcrumbBar for header, body for sticky footer."
  },
  {
    "path": "button.behavior.target.page",
    "description": "Real detail or return page."
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
