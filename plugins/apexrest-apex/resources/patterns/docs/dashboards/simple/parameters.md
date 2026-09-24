# Simple dashboard: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "page[1].region[open-work].source.sqlQuery",
    "type": "sqlQuery",
    "description": "Each metric projects TITLE varchar2, METRIC number and META varchar2 with a clear unit."
  },
  {
    "path": "page[1].region[completed-work].source.sqlQuery",
    "type": "sqlQuery",
    "description": "Each metric projects TITLE varchar2, METRIC number and META varchar2 with a clear unit."
  },
  {
    "path": "page[1].region[on-time].source.sqlQuery",
    "type": "sqlQuery",
    "description": "Each metric projects TITLE varchar2, METRIC number and META varchar2 with a clear unit."
  },
  {
    "path": "page[1].region[open-work].settings",
    "type": "column substitutions",
    "description": "TITLE, METRIC and META bind to the corresponding projected columns."
  },
  {
    "path": "page[1].region[completed-work].settings",
    "type": "column substitutions",
    "description": "TITLE, METRIC and META bind to the corresponding projected columns."
  },
  {
    "path": "page[1].region[on-time].settings",
    "type": "column substitutions",
    "description": "TITLE, METRIC and META bind to the corresponding projected columns."
  },
  {
    "path": "page[1].region[throughput].chart.type",
    "type": "enum",
    "description": "Native chart type.",
    "exampleValue": "line"
  },
  {
    "path": "page[1].region[throughput].series[values].columnMapping",
    "type": "column mappings",
    "description": "Map LABEL to label and VALUE to value; preserve explicit query ordering."
  },
  {
    "path": "page[1].region[operating-status].settings",
    "type": "column substitutions",
    "description": "Map title to &TITLE. and description to &DESCRIPTION.."
  },
  {
    "path": "page[1].region[throughput].layout.columnSpan",
    "type": "integer",
    "description": "Trend width within the Universal Theme 12-column grid.",
    "exampleValue": 8
  },
  {
    "path": "page[1].region[operating-status].layout.columnSpan",
    "type": "integer",
    "description": "Status-list width; col-sm-12 stacks it on a narrow screen.",
    "exampleValue": 4
  }
]
```

## Data mappings

```json
{
  "source": "Original synthetic localDatabase/sqlQuery sources",
  "tables": [
    "SYS.DUAL"
  ],
  "bindings": [],
  "submittedItems": [],
  "metrics": {
    "openRequests": 24,
    "completedRequests": 76,
    "onTimePercent": 97.5
  },
  "chart": {
    "region": "throughput",
    "columns": {
      "LABEL": "varchar2 week name",
      "VALUE": "number completed requests"
    },
    "values": [
      14,
      18,
      20,
      24
    ],
    "ordering": "Explicit SORT_ORDER in the SQL; weekly values sum to the completed metric."
  },
  "status": {
    "columns": {
      "TITLE": "varchar2 queue name",
      "DESCRIPTION": "varchar2 explanatory text"
    },
    "counts": [
      8,
      16
    ],
    "scope": "Status counts sum to the open-requests metric."
  },
  "states": {
    "populated": "Synthetic source is always populated.",
    "empty": "Adaptation must define how missing business data affects zero-valued metrics and region no-data messages."
  }
}
```

## Dependencies

```json
[
  {
    "kind": "theme",
    "name": "Universal Theme",
    "version": "26.1",
    "templates": [
      "standard",
      "blank-with-attributes"
    ]
  },
  {
    "kind": "data",
    "name": "SYS.DUAL",
    "purpose": "Synthetic rows only; no demo tables, installation scripts, external URLs or shared credentials."
  }
]
```
