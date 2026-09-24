# Comments: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "page:1405/region:overview",
      "description": "This report template is used to display user comments and status updates.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1405,
        "componentId": "page:1405/region:overview",
        "sourceFile": "pages/p01405-comments-report.apx",
        "line": 355,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1405/region:instructions",
      "pageId": 1405,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1405/region:demo",
      "status": "resolved"
    },
    {
      "sourceId": "page:1405/region:sample-sql-query",
      "pageId": 1405,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1405/region:demo",
      "status": "resolved"
    },
    {
      "sourceId": "page:1405/region:template-options",
      "pageId": 1405,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1405/region:demo",
      "status": "resolved"
    }
  ]
}
```
