# Offering comparison browser: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "query-backed regions",
    "path": "region.source.sqlQuery",
    "type": "sql",
    "required": true,
    "description": "Preserve the documented projection, row identity and allowed record scope."
  }
]
```

## Data mappings

```json
{
  "source": "Project-specific offering query and authorized media assets",
  "tables": [],
  "bindings": [],
  "submittedItems": [],
  "writeContract": "Unresolved favorite persistence contract."
}
```

## Dependencies

```json
[
  {
    "kind": "native",
    "reference": "Oracle APEX 26.1",
    "requirement": "Use the native component implementations pinned by the compiler."
  },
  {
    "kind": "theme",
    "reference": "Universal Theme 26.1",
    "requirement": "Resolve inherited templates in the destination application."
  },
  {
    "kind": "scaffold",
    "reference": "pattern:scaffold",
    "requirement": "Offline compiler scaffold only; preserve destination authentication and authorization."
  }
]
```
