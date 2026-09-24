# static content: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:static-content",
      "description": "Use HTML markup directly on the page.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1905,
        "componentId": "list-entry:static-content",
        "sourceFile": "shared-components/lists.apx",
        "line": 983,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1905/region:overview",
      "description": "The Static Content Region Type is a very basic region component which can be used for many purposes. It is one of the most versatile components available for controlling the layout of your page, or for organizing regions and form items. It can also be used to render HTML directly within your APEX application.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1905,
        "componentId": "page:1905/region:overview",
        "sourceFile": "pages/p01905-static-content.apx",
        "line": 78,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1905/region:instructions",
      "pageId": 1905,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1905/region:static-content",
      "status": "resolved"
    }
  ]
}
```
