# Navigation: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "universal-theme-reference",
  "pageId": 421,
  "pageName": "Navigation",
  "classification": "documentation",
  "patternIds": [],
  "componentIds": [
    "component:pages/standard",
    "component:regions/alert",
    "component:regions/blank-with-attributes",
    "component:regions/content-block",
    "component:regions/title-bar"
  ],
  "reason": "Historical mobile navigation instructions and static markup examples, not a supported native workflow recipe.",
  "variants": [
    {
      "name": "side-menu",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "side-menu-sample",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes; slot subRegions under side-menu; template options #DEFAULT#."
    },
    {
      "name": "tab-menu",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "tab-menu-sample",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes; slot subRegions under tab-menu; template options #DEFAULT#."
    }
  ],
  "sourceSha256": "9f1cb9e96150c05c36981f9f549c65a82c7f29f950a0eb696379b3226ffce69a"
}
```
