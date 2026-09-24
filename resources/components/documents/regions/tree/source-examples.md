# Tree: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:tree",
      "description": "Perform hierarchical navigation control based on a SQL query.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1901,
        "componentId": "list-entry:tree",
        "sourceFile": "shared-components/lists.apx",
        "line": 1062,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1901/region:overview",
      "description": "Tree is a hierarchical navigational control based on a SQL query executed at runtime.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1901,
        "componentId": "page:1901/region:overview",
        "sourceFile": "pages/p01901-tree.apx",
        "line": 145,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1901/region:instructions",
      "pageId": 1901,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1901/region:demo-2",
      "status": "resolved"
    },
    {
      "sourceId": "page:1901/region:sample-sql-query",
      "pageId": 1901,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1901/region:demo-2",
      "status": "resolved"
    }
  ]
}
```
