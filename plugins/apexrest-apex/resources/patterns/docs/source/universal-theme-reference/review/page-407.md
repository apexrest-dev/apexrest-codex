# Navigation: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "universal-theme-reference",
  "pageId": 407,
  "pageName": "Navigation",
  "classification": "group",
  "patternIds": [
    "pattern:navigation/application-menu"
  ],
  "componentIds": [
    "component:pages/standard",
    "component:regions/content-block",
    "component:regions/title-bar"
  ],
  "reason": "Navigation overview groups four native menu shells; preview dialogs are source documentation tooling.",
  "variants": [
    {
      "name": "mega-menu",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h3 ]."
    },
    {
      "name": "menu-bar",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h3 ]."
    },
    {
      "name": "navigation-bar",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "navigation-menus",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h2 ]."
    },
    {
      "name": "side-tree-navigation",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h3 ]."
    },
    {
      "name": "tabs",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed staticContent host using content-block; slot body; template options [ #DEFAULT# t-ContentBlock--h3 ]."
    },
    {
      "name": "dynamic-action-mega-menu-preview",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed event click; actions executeJsCode. Source demonstration behavior is not copied into catalog recipes."
    },
    {
      "name": "dynamic-action-menu-bar-preview",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed event click; actions executeJsCode. Source demonstration behavior is not copied into catalog recipes."
    },
    {
      "name": "dynamic-action-side-nav-preview",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed event click; actions executeJsCode. Source demonstration behavior is not copied into catalog recipes."
    },
    {
      "name": "dynamic-action-tabs-preview",
      "disposition": "documentation",
      "patternIds": [],
      "reason": "Observed event click; actions executeJsCode. Source demonstration behavior is not copied into catalog recipes."
    },
    {
      "name": "declared-dynamic-action-buttons",
      "disposition": "component",
      "patternIds": [],
      "reason": "Reviewed button keys open-preview-mega-menu, open-preview-menu-bar, open-preview-side-tree, open-preview-tabs. Only explicitly declared native connections or DAs count as behavior; gallery labels alone do not establish actions."
    }
  ],
  "sourceSha256": "6428e4520b2493805fb1946b5860f8e68fa39d85c4a8b37483d692a21775cf07"
}
```
