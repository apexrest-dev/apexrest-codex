# Dashboard – Advanced: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 120,
  "pageName": "Dashboard – Advanced",
  "classification": "pattern",
  "sourceSha256": "f4812146e6aa78a673716f2e7c3b7efb18e59c376ffb7745f4ebcc7b563828cb",
  "patternIds": [
    "pattern:dashboards/advanced"
  ],
  "componentIds": [
    "component:regions/chart",
    "component:template-components/metric-card",
    "component:template-components/content-row"
  ],
  "reason": "Advanced dashboard expands summary hierarchy across metrics, chart families and supporting content rows.",
  "variants": [
    {
      "name": "Metrics, supporting content rows and time series",
      "disposition": "pattern",
      "patternIds": [
        "pattern:dashboards/advanced"
      ],
      "reason": "Multiple analytical panels form the existing advanced dashboard composition."
    },
    {
      "name": "Area / bar / pyramid / bubble / radar / stock charts",
      "disposition": "component",
      "patternIds": [],
      "reason": "Different native chart mappings are chart-specific component variants; their specialized measures are not silently interchangeable."
    },
    {
      "name": "Panel layout and header commands",
      "disposition": "visual",
      "patternIds": [],
      "reason": "Column proportions and spacing are visual choices."
    },
    {
      "name": "Generic command and row links",
      "disposition": "unresolved",
      "patternIds": [],
      "reason": "Source placeholder links and generic command buttons do not define project-specific commands; a working operation is not claimed."
    }
  ]
}
```
