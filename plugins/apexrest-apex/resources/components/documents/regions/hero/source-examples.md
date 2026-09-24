# Hero: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:hero",
      "description": "Capture attention and display an icon, heading, sub-headings, and buttons on a homepage, dashboard, and other introductory-style pages.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1203,
        "componentId": "list-entry:hero",
        "sourceFile": "shared-components/lists.apx",
        "line": 675,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1203/region:overview",
      "description": "Capture your users' attention on homepage, dashboard, and other introductory-style pages. This region template displays an icon, heading and sub headings, and buttons.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1203,
        "componentId": "page:1203/region:overview",
        "sourceFile": "pages/p01203-hero-region.apx",
        "line": 155,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1203/region:instructions",
      "pageId": 1203,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1203/region:hero",
      "status": "resolved"
    },
    {
      "sourceId": "page:1203/region:template-options",
      "pageId": 1203,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1203/region:hero",
      "status": "resolved"
    }
  ]
}
```
