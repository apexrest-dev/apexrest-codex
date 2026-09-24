# Calendar: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:calendar",
      "description": "Display a calendar based on the Full Calendar library that supports drag and drop, multiple views, and more.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1800,
        "componentId": "list-entry:calendar",
        "sourceFile": "shared-components/lists.apx",
        "line": 387,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1800/region:overview",
      "description": "This calendar is based on the Full Calendar library and supports drag and drop, multiple views, and more.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1800,
        "componentId": "page:1800/region:overview",
        "sourceFile": "pages/p01800-calendars.apx",
        "line": 153,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1800/region:instructions",
      "pageId": 1800,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1800/region:demo",
      "status": "resolved"
    },
    {
      "sourceId": "page:1800/region:sample-sql-query",
      "pageId": 1800,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1800/region:demo",
      "status": "resolved"
    }
  ]
}
```
