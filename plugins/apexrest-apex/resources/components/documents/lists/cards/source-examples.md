# Cards: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:card-templates",
      "description": "Style regions like Classic Reports or Lists to look like a Cards region.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3100,
        "componentId": "list-entry:card-templates",
        "sourceFile": "shared-components/lists.apx",
        "line": 425,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3100/region:overview",
      "description": "Cards are useful for presenting a variety of information in small blocks and can be heavily customized. They can be displayed in three styles, with icons or initials, and you can control the layout. With Universal Theme, you can style both Lists or Classic Reports regions to appear as cards by setting the appropriate template.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3100,
        "componentId": "page:3100/region:overview",
        "sourceFile": "pages/p03100-card-templates.apx",
        "line": 481,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:3100/region:instructions",
      "pageId": 3100,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:3100/region:cards-list",
      "status": "resolved"
    },
    {
      "sourceId": "page:3100/region:template-options",
      "pageId": 3100,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:3100/region:cards-list",
      "status": "resolved"
    }
  ]
}
```
