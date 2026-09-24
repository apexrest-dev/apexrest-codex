# Avatar: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:avatar",
      "description": "Display an icon, image, or initials.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3001,
        "componentId": "list-entry:avatar",
        "sourceFile": "shared-components/lists.apx",
        "line": 252,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3001/region:overview",
      "description": "Avatars are useful for displaying an icon, image, or initials within a region. An Avatar can be used to display a single (partial) avatar, as multiple (report) avatars, or can be applied as a column type or in report templates to display an avatar for each report row. The multiple (report) display type is useful for being able to display multiple avatars as one region on a page outside of a report.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3001,
        "componentId": "page:3001/region:overview",
        "sourceFile": "pages/p03001-avatar-component.apx",
        "line": 559,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:3001/region:sample-sql-query-multiple-report",
      "pageId": 3001,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "multipleDemo",
      "targetId": "page:3001/region:avatar",
      "status": "resolved"
    }
  ]
}
```
