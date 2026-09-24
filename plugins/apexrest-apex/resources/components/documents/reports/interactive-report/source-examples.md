# Interactive Report: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:avatar",
      "description": "Display an icon, image, or initials.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3001,
        "componentId": "list-entry:avatar",
        "sourceFile": "shared-components/lists.apx",
        "line": 252,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:badge",
      "description": "Display content within a badge.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3002,
        "componentId": "list-entry:badge",
        "sourceFile": "shared-components/lists.apx",
        "line": 271,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:interactive-report",
      "description": "Create powerful reports using fixed headers, frozen columns, scroll pagination, multiple filters, sorting, aggregates, computations, and more.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1402,
        "componentId": "list-entry:interactive-report",
        "sourceFile": "shared-components/lists.apx",
        "line": 752,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1402/region:overview",
      "description": "Interactive Reports provide powerful features for customizing your report such as searching, filtering, sorting, highlighting, group-by, pivot, aggregations, calculations, charting, and more.\nCreate a new Region with Interactive Report as the region type.\nYou can further enhance Interactive Reports by using the Interactive Report region template, and enable template options such as Show Maximize Button.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1402,
        "componentId": "page:1402/region:overview",
        "sourceFile": "pages/p01402-interactive-report.apx",
        "line": 296,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3001/region:overview",
      "description": "Avatars are useful for displaying an icon, image, or initials within a region. An Avatar can be used to display a single (partial) avatar, as multiple (report) avatars, or can be applied as a column type or in report templates to display an avatar for each report row. The multiple (report) display type is useful for being able to display multiple avatars as one region on a page outside of a report.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3001,
        "componentId": "page:3001/region:overview",
        "sourceFile": "pages/p03001-avatar-component.apx",
        "line": 559,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3002/region:overview",
      "description": "The Badge partial is useful for displaying badges or counters.\nThis partial can be used to display a single badge, or can be applied in report templates to display a badge for each report row.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3002,
        "componentId": "page:3002/region:overview",
        "sourceFile": "pages/p03002-badge-component.apx",
        "line": 643,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1402/region:instructions",
      "pageId": 1402,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1402/region:simple-interactive-report",
      "status": "resolved"
    },
    {
      "sourceId": "page:1402/region:template-options",
      "pageId": 1402,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1402/region:simple-interactive-report",
      "status": "resolved"
    },
    {
      "sourceId": "page:3001/region:sample-sql-query-interactive-report",
      "pageId": 3001,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "IRDemo",
      "targetId": "page:3001/region:interactive-report",
      "status": "resolved"
    },
    {
      "sourceId": "page:3002/region:sample-sql-query-interactive-report",
      "pageId": 3002,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "IRDemo",
      "targetId": "page:3002/region:ir",
      "status": "resolved"
    }
  ]
}
```
