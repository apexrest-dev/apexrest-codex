# Grid Layout: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "universal-theme-reference",
  "pageId": 300,
  "pageName": "Grid Layout",
  "classification": "pattern",
  "patternIds": [
    "pattern:layout/responsive-content-grid"
  ],
  "componentIds": [
    "component:pages/standard",
    "component:regions/alert",
    "component:regions/blank-with-attributes",
    "component:regions/blank-with-attributes-no-grid",
    "component:regions/content-block",
    "component:regions/region-display-selector",
    "component:regions/standard",
    "component:regions/title-bar",
    "component:reports/classic-report",
    "component:reports/standard"
  ],
  "reason": "Nested responsive region composition is reusable; grid-overlay controls and CSS tables are documentation.",
  "variants": [
    {
      "name": "demo",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot subRegions under responsive-design; template options [ #DEFAULT# t-ContentBlock--h3 js-headingLevel-3 ]."
    },
    {
      "name": "demo-2",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "region",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-10",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-11",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-12",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-13",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-14",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-15",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-16",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-17",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-18",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-19",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-2",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-20",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-21",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-22",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-23",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-24",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-25",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-26",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-27",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-3",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-4",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-5",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-6",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-7",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-8",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "region-9",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo-2; template options #DEFAULT#."
    },
    {
      "name": "responsive-classes",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed classicReport host using content-block; slot subRegions under responsive-design; template options [ #DEFAULT# t-ContentBlock--h3 js-headingLevel-3 ]."
    },
    {
      "name": "responsive-design",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 js-headingLevel-2 ]."
    },
    {
      "name": "responsive-region",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo; template options #DEFAULT#."
    },
    {
      "name": "responsive-region-10",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo; template options #DEFAULT#."
    },
    {
      "name": "responsive-region-11",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo; template options #DEFAULT#."
    },
    {
      "name": "responsive-region-12",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo; template options #DEFAULT#."
    },
    {
      "name": "responsive-region-2",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo; template options #DEFAULT#."
    },
    {
      "name": "responsive-region-3",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo; template options #DEFAULT#."
    },
    {
      "name": "responsive-region-4",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo; template options #DEFAULT#."
    },
    {
      "name": "responsive-region-5",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo; template options #DEFAULT#."
    },
    {
      "name": "responsive-region-6",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo; template options #DEFAULT#."
    },
    {
      "name": "responsive-region-7",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo; template options #DEFAULT#."
    },
    {
      "name": "responsive-region-8",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo; template options #DEFAULT#."
    },
    {
      "name": "responsive-region-9",
      "disposition": "pattern",
      "patternIds": [
        "pattern:layout/responsive-content-grid"
      ],
      "reason": "Observed staticContent host using blank-with-attributes-no-grid; slot subRegions under demo; template options #DEFAULT#."
    },
    {
      "name": "toggle-layout-columns",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using alert; slot subRegions under overview; template options [ #DEFAULT# t-Alert--horizontal t-Alert--defaultIcons t-Alert--info t-Alert--removeHeading js-removeLandmark ]."
    },
    {
      "name": "visibility-classes",
      "disposition": "component",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot subRegions under responsive-design; template options [ #DEFAULT# t-ContentBlock--h3 js-headingLevel-3 ]."
    },
    {
      "name": "dynamic-action-toggle-grid-layout",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed event click; actions addClass, addClass, removeClass, removeClass. Source demonstration behavior is not copied into catalog recipes."
    },
    {
      "name": "declared-dynamic-action-buttons",
      "disposition": "component",
      "patternIds": [],
      "reason": "Reviewed button keys toggle-grid-layout. Only explicitly declared native connections or DAs count as behavior; gallery labels alone do not establish actions."
    }
  ],
  "sourceSha256": "bef30219269545635449b843a8b3f6323c56ffafb34fe46a38a4147a6e1deb2e"
}
```
