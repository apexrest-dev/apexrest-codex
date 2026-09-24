# Theme Styles: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "universal-theme-reference",
  "pageId": 405,
  "pageName": "Theme Styles",
  "classification": "documentation",
  "patternIds": [],
  "componentIds": [
    "component:pages/standard",
    "component:regions/blank-with-attributes",
    "component:regions/cards-container",
    "component:regions/content-block",
    "component:regions/region-display-selector",
    "component:regions/title-bar"
  ],
  "reason": "Theme style preview and theme-style instructions require source helper state; visual development tooling rather than application workflow.",
  "variants": [
    {
      "name": "official-theme-styles",
      "disposition": "visual",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "official-theme-styles-cards",
      "disposition": "visual",
      "patternIds": [],
      "reason": "Observed cards host using cards-container; slot subRegions under official-theme-styles; template options #DEFAULT#."
    },
    {
      "name": "dynamic-action-customevent-openinstructions",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed event custom; actions setValue. Source demonstration behavior is not copied into catalog recipes."
    }
  ],
  "sourceSha256": "25e9be1c8048059d8970c2b0e66b4b46fc0bde6bffe57af9a5fd7abc908e9100"
}
```
