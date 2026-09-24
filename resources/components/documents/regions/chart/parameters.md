# Chart: parameters

component:regions/chart

Parameter identities include their component context and APEXlang path. UI labels alone are not unique. Raw database return values and DSL enum values may differ. Missing descriptions or unresolved paths are not inferred as supported syntax.

Region template options and component-template options are independent surfaces. Current selections do not establish defaults. #DEFAULT# selects template defaults; it is not a CSS class.

```json
{
  "templateOptions": [
    {
      "id": "template-option:region/content-block/ADD_BODY_PADDING",
      "name": "ADD_BODY_PADDING",
      "label": "Add Body Padding",
      "cssClasses": [
        "t-ContentBlock--padded"
      ],
      "groupId": null,
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Content Block"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Adds padding to the region's body container.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:region/content-block/CONTENT_TITLE_H1",
      "name": "CONTENT_TITLE_H1",
      "label": "Large",
      "cssClasses": [
        "t-ContentBlock--h1"
      ],
      "groupId": "template-group:region/region-title",
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Content Block"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Large: applies t-ContentBlock--h1 within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:region/content-block/CONTENT_TITLE_H2",
      "name": "CONTENT_TITLE_H2",
      "label": "Medium",
      "cssClasses": [
        "t-ContentBlock--h2"
      ],
      "groupId": "template-group:region/region-title",
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Content Block"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Medium: applies t-ContentBlock--h2 within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:region/content-block/CONTENT_TITLE_H3",
      "name": "CONTENT_TITLE_H3",
      "label": "Small",
      "cssClasses": [
        "t-ContentBlock--h3"
      ],
      "groupId": "template-group:region/region-title",
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Content Block"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Small: applies t-ContentBlock--h3 within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:region/content-block/HEADING_FONT_ALTERNATIVE",
      "name": "HEADING_FONT_ALTERNATIVE",
      "label": "Alternative",
      "cssClasses": [
        "t-ContentBlock--headingFontAlt"
      ],
      "groupId": "template-group:region/heading-font",
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Content Block"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Alternative: applies t-ContentBlock--headingFontAlt within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:region/content-block/HIDDENHEADERNOAT",
      "name": "HIDDENHEADERNOAT",
      "label": "Hidden",
      "cssClasses": [
        "t-Region--removeHeader js-removeLandmark"
      ],
      "groupId": "template-group:region/header",
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Content Block"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Hidden: applies t-Region--removeHeader js-removeLandmark within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:region/content-block/HIDEREGIONHEADER",
      "name": "HIDEREGIONHEADER",
      "label": "Hidden but accessible",
      "cssClasses": [
        "t-ContentBlock--hideHeader js-addHiddenHeadingRoleDesc"
      ],
      "groupId": "template-group:region/header",
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Content Block"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "This option will hide the region header. Note that the region title will still be audible for Screen Readers. Buttons placed in the region header will be hidden and inaccessible.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:region/content-block/LIGHT_BACKGROUND",
      "name": "LIGHT_BACKGROUND",
      "label": "Light Background",
      "cssClasses": [
        "t-ContentBlock--lightBG"
      ],
      "groupId": "template-group:region/body-style",
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Content Block"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Gives the region body a slightly lighter background.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:region/content-block/SHADOW_BACKGROUND",
      "name": "SHADOW_BACKGROUND",
      "label": "Shadow Background",
      "cssClasses": [
        "t-ContentBlock--shadowBG"
      ],
      "groupId": "template-group:region/body-style",
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Content Block"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Gives the region body a slightly darker background.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:region/content-block/SHOW_REGION_ICON",
      "name": "SHOW_REGION_ICON",
      "label": "Show Region Icon",
      "cssClasses": [
        "t-ContentBlock--showIcon"
      ],
      "groupId": null,
      "templateTypes": [
        "REGION"
      ],
      "templates": {
        "region": "Content Block"
      },
      "virtualTemplateType": "REGION",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Displays the region icon in the region header beside the region title",
      "descriptionOrigin": "oracle-upl"
    },
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
      "id": "template-group:region/body-style",
      "sourceId": "3602683372547405325",
      "name": "BODY_STYLE",
      "label": "Body Style",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Controls the display of the region's body container.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:region/header",
      "sourceId": "2137435470226345390",
      "name": "HEADER",
      "label": "Header",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Visible - Default",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Determines the display of the Region Header which also contains the Region Title.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:region/heading-font",
      "sourceId": "2074800559029856815",
      "name": "HEADING_FONT",
      "label": "Heading Font",
      "templateTypes": [
        "REGION"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Sets the font-family of the heading for this region.",
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
      "id": "template-group:region/region-title",
      "sourceId": "2791863012574857184",
      "name": "REGION_TITLE",
      "label": "Region Title",
      "templateTypes": [
        "REGION"
      ],
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Sets the source of the Title Bar region's title.",
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
      "id": "region-template:content-block",
      "type": "region",
      "name": "Content Block",
      "key": "content-block",
      "internalName": "CONTENT_BLOCK",
      "defaultOptions": [],
      "presetOptions": [
        "t-ContentBlock--h1"
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
      "id": "mmd:7810:297",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:380",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "380",
      "builderLabel": "Title",
      "apexlangPath": "attributes.title.title",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Title (text) in attributes.title.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:537",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "537",
      "builderLabel": "Title",
      "apexlangPath": "attributes.legend.title",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "857",
            "path": "attributes.legend.show",
            "hasToExist": true,
            "value": "on"
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "funnel",
              "pyramid",
              "gantt"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Title (text) in attributes.legend.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:546",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "546",
      "builderLabel": "Height",
      "apexlangPath": "attributes.chartLayout.height",
      "type": "INTEGER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Height (integer) in attributes.chartLayout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:559",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:588",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "588",
      "builderLabel": "Decimal Places",
      "apexlangPath": "attributes.value.decimalPlaces",
      "type": "INTEGER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "funnel",
              "pyramid",
              "pie",
              "donut"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "847",
            "path": "attributes.value.format",
            "hasToExist": true,
            "values": [
              "decimal",
              "currency",
              "percent"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Decimal Places (integer) in attributes.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:829",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "829",
      "builderLabel": "Type",
      "apexlangPath": "attributes.chart.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "bar",
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
          "name": "boxPlot",
          "returnValue": "boxPlot",
          "label": "Box Plot"
        },
        {
          "name": "bubble",
          "returnValue": "bubble",
          "label": "Bubble"
        },
        {
          "name": "combination",
          "returnValue": "combo",
          "label": "Combination"
        },
        {
          "name": "statusMeterGauge",
          "returnValue": "dial",
          "label": "Status Meter Gauge"
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
          "name": "gantt",
          "returnValue": "gantt",
          "label": "Gantt"
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
          "name": "pyramid",
          "returnValue": "pyramid",
          "label": "Pyramid"
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
      "description": "Type (select list) in attributes.chart.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:830",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "830",
      "builderLabel": "Orientation",
      "apexlangPath": "attributes.chartAppearance.orientation",
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
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "combo",
              "funnel",
              "line",
              "lineWithArea",
              "boxPlot",
              "range"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Orientation (select list) in attributes.chartAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:831",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "831",
      "builderLabel": "Value Type",
      "apexlangPath": "attributes.value.valueType",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "number",
      "values": [
        {
          "name": "number",
          "returnValue": "number",
          "label": "Number"
        },
        {
          "name": "percent",
          "returnValue": "percent",
          "label": "Percent"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": null,
      "description": "Value Type (select list) in attributes.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:833",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "833",
      "builderLabel": "Stack",
      "apexlangPath": "attributes.chartAppearance.stack",
      "type": "YES NO",
      "required": true,
      "defaultValue": "off",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "line",
              "lineWithArea",
              "combo",
              "polar",
              "radar"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Stack (yes no) in attributes.chartAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:834",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "834",
      "builderLabel": "Stack Label",
      "apexlangPath": "attributes.chartAppearance.stackLabel",
      "type": "YES NO",
      "required": true,
      "defaultValue": "off",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "bar"
          },
          {
            "type": "EQUALS",
            "propertyId": "833",
            "path": "attributes.chartAppearance.stack",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Stack Label (yes no) in attributes.chartAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:836",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "836",
      "builderLabel": "On Display",
      "apexlangPath": "attributes.animation.onDisplay",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "alphaFade",
          "returnValue": "alphaFade",
          "label": "Alpha Fade"
        },
        {
          "name": "zoom",
          "returnValue": "zoom",
          "label": "Zoom"
        },
        {
          "name": "none",
          "returnValue": "none",
          "label": "None"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "On Display (select list) in attributes.animation.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:837",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "837",
      "builderLabel": "On Data Change",
      "apexlangPath": "attributes.animation.onDataChange",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "slideToLeft",
          "returnValue": "slideToLeft",
          "label": "Slide to Left"
        },
        {
          "name": "slideToRight",
          "returnValue": "slideToRight",
          "label": "Slide to Right"
        },
        {
          "name": "none",
          "returnValue": "none",
          "label": "None"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "On Data Change (select list) in attributes.animation.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:838",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "838",
      "builderLabel": "Orientation",
      "apexlangPath": "attributes.gauge.orientation",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "circular",
      "values": [
        {
          "name": "circular",
          "returnValue": "circular",
          "label": "Circular"
        },
        {
          "name": "horizontal",
          "returnValue": "horizontal",
          "label": "Horizontal"
        },
        {
          "name": "vertical",
          "returnValue": "vertical",
          "label": "Vertical"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": null,
      "description": "Orientation (select list) in attributes.gauge.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:839",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "839",
      "builderLabel": "Show Plot Area",
      "apexlangPath": "attributes.gauge.showPlotArea",
      "type": "YES NO",
      "required": true,
      "defaultValue": "on",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Plot Area (yes no) in attributes.gauge.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:840",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "840",
      "builderLabel": "Cursor",
      "apexlangPath": "attributes.dataCursor.cursor",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "true",
          "returnValue": "on",
          "label": "Yes"
        },
        {
          "name": "false",
          "returnValue": "off",
          "label": "No"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "polar",
              "dial",
              "gantt"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Cursor (select list) in attributes.dataCursor.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:841",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "841",
      "builderLabel": "Behavior",
      "apexlangPath": "attributes.dataCursor.behavior",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "smooth",
          "returnValue": "smooth",
          "label": "Smooth"
        },
        {
          "name": "snap",
          "returnValue": "snap",
          "label": "Snap"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "840",
            "path": "attributes.dataCursor.cursor",
            "hasToExist": true,
            "values": [
              "auto",
              "on"
            ]
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "polar",
              "dial",
              "gantt"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Behavior (select list) in attributes.dataCursor.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:842",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "842",
      "builderLabel": "Dim On Hover",
      "apexlangPath": "attributes.dataCursor.dimOnHover",
      "type": "YES NO",
      "required": true,
      "defaultValue": "dim",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "gantt",
              "dial"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Dim On Hover (yes no) in attributes.dataCursor.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:843",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "843",
      "builderLabel": "Time Axis Type",
      "apexlangPath": "attributes.settings.timeAxisType",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "disabled",
          "returnValue": "disabled",
          "label": "Disabled"
        },
        {
          "name": "enabled",
          "returnValue": "enabled",
          "label": "Enabled"
        },
        {
          "name": "mixedFrequency",
          "returnValue": "mixedFrequency",
          "label": "Mixed Frequency"
        },
        {
          "name": "skipGaps",
          "returnValue": "skipGaps",
          "label": "Skip Gaps"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "line",
              "lineWithArea",
              "stock",
              "boxPlot",
              "combo"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Time Axis Type (select list) in attributes.settings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:844",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "844",
      "builderLabel": "Zoom and Scroll",
      "apexlangPath": "attributes.settings.zoomAndScroll",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "off",
      "values": [
        {
          "name": "false",
          "returnValue": "off",
          "label": "No"
        },
        {
          "name": "delayed",
          "returnValue": "delayed",
          "label": "Delayed"
        },
        {
          "name": "delayedScrollOnly",
          "returnValue": "delayedScrollOnly",
          "label": "Delayed Scroll Only"
        },
        {
          "name": "live",
          "returnValue": "live",
          "label": "Live"
        },
        {
          "name": "liveScrollOnly",
          "returnValue": "liveScrollOnly",
          "label": "Live Scroll Only"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "pie",
              "donut",
              "gantt"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Zoom and Scroll (select list) in attributes.settings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:845",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "845",
      "builderLabel": "Pie Chart Other Threshold",
      "apexlangPath": "attributes.value.pieChartOtherThreshold",
      "type": "NUMBER",
      "required": true,
      "defaultValue": "0",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "pie",
              "donut"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Pie Chart Other Threshold (number) in attributes.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:846",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "846",
      "builderLabel": "Minimum",
      "apexlangPath": "attributes.value.min",
      "type": "INTEGER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "pie",
              "donut"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Minimum (integer) in attributes.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:847",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "847",
      "builderLabel": "Format",
      "apexlangPath": "attributes.value.format",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "dateShort",
          "returnValue": "date-short",
          "label": "Date - Short"
        },
        {
          "name": "dateMedium",
          "returnValue": "date-medium",
          "label": "Date - Medium"
        },
        {
          "name": "dateLong",
          "returnValue": "date-long",
          "label": "Date - Long"
        },
        {
          "name": "dateFull",
          "returnValue": "date-full",
          "label": "Date - Full"
        },
        {
          "name": "timeShort",
          "returnValue": "time-short",
          "label": "Time - Short"
        },
        {
          "name": "timeMedium",
          "returnValue": "time-medium",
          "label": "Time - Medium"
        },
        {
          "name": "timeLong",
          "returnValue": "time-long",
          "label": "Time - Long"
        },
        {
          "name": "timeFull",
          "returnValue": "time-full",
          "label": "Time - Full"
        },
        {
          "name": "datetimeShort",
          "returnValue": "datetime-short",
          "label": "DateTime - Short"
        },
        {
          "name": "datetimeMedium",
          "returnValue": "datetime-medium",
          "label": "DateTime - Medium"
        },
        {
          "name": "datetimeLong",
          "returnValue": "datetime-long",
          "label": "DateTime - Long"
        },
        {
          "name": "datetimeFull",
          "returnValue": "datetime-full",
          "label": "DateTime - Full"
        },
        {
          "name": "decimal",
          "returnValue": "decimal",
          "label": "Decimal"
        },
        {
          "name": "currency",
          "returnValue": "currency",
          "label": "Currency"
        },
        {
          "name": "percent",
          "returnValue": "percent",
          "label": "Percent"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "funnel",
              "pyramid",
              "pie",
              "donut"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Format (select list) in attributes.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:848",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "848",
      "builderLabel": "Currency",
      "apexlangPath": "attributes.value.currency",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "funnel",
              "pyramid",
              "pie",
              "donut"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "847",
            "path": "attributes.value.format",
            "hasToExist": true,
            "value": "currency"
          }
        ]
      },
      "maxLength": 128,
      "description": "Currency (text) in attributes.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:849",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "849",
      "builderLabel": "Pattern",
      "apexlangPath": "attributes.value.pattern",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "funnel",
              "pyramid",
              "pie",
              "donut"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "847",
            "path": "attributes.value.format",
            "hasToExist": true,
            "values": [
              "decimal",
              "currency",
              "percent"
            ]
          }
        ]
      },
      "maxLength": 30,
      "description": "Pattern (text) in attributes.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:850",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "850",
      "builderLabel": "Format Scaling",
      "apexlangPath": "attributes.value.formatScaling",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "none",
          "returnValue": "none",
          "label": "None"
        },
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "thousand",
          "returnValue": "thousand",
          "label": "Thousand"
        },
        {
          "name": "million",
          "returnValue": "million",
          "label": "Million"
        },
        {
          "name": "billion",
          "returnValue": "billion",
          "label": "Billion"
        },
        {
          "name": "trillion",
          "returnValue": "trillion",
          "label": "Trillion"
        },
        {
          "name": "quadrillion",
          "returnValue": "quadrillion",
          "label": "Quadrillion"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "funnel",
              "pyramid",
              "pie",
              "donut"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Format Scaling (select list) in attributes.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:851",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "851",
      "builderLabel": "Show",
      "apexlangPath": "attributes.tooltip.show",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Show (yes no) in attributes.tooltip.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:852",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "852",
      "builderLabel": "Show Series Name",
      "apexlangPath": "attributes.tooltip.showSeriesName",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "851",
            "path": "attributes.tooltip.show",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "stock",
              "gantt"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Series Name (yes no) in attributes.tooltip.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:853",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "853",
      "builderLabel": "Show Group Name",
      "apexlangPath": "attributes.tooltip.showGroupName",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "851",
            "path": "attributes.tooltip.show",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "stock",
              "funnel",
              "pyramid",
              "pie",
              "donut",
              "gantt"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Group Name (yes no) in attributes.tooltip.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:854",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "854",
      "builderLabel": "Show Value",
      "apexlangPath": "attributes.tooltip.showValue",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "851",
            "path": "attributes.tooltip.show",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "gantt"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Value (yes no) in attributes.tooltip.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:855",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "855",
      "builderLabel": "Show Row",
      "apexlangPath": "attributes.tooltip.showRow",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "851",
            "path": "attributes.tooltip.show",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Row (yes no) in attributes.tooltip.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:856",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "856",
      "builderLabel": "Show Start Date",
      "apexlangPath": "attributes.tooltip.showStartDate",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "851",
            "path": "attributes.tooltip.show",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Start Date (yes no) in attributes.tooltip.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:857",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "857",
      "builderLabel": "Show",
      "apexlangPath": "attributes.legend.show",
      "type": "YES NO",
      "required": true,
      "defaultValue": "on",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "stock",
              "gantt"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show (yes no) in attributes.legend.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:858",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "858",
      "builderLabel": "Position",
      "apexlangPath": "attributes.legend.position",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "start",
          "returnValue": "start",
          "label": "Start"
        },
        {
          "name": "end",
          "returnValue": "end",
          "label": "End"
        },
        {
          "name": "top",
          "returnValue": "top",
          "label": "Top"
        },
        {
          "name": "bottom",
          "returnValue": "bottom",
          "label": "Bottom"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "857",
            "path": "attributes.legend.show",
            "hasToExist": true,
            "value": "on"
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "funnel",
              "pyramid",
              "gantt"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Position (select list) in attributes.legend.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:859",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "859",
      "builderLabel": "Hide and Show Behavior",
      "apexlangPath": "attributes.legend.hideAndShowBehavior",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "withRescale",
      "values": [
        {
          "name": "none",
          "returnValue": "none",
          "label": "None"
        },
        {
          "name": "rescale",
          "returnValue": "withRescale",
          "label": "Rescale"
        },
        {
          "name": "noRescaling",
          "returnValue": "withoutRescale",
          "label": "No Rescaling"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "857",
            "path": "attributes.legend.show",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": null,
      "description": "Hide and Show Behavior (select list) in attributes.legend.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:860",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "860",
      "builderLabel": "Show",
      "apexlangPath": "attributes.overview.show",
      "type": "YES NO",
      "required": true,
      "defaultValue": "on",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "line",
              "stock",
              "boxPlot",
              "lineWithArea",
              "combo"
            ]
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "844",
            "path": "attributes.settings.zoomAndScroll",
            "hasToExist": true,
            "value": "off"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show (yes no) in attributes.overview.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:861",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "861",
      "builderLabel": "Height",
      "apexlangPath": "attributes.overview.height",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "860",
            "path": "attributes.overview.show",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": 5,
      "description": "Height (text) in attributes.overview.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:862",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "862",
      "builderLabel": "Maximum Width",
      "apexlangPath": "attributes.chartLayout.maxWidth",
      "type": "INTEGER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Maximum Width (integer) in attributes.chartLayout.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:863",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "863",
      "builderLabel": "Zoom Direction",
      "apexlangPath": "attributes.settings.zoomDirection",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "bothAxes",
          "returnValue": "auto",
          "label": "Both Axes"
        },
        {
          "name": "xAxis",
          "returnValue": "x",
          "label": "X-Axis"
        },
        {
          "name": "yAxis",
          "returnValue": "y",
          "label": "Y-Axis"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "bubble",
              "scatter"
            ]
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "844",
            "path": "attributes.settings.zoomAndScroll",
            "hasToExist": true,
            "value": "off"
          }
        ]
      },
      "maxLength": null,
      "description": "Zoom Direction (select list) in attributes.settings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:865",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "865",
      "builderLabel": "Show Label",
      "apexlangPath": "attributes.tooltip.showLabel",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "851",
            "path": "attributes.tooltip.show",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Label (yes no) in attributes.tooltip.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:866",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "866",
      "builderLabel": "Show End Date",
      "apexlangPath": "attributes.tooltip.showEndDate",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "851",
            "path": "attributes.tooltip.show",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show End Date (yes no) in attributes.tooltip.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:867",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "867",
      "builderLabel": "Show Progress",
      "apexlangPath": "attributes.tooltip.showProgress",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "851",
            "path": "attributes.tooltip.show",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Progress (yes no) in attributes.tooltip.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:868",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "868",
      "builderLabel": "Show Baseline",
      "apexlangPath": "attributes.tooltip.showBaseline",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "851",
            "path": "attributes.tooltip.show",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Baseline (yes no) in attributes.tooltip.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:872",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "872",
      "builderLabel": "Initial Zooming",
      "apexlangPath": "attributes.settings.initialZooming",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "none",
      "values": [
        {
          "name": "first",
          "returnValue": "first",
          "label": "First"
        },
        {
          "name": "last",
          "returnValue": "last",
          "label": "Last"
        },
        {
          "name": "none",
          "returnValue": "none",
          "label": "None"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "bar",
              "line",
              "area",
              "lineWithArea",
              "combo",
              "stock"
            ]
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "844",
            "path": "attributes.settings.zoomAndScroll",
            "hasToExist": true,
            "value": "off"
          }
        ]
      },
      "maxLength": null,
      "description": "Initial Zooming (select list) in attributes.settings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:873",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "873",
      "builderLabel": "Sort Order",
      "apexlangPath": "attributes.multiSeriesChartData.sortOrder",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "label-asc",
      "values": [
        {
          "name": "valueAsc",
          "returnValue": "value-asc",
          "label": "Value - Ascending"
        },
        {
          "name": "valueDesc",
          "returnValue": "value-desc",
          "label": "Value - Descending"
        },
        {
          "name": "labelAsc",
          "returnValue": "label-asc",
          "label": "Label - Ascending"
        },
        {
          "name": "labelDesc",
          "returnValue": "label-desc",
          "label": "Label - Descending"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1048",
            "path": "attributes.multiSeriesChartData.fillGapsInChartData",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Sort Order (select list) in attributes.multiSeriesChartData.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:929",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "929",
      "builderLabel": "Pie Selection Effect",
      "apexlangPath": "attributes.settings.pieSelectionEffect",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "highlight",
      "values": [
        {
          "name": "explode",
          "returnValue": "explode",
          "label": "Explode"
        },
        {
          "name": "highlightAndExplode",
          "returnValue": "highlightAndExplode",
          "label": "Highlight And Explode"
        },
        {
          "name": "highlight",
          "returnValue": "highlight",
          "label": "Highlight"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "pie",
              "donut"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Pie Selection Effect (select list) in attributes.settings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:930",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "930",
      "builderLabel": "Render As",
      "apexlangPath": "attributes.settings.renderAs",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "candlestick",
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
          "name": "candlestick",
          "returnValue": "candlestick",
          "label": "Candlestick"
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
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "stock"
          }
        ]
      },
      "maxLength": null,
      "description": "Render As (select list) in attributes.settings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:931",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "931",
      "builderLabel": "Interval",
      "apexlangPath": "attributes.autoRefresh.interval",
      "type": "INTEGER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Interval (integer) in attributes.autoRefresh.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:974",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "974",
      "builderLabel": "Render Gap as Zero",
      "apexlangPath": "attributes.multiSeriesChartData.renderGapAsZero",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "line",
              "lineWithArea",
              "area",
              "scatter",
              "area",
              "bar",
              "line",
              "lineWithArea",
              "combo"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "1048",
            "path": "attributes.multiSeriesChartData.fillGapsInChartData",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Render Gap as Zero (yes no) in attributes.multiSeriesChartData.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:979",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "979",
      "builderLabel": "Show Horizontal Grid",
      "apexlangPath": "attributes.settings.showHorizontalGrid",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "true",
          "returnValue": "visible",
          "label": "Yes"
        },
        {
          "name": "false",
          "returnValue": "hidden",
          "label": "No"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": null,
      "description": "Show Horizontal Grid (select list) in attributes.settings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:980",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "980",
      "builderLabel": "Show Vertical Grid",
      "apexlangPath": "attributes.settings.showVerticalGrid",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "true",
          "returnValue": "visible",
          "label": "Yes"
        },
        {
          "name": "false",
          "returnValue": "hidden",
          "label": "No"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": null,
      "description": "Show Vertical Grid (select list) in attributes.settings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:981",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "981",
      "builderLabel": "Show Row Axis",
      "apexlangPath": "attributes.settings.showRowAxis",
      "type": "YES NO",
      "required": true,
      "defaultValue": "on",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Row Axis (yes no) in attributes.settings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:982",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "982",
      "builderLabel": "Axis Position",
      "apexlangPath": "attributes.settings.axisPosition",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "top",
      "values": [
        {
          "name": "top",
          "returnValue": "top",
          "label": "Top"
        },
        {
          "name": "bottom",
          "returnValue": "bottom",
          "label": "Bottom"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": null,
      "description": "Axis Position (select list) in attributes.settings.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1048",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1048",
      "builderLabel": "Fill Gaps in Chart Data",
      "apexlangPath": "attributes.multiSeriesChartData.fillGapsInChartData",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "stock",
              "gantt",
              "dial",
              "funnel",
              "pyramid",
              "scatter",
              "pie",
              "donut"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Fill Gaps in Chart Data (yes no) in attributes.multiSeriesChartData.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1049",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1049",
      "builderLabel": "Indicator Size",
      "apexlangPath": "attributes.gauge.indicatorSize",
      "type": "NUMBER",
      "required": true,
      "defaultValue": "1",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": 22,
      "description": "Indicator Size (number) in attributes.gauge.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1050",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1050",
      "builderLabel": "Inner Radius",
      "apexlangPath": "attributes.gauge.innerRadius",
      "type": "NUMBER",
      "required": true,
      "defaultValue": "0.7",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          },
          {
            "type": "EQUALS",
            "propertyId": "838",
            "path": "attributes.gauge.orientation",
            "hasToExist": true,
            "value": "circular"
          }
        ]
      },
      "maxLength": 22,
      "description": "Inner Radius (number) in attributes.gauge.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1051",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1051",
      "builderLabel": "Start Angle",
      "apexlangPath": "attributes.gauge.startAngle",
      "type": "NUMBER",
      "required": true,
      "defaultValue": "90",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          },
          {
            "type": "EQUALS",
            "propertyId": "838",
            "path": "attributes.gauge.orientation",
            "hasToExist": true,
            "value": "circular"
          }
        ]
      },
      "maxLength": 22,
      "description": "Start Angle (number) in attributes.gauge.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1052",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1052",
      "builderLabel": "Angle Extent",
      "apexlangPath": "attributes.gauge.angleExtent",
      "type": "NUMBER",
      "required": true,
      "defaultValue": "360",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          },
          {
            "type": "EQUALS",
            "propertyId": "838",
            "path": "attributes.gauge.orientation",
            "hasToExist": true,
            "value": "circular"
          }
        ]
      },
      "maxLength": 22,
      "description": "Angle Extent (number) in attributes.gauge.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1055",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1055",
      "builderLabel": "Show",
      "apexlangPath": "attributes.value.show",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show (yes no) in attributes.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1059",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1059",
      "builderLabel": "Position",
      "apexlangPath": "attributes.value.position",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "center",
          "returnValue": "center",
          "label": "Center"
        },
        {
          "name": "insideIndicatorEdge",
          "returnValue": "insideIndicatorEdge",
          "label": "Inside Indicator Edge"
        },
        {
          "name": "outsideIndicatorEdge",
          "returnValue": "outsideIndicatorEdge",
          "label": "Outside Indicator Edge"
        },
        {
          "name": "outsidePlotArea",
          "returnValue": "outsidePlotArea",
          "label": "Outside Plot Area"
        },
        {
          "name": "withLabel",
          "returnValue": "withLabel",
          "label": "With Label"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "838",
            "path": "attributes.gauge.orientation",
            "hasToExist": true,
            "value": "circular"
          }
        ]
      },
      "maxLength": null,
      "description": "Position (select list) in attributes.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1075",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1075",
      "builderLabel": "Font Family",
      "apexlangPath": "attributes.legend.fontFamily",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "arial",
          "returnValue": "Arial",
          "label": "Arial"
        },
        {
          "name": "arialBlack",
          "returnValue": "Arial Black",
          "label": "Arial Black"
        },
        {
          "name": "bookman",
          "returnValue": "Bookman",
          "label": "Bookman"
        },
        {
          "name": "comicSansMs",
          "returnValue": "Comic Sans MS",
          "label": "Comic Sans MS"
        },
        {
          "name": "courier",
          "returnValue": "Courier",
          "label": "Courier"
        },
        {
          "name": "courierNew",
          "returnValue": "Courier New",
          "label": "Courier New"
        },
        {
          "name": "garamond",
          "returnValue": "Garamond",
          "label": "Garamond"
        },
        {
          "name": "georgia",
          "returnValue": "Georgia",
          "label": "Georgia"
        },
        {
          "name": "helvetica",
          "returnValue": "Helvetica",
          "label": "Helvetica"
        },
        {
          "name": "impact",
          "returnValue": "Impact",
          "label": "Impact"
        },
        {
          "name": "palatino",
          "returnValue": "Palatino",
          "label": "Palatino"
        },
        {
          "name": "times",
          "returnValue": "Times",
          "label": "Times"
        },
        {
          "name": "timesNewRoman",
          "returnValue": "Times New Roman",
          "label": "Times New Roman"
        },
        {
          "name": "trebuchetMs",
          "returnValue": "Trebuchet MS",
          "label": "Trebuchet MS"
        },
        {
          "name": "verdana",
          "returnValue": "Verdana",
          "label": "Verdana"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "857",
            "path": "attributes.legend.show",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": null,
      "description": "Font Family (select list) in attributes.legend.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1076",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1076",
      "builderLabel": "Font Style",
      "apexlangPath": "attributes.legend.fontStyle",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "normal",
          "returnValue": "normal",
          "label": "Normal"
        },
        {
          "name": "italic",
          "returnValue": "italic",
          "label": "Italic"
        },
        {
          "name": "oblique",
          "returnValue": "oblique",
          "label": "Oblique"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "857",
            "path": "attributes.legend.show",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": null,
      "description": "Font Style (select list) in attributes.legend.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1077",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1077",
      "builderLabel": "Font Size",
      "apexlangPath": "attributes.legend.fontSize",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "8",
          "returnValue": "8",
          "label": "8"
        },
        {
          "name": "10",
          "returnValue": "10",
          "label": "10"
        },
        {
          "name": "12",
          "returnValue": "12",
          "label": "12"
        },
        {
          "name": "14",
          "returnValue": "14",
          "label": "14"
        },
        {
          "name": "16",
          "returnValue": "16",
          "label": "16"
        },
        {
          "name": "18",
          "returnValue": "18",
          "label": "18"
        },
        {
          "name": "20",
          "returnValue": "20",
          "label": "20"
        },
        {
          "name": "22",
          "returnValue": "22",
          "label": "22"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "857",
            "path": "attributes.legend.show",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": null,
      "description": "Font Size (select list) in attributes.legend.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1078",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1078",
      "builderLabel": "Font Color",
      "apexlangPath": "attributes.legend.fontColor",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "857",
            "path": "attributes.legend.show",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": 255,
      "description": "Font Color (color) in attributes.legend.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1113",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1113",
      "builderLabel": "Font Family",
      "apexlangPath": "attributes.chartAppearance.fontFamily",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "arial",
          "returnValue": "Arial",
          "label": "Arial"
        },
        {
          "name": "arialBlack",
          "returnValue": "Arial Black",
          "label": "Arial Black"
        },
        {
          "name": "bookman",
          "returnValue": "Bookman",
          "label": "Bookman"
        },
        {
          "name": "comicSansMs",
          "returnValue": "Comic Sans MS",
          "label": "Comic Sans MS"
        },
        {
          "name": "courier",
          "returnValue": "Courier",
          "label": "Courier"
        },
        {
          "name": "courierNew",
          "returnValue": "Courier New",
          "label": "Courier New"
        },
        {
          "name": "garamond",
          "returnValue": "Garamond",
          "label": "Garamond"
        },
        {
          "name": "georgia",
          "returnValue": "Georgia",
          "label": "Georgia"
        },
        {
          "name": "helvetica",
          "returnValue": "Helvetica",
          "label": "Helvetica"
        },
        {
          "name": "impact",
          "returnValue": "Impact",
          "label": "Impact"
        },
        {
          "name": "palatino",
          "returnValue": "Palatino",
          "label": "Palatino"
        },
        {
          "name": "times",
          "returnValue": "Times",
          "label": "Times"
        },
        {
          "name": "timesNewRoman",
          "returnValue": "Times New Roman",
          "label": "Times New Roman"
        },
        {
          "name": "trebuchetMs",
          "returnValue": "Trebuchet MS",
          "label": "Trebuchet MS"
        },
        {
          "name": "verdana",
          "returnValue": "Verdana",
          "label": "Verdana"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "834",
            "path": "attributes.chartAppearance.stackLabel",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": null,
      "description": "Font Family (select list) in attributes.chartAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1114",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1114",
      "builderLabel": "Font Style",
      "apexlangPath": "attributes.chartAppearance.fontStyle",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "normal",
          "returnValue": "normal",
          "label": "Normal"
        },
        {
          "name": "italic",
          "returnValue": "italic",
          "label": "Italic"
        },
        {
          "name": "oblique",
          "returnValue": "oblique",
          "label": "Oblique"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "834",
            "path": "attributes.chartAppearance.stackLabel",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": null,
      "description": "Font Style (select list) in attributes.chartAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1115",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1115",
      "builderLabel": "Font Size",
      "apexlangPath": "attributes.chartAppearance.fontSize",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "8",
          "returnValue": "8",
          "label": "8"
        },
        {
          "name": "10",
          "returnValue": "10",
          "label": "10"
        },
        {
          "name": "12",
          "returnValue": "12",
          "label": "12"
        },
        {
          "name": "14",
          "returnValue": "14",
          "label": "14"
        },
        {
          "name": "16",
          "returnValue": "16",
          "label": "16"
        },
        {
          "name": "18",
          "returnValue": "18",
          "label": "18"
        },
        {
          "name": "20",
          "returnValue": "20",
          "label": "20"
        },
        {
          "name": "22",
          "returnValue": "22",
          "label": "22"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "834",
            "path": "attributes.chartAppearance.stackLabel",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": null,
      "description": "Font Size (select list) in attributes.chartAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7810:1116",
      "context": "attributes",
      "componentTypeId": "7810",
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
            "value": "NATIVE_JET_CHART"
          }
        ]
      },
      "propertyId": "1116",
      "builderLabel": "Font Color",
      "apexlangPath": "attributes.chartAppearance.fontColor",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "834",
            "path": "attributes.chartAppearance.stackLabel",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": 255,
      "description": "Font Color (color) in attributes.chartAppearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1",
      "builderLabel": "Name",
      "apexlangPath": "series.name",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Name (text) in series.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:24",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "24",
      "builderLabel": "Authorization Scheme",
      "apexlangPath": "series.security.authorizationScheme",
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
      "description": "Authorization Scheme (component) in series.security.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:38",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "38",
      "builderLabel": "Build Option",
      "apexlangPath": "series.config.buildOption",
      "type": "COMPONENT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": null,
      "description": "Build Option (component) in series.config.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:60",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "60",
      "builderLabel": "Sequence",
      "apexlangPath": "series.execution.sequence",
      "type": "NUMBER",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 22,
      "description": "Sequence (number) in series.execution.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:180",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "180",
      "builderLabel": "Static ID",
      "apexlangPath": "series.advanced.staticId",
      "type": "STATIC ID",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Static ID (static id) in series.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:215",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "215",
      "builderLabel": "Page Items to Submit",
      "apexlangPath": "series.source.pageItemsToSubmit",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "1032",
            "path": "series.source.location",
            "hasToExist": true,
            "value": "REGION_SOURCE"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page Items to Submit (item) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:295",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "295",
      "builderLabel": "Maximum Rows to Process",
      "apexlangPath": "series.performance.maxRowsToProcess",
      "type": "INTEGER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Maximum Rows to Process (integer) in series.performance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:305",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "305",
      "builderLabel": "JavaScript Static ID",
      "apexlangPath": "series.advanced.javaScriptStaticId",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "JavaScript Static ID (text) in series.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:475",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "475",
      "builderLabel": "Graph Owner",
      "apexlangPath": "series.source.graphOwner",
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
            "path": "series.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Graph Owner (owner) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:476",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "476",
      "builderLabel": "Graph Name",
      "apexlangPath": "series.source.graphName",
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
            "path": "series.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Graph Name (graph) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:477",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "477",
      "builderLabel": "Match Clause",
      "apexlangPath": "series.source.matchClause",
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
            "path": "series.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Match Clause (text editor) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:478",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "478",
      "builderLabel": "Where Clause",
      "apexlangPath": "series.source.whereClause",
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
            "path": "series.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Where Clause (where clause) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:479",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "479",
      "builderLabel": "Columns Clause",
      "apexlangPath": "series.source.columnsClause",
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
            "path": "series.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Columns Clause (text editor) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:481",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "481",
      "builderLabel": "Order By Clause",
      "apexlangPath": "series.orderBy.orderByClause",
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
            "path": "series.orderBy.type",
            "hasToExist": true,
            "value": "STATIC"
          },
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "series.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Order By Clause (order by clause) in series.orderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:482",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "482",
      "builderLabel": "Item",
      "apexlangPath": "series.orderBy.item",
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
            "path": "series.orderBy.type",
            "hasToExist": true,
            "value": "ITEM"
          },
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "series.source.type",
            "hasToExist": true,
            "value": "GRAPH"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Item (order by item) in series.orderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:605",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "605",
      "builderLabel": "Target",
      "apexlangPath": "series.link.target",
      "type": "LINK_IN_APP",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "870",
            "path": "series.link.type",
            "hasToExist": true,
            "value": "REDIRECT_PAGE"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Target (link_in_app) in series.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:606",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "606",
      "builderLabel": "Target",
      "apexlangPath": "series.link.target",
      "type": "LINK_IN_DIFF_APP",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "870",
            "path": "series.link.type",
            "hasToExist": true,
            "value": "REDIRECT_APP"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Target (link_in_diff_app) in series.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:607",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "607",
      "builderLabel": "Target URL",
      "apexlangPath": "series.link.targetUrl",
      "type": "TEXT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "870",
            "path": "series.link.type",
            "hasToExist": true,
            "value": "REDIRECT_URL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Target URL (text) in series.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:864",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "864",
      "builderLabel": "Type",
      "apexlangPath": "series.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "bar",
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
          "name": "barRange",
          "returnValue": "barRange",
          "label": "Bar Range"
        },
        {
          "name": "areaRange",
          "returnValue": "areaRange",
          "label": "Area Range"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "combo"
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in series.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:869",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "869",
      "builderLabel": "Z",
      "apexlangPath": "series.columnMapping.z",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "bar",
              "bubble"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "864",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "bar",
              "barRange"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "874",
            "path": "series.type",
            "hasToExist": true,
            "value": "barRange"
          },
          {
            "type": "IN_LIST",
            "propertyId": "875",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "bar",
              "bubble",
              "barRange"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "877",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "bar",
              "boxPlot"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Z (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:870",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "870",
      "builderLabel": "Type",
      "apexlangPath": "series.link.type",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
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
          "name": "redirectUrlReturnedByFirstCol",
          "returnValue": "DEPRECATED_LINK_COLUMN",
          "label": "Redirect to URL returned by First Column"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "gantt"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in series.link.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:871",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "871",
      "builderLabel": "Minimum Value",
      "apexlangPath": "series.columnMapping.minValue",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Minimum Value (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:874",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "874",
      "builderLabel": "Type",
      "apexlangPath": "series.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "barRange",
      "values": [
        {
          "name": "barRange",
          "returnValue": "barRange",
          "label": "Bar Range"
        },
        {
          "name": "areaRange",
          "returnValue": "areaRange",
          "label": "Area Range"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "range"
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in series.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:875",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "875",
      "builderLabel": "Type",
      "apexlangPath": "series.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "bar",
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
          "name": "scatter",
          "returnValue": "scatter",
          "label": "Scatter"
        },
        {
          "name": "bubble",
          "returnValue": "bubble",
          "label": "Bubble"
        },
        {
          "name": "barRange",
          "returnValue": "barRange",
          "label": "Bar Range"
        },
        {
          "name": "areaRange",
          "returnValue": "areaRange",
          "label": "Area Range"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "polar"
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in series.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:876",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "876",
      "builderLabel": "Type",
      "apexlangPath": "series.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "area",
      "values": [
        {
          "name": "area",
          "returnValue": "area",
          "label": "Area"
        },
        {
          "name": "areaRange",
          "returnValue": "areaRange",
          "label": "Area Range"
        },
        {
          "name": "line",
          "returnValue": "line",
          "label": "Line"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "radar"
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in series.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:877",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "877",
      "builderLabel": "Type",
      "apexlangPath": "series.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "boxPlot",
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
          "name": "boxPlot",
          "returnValue": "boxPlot",
          "label": "Box Plot"
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
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "boxPlot"
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in series.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:886",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "886",
      "builderLabel": "Series Name",
      "apexlangPath": "series.columnMapping.seriesName",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "stock",
              "gantt"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Series Name (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:888",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "888",
      "builderLabel": "Low",
      "apexlangPath": "series.columnMapping.low",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "stock"
          },
          {
            "type": "IN_LIST",
            "propertyId": "864",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "barRange",
              "areaRange"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "874",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "barRange",
              "areaRange"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "875",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "barRange",
              "areaRange"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "876",
            "path": "series.type",
            "hasToExist": true,
            "value": "areaRange"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Low (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:889",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "889",
      "builderLabel": "High",
      "apexlangPath": "series.columnMapping.high",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "stock"
          },
          {
            "type": "IN_LIST",
            "propertyId": "864",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "barRange",
              "areaRange"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "874",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "barRange",
              "areaRange"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "875",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "barRange",
              "areaRange"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "876",
            "path": "series.type",
            "hasToExist": true,
            "value": "areaRange"
          }
        ]
      },
      "maxLength": 32767,
      "description": "High (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:890",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "890",
      "builderLabel": "Open",
      "apexlangPath": "series.columnMapping.open",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "stock"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Open (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:891",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "891",
      "builderLabel": "Close",
      "apexlangPath": "series.columnMapping.close",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "stock"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Close (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:892",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "892",
      "builderLabel": "Volume",
      "apexlangPath": "series.columnMapping.volume",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "stock"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Volume (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:893",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "893",
      "builderLabel": "X",
      "apexlangPath": "series.columnMapping.x",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "bubble",
              "scatter"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "875",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "bubble",
              "scatter"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "X (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:894",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "894",
      "builderLabel": "Y",
      "apexlangPath": "series.columnMapping.y",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "bubble",
              "scatter"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "875",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "bubble",
              "scatter"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Y (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:895",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "895",
      "builderLabel": "Target Value",
      "apexlangPath": "series.columnMapping.targetValue",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "funnel"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Target Value (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:896",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "896",
      "builderLabel": "Maximum Value",
      "apexlangPath": "series.columnMapping.maxValue",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Maximum Value (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:897",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "897",
      "builderLabel": "Legend Tooltip",
      "apexlangPath": "series.columnMapping.legendTooltip",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "bubble",
              "line",
              "lineWithArea",
              "scatter",
              "stock"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "864",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "line",
              "lineWithArea"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "875",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "line",
              "lineWithArea",
              "bubble",
              "scatter"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "876",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "area",
              "line"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "877",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "line",
              "lineWithArea",
              "boxPlot"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Legend Tooltip (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:898",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "898",
      "builderLabel": "Label Tooltip",
      "apexlangPath": "series.columnMapping.labelTooltip",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "bubble",
              "line",
              "lineWithArea",
              "scatter",
              "stock"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "864",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "line",
              "lineWithArea"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "875",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "line",
              "lineWithArea",
              "bubble",
              "scatter"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "876",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "area",
              "line"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "877",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "line",
              "lineWithArea",
              "boxPlot"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Label Tooltip (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:899",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "899",
      "builderLabel": "Label",
      "apexlangPath": "series.columnMapping.label",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "gantt"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Label (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:900",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "900",
      "builderLabel": "Custom Tooltip",
      "apexlangPath": "series.columnMapping.customTooltip",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Custom Tooltip (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:901",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "901",
      "builderLabel": "Color",
      "apexlangPath": "series.appearance.color",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "gantt"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Color (color) in series.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:902",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "902",
      "builderLabel": "Style",
      "apexlangPath": "series.line.style",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "solid",
      "values": [
        {
          "name": "dotted",
          "returnValue": "dotted",
          "label": "Dotted"
        },
        {
          "name": "dashed",
          "returnValue": "dashed",
          "label": "Dashed"
        },
        {
          "name": "solid",
          "returnValue": "solid",
          "label": "Solid"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "line",
              "lineWithArea",
              "bubble",
              "scatter",
              "combo"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Style (select list) in series.line.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:903",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "903",
      "builderLabel": "Width",
      "apexlangPath": "series.line.width",
      "type": "INTEGER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "line",
              "lineWithArea",
              "bubble",
              "scatter",
              "combo"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Width (integer) in series.line.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:904",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "904",
      "builderLabel": "Type",
      "apexlangPath": "series.line.type",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "centeredStepped",
          "returnValue": "centeredStepped",
          "label": "Centered Stepped"
        },
        {
          "name": "curved",
          "returnValue": "curved",
          "label": "Curved"
        },
        {
          "name": "centeredSegmented",
          "returnValue": "centeredSegmented",
          "label": "Centered Segmented"
        },
        {
          "name": "stepped",
          "returnValue": "stepped",
          "label": "Stepped"
        },
        {
          "name": "segmented",
          "returnValue": "segmented",
          "label": "Segmented"
        },
        {
          "name": "straight",
          "returnValue": "straight",
          "label": "Straight"
        },
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "none",
          "returnValue": "none",
          "label": "None"
        }
      ],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "line",
              "lineWithArea",
              "area",
              "scatter"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "874",
            "path": "series.type",
            "hasToExist": true,
            "value": "areaRange"
          },
          {
            "type": "IN_LIST",
            "propertyId": "864",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "line",
              "lineWithArea",
              "area",
              "areaRange"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "877",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "line",
              "lineWithArea",
              "area"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "875",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "line",
              "lineWithArea",
              "area",
              "scatter",
              "areaRange"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "876",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "line",
              "areaRange",
              "area"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in series.line.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:905",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "905",
      "builderLabel": "Show",
      "apexlangPath": "series.marker.show",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "true",
          "returnValue": "on",
          "label": "Yes"
        },
        {
          "name": "false",
          "returnValue": "off",
          "label": "No"
        }
      ],
      "condition": {
        "operator": "OR",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "line",
              "lineWithArea",
              "scatter",
              "area",
              "bubble",
              "boxPlot"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "874",
            "path": "series.type",
            "hasToExist": true,
            "value": "areaRange"
          },
          {
            "type": "IN_LIST",
            "propertyId": "864",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "line",
              "lineWithArea",
              "area",
              "areaRange"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "877",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "line",
              "lineWithArea",
              "area"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "875",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "line",
              "lineWithArea",
              "area",
              "scatter",
              "areaRange"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "876",
            "path": "series.type",
            "hasToExist": true,
            "values": [
              "line",
              "areaRange",
              "area"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Show (select list) in series.marker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:906",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "906",
      "builderLabel": "Shape",
      "apexlangPath": "series.marker.shape",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "circle",
          "returnValue": "circle",
          "label": "Circle"
        },
        {
          "name": "diamond",
          "returnValue": "diamond",
          "label": "Diamond"
        },
        {
          "name": "human",
          "returnValue": "human",
          "label": "Human"
        },
        {
          "name": "plus",
          "returnValue": "plus",
          "label": "Plus"
        },
        {
          "name": "square",
          "returnValue": "square",
          "label": "Square"
        },
        {
          "name": "star",
          "returnValue": "star",
          "label": "Star"
        },
        {
          "name": "triangleDown",
          "returnValue": "triangleDown",
          "label": "Triangle Down"
        },
        {
          "name": "triangleUp",
          "returnValue": "triangleUp",
          "label": "Triangle Up"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "line",
              "lineWithArea",
              "scatter",
              "area",
              "bubble",
              "boxPlot",
              "combo",
              "range"
            ]
          },
          {
            "type": "NOT_EQUALS",
            "propertyId": "905",
            "path": "series.marker.show",
            "hasToExist": true,
            "value": "off"
          }
        ]
      },
      "maxLength": null,
      "description": "Shape (select list) in series.marker.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:907",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "907",
      "builderLabel": "Assigned To Y2 Axis",
      "apexlangPath": "series.appearance.assignedToY2Axis",
      "type": "YES NO",
      "required": true,
      "defaultValue": "off",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "line",
              "lineWithArea",
              "boxPlot",
              "combo"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Assigned To Y2 Axis (yes no) in series.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:908",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "908",
      "builderLabel": "Show",
      "apexlangPath": "series.label.show",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": null,
      "maxLength": 32767,
      "description": "Show (yes no) in series.label.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:909",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "909",
      "builderLabel": "Position",
      "apexlangPath": "series.label.position",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "center",
          "returnValue": "center",
          "label": "Center"
        },
        {
          "name": "outsideSlice",
          "returnValue": "outsideSlice",
          "label": "Outside Slice"
        },
        {
          "name": "aboveMarker",
          "returnValue": "aboveMarker",
          "label": "Above Marker"
        },
        {
          "name": "belowMarker",
          "returnValue": "belowMarker",
          "label": "Below Marker"
        },
        {
          "name": "beforeMarker",
          "returnValue": "beforeMarker",
          "label": "Before Marker"
        },
        {
          "name": "afterMarker",
          "returnValue": "afterMarker",
          "label": "After Marker"
        },
        {
          "name": "insideBarEdge",
          "returnValue": "insideBarEdge",
          "label": "Inside Bar Edge"
        },
        {
          "name": "outsideBarEdge",
          "returnValue": "outsideBarEdge",
          "label": "Outside Bar Edge"
        },
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "none",
          "returnValue": "none",
          "label": "None"
        },
        {
          "name": "start",
          "returnValue": "start",
          "label": "Start"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "908",
            "path": "series.label.show",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "gantt"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Position (select list) in series.label.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:910",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "910",
      "builderLabel": "CSS Styling",
      "apexlangPath": "series.label.cssStyling",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "908",
            "path": "series.label.show",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "dial",
              "gantt"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "CSS Styling (combobox) in series.label.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:935",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "935",
      "builderLabel": "Custom Column",
      "apexlangPath": "series.columnMapping.customColumn",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Custom Column (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:958",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "958",
      "builderLabel": "Remote Server",
      "apexlangPath": "series.source.remoteServer",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1032",
            "path": "series.source.location",
            "hasToExist": true,
            "value": "REMOTE"
          }
        ]
      },
      "maxLength": null,
      "description": "Remote Server (component) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:959",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "959",
      "builderLabel": "Type",
      "apexlangPath": "series.source.type",
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
            "propertyId": "1032",
            "path": "series.source.location",
            "hasToExist": true,
            "values": [
              "LOCAL",
              "REMOTE"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:960",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "960",
      "builderLabel": "Table Owner",
      "apexlangPath": "series.source.tableOwner",
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
            "path": "series.source.type",
            "hasToExist": true,
            "value": "TABLE"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Table Owner (owner) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:961",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "961",
      "builderLabel": "Table Name",
      "apexlangPath": "series.source.tableName",
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
            "path": "series.source.type",
            "hasToExist": true,
            "value": "TABLE"
          }
        ]
      },
      "maxLength": 128,
      "description": "Table Name (table) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:962",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "962",
      "builderLabel": "Where Clause",
      "apexlangPath": "series.source.whereClause",
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
            "path": "series.source.type",
            "hasToExist": true,
            "value": "TABLE"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Where Clause (where clause) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:963",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "963",
      "builderLabel": "Order By Clause",
      "apexlangPath": "series.orderBy.orderByClause",
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
            "path": "series.orderBy.type",
            "hasToExist": true,
            "value": "STATIC"
          },
          {
            "type": "IN_LIST",
            "propertyId": "959",
            "path": "series.source.type",
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
      "description": "Order By Clause (order by clause) in series.orderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:964",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "964",
      "builderLabel": "SQL Query",
      "apexlangPath": "series.source.sqlQuery",
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
            "path": "series.source.type",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "SQL Query (sql) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:965",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "965",
      "builderLabel": "Caching",
      "apexlangPath": "series.remoteCache.caching",
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
            "propertyId": "1032",
            "path": "series.source.location",
            "hasToExist": true,
            "value": "REMOTE"
          }
        ]
      },
      "maxLength": null,
      "description": "Caching (select list) in series.remoteCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:966",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "966",
      "builderLabel": "Timeout",
      "apexlangPath": "series.remoteCache.timeout",
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
            "path": "series.remoteCache.caching",
            "hasToExist": true
          }
        ]
      },
      "maxLength": 255,
      "description": "Timeout (text editor) in series.remoteCache.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:967",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "967",
      "builderLabel": "REST Source",
      "apexlangPath": "series.source.restSource",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1032",
            "path": "series.source.location",
            "hasToExist": true,
            "value": "WEB_SOURCE"
          }
        ]
      },
      "maxLength": null,
      "description": "REST Source (component) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:969",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "969",
      "builderLabel": "Nested Rows",
      "apexlangPath": "series.dataProfile.nestedRows",
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
            "path": "series.source.restSource",
            "hasToExist": true,
            "values": [
              "HAS_ARRAY_COLUMNS"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Nested Rows (component) in series.dataProfile.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:971",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "971",
      "builderLabel": "Low",
      "apexlangPath": "series.columnMapping.low",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "877",
            "path": "series.type",
            "hasToExist": true,
            "value": "boxPlot"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Low (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:972",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "972",
      "builderLabel": "High",
      "apexlangPath": "series.columnMapping.high",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "877",
            "path": "series.type",
            "hasToExist": true,
            "value": "boxPlot"
          }
        ]
      },
      "maxLength": 32767,
      "description": "High (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:975",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "975",
      "builderLabel": "Optimizer Hint",
      "apexlangPath": "series.source.optimizerHint",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "1032",
            "path": "series.source.location",
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
      "description": "Optimizer Hint (text) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:976",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "976",
      "builderLabel": "Q2 Color",
      "apexlangPath": "series.appearance.q2Color",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "boxPlot"
          }
        ]
      },
      "maxLength": 255,
      "description": "Q2 Color (color) in series.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:977",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "977",
      "builderLabel": "Q3 Color",
      "apexlangPath": "series.appearance.q3Color",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "boxPlot"
          }
        ]
      },
      "maxLength": 255,
      "description": "Q3 Color (color) in series.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:978",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "978",
      "builderLabel": "Include ROWID Column",
      "apexlangPath": "series.source.includeRowidColumn",
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
            "path": "series.source.type",
            "hasToExist": true,
            "value": "TABLE"
          },
          {
            "type": "FEATURES",
            "propertyId": "958",
            "path": "series.source.remoteServer",
            "hasToExist": false,
            "values": [
              "IS_ORACLE"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Include ROWID Column (yes no) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:992",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "992",
      "builderLabel": "Start Date Source Type",
      "apexlangPath": "series.timeline.startDateSourceType",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "databaseColumn",
          "returnValue": "DB_COLUMN",
          "label": "Database Column"
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
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": null,
      "description": "Start Date Source Type (select list) in series.timeline.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:993",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "993",
      "builderLabel": "Start Date Column",
      "apexlangPath": "series.timeline.startDateColumn",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          },
          {
            "type": "EQUALS",
            "propertyId": "992",
            "path": "series.timeline.startDateSourceType",
            "hasToExist": true,
            "value": "DB_COLUMN"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Start Date Column (column) in series.timeline.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:994",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "994",
      "builderLabel": "Start Date Item",
      "apexlangPath": "series.timeline.startDateItem",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          },
          {
            "type": "EQUALS",
            "propertyId": "992",
            "path": "series.timeline.startDateSourceType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 255,
      "description": "Start Date Item (item) in series.timeline.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:995",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "995",
      "builderLabel": "End Date Source Type",
      "apexlangPath": "series.timeline.endDateSourceType",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "databaseColumn",
          "returnValue": "DB_COLUMN",
          "label": "Database Column"
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
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": null,
      "description": "End Date Source Type (select list) in series.timeline.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:996",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "996",
      "builderLabel": "End Date Column",
      "apexlangPath": "series.timeline.endDateColumn",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          },
          {
            "type": "EQUALS",
            "propertyId": "995",
            "path": "series.timeline.endDateSourceType",
            "hasToExist": true,
            "value": "DB_COLUMN"
          }
        ]
      },
      "maxLength": 32767,
      "description": "End Date Column (column) in series.timeline.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:997",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "997",
      "builderLabel": "End Date Item",
      "apexlangPath": "series.timeline.endDateItem",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          },
          {
            "type": "EQUALS",
            "propertyId": "995",
            "path": "series.timeline.endDateSourceType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 255,
      "description": "End Date Item (item) in series.timeline.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:999",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "999",
      "builderLabel": "Value Aggregation",
      "apexlangPath": "series.columnMapping.valueAggregation",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "count",
          "returnValue": "COUNT",
          "label": "Count"
        },
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
          "name": "median",
          "returnValue": "MEDIAN",
          "label": "Median"
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
          "name": "countDistinct",
          "returnValue": "COUNT_DISTINCT",
          "label": "Count Distinct"
        },
        {
          "name": "approxCountDistinct",
          "returnValue": "APPROX_COUNT_DISTINCT",
          "label": "Approx. Count Distinct"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "operator": "OR",
            "conditions": [
              {
                "type": "IN_LIST",
                "propertyId": "829",
                "path": "attributes.chart.type",
                "hasToExist": true,
                "values": [
                  "area",
                  "bar",
                  "dial",
                  "funnel",
                  "pyramid",
                  "line",
                  "lineWithArea",
                  "pie",
                  "donut"
                ]
              },
              {
                "type": "IN_LIST",
                "propertyId": "864",
                "path": "series.type",
                "hasToExist": true,
                "values": [
                  "area",
                  "bar",
                  "line",
                  "lineWithArea"
                ]
              },
              {
                "type": "IN_LIST",
                "propertyId": "877",
                "path": "series.type",
                "hasToExist": true,
                "values": [
                  "area",
                  "bar",
                  "line",
                  "lineWithArea",
                  "boxPlot"
                ]
              },
              {
                "type": "IN_LIST",
                "propertyId": "875",
                "path": "series.type",
                "hasToExist": true,
                "values": [
                  "area",
                  "bar",
                  "line",
                  "lineWithArea"
                ]
              },
              {
                "type": "IN_LIST",
                "propertyId": "876",
                "path": "series.type",
                "hasToExist": true,
                "values": [
                  "area",
                  "line",
                  "areaRange"
                ]
              }
            ]
          },
          {
            "type": "NOT_IN_LIST",
            "propertyId": "959",
            "path": "series.source.type",
            "hasToExist": false,
            "values": [
              "SQL",
              "FUNC_BODY_RETURNING_SQL"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Value Aggregation (select list) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1017",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1017",
      "builderLabel": "Row ID",
      "apexlangPath": "series.columnMapping.rowId",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Row ID (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1018",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1018",
      "builderLabel": "Row Name",
      "apexlangPath": "series.columnMapping.rowName",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Row Name (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1019",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1019",
      "builderLabel": "Task ID",
      "apexlangPath": "series.columnMapping.taskId",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Task ID (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1020",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1020",
      "builderLabel": "Task Name",
      "apexlangPath": "series.columnMapping.taskName",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Task Name (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1021",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1021",
      "builderLabel": "Task Start Date",
      "apexlangPath": "series.columnMapping.taskStartDate",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Task Start Date (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1022",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1022",
      "builderLabel": "Task End Date",
      "apexlangPath": "series.columnMapping.taskEndDate",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Task End Date (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1024",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1024",
      "builderLabel": "Task CSS Classes",
      "apexlangPath": "series.appearance.taskCssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 255,
      "description": "Task CSS Classes (combobox) in series.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1025",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1025",
      "builderLabel": "Progress CSS Classes",
      "apexlangPath": "series.appearance.progressCssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 255,
      "description": "Progress CSS Classes (combobox) in series.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1026",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1026",
      "builderLabel": "Baseline Start Date",
      "apexlangPath": "series.columnMapping.baselineStartDate",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Baseline Start Date (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1027",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1027",
      "builderLabel": "Baseline End Date",
      "apexlangPath": "series.columnMapping.baselineEndDate",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Baseline End Date (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1028",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1028",
      "builderLabel": "Progress",
      "apexlangPath": "series.columnMapping.progress",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Progress (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1029",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1029",
      "builderLabel": "Start Date Source Type",
      "apexlangPath": "series.viewport.startDateSourceType",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "databaseColumn",
          "returnValue": "DB_COLUMN",
          "label": "Database Column"
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
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": null,
      "description": "Start Date Source Type (select list) in series.viewport.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1030",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1030",
      "builderLabel": "Start Date Column",
      "apexlangPath": "series.viewport.startDateColumn",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          },
          {
            "type": "EQUALS",
            "propertyId": "1029",
            "path": "series.viewport.startDateSourceType",
            "hasToExist": true,
            "value": "DB_COLUMN"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Start Date Column (column) in series.viewport.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1031",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1031",
      "builderLabel": "Task Label Position",
      "apexlangPath": "series.label.taskLabelPosition",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "end",
      "values": [
        {
          "name": "start",
          "returnValue": "start",
          "label": "Start"
        },
        {
          "name": "end",
          "returnValue": "end",
          "label": "End"
        },
        {
          "name": "innerCenter",
          "returnValue": "innerCenter",
          "label": "Inner Center"
        },
        {
          "name": "innerStart",
          "returnValue": "innerStart",
          "label": "Inner Start"
        },
        {
          "name": "innerEnd",
          "returnValue": "innerEnd",
          "label": "Inner End"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          },
          {
            "type": "EQUALS",
            "propertyId": "908",
            "path": "series.label.show",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Task Label Position (select list) in series.label.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1032",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1032",
      "builderLabel": "Location",
      "apexlangPath": "series.source.location",
      "type": "SELECT LIST",
      "required": true,
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
          "name": "regionSource",
          "returnValue": "REGION_SOURCE",
          "label": "Region Source"
        },
        {
          "name": "sampleData",
          "returnValue": "SAMPLE_DATA",
          "label": "Sample Data"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Location (select list) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1033",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1033",
      "builderLabel": "Value",
      "apexlangPath": "series.columnMapping.value",
      "type": "COLUMN",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "operator": "OR",
            "conditions": [
              {
                "type": "IN_LIST",
                "propertyId": "829",
                "path": "attributes.chart.type",
                "hasToExist": true,
                "values": [
                  "area",
                  "bar",
                  "dial",
                  "funnel",
                  "pyramid",
                  "line",
                  "lineWithArea",
                  "pie",
                  "donut"
                ]
              },
              {
                "type": "IN_LIST",
                "propertyId": "864",
                "path": "series.type",
                "hasToExist": true,
                "values": [
                  "area",
                  "bar",
                  "line",
                  "lineWithArea"
                ]
              },
              {
                "type": "IN_LIST",
                "propertyId": "877",
                "path": "series.type",
                "hasToExist": true,
                "values": [
                  "area",
                  "bar",
                  "line",
                  "lineWithArea",
                  "boxPlot"
                ]
              },
              {
                "type": "IN_LIST",
                "propertyId": "875",
                "path": "series.type",
                "hasToExist": true,
                "values": [
                  "area",
                  "bar",
                  "line",
                  "lineWithArea"
                ]
              },
              {
                "type": "IN_LIST",
                "propertyId": "876",
                "path": "series.type",
                "hasToExist": true,
                "values": [
                  "area",
                  "line",
                  "areaRange"
                ]
              }
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "999",
            "path": "series.columnMapping.valueAggregation",
            "hasToExist": false,
            "values": [
              "$NULL$",
              "SUM",
              "AVG",
              "MEDIAN",
              "MIN",
              "MAX",
              "COUNT_DISTINCT",
              "APPROX_COUNT_DISTINCT"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Value (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1034",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1034",
      "builderLabel": "Type",
      "apexlangPath": "series.localPostProcessing.type",
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
            "path": "series.source.restSource",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1035",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1035",
      "builderLabel": "Where Clause",
      "apexlangPath": "series.localPostProcessing.whereClause",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "value": "WHERE_ORDER_BY_CLAUSE"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Where Clause (where clause) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1036",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1036",
      "builderLabel": "Order By Clause",
      "apexlangPath": "series.localPostProcessing.orderByClause",
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
            "path": "series.localPostProcessing.orderByType",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Order By Clause (order by clause) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1037",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1037",
      "builderLabel": "Start Date Item",
      "apexlangPath": "series.viewport.startDateItem",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          },
          {
            "type": "EQUALS",
            "propertyId": "1029",
            "path": "series.viewport.startDateSourceType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 255,
      "description": "Start Date Item (item) in series.viewport.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1038",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1038",
      "builderLabel": "End Date Source Type",
      "apexlangPath": "series.viewport.endDateSourceType",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "databaseColumn",
          "returnValue": "DB_COLUMN",
          "label": "Database Column"
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
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": null,
      "description": "End Date Source Type (select list) in series.viewport.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1039",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1039",
      "builderLabel": "End Date Column",
      "apexlangPath": "series.viewport.endDateColumn",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          },
          {
            "type": "EQUALS",
            "propertyId": "1038",
            "path": "series.viewport.endDateSourceType",
            "hasToExist": true,
            "value": "DB_COLUMN"
          }
        ]
      },
      "maxLength": 32767,
      "description": "End Date Column (column) in series.viewport.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1040",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1040",
      "builderLabel": "End Date Item",
      "apexlangPath": "series.viewport.endDateItem",
      "type": "ITEM",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          },
          {
            "type": "EQUALS",
            "propertyId": "1038",
            "path": "series.viewport.endDateSourceType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 255,
      "description": "End Date Item (item) in series.viewport.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1041",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1041",
      "builderLabel": "SQL Query",
      "apexlangPath": "series.localPostProcessing.sqlQuery",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "SQL Query (sql) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1042",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1042",
      "builderLabel": "Enabled",
      "apexlangPath": "series.externalFilterAndOrderBy.enabled",
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
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "IN_LIST",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
            "hasToExist": false,
            "values": [
              "N",
              "$NULL$"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Enabled (yes no) in series.externalFilterAndOrderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1043",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1043",
      "builderLabel": "Filter",
      "apexlangPath": "series.externalFilterAndOrderBy.filter",
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
            "path": "series.externalFilterAndOrderBy.enabled",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Filter (text editor) in series.externalFilterAndOrderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1044",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1044",
      "builderLabel": "Order By",
      "apexlangPath": "series.externalFilterAndOrderBy.orderBy",
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
            "path": "series.externalFilterAndOrderBy.orderByType",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Order By (text editor) in series.externalFilterAndOrderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1045",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1045",
      "builderLabel": "Baseline CSS Classes",
      "apexlangPath": "series.appearance.baselineCssClasses",
      "type": "COMBOBOX",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "gantt"
          }
        ]
      },
      "maxLength": 255,
      "description": "Baseline CSS Classes (combobox) in series.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1046",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1046",
      "builderLabel": "Display As",
      "apexlangPath": "series.label.displayAs",
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
          "name": "percentage",
          "returnValue": "PERCENT",
          "label": "Percentage"
        },
        {
          "name": "value",
          "returnValue": "VALUE",
          "label": "Value"
        },
        {
          "name": "labelValue",
          "returnValue": "LBL_VAL",
          "label": "Label - Value"
        },
        {
          "name": "labelPercentage",
          "returnValue": "LBL_PCT",
          "label": "Label - Percentage"
        },
        {
          "name": "labelPercentageValue",
          "returnValue": "ALL",
          "label": "Label - Percentage ( Value )"
        },
        {
          "name": "percentageValue",
          "returnValue": "COMBO",
          "label": "Percentage ( Value )"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "908",
            "path": "series.label.show",
            "hasToExist": true,
            "value": "Y"
          },
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "pie",
              "donut"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Display As (select list) in series.label.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1053",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1053",
      "builderLabel": "Plot Area Color",
      "apexlangPath": "series.appearance.plotAreaColor",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": 255,
      "description": "Plot Area Color (color) in series.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1054",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1054",
      "builderLabel": "Values",
      "apexlangPath": "series.thresholds.values",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Values (text) in series.thresholds.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1056",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1056",
      "builderLabel": "Label",
      "apexlangPath": "series.columnMapping.label",
      "type": "COLUMN",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Label (column) in series.columnMapping.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1057",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1057",
      "builderLabel": "Colors",
      "apexlangPath": "series.thresholds.colors",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Colors (text) in series.thresholds.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1058",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1058",
      "builderLabel": "Display",
      "apexlangPath": "series.thresholds.display",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "all",
          "returnValue": "all",
          "label": "All"
        },
        {
          "name": "onIndicator",
          "returnValue": "onIndicator",
          "label": "On Indicator"
        },
        {
          "name": "currentThresholdOnly",
          "returnValue": "currentOnly",
          "label": "Current Threshold Only"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": null,
      "description": "Display (select list) in series.thresholds.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1063",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1063",
      "builderLabel": "Values",
      "apexlangPath": "series.referenceLines.values",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Values (text) in series.referenceLines.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1064",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1064",
      "builderLabel": "Colors",
      "apexlangPath": "series.referenceLines.colors",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "value": "dial"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Colors (text) in series.referenceLines.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1065",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1065",
      "builderLabel": "Stack Category",
      "apexlangPath": "series.appearance.stackCategory",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "line",
              "lineWithArea",
              "combo"
            ]
          }
        ]
      },
      "maxLength": 100,
      "description": "Stack Category (text) in series.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1079",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1079",
      "builderLabel": "Font Family",
      "apexlangPath": "series.label.fontFamily",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "arial",
          "returnValue": "Arial",
          "label": "Arial"
        },
        {
          "name": "arialBlack",
          "returnValue": "Arial Black",
          "label": "Arial Black"
        },
        {
          "name": "bookman",
          "returnValue": "Bookman",
          "label": "Bookman"
        },
        {
          "name": "comicSansMs",
          "returnValue": "Comic Sans MS",
          "label": "Comic Sans MS"
        },
        {
          "name": "courier",
          "returnValue": "Courier",
          "label": "Courier"
        },
        {
          "name": "courierNew",
          "returnValue": "Courier New",
          "label": "Courier New"
        },
        {
          "name": "garamond",
          "returnValue": "Garamond",
          "label": "Garamond"
        },
        {
          "name": "georgia",
          "returnValue": "Georgia",
          "label": "Georgia"
        },
        {
          "name": "helvetica",
          "returnValue": "Helvetica",
          "label": "Helvetica"
        },
        {
          "name": "impact",
          "returnValue": "Impact",
          "label": "Impact"
        },
        {
          "name": "palatino",
          "returnValue": "Palatino",
          "label": "Palatino"
        },
        {
          "name": "times",
          "returnValue": "Times",
          "label": "Times"
        },
        {
          "name": "timesNewRoman",
          "returnValue": "Times New Roman",
          "label": "Times New Roman"
        },
        {
          "name": "trebuchetMs",
          "returnValue": "Trebuchet MS",
          "label": "Trebuchet MS"
        },
        {
          "name": "verdana",
          "returnValue": "Verdana",
          "label": "Verdana"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "908",
            "path": "series.label.show",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Font Family (select list) in series.label.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1080",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1080",
      "builderLabel": "Font Style",
      "apexlangPath": "series.label.fontStyle",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "normal",
          "returnValue": "normal",
          "label": "Normal"
        },
        {
          "name": "italic",
          "returnValue": "italic",
          "label": "Italic"
        },
        {
          "name": "oblique",
          "returnValue": "oblique",
          "label": "Oblique"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "908",
            "path": "series.label.show",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Font Style (select list) in series.label.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1081",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1081",
      "builderLabel": "Font Size",
      "apexlangPath": "series.label.fontSize",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "8",
          "returnValue": "8",
          "label": "8"
        },
        {
          "name": "10",
          "returnValue": "10",
          "label": "10"
        },
        {
          "name": "12",
          "returnValue": "12",
          "label": "12"
        },
        {
          "name": "14",
          "returnValue": "14",
          "label": "14"
        },
        {
          "name": "16",
          "returnValue": "16",
          "label": "16"
        },
        {
          "name": "18",
          "returnValue": "18",
          "label": "18"
        },
        {
          "name": "20",
          "returnValue": "20",
          "label": "20"
        },
        {
          "name": "22",
          "returnValue": "22",
          "label": "22"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "908",
            "path": "series.label.show",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Font Size (select list) in series.label.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1082",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1082",
      "builderLabel": "Font Color",
      "apexlangPath": "series.label.fontColor",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "908",
            "path": "series.label.show",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": 255,
      "description": "Font Color (color) in series.label.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1112",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1112",
      "builderLabel": "Use Local Table",
      "apexlangPath": "series.restSynchronization.useLocalTable",
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
            "path": "series.source.restSource",
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
                "path": "series.dataProfile.nestedRows",
                "hasToExist": true
              },
              {
                "type": "FEATURES",
                "propertyId": "967",
                "path": "series.source.restSource",
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
            "path": "series.dataProfile.nestedRows",
            "hasToExist": true,
            "values": [
              "IS_SYNCED"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Use Local Table (yes no) in series.restSynchronization.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1238",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1238",
      "builderLabel": "Type",
      "apexlangPath": "series.orderBy.type",
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
            "type": "IN_LIST",
            "propertyId": "1032",
            "path": "series.source.location",
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
            "path": "series.source.type",
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
      "description": "Type (select list) in series.orderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1239",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1239",
      "builderLabel": "Item",
      "apexlangPath": "series.orderBy.item",
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
            "path": "series.orderBy.type",
            "hasToExist": true,
            "value": "ITEM"
          },
          {
            "type": "IN_LIST",
            "propertyId": "959",
            "path": "series.source.type",
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
      "description": "Item (order by item) in series.orderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1241",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1241",
      "builderLabel": "Order By Type",
      "apexlangPath": "series.localPostProcessing.orderByType",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "value": "WHERE_ORDER_BY_CLAUSE"
          }
        ]
      },
      "maxLength": null,
      "description": "Order By Type (select list) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1242",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1242",
      "builderLabel": "Item",
      "apexlangPath": "series.localPostProcessing.item",
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
            "path": "series.localPostProcessing.orderByType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Item (order by item) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1243",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1243",
      "builderLabel": "Order By Item",
      "apexlangPath": "series.localPostProcessing.orderByItem",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "values": [
              "SQL",
              "FUNC_BODY_RETURNING_SQL"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Order By Item (order by item) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1244",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1244",
      "builderLabel": "Order By Type",
      "apexlangPath": "series.externalFilterAndOrderBy.orderByType",
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
            "propertyId": "1042",
            "path": "series.externalFilterAndOrderBy.enabled",
            "hasToExist": true,
            "value": "Y"
          }
        ]
      },
      "maxLength": null,
      "description": "Order By Type (select list) in series.externalFilterAndOrderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:1245",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "1245",
      "builderLabel": "Item",
      "apexlangPath": "series.externalFilterAndOrderBy.item",
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
            "path": "series.externalFilterAndOrderBy.orderByType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (order by item) in series.externalFilterAndOrderBy.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5100",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5100",
      "builderLabel": "Type",
      "apexlangPath": "series.serverSideCondition.type",
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
      "description": "Type (select list) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5101",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5101",
      "builderLabel": "SQL Query",
      "apexlangPath": "series.serverSideCondition.sqlQuery",
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
            "path": "series.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "EXISTS",
              "NOT_EXISTS"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Query (sql) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5102",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5102",
      "builderLabel": "Value",
      "apexlangPath": "series.serverSideCondition.value",
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
            "path": "series.serverSideCondition.type",
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
      "description": "Value (text) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5103",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5103",
      "builderLabel": "Item",
      "apexlangPath": "series.serverSideCondition.item",
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
            "path": "series.serverSideCondition.type",
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
      "description": "Item (item) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5104",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5104",
      "builderLabel": "List",
      "apexlangPath": "series.serverSideCondition.list",
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
            "path": "series.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "VALUE_OF_ITEM_IN_CONDITION_IN_COLON_DELIMITED_LIST",
              "VALUE_OF_ITEM_IN_CONDITION_NOT_IN_COLON_DELIMITED_LIST"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "List (text) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5105",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5105",
      "builderLabel": "Preference",
      "apexlangPath": "series.serverSideCondition.preference",
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
            "path": "series.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "USER_PREF_IN_COND_EQ_COND2",
              "USER_PREF_IN_COND_NOT_EQ_COND2"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Preference (text) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5106",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5106",
      "builderLabel": "Page",
      "apexlangPath": "series.serverSideCondition.page",
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
            "path": "series.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_EQUALS_CONDITION",
              "CURRENT_PAGE_NOT_EQUAL_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Page (page) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5107",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5107",
      "builderLabel": "Pages",
      "apexlangPath": "series.serverSideCondition.pages",
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
            "path": "series.serverSideCondition.type",
            "hasToExist": true,
            "values": [
              "CURRENT_PAGE_IN_CONDITION",
              "CURRENT_PAGE_NOT_IN_CONDITION"
            ]
          }
        ]
      },
      "maxLength": 4000,
      "description": "Pages (page) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5108",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5108",
      "builderLabel": "Text",
      "apexlangPath": "series.serverSideCondition.text",
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
            "path": "series.serverSideCondition.type",
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
      "description": "Text (text) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5109",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5109",
      "builderLabel": "Value",
      "apexlangPath": "series.serverSideCondition.value",
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
            "path": "series.serverSideCondition.type",
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
      "description": "Value (text) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5110",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5110",
      "builderLabel": "Item",
      "apexlangPath": "series.serverSideCondition.item",
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
            "path": "series.serverSideCondition.type",
            "hasToExist": true,
            "value": "CONDITION1_IN_VALUE_OF_ITEM_IN_CONDITION2"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Item (item) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5111",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5111",
      "builderLabel": "Value",
      "apexlangPath": "series.serverSideCondition.value",
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
            "path": "series.serverSideCondition.type",
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
      "description": "Value (text) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5112",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5112",
      "builderLabel": "Language",
      "apexlangPath": "series.serverSideCondition.language",
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
            "path": "series.serverSideCondition.type",
            "hasToExist": true,
            "value": "EXPRESSION"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5113",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5113",
      "builderLabel": "SQL Expression",
      "apexlangPath": "series.serverSideCondition.sqlExpression",
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
            "path": "series.serverSideCondition.language",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "SQL Expression (sql expression boolean) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5114",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5114",
      "builderLabel": "PL/SQL Expression",
      "apexlangPath": "series.serverSideCondition.plsqlExpression",
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
            "path": "series.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Expression (plsql expression boolean) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5115",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5115",
      "builderLabel": "JavaScript Expression",
      "apexlangPath": "series.serverSideCondition.javaScriptExpression",
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
            "path": "series.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Expression (mle javascript expression boolean) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5132",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5132",
      "builderLabel": "Language",
      "apexlangPath": "series.serverSideCondition.language",
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
            "path": "series.serverSideCondition.type",
            "hasToExist": true,
            "value": "FUNCTION_BODY"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5133",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5133",
      "builderLabel": "PL/SQL Function Body",
      "apexlangPath": "series.serverSideCondition.plsqlFunctionBody",
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
            "path": "series.serverSideCondition.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 4000,
      "description": "PL/SQL Function Body (plsql function body boolean) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5134",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5134",
      "builderLabel": "JavaScript Function Body",
      "apexlangPath": "series.serverSideCondition.javaScriptFunctionBody",
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
            "path": "series.serverSideCondition.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 4000,
      "description": "JavaScript Function Body (mle javascript function body boolean) in series.serverSideCondition.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5360",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5360",
      "builderLabel": "Language",
      "apexlangPath": "series.source.language",
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
            "path": "series.source.type",
            "hasToExist": true,
            "value": "FUNC_BODY_RETURNING_SQL"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5361",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5361",
      "builderLabel": "PL/SQL Function Body returning SQL Query",
      "apexlangPath": "series.source.plsqlFunctionBody",
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
            "path": "series.source.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Function Body returning SQL Query (plsql function body sql) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5362",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5362",
      "builderLabel": "JavaScript Function Body returning SQL Query",
      "apexlangPath": "series.source.javaScriptFunctionBody",
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
            "path": "series.source.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "JavaScript Function Body returning SQL Query (mle javascript function body sql) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5380",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5380",
      "builderLabel": "Language",
      "apexlangPath": "series.localPostProcessing.language",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "value": "FUNC_BODY_RETURNING_SQL"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5381",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5381",
      "builderLabel": "PL/SQL Function Body returning SQL Query",
      "apexlangPath": "series.localPostProcessing.plsqlFunctionBody",
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
            "path": "series.localPostProcessing.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Function Body returning SQL Query (plsql function body sql) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:5382",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "5382",
      "builderLabel": "JavaScript Function Body returning SQL Query",
      "apexlangPath": "series.localPostProcessing.javaScriptFunctionBody",
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
            "path": "series.localPostProcessing.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "JavaScript Function Body returning SQL Query (mle javascript function body sql) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:12171001",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "12171001",
      "builderLabel": "Sample Data",
      "apexlangPath": "series.source.sampleData",
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
            "propertyId": "1032",
            "path": "series.source.location",
            "hasToExist": true,
            "value": "SAMPLE_DATA"
          }
        ]
      },
      "maxLength": null,
      "description": "Sample Data (select list) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520005",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520005",
      "builderLabel": "JSON Duality View",
      "apexlangPath": "series.source.jsonDualityView",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1032",
            "path": "series.source.location",
            "hasToExist": true,
            "value": "DUALITY_VIEW"
          }
        ]
      },
      "maxLength": null,
      "description": "JSON Duality View (component) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520006",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520006",
      "builderLabel": "JSON Source",
      "apexlangPath": "series.source.jsonSource",
      "type": "COMPONENT",
      "required": true,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "1032",
            "path": "series.source.location",
            "hasToExist": true,
            "value": "JSON_COLLECTION"
          }
        ]
      },
      "maxLength": null,
      "description": "JSON Source (component) in series.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520009",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520009",
      "builderLabel": "Nested Rows",
      "apexlangPath": "series.dataProfile.nestedRows",
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
            "path": "series.source.jsonDualityView",
            "hasToExist": true,
            "values": [
              "HAS_ARRAY_COLUMNS"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Nested Rows (component) in series.dataProfile.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520010",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520010",
      "builderLabel": "Nested Rows",
      "apexlangPath": "series.dataProfile.nestedRows",
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
            "path": "series.source.jsonSource",
            "hasToExist": true,
            "values": [
              "HAS_ARRAY_COLUMNS"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Nested Rows (component) in series.dataProfile.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520012",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520012",
      "builderLabel": "Type",
      "apexlangPath": "series.localPostProcessing.type",
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
            "path": "series.source.jsonDualityView",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520013",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520013",
      "builderLabel": "Where Clause",
      "apexlangPath": "series.localPostProcessing.whereClause",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "value": "WHERE_ORDER_BY_CLAUSE"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Where Clause (where clause) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520014",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520014",
      "builderLabel": "Order By Clause",
      "apexlangPath": "series.localPostProcessing.orderByClause",
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
            "path": "series.localPostProcessing.orderByType",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Order By Clause (order by clause) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520015",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520015",
      "builderLabel": "SQL Query",
      "apexlangPath": "series.localPostProcessing.sqlQuery",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "SQL Query (sql) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520016",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520016",
      "builderLabel": "Order By Type",
      "apexlangPath": "series.localPostProcessing.orderByType",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "value": "WHERE_ORDER_BY_CLAUSE"
          }
        ]
      },
      "maxLength": null,
      "description": "Order By Type (select list) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520017",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520017",
      "builderLabel": "Item",
      "apexlangPath": "series.localPostProcessing.item",
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
            "path": "series.localPostProcessing.orderByType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Item (order by item) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520018",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520018",
      "builderLabel": "Order By Item",
      "apexlangPath": "series.localPostProcessing.orderByItem",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "values": [
              "SQL",
              "FUNC_BODY_RETURNING_SQL"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Order By Item (order by item) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520019",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520019",
      "builderLabel": "Type",
      "apexlangPath": "series.localPostProcessing.type",
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
            "path": "series.source.jsonSource",
            "hasToExist": true
          }
        ]
      },
      "maxLength": null,
      "description": "Type (select list) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520020",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520020",
      "builderLabel": "Where Clause",
      "apexlangPath": "series.localPostProcessing.whereClause",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "value": "WHERE_ORDER_BY_CLAUSE"
          }
        ]
      },
      "maxLength": 4000,
      "description": "Where Clause (where clause) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520021",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520021",
      "builderLabel": "Order By Clause",
      "apexlangPath": "series.localPostProcessing.orderByClause",
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
            "path": "series.localPostProcessing.orderByType",
            "hasToExist": true,
            "value": "STATIC"
          }
        ]
      },
      "maxLength": 255,
      "description": "Order By Clause (order by clause) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520022",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520022",
      "builderLabel": "SQL Query",
      "apexlangPath": "series.localPostProcessing.sqlQuery",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "value": "SQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "SQL Query (sql) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520023",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520023",
      "builderLabel": "Order By Type",
      "apexlangPath": "series.localPostProcessing.orderByType",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "value": "WHERE_ORDER_BY_CLAUSE"
          }
        ]
      },
      "maxLength": null,
      "description": "Order By Type (select list) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520024",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520024",
      "builderLabel": "Item",
      "apexlangPath": "series.localPostProcessing.item",
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
            "path": "series.localPostProcessing.orderByType",
            "hasToExist": true,
            "value": "ITEM"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Item (order by item) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520025",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520025",
      "builderLabel": "Order By Item",
      "apexlangPath": "series.localPostProcessing.orderByItem",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "values": [
              "SQL",
              "FUNC_BODY_RETURNING_SQL"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Order By Item (order by item) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520100",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520100",
      "builderLabel": "Language",
      "apexlangPath": "series.localPostProcessing.language",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "value": "FUNC_BODY_RETURNING_SQL"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520101",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520101",
      "builderLabel": "PL/SQL Function Body returning SQL Query",
      "apexlangPath": "series.localPostProcessing.plsqlFunctionBody",
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
            "path": "series.localPostProcessing.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Function Body returning SQL Query (plsql function body sql) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520102",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520102",
      "builderLabel": "JavaScript Function Body returning SQL Query",
      "apexlangPath": "series.localPostProcessing.javaScriptFunctionBody",
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
            "path": "series.localPostProcessing.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "JavaScript Function Body returning SQL Query (mle javascript function body sql) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520120",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520120",
      "builderLabel": "Language",
      "apexlangPath": "series.localPostProcessing.language",
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
            "path": "series.localPostProcessing.type",
            "hasToExist": true,
            "value": "FUNC_BODY_RETURNING_SQL"
          }
        ]
      },
      "maxLength": null,
      "description": "Language (code language) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520121",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520121",
      "builderLabel": "PL/SQL Function Body returning SQL Query",
      "apexlangPath": "series.localPostProcessing.plsqlFunctionBody",
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
            "path": "series.localPostProcessing.language",
            "hasToExist": true,
            "value": "PLSQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "PL/SQL Function Body returning SQL Query (plsql function body sql) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7820:53520122",
      "context": "series",
      "componentTypeId": "7820",
      "componentTitle": "Series",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": null,
      "propertyId": "53520122",
      "builderLabel": "JavaScript Function Body returning SQL Query",
      "apexlangPath": "series.localPostProcessing.javaScriptFunctionBody",
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
            "path": "series.localPostProcessing.language",
            "hasToExist": true,
            "value": "JAVASCRIPT"
          }
        ]
      },
      "maxLength": 32767,
      "description": "JavaScript Function Body returning SQL Query (mle javascript function body sql) in series.localPostProcessing.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:13",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "13",
      "builderLabel": "Title",
      "apexlangPath": "axis.title",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Title (text) in axis.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:180",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "180",
      "builderLabel": "Static ID",
      "apexlangPath": "axis.advanced.staticId",
      "type": "STATIC ID",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": null,
      "maxLength": 255,
      "description": "Static ID (static id) in axis.advanced.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:588",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "588",
      "builderLabel": "Decimal Places",
      "apexlangPath": "axis.value.decimalPlaces",
      "type": "INTEGER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "847",
            "path": "axis.value.format",
            "hasToExist": true,
            "values": [
              "decimal",
              "currency",
              "percent"
            ]
          },
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Decimal Places (integer) in axis.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:847",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "847",
      "builderLabel": "Format",
      "apexlangPath": "axis.value.format",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "dateShort",
          "returnValue": "date-short",
          "label": "Date - Short"
        },
        {
          "name": "dateMedium",
          "returnValue": "date-medium",
          "label": "Date - Medium"
        },
        {
          "name": "dateLong",
          "returnValue": "date-long",
          "label": "Date - Long"
        },
        {
          "name": "dateFull",
          "returnValue": "date-full",
          "label": "Date - Full"
        },
        {
          "name": "timeShort",
          "returnValue": "time-short",
          "label": "Time - Short"
        },
        {
          "name": "timeMedium",
          "returnValue": "time-medium",
          "label": "Time - Medium"
        },
        {
          "name": "timeLong",
          "returnValue": "time-long",
          "label": "Time - Long"
        },
        {
          "name": "timeFull",
          "returnValue": "time-full",
          "label": "Time - Full"
        },
        {
          "name": "datetimeShort",
          "returnValue": "datetime-short",
          "label": "DateTime - Short"
        },
        {
          "name": "datetimeMedium",
          "returnValue": "datetime-medium",
          "label": "DateTime - Medium"
        },
        {
          "name": "datetimeLong",
          "returnValue": "datetime-long",
          "label": "DateTime - Long"
        },
        {
          "name": "datetimeFull",
          "returnValue": "datetime-full",
          "label": "DateTime - Full"
        },
        {
          "name": "decimal",
          "returnValue": "decimal",
          "label": "Decimal"
        },
        {
          "name": "currency",
          "returnValue": "currency",
          "label": "Currency"
        },
        {
          "name": "percent",
          "returnValue": "percent",
          "label": "Percent"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Format (select list) in axis.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:848",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "848",
      "builderLabel": "Currency",
      "apexlangPath": "axis.value.currency",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "847",
            "path": "axis.value.format",
            "hasToExist": true,
            "value": "currency"
          },
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": 128,
      "description": "Currency (text) in axis.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:849",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "849",
      "builderLabel": "Pattern",
      "apexlangPath": "axis.value.pattern",
      "type": "TEXT",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "847",
            "path": "axis.value.format",
            "hasToExist": true
          },
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2",
              "major",
              "minor"
            ]
          }
        ]
      },
      "maxLength": 30,
      "description": "Pattern (text) in axis.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:850",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "850",
      "builderLabel": "Format Scaling",
      "apexlangPath": "axis.value.formatScaling",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "none",
          "returnValue": "none",
          "label": "None"
        },
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "thousand",
          "returnValue": "thousand",
          "label": "Thousand"
        },
        {
          "name": "million",
          "returnValue": "million",
          "label": "Million"
        },
        {
          "name": "billion",
          "returnValue": "billion",
          "label": "Billion"
        },
        {
          "name": "trillion",
          "returnValue": "trillion",
          "label": "Trillion"
        },
        {
          "name": "quadrillion",
          "returnValue": "quadrillion",
          "label": "Quadrillion"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Format Scaling (select list) in axis.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:912",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "912",
      "builderLabel": "Show Axis",
      "apexlangPath": "axis.showAxis",
      "type": "YES NO",
      "required": true,
      "defaultValue": "on",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2",
              "major"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show Axis (yes no) in axis.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:913",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "913",
      "builderLabel": "Minimum",
      "apexlangPath": "axis.value.min",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Minimum (number) in axis.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:914",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "914",
      "builderLabel": "Maximum",
      "apexlangPath": "axis.value.max",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Maximum (number) in axis.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:917",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "917",
      "builderLabel": "Baseline Scaling",
      "apexlangPath": "axis.value.baselineScaling",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "zero",
      "values": [
        {
          "name": "min",
          "returnValue": "min",
          "label": "Minimum"
        },
        {
          "name": "zero",
          "returnValue": "zero",
          "label": "Zero"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Baseline Scaling (select list) in axis.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:918",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "918",
      "builderLabel": "Step",
      "apexlangPath": "axis.value.step",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Step (number) in axis.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:919",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "919",
      "builderLabel": "Position",
      "apexlangPath": "axis.appearance.position",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "start",
          "returnValue": "start",
          "label": "Start"
        },
        {
          "name": "end",
          "returnValue": "end",
          "label": "End"
        },
        {
          "name": "top",
          "returnValue": "top",
          "label": "Top"
        },
        {
          "name": "bottom",
          "returnValue": "bottom",
          "label": "Bottom"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "major",
              "minor"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Position (select list) in axis.appearance.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:920",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "920",
      "builderLabel": "Show",
      "apexlangPath": "axis.majorTicks.show",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "on",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "true",
          "returnValue": "on",
          "label": "Yes"
        },
        {
          "name": "false",
          "returnValue": "off",
          "label": "No"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Show (select list) in axis.majorTicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:921",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "921",
      "builderLabel": "Minimum Step",
      "apexlangPath": "axis.majorTicks.minStep",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Minimum Step (number) in axis.majorTicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:922",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "922",
      "builderLabel": "Show",
      "apexlangPath": "axis.minorTicks.show",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "true",
          "returnValue": "on",
          "label": "Yes"
        },
        {
          "name": "false",
          "returnValue": "off",
          "label": "No"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Show (select list) in axis.minorTicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:923",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "923",
      "builderLabel": "Step",
      "apexlangPath": "axis.minorTicks.step",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": 22,
      "description": "Step (number) in axis.minorTicks.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:924",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "924",
      "builderLabel": "Show",
      "apexlangPath": "axis.tickLabel.show",
      "type": "YES NO",
      "required": true,
      "defaultValue": "on",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Show (yes no) in axis.tickLabel.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:925",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "925",
      "builderLabel": "Rotation",
      "apexlangPath": "axis.tickLabel.rotation",
      "type": "YES NO",
      "required": true,
      "defaultValue": "auto",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "924",
            "path": "axis.tickLabel.show",
            "hasToExist": true,
            "value": "on"
          },
          {
            "type": "EQUALS",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "value": "x"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Rotation (yes no) in axis.tickLabel.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:926",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "926",
      "builderLabel": "Position",
      "apexlangPath": "axis.tickLabel.position",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "outside",
      "values": [
        {
          "name": "outside",
          "returnValue": "outside",
          "label": "Outside"
        },
        {
          "name": "inside",
          "returnValue": "inside",
          "label": "Inside"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "924",
            "path": "axis.tickLabel.show",
            "hasToExist": true,
            "value": "on"
          },
          {
            "type": "EQUALS",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "value": "x"
          }
        ]
      },
      "maxLength": null,
      "description": "Position (select list) in axis.tickLabel.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:927",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "927",
      "builderLabel": "Show",
      "apexlangPath": "axis.dualYAxes.show",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "auto",
      "values": [
        {
          "name": "auto",
          "returnValue": "auto",
          "label": "Automatic"
        },
        {
          "name": "true",
          "returnValue": "on",
          "label": "Yes"
        },
        {
          "name": "false",
          "returnValue": "off",
          "label": "No"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "value": "y2"
          }
        ]
      },
      "maxLength": null,
      "description": "Show (select list) in axis.dualYAxes.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:928",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "928",
      "builderLabel": "Splitter Position",
      "apexlangPath": "axis.dualYAxes.splitterPosition",
      "type": "NUMBER",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_EQUALS",
            "propertyId": "927",
            "path": "axis.dualYAxes.show",
            "hasToExist": true,
            "value": "off"
          }
        ]
      },
      "maxLength": 22,
      "description": "Splitter Position (number) in axis.dualYAxes.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:938",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "938",
      "builderLabel": "Name",
      "apexlangPath": "axis.name",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "x",
          "returnValue": "x",
          "label": "x"
        },
        {
          "name": "y",
          "returnValue": "y",
          "label": "y"
        },
        {
          "name": "y2",
          "returnValue": "y2",
          "label": "y2"
        },
        {
          "name": "major",
          "returnValue": "major",
          "label": "major"
        },
        {
          "name": "minor",
          "returnValue": "minor",
          "label": "minor"
        }
      ],
      "condition": null,
      "maxLength": null,
      "description": "Name (select list) in axis.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:939",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "939",
      "builderLabel": "Scale",
      "apexlangPath": "axis.value.scale",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": "linear",
      "values": [
        {
          "name": "linear",
          "returnValue": "linear",
          "label": "Linear"
        },
        {
          "name": "log",
          "returnValue": "log",
          "label": "Log"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Scale (select list) in axis.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:983",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "983",
      "builderLabel": "Scale",
      "apexlangPath": "axis.timeScale.scale",
      "type": "SELECT LIST",
      "required": true,
      "defaultValue": null,
      "values": [
        {
          "name": "seconds",
          "returnValue": "seconds",
          "label": "Seconds"
        },
        {
          "name": "minutes",
          "returnValue": "minutes",
          "label": "Minutes"
        },
        {
          "name": "hours",
          "returnValue": "hours",
          "label": "Hours"
        },
        {
          "name": "days",
          "returnValue": "days",
          "label": "Days"
        },
        {
          "name": "weeks",
          "returnValue": "weeks",
          "label": "Weeks"
        },
        {
          "name": "months",
          "returnValue": "months",
          "label": "Months"
        },
        {
          "name": "quarters",
          "returnValue": "quarters",
          "label": "Quarters"
        },
        {
          "name": "years",
          "returnValue": "years",
          "label": "Years"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "major",
              "minor"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Scale (select list) in axis.timeScale.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:984",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "984",
      "builderLabel": "Seconds",
      "apexlangPath": "axis.zoomScale.seconds",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "major",
              "minor"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Seconds (yes no) in axis.zoomScale.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:985",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "985",
      "builderLabel": "Minutes",
      "apexlangPath": "axis.zoomScale.minutes",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "major",
              "minor"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Minutes (yes no) in axis.zoomScale.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:986",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "986",
      "builderLabel": "Hours",
      "apexlangPath": "axis.zoomScale.hours",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "major",
              "minor"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Hours (yes no) in axis.zoomScale.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:987",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "987",
      "builderLabel": "Days",
      "apexlangPath": "axis.zoomScale.days",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "major",
              "minor"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Days (yes no) in axis.zoomScale.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:988",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "988",
      "builderLabel": "Weeks",
      "apexlangPath": "axis.zoomScale.weeks",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "major",
              "minor"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Weeks (yes no) in axis.zoomScale.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:989",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "989",
      "builderLabel": "Months",
      "apexlangPath": "axis.zoomScale.months",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "major",
              "minor"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Months (yes no) in axis.zoomScale.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:990",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "990",
      "builderLabel": "Quarters",
      "apexlangPath": "axis.zoomScale.quarters",
      "type": "YES NO",
      "required": true,
      "defaultValue": "Y",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "major",
              "minor"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Quarters (yes no) in axis.zoomScale.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:991",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "991",
      "builderLabel": "Years",
      "apexlangPath": "axis.zoomScale.years",
      "type": "YES NO",
      "required": true,
      "defaultValue": "N",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "major",
              "minor"
            ]
          }
        ]
      },
      "maxLength": 32767,
      "description": "Years (yes no) in axis.zoomScale.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:1067",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "1067",
      "builderLabel": "Font Family",
      "apexlangPath": "axis.title.fontFamily",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "arial",
          "returnValue": "Arial",
          "label": "Arial"
        },
        {
          "name": "arialBlack",
          "returnValue": "Arial Black",
          "label": "Arial Black"
        },
        {
          "name": "bookman",
          "returnValue": "Bookman",
          "label": "Bookman"
        },
        {
          "name": "comicSansMs",
          "returnValue": "Comic Sans MS",
          "label": "Comic Sans MS"
        },
        {
          "name": "courier",
          "returnValue": "Courier",
          "label": "Courier"
        },
        {
          "name": "courierNew",
          "returnValue": "Courier New",
          "label": "Courier New"
        },
        {
          "name": "garamond",
          "returnValue": "Garamond",
          "label": "Garamond"
        },
        {
          "name": "georgia",
          "returnValue": "Georgia",
          "label": "Georgia"
        },
        {
          "name": "helvetica",
          "returnValue": "Helvetica",
          "label": "Helvetica"
        },
        {
          "name": "impact",
          "returnValue": "Impact",
          "label": "Impact"
        },
        {
          "name": "palatino",
          "returnValue": "Palatino",
          "label": "Palatino"
        },
        {
          "name": "times",
          "returnValue": "Times",
          "label": "Times"
        },
        {
          "name": "timesNewRoman",
          "returnValue": "Times New Roman",
          "label": "Times New Roman"
        },
        {
          "name": "trebuchetMs",
          "returnValue": "Trebuchet MS",
          "label": "Trebuchet MS"
        },
        {
          "name": "verdana",
          "returnValue": "Verdana",
          "label": "Verdana"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Font Family (select list) in axis.title.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:1068",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "1068",
      "builderLabel": "Font Style",
      "apexlangPath": "axis.title.fontStyle",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "normal",
          "returnValue": "normal",
          "label": "Normal"
        },
        {
          "name": "italic",
          "returnValue": "italic",
          "label": "Italic"
        },
        {
          "name": "oblique",
          "returnValue": "oblique",
          "label": "Oblique"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Font Style (select list) in axis.title.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:1069",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "1069",
      "builderLabel": "Font Size",
      "apexlangPath": "axis.title.fontSize",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "8",
          "returnValue": "8",
          "label": "8"
        },
        {
          "name": "10",
          "returnValue": "10",
          "label": "10"
        },
        {
          "name": "12",
          "returnValue": "12",
          "label": "12"
        },
        {
          "name": "14",
          "returnValue": "14",
          "label": "14"
        },
        {
          "name": "16",
          "returnValue": "16",
          "label": "16"
        },
        {
          "name": "18",
          "returnValue": "18",
          "label": "18"
        },
        {
          "name": "20",
          "returnValue": "20",
          "label": "20"
        },
        {
          "name": "22",
          "returnValue": "22",
          "label": "22"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Font Size (select list) in axis.title.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:1070",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "1070",
      "builderLabel": "Font Color",
      "apexlangPath": "axis.title.fontColor",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          }
        ]
      },
      "maxLength": 255,
      "description": "Font Color (color) in axis.title.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:1071",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "1071",
      "builderLabel": "Font Family",
      "apexlangPath": "axis.tickLabel.fontFamily",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "arial",
          "returnValue": "Arial",
          "label": "Arial"
        },
        {
          "name": "arialBlack",
          "returnValue": "Arial Black",
          "label": "Arial Black"
        },
        {
          "name": "bookman",
          "returnValue": "Bookman",
          "label": "Bookman"
        },
        {
          "name": "comicSansMs",
          "returnValue": "Comic Sans MS",
          "label": "Comic Sans MS"
        },
        {
          "name": "courier",
          "returnValue": "Courier",
          "label": "Courier"
        },
        {
          "name": "courierNew",
          "returnValue": "Courier New",
          "label": "Courier New"
        },
        {
          "name": "garamond",
          "returnValue": "Garamond",
          "label": "Garamond"
        },
        {
          "name": "georgia",
          "returnValue": "Georgia",
          "label": "Georgia"
        },
        {
          "name": "helvetica",
          "returnValue": "Helvetica",
          "label": "Helvetica"
        },
        {
          "name": "impact",
          "returnValue": "Impact",
          "label": "Impact"
        },
        {
          "name": "palatino",
          "returnValue": "Palatino",
          "label": "Palatino"
        },
        {
          "name": "times",
          "returnValue": "Times",
          "label": "Times"
        },
        {
          "name": "timesNewRoman",
          "returnValue": "Times New Roman",
          "label": "Times New Roman"
        },
        {
          "name": "trebuchetMs",
          "returnValue": "Trebuchet MS",
          "label": "Trebuchet MS"
        },
        {
          "name": "verdana",
          "returnValue": "Verdana",
          "label": "Verdana"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "924",
            "path": "axis.tickLabel.show",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": null,
      "description": "Font Family (select list) in axis.tickLabel.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:1072",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "1072",
      "builderLabel": "Font Style",
      "apexlangPath": "axis.tickLabel.fontStyle",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "normal",
          "returnValue": "normal",
          "label": "Normal"
        },
        {
          "name": "italic",
          "returnValue": "italic",
          "label": "Italic"
        },
        {
          "name": "oblique",
          "returnValue": "oblique",
          "label": "Oblique"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "924",
            "path": "axis.tickLabel.show",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": null,
      "description": "Font Style (select list) in axis.tickLabel.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:1073",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "1073",
      "builderLabel": "Font Size",
      "apexlangPath": "axis.tickLabel.fontSize",
      "type": "SELECT LIST",
      "required": false,
      "defaultValue": null,
      "values": [
        {
          "name": "8",
          "returnValue": "8",
          "label": "8"
        },
        {
          "name": "10",
          "returnValue": "10",
          "label": "10"
        },
        {
          "name": "12",
          "returnValue": "12",
          "label": "12"
        },
        {
          "name": "14",
          "returnValue": "14",
          "label": "14"
        },
        {
          "name": "16",
          "returnValue": "16",
          "label": "16"
        },
        {
          "name": "18",
          "returnValue": "18",
          "label": "18"
        },
        {
          "name": "20",
          "returnValue": "20",
          "label": "20"
        },
        {
          "name": "22",
          "returnValue": "22",
          "label": "22"
        }
      ],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "924",
            "path": "axis.tickLabel.show",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": null,
      "description": "Font Size (select list) in axis.tickLabel.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7830:1074",
      "context": "axis",
      "componentTypeId": "7830",
      "componentTitle": "Axis",
      "parentContext": "attributes",
      "parentComponentTypeId": "7810",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "829",
            "path": "attributes.chart.type",
            "hasToExist": true,
            "values": [
              "area",
              "bar",
              "boxPlot",
              "bubble",
              "combo",
              "gantt",
              "line",
              "lineWithArea",
              "polar",
              "radar",
              "range",
              "scatter",
              "stock"
            ]
          }
        ]
      },
      "propertyId": "1074",
      "builderLabel": "Font Color",
      "apexlangPath": "axis.tickLabel.fontColor",
      "type": "COLOR",
      "required": false,
      "defaultValue": null,
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "IN_LIST",
            "propertyId": "938",
            "path": "axis.name",
            "hasToExist": true,
            "values": [
              "x",
              "y",
              "y2"
            ]
          },
          {
            "type": "EQUALS",
            "propertyId": "924",
            "path": "axis.tickLabel.show",
            "hasToExist": true,
            "value": "on"
          }
        ]
      },
      "maxLength": 255,
      "description": "Font Color (color) in axis.tickLabel.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:35",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
              "IN_OUT_PARAMETER"
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
          }
        ]
      },
      "maxLength": 32767,
      "description": "Ignore Output (yes no) in parameter.parameter.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:76",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:184",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:185",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:235",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:1004",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:1005",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "condition": null,
      "maxLength": null,
      "description": "Type (select list) in parameter.value.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:1006",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:1007",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:1009",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:1012",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:1015",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:2381",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:6060",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:6061",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:6062",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:6063",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:6080",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:6081",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
    },
    {
      "id": "mmd:7840:6082",
      "context": "parameter",
      "componentTypeId": "7840",
      "componentTitle": "Parameter",
      "parentContext": "series",
      "parentComponentTypeId": "7820",
      "componentCondition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "NOT_NULL",
            "propertyId": "967",
            "path": "series.source.restSource",
            "hasToExist": true
          },
          {
            "type": "EQUALS",
            "propertyId": "1112",
            "path": "series.restSynchronization.useLocalTable",
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
      "nativeType": "chart"
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
        "id": "page:1902/region:1-bar",
        "pageId": 1902,
        "key": "1-bar",
        "type": "chart",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1902/region:2-dial-gauge",
        "pageId": 1902,
        "key": "2-dial-gauge",
        "type": "chart",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1902/region:3-donut",
        "pageId": 1902,
        "key": "3-donut",
        "type": "chart",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
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
