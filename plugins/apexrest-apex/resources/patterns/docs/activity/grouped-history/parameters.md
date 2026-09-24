# Grouped activity history: parameters

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
    "ID": "number event identity",
    "GROUP_LABEL": "varchar2 display group",
    "GROUP_ORDER": "number chronological group order",
    "EVENT_TIME": "timestamp",
    "TITLE": "varchar2 event",
    "DESCRIPTION": "varchar2 context"
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
