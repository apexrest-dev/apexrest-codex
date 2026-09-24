# Touch Gestures: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "universal-theme-reference",
  "pageId": 424,
  "pageName": "Touch Gestures",
  "classification": "primitives",
  "patternIds": [],
  "componentIds": [
    "component:pages/standard",
    "component:regions/blank-with-attributes-no-grid",
    "component:regions/content-block",
    "component:regions/title-bar"
  ],
  "reason": "Four isolated native gesture event demonstrations invoke page JavaScript; they do not define a composed application workflow.",
  "variants": [
    {
      "name": "available-gestures",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "details",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under press; template options #DEFAULT#."
    },
    {
      "name": "details-2",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under swipe; template options #DEFAULT#."
    },
    {
      "name": "details-3",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under pan; template options #DEFAULT#."
    },
    {
      "name": "details-4",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under tap; template options #DEFAULT#."
    },
    {
      "name": "pan",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "press",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "swipe",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "tap",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "touch-region",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under press; template options #DEFAULT#."
    },
    {
      "name": "touch-region-2",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under swipe; template options #DEFAULT#."
    },
    {
      "name": "touch-region-3",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under pan; template options #DEFAULT#."
    },
    {
      "name": "touch-region-4",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under tap; template options #DEFAULT#."
    },
    {
      "name": "dynamic-action-pan",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed event apexpan; actions executeJsCode. Isolated gesture demonstration, without application data or workflow."
    },
    {
      "name": "dynamic-action-press",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed event apexpress; actions executeJsCode. Isolated gesture demonstration, without application data or workflow."
    },
    {
      "name": "dynamic-action-swipe",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed event apexswipe; actions executeJsCode. Isolated gesture demonstration, without application data or workflow."
    },
    {
      "name": "dynamic-action-tap",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed event apextap; actions executeJsCode. Isolated gesture demonstration, without application data or workflow."
    }
  ],
  "sourceSha256": "62010954bda166796e5c65b705b783e73274cf177ca75148367f814511b3f7fe"
}
```
