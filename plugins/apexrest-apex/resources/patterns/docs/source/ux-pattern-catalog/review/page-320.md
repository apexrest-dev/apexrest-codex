# Item Detail – Full: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 320,
  "pageName": "Item Detail – Full",
  "classification": "pattern",
  "sourceSha256": "392714d5c70a75df380552a964f9ac5ea5a1cfa0ecf2536fa7ac2d0c6a72649b",
  "patternIds": [
    "pattern:details/full",
    "pattern:details/related-collections",
    "pattern:activity/grouped-history",
    "pattern:media/document-library"
  ],
  "componentIds": [
    "component:template-components/content-row",
    "component:template-components/metric-card",
    "component:reports/value-attribute-pairs-column",
    "component:reports/standard",
    "component:regions/region-display-selector",
    "component:template-components/comments"
  ],
  "reason": "Full details compose switchable sections, child data and supporting context; several write controls are illustrative only.",
  "variants": [
    {
      "name": "Summary, sections, key facts, metrics and child records",
      "disposition": "pattern",
      "patternIds": [
        "pattern:details/full"
      ],
      "reason": "The existing full-detail recipe provides read-only section navigation and consistent selected-record scope."
    },
    {
      "name": "related-information / child-records",
      "disposition": "pattern",
      "patternIds": [
        "pattern:details/related-collections"
      ],
      "reason": "Collection counts and linked child records must share the same parent and authorization scope."
    },
    {
      "name": "activity-2",
      "disposition": "pattern",
      "patternIds": [
        "pattern:activity/grouped-history"
      ],
      "reason": "Ordered record history is a supporting activity composition; grouped history provides an explicit reusable time-group variant."
    },
    {
      "name": "files",
      "disposition": "unresolved",
      "patternIds": [
        "pattern:media/document-library"
      ],
      "reason": "Source file open/edit links target #; authenticated file endpoints and rights remain unresolved."
    },
    {
      "name": "Comments textarea and add-comment control",
      "disposition": "unresolved",
      "patternIds": [],
      "reason": "The source has no comment insert process or matching action implementing persistence; read-only comment display is separate."
    },
    {
      "name": "Upload, people edit and side commands",
      "disposition": "unresolved",
      "patternIds": [],
      "reason": "Visible controls lack project-specific persistence and authorized routes."
    },
    {
      "name": "Region display selector and section spacing",
      "disposition": "component",
      "patternIds": [],
      "reason": "Native region selection is a component dependency of the full detail layout."
    }
  ]
}
```
