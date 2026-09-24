# Item detail summary: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "page.region facts",
    "path": "region.source.sqlQuery",
    "type": "sql",
    "required": true,
    "description": "Project one selected record, including stable ID, TITLE and STATUS."
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
