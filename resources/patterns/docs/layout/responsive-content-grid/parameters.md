# Responsive nested content workspace: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "region.layout.columnSpan",
    "description": "Desktop twelve-column span."
  },
  {
    "path": "region.layout.columnCssClasses",
    "description": "Small-screen stacking class."
  },
  {
    "path": "region.layout.parentRegion",
    "description": "Parent that owns subRegions slot."
  },
  {
    "path": "region.layout.startNewRow",
    "description": "Controls row boundaries."
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
