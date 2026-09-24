# Image: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:image",
      "description": "Display a single image without text in a region.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1210,
        "componentId": "list-entry:image",
        "sourceFile": "shared-components/lists.apx",
        "line": 695,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1210/region:overview",
      "description": "Display a single image within a region. The Image region template only supports images and will not display text.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1210,
        "componentId": "page:1210/region:overview",
        "sourceFile": "pages/p01210-region-image.apx",
        "line": 100,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1210/region:instructions",
      "pageId": 1210,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1210/region:region-image",
      "status": "resolved"
    },
    {
      "sourceId": "page:1210/region:template-options",
      "pageId": 1210,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1210/region:region-image",
      "status": "resolved"
    }
  ]
}
```
