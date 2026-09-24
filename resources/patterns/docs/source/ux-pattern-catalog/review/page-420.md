# Data Entry – Drawer Form: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 420,
  "pageName": "Data Entry – Drawer Form",
  "classification": "pattern",
  "sourceSha256": "b6c5420c45b695d3f9ce9a7873178a57cf75e360a57348604a1d84c55f3b67f5",
  "patternIds": [
    "pattern:data-entry/drawer-form"
  ],
  "componentIds": [
    "component:regions/form",
    "component:pages/drawer",
    "component:items/text-field",
    "component:items/select-list"
  ],
  "reason": "Drawer form constrains data entry to a contextual surface with explicit save and close/cancel contracts in the original recipe.",
  "variants": [
    {
      "name": "Drawer entry with fixture-backed save and native close/cancel",
      "disposition": "pattern",
      "patternIds": [
        "pattern:data-entry/drawer-form"
      ],
      "reason": "The existing recipe closes persistence and dialog return dependencies with original fixture logic."
    },
    {
      "name": "Basic information / organization / assignment groups",
      "disposition": "component",
      "patternIds": [],
      "reason": "Group ordering and field templates are adaptations of the same form structure."
    },
    {
      "name": "Source form initialization and shared command references",
      "disposition": "unresolved",
      "patternIds": [],
      "reason": "Source has no DML save process; initialization and command labels cannot be counted as persisted editing."
    }
  ]
}
```
