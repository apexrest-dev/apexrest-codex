# Drawer: parameters

component:pages/drawer

Parameter identities include their component context and APEXlang path. UI labels alone are not unique. Raw database return values and DSL enum values may differ. Missing descriptions or unresolved paths are not inferred as supported syntax.

Region template options and component-template options are independent surfaces. Current selections do not establish defaults. #DEFAULT# selects template defaults; it is not a CSS class.

```json
{
  "templateOptions": [
    {
      "id": "template-option:PAGE/BOTTOM",
      "name": "BOTTOM",
      "label": "Bottom",
      "cssClasses": [
        "t-PageBody--verticalBottom"
      ],
      "groupId": "template-group:page/vertical-alignment",
      "templateTypes": [
        "PAGE"
      ],
      "templates": {},
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Sets the vertical alignment of the page body to bottom.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:PAGE/DEFERRED_PAGE_RENDERING",
      "name": "DEFERRED_PAGE_RENDERING",
      "label": "Deferred Page Rendering",
      "cssClasses": [
        "t-DeferredRendering"
      ],
      "groupId": null,
      "templateTypes": [
        "PAGE"
      ],
      "templates": {},
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Defer page rendering until all page components have finished loading.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:page/drawer/DRAWER_SIZE_EXTRA_LARGE",
      "name": "DRAWER_SIZE_EXTRA_LARGE",
      "label": "Extra Large",
      "cssClasses": [
        "js-dialog-class-t-Drawer--xl"
      ],
      "groupId": "template-group:page/dialog-size",
      "templateTypes": [
        "PAGE"
      ],
      "templates": {
        "page": "Drawer"
      },
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Extra Large: applies js-dialog-class-t-Drawer--xl within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:page/drawer/DRAWER_SIZE_LARGE",
      "name": "DRAWER_SIZE_LARGE",
      "label": "Large",
      "cssClasses": [
        "js-dialog-class-t-Drawer--lg"
      ],
      "groupId": "template-group:page/dialog-size",
      "templateTypes": [
        "PAGE"
      ],
      "templates": {
        "page": "Drawer"
      },
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Large: applies js-dialog-class-t-Drawer--lg within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:page/drawer/DRAWER_SIZE_MEDIUM",
      "name": "DRAWER_SIZE_MEDIUM",
      "label": "Medium",
      "cssClasses": [
        "js-dialog-class-t-Drawer--md"
      ],
      "groupId": "template-group:page/dialog-size",
      "templateTypes": [
        "PAGE"
      ],
      "templates": {
        "page": "Drawer"
      },
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Medium: applies js-dialog-class-t-Drawer--md within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:page/drawer/DRAWER_SIZE_SMALL",
      "name": "DRAWER_SIZE_SMALL",
      "label": "Small",
      "cssClasses": [
        "js-dialog-class-t-Drawer--sm"
      ],
      "groupId": "template-group:page/dialog-size",
      "templateTypes": [
        "PAGE"
      ],
      "templates": {
        "page": "Drawer"
      },
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Small: applies js-dialog-class-t-Drawer--sm within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:page/drawer/POSITION_BOTTOM",
      "name": "POSITION_BOTTOM",
      "label": "Bottom",
      "cssClasses": [
        "js-dialog-class-t-Drawer--pullOutBottom"
      ],
      "groupId": "template-group:page/page-position",
      "templateTypes": [
        "PAGE"
      ],
      "templates": {
        "page": "Drawer"
      },
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Bottom: applies js-dialog-class-t-Drawer--pullOutBottom within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:page/drawer/POSITION_END",
      "name": "POSITION_END",
      "label": "End",
      "cssClasses": [
        "js-dialog-class-t-Drawer--pullOutEnd"
      ],
      "groupId": "template-group:page/page-position",
      "templateTypes": [
        "PAGE"
      ],
      "templates": {
        "page": "Drawer"
      },
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "End: applies js-dialog-class-t-Drawer--pullOutEnd within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:page/drawer/POSITION_START",
      "name": "POSITION_START",
      "label": "Start",
      "cssClasses": [
        "js-dialog-class-t-Drawer--pullOutStart"
      ],
      "groupId": "template-group:page/page-position",
      "templateTypes": [
        "PAGE"
      ],
      "templates": {
        "page": "Drawer"
      },
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Start: applies js-dialog-class-t-Drawer--pullOutStart within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:page/drawer/POSITION_TOP",
      "name": "POSITION_TOP",
      "label": "Top",
      "cssClasses": [
        "js-dialog-class-t-Drawer--pullOutTop"
      ],
      "groupId": "template-group:page/page-position",
      "templateTypes": [
        "PAGE"
      ],
      "templates": {
        "page": "Drawer"
      },
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Top: applies js-dialog-class-t-Drawer--pullOutTop within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:page/drawer/REMOVE_BODY_PADDING",
      "name": "REMOVE_BODY_PADDING",
      "label": "Remove Body Padding",
      "cssClasses": [
        "t-Dialog--noPadding"
      ],
      "groupId": null,
      "templateTypes": [
        "PAGE"
      ],
      "templates": {
        "page": "Drawer"
      },
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Remove Body Padding: applies t-Dialog--noPadding.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:PAGE/MIDDLE",
      "name": "MIDDLE",
      "label": "Middle",
      "cssClasses": [
        "t-PageBody--verticalMiddle"
      ],
      "groupId": "template-group:page/vertical-alignment",
      "templateTypes": [
        "PAGE"
      ],
      "templates": {},
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Sets the vertical alignment of the page body to middle.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:PAGE/REMOVE_PADDING",
      "name": "REMOVE_PADDING",
      "label": "Remove Padding",
      "cssClasses": [
        "t-PageBody--noContentPadding"
      ],
      "groupId": "template-group:page/content-padding",
      "templateTypes": [
        "PAGE"
      ],
      "templates": {},
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Removes padding from the content region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:PAGE/TOP",
      "name": "TOP",
      "label": "Top",
      "cssClasses": [
        "t-PageBody--verticalTop"
      ],
      "groupId": "template-group:page/vertical-alignment",
      "templateTypes": [
        "PAGE"
      ],
      "templates": {},
      "virtualTemplateType": "PAGE",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Sets the vertical alignment of the page body to top.",
      "descriptionOrigin": "oracle-upl"
    }
  ],
  "templateOptionGroups": [
    {
      "id": "template-group:page/content-padding",
      "sourceId": "2026622673484748764",
      "name": "CONTENT_PADDING",
      "label": "Content Padding",
      "templateTypes": [
        "PAGE"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Sets the Content Body padding for the page.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:page/dialog-size",
      "sourceId": "1665547098626142300",
      "name": "DIALOG_SIZE",
      "label": "Size",
      "templateTypes": [
        "PAGE"
      ],
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Size choices for PAGE templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:page/page-position",
      "sourceId": "1665544429227163166",
      "name": "PAGE_POSITION",
      "label": "Position",
      "templateTypes": [
        "PAGE"
      ],
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Sets the position of the page.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:page/vertical-alignment",
      "sourceId": "2282646702284105",
      "name": "CONTENT_VERTICAL_ALIGNMENT",
      "label": "Content Vertical Alignment",
      "templateTypes": [
        "PAGE"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Sets the Vertical Alignment for the Body of the Page",
      "descriptionOrigin": "oracle-upl"
    }
  ],
  "templateDefaults": [
    {
      "id": "page-template:drawer",
      "type": "page",
      "name": "Drawer",
      "key": "drawer",
      "internalName": "DRAWER",
      "defaultOptions": [],
      "presetOptions": [
        "js-dialog-class-t-Drawer--pullOutEnd"
      ]
    }
  ],
  "utAttributes": [],
  "utAttributeValues": [],
  "nativeParameters": [
    {
      "id": "mmd:5000:1",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "1",
      "builderLabel": "Name",
      "apexlangPath": "page.name",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Name (text) in page.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:4",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "4",
      "builderLabel": "Comments",
      "apexlangPath": "page.comments.comments",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Comments (text editor) in page.comments.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:8",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "8",
      "builderLabel": "Alias",
      "apexlangPath": "page.alias",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 80,
      "description": "Alias (text) in page.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:9",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "9",
      "builderLabel": "Page Group",
      "apexlangPath": "page.pageGroup",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "11918001",
            "path": "app.type",
            "hasToExist": true,
            "values": [
              "STANDARD",
              "PATTERN"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Page Group (component) in page.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:10",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "10",
      "builderLabel": "Page Mode",
      "apexlangPath": "page.appearance.pageMode",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "NORMAL",
      "values": [
        {
          "name": "normal",
          "returnValue": "NORMAL",
          "label": "Normal"
        },
        {
          "name": "modalDialog",
          "returnValue": "MODAL",
          "label": "Modal Dialog"
        },
        {
          "name": "nonModalDialog",
          "returnValue": "NON_MODAL",
          "label": "Non-Modal Dialog"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Page Mode (select list) in page.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:11",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "11",
      "builderLabel": "Page Template",
      "apexlangPath": "page.appearance.pageTemplate",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "10",
            "path": "page.appearance.pageMode",
            "hasToExist": true,
            "value": "NORMAL"
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Page Template (component) in page.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:13",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "13",
      "builderLabel": "Title",
      "apexlangPath": "page.title",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 255,
      "description": "Title (text) in page.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:14",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "14",
      "builderLabel": "Cursor Focus",
      "apexlangPath": "page.navigation.cursorFocus",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "AUTO_FIRST_ITEM",
      "values": [
        {
          "name": "firstItemOnPage",
          "returnValue": "AUTO_FIRST_ITEM",
          "label": "First item on page"
        },
        {
          "name": "doNotFocusCursor",
          "returnValue": "NO_FIRST_ITEM",
          "label": "Do not focus cursor"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Cursor Focus (select list) in page.navigation.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:15",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "15",
      "builderLabel": "File URLs",
      "apexlangPath": "page.javaScript.fileUrls",
      "type": "FILE URLS JAVASCRIPT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 4000,
      "description": "File URLs (file urls javascript) in page.javaScript.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:16",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "16",
      "builderLabel": "Function and Global Variable Declaration",
      "apexlangPath": "page.javaScript.functionAndGlobalVariableDeclaration",
      "type": "JAVASCRIPT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Function and Global Variable Declaration (javascript) in page.javaScript.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:17",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "17",
      "builderLabel": "Execute when Page Loads",
      "apexlangPath": "page.javaScript.executeWhenPageLoads",
      "type": "JAVASCRIPT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Execute when Page Loads (javascript) in page.javaScript.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:18",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "18",
      "builderLabel": "Include Standard JavaScript and CSS",
      "apexlangPath": "page.javaScript.includeStandardJavaScriptAndCss",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Include Standard JavaScript and CSS (yes no) in page.javaScript.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:19",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "19",
      "builderLabel": "HTML Header",
      "apexlangPath": "page.htmlHeader.htmlHeader",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 32767,
      "description": "HTML Header (html) in page.htmlHeader.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:20",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "20",
      "builderLabel": "Page HTML Body Attribute",
      "apexlangPath": "page.htmlHeader.pageHtmlBodyAttribute",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page HTML Body Attribute (text editor) in page.htmlHeader.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:21",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "21",
      "builderLabel": "Header Text",
      "apexlangPath": "page.headerAndFooter.headerText",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Header Text (html) in page.headerAndFooter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:22",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "22",
      "builderLabel": "Body Header",
      "apexlangPath": "page.headerAndFooter.bodyHeader",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Body Header (html) in page.headerAndFooter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:23",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "23",
      "builderLabel": "Footer Text",
      "apexlangPath": "page.headerAndFooter.footerText",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Footer Text (html) in page.headerAndFooter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:24",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "24",
      "builderLabel": "Authorization Scheme",
      "apexlangPath": "page.security.authorizationScheme",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "mustNotBePublicUser",
          "returnValue": "MUST_NOT_BE_PUBLIC_USER",
          "label": "MODEL.LOV.MUST_NOT_BE_PUBLIC_USER"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Authorization Scheme (component) in page.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:25",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "25",
      "builderLabel": "Authentication",
      "apexlangPath": "page.security.authentication",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "N",
      "values": [
        {
          "name": "required",
          "returnValue": "N",
          "label": "Page Requires Authentication"
        },
        {
          "name": "public",
          "returnValue": "Y",
          "label": "Page Is Public"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Authentication (select list) in page.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:26",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "26",
      "builderLabel": "Deep Linking",
      "apexlangPath": "page.security.deepLinking",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "true",
          "returnValue": "Y",
          "label": "Enabled"
        },
        {
          "name": "false",
          "returnValue": "N",
          "label": "Disabled"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Deep Linking (select list) in page.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:27",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "27",
      "builderLabel": "Page Access Protection",
      "apexlangPath": "page.security.pageAccessProtection",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "N",
      "values": [
        {
          "name": "unrestricted",
          "returnValue": "N",
          "label": "Unrestricted"
        },
        {
          "name": "argumentsMustHaveChecksum",
          "returnValue": "C",
          "label": "Arguments Must Have Checksum"
        },
        {
          "name": "noArgumentsSupported",
          "returnValue": "U",
          "label": "No Arguments Supported"
        },
        {
          "name": "noUrlAccess",
          "returnValue": "D",
          "label": "No URL Access"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Page Access Protection (select list) in page.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:28",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "28",
      "builderLabel": "Enable duplicate page submissions",
      "apexlangPath": "page.advanced.enableDuplicatePageSubmissions",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "Y",
      "values": [
        {
          "name": "false",
          "returnValue": "N",
          "label": "No - Prevent page from being re-posted"
        },
        {
          "name": "true",
          "returnValue": "Y",
          "label": "Yes - Enable page to be re-posted"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Enable duplicate page submissions (select list) in page.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:29",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "29",
      "builderLabel": "On duplicate page submissions go to this URL",
      "apexlangPath": "page.advanced.duplicateSubmissionUrl",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "28",
            "path": "page.advanced.enableDuplicatePageSubmissions",
            "hasToExist": true,
            "value": "N"
          }
        ]
      },
      "maxLength": 4000,
      "description": "On duplicate page submissions go to this URL (text) in page.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:30",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "30",
      "builderLabel": "Form Auto Complete",
      "apexlangPath": "page.security.formAutoComplete",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "ON",
      "values": [
        {
          "name": "true",
          "returnValue": "ON",
          "label": "On"
        },
        {
          "name": "false",
          "returnValue": "OFF",
          "label": "Off"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Form Auto Complete (select list) in page.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:32",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "32",
      "builderLabel": "Cache Timeout",
      "apexlangPath": "page.serverCache.cacheTimeout",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "21600",
      "values": [
        {
          "name": "10Seconds",
          "returnValue": "10",
          "label": "10 seconds"
        },
        {
          "name": "1Minute",
          "returnValue": "60",
          "label": "1 minute"
        },
        {
          "name": "10Minutes",
          "returnValue": "600",
          "label": "10 minutes"
        },
        {
          "name": "30Minutes",
          "returnValue": "1800",
          "label": "30 minutes"
        },
        {
          "name": "1Hour",
          "returnValue": "3600",
          "label": "1 hour"
        },
        {
          "name": "2Hours",
          "returnValue": "7200",
          "label": "2 hours"
        },
        {
          "name": "3Hours",
          "returnValue": "10800",
          "label": "3 hours"
        },
        {
          "name": "4Hours",
          "returnValue": "14400",
          "label": "4 hours"
        },
        {
          "name": "6Hours",
          "returnValue": "21600",
          "label": "6 hours"
        },
        {
          "name": "12Hours",
          "returnValue": "43200",
          "label": "12 hours"
        },
        {
          "name": "1Day",
          "returnValue": "86400",
          "label": "1 day"
        },
        {
          "name": "2Days",
          "returnValue": "172800",
          "label": "2 days"
        },
        {
          "name": "3Days",
          "returnValue": "259200",
          "label": "3 days"
        },
        {
          "name": "4Days",
          "returnValue": "345600",
          "label": "4 days"
        },
        {
          "name": "1Week",
          "returnValue": "604800",
          "label": "1 week"
        },
        {
          "name": "2Weeks",
          "returnValue": "1209600",
          "label": "2 weeks"
        },
        {
          "name": "4Weeks",
          "returnValue": "2419200",
          "label": "4 Weeks"
        },
        {
          "name": "10Weeks",
          "returnValue": "6048000",
          "label": "10 Weeks"
        },
        {
          "name": "1Year",
          "returnValue": "31536000",
          "label": "1 Year"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "222",
            "path": "page.serverCache.caching",
            "hasToExist": true,
            "value": "NOCACHE"
          }
        ]
      },
      "maxLength": null,
      "description": "Cache Timeout (select list) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:33",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "33",
      "builderLabel": "Browser Cache",
      "apexlangPath": "page.security.browserCache",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "true",
          "returnValue": "Y",
          "label": "Enabled"
        },
        {
          "name": "false",
          "returnValue": "N",
          "label": "Disabled"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Browser Cache (select list) in page.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:38",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "38",
      "builderLabel": "Build Option",
      "apexlangPath": "page.config.buildOption",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Build Option (component) in page.config.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:39",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "39",
      "builderLabel": "In-line Error Notification Text",
      "apexlangPath": "page.errorHandling.inLineErrorNotificationText",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 4000,
      "description": "In-line Error Notification Text (text editor) in page.errorHandling.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:41",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "41",
      "builderLabel": "Error Handling Function Name",
      "apexlangPath": "page.errorHandling.errorHandlingFunctionName",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 255,
      "description": "Error Handling Function Name (text) in page.errorHandling.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:43",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "43",
      "builderLabel": "Enable Meta Tags",
      "apexlangPath": "page.advanced.enableMetaTags",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "25",
            "path": "page.security.authentication",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Enable Meta Tags (yes no) in page.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:44",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "44",
      "builderLabel": "Media Type",
      "apexlangPath": "page.appearance.mediaType",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 255,
      "description": "Media Type (text) in page.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:45",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "45",
      "builderLabel": "File URLs",
      "apexlangPath": "page.css.fileUrls",
      "type": "FILE URLS CSS",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 4000,
      "description": "File URLs (file urls css) in page.css.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:46",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "46",
      "builderLabel": "Inline",
      "apexlangPath": "page.css.inline",
      "type": "CSS",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Inline (css) in page.css.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:47",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "47",
      "builderLabel": "Width",
      "apexlangPath": "page.dialog.width",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "10",
            "path": "page.appearance.pageMode",
            "hasToExist": true,
            "values": [
              "MODAL",
              "NON_MODAL"
            ]
          }
        ]
      },
      "maxLength": 20,
      "description": "Width (text) in page.dialog.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:48",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "48",
      "builderLabel": "Maximum Width",
      "apexlangPath": "page.dialog.maxWidth",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "10",
            "path": "page.appearance.pageMode",
            "hasToExist": true,
            "values": [
              "MODAL",
              "NON_MODAL"
            ]
          }
        ]
      },
      "maxLength": 20,
      "description": "Maximum Width (text) in page.dialog.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:49",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "49",
      "builderLabel": "Attributes",
      "apexlangPath": "page.dialog.attributes",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "10",
            "path": "page.appearance.pageMode",
            "hasToExist": true,
            "values": [
              "MODAL",
              "NON_MODAL"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Attributes (combobox) in page.dialog.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:195",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "195",
      "builderLabel": "Height",
      "apexlangPath": "page.dialog.height",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "10",
            "path": "page.appearance.pageMode",
            "hasToExist": true,
            "values": [
              "MODAL",
              "NON_MODAL"
            ]
          }
        ]
      },
      "maxLength": 20,
      "description": "Height (text) in page.dialog.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:222",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "222",
      "builderLabel": "Caching",
      "apexlangPath": "page.serverCache.caching",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "NOCACHE",
      "values": [
        {
          "name": "false",
          "returnValue": "NOCACHE",
          "label": "Disabled"
        },
        {
          "name": "true",
          "returnValue": "CACHE",
          "label": "Enabled"
        },
        {
          "name": "cacheByUser",
          "returnValue": "USER",
          "label": "Cache By User"
        },
        {
          "name": "cacheBySession",
          "returnValue": "SESSION",
          "label": "Cache By Session"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Caching (select list) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:254",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "254",
      "builderLabel": "Dialog Template",
      "apexlangPath": "page.appearance.dialogTemplate",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "10",
            "path": "page.appearance.pageMode",
            "hasToExist": true,
            "values": [
              "MODAL",
              "NON_MODAL"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Dialog Template (component) in page.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:255",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "255",
      "builderLabel": "Override User Interface Level",
      "apexlangPath": "page.navigationMenu.overrideUserInterfaceLevel",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "263",
            "path": "app.userInterface.currentTheme",
            "hasToExist": true,
            "values": [
              "HAS_LIST_NAVIGATION"
            ]
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Override User Interface Level (yes no) in page.navigationMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:256",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "256",
      "builderLabel": "List",
      "apexlangPath": "page.navigationMenu.list",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "255",
            "path": "page.navigationMenu.overrideUserInterfaceLevel",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "List (component) in page.navigationMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:257",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "257",
      "builderLabel": "List Template",
      "apexlangPath": "page.navigationMenu.listTemplate",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "256",
            "path": "page.navigationMenu.list",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "List Template (component) in page.navigationMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:510",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "510",
      "builderLabel": "Page",
      "apexlangPath": "page.page",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 10,
      "description": "Page (number) in page.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:660",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "660",
      "builderLabel": "CSS Classes",
      "apexlangPath": "page.dialog.cssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "10",
            "path": "page.appearance.pageMode",
            "hasToExist": true,
            "values": [
              "MODAL",
              "NON_MODAL"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "CSS Classes (combobox) in page.dialog.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:736",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "736",
      "builderLabel": "Rejoin Sessions",
      "apexlangPath": "page.sessionManagement.rejoinSessions",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "false",
          "returnValue": "N",
          "label": "Disabled"
        },
        {
          "name": "publicSessions",
          "returnValue": "P",
          "label": "Enabled for Public Sessions"
        },
        {
          "name": "allSessions",
          "returnValue": "Y",
          "label": "Enabled for All Sessions"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Rejoin Sessions (select list) in page.sessionManagement.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:740",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "740",
      "builderLabel": "CSS Classes",
      "apexlangPath": "page.appearance.cssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 255,
      "description": "CSS Classes (combobox) in page.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:741",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "741",
      "builderLabel": "Template Options",
      "apexlangPath": "page.appearance.templateOptions",
      "type": "TEMPLATE OPTIONS",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Template Options (template options) in page.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:743",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "743",
      "builderLabel": "Chained",
      "apexlangPath": "page.dialog.chained",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "10",
            "path": "page.appearance.pageMode",
            "hasToExist": true,
            "values": [
              "MODAL",
              "NON_MODAL"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Chained (yes no) in page.dialog.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:750",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "750",
      "builderLabel": "Resizable",
      "apexlangPath": "page.dialog.resizable",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "10",
            "path": "page.appearance.pageMode",
            "hasToExist": true,
            "values": [
              "MODAL",
              "NON_MODAL"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Resizable (yes no) in page.dialog.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:757",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "757",
      "builderLabel": "List Position",
      "apexlangPath": "page.navigationMenu.listPosition",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "top",
          "returnValue": "TOP",
          "label": "Top"
        },
        {
          "name": "side",
          "returnValue": "SIDE",
          "label": "Side"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "256",
            "path": "page.navigationMenu.list",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "List Position (select list) in page.navigationMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:758",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "758",
      "builderLabel": "Template Options",
      "apexlangPath": "page.navigationMenu.templateOptions",
      "type": "TEMPLATE OPTIONS",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "256",
            "path": "page.navigationMenu.list",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Template Options (template options) in page.navigationMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:915",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "915",
      "builderLabel": "Reload on Submit",
      "apexlangPath": "page.advanced.reloadOnSubmit",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "S",
      "values": [
        {
          "name": "always",
          "returnValue": "A",
          "label": "Always"
        },
        {
          "name": "onlyForSuccess",
          "returnValue": "S",
          "label": "Only for Success"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Reload on Submit (select list) in page.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:916",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "916",
      "builderLabel": "Warn on Unsaved Changes",
      "apexlangPath": "page.navigation.warnOnUnsavedChanges",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Warn on Unsaved Changes (yes no) in page.navigation.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:1088",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "1088",
      "builderLabel": "Help Text",
      "apexlangPath": "page.help.helpText",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Help Text (html) in page.help.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5000",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5000",
      "builderLabel": "Type",
      "apexlangPath": "page.serverCache.type",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "always",
          "returnValue": "ALWAYS",
          "label": "Always"
        },
        {
          "name": "rowsReturned",
          "returnValue": "EXISTS",
          "label": "Rows returned"
        },
        {
          "name": "noRowsReturned",
          "returnValue": "NOT_EXISTS",
          "label": "No Rows returned"
        },
        {
          "name": "expression",
          "returnValue": "EXPRESSION",
          "label": "Expression"
        },
        {
          "name": "functionBody",
          "returnValue": "FUNCTION_BODY",
          "label": "Function Body"
        },
        {
          "name": "request=Value",
          "returnValue": "REQUEST_EQUALS_CONDITION",
          "label": "Request = Value"
        },
        {
          "name": "request!=Value",
          "returnValue": "REQUEST_NOT_EQUAL_CONDITION",
          "label": "Request != Value"
        },
        {
          "name": "requestIsContainedInValue",
          "returnValue": "REQUEST_IN_CONDITION",
          "label": "Request is contained in Value"
        },
        {
          "name": "requestIsNotContainedInValue",
          "returnValue": "REQUEST_NOT_IN_CONDITION",
          "label": "Request is NOT contained in Value"
        },
        {
          "name": "item=value",
          "returnValue": "VAL_OF_ITEM_IN_COND_EQ_COND2",
          "label": "Item = Value"
        },
        {
          "name": "item!=value",
          "returnValue": "VAL_OF_ITEM_IN_COND_NOT_EQ_COND2",
          "label": "Item != Value"
        },
        {
          "name": "itemIsNull",
          "returnValue": "ITEM_IS_NULL",
          "label": "Item is NULL"
        },
        {
          "name": "itemIsNotNull",
          "returnValue": "ITEM_IS_NOT_NULL",
          "label": "Item is NOT NULL"
        },
        {
          "name": "itemIsZero",
          "returnValue": "ITEM_IS_ZERO",
          "label": "Item is zero"
        },
        {
          "name": "itemIsNotZero",
          "returnValue": "ITEM_IS_NOT_ZERO",
          "label": "Item is NOT zero"
        },
        {
          "name": "itemIsNullOrZero",
          "returnValue": "ITEM_IS_NULL_OR_ZERO",
          "label": "Item is NULL or zero"
        },
        {
          "name": "itemIsNotNullAndNotZero",
          "returnValue": "ITEM_NOT_NULL_OR_ZERO",
          "label": "Item is NOT NULL and NOT zero"
        },
        {
          "name": "itemContainsNoSpaces",
          "returnValue": "ITEM_CONTAINS_NO_SPACES",
          "label": "Item contains no spaces"
        },
        {
          "name": "itemIsNumeric",
          "returnValue": "ITEM_IS_NUMERIC",
          "label": "Item is numeric"
        },
        {
          "name": "itemIsNotNumeric",
          "returnValue": "ITEM_IS_NOT_NUMERIC",
          "label": "Item is NOT numeric"
        },
        {
          "name": "itemIsAlphanumeric",
          "returnValue": "ITEM_IS_ALPHANUMERIC",
          "label": "Item is alphanumeric"
        },
        {
          "name": "itemIsInColonDelimitedList",
          "returnValue": "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
          "label": "Item is in colon delimited list"
        },
        {
          "name": "itemIsNotInColonDelimitedList",
          "returnValue": "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST",
          "label": "Item is NOT in colon delimited list"
        },
        {
          "name": "textIsContainedInItem",
          "returnValue": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2",
          "label": "Text is contained in Item"
        },
        {
          "name": "text=value",
          "returnValue": "DISPLAY_COND_EQUAL_COND_TEXT",
          "label": "Text = Value"
        },
        {
          "name": "text!=value",
          "returnValue": "DISP_COND_NOT_EQUAL_COND_TEXT",
          "label": "Text != Value"
        },
        {
          "name": "textIsContainedInValue",
          "returnValue": "DISPLAY_COND_IN_COND_TEXT",
          "label": "Text is contained in Value"
        },
        {
          "name": "textIsNotContainedInValue",
          "returnValue": "DISPLAY_COND_NOT_IN_COND_TEXT",
          "label": "Text is NOT contained in Value"
        },
        {
          "name": "userPreference=value",
          "returnValue": "USER_PREF_IN_COND_EQ_COND2",
          "label": "User Preference = Value"
        },
        {
          "name": "userPreference!=value",
          "returnValue": "USER_PREF_IN_COND_NOT_EQ_COND2",
          "label": "User Preference != Value"
        },
        {
          "name": "currentPage=page",
          "returnValue": "CURRENT_PAGE_EQUALS_CONDITION",
          "label": "Current Page = Page"
        },
        {
          "name": "currentPage!=page",
          "returnValue": "CURRENT_PAGE_NOT_EQUAL_CONDITION",
          "label": "Current Page != Page"
        },
        {
          "name": "currentPageInList",
          "returnValue": "CURRENT_PAGE_IN_CONDITION",
          "label": "Current Page is in comma delimited list"
        },
        {
          "name": "currentPageNotInList",
          "returnValue": "CURRENT_PAGE_NOT_IN_CONDITION",
          "label": "Current Page is NOT in comma delimited list"
        },
        {
          "name": "currentPage=pageSubmitted",
          "returnValue": "WHEN_THIS_PAGE_SUBMITTED",
          "label": "Current Page = Page Submitted (posted)"
        },
        {
          "name": "currentPage!=pageSubmitted",
          "returnValue": "WHEN_THIS_PAGE_NOT_SUBMITTED",
          "label": "Current Page != Page Submitted (posted)"
        },
        {
          "name": "currentPageIsInPrinterFriendlyMode",
          "returnValue": "PAGE_IS_IN_PRINTER_FRIENDLY_MODE",
          "label": "Current Page is in Printer Friendly Mode"
        },
        {
          "name": "currentPageIsNotInPrinterFriendlyMode",
          "returnValue": "PAGE_IS_NOT_IN_PRINTER_FRIENDLY_MODE",
          "label": "Current page is NOT in Printer Friendly Mode"
        },
        {
          "name": "pageRegionIsReadOnly",
          "returnValue": "IS_READ_ONLY",
          "label": "Page/Region is Read Only"
        },
        {
          "name": "pageRegionIsNotReadOnly",
          "returnValue": "IS_NOT_READ_ONLY",
          "label": "Page/Region is NOT Read Only"
        },
        {
          "name": "userIsAuthenticated",
          "returnValue": "USER_IS_NOT_PUBLIC_USER",
          "label": "User is Authenticated (not public)"
        },
        {
          "name": "userIsPublicUser",
          "returnValue": "USER_IS_PUBLIC_USER",
          "label": "User is the Public User (user has not authenticated)"
        },
        {
          "name": "inlineValidationErrorsDisplayed",
          "returnValue": "DISPLAYING_INLINE_VALIDATION_ERRORS",
          "label": "Inline Validation Errors displayed"
        },
        {
          "name": "inlineValidationErrorsNotDisplayed",
          "returnValue": "NOT_DISPLAYING_INLINE_VALIDATION_ERRORS",
          "label": "Inline Validation Errors NOT displayed"
        },
        {
          "name": "sqlReportsOkToShowForwardButton",
          "returnValue": "MAX_ROWS_LT_ROWS_FETCHED",
          "label": "SQL Reports (OK to show the forward button)"
        },
        {
          "name": "sqlReportsOkToShowBackButton",
          "returnValue": "MIN_ROW_GT_THAN_ONE",
          "label": "SQL Reports (OK to show the back button)"
        },
        {
          "name": "currentLanguage=value",
          "returnValue": "CURRENT_LANG_EQ_COND1",
          "label": "Current Language = Value"
        },
        {
          "name": "currentLanguage!=value",
          "returnValue": "CURRENT_LANG_NOT_EQ_COND1",
          "label": "Current Language != Value"
        },
        {
          "name": "currentLanguageIsContainedInValue",
          "returnValue": "CURRENT_LANG_IN_COND1",
          "label": "Current Language is contained in Value"
        },
        {
          "name": "currentLanguageIsNotContainedInValue",
          "returnValue": "CURRENT_LANG_NOT_IN_COND1",
          "label": "Current Language is NOT contained in Value"
        },
        {
          "name": "clientBrowserIsMozilla",
          "returnValue": "BROWSER_IS_NSCP",
          "label": "Client Browser is Mozilla, Netscape 6.x/7x or higher"
        },
        {
          "name": "clientBrowserIsIE7higher",
          "returnValue": "BROWSER_IS_MSIE",
          "label": "Client Browser is Microsoft Internet Explorer 7.0 or higher"
        },
        {
          "name": "clientBrowserIsXhtmlCssCapable",
          "returnValue": "BROWSER_IS_MSIE_OR_NSCP",
          "label": "Client Browser is XHTML / CSS capable browser"
        },
        {
          "name": "clientBrowserIsOther",
          "returnValue": "BROWSER_IS_OTHER",
          "label": "Client Browser is Other browsers (or older version)"
        },
        {
          "name": "cgiEnvDadName=value",
          "returnValue": "DAD_NAME_EQ_CONDITION",
          "label": "CGI_ENV: DAD_NAME = Value"
        },
        {
          "name": "cgiEnvDadName!=value",
          "returnValue": "DAD_NAME_NOT_EQ_CONDITION",
          "label": "CGI_ENV: DAD_NAME != Value"
        },
        {
          "name": "cgiEnvServerName=value",
          "returnValue": "SERVER_NAME_EQ_CONDITION",
          "label": "CGI_ENV: SERVER_NAME = Value"
        },
        {
          "name": "cgiEnvServerName!=value",
          "returnValue": "SERVER_NAME_NOT_EQ_CONDITION",
          "label": "CGI_ENV: SERVER_NAME != Value"
        },
        {
          "name": "cgiEnvHttpHost=value",
          "returnValue": "HTTP_HOST_EQ_CONDITION",
          "label": "CGI_ENV: HTTP_HOST = Value"
        },
        {
          "name": "cgiEnvHttpHost!=value",
          "returnValue": "HTTP_HOST_NOT_EQ_CONDITION",
          "label": "CGI_ENV: HTTP_HOST != Value"
        },
        {
          "name": "never",
          "returnValue": "NEVER",
          "label": "Never"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "222",
            "path": "page.serverCache.caching",
            "hasToExist": true,
            "value": "NOCACHE"
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5001",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5001",
      "builderLabel": "SQL Query",
      "apexlangPath": "page.serverCache.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5000",
            "path": "page.serverCache.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5002",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5002",
      "builderLabel": "Value",
      "apexlangPath": "page.serverCache.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5000",
            "path": "page.serverCache.type",
            "hasToExist": true,
            "values": [
              "REQUEST_EQUALS_CONDITION",
              "REQUEST_NOT_EQUAL_CONDITION",
              "REQUEST_IN_CONDITION",
              "REQUEST_NOT_IN_CONDITION",
              "CURRENT_LANG_IN_COND1",
              "CURRENT_LANG_NOT_IN_COND1",
              "CURRENT_LANG_NOT_EQ_COND1",
              "CURRENT_LANG_EQ_COND1",
              "DAD_NAME_EQ_CONDITION",
              "DAD_NAME_NOT_EQ_CONDITION",
              "SERVER_NAME_EQ_CONDITION",
              "SERVER_NAME_NOT_EQ_CONDITION",
              "HTTP_HOST_EQ_CONDITION",
              "HTTP_HOST_NOT_EQ_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5003",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5003",
      "builderLabel": "Item",
      "apexlangPath": "page.serverCache.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5000",
            "path": "page.serverCache.type",
            "hasToExist": true,
            "values": [
              "VAL_OF_ITEM_IN_COND_EQ_COND2",
              "VAL_OF_ITEM_IN_COND_NOT_EQ_COND2",
              "VALUE_OF_ITEM_IN_COND_1_EQ_COND_2",
              "VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2",
              "ITEM_IS_NULL",
              "ITEM_IS_NOT_NULL",
              "ITEM_IS_ZERO",
              "ITEM_IS_NOT_ZERO",
              "ITEM_IS_NULL_OR_ZERO",
              "ITEM_NOT_NULL_OR_ZERO",
              "ITEM_CONTAINS_NO_SPACES",
              "ITEM_IS_NUMERIC",
              "ITEM_IS_NOT_NUMERIC",
              "ITEM_IS_ALPHANUMERIC",
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5004",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5004",
      "builderLabel": "List",
      "apexlangPath": "page.serverCache.list",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5000",
            "path": "page.serverCache.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5005",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5005",
      "builderLabel": "Preference",
      "apexlangPath": "page.serverCache.preference",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5000",
            "path": "page.serverCache.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5006",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5006",
      "builderLabel": "Page",
      "apexlangPath": "page.serverCache.page",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5000",
            "path": "page.serverCache.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5007",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5007",
      "builderLabel": "Pages",
      "apexlangPath": "page.serverCache.pages",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5000",
            "path": "page.serverCache.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5008",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5008",
      "builderLabel": "Text",
      "apexlangPath": "page.serverCache.text",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5000",
            "path": "page.serverCache.type",
            "hasToExist": true,
            "values": [
              "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2",
              "DISPLAY_COND_IN_COND_TEXT",
              "DISPLAY_COND_NOT_IN_COND_TEXT",
              "DISPLAY_COND_EQUAL_COND_TEXT",
              "DISP_COND_NOT_EQUAL_COND_TEXT"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Text (text) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5009",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5009",
      "builderLabel": "Value",
      "apexlangPath": "page.serverCache.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5000",
            "path": "page.serverCache.type",
            "hasToExist": true,
            "values": [
              "VAL_OF_ITEM_IN_COND_EQ_COND2",
              "VAL_OF_ITEM_IN_COND_NOT_EQ_COND2",
              "VALUE_OF_ITEM_IN_COND_1_EQ_COND_2",
              "VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2",
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5010",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5010",
      "builderLabel": "Item",
      "apexlangPath": "page.serverCache.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5000",
            "path": "page.serverCache.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5011",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5011",
      "builderLabel": "Value",
      "apexlangPath": "page.serverCache.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5000",
            "path": "page.serverCache.type",
            "hasToExist": true,
            "values": [
              "DISPLAY_COND_IN_COND_TEXT",
              "DISPLAY_COND_NOT_IN_COND_TEXT",
              "DISPLAY_COND_EQUAL_COND_TEXT",
              "DISP_COND_NOT_EQUAL_COND_TEXT"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5012",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5012",
      "builderLabel": "Language",
      "apexlangPath": "page.serverCache.language",
      "type": "CODE LANGUAGE",
      "required": true,
      "defaultValue": "PLSQL",
      "values": [
        {
          "name": "sql",
          "returnValue": "SQL",
          "label": "SQL"
        },
        {
          "name": "plsql",
          "returnValue": "PLSQL",
          "label": "PL/SQL"
        },
        {
          "name": "javaScript-mle",
          "returnValue": "JAVASCRIPT",
          "label": "JavaScript (MLE)"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5000",
            "path": "page.serverCache.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5013",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5013",
      "builderLabel": "SQL Expression",
      "apexlangPath": "page.serverCache.sqlExpression",
      "type": "SQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5012",
            "path": "page.serverCache.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5014",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5014",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "page.serverCache.plsqlExpression",
      "type": "PLSQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5012",
            "path": "page.serverCache.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5015",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5015",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "page.serverCache.javaScriptExpression",
      "type": "MLE JAVASCRIPT EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5012",
            "path": "page.serverCache.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5032",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5032",
      "builderLabel": "Language",
      "apexlangPath": "page.serverCache.language",
      "type": "CODE LANGUAGE",
      "required": true,
      "defaultValue": "PLSQL",
      "values": [
        {
          "name": "plsql",
          "returnValue": "PLSQL",
          "label": "PL/SQL"
        },
        {
          "name": "javaScript-mle",
          "returnValue": "JAVASCRIPT",
          "label": "JavaScript (MLE)"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5000",
            "path": "page.serverCache.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5033",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5033",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "page.serverCache.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5032",
            "path": "page.serverCache.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5034",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5034",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "page.serverCache.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5032",
            "path": "page.serverCache.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in page.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5050",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5050",
      "builderLabel": "Type",
      "apexlangPath": "page.readOnly.type",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "always",
          "returnValue": "ALWAYS",
          "label": "Always"
        },
        {
          "name": "rowsReturned",
          "returnValue": "EXISTS",
          "label": "Rows returned"
        },
        {
          "name": "noRowsReturned",
          "returnValue": "NOT_EXISTS",
          "label": "No Rows returned"
        },
        {
          "name": "expression",
          "returnValue": "EXPRESSION",
          "label": "Expression"
        },
        {
          "name": "functionBody",
          "returnValue": "FUNCTION_BODY",
          "label": "Function Body"
        },
        {
          "name": "request=Value",
          "returnValue": "REQUEST_EQUALS_CONDITION",
          "label": "Request = Value"
        },
        {
          "name": "request!=Value",
          "returnValue": "REQUEST_NOT_EQUAL_CONDITION",
          "label": "Request != Value"
        },
        {
          "name": "requestIsContainedInValue",
          "returnValue": "REQUEST_IN_CONDITION",
          "label": "Request is contained in Value"
        },
        {
          "name": "requestIsNotContainedInValue",
          "returnValue": "REQUEST_NOT_IN_CONDITION",
          "label": "Request is NOT contained in Value"
        },
        {
          "name": "item=value",
          "returnValue": "VAL_OF_ITEM_IN_COND_EQ_COND2",
          "label": "Item = Value"
        },
        {
          "name": "item!=value",
          "returnValue": "VAL_OF_ITEM_IN_COND_NOT_EQ_COND2",
          "label": "Item != Value"
        },
        {
          "name": "itemIsNull",
          "returnValue": "ITEM_IS_NULL",
          "label": "Item is NULL"
        },
        {
          "name": "itemIsNotNull",
          "returnValue": "ITEM_IS_NOT_NULL",
          "label": "Item is NOT NULL"
        },
        {
          "name": "itemIsZero",
          "returnValue": "ITEM_IS_ZERO",
          "label": "Item is zero"
        },
        {
          "name": "itemIsNotZero",
          "returnValue": "ITEM_IS_NOT_ZERO",
          "label": "Item is NOT zero"
        },
        {
          "name": "itemIsNullOrZero",
          "returnValue": "ITEM_IS_NULL_OR_ZERO",
          "label": "Item is NULL or zero"
        },
        {
          "name": "itemIsNotNullAndNotZero",
          "returnValue": "ITEM_NOT_NULL_OR_ZERO",
          "label": "Item is NOT NULL and NOT zero"
        },
        {
          "name": "itemContainsNoSpaces",
          "returnValue": "ITEM_CONTAINS_NO_SPACES",
          "label": "Item contains no spaces"
        },
        {
          "name": "itemIsNumeric",
          "returnValue": "ITEM_IS_NUMERIC",
          "label": "Item is numeric"
        },
        {
          "name": "itemIsNotNumeric",
          "returnValue": "ITEM_IS_NOT_NUMERIC",
          "label": "Item is NOT numeric"
        },
        {
          "name": "itemIsAlphanumeric",
          "returnValue": "ITEM_IS_ALPHANUMERIC",
          "label": "Item is alphanumeric"
        },
        {
          "name": "itemIsInColonDelimitedList",
          "returnValue": "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
          "label": "Item is in colon delimited list"
        },
        {
          "name": "itemIsNotInColonDelimitedList",
          "returnValue": "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST",
          "label": "Item is NOT in colon delimited list"
        },
        {
          "name": "textIsContainedInItem",
          "returnValue": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2",
          "label": "Text is contained in Item"
        },
        {
          "name": "text=value",
          "returnValue": "DISPLAY_COND_EQUAL_COND_TEXT",
          "label": "Text = Value"
        },
        {
          "name": "text!=value",
          "returnValue": "DISP_COND_NOT_EQUAL_COND_TEXT",
          "label": "Text != Value"
        },
        {
          "name": "textIsContainedInValue",
          "returnValue": "DISPLAY_COND_IN_COND_TEXT",
          "label": "Text is contained in Value"
        },
        {
          "name": "textIsNotContainedInValue",
          "returnValue": "DISPLAY_COND_NOT_IN_COND_TEXT",
          "label": "Text is NOT contained in Value"
        },
        {
          "name": "userPreference=value",
          "returnValue": "USER_PREF_IN_COND_EQ_COND2",
          "label": "User Preference = Value"
        },
        {
          "name": "userPreference!=value",
          "returnValue": "USER_PREF_IN_COND_NOT_EQ_COND2",
          "label": "User Preference != Value"
        },
        {
          "name": "currentPage=page",
          "returnValue": "CURRENT_PAGE_EQUALS_CONDITION",
          "label": "Current Page = Page"
        },
        {
          "name": "currentPage!=page",
          "returnValue": "CURRENT_PAGE_NOT_EQUAL_CONDITION",
          "label": "Current Page != Page"
        },
        {
          "name": "currentPageInList",
          "returnValue": "CURRENT_PAGE_IN_CONDITION",
          "label": "Current Page is in comma delimited list"
        },
        {
          "name": "currentPageNotInList",
          "returnValue": "CURRENT_PAGE_NOT_IN_CONDITION",
          "label": "Current Page is NOT in comma delimited list"
        },
        {
          "name": "currentPage=pageSubmitted",
          "returnValue": "WHEN_THIS_PAGE_SUBMITTED",
          "label": "Current Page = Page Submitted (posted)"
        },
        {
          "name": "currentPage!=pageSubmitted",
          "returnValue": "WHEN_THIS_PAGE_NOT_SUBMITTED",
          "label": "Current Page != Page Submitted (posted)"
        },
        {
          "name": "currentPageIsInPrinterFriendlyMode",
          "returnValue": "PAGE_IS_IN_PRINTER_FRIENDLY_MODE",
          "label": "Current Page is in Printer Friendly Mode"
        },
        {
          "name": "currentPageIsNotInPrinterFriendlyMode",
          "returnValue": "PAGE_IS_NOT_IN_PRINTER_FRIENDLY_MODE",
          "label": "Current page is NOT in Printer Friendly Mode"
        },
        {
          "name": "pageRegionIsReadOnly",
          "returnValue": "IS_READ_ONLY",
          "label": "Page/Region is Read Only"
        },
        {
          "name": "pageRegionIsNotReadOnly",
          "returnValue": "IS_NOT_READ_ONLY",
          "label": "Page/Region is NOT Read Only"
        },
        {
          "name": "userIsAuthenticated",
          "returnValue": "USER_IS_NOT_PUBLIC_USER",
          "label": "User is Authenticated (not public)"
        },
        {
          "name": "userIsPublicUser",
          "returnValue": "USER_IS_PUBLIC_USER",
          "label": "User is the Public User (user has not authenticated)"
        },
        {
          "name": "inlineValidationErrorsDisplayed",
          "returnValue": "DISPLAYING_INLINE_VALIDATION_ERRORS",
          "label": "Inline Validation Errors displayed"
        },
        {
          "name": "inlineValidationErrorsNotDisplayed",
          "returnValue": "NOT_DISPLAYING_INLINE_VALIDATION_ERRORS",
          "label": "Inline Validation Errors NOT displayed"
        },
        {
          "name": "sqlReportsOkToShowForwardButton",
          "returnValue": "MAX_ROWS_LT_ROWS_FETCHED",
          "label": "SQL Reports (OK to show the forward button)"
        },
        {
          "name": "sqlReportsOkToShowBackButton",
          "returnValue": "MIN_ROW_GT_THAN_ONE",
          "label": "SQL Reports (OK to show the back button)"
        },
        {
          "name": "currentLanguage=value",
          "returnValue": "CURRENT_LANG_EQ_COND1",
          "label": "Current Language = Value"
        },
        {
          "name": "currentLanguage!=value",
          "returnValue": "CURRENT_LANG_NOT_EQ_COND1",
          "label": "Current Language != Value"
        },
        {
          "name": "currentLanguageIsContainedInValue",
          "returnValue": "CURRENT_LANG_IN_COND1",
          "label": "Current Language is contained in Value"
        },
        {
          "name": "currentLanguageIsNotContainedInValue",
          "returnValue": "CURRENT_LANG_NOT_IN_COND1",
          "label": "Current Language is NOT contained in Value"
        },
        {
          "name": "clientBrowserIsMozilla",
          "returnValue": "BROWSER_IS_NSCP",
          "label": "Client Browser is Mozilla, Netscape 6.x/7x or higher"
        },
        {
          "name": "clientBrowserIsIE7higher",
          "returnValue": "BROWSER_IS_MSIE",
          "label": "Client Browser is Microsoft Internet Explorer 7.0 or higher"
        },
        {
          "name": "clientBrowserIsXhtmlCssCapable",
          "returnValue": "BROWSER_IS_MSIE_OR_NSCP",
          "label": "Client Browser is XHTML / CSS capable browser"
        },
        {
          "name": "clientBrowserIsOther",
          "returnValue": "BROWSER_IS_OTHER",
          "label": "Client Browser is Other browsers (or older version)"
        },
        {
          "name": "cgiEnvDadName=value",
          "returnValue": "DAD_NAME_EQ_CONDITION",
          "label": "CGI_ENV: DAD_NAME = Value"
        },
        {
          "name": "cgiEnvDadName!=value",
          "returnValue": "DAD_NAME_NOT_EQ_CONDITION",
          "label": "CGI_ENV: DAD_NAME != Value"
        },
        {
          "name": "cgiEnvServerName=value",
          "returnValue": "SERVER_NAME_EQ_CONDITION",
          "label": "CGI_ENV: SERVER_NAME = Value"
        },
        {
          "name": "cgiEnvServerName!=value",
          "returnValue": "SERVER_NAME_NOT_EQ_CONDITION",
          "label": "CGI_ENV: SERVER_NAME != Value"
        },
        {
          "name": "cgiEnvHttpHost=value",
          "returnValue": "HTTP_HOST_EQ_CONDITION",
          "label": "CGI_ENV: HTTP_HOST = Value"
        },
        {
          "name": "cgiEnvHttpHost!=value",
          "returnValue": "HTTP_HOST_NOT_EQ_CONDITION",
          "label": "CGI_ENV: HTTP_HOST != Value"
        },
        {
          "name": "never",
          "returnValue": "NEVER",
          "label": "Never"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "264",
            "path": "app.userInterface.globalPage",
            "hasToExist": true,
            "value": "#COMPONENT_PAGE_ID#"
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5051",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5051",
      "builderLabel": "SQL Query",
      "apexlangPath": "page.readOnly.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5050",
            "path": "page.readOnly.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5052",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5052",
      "builderLabel": "Value",
      "apexlangPath": "page.readOnly.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5050",
            "path": "page.readOnly.type",
            "hasToExist": true,
            "values": [
              "REQUEST_EQUALS_CONDITION",
              "REQUEST_NOT_EQUAL_CONDITION",
              "REQUEST_IN_CONDITION",
              "REQUEST_NOT_IN_CONDITION",
              "CURRENT_LANG_IN_COND1",
              "CURRENT_LANG_NOT_IN_COND1",
              "CURRENT_LANG_NOT_EQ_COND1",
              "CURRENT_LANG_EQ_COND1",
              "DAD_NAME_EQ_CONDITION",
              "DAD_NAME_NOT_EQ_CONDITION",
              "SERVER_NAME_EQ_CONDITION",
              "SERVER_NAME_NOT_EQ_CONDITION",
              "HTTP_HOST_EQ_CONDITION",
              "HTTP_HOST_NOT_EQ_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5053",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5053",
      "builderLabel": "Item",
      "apexlangPath": "page.readOnly.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5050",
            "path": "page.readOnly.type",
            "hasToExist": true,
            "values": [
              "VAL_OF_ITEM_IN_COND_EQ_COND2",
              "VAL_OF_ITEM_IN_COND_NOT_EQ_COND2",
              "VALUE_OF_ITEM_IN_COND_1_EQ_COND_2",
              "VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2",
              "ITEM_IS_NULL",
              "ITEM_IS_NOT_NULL",
              "ITEM_IS_ZERO",
              "ITEM_IS_NOT_ZERO",
              "ITEM_IS_NULL_OR_ZERO",
              "ITEM_NOT_NULL_OR_ZERO",
              "ITEM_CONTAINS_NO_SPACES",
              "ITEM_IS_NUMERIC",
              "ITEM_IS_NOT_NUMERIC",
              "ITEM_IS_ALPHANUMERIC",
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5054",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5054",
      "builderLabel": "List",
      "apexlangPath": "page.readOnly.list",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5050",
            "path": "page.readOnly.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5055",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5055",
      "builderLabel": "Preference",
      "apexlangPath": "page.readOnly.preference",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5050",
            "path": "page.readOnly.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5056",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5056",
      "builderLabel": "Page",
      "apexlangPath": "page.readOnly.page",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5050",
            "path": "page.readOnly.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5057",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5057",
      "builderLabel": "Pages",
      "apexlangPath": "page.readOnly.pages",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5050",
            "path": "page.readOnly.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5058",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5058",
      "builderLabel": "Text",
      "apexlangPath": "page.readOnly.text",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5050",
            "path": "page.readOnly.type",
            "hasToExist": true,
            "values": [
              "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2",
              "DISPLAY_COND_IN_COND_TEXT",
              "DISPLAY_COND_NOT_IN_COND_TEXT",
              "DISPLAY_COND_EQUAL_COND_TEXT",
              "DISP_COND_NOT_EQUAL_COND_TEXT"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Text (text) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5059",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5059",
      "builderLabel": "Value",
      "apexlangPath": "page.readOnly.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5050",
            "path": "page.readOnly.type",
            "hasToExist": true,
            "values": [
              "VAL_OF_ITEM_IN_COND_EQ_COND2",
              "VAL_OF_ITEM_IN_COND_NOT_EQ_COND2",
              "VALUE_OF_ITEM_IN_COND_1_EQ_COND_2",
              "VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2",
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5060",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5060",
      "builderLabel": "Item",
      "apexlangPath": "page.readOnly.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5050",
            "path": "page.readOnly.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5061",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5061",
      "builderLabel": "Value",
      "apexlangPath": "page.readOnly.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5050",
            "path": "page.readOnly.type",
            "hasToExist": true,
            "values": [
              "DISPLAY_COND_IN_COND_TEXT",
              "DISPLAY_COND_NOT_IN_COND_TEXT",
              "DISPLAY_COND_EQUAL_COND_TEXT",
              "DISP_COND_NOT_EQUAL_COND_TEXT"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5062",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5062",
      "builderLabel": "Language",
      "apexlangPath": "page.readOnly.language",
      "type": "CODE LANGUAGE",
      "required": true,
      "defaultValue": "PLSQL",
      "values": [
        {
          "name": "sql",
          "returnValue": "SQL",
          "label": "SQL"
        },
        {
          "name": "plsql",
          "returnValue": "PLSQL",
          "label": "PL/SQL"
        },
        {
          "name": "javaScript-mle",
          "returnValue": "JAVASCRIPT",
          "label": "JavaScript (MLE)"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5050",
            "path": "page.readOnly.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5063",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5063",
      "builderLabel": "SQL Expression",
      "apexlangPath": "page.readOnly.sqlExpression",
      "type": "SQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5062",
            "path": "page.readOnly.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5064",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5064",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "page.readOnly.plsqlExpression",
      "type": "PLSQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5062",
            "path": "page.readOnly.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5065",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5065",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "page.readOnly.javaScriptExpression",
      "type": "MLE JAVASCRIPT EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5062",
            "path": "page.readOnly.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5082",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5082",
      "builderLabel": "Language",
      "apexlangPath": "page.readOnly.language",
      "type": "CODE LANGUAGE",
      "required": true,
      "defaultValue": "PLSQL",
      "values": [
        {
          "name": "plsql",
          "returnValue": "PLSQL",
          "label": "PL/SQL"
        },
        {
          "name": "javaScript-mle",
          "returnValue": "JAVASCRIPT",
          "label": "JavaScript (MLE)"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5050",
            "path": "page.readOnly.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5083",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5083",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "page.readOnly.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5082",
            "path": "page.readOnly.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5000:5084",
      "context": "page",
      "componentTypeId": "5000",
      "componentTitle": "Page",
      "parentContext": "app",
      "parentComponentTypeId": "1000",
      "componentCondition": null,
      "propertyId": "5084",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "page.readOnly.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5082",
            "path": "page.readOnly.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in page.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    }
  ],
  "currentExamples": {
    "regions": [],
    "items": [],
    "buttons": [],
    "pages": [
      {
        "id": "page:1918",
        "pageId": 1918,
        "template": "Drawer",
        "templateOptions": [
          "#DEFAULT#",
          "js-dialog-class-t-Drawer--pullOutStart",
          "js-dialog-class-t-Drawer--sm"
        ],
        "mode": "Modal Dialog"
      },
      {
        "id": "page:1919",
        "pageId": 1919,
        "template": "Drawer",
        "templateOptions": [
          "#DEFAULT#",
          "js-dialog-class-t-Drawer--pullOutEnd"
        ],
        "mode": "Modal Dialog"
      }
    ]
  }
}
```

Complete option groups, defaults, presets and source context are available in component:source/parameters.
