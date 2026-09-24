# Content Row: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:content-row",
      "description": "Display content using a column for selection, such as a checkbox or radio button, an icon, and actions.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3004,
        "componentId": "list-entry:content-row",
        "sourceFile": "shared-components/lists.apx",
        "line": 580,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3004/region:configuration",
      "description": "Region\nType: Content Row\nTemplate Blank with Attributes (No Grid)\nAttributes\nEach row has a Title, Description, Miscellaneous, and Actions\nAvatar\nType: Icon\nIcon: the ICON_CLASS column\nShape: No Shape\nSize: Small\nPrimary Actions\nTwo actions are in the Primary Actions position for each content row item.\nThe first action uses the Button template, with Display Type set to Icon and the Icon and Hot properties set.\nThe second action uses the Menu template, and has three sub actions: Create, Duplicate, amd Delete.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3004,
        "componentId": "page:3004/region:configuration",
        "sourceFile": "pages/p03004-content-row-component.apx",
        "line": 292,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "1764677404860185859"
    },
    {
      "id": "page:3004/region:overview",
      "description": "Content Row is a theme component that is suitable for displaying most types of content. This component features a column for an icon, title and description, miscellaneous attributes, and actions.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3004,
        "componentId": "page:3004/region:overview",
        "sourceFile": "pages/p03004-content-row-component.apx",
        "line": 377,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:3004/region:instructions",
      "pageId": 3004,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "ContentRowDemo",
      "targetId": "page:3004/region:components-content-row",
      "status": "resolved"
    },
    {
      "sourceId": "page:3004/region:sample-sql-query",
      "pageId": 3004,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "ContentRowDemo",
      "targetId": "page:3004/region:components-content-row",
      "status": "resolved"
    }
  ]
}
```
