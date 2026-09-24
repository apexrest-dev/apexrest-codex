# Interactive Report: parameters

component:reports/interactive-report

Parameter identities include their component context and APEXlang path. UI labels alone are not unique. Raw database return values and DSL enum values may differ. Missing descriptions or unresolved paths are not inferred as supported syntax.

Region template options and component-template options are independent surfaces. Current selections do not establish defaults. #DEFAULT# selects template defaults; it is not a CSS class.

```json
{
  "templateOptions": [
    {
      "id": "template-option:REGION/FORMLEFTLABELS",
      "name": "FORMLEFTLABELS",
      "label": "Left",
      "cssClasses": [
        "t-Form--leftLabels"
      ],
      "groupId": "template-group:region/label-alignment",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Align form labels to left.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/FORMREMOVEPADDING",
      "name": "FORMREMOVEPADDING",
      "label": "None",
      "cssClasses": [
        "t-Form--noPadding"
      ],
      "groupId": "template-group:region/item-padding",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Removes spacing between items.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/FORMSIZELARGE",
      "name": "FORMSIZELARGE",
      "label": "Large",
      "cssClasses": [
        "t-Form--large"
      ],
      "groupId": "template-group:region/item-size",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Large: applies t-Form--large within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:REGION/FORMSIZEXLARGE",
      "name": "FORMSIZEXLARGE",
      "label": "X Large",
      "cssClasses": [
        "t-Form--xlarge"
      ],
      "groupId": "template-group:region/item-size",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "X Large: applies t-Form--xlarge within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:REGION/FORMSLIMPADDING",
      "name": "FORMSLIMPADDING",
      "label": "Slim",
      "cssClasses": [
        "t-Form--slimPadding"
      ],
      "groupId": "template-group:region/item-padding",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Reduces form item spacing.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/FORMSTANDARDPADDING",
      "name": "FORMSTANDARDPADDING",
      "label": "Standard",
      "cssClasses": [
        "t-Form--standardPadding"
      ],
      "groupId": "template-group:region/item-padding",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Uses the standard spacing between items.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/H4",
      "name": "H4",
      "label": "H4",
      "cssClasses": [
        "js-headingLevel-4"
      ],
      "groupId": "template-group:region/heading-level",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "H4",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/HEADING_LEVEL_H1",
      "name": "HEADING_LEVEL_H1",
      "label": "H1",
      "cssClasses": [
        "js-headingLevel-1"
      ],
      "groupId": "template-group:region/heading-level",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "H1",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/HEADING_LEVEL_H2",
      "name": "HEADING_LEVEL_H2",
      "label": "H2",
      "cssClasses": [
        "js-headingLevel-2"
      ],
      "groupId": "template-group:region/heading-level",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "H2",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/HEADING_LEVEL_H3",
      "name": "HEADING_LEVEL_H3",
      "label": "H3",
      "cssClasses": [
        "js-headingLevel-3"
      ],
      "groupId": "template-group:region/heading-level",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "H3",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/HEADING_LEVEL_H5",
      "name": "HEADING_LEVEL_H5",
      "label": "H5",
      "cssClasses": [
        "js-headingLevel-5"
      ],
      "groupId": "template-group:region/heading-level",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "H5",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/HEADING_LEVEL_H6",
      "name": "HEADING_LEVEL_H6",
      "label": "H6",
      "cssClasses": [
        "js-headingLevel-6"
      ],
      "groupId": "template-group:region/heading-level",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "H6",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:region/interactive-report/HIDDENHEADERNOAT",
      "name": "HIDDENHEADERNOAT",
      "label": "Hidden",
      "cssClasses": [
        "t-IRR-region--removeHeader js-removeLandmark"
      ],
      "groupId": "template-group:region/header-visibility",
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Interactive Report"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Hidden: applies t-IRR-region--removeHeader js-removeLandmark within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:region/interactive-report/HIDEREGIONHEADER",
      "name": "HIDEREGIONHEADER",
      "label": "Hidden but accessible",
      "cssClasses": [
        "t-IRR-region--hideHeader js-addHiddenHeadingRoleDesc"
      ],
      "groupId": "template-group:region/header-visibility",
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Interactive Report"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "This option will hide the region header. Note that the region title will still be audible for Screen Readers.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:region/interactive-report/REMOVEBORDERS",
      "name": "REMOVEBORDERS",
      "label": "Remove Borders",
      "cssClasses": [
        "t-IRR-region--noBorders"
      ],
      "groupId": null,
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Interactive Report"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Removes borders around the Interactive Report",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:region/interactive-report/SHOW_MAXIMIZE_BUTTON",
      "name": "SHOW_MAXIMIZE_BUTTON",
      "label": "Show Maximize Button",
      "cssClasses": [
        "js-showMaximizeButton"
      ],
      "groupId": null,
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Interactive Report"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Displays a button in the Interactive Reports toolbar to maximize the report. Clicking this button will toggle the maximize state and stretch the report to fill the screen.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RBM_LARGE",
      "name": "RBM_LARGE",
      "label": "Large",
      "cssClasses": [
        "margin-bottom-lg"
      ],
      "groupId": "template-group:region/region-bottom-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a large bottom margin to the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RBM_MEDIUM",
      "name": "RBM_MEDIUM",
      "label": "Medium",
      "cssClasses": [
        "margin-bottom-md"
      ],
      "groupId": "template-group:region/region-bottom-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a medium bottom margin to the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RBM_NONE",
      "name": "RBM_NONE",
      "label": "None",
      "cssClasses": [
        "margin-bottom-none"
      ],
      "groupId": "template-group:region/region-bottom-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Removes the bottom margin for this region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RBM_SMALL",
      "name": "RBM_SMALL",
      "label": "Small",
      "cssClasses": [
        "margin-bottom-sm"
      ],
      "groupId": "template-group:region/region-bottom-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a small bottom margin to the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RLM_LARGE",
      "name": "RLM_LARGE",
      "label": "Large",
      "cssClasses": [
        "margin-left-lg"
      ],
      "groupId": "template-group:region/region-left-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a large right margin to the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RLM_MEDIUM",
      "name": "RLM_MEDIUM",
      "label": "Medium",
      "cssClasses": [
        "margin-left-md"
      ],
      "groupId": "template-group:region/region-left-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a medium right margin to the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RLM_NONE",
      "name": "RLM_NONE",
      "label": "None",
      "cssClasses": [
        "margin-left-none"
      ],
      "groupId": "template-group:region/region-left-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Removes the left margin from the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RLM_SMALL",
      "name": "RLM_SMALL",
      "label": "Small",
      "cssClasses": [
        "margin-left-sm"
      ],
      "groupId": "template-group:region/region-left-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a small left margin to the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RRM_LARGE",
      "name": "RRM_LARGE",
      "label": "Large",
      "cssClasses": [
        "margin-right-lg"
      ],
      "groupId": "template-group:region/region-right-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a large right margin to the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RRM_MEDIUM",
      "name": "RRM_MEDIUM",
      "label": "Medium",
      "cssClasses": [
        "margin-right-md"
      ],
      "groupId": "template-group:region/region-right-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a medium right margin to the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RRM_NONE",
      "name": "RRM_NONE",
      "label": "None",
      "cssClasses": [
        "margin-right-none"
      ],
      "groupId": "template-group:region/region-right-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Removes the right margin from the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RRM_SMALL",
      "name": "RRM_SMALL",
      "label": "Small",
      "cssClasses": [
        "margin-right-sm"
      ],
      "groupId": "template-group:region/region-right-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a small right margin to the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RTM_LARGE",
      "name": "RTM_LARGE",
      "label": "Large",
      "cssClasses": [
        "margin-top-lg"
      ],
      "groupId": "template-group:region/region-top-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a large top margin to the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RTM_MEDIUM",
      "name": "RTM_MEDIUM",
      "label": "Medium",
      "cssClasses": [
        "margin-top-md"
      ],
      "groupId": "template-group:region/region-top-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a medium top margin to the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RTM_NONE",
      "name": "RTM_NONE",
      "label": "None",
      "cssClasses": [
        "margin-top-none"
      ],
      "groupId": "template-group:region/region-top-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Removes the top margin for this region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/RTM_SMALL",
      "name": "RTM_SMALL",
      "label": "Small",
      "cssClasses": [
        "margin-top-sm"
      ],
      "groupId": "template-group:region/region-top-margin",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds a small top margin to the region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/SHOWFORMLABELSABOVE",
      "name": "SHOWFORMLABELSABOVE",
      "label": "Show Form Labels Above",
      "cssClasses": [
        "t-Form--labelsAbove"
      ],
      "groupId": "template-group:region/label-position",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Show form labels above input fields.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REGION/SORT_CENTER",
      "name": "SORT_CENTER",
      "label": "Center",
      "cssClasses": [
        "t-Region-orderBy--center"
      ],
      "groupId": "template-group:region/sort-order-alignment",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Center: applies t-Region-orderBy--center within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:REGION/SORT_END",
      "name": "SORT_END",
      "label": "End",
      "cssClasses": [
        "t-Region-orderBy--end"
      ],
      "groupId": "template-group:region/sort-order-alignment",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "End: applies t-Region-orderBy--end within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:REGION/STRETCH_FORM_FIELDS",
      "name": "STRETCH_FORM_FIELDS",
      "label": "Stretch Form Fields",
      "cssClasses": [
        "t-Form--stretchInputs"
      ],
      "groupId": "template-group:region/item-width",
      "templateTypes": [
        "REGION"
      ],
      "templates": {},
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Stretch Form Fields: applies t-Form--stretchInputs within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    }
  ],
  "templateOptionGroups": [
    {
      "id": "template-group:region/header-visibility",
      "sourceId": "1480010412268366",
      "name": "HEADER_VISIBILITY",
      "label": "Header",
      "templateTypes": [
        "REGION"
      ],
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Determines the display of the Region Header which also contains the Region Title.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:region/heading-level",
      "sourceId": "1854688978004436212",
      "name": "HEADING_LEVEL",
      "label": "Heading Level",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": false,
      "description": "Heading Level choices for REGION templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:region/item-padding",
      "sourceId": "2137440444399345391",
      "name": "ITEM_PADDING",
      "label": "Item Spacing",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Sets the padding around items within this region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:region/item-size",
      "sourceId": "2137436858184345391",
      "name": "ITEM_SIZE",
      "label": "Item Size",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Sets the size of the form items within this region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:region/item-width",
      "sourceId": "2668408922155612292",
      "name": "ITEM_WIDTH",
      "label": "Item Width",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Sets the width of the form items within this region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:region/label-alignment",
      "sourceId": "2391464006887948702",
      "name": "LABEL_ALIGNMENT",
      "label": "Label Alignment",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Right",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Set the label text alignment for items within this region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:region/label-position",
      "sourceId": "2391484669664981331",
      "name": "LABEL_POSITION",
      "label": "Label Position",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Inline - Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Sets the position of the label relative to the form item.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:region/region-bottom-margin",
      "sourceId": "2498706129862154232",
      "name": "REGION_BOTTOM_MARGIN",
      "label": "Bottom Margin",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Set the bottom margin for this region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:region/region-left-margin",
      "sourceId": "2498708184263162223",
      "name": "REGION_LEFT_MARGIN",
      "label": "Left Margin",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Set the left margin for this region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:region/region-right-margin",
      "sourceId": "2498708543998164599",
      "name": "REGION_RIGHT_MARGIN",
      "label": "Right Margin",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Set the right margin for this region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:region/region-top-margin",
      "sourceId": "2498705575576152458",
      "name": "REGION_TOP_MARGIN",
      "label": "Top Margin",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Set the top margin for this region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:region/sort-order-alignment",
      "sourceId": "1611377962267616972",
      "name": "SORT_ORDER_ALIGNMENT",
      "label": "Sort Order Alignment",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Default (Start)",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Sets the alignment of the sort order item.",
      "descriptionOrigin": "oracle-upl"
    }
  ],
  "templateDefaults": [
    {
      "id": "region-template:interactive-report",
      "type": "region",
      "name": "Interactive Report",
      "key": "interactive-report",
      "internalName": "INTERACTIVE_REPORT",
      "defaultOptions": [],
      "presetOptions": [
        "t-IRR-region--hideHeader js-addHiddenHeadingRoleDesc"
      ]
    }
  ],
  "utAttributes": [],
  "utAttributeValues": [],
  "nativeParameters": [
    {
      "id": "mmd:5110:1",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1",
      "builderLabel": "Name",
      "apexlangPath": "region.name",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Name (text) in region.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:4",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "4",
      "builderLabel": "Comments",
      "apexlangPath": "region.comments.comments",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Comments (text editor) in region.comments.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:13",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "13",
      "builderLabel": "Title",
      "apexlangPath": "region.title",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Title (text) in region.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:21",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "21",
      "builderLabel": "Header Text",
      "apexlangPath": "region.headerAndFooter.headerText",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "REGION_TEMPLATE"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Header Text (html) in region.headerAndFooter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:23",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "23",
      "builderLabel": "Footer Text",
      "apexlangPath": "region.headerAndFooter.footerText",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "REGION_TEMPLATE"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Footer Text (html) in region.headerAndFooter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:24",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "24",
      "builderLabel": "Authorization Scheme",
      "apexlangPath": "region.security.authorizationScheme",
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
      "description": "Authorization Scheme (component) in region.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:32",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "32",
      "builderLabel": "Cache Timeout",
      "apexlangPath": "region.serverCache.cacheTimeout",
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
            "path": "region.serverCache.caching",
            "hasToExist": true,
            "value": "NOCACHE"
          }
        ]
      },
      "maxLength": null,
      "description": "Cache Timeout (select list) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:38",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "38",
      "builderLabel": "Build Option",
      "apexlangPath": "region.config.buildOption",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Build Option (component) in region.config.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:94",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "94",
      "builderLabel": "Type",
      "apexlangPath": "region.type",
      "type": "SUPPORTED UI",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Type (supported ui) in region.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:97",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "97",
      "builderLabel": "Sequence",
      "apexlangPath": "region.layout.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in region.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:104",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "104",
      "builderLabel": "Start New Layout",
      "apexlangPath": "region.layout.startNewLayout",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Start New Layout (yes no) in region.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:105",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "105",
      "builderLabel": "Start New Row",
      "apexlangPath": "region.layout.startNewRow",
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
            "path": "region.layout.startNewLayout",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Start New Row (yes no) in region.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:106",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "106",
      "builderLabel": "Column",
      "apexlangPath": "region.layout.column",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Column (select list) in region.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:107",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "107",
      "builderLabel": "New Column",
      "apexlangPath": "region.layout.newColumn",
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
            "path": "region.layout.startNewRow",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "maxLength": 32767,
      "description": "New Column (yes no) in region.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:108",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "108",
      "builderLabel": "Column Span",
      "apexlangPath": "region.layout.columnSpan",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Column Span (select list) in region.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:110",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "110",
      "builderLabel": "Column Attributes",
      "apexlangPath": "region.layout.columnAttributes",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Column Attributes (combobox) in region.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:129",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "129",
      "builderLabel": "Custom Attributes",
      "apexlangPath": "region.advanced.customAttributes",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "REGION_TEMPLATE"
            ]
          }
        ]
      },
      "maxLength": 2000,
      "description": "Custom Attributes (combobox) in region.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:174",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "174",
      "builderLabel": "Escape Special Characters",
      "apexlangPath": "region.security.escapeSpecialChars",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "ESCAPE_OUTPUT"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Escape Special Characters (yes no) in region.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:180",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "180",
      "builderLabel": "Static ID",
      "apexlangPath": "region.advanced.staticId",
      "type": "STATIC ID",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Static ID (static id) in region.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:181",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "181",
      "builderLabel": "HTML DOM ID",
      "apexlangPath": "region.advanced.htmlDomId",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "HTML DOM ID (text) in region.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:190",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "190",
      "builderLabel": "Parent Region",
      "apexlangPath": "region.layout.parentRegion",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Parent Region (component) in region.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:191",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "191",
      "builderLabel": "Slot",
      "apexlangPath": "region.layout.slot",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Slot (select list) in region.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:193",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "193",
      "builderLabel": "SQL Query",
      "apexlangPath": "region.source.sqlQuery",
      "type": "SQL",
      "required": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURE_IS_REQUIRED",
            "hasToExist": true,
            "value": "SOURCE_SQL",
            "propertyId": "94"
          }
        ]
      },
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "SOURCE_SQL"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "SQL Query (sql) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:194",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "194",
      "builderLabel": "Text",
      "apexlangPath": "region.source.text",
      "type": "TEXT EDITOR",
      "required": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURE_IS_REQUIRED",
            "hasToExist": true,
            "value": "SOURCE_PLAIN",
            "propertyId": "94"
          }
        ]
      },
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "SOURCE_PLAIN"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Text (text editor) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:198",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "198",
      "builderLabel": "PL/SQL Code",
      "apexlangPath": "region.source.plsqlCode",
      "type": "PLSQL",
      "required": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURE_IS_REQUIRED",
            "hasToExist": true,
            "value": "SOURCE_PLSQL",
            "propertyId": "94"
          }
        ]
      },
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "SOURCE_PLSQL"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Code (plsql) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:213",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "213",
      "builderLabel": "Exclude Title from Translation",
      "apexlangPath": "region.advanced.excludeTitleFromTranslation",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Exclude Title from Translation (yes no) in region.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:214",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "214",
      "builderLabel": "HTML Code",
      "apexlangPath": "region.source.htmlCode",
      "type": "HTML",
      "required": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURE_IS_REQUIRED",
            "hasToExist": true,
            "value": "SOURCE_HTML",
            "propertyId": "94"
          }
        ]
      },
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "SOURCE_HTML"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "HTML Code (html) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:215",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "215",
      "builderLabel": "Page Items to Submit",
      "apexlangPath": "region.source.pageItemsToSubmit",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "AJAX_ITEMS_TO_SUBMIT"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page Items to Submit (item) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:216",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "216",
      "builderLabel": "Schema Override Item",
      "apexlangPath": "region.advanced.schemaOverrideItem",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_IR"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Schema Override Item (item) in region.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:217",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "217",
      "builderLabel": "Template",
      "apexlangPath": "region.appearance.template",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "REGION_TEMPLATE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Template (component) in region.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:218",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "218",
      "builderLabel": "Render Components",
      "apexlangPath": "region.appearance.renderComponents",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "ABOVE",
      "values": [
        {
          "name": "aboveContent",
          "returnValue": "ABOVE",
          "label": "Above Content"
        },
        {
          "name": "belowContent",
          "returnValue": "BELOW",
          "label": "Below Content"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "REGION_TEMPLATE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Render Components (select list) in region.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:219",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "219",
      "builderLabel": "Region Display Selector",
      "apexlangPath": "region.advanced.regionDisplaySelector",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "217",
            "path": "region.appearance.template",
            "hasToExist": false
          }
        ]
      },
      "maxLength": 32767,
      "description": "Region Display Selector (yes no) in region.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:220",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "220",
      "builderLabel": "Region Image",
      "apexlangPath": "region.advanced.regionImage",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "217",
            "path": "region.appearance.template",
            "hasToExist": true,
            "values": [
              "NOT_REGION_IMAGE_URL"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Region Image (text) in region.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:221",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "221",
      "builderLabel": "Image Tag Attributes",
      "apexlangPath": "region.advanced.imageTagAttributes",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "220",
            "path": "region.advanced.regionImage",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 255,
      "description": "Image Tag Attributes (text) in region.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:222",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "222",
      "builderLabel": "Caching",
      "apexlangPath": "region.serverCache.caching",
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
            "type": "STARTS_WITH_ANY",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_JQM_LIST_VIEW",
              "NATIVE_JQM_REFLOW",
              "NATIVE_JQM_COLUMN_TOGGLE",
              "NATIVE_LIST",
              "NATIVE_URL",
              "NATIVE_IR",
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_PLSQL",
              "NATIVE_JSTREE",
              "NATIVE_CALENDAR",
              "NATIVE_SVG_CHART",
              "NATIVE_SIMPLE_CHART",
              "NATIVE_TREE",
              "NATIVE_STATIC_SEARCH",
              "NATIVE_DYNAMIC_CONTENT",
              "PLUGIN_"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Caching (select list) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:223",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "223",
      "builderLabel": "Customizable",
      "apexlangPath": "region.customization.customizable",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "0",
      "values": [
        {
          "name": "false",
          "returnValue": "0",
          "label": "Not Customizable By End Users"
        },
        {
          "name": "shownByDefault",
          "returnValue": "1",
          "label": "Customizable and Shown By Default"
        },
        {
          "name": "notShownByDefault",
          "returnValue": "2",
          "label": "Customizable and Not Shown By Default"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Customizable (select list) in region.customization.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:224",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "224",
      "builderLabel": "Name",
      "apexlangPath": "region.customization.name",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "223",
            "path": "region.customization.customizable",
            "hasToExist": true,
            "values": [
              "1",
              "2"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Name (text) in region.customization.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:225",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "225",
      "builderLabel": "PL/SQL Function Body returning SQL Query",
      "apexlangPath": "region.source.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY SQL",
      "required": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURE_IS_REQUIRED",
            "hasToExist": true,
            "value": "SOURCE_PLSQL_FUNCTION",
            "propertyId": "94"
          }
        ]
      },
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "SOURCE_PLSQL_FUNCTION"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Function Body returning SQL Query (plsql function body sql) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:391",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "391",
      "builderLabel": "Generic Column Count",
      "apexlangPath": "region.source.genericColumnCount",
      "type": "INTEGER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "390",
            "path": "region.source.useGenericColumnNames",
            "hasToExist": true,
            "value": "GENERIC_REPORT_COLUMNS"
          }
        ]
      },
      "maxLength": 3,
      "description": "Generic Column Count (integer) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:475",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "475",
      "builderLabel": "Graph Owner",
      "apexlangPath": "region.source.graphOwner",
      "type": "OWNER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Graph Owner (owner) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:476",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "476",
      "builderLabel": "Graph Name",
      "apexlangPath": "region.source.graphName",
      "type": "GRAPH",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Graph Name (graph) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:477",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "477",
      "builderLabel": "Match Clause",
      "apexlangPath": "region.source.matchClause",
      "type": "TEXT EDITOR",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Match Clause (text editor) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:478",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "478",
      "builderLabel": "Where Clause",
      "apexlangPath": "region.source.whereClause",
      "type": "WHERE CLAUSE",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Where Clause (where clause) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:479",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "479",
      "builderLabel": "Columns Clause",
      "apexlangPath": "region.source.columnsClause",
      "type": "TEXT EDITOR",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Columns Clause (text editor) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:480",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "480",
      "builderLabel": "Order By Clause",
      "apexlangPath": "region.source.orderByClause",
      "type": "ORDER BY CLAUSE",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          },
          {
            "type": "IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_IG",
              "NATIVE_IR",
              "NATIVE_MAP_REGION",
              "NATIVE_FORM"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Order By Clause (order by clause) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:481",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "481",
      "builderLabel": "Order By Clause",
      "apexlangPath": "region.orderBy.orderByClause",
      "type": "ORDER BY CLAUSE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1238",
            "path": "region.orderBy.type",
            "hasToExist": true,
            "value": "STATIC"
          },
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Order By Clause (order by clause) in region.orderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:482",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "482",
      "builderLabel": "Item",
      "apexlangPath": "region.orderBy.item",
      "type": "ORDER BY ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1238",
            "path": "region.orderBy.type",
            "hasToExist": true,
            "value": "ITEM"
          },
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Item (order by item) in region.orderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:739",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "739",
      "builderLabel": "Icon",
      "apexlangPath": "region.appearance.icon",
      "type": "ICON",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "217",
            "path": "region.appearance.template",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 255,
      "description": "Icon (icon) in region.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:740",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "740",
      "builderLabel": "CSS Classes",
      "apexlangPath": "region.appearance.cssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "217",
            "path": "region.appearance.template",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 255,
      "description": "CSS Classes (combobox) in region.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:741",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "741",
      "builderLabel": "Template Options",
      "apexlangPath": "region.appearance.templateOptions",
      "type": "TEMPLATE OPTIONS",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "217",
            "path": "region.appearance.template",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Template Options (template options) in region.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:751",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "751",
      "builderLabel": "Depends On Item(s)",
      "apexlangPath": "region.serverCache.dependsOnItems",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "222",
            "path": "region.serverCache.caching",
            "hasToExist": true,
            "value": "NOCACHE"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Depends On Item(s) (item) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:763",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "763",
      "builderLabel": "Column CSS Classes",
      "apexlangPath": "region.layout.columnCssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Column CSS Classes (combobox) in region.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:814",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "814",
      "builderLabel": "Row CSS Classes",
      "apexlangPath": "region.layout.rowCssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Row CSS Classes (combobox) in region.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:957",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "957",
      "builderLabel": "Location",
      "apexlangPath": "region.source.location",
      "type": "SELECT LIST",
      "required": {
        "operator": "OR",
        "conditions": [
          {
            "operator": "AND",
            "conditions": [
              {
                "type": "STARTS_WITH",
                "hasToExist": true,
                "value": "TMPL_",
                "propertyId": "94"
              },
              {
                "type": "EXISTS",
                "hasToExist": true,
                "componentTypeId": "7000",
                "condition": {
                  "operator": "AND",
                  "conditions": [
                    {
                      "type": "EQUALS",
                      "hasToExist": true,
                      "value": "REPORT",
                      "propertyId": "243"
                    }
                  ]
                }
              }
            ]
          },
          {
            "operator": "AND",
            "conditions": [
              {
                "type": "NOT_STARTS_WITH",
                "hasToExist": true,
                "value": "TMPL_",
                "propertyId": "94"
              },
              {
                "type": "FEATURE_IS_REQUIRED",
                "hasToExist": true,
                "value": "SOURCE_LOCATION",
                "propertyId": "94"
              }
            ]
          }
        ]
      },
      "defaultValue": "LOCAL",
      "values": [
        {
          "name": "localDatabase",
          "returnValue": "LOCAL",
          "label": "Local Database"
        },
        {
          "name": "restEnabledSql",
          "returnValue": "REMOTE",
          "label": "REST Enabled SQL"
        },
        {
          "name": "restSource",
          "returnValue": "WEB_SOURCE",
          "label": "REST Source"
        },
        {
          "name": "jsonDualityView",
          "returnValue": "DUALITY_VIEW",
          "label": "JSON Duality View"
        },
        {
          "name": "jsonSource",
          "returnValue": "JSON_COLLECTION",
          "label": "JSON Source"
        },
        {
          "name": "sampleData",
          "returnValue": "SAMPLE_DATA",
          "label": "Sample Data"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "SOURCE_LOCATION"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Location (select list) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:958",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "958",
      "builderLabel": "Remote Server",
      "apexlangPath": "region.source.remoteServer",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "957",
            "path": "region.source.location",
            "hasToExist": true,
            "value": "REMOTE"
          }
        ]
      },
      "maxLength": null,
      "description": "Remote Server (component) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:959",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "959",
      "builderLabel": "Type",
      "apexlangPath": "region.source.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "TABLE",
      "values": [
        {
          "name": "tableView",
          "returnValue": "TABLE",
          "label": "Table / View"
        },
        {
          "name": "sqlQuery",
          "returnValue": "SQL",
          "label": "SQL Query"
        },
        {
          "name": "functionBody",
          "returnValue": "FUNC_BODY_RETURNING_SQL",
          "label": "Function Body returning SQL Query"
        },
        {
          "name": "propertyGraph",
          "returnValue": "GRAPH",
          "label": "Property Graph"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "957",
            "path": "region.source.location",
            "hasToExist": true,
            "values": [
              "LOCAL",
              "REMOTE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:960",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "960",
      "builderLabel": "Table Owner",
      "apexlangPath": "region.source.tableOwner",
      "type": "OWNER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "TABLE"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Table Owner (owner) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:961",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "961",
      "builderLabel": "Table Name",
      "apexlangPath": "region.source.tableName",
      "type": "TABLE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "TABLE"
          }
        ]
      },
      "maxLength": 128,
      "description": "Table Name (table) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:962",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "962",
      "builderLabel": "Where Clause",
      "apexlangPath": "region.source.whereClause",
      "type": "WHERE CLAUSE",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "TABLE"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Where Clause (where clause) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:963",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "963",
      "builderLabel": "Order By Clause",
      "apexlangPath": "region.orderBy.orderByClause",
      "type": "ORDER BY CLAUSE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1238",
            "path": "region.orderBy.type",
            "hasToExist": true,
            "value": "STATIC"
          },
          {
            "type": "IN_LIST",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": false,
            "values": [
              "TABLE",
              "SQL",
              "FUNC_BODY_RETURNING_SQL",
              "$NULL$"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Order By Clause (order by clause) in region.orderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:964",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "964",
      "builderLabel": "SQL Query",
      "apexlangPath": "region.source.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "SQL Query (sql) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:965",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "965",
      "builderLabel": "Caching",
      "apexlangPath": "region.remoteCache.caching",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "allUsers",
          "returnValue": "ALL_USERS",
          "label": "For All Users"
        },
        {
          "name": "user",
          "returnValue": "USER",
          "label": "By User"
        },
        {
          "name": "session",
          "returnValue": "SESSION",
          "label": "By Session"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "957",
            "path": "region.source.location",
            "hasToExist": true,
            "value": "REMOTE"
          }
        ]
      },
      "maxLength": null,
      "description": "Caching (select list) in region.remoteCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:966",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "966",
      "builderLabel": "Timeout",
      "apexlangPath": "region.remoteCache.timeout",
      "type": "TEXT EDITOR",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "965",
            "path": "region.remoteCache.caching",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 255,
      "description": "Timeout (text editor) in region.remoteCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:967",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "967",
      "builderLabel": "REST Source",
      "apexlangPath": "region.source.restSource",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "957",
            "path": "region.source.location",
            "hasToExist": true,
            "value": "WEB_SOURCE"
          }
        ]
      },
      "maxLength": null,
      "description": "REST Source (component) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:969",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "969",
      "builderLabel": "Nested Rows",
      "apexlangPath": "region.dataProfile.nestedRows",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true,
            "values": [
              "HAS_ARRAY_COLUMNS"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Nested Rows (component) in region.dataProfile.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:975",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "975",
      "builderLabel": "Optimizer Hint",
      "apexlangPath": "region.source.optimizerHint",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "957",
            "path": "region.source.location",
            "hasToExist": true,
            "values": [
              "LOCAL",
              "REMOTE",
              "WEB_SOURCE",
              "DUALITY_VIEW",
              "JSON_COLLECTION"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Optimizer Hint (text) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:978",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "978",
      "builderLabel": "Include ROWID Column",
      "apexlangPath": "region.source.includeRowidColumn",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "TABLE"
          },
          {
            "type": "FEATURES",
            "propertyId": "958",
            "path": "region.source.remoteServer",
            "hasToExist": false,
            "values": [
              "IS_ORACLE"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Include ROWID Column (yes no) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1034",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1034",
      "builderLabel": "Type",
      "apexlangPath": "region.localPostProcessing.type",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "whereOrderByClause",
          "returnValue": "WHERE_ORDER_BY_CLAUSE",
          "label": "Where/Order By Clause"
        },
        {
          "name": "sqlQuery",
          "returnValue": "SQL",
          "label": "SQL Query"
        },
        {
          "name": "plsqlFunctionBody",
          "returnValue": "FUNC_BODY_RETURNING_SQL",
          "label": "PL/SQL Function Body returning SQL Query"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1035",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1035",
      "builderLabel": "Where Clause",
      "apexlangPath": "region.localPostProcessing.whereClause",
      "type": "WHERE CLAUSE",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1034",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "value": "WHERE_ORDER_BY_CLAUSE"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Where Clause (where clause) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1036",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1036",
      "builderLabel": "Order By Clause",
      "apexlangPath": "region.localPostProcessing.orderByClause",
      "type": "ORDER BY CLAUSE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1241",
            "path": "region.localPostProcessing.orderByType",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Order By Clause (order by clause) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1041",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1041",
      "builderLabel": "SQL Query",
      "apexlangPath": "region.localPostProcessing.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1034",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "SQL Query (sql) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1042",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1042",
      "builderLabel": "Enabled",
      "apexlangPath": "region.externalFilterAndOrderBy.enabled",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "IN_LIST",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "values": [
              "N",
              "$NULL$"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Enabled (yes no) in region.externalFilterAndOrderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1043",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1043",
      "builderLabel": "Filter",
      "apexlangPath": "region.externalFilterAndOrderBy.filter",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1042",
            "path": "region.externalFilterAndOrderBy.enabled",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Filter (text editor) in region.externalFilterAndOrderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1044",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1044",
      "builderLabel": "Order By",
      "apexlangPath": "region.externalFilterAndOrderBy.orderBy",
      "type": "TEXT EDITOR",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1244",
            "path": "region.externalFilterAndOrderBy.orderByType",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Order By (text editor) in region.externalFilterAndOrderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1112",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1112",
      "builderLabel": "Use Local Table",
      "apexlangPath": "region.restSynchronization.useLocalTable",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true,
            "values": [
              "HAS_SYNC_HAS_NO_ARRAY_COLUMNS"
            ]
          },
          {
            "operator": "AND",
            "conditions": [
              {
                "type": "NULL",
                "propertyId": "969",
                "path": "region.dataProfile.nestedRows",
                "hasToExist": true
              },
              {
                "type": "FEATURES",
                "propertyId": "967",
                "path": "region.source.restSource",
                "hasToExist": true,
                "values": [
                  "HAS_SYNC_ALL_ARRAY_COLUMNS"
                ]
              }
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "969",
            "path": "region.dataProfile.nestedRows",
            "hasToExist": true,
            "values": [
              "IS_SYNCED"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Use Local Table (yes no) in region.restSynchronization.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1238",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1238",
      "builderLabel": "Type",
      "apexlangPath": "region.orderBy.type",
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
          "name": "item",
          "returnValue": "ITEM",
          "label": "Item"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "ORDER_BY"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "957",
            "path": "region.source.location",
            "hasToExist": true,
            "values": [
              "LOCAL",
              "REMOTE",
              "SAMPLE_DATA"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": false,
            "values": [
              "TABLE",
              "GRAPH",
              "SQL",
              "FUNC_BODY_RETURNING_SQL",
              "$NULL$"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in region.orderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1239",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1239",
      "builderLabel": "Item",
      "apexlangPath": "region.orderBy.item",
      "type": "ORDER BY ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1238",
            "path": "region.orderBy.type",
            "hasToExist": true,
            "value": "ITEM"
          },
          {
            "type": "IN_LIST",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": false,
            "values": [
              "TABLE",
              "SQL",
              "FUNC_BODY_RETURNING_SQL",
              "$NULL$"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Item (order by item) in region.orderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1241",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1241",
      "builderLabel": "Order By Type",
      "apexlangPath": "region.localPostProcessing.orderByType",
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
          "name": "item",
          "returnValue": "ITEM",
          "label": "Item"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1034",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "value": "WHERE_ORDER_BY_CLAUSE"
          }
        ]
      },
      "maxLength": null,
      "description": "Order By Type (select list) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1242",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1242",
      "builderLabel": "Item",
      "apexlangPath": "region.localPostProcessing.item",
      "type": "ORDER BY ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1241",
            "path": "region.localPostProcessing.orderByType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Item (order by item) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1243",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1243",
      "builderLabel": "Order By Item",
      "apexlangPath": "region.localPostProcessing.orderByItem",
      "type": "ORDER BY ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "1034",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "values": [
              "SQL",
              "FUNC_BODY_RETURNING_SQL"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Order By Item (order by item) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1244",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1244",
      "builderLabel": "Order By Type",
      "apexlangPath": "region.externalFilterAndOrderBy.orderByType",
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
          "name": "item",
          "returnValue": "ITEM",
          "label": "Item"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "ORDER_BY"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "1042",
            "path": "region.externalFilterAndOrderBy.enabled",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Order By Type (select list) in region.externalFilterAndOrderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1245",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1245",
      "builderLabel": "Item",
      "apexlangPath": "region.externalFilterAndOrderBy.item",
      "type": "ORDER BY ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1244",
            "path": "region.externalFilterAndOrderBy.orderByType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (order by item) in region.externalFilterAndOrderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1246",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1246",
      "builderLabel": "Order By Clause",
      "apexlangPath": "region.source.orderByClause",
      "type": "ORDER BY CLAUSE",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "TABLE"
          },
          {
            "type": "IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_IG",
              "NATIVE_IR",
              "NATIVE_MAP_REGION",
              "NATIVE_FORM"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Order By Clause (order by clause) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1247",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1247",
      "builderLabel": "Order By",
      "apexlangPath": "region.externalFilterAndOrderBy.orderBy",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1042",
            "path": "region.externalFilterAndOrderBy.enabled",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_IG",
              "NATIVE_IR",
              "NATIVE_MAP_REGION",
              "NATIVE_FORM"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Order By (text editor) in region.externalFilterAndOrderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1603",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1603",
      "builderLabel": "File URL",
      "apexlangPath": "region.image.fileUrl",
      "type": "TEXT",
      "required": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "hasToExist": true,
            "values": [
              "REGION_IMAGE_URL"
            ],
            "propertyId": "217"
          }
        ]
      },
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "217",
            "path": "region.appearance.template",
            "hasToExist": true,
            "values": [
              "REGION_IMAGE",
              "REGION_IMAGE_URL"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "File URL (text) in region.image.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1604",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1604",
      "builderLabel": "Accessible Description",
      "apexlangPath": "region.image.accessibleDescription",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "217",
            "path": "region.appearance.template",
            "hasToExist": true,
            "values": [
              "REGION_IMAGE_ALT_TEXT"
            ]
          },
          {
            "type": "NOT_NULL",
            "propertyId": "1603",
            "path": "region.image.fileUrl",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 255,
      "description": "Accessible Description (text) in region.image.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1605",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1605",
      "builderLabel": "Custom Attributes",
      "apexlangPath": "region.image.customAttributes",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "217",
            "path": "region.appearance.template",
            "hasToExist": true,
            "values": [
              "REGION_IMAGE_ATTRIBUTES"
            ]
          },
          {
            "type": "NOT_NULL",
            "propertyId": "1603",
            "path": "region.image.fileUrl",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 255,
      "description": "Custom Attributes (text) in region.image.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1669",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1669",
      "builderLabel": "Use Landmark",
      "apexlangPath": "region.accessibility.useLandmark",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "217",
            "path": "region.appearance.template",
            "hasToExist": true,
            "values": [
              "REGION_LANDMARK_ATTRIBUTES"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Use Landmark (yes no) in region.accessibility.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1670",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1670",
      "builderLabel": "Landmark Type",
      "apexlangPath": "region.accessibility.landmarkType",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "banner",
          "returnValue": "banner",
          "label": "Banner"
        },
        {
          "name": "complementary",
          "returnValue": "complementary",
          "label": "Complementary"
        },
        {
          "name": "contentInfo",
          "returnValue": "contentinfo",
          "label": "Content Info"
        },
        {
          "name": "form",
          "returnValue": "form",
          "label": "Form"
        },
        {
          "name": "main",
          "returnValue": "main",
          "label": "Main"
        },
        {
          "name": "navigation",
          "returnValue": "navigation",
          "label": "Navigation"
        },
        {
          "name": "region",
          "returnValue": "region",
          "label": "Region"
        },
        {
          "name": "search",
          "returnValue": "search",
          "label": "Search"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1669",
            "path": "region.accessibility.useLandmark",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Landmark Type (select list) in region.accessibility.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:1671",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1671",
      "builderLabel": "Landmark Label",
      "apexlangPath": "region.accessibility.landmarkLabel",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1669",
            "path": "region.accessibility.useLandmark",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 255,
      "description": "Landmark Label (text) in region.accessibility.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5000",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5000",
      "builderLabel": "Type",
      "apexlangPath": "region.serverCache.type",
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
            "path": "region.serverCache.caching",
            "hasToExist": true,
            "value": "NOCACHE"
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5001",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5001",
      "builderLabel": "SQL Query",
      "apexlangPath": "region.serverCache.sqlQuery",
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
            "path": "region.serverCache.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5002",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5002",
      "builderLabel": "Value",
      "apexlangPath": "region.serverCache.value",
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
            "path": "region.serverCache.type",
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
      "description": "Value (text) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5003",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5003",
      "builderLabel": "Item",
      "apexlangPath": "region.serverCache.item",
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
            "path": "region.serverCache.type",
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
      "description": "Item (item) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5004",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5004",
      "builderLabel": "List",
      "apexlangPath": "region.serverCache.list",
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
            "path": "region.serverCache.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5005",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5005",
      "builderLabel": "Preference",
      "apexlangPath": "region.serverCache.preference",
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
            "path": "region.serverCache.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5006",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5006",
      "builderLabel": "Page",
      "apexlangPath": "region.serverCache.page",
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
            "path": "region.serverCache.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5007",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5007",
      "builderLabel": "Pages",
      "apexlangPath": "region.serverCache.pages",
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
            "path": "region.serverCache.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5008",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5008",
      "builderLabel": "Text",
      "apexlangPath": "region.serverCache.text",
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
            "path": "region.serverCache.type",
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
      "description": "Text (text) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5009",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5009",
      "builderLabel": "Value",
      "apexlangPath": "region.serverCache.value",
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
            "path": "region.serverCache.type",
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
      "description": "Value (text) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5010",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5010",
      "builderLabel": "Item",
      "apexlangPath": "region.serverCache.item",
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
            "path": "region.serverCache.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5011",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5011",
      "builderLabel": "Value",
      "apexlangPath": "region.serverCache.value",
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
            "path": "region.serverCache.type",
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
      "description": "Value (text) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5012",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5012",
      "builderLabel": "Language",
      "apexlangPath": "region.serverCache.language",
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
            "path": "region.serverCache.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5013",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5013",
      "builderLabel": "SQL Expression",
      "apexlangPath": "region.serverCache.sqlExpression",
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
            "path": "region.serverCache.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5014",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5014",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "region.serverCache.plsqlExpression",
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
            "path": "region.serverCache.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5015",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5015",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "region.serverCache.javaScriptExpression",
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
            "path": "region.serverCache.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5032",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5032",
      "builderLabel": "Language",
      "apexlangPath": "region.serverCache.language",
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
            "path": "region.serverCache.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5033",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5033",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "region.serverCache.plsqlFunctionBody",
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
            "path": "region.serverCache.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5034",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5034",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "region.serverCache.javaScriptFunctionBody",
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
            "path": "region.serverCache.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in region.serverCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5050",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5050",
      "builderLabel": "Type",
      "apexlangPath": "region.readOnly.type",
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
      "description": "Type (select list) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5051",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5051",
      "builderLabel": "SQL Query",
      "apexlangPath": "region.readOnly.sqlQuery",
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
            "path": "region.readOnly.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5052",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5052",
      "builderLabel": "Value",
      "apexlangPath": "region.readOnly.value",
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
            "path": "region.readOnly.type",
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
      "description": "Value (text) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5053",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5053",
      "builderLabel": "Item",
      "apexlangPath": "region.readOnly.item",
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
            "path": "region.readOnly.type",
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
      "description": "Item (item) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5054",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5054",
      "builderLabel": "List",
      "apexlangPath": "region.readOnly.list",
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
            "path": "region.readOnly.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5055",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5055",
      "builderLabel": "Preference",
      "apexlangPath": "region.readOnly.preference",
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
            "path": "region.readOnly.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5056",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5056",
      "builderLabel": "Page",
      "apexlangPath": "region.readOnly.page",
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
            "path": "region.readOnly.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5057",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5057",
      "builderLabel": "Pages",
      "apexlangPath": "region.readOnly.pages",
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
            "path": "region.readOnly.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5058",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5058",
      "builderLabel": "Text",
      "apexlangPath": "region.readOnly.text",
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
            "path": "region.readOnly.type",
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
      "description": "Text (text) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5059",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5059",
      "builderLabel": "Value",
      "apexlangPath": "region.readOnly.value",
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
            "path": "region.readOnly.type",
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
      "description": "Value (text) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5060",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5060",
      "builderLabel": "Item",
      "apexlangPath": "region.readOnly.item",
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
            "path": "region.readOnly.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5061",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5061",
      "builderLabel": "Value",
      "apexlangPath": "region.readOnly.value",
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
            "path": "region.readOnly.type",
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
      "description": "Value (text) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5062",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5062",
      "builderLabel": "Language",
      "apexlangPath": "region.readOnly.language",
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
            "path": "region.readOnly.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5063",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5063",
      "builderLabel": "SQL Expression",
      "apexlangPath": "region.readOnly.sqlExpression",
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
            "path": "region.readOnly.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5064",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5064",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "region.readOnly.plsqlExpression",
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
            "path": "region.readOnly.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5065",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5065",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "region.readOnly.javaScriptExpression",
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
            "path": "region.readOnly.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5082",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5082",
      "builderLabel": "Language",
      "apexlangPath": "region.readOnly.language",
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
            "path": "region.readOnly.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5083",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5083",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "region.readOnly.plsqlFunctionBody",
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
            "path": "region.readOnly.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5084",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5084",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "region.readOnly.javaScriptFunctionBody",
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
            "path": "region.readOnly.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in region.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5100",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5100",
      "builderLabel": "Type",
      "apexlangPath": "region.serverSideCondition.type",
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
      "description": "Type (select list) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5101",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5101",
      "builderLabel": "SQL Query",
      "apexlangPath": "region.serverSideCondition.sqlQuery",
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
            "path": "region.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5102",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5102",
      "builderLabel": "Value",
      "apexlangPath": "region.serverSideCondition.value",
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
            "path": "region.serverSideCondition.type",
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
      "description": "Value (text) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5103",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5103",
      "builderLabel": "Item",
      "apexlangPath": "region.serverSideCondition.item",
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
            "path": "region.serverSideCondition.type",
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
      "description": "Item (item) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5104",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5104",
      "builderLabel": "List",
      "apexlangPath": "region.serverSideCondition.list",
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
            "path": "region.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5105",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5105",
      "builderLabel": "Preference",
      "apexlangPath": "region.serverSideCondition.preference",
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
            "path": "region.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5106",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5106",
      "builderLabel": "Page",
      "apexlangPath": "region.serverSideCondition.page",
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
            "path": "region.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5107",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5107",
      "builderLabel": "Pages",
      "apexlangPath": "region.serverSideCondition.pages",
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
            "path": "region.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5108",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5108",
      "builderLabel": "Text",
      "apexlangPath": "region.serverSideCondition.text",
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
            "path": "region.serverSideCondition.type",
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
      "description": "Text (text) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5109",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5109",
      "builderLabel": "Value",
      "apexlangPath": "region.serverSideCondition.value",
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
            "path": "region.serverSideCondition.type",
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
      "description": "Value (text) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5110",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5110",
      "builderLabel": "Item",
      "apexlangPath": "region.serverSideCondition.item",
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
            "path": "region.serverSideCondition.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5111",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5111",
      "builderLabel": "Value",
      "apexlangPath": "region.serverSideCondition.value",
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
            "path": "region.serverSideCondition.type",
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
      "description": "Value (text) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5112",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5112",
      "builderLabel": "Language",
      "apexlangPath": "region.serverSideCondition.language",
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
            "path": "region.serverSideCondition.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5113",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5113",
      "builderLabel": "SQL Expression",
      "apexlangPath": "region.serverSideCondition.sqlExpression",
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
            "path": "region.serverSideCondition.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5114",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5114",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "region.serverSideCondition.plsqlExpression",
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
            "path": "region.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5115",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5115",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "region.serverSideCondition.javaScriptExpression",
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
            "path": "region.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5132",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5132",
      "builderLabel": "Language",
      "apexlangPath": "region.serverSideCondition.language",
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
            "path": "region.serverSideCondition.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5133",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5133",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "region.serverSideCondition.plsqlFunctionBody",
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
            "path": "region.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5134",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5134",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "region.serverSideCondition.javaScriptFunctionBody",
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
            "path": "region.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in region.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5360",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5360",
      "builderLabel": "Language",
      "apexlangPath": "region.source.language",
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
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "FUNC_BODY_RETURNING_SQL"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5361",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5361",
      "builderLabel": "PL/SQL Function Body returning SQL Query",
      "apexlangPath": "region.source.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5360",
            "path": "region.source.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Function Body returning SQL Query (plsql function body sql) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5362",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5362",
      "builderLabel": "JavaScript Function Body returning SQL Query",
      "apexlangPath": "region.source.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5360",
            "path": "region.source.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "JavaScript Function Body returning SQL Query (mle javascript function body sql) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5380",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5380",
      "builderLabel": "Language",
      "apexlangPath": "region.localPostProcessing.language",
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
            "propertyId": "1034",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "value": "FUNC_BODY_RETURNING_SQL"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5381",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5381",
      "builderLabel": "PL/SQL Function Body returning SQL Query",
      "apexlangPath": "region.localPostProcessing.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5380",
            "path": "region.localPostProcessing.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Function Body returning SQL Query (plsql function body sql) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:5382",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "5382",
      "builderLabel": "JavaScript Function Body returning SQL Query",
      "apexlangPath": "region.localPostProcessing.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5380",
            "path": "region.localPostProcessing.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "JavaScript Function Body returning SQL Query (mle javascript function body sql) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:6001",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "6001",
      "builderLabel": "PL/SQL Function Body returning a CLOB",
      "apexlangPath": "region.source.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY CLOB",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "6000",
            "path": "region.source.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Function Body returning a CLOB (plsql function body clob) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:6002",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "6002",
      "builderLabel": "JavaScript Function Body returning a String",
      "apexlangPath": "region.source.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY CLOB",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "6000",
            "path": "region.source.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "JavaScript Function Body returning a String (mle javascript function body clob) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:12171001",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "12171001",
      "builderLabel": "Sample Data",
      "apexlangPath": "region.source.sampleData",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "employees",
          "returnValue": "EMPLOYEES",
          "label": "Employees"
        },
        {
          "name": "tasks",
          "returnValue": "TASKS",
          "label": "Tasks"
        },
        {
          "name": "products",
          "returnValue": "PRODUCTS",
          "label": "Products"
        },
        {
          "name": "projects",
          "returnValue": "PROJECTS",
          "label": "Projects"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "957",
            "path": "region.source.location",
            "hasToExist": true,
            "value": "SAMPLE_DATA"
          }
        ]
      },
      "maxLength": null,
      "description": "Sample Data (select list) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520005",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520005",
      "builderLabel": "JSON Duality View",
      "apexlangPath": "region.source.jsonDualityView",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "957",
            "path": "region.source.location",
            "hasToExist": true,
            "value": "DUALITY_VIEW"
          }
        ]
      },
      "maxLength": null,
      "description": "JSON Duality View (component) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520006",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520006",
      "builderLabel": "JSON Source",
      "apexlangPath": "region.source.jsonSource",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "957",
            "path": "region.source.location",
            "hasToExist": true,
            "value": "JSON_COLLECTION"
          }
        ]
      },
      "maxLength": null,
      "description": "JSON Source (component) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520009",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520009",
      "builderLabel": "Nested Rows",
      "apexlangPath": "region.dataProfile.nestedRows",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "53520005",
            "path": "region.source.jsonDualityView",
            "hasToExist": true,
            "values": [
              "HAS_ARRAY_COLUMNS"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Nested Rows (component) in region.dataProfile.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520010",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520010",
      "builderLabel": "Nested Rows",
      "apexlangPath": "region.dataProfile.nestedRows",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "53520006",
            "path": "region.source.jsonSource",
            "hasToExist": true,
            "values": [
              "HAS_ARRAY_COLUMNS"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Nested Rows (component) in region.dataProfile.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520012",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520012",
      "builderLabel": "Type",
      "apexlangPath": "region.localPostProcessing.type",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "whereOrderByClause",
          "returnValue": "WHERE_ORDER_BY_CLAUSE",
          "label": "Where/Order By Clause"
        },
        {
          "name": "sqlQuery",
          "returnValue": "SQL",
          "label": "SQL Query"
        },
        {
          "name": "plsqlFunctionBody",
          "returnValue": "FUNC_BODY_RETURNING_SQL",
          "label": "PL/SQL Function Body returning SQL Query"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "53520005",
            "path": "region.source.jsonDualityView",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520013",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520013",
      "builderLabel": "Where Clause",
      "apexlangPath": "region.localPostProcessing.whereClause",
      "type": "WHERE CLAUSE",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520012",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "value": "WHERE_ORDER_BY_CLAUSE"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Where Clause (where clause) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520014",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520014",
      "builderLabel": "Order By Clause",
      "apexlangPath": "region.localPostProcessing.orderByClause",
      "type": "ORDER BY CLAUSE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520016",
            "path": "region.localPostProcessing.orderByType",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Order By Clause (order by clause) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520015",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520015",
      "builderLabel": "SQL Query",
      "apexlangPath": "region.localPostProcessing.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520012",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "SQL Query (sql) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520016",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520016",
      "builderLabel": "Order By Type",
      "apexlangPath": "region.localPostProcessing.orderByType",
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
          "name": "item",
          "returnValue": "ITEM",
          "label": "Item"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520012",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "value": "WHERE_ORDER_BY_CLAUSE"
          }
        ]
      },
      "maxLength": null,
      "description": "Order By Type (select list) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520017",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520017",
      "builderLabel": "Item",
      "apexlangPath": "region.localPostProcessing.item",
      "type": "ORDER BY ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520016",
            "path": "region.localPostProcessing.orderByType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Item (order by item) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520018",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520018",
      "builderLabel": "Order By Item",
      "apexlangPath": "region.localPostProcessing.orderByItem",
      "type": "ORDER BY ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "53520012",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "values": [
              "SQL",
              "FUNC_BODY_RETURNING_SQL"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Order By Item (order by item) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520019",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520019",
      "builderLabel": "Type",
      "apexlangPath": "region.localPostProcessing.type",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "whereOrderByClause",
          "returnValue": "WHERE_ORDER_BY_CLAUSE",
          "label": "Where/Order By Clause"
        },
        {
          "name": "sqlQuery",
          "returnValue": "SQL",
          "label": "SQL Query"
        },
        {
          "name": "plsqlFunctionBody",
          "returnValue": "FUNC_BODY_RETURNING_SQL",
          "label": "PL/SQL Function Body returning SQL Query"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "53520006",
            "path": "region.source.jsonSource",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520020",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520020",
      "builderLabel": "Where Clause",
      "apexlangPath": "region.localPostProcessing.whereClause",
      "type": "WHERE CLAUSE",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520019",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "value": "WHERE_ORDER_BY_CLAUSE"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Where Clause (where clause) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520021",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520021",
      "builderLabel": "Order By Clause",
      "apexlangPath": "region.localPostProcessing.orderByClause",
      "type": "ORDER BY CLAUSE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520023",
            "path": "region.localPostProcessing.orderByType",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Order By Clause (order by clause) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520022",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520022",
      "builderLabel": "SQL Query",
      "apexlangPath": "region.localPostProcessing.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520019",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "SQL Query (sql) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520023",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520023",
      "builderLabel": "Order By Type",
      "apexlangPath": "region.localPostProcessing.orderByType",
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
          "name": "item",
          "returnValue": "ITEM",
          "label": "Item"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520019",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "value": "WHERE_ORDER_BY_CLAUSE"
          }
        ]
      },
      "maxLength": null,
      "description": "Order By Type (select list) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520024",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520024",
      "builderLabel": "Item",
      "apexlangPath": "region.localPostProcessing.item",
      "type": "ORDER BY ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520023",
            "path": "region.localPostProcessing.orderByType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Item (order by item) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520025",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520025",
      "builderLabel": "Order By Item",
      "apexlangPath": "region.localPostProcessing.orderByItem",
      "type": "ORDER BY ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "53520019",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "values": [
              "SQL",
              "FUNC_BODY_RETURNING_SQL"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Order By Item (order by item) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520100",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520100",
      "builderLabel": "Language",
      "apexlangPath": "region.localPostProcessing.language",
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
            "propertyId": "53520012",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "value": "FUNC_BODY_RETURNING_SQL"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520101",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520101",
      "builderLabel": "PL/SQL Function Body returning SQL Query",
      "apexlangPath": "region.localPostProcessing.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520100",
            "path": "region.localPostProcessing.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Function Body returning SQL Query (plsql function body sql) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520102",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520102",
      "builderLabel": "JavaScript Function Body returning SQL Query",
      "apexlangPath": "region.localPostProcessing.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520100",
            "path": "region.localPostProcessing.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "JavaScript Function Body returning SQL Query (mle javascript function body sql) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520120",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520120",
      "builderLabel": "Language",
      "apexlangPath": "region.localPostProcessing.language",
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
            "propertyId": "53520019",
            "path": "region.localPostProcessing.type",
            "hasToExist": true,
            "value": "FUNC_BODY_RETURNING_SQL"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520121",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520121",
      "builderLabel": "PL/SQL Function Body returning SQL Query",
      "apexlangPath": "region.localPostProcessing.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520120",
            "path": "region.localPostProcessing.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Function Body returning SQL Query (plsql function body sql) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:53520122",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "53520122",
      "builderLabel": "JavaScript Function Body returning SQL Query",
      "apexlangPath": "region.localPostProcessing.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "53520120",
            "path": "region.localPostProcessing.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "JavaScript Function Body returning SQL Query (mle javascript function body sql) in region.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:241",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "241",
      "builderLabel": "Singular",
      "apexlangPath": "attributes.entityTitle.singular",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "243",
            "path": "attributes.componentAppearance.display",
            "hasToExist": true,
            "value": "REPORT"
          }
        ]
      },
      "maxLength": 255,
      "description": "Singular (text) in attributes.entityTitle.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:242",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "242",
      "builderLabel": "Plural",
      "apexlangPath": "attributes.entityTitle.plural",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "243",
            "path": "attributes.componentAppearance.display",
            "hasToExist": true,
            "value": "REPORT"
          }
        ]
      },
      "maxLength": 255,
      "description": "Plural (text) in attributes.entityTitle.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:244",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "244",
      "builderLabel": "Entities per Page",
      "apexlangPath": "attributes.pagination.entitiesPerPage",
      "type": "INTEGER",
      "required": true,
      "defaultValue": "15",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "783",
            "path": "attributes.pagination.type",
            "hasToExist": true,
            "value": "SET"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Entities per Page (integer) in attributes.pagination.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:253",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "253",
      "builderLabel": "Initial Entities Count",
      "apexlangPath": "attributes.pagination.initialEntitiesCount",
      "type": "INTEGER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "783",
            "path": "attributes.pagination.type",
            "hasToExist": true,
            "value": "SCROLL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Initial Entities Count (integer) in attributes.pagination.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:297",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "297",
      "builderLabel": "When No Data Found",
      "apexlangPath": "attributes.messages.whenNoDataFound",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NO_DATA_FOUND_MESSAGE"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "243",
            "path": "attributes.componentAppearance.display",
            "hasToExist": false,
            "value": "REPORT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "When No Data Found (text editor) in attributes.messages.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:298",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "298",
      "builderLabel": "No Data Found Icon",
      "apexlangPath": "attributes.messages.noDataFoundIcon",
      "type": "ICON",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NO_DATA_FOUND_ICON"
            ]
          },
          {
            "type": "NOT_NULL",
            "propertyId": "297",
            "path": "attributes.messages.whenNoDataFound",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 4000,
      "description": "No Data Found Icon (icon) in attributes.messages.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:427",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "427",
      "builderLabel": "Type",
      "apexlangPath": "attributes.heading.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "COLON_DELMITED_LIST",
      "values": [
        {
          "name": "columnNames",
          "returnValue": "QUERY_COLUMNS",
          "label": "Column Names"
        },
        {
          "name": "columnNamesInitcap",
          "returnValue": "QUERY_COLUMNS_INITCAP",
          "label": "Column Names (InitCap)"
        },
        {
          "name": "customHeadings",
          "returnValue": "COLON_DELMITED_LIST",
          "label": "Custom Headings"
        },
        {
          "name": "plsqlFunctionBody",
          "returnValue": "FUNCTION_BODY_RETURNING_COLON_DELIMITED_LIST",
          "label": "PL/SQL Function Body"
        },
        {
          "name": "none",
          "returnValue": "NO_HEADINGS",
          "label": "None"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "COLUMN_HEADING"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in attributes.heading.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:428",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "428",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "attributes.heading.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY VARCHAR2",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "427",
            "path": "attributes.heading.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY_RETURNING_COLON_DELIMITED_LIST"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body varchar2) in attributes.heading.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:433",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "433",
      "builderLabel": "Number of Rows Type",
      "apexlangPath": "attributes.reportLayout.numberOfRowsType",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "STATIC",
      "values": [
        {
          "name": "staticValue",
          "returnValue": "STATIC",
          "label": "Static Value"
        },
        {
          "name": "itemValue",
          "returnValue": "ITEM",
          "label": "Based on Item Value"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "FETCHED_ROWS"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Number of Rows Type (select list) in attributes.reportLayout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:434",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "434",
      "builderLabel": "Number of Rows",
      "apexlangPath": "attributes.reportLayout.numberOfRows",
      "type": "INTEGER",
      "required": true,
      "defaultValue": "15",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "433",
            "path": "attributes.reportLayout.numberOfRowsType",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Number of Rows (integer) in attributes.reportLayout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:435",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "435",
      "builderLabel": "Item",
      "apexlangPath": "attributes.reportLayout.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "433",
            "path": "attributes.reportLayout.numberOfRowsType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 255,
      "description": "Item (item) in attributes.reportLayout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:453",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "453",
      "builderLabel": "Type",
      "apexlangPath": "attributes.rowSelection.type",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "focusOnly",
          "returnValue": "FOCUS",
          "label": "Focus only"
        },
        {
          "name": "singleSelection",
          "returnValue": "SINGLE",
          "label": "Single Selection"
        },
        {
          "name": "multipleSelection",
          "returnValue": "MULTIPLE",
          "label": "Multiple Selection"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "ROW_SELECTION"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "243",
            "path": "attributes.componentAppearance.display",
            "hasToExist": true,
            "value": "REPORT"
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in attributes.rowSelection.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:454",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "454",
      "builderLabel": "Current Selection Page Item",
      "apexlangPath": "attributes.rowSelection.currentSelectionPageItem",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "453",
            "path": "attributes.rowSelection.type",
            "hasToExist": true,
            "values": [
              "SINGLE",
              "MULTIPLE"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Current Selection Page Item (item) in attributes.rowSelection.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:455",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "455",
      "builderLabel": "Select All Page Item",
      "apexlangPath": "attributes.rowSelection.selectAllPageItem",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "453",
            "path": "attributes.rowSelection.type",
            "hasToExist": true,
            "value": "MULTIPLE"
          }
        ]
      },
      "maxLength": 255,
      "description": "Select All Page Item (item) in attributes.rowSelection.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:556",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "556",
      "builderLabel": "Template Options",
      "apexlangPath": "attributes.componentAppearance.templateOptions",
      "type": "TEMPLATE OPTIONS",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "387",
            "path": "attributes.componentAppearance.breadcrumbTemplate",
            "hasToExist": true
          },
          {
            "type": "NOT_NULL",
            "propertyId": "386",
            "path": "attributes.componentAppearance.listTemplate",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Template Options (template options) in attributes.componentAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:559",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "559",
      "builderLabel": "Initialization JavaScript Function",
      "apexlangPath": "attributes.componentAdvanced.initJavaScriptFunction",
      "type": "JAVASCRIPT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "INIT_JAVASCRIPT_CODE"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Initialization JavaScript Function (javascript) in attributes.componentAdvanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:770",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "770",
      "builderLabel": "Enabled",
      "apexlangPath": "attributes.edit.enabled",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "EDITABLE"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Enabled (yes no) in attributes.edit.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:771",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "771",
      "builderLabel": "Allowed Operations",
      "apexlangPath": "attributes.edit.allowedOperations",
      "type": "CHECKBOXES",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "add",
          "returnValue": "i",
          "label": "Add Row"
        },
        {
          "name": "update",
          "returnValue": "u",
          "label": "Update Row"
        },
        {
          "name": "delete",
          "returnValue": "d",
          "label": "Delete Row"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "770",
            "path": "attributes.edit.enabled",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Allowed Operations (checkboxes) in attributes.edit.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:772",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "772",
      "builderLabel": "Allowed Row Operations Column",
      "apexlangPath": "attributes.edit.allowedRowOperationsColumn",
      "type": "REGION COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "771",
            "path": "attributes.edit.allowedOperations",
            "hasToExist": true,
            "values": [
              "u",
              "d"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Allowed Row Operations Column (region column) in attributes.edit.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:773",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "773",
      "builderLabel": "Add",
      "apexlangPath": "attributes.editAuthorization.add",
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
            "type": "EQUALS",
            "propertyId": "771",
            "path": "attributes.edit.allowedOperations",
            "hasToExist": true,
            "value": "i"
          }
        ]
      },
      "maxLength": null,
      "description": "Add (component) in attributes.editAuthorization.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:774",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "774",
      "builderLabel": "Update",
      "apexlangPath": "attributes.editAuthorization.update",
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
            "type": "EQUALS",
            "propertyId": "771",
            "path": "attributes.edit.allowedOperations",
            "hasToExist": true,
            "value": "u"
          }
        ]
      },
      "maxLength": null,
      "description": "Update (component) in attributes.editAuthorization.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:775",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "775",
      "builderLabel": "Delete",
      "apexlangPath": "attributes.editAuthorization.delete",
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
            "type": "EQUALS",
            "propertyId": "771",
            "path": "attributes.edit.allowedOperations",
            "hasToExist": true,
            "value": "d"
          }
        ]
      },
      "maxLength": null,
      "description": "Delete (component) in attributes.editAuthorization.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:776",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "776",
      "builderLabel": "Lost Update Type",
      "apexlangPath": "attributes.edit.lostUpdateType",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "VALUES",
      "values": [
        {
          "name": "rowValues",
          "returnValue": "VALUES",
          "label": "Row Values"
        },
        {
          "name": "rowVersionColumn",
          "returnValue": "COLUMN",
          "label": "Row Version Column"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "770",
            "path": "attributes.edit.enabled",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Lost Update Type (select list) in attributes.edit.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:777",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "777",
      "builderLabel": "Row Version Column",
      "apexlangPath": "attributes.edit.rowVersionColumn",
      "type": "REGION COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "776",
            "path": "attributes.edit.lostUpdateType",
            "hasToExist": true,
            "value": "COLUMN"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Row Version Column (region column) in attributes.edit.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:780",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "780",
      "builderLabel": "Lazy Loading",
      "apexlangPath": "attributes.performance.lazyLoading",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "LAZY_LOADING"
            ]
          },
          {
            "type": "NOT_NULL",
            "propertyId": "957",
            "path": "region.source.location",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "Lazy Loading (yes no) in attributes.performance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:783",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "783",
      "builderLabel": "Type",
      "apexlangPath": "attributes.pagination.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "SET",
      "values": [
        {
          "name": "page",
          "returnValue": "SET",
          "label": "Page"
        },
        {
          "name": "scroll",
          "returnValue": "SCROLL",
          "label": "Scroll"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "243",
            "path": "attributes.componentAppearance.display",
            "hasToExist": true,
            "value": "REPORT"
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in attributes.pagination.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:784",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "784",
      "builderLabel": "Show Total Count",
      "apexlangPath": "attributes.pagination.showTotalCount",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "243",
            "path": "attributes.componentAppearance.display",
            "hasToExist": true,
            "value": "REPORT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Total Count (yes no) in attributes.pagination.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:1132",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "1132",
      "builderLabel": "CSS Classes",
      "apexlangPath": "attributes.componentAppearance.cssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH_ANY",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_BREADCRUMB",
              "NATIVE_LIST",
              "TMPL_"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "CSS Classes (combobox) in attributes.componentAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:2422",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "2422",
      "builderLabel": "Lazy Loading",
      "apexlangPath": "attributes.performance.lazyLoading",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "LAZY_LOADING_ALWAYS"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Lazy Loading (yes no) in attributes.performance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:89890006",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "89890006",
      "builderLabel": "Enabled",
      "apexlangPath": "attributes.genAI.enabled",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "AI_ENABLED"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Enabled (yes no) in attributes.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:89890007",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "89890007",
      "builderLabel": "Agent",
      "apexlangPath": "attributes.genAI.agent",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "AI_ENABLED_ALWAYS",
              "AI_ENABLED"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "89890006",
            "path": "attributes.genAI.enabled",
            "hasToExist": false,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Agent (component) in attributes.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:89890008",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "89890008",
      "builderLabel": "Service",
      "apexlangPath": "attributes.genAI.service",
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
            "path": "attributes.genAI.agent",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Service (component) in attributes.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:89890009",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "89890009",
      "builderLabel": "System Prompt",
      "apexlangPath": "attributes.genAI.systemPrompt",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "AI_SYSTEM_PROMPT"
            ]
          },
          {
            "type": "NULL",
            "propertyId": "89890007",
            "path": "attributes.genAI.agent",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "System Prompt (text editor) in attributes.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7000:89890010",
      "context": "attributes",
      "componentTypeId": "7000",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SQL_REPORT",
              "NATIVE_TABFORM",
              "NATIVE_IR",
              "NATIVE_IG",
              "NATIVE_JET_CHART",
              "NATIVE_CARDS",
              "NATIVE_MAP_REGION"
            ]
          }
        ]
      },
      "propertyId": "89890010",
      "builderLabel": "Welcome Message",
      "apexlangPath": "attributes.genAI.welcomeMessage",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "values": [
              "AI_UI"
            ]
          },
          {
            "type": "NULL",
            "propertyId": "89890007",
            "path": "attributes.genAI.agent",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "Welcome Message (html) in attributes.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:50",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "50",
      "builderLabel": "Description",
      "apexlangPath": "attributes.description.description",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Description (text editor) in attributes.description.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:266",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "266",
      "builderLabel": "Include Search Bar",
      "apexlangPath": "attributes.searchBar.includeSearchBar",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Include Search Bar (yes no) in attributes.searchBar.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:291",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "291",
      "builderLabel": "Link Attributes",
      "apexlangPath": "attributes.link.linkAttributes",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "312",
            "path": "attributes.link.linkColumn",
            "hasToExist": true,
            "values": [
              "Y",
              "C"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Link Attributes (text) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:292",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "292",
      "builderLabel": "Type",
      "apexlangPath": "attributes.pagination.type",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "rowRangesXToYOfZ",
          "returnValue": "ROWS_X_TO_Y_OF_Z",
          "label": "Row Ranges X to Y of Z"
        },
        {
          "name": "rowRangesXToY",
          "returnValue": "ROWS_X_TO_Y",
          "label": "Row Ranges X to Y"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in attributes.pagination.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:293",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "293",
      "builderLabel": "Display Position",
      "apexlangPath": "attributes.pagination.displayPosition",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "BOTTOM_RIGHT",
      "values": [
        {
          "name": "bottomLeft",
          "returnValue": "BOTTOM_LEFT",
          "label": "Bottom - Left"
        },
        {
          "name": "bottomRight",
          "returnValue": "BOTTOM_RIGHT",
          "label": "Bottom - Right"
        },
        {
          "name": "topLeft",
          "returnValue": "TOP_LEFT",
          "label": "Top - Left"
        },
        {
          "name": "topRight",
          "returnValue": "TOP_RIGHT",
          "label": "Top - Right"
        },
        {
          "name": "topAndBottomLeft",
          "returnValue": "TOP_AND_BOTTOM_LEFT",
          "label": "Top and Bottom - Left"
        },
        {
          "name": "topAndBottomRight",
          "returnValue": "TOP_AND_BOTTOM_RIGHT",
          "label": "Top and Bottom - Right"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "292",
            "path": "attributes.pagination.type",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Display Position (select list) in attributes.pagination.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:294",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "294",
      "builderLabel": "Show Null Values as",
      "apexlangPath": "attributes.componentAppearance.showNullValuesAs",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Show Null Values as (text) in attributes.componentAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:295",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "295",
      "builderLabel": "Maximum Rows to Process",
      "apexlangPath": "attributes.performance.maxRowsToProcess",
      "type": "INTEGER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NULL",
            "propertyId": "317",
            "path": "attributes.pagination.maxRowsToDisplay",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "Maximum Rows to Process (integer) in attributes.performance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:297",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "297",
      "builderLabel": "When No Data Found",
      "apexlangPath": "attributes.messages.whenNoDataFound",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "When No Data Found (text editor) in attributes.messages.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:302",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "302",
      "builderLabel": "Save Public Report Authorization",
      "apexlangPath": "attributes.actionsMenu.savePublicReportAuthorization",
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
            "type": "EQUALS",
            "propertyId": "355",
            "path": "attributes.actionsMenu.savePublicReport",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Save Public Report Authorization (component) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:306",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "306",
      "builderLabel": "Search Button Label",
      "apexlangPath": "attributes.searchBar.searchButtonLabel",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "266",
            "path": "attributes.searchBar.includeSearchBar",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Search Button Label (text) in attributes.searchBar.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:307",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "307",
      "builderLabel": "Maximum Rows Per Page In Selector",
      "apexlangPath": "attributes.componentAdvanced.maxRowsPerPageInSelector",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "340",
            "path": "attributes.actionsMenu.rowsPerPage",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "EQUALS",
            "propertyId": "358",
            "path": "attributes.searchBar.rowsPerPageSelector",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Maximum Rows Per Page In Selector (text) in attributes.componentAdvanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:308",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "308",
      "builderLabel": "Formats",
      "apexlangPath": "attributes.download.formats",
      "type": "CHECKBOXES",
      "required": true,
      "defaultValue": "CSV:HTML:XLSX:PDF",
      "values": [
        {
          "name": "csv",
          "returnValue": "CSV",
          "label": "CSV"
        },
        {
          "name": "html",
          "returnValue": "HTML",
          "label": "HTML"
        },
        {
          "name": "excel",
          "returnValue": "XLSX",
          "label": "Excel"
        },
        {
          "name": "pdf",
          "returnValue": "PDF",
          "label": "PDF"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "352",
            "path": "attributes.actionsMenu.download",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Formats (checkboxes) in attributes.download.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:309",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "309",
      "builderLabel": "CSV Separator",
      "apexlangPath": "attributes.download.csvSeparator",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "value": "CSV"
          }
        ]
      },
      "maxLength": 2,
      "description": "CSV Separator (text) in attributes.download.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:310",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "310",
      "builderLabel": "CSV Enclosed By",
      "apexlangPath": "attributes.download.csvEnclosedBy",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "value": "CSV"
          }
        ]
      },
      "maxLength": 1,
      "description": "CSV Enclosed By (text) in attributes.download.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:311",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "311",
      "builderLabel": "Filename",
      "apexlangPath": "attributes.download.filename",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "352",
            "path": "attributes.actionsMenu.download",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 255,
      "description": "Filename (text) in attributes.download.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:312",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "312",
      "builderLabel": "Link Column",
      "apexlangPath": "attributes.link.linkColumn",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "N",
      "values": [
        {
          "name": "singleRowView",
          "returnValue": "Y",
          "label": "Link to Single Row View"
        },
        {
          "name": "customTarget",
          "returnValue": "C",
          "label": "Link to Custom Target"
        },
        {
          "name": "exclude",
          "returnValue": "N",
          "label": "Exclude Link Column"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Link Column (select list) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:313",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "313",
      "builderLabel": "Exclude Null Values",
      "apexlangPath": "attributes.singleRowView.excludeNullValues",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "312",
            "path": "attributes.link.linkColumn",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Exclude Null Values (yes no) in attributes.singleRowView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:314",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "314",
      "builderLabel": "Only Displayed Columns",
      "apexlangPath": "attributes.singleRowView.onlyDisplayedColumns",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "312",
            "path": "attributes.link.linkColumn",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Only Displayed Columns (yes no) in attributes.singleRowView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:315",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "315",
      "builderLabel": "Uniquely Identify Rows by",
      "apexlangPath": "attributes.link.uniquelyIdentifyRowsBy",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "ROWID",
      "values": [
        {
          "name": "rowid",
          "returnValue": "ROWID",
          "label": "ROWID"
        },
        {
          "name": "uniqueColumn",
          "returnValue": "COLUMN",
          "label": "Unique Column"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "312",
            "path": "attributes.link.linkColumn",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Uniquely Identify Rows by (select list) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:316",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "316",
      "builderLabel": "Unique Column",
      "apexlangPath": "attributes.link.uniqueColumn",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "315",
            "path": "attributes.link.uniquelyIdentifyRowsBy",
            "hasToExist": true,
            "value": "COLUMN"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Unique Column (column) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:317",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "317",
      "builderLabel": "Maximum Rows to Display",
      "apexlangPath": "attributes.pagination.maxRowsToDisplay",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Maximum Rows to Display (text) in attributes.pagination.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:319",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "319",
      "builderLabel": "Link Icon",
      "apexlangPath": "attributes.link.linkIcon",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "312",
            "path": "attributes.link.linkColumn",
            "hasToExist": true,
            "values": [
              "Y",
              "C"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Link Icon (text editor) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:320",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "320",
      "builderLabel": "Authorization Scheme",
      "apexlangPath": "attributes.link.authorizationScheme",
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
            "propertyId": "312",
            "path": "attributes.link.linkColumn",
            "hasToExist": true,
            "values": [
              "Y",
              "C"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Authorization Scheme (component) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:321",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "321",
      "builderLabel": "Region Alias",
      "apexlangPath": "attributes.componentAdvanced.regionAlias",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Region Alias (text) in attributes.componentAdvanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:322",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "322",
      "builderLabel": "Report ID Item",
      "apexlangPath": "attributes.componentAdvanced.reportIdItem",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Report ID Item (item) in attributes.componentAdvanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:324",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "324",
      "builderLabel": "Show",
      "apexlangPath": "attributes.iconView.show",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Show (yes no) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:325",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "325",
      "builderLabel": "Custom",
      "apexlangPath": "attributes.iconView.custom",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "324",
            "path": "attributes.iconView.show",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Custom (yes no) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:326",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "326",
      "builderLabel": "Columns Per Row",
      "apexlangPath": "attributes.iconView.columnsPerRow",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "6",
      "values": [
        {
          "name": "1",
          "returnValue": "1",
          "label": "1"
        },
        {
          "name": "2",
          "returnValue": "2",
          "label": "2"
        },
        {
          "name": "3",
          "returnValue": "3",
          "label": "3"
        },
        {
          "name": "4",
          "returnValue": "4",
          "label": "4"
        },
        {
          "name": "5",
          "returnValue": "5",
          "label": "5"
        },
        {
          "name": "6",
          "returnValue": "6",
          "label": "6"
        },
        {
          "name": "7",
          "returnValue": "7",
          "label": "7"
        },
        {
          "name": "8",
          "returnValue": "8",
          "label": "8"
        },
        {
          "name": "9",
          "returnValue": "9",
          "label": "9"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "324",
            "path": "attributes.iconView.show",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Columns Per Row (select list) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:327",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "327",
      "builderLabel": "Link Column",
      "apexlangPath": "attributes.iconView.linkColumn",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "325",
            "path": "attributes.iconView.custom",
            "hasToExist": true,
            "value": "N"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Link Column (column) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:328",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "328",
      "builderLabel": "Image Source Column",
      "apexlangPath": "attributes.iconView.imageSourceColumn",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "325",
            "path": "attributes.iconView.custom",
            "hasToExist": true,
            "value": "N"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Image Source Column (column) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:329",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "329",
      "builderLabel": "Label Column",
      "apexlangPath": "attributes.iconView.labelColumn",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "325",
            "path": "attributes.iconView.custom",
            "hasToExist": true,
            "value": "N"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Label Column (column) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:330",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "330",
      "builderLabel": "Image Attributes",
      "apexlangPath": "attributes.iconView.imageAttributes",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "325",
            "path": "attributes.iconView.custom",
            "hasToExist": true,
            "value": "N"
          }
        ]
      },
      "maxLength": 512,
      "description": "Image Attributes (text) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:331",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "331",
      "builderLabel": "HTML ALT Text",
      "apexlangPath": "attributes.iconView.htmlAltText",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "325",
            "path": "attributes.iconView.custom",
            "hasToExist": true,
            "value": "N"
          }
        ]
      },
      "maxLength": 512,
      "description": "HTML ALT Text (text) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:332",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "332",
      "builderLabel": "HTML TITLE Text",
      "apexlangPath": "attributes.iconView.htmlTitleText",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "325",
            "path": "attributes.iconView.custom",
            "hasToExist": true,
            "value": "N"
          }
        ]
      },
      "maxLength": 512,
      "description": "HTML TITLE Text (text) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:333",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "333",
      "builderLabel": "Custom Link",
      "apexlangPath": "attributes.iconView.customLink",
      "type": "TEXT EDITOR",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "325",
            "path": "attributes.iconView.custom",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Custom Link (text editor) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:334",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "334",
      "builderLabel": "Show",
      "apexlangPath": "attributes.detailView.show",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Show (yes no) in attributes.detailView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:335",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "335",
      "builderLabel": "Before Rows",
      "apexlangPath": "attributes.detailView.beforeRows",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "334",
            "path": "attributes.detailView.show",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Before Rows (html) in attributes.detailView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:336",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "336",
      "builderLabel": "For Each Row",
      "apexlangPath": "attributes.detailView.forEachRow",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "334",
            "path": "attributes.detailView.show",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 4000,
      "description": "For Each Row (html) in attributes.detailView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:337",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "337",
      "builderLabel": "After Rows",
      "apexlangPath": "attributes.detailView.afterRows",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "334",
            "path": "attributes.detailView.show",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 4000,
      "description": "After Rows (html) in attributes.detailView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:338",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "338",
      "builderLabel": "Filter",
      "apexlangPath": "attributes.actionsMenu.filter",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Filter (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:339",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "339",
      "builderLabel": "Select Columns",
      "apexlangPath": "attributes.actionsMenu.selectColumns",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Select Columns (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:340",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "340",
      "builderLabel": "Rows Per Page",
      "apexlangPath": "attributes.actionsMenu.rowsPerPage",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Rows Per Page (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:341",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "341",
      "builderLabel": "Sort",
      "apexlangPath": "attributes.actionsMenu.sort",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Sort (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:342",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "342",
      "builderLabel": "Control Break",
      "apexlangPath": "attributes.actionsMenu.controlBreak",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Control Break (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:343",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "343",
      "builderLabel": "Highlight",
      "apexlangPath": "attributes.actionsMenu.highlight",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Highlight (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:344",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "344",
      "builderLabel": "Compute",
      "apexlangPath": "attributes.actionsMenu.compute",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Compute (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:345",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "345",
      "builderLabel": "Aggregate",
      "apexlangPath": "attributes.actionsMenu.aggregate",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Aggregate (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:346",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "346",
      "builderLabel": "Chart",
      "apexlangPath": "attributes.actionsMenu.chart",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Chart (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:347",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "347",
      "builderLabel": "Subscription",
      "apexlangPath": "attributes.actionsMenu.subscription",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "352",
            "path": "attributes.actionsMenu.download",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Subscription (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:348",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "348",
      "builderLabel": "Group By",
      "apexlangPath": "attributes.actionsMenu.groupBy",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Group By (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:349",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "349",
      "builderLabel": "Pivot",
      "apexlangPath": "attributes.actionsMenu.pivot",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Pivot (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:350",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "350",
      "builderLabel": "Flashback",
      "apexlangPath": "attributes.actionsMenu.flashback",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Flashback (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:351",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "351",
      "builderLabel": "Reset",
      "apexlangPath": "attributes.actionsMenu.reset",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Reset (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:352",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "352",
      "builderLabel": "Download",
      "apexlangPath": "attributes.actionsMenu.download",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Download (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:353",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "353",
      "builderLabel": "Help",
      "apexlangPath": "attributes.actionsMenu.help",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Help (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:354",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "354",
      "builderLabel": "Save Report",
      "apexlangPath": "attributes.actionsMenu.saveReport",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "361",
            "path": "attributes.actionsMenu.includeActionsMenu",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Save Report (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:355",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "355",
      "builderLabel": "Save Public Report",
      "apexlangPath": "attributes.actionsMenu.savePublicReport",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "354",
            "path": "attributes.actionsMenu.saveReport",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Save Public Report (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:357",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "357",
      "builderLabel": "Finder Drop Down",
      "apexlangPath": "attributes.searchBar.finderDropDown",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "360",
            "path": "attributes.searchBar.searchField",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Finder Drop Down (yes no) in attributes.searchBar.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:358",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "358",
      "builderLabel": "Rows Per Page Selector",
      "apexlangPath": "attributes.searchBar.rowsPerPageSelector",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "266",
            "path": "attributes.searchBar.includeSearchBar",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Rows Per Page Selector (yes no) in attributes.searchBar.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:360",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "360",
      "builderLabel": "Search Field",
      "apexlangPath": "attributes.searchBar.searchField",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "266",
            "path": "attributes.searchBar.includeSearchBar",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Search Field (yes no) in attributes.searchBar.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:361",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "361",
      "builderLabel": "Include Actions Menu",
      "apexlangPath": "attributes.actionsMenu.includeActionsMenu",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "266",
            "path": "attributes.searchBar.includeSearchBar",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Include Actions Menu (yes no) in attributes.actionsMenu.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:362",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "362",
      "builderLabel": "Reports Select List",
      "apexlangPath": "attributes.searchBar.reportsSelectList",
      "type": "YES NO",
      "required": true,
      "defaultValue": "TABS",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "266",
            "path": "attributes.searchBar.includeSearchBar",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Reports Select List (yes no) in attributes.searchBar.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:363",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "363",
      "builderLabel": "Target",
      "apexlangPath": "attributes.link.target",
      "type": "LINK",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "312",
            "path": "attributes.link.linkColumn",
            "hasToExist": true,
            "value": "C"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Target (link) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:438",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "438",
      "builderLabel": "When More Data Found",
      "apexlangPath": "attributes.messages.whenMoreDataFound",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "When More Data Found (text editor) in attributes.messages.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:560",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "560",
      "builderLabel": "Email From Address",
      "apexlangPath": "attributes.componentAdvanced.emailFromAddress",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Email From Address (text) in attributes.componentAdvanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:561",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "561",
      "builderLabel": "Oracle Text Index Column",
      "apexlangPath": "attributes.componentAdvanced.oracleTextIndexColumn",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Oracle Text Index Column (column) in attributes.componentAdvanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:761",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "761",
      "builderLabel": "Fixed To",
      "apexlangPath": "attributes.heading.fixedTo",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "PAGE",
      "values": [
        {
          "name": "none",
          "returnValue": "NONE",
          "label": "None"
        },
        {
          "name": "region",
          "returnValue": "REGION",
          "label": "Region"
        },
        {
          "name": "page",
          "returnValue": "PAGE",
          "label": "Page"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Fixed To (select list) in attributes.heading.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:762",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "762",
      "builderLabel": "Maximum Report Height",
      "apexlangPath": "attributes.heading.maxReportHeight",
      "type": "INTEGER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "761",
            "path": "attributes.heading.fixedTo",
            "hasToExist": true,
            "value": "REGION"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Maximum Report Height (integer) in attributes.heading.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:780",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "780",
      "builderLabel": "Lazy Loading",
      "apexlangPath": "attributes.performance.lazyLoading",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Lazy Loading (yes no) in attributes.performance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:793",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "793",
      "builderLabel": "Send as Email",
      "apexlangPath": "attributes.download.sendAsEmail",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "352",
            "path": "attributes.actionsMenu.download",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Send as Email (yes no) in attributes.download.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:1089",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "1089",
      "builderLabel": "Supplemental Text",
      "apexlangPath": "attributes.download.supplementalText",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 4000,
      "description": "Supplemental Text (text editor) in attributes.download.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:1110",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "1110",
      "builderLabel": "Authorization",
      "apexlangPath": "attributes.download.authorization",
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
            "type": "EQUALS",
            "propertyId": "352",
            "path": "attributes.actionsMenu.download",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Authorization (component) in attributes.download.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5150",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5150",
      "builderLabel": "Condition Type",
      "apexlangPath": "attributes.link.conditionType",
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
            "propertyId": "312",
            "path": "attributes.link.linkColumn",
            "hasToExist": true,
            "values": [
              "Y",
              "C"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Condition Type (select list) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5151",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5151",
      "builderLabel": "SQL Query",
      "apexlangPath": "attributes.link.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5150",
            "path": "attributes.link.conditionType",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5152",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5152",
      "builderLabel": "Value",
      "apexlangPath": "attributes.link.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5150",
            "path": "attributes.link.conditionType",
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
      "description": "Value (text) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5153",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5153",
      "builderLabel": "Item",
      "apexlangPath": "attributes.link.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5150",
            "path": "attributes.link.conditionType",
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
      "description": "Item (item) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5154",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5154",
      "builderLabel": "List",
      "apexlangPath": "attributes.link.list",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5150",
            "path": "attributes.link.conditionType",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5155",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5155",
      "builderLabel": "Preference",
      "apexlangPath": "attributes.link.preference",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5150",
            "path": "attributes.link.conditionType",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5156",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5156",
      "builderLabel": "Page",
      "apexlangPath": "attributes.link.page",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5150",
            "path": "attributes.link.conditionType",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5157",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5157",
      "builderLabel": "Pages",
      "apexlangPath": "attributes.link.pages",
      "type": "PAGE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5150",
            "path": "attributes.link.conditionType",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5158",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5158",
      "builderLabel": "Text",
      "apexlangPath": "attributes.link.text",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5150",
            "path": "attributes.link.conditionType",
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
      "description": "Text (text) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5159",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5159",
      "builderLabel": "Value",
      "apexlangPath": "attributes.link.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5150",
            "path": "attributes.link.conditionType",
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
      "description": "Value (text) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5160",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5160",
      "builderLabel": "Item",
      "apexlangPath": "attributes.link.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5150",
            "path": "attributes.link.conditionType",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5161",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5161",
      "builderLabel": "Value",
      "apexlangPath": "attributes.link.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "5150",
            "path": "attributes.link.conditionType",
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
      "description": "Value (text) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5162",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5162",
      "builderLabel": "Language",
      "apexlangPath": "attributes.link.language",
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
            "propertyId": "5150",
            "path": "attributes.link.conditionType",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5163",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5163",
      "builderLabel": "SQL Expression",
      "apexlangPath": "attributes.link.sqlExpression",
      "type": "SQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5162",
            "path": "attributes.link.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5164",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5164",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "attributes.link.plsqlExpression",
      "type": "PLSQL EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5162",
            "path": "attributes.link.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5165",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5165",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "attributes.link.javaScriptExpression",
      "type": "MLE JAVASCRIPT EXPRESSION BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5162",
            "path": "attributes.link.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5182",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5182",
      "builderLabel": "Language",
      "apexlangPath": "attributes.link.language",
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
            "propertyId": "5150",
            "path": "attributes.link.conditionType",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5183",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5183",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "attributes.link.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5182",
            "path": "attributes.link.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:5184",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "5184",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "attributes.link.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY BOOLEAN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5182",
            "path": "attributes.link.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in attributes.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:12915002",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "12915002",
      "builderLabel": "Saved Report Mapping Identifier",
      "apexlangPath": "attributes.advanced.savedReportMappingIdentifier",
      "type": "HIDDEN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Saved Report Mapping Identifier (hidden) in attributes.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:250507001",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "250507001",
      "builderLabel": "Natural Language Support",
      "apexlangPath": "attributes.genAI.naturalLanguageSupport",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Natural Language Support (yes no) in attributes.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:250507007",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "250507007",
      "builderLabel": "Report Context",
      "apexlangPath": "attributes.genAI.reportContext",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "250507001",
            "path": "attributes.genAI.naturalLanguageSupport",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Report Context (text editor) in attributes.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7010:250507008",
      "context": "attributes",
      "componentTypeId": "7010",
      "componentTitle": "Attributes",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IR"
          }
        ]
      },
      "propertyId": "250507008",
      "builderLabel": "Default Search Mode",
      "apexlangPath": "attributes.genAI.defaultSearchMode",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "A",
      "values": [
        {
          "name": "searchModeRow",
          "returnValue": "R",
          "label": "Row Search"
        },
        {
          "name": "searchModeAI",
          "returnValue": "A",
          "label": "Search with AI"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "250507001",
            "path": "attributes.genAI.naturalLanguageSupport",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Default Search Mode (select list) in attributes.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7020:1",
      "context": "columnGroup",
      "componentTypeId": "7020",
      "componentTitle": "Column Group",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "1",
      "builderLabel": "Name",
      "apexlangPath": "columnGroup.name",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Name (text) in columnGroup.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7020:50",
      "context": "columnGroup",
      "componentTypeId": "7020",
      "componentTitle": "Column Group",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "50",
      "builderLabel": "Description",
      "apexlangPath": "columnGroup.description.description",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Description (text editor) in columnGroup.description.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7020:97",
      "context": "columnGroup",
      "componentTypeId": "7020",
      "componentTitle": "Column Group",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "97",
      "builderLabel": "Sequence",
      "apexlangPath": "columnGroup.layout.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in columnGroup.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7020:180",
      "context": "columnGroup",
      "componentTypeId": "7020",
      "componentTitle": "Column Group",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "180",
      "builderLabel": "Static ID",
      "apexlangPath": "columnGroup.advanced.staticId",
      "type": "STATIC ID",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Static ID (static id) in columnGroup.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:4",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "4",
      "builderLabel": "Comments",
      "apexlangPath": "column.comments.comments",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Comments (text editor) in column.comments.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:24",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "24",
      "builderLabel": "Authorization Scheme",
      "apexlangPath": "column.security.authorizationScheme",
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
      "description": "Authorization Scheme (component) in column.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:38",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "38",
      "builderLabel": "Build Option",
      "apexlangPath": "column.config.buildOption",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Build Option (component) in column.config.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:40",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "40",
      "builderLabel": "Help Text",
      "apexlangPath": "column.help.helpText",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_ROW_SELECTOR"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Help Text (html) in column.help.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:97",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "97",
      "builderLabel": "Sequence",
      "apexlangPath": "column.layout.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_ROW_SELECTOR"
          }
        ]
      },
      "maxLength": 22,
      "description": "Sequence (number) in column.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:111",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "111",
      "builderLabel": "Format Mask",
      "apexlangPath": "column.appearance.formatMask",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_PLAIN",
              "NATIVE_LINK",
              "NATIVE_STRIP_HTML"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Format Mask (combobox) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:114",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "114",
      "builderLabel": "List of Values",
      "apexlangPath": "column.lov.lov",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_PLAIN_LOV"
          }
        ]
      },
      "maxLength": null,
      "description": "List of Values (component) in column.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:174",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "174",
      "builderLabel": "Escape Special Characters",
      "apexlangPath": "column.security.escapeSpecialChars",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_PLAIN",
              "NATIVE_LINK",
              "NATIVE_HIDDEN_COLUMN"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Escape Special Characters (yes no) in column.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:181",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "181",
      "builderLabel": "HTML DOM ID",
      "apexlangPath": "column.advanced.htmlDomId",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_ROW_SELECTOR"
          }
        ]
      },
      "maxLength": 255,
      "description": "HTML DOM ID (text) in column.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:267",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "267",
      "builderLabel": "Column Name",
      "apexlangPath": "column.columnName",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 128,
      "description": "Column Name (text) in column.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:268",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "268",
      "builderLabel": "Data Type",
      "apexlangPath": "column.source.dataType",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Data Type (text) in column.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:269",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "269",
      "builderLabel": "Group",
      "apexlangPath": "column.layout.group",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_ROW_SELECTOR"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Group (component) in column.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:271",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "271",
      "builderLabel": "Type",
      "apexlangPath": "column.type",
      "type": "SUPPORTED UI",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Type (supported ui) in column.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:272",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "272",
      "builderLabel": "Heading",
      "apexlangPath": "column.heading.heading",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_ROW_SELECTOR"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Heading (text) in column.heading.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:273",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "273",
      "builderLabel": "Use Column Heading",
      "apexlangPath": "column.singleRowView.useColumnHeading",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_ROW_SELECTOR"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Use Column Heading (yes no) in column.singleRowView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:274",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "274",
      "builderLabel": "Label",
      "apexlangPath": "column.singleRowView.label",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "273",
            "path": "column.singleRowView.useColumnHeading",
            "hasToExist": true,
            "value": "N"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Label (text) in column.singleRowView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:275",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "275",
      "builderLabel": "Alignment",
      "apexlangPath": "column.heading.alignment",
      "type": "PILL BUTTONS",
      "required": true,
      "defaultValue": "LEFT",
      "values": [
        {
          "name": "start",
          "returnValue": "LEFT",
          "label": "start"
        },
        {
          "name": "center",
          "returnValue": "CENTER",
          "label": "center"
        },
        {
          "name": "end",
          "returnValue": "RIGHT",
          "label": "end"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_ROW_SELECTOR"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Alignment (pill buttons) in column.heading.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:276",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "276",
      "builderLabel": "Column Alignment",
      "apexlangPath": "column.layout.columnAlignment",
      "type": "PILL BUTTONS",
      "required": true,
      "defaultValue": "LEFT",
      "values": [
        {
          "name": "start",
          "returnValue": "LEFT",
          "label": "start"
        },
        {
          "name": "center",
          "returnValue": "CENTER",
          "label": "center"
        },
        {
          "name": "end",
          "returnValue": "RIGHT",
          "label": "end"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_ROW_SELECTOR"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Column Alignment (pill buttons) in column.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:277",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "277",
      "builderLabel": "Hide",
      "apexlangPath": "column.enableUsersTo.hide",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_ROW_SELECTOR"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Hide (yes no) in column.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:278",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "278",
      "builderLabel": "Sort",
      "apexlangPath": "column.enableUsersTo.sort",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_RICH_TEXT",
              "NATIVE_ROW_SELECTOR"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Sort (yes no) in column.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:279",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "279",
      "builderLabel": "Filter",
      "apexlangPath": "column.enableUsersTo.filter",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_ROW_SELECTOR"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Filter (yes no) in column.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:280",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "280",
      "builderLabel": "Highlight",
      "apexlangPath": "column.enableUsersTo.highlight",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_STARTS_WITH_ANY",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_ROW_SELECTOR",
              "TMPL_"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Highlight (yes no) in column.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:281",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "281",
      "builderLabel": "Control Break",
      "apexlangPath": "column.enableUsersTo.controlBreak",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_STARTS_WITH_ANY",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_RICH_TEXT",
              "NATIVE_ROW_SELECTOR",
              "TMPL_"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Control Break (yes no) in column.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:282",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "282",
      "builderLabel": "Aggregate",
      "apexlangPath": "column.enableUsersTo.aggregate",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_STARTS_WITH_ANY",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_RICH_TEXT",
              "NATIVE_ROW_SELECTOR",
              "TMPL_"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Aggregate (yes no) in column.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:283",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "283",
      "builderLabel": "Compute",
      "apexlangPath": "column.enableUsersTo.compute",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_STARTS_WITH_ANY",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_RICH_TEXT",
              "NATIVE_ROW_SELECTOR",
              "TMPL_"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Compute (yes no) in column.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:284",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "284",
      "builderLabel": "Chart",
      "apexlangPath": "column.enableUsersTo.chart",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_STARTS_WITH_ANY",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_RICH_TEXT",
              "NATIVE_ROW_SELECTOR",
              "TMPL_"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Chart (yes no) in column.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:285",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "285",
      "builderLabel": "Group By",
      "apexlangPath": "column.enableUsersTo.groupBy",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_STARTS_WITH_ANY",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_RICH_TEXT",
              "NATIVE_ROW_SELECTOR",
              "TMPL_"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Group By (yes no) in column.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:286",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "286",
      "builderLabel": "Type",
      "apexlangPath": "column.columnFilter.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "D",
      "values": [
        {
          "name": "none",
          "returnValue": "N",
          "label": "None"
        },
        {
          "name": "defaultBasedOnColumnType",
          "returnValue": "D",
          "label": "Default Based on Column Type"
        },
        {
          "name": "definedLovExactMatch",
          "returnValue": "S",
          "label": "Use Defined List of Values to Filter Exact Match"
        },
        {
          "name": "definedLovWordContains",
          "returnValue": "C",
          "label": "Use Defined List of Values to Filter Word Contains"
        },
        {
          "name": "namedLovExactMatch",
          "returnValue": "1",
          "label": "Use Named List of Values to Filter Exact Match"
        },
        {
          "name": "namedLovWordContains",
          "returnValue": "2",
          "label": "Use Named List of Values to Filter Word Contains"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_STARTS_WITH_ANY",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_PLAIN_LOV",
              "NATIVE_RICH_TEXT",
              "NATIVE_ROW_SELECTOR",
              "TMPL_"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:288",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "288",
      "builderLabel": "Date Ranges",
      "apexlangPath": "column.columnFilter.dateRanges",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "ALL",
      "values": [
        {
          "name": "all",
          "returnValue": "ALL",
          "label": "All"
        },
        {
          "name": "past",
          "returnValue": "PAST",
          "label": "Past"
        },
        {
          "name": "future",
          "returnValue": "FUTURE",
          "label": "Future"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "268",
            "path": "column.source.dataType",
            "hasToExist": true,
            "value": "DATE"
          },
          {
            "type": "EQUALS",
            "propertyId": "286",
            "path": "column.columnFilter.type",
            "hasToExist": true,
            "value": "D"
          }
        ]
      },
      "maxLength": null,
      "description": "Date Ranges (select list) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:289",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "289",
      "builderLabel": "HTML Expression",
      "apexlangPath": "column.columnFormatting.htmlExpression",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_PLAIN",
              "NATIVE_PLAIN_LOV"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "HTML Expression (html) in column.columnFormatting.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:290",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "290",
      "builderLabel": "Link Text",
      "apexlangPath": "column.link.linkText",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "363",
            "path": "column.link.target",
            "hasToExist": true
          },
          {
            "type": "NOT_NULL",
            "propertyId": "2369",
            "path": "column.link.target",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 4000,
      "description": "Link Text (text) in column.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:291",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "291",
      "builderLabel": "Link Attributes",
      "apexlangPath": "column.link.linkAttributes",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "363",
            "path": "column.link.target",
            "hasToExist": true
          },
          {
            "type": "NOT_NULL",
            "propertyId": "2369",
            "path": "column.link.target",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 4000,
      "description": "Link Attributes (text) in column.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:363",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "363",
      "builderLabel": "Target",
      "apexlangPath": "column.link.target",
      "type": "LINK",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_PCT_GRAPH",
              "NATIVE_PLAIN_LOV"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Target (link) in column.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:372",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "372",
      "builderLabel": "SQL Query",
      "apexlangPath": "column.columnFilter.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "286",
            "path": "column.columnFilter.type",
            "hasToExist": true,
            "values": [
              "S",
              "C"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:375",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "375",
      "builderLabel": "Timezone Aware",
      "apexlangPath": "column.source.timezoneAware",
      "type": "TEXT",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "268",
            "path": "column.source.dataType",
            "hasToExist": true,
            "value": "DATE"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Timezone Aware (text) in column.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:383",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "383",
      "builderLabel": "Pivot",
      "apexlangPath": "column.enableUsersTo.pivot",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_STARTS_WITH_ANY",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_RICH_TEXT",
              "NATIVE_ROW_SELECTOR",
              "TMPL_"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Pivot (yes no) in column.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:397",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "397",
      "builderLabel": "Value Identifies Row",
      "apexlangPath": "column.accessibility.valueIdentifiesRow",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_HIDDEN_COLUMN",
              "NATIVE_PCT_GRAPH",
              "NATIVE_RICH_TEXT",
              "NATIVE_ROW_SELECTOR"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Value Identifies Row (yes no) in column.accessibility.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:412",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "412",
      "builderLabel": "Background Color",
      "apexlangPath": "column.appearance.backgroundColor",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_PCT_GRAPH"
          }
        ]
      },
      "maxLength": 255,
      "description": "Background Color (color) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:413",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "413",
      "builderLabel": "Foreground Color",
      "apexlangPath": "column.appearance.foregroundColor",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_PCT_GRAPH"
          }
        ]
      },
      "maxLength": 255,
      "description": "Foreground Color (color) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:414",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "414",
      "builderLabel": "Bar Width",
      "apexlangPath": "column.appearance.barWidth",
      "type": "INTEGER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_PCT_GRAPH"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Bar Width (integer) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:415",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "415",
      "builderLabel": "Table Owner",
      "apexlangPath": "column.blobAttributes.tableOwner",
      "type": "OWNER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_IMAGE",
              "NATIVE_DOWNLOAD"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Table Owner (owner) in column.blobAttributes.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:416",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "416",
      "builderLabel": "Table Name",
      "apexlangPath": "column.blobAttributes.tableName",
      "type": "TABLE",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_IMAGE",
              "NATIVE_DOWNLOAD"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Table Name (table) in column.blobAttributes.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:417",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "417",
      "builderLabel": "BLOB Column",
      "apexlangPath": "column.blobAttributes.blobColumn",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_IMAGE",
              "NATIVE_DOWNLOAD"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "BLOB Column (column) in column.blobAttributes.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:418",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "418",
      "builderLabel": "Primary Key Column 1",
      "apexlangPath": "column.blobAttributes.primaryKeyColumn1",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_IMAGE",
              "NATIVE_DOWNLOAD"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Primary Key Column 1 (column) in column.blobAttributes.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:419",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "419",
      "builderLabel": "Primary Key Column 2",
      "apexlangPath": "column.blobAttributes.primaryKeyColumn2",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_IMAGE",
              "NATIVE_DOWNLOAD"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Primary Key Column 2 (column) in column.blobAttributes.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:420",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "420",
      "builderLabel": "Mime Type Column",
      "apexlangPath": "column.blobAttributes.mimeTypeColumn",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_IMAGE",
              "NATIVE_DOWNLOAD"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Mime Type Column (column) in column.blobAttributes.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:421",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "421",
      "builderLabel": "Filename Column",
      "apexlangPath": "column.blobAttributes.filenameColumn",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_IMAGE",
              "NATIVE_DOWNLOAD"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Filename Column (column) in column.blobAttributes.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:422",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "422",
      "builderLabel": "Character Set Column",
      "apexlangPath": "column.blobAttributes.charSetColumn",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_DOWNLOAD"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Character Set Column (column) in column.blobAttributes.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:423",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "423",
      "builderLabel": "Last Updated Column",
      "apexlangPath": "column.blobAttributes.lastUpdatedColumn",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_IMAGE",
              "NATIVE_DOWNLOAD"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Last Updated Column (column) in column.blobAttributes.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:424",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "424",
      "builderLabel": "View File As",
      "apexlangPath": "column.appearance.viewFileAs",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "attachment",
      "values": [
        {
          "name": "attachment",
          "returnValue": "attachment",
          "label": "Attachment"
        },
        {
          "name": "inline",
          "returnValue": "inline",
          "label": "Inline"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_DOWNLOAD"
          }
        ]
      },
      "maxLength": null,
      "description": "View File As (select list) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:425",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "425",
      "builderLabel": "Download Text",
      "apexlangPath": "column.appearance.downloadText",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_DOWNLOAD"
          }
        ]
      },
      "maxLength": 255,
      "description": "Download Text (text) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:426",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "426",
      "builderLabel": "Image Description",
      "apexlangPath": "column.accessibility.imageDescription",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_IMAGE"
          }
        ]
      },
      "maxLength": 255,
      "description": "Image Description (text) in column.accessibility.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:454",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "454",
      "builderLabel": "Current Selection Page Item",
      "apexlangPath": "column.rowSelection.currentSelectionPageItem",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_ROW_SELECTOR"
          }
        ]
      },
      "maxLength": 255,
      "description": "Current Selection Page Item (item) in column.rowSelection.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:505",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "505",
      "builderLabel": "Enable Multi Select",
      "apexlangPath": "column.rowSelection.enableMultiSelect",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_ROW_SELECTOR"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Enable Multi Select (yes no) in column.rowSelection.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:506",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "506",
      "builderLabel": "Show Select All",
      "apexlangPath": "column.rowSelection.showSelectAll",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "505",
            "path": "column.rowSelection.enableMultiSelect",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Select All (yes no) in column.rowSelection.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:507",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "507",
      "builderLabel": "Hide Control",
      "apexlangPath": "column.rowSelection.hideControl",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_ROW_SELECTOR"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Hide Control (yes no) in column.rowSelection.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:694",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "694",
      "builderLabel": "Type",
      "apexlangPath": "column.columnFilter.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "1",
      "values": [
        {
          "name": "none",
          "returnValue": "N",
          "label": "None"
        },
        {
          "name": "defaultBasedOnColumnType",
          "returnValue": "D",
          "label": "Default Based on Column Type"
        },
        {
          "name": "definedLovExactMatch",
          "returnValue": "S",
          "label": "Use Defined List of Values to Filter Exact Match"
        },
        {
          "name": "definedLovWordContains",
          "returnValue": "C",
          "label": "Use Defined List of Values to Filter Word Contains"
        },
        {
          "name": "namedLovExactMatch",
          "returnValue": "1",
          "label": "Use Named List of Values to Filter Exact Match"
        },
        {
          "name": "namedLovWordContains",
          "returnValue": "2",
          "label": "Use Named List of Values to Filter Word Contains"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_PLAIN_LOV"
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:695",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "695",
      "builderLabel": "Named LOV",
      "apexlangPath": "column.columnFilter.namedLov",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "286",
            "path": "column.columnFilter.type",
            "hasToExist": true,
            "values": [
              "1",
              "2"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Named LOV (component) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:696",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "696",
      "builderLabel": "SQL Query",
      "apexlangPath": "column.columnFilter.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "694",
            "path": "column.columnFilter.type",
            "hasToExist": true,
            "values": [
              "S",
              "C"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:740",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "740",
      "builderLabel": "CSS Classes",
      "apexlangPath": "column.appearance.cssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_HIDDEN_COLUMN"
          }
        ]
      },
      "maxLength": 255,
      "description": "CSS Classes (combobox) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:759",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "759",
      "builderLabel": "Format",
      "apexlangPath": "column.settings.format",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "MARKDOWN",
      "values": [
        {
          "name": "html",
          "returnValue": "HTML",
          "label": "HTML"
        },
        {
          "name": "markdown",
          "returnValue": "MARKDOWN",
          "label": "Markdown"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_RICH_TEXT"
          }
        ]
      },
      "maxLength": null,
      "description": "Format (select list) in column.settings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:804",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "804",
      "builderLabel": "Alternative Label",
      "apexlangPath": "column.heading.alternativeLabel",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_ROW_SELECTOR"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Alternative Label (text) in column.heading.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:820",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "820",
      "builderLabel": "Primary Key",
      "apexlangPath": "column.source.primaryKey",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_ROW_SELECTOR"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Primary Key (yes no) in column.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:2369",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "2369",
      "builderLabel": "Target",
      "apexlangPath": "column.link.target",
      "type": "LINK",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_LINK"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Target (link) in column.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:2493",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "2493",
      "builderLabel": "Available on Client",
      "apexlangPath": "column.source.availableOnClient",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "820",
            "path": "column.source.primaryKey",
            "hasToExist": true,
            "value": "N"
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "268",
            "path": "column.source.dataType",
            "hasToExist": true,
            "values": [
              "BLOB",
              "CLOB",
              "BFILE",
              "SDO_GEOMETRY"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Available on Client (yes no) in column.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:2494",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "2494",
      "builderLabel": "Value Protected",
      "apexlangPath": "column.source.valueProtected",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "2493",
            "path": "column.source.availableOnClient",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Value Protected (yes no) in column.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5100",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5100",
      "builderLabel": "Type",
      "apexlangPath": "column.serverSideCondition.type",
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
      "description": "Type (select list) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5101",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5101",
      "builderLabel": "SQL Query",
      "apexlangPath": "column.serverSideCondition.sqlQuery",
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
            "path": "column.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5102",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5102",
      "builderLabel": "Value",
      "apexlangPath": "column.serverSideCondition.value",
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
            "path": "column.serverSideCondition.type",
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
      "description": "Value (text) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5103",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5103",
      "builderLabel": "Item",
      "apexlangPath": "column.serverSideCondition.item",
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
            "path": "column.serverSideCondition.type",
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
      "description": "Item (item) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5104",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5104",
      "builderLabel": "List",
      "apexlangPath": "column.serverSideCondition.list",
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
            "path": "column.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5105",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5105",
      "builderLabel": "Preference",
      "apexlangPath": "column.serverSideCondition.preference",
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
            "path": "column.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5106",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5106",
      "builderLabel": "Page",
      "apexlangPath": "column.serverSideCondition.page",
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
            "path": "column.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5107",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5107",
      "builderLabel": "Pages",
      "apexlangPath": "column.serverSideCondition.pages",
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
            "path": "column.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5108",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5108",
      "builderLabel": "Text",
      "apexlangPath": "column.serverSideCondition.text",
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
            "path": "column.serverSideCondition.type",
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
      "description": "Text (text) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5109",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5109",
      "builderLabel": "Value",
      "apexlangPath": "column.serverSideCondition.value",
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
            "path": "column.serverSideCondition.type",
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
      "description": "Value (text) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5110",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5110",
      "builderLabel": "Item",
      "apexlangPath": "column.serverSideCondition.item",
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
            "path": "column.serverSideCondition.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5111",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5111",
      "builderLabel": "Value",
      "apexlangPath": "column.serverSideCondition.value",
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
            "path": "column.serverSideCondition.type",
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
      "description": "Value (text) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5112",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5112",
      "builderLabel": "Language",
      "apexlangPath": "column.serverSideCondition.language",
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
            "path": "column.serverSideCondition.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5113",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5113",
      "builderLabel": "SQL Expression",
      "apexlangPath": "column.serverSideCondition.sqlExpression",
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
            "path": "column.serverSideCondition.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5114",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5114",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "column.serverSideCondition.plsqlExpression",
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
            "path": "column.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5115",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5115",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "column.serverSideCondition.javaScriptExpression",
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
            "path": "column.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5132",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5132",
      "builderLabel": "Language",
      "apexlangPath": "column.serverSideCondition.language",
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
            "path": "column.serverSideCondition.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5133",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5133",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "column.serverSideCondition.plsqlFunctionBody",
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
            "path": "column.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:5134",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "5134",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "column.serverSideCondition.javaScriptFunctionBody",
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
            "path": "column.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in column.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:12760044",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "12760044",
      "builderLabel": "End-User Alias",
      "apexlangPath": "column.advanced.endUserAlias",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 10,
      "description": "End-User Alias (text) in column.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:250507002",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "250507002",
      "builderLabel": "Column Context",
      "apexlangPath": "column.genAI.columnContext",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "250507001",
            "path": "attributes.genAI.naturalLanguageSupport",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Column Context (text editor) in column.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:250507003",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "250507003",
      "builderLabel": "Reference Data Type",
      "apexlangPath": "column.genAI.referenceDataType",
      "type": "SELECT LIST",
      "required": false,
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
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "250507001",
            "path": "attributes.genAI.naturalLanguageSupport",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Reference Data Type (select list) in column.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:250507004",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "250507004",
      "builderLabel": "List of Values",
      "apexlangPath": "column.genAI.lov",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "250507003",
            "path": "column.genAI.referenceDataType",
            "hasToExist": true,
            "value": "SHARED"
          }
        ]
      },
      "maxLength": null,
      "description": "List of Values (component) in column.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:250507005",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "250507005",
      "builderLabel": "SQL Query",
      "apexlangPath": "column.genAI.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "250507003",
            "path": "column.genAI.referenceDataType",
            "hasToExist": true,
            "value": "SQL_QUERY"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in column.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7030:250507006",
      "context": "column",
      "componentTypeId": "7030",
      "componentTitle": "Column",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "250507006",
      "builderLabel": "Static Values",
      "apexlangPath": "column.genAI.staticValues",
      "type": "STATIC LOV",
      "required": true,
      "defaultValue": "STATIC:Display1;Return1,Display2;Return2",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "250507003",
            "path": "column.genAI.referenceDataType",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Static Values (static lov) in column.genAI.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:698",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "698",
      "builderLabel": "View File as",
      "apexlangPath": "printAttributes.output.viewFileAs",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "ATTACHMENT",
      "values": [
        {
          "name": "attachment",
          "returnValue": "ATTACHMENT",
          "label": "Attachment"
        },
        {
          "name": "inline",
          "returnValue": "INLINE",
          "label": "Inline"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "View File as (select list) in printAttributes.output.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:700",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "700",
      "builderLabel": "Size",
      "apexlangPath": "printAttributes.page.size",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "LETTER",
      "values": [
        {
          "name": "letter",
          "returnValue": "LETTER",
          "label": "Letter"
        },
        {
          "name": "legal",
          "returnValue": "LEGAL",
          "label": "Legal"
        },
        {
          "name": "tabloid",
          "returnValue": "TABLOID",
          "label": "Tabloid"
        },
        {
          "name": "a4",
          "returnValue": "A4",
          "label": "A4"
        },
        {
          "name": "a3",
          "returnValue": "A3",
          "label": "A3"
        },
        {
          "name": "custom",
          "returnValue": "CUSTOM",
          "label": "Custom"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Size (select list) in printAttributes.page.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:701",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "701",
      "builderLabel": "Orientation",
      "apexlangPath": "printAttributes.page.orientation",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "HORIZONTAL",
      "values": [
        {
          "name": "portrait",
          "returnValue": "VERTICAL",
          "label": "Portrait"
        },
        {
          "name": "landscape",
          "returnValue": "HORIZONTAL",
          "label": "Landscape"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Orientation (select list) in printAttributes.page.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:702",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "702",
      "builderLabel": "Units",
      "apexlangPath": "printAttributes.page.units",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "INCHES",
      "values": [
        {
          "name": "inches",
          "returnValue": "INCHES",
          "label": "Inches"
        },
        {
          "name": "millimeters",
          "returnValue": "MILLIMETERS",
          "label": "Millimeters"
        },
        {
          "name": "centimeters",
          "returnValue": "CENTIMETERS",
          "label": "Centimeters"
        },
        {
          "name": "points",
          "returnValue": "POINTS",
          "label": "Points"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Units (select list) in printAttributes.page.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:703",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "703",
      "builderLabel": "Width",
      "apexlangPath": "printAttributes.page.width",
      "type": "NUMBER",
      "required": true,
      "defaultValue": "11",
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Width (number) in printAttributes.page.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:704",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "704",
      "builderLabel": "Height",
      "apexlangPath": "printAttributes.page.height",
      "type": "NUMBER",
      "required": true,
      "defaultValue": "8.5",
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Height (number) in printAttributes.page.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:705",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "705",
      "builderLabel": "Border Width",
      "apexlangPath": "printAttributes.page.borderWidth",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Border Width (number) in printAttributes.page.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:706",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "706",
      "builderLabel": "Border Color",
      "apexlangPath": "printAttributes.page.borderColor",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Border Color (color) in printAttributes.page.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:707",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "707",
      "builderLabel": "Font",
      "apexlangPath": "printAttributes.pageHeader.font",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "Helvetica",
      "values": [
        {
          "name": "helvetica",
          "returnValue": "Helvetica",
          "label": "Helvetica"
        },
        {
          "name": "times",
          "returnValue": "Times",
          "label": "Times"
        },
        {
          "name": "courier",
          "returnValue": "Courier",
          "label": "Courier"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Font (select list) in printAttributes.pageHeader.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:708",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "708",
      "builderLabel": "Font Weight",
      "apexlangPath": "printAttributes.pageHeader.fontWeight",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "normal",
      "values": [
        {
          "name": "normal",
          "returnValue": "normal",
          "label": "Normal"
        },
        {
          "name": "bold",
          "returnValue": "bold",
          "label": "Bold"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Font Weight (select list) in printAttributes.pageHeader.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:709",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "709",
      "builderLabel": "Font Size",
      "apexlangPath": "printAttributes.pageHeader.fontSize",
      "type": "INTEGER",
      "required": true,
      "defaultValue": "12",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Font Size (integer) in printAttributes.pageHeader.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:710",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "710",
      "builderLabel": "Font Color",
      "apexlangPath": "printAttributes.pageHeader.fontColor",
      "type": "COLOR",
      "required": true,
      "defaultValue": "#000000",
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Font Color (color) in printAttributes.pageHeader.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:711",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "711",
      "builderLabel": "Alignment",
      "apexlangPath": "printAttributes.pageHeader.alignment",
      "type": "PILL BUTTONS",
      "required": true,
      "defaultValue": "CENTER",
      "values": [
        {
          "name": "start",
          "returnValue": "LEFT",
          "label": "start"
        },
        {
          "name": "center",
          "returnValue": "CENTER",
          "label": "center"
        },
        {
          "name": "end",
          "returnValue": "RIGHT",
          "label": "end"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Alignment (pill buttons) in printAttributes.pageHeader.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:712",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "712",
      "builderLabel": "Page Header Text",
      "apexlangPath": "printAttributes.pageHeader.pageHeaderText",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Page Header Text (text editor) in printAttributes.pageHeader.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:713",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "713",
      "builderLabel": "Font",
      "apexlangPath": "printAttributes.columnHeadings.font",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "Helvetica",
      "values": [
        {
          "name": "helvetica",
          "returnValue": "Helvetica",
          "label": "Helvetica"
        },
        {
          "name": "times",
          "returnValue": "Times",
          "label": "Times"
        },
        {
          "name": "courier",
          "returnValue": "Courier",
          "label": "Courier"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Font (select list) in printAttributes.columnHeadings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:714",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "714",
      "builderLabel": "Font Weight",
      "apexlangPath": "printAttributes.columnHeadings.fontWeight",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "bold",
      "values": [
        {
          "name": "normal",
          "returnValue": "normal",
          "label": "Normal"
        },
        {
          "name": "bold",
          "returnValue": "bold",
          "label": "Bold"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Font Weight (select list) in printAttributes.columnHeadings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:715",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "715",
      "builderLabel": "Font Size",
      "apexlangPath": "printAttributes.columnHeadings.fontSize",
      "type": "INTEGER",
      "required": true,
      "defaultValue": "10",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Font Size (integer) in printAttributes.columnHeadings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:716",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "716",
      "builderLabel": "Font Color",
      "apexlangPath": "printAttributes.columnHeadings.fontColor",
      "type": "COLOR",
      "required": true,
      "defaultValue": "#000000",
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Font Color (color) in printAttributes.columnHeadings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:717",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "717",
      "builderLabel": "Background Color",
      "apexlangPath": "printAttributes.columnHeadings.backgroundColor",
      "type": "COLOR",
      "required": true,
      "defaultValue": "#EEEEEE",
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Background Color (color) in printAttributes.columnHeadings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:718",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "718",
      "builderLabel": "Font",
      "apexlangPath": "printAttributes.columns.font",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "Helvetica",
      "values": [
        {
          "name": "helvetica",
          "returnValue": "Helvetica",
          "label": "Helvetica"
        },
        {
          "name": "times",
          "returnValue": "Times",
          "label": "Times"
        },
        {
          "name": "courier",
          "returnValue": "Courier",
          "label": "Courier"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Font (select list) in printAttributes.columns.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:719",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "719",
      "builderLabel": "Font Weight",
      "apexlangPath": "printAttributes.columns.fontWeight",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "normal",
      "values": [
        {
          "name": "normal",
          "returnValue": "normal",
          "label": "Normal"
        },
        {
          "name": "bold",
          "returnValue": "bold",
          "label": "Bold"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Font Weight (select list) in printAttributes.columns.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:720",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "720",
      "builderLabel": "Font Size",
      "apexlangPath": "printAttributes.columns.fontSize",
      "type": "INTEGER",
      "required": true,
      "defaultValue": "10",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Font Size (integer) in printAttributes.columns.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:721",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "721",
      "builderLabel": "Font Color",
      "apexlangPath": "printAttributes.columns.fontColor",
      "type": "COLOR",
      "required": true,
      "defaultValue": "#000000",
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Font Color (color) in printAttributes.columns.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:722",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "722",
      "builderLabel": "Background Color",
      "apexlangPath": "printAttributes.columns.backgroundColor",
      "type": "COLOR",
      "required": true,
      "defaultValue": "#FFFFFF",
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Background Color (color) in printAttributes.columns.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:723",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "723",
      "builderLabel": "Font",
      "apexlangPath": "printAttributes.pageFooter.font",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "Helvetica",
      "values": [
        {
          "name": "helvetica",
          "returnValue": "Helvetica",
          "label": "Helvetica"
        },
        {
          "name": "times",
          "returnValue": "Times",
          "label": "Times"
        },
        {
          "name": "courier",
          "returnValue": "Courier",
          "label": "Courier"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Font (select list) in printAttributes.pageFooter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:724",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "724",
      "builderLabel": "Font Weight",
      "apexlangPath": "printAttributes.pageFooter.fontWeight",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "normal",
      "values": [
        {
          "name": "normal",
          "returnValue": "normal",
          "label": "Normal"
        },
        {
          "name": "bold",
          "returnValue": "bold",
          "label": "Bold"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Font Weight (select list) in printAttributes.pageFooter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:725",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "725",
      "builderLabel": "Font Size",
      "apexlangPath": "printAttributes.pageFooter.fontSize",
      "type": "INTEGER",
      "required": true,
      "defaultValue": "12",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Font Size (integer) in printAttributes.pageFooter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:726",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "726",
      "builderLabel": "Font Color",
      "apexlangPath": "printAttributes.pageFooter.fontColor",
      "type": "COLOR",
      "required": true,
      "defaultValue": "#000000",
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Font Color (color) in printAttributes.pageFooter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:727",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "727",
      "builderLabel": "Alignment",
      "apexlangPath": "printAttributes.pageFooter.alignment",
      "type": "PILL BUTTONS",
      "required": true,
      "defaultValue": "CENTER",
      "values": [
        {
          "name": "start",
          "returnValue": "LEFT",
          "label": "start"
        },
        {
          "name": "center",
          "returnValue": "CENTER",
          "label": "center"
        },
        {
          "name": "end",
          "returnValue": "RIGHT",
          "label": "end"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Alignment (pill buttons) in printAttributes.pageFooter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:728",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "728",
      "builderLabel": "Page Footer Text",
      "apexlangPath": "printAttributes.pageFooter.pageFooterText",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Page Footer Text (text editor) in printAttributes.pageFooter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7040:734",
      "context": "printAttributes",
      "componentTypeId": "7040",
      "componentTitle": "Print Attributes",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "308",
            "path": "attributes.download.formats",
            "hasToExist": true,
            "values": [
              "XLSX",
              "PDF"
            ]
          }
        ]
      },
      "propertyId": "734",
      "builderLabel": "Layout",
      "apexlangPath": "printAttributes.output.layout",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Layout (component) in printAttributes.output.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7050:1",
      "context": "savedReport",
      "componentTypeId": "7050",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "1",
      "builderLabel": "Name",
      "apexlangPath": "savedReport.name",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "364",
            "path": "savedReport.visibility",
            "hasToExist": true,
            "value": "PRIMARY_DEFAULT"
          }
        ]
      },
      "maxLength": 255,
      "description": "Name (text) in savedReport.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7050:50",
      "context": "savedReport",
      "componentTypeId": "7050",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "50",
      "builderLabel": "Description",
      "apexlangPath": "savedReport.description.description",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Description (text editor) in savedReport.description.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7050:364",
      "context": "savedReport",
      "componentTypeId": "7050",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "364",
      "builderLabel": "Visibility",
      "apexlangPath": "savedReport.visibility",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "primaryDefault",
          "returnValue": "PRIMARY_DEFAULT",
          "label": "Primary Default"
        },
        {
          "name": "alternativeDefault",
          "returnValue": "ALTERNATIVE_DEFAULT",
          "label": "Alternative Default"
        },
        {
          "name": "public",
          "returnValue": "PUBLIC",
          "label": "Public"
        },
        {
          "name": "private",
          "returnValue": "PRIVATE",
          "label": "Private"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Visibility (select list) in savedReport.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7050:365",
      "context": "savedReport",
      "componentTypeId": "7050",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "365",
      "builderLabel": "Static ID",
      "apexlangPath": "savedReport.staticId",
      "type": "STATIC ID",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Static ID (static id) in savedReport.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7050:12760006",
      "context": "savedReport",
      "componentTypeId": "7050",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "12760006",
      "builderLabel": "Application User",
      "apexlangPath": "savedReport.settings.appUser",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "364",
            "path": "savedReport.visibility",
            "hasToExist": true,
            "value": "PUBLIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Application User (text) in savedReport.settings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7050:12760007",
      "context": "savedReport",
      "componentTypeId": "7050",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "12760007",
      "builderLabel": "Chart",
      "apexlangPath": "savedReport.view.chart",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Chart (yes no) in savedReport.view.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7050:12760008",
      "context": "savedReport",
      "componentTypeId": "7050",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "12760008",
      "builderLabel": "Group By",
      "apexlangPath": "savedReport.view.groupBy",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Group By (yes no) in savedReport.view.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7050:12760009",
      "context": "savedReport",
      "componentTypeId": "7050",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "12760009",
      "builderLabel": "Pivot",
      "apexlangPath": "savedReport.view.pivot",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Pivot (yes no) in savedReport.view.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7050:12760010",
      "context": "savedReport",
      "componentTypeId": "7050",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "12760010",
      "builderLabel": "Default",
      "apexlangPath": "savedReport.view.default",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "REPORT",
      "values": [
        {
          "name": "report",
          "returnValue": "REPORT",
          "label": "Report"
        },
        {
          "name": "icon",
          "returnValue": "ICON",
          "label": "Icon"
        },
        {
          "name": "detail",
          "returnValue": "DETAIL",
          "label": "Detail"
        },
        {
          "name": "chart",
          "returnValue": "CHART",
          "label": "Chart"
        },
        {
          "name": "groupBy",
          "returnValue": "GROUP_BY",
          "label": "Group By"
        },
        {
          "name": "pivot",
          "returnValue": "PIVOT",
          "label": "Pivot"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Default (select list) in savedReport.view.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7050:12760014",
      "context": "savedReport",
      "componentTypeId": "7050",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "12760014",
      "builderLabel": "Minutes Ago",
      "apexlangPath": "savedReport.flashback.minutesAgo",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "350",
            "path": "attributes.actionsMenu.flashback",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 22,
      "description": "Minutes Ago (number) in savedReport.flashback.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7050:12760015",
      "context": "savedReport",
      "componentTypeId": "7050",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "12760015",
      "builderLabel": "Enabled",
      "apexlangPath": "savedReport.flashback.enabled",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "12760014",
            "path": "savedReport.flashback.minutesAgo",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "Enabled (yes no) in savedReport.flashback.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7050:12760066",
      "context": "savedReport",
      "componentTypeId": "7050",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7010",
      "componentCondition": null,
      "propertyId": "12760066",
      "builderLabel": "Rows Per Page",
      "apexlangPath": "savedReport.view.rowsPerPage",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Rows Per Page (combobox) in savedReport.view.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7051:97",
      "context": "displayColumn",
      "componentTypeId": "7051",
      "componentTitle": "Display Column",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "97",
      "builderLabel": "Sequence",
      "apexlangPath": "displayColumn.layout.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in displayColumn.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7051:12760024",
      "context": "displayColumn",
      "componentTypeId": "7051",
      "componentTitle": "Display Column",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760024",
      "builderLabel": "Column",
      "apexlangPath": "displayColumn.column",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 128,
      "description": "Column (column) in displayColumn.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7052:112",
      "context": "computation",
      "componentTypeId": "7052",
      "componentTitle": "Computation",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "112",
      "builderLabel": "Format Mask",
      "apexlangPath": "computation.appearance.formatMask",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760046",
            "path": "computation.source.dataType",
            "hasToExist": true,
            "value": "DATE"
          }
        ]
      },
      "maxLength": 255,
      "description": "Format Mask (combobox) in computation.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7052:113",
      "context": "computation",
      "componentTypeId": "7052",
      "componentTitle": "Computation",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "113",
      "builderLabel": "Format Mask",
      "apexlangPath": "computation.appearance.formatMask",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760046",
            "path": "computation.source.dataType",
            "hasToExist": true,
            "value": "NUMBER"
          }
        ]
      },
      "maxLength": 255,
      "description": "Format Mask (combobox) in computation.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7052:267",
      "context": "computation",
      "componentTypeId": "7052",
      "componentTitle": "Computation",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "267",
      "builderLabel": "Column Name",
      "apexlangPath": "computation.columnName",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 128,
      "description": "Column Name (text) in computation.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7052:12760043",
      "context": "computation",
      "componentTypeId": "7052",
      "componentTitle": "Computation",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760043",
      "builderLabel": "Identifier",
      "apexlangPath": "computation.identifier",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 3,
      "description": "Identifier (text) in computation.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7052:12760045",
      "context": "computation",
      "componentTypeId": "7052",
      "componentTitle": "Computation",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760045",
      "builderLabel": "Expression",
      "apexlangPath": "computation.source.expression",
      "type": "SQL EXPRESSION",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Expression (sql expression) in computation.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7052:12760046",
      "context": "computation",
      "componentTypeId": "7052",
      "componentTitle": "Computation",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760046",
      "builderLabel": "Data Type",
      "apexlangPath": "computation.source.dataType",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "string",
          "returnValue": "STRING",
          "label": "String"
        },
        {
          "name": "date",
          "returnValue": "DATE",
          "label": "Date"
        },
        {
          "name": "number",
          "returnValue": "NUMBER",
          "label": "Number"
        },
        {
          "name": "clob",
          "returnValue": "CLOB",
          "label": "Clob"
        },
        {
          "name": "other",
          "returnValue": "OTHER",
          "label": "Other"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Data Type (select list) in computation.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7052:12760047",
      "context": "computation",
      "componentTypeId": "7052",
      "componentTitle": "Computation",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760047",
      "builderLabel": "Column",
      "apexlangPath": "computation.label.column",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Column (text) in computation.label.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7053:12760002",
      "context": "sort",
      "componentTypeId": "7053",
      "componentTitle": "Sort",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760002",
      "builderLabel": "Sequence",
      "apexlangPath": "sort.sort.sequence",
      "type": "INTEGER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Sequence (integer) in sort.sort.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7053:12760011",
      "context": "sort",
      "componentTypeId": "7053",
      "componentTitle": "Sort",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760011",
      "builderLabel": "Direction",
      "apexlangPath": "sort.sort.direction",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "ASC",
      "values": [
        {
          "name": "asc",
          "returnValue": "ASC",
          "label": "Ascending"
        },
        {
          "name": "desc",
          "returnValue": "DESC",
          "label": "Descending"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Direction (select list) in sort.sort.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7053:12760012",
      "context": "sort",
      "componentTypeId": "7053",
      "componentTitle": "Sort",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760012",
      "builderLabel": "Nulls",
      "apexlangPath": "sort.sort.nulls",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "first",
          "returnValue": "FIRST",
          "label": "First"
        },
        {
          "name": "last",
          "returnValue": "LAST",
          "label": "Last"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Nulls (select list) in sort.sort.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7053:12760024",
      "context": "sort",
      "componentTypeId": "7053",
      "componentTitle": "Sort",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760024",
      "builderLabel": "Column",
      "apexlangPath": "sort.column",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 128,
      "description": "Column (column) in sort.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7054:12760013",
      "context": "aggregate",
      "componentTypeId": "7054",
      "componentTitle": "Aggregate",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760013",
      "builderLabel": "Function",
      "apexlangPath": "aggregate.aggregate.function",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "SUM",
      "values": [
        {
          "name": "sum",
          "returnValue": "SUM",
          "label": "Sum"
        },
        {
          "name": "average",
          "returnValue": "AVG",
          "label": "Average"
        },
        {
          "name": "count",
          "returnValue": "COUNT",
          "label": "Count"
        },
        {
          "name": "countDistinct",
          "returnValue": "COUNT_DISTINCT",
          "label": "Count Distinct"
        },
        {
          "name": "min",
          "returnValue": "MIN",
          "label": "Minimum"
        },
        {
          "name": "max",
          "returnValue": "MAX",
          "label": "Maximum"
        },
        {
          "name": "median",
          "returnValue": "MEDIAN",
          "label": "Median"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Function (select list) in aggregate.aggregate.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7054:12760025",
      "context": "aggregate",
      "componentTypeId": "7054",
      "componentTitle": "Aggregate",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760025",
      "builderLabel": "Column",
      "apexlangPath": "aggregate.aggregate.column",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "12760013",
            "path": "aggregate.aggregate.function",
            "hasToExist": true,
            "values": [
              "COUNT",
              "COUNT_DISTINCT"
            ]
          }
        ]
      },
      "maxLength": 128,
      "description": "Column (column) in aggregate.aggregate.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7054:12760026",
      "context": "aggregate",
      "componentTypeId": "7054",
      "componentTitle": "Aggregate",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760026",
      "builderLabel": "Column",
      "apexlangPath": "aggregate.aggregate.column",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "12760013",
            "path": "aggregate.aggregate.function",
            "hasToExist": true,
            "values": [
              "COUNT",
              "COUNT_DISTINCT"
            ]
          }
        ]
      },
      "maxLength": 128,
      "description": "Column (column) in aggregate.aggregate.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7055:180",
      "context": "filter",
      "componentTypeId": "7055",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "180",
      "builderLabel": "Static ID",
      "apexlangPath": "filter.advanced.staticId",
      "type": "STATIC ID",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Static ID (static id) in filter.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7055:12760028",
      "context": "filter",
      "componentTypeId": "7055",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760028",
      "builderLabel": "Column",
      "apexlangPath": "filter.condition.column",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760029",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COL"
          }
        ]
      },
      "maxLength": 128,
      "description": "Column (column) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7055:12760029",
      "context": "filter",
      "componentTypeId": "7055",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760029",
      "builderLabel": "Type",
      "apexlangPath": "filter.condition.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "COL",
      "values": [
        {
          "name": "column",
          "returnValue": "COL",
          "label": "Column"
        },
        {
          "name": "rowSearch",
          "returnValue": "SEARCH",
          "label": "Row Search"
        },
        {
          "name": "rowExpression",
          "returnValue": "ROW",
          "label": "Row Expression"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7055:12760031",
      "context": "filter",
      "componentTypeId": "7055",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760031",
      "builderLabel": "Name",
      "apexlangPath": "filter.name",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760029",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "ROW"
          }
        ]
      },
      "maxLength": 255,
      "description": "Name (text) in filter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7055:12760032",
      "context": "filter",
      "componentTypeId": "7055",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760032",
      "builderLabel": "Operator",
      "apexlangPath": "filter.condition.operator",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "=",
      "values": [
        {
          "name": "=",
          "returnValue": "=",
          "label": "="
        },
        {
          "name": "!=",
          "returnValue": "!=",
          "label": "!="
        },
        {
          "name": ">",
          "returnValue": ">",
          "label": ">"
        },
        {
          "name": ">=",
          "returnValue": ">=",
          "label": ">="
        },
        {
          "name": "<",
          "returnValue": "<",
          "label": "<"
        },
        {
          "name": "<=",
          "returnValue": "<=",
          "label": "<="
        },
        {
          "name": "between",
          "returnValue": "between",
          "label": "between"
        },
        {
          "name": "isNull",
          "returnValue": "is null",
          "label": "is null"
        },
        {
          "name": "isNotNull",
          "returnValue": "is not null",
          "label": "is not null"
        },
        {
          "name": "like",
          "returnValue": "like",
          "label": "like"
        },
        {
          "name": "notLike",
          "returnValue": "not like",
          "label": "not like"
        },
        {
          "name": "in",
          "returnValue": "in",
          "label": "in"
        },
        {
          "name": "notIn",
          "returnValue": "not in",
          "label": "not in"
        },
        {
          "name": "contains",
          "returnValue": "contains",
          "label": "contains"
        },
        {
          "name": "doesNotContain",
          "returnValue": "does not contain",
          "label": "does not contain"
        },
        {
          "name": "regexp",
          "returnValue": "regexp_like",
          "label": "matches regular expression"
        },
        {
          "name": "isInTheLast",
          "returnValue": "is in the last",
          "label": "is in the last"
        },
        {
          "name": "isNotInTheLast",
          "returnValue": "is not in the last",
          "label": "is not in the last"
        },
        {
          "name": "isInTheNext",
          "returnValue": "is in the next",
          "label": "is in the next"
        },
        {
          "name": "isNotInTheNext",
          "returnValue": "is not in the next",
          "label": "is not in the next"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760029",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COL"
          }
        ]
      },
      "maxLength": null,
      "description": "Operator (select list) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7055:12760034",
      "context": "filter",
      "componentTypeId": "7055",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760034",
      "builderLabel": "Value",
      "apexlangPath": "filter.condition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760029",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COL"
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "12760032",
            "path": "filter.condition.operator",
            "hasToExist": true,
            "values": [
              "between",
              "is null",
              "is not null",
              "is in the last",
              "is not in the last",
              "is in the next",
              "is not in the next"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7055:12760035",
      "context": "filter",
      "componentTypeId": "7055",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760035",
      "builderLabel": "Value",
      "apexlangPath": "filter.condition.value",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760029",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COL"
          },
          {
            "type": "IN_LIST",
            "propertyId": "12760032",
            "path": "filter.condition.operator",
            "hasToExist": true,
            "values": [
              "is in the last",
              "is not in the last",
              "is in the next",
              "is not in the next"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Value (number) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7055:12760036",
      "context": "filter",
      "componentTypeId": "7055",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760036",
      "builderLabel": "Row Expression",
      "apexlangPath": "filter.condition.rowExpression",
      "type": "TEXT EDITOR",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760029",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "ROW"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Row Expression (text editor) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7055:12760037",
      "context": "filter",
      "componentTypeId": "7055",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760037",
      "builderLabel": "Search",
      "apexlangPath": "filter.condition.search",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760029",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "SEARCH"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Search (text) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7055:12760038",
      "context": "filter",
      "componentTypeId": "7055",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760038",
      "builderLabel": "From",
      "apexlangPath": "filter.condition.from",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760029",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COL"
          },
          {
            "type": "EQUALS",
            "propertyId": "12760032",
            "path": "filter.condition.operator",
            "hasToExist": true,
            "value": "between"
          }
        ]
      },
      "maxLength": 1900,
      "description": "From (text) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7055:12760039",
      "context": "filter",
      "componentTypeId": "7055",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760039",
      "builderLabel": "To",
      "apexlangPath": "filter.condition.to",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760029",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COL"
          },
          {
            "type": "EQUALS",
            "propertyId": "12760032",
            "path": "filter.condition.operator",
            "hasToExist": true,
            "value": "between"
          }
        ]
      },
      "maxLength": 1900,
      "description": "To (text) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7055:12760040",
      "context": "filter",
      "componentTypeId": "7055",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760040",
      "builderLabel": "Unit",
      "apexlangPath": "filter.condition.unit",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "min",
          "returnValue": "minutes",
          "label": "minutes"
        },
        {
          "name": "hours",
          "returnValue": "hours",
          "label": "hours"
        },
        {
          "name": "days",
          "returnValue": "days",
          "label": "days"
        },
        {
          "name": "weeks",
          "returnValue": "weeks",
          "label": "weeks"
        },
        {
          "name": "months",
          "returnValue": "months",
          "label": "months"
        },
        {
          "name": "years",
          "returnValue": "years",
          "label": "years"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760029",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COL"
          },
          {
            "type": "IN_LIST",
            "propertyId": "12760032",
            "path": "filter.condition.operator",
            "hasToExist": true,
            "values": [
              "is in the last",
              "is not in the last",
              "is in the next",
              "is not in the next"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Unit (select list) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7055:12760103",
      "context": "filter",
      "componentTypeId": "7055",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760103",
      "builderLabel": "Enabled",
      "apexlangPath": "filter.advanced.enabled",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Enabled (yes no) in filter.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7056:12760004",
      "context": "controlBreak",
      "componentTypeId": "7056",
      "componentTitle": "Control Break",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760004",
      "builderLabel": "Sequence",
      "apexlangPath": "controlBreak.layout.sequence",
      "type": "INTEGER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Sequence (integer) in controlBreak.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7056:12760027",
      "context": "controlBreak",
      "componentTypeId": "7056",
      "componentTitle": "Control Break",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760027",
      "builderLabel": "Column",
      "apexlangPath": "controlBreak.column",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 128,
      "description": "Column (column) in controlBreak.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7056:12760103",
      "context": "controlBreak",
      "componentTypeId": "7056",
      "componentTitle": "Control Break",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760103",
      "builderLabel": "Enabled",
      "apexlangPath": "controlBreak.advanced.enabled",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Enabled (yes no) in controlBreak.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:1",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "1",
      "builderLabel": "Name",
      "apexlangPath": "highlight.name",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Name (text) in highlight.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:60",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "60",
      "builderLabel": "Sequence",
      "apexlangPath": "highlight.execution.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in highlight.execution.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:180",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "180",
      "builderLabel": "Static ID",
      "apexlangPath": "highlight.advanced.staticId",
      "type": "STATIC ID",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Static ID (static id) in highlight.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:12760023",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760023",
      "builderLabel": "Type",
      "apexlangPath": "highlight.highlight.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "ROW",
      "values": [
        {
          "name": "row",
          "returnValue": "ROW",
          "label": "Row"
        },
        {
          "name": "cell",
          "returnValue": "CELL",
          "label": "Cell"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in highlight.highlight.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:12760028",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760028",
      "builderLabel": "Column",
      "apexlangPath": "highlight.condition.column",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 128,
      "description": "Column (column) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:12760032",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760032",
      "builderLabel": "Operator",
      "apexlangPath": "highlight.condition.operator",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "=",
      "values": [
        {
          "name": "=",
          "returnValue": "=",
          "label": "="
        },
        {
          "name": "!=",
          "returnValue": "!=",
          "label": "!="
        },
        {
          "name": ">",
          "returnValue": ">",
          "label": ">"
        },
        {
          "name": ">=",
          "returnValue": ">=",
          "label": ">="
        },
        {
          "name": "<",
          "returnValue": "<",
          "label": "<"
        },
        {
          "name": "<=",
          "returnValue": "<=",
          "label": "<="
        },
        {
          "name": "between",
          "returnValue": "between",
          "label": "between"
        },
        {
          "name": "isNull",
          "returnValue": "is null",
          "label": "is null"
        },
        {
          "name": "isNotNull",
          "returnValue": "is not null",
          "label": "is not null"
        },
        {
          "name": "like",
          "returnValue": "like",
          "label": "like"
        },
        {
          "name": "notLike",
          "returnValue": "not like",
          "label": "not like"
        },
        {
          "name": "in",
          "returnValue": "in",
          "label": "in"
        },
        {
          "name": "notIn",
          "returnValue": "not in",
          "label": "not in"
        },
        {
          "name": "contains",
          "returnValue": "contains",
          "label": "contains"
        },
        {
          "name": "doesNotContain",
          "returnValue": "does not contain",
          "label": "does not contain"
        },
        {
          "name": "regexp",
          "returnValue": "regexp_like",
          "label": "matches regular expression"
        },
        {
          "name": "isInTheLast",
          "returnValue": "is in the last",
          "label": "is in the last"
        },
        {
          "name": "isNotInTheLast",
          "returnValue": "is not in the last",
          "label": "is not in the last"
        },
        {
          "name": "isInTheNext",
          "returnValue": "is in the next",
          "label": "is in the next"
        },
        {
          "name": "isNotInTheNext",
          "returnValue": "is not in the next",
          "label": "is not in the next"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Operator (select list) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:12760034",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760034",
      "builderLabel": "Value",
      "apexlangPath": "highlight.condition.value",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "12760032",
            "path": "highlight.condition.operator",
            "hasToExist": true,
            "values": [
              "between",
              "is null",
              "is not null",
              "is in the last",
              "is not in the last",
              "is in the next",
              "is not in the next"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:12760035",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760035",
      "builderLabel": "Value",
      "apexlangPath": "highlight.condition.value",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "12760032",
            "path": "highlight.condition.operator",
            "hasToExist": true,
            "values": [
              "is in the last",
              "is not in the last",
              "is in the next",
              "is not in the next"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Value (number) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:12760038",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760038",
      "builderLabel": "From",
      "apexlangPath": "highlight.condition.from",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760032",
            "path": "highlight.condition.operator",
            "hasToExist": true,
            "value": "between"
          }
        ]
      },
      "maxLength": 1900,
      "description": "From (text) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:12760039",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760039",
      "builderLabel": "To",
      "apexlangPath": "highlight.condition.to",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760032",
            "path": "highlight.condition.operator",
            "hasToExist": true,
            "value": "between"
          }
        ]
      },
      "maxLength": 1900,
      "description": "To (text) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:12760040",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760040",
      "builderLabel": "Unit",
      "apexlangPath": "highlight.condition.unit",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "min",
          "returnValue": "minutes",
          "label": "minutes"
        },
        {
          "name": "hours",
          "returnValue": "hours",
          "label": "hours"
        },
        {
          "name": "days",
          "returnValue": "days",
          "label": "days"
        },
        {
          "name": "weeks",
          "returnValue": "weeks",
          "label": "weeks"
        },
        {
          "name": "months",
          "returnValue": "months",
          "label": "months"
        },
        {
          "name": "years",
          "returnValue": "years",
          "label": "years"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "12760032",
            "path": "highlight.condition.operator",
            "hasToExist": true,
            "values": [
              "is in the last",
              "is not in the last",
              "is in the next",
              "is not in the next"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Unit (select list) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:12760103",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760103",
      "builderLabel": "Enabled",
      "apexlangPath": "highlight.advanced.enabled",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Enabled (yes no) in highlight.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:12760109",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760109",
      "builderLabel": "Background",
      "apexlangPath": "highlight.colors.background",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 30,
      "description": "Background (color) in highlight.colors.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7057:12760110",
      "context": "highlight",
      "componentTypeId": "7057",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": null,
      "propertyId": "12760110",
      "builderLabel": "Text",
      "apexlangPath": "highlight.colors.text",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 30,
      "description": "Text (color) in highlight.colors.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7058:830",
      "context": "chart",
      "componentTypeId": "7058",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760007",
            "path": "savedReport.view.chart",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "propertyId": "830",
      "builderLabel": "Orientation",
      "apexlangPath": "chart.chartAppearance.orientation",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "vertical",
      "values": [
        {
          "name": "vertical",
          "returnValue": "vertical",
          "label": "Vertical"
        },
        {
          "name": "horizontal",
          "returnValue": "horizontal",
          "label": "Horizontal"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "12760016",
            "path": "chart.chart.type",
            "hasToExist": true,
            "value": "pie"
          }
        ]
      },
      "maxLength": null,
      "description": "Orientation (select list) in chart.chartAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7058:12760016",
      "context": "chart",
      "componentTypeId": "7058",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760007",
            "path": "savedReport.view.chart",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "propertyId": "12760016",
      "builderLabel": "Type",
      "apexlangPath": "chart.chart.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "bar",
      "values": [
        {
          "name": "bar",
          "returnValue": "bar",
          "label": "Bar"
        },
        {
          "name": "lineWithArea",
          "returnValue": "lineWithArea",
          "label": "Line with Area"
        },
        {
          "name": "pie",
          "returnValue": "pie",
          "label": "Pie"
        },
        {
          "name": "line",
          "returnValue": "line",
          "label": "Line"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7058:12760017",
      "context": "chart",
      "componentTypeId": "7058",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760007",
            "path": "savedReport.view.chart",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "propertyId": "12760017",
      "builderLabel": "Label",
      "apexlangPath": "chart.chart.label",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 128,
      "description": "Label (column) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7058:12760018",
      "context": "chart",
      "componentTypeId": "7058",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760007",
            "path": "savedReport.view.chart",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "propertyId": "12760018",
      "builderLabel": "Value",
      "apexlangPath": "chart.chart.value",
      "type": "COLUMN",
      "required": {
        "operator": "OR",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "hasToExist": true,
            "value": "COUNT",
            "propertyId": "12760020"
          },
          {
            "type": "NULL",
            "hasToExist": true,
            "propertyId": "12760020"
          }
        ]
      },
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 128,
      "description": "Value (column) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7058:12760019",
      "context": "chart",
      "componentTypeId": "7058",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760007",
            "path": "savedReport.view.chart",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "propertyId": "12760019",
      "builderLabel": "By",
      "apexlangPath": "chart.sort.by",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "DEFAULT",
      "values": [
        {
          "name": "default",
          "returnValue": "DEFAULT",
          "label": "Default"
        },
        {
          "name": "valueAsc",
          "returnValue": "VALUE_ASC",
          "label": "Value Ascending"
        },
        {
          "name": "valueDesc",
          "returnValue": "VALUE_DESC",
          "label": "Value Descending"
        },
        {
          "name": "labelAsc",
          "returnValue": "LABEL_ASC",
          "label": "Label Ascending"
        },
        {
          "name": "labelDesc",
          "returnValue": "LABEL_DESC",
          "label": "Label Descending"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "By (select list) in chart.sort.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7058:12760020",
      "context": "chart",
      "componentTypeId": "7058",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760007",
            "path": "savedReport.view.chart",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "propertyId": "12760020",
      "builderLabel": "Value Aggregation",
      "apexlangPath": "chart.chart.valueAggregation",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "sum",
          "returnValue": "SUM",
          "label": "Sum"
        },
        {
          "name": "average",
          "returnValue": "AVG",
          "label": "Average"
        },
        {
          "name": "min",
          "returnValue": "MIN",
          "label": "Minimum"
        },
        {
          "name": "max",
          "returnValue": "MAX",
          "label": "Maximum"
        },
        {
          "name": "count",
          "returnValue": "COUNT",
          "label": "Count"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Value Aggregation (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7058:12760021",
      "context": "chart",
      "componentTypeId": "7058",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760007",
            "path": "savedReport.view.chart",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "propertyId": "12760021",
      "builderLabel": "Label",
      "apexlangPath": "chart.axisTitle.label",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "12760016",
            "path": "chart.chart.type",
            "hasToExist": true,
            "value": "pie"
          }
        ]
      },
      "maxLength": 255,
      "description": "Label (text) in chart.axisTitle.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:7058:12760022",
      "context": "chart",
      "componentTypeId": "7058",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7050",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760007",
            "path": "savedReport.view.chart",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "propertyId": "12760022",
      "builderLabel": "Value",
      "apexlangPath": "chart.axisTitle.value",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "12760016",
            "path": "chart.chart.type",
            "hasToExist": true,
            "value": "pie"
          }
        ]
      },
      "maxLength": 255,
      "description": "Value (text) in chart.axisTitle.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:76",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "76",
      "builderLabel": "Static Value",
      "apexlangPath": "parameter.value.staticValue",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "true",
          "returnValue": "TRUE",
          "label": "True"
        },
        {
          "name": "false",
          "returnValue": "FALSE",
          "label": "False"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1005",
            "path": "parameter.value.type",
            "hasToExist": true,
            "value": "STATIC"
          },
          {
            "type": "FEATURES",
            "propertyId": "1004",
            "path": "parameter.name",
            "hasToExist": true,
            "values": [
              "BOOLEAN_PARAMETER"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Static Value (select list) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:184",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "184",
      "builderLabel": "True Value",
      "apexlangPath": "parameter.value.trueValue",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "1004",
            "path": "parameter.name",
            "hasToExist": true,
            "values": [
              "BOOLEAN_PARAMETER"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "1005",
            "path": "parameter.value.type",
            "hasToExist": true,
            "values": [
              "ITEM",
              "PREFERENCE"
            ]
          }
        ]
      },
      "maxLength": 10,
      "description": "True Value (text) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:185",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "185",
      "builderLabel": "False Value",
      "apexlangPath": "parameter.value.falseValue",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "1004",
            "path": "parameter.name",
            "hasToExist": true,
            "values": [
              "BOOLEAN_PARAMETER"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "1005",
            "path": "parameter.value.type",
            "hasToExist": true,
            "values": [
              "ITEM",
              "PREFERENCE"
            ]
          }
        ]
      },
      "maxLength": 10,
      "description": "False Value (text) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:235",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "235",
      "builderLabel": "Format Mask",
      "apexlangPath": "parameter.value.formatMask",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "1004",
            "path": "parameter.name",
            "hasToExist": true,
            "values": [
              "NUMBER_PARAMETER",
              "DATE_PARAMETER",
              "TIMESTAMP_PARAMETER",
              "TIMESTAMP_TZ_PARAMETER"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "1005",
            "path": "parameter.value.type",
            "hasToExist": true,
            "values": [
              "STATIC",
              "ITEM",
              "PREFERENCE"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Format Mask (combobox) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:1004",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "1004",
      "builderLabel": "Name",
      "apexlangPath": "parameter.name",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Name (component) in parameter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:1005",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "1005",
      "builderLabel": "Type",
      "apexlangPath": "parameter.value.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "staticValue",
          "returnValue": "STATIC",
          "label": "Static Value"
        },
        {
          "name": "restSourceDefault",
          "returnValue": "DEFAULT",
          "label": "REST Source Default"
        },
        {
          "name": "item",
          "returnValue": "ITEM",
          "label": "Item"
        },
        {
          "name": "sqlQuery",
          "returnValue": "SQL_QUERY",
          "label": "SQL Query (return single value)"
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
          "name": "collectionClob",
          "returnValue": "COLLECTION",
          "label": "Collection (CLOB)"
        },
        {
          "name": "preference",
          "returnValue": "PREFERENCE",
          "label": "Preference"
        },
        {
          "name": "parentColumn",
          "returnValue": "PARENT_COLUMN",
          "label": "Parent Column"
        },
        {
          "name": "null",
          "returnValue": "NULL",
          "label": "Null"
        }
      ],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "1004",
            "path": "parameter.name",
            "hasToExist": true,
            "values": [
              "IN_PARAMETER",
              "IN_OUT_PARAMETER"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "35",
            "path": "parameter.parameter.ignoreOutput",
            "hasToExist": true,
            "value": "N"
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:1006",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "1006",
      "builderLabel": "Static Value",
      "apexlangPath": "parameter.value.staticValue",
      "type": "TEXT EDITOR",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1005",
            "path": "parameter.value.type",
            "hasToExist": true,
            "value": "STATIC"
          },
          {
            "type": "NOT_FEATURES",
            "propertyId": "1004",
            "path": "parameter.name",
            "hasToExist": true,
            "values": [
              "BOOLEAN_PARAMETER"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Static Value (text editor) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:1007",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "1007",
      "builderLabel": "SQL Query",
      "apexlangPath": "parameter.value.sqlQuery",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1005",
            "path": "parameter.value.type",
            "hasToExist": true,
            "value": "SQL_QUERY"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:1009",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "1009",
      "builderLabel": "Item",
      "apexlangPath": "parameter.value.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1005",
            "path": "parameter.value.type",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 255,
      "description": "Item (item) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:1012",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "1012",
      "builderLabel": "Preference",
      "apexlangPath": "parameter.value.preference",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1005",
            "path": "parameter.value.type",
            "hasToExist": true,
            "value": "PREFERENCE"
          }
        ]
      },
      "maxLength": 255,
      "description": "Preference (text) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:1015",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "1015",
      "builderLabel": "Name",
      "apexlangPath": "parameter.value.name",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1005",
            "path": "parameter.value.type",
            "hasToExist": true,
            "value": "COLLECTION"
          }
        ]
      },
      "maxLength": 255,
      "description": "Name (text) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:2381",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "2381",
      "builderLabel": "Column",
      "apexlangPath": "parameter.value.column",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1005",
            "path": "parameter.value.type",
            "hasToExist": true,
            "value": "PARENT_COLUMN"
          }
        ]
      },
      "maxLength": null,
      "description": "Column (component) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:6060",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "6060",
      "builderLabel": "Language",
      "apexlangPath": "parameter.value.language",
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
            "propertyId": "1005",
            "path": "parameter.value.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:6061",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "6061",
      "builderLabel": "SQL Expression",
      "apexlangPath": "parameter.value.sqlExpression",
      "type": "SQL EXPRESSION CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "6060",
            "path": "parameter.value.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression custom) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:6062",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "6062",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "parameter.value.plsqlExpression",
      "type": "PLSQL EXPRESSION CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "6060",
            "path": "parameter.value.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression custom) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:6063",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "6063",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "parameter.value.javaScriptExpression",
      "type": "MLE JAVASCRIPT EXPRESSION CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "6060",
            "path": "parameter.value.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression custom) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:6080",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "6080",
      "builderLabel": "Language",
      "apexlangPath": "parameter.value.language",
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
            "propertyId": "1005",
            "path": "parameter.value.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:6081",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "6081",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "parameter.value.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "6080",
            "path": "parameter.value.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body custom) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8000:6082",
      "context": "parameter",
      "componentTypeId": "8000",
      "componentTitle": "Parameter",
      "parentContext": "region",
      "parentComponentTypeId": "5110",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "region.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "region.restSynchronization.useLocalTable",
            "hasToExist": false,
            "value": "N"
          }
        ]
      },
      "propertyId": "6082",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "parameter.value.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY CUSTOM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "6080",
            "path": "parameter.value.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body custom) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:4",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "4",
      "builderLabel": "Comments",
      "apexlangPath": "action.comments.comments",
      "type": "TEXT EDITOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Comments (text editor) in action.comments.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:24",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "24",
      "builderLabel": "Authorization Scheme",
      "apexlangPath": "action.security.authorizationScheme",
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
      "description": "Authorization Scheme (component) in action.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:38",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "38",
      "builderLabel": "Build Option",
      "apexlangPath": "action.config.buildOption",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Build Option (component) in action.config.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:97",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "97",
      "builderLabel": "Sequence",
      "apexlangPath": "action.layout.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in action.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:177",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "177",
      "builderLabel": "Label",
      "apexlangPath": "action.label",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "LABEL"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "TMPL_LABEL"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Label (text) in action.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:180",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "180",
      "builderLabel": "Static ID",
      "apexlangPath": "action.advanced.staticId",
      "type": "STATIC ID",
      "required": true,
      "defaultValue": "action",
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Static ID (static id) in action.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:183",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "183",
      "builderLabel": "Hot",
      "apexlangPath": "action.appearance.hot",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "IS_HOT"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "TMPL_IS_HOT"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Hot (yes no) in action.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:240",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "240",
      "builderLabel": "Position",
      "apexlangPath": "action.position",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Position (select list) in action.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:250",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "250",
      "builderLabel": "Execute Condition",
      "apexlangPath": "action.serverSideCondition.executeCondition",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "Y",
      "values": [
        {
          "name": "forEachRow",
          "returnValue": "Y",
          "label": "For Each Row"
        },
        {
          "name": "once",
          "returnValue": "N",
          "label": "Once"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "5100",
            "path": "action.serverSideCondition.type",
            "hasToExist": true
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "5100",
            "path": "action.serverSideCondition.type",
            "hasToExist": true,
            "value": "NEVER"
          }
        ]
      },
      "maxLength": null,
      "description": "Execute Condition (select list) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:259",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "259",
      "builderLabel": "Template",
      "apexlangPath": "action.template",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "TEMPLATE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Template (select list) in action.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:287",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "287",
      "builderLabel": "Show as Disabled",
      "apexlangPath": "action.appearance.showAsDisabled",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "IS_DISABLED"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "TMPL_IS_DISABLED"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show as Disabled (yes no) in action.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:602",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "602",
      "builderLabel": "Target",
      "apexlangPath": "action.behavior.target",
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
            "path": "action.behavior.type",
            "hasToExist": true,
            "value": "REDIRECT_PAGE"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Target (link_in_app) in action.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:603",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "603",
      "builderLabel": "Target",
      "apexlangPath": "action.behavior.target",
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
            "path": "action.behavior.type",
            "hasToExist": true,
            "value": "REDIRECT_APP"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Target (link_in_diff_app) in action.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:604",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "604",
      "builderLabel": "Target URL",
      "apexlangPath": "action.behavior.targetUrl",
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
            "path": "action.behavior.type",
            "hasToExist": true,
            "value": "REDIRECT_URL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Target URL (text) in action.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:739",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "739",
      "builderLabel": "Icon",
      "apexlangPath": "action.appearance.icon",
      "type": "ICON",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "1185",
            "path": "action.appearance.displayType",
            "hasToExist": true,
            "values": [
              "ICON",
              "TEXT_WITH_ICON"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Icon (icon) in action.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:740",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "740",
      "builderLabel": "CSS Classes",
      "apexlangPath": "action.appearance.cssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "CSS_CLASSES"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "TMPL_CSS_CLASSES"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "CSS Classes (combobox) in action.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:1182",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "1182",
      "builderLabel": "Type",
      "apexlangPath": "action.behavior.type",
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
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "LINK_URL"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "LINK",
              "TMPL_LINK_URL"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in action.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:1185",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "1185",
      "builderLabel": "Display Type",
      "apexlangPath": "action.appearance.displayType",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "TEXT",
      "values": [
        {
          "name": "text",
          "returnValue": "TEXT",
          "label": "Text"
        },
        {
          "name": "icon",
          "returnValue": "ICON",
          "label": "Icon"
        },
        {
          "name": "textWithIcon",
          "returnValue": "TEXT_WITH_ICON",
          "label": "Text with Icon"
        }
      ],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "ICON_CLASSES"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "TMPL_ICON_CLASSES"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Display Type (select list) in action.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:1192",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "1192",
      "builderLabel": "Link Attributes",
      "apexlangPath": "action.behavior.linkAttributes",
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
            "path": "action.behavior.type",
            "hasToExist": true,
            "values": [
              "REDIRECT_PAGE",
              "REDIRECT_APP",
              "REDIRECT_URL"
            ]
          },
          {
            "operator": "OR",
            "conditions": [
              {
                "type": "FEATURES",
                "propertyId": "259",
                "path": "action.template",
                "hasToExist": true,
                "values": [
                  "LINK_ATTR"
                ]
              },
              {
                "type": "FEATURES",
                "propertyId": "240",
                "path": "action.position",
                "hasToExist": true,
                "values": [
                  "LINK",
                  "TMPL_LINK_ATTR"
                ]
              }
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Link Attributes (text) in action.behavior.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5100",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5100",
      "builderLabel": "Type",
      "apexlangPath": "action.serverSideCondition.type",
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
      "description": "Type (select list) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5101",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5101",
      "builderLabel": "SQL Query",
      "apexlangPath": "action.serverSideCondition.sqlQuery",
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
            "path": "action.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5102",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5102",
      "builderLabel": "Value",
      "apexlangPath": "action.serverSideCondition.value",
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
            "path": "action.serverSideCondition.type",
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
      "description": "Value (text) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5103",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5103",
      "builderLabel": "Item",
      "apexlangPath": "action.serverSideCondition.item",
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
            "path": "action.serverSideCondition.type",
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
      "description": "Item (item) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5104",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5104",
      "builderLabel": "List",
      "apexlangPath": "action.serverSideCondition.list",
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
            "path": "action.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5105",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5105",
      "builderLabel": "Preference",
      "apexlangPath": "action.serverSideCondition.preference",
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
            "path": "action.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5106",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5106",
      "builderLabel": "Page",
      "apexlangPath": "action.serverSideCondition.page",
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
            "path": "action.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5107",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5107",
      "builderLabel": "Pages",
      "apexlangPath": "action.serverSideCondition.pages",
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
            "path": "action.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5108",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5108",
      "builderLabel": "Text",
      "apexlangPath": "action.serverSideCondition.text",
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
            "path": "action.serverSideCondition.type",
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
      "description": "Text (text) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5109",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5109",
      "builderLabel": "Value",
      "apexlangPath": "action.serverSideCondition.value",
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
            "path": "action.serverSideCondition.type",
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
      "description": "Value (text) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5110",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5110",
      "builderLabel": "Item",
      "apexlangPath": "action.serverSideCondition.item",
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
            "path": "action.serverSideCondition.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5111",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5111",
      "builderLabel": "Value",
      "apexlangPath": "action.serverSideCondition.value",
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
            "path": "action.serverSideCondition.type",
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
      "description": "Value (text) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5112",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5112",
      "builderLabel": "Language",
      "apexlangPath": "action.serverSideCondition.language",
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
            "path": "action.serverSideCondition.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5113",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5113",
      "builderLabel": "SQL Expression",
      "apexlangPath": "action.serverSideCondition.sqlExpression",
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
            "path": "action.serverSideCondition.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5114",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5114",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "action.serverSideCondition.plsqlExpression",
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
            "path": "action.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5115",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5115",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "action.serverSideCondition.javaScriptExpression",
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
            "path": "action.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5132",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5132",
      "builderLabel": "Language",
      "apexlangPath": "action.serverSideCondition.language",
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
            "path": "action.serverSideCondition.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5133",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5133",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "action.serverSideCondition.plsqlFunctionBody",
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
            "path": "action.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8615:5134",
      "context": "action",
      "componentTypeId": "8615",
      "componentTitle": "Action",
      "parentContext": "column",
      "parentComponentTypeId": "7030",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "STARTS_WITH",
            "propertyId": "271",
            "path": "column.type",
            "hasToExist": true,
            "value": "TMPL_"
          }
        ]
      },
      "propertyId": "5134",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "action.serverSideCondition.javaScriptFunctionBody",
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
            "path": "action.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in action.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8715:4",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:24",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:38",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:97",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:177",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:180",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:238",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:250",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          }
        ]
      },
      "propertyId": "250",
      "builderLabel": "Execute Condition",
      "apexlangPath": "menu.serverSideCondition.executeCondition",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "Y",
      "values": [
        {
          "name": "forEachRow",
          "returnValue": "Y",
          "label": "For Each Row"
        },
        {
          "name": "once",
          "returnValue": "N",
          "label": "Once"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
            "hasToExist": true
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "5100",
            "path": "menu.serverSideCondition.type",
            "hasToExist": true,
            "value": "NEVER"
          }
        ]
      },
      "maxLength": null,
      "description": "Execute Condition (select list) in menu.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:8715:296",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          }
        ]
      },
      "propertyId": "296",
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
      "id": "mmd:8715:602",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:603",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:604",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:739",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:1182",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:1192",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5100",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5101",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5102",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5103",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5104",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5105",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5106",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5107",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5108",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5109",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5110",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5111",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5112",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5113",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5114",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5115",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5132",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5133",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8715:5134",
      "context": "menu",
      "componentTypeId": "8715",
      "componentTitle": "Menu",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "240",
            "path": "action.position",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "259",
            "path": "action.template",
            "hasToExist": true,
            "values": [
              "MENU"
            ]
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
      "id": "mmd:8770:1",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:4",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:24",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:38",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:60",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:70",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:82",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:85",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:86",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:87",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:88",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:90",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:91",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:92",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:180",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:755",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:766",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:767",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:768",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:943",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:950",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5100",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5101",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5102",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5103",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5104",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5105",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5106",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5107",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5108",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5109",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5110",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5111",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5112",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5113",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5114",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5115",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5132",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5133",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:5134",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:89890006",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:89890007",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:89890008",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:89890009",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:89890010",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8770:89890011",
      "context": "triggerAction",
      "componentTypeId": "8770",
      "componentTitle": "Trigger Action",
      "parentContext": "action",
      "parentComponentTypeId": "8615",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1182",
            "path": "action.behavior.type",
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
      "id": "mmd:8780:1",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:4",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:24",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:38",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:60",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:70",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:82",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:85",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:86",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:87",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:88",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:90",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:91",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:92",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:180",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:755",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:766",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:767",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:768",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:943",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:950",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5100",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5101",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5102",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5103",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5104",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5105",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5106",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5107",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5108",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5109",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5110",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5111",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5112",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5113",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5114",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5115",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5132",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5133",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:5134",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:89890006",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:89890007",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:89890008",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:89890009",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:89890010",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
      "id": "mmd:8780:89890011",
      "context": "triggerAction",
      "componentTypeId": "8780",
      "componentTitle": "Trigger Action",
      "parentContext": "menu",
      "parentComponentTypeId": "8715",
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
    },
    {
      "id": "native:region/interactiveReport/app/actions_menu_structure",
      "context": "componentSetting",
      "scope": "app",
      "nativeType": "interactiveReport",
      "attributeKey": "actionsMenuStructure",
      "builderLabel": "Actions Menu Structure",
      "apexlangPath": "componentSetting.settings.actionsMenuStructure",
      "type": "selectList",
      "required": true,
      "defaultValue": "IG",
      "values": [
        {
          "name": "interactiveGrid",
          "label": "Interactive Grid",
          "returnValue": "IG"
        },
        {
          "name": "legacy",
          "label": "Legacy",
          "returnValue": "LEGACY"
        }
      ],
      "condition": {},
      "source": "SQLcl native declarations 26.1.0+3102",
      "description": "Actions Menu Structure setting for interactiveReport.",
      "descriptionOrigin": "apexrest-factual-summary",
      "sourceDigest": "a521f97622daaf0a52a673e222800bc8af18c3837a512d96693d1e9ca1219376"
    }
  ],
  "currentExamples": {
    "regions": [
      {
        "id": "page:1402/region:interactive-report-with-buttons",
        "pageId": 1402,
        "key": "interactive-report-with-buttons",
        "type": "interactiveReport",
        "template": "Interactive Report",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1402/region:simple-interactive-report",
        "pageId": 1402,
        "key": "simple-interactive-report",
        "type": "interactiveReport",
        "template": "Interactive Report",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3001/region:interactive-report",
        "pageId": 3001,
        "key": "interactive-report",
        "type": "interactiveReport",
        "template": "Interactive Report",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3002/region:ir",
        "pageId": 3002,
        "key": "ir",
        "type": "interactiveReport",
        "template": "Interactive Report",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#"
        ],
        "componentOptions": [],
        "settings": {}
      }
    ],
    "items": [],
    "buttons": [],
    "pages": []
  }
}
```

Complete option groups, defaults, presets and source context are available in component:source/parameters.
