# Data Entry: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "universal-theme-reference",
  "pageId": 423,
  "pageName": "Data Entry",
  "classification": "primitives",
  "patternIds": [],
  "componentIds": [
    "component:items/radio-group",
    "component:pages/standard",
    "component:regions/content-block",
    "component:regions/title-bar"
  ],
  "reason": "Mobile item layout demonstrates native controls but has no submit, validations, process or persistence contract.",
  "variants": [
    {
      "name": "form-design",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "good-design-practices",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "mobile-form-example",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot subRegions under form-design; template options [ #DEFAULT# t-ContentBlock--h3 js-headingLevel-3 ]."
    }
  ],
  "sourceSha256": "b80d1cf4a6a6c593a2446ed974ba9a8f2b546863d1afebe973e7101183a1a2e9"
}
```
