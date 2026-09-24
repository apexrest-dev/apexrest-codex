# reflow report: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:reflow-report",
      "description": "Display data vertically to save space when screen size becomes small.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1710,
        "componentId": "list-entry:reflow-report",
        "sourceFile": "shared-components/lists.apx",
        "line": 925,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1710/region:overview",
      "description": "The Reflow Report provides another responsive table-based report where on small screens, the table columns become stacked and each row becomes a block of data.\nThis is an alternative display to the Column Toggle Report and can be useful when you want to display all columns of a tabular report in a way that works well for small screens.\nChoose Reflow Report as Region type.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1710,
        "componentId": "page:1710/region:overview",
        "sourceFile": "pages/p01710-reflow-report.apx",
        "line": 287,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1710/region:instructions",
      "pageId": 1710,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "DemoA",
      "targetId": "page:1710/region:demo",
      "status": "resolved"
    },
    {
      "sourceId": "page:1710/region:template-options",
      "pageId": 1710,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "DemoA",
      "targetId": "page:1710/region:demo",
      "status": "resolved"
    }
  ]
}
```
