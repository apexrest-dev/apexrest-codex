# Full Page Search: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 240,
  "pageName": "Full Page Search",
  "classification": "pattern",
  "sourceSha256": "ac00258cc5391b73ba1c3833bc14ee17686ccafb9467ce29362bff75e6938d63",
  "patternIds": [
    "pattern:browse/full-page-search"
  ],
  "componentIds": [
    "component:template-components/content-row",
    "component:regions/cards",
    "component:items/text-field"
  ],
  "reason": "Full-page search has empty-query and populated-result states, with input-driven visibility and refresh actions.",
  "variants": [
    {
      "name": "Search field / result query / empty prompt",
      "disposition": "pattern",
      "patternIds": [
        "pattern:browse/full-page-search"
      ],
      "reason": "Existing recipe binds submitted search input, refresh and meaningful empty/result states."
    },
    {
      "name": "Suggested search action cards",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "These source cards illustrate possible commands without a server command implementation."
    },
    {
      "name": "Search result title and contextual row actions",
      "disposition": "unresolved",
      "patternIds": [],
      "reason": "Source placeholder links and generic command buttons do not define project-specific commands; a working operation is not claimed."
    },
    {
      "name": "Result metadata and spacing",
      "disposition": "component",
      "patternIds": [],
      "reason": "Updated timestamp and descriptive context are Content Row projections."
    }
  ]
}
```
