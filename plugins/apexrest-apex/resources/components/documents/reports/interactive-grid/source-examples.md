# Interactive Grid: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:interactive-grid",
      "description": "Customize reports using powerful features in this native APEX component.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1410,
        "componentId": "list-entry:interactive-grid",
        "sourceFile": "shared-components/lists.apx",
        "line": 733,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1410/region:overview",
      "description": "Interactive Grid includes all the features you expect for powerful reporting, including fixed headers, frozen columns, scroll pagination, multiple filters, sorting, aggregates, computations, and more.\nFor more examples, please install the Sample Interactive Grids from Packaged Apps > Sample Apps.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1410,
        "componentId": "page:1410/region:overview",
        "sourceFile": "pages/p01410-interactive-grid.apx",
        "line": 415,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1410/region:instructions",
      "pageId": 1410,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1410/region:basic-reporting",
      "status": "resolved"
    },
    {
      "sourceId": "page:1410/region:template-options",
      "pageId": 1410,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1410/region:basic-reporting",
      "status": "resolved"
    }
  ]
}
```
