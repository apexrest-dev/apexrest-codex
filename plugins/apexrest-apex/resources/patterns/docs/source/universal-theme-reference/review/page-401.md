# Design Overview: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "universal-theme-reference",
  "pageId": 401,
  "pageName": "Design Overview",
  "classification": "documentation",
  "patternIds": [],
  "componentIds": [
    "component:pages/standard",
    "component:regions/content-block",
    "component:regions/hero"
  ],
  "reason": "Theme overview and design principles documentation.",
  "variants": [
    {
      "name": "design",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using hero; slot breadcrumbBar; template options #DEFAULT#."
    },
    {
      "name": "key-principles",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "what-is-universal-theme",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    }
  ],
  "sourceSha256": "9cd5b7f486b9118ed0ad1bc8ba0a957cf0c568979dcc8d27a1acdd8a68f25ea7"
}
```
