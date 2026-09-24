# Contextual Info: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:contextual-info",
      "description": "Display key-value pairs in a report.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1307,
        "componentId": "list-entry:contextual-info",
        "sourceFile": "shared-components/lists.apx",
        "line": 599,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1307/region:overview",
      "description": "This report template is useful for displaying key value pairs.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1307,
        "componentId": "page:1307/region:overview",
        "sourceFile": "pages/p01307-contextual-info.apx",
        "line": 154,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1307/region:instructions",
      "pageId": 1307,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1307/region:demo",
      "status": "resolved"
    },
    {
      "sourceId": "page:1307/region:sample-sql-query",
      "pageId": 1307,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1307/region:demo",
      "status": "resolved"
    },
    {
      "sourceId": "page:1307/region:template-options",
      "pageId": 1307,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1307/region:demo",
      "status": "resolved"
    }
  ]
}
```
