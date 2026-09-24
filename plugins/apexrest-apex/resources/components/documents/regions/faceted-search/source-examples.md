# Faceted Search: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "page:1411/region:overview",
      "description": "Faceted search allows you to filter different columns on the left side of the page and report on the right side of the page, to get only the data that you need.\nYou can create a faceted search page with either the Create Application Wizard or Create Page Wizard.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1411,
        "componentId": "page:1411/region:overview",
        "sourceFile": "pages/p01411-reports-faceted-search.apx",
        "line": 257,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1411/region:instructions",
      "pageId": 1411,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1411/region:filters",
      "status": "resolved"
    },
    {
      "sourceId": "page:1411/region:template-options",
      "pageId": 1411,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1411/region:filters",
      "status": "resolved"
    }
  ]
}
```
