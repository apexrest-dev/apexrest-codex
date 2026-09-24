# Browse – Interactive Report: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 230,
  "pageName": "Browse – Interactive Report",
  "classification": "pattern",
  "sourceSha256": "80057c0ecf3fcad5ad840c4de54654a667b35feabb958694d1b29b26f79a3499",
  "patternIds": [
    "pattern:browse/interactive-report"
  ],
  "componentIds": [
    "component:reports/interactive-report"
  ],
  "reason": "The interactive report browser delegates sorting, filtering and reporting to native APEX.",
  "variants": [
    {
      "name": "Native interactive report browser",
      "disposition": "pattern",
      "patternIds": [
        "pattern:browse/interactive-report"
      ],
      "reason": "Existing synthetic recipe provides native report interaction with declared columns."
    },
    {
      "name": "Primary row action, row-action menu and action column",
      "disposition": "unresolved",
      "patternIds": [],
      "reason": "Source row actions and menu entries target #; server authorization and destination commands are not defined."
    },
    {
      "name": "Button bar and report styling",
      "disposition": "visual",
      "patternIds": [],
      "reason": "Toolbar placement and region styling are component options."
    }
  ]
}
```
