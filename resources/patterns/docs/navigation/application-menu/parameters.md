# Application menu with real page routes: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "page.navigationMenu.list",
    "description": "Shared menu reference."
  },
  {
    "path": "page.navigationMenu.listTemplate",
    "description": "Side, top, tabs or mega template."
  },
  {
    "path": "page.navigationMenu.templateOptions",
    "description": "Collapsed state and visual variants."
  },
  {
    "path": "list.entry.link.target.page",
    "description": "Authorized local destination."
  },
  {
    "path": "list.entry.layout.parentEntry",
    "description": "Optional submenu hierarchy."
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
