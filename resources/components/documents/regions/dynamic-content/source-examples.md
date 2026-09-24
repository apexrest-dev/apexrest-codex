# dynamic content: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:pl-sql-dynamic-content",
      "description": "Render HTML or text using the PL/SQL Web Toolkit.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1908,
        "componentId": "list-entry:pl-sql-dynamic-content",
        "sourceFile": "shared-components/lists.apx",
        "line": 906,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1908/region:overview",
      "description": "Dynamic Content region is based on PL/SQL enable you to render any HTML or text using the PL/SQL Web Toolkit, with Dynamic Content Region you can control the region performance and contains support for MLE.\nSet Dynamic Content as the Region type.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1908,
        "componentId": "page:1908/region:overview",
        "sourceFile": "pages/p01908-dynamic-content-region.apx",
        "line": 137,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1908/region:instructions",
      "pageId": 1908,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1908/region:demo-2",
      "status": "resolved"
    },
    {
      "sourceId": "page:1908/region:sample-code",
      "pageId": 1908,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1908/region:demo-2",
      "status": "resolved"
    }
  ]
}
```
