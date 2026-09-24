# Hierarchical page trail with return navigation: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "breadcrumb.entry.pageNumber",
    "description": "Page identified by the current entry."
  },
  {
    "path": "breadcrumb.entry.appearance.parentEntry",
    "description": "Parent in the page hierarchy."
  },
  {
    "path": "breadcrumb.entry.link.target.page",
    "description": "Working parent destination."
  },
  {
    "path": "region.componentAppearance.breadcrumbTemplate",
    "description": "Native breadcrumb rendering."
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
