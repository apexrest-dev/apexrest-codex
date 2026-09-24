# Faceted Search – Content Row: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 220,
  "pageName": "Faceted Search – Content Row",
  "classification": "pattern",
  "sourceSha256": "c1340a0a9c40f46227ec5b8321f63b7640292364c1a9126d4132c68a34601c9d",
  "patternIds": [
    "pattern:browse/faceted-content-row"
  ],
  "componentIds": [
    "component:template-components/content-row",
    "component:regions/faceted-search"
  ],
  "reason": "Faceted browse coordinates native facets with one query-backed result region.",
  "variants": [
    {
      "name": "Search, category and status refinement",
      "disposition": "pattern",
      "patternIds": [
        "pattern:browse/faceted-content-row"
      ],
      "reason": "Existing basic recipe binds native search facets to synthetic results."
    },
    {
      "name": "Date range, exclusive priority and feature flags",
      "disposition": "pattern",
      "patternIds": [
        "pattern:browse/faceted-content-row"
      ],
      "reason": "The added range-feature-groups recipe preserves DATE type, distinct radio values and four independent Y/N feature checkboxes."
    },
    {
      "name": "Active-facet, button-bar and layout presentation",
      "disposition": "visual",
      "patternIds": [],
      "reason": "Facet placement and command bar layout do not require additional recipes."
    },
    {
      "name": "Result title and contextual commands",
      "disposition": "unresolved",
      "patternIds": [],
      "reason": "Source placeholder links and generic command buttons do not define project-specific commands; a working operation is not claimed."
    }
  ]
}
```
