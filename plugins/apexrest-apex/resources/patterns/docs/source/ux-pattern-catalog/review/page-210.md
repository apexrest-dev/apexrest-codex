# Faceted Search – Cards: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 210,
  "pageName": "Faceted Search – Cards",
  "classification": "pattern",
  "sourceSha256": "a86e46953d55f52bb6ef2cd146f45ea70cf7ee0a57f19127b87bac53f93c3491",
  "patternIds": [
    "pattern:browse/faceted-cards"
  ],
  "componentIds": [
    "component:regions/cards",
    "component:regions/faceted-search"
  ],
  "reason": "Faceted browse coordinates native facets with one query-backed result region.",
  "variants": [
    {
      "name": "Search, category and status refinement",
      "disposition": "pattern",
      "patternIds": [
        "pattern:browse/faceted-cards"
      ],
      "reason": "Existing basic recipe binds native search facets to synthetic results."
    },
    {
      "name": "Date range, exclusive priority and feature flags",
      "disposition": "pattern",
      "patternIds": [
        "pattern:browse/faceted-cards"
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
