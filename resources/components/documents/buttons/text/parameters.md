# Text Button: parameters

component:buttons/text

Parameter identities include their component context and APEXlang path. UI labels alone are not unique. Raw database return values and DSL enum values may differ. Missing descriptions or unresolved paths are not inferred as supported syntax.

Region template options and component-template options are independent surfaces. Current selections do not establish defaults. #DEFAULT# selects template defaults; it is not a CSS class.

```json
{
  "templateOptions": [
    {
      "id": "template-option:BUTTON/DANGER",
      "name": "DANGER",
      "label": "Danger",
      "cssClasses": [
        "t-Button--danger"
      ],
      "groupId": "template-group:button/type",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Danger: applies t-Button--danger within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/DISPLAY_AS_LINK",
      "name": "DISPLAY_AS_LINK",
      "label": "Display as Link",
      "cssClasses": [
        "t-Button--link"
      ],
      "groupId": "template-group:button/style",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "This option makes the button appear as a text link.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:BUTTON/LARGE",
      "name": "LARGE",
      "label": "Large",
      "cssClasses": [
        "t-Button--large"
      ],
      "groupId": "template-group:button/size",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "A large button.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:BUTTON/LARGEBOTTOMMARGIN",
      "name": "LARGEBOTTOMMARGIN",
      "label": "Large",
      "cssClasses": [
        "t-Button--gapBottom"
      ],
      "groupId": "template-group:button/spacing-bottom",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Large: applies t-Button--gapBottom within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/LARGELEFTMARGIN",
      "name": "LARGELEFTMARGIN",
      "label": "Large",
      "cssClasses": [
        "t-Button--gapLeft"
      ],
      "groupId": "template-group:button/spacing-left",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Large: applies t-Button--gapLeft within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/LARGERIGHTMARGIN",
      "name": "LARGERIGHTMARGIN",
      "label": "Large",
      "cssClasses": [
        "t-Button--gapRight"
      ],
      "groupId": "template-group:button/spacing-right",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Large: applies t-Button--gapRight within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/LARGETOPMARGIN",
      "name": "LARGETOPMARGIN",
      "label": "Large",
      "cssClasses": [
        "t-Button--gapTop"
      ],
      "groupId": "template-group:button/spacing-top",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Large: applies t-Button--gapTop within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/NOBOTTOMMARGIN",
      "name": "NOBOTTOMMARGIN",
      "label": "None",
      "cssClasses": [
        "t-Button--noBottom"
      ],
      "groupId": "template-group:button/spacing-bottom",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "None: applies t-Button--noBottom within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/NOLEFTMARGIN",
      "name": "NOLEFTMARGIN",
      "label": "None",
      "cssClasses": [
        "t-Button--noLeft"
      ],
      "groupId": "template-group:button/spacing-left",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "None: applies t-Button--noLeft within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/NORIGHTMARGIN",
      "name": "NORIGHTMARGIN",
      "label": "None",
      "cssClasses": [
        "t-Button--noRight"
      ],
      "groupId": "template-group:button/spacing-right",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "None: applies t-Button--noRight within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/NOTOPMARGIN",
      "name": "NOTOPMARGIN",
      "label": "None",
      "cssClasses": [
        "t-Button--noTop"
      ],
      "groupId": "template-group:button/spacing-top",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "None: applies t-Button--noTop within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/NOUI",
      "name": "NOUI",
      "label": "Remove UI Decoration",
      "cssClasses": [
        "t-Button--noUI"
      ],
      "groupId": "template-group:button/style",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Remove UI Decoration: applies t-Button--noUI within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/PILL",
      "name": "PILL",
      "label": "Inner Button",
      "cssClasses": [
        "t-Button--pill"
      ],
      "groupId": "template-group:button/button-set",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Inner Button: applies t-Button--pill within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/PILLEND",
      "name": "PILLEND",
      "label": "Last Button",
      "cssClasses": [
        "t-Button--pillEnd"
      ],
      "groupId": "template-group:button/button-set",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Last Button: applies t-Button--pillEnd within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/PILLSTART",
      "name": "PILLSTART",
      "label": "First Button",
      "cssClasses": [
        "t-Button--pillStart"
      ],
      "groupId": "template-group:button/button-set",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Use this for the start of a pill button.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:BUTTON/PRIMARY",
      "name": "PRIMARY",
      "label": "Primary",
      "cssClasses": [
        "t-Button--primary"
      ],
      "groupId": "template-group:button/type",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Primary: applies t-Button--primary within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/SIMPLE",
      "name": "SIMPLE",
      "label": "Simple",
      "cssClasses": [
        "t-Button--simple"
      ],
      "groupId": "template-group:button/style",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Simple: applies t-Button--simple within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/SMALL",
      "name": "SMALL",
      "label": "Small",
      "cssClasses": [
        "t-Button--small"
      ],
      "groupId": "template-group:button/size",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "A small button.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:BUTTON/SMALLBOTTOMMARGIN",
      "name": "SMALLBOTTOMMARGIN",
      "label": "Small",
      "cssClasses": [
        "t-Button--padBottom"
      ],
      "groupId": "template-group:button/spacing-bottom",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Small: applies t-Button--padBottom within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/SMALLLEFTMARGIN",
      "name": "SMALLLEFTMARGIN",
      "label": "Small",
      "cssClasses": [
        "t-Button--padLeft"
      ],
      "groupId": "template-group:button/spacing-left",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Small: applies t-Button--padLeft within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/SMALLRIGHTMARGIN",
      "name": "SMALLRIGHTMARGIN",
      "label": "Small",
      "cssClasses": [
        "t-Button--padRight"
      ],
      "groupId": "template-group:button/spacing-right",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Small: applies t-Button--padRight within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/SMALLTOPMARGIN",
      "name": "SMALLTOPMARGIN",
      "label": "Small",
      "cssClasses": [
        "t-Button--padTop"
      ],
      "groupId": "template-group:button/spacing-top",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Small: applies t-Button--padTop within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/STRETCH",
      "name": "STRETCH",
      "label": "Stretch",
      "cssClasses": [
        "t-Button--stretch"
      ],
      "groupId": "template-group:button/width",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Stretches button to fill container",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:BUTTON/SUCCESS",
      "name": "SUCCESS",
      "label": "Success",
      "cssClasses": [
        "t-Button--success"
      ],
      "groupId": "template-group:button/type",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Success: applies t-Button--success within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:BUTTON/TINY",
      "name": "TINY",
      "label": "Tiny",
      "cssClasses": [
        "t-Button--tiny"
      ],
      "groupId": "template-group:button/size",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "A very small button.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:BUTTON/WARNING",
      "name": "WARNING",
      "label": "Warning",
      "cssClasses": [
        "t-Button--warning"
      ],
      "groupId": "template-group:button/type",
      "templateTypes": [
        "BUTTON"
      ],
      "templates": {},
      "virtualTemplateType": "BUTTON",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Warning: applies t-Button--warning within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    }
  ],
  "templateOptionGroups": [
    {
      "id": "template-group:button/button-set",
      "sourceId": "2137437142403345391",
      "name": "BUTTON_SET",
      "label": "Button Set",
      "templateTypes": [
        "BUTTON"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Enables you to group many buttons together into a pill. You can use this option to specify where the button is within this set. Set the option to Default if this button is not part of a button set.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:button/size",
      "sourceId": "2137434073897345390",
      "name": "SIZE",
      "label": "Size",
      "templateTypes": [
        "BUTTON"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Sets the size of the button.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:button/spacing-bottom",
      "sourceId": "2032648048028500012",
      "name": "SPACING_BOTTOM",
      "label": "Spacing Bottom",
      "templateTypes": [
        "BUTTON"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Controls the spacing to the bottom of the button.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:button/spacing-left",
      "sourceId": "2137439873604345391",
      "name": "SPACING_LEFT",
      "label": "Spacing Left",
      "templateTypes": [
        "BUTTON"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Controls the spacing to the left of the button.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:button/spacing-right",
      "sourceId": "2137436991080345391",
      "name": "SPACING_RIGHT",
      "label": "Spacing Right",
      "templateTypes": [
        "BUTTON"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Controls the spacing to the right of the button.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:button/spacing-top",
      "sourceId": "2032647542892495725",
      "name": "SPACING_TOP",
      "label": "Spacing Top",
      "templateTypes": [
        "BUTTON"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Controls the spacing to the top of the button.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:button/style",
      "sourceId": "2137441450462345391",
      "name": "STYLE",
      "label": "Style",
      "templateTypes": [
        "BUTTON"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Sets the style of the button. Use the \"Simple\" option for secondary actions or sets of buttons. Use the \"Remove UI Decoration\" option to make the button appear as text.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:button/type",
      "sourceId": "2137441290930345391",
      "name": "TYPE",
      "label": "Type",
      "templateTypes": [
        "BUTTON"
      ],
      "nullText": "Normal",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Type choices for BUTTON templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:button/width",
      "sourceId": "2137442082549345392",
      "name": "WIDTH",
      "label": "Width",
      "templateTypes": [
        "BUTTON"
      ],
      "nullText": "Auto - Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Sets the width of the button.",
      "descriptionOrigin": "oracle-upl"
    }
  ],
  "templateDefaults": [
    {
      "id": "button-template:text",
      "type": "button",
      "name": "Text",
      "key": "text",
      "internalName": "TEXT",
      "defaultOptions": [],
      "presetOptions": []
    }
  ],
  "utAttributes": [],
  "utAttributeValues": [],
  "nativeParameters": [
    {
      "id": "mmd:5130:4",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "4",
      "builderLabel": "Comments",
      "apexlangPath": "button.comments.comments",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Comments (text editor) in button.comments.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:24",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "24",
      "builderLabel": "Authorization Scheme",
      "apexlangPath": "button.security.authorizationScheme",
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
      "condition": null,
      "maxLength": null,
      "description": "Authorization Scheme (component) in button.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:38",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "38",
      "builderLabel": "Build Option",
      "apexlangPath": "button.config.buildOption",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Build Option (component) in button.config.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:97",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "97",
      "builderLabel": "Sequence",
      "apexlangPath": "button.layout.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:98",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "98",
      "builderLabel": "Region",
      "apexlangPath": "button.layout.region",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Region (component) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:104",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "104",
      "builderLabel": "Start New Layout",
      "apexlangPath": "button.layout.startNewLayout",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Start New Layout (yes no) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:105",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "105",
      "builderLabel": "Start New Row",
      "apexlangPath": "button.layout.startNewRow",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "104",
            "path": "button.layout.startNewLayout",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Start New Row (yes no) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:106",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "106",
      "builderLabel": "Column",
      "apexlangPath": "button.layout.column",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Column (select list) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:107",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "107",
      "builderLabel": "New Column",
      "apexlangPath": "button.layout.newColumn",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "105",
            "path": "button.layout.startNewRow",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "maxLength": 32767,
      "description": "New Column (yes no) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:108",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "108",
      "builderLabel": "Column Span",
      "apexlangPath": "button.layout.columnSpan",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Column Span (select list) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:109",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "109",
      "builderLabel": "Row Span",
      "apexlangPath": "button.layout.rowSpan",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Row Span (number) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:110",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "110",
      "builderLabel": "Column Attributes",
      "apexlangPath": "button.layout.columnAttributes",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Column Attributes (combobox) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:123",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "123",
      "builderLabel": "Alignment",
      "apexlangPath": "button.layout.alignment",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "LEFT-CENTER",
      "values": [
        {
          "name": "center",
          "returnValue": "CENTER",
          "label": "Center"
        },
        {
          "name": "centerBottom",
          "returnValue": "CENTER-BOTTOM",
          "label": "Center bottom"
        },
        {
          "name": "centerCenter",
          "returnValue": "CENTER-CENTER",
          "label": "Center center"
        },
        {
          "name": "centerTop",
          "returnValue": "CENTER-TOP",
          "label": "Center top"
        },
        {
          "name": "left",
          "returnValue": "LEFT",
          "label": "Left"
        },
        {
          "name": "leftBottom",
          "returnValue": "LEFT-BOTTOM",
          "label": "Left bottom"
        },
        {
          "name": "leftCenter",
          "returnValue": "LEFT-CENTER",
          "label": "Left center"
        },
        {
          "name": "leftTop",
          "returnValue": "LEFT-TOP",
          "label": "Left top"
        },
        {
          "name": "right",
          "returnValue": "RIGHT",
          "label": "Right"
        },
        {
          "name": "rightBottom",
          "returnValue": "RIGHT-BOTTOM",
          "label": "Right bottom"
        },
        {
          "name": "rightCenter",
          "returnValue": "RIGHT-CENTER",
          "label": "Right center"
        },
        {
          "name": "rightTop",
          "returnValue": "RIGHT-TOP",
          "label": "Right top"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "191",
            "path": "button.layout.slot",
            "hasToExist": true,
            "value": "BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Alignment (select list) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:129",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "129",
      "builderLabel": "Custom Attributes",
      "apexlangPath": "button.advanced.customAttributes",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 2000,
      "description": "Custom Attributes (combobox) in button.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:176",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "176",
      "builderLabel": "Button Name",
      "apexlangPath": "button.buttonName",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Button Name (text) in button.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:177",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "177",
      "builderLabel": "Label",
      "apexlangPath": "button.label",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Label (text) in button.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:179",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "179",
      "builderLabel": "Horizontal Alignment",
      "apexlangPath": "button.layout.horizontalAlignment",
      "type": "PILL BUTTONS",
      "required": true,
      "defaultValue": "RIGHT",
      "values": [
        {
          "name": "left",
          "returnValue": "LEFT",
          "label": "Left"
        },
        {
          "name": "right",
          "returnValue": "RIGHT",
          "label": "Right"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "191",
            "path": "button.layout.slot",
            "hasToExist": true,
            "values": [
              "TOP",
              "TOP_AND_BOTTOM",
              "ABOVE_BOX",
              "BELOW_BOX",
              "BOTTOM"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Horizontal Alignment (pill buttons) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:180",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "180",
      "builderLabel": "Static ID",
      "apexlangPath": "button.advanced.staticId",
      "type": "STATIC ID",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Static ID (static id) in button.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:181",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "181",
      "builderLabel": "HTML DOM ID",
      "apexlangPath": "button.advanced.htmlDomId",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "HTML DOM ID (text) in button.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:182",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "182",
      "builderLabel": "Button Template",
      "apexlangPath": "button.appearance.buttonTemplate",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Button Template (component) in button.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:183",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "183",
      "builderLabel": "Hot",
      "apexlangPath": "button.appearance.hot",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Hot (yes no) in button.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:188",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "188",
      "builderLabel": "Execute Validations",
      "apexlangPath": "button.behavior.executeValidations",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "values": [
              "SUBMIT",
              "REDIRECT_URL",
              "DEFINED_BY_DA",
              "DEFINED_BY_DA_ACTION"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Execute Validations (yes no) in button.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:189",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "189",
      "builderLabel": "Database Action",
      "apexlangPath": "button.behavior.databaseAction",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "insert",
          "returnValue": "INSERT",
          "label": "SQL INSERT action"
        },
        {
          "name": "update",
          "returnValue": "UPDATE",
          "label": "SQL UPDATE action"
        },
        {
          "name": "delete",
          "returnValue": "DELETE",
          "label": "SQL DELETE action"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "STANDARD"
          }
        ]
      },
      "maxLength": null,
      "description": "Database Action (select list) in button.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:191",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "191",
      "builderLabel": "Slot",
      "apexlangPath": "button.layout.slot",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Slot (select list) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:252",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "252",
      "builderLabel": "Action",
      "apexlangPath": "button.behavior.action",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "SUBMIT",
      "values": [
        {
          "name": "submitPage",
          "returnValue": "SUBMIT",
          "label": "Submit Page"
        },
        {
          "name": "triggerAction",
          "returnValue": "DEFINED_BY_DA_ACTION",
          "label": "Trigger Action"
        },
        {
          "name": "redirectThisApp",
          "returnValue": "REDIRECT_PAGE",
          "label": "Redirect to Page in this Application"
        },
        {
          "name": "redirectOtherApp",
          "returnValue": "REDIRECT_APP",
          "label": "Redirect to Page in a different Application"
        },
        {
          "name": "redirectUrl",
          "returnValue": "REDIRECT_URL",
          "label": "Redirect to URL"
        },
        {
          "name": "definedByDynamicAction",
          "returnValue": "DEFINED_BY_DA",
          "label": "Defined by Dynamic Action"
        },
        {
          "name": "resetPage",
          "returnValue": "RESET",
          "label": "Reset Page"
        },
        {
          "name": "nextPage",
          "returnValue": "NEXT_PAGE",
          "label": "Next Page"
        },
        {
          "name": "previousPage",
          "returnValue": "PREVIOUS_PAGE",
          "label": "Previous Page"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "STANDARD"
          }
        ]
      },
      "maxLength": null,
      "description": "Action (select list) in button.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:287",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "287",
      "builderLabel": "Show as Disabled",
      "apexlangPath": "button.appearance.showAsDisabled",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "182",
            "path": "button.appearance.buttonTemplate",
            "hasToExist": true,
            "values": [
              "IS_DISABLED"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show as Disabled (yes no) in button.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:602",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "602",
      "builderLabel": "Target",
      "apexlangPath": "button.behavior.target",
      "type": "LINK_IN_APP",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "REDIRECT_PAGE"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Target (link_in_app) in button.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:603",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "603",
      "builderLabel": "Target",
      "apexlangPath": "button.behavior.target",
      "type": "LINK_IN_DIFF_APP",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "REDIRECT_APP"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Target (link_in_diff_app) in button.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:604",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "604",
      "builderLabel": "Target URL",
      "apexlangPath": "button.behavior.targetUrl",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "REDIRECT_URL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Target URL (text) in button.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:739",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "739",
      "builderLabel": "Icon",
      "apexlangPath": "button.appearance.icon",
      "type": "ICON",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Icon (icon) in button.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:740",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "740",
      "builderLabel": "CSS Classes",
      "apexlangPath": "button.appearance.cssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "CSS Classes (combobox) in button.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:741",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "741",
      "builderLabel": "Template Options",
      "apexlangPath": "button.appearance.templateOptions",
      "type": "TEMPLATE OPTIONS",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Template Options (template options) in button.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:745",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "745",
      "builderLabel": "Request Source Type",
      "apexlangPath": "button.advanced.requestSourceType",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "staticValue",
          "returnValue": "STATIC",
          "label": "Static Value"
        },
        {
          "name": "databaseColumn",
          "returnValue": "DB_COLUMN",
          "label": "Database Column"
        },
        {
          "name": "item",
          "returnValue": "ITEM",
          "label": "Item"
        },
        {
          "name": "sqlQuerySingleValue",
          "returnValue": "QUERY",
          "label": "SQL Query (return single value)"
        },
        {
          "name": "sqlQueryMultipleValues",
          "returnValue": "QUERY_COLON",
          "label": "SQL Query (return colon separated value)"
        },
        {
          "name": "plsqlExpression",
          "returnValue": "FUNCTION",
          "label": "PL/SQL Expression"
        },
        {
          "name": "plsqlFunctionBody",
          "returnValue": "FUNCTION_BODY",
          "label": "PL/SQL Function Body"
        },
        {
          "name": "preference",
          "returnValue": "PREFERENCE",
          "label": "Preference"
        },
        {
          "name": "null",
          "returnValue": "ALWAYS_NULL",
          "label": "Null"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Request Source Type (select list) in button.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:746",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "746",
      "builderLabel": "Request Source",
      "apexlangPath": "button.advanced.requestSource",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "745",
            "path": "button.advanced.requestSourceType",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 4000,
      "description": "Request Source (text editor) in button.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:747",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "747",
      "builderLabel": "Pre Text",
      "apexlangPath": "button.advanced.preText",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Pre Text (html) in button.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:748",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "748",
      "builderLabel": "Post Text ",
      "apexlangPath": "button.advanced.postText",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Post Text  (html) in button.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:763",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "763",
      "builderLabel": "Column CSS Classes",
      "apexlangPath": "button.layout.columnCssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Column CSS Classes (combobox) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:814",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "814",
      "builderLabel": "Row CSS Classes",
      "apexlangPath": "button.layout.rowCssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Row CSS Classes (combobox) in button.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:941",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "941",
      "builderLabel": "Warn on Unsaved Changes",
      "apexlangPath": "button.behavior.warnOnUnsavedChanges",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "doNotCheck",
          "returnValue": "I",
          "label": "Do Not Check"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "values": [
              "DEFINED_BY_DA",
              "DEFINED_BY_DA_ACTION"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Warn on Unsaved Changes (select list) in button.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:1600",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1600",
      "builderLabel": "Requires Confirmation",
      "apexlangPath": "button.behavior.requiresConfirmation",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "STANDARD"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Requires Confirmation (yes no) in button.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:1601",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1601",
      "builderLabel": "Message",
      "apexlangPath": "button.confirmation.message",
      "type": "HTML",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1600",
            "path": "button.behavior.requiresConfirmation",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Message (html) in button.confirmation.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:1602",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1602",
      "builderLabel": "Style",
      "apexlangPath": "button.confirmation.style",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "information",
          "returnValue": "information",
          "label": "Information"
        },
        {
          "name": "warning",
          "returnValue": "warning",
          "label": "Warning"
        },
        {
          "name": "danger",
          "returnValue": "danger",
          "label": "Danger"
        },
        {
          "name": "success",
          "returnValue": "success",
          "label": "Success"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1600",
            "path": "button.behavior.requiresConfirmation",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Style (select list) in button.confirmation.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:2359",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "2359",
      "builderLabel": "Show Processing",
      "apexlangPath": "button.behavior.showProcessing",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "SUBMIT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Processing (yes no) in button.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:2432",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "2432",
      "builderLabel": "Type",
      "apexlangPath": "button.behavior.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "STANDARD",
      "values": [
        {
          "name": "standard",
          "returnValue": "STANDARD",
          "label": "Standard"
        },
        {
          "name": "menu",
          "returnValue": "MENU",
          "label": "Menu"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in button.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5100",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5100",
      "builderLabel": "Type",
      "apexlangPath": "button.serverSideCondition.type",
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
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5101",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5101",
      "builderLabel": "SQL Query",
      "apexlangPath": "button.serverSideCondition.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "button.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5102",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5102",
      "builderLabel": "Value",
      "apexlangPath": "button.serverSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "button.serverSideCondition.type",
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
      "description": "Value (text) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5103",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5103",
      "builderLabel": "Item",
      "apexlangPath": "button.serverSideCondition.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "button.serverSideCondition.type",
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
      "description": "Item (item) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5104",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5104",
      "builderLabel": "List",
      "apexlangPath": "button.serverSideCondition.list",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "button.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5105",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5105",
      "builderLabel": "Preference",
      "apexlangPath": "button.serverSideCondition.preference",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "button.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5106",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5106",
      "builderLabel": "Page",
      "apexlangPath": "button.serverSideCondition.page",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "button.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5107",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5107",
      "builderLabel": "Pages",
      "apexlangPath": "button.serverSideCondition.pages",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "button.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5108",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5108",
      "builderLabel": "Text",
      "apexlangPath": "button.serverSideCondition.text",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "button.serverSideCondition.type",
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
      "description": "Text (text) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5109",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5109",
      "builderLabel": "Value",
      "apexlangPath": "button.serverSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "button.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "VAL_OF_ITEM_IN_COND_EQ_COND2",
              "VAL_OF_ITEM_IN_COND_NOT_EQ_COND2",
              "VALUE_OF_ITEM_IN_COND_1_EQ_COND_2",
              "VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5110",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5110",
      "builderLabel": "Item",
      "apexlangPath": "button.serverSideCondition.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5100",
            "path": "button.serverSideCondition.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5111",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5111",
      "builderLabel": "Value",
      "apexlangPath": "button.serverSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "button.serverSideCondition.type",
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
      "description": "Value (text) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5112",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5112",
      "builderLabel": "Language",
      "apexlangPath": "button.serverSideCondition.language",
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
            "propertyId": "5100",
            "path": "button.serverSideCondition.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5113",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5113",
      "builderLabel": "SQL Expression",
      "apexlangPath": "button.serverSideCondition.sqlExpression",
      "type": "SQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5112",
            "path": "button.serverSideCondition.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5114",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5114",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "button.serverSideCondition.plsqlExpression",
      "type": "PLSQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5112",
            "path": "button.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5115",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5115",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "button.serverSideCondition.javaScriptExpression",
      "type": "MLE JAVASCRIPT EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5112",
            "path": "button.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5132",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5132",
      "builderLabel": "Language",
      "apexlangPath": "button.serverSideCondition.language",
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
            "propertyId": "5100",
            "path": "button.serverSideCondition.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5133",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5133",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "button.serverSideCondition.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5132",
            "path": "button.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5130:5134",
      "context": "button",
      "componentTypeId": "5130",
      "componentTitle": "Button",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5134",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "button.serverSideCondition.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5132",
            "path": "button.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in button.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:4",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "4",
      "builderLabel": "Comments",
      "apexlangPath": "menu.comments.comments",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Comments (text editor) in menu.comments.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:24",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "24",
      "builderLabel": "Authorization Scheme",
      "apexlangPath": "menu.security.authorizationScheme",
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
            "type": "IN_LIST",
            "propertyId": "238",
            "path": "menu.type",
            "hasToExist": true,
            "values": [
              "ENTRY",
              "SUB_MENU"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Authorization Scheme (component) in menu.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:38",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "38",
      "builderLabel": "Build Option",
      "apexlangPath": "menu.config.buildOption",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Build Option (component) in menu.config.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:97",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "97",
      "builderLabel": "Sequence",
      "apexlangPath": "menu.layout.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in menu.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:177",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "177",
      "builderLabel": "Label",
      "apexlangPath": "menu.label",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "238",
            "path": "menu.type",
            "hasToExist": true,
            "values": [
              "ENTRY",
              "SUB_MENU"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Label (text) in menu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:180",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "180",
      "builderLabel": "Static ID",
      "apexlangPath": "menu.advanced.staticId",
      "type": "STATIC ID",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Static ID (static id) in menu.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:238",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "238",
      "builderLabel": "Type",
      "apexlangPath": "menu.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "ENTRY",
      "values": [
        {
          "name": "menuEntry",
          "returnValue": "ENTRY",
          "label": "Menu Entry"
        },
        {
          "name": "subMenu",
          "returnValue": "SUB_MENU",
          "label": "Sub-Menu"
        },
        {
          "name": "separator",
          "returnValue": "SEPARATOR",
          "label": "Separator"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in menu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:602",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "602",
      "builderLabel": "Target",
      "apexlangPath": "menu.behavior.target",
      "type": "LINK_IN_APP",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "REDIRECT_PAGE"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Target (link_in_app) in menu.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:603",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "603",
      "builderLabel": "Target",
      "apexlangPath": "menu.behavior.target",
      "type": "LINK_IN_DIFF_APP",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "REDIRECT_APP"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Target (link_in_diff_app) in menu.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:604",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "604",
      "builderLabel": "Target URL",
      "apexlangPath": "menu.behavior.targetUrl",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "REDIRECT_URL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Target URL (text) in menu.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:739",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "739",
      "builderLabel": "Icon",
      "apexlangPath": "menu.appearance.icon",
      "type": "ICON",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "238",
            "path": "menu.type",
            "hasToExist": true,
            "values": [
              "ENTRY",
              "SUB_MENU"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Icon (icon) in menu.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:1182",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "1182",
      "builderLabel": "Type",
      "apexlangPath": "menu.behavior.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "REDIRECT_PAGE",
      "values": [
        {
          "name": "redirectThisApp",
          "returnValue": "REDIRECT_PAGE",
          "label": "Redirect to Page in this Application"
        },
        {
          "name": "redirectOtherApp",
          "returnValue": "REDIRECT_APP",
          "label": "Redirect to Page in a different Application"
        },
        {
          "name": "redirectUrl",
          "returnValue": "REDIRECT_URL",
          "label": "Redirect to URL"
        },
        {
          "name": "triggerAction",
          "returnValue": "DEFINED_BY_DA_ACTION",
          "label": "Trigger Action"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "238",
            "path": "menu.type",
            "hasToExist": true,
            "value": "ENTRY"
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in menu.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:1192",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "1192",
      "builderLabel": "Link Attributes",
      "apexlangPath": "menu.behavior.linkAttributes",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "values": [
              "REDIRECT_PAGE",
              "REDIRECT_APP",
              "REDIRECT_URL"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Link Attributes (text) in menu.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:2433",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "2433",
      "builderLabel": "Parent Menu",
      "apexlangPath": "menu.parentMenu",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Parent Menu (component) in menu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5100",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5100",
      "builderLabel": "Type",
      "apexlangPath": "menu.serverSideCondition.type",
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
            "type": "IN_LIST",
            "propertyId": "238",
            "path": "menu.type",
            "hasToExist": true,
            "values": [
              "ENTRY",
              "SUB_MENU"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5101",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5101",
      "builderLabel": "SQL Query",
      "apexlangPath": "menu.serverSideCondition.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5102",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5102",
      "builderLabel": "Value",
      "apexlangPath": "menu.serverSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
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
      "description": "Value (text) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5103",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5103",
      "builderLabel": "Item",
      "apexlangPath": "menu.serverSideCondition.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
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
      "description": "Item (item) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5104",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5104",
      "builderLabel": "List",
      "apexlangPath": "menu.serverSideCondition.list",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5105",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5105",
      "builderLabel": "Preference",
      "apexlangPath": "menu.serverSideCondition.preference",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5106",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5106",
      "builderLabel": "Page",
      "apexlangPath": "menu.serverSideCondition.page",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5107",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5107",
      "builderLabel": "Pages",
      "apexlangPath": "menu.serverSideCondition.pages",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5108",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5108",
      "builderLabel": "Text",
      "apexlangPath": "menu.serverSideCondition.text",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
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
      "description": "Text (text) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5109",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5109",
      "builderLabel": "Value",
      "apexlangPath": "menu.serverSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "VAL_OF_ITEM_IN_COND_EQ_COND2",
              "VAL_OF_ITEM_IN_COND_NOT_EQ_COND2",
              "VALUE_OF_ITEM_IN_COND_1_EQ_COND_2",
              "VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5110",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5110",
      "builderLabel": "Item",
      "apexlangPath": "menu.serverSideCondition.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5111",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5111",
      "builderLabel": "Value",
      "apexlangPath": "menu.serverSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
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
      "description": "Value (text) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5112",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5112",
      "builderLabel": "Language",
      "apexlangPath": "menu.serverSideCondition.language",
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
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5113",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5113",
      "builderLabel": "SQL Expression",
      "apexlangPath": "menu.serverSideCondition.sqlExpression",
      "type": "SQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5112",
            "path": "menu.serverSideCondition.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5114",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5114",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "menu.serverSideCondition.plsqlExpression",
      "type": "PLSQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5112",
            "path": "menu.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5115",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5115",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "menu.serverSideCondition.javaScriptExpression",
      "type": "MLE JAVASCRIPT EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5112",
            "path": "menu.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5132",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5132",
      "builderLabel": "Language",
      "apexlangPath": "menu.serverSideCondition.language",
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
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5133",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5133",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "menu.serverSideCondition.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5132",
            "path": "menu.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8720:5134",
      "context": "menu",
      "componentTypeId": "8720",
      "componentTitle": "Menu",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2432",
            "path": "button.behavior.type",
            "hasToExist": true,
            "value": "MENU"
          }
        ]
      },
      "propertyId": "5134",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "menu.serverSideCondition.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5132",
            "path": "menu.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:1",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "1",
      "builderLabel": "Name",
      "apexlangPath": "triggerAction.name",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Name (text) in triggerAction.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:4",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "4",
      "builderLabel": "Comments",
      "apexlangPath": "triggerAction.comments.comments",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Comments (text editor) in triggerAction.comments.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:24",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "24",
      "builderLabel": "Authorization Scheme",
      "apexlangPath": "triggerAction.security.authorizationScheme",
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
      "condition": null,
      "maxLength": null,
      "description": "Authorization Scheme (component) in triggerAction.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:38",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "38",
      "builderLabel": "Build Option",
      "apexlangPath": "triggerAction.config.buildOption",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Build Option (component) in triggerAction.config.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:60",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "60",
      "builderLabel": "Sequence",
      "apexlangPath": "triggerAction.execution.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in triggerAction.execution.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:70",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "70",
      "builderLabel": "Type",
      "apexlangPath": "triggerAction.clientSideCondition.type",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "item=value",
          "returnValue": "EQUALS",
          "label": "Item = Value"
        },
        {
          "name": "item!=value",
          "returnValue": "NOT_EQUALS",
          "label": "Item != Value"
        },
        {
          "name": "item>value",
          "returnValue": "GREATER_THAN",
          "label": "Item > Value"
        },
        {
          "name": "item>=value",
          "returnValue": "GREATER_THAN_OR_EQUAL",
          "label": "Item >= Value"
        },
        {
          "name": "item<value",
          "returnValue": "LESS_THAN",
          "label": "Item < Value"
        },
        {
          "name": "item<=value",
          "returnValue": "LESS_THAN_OR_EQUAL",
          "label": "Item <= Value"
        },
        {
          "name": "itemIsNull",
          "returnValue": "NULL",
          "label": "Item is null"
        },
        {
          "name": "itemIsNotNull",
          "returnValue": "NOT_NULL",
          "label": "Item is not null"
        },
        {
          "name": "itemIsInList",
          "returnValue": "IN_LIST",
          "label": "Item is in list"
        },
        {
          "name": "itemIsNotInList",
          "returnValue": "NOT_IN_LIST",
          "label": "Item is not in list"
        },
        {
          "name": "jsExpression",
          "returnValue": "JAVASCRIPT_EXPRESSION",
          "label": "JavaScript expression"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in triggerAction.clientSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:82",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "82",
      "builderLabel": "Action",
      "apexlangPath": "triggerAction.action",
      "type": "SUPPORTED UI",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Action (supported ui) in triggerAction.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:85",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "85",
      "builderLabel": "Selection Type",
      "apexlangPath": "triggerAction.affectedElements.selectionType",
      "type": "SELECT LIST",
      "required": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURE_IS_REQUIRED",
            "hasToExist": true,
            "value": "REQUIRED",
            "propertyId": "82"
          }
        ]
      },
      "defaultValue": null,
      "values": [
        {
          "name": "items",
          "returnValue": "ITEM",
          "label": "Item(s)"
        },
        {
          "name": "button",
          "returnValue": "BUTTON",
          "label": "Button"
        },
        {
          "name": "region",
          "returnValue": "REGION",
          "label": "Region"
        },
        {
          "name": "columns",
          "returnValue": "COLUMN",
          "label": "Column(s)"
        },
        {
          "name": "domObject",
          "returnValue": "DOM_OBJECT",
          "label": "DOM Object"
        },
        {
          "name": "jquerySelector",
          "returnValue": "JQUERY_SELECTOR",
          "label": "jQuery Selector"
        },
        {
          "name": "javaScriptExpression",
          "returnValue": "JAVASCRIPT_EXPRESSION",
          "label": "JavaScript Expression"
        },
        {
          "name": "triggeringElement",
          "returnValue": "TRIGGERING_ELEMENT",
          "label": "Triggering Element"
        },
        {
          "name": "eventSource",
          "returnValue": "EVENT_SOURCE",
          "label": "Event Source"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "ITEM",
              "BUTTON",
              "REGION",
              "JQUERY_SELECTOR",
              "JAVASCRIPT_EXPRESSION",
              "TRIGGERING_ELEMENT",
              "EVENT_SOURCE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Selection Type (select list) in triggerAction.affectedElements.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:86",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "86",
      "builderLabel": "Region",
      "apexlangPath": "triggerAction.affectedElements.region",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "85",
            "path": "triggerAction.affectedElements.selectionType",
            "hasToExist": true,
            "value": "REGION"
          }
        ]
      },
      "maxLength": null,
      "description": "Region (component) in triggerAction.affectedElements.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:87",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "87",
      "builderLabel": "Button",
      "apexlangPath": "triggerAction.affectedElements.button",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "85",
            "path": "triggerAction.affectedElements.selectionType",
            "hasToExist": true,
            "value": "BUTTON"
          }
        ]
      },
      "maxLength": null,
      "description": "Button (component) in triggerAction.affectedElements.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:88",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "88",
      "builderLabel": "Item(s)",
      "apexlangPath": "triggerAction.affectedElements.items",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "85",
            "path": "triggerAction.affectedElements.selectionType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item(s) (item) in triggerAction.affectedElements.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:90",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "90",
      "builderLabel": "jQuery Selector",
      "apexlangPath": "triggerAction.affectedElements.jquerySelector",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "85",
            "path": "triggerAction.affectedElements.selectionType",
            "hasToExist": true,
            "value": "JQUERY_SELECTOR"
          }
        ]
      },
      "maxLength": 4000,
      "description": "jQuery Selector (text) in triggerAction.affectedElements.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:91",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "91",
      "builderLabel": "Stop Execution On Error",
      "apexlangPath": "triggerAction.execution.stopExecutionOnError",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "STOP_EXECUTION_ON_ERROR"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Stop Execution On Error (yes no) in triggerAction.execution.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:92",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "92",
      "builderLabel": "Wait For Result",
      "apexlangPath": "triggerAction.execution.waitForResult",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "WAIT_FOR_RESULT"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Wait For Result (yes no) in triggerAction.execution.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:180",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "180",
      "builderLabel": "Static ID",
      "apexlangPath": "triggerAction.advanced.staticId",
      "type": "STATIC ID",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Static ID (static id) in triggerAction.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:755",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "755",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "triggerAction.affectedElements.javaScriptExpression",
      "type": "JAVASCRIPT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "85",
            "path": "triggerAction.affectedElements.selectionType",
            "hasToExist": true,
            "value": "JAVASCRIPT_EXPRESSION"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (javascript) in triggerAction.affectedElements.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:766",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "766",
      "builderLabel": "Value",
      "apexlangPath": "triggerAction.clientSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "70",
            "path": "triggerAction.clientSideCondition.type",
            "hasToExist": true,
            "values": [
              "EQUALS",
              "NOT_EQUALS",
              "GREATER_THAN",
              "GREATER_THAN_OR_EQUAL",
              "LESS_THAN",
              "LESS_THAN_OR_EQUAL"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in triggerAction.clientSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:767",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "767",
      "builderLabel": "List",
      "apexlangPath": "triggerAction.clientSideCondition.list",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "70",
            "path": "triggerAction.clientSideCondition.type",
            "hasToExist": true,
            "values": [
              "IN_LIST",
              "NOT_IN_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in triggerAction.clientSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:768",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "768",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "triggerAction.clientSideCondition.javaScriptExpression",
      "type": "JAVASCRIPT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "70",
            "path": "triggerAction.clientSideCondition.type",
            "hasToExist": true,
            "value": "JAVASCRIPT_EXPRESSION"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (javascript) in triggerAction.clientSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:943",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "943",
      "builderLabel": "Initialization JavaScript Function",
      "apexlangPath": "triggerAction.advanced.initJavaScriptFunction",
      "type": "JAVASCRIPT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "INIT_JAVASCRIPT_CODE"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Initialization JavaScript Function (javascript) in triggerAction.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:950",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "950",
      "builderLabel": "Item",
      "apexlangPath": "triggerAction.clientSideCondition.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "70",
            "path": "triggerAction.clientSideCondition.type",
            "hasToExist": true,
            "values": [
              "EQUALS",
              "NOT_EQUALS",
              "GREATER_THAN",
              "GREATER_THAN_OR_EQUAL",
              "LESS_THAN",
              "LESS_THAN_OR_EQUAL",
              "NULL",
              "NOT_NULL",
              "IN_LIST",
              "NOT_IN_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in triggerAction.clientSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5100",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5100",
      "builderLabel": "Type",
      "apexlangPath": "triggerAction.serverSideCondition.type",
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
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5101",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5101",
      "builderLabel": "SQL Query",
      "apexlangPath": "triggerAction.serverSideCondition.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5102",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5102",
      "builderLabel": "Value",
      "apexlangPath": "triggerAction.serverSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
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
      "description": "Value (text) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5103",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5103",
      "builderLabel": "Item",
      "apexlangPath": "triggerAction.serverSideCondition.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
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
      "description": "Item (item) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5104",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5104",
      "builderLabel": "List",
      "apexlangPath": "triggerAction.serverSideCondition.list",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5105",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5105",
      "builderLabel": "Preference",
      "apexlangPath": "triggerAction.serverSideCondition.preference",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5106",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5106",
      "builderLabel": "Page",
      "apexlangPath": "triggerAction.serverSideCondition.page",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5107",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5107",
      "builderLabel": "Pages",
      "apexlangPath": "triggerAction.serverSideCondition.pages",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5108",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5108",
      "builderLabel": "Text",
      "apexlangPath": "triggerAction.serverSideCondition.text",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
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
      "description": "Text (text) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5109",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5109",
      "builderLabel": "Value",
      "apexlangPath": "triggerAction.serverSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "VAL_OF_ITEM_IN_COND_EQ_COND2",
              "VAL_OF_ITEM_IN_COND_NOT_EQ_COND2",
              "VALUE_OF_ITEM_IN_COND_1_EQ_COND_2",
              "VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5110",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5110",
      "builderLabel": "Item",
      "apexlangPath": "triggerAction.serverSideCondition.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5111",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5111",
      "builderLabel": "Value",
      "apexlangPath": "triggerAction.serverSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
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
      "description": "Value (text) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5112",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5112",
      "builderLabel": "Language",
      "apexlangPath": "triggerAction.serverSideCondition.language",
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
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5113",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5113",
      "builderLabel": "SQL Expression",
      "apexlangPath": "triggerAction.serverSideCondition.sqlExpression",
      "type": "SQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5112",
            "path": "triggerAction.serverSideCondition.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5114",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5114",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "triggerAction.serverSideCondition.plsqlExpression",
      "type": "PLSQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5112",
            "path": "triggerAction.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5115",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5115",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "triggerAction.serverSideCondition.javaScriptExpression",
      "type": "MLE JAVASCRIPT EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5112",
            "path": "triggerAction.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5132",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5132",
      "builderLabel": "Language",
      "apexlangPath": "triggerAction.serverSideCondition.language",
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
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5133",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5133",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "triggerAction.serverSideCondition.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5132",
            "path": "triggerAction.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:5134",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5134",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "triggerAction.serverSideCondition.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5132",
            "path": "triggerAction.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:89890006",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "89890006",
      "builderLabel": "Enabled",
      "apexlangPath": "triggerAction.genAI.enabled",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "AI_ENABLED"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Enabled (yes no) in triggerAction.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:89890007",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "89890007",
      "builderLabel": "Agent",
      "apexlangPath": "triggerAction.genAI.agent",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "AI_ENABLED_ALWAYS",
              "AI_ENABLED"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "89890006",
            "path": "triggerAction.genAI.enabled",
            "hasToExist": false,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Agent (component) in triggerAction.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:89890008",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "89890008",
      "builderLabel": "Service",
      "apexlangPath": "triggerAction.genAI.service",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NULL",
            "propertyId": "89890007",
            "path": "triggerAction.genAI.agent",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Service (component) in triggerAction.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:89890009",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "89890009",
      "builderLabel": "System Prompt",
      "apexlangPath": "triggerAction.genAI.systemPrompt",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "AI_SYSTEM_PROMPT"
            ]
          },
          {
            "type": "NULL",
            "propertyId": "89890007",
            "path": "triggerAction.genAI.agent",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "System Prompt (text editor) in triggerAction.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:89890010",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "89890010",
      "builderLabel": "Welcome Message",
      "apexlangPath": "triggerAction.genAI.welcomeMessage",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "AI_UI"
            ]
          },
          {
            "type": "NULL",
            "propertyId": "89890007",
            "path": "triggerAction.genAI.agent",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "Welcome Message (html) in triggerAction.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8740:89890011",
      "context": "triggerAction",
      "componentTypeId": "8740",
      "componentTitle": "Trigger Action",
      "parentContext": "button",
      "parentComponentTypeId": "5130",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "252",
            "path": "button.behavior.action",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "89890011",
      "builderLabel": "Items to Submit",
      "apexlangPath": "triggerAction.genAI.itemsToSubmit",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "AI_ENABLED_ALWAYS",
              "AI_ENABLED"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "89890006",
            "path": "triggerAction.genAI.enabled",
            "hasToExist": false,
            "value": "Y"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Items to Submit (item) in triggerAction.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:1",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "1",
      "builderLabel": "Name",
      "apexlangPath": "triggerAction.name",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Name (text) in triggerAction.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:4",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "4",
      "builderLabel": "Comments",
      "apexlangPath": "triggerAction.comments.comments",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Comments (text editor) in triggerAction.comments.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:24",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "24",
      "builderLabel": "Authorization Scheme",
      "apexlangPath": "triggerAction.security.authorizationScheme",
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
      "condition": null,
      "maxLength": null,
      "description": "Authorization Scheme (component) in triggerAction.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:38",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "38",
      "builderLabel": "Build Option",
      "apexlangPath": "triggerAction.config.buildOption",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Build Option (component) in triggerAction.config.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:60",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "60",
      "builderLabel": "Sequence",
      "apexlangPath": "triggerAction.execution.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in triggerAction.execution.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:70",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "70",
      "builderLabel": "Type",
      "apexlangPath": "triggerAction.clientSideCondition.type",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "item=value",
          "returnValue": "EQUALS",
          "label": "Item = Value"
        },
        {
          "name": "item!=value",
          "returnValue": "NOT_EQUALS",
          "label": "Item != Value"
        },
        {
          "name": "item>value",
          "returnValue": "GREATER_THAN",
          "label": "Item > Value"
        },
        {
          "name": "item>=value",
          "returnValue": "GREATER_THAN_OR_EQUAL",
          "label": "Item >= Value"
        },
        {
          "name": "item<value",
          "returnValue": "LESS_THAN",
          "label": "Item < Value"
        },
        {
          "name": "item<=value",
          "returnValue": "LESS_THAN_OR_EQUAL",
          "label": "Item <= Value"
        },
        {
          "name": "itemIsNull",
          "returnValue": "NULL",
          "label": "Item is null"
        },
        {
          "name": "itemIsNotNull",
          "returnValue": "NOT_NULL",
          "label": "Item is not null"
        },
        {
          "name": "itemIsInList",
          "returnValue": "IN_LIST",
          "label": "Item is in list"
        },
        {
          "name": "itemIsNotInList",
          "returnValue": "NOT_IN_LIST",
          "label": "Item is not in list"
        },
        {
          "name": "jsExpression",
          "returnValue": "JAVASCRIPT_EXPRESSION",
          "label": "JavaScript expression"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in triggerAction.clientSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:82",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "82",
      "builderLabel": "Action",
      "apexlangPath": "triggerAction.action",
      "type": "SUPPORTED UI",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Action (supported ui) in triggerAction.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:85",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "85",
      "builderLabel": "Selection Type",
      "apexlangPath": "triggerAction.affectedElements.selectionType",
      "type": "SELECT LIST",
      "required": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURE_IS_REQUIRED",
            "hasToExist": true,
            "value": "REQUIRED",
            "propertyId": "82"
          }
        ]
      },
      "defaultValue": null,
      "values": [
        {
          "name": "items",
          "returnValue": "ITEM",
          "label": "Item(s)"
        },
        {
          "name": "button",
          "returnValue": "BUTTON",
          "label": "Button"
        },
        {
          "name": "region",
          "returnValue": "REGION",
          "label": "Region"
        },
        {
          "name": "columns",
          "returnValue": "COLUMN",
          "label": "Column(s)"
        },
        {
          "name": "domObject",
          "returnValue": "DOM_OBJECT",
          "label": "DOM Object"
        },
        {
          "name": "jquerySelector",
          "returnValue": "JQUERY_SELECTOR",
          "label": "jQuery Selector"
        },
        {
          "name": "javaScriptExpression",
          "returnValue": "JAVASCRIPT_EXPRESSION",
          "label": "JavaScript Expression"
        },
        {
          "name": "triggeringElement",
          "returnValue": "TRIGGERING_ELEMENT",
          "label": "Triggering Element"
        },
        {
          "name": "eventSource",
          "returnValue": "EVENT_SOURCE",
          "label": "Event Source"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "ITEM",
              "BUTTON",
              "REGION",
              "JQUERY_SELECTOR",
              "JAVASCRIPT_EXPRESSION",
              "TRIGGERING_ELEMENT",
              "EVENT_SOURCE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Selection Type (select list) in triggerAction.affectedElements.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:86",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "86",
      "builderLabel": "Region",
      "apexlangPath": "triggerAction.affectedElements.region",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "85",
            "path": "triggerAction.affectedElements.selectionType",
            "hasToExist": true,
            "value": "REGION"
          }
        ]
      },
      "maxLength": null,
      "description": "Region (component) in triggerAction.affectedElements.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:87",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "87",
      "builderLabel": "Button",
      "apexlangPath": "triggerAction.affectedElements.button",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "85",
            "path": "triggerAction.affectedElements.selectionType",
            "hasToExist": true,
            "value": "BUTTON"
          }
        ]
      },
      "maxLength": null,
      "description": "Button (component) in triggerAction.affectedElements.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:88",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "88",
      "builderLabel": "Item(s)",
      "apexlangPath": "triggerAction.affectedElements.items",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "85",
            "path": "triggerAction.affectedElements.selectionType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item(s) (item) in triggerAction.affectedElements.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:90",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "90",
      "builderLabel": "jQuery Selector",
      "apexlangPath": "triggerAction.affectedElements.jquerySelector",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "85",
            "path": "triggerAction.affectedElements.selectionType",
            "hasToExist": true,
            "value": "JQUERY_SELECTOR"
          }
        ]
      },
      "maxLength": 4000,
      "description": "jQuery Selector (text) in triggerAction.affectedElements.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:91",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "91",
      "builderLabel": "Stop Execution On Error",
      "apexlangPath": "triggerAction.execution.stopExecutionOnError",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "STOP_EXECUTION_ON_ERROR"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Stop Execution On Error (yes no) in triggerAction.execution.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:92",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "92",
      "builderLabel": "Wait For Result",
      "apexlangPath": "triggerAction.execution.waitForResult",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "WAIT_FOR_RESULT"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Wait For Result (yes no) in triggerAction.execution.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:180",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "180",
      "builderLabel": "Static ID",
      "apexlangPath": "triggerAction.advanced.staticId",
      "type": "STATIC ID",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Static ID (static id) in triggerAction.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:755",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "755",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "triggerAction.affectedElements.javaScriptExpression",
      "type": "JAVASCRIPT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "85",
            "path": "triggerAction.affectedElements.selectionType",
            "hasToExist": true,
            "value": "JAVASCRIPT_EXPRESSION"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (javascript) in triggerAction.affectedElements.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:766",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "766",
      "builderLabel": "Value",
      "apexlangPath": "triggerAction.clientSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "70",
            "path": "triggerAction.clientSideCondition.type",
            "hasToExist": true,
            "values": [
              "EQUALS",
              "NOT_EQUALS",
              "GREATER_THAN",
              "GREATER_THAN_OR_EQUAL",
              "LESS_THAN",
              "LESS_THAN_OR_EQUAL"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in triggerAction.clientSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:767",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "767",
      "builderLabel": "List",
      "apexlangPath": "triggerAction.clientSideCondition.list",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "70",
            "path": "triggerAction.clientSideCondition.type",
            "hasToExist": true,
            "values": [
              "IN_LIST",
              "NOT_IN_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in triggerAction.clientSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:768",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "768",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "triggerAction.clientSideCondition.javaScriptExpression",
      "type": "JAVASCRIPT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "70",
            "path": "triggerAction.clientSideCondition.type",
            "hasToExist": true,
            "value": "JAVASCRIPT_EXPRESSION"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (javascript) in triggerAction.clientSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:943",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "943",
      "builderLabel": "Initialization JavaScript Function",
      "apexlangPath": "triggerAction.advanced.initJavaScriptFunction",
      "type": "JAVASCRIPT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "INIT_JAVASCRIPT_CODE"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Initialization JavaScript Function (javascript) in triggerAction.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:950",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "950",
      "builderLabel": "Item",
      "apexlangPath": "triggerAction.clientSideCondition.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "70",
            "path": "triggerAction.clientSideCondition.type",
            "hasToExist": true,
            "values": [
              "EQUALS",
              "NOT_EQUALS",
              "GREATER_THAN",
              "GREATER_THAN_OR_EQUAL",
              "LESS_THAN",
              "LESS_THAN_OR_EQUAL",
              "NULL",
              "NOT_NULL",
              "IN_LIST",
              "NOT_IN_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in triggerAction.clientSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5100",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5100",
      "builderLabel": "Type",
      "apexlangPath": "triggerAction.serverSideCondition.type",
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
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5101",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5101",
      "builderLabel": "SQL Query",
      "apexlangPath": "triggerAction.serverSideCondition.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5102",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5102",
      "builderLabel": "Value",
      "apexlangPath": "triggerAction.serverSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
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
      "description": "Value (text) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5103",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5103",
      "builderLabel": "Item",
      "apexlangPath": "triggerAction.serverSideCondition.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
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
      "description": "Item (item) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5104",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5104",
      "builderLabel": "List",
      "apexlangPath": "triggerAction.serverSideCondition.list",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5105",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5105",
      "builderLabel": "Preference",
      "apexlangPath": "triggerAction.serverSideCondition.preference",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5106",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5106",
      "builderLabel": "Page",
      "apexlangPath": "triggerAction.serverSideCondition.page",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5107",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5107",
      "builderLabel": "Pages",
      "apexlangPath": "triggerAction.serverSideCondition.pages",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5108",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5108",
      "builderLabel": "Text",
      "apexlangPath": "triggerAction.serverSideCondition.text",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
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
      "description": "Text (text) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5109",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5109",
      "builderLabel": "Value",
      "apexlangPath": "triggerAction.serverSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "VAL_OF_ITEM_IN_COND_EQ_COND2",
              "VAL_OF_ITEM_IN_COND_NOT_EQ_COND2",
              "VALUE_OF_ITEM_IN_COND_1_EQ_COND_2",
              "VALUE_OF_ITEM_IN_COND_1_NOT_EQ_COND_2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5110",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5110",
      "builderLabel": "Item",
      "apexlangPath": "triggerAction.serverSideCondition.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5111",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5111",
      "builderLabel": "Value",
      "apexlangPath": "triggerAction.serverSideCondition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
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
      "description": "Value (text) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5112",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5112",
      "builderLabel": "Language",
      "apexlangPath": "triggerAction.serverSideCondition.language",
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
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5113",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5113",
      "builderLabel": "SQL Expression",
      "apexlangPath": "triggerAction.serverSideCondition.sqlExpression",
      "type": "SQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5112",
            "path": "triggerAction.serverSideCondition.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5114",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5114",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "triggerAction.serverSideCondition.plsqlExpression",
      "type": "PLSQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5112",
            "path": "triggerAction.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5115",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5115",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "triggerAction.serverSideCondition.javaScriptExpression",
      "type": "MLE JAVASCRIPT EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5112",
            "path": "triggerAction.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5132",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5132",
      "builderLabel": "Language",
      "apexlangPath": "triggerAction.serverSideCondition.language",
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
            "propertyId": "5100",
            "path": "triggerAction.serverSideCondition.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5133",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5133",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "triggerAction.serverSideCondition.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5132",
            "path": "triggerAction.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:5134",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "5134",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "triggerAction.serverSideCondition.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5132",
            "path": "triggerAction.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in triggerAction.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:89890006",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "89890006",
      "builderLabel": "Enabled",
      "apexlangPath": "triggerAction.genAI.enabled",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "AI_ENABLED"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Enabled (yes no) in triggerAction.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:89890007",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "89890007",
      "builderLabel": "Agent",
      "apexlangPath": "triggerAction.genAI.agent",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "AI_ENABLED_ALWAYS",
              "AI_ENABLED"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "89890006",
            "path": "triggerAction.genAI.enabled",
            "hasToExist": false,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Agent (component) in triggerAction.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:89890008",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "89890008",
      "builderLabel": "Service",
      "apexlangPath": "triggerAction.genAI.service",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NULL",
            "propertyId": "89890007",
            "path": "triggerAction.genAI.agent",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Service (component) in triggerAction.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:89890009",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "89890009",
      "builderLabel": "System Prompt",
      "apexlangPath": "triggerAction.genAI.systemPrompt",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "AI_SYSTEM_PROMPT"
            ]
          },
          {
            "type": "NULL",
            "propertyId": "89890007",
            "path": "triggerAction.genAI.agent",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "System Prompt (text editor) in triggerAction.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:89890010",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "89890010",
      "builderLabel": "Welcome Message",
      "apexlangPath": "triggerAction.genAI.welcomeMessage",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "AI_UI"
            ]
          },
          {
            "type": "NULL",
            "propertyId": "89890007",
            "path": "triggerAction.genAI.agent",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "Welcome Message (html) in triggerAction.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8760:89890011",
      "context": "triggerAction",
      "componentTypeId": "8760",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8720",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "menu.behavior.type",
            "hasToExist": true,
            "value": "DEFINED_BY_DA_ACTION"
          }
        ]
      },
      "propertyId": "89890011",
      "builderLabel": "Items to Submit",
      "apexlangPath": "triggerAction.genAI.itemsToSubmit",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "82",
            "path": "triggerAction.action",
            "hasToExist": true,
            "values": [
              "AI_ENABLED_ALWAYS",
              "AI_ENABLED"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "89890006",
            "path": "triggerAction.genAI.enabled",
            "hasToExist": false,
            "value": "Y"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Items to Submit (item) in triggerAction.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    }
  ],
  "currentExamples": {
    "regions": [],
    "items": [],
    "buttons": [
      {
        "id": "page:300/button:toggle-grid-layout",
        "pageId": 300,
        "key": "toggle-grid-layout",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1100/button:std-dialog-view",
        "pageId": 1100,
        "key": "std-dialog-view",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "REDIRECT_PAGE"
      },
      {
        "id": "page:1100/button:wiz-dialog-view",
        "pageId": 1100,
        "key": "wiz-dialog-view",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "REDIRECT_PAGE"
      },
      {
        "id": "page:1114/button:p1114-login",
        "pageId": 1114,
        "key": "p1114-login",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1116/button:edit",
        "pageId": 1116,
        "key": "edit",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#",
          "t-Button--link"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1201/button:change",
        "pageId": 1201,
        "key": "change",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1201/button:close",
        "pageId": 1201,
        "key": "close",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1201/button:copy",
        "pageId": 1201,
        "key": "copy",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1201/button:create",
        "pageId": 1201,
        "key": "create",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1201/button:delete",
        "pageId": 1201,
        "key": "delete",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1201/button:edit",
        "pageId": 1201,
        "key": "edit",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1201/button:help",
        "pageId": 1201,
        "key": "help",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1201/button:next",
        "pageId": 1201,
        "key": "next",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1201/button:previous",
        "pageId": 1201,
        "key": "previous",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1202/button:close",
        "pageId": 1202,
        "key": "close",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1202/button:continue",
        "pageId": 1202,
        "key": "continue",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1202/button:create",
        "pageId": 1202,
        "key": "create",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1202/button:next",
        "pageId": 1202,
        "key": "next",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1202/button:previous",
        "pageId": 1202,
        "key": "previous",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1203/button:button",
        "pageId": 1203,
        "key": "button",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1204/button:btn-grp-a",
        "pageId": 1204,
        "key": "btn-grp-a",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#",
          "t-Button--pillStart"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1204/button:btn-grp-b",
        "pageId": 1204,
        "key": "btn-grp-b",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#",
          "t-Button--pill"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1204/button:btn-grp-c",
        "pageId": 1204,
        "key": "btn-grp-c",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#",
          "t-Button--pillEnd"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1205/button:btn-bp-chg",
        "pageId": 1205,
        "key": "btn-bp-chg",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1205/button:btn-bp-close",
        "pageId": 1205,
        "key": "btn-bp-close",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1205/button:btn-bp-coy",
        "pageId": 1205,
        "key": "btn-bp-coy",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1205/button:btn-bp-create",
        "pageId": 1205,
        "key": "btn-bp-create",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1205/button:btn-bp-del",
        "pageId": 1205,
        "key": "btn-bp-del",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1205/button:btn-bp-edit",
        "pageId": 1205,
        "key": "btn-bp-edit",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1205/button:btn-bp-help",
        "pageId": 1205,
        "key": "btn-bp-help",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1205/button:btn-bp-next",
        "pageId": 1205,
        "key": "btn-bp-next",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1205/button:btn-bp-prev",
        "pageId": 1205,
        "key": "btn-bp-prev",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1206/button:change",
        "pageId": 1206,
        "key": "change",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1206/button:close",
        "pageId": 1206,
        "key": "close",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1206/button:copy",
        "pageId": 1206,
        "key": "copy",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1206/button:create",
        "pageId": 1206,
        "key": "create",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1206/button:edit",
        "pageId": 1206,
        "key": "edit",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1206/button:next",
        "pageId": 1206,
        "key": "next",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1206/button:previous",
        "pageId": 1206,
        "key": "previous",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1207/button:change",
        "pageId": 1207,
        "key": "change",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1207/button:close",
        "pageId": 1207,
        "key": "close",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1207/button:copy",
        "pageId": 1207,
        "key": "copy",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1207/button:create",
        "pageId": 1207,
        "key": "create",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1207/button:delete",
        "pageId": 1207,
        "key": "delete",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#",
          "t-Button--simple"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1207/button:edit",
        "pageId": 1207,
        "key": "edit",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1207/button:help",
        "pageId": 1207,
        "key": "help",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1207/button:next",
        "pageId": 1207,
        "key": "next",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1207/button:previous",
        "pageId": 1207,
        "key": "previous",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1208/button:open-modal-wiz",
        "pageId": 1208,
        "key": "open-modal-wiz",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "REDIRECT_PAGE"
      },
      {
        "id": "page:1209/button:change",
        "pageId": 1209,
        "key": "change",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1209/button:edit",
        "pageId": 1209,
        "key": "edit",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1209/button:next",
        "pageId": 1209,
        "key": "next",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1209/button:previous",
        "pageId": 1209,
        "key": "previous",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1250/button:btn-bp-chg",
        "pageId": 1250,
        "key": "btn-bp-chg",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1250/button:btn-bp-close",
        "pageId": 1250,
        "key": "btn-bp-close",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1250/button:btn-bp-create",
        "pageId": 1250,
        "key": "btn-bp-create",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1250/button:btn-bp-del",
        "pageId": 1250,
        "key": "btn-bp-del",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1250/button:btn-bp-edit",
        "pageId": 1250,
        "key": "btn-bp-edit",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1250/button:btn-bp-next",
        "pageId": 1250,
        "key": "btn-bp-next",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1250/button:btn-bp-prev",
        "pageId": 1250,
        "key": "btn-bp-prev",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1250/button:btn-br-create",
        "pageId": 1250,
        "key": "btn-br-create",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1306/button:menu-button-2",
        "pageId": 1306,
        "key": "menu-button-2",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1402/button:right-of-ir-bar",
        "pageId": 1402,
        "key": "right-of-ir-bar",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1500/button:hot",
        "pageId": 1500,
        "key": "hot",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1500/button:text",
        "pageId": 1500,
        "key": "text",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1910/button:open-auto-size",
        "pageId": 1910,
        "key": "open-auto-size",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "REDIRECT_PAGE"
      },
      {
        "id": "page:1910/button:open-fit-dialog",
        "pageId": 1910,
        "key": "open-fit-dialog",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#",
          "t-Button--gapLeft"
        ],
        "action": "REDIRECT_PAGE"
      },
      {
        "id": "page:1910/button:open-fixed",
        "pageId": 1910,
        "key": "open-fixed",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#",
          "t-Button--gapLeft"
        ],
        "action": "REDIRECT_PAGE"
      },
      {
        "id": "page:1911/button:cancel",
        "pageId": 1911,
        "key": "cancel",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1911/button:cancel-2",
        "pageId": 1911,
        "key": "cancel-2",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "REDIRECT_URL"
      },
      {
        "id": "page:1911/button:ok",
        "pageId": 1911,
        "key": "ok",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "REDIRECT_URL"
      },
      {
        "id": "page:1911/button:ok-2",
        "pageId": 1911,
        "key": "ok-2",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "REDIRECT_URL"
      },
      {
        "id": "page:1911/button:open-auto-size",
        "pageId": 1911,
        "key": "open-auto-size",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1911/button:open-fixed",
        "pageId": 1911,
        "key": "open-fixed",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#",
          "t-Button--gapLeft"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1914/button:cancel",
        "pageId": 1914,
        "key": "cancel",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1914/button:create",
        "pageId": 1914,
        "key": "create",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1915/button:cancel",
        "pageId": 1915,
        "key": "cancel",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1915/button:cancel-2",
        "pageId": 1915,
        "key": "cancel-2",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1915/button:ok",
        "pageId": 1915,
        "key": "ok",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1915/button:ok-2",
        "pageId": 1915,
        "key": "ok-2",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1915/button:ok-3",
        "pageId": 1915,
        "key": "ok-3",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1915/button:open-auto-size",
        "pageId": 1915,
        "key": "open-auto-size",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1915/button:open-callout",
        "pageId": 1915,
        "key": "open-callout",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#",
          "t-Button--gapLeft"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1915/button:open-fixed",
        "pageId": 1915,
        "key": "open-fixed",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#",
          "t-Button--gapLeft"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1916/button:cancel",
        "pageId": 1916,
        "key": "cancel",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1916/button:cancel-2",
        "pageId": 1916,
        "key": "cancel-2",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1916/button:ok",
        "pageId": 1916,
        "key": "ok",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1916/button:ok-2",
        "pageId": 1916,
        "key": "ok-2",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1916/button:open-auto-size",
        "pageId": 1916,
        "key": "open-auto-size",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "REDIRECT_URL"
      },
      {
        "id": "page:1916/button:open-fixed",
        "pageId": 1916,
        "key": "open-fixed",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#",
          "t-Button--gapLeft"
        ],
        "action": "REDIRECT_URL"
      },
      {
        "id": "page:1917/button:open-auto-size",
        "pageId": 1917,
        "key": "open-auto-size",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "REDIRECT_PAGE"
      },
      {
        "id": "page:1917/button:open-fixed",
        "pageId": 1917,
        "key": "open-fixed",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#",
          "t-Button--gapLeft"
        ],
        "action": "REDIRECT_PAGE"
      },
      {
        "id": "page:1920/button:cancel",
        "pageId": 1920,
        "key": "cancel",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1921/button:cancel",
        "pageId": 1921,
        "key": "cancel",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1922/button:cancel",
        "pageId": 1922,
        "key": "cancel",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "DEFINED_BY_DA"
      },
      {
        "id": "page:1922/button:finish",
        "pageId": 1922,
        "key": "finish",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "SUBMIT"
      },
      {
        "id": "page:6100/button:icon-dialog-button",
        "pageId": 6100,
        "key": "icon-dialog-button",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "REDIRECT_PAGE"
      },
      {
        "id": "page:9999/button:login",
        "pageId": 9999,
        "key": "login",
        "template": "Text",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "action": "SUBMIT"
      }
    ],
    "pages": []
  }
}
```

Complete option groups, defaults, presets and source context are available in component:source/parameters.
