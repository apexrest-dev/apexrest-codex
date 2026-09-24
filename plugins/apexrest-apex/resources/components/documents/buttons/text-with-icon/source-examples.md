# Text With Icon Button: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:alert",
      "description": "Display alerts, confirmations, and other action-oriented messages.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1202,
        "componentId": "list-entry:alert",
        "sourceFile": "shared-components/lists.apx",
        "line": 232,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:button",
      "description": "Display text, icon or both within a button.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1500,
        "componentId": "list-entry:button",
        "sourceFile": "shared-components/lists.apx",
        "line": 329,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:menu-popup",
      "description": "Display a menu that pops up on a page by using Lists and associating a button with the menu.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1306,
        "componentId": "list-entry:menu-popup",
        "sourceFile": "shared-components/lists.apx",
        "line": 849,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:navigation-bar",
      "description": "Determine how users navigate within an application.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 407,
        "componentId": "list-entry:navigation-bar",
        "sourceFile": "shared-components/lists.apx",
        "line": 887,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:407/region:overview",
      "description": "Navigation is an important part of your application and can determine the how your users navigate within your application. There are two navigation concepts that are key for Universal Theme: Navigation Menus and Navigation Bar.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 407,
        "componentId": "page:407/region:overview",
        "sourceFile": "pages/p00407-navigation.apx",
        "line": 169,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:422/region:overview",
      "description": "Many mobile apps share a common pattern for placement of buttons and other content. This content is typically positioned on the header or footer of the page which is easily accessible and on screen for quick actions. This page explains how you can apply this pattern for your own apps.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 422,
        "componentId": "page:422/region:overview",
        "sourceFile": "pages/p00422-headers-and-footers.apx",
        "line": 123,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:425/region:overview",
      "description": "APEX 18.1 introduced three new Region Types that have been ported from the jQuery Mobile user interface. These components are light weight, mobile friendly, and can help to simplify your apps transition from jQuery Mobile to Universal Theme.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 425,
        "componentId": "page:425/region:overview",
        "sourceFile": "pages/p00425-jquery-mobile-components.apx",
        "line": 248,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1202/region:overview",
      "description": "Use the Alert region template to display alerts, confirmations, and other action-oriented messages within the context of a page.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1202,
        "componentId": "page:1202/region:overview",
        "sourceFile": "pages/p01202-alert-region.apx",
        "line": 289,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1306/region:overview",
      "description": "You can easily create a popup menu in your application by using Lists and associating a button with the menu. To create a popup menu in your application, you must first have a list region on your page which contains the menu items. Then you need to associate a button on your page with the menu so it will open the menu when clicked.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1306,
        "componentId": "page:1306/region:overview",
        "sourceFile": "pages/p01306-menu-popup.apx",
        "line": 203,
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
      "id": "page:1500/region:overview",
      "description": "Universal Theme provides several options for adding buttons to your applications. This page introduces you to the three button templates and the various template options.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1500,
        "componentId": "page:1500/region:overview",
        "sourceFile": "pages/p01500-buttons.apx",
        "line": 311,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1500/region:instructions-2",
      "pageId": 1500,
      "helperType": "componentInstructions",
      "targetType": "button",
      "targetKey": "Button3",
      "targetId": "page:1500/button:text-with-icon",
      "status": "resolved"
    },
    {
      "sourceId": "page:1500/region:template-options-2",
      "pageId": 1500,
      "helperType": "previewTemplateOptions",
      "targetType": "button",
      "targetKey": "Button3",
      "targetId": "page:1500/button:text-with-icon",
      "status": "resolved"
    }
  ]
}
```
