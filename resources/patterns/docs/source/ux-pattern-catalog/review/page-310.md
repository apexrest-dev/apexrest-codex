# Item Detail – Summary: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 310,
  "pageName": "Item Detail – Summary",
  "classification": "pattern",
  "sourceSha256": "decb3cbd22c12d65e03b4a626c11ce83f4aef9b8b068318551bc4cca6c148a8b",
  "patternIds": [
    "pattern:details/summary"
  ],
  "componentIds": [
    "component:template-components/content-row",
    "component:template-components/metric-card",
    "component:reports/value-attribute-pairs-column"
  ],
  "reason": "Compact detail combines one record heading, facts, metrics, status and recent activity.",
  "variants": [
    {
      "name": "Heading, key facts, metrics and supporting lists",
      "disposition": "pattern",
      "patternIds": [
        "pattern:details/summary"
      ],
      "reason": "Existing read-only summary recipe presents a selected record and supporting context."
    },
    {
      "name": "Activity and state row projections",
      "disposition": "component",
      "patternIds": [],
      "reason": "Content Row timestamp/state mappings serve the summary composition."
    },
    {
      "name": "Edit and generic contextual commands",
      "disposition": "unresolved",
      "patternIds": [],
      "reason": "Source placeholder links and generic command buttons do not define project-specific commands; a working operation is not claimed."
    }
  ]
}
```
