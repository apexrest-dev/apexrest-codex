# Carousel Container: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:carousel",
      "description": "Show off one sub region at a time. For example, display a report and a chart, a slideshow, or different views of the same data.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1205,
        "componentId": "list-entry:carousel",
        "sourceFile": "shared-components/lists.apx",
        "line": 444,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1205/region:overview",
      "description": "Show off one sub region at a time. For example, displaying a report and a chart, a slideshow, or different views of the same data.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1205,
        "componentId": "page:1205/region:overview",
        "sourceFile": "pages/p01205-carousel-region.apx",
        "line": 160,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1205/region:instructions",
      "pageId": 1205,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1205/region:carousel-region",
      "status": "resolved"
    },
    {
      "sourceId": "page:1205/region:template-options",
      "pageId": 1205,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1205/region:carousel-region",
      "status": "resolved"
    }
  ]
}
```
