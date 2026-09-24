# Badge List: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:badges-list",
      "description": "Display badges or counters.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1304,
        "componentId": "list-entry:badges-list",
        "sourceFile": "shared-components/lists.apx",
        "line": 290,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1304/region:overview",
      "description": "This list template is useful for displaying badges or counters.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1304,
        "componentId": "page:1304/region:overview",
        "sourceFile": "pages/p01304-badges-list.apx",
        "line": 177,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1304/region:instructions",
      "pageId": 1304,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "BadgeDemo",
      "targetId": "page:1304/region:demo",
      "status": "resolved"
    },
    {
      "sourceId": "page:1304/region:template-options",
      "pageId": 1304,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "BadgeDemo",
      "targetId": "page:1304/region:demo",
      "status": "resolved"
    }
  ]
}
```
