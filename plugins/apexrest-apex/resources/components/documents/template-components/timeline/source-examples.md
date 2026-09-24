# Timeline: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:timeline",
      "description": "Display recent updates and interactions within an application.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3006,
        "componentId": "list-entry:timeline",
        "sourceFile": "shared-components/lists.apx",
        "line": 1022,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3006/region:configuration",
      "description": "Region\nType: Timeline\nTemplate: Blank with Attributes (No Grid)\nAttributes\nEach row has a User Name, Date, Title, and Description. Both Avatar and Badge are displayed, with Avatar representing the user and Badge representing the project status.\nAvatar\nType: Icon\nIcon: fa-user\nShape: Circular\nBadge\nEach badge has a value, state, and icon that each maps to a column from the region source.\nThe label for each badge is set to not display, so that only the badge value is visible.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3006,
        "componentId": "page:3006/region:configuration",
        "sourceFile": "pages/p03006-timeline-component.apx",
        "line": 218,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "1764678213196185867"
    },
    {
      "id": "page:3006/region:overview",
      "description": "Timeline is a theme component new in APEX 23.1 that is useful for displaying a series of events. It can be used to showcase the history of a given widget, recent updates, or new interactions within an application.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3006,
        "componentId": "page:3006/region:overview",
        "sourceFile": "pages/p03006-timeline-component.apx",
        "line": 302,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:3006/region:instructions",
      "pageId": 3006,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "TimelineDemo",
      "targetId": "page:3006/region:components-timeline",
      "status": "resolved"
    },
    {
      "sourceId": "page:3006/region:sample-sql-query",
      "pageId": 3006,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "TimelineDemo",
      "targetId": "page:3006/region:components-timeline",
      "status": "resolved"
    }
  ]
}
```
