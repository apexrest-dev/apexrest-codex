# People directory: parameters

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
    "ID": "number identity",
    "TITLE": "varchar2 display name",
    "DESCRIPTION": "varchar2 role",
    "INITIALS": "varchar2 initials",
    "STATUS": "varchar2 presence",
    "BADGE_STATE": "success or warning"
  },
  "bindings": [
    "P2_ID"
  ],
  "submittedItems": [
    "P2_ID"
  ],
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
