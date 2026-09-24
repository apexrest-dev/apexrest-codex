# Executive dashboard: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "page[1].pageItem[P1_PERIOD].lov.staticValues",
    "type": "static LOV",
    "description": "The two return values used by all SQL binds.",
    "exampleValue": "STATIC:Current period;CURRENT,Previous period;PREVIOUS"
  },
  {
    "path": "page[1].pageItem[P1_PERIOD].default.staticValue",
    "type": "string",
    "description": "Default reporting period.",
    "exampleValue": "CURRENT"
  },
  {
    "path": "page[1].region[actual-total].source.pageItemsToSubmit",
    "type": "page item list",
    "description": "Submit the period with every dependent region refresh.",
    "exampleValue": "P1_PERIOD"
  },
  {
    "path": "page[1].region[target-total].source.pageItemsToSubmit",
    "type": "page item list",
    "description": "Submit the period with every dependent region refresh.",
    "exampleValue": "P1_PERIOD"
  },
  {
    "path": "page[1].region[variance].source.pageItemsToSubmit",
    "type": "page item list",
    "description": "Submit the period with every dependent region refresh.",
    "exampleValue": "P1_PERIOD"
  },
  {
    "path": "page[1].region[regional-status].source.pageItemsToSubmit",
    "type": "page item list",
    "description": "Submit the period with every dependent region refresh.",
    "exampleValue": "P1_PERIOD"
  },
  {
    "path": "page[1].region[actual-target].series[values].source.pageItemsToSubmit",
    "type": "page item list",
    "description": "Each chart series source submits its period dependency.",
    "exampleValue": "P1_PERIOD"
  },
  {
    "path": "page[1].region[actual-target].series[target].source.pageItemsToSubmit",
    "type": "page item list",
    "description": "Each chart series source submits its period dependency.",
    "exampleValue": "P1_PERIOD"
  },
  {
    "path": "page[1].region[actual-target].series[values].columnMapping",
    "type": "column mappings",
    "description": "Both series share LABEL categories and map their selected numeric value to VALUE."
  },
  {
    "path": "page[1].region[actual-target].series[target].columnMapping",
    "type": "column mappings",
    "description": "Both series share LABEL categories and map their selected numeric value to VALUE."
  },
  {
    "path": "page[1].dynamicAction[refresh-period].when",
    "type": "event selection",
    "description": "A change event on P1_PERIOD refreshes every dependent view."
  },
  {
    "path": "page[1].dynamicAction[refresh-period].action[refresh-actual-total].affectedElements.region",
    "type": "region reference",
    "description": "Keep all five consumers in the refresh set."
  },
  {
    "path": "page[1].dynamicAction[refresh-period].action[refresh-target-total].affectedElements.region",
    "type": "region reference",
    "description": "Keep all five consumers in the refresh set."
  },
  {
    "path": "page[1].dynamicAction[refresh-period].action[refresh-variance].affectedElements.region",
    "type": "region reference",
    "description": "Keep all five consumers in the refresh set."
  },
  {
    "path": "page[1].dynamicAction[refresh-period].action[refresh-actual-target].affectedElements.region",
    "type": "region reference",
    "description": "Keep all five consumers in the refresh set."
  },
  {
    "path": "page[1].dynamicAction[refresh-period].action[refresh-regional-status].affectedElements.region",
    "type": "region reference",
    "description": "Keep all five consumers in the refresh set."
  },
  {
    "path": "page[1].region[actual-total].settings.meta",
    "type": "column substitution",
    "description": "Period labels belong in each refreshed metric query.",
    "exampleValue": "&META."
  },
  {
    "path": "page[1].region[target-total].settings.meta",
    "type": "column substitution",
    "description": "Period labels belong in each refreshed metric query.",
    "exampleValue": "&META."
  },
  {
    "path": "page[1].region[variance].settings.meta",
    "type": "column substitution",
    "description": "Period labels belong in each refreshed metric query.",
    "exampleValue": "&META."
  }
]
```

## Data mappings

```json
{
  "source": "Original synthetic localDatabase/sqlQuery CTE repeated consistently in every bound query",
  "tables": [
    "SYS.DUAL"
  ],
  "bindings": [
    "P1_PERIOD"
  ],
  "submittedItems": {
    "actual-total": [
      "P1_PERIOD"
    ],
    "target-total": [
      "P1_PERIOD"
    ],
    "variance": [
      "P1_PERIOD"
    ],
    "actual-target/series/values": [
      "P1_PERIOD"
    ],
    "actual-target/series/target": [
      "P1_PERIOD"
    ],
    "regional-status": [
      "P1_PERIOD"
    ]
  },
  "period": {
    "values": [
      "CURRENT",
      "PREVIOUS"
    ],
    "default": "CURRENT",
    "unknownOrNull": "Current values; this item is a display filter, never an authorization boundary."
  },
  "rows": {
    "columns": [
      "LABEL varchar2",
      "CURRENT_ACTUAL number",
      "CURRENT_TARGET number",
      "PREVIOUS_ACTUAL number",
      "PREVIOUS_TARGET number"
    ],
    "unit": "Synthetic units",
    "values": [
      [
        "North",
        160,
        180,
        130,
        145
      ],
      [
        "Central",
        210,
        200,
        180,
        190
      ],
      [
        "South",
        130,
        150,
        110,
        120
      ]
    ]
  },
  "metrics": {
    "CURRENT": {
      "actual": 500,
      "target": 530,
      "variance": -30
    },
    "PREVIOUS": {
      "actual": 420,
      "target": 455,
      "variance": -35
    }
  },
  "mapping": {
    "metricCards": [
      "TITLE varchar2",
      "METRIC number",
      "META varchar2"
    ],
    "chartSeries": [
      "LABEL varchar2",
      "VALUE number"
    ],
    "statusRows": [
      "TITLE varchar2",
      "DESCRIPTION varchar2"
    ]
  },
  "states": {
    "populated": "Both periods have three synthetic region rows.",
    "empty": "A production source must explicitly choose zero/no-data semantics; preserve shared period and authorization scope across all queries."
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
  },
  {
    "kind": "theme-template",
    "name": "optional-floating",
    "purpose": "Period item label."
  }
]
```
