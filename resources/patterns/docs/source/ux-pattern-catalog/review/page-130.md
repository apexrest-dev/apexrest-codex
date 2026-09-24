# Dashboard – Executive: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 130,
  "pageName": "Dashboard – Executive",
  "classification": "pattern",
  "sourceSha256": "da3956a42512eccca86cee78cbd1fa51094ff80126aefd606c2983750d8b9671",
  "patternIds": [
    "pattern:dashboards/executive",
    "pattern:analytics/benchmark-review"
  ],
  "componentIds": [
    "component:regions/chart",
    "component:template-components/metric-card",
    "component:template-components/content-row",
    "component:items/radio-group"
  ],
  "reason": "Executive dashboard includes actual/target comparisons and a time-range control; the source control itself has no refresh action.",
  "variants": [
    {
      "name": "Executive summary and metrics",
      "disposition": "pattern",
      "patternIds": [
        "pattern:dashboards/executive"
      ],
      "reason": "The existing recipe composes the read-only executive view and supplies its own bounded filter behavior."
    },
    {
      "name": "actual-vs-target-series / stock-chart / time-series",
      "disposition": "pattern",
      "patternIds": [
        "pattern:analytics/benchmark-review"
      ],
      "reason": "Aligned actual and target data requires explicit time grain and missing-value semantics."
    },
    {
      "name": "Funnel and status list",
      "disposition": "component",
      "patternIds": [],
      "reason": "Funnel stage measures and semantic status rows remain component mappings inside the view."
    },
    {
      "name": "P130_TIME_RANGE",
      "disposition": "unresolved",
      "patternIds": [],
      "reason": "The captured radio group has no dynamic action tying its value to refreshed regions; source runtime filtering is not evidenced."
    },
    {
      "name": "Generic command links",
      "disposition": "unresolved",
      "patternIds": [],
      "reason": "Source placeholder links and generic command buttons do not define project-specific commands; a working operation is not claimed."
    }
  ]
}
```
