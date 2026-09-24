# Getting Started: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "universal-theme-reference",
  "pageId": 500,
  "pageName": "Getting Started",
  "classification": "group",
  "patternIds": [],
  "componentIds": [
    "component:lists/cards",
    "component:pages/standard",
    "component:regions/cards",
    "component:regions/content-block",
    "component:regions/hero"
  ],
  "reason": "Getting-started landing page and documentation navigation.",
  "variants": [
    {
      "name": "about",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h1 ]."
    },
    {
      "name": "explore-universal-theme",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed list host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h1 ]."
    },
    {
      "name": "getting-started",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h1 ]."
    },
    {
      "name": "oracle-apex-universal-theme",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using hero; slot breadcrumbBar; template options #DEFAULT#."
    }
  ],
  "sourceSha256": "267fd95d8580061a23460391ea8c82b37b8927fdf609267ac9eef07e4bfe3741"
}
```
