# Smart Filters: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "page:1412/region:overview",
      "description": "A smart filters page features a single search field with filters at the top of the page and a report. Each filter displays as a suggestion chip with a single count of how often the specific suggestion value occurs.\nYou can create a smart filters page with either the Create Application Wizard or Create Page Wizard, or add a smart filters region to an existing report in Page Designer.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1412,
        "componentId": "page:1412/region:overview",
        "sourceFile": "pages/p01412-reports-smart-filters.apx",
        "line": 87,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1412/region:instructions",
      "pageId": 1412,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1412/region:search",
      "status": "resolved"
    },
    {
      "sourceId": "page:1412/region:template-options",
      "pageId": 1412,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1412/region:search",
      "status": "resolved"
    }
  ]
}
```
