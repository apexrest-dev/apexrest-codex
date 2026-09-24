# Media List: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:media-list",
      "description": "Design lists that involve an icon, heading, description, and a badge.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3005,
        "componentId": "list-entry:media-list",
        "sourceFile": "shared-components/lists.apx",
        "line": 810,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3005/region:configuration",
      "description": "Region\nType: Media List\nTemplate: Blank with Attributes (No Grid)\nAttributes\nEach row has a Title and Description. Both Avatar and Badge are displayed.\nAvatar\nType: Icon\nIcon: fa-cloud\nShape: Rounded\nBadge\nEach badge has a label and value that each maps to a column from the region source.\nThe label for each badge is set to not display, so that only the badge value is visible.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3005,
        "componentId": "page:3005/region:configuration",
        "sourceFile": "pages/p03005-media-list-component.apx",
        "line": 198,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "1764677737293185863"
    },
    {
      "id": "page:3005/region:overview",
      "description": "Media List is a very common design pattern that has an icon, heading, description, and a badge.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3005,
        "componentId": "page:3005/region:overview",
        "sourceFile": "pages/p03005-media-list-component.apx",
        "line": 283,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:3005/region:instructions",
      "pageId": 3005,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "MediaListDemo",
      "targetId": "page:3005/region:components-media-list",
      "status": "resolved"
    },
    {
      "sourceId": "page:3005/region:sample-sql-query",
      "pageId": 3005,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "MediaListDemo",
      "targetId": "page:3005/region:components-media-list",
      "status": "resolved"
    }
  ]
}
```
