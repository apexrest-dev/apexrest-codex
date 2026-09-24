# Interactive Grid: parameters

component:reports/interactive-grid

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
      "id": "mmd:5110:769",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "769",
      "builderLabel": "Master Region",
      "apexlangPath": "region.masterDetail.masterRegion",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_IG"
          }
        ]
      },
      "maxLength": null,
      "description": "Master Region (component) in region.masterDetail.",
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
      "id": "mmd:7910:40",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "40",
      "builderLabel": "Help Text",
      "apexlangPath": "attributes.help.helpText",
      "type": "HTML",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Help Text (html) in attributes.help.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:294",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:297",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:309",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:310",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:311",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
            "propertyId": "791",
            "path": "attributes.enableUsersTo.download",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:324",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:325",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:334",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:335",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:336",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "336",
      "builderLabel": "For Each Row",
      "apexlangPath": "attributes.detailView.forEachRow",
      "type": "HTML",
      "required": true,
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:337",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:559",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "condition": null,
      "maxLength": 4000,
      "description": "Initialization JavaScript Function (javascript) in attributes.componentAdvanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:560",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:561",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:761",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:770",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "condition": null,
      "maxLength": 32767,
      "description": "Enabled (yes no) in attributes.edit.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:771",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:772",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:773",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:774",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:775",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:776",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:777",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:778",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "778",
      "builderLabel": "Add Row If Empty",
      "apexlangPath": "attributes.edit.addRowIfEmpty",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
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
      "maxLength": 32767,
      "description": "Add Row If Empty (yes no) in attributes.edit.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:780",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:782",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "782",
      "builderLabel": "Fixed Row Height",
      "apexlangPath": "attributes.componentAppearance.fixedRowHeight",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Fixed Row Height (yes no) in attributes.componentAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:783",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "783",
      "builderLabel": "Type",
      "apexlangPath": "attributes.pagination.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "SCROLL",
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
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in attributes.pagination.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:784",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "784",
      "builderLabel": "Show Total Count",
      "apexlangPath": "attributes.pagination.showTotalCount",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Show Total Count (yes no) in attributes.pagination.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:785",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "785",
      "builderLabel": "Show",
      "apexlangPath": "attributes.toolbar.show",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Show (yes no) in attributes.toolbar.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:786",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "786",
      "builderLabel": "Controls",
      "apexlangPath": "attributes.toolbar.controls",
      "type": "CHECKBOXES",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "searchCol",
          "returnValue": "SEARCH_COLUMN",
          "label": "Search Column Selection"
        },
        {
          "name": "searchField",
          "returnValue": "SEARCH_FIELD",
          "label": "Search Field"
        },
        {
          "name": "actionsMenu",
          "returnValue": "ACTIONS_MENU",
          "label": "Actions Menu"
        },
        {
          "name": "resetButton",
          "returnValue": "RESET",
          "label": "Reset Button"
        },
        {
          "name": "saveButton",
          "returnValue": "SAVE",
          "label": "Save Button"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "785",
            "path": "attributes.toolbar.show",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Controls (checkboxes) in attributes.toolbar.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:787",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "787",
      "builderLabel": "Add Button Label",
      "apexlangPath": "attributes.toolbar.addButtonLabel",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "785",
            "path": "attributes.toolbar.show",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "EQUALS",
            "propertyId": "771",
            "path": "attributes.edit.allowedOperations",
            "hasToExist": true,
            "value": "i"
          }
        ]
      },
      "maxLength": 255,
      "description": "Add Button Label (text) in attributes.toolbar.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:788",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "788",
      "builderLabel": "Save Public Report",
      "apexlangPath": "attributes.enableUsersTo.savePublicReport",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Save Public Report (yes no) in attributes.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:789",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "789",
      "builderLabel": "Save Public Report Authorization",
      "apexlangPath": "attributes.enableUsersTo.savePublicReportAuthorization",
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
            "propertyId": "788",
            "path": "attributes.enableUsersTo.savePublicReport",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Save Public Report Authorization (component) in attributes.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:791",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "791",
      "builderLabel": "Download",
      "apexlangPath": "attributes.enableUsersTo.download",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Download (yes no) in attributes.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:792",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "792",
      "builderLabel": "Formats",
      "apexlangPath": "attributes.download.formats",
      "type": "CHECKBOXES",
      "required": false,
      "defaultValue": null,
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
          "name": "pdf",
          "returnValue": "PDF",
          "label": "PDF"
        },
        {
          "name": "excel",
          "returnValue": "XLSX",
          "label": "Excel"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "791",
            "path": "attributes.enableUsersTo.download",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:793",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
            "propertyId": "791",
            "path": "attributes.enableUsersTo.download",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:794",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "794",
      "builderLabel": "Custom Icon",
      "apexlangPath": "attributes.iconView.customIcon",
      "type": "HTML",
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
      "description": "Custom Icon (html) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:795",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "795",
      "builderLabel": "Icon Type",
      "apexlangPath": "attributes.iconView.iconType",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "CSS_CLASSES",
      "values": [
        {
          "name": "imageInUrl",
          "returnValue": "URL",
          "label": "Image in URL"
        },
        {
          "name": "iconCssClasses",
          "returnValue": "CSS_CLASSES",
          "label": "Icon CSS Classes"
        }
      ],
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
      "maxLength": null,
      "description": "Icon Type (select list) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:797",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "797",
      "builderLabel": "Icon URL",
      "apexlangPath": "attributes.iconView.iconUrl",
      "type": "REGION COLUMN",
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
          },
          {
            "type": "EQUALS",
            "propertyId": "795",
            "path": "attributes.iconView.iconType",
            "hasToExist": true,
            "value": "URL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Icon URL (region column) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:798",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "798",
      "builderLabel": "Icon",
      "apexlangPath": "attributes.iconView.icon",
      "type": "REGION COLUMN",
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
          },
          {
            "type": "EQUALS",
            "propertyId": "795",
            "path": "attributes.iconView.iconType",
            "hasToExist": true,
            "value": "CSS_CLASSES"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Icon (region column) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:799",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "799",
      "builderLabel": "Icon Attributes",
      "apexlangPath": "attributes.iconView.iconAttributes",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "795",
            "path": "attributes.iconView.iconType",
            "hasToExist": true,
            "value": "URL"
          }
        ]
      },
      "maxLength": 255,
      "description": "Icon Attributes (text) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:800",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "800",
      "builderLabel": "Link Target",
      "apexlangPath": "attributes.iconView.linkTarget",
      "type": "LINK",
      "required": false,
      "defaultValue": null,
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
      "description": "Link Target (link) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:801",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "801",
      "builderLabel": "Link Attributes",
      "apexlangPath": "attributes.iconView.linkAttributes",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "800",
            "path": "attributes.iconView.linkTarget",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "325",
            "path": "attributes.iconView.custom",
            "hasToExist": true,
            "value": "N"
          }
        ]
      },
      "maxLength": 255,
      "description": "Link Attributes (text) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:970",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "970",
      "builderLabel": "Label Column",
      "apexlangPath": "attributes.iconView.labelColumn",
      "type": "REGION COLUMN",
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
      "description": "Label Column (region column) in attributes.iconView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:1016",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "1016",
      "builderLabel": "Fixed Report Height",
      "apexlangPath": "attributes.heading.fixedReportHeight",
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
      "description": "Fixed Report Height (integer) in attributes.heading.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:1083",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "1083",
      "builderLabel": "Flashback",
      "apexlangPath": "attributes.enableUsersTo.flashback",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Flashback (yes no) in attributes.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:1084",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "1084",
      "builderLabel": "Define Chart View",
      "apexlangPath": "attributes.enableUsersTo.defineChartView",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Define Chart View (yes no) in attributes.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:1085",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "1085",
      "builderLabel": "Select First Row",
      "apexlangPath": "attributes.componentAppearance.selectFirstRow",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Select First Row (yes no) in attributes.componentAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:1089",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:1110",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
            "propertyId": "791",
            "path": "attributes.enableUsersTo.download",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7910:12915002",
      "context": "attributes",
      "componentTypeId": "7910",
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
            "value": "NATIVE_IG"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7920:180",
      "context": "columnGroup",
      "componentTypeId": "7920",
      "componentTitle": "Column Group",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7920:272",
      "context": "columnGroup",
      "componentTypeId": "7920",
      "componentTitle": "Column Group",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "272",
      "builderLabel": "Heading",
      "apexlangPath": "columnGroup.heading.heading",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Heading (text) in columnGroup.heading.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7920:804",
      "context": "columnGroup",
      "componentTypeId": "7920",
      "componentTitle": "Column Group",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "804",
      "builderLabel": "Alternative Label",
      "apexlangPath": "columnGroup.heading.alternativeLabel",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Alternative Label (text) in columnGroup.heading.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:4",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:24",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:38",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:40",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Help Text (html) in column.help.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:93",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "93",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:97",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "97",
      "builderLabel": "Sequence",
      "apexlangPath": "column.layout.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in column.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:103",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "103",
      "builderLabel": "Value Required",
      "apexlangPath": "column.validation.valueRequired",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "SESSION_STATE"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Value Required (yes no) in column.validation.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:111",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "FORMAT_MASK_ALL"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Format Mask (combobox) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:112",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "112",
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "FORMAT_MASK_DATE"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Format Mask (combobox) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:113",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "113",
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "FORMAT_MASK_NUMBER"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Format Mask (combobox) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:114",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "propertyId": "373",
            "path": "column.lov.type",
            "hasToExist": true,
            "value": "SHARED"
          }
        ]
      },
      "maxLength": null,
      "description": "List of Values (component) in column.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:115",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "115",
      "builderLabel": "Display Extra Values",
      "apexlangPath": "column.lov.displayExtraValues",
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
            "path": "column.lov.type",
            "hasToExist": true
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "93",
            "path": "column.type",
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
      "description": "Display Extra Values (yes no) in column.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:116",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "116",
      "builderLabel": "Display Null Value",
      "apexlangPath": "column.lov.displayNullValue",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "LOV_DISPLAY_NULL"
            ]
          },
          {
            "type": "NOT_NULL",
            "propertyId": "373",
            "path": "column.lov.type",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "Display Null Value (yes no) in column.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:117",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "117",
      "builderLabel": "Null Display Value",
      "apexlangPath": "column.lov.nullDisplayValue",
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
            "path": "column.lov.displayNullValue",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 255,
      "description": "Null Display Value (text) in column.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:118",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "118",
      "builderLabel": "Null Return Value",
      "apexlangPath": "column.lov.nullReturnValue",
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
            "path": "column.lov.displayNullValue",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 255,
      "description": "Null Return Value (text) in column.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:120",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "120",
      "builderLabel": "Items to Submit",
      "apexlangPath": "column.cascadingLov.itemsToSubmit",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "956",
            "path": "column.cascadingLov.parentColumns",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 4000,
      "description": "Items to Submit (item) in column.cascadingLov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:121",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "121",
      "builderLabel": "Parent Required",
      "apexlangPath": "column.cascadingLov.parentRequired",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "956",
            "path": "column.cascadingLov.parentColumns",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "Parent Required (yes no) in column.cascadingLov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:122",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "122",
      "builderLabel": "SQL Query",
      "apexlangPath": "column.lov.sqlQuery",
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
            "path": "column.lov.type",
            "hasToExist": true,
            "value": "SQL_QUERY"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in column.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:124",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "124",
      "builderLabel": "Width",
      "apexlangPath": "column.appearance.width",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "WIDTH"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Width (number) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:125",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "125",
      "builderLabel": "Maximum Length",
      "apexlangPath": "column.validation.maxLength",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "WIDTH"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Maximum Length (number) in column.validation.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:126",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "126",
      "builderLabel": "Height",
      "apexlangPath": "column.appearance.height",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "HEIGHT"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Height (number) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:127",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "127",
      "builderLabel": "Value Placeholder",
      "apexlangPath": "column.appearance.valuePlaceholder",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "PLACEHOLDER"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Value Placeholder (text) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:128",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "128",
      "builderLabel": "CSS Classes",
      "apexlangPath": "column.advanced.cssClasses",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "ELEMENT"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "CSS Classes (combobox) in column.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:129",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "129",
      "builderLabel": "Custom Attributes",
      "apexlangPath": "column.advanced.customAttributes",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "ELEMENT"
            ]
          }
        ]
      },
      "maxLength": 2000,
      "description": "Custom Attributes (combobox) in column.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:141",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "141",
      "builderLabel": "Database Column",
      "apexlangPath": "column.source.databaseColumn",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "815",
            "path": "column.source.type",
            "hasToExist": true,
            "value": "DB_COLUMN"
          }
        ]
      },
      "maxLength": 128,
      "description": "Database Column (text) in column.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:146",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "146",
      "builderLabel": "Static Value",
      "apexlangPath": "column.default.staticValue",
      "type": "TEXT EDITOR",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "823",
            "path": "column.default.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Static Value (text editor) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:174",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "ESCAPE_OUTPUT"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Escape Special Characters (yes no) in column.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:181",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "propertyId": "93",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:267",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:272",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "272",
      "builderLabel": "Heading",
      "apexlangPath": "column.heading.heading",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 4000,
      "description": "Heading (text) in column.heading.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:275",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Alignment (pill buttons) in column.heading.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:276",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Column Alignment (pill buttons) in column.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:288",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "propertyId": "811",
            "path": "column.columnFilter.lovType",
            "hasToExist": true,
            "value": "DISTINCT"
          },
          {
            "operator": "AND",
            "conditions": [
              {
                "type": "EQUALS",
                "propertyId": "807",
                "path": "column.columnFilter.enabled",
                "hasToExist": true,
                "value": "Y"
              },
              {
                "type": "IN_LIST",
                "propertyId": "818",
                "path": "column.source.dataType",
                "hasToExist": true,
                "values": [
                  "DATE",
                  "TIMESTAMP",
                  "TIMESTAMP_TZ",
                  "TIMESTAMP_LTZ"
                ]
              },
              {
                "operator": "OR",
                "conditions": [
                  {
                    "type": "NULL",
                    "propertyId": "373",
                    "path": "column.lov.type",
                    "hasToExist": false
                  },
                  {
                    "type": "NOT_FEATURES",
                    "propertyId": "93",
                    "path": "column.type",
                    "hasToExist": true,
                    "values": [
                      "JOIN_LOV"
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Date Ranges (select list) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:290",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "290",
      "builderLabel": "Link Text",
      "apexlangPath": "column.link.linkText",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "363",
            "path": "column.link.target",
            "hasToExist": true
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_HTML_EXPRESSION"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Link Text (text) in column.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:291",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "291",
      "builderLabel": "Link Attributes",
      "apexlangPath": "column.link.linkAttributes",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "363",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:363",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "LINK"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Target (link) in column.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:372",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "type": "EQUALS",
            "propertyId": "811",
            "path": "column.columnFilter.lovType",
            "hasToExist": true,
            "value": "SQL_QUERY"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:373",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "373",
      "builderLabel": "Type",
      "apexlangPath": "column.lov.type",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "LOV"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in column.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:374",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "374",
      "builderLabel": "Static Values",
      "apexlangPath": "column.lov.staticValues",
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
            "path": "column.lov.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Static Values (static lov) in column.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:397",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "SOURCE"
            ]
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_MARKDOWN_EDITOR",
              "NATIVE_PASSWORD",
              "NATIVE_PCT_GRAPH",
              "NATIVE_RICH_TEXT_EDITOR"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Value Identifies Row (yes no) in column.accessibility.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:409",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "409",
      "builderLabel": "Include In Export / Print",
      "apexlangPath": "column.exportPrinting.includeInExportPrint",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "SOURCE"
            ]
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "815",
            "path": "column.source.type",
            "hasToExist": true,
            "value": "NONE"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Include In Export / Print (yes no) in column.exportPrinting.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:461",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "461",
      "builderLabel": "Item",
      "apexlangPath": "column.default.item",
      "type": "ITEM",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "823",
            "path": "column.default.type",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Item (item) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:695",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "type": "EQUALS",
            "propertyId": "811",
            "path": "column.columnFilter.lovType",
            "hasToExist": true,
            "value": "SHARED"
          }
        ]
      },
      "maxLength": null,
      "description": "Named LOV (component) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:739",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "739",
      "builderLabel": "Icon",
      "apexlangPath": "column.appearance.icon",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "ICON"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Icon (icon) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:740",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "CSS Classes (combobox) in column.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:803",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "803",
      "builderLabel": "Column Initialization JavaScript Function",
      "apexlangPath": "column.advanced.columnInitJavaScriptFunction",
      "type": "JAVASCRIPT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "value": "NATIVE_ROW_SELECTOR"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Column Initialization JavaScript Function (javascript) in column.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:804",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Alternative Label (text) in column.heading.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:805",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "805",
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Group (component) in column.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:806",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "806",
      "builderLabel": "Use Group For",
      "apexlangPath": "column.layout.useGroupFor",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "BOTH",
      "values": [
        {
          "name": "both",
          "returnValue": "BOTH",
          "label": "Both"
        },
        {
          "name": "singleRowView",
          "returnValue": "SRV",
          "label": "Single Row View"
        },
        {
          "name": "heading",
          "returnValue": "HEADING",
          "label": "Heading"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "805",
            "path": "column.layout.group",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Use Group For (select list) in column.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:807",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "807",
      "builderLabel": "Enabled",
      "apexlangPath": "column.columnFilter.enabled",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "FILTER"
            ]
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "815",
            "path": "column.source.type",
            "hasToExist": true,
            "value": "NONE"
          },
          {
            "type": "NULL",
            "propertyId": "956",
            "path": "column.cascadingLov.parentColumns",
            "hasToExist": false
          }
        ]
      },
      "maxLength": 32767,
      "description": "Enabled (yes no) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:808",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "808",
      "builderLabel": "Performance Impacting Operators",
      "apexlangPath": "column.columnFilter.performanceImpactingOperators",
      "type": "CHECKBOXES",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "contains",
          "returnValue": "C",
          "label": "Contains"
        },
        {
          "name": "startsWith",
          "returnValue": "S",
          "label": "Starts With"
        },
        {
          "name": "caseInsensitive",
          "returnValue": "CASE_INSENSITIVE",
          "label": "Case Insensitive"
        },
        {
          "name": "regexp",
          "returnValue": "REGEXP",
          "label": "Regular Expression"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "807",
            "path": "column.columnFilter.enabled",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "operator": "OR",
            "conditions": [
              {
                "type": "FEATURES",
                "propertyId": "93",
                "path": "column.type",
                "hasToExist": true,
                "values": [
                  "JOIN_LOV"
                ]
              },
              {
                "type": "IN_LIST",
                "propertyId": "818",
                "path": "column.source.dataType",
                "hasToExist": true,
                "values": [
                  "VARCHAR2",
                  "CLOB"
                ]
              }
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Performance Impacting Operators (checkboxes) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:809",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "809",
      "builderLabel": "Text Case",
      "apexlangPath": "column.columnFilter.textCase",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "MIXED",
      "values": [
        {
          "name": "upper",
          "returnValue": "UPPER",
          "label": "Upper"
        },
        {
          "name": "lower",
          "returnValue": "LOWER",
          "label": "Lower"
        },
        {
          "name": "mixed",
          "returnValue": "MIXED",
          "label": "Mixed"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "807",
            "path": "column.columnFilter.enabled",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "operator": "OR",
            "conditions": [
              {
                "type": "FEATURES",
                "propertyId": "93",
                "path": "column.type",
                "hasToExist": true,
                "values": [
                  "JOIN_LOV"
                ]
              },
              {
                "type": "EQUALS",
                "propertyId": "818",
                "path": "column.source.dataType",
                "hasToExist": true,
                "value": "VARCHAR2"
              }
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Text Case (select list) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:811",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "811",
      "builderLabel": "LOV Type",
      "apexlangPath": "column.columnFilter.lovType",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "DISTINCT",
      "values": [
        {
          "name": "none",
          "returnValue": "NONE",
          "label": "None"
        },
        {
          "name": "distinctColumn",
          "returnValue": "DISTINCT",
          "label": "Distinct Column"
        },
        {
          "name": "sqlQuery",
          "returnValue": "SQL_QUERY",
          "label": "SQL Query"
        },
        {
          "name": "sharedComponent",
          "returnValue": "SHARED",
          "label": "Shared Component"
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
        },
        {
          "name": "useLov",
          "returnValue": "LOV",
          "label": "Use List of Values"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "807",
            "path": "column.columnFilter.enabled",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "LOV Type (select list) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:812",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "812",
      "builderLabel": "Exact Match",
      "apexlangPath": "column.columnFilter.exactMatch",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "811",
            "path": "column.columnFilter.lovType",
            "hasToExist": true,
            "value": "NONE"
          },
          {
            "operator": "AND",
            "conditions": [
              {
                "type": "EQUALS",
                "propertyId": "807",
                "path": "column.columnFilter.enabled",
                "hasToExist": true,
                "value": "Y"
              },
              {
                "operator": "OR",
                "conditions": [
                  {
                    "type": "FEATURES",
                    "propertyId": "93",
                    "path": "column.type",
                    "hasToExist": true,
                    "values": [
                      "JOIN_LOV"
                    ]
                  },
                  {
                    "type": "EQUALS",
                    "propertyId": "818",
                    "path": "column.source.dataType",
                    "hasToExist": true,
                    "value": "VARCHAR2"
                  }
                ]
              }
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Exact Match (yes no) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:813",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "813",
      "builderLabel": "Static Values",
      "apexlangPath": "column.columnFilter.staticValues",
      "type": "TEXT EDITOR",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "811",
            "path": "column.columnFilter.lovType",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Static Values (text editor) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:815",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "815",
      "builderLabel": "Type",
      "apexlangPath": "column.source.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "DB_COLUMN",
      "values": [
        {
          "name": "databaseColumn",
          "returnValue": "DB_COLUMN",
          "label": "Database Column"
        },
        {
          "name": "sqlExpression",
          "returnValue": "SQL_EXPRESSION",
          "label": "SQL Expression"
        },
        {
          "name": "none",
          "returnValue": "NONE",
          "label": "None"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "SOURCE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in column.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:817",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "817",
      "builderLabel": "SQL Expression",
      "apexlangPath": "column.source.sqlExpression",
      "type": "SQL EXPRESSION",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "815",
            "path": "column.source.type",
            "hasToExist": true,
            "value": "SQL_EXPRESSION"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression) in column.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:818",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "818",
      "builderLabel": "Data Type",
      "apexlangPath": "column.source.dataType",
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
            "type": "IN_LIST",
            "propertyId": "815",
            "path": "column.source.type",
            "hasToExist": true,
            "values": [
              "DB_COLUMN",
              "SQL_EXPRESSION"
            ]
          }
        ]
      },
      "maxLength": 128,
      "description": "Data Type (select list) in column.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:819",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "819",
      "builderLabel": "Query Only",
      "apexlangPath": "column.source.queryOnly",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "815",
            "path": "column.source.type",
            "hasToExist": true,
            "value": "DB_COLUMN"
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "818",
            "path": "column.source.dataType",
            "hasToExist": true,
            "value": "ROWID"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Query Only (yes no) in column.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:820",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
            "type": "EQUALS",
            "propertyId": "815",
            "path": "column.source.type",
            "hasToExist": true,
            "value": "DB_COLUMN"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Primary Key (yes no) in column.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:821",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "821",
      "builderLabel": "Master Column",
      "apexlangPath": "column.masterDetail.masterColumn",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "815",
            "path": "column.source.type",
            "hasToExist": true,
            "value": "DB_COLUMN"
          },
          {
            "type": "IN_LIST",
            "propertyId": "818",
            "path": "column.source.dataType",
            "hasToExist": true,
            "values": [
              "VARCHAR2",
              "NUMBER",
              "DATE",
              "TIMESTAMP",
              "TIMESTAMP_TZ",
              "TIMESTAMP_LTZ"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Master Column (component) in column.masterDetail.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:822",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "822",
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
            "type": "NOT_EQUALS",
            "propertyId": "815",
            "path": "column.source.type",
            "hasToExist": true,
            "value": "NONE"
          },
          {
            "type": "IN_LIST",
            "propertyId": "818",
            "path": "column.source.dataType",
            "hasToExist": true,
            "values": [
              "VARCHAR2",
              "NUMBER",
              "DATE",
              "TIMESTAMP",
              "TIMESTAMP_TZ",
              "TIMESTAMP_LTZ",
              "INTERVAL_D2S",
              "INTERVAL_Y2M"
            ]
          },
          {
            "type": "NULL",
            "propertyId": "956",
            "path": "column.cascadingLov.parentColumns",
            "hasToExist": false
          },
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          },
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "SOURCE"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Sort (yes no) in column.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:823",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "823",
      "builderLabel": "Type",
      "apexlangPath": "column.default.type",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "SOURCE"
            ]
          },
          {
            "type": "NULL",
            "propertyId": "821",
            "path": "column.masterDetail.masterColumn",
            "hasToExist": false
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:824",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "824",
      "builderLabel": "SQL Query (return single value)",
      "apexlangPath": "column.default.sqlQuerySingleValue",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "823",
            "path": "column.default.type",
            "hasToExist": true,
            "value": "SQL_QUERY"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (return single value) (sql) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:825",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "825",
      "builderLabel": "SQL Query (return multiple values)",
      "apexlangPath": "column.default.sqlQueryMultipleValues",
      "type": "SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "823",
            "path": "column.default.type",
            "hasToExist": true,
            "value": "SQL_QUERY_COLON"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (return multiple values) (sql) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:826",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "826",
      "builderLabel": "Sequence",
      "apexlangPath": "column.default.sequence",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "823",
            "path": "column.default.type",
            "hasToExist": true,
            "value": "SEQUENCE"
          }
        ]
      },
      "maxLength": 128,
      "description": "Sequence (text) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:827",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "827",
      "builderLabel": "Duplicate Copies Existing Value",
      "apexlangPath": "column.default.duplicateCopiesExistingValue",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "SOURCE"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "819",
            "path": "column.source.queryOnly",
            "hasToExist": true,
            "value": "N"
          },
          {
            "type": "NULL",
            "propertyId": "821",
            "path": "column.masterDetail.masterColumn",
            "hasToExist": false
          }
        ]
      },
      "maxLength": 32767,
      "description": "Duplicate Copies Existing Value (yes no) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:828",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "828",
      "builderLabel": "Execute",
      "apexlangPath": "column.readOnly.execute",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "N",
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
            "propertyId": "5050",
            "path": "column.readOnly.type",
            "hasToExist": true
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "5050",
            "path": "column.readOnly.type",
            "hasToExist": true,
            "value": "NEVER"
          }
        ]
      },
      "maxLength": null,
      "description": "Execute (select list) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:943",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "943",
      "builderLabel": "Initialization JavaScript Function",
      "apexlangPath": "column.advanced.initJavaScriptFunction",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "INIT_JAVASCRIPT_CODE"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Initialization JavaScript Function (javascript) in column.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:956",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "956",
      "builderLabel": "Parent Column(s)",
      "apexlangPath": "column.cascadingLov.parentColumns",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "CASCADING_LOV"
            ]
          },
          {
            "type": "NOT_NULL",
            "propertyId": "373",
            "path": "column.lov.type",
            "hasToExist": true
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "373",
            "path": "column.lov.type",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Parent Column(s) (item) in column.cascadingLov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:1047",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "1047",
      "builderLabel": "Stretch",
      "apexlangPath": "column.layout.stretch",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "never",
          "returnValue": "N",
          "label": "Never"
        },
        {
          "name": "always",
          "returnValue": "A",
          "label": "Always"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Stretch (select list) in column.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:1086",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "1086",
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
            "type": "FEATURES",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "VISIBLE"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Hide (yes no) in column.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:1087",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "1087",
      "builderLabel": "Control Break/Aggregate",
      "apexlangPath": "column.enableUsersTo.controlBreakAggregate",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "822",
            "path": "column.enableUsersTo.sort",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Control Break/Aggregate (yes no) in column.enableUsersTo.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:1222",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "1222",
      "builderLabel": "Separator",
      "apexlangPath": "column.multipleValues.separator",
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
            "path": "column.multipleValues.type",
            "hasToExist": true,
            "value": "SEPARATED"
          },
          {
            "type": "EQUALS",
            "propertyId": "2363",
            "path": "column.multipleValues.type",
            "hasToExist": true,
            "value": "SEPARATED"
          }
        ]
      },
      "maxLength": 5,
      "description": "Separator (text) in column.multipleValues.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:1758",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "1758",
      "builderLabel": "Data Type",
      "apexlangPath": "column.sessionState.dataType",
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
        }
      ],
      "condition": null,
      "maxLength": 128,
      "description": "Data Type (select list) in column.sessionState.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:2360",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "2360",
      "builderLabel": "Type",
      "apexlangPath": "column.multipleValues.type",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "MULTI_VALUE_ALWAYS"
            ]
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SELECT_LIST"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in column.multipleValues.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:2363",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "2363",
      "builderLabel": "Type",
      "apexlangPath": "column.multipleValues.type",
      "type": "SELECT LIST",
      "required": false,
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "MULTI_VALUE_OPTIONAL"
            ]
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "93",
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "NATIVE_SELECT_LIST"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in column.multipleValues.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5050",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5050",
      "builderLabel": "Type",
      "apexlangPath": "column.readOnly.type",
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
            "path": "column.type",
            "hasToExist": true,
            "values": [
              "READONLY"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5051",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5051",
      "builderLabel": "SQL Query",
      "apexlangPath": "column.readOnly.sqlQuery",
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
            "path": "column.readOnly.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5052",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5052",
      "builderLabel": "Value",
      "apexlangPath": "column.readOnly.value",
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
            "path": "column.readOnly.type",
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
      "description": "Value (text) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5053",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5053",
      "builderLabel": "Item",
      "apexlangPath": "column.readOnly.item",
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
            "path": "column.readOnly.type",
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
      "description": "Item (item) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5054",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5054",
      "builderLabel": "List",
      "apexlangPath": "column.readOnly.list",
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
            "path": "column.readOnly.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5055",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5055",
      "builderLabel": "Preference",
      "apexlangPath": "column.readOnly.preference",
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
            "path": "column.readOnly.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5056",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5056",
      "builderLabel": "Page",
      "apexlangPath": "column.readOnly.page",
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
            "path": "column.readOnly.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5057",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5057",
      "builderLabel": "Pages",
      "apexlangPath": "column.readOnly.pages",
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
            "path": "column.readOnly.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5058",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5058",
      "builderLabel": "Text",
      "apexlangPath": "column.readOnly.text",
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
            "path": "column.readOnly.type",
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
      "description": "Text (text) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5059",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5059",
      "builderLabel": "Value",
      "apexlangPath": "column.readOnly.value",
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
            "path": "column.readOnly.type",
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
      "description": "Value (text) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5060",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5060",
      "builderLabel": "Item",
      "apexlangPath": "column.readOnly.item",
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
            "path": "column.readOnly.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5061",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5061",
      "builderLabel": "Value",
      "apexlangPath": "column.readOnly.value",
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
            "path": "column.readOnly.type",
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
      "description": "Value (text) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5062",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5062",
      "builderLabel": "Language",
      "apexlangPath": "column.readOnly.language",
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
            "path": "column.readOnly.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5063",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5063",
      "builderLabel": "SQL Expression",
      "apexlangPath": "column.readOnly.sqlExpression",
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
            "path": "column.readOnly.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5064",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5064",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "column.readOnly.plsqlExpression",
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
            "path": "column.readOnly.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5065",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5065",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "column.readOnly.javaScriptExpression",
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
            "path": "column.readOnly.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5082",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5082",
      "builderLabel": "Language",
      "apexlangPath": "column.readOnly.language",
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
            "path": "column.readOnly.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5083",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5083",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "column.readOnly.plsqlFunctionBody",
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
            "path": "column.readOnly.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5084",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5084",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "column.readOnly.javaScriptFunctionBody",
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
            "path": "column.readOnly.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in column.readOnly.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5100",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5101",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5102",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5103",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5104",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5105",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5106",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5107",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5108",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5109",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5110",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5111",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5112",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5113",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5114",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5115",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5132",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5133",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5134",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5290",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5290",
      "builderLabel": "Language",
      "apexlangPath": "column.default.language",
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
            "propertyId": "823",
            "path": "column.default.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5291",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5291",
      "builderLabel": "SQL Expression",
      "apexlangPath": "column.default.sqlExpression",
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
            "path": "column.default.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression custom) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5292",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5292",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "column.default.plsqlExpression",
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
            "path": "column.default.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression custom) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5293",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5293",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "column.default.javaScriptExpression",
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
            "path": "column.default.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression custom) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5310",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5310",
      "builderLabel": "Language",
      "apexlangPath": "column.default.language",
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
            "propertyId": "823",
            "path": "column.default.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5311",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5311",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "column.default.plsqlFunctionBody",
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
            "path": "column.default.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body custom) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5312",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5312",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "column.default.javaScriptFunctionBody",
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
            "path": "column.default.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body custom) in column.default.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5320",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5320",
      "builderLabel": "Language",
      "apexlangPath": "column.lov.language",
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
            "path": "column.lov.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in column.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5321",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5321",
      "builderLabel": "PL/SQL Function Body returning SQL Query",
      "apexlangPath": "column.lov.plsqlFunctionBody",
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
            "path": "column.lov.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Function Body returning SQL Query (plsql function body sql) in column.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5322",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5322",
      "builderLabel": "JavaScript Function Body returning SQL Query",
      "apexlangPath": "column.lov.javaScriptFunctionBody",
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
            "path": "column.lov.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "JavaScript Function Body returning SQL Query (mle javascript function body sql) in column.lov.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5340",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5340",
      "builderLabel": "Language",
      "apexlangPath": "column.columnFilter.language",
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
            "propertyId": "811",
            "path": "column.columnFilter.lovType",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5341",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5341",
      "builderLabel": "PL/SQL Function Body returning SQL Query",
      "apexlangPath": "column.columnFilter.plsqlFunctionBody",
      "type": "PLSQL FUNCTION BODY SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5340",
            "path": "column.columnFilter.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Function Body returning SQL Query (plsql function body sql) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7930:5342",
      "context": "column",
      "componentTypeId": "7930",
      "componentTitle": "Column",
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
            "value": "NATIVE_IG"
          }
        ]
      },
      "propertyId": "5342",
      "builderLabel": "JavaScript Function Body returning SQL Query",
      "apexlangPath": "column.columnFilter.javaScriptFunctionBody",
      "type": "MLE JAVASCRIPT FUNCTION BODY SQL",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "5340",
            "path": "column.columnFilter.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "JavaScript Function Body returning SQL Query (mle javascript function body sql) in column.columnFilter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:700",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:701",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:702",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:703",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:704",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:705",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:706",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:707",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:708",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:709",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:710",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:711",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:712",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:713",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:714",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:715",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:716",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:717",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:718",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:719",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:720",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:721",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:722",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:723",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:724",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:725",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:726",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:727",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7940:728",
      "context": "printAttributes",
      "componentTypeId": "7940",
      "componentTitle": "Print Attributes",
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
            "value": "NATIVE_IG"
          },
          {
            "type": "IN_LIST",
            "propertyId": "792",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7950:1",
      "context": "savedReport",
      "componentTypeId": "7950",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7910",
      "componentCondition": null,
      "propertyId": "1",
      "builderLabel": "Name",
      "apexlangPath": "savedReport.name",
      "type": "TEXT",
      "required": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "hasToExist": true,
            "value": "PRIMARY",
            "propertyId": "1117"
          }
        ]
      },
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Name (text) in savedReport.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7950:24",
      "context": "savedReport",
      "componentTypeId": "7950",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7910",
      "componentCondition": null,
      "propertyId": "24",
      "builderLabel": "Authorization Scheme",
      "apexlangPath": "savedReport.security.authorizationScheme",
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
      "description": "Authorization Scheme (component) in savedReport.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7950:1117",
      "context": "savedReport",
      "componentTypeId": "7950",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7910",
      "componentCondition": null,
      "propertyId": "1117",
      "builderLabel": "Visibility",
      "apexlangPath": "savedReport.visibility",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "primary",
          "returnValue": "PRIMARY",
          "label": "Primary"
        },
        {
          "name": "alternative",
          "returnValue": "ALTERNATIVE",
          "label": "Alternative"
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7950:1118",
      "context": "savedReport",
      "componentTypeId": "7950",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7910",
      "componentCondition": null,
      "propertyId": "1118",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7950:12760007",
      "context": "savedReport",
      "componentTypeId": "7950",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7910",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7950:12760014",
      "context": "savedReport",
      "componentTypeId": "7950",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7910",
      "componentCondition": null,
      "propertyId": "12760014",
      "builderLabel": "Minutes Ago",
      "apexlangPath": "savedReport.flashback.minutesAgo",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Minutes Ago (number) in savedReport.flashback.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7950:12760015",
      "context": "savedReport",
      "componentTypeId": "7950",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7910",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7950:12760065",
      "context": "savedReport",
      "componentTypeId": "7950",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7910",
      "componentCondition": null,
      "propertyId": "12760065",
      "builderLabel": "Default",
      "apexlangPath": "savedReport.view.default",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "icon",
          "returnValue": "ICON",
          "label": "Icon"
        },
        {
          "name": "grid",
          "returnValue": "GRID",
          "label": "Grid"
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
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Default (select list) in savedReport.view.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7950:12760066",
      "context": "savedReport",
      "componentTypeId": "7950",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7910",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7950:12760067",
      "context": "savedReport",
      "componentTypeId": "7950",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7910",
      "componentCondition": null,
      "propertyId": "12760067",
      "builderLabel": "Settings Area Expanded",
      "apexlangPath": "savedReport.view.settingsAreaExpanded",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Settings Area Expanded (yes no) in savedReport.view.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7950:12760068",
      "context": "savedReport",
      "componentTypeId": "7950",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7910",
      "componentCondition": null,
      "propertyId": "12760068",
      "builderLabel": "Stretch Columns",
      "apexlangPath": "savedReport.view.stretchColumns",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Stretch Columns (yes no) in savedReport.view.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7950:12760069",
      "context": "savedReport",
      "componentTypeId": "7950",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7910",
      "componentCondition": null,
      "propertyId": "12760069",
      "builderLabel": "Exclude Null Values",
      "apexlangPath": "savedReport.singleRowView.excludeNullValues",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Exclude Null Values (yes no) in savedReport.singleRowView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7950:12760070",
      "context": "savedReport",
      "componentTypeId": "7950",
      "componentTitle": "Saved Report",
      "parentContext": "attributes",
      "parentComponentTypeId": "7910",
      "componentCondition": null,
      "propertyId": "12760070",
      "builderLabel": "Displayed Columns",
      "apexlangPath": "savedReport.singleRowView.displayedColumns",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Displayed Columns (yes no) in savedReport.singleRowView.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7951:97",
      "context": "displayColumn",
      "componentTypeId": "7951",
      "componentTitle": "Display Column",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7951:737",
      "context": "displayColumn",
      "componentTypeId": "7951",
      "componentTitle": "Display Column",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "737",
      "builderLabel": "Show",
      "apexlangPath": "displayColumn.layout.show",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Show (yes no) in displayColumn.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7951:12760101",
      "context": "displayColumn",
      "componentTypeId": "7951",
      "componentTitle": "Display Column",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760101",
      "builderLabel": "Column",
      "apexlangPath": "displayColumn.column",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Column (select list) in displayColumn.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7951:12760104",
      "context": "displayColumn",
      "componentTypeId": "7951",
      "componentTitle": "Display Column",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760104",
      "builderLabel": "Frozen",
      "apexlangPath": "displayColumn.layout.frozen",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Frozen (yes no) in displayColumn.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7951:12760105",
      "context": "displayColumn",
      "componentTypeId": "7951",
      "componentTitle": "Display Column",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760105",
      "builderLabel": "Width",
      "apexlangPath": "displayColumn.layout.width",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Width (number) in displayColumn.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7952:12760030",
      "context": "filter",
      "componentTypeId": "7952",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760030",
      "builderLabel": "Type",
      "apexlangPath": "filter.condition.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "COLUMN",
      "values": [
        {
          "name": "column",
          "returnValue": "COLUMN",
          "label": "Column"
        },
        {
          "name": "rowSearch",
          "returnValue": "ROW",
          "label": "Row Search"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7952:12760033",
      "context": "filter",
      "componentTypeId": "7952",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760033",
      "builderLabel": "Operator",
      "apexlangPath": "filter.condition.operator",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "EQ",
      "values": [
        {
          "name": "equals",
          "returnValue": "EQ",
          "label": "equals"
        },
        {
          "name": "notEquals",
          "returnValue": "NEQ",
          "label": "not equals"
        },
        {
          "name": "greaterThan",
          "returnValue": "GT",
          "label": "greater than"
        },
        {
          "name": "greaterThanOrEquals",
          "returnValue": "GTE",
          "label": "greater than or equals"
        },
        {
          "name": "lessThan",
          "returnValue": "LT",
          "label": "less than"
        },
        {
          "name": "lessThanOrEquals",
          "returnValue": "LTE",
          "label": "less than or equals"
        },
        {
          "name": "isEmpty",
          "returnValue": "N",
          "label": "is empty"
        },
        {
          "name": "isNotEmpty",
          "returnValue": "NN",
          "label": "is not empty"
        },
        {
          "name": "in",
          "returnValue": "IN",
          "label": "in"
        },
        {
          "name": "notIn",
          "returnValue": "NIN",
          "label": "not in"
        },
        {
          "name": "between",
          "returnValue": "BETWEEN",
          "label": "between"
        },
        {
          "name": "notBetween",
          "returnValue": "NBETWEEN",
          "label": "not between"
        },
        {
          "name": "contains",
          "returnValue": "C",
          "label": "contains"
        },
        {
          "name": "doesNotContain",
          "returnValue": "NC",
          "label": "does not contain"
        },
        {
          "name": "startsWith",
          "returnValue": "S",
          "label": "starts with"
        },
        {
          "name": "doesNotStartWith",
          "returnValue": "NS",
          "label": "does not start with"
        },
        {
          "name": "matchesRegexp",
          "returnValue": "REGEXP",
          "label": "matches regular expression"
        },
        {
          "name": "inTheLast",
          "returnValue": "LAST",
          "label": "in the last"
        },
        {
          "name": "notInTheLast",
          "returnValue": "NLAST",
          "label": "not in the last"
        },
        {
          "name": "inTheNext",
          "returnValue": "NEXT",
          "label": "in the next"
        },
        {
          "name": "notInTheNext",
          "returnValue": "NNEXT",
          "label": "not in the next"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760030",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          }
        ]
      },
      "maxLength": null,
      "description": "Operator (select list) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7952:12760034",
      "context": "filter",
      "componentTypeId": "7952",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
            "propertyId": "12760030",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "12760033",
            "path": "filter.condition.operator",
            "hasToExist": true,
            "values": [
              "N",
              "NN",
              "BETWEEN",
              "NBETWEEN",
              "LAST",
              "NLAST",
              "NEXT",
              "NNEXT"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7952:12760035",
      "context": "filter",
      "componentTypeId": "7952",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
            "propertyId": "12760030",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          },
          {
            "type": "IN_LIST",
            "propertyId": "12760033",
            "path": "filter.condition.operator",
            "hasToExist": true,
            "values": [
              "LAST",
              "NLAST",
              "NEXT",
              "NNEXT"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Value (number) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7952:12760037",
      "context": "filter",
      "componentTypeId": "7952",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
            "propertyId": "12760030",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "ROW"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Search (text) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7952:12760038",
      "context": "filter",
      "componentTypeId": "7952",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
            "propertyId": "12760030",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          },
          {
            "type": "IN_LIST",
            "propertyId": "12760033",
            "path": "filter.condition.operator",
            "hasToExist": true,
            "values": [
              "BETWEEN",
              "NBETWEEN"
            ]
          }
        ]
      },
      "maxLength": 1900,
      "description": "From (text) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7952:12760039",
      "context": "filter",
      "componentTypeId": "7952",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
            "propertyId": "12760030",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          },
          {
            "type": "IN_LIST",
            "propertyId": "12760033",
            "path": "filter.condition.operator",
            "hasToExist": true,
            "values": [
              "BETWEEN",
              "NBETWEEN"
            ]
          }
        ]
      },
      "maxLength": 1900,
      "description": "To (text) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7952:12760041",
      "context": "filter",
      "componentTypeId": "7952",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760041",
      "builderLabel": "Unit",
      "apexlangPath": "filter.condition.unit",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "min",
          "returnValue": "MI",
          "label": "minutes"
        },
        {
          "name": "hours",
          "returnValue": "H",
          "label": "hours"
        },
        {
          "name": "days",
          "returnValue": "D",
          "label": "days"
        },
        {
          "name": "weeks",
          "returnValue": "W",
          "label": "weeks"
        },
        {
          "name": "months",
          "returnValue": "M",
          "label": "months"
        },
        {
          "name": "years",
          "returnValue": "Y",
          "label": "years"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760030",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          },
          {
            "type": "IN_LIST",
            "propertyId": "12760033",
            "path": "filter.condition.operator",
            "hasToExist": true,
            "values": [
              "LAST",
              "NLAST",
              "NEXT",
              "NNEXT"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Unit (select list) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7952:12760042",
      "context": "filter",
      "componentTypeId": "7952",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760042",
      "builderLabel": "Case Sensitive",
      "apexlangPath": "filter.condition.caseSensitive",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760030",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "ROW"
          },
          {
            "type": "IN_LIST",
            "propertyId": "12760033",
            "path": "filter.condition.operator",
            "hasToExist": true,
            "values": [
              "C",
              "NC",
              "S",
              "NS",
              "REGEXP"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Case Sensitive (yes no) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7952:12760103",
      "context": "filter",
      "componentTypeId": "7952",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7952:12760111",
      "context": "filter",
      "componentTypeId": "7952",
      "componentTitle": "Filter",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760111",
      "builderLabel": "Column",
      "apexlangPath": "filter.condition.column",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760030",
            "path": "filter.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          }
        ]
      },
      "maxLength": null,
      "description": "Column (select list) in filter.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7953:12760001",
      "context": "sort",
      "componentTypeId": "7953",
      "componentTitle": "Sort",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760001",
      "builderLabel": "Sequence",
      "apexlangPath": "sort.sort.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in sort.sort.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7953:12760011",
      "context": "sort",
      "componentTypeId": "7953",
      "componentTitle": "Sort",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7953:12760012",
      "context": "sort",
      "componentTypeId": "7953",
      "componentTitle": "Sort",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760012",
      "builderLabel": "Nulls",
      "apexlangPath": "sort.sort.nulls",
      "type": "SELECT LIST",
      "required": true,
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7953:12760101",
      "context": "sort",
      "componentTypeId": "7953",
      "componentTitle": "Sort",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760101",
      "builderLabel": "Column",
      "apexlangPath": "sort.column",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Column (select list) in sort.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7954:180",
      "context": "aggregate",
      "componentTypeId": "7954",
      "componentTitle": "Aggregate",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "180",
      "builderLabel": "Static ID",
      "apexlangPath": "aggregate.advanced.staticId",
      "type": "STATIC ID",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Static ID (static id) in aggregate.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7954:12760013",
      "context": "aggregate",
      "componentTypeId": "7954",
      "componentTitle": "Aggregate",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7954:12760102",
      "context": "aggregate",
      "componentTypeId": "7954",
      "componentTitle": "Aggregate",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760102",
      "builderLabel": "Column",
      "apexlangPath": "aggregate.aggregate.column",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Column (select list) in aggregate.aggregate.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7954:12760103",
      "context": "aggregate",
      "componentTypeId": "7954",
      "componentTitle": "Aggregate",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760103",
      "builderLabel": "Enabled",
      "apexlangPath": "aggregate.advanced.enabled",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Enabled (yes no) in aggregate.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7954:12760112",
      "context": "aggregate",
      "componentTypeId": "7954",
      "componentTitle": "Aggregate",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760112",
      "builderLabel": "Tooltip",
      "apexlangPath": "aggregate.aggregate.tooltip",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Tooltip (text) in aggregate.aggregate.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7954:12760113",
      "context": "aggregate",
      "componentTypeId": "7954",
      "componentTitle": "Aggregate",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760113",
      "builderLabel": "Show Grand Total",
      "apexlangPath": "aggregate.aggregate.showGrandTotal",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Show Grand Total (yes no) in aggregate.aggregate.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7955:12760003",
      "context": "controlBreak",
      "componentTypeId": "7955",
      "componentTitle": "Control Break",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760003",
      "builderLabel": "Sequence",
      "apexlangPath": "controlBreak.layout.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in controlBreak.layout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7955:12760011",
      "context": "controlBreak",
      "componentTypeId": "7955",
      "componentTitle": "Control Break",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760011",
      "builderLabel": "Direction",
      "apexlangPath": "controlBreak.sort.direction",
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
      "description": "Direction (select list) in controlBreak.sort.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7955:12760012",
      "context": "controlBreak",
      "componentTypeId": "7955",
      "componentTitle": "Control Break",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760012",
      "builderLabel": "Nulls",
      "apexlangPath": "controlBreak.sort.nulls",
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
      "description": "Nulls (select list) in controlBreak.sort.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7955:12760101",
      "context": "controlBreak",
      "componentTypeId": "7955",
      "componentTitle": "Control Break",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760101",
      "builderLabel": "Column",
      "apexlangPath": "controlBreak.column",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Column (select list) in controlBreak.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7955:12760103",
      "context": "controlBreak",
      "componentTypeId": "7955",
      "componentTitle": "Control Break",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:60",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:180",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760030",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760030",
      "builderLabel": "Type",
      "apexlangPath": "highlight.condition.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "COLUMN",
      "values": [
        {
          "name": "column",
          "returnValue": "COLUMN",
          "label": "Column"
        },
        {
          "name": "rowSearch",
          "returnValue": "ROW",
          "label": "Row Search"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760033",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760033",
      "builderLabel": "Operator",
      "apexlangPath": "highlight.condition.operator",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "EQ",
      "values": [
        {
          "name": "equals",
          "returnValue": "EQ",
          "label": "equals"
        },
        {
          "name": "notEquals",
          "returnValue": "NEQ",
          "label": "not equals"
        },
        {
          "name": "greaterThan",
          "returnValue": "GT",
          "label": "greater than"
        },
        {
          "name": "greaterThanOrEquals",
          "returnValue": "GTE",
          "label": "greater than or equals"
        },
        {
          "name": "lessThan",
          "returnValue": "LT",
          "label": "less than"
        },
        {
          "name": "lessThanOrEquals",
          "returnValue": "LTE",
          "label": "less than or equals"
        },
        {
          "name": "isEmpty",
          "returnValue": "N",
          "label": "is empty"
        },
        {
          "name": "isNotEmpty",
          "returnValue": "NN",
          "label": "is not empty"
        },
        {
          "name": "in",
          "returnValue": "IN",
          "label": "in"
        },
        {
          "name": "notIn",
          "returnValue": "NIN",
          "label": "not in"
        },
        {
          "name": "between",
          "returnValue": "BETWEEN",
          "label": "between"
        },
        {
          "name": "notBetween",
          "returnValue": "NBETWEEN",
          "label": "not between"
        },
        {
          "name": "contains",
          "returnValue": "C",
          "label": "contains"
        },
        {
          "name": "doesNotContain",
          "returnValue": "NC",
          "label": "does not contain"
        },
        {
          "name": "startsWith",
          "returnValue": "S",
          "label": "starts with"
        },
        {
          "name": "doesNotStartWith",
          "returnValue": "NS",
          "label": "does not start with"
        },
        {
          "name": "matchesRegexp",
          "returnValue": "REGEXP",
          "label": "matches regular expression"
        },
        {
          "name": "inTheLast",
          "returnValue": "LAST",
          "label": "in the last"
        },
        {
          "name": "notInTheLast",
          "returnValue": "NLAST",
          "label": "not in the last"
        },
        {
          "name": "inTheNext",
          "returnValue": "NEXT",
          "label": "in the next"
        },
        {
          "name": "notInTheNext",
          "returnValue": "NNEXT",
          "label": "not in the next"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760030",
            "path": "highlight.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          }
        ]
      },
      "maxLength": null,
      "description": "Operator (select list) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760034",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
            "type": "EQUALS",
            "propertyId": "12760030",
            "path": "highlight.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "12760033",
            "path": "highlight.condition.operator",
            "hasToExist": true,
            "values": [
              "N",
              "NN",
              "BETWEEN",
              "NBETWEEN",
              "LAST",
              "NLAST",
              "NEXT",
              "NNEXT"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Value (text) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760035",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
            "type": "EQUALS",
            "propertyId": "12760030",
            "path": "highlight.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          },
          {
            "type": "IN_LIST",
            "propertyId": "12760033",
            "path": "highlight.condition.operator",
            "hasToExist": true,
            "values": [
              "LAST",
              "NLAST",
              "NEXT",
              "NNEXT"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Value (number) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760037",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760037",
      "builderLabel": "Search",
      "apexlangPath": "highlight.condition.search",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760030",
            "path": "highlight.condition.type",
            "hasToExist": true,
            "value": "ROW"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Search (text) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760038",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
            "propertyId": "12760030",
            "path": "highlight.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          },
          {
            "type": "IN_LIST",
            "propertyId": "12760033",
            "path": "highlight.condition.operator",
            "hasToExist": true,
            "values": [
              "BETWEEN",
              "NBETWEEN"
            ]
          }
        ]
      },
      "maxLength": 1900,
      "description": "From (text) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760039",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
            "propertyId": "12760030",
            "path": "highlight.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          },
          {
            "type": "IN_LIST",
            "propertyId": "12760033",
            "path": "highlight.condition.operator",
            "hasToExist": true,
            "values": [
              "BETWEEN",
              "NBETWEEN"
            ]
          }
        ]
      },
      "maxLength": 1900,
      "description": "To (text) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760041",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760041",
      "builderLabel": "Unit",
      "apexlangPath": "highlight.condition.unit",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "min",
          "returnValue": "MI",
          "label": "minutes"
        },
        {
          "name": "hours",
          "returnValue": "H",
          "label": "hours"
        },
        {
          "name": "days",
          "returnValue": "D",
          "label": "days"
        },
        {
          "name": "weeks",
          "returnValue": "W",
          "label": "weeks"
        },
        {
          "name": "months",
          "returnValue": "M",
          "label": "months"
        },
        {
          "name": "years",
          "returnValue": "Y",
          "label": "years"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760030",
            "path": "highlight.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          },
          {
            "type": "IN_LIST",
            "propertyId": "12760033",
            "path": "highlight.condition.operator",
            "hasToExist": true,
            "values": [
              "LAST",
              "NLAST",
              "NEXT",
              "NNEXT"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Unit (select list) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760042",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760042",
      "builderLabel": "Case Sensitive",
      "apexlangPath": "highlight.condition.caseSensitive",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760030",
            "path": "highlight.condition.type",
            "hasToExist": true,
            "value": "ROW"
          },
          {
            "type": "IN_LIST",
            "propertyId": "12760033",
            "path": "highlight.condition.operator",
            "hasToExist": true,
            "values": [
              "C",
              "NC",
              "S",
              "NS",
              "REGEXP"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Case Sensitive (yes no) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760103",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760106",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760106",
      "builderLabel": "Name",
      "apexlangPath": "highlight.name",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 40,
      "description": "Name (text) in highlight.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760107",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760107",
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
          "returnValue": "COLUMN",
          "label": "Cell"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in highlight.highlight.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760108",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760108",
      "builderLabel": "Column",
      "apexlangPath": "highlight.highlight.column",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760107",
            "path": "highlight.highlight.type",
            "hasToExist": true,
            "value": "COLUMN"
          }
        ]
      },
      "maxLength": null,
      "description": "Column (select list) in highlight.highlight.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760109",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760110",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7956:12760111",
      "context": "highlight",
      "componentTypeId": "7956",
      "componentTitle": "Highlight",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
      "componentCondition": null,
      "propertyId": "12760111",
      "builderLabel": "Column",
      "apexlangPath": "highlight.condition.column",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760030",
            "path": "highlight.condition.type",
            "hasToExist": true,
            "value": "COLUMN"
          }
        ]
      },
      "maxLength": null,
      "description": "Column (select list) in highlight.condition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:830",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
            "type": "IN_LIST",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "funnel",
              "line",
              "lineWithArea",
              "range"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Orientation (select list) in chart.chartAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760011",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760011",
      "builderLabel": "Direction",
      "apexlangPath": "chart.sort.direction",
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
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "value": "stock"
          }
        ]
      },
      "maxLength": null,
      "description": "Direction (select list) in chart.sort.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760012",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760012",
      "builderLabel": "Nulls",
      "apexlangPath": "chart.sort.nulls",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "FIRST",
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
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "value": "stock"
          }
        ]
      },
      "maxLength": null,
      "description": "Nulls (select list) in chart.sort.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760071",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760071",
      "builderLabel": "Type",
      "apexlangPath": "chart.chart.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "area",
          "returnValue": "area",
          "label": "Area"
        },
        {
          "name": "bar",
          "returnValue": "bar",
          "label": "Bar"
        },
        {
          "name": "bubble",
          "returnValue": "bubble",
          "label": "Bubble"
        },
        {
          "name": "donut",
          "returnValue": "donut",
          "label": "Donut"
        },
        {
          "name": "funnel",
          "returnValue": "funnel",
          "label": "Funnel"
        },
        {
          "name": "line",
          "returnValue": "line",
          "label": "Line"
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
          "name": "polar",
          "returnValue": "polar",
          "label": "Polar"
        },
        {
          "name": "radar",
          "returnValue": "radar",
          "label": "Radar"
        },
        {
          "name": "range",
          "returnValue": "range",
          "label": "Range"
        },
        {
          "name": "scatter",
          "returnValue": "scatter",
          "label": "Scatter"
        },
        {
          "name": "stock",
          "returnValue": "stock",
          "label": "Stock"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760072",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760072",
      "builderLabel": "Label",
      "apexlangPath": "chart.chart.label",
      "type": "SELECT LIST",
      "required": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "hasToExist": true,
            "value": "range",
            "propertyId": "12760071"
          }
        ]
      },
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Label (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760074",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760074",
      "builderLabel": "Value",
      "apexlangPath": "chart.chart.value",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "values": [
              "bubble",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Value (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760075",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760075",
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
          "name": "approxCountDistinct",
          "returnValue": "APPROX_COUNT_DISTINCT",
          "label": "Approx. Count Distinct"
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
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "12760074",
            "path": "chart.chart.value",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Value Aggregation (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760076",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760076",
      "builderLabel": "Open",
      "apexlangPath": "chart.chart.open",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "value": "stock"
          }
        ]
      },
      "maxLength": null,
      "description": "Open (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760077",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760077",
      "builderLabel": "Open Aggregation",
      "apexlangPath": "chart.chart.openAggregation",
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
          "name": "approxCountDistinct",
          "returnValue": "APPROX_COUNT_DISTINCT",
          "label": "Approx. Count Distinct"
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
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "12760076",
            "path": "chart.chart.open",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Open Aggregation (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760078",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760078",
      "builderLabel": "Close",
      "apexlangPath": "chart.chart.close",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "value": "stock"
          }
        ]
      },
      "maxLength": null,
      "description": "Close (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760079",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760079",
      "builderLabel": "Close Aggregation",
      "apexlangPath": "chart.chart.closeAggregation",
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
          "name": "approxCountDistinct",
          "returnValue": "APPROX_COUNT_DISTINCT",
          "label": "Approx. Count Distinct"
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
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "12760078",
            "path": "chart.chart.close",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Close Aggregation (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760080",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760080",
      "builderLabel": "High",
      "apexlangPath": "chart.chart.high",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "values": [
              "range",
              "stock"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "High (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760081",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760081",
      "builderLabel": "High Aggregation",
      "apexlangPath": "chart.chart.highAggregation",
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
          "name": "approxCountDistinct",
          "returnValue": "APPROX_COUNT_DISTINCT",
          "label": "Approx. Count Distinct"
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
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "12760080",
            "path": "chart.chart.high",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "High Aggregation (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760082",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760082",
      "builderLabel": "Low",
      "apexlangPath": "chart.chart.low",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "values": [
              "range",
              "stock"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Low (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760083",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760083",
      "builderLabel": "Low Aggregation",
      "apexlangPath": "chart.chart.lowAggregation",
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
          "name": "approxCountDistinct",
          "returnValue": "APPROX_COUNT_DISTINCT",
          "label": "Approx. Count Distinct"
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
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "12760082",
            "path": "chart.chart.low",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Low Aggregation (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760084",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760084",
      "builderLabel": "Volume",
      "apexlangPath": "chart.chart.volume",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "value": "stock"
          }
        ]
      },
      "maxLength": null,
      "description": "Volume (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760085",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760085",
      "builderLabel": "Volume Aggregation",
      "apexlangPath": "chart.chart.volumeAggregation",
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
          "name": "approxCountDistinct",
          "returnValue": "APPROX_COUNT_DISTINCT",
          "label": "Approx. Count Distinct"
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
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "12760084",
            "path": "chart.chart.volume",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Volume Aggregation (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760086",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760086",
      "builderLabel": "Target",
      "apexlangPath": "chart.chart.target",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "value": "funnel"
          }
        ]
      },
      "maxLength": null,
      "description": "Target (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760087",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760087",
      "builderLabel": "Target Aggregation",
      "apexlangPath": "chart.chart.targetAggregation",
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
          "name": "approxCountDistinct",
          "returnValue": "APPROX_COUNT_DISTINCT",
          "label": "Approx. Count Distinct"
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
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "12760086",
            "path": "chart.chart.target",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Target Aggregation (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760088",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760088",
      "builderLabel": "X",
      "apexlangPath": "chart.chart.x",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "values": [
              "bubble",
              "scatter"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "X (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760089",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760089",
      "builderLabel": "X Aggregation",
      "apexlangPath": "chart.chart.xAggregation",
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
          "name": "approxCountDistinct",
          "returnValue": "APPROX_COUNT_DISTINCT",
          "label": "Approx. Count Distinct"
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
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "12760088",
            "path": "chart.chart.x",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "X Aggregation (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760090",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760090",
      "builderLabel": "Y",
      "apexlangPath": "chart.chart.y",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "values": [
              "bubble",
              "scatter"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Y (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760091",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760091",
      "builderLabel": "Y Aggregation",
      "apexlangPath": "chart.chart.yAggregation",
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
          "name": "approxCountDistinct",
          "returnValue": "APPROX_COUNT_DISTINCT",
          "label": "Approx. Count Distinct"
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
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "12760090",
            "path": "chart.chart.y",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Y Aggregation (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760092",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760092",
      "builderLabel": "Z",
      "apexlangPath": "chart.chart.z",
      "type": "SELECT LIST",
      "required": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "hasToExist": true,
            "value": "bubble",
            "propertyId": "12760071"
          }
        ]
      },
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "values": [
              "bubble",
              "bar",
              "range"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Z (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760094",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760094",
      "builderLabel": "Z Aggregation",
      "apexlangPath": "chart.chart.zAggregation",
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
          "name": "approxCountDistinct",
          "returnValue": "APPROX_COUNT_DISTINCT",
          "label": "Approx. Count Distinct"
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
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "values": [
              "bubble",
              "bar",
              "range"
            ]
          },
          {
            "type": "NOT_NULL",
            "propertyId": "12760092",
            "path": "chart.chart.z",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Z Aggregation (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760095",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760095",
      "builderLabel": "Series",
      "apexlangPath": "chart.chart.series",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "line",
              "lineWithArea",
              "range",
              "scatter"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Series (select list) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760096",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760096",
      "builderLabel": "Stacked",
      "apexlangPath": "chart.chart.stacked",
      "type": "YES NO",
      "required": true,
      "defaultValue": "off",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "12760095",
            "path": "chart.chart.series",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 32767,
      "description": "Stacked (yes no) in chart.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760097",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760097",
      "builderLabel": "By",
      "apexlangPath": "chart.sort.by",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "LABEL",
      "values": [
        {
          "name": "label",
          "returnValue": "LABEL",
          "label": "Label"
        },
        {
          "name": "value",
          "returnValue": "VALUE",
          "label": "Value"
        },
        {
          "name": "high",
          "returnValue": "HIGH",
          "label": "High"
        },
        {
          "name": "low",
          "returnValue": "LOW",
          "label": "Low"
        },
        {
          "name": "target",
          "returnValue": "TARGET",
          "label": "Target"
        },
        {
          "name": "x",
          "returnValue": "X",
          "label": "X"
        },
        {
          "name": "y",
          "returnValue": "Y",
          "label": "Y"
        },
        {
          "name": "z",
          "returnValue": "Z",
          "label": "Z"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "value": "stock"
          }
        ]
      },
      "maxLength": null,
      "description": "By (select list) in chart.sort.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760098",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760098",
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
            "type": "IN_LIST",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "bubble",
              "line",
              "lineWithArea",
              "range",
              "scatter"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Label (text) in chart.axisTitle.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760099",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760099",
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
            "type": "IN_LIST",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "bubble",
              "line",
              "lineWithArea",
              "range",
              "scatter"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Value (text) in chart.axisTitle.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:7957:12760100",
      "context": "chart",
      "componentTypeId": "7957",
      "componentTitle": "Chart",
      "parentContext": "savedReport",
      "parentComponentTypeId": "7950",
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
      "propertyId": "12760100",
      "builderLabel": "Decimal Places",
      "apexlangPath": "chart.axisTitle.decimalPlaces",
      "type": "INTEGER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "12760071",
            "path": "chart.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "bubble",
              "donut",
              "line",
              "lineWithArea",
              "pie",
              "range",
              "scatter"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Decimal Places (integer) in chart.axisTitle.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "interactiveGrid"
    },
    {
      "id": "mmd:8000:35",
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
      "propertyId": "35",
      "builderLabel": "Ignore Output",
      "apexlangPath": "parameter.parameter.ignoreOutput",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
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
              "IN_OUT_PARAMETER",
              "OUT_PARAMETER"
            ]
          },
          {
            "type": "NOT_FEATURES",
            "propertyId": "1004",
            "path": "parameter.name",
            "hasToExist": true,
            "values": [
              "FETCH_COLLECTION_OPERATION_PRM"
            ]
          },
          {
            "operator": "OR",
            "conditions": [
              {
                "operator": "AND",
                "conditions": [
                  {
                    "type": "EQUALS",
                    "propertyId": "94",
                    "path": "region.type",
                    "hasToExist": true,
                    "value": "NATIVE_IG"
                  },
                  {
                    "type": "EQUALS",
                    "propertyId": "770",
                    "path": "attributes.edit.enabled",
                    "hasToExist": true,
                    "value": "Y"
                  }
                ]
              },
              {
                "operator": "AND",
                "conditions": [
                  {
                    "type": "EQUALS",
                    "propertyId": "94",
                    "path": "region.type",
                    "hasToExist": true,
                    "value": "NATIVE_FORM"
                  },
                  {
                    "type": "EQUALS",
                    "propertyId": "770",
                    "path": "attributes.edit.enabled",
                    "hasToExist": true,
                    "value": "Y"
                  }
                ]
              }
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Ignore Output (yes no) in parameter.parameter.",
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
    }
  ],
  "currentExamples": {
    "regions": [
      {
        "id": "page:1410/region:basic-reporting",
        "pageId": 1410,
        "key": "basic-reporting",
        "type": "interactiveGrid",
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
