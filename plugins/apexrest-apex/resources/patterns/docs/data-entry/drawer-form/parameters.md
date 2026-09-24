# Contextual drawer form: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "drawer page",
    "path": "page.appearance.dialogTemplate",
    "type": "template",
    "required": true,
    "current": "@/drawer"
  },
  {
    "context": "drawer process",
    "path": "process.execution.sequence",
    "type": "number",
    "required": true,
    "current": 100,
    "description": "Close only after all persistence or other side effects complete."
  }
]
```

## Data mappings

```json
{
  "source": "Explicit table fixture or mapped existing project table",
  "tables": [
    "APEXREST_PATTERN_RECORDS"
  ],
  "bindings": [
    "P2_ID",
    "P2_NAME",
    "P2_STATUS",
    "P2_ROW_VERSION"
  ],
  "submittedItems": [
    "P2_ID",
    "P2_NAME",
    "P2_STATUS",
    "P2_ROW_VERSION"
  ],
  "columns": {
    "ID": "number identity primary key",
    "NAME": "varchar2(200) not null",
    "STATUS": "varchar2(20), Open or Closed",
    "ROW_VERSION": "number incremented on update"
  },
  "prerequisite": "prerequisites/pattern-records.sql; requires separate schema-change authorization; not run by compilation or import"
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
