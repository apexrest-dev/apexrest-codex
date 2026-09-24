# Dashboard – Simple: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 110,
  "pageName": "Dashboard – Simple",
  "classification": "pattern",
  "sourceSha256": "b0d4297e316a750daf1621d03edb66e413fa5761c0225c2496999b881c8086bd",
  "patternIds": [
    "pattern:dashboards/simple"
  ],
  "componentIds": [
    "component:regions/chart",
    "component:template-components/metric-card",
    "component:template-components/content-row"
  ],
  "reason": "Simple dashboard combines metrics, trends, categorical composition and recent summaries.",
  "variants": [
    {
      "name": "metric-cards / content-row / content-row-2",
      "disposition": "pattern",
      "patternIds": [
        "pattern:dashboards/simple"
      ],
      "reason": "Summary hierarchy and read-only supporting lists are represented by the existing synthetic dashboard."
    },
    {
      "name": "chart-1 / time-series / chart-2 / chart-3",
      "disposition": "component",
      "patternIds": [],
      "reason": "Area, bar and pie choices require their documented date/category/value projections; they are chart parameter variants within this dashboard."
    },
    {
      "name": "dashboard-title and command area",
      "disposition": "visual",
      "patternIds": [],
      "reason": "Heading and region spacing vary presentation without a distinct interaction."
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
