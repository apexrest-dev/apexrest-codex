# Button-triggered hierarchical navigation menu: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "region.advanced.htmlDomId",
    "description": "Stable menu prefix."
  },
  {
    "path": "button.advanced.customAttributes",
    "description": "data-menu must equal the prefix plus _menu."
  },
  {
    "path": "list.entry.layout.parentEntry",
    "description": "Submenu hierarchy."
  },
  {
    "path": "list.entry.link.target.page",
    "description": "Actual local destination."
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
