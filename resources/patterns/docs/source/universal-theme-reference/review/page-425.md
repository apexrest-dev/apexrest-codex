# jQuery Mobile Components: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "universal-theme-reference",
  "pageId": 425,
  "pageName": "jQuery Mobile Components",
  "classification": "documentation",
  "patternIds": [],
  "componentIds": [
    "component:lists/media-list",
    "component:pages/standard",
    "component:regions/alert",
    "component:regions/content-block",
    "component:regions/standard",
    "component:regions/title-bar",
    "component:reports/media-list",
    "component:reports/standard"
  ],
  "reason": "Explicit legacy jQuery Mobile documentation with unsupported-component notice; no new legacy recipe.",
  "variants": [
    {
      "name": "column-toggle-examples",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using alert; slot subRegions under column-toggle-report; template options [ #DEFAULT# t-Alert--horizontal t-Alert--customIcons t-Alert--info t-Alert--removeHeading js-removeLandmark margin-top-md ]."
    },
    {
      "name": "column-toggle-report",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "jquery-mobile-is-no-longer-supported",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using alert; slot body; template options [ #DEFAULT# t-Alert--horizontal t-Alert--defaultIcons t-Alert--info margin-bottom-lg ]."
    },
    {
      "name": "list-view",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "list-view-examples",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using alert; slot subRegions under list-view; template options [ #DEFAULT# t-Alert--horizontal t-Alert--customIcons t-Alert--info t-Alert--removeHeading js-removeLandmark margin-top-md ]."
    },
    {
      "name": "mobile-ui-patterns",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "mobile-ui-patterns-2",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed list host using standard; slot body; template options [ #DEFAULT# t-Region--noPadding t-Region--removeHeader js-removeLandmark t-Region--scrollBody ]."
    },
    {
      "name": "reflow-report",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "reflow-report-examples",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using alert; slot subRegions under reflow-report; template options [ #DEFAULT# t-Alert--horizontal t-Alert--customIcons t-Alert--info t-Alert--removeHeading js-removeLandmark margin-top-md ]."
    },
    {
      "name": "responsive-design-and-mobile-ui-patterns",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "navigation-buttons",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed targets: col-toggle:redirectUrl, col-toggle-2:redirectUrl, list:redirectUrl, list-2:redirectUrl, reflow:redirectUrl, reflow-2:redirectUrl. Destination composition is reviewed separately."
    }
  ],
  "sourceSha256": "13aad01e35efcac0a03ab7798ddc845e95d83d2ede38bb993069925575bfd27e"
}
```
