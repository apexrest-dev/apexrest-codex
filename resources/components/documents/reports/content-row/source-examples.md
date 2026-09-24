# Content Row: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "page:1407/region:overview",
      "description": "Content Row is a Classic Report template that is suitable for displaying most types of content. This report features a column for selection such as a checkbox or radio button, an icon, title and description, miscellaneous attributes, and actions.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1407,
        "componentId": "page:1407/region:overview",
        "sourceFile": "pages/p01407-content-row-report.apx",
        "line": 352,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1407/region:instructions",
      "pageId": 1407,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1407/region:demo",
      "status": "resolved"
    },
    {
      "sourceId": "page:1407/region:sample-sql-query",
      "pageId": 1407,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1407/region:demo",
      "status": "resolved"
    },
    {
      "sourceId": "page:1407/region:template-options",
      "pageId": 1407,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1407/region:demo",
      "status": "resolved"
    }
  ]
}
```
