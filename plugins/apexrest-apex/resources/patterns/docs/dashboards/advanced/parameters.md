# Advanced dashboard: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "page[1].region[open-work].source.sqlQuery",
    "type": "sqlQuery",
    "description": "TITLE varchar2, METRIC number, META varchar2; preserve the different units of count and age."
  },
  {
    "path": "page[1].region[completed-work].source.sqlQuery",
    "type": "sqlQuery",
    "description": "TITLE varchar2, METRIC number, META varchar2; preserve the different units of count and age."
  },
  {
    "path": "page[1].region[backlog-age].source.sqlQuery",
    "type": "sqlQuery",
    "description": "TITLE varchar2, METRIC number, META varchar2; preserve the different units of count and age."
  },
  {
    "path": "page[1].region[team-throughput].chart.type",
    "type": "enum",
    "description": "Compare team totals.",
    "exampleValue": "bar"
  },
  {
    "path": "page[1].region[weekly-volume].chart.type",
    "type": "enum",
    "description": "Show ordered weekly values.",
    "exampleValue": "line"
  },
  {
    "path": "page[1].region[work-mix].chart.type",
    "type": "enum",
    "description": "Show category proportions using non-negative counts.",
    "exampleValue": "pie"
  },
  {
    "path": "page[1].region[team-throughput].series[values].columnMapping",
    "type": "column mappings",
    "description": "Each query returns LABEL and VALUE; keep the relevant grouping grain."
  },
  {
    "path": "page[1].region[weekly-volume].series[values].columnMapping",
    "type": "column mappings",
    "description": "Each query returns LABEL and VALUE; keep the relevant grouping grain."
  },
  {
    "path": "page[1].region[work-mix].series[values].columnMapping",
    "type": "column mappings",
    "description": "Each query returns LABEL and VALUE; keep the relevant grouping grain."
  },
  {
    "path": "page[1].region[queue-status].settings.description",
    "type": "column substitution",
    "description": "Human-readable context for the same work categories.",
    "exampleValue": "&DESCRIPTION."
  },
  {
    "path": "page[1].region[team-throughput].layout.columnSpan",
    "type": "integer",
    "description": "Paired half-width charts; col-sm-12 stacks each on a narrow screen.",
    "exampleValue": 6
  },
  {
    "path": "page[1].region[weekly-volume].layout.columnSpan",
    "type": "integer",
    "description": "Paired half-width charts; col-sm-12 stacks each on a narrow screen.",
    "exampleValue": 6
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
    "openRequests": 36,
    "completedRequests": 114,
    "averageOpenAgeDays": 2.4
  },
  "charts": {
    "team-throughput": {
      "columns": [
        "LABEL varchar2",
        "VALUE number"
      ],
      "values": [
        52,
        38,
        24
      ],
      "unit": "completed requests"
    },
    "weekly-volume": {
      "columns": [
        "LABEL varchar2",
        "VALUE number"
      ],
      "values": [
        22,
        28,
        30,
        34
      ],
      "ordering": "Explicit SORT_ORDER",
      "unit": "completed requests"
    },
    "work-mix": {
      "columns": [
        "LABEL varchar2",
        "VALUE number"
      ],
      "values": [
        18,
        12,
        6
      ],
      "unit": "open requests"
    }
  },
  "consistency": "The bar and line totals each equal 114 completed requests; the pie and status rows each describe 36 open requests.",
  "status": {
    "columns": [
      "TITLE varchar2",
      "DESCRIPTION varchar2"
    ],
    "categories": [
      "Questions",
      "Changes",
      "Incidents"
    ]
  },
  "states": {
    "populated": "Synthetic source is always populated.",
    "empty": "Define no-data semantics when replacing the sources; no empty-data behavior is claimed from compilation."
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
