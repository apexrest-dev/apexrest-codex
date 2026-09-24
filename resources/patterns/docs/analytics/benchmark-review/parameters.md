# Actual and target review: parameters

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
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "PERIOD_DATE": "date ordered period",
    "ACTUAL": "number or null when unavailable",
    "TARGET": "number benchmark",
    "VARIANCE": "number actual minus target or null"
  },
  "bindings": [],
  "submittedItems": [],
  "writeContract": "Read-only."
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
