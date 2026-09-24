# Menu Bar: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:menu-bar",
      "description": "Display a menu bar control.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1305,
        "componentId": "list-entry:menu-bar",
        "sourceFile": "shared-components/lists.apx",
        "line": 830,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1305/region:overview",
      "description": "This list template is used to display a menu bar control and is useful for building pages with advanced interaction. Note that the region containing the menu bar must be sufficiently tall to accomodate the menus.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1305,
        "componentId": "page:1305/region:overview",
        "sourceFile": "pages/p01305-menu-bar-list.apx",
        "line": 175,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1305/region:instructions",
      "pageId": 1305,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1305/region:demo",
      "status": "resolved"
    },
    {
      "sourceId": "page:1305/region:template-options",
      "pageId": 1305,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1305/region:demo",
      "status": "resolved"
    }
  ]
}
```
