# Home: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 1,
  "pageName": "Home",
  "classification": "documentation",
  "sourceSha256": "4da9d18b79356f378eac215f365214cad1faad653829e50c4884a008b17afcde",
  "patternIds": [
    "pattern:navigation/destination-hub"
  ],
  "componentIds": [
    "component:template-components/content-row",
    "component:regions/cards"
  ],
  "reason": "Home is catalog navigation and explanatory content; its destination links provide a reusable navigation collection.",
  "variants": [
    {
      "name": "patterns / component-primitives",
      "disposition": "pattern",
      "patternIds": [
        "pattern:navigation/destination-hub"
      ],
      "reason": "Named destinations have source page links and summary context."
    },
    {
      "name": "for-apex-developers",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Informational cards explain the catalog rather than implementing a business interaction."
    },
    {
      "name": "Introductory and catalog information regions",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Source-specific explanatory prose is not redistributed."
    }
  ]
}
```
