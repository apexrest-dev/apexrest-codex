# Buttons Container: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:button-container",
      "description": "Organize buttons, toolbars, and simple horizontal forms.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1250,
        "componentId": "list-entry:button-container",
        "sourceFile": "shared-components/lists.apx",
        "line": 348,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1250/region:overview",
      "description": "Organize your button bars, toolbars, and simple horizontal forms.\nSet Buttons Container as Region Template.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1250,
        "componentId": "page:1250/region:overview",
        "sourceFile": "pages/p01250-button-container.apx",
        "line": 159,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1411/region:overview",
      "description": "Faceted search allows you to filter different columns on the left side of the page and report on the right side of the page, to get only the data that you need.\nYou can create a faceted search page with either the Create Application Wizard or Create Page Wizard.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1411,
        "componentId": "page:1411/region:overview",
        "sourceFile": "pages/p01411-reports-faceted-search.apx",
        "line": 257,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1914/region:overview",
      "description": "This modal dialog page stretches to fit the window and is useful for displaying large reports, charts, and other information where maximum screen real estate is desired.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1914,
        "componentId": "page:1914/region:overview",
        "sourceFile": "pages/p01914-modal-dialog-demo-fit-window.apx",
        "line": 42,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1250/region:instructions",
      "pageId": 1250,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1250/region:button-container-demo",
      "status": "resolved"
    },
    {
      "sourceId": "page:1250/region:template-options",
      "pageId": 1250,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1250/region:button-container-demo",
      "status": "resolved"
    }
  ]
}
```
