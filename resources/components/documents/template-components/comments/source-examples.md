# Comments: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:comments",
      "description": "Display user comments and status updates.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3003,
        "componentId": "list-entry:comments",
        "sourceFile": "shared-components/lists.apx",
        "line": 541,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3003/region:overview",
      "description": "The Comments component is used to display user comments and status updates.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3003,
        "componentId": "page:3003/region:overview",
        "sourceFile": "pages/p03003-comments-component.apx",
        "line": 628,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:3003/region:instructions",
      "pageId": 3003,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "CommentsDemo",
      "targetId": "page:3003/region:components-comments",
      "status": "resolved"
    },
    {
      "sourceId": "page:3003/region:sample-sql-query",
      "pageId": 3003,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "ChatDemo",
      "targetId": "page:3003/region:comments-b",
      "status": "resolved"
    }
  ]
}
```
