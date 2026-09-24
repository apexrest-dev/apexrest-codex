# Date Picker: parameters

component:items/date-picker

Parameter identities include their component context and APEXlang path. UI labels alone are not unique. Raw database return values and DSL enum values may differ. Missing descriptions or unresolved paths are not inferred as supported syntax.

Region template options and component-template options are independent surfaces. Current selections do not establish defaults. #DEFAULT# selects template defaults; it is not a CSS class.

```json
{
  "templateOptions": [
    {
      "id": "template-option:FIELD/DISPLAY_AS_PILL_BUTTON",
      "name": "DISPLAY_AS_PILL_BUTTON",
      "label": "Display as Pill Button",
      "cssClasses": [
        "t-Form-fieldContainer--radioButtonGroup"
      ],
      "groupId": "template-group:field/radio-group-display",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Displays the radio buttons to look like a button set / pill button.  Note that the the radio buttons must all be in the same row for this option to work.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/DISPLAY_TEXT_STYLE_BOLD",
      "name": "DISPLAY_TEXT_STYLE_BOLD",
      "label": "Bold",
      "cssClasses": [
        "t-Form-fieldContainer--boldDisplay"
      ],
      "groupId": "template-group:field/display-text-style",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Bold: applies t-Form-fieldContainer--boldDisplay within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:FIELD/DISPLAY_TEXT_STYLE_NORMAL",
      "name": "DISPLAY_TEXT_STYLE_NORMAL",
      "label": "Normal",
      "cssClasses": [
        "t-Form-fieldContainer--normalDisplay"
      ],
      "groupId": "template-group:field/display-text-style",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Normal: applies t-Form-fieldContainer--normalDisplay within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:FIELD/FBM_LARGE",
      "name": "FBM_LARGE",
      "label": "Large",
      "cssClasses": [
        "margin-bottom-lg"
      ],
      "groupId": "template-group:field/bottom-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a large bottom margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FBM_MEDIUM",
      "name": "FBM_MEDIUM",
      "label": "Medium",
      "cssClasses": [
        "margin-bottom-md"
      ],
      "groupId": "template-group:field/bottom-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a medium bottom margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FBM_NONE",
      "name": "FBM_NONE",
      "label": "None",
      "cssClasses": [
        "margin-bottom-none"
      ],
      "groupId": "template-group:field/bottom-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Removes the bottom margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FBM_SMALL",
      "name": "FBM_SMALL",
      "label": "Small",
      "cssClasses": [
        "margin-bottom-sm"
      ],
      "groupId": "template-group:field/bottom-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a small bottom margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FLM_LARGE",
      "name": "FLM_LARGE",
      "label": "Large",
      "cssClasses": [
        "margin-left-lg"
      ],
      "groupId": "template-group:field/left-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a large left margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FLM_MEDIUM",
      "name": "FLM_MEDIUM",
      "label": "Medium",
      "cssClasses": [
        "margin-left-md"
      ],
      "groupId": "template-group:field/left-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a medium left margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FLM_NONE",
      "name": "FLM_NONE",
      "label": "None",
      "cssClasses": [
        "margin-left-none"
      ],
      "groupId": "template-group:field/left-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Removes the left margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FLM_SMALL",
      "name": "FLM_SMALL",
      "label": "Small",
      "cssClasses": [
        "margin-left-sm"
      ],
      "groupId": "template-group:field/left-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a small left margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FRM_LARGE",
      "name": "FRM_LARGE",
      "label": "Large",
      "cssClasses": [
        "margin-right-lg"
      ],
      "groupId": "template-group:field/right-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a large right margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FRM_MEDIUM",
      "name": "FRM_MEDIUM",
      "label": "Medium",
      "cssClasses": [
        "margin-right-md"
      ],
      "groupId": "template-group:field/right-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a medium right margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FRM_NONE",
      "name": "FRM_NONE",
      "label": "None",
      "cssClasses": [
        "margin-right-none"
      ],
      "groupId": "template-group:field/right-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Removes the right margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FRM_SMALL",
      "name": "FRM_SMALL",
      "label": "Small",
      "cssClasses": [
        "margin-right-sm"
      ],
      "groupId": "template-group:field/right-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a small right margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FTM_LARGE",
      "name": "FTM_LARGE",
      "label": "Large",
      "cssClasses": [
        "margin-top-lg"
      ],
      "groupId": "template-group:field/top-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a large top margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FTM_MEDIUM",
      "name": "FTM_MEDIUM",
      "label": "Medium",
      "cssClasses": [
        "margin-top-md"
      ],
      "groupId": "template-group:field/top-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a medium top margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FTM_NONE",
      "name": "FTM_NONE",
      "label": "None",
      "cssClasses": [
        "margin-top-none"
      ],
      "groupId": "template-group:field/top-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Removes the top margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/FTM_SMALL",
      "name": "FTM_SMALL",
      "label": "Small",
      "cssClasses": [
        "margin-top-sm"
      ],
      "groupId": "template-group:field/top-margin",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a small top margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/HIDE_PASSWORD_VISIBILITY",
      "name": "HIDE_PASSWORD_VISIBILITY",
      "label": "Hide Password Visibility",
      "cssClasses": [
        "js-hidePasswordVisibility"
      ],
      "groupId": null,
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "This option hides the password visibility toggle button for the password item type.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/ITEM_REMOVE_PADDING",
      "name": "ITEM_REMOVE_PADDING",
      "label": "None",
      "cssClasses": [
        "t-Form-fieldContainer--noPadding"
      ],
      "groupId": "template-group:field/item-spacing",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Removes item spacing.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/ITEM_SLIM_PADDING",
      "name": "ITEM_SLIM_PADDING",
      "label": "Slim",
      "cssClasses": [
        "t-Form-fieldContainer--slimPadding"
      ],
      "groupId": "template-group:field/item-spacing",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Reduces item spacing.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/LARGE_FIELD",
      "name": "LARGE_FIELD",
      "label": "Large",
      "cssClasses": [
        "t-Form-fieldContainer--large"
      ],
      "groupId": "template-group:field/size-2",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Large: applies t-Form-fieldContainer--large within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:FIELD/POST_TEXT_BLOCK",
      "name": "POST_TEXT_BLOCK",
      "label": "Display as Block",
      "cssClasses": [
        "t-Form-fieldContainer--postTextBlock"
      ],
      "groupId": "template-group:field/item-post-text",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Displays the Item Post Text in a block style immediately after the item.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/PRE_TEXT_BLOCK",
      "name": "PRE_TEXT_BLOCK",
      "label": "Display as Block",
      "cssClasses": [
        "t-Form-fieldContainer--preTextBlock"
      ],
      "groupId": "template-group:field/item-pre-text",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Displays the Item Pre Text in a block style immediately before the item.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/STRETCH_FORM_ITEM",
      "name": "STRETCH_FORM_ITEM",
      "label": "Stretch Form Item",
      "cssClasses": [
        "t-Form-fieldContainer--stretchInputs"
      ],
      "groupId": null,
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Stretches the form item to fill its container.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:FIELD/X_LARGE_SIZE",
      "name": "X_LARGE_SIZE",
      "label": "X Large",
      "cssClasses": [
        "t-Form-fieldContainer--xlarge"
      ],
      "groupId": "template-group:field/size-2",
      "templateTypes": [
        "FIELD"
      ],
      "templates": {},
      "virtualTemplateType": "FIELD",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "X Large: applies t-Form-fieldContainer--xlarge within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    }
  ],
  "templateOptionGroups": [
    {
      "id": "template-group:field/bottom-margin",
      "sourceId": "2824198306810897895",
      "name": "BOTTOM_MARGIN",
      "label": "Bottom Margin",
      "templateTypes": [
        "FIELD"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Set the bottom margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:field/display-text-style",
      "sourceId": "1876832500102751626",
      "name": "DISPLAY_TEXT_STYLE",
      "label": "Display Text Style",
      "templateTypes": [
        "FIELD"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Determines the display style for Display Only & Read Only display items.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:field/item-post-text",
      "sourceId": "2323411351327417396",
      "name": "ITEM_POST_TEXT",
      "label": "Item Post Text",
      "templateTypes": [
        "FIELD"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Adjust the display of the Item Post Text",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:field/item-pre-text",
      "sourceId": "2323410965625415759",
      "name": "ITEM_PRE_TEXT",
      "label": "Item Pre Text",
      "templateTypes": [
        "FIELD"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Adjust the display of the Item Pre Text",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:field/item-spacing",
      "sourceId": "8909337205814595",
      "name": "ITEM_SPACING",
      "label": "Item Spacing",
      "templateTypes": [
        "FIELD"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Sets the padding around the item.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:field/left-margin",
      "sourceId": "2824198587594899975",
      "name": "LEFT_MARGIN",
      "label": "Left Margin",
      "templateTypes": [
        "FIELD"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Set the left margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:field/radio-group-display",
      "sourceId": "2893567229342943883",
      "name": "RADIO_GROUP_DISPLAY",
      "label": "Item Group Display",
      "templateTypes": [
        "FIELD"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Determines the display style for radio and check box items.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:field/right-margin",
      "sourceId": "2824199058414906176",
      "name": "RIGHT_MARGIN",
      "label": "Right Margin",
      "templateTypes": [
        "FIELD"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Set the right margin for this field.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:field/size-2",
      "sourceId": "2963019222071199810",
      "name": "SIZE",
      "label": "Size",
      "templateTypes": [
        "FIELD"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Size choices for FIELD templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:field/top-margin",
      "sourceId": "2824197858061894723",
      "name": "TOP_MARGIN",
      "label": "Top Margin",
      "templateTypes": [
        "FIELD"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Set the top margin for this field.",
      "descriptionOrigin": "oracle-upl"
    }
  ],
  "templateDefaults": [
    {
      "id": "label-template:optional",
      "type": "label",
      "name": "Optional",
      "key": "optional",
      "internalName": "OPTIONAL",
      "defaultOptions": [],
      "presetOptions": []
    },
    {
      "id": "label-template:optional-floating",
      "type": "label",
      "name": "Optional - Floating",
      "key": "optional-floating",
      "internalName": "OPTIONAL_FLOATING",
      "defaultOptions": [],
      "presetOptions": []
    }
  ],
  "utAttributes": [],
  "utAttributeValues": [],
  "nativeParameters": [
    {
      "id": "mmd:5120:4",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "4",
      "builderLabel": "Comments",
      "apexlangPath": "pageItem.comments.comments",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Comments (text editor) in pageItem.comments.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:24",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "24",
      "builderLabel": "Authorization Scheme",
      "apexlangPath": "pageItem.security.authorizationScheme",
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
      "description": "Authorization Scheme (component) in pageItem.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:38",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "38",
      "builderLabel": "Build Option",
      "apexlangPath": "pageItem.config.buildOption",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Build Option (component) in pageItem.config.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:40",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "40",
      "builderLabel": "Help Text",
      "apexlangPath": "pageItem.help.helpText",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Help Text (html) in pageItem.help.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:93",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "93",
      "builderLabel": "Type",
      "apexlangPath": "pageItem.type",
      "type": "SUPPORTED UI",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Type (supported ui) in pageItem.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:96",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "96",
      "builderLabel": "Name",
      "apexlangPath": "pageItem.name",
      "type": "TEXT",
      "required": true,
      "defaultValue": "P#PAGE_ID#_NEW",
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Name (text) in pageItem.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:97",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "97",
      "builderLabel": "Sequence",
      "apexlangPath": "pageItem.layout.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:98",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "98",
      "builderLabel": "Region",
      "apexlangPath": "pageItem.layout.region",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Region (component) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:99",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "99",
      "builderLabel": "Label",
      "apexlangPath": "pageItem.label.label",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Label (text) in pageItem.label.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:100",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "100",
      "builderLabel": "Alignment",
      "apexlangPath": "pageItem.label.alignment",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "RIGHT-CENTER",
      "values": [
        {
          "name": "above",
          "returnValue": "ABOVE",
          "label": "Above "
        },
        {
          "name": "below",
          "returnValue": "BELOW",
          "label": "Below"
        },
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Alignment (select list) in pageItem.label.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:101",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "101",
      "builderLabel": "Template",
      "apexlangPath": "pageItem.appearance.template",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Template (component) in pageItem.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:102",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "102",
      "builderLabel": "Table Cell Attributes",
      "apexlangPath": "pageItem.label.tableCellAttributes",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "100",
            "path": "pageItem.label.alignment",
            "hasToExist": true,
            "value": "ABOVE"
          }
        ]
      },
      "maxLength": 255,
      "description": "Table Cell Attributes (combobox) in pageItem.label.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:103",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "103",
      "builderLabel": "Value Required",
      "apexlangPath": "pageItem.validation.valueRequired",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "SESSION_STATE"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Value Required (yes no) in pageItem.validation.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:104",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "104",
      "builderLabel": "Start New Layout",
      "apexlangPath": "pageItem.layout.startNewLayout",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Start New Layout (yes no) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:105",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "105",
      "builderLabel": "Start New Row",
      "apexlangPath": "pageItem.layout.startNewRow",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "104",
            "path": "pageItem.layout.startNewLayout",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Start New Row (yes no) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:106",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "106",
      "builderLabel": "Column",
      "apexlangPath": "pageItem.layout.column",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Column (select list) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:107",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "107",
      "builderLabel": "New Column",
      "apexlangPath": "pageItem.layout.newColumn",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "105",
            "path": "pageItem.layout.startNewRow",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "maxLength": 32767,
      "description": "New Column (yes no) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:108",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "108",
      "builderLabel": "Column Span",
      "apexlangPath": "pageItem.layout.columnSpan",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Column Span (select list) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:109",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "109",
      "builderLabel": "Row Span",
      "apexlangPath": "pageItem.layout.rowSpan",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Row Span (number) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:110",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "110",
      "builderLabel": "Column Attributes",
      "apexlangPath": "pageItem.layout.columnAttributes",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Column Attributes (combobox) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:111",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "111",
      "builderLabel": "Format Mask",
      "apexlangPath": "pageItem.appearance.formatMask",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "FORMAT_MASK_ALL"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Format Mask (combobox) in pageItem.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:112",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "112",
      "builderLabel": "Format Mask",
      "apexlangPath": "pageItem.appearance.formatMask",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "FORMAT_MASK_DATE"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Format Mask (combobox) in pageItem.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:113",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "113",
      "builderLabel": "Format Mask",
      "apexlangPath": "pageItem.appearance.formatMask",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "FORMAT_MASK_NUMBER"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Format Mask (combobox) in pageItem.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:114",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "114",
      "builderLabel": "List of Values",
      "apexlangPath": "pageItem.lov.lov",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "373",
            "path": "pageItem.lov.type",
            "hasToExist": true,
            "value": "SHARED"
          }
        ]
      },
      "maxLength": null,
      "description": "List of Values (component) in pageItem.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:115",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "115",
      "builderLabel": "Display Extra Values",
      "apexlangPath": "pageItem.lov.displayExtraValues",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "373",
            "path": "pageItem.lov.type",
            "hasToExist": true
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "NATIVE_COMBOBOX",
              "NATIVE_SELECT_ONE",
              "NATIVE_SELECT_MANY"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Display Extra Values (yes no) in pageItem.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:116",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "116",
      "builderLabel": "Display Null Value",
      "apexlangPath": "pageItem.lov.displayNullValue",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "LOV_DISPLAY_NULL"
            ]
          },
          {
            "type": "NOT_NULL",
            "propertyId": "373",
            "path": "pageItem.lov.type",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "Display Null Value (yes no) in pageItem.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:117",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "117",
      "builderLabel": "Null Display Value",
      "apexlangPath": "pageItem.lov.nullDisplayValue",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "116",
            "path": "pageItem.lov.displayNullValue",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 255,
      "description": "Null Display Value (text) in pageItem.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:118",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "118",
      "builderLabel": "Null Return Value",
      "apexlangPath": "pageItem.lov.nullReturnValue",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "116",
            "path": "pageItem.lov.displayNullValue",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 255,
      "description": "Null Return Value (text) in pageItem.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:119",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "119",
      "builderLabel": "Parent Item(s)",
      "apexlangPath": "pageItem.cascadingLov.parentItems",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "CASCADING_LOV"
            ]
          },
          {
            "type": "NOT_NULL",
            "propertyId": "373",
            "path": "pageItem.lov.type",
            "hasToExist": true
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "373",
            "path": "pageItem.lov.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Parent Item(s) (item) in pageItem.cascadingLov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:120",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "120",
      "builderLabel": "Items to Submit",
      "apexlangPath": "pageItem.cascadingLov.itemsToSubmit",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "119",
            "path": "pageItem.cascadingLov.parentItems",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 4000,
      "description": "Items to Submit (item) in pageItem.cascadingLov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:121",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "121",
      "builderLabel": "Parent Required",
      "apexlangPath": "pageItem.cascadingLov.parentRequired",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "119",
            "path": "pageItem.cascadingLov.parentItems",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "Parent Required (yes no) in pageItem.cascadingLov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:122",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "122",
      "builderLabel": "SQL Query",
      "apexlangPath": "pageItem.lov.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "373",
            "path": "pageItem.lov.type",
            "hasToExist": true,
            "value": "SQL_QUERY"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in pageItem.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:123",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "123",
      "builderLabel": "Alignment",
      "apexlangPath": "pageItem.layout.alignment",
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "ELEMENT"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Alignment (select list) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:124",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "124",
      "builderLabel": "Width",
      "apexlangPath": "pageItem.appearance.width",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "WIDTH"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Width (number) in pageItem.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:125",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "125",
      "builderLabel": "Maximum Length",
      "apexlangPath": "pageItem.validation.maxLength",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "WIDTH"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Maximum Length (number) in pageItem.validation.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:126",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "126",
      "builderLabel": "Height",
      "apexlangPath": "pageItem.appearance.height",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "HEIGHT"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Height (number) in pageItem.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:127",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "127",
      "builderLabel": "Value Placeholder",
      "apexlangPath": "pageItem.appearance.valuePlaceholder",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "PLACEHOLDER"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Value Placeholder (text) in pageItem.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:128",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "128",
      "builderLabel": "CSS Classes",
      "apexlangPath": "pageItem.advanced.cssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "ELEMENT"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "CSS Classes (combobox) in pageItem.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:129",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "129",
      "builderLabel": "Custom Attributes",
      "apexlangPath": "pageItem.advanced.customAttributes",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "ELEMENT"
            ]
          }
        ]
      },
      "maxLength": 2000,
      "description": "Custom Attributes (combobox) in pageItem.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:130",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "130",
      "builderLabel": "Option HTML Attributes",
      "apexlangPath": "pageItem.advanced.optionHtmlAttributes",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "ELEMENT_OPTION"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Option HTML Attributes (combobox) in pageItem.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:131",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "131",
      "builderLabel": "Pre Text",
      "apexlangPath": "pageItem.advanced.preText",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "ELEMENT"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pre Text (html) in pageItem.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:132",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "132",
      "builderLabel": "Post Text ",
      "apexlangPath": "pageItem.advanced.postText",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "ELEMENT"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Post Text  (html) in pageItem.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:133",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "133",
      "builderLabel": "Used",
      "apexlangPath": "pageItem.source.used",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "YES",
      "values": [
        {
          "name": "always",
          "returnValue": "NO",
          "label": "Always, replacing any existing value in session state"
        },
        {
          "name": "onlyWhenSessionStateIsNull",
          "returnValue": "YES",
          "label": "Only when current value in session state is null"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "SOURCE"
            ]
          },
          {
            "type": "NULL",
            "propertyId": "1060",
            "path": "pageItem.source.formRegion",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Used (select list) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:134",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "134",
      "builderLabel": "Type",
      "apexlangPath": "pageItem.source.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "ALWAYS_NULL",
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
          "label": "SQL Query (return multiple values)"
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
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NULL",
            "propertyId": "1060",
            "path": "pageItem.source.formRegion",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:135",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "135",
      "builderLabel": "Static Value",
      "apexlangPath": "pageItem.source.staticValue",
      "type": "TEXT EDITOR",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "134",
            "path": "pageItem.source.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Static Value (text editor) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:136",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "136",
      "builderLabel": "SQL Query",
      "apexlangPath": "pageItem.source.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "134",
            "path": "pageItem.source.type",
            "hasToExist": true,
            "value": "QUERY"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:137",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "137",
      "builderLabel": "SQL Query",
      "apexlangPath": "pageItem.source.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "134",
            "path": "pageItem.source.type",
            "hasToExist": true,
            "value": "QUERY_COLON"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:138",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "138",
      "builderLabel": "Item",
      "apexlangPath": "pageItem.source.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "134",
            "path": "pageItem.source.type",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 255,
      "description": "Item (item) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:141",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "141",
      "builderLabel": "Database Column",
      "apexlangPath": "pageItem.source.databaseColumn",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "134",
            "path": "pageItem.source.type",
            "hasToExist": true,
            "value": "DB_COLUMN"
          }
        ]
      },
      "maxLength": 128,
      "description": "Database Column (text) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:142",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "142",
      "builderLabel": "Preference",
      "apexlangPath": "pageItem.source.preference",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "134",
            "path": "pageItem.source.type",
            "hasToExist": true,
            "value": "PREFERENCE"
          }
        ]
      },
      "maxLength": 255,
      "description": "Preference (text) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:143",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "143",
      "builderLabel": "Post Calculation Computation",
      "apexlangPath": "pageItem.source.postCalculationComputation",
      "type": "PLSQL EXPRESSION VARCHAR2",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "SOURCE"
            ]
          },
          {
            "type": "NULL",
            "propertyId": "1060",
            "path": "pageItem.source.formRegion",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 4000,
      "description": "Post Calculation Computation (plsql expression varchar2) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:144",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "144",
      "builderLabel": "Storage",
      "apexlangPath": "pageItem.sessionState.storage",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "Y",
      "values": [
        {
          "name": "request",
          "returnValue": "N",
          "label": "Per Request (Memory Only)"
        },
        {
          "name": "session",
          "returnValue": "Y",
          "label": "Per Session (Persistent)"
        },
        {
          "name": "user",
          "returnValue": "U",
          "label": "Per User (Persistent)"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "SOURCE"
            ]
          },
          {
            "type": "NULL",
            "propertyId": "1060",
            "path": "pageItem.source.formRegion",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Storage (select list) in pageItem.sessionState.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:145",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "145",
      "builderLabel": "Type",
      "apexlangPath": "pageItem.default.type",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "static",
          "returnValue": "STATIC_TEXT_WITH_SUBSTITUTIONS",
          "label": "Static"
        },
        {
          "name": "item",
          "returnValue": "ITEM",
          "label": "Item"
        },
        {
          "name": "sqlQuerySingleValue",
          "returnValue": "SQL_QUERY",
          "label": "SQL Query (return single value)"
        },
        {
          "name": "sqlQueryMultipleValues",
          "returnValue": "SQL_QUERY_COLON",
          "label": "SQL Query (return multiple values)"
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
          "name": "sequence",
          "returnValue": "SEQUENCE",
          "label": "Sequence"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "SOURCE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in pageItem.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:146",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "146",
      "builderLabel": "Static Value",
      "apexlangPath": "pageItem.default.staticValue",
      "type": "TEXT EDITOR",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "145",
            "path": "pageItem.default.type",
            "hasToExist": true,
            "value": "STATIC_TEXT_WITH_SUBSTITUTIONS"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Static Value (text editor) in pageItem.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:150",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "150",
      "builderLabel": "Link Attributes",
      "apexlangPath": "pageItem.quickPicks.linkAttributes",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 255,
      "description": "Link Attributes (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:151",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "151",
      "builderLabel": "Label 1",
      "apexlangPath": "pageItem.quickPicks.label1",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Label 1 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:152",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "152",
      "builderLabel": "Value 1",
      "apexlangPath": "pageItem.quickPicks.value1",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Value 1 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:153",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "153",
      "builderLabel": "Label 2",
      "apexlangPath": "pageItem.quickPicks.label2",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Label 2 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:154",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "154",
      "builderLabel": "Value 2",
      "apexlangPath": "pageItem.quickPicks.value2",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Value 2 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:155",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "155",
      "builderLabel": "Label 3",
      "apexlangPath": "pageItem.quickPicks.label3",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Label 3 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:156",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "156",
      "builderLabel": "Value 3",
      "apexlangPath": "pageItem.quickPicks.value3",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Value 3 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:157",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "157",
      "builderLabel": "Label 4",
      "apexlangPath": "pageItem.quickPicks.label4",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Label 4 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:158",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "158",
      "builderLabel": "Value 4",
      "apexlangPath": "pageItem.quickPicks.value4",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Value 4 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:159",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "159",
      "builderLabel": "Label 5",
      "apexlangPath": "pageItem.quickPicks.label5",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Label 5 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:160",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "160",
      "builderLabel": "Value 5",
      "apexlangPath": "pageItem.quickPicks.value5",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Value 5 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:161",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "161",
      "builderLabel": "Label 6",
      "apexlangPath": "pageItem.quickPicks.label6",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Label 6 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:162",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "162",
      "builderLabel": "Value 6",
      "apexlangPath": "pageItem.quickPicks.value6",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Value 6 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:163",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "163",
      "builderLabel": "Label 7",
      "apexlangPath": "pageItem.quickPicks.label7",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Label 7 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:164",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "164",
      "builderLabel": "Value 7",
      "apexlangPath": "pageItem.quickPicks.value7",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Value 7 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:165",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "165",
      "builderLabel": "Label 8",
      "apexlangPath": "pageItem.quickPicks.label8",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Label 8 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:166",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "166",
      "builderLabel": "Value 8",
      "apexlangPath": "pageItem.quickPicks.value8",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Value 8 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:167",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "167",
      "builderLabel": "Label 9",
      "apexlangPath": "pageItem.quickPicks.label9",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Label 9 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:168",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "168",
      "builderLabel": "Value 9",
      "apexlangPath": "pageItem.quickPicks.value9",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Value 9 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:169",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "169",
      "builderLabel": "Label 10",
      "apexlangPath": "pageItem.quickPicks.label10",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Label 10 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:170",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "170",
      "builderLabel": "Value 10",
      "apexlangPath": "pageItem.quickPicks.value10",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Value 10 (text) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:171",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "171",
      "builderLabel": "Read Only HTML Attributes",
      "apexlangPath": "pageItem.readOnly.readOnlyHtmlAttributes",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "5050",
            "path": "pageItem.readOnly.type",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 4000,
      "description": "Read Only HTML Attributes (text) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:172",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "172",
      "builderLabel": "Session State Protection",
      "apexlangPath": "pageItem.security.sessionStateProtection",
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
          "name": "checksumRequiredAppLevel",
          "returnValue": "B",
          "label": "Checksum Required - Application Level"
        },
        {
          "name": "checksumRequiredUserLevel",
          "returnValue": "P",
          "label": "Checksum Required - User Level"
        },
        {
          "name": "checksumRequiredSessionLevel",
          "returnValue": "S",
          "label": "Checksum Required - Session Level"
        },
        {
          "name": "restricted",
          "returnValue": "I",
          "label": "Restricted - May not be set from browser"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Session State Protection (select list) in pageItem.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:173",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "173",
      "builderLabel": "Store value encrypted in session state",
      "apexlangPath": "pageItem.security.encryptSessionState",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "ENCRYPT"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Store value encrypted in session state (yes no) in pageItem.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:174",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "174",
      "builderLabel": "Escape Special Characters",
      "apexlangPath": "pageItem.security.escapeSpecialChars",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "ESCAPE_OUTPUT"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Escape Special Characters (yes no) in pageItem.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:175",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "175",
      "builderLabel": "Restricted Characters",
      "apexlangPath": "pageItem.security.restrictedChars",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "alphanumWithSpace",
          "returnValue": "US_ONLY",
          "label": "Allowlist for a-Z, 0-9 and space"
        },
        {
          "name": "webSafe",
          "returnValue": "WEB_SAFE",
          "label": "Blocklist HTML command characters (<>\")"
        },
        {
          "name": "noSpecialChar",
          "returnValue": "NO_SPECIAL_CHAR",
          "label": "Blocklist &<>\"/;,*|=% and --"
        },
        {
          "name": "noSpecialCharNoNewline",
          "returnValue": "NO_SPECIAL_CHAR_NL",
          "label": "Blocklist &<>\"/;,*|=% or -- and new line"
        },
        {
          "name": "workspaceSchema",
          "returnValue": "WORKSPACE_SCHEMA",
          "label": "Workspace Schema"
        },
        {
          "name": "workspaceUserSchema",
          "returnValue": "WRKSP_USER_SCHEMA",
          "label": "Workspace User Schema"
        },
        {
          "name": "workspaceUserSchemaId",
          "returnValue": "WRKSP_USER_SCHEMA_ID",
          "label": "Workspace User Schema ID"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Restricted Characters (select list) in pageItem.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:191",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "191",
      "builderLabel": "Slot",
      "apexlangPath": "pageItem.layout.slot",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Slot (select list) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:373",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "373",
      "builderLabel": "Type",
      "apexlangPath": "pageItem.lov.type",
      "type": "SELECT LIST",
      "required": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURE_IS_REQUIRED",
            "hasToExist": true,
            "value": "LOV",
            "propertyId": "93"
          }
        ]
      },
      "defaultValue": null,
      "values": [
        {
          "name": "sharedComponent",
          "returnValue": "SHARED",
          "label": "Shared Component"
        },
        {
          "name": "sqlQuery",
          "returnValue": "SQL_QUERY",
          "label": "SQL Query"
        },
        {
          "name": "staticValues",
          "returnValue": "STATIC",
          "label": "Static Values"
        },
        {
          "name": "functionBody",
          "returnValue": "FUNCTION_BODY",
          "label": "Function Body returning SQL Query"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "LOV"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in pageItem.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:374",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "374",
      "builderLabel": "Static Values",
      "apexlangPath": "pageItem.lov.staticValues",
      "type": "STATIC LOV",
      "required": true,
      "defaultValue": "STATIC:Display1;Return1,Display2;Return2",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "373",
            "path": "pageItem.lov.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Static Values (static lov) in pageItem.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:461",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "461",
      "builderLabel": "Item",
      "apexlangPath": "pageItem.default.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "145",
            "path": "pageItem.default.type",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Item (item) in pageItem.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:739",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "739",
      "builderLabel": "Icon",
      "apexlangPath": "pageItem.appearance.icon",
      "type": "ICON",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "ICON"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Icon (icon) in pageItem.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:740",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "740",
      "builderLabel": "CSS Classes",
      "apexlangPath": "pageItem.appearance.cssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          },
          {
            "type": "NOT_NULL",
            "propertyId": "101",
            "path": "pageItem.appearance.template",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 255,
      "description": "CSS Classes (combobox) in pageItem.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:741",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "741",
      "builderLabel": "Template Options",
      "apexlangPath": "pageItem.appearance.templateOptions",
      "type": "TEMPLATE OPTIONS",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          },
          {
            "type": "NOT_NULL",
            "propertyId": "101",
            "path": "pageItem.appearance.template",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Template Options (template options) in pageItem.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:760",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "760",
      "builderLabel": "Label Column Span",
      "apexlangPath": "pageItem.layout.labelColumnSpan",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Label Column Span (select list) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:763",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "763",
      "builderLabel": "Column CSS Classes",
      "apexlangPath": "pageItem.layout.columnCssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Column CSS Classes (combobox) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:814",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "814",
      "builderLabel": "Row CSS Classes",
      "apexlangPath": "pageItem.layout.rowCssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Row CSS Classes (combobox) in pageItem.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:818",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "818",
      "builderLabel": "Data Type",
      "apexlangPath": "pageItem.source.dataType",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "varchar2",
          "returnValue": "VARCHAR2",
          "label": "VARCHAR2"
        },
        {
          "name": "number",
          "returnValue": "NUMBER",
          "label": "NUMBER"
        },
        {
          "name": "date",
          "returnValue": "DATE",
          "label": "DATE"
        },
        {
          "name": "timestamp",
          "returnValue": "TIMESTAMP",
          "label": "TIMESTAMP"
        },
        {
          "name": "timestampWithTimeZone",
          "returnValue": "TIMESTAMP_TZ",
          "label": "TIMESTAMP WITH TIME ZONE"
        },
        {
          "name": "timestampWithLocalTimeZone",
          "returnValue": "TIMESTAMP_LTZ",
          "label": "TIMESTAMP WITH LOCAL TIME ZONE"
        },
        {
          "name": "intervalYearToMonth",
          "returnValue": "INTERVAL_Y2M",
          "label": "INTERVAL YEAR TO MONTH"
        },
        {
          "name": "intervalDayToSecond",
          "returnValue": "INTERVAL_D2S",
          "label": "INTERVAL DAY TO SECOND"
        },
        {
          "name": "clob",
          "returnValue": "CLOB",
          "label": "CLOB"
        },
        {
          "name": "blob",
          "returnValue": "BLOB",
          "label": "BLOB"
        },
        {
          "name": "boolean",
          "returnValue": "BOOLEAN",
          "label": "BOOLEAN"
        },
        {
          "name": "rowid",
          "returnValue": "ROWID",
          "label": "ROWID"
        },
        {
          "name": "bfile",
          "returnValue": "BFILE",
          "label": "BFILE"
        },
        {
          "name": "sdoGeometry",
          "returnValue": "SDO_GEOMETRY",
          "label": "SDO_GEOMETRY"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "1060",
            "path": "pageItem.source.formRegion",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 128,
      "description": "Data Type (select list) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:819",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "819",
      "builderLabel": "Query Only",
      "apexlangPath": "pageItem.source.queryOnly",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "1060",
            "path": "pageItem.source.formRegion",
            "hasToExist": true
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "818",
            "path": "pageItem.source.dataType",
            "hasToExist": true,
            "value": "ROWID"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Query Only (yes no) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:820",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "820",
      "builderLabel": "Primary Key",
      "apexlangPath": "pageItem.source.primaryKey",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "1060",
            "path": "pageItem.source.formRegion",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "Primary Key (yes no) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:824",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "824",
      "builderLabel": "SQL Query (return single value)",
      "apexlangPath": "pageItem.default.sqlQuerySingleValue",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "145",
            "path": "pageItem.default.type",
            "hasToExist": true,
            "value": "SQL_QUERY"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (return single value) (sql) in pageItem.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:825",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "825",
      "builderLabel": "SQL Query (return multiple values)",
      "apexlangPath": "pageItem.default.sqlQueryMultipleValues",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "145",
            "path": "pageItem.default.type",
            "hasToExist": true,
            "value": "SQL_QUERY_COLON"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (return multiple values) (sql) in pageItem.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:826",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "826",
      "builderLabel": "Sequence",
      "apexlangPath": "pageItem.default.sequence",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "145",
            "path": "pageItem.default.type",
            "hasToExist": true,
            "value": "SEQUENCE"
          }
        ]
      },
      "maxLength": 128,
      "description": "Sequence (text) in pageItem.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:940",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "940",
      "builderLabel": "Warn on Unsaved Changes",
      "apexlangPath": "pageItem.advanced.warnOnUnsavedChanges",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "ignore",
          "returnValue": "I",
          "label": "Ignore"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Warn on Unsaved Changes (select list) in pageItem.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:942",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "942",
      "builderLabel": "Inline Help Text",
      "apexlangPath": "pageItem.help.inlineHelpText",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Inline Help Text (html) in pageItem.help.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:943",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "943",
      "builderLabel": "Initialization JavaScript Function",
      "apexlangPath": "pageItem.advanced.initJavaScriptFunction",
      "type": "JAVASCRIPT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "INIT_JAVASCRIPT_CODE"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Initialization JavaScript Function (javascript) in pageItem.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:1060",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1060",
      "builderLabel": "Form Region",
      "apexlangPath": "pageItem.source.formRegion",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "SOURCE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Form Region (component) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:1061",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1061",
      "builderLabel": "Column",
      "apexlangPath": "pageItem.source.column",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "1060",
            "path": "pageItem.source.formRegion",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 128,
      "description": "Column (column) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:1066",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1066",
      "builderLabel": "Storage",
      "apexlangPath": "pageItem.sessionState.storage",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "N",
      "values": [
        {
          "name": "request",
          "returnValue": "N",
          "label": "Per Request (Memory Only)"
        },
        {
          "name": "session",
          "returnValue": "Y",
          "label": "Per Session (Persistent)"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "SOURCE"
            ]
          },
          {
            "type": "NOT_NULL",
            "propertyId": "1060",
            "path": "pageItem.source.formRegion",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Storage (select list) in pageItem.sessionState.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:1222",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1222",
      "builderLabel": "Separator",
      "apexlangPath": "pageItem.multipleValues.separator",
      "type": "TEXT",
      "required": true,
      "defaultValue": ":",
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2360",
            "path": "pageItem.multipleValues.type",
            "hasToExist": true,
            "value": "SEPARATED"
          },
          {
            "type": "EQUALS",
            "propertyId": "2363",
            "path": "pageItem.multipleValues.type",
            "hasToExist": true,
            "value": "SEPARATED"
          }
        ]
      },
      "maxLength": 5,
      "description": "Separator (text) in pageItem.multipleValues.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:1757",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1757",
      "builderLabel": "Data Type",
      "apexlangPath": "pageItem.sessionState.dataType",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "VARCHAR2",
      "values": [
        {
          "name": "varchar2",
          "returnValue": "VARCHAR2",
          "label": "VARCHAR2"
        },
        {
          "name": "clob",
          "returnValue": "CLOB",
          "label": "CLOB"
        },
        {
          "name": "boolean",
          "returnValue": "BOOLEAN",
          "label": "BOOLEAN"
        },
        {
          "name": "number",
          "returnValue": "NUMBER",
          "label": "NUMBER"
        }
      ],
      "condition": null,
      "maxLength": 128,
      "description": "Data Type (select list) in pageItem.sessionState.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:2360",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "2360",
      "builderLabel": "Type",
      "apexlangPath": "pageItem.multipleValues.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "SEPARATED",
      "values": [
        {
          "name": "delimitedList",
          "returnValue": "SEPARATED",
          "label": "Delimited List"
        },
        {
          "name": "jsonArray",
          "returnValue": "JSON_ARRAY",
          "label": "JSON Array"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "MULTI_VALUE_ALWAYS"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in pageItem.multipleValues.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:2363",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "2363",
      "builderLabel": "Type",
      "apexlangPath": "pageItem.multipleValues.type",
      "type": "SELECT LIST",
      "required": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "hasToExist": true,
            "pluginName": "NATIVE_COMBOBOX",
            "pluginAttributeStaticId": "multi_selection",
            "value": "Y"
          }
        ]
      },
      "defaultValue": null,
      "values": [
        {
          "name": "delimitedList",
          "returnValue": "SEPARATED",
          "label": "Delimited List"
        },
        {
          "name": "jsonArray",
          "returnValue": "JSON_ARRAY",
          "label": "JSON Array"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "MULTI_VALUE_OPTIONAL"
            ]
          },
          {
            "operator": "OR",
            "conditions": [
              {
                "type": "NOT_IN_LIST",
                "propertyId": "93",
                "path": "pageItem.type",
                "hasToExist": true,
                "values": [
                  "NATIVE_POPUP_LOV",
                  "NATIVE_SELECT_LIST"
                ]
              },
              {
                "type": "NULL",
                "hasToExist": true
              },
              {
                "type": "EQUALS",
                "hasToExist": true,
                "value": "NONE"
              }
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in pageItem.multipleValues.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5050",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5050",
      "builderLabel": "Type",
      "apexlangPath": "pageItem.readOnly.type",
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "READONLY"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5051",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5051",
      "builderLabel": "SQL Query",
      "apexlangPath": "pageItem.readOnly.sqlQuery",
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
            "path": "pageItem.readOnly.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5052",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5052",
      "builderLabel": "Value",
      "apexlangPath": "pageItem.readOnly.value",
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
            "path": "pageItem.readOnly.type",
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
      "description": "Value (text) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5053",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5053",
      "builderLabel": "Item",
      "apexlangPath": "pageItem.readOnly.item",
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
            "path": "pageItem.readOnly.type",
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
      "description": "Item (item) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5054",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5054",
      "builderLabel": "List",
      "apexlangPath": "pageItem.readOnly.list",
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
            "path": "pageItem.readOnly.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5055",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5055",
      "builderLabel": "Preference",
      "apexlangPath": "pageItem.readOnly.preference",
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
            "path": "pageItem.readOnly.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5056",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5056",
      "builderLabel": "Page",
      "apexlangPath": "pageItem.readOnly.page",
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
            "path": "pageItem.readOnly.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5057",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5057",
      "builderLabel": "Pages",
      "apexlangPath": "pageItem.readOnly.pages",
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
            "path": "pageItem.readOnly.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5058",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5058",
      "builderLabel": "Text",
      "apexlangPath": "pageItem.readOnly.text",
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
            "path": "pageItem.readOnly.type",
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
      "description": "Text (text) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5059",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5059",
      "builderLabel": "Value",
      "apexlangPath": "pageItem.readOnly.value",
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
            "path": "pageItem.readOnly.type",
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
      "description": "Value (text) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5060",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5060",
      "builderLabel": "Item",
      "apexlangPath": "pageItem.readOnly.item",
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
            "path": "pageItem.readOnly.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5061",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5061",
      "builderLabel": "Value",
      "apexlangPath": "pageItem.readOnly.value",
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
            "path": "pageItem.readOnly.type",
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
      "description": "Value (text) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5062",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5062",
      "builderLabel": "Language",
      "apexlangPath": "pageItem.readOnly.language",
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
            "path": "pageItem.readOnly.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5063",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5063",
      "builderLabel": "SQL Expression",
      "apexlangPath": "pageItem.readOnly.sqlExpression",
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
            "path": "pageItem.readOnly.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5064",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5064",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "pageItem.readOnly.plsqlExpression",
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
            "path": "pageItem.readOnly.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5065",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5065",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "pageItem.readOnly.javaScriptExpression",
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
            "path": "pageItem.readOnly.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5082",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5082",
      "builderLabel": "Language",
      "apexlangPath": "pageItem.readOnly.language",
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
            "path": "pageItem.readOnly.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5083",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5083",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "pageItem.readOnly.plsqlFunctionBody",
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
            "path": "pageItem.readOnly.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5084",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5084",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "pageItem.readOnly.javaScriptFunctionBody",
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
            "path": "pageItem.readOnly.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in pageItem.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5100",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5100",
      "builderLabel": "Type",
      "apexlangPath": "pageItem.serverSideCondition.type",
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
      "description": "Type (select list) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5101",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5101",
      "builderLabel": "SQL Query",
      "apexlangPath": "pageItem.serverSideCondition.sqlQuery",
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
            "path": "pageItem.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5102",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5102",
      "builderLabel": "Value",
      "apexlangPath": "pageItem.serverSideCondition.value",
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
            "path": "pageItem.serverSideCondition.type",
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
      "description": "Value (text) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5103",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5103",
      "builderLabel": "Item",
      "apexlangPath": "pageItem.serverSideCondition.item",
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
            "path": "pageItem.serverSideCondition.type",
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
      "description": "Item (item) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5104",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5104",
      "builderLabel": "List",
      "apexlangPath": "pageItem.serverSideCondition.list",
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
            "path": "pageItem.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5105",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5105",
      "builderLabel": "Preference",
      "apexlangPath": "pageItem.serverSideCondition.preference",
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
            "path": "pageItem.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5106",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5106",
      "builderLabel": "Page",
      "apexlangPath": "pageItem.serverSideCondition.page",
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
            "path": "pageItem.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5107",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5107",
      "builderLabel": "Pages",
      "apexlangPath": "pageItem.serverSideCondition.pages",
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
            "path": "pageItem.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5108",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5108",
      "builderLabel": "Text",
      "apexlangPath": "pageItem.serverSideCondition.text",
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
            "path": "pageItem.serverSideCondition.type",
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
      "description": "Text (text) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5109",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5109",
      "builderLabel": "Value",
      "apexlangPath": "pageItem.serverSideCondition.value",
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
            "path": "pageItem.serverSideCondition.type",
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
      "description": "Value (text) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5110",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5110",
      "builderLabel": "Item",
      "apexlangPath": "pageItem.serverSideCondition.item",
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
            "path": "pageItem.serverSideCondition.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5111",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5111",
      "builderLabel": "Value",
      "apexlangPath": "pageItem.serverSideCondition.value",
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
            "path": "pageItem.serverSideCondition.type",
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
      "description": "Value (text) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5112",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5112",
      "builderLabel": "Language",
      "apexlangPath": "pageItem.serverSideCondition.language",
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
            "path": "pageItem.serverSideCondition.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5113",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5113",
      "builderLabel": "SQL Expression",
      "apexlangPath": "pageItem.serverSideCondition.sqlExpression",
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
            "path": "pageItem.serverSideCondition.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5114",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5114",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "pageItem.serverSideCondition.plsqlExpression",
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
            "path": "pageItem.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5115",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5115",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "pageItem.serverSideCondition.javaScriptExpression",
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
            "path": "pageItem.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5132",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5132",
      "builderLabel": "Language",
      "apexlangPath": "pageItem.serverSideCondition.language",
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
            "path": "pageItem.serverSideCondition.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5133",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5133",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "pageItem.serverSideCondition.plsqlFunctionBody",
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
            "path": "pageItem.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5134",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5134",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "pageItem.serverSideCondition.javaScriptFunctionBody",
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
            "path": "pageItem.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in pageItem.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5250",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5250",
      "builderLabel": "Language",
      "apexlangPath": "pageItem.source.language",
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
            "propertyId": "134",
            "path": "pageItem.source.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5251",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5251",
      "builderLabel": "SQL Expression",
      "apexlangPath": "pageItem.source.sqlExpression",
      "type": "SQL EXPRESSION CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5250",
            "path": "pageItem.source.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression custom) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5252",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5252",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "pageItem.source.plsqlExpression",
      "type": "PLSQL EXPRESSION CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5250",
            "path": "pageItem.source.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression custom) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5253",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5253",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "pageItem.source.javaScriptExpression",
      "type": "MLE JAVASCRIPT EXPRESSION CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5250",
            "path": "pageItem.source.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression custom) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5270",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5270",
      "builderLabel": "Language",
      "apexlangPath": "pageItem.source.language",
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
            "propertyId": "134",
            "path": "pageItem.source.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5271",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5271",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "pageItem.source.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5270",
            "path": "pageItem.source.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body custom) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5272",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5272",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "pageItem.source.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5270",
            "path": "pageItem.source.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body custom) in pageItem.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5290",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5290",
      "builderLabel": "Language",
      "apexlangPath": "pageItem.default.language",
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
            "propertyId": "145",
            "path": "pageItem.default.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in pageItem.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5291",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5291",
      "builderLabel": "SQL Expression",
      "apexlangPath": "pageItem.default.sqlExpression",
      "type": "SQL EXPRESSION CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5290",
            "path": "pageItem.default.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression custom) in pageItem.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5292",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5292",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "pageItem.default.plsqlExpression",
      "type": "PLSQL EXPRESSION CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5290",
            "path": "pageItem.default.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression custom) in pageItem.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5293",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5293",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "pageItem.default.javaScriptExpression",
      "type": "MLE JAVASCRIPT EXPRESSION CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5290",
            "path": "pageItem.default.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression custom) in pageItem.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5310",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5310",
      "builderLabel": "Language",
      "apexlangPath": "pageItem.default.language",
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
            "propertyId": "145",
            "path": "pageItem.default.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in pageItem.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5311",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5311",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "pageItem.default.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5310",
            "path": "pageItem.default.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body custom) in pageItem.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5312",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5312",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "pageItem.default.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5310",
            "path": "pageItem.default.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body custom) in pageItem.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5320",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5320",
      "builderLabel": "Language",
      "apexlangPath": "pageItem.lov.language",
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
            "propertyId": "373",
            "path": "pageItem.lov.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in pageItem.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5321",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5321",
      "builderLabel": "PL/SQL Function Body returning SQL Query",
      "apexlangPath": "pageItem.lov.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5320",
            "path": "pageItem.lov.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Function Body returning SQL Query (plsql function body sql) in pageItem.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:5322",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5322",
      "builderLabel": "JavaScript Function Body returning SQL Query",
      "apexlangPath": "pageItem.lov.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5320",
            "path": "pageItem.lov.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "JavaScript Function Body returning SQL Query (mle javascript function body sql) in pageItem.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:89890006",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "89890006",
      "builderLabel": "Enabled",
      "apexlangPath": "pageItem.genAI.enabled",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "AI_ENABLED"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Enabled (yes no) in pageItem.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:89890007",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "89890007",
      "builderLabel": "Agent",
      "apexlangPath": "pageItem.genAI.agent",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "AI_ENABLED_ALWAYS",
              "AI_ENABLED"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "89890006",
            "path": "pageItem.genAI.enabled",
            "hasToExist": false,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Agent (component) in pageItem.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:89890008",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "89890008",
      "builderLabel": "Service",
      "apexlangPath": "pageItem.genAI.service",
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
            "path": "pageItem.genAI.agent",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Service (component) in pageItem.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:89890009",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "89890009",
      "builderLabel": "System Prompt",
      "apexlangPath": "pageItem.genAI.systemPrompt",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "AI_SYSTEM_PROMPT"
            ]
          },
          {
            "type": "NULL",
            "propertyId": "89890007",
            "path": "pageItem.genAI.agent",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "System Prompt (text editor) in pageItem.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:89890010",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "89890010",
      "builderLabel": "Welcome Message",
      "apexlangPath": "pageItem.genAI.welcomeMessage",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "AI_UI"
            ]
          },
          {
            "type": "NULL",
            "propertyId": "89890007",
            "path": "pageItem.genAI.agent",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "Welcome Message (html) in pageItem.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:120380001",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "120380001",
      "builderLabel": "Type",
      "apexlangPath": "pageItem.quickPicks.type",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "static",
          "returnValue": "STATIC",
          "label": "Static"
        },
        {
          "name": "sharedLov",
          "returnValue": "SHARED_LOV",
          "label": "Shared List of Values"
        },
        {
          "name": "sqlQuery",
          "returnValue": "SQL_QUERY",
          "label": "SQL Query"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "pageItem.type",
            "hasToExist": true,
            "values": [
              "QUICKPICK"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:120380002",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "120380002",
      "builderLabel": "SQL Query",
      "apexlangPath": "pageItem.quickPicks.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "value": "SQL_QUERY"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5120:120380004",
      "context": "pageItem",
      "componentTypeId": "5120",
      "componentTitle": "Page Item",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "120380004",
      "builderLabel": "Maximum Displayed Entries",
      "apexlangPath": "pageItem.quickPicks.maxDisplayedEntries",
      "type": "INTEGER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "120380001",
            "path": "pageItem.quickPicks.type",
            "hasToExist": true,
            "values": [
              "SHARED_LOV",
              "SQL_QUERY"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Maximum Displayed Entries (integer) in pageItem.quickPicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "native:item/datePicker/app/appearance_behavior",
      "context": "componentSetting",
      "scope": "app",
      "nativeType": "datePicker",
      "attributeKey": "appearanceBehavior",
      "builderLabel": "Appearance & Behavior",
      "apexlangPath": "componentSetting.settings.appearanceBehavior",
      "type": "checkboxes",
      "required": false,
      "defaultValue": "MONTH-PICKER:YEAR-PICKER:TODAY-BUTTON",
      "values": [
        {
          "name": "monthPicker",
          "label": "Month Picker",
          "returnValue": "MONTH-PICKER"
        },
        {
          "name": "paginateByMultipleMonths",
          "label": "Paginate by Multiple Months",
          "returnValue": "NUMBER-OF-MONTH"
        },
        {
          "name": "showTodayButton",
          "label": "Show Today Button",
          "returnValue": "TODAY-BUTTON"
        },
        {
          "name": "showWeek",
          "label": "Show Week",
          "returnValue": "SHOW-WEEK"
        },
        {
          "name": "yearPicker",
          "label": "Year Picker",
          "returnValue": "YEAR-PICKER"
        }
      ],
      "condition": {},
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Appearance & Behavior setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "9b4784ebfca70c33dde6fbab5e801fabdc4cd9675da806a275ab97989ce94ecf"
    },
    {
      "id": "native:item/datePicker/app/days_outside_month",
      "context": "componentSetting",
      "scope": "app",
      "nativeType": "datePicker",
      "attributeKey": "daysOutsideMonth",
      "builderLabel": "Days Outside Month",
      "apexlangPath": "componentSetting.settings.daysOutsideMonth",
      "type": "selectList",
      "required": true,
      "defaultValue": "VISIBLE",
      "values": [
        {
          "name": "hidden",
          "label": "Hidden",
          "returnValue": "HIDDEN"
        },
        {
          "name": "selectable",
          "label": "Selectable",
          "returnValue": "SELECTABLE"
        },
        {
          "name": "visible",
          "label": "Visible",
          "returnValue": "VISIBLE"
        }
      ],
      "condition": {},
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Days Outside Month setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "56f860cccca59c4bae224036d80c825f79aaf5a67c41b3736c8e899ec9a8ea64"
    },
    {
      "id": "native:item/datePicker/app/show_on",
      "context": "componentSetting",
      "scope": "app",
      "nativeType": "datePicker",
      "attributeKey": "showOn",
      "builderLabel": "Show On",
      "apexlangPath": "componentSetting.settings.showOn",
      "type": "selectList",
      "required": true,
      "defaultValue": "FOCUS",
      "values": [
        {
          "name": "iconClick",
          "label": "Icon Click",
          "returnValue": "IMAGE"
        },
        {
          "name": "itemFocus",
          "label": "Item Focus",
          "returnValue": "FOCUS"
        }
      ],
      "condition": {},
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Show On setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "6033895038f41fbbf3c5beefc526e700175aeb7ff74c9082b0ce73b09ebc4aac"
    },
    {
      "id": "native:item/datePicker/app/time_increment",
      "context": "componentSetting",
      "scope": "app",
      "nativeType": "datePicker",
      "attributeKey": "timeIncrement",
      "builderLabel": "Time Increment",
      "apexlangPath": "componentSetting.settings.timeIncrement",
      "type": "integer",
      "required": true,
      "defaultValue": "15",
      "values": [],
      "condition": {},
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Time Increment setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "b5f36131d6d61810cadbb4593999e82c50bd7d459ca3cf0fe6b3cd04e9c28c61"
    },
    {
      "id": "native:item/datePicker/component/appearance_and_behavior",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "appearanceBehavior",
      "builderLabel": "Appearance & Behavior",
      "apexlangPath": "pageItem.settings.appearanceBehavior",
      "type": "checkboxes",
      "required": false,
      "defaultValue": "MONTH-PICKER:YEAR-PICKER:TODAY-BUTTON",
      "values": [
        {
          "name": "monthPicker",
          "label": "Month Picker",
          "returnValue": "MONTH-PICKER"
        },
        {
          "name": "paginateByMultipleMonths",
          "label": "Paginate by Multiple Months",
          "returnValue": "NUMBER-OF-MONTH"
        },
        {
          "name": "showTodayButton",
          "label": "Show Today Button",
          "returnValue": "TODAY-BUTTON"
        },
        {
          "name": "showWeek",
          "label": "Show Week",
          "returnValue": "SHOW-WEEK"
        },
        {
          "name": "yearPicker",
          "label": "Year Picker",
          "returnValue": "YEAR-PICKER"
        }
      ],
      "condition": {
        "dependingOn.attribute": "@use_defaults/component",
        "dependingOn.conditionType": "=",
        "dependingOn.value": "N"
      },
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Appearance & Behavior setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "9c8bb32b20692eb6e8e6c69553ef4c936f59126836086361f98cffb233c4fe53"
    },
    {
      "id": "native:item/datePicker/component/days_outside_month",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "daysOutsideMonth",
      "builderLabel": "Days Outside Month",
      "apexlangPath": "pageItem.settings.daysOutsideMonth",
      "type": "selectList",
      "required": true,
      "defaultValue": "VISIBLE",
      "values": [
        {
          "name": "hidden",
          "label": "Hidden",
          "returnValue": "HIDDEN"
        },
        {
          "name": "selectable",
          "label": "Selectable",
          "returnValue": "SELECTABLE"
        },
        {
          "name": "visible",
          "label": "Visible",
          "returnValue": "VISIBLE"
        }
      ],
      "condition": {
        "dependingOn.attribute": "@use_defaults/component",
        "dependingOn.conditionType": "=",
        "dependingOn.value": "N"
      },
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Days Outside Month setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "3922bf9b03f5c1664ff3bfbed60cbd0fa6cc011e5ba549e85cebbb2bd0f0d05f"
    },
    {
      "id": "native:item/datePicker/component/display_as",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "displayAs",
      "builderLabel": "Display As",
      "apexlangPath": "pageItem.settings.displayAs",
      "type": "selectList",
      "required": true,
      "defaultValue": "POPUP",
      "values": [
        {
          "name": "inline",
          "label": "Inline",
          "returnValue": "INLINE"
        },
        {
          "name": "nativeHtml",
          "label": "Native HTML",
          "returnValue": "NATIVE"
        },
        {
          "name": "popup",
          "label": "Popup",
          "returnValue": "POPUP"
        }
      ],
      "condition": {},
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Display As setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "92fc74089a92235c492e25bda5cace27ac147b5d279a375d2681a363714329b0"
    },
    {
      "id": "native:item/datePicker/component/max_date",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "maxDate",
      "builderLabel": "Maximum Date",
      "apexlangPath": "pageItem.settings.maxDate",
      "type": "selectList",
      "required": true,
      "defaultValue": "NONE",
      "values": [
        {
          "name": "item",
          "label": "Item",
          "returnValue": "ITEM"
        },
        {
          "name": "none",
          "label": "None",
          "returnValue": "NONE"
        },
        {
          "name": "static",
          "label": "Static",
          "returnValue": "STATIC"
        }
      ],
      "condition": {},
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Maximum Date setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "ad9f3f4c997c6a057fa01d6185979ef22ce50b88f0cd89fadef31aefa445c3c7"
    },
    {
      "id": "native:item/datePicker/component/max_item",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "maxItem",
      "builderLabel": "Maximum Item",
      "apexlangPath": "pageItem.settings.maxItem",
      "type": "pageItem",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "dependingOn.attribute": "@max_date/component",
        "dependingOn.conditionType": "=",
        "dependingOn.value": "ITEM"
      },
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Maximum Item setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "26bdee13801bd25b65501745ce1458f443e07ef7b7e8e149fc1d6c645bb4d924"
    },
    {
      "id": "native:item/datePicker/component/max_static",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "maxStatic",
      "builderLabel": "Maximum Static",
      "apexlangPath": "pageItem.settings.maxStatic",
      "type": "text",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "dependingOn.attribute": "@max_date/component",
        "dependingOn.conditionType": "=",
        "dependingOn.value": "STATIC"
      },
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Maximum Static setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "200c27c10d4df6424adde6bdd43172e394d5851ea8de299cfcb5bda1230e5829"
    },
    {
      "id": "native:item/datePicker/component/min_date",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "minDate",
      "builderLabel": "Minimum Date",
      "apexlangPath": "pageItem.settings.minDate",
      "type": "selectList",
      "required": true,
      "defaultValue": "NONE",
      "values": [
        {
          "name": "item",
          "label": "Item",
          "returnValue": "ITEM"
        },
        {
          "name": "none",
          "label": "None",
          "returnValue": "NONE"
        },
        {
          "name": "static",
          "label": "Static",
          "returnValue": "STATIC"
        }
      ],
      "condition": {},
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Minimum Date setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "491065fd2e3e0a95ec7f2a725eaa1ed523bb4c3d9b72857b569e226e01927f22"
    },
    {
      "id": "native:item/datePicker/component/min_item",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "minItem",
      "builderLabel": "Minimum Item",
      "apexlangPath": "pageItem.settings.minItem",
      "type": "pageItem",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "dependingOn.attribute": "@min_date/component",
        "dependingOn.conditionType": "=",
        "dependingOn.value": "ITEM"
      },
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Minimum Item setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "32047798f1159bc1243d9a77cd505488f12a096aa55003422bf9b66f380d64ca"
    },
    {
      "id": "native:item/datePicker/component/min_static",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "minStatic",
      "builderLabel": "Minimum Static",
      "apexlangPath": "pageItem.settings.minStatic",
      "type": "text",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "dependingOn.attribute": "@min_date/component",
        "dependingOn.conditionType": "=",
        "dependingOn.value": "STATIC"
      },
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Minimum Static setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "ae083438b76a11a8dd7d1e00beea9ab3b445f4de1e005c596c9bdb3c3a30b6b4"
    },
    {
      "id": "native:item/datePicker/component/multiple_months",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "multipleMonths",
      "builderLabel": "Multiple Months",
      "apexlangPath": "pageItem.settings.multipleMonths",
      "type": "selectList",
      "required": true,
      "defaultValue": "N",
      "values": [
        {
          "name": "2",
          "label": "2",
          "returnValue": "2"
        },
        {
          "name": "3",
          "label": "3",
          "returnValue": "3"
        },
        {
          "name": "4",
          "label": "4",
          "returnValue": "4"
        },
        {
          "name": "5",
          "label": "5",
          "returnValue": "5"
        },
        {
          "name": "false",
          "label": "No",
          "returnValue": "N"
        }
      ],
      "condition": {
        "dependingOn.attribute": "@display_as/component",
        "dependingOn.conditionType": "inList"
      },
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Multiple Months setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "57acbc9d04a058e055bdda2e4ac238e21cbf60649618b2c11cd01aba51a04d40"
    },
    {
      "id": "native:item/datePicker/component/show_on",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "showOn",
      "builderLabel": "Show On",
      "apexlangPath": "pageItem.settings.showOn",
      "type": "selectList",
      "required": true,
      "defaultValue": "FOCUS",
      "values": [
        {
          "name": "iconClick",
          "label": "Icon Click",
          "returnValue": "IMAGE"
        },
        {
          "name": "itemFocus",
          "label": "Item Focus",
          "returnValue": "FOCUS"
        }
      ],
      "condition": {
        "dependingOn.attribute": "@use_defaults/component",
        "dependingOn.conditionType": "=",
        "dependingOn.value": "N"
      },
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Show On setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "97c2c7fca31a02fab8bdc1b5b6709bf002097ccdcd8bf809b448538937ed36f7"
    },
    {
      "id": "native:item/datePicker/component/show_time",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "showTime",
      "builderLabel": "Show Time",
      "apexlangPath": "pageItem.settings.showTime",
      "type": "yesNo",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {},
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Show Time setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "19493dbce2f5b0dbadc9e48c6ed3141dd7f38e1334e5d430028856a020948087"
    },
    {
      "id": "native:item/datePicker/component/time_increment",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "timeIncrement",
      "builderLabel": "Time Increment",
      "apexlangPath": "pageItem.settings.timeIncrement",
      "type": "integer",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "dependingOn.attribute": "@use_defaults/component",
        "dependingOn.conditionType": "=",
        "dependingOn.value": "N"
      },
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Time Increment setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "20cbecaa60a5ffc69fbee79d0d348fef1f0065df32c52a9a7e2b8d0d9a9263f4"
    },
    {
      "id": "native:item/datePicker/component/use_defaults",
      "context": "pageItem",
      "scope": "component",
      "nativeType": "datePicker",
      "attributeKey": "useDefaults",
      "builderLabel": "Use Defaults",
      "apexlangPath": "pageItem.settings.useDefaults",
      "type": "yesNo",
      "required": false,
      "defaultValue": "true",
      "values": [],
      "condition": {
        "dependingOn.attribute": "@display_as/component",
        "dependingOn.conditionType": "inList"
      },
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Use Defaults setting for datePicker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "92a63c4b0e54c1584b712041f333e960ba74bdea58f239ed346096ec2bb601f9"
    }
  ],
  "currentExamples": {
    "regions": [],
    "items": [
      {
        "id": "page:423/item:P423_DATE_PICKER",
        "pageId": 423,
        "key": "P423_DATE_PICKER",
        "type": "datePicker",
        "template": "Optional - Floating",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "settings": {}
      },
      {
        "id": "page:1601/item:P1601_DATE_PICKER",
        "pageId": 1601,
        "key": "P1601_DATE_PICKER",
        "type": "datePicker",
        "template": "Optional",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "settings": {}
      },
      {
        "id": "page:1601/item:P1601_DATE_PICKER_INLINE",
        "pageId": 1601,
        "key": "P1601_DATE_PICKER_INLINE",
        "type": "datePicker",
        "template": "Optional",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "settings": {
          "displayAs": "inline"
        }
      },
      {
        "id": "page:1601/item:P1601_DATE_PICKER_NATIVE",
        "pageId": 1601,
        "key": "P1601_DATE_PICKER_NATIVE",
        "type": "datePicker",
        "template": "Optional",
        "templateOptions": [
          "#DEFAULT#"
        ],
        "settings": {
          "displayAs": "nativeHtml"
        }
      }
    ],
    "buttons": [],
    "pages": []
  }
}
```

Complete option groups, defaults, presets and source context are available in component:source/parameters.
