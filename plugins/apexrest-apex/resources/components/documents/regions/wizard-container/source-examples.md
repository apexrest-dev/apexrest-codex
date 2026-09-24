# Wizard Container: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:wizard",
      "description": "Contain the Wizard Progress List and forms using this region template.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1208,
        "componentId": "list-entry:wizard",
        "sourceFile": "shared-components/lists.apx",
        "line": 1101,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1208/region:overview",
      "description": "Wizards can be very useful in simplifying complex flows into smaller, more manageable steps. This page describes full page Wizards, modal dialog Wizards, and the Wizard Progress list template.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1208,
        "componentId": "page:1208/region:overview",
        "sourceFile": "pages/p01208-wizard-region.apx",
        "line": 138,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1208/region:instructions",
      "pageId": 1208,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1208/region:wizard",
      "status": "resolved"
    },
    {
      "sourceId": "page:1208/region:template-options",
      "pageId": 1208,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1208/region:wizard",
      "status": "resolved"
    }
  ]
}
```
