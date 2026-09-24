# Headers and Footers: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "universal-theme-reference",
  "pageId": 422,
  "pageName": "Headers and Footers",
  "classification": "group",
  "patternIds": [
    "pattern:layout/mobile-action-shell"
  ],
  "componentIds": [
    "component:pages/standard",
    "component:regions/alert",
    "component:regions/content-block",
    "component:regions/title-bar"
  ],
  "reason": "Mobile header/footer documentation links to the actual native sticky shell examples.",
  "variants": [
    {
      "name": "mobile-page-footer",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "mobile-page-header",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "page-footer-examples",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using alert; slot subRegions under mobile-page-footer; template options [ #DEFAULT# t-Alert--horizontal t-Alert--customIcons t-Alert--info t-Alert--removeHeading js-removeLandmark margin-top-md ]."
    },
    {
      "name": "page-header-examples",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using alert; slot subRegions under mobile-page-header; template options [ #DEFAULT# t-Alert--horizontal t-Alert--customIcons t-Alert--info t-Alert--removeHeading js-removeLandmark margin-top-md ]."
    },
    {
      "name": "navigation-buttons",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/mobile-action-shell"
      ],
      "reason": "Observed targets: footer:redirectUrl, footer-2:redirectUrl, header:redirectUrl, header-2:redirectUrl. Destination composition is reviewed separately."
    }
  ],
  "sourceSha256": "c127a24acef442ed303ed7a306b98950b47249f213083b9fd6e97d52c87f04a1"
}
```
