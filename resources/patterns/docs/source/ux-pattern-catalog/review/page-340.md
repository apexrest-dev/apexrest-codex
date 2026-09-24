# Tree Selection: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 340,
  "pageName": "Tree Selection",
  "classification": "pattern",
  "sourceSha256": "173a08402017c29f3c3a167555dd69a71b384f6914d48ee63c442bd05a31eb18",
  "patternIds": [
    "pattern:selection/tree-detail"
  ],
  "componentIds": [
    "component:regions/tree",
    "component:items/text-field",
    "component:reports/value-attribute-pairs-column",
    "component:template-components/metric-card"
  ],
  "reason": "Tree selection separates grouping nodes from record keys and refreshes dependent details.",
  "variants": [
    {
      "name": "Native tree selection with dependent AJAX details",
      "disposition": "pattern",
      "patternIds": [
        "pattern:selection/tree-detail"
      ],
      "reason": "The added original event handler accepts only a positive integer leaf key."
    },
    {
      "name": "Search refresh with clear-selection state",
      "disposition": "pattern",
      "patternIds": [
        "pattern:selection/tree-detail"
      ],
      "reason": "The original recipe clears the key before refreshing a searched tree and retains a visible empty-state detail region."
    },
    {
      "name": "Same-app page navigation",
      "disposition": "pattern",
      "patternIds": [
        "pattern:selection/tree-detail"
      ],
      "reason": "The existing page-navigation recipe remains a distinct route-based variant."
    },
    {
      "name": "Debounced source search and initial selection controller",
      "disposition": "component",
      "patternIds": [],
      "reason": "Debouncing and initial expansion are optional interaction parameters; exact source script behavior has not been runtime-verified."
    },
    {
      "name": "Generic contextual commands",
      "disposition": "unresolved",
      "patternIds": [],
      "reason": "Source placeholder links and generic command buttons do not define project-specific commands; a working operation is not claimed."
    }
  ]
}
```
