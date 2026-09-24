# Sectioned data entry form: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "form region",
    "path": "region.source.tableName",
    "type": "table",
    "required": true,
    "current": "APEXREST_PATTERN_RECORDS"
  },
  {
    "context": "form region",
    "path": "region.edit.rowVersionColumn",
    "type": "column",
    "required": true,
    "current": "ROW_VERSION"
  },
  {
    "context": "save process",
    "path": "process.type",
    "type": "enum",
    "current": "formAutoRowProcessing"
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
    "P1_ID",
    "P1_NAME",
    "P1_STATUS",
    "P1_ROW_VERSION"
  ],
  "submittedItems": [
    "P1_ID",
    "P1_NAME",
    "P1_STATUS",
    "P1_ROW_VERSION"
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
