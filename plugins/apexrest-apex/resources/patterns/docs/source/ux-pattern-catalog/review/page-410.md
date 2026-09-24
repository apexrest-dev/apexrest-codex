# Data Entry – Simple Form: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 410,
  "pageName": "Data Entry – Simple Form",
  "classification": "pattern",
  "sourceSha256": "423249db546f3978adfe1f7c0bd0307032b0fa058163a154f6607b5972e62046",
  "patternIds": [
    "pattern:data-entry/sectioned-form"
  ],
  "componentIds": [
    "component:regions/form",
    "component:items/text-field",
    "component:items/select-list",
    "component:items/date-picker",
    "component:items/number-field",
    "component:items/textarea"
  ],
  "reason": "Sectioned form groups fields and help; the original catalog recipe supplies an explicit synthetic schema and DML contract.",
  "variants": [
    {
      "name": "Form groups and fixture-backed save/cancel",
      "disposition": "pattern",
      "patternIds": [
        "pattern:data-entry/sectioned-form"
      ],
      "reason": "Existing recipe adds a closed fixture contract because the source supplies form initialization but no DML save process."
    },
    {
      "name": "Required/optional labels and inline/field help",
      "disposition": "component",
      "patternIds": [],
      "reason": "Validation and accessible help belong to item configuration; field types remain separately documented components."
    },
    {
      "name": "Source Apply/Cancel command area",
      "disposition": "unresolved",
      "patternIds": [],
      "reason": "Captured generic controls alone do not establish save or cancel behavior."
    }
  ]
}
```
