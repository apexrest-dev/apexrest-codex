# Content Block: parameters

component:regions/content-block

Parameter identities include their component context and APEXlang path. UI labels alone are not unique. Raw database return values and DSL enum values may differ. Missing descriptions or unresolved paths are not inferred as supported syntax.

Region template options and component-template options are independent surfaces. Current selections do not establish defaults. #DEFAULT# selects template defaults; it is not a CSS class.

```json
{
  "templateOptions": [
    {
      "id": "template-option:list/badge-list/2COLUMNGRID",
      "name": "2COLUMNGRID",
      "label": "2 Column Grid",
      "cssClasses": [
        "t-BadgeList--cols"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Arrange badges in a two column grid",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/badge-list/3COLUMNGRID",
      "name": "3COLUMNGRID",
      "label": "3 Column Grid",
      "cssClasses": [
        "t-BadgeList--cols t-BadgeList--3cols"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Arrange badges in a 3 column grid",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/badge-list/4COLUMNGRID",
      "name": "4COLUMNGRID",
      "label": "4 Column Grid",
      "cssClasses": [
        "t-BadgeList--cols t-BadgeList--4cols"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Arrange badges in 4 column grid",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/badge-list/5COLUMNGRID",
      "name": "5COLUMNGRID",
      "label": "5 Column Grid",
      "cssClasses": [
        "t-BadgeList--cols t-BadgeList--5cols"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Arrange badges in a 5 column grid",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/badge-list/APPLY_THEME_COLORS",
      "name": "APPLY_THEME_COLORS",
      "label": "Apply Theme Colors",
      "cssClasses": [
        "u-colors"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Apply Theme Colors: applies u-colors.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/badge-list/CIRCULAR",
      "name": "CIRCULAR",
      "label": "Circular",
      "cssClasses": [
        "t-BadgeList--circular"
      ],
      "groupId": "template-group:list/style-2",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Circular: applies t-BadgeList--circular within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/badge-list/FIXED",
      "name": "FIXED",
      "label": "Span Horizontally",
      "cssClasses": [
        "t-BadgeList--fixed"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Span badges horizontally",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/badge-list/FLEXIBLEBOX",
      "name": "FLEXIBLEBOX",
      "label": "Flexible Box",
      "cssClasses": [
        "t-BadgeList--flex"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Use flexbox to arrange items",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/badge-list/FLOATITEMS",
      "name": "FLOATITEMS",
      "label": "Float Items",
      "cssClasses": [
        "t-BadgeList--float"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Float badges to left",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/badge-list/GRID",
      "name": "GRID",
      "label": "Grid",
      "cssClasses": [
        "t-BadgeList--dash"
      ],
      "groupId": "template-group:list/style-2",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Grid: applies t-BadgeList--dash within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/badge-list/LARGE",
      "name": "LARGE",
      "label": "64px",
      "cssClasses": [
        "t-BadgeList--large"
      ],
      "groupId": "template-group:list/badge-size",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "64px: applies t-BadgeList--large within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/badge-list/MEDIUM",
      "name": "MEDIUM",
      "label": "48px",
      "cssClasses": [
        "t-BadgeList--medium"
      ],
      "groupId": "template-group:list/badge-size",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "48px: applies t-BadgeList--medium within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/badge-list/SMALL",
      "name": "SMALL",
      "label": "32px",
      "cssClasses": [
        "t-BadgeList--small"
      ],
      "groupId": "template-group:list/badge-size",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "32px: applies t-BadgeList--small within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/badge-list/STACKED",
      "name": "STACKED",
      "label": "Stacked",
      "cssClasses": [
        "t-BadgeList--stacked"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Stack badges on top of each other",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/badge-list/XLARGE",
      "name": "XLARGE",
      "label": "96px",
      "cssClasses": [
        "t-BadgeList--xlarge"
      ],
      "groupId": "template-group:list/badge-size",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "96px: applies t-BadgeList--xlarge within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/badge-list/XXLARGE",
      "name": "XXLARGE",
      "label": "128px",
      "cssClasses": [
        "t-BadgeList--xxlarge"
      ],
      "groupId": "template-group:list/badge-size",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Badge List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "128px: applies t-BadgeList--xxlarge within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/2_COLUMNS",
      "name": "2_COLUMNS",
      "label": "2 Columns",
      "cssClasses": [
        "t-Cards--cols"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "2 Columns: applies t-Cards--cols within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/2_LINES",
      "name": "2_LINES",
      "label": "2 Lines",
      "cssClasses": [
        "t-Cards--desc-2ln"
      ],
      "groupId": "template-group:list/body-text",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "2 Lines: applies t-Cards--desc-2ln within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/3_COLUMNS",
      "name": "3_COLUMNS",
      "label": "3 Columns",
      "cssClasses": [
        "t-Cards--3cols"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "3 Columns: applies t-Cards--3cols within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/3_LINES",
      "name": "3_LINES",
      "label": "3 Lines",
      "cssClasses": [
        "t-Cards--desc-3ln"
      ],
      "groupId": "template-group:list/body-text",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "3 Lines: applies t-Cards--desc-3ln within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/4_COLUMNS",
      "name": "4_COLUMNS",
      "label": "4 Columns",
      "cssClasses": [
        "t-Cards--4cols"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "4 Columns: applies t-Cards--4cols within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/4_LINES",
      "name": "4_LINES",
      "label": "4 Lines",
      "cssClasses": [
        "t-Cards--desc-4ln"
      ],
      "groupId": "template-group:list/body-text",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "4 Lines: applies t-Cards--desc-4ln within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/5_COLUMNS",
      "name": "5_COLUMNS",
      "label": "5 Columns",
      "cssClasses": [
        "t-Cards--5cols"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "5 Columns: applies t-Cards--5cols within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/BASIC",
      "name": "BASIC",
      "label": "Basic",
      "cssClasses": [
        "t-Cards--basic"
      ],
      "groupId": "template-group:list/style-2",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Basic: applies t-Cards--basic within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/BLOCK",
      "name": "BLOCK",
      "label": "Block",
      "cssClasses": [
        "t-Cards--featured t-Cards--block force-fa-lg"
      ],
      "groupId": "template-group:list/style-2",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Block: applies t-Cards--featured t-Cards--block force-fa-lg within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/CARDS_STACKED",
      "name": "CARDS_STACKED",
      "label": "Stacked",
      "cssClasses": [
        "t-Cards--stacked"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Stacks the cards on top of each other.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/cards/COLOR_FILL",
      "name": "COLOR_FILL",
      "label": "Color Fill",
      "cssClasses": [
        "t-Cards--animColorFill"
      ],
      "groupId": "template-group:list/animation",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Fills the card background with the color of the icon or default link style.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/cards/COMPACT",
      "name": "COMPACT",
      "label": "Compact",
      "cssClasses": [
        "t-Cards--compact"
      ],
      "groupId": "template-group:list/style-2",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Use this option when you want to show smaller cards.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/cards/DISPLAY_ICONS",
      "name": "DISPLAY_ICONS",
      "label": "Display Icons",
      "cssClasses": [
        "t-Cards--displayIcons"
      ],
      "groupId": "template-group:list/icons",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Display Icons: applies t-Cards--displayIcons within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/DISPLAY_INITIALS",
      "name": "DISPLAY_INITIALS",
      "label": "Display Initials",
      "cssClasses": [
        "t-Cards--displayInitials"
      ],
      "groupId": "template-group:list/icons",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Initials come from List Attribute 3",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/cards/DISPLAY_SUBTITLE",
      "name": "DISPLAY_SUBTITLE",
      "label": "Display Subtitle",
      "cssClasses": [
        "t-Cards--displaySubtitle"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Display Subtitle: applies t-Cards--displaySubtitle.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/FEATURED",
      "name": "FEATURED",
      "label": "Featured",
      "cssClasses": [
        "t-Cards--featured force-fa-lg"
      ],
      "groupId": "template-group:list/style-2",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Featured: applies t-Cards--featured force-fa-lg within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/FLOAT",
      "name": "FLOAT",
      "label": "Float",
      "cssClasses": [
        "t-Cards--float"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Float: applies t-Cards--float within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/HIDDEN_BODY_TEXT",
      "name": "HIDDEN_BODY_TEXT",
      "label": "Hidden",
      "cssClasses": [
        "t-Cards--hideBody"
      ],
      "groupId": "template-group:list/body-text",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "This option hides the card body which contains description and subtext.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/cards/ICONS_ROUNDED",
      "name": "ICONS_ROUNDED",
      "label": "Rounded Corners",
      "cssClasses": [
        "t-Cards--iconsRounded"
      ],
      "groupId": "template-group:list/icon-shape",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "The icons are displayed within a square with rounded corners.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/cards/ICONS_SQUARE",
      "name": "ICONS_SQUARE",
      "label": "Square",
      "cssClasses": [
        "t-Cards--iconsSquare"
      ],
      "groupId": "template-group:list/icon-shape",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "The icons are displayed within a square shape.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/cards/RAISE_CARD",
      "name": "RAISE_CARD",
      "label": "Raise Card",
      "cssClasses": [
        "t-Cards--animRaiseCard"
      ],
      "groupId": "template-group:list/animation",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Raises the card so it pops up.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/cards/SPAN_HORIZONTALLY",
      "name": "SPAN_HORIZONTALLY",
      "label": "Span Horizontally",
      "cssClasses": [
        "t-Cards--spanHorizontally"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Span Horizontally: applies t-Cards--spanHorizontally within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/cards/USE_THEME_COLORS",
      "name": "USE_THEME_COLORS",
      "label": "Apply Theme Colors",
      "cssClasses": [
        "u-colors"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Cards"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Applies the colors from the theme's color palette to the icons or initials within cards.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/links-list/ACTIONS",
      "name": "ACTIONS",
      "label": "Actions",
      "cssClasses": [
        "t-LinksList--actions"
      ],
      "groupId": "template-group:list/style-2",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Links List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Render as actions to be placed on the right side column.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/links-list/DISABLETEXTWRAPPING",
      "name": "DISABLETEXTWRAPPING",
      "label": "Disable Text Wrapping",
      "cssClasses": [
        "t-LinksList--nowrap"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Links List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Do not allow link text to wrap to new lines. Truncate with ellipsis.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/links-list/SHOWBADGES",
      "name": "SHOWBADGES",
      "label": "Show Badges",
      "cssClasses": [
        "t-LinksList--showBadge"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Links List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Show badge to right of link (requires Attribute 1 to be populated)",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/links-list/SHOWGOTOARROW",
      "name": "SHOWGOTOARROW",
      "label": "Show Right Arrow",
      "cssClasses": [
        "t-LinksList--showArrow"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Links List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Show arrow to the right of link",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/links-list/SHOWICONS",
      "name": "SHOWICONS",
      "label": "For All Items",
      "cssClasses": [
        "t-LinksList--showIcons"
      ],
      "groupId": "template-group:list/display-icons",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Links List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "For All Items: applies t-LinksList--showIcons within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/links-list/SHOWTOPICONS",
      "name": "SHOWTOPICONS",
      "label": "For Top Level Items Only",
      "cssClasses": [
        "t-LinksList--showTopIcons"
      ],
      "groupId": "template-group:list/display-icons",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Links List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "This will show icons for top level items of the list only. It will not show icons for sub lists.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/media-list/2COLUMNGRID",
      "name": "2COLUMNGRID",
      "label": "2 Column Grid",
      "cssClasses": [
        "t-MediaList--cols t-MediaList--2cols"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Media List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "2 Column Grid: applies t-MediaList--cols t-MediaList--2cols within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/media-list/3COLUMNGRID",
      "name": "3COLUMNGRID",
      "label": "3 Column Grid",
      "cssClasses": [
        "t-MediaList--cols t-MediaList--3cols"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Media List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "3 Column Grid: applies t-MediaList--cols t-MediaList--3cols within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/media-list/4COLUMNGRID",
      "name": "4COLUMNGRID",
      "label": "4 Column Grid",
      "cssClasses": [
        "t-MediaList--cols t-MediaList--4cols"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Media List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "4 Column Grid: applies t-MediaList--cols t-MediaList--4cols within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/media-list/5COLUMNGRID",
      "name": "5COLUMNGRID",
      "label": "5 Column Grid",
      "cssClasses": [
        "t-MediaList--cols t-MediaList--5cols"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Media List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "5 Column Grid: applies t-MediaList--cols t-MediaList--5cols within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/media-list/APPLY_THEME_COLORS",
      "name": "APPLY_THEME_COLORS",
      "label": "Apply Theme Colors",
      "cssClasses": [
        "u-colors"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Media List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Applies colors from the Theme's color palette to icons in the list.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/media-list/ICONS_ROUNDED",
      "name": "ICONS_ROUNDED",
      "label": "Rounded Corners",
      "cssClasses": [
        "t-MediaList--iconsRounded"
      ],
      "groupId": "template-group:list/icon-shape",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Media List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "The icons are displayed within a square with rounded corners.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/media-list/ICONS_SQUARE",
      "name": "ICONS_SQUARE",
      "label": "Square",
      "cssClasses": [
        "t-MediaList--iconsSquare"
      ],
      "groupId": "template-group:list/icon-shape",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Media List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "The icons are displayed within a square shape.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/media-list/LIST_SIZE_LARGE",
      "name": "LIST_SIZE_LARGE",
      "label": "Large",
      "cssClasses": [
        "t-MediaList--large force-fa-lg"
      ],
      "groupId": "template-group:list/size-3",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Media List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Increases the size of the text and icons in the list.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/media-list/SHOW_BADGES",
      "name": "SHOW_BADGES",
      "label": "Show Badges",
      "cssClasses": [
        "t-MediaList--showBadges"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Media List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Show a badge (Attribute 2) to the right of the list item.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/media-list/SHOW_DESCRIPTION",
      "name": "SHOW_DESCRIPTION",
      "label": "Show Description",
      "cssClasses": [
        "t-MediaList--showDesc"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Media List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Shows the description (Attribute 1) for each list item.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/media-list/SHOW_ICONS",
      "name": "SHOW_ICONS",
      "label": "Show Icons",
      "cssClasses": [
        "t-MediaList--showIcons"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Media List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Display an icon next to the list item.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/media-list/SPANHORIZONTAL",
      "name": "SPANHORIZONTAL",
      "label": "Span Horizontal",
      "cssClasses": [
        "t-MediaList--horizontal"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Media List"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Show all list items in one horizontal row.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/menu-bar/ADD_ACTIONS",
      "name": "ADD_ACTIONS",
      "label": "Add Actions",
      "cssClasses": [
        "js-addActions"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Menu Bar"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Use this option to add shortcuts for menu items. Note that actions.js must be included on your page to support this functionality.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/menu-bar/BEHAVE_LIKE_TABS",
      "name": "BEHAVE_LIKE_TABS",
      "label": "Behave Like Tabs",
      "cssClasses": [
        "js-tabLike"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Menu Bar"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Behave Like Tabs: applies js-tabLike.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/menu-bar/DISPLAY_MENU_CALLOUT",
      "name": "DISPLAY_MENU_CALLOUT",
      "label": "Display Menu Callout",
      "cssClasses": [
        "js-menu-callout"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Menu Bar"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Use this option to add display a callout for the menu.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/menu-bar/SHOW_SUB_MENU_ICONS",
      "name": "SHOW_SUB_MENU_ICONS",
      "label": "Show Sub Menu Icons",
      "cssClasses": [
        "js-showSubMenuIcons"
      ],
      "groupId": null,
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Menu Bar"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Show Sub Menu Icons: applies js-showSubMenuIcons.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/tabs/ABOVE_LABEL",
      "name": "ABOVE_LABEL",
      "label": "Above Label",
      "cssClasses": [
        "t-Tabs--iconsAbove"
      ],
      "groupId": "template-group:list/icons",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Tabs"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Places icons above tab label.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/tabs/FILL_LABELS",
      "name": "FILL_LABELS",
      "label": "Fill Labels",
      "cssClasses": [
        "t-Tabs--fillLabels"
      ],
      "groupId": "template-group:list/layout",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Tabs"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Stretch tabs to fill to the width of the tabs container.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/tabs/INLINE_WITH_LABEL",
      "name": "INLINE_WITH_LABEL",
      "label": "Inline with Label",
      "cssClasses": [
        "t-Tabs--inlineIcons"
      ],
      "groupId": "template-group:list/icons",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Tabs"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Inline with Label: applies t-Tabs--inlineIcons within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:list/tabs/LARGE",
      "name": "LARGE",
      "label": "Large",
      "cssClasses": [
        "t-Tabs--large"
      ],
      "groupId": "template-group:list/size-3",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Tabs"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Increases font size and white space around tab items.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/tabs/PILL",
      "name": "PILL",
      "label": "Pill",
      "cssClasses": [
        "t-Tabs--pill"
      ],
      "groupId": "template-group:list/style-2",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Tabs"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Displays tabs in a pill container.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/tabs/SIMPLE",
      "name": "SIMPLE",
      "label": "Simple",
      "cssClasses": [
        "t-Tabs--simple"
      ],
      "groupId": "template-group:list/style-2",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Tabs"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "A very simplistic tab UI.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:list/tabs/SMALL",
      "name": "SMALL",
      "label": "Small",
      "cssClasses": [
        "t-Tabs--small"
      ],
      "groupId": "template-group:list/size-3",
      "templateTypes": [
        "LIST"
      ],
      "templates": {
        "list": "Tabs"
      },
      "virtualTemplateType": "LIST",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Small: applies t-Tabs--small within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
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
    },
    {
      "id": "template-option:report/comments/BASIC",
      "name": "BASIC",
      "label": "Basic",
      "cssClasses": [
        "t-Comments--basic"
      ],
      "groupId": "template-group:report/comments-style",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Comments"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Basic: applies t-Comments--basic within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/comments/ICONS_ROUNDED",
      "name": "ICONS_ROUNDED",
      "label": "Rounded Corners",
      "cssClasses": [
        "t-Comments--iconsRounded"
      ],
      "groupId": "template-group:report/icon-shape-3",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Comments"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "The icons are displayed within a square with rounded corners.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/comments/ICONS_SQUARE",
      "name": "ICONS_SQUARE",
      "label": "Square",
      "cssClasses": [
        "t-Comments--iconsSquare"
      ],
      "groupId": "template-group:report/icon-shape-3",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Comments"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "The icons are displayed within a square shape.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/comments/SPEECH_BUBBLES",
      "name": "SPEECH_BUBBLES",
      "label": "Speech Bubbles",
      "cssClasses": [
        "t-Comments--chat"
      ],
      "groupId": "template-group:report/comments-style",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Comments"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Speech Bubbles: applies t-Comments--chat within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/content-row/ACTIONS_HIDDEN",
      "name": "ACTIONS_HIDDEN",
      "label": "Hidden",
      "cssClasses": [
        "t-ContentRow--hideActions"
      ],
      "groupId": "template-group:report/col-actions",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Content Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Hides the Actions column from being rendered on the screen.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/content-row/ALIGNMENT_TOP",
      "name": "ALIGNMENT_TOP",
      "label": "Top",
      "cssClasses": [
        "t-ContentRow--alignTop"
      ],
      "groupId": "template-group:report/content-alignment",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Content Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Aligns the content to the top of the row. This is useful when you expect that yours rows will vary in height (e.g. some rows will have longer descriptions than others).",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/content-row/DESCRIPTION_HIDDEN",
      "name": "DESCRIPTION_HIDDEN",
      "label": "Hidden",
      "cssClasses": [
        "t-ContentRow--hideDescription"
      ],
      "groupId": "template-group:report/col-content-description",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Content Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Hides the Description from being rendered on the screen.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/content-row/ICON_HIDDEN",
      "name": "ICON_HIDDEN",
      "label": "Hidden",
      "cssClasses": [
        "t-ContentRow--hideIcon"
      ],
      "groupId": "template-group:report/col-icon",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Content Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Hides the Icon from being rendered on the screen.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/content-row/MISC_HIDDEN",
      "name": "MISC_HIDDEN",
      "label": "Hidden",
      "cssClasses": [
        "t-ContentRow--hideMisc"
      ],
      "groupId": "template-group:report/col-misc",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Content Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Hides the Misc column from being rendered on the screen.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/content-row/SELECTION_HIDDEN",
      "name": "SELECTION_HIDDEN",
      "label": "Hidden",
      "cssClasses": [
        "t-ContentRow--hideSelection"
      ],
      "groupId": "template-group:report/col-selection",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Content Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Hides the Selection column from being rendered on the screen.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/content-row/STACK_MOBILE",
      "name": "STACK_MOBILE",
      "label": "Stack",
      "cssClasses": [
        "t-ContentRow--stackMobile"
      ],
      "groupId": "template-group:report/stack-on-mobile",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Content Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Stack the content row elements at the mobile breakpoints.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/content-row/STYLE_COMPACT",
      "name": "STYLE_COMPACT",
      "label": "Compact",
      "cssClasses": [
        "t-ContentRow--styleCompact"
      ],
      "groupId": "template-group:report/style-4",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Content Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "This option reduces the padding and font sizes to present a compact display of the same information.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/content-row/TITLE_HIDDEN",
      "name": "TITLE_HIDDEN",
      "label": "Hidden",
      "cssClasses": [
        "t-ContentRow--hideTitle"
      ],
      "groupId": "template-group:report/col-content-title",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Content Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Hides the Title from being rendered on the screen.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/contextual-info/DISPLAY_ITEMS_STACKED",
      "name": "DISPLAY_ITEMS_STACKED",
      "label": "Stacked",
      "cssClasses": [
        "t-ContextualInfo-item--stacked"
      ],
      "groupId": "template-group:report/display-items",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Contextual Info"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Stacked: applies t-ContextualInfo-item--stacked within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/contextual-info/DISPLAY_LABELS_STACKED",
      "name": "DISPLAY_LABELS_STACKED",
      "label": "Stacked",
      "cssClasses": [
        "t-ContextualInfo-label--stacked"
      ],
      "groupId": "template-group:report/display-labels",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Contextual Info"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Stacked: applies t-ContextualInfo-label--stacked within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/contextual-info/HIDE_EMPTY_VALUES",
      "name": "HIDE_EMPTY_VALUES",
      "label": "Hide Empty Values",
      "cssClasses": [
        "t-ContextualInfo--hideNulls"
      ],
      "groupId": null,
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Contextual Info"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "This option will hide the null rows. Note: This only works in browsers that supports :has() pseudo-class.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:REPORT/HIDE_WHEN_ALL_ROWS_DISPLAYED",
      "name": "HIDE_WHEN_ALL_ROWS_DISPLAYED",
      "label": "Hide when all rows displayed",
      "cssClasses": [
        "t-Report--hideNoPagination"
      ],
      "groupId": "template-group:report/pagination-display",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {},
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "This option will hide the pagination when all rows are displayed.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/media-list/2_COLUMN_GRID",
      "name": "2_COLUMN_GRID",
      "label": "2 Column Grid",
      "cssClasses": [
        "t-MediaList--cols t-MediaList--2cols"
      ],
      "groupId": "template-group:report/layout-3",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Media List"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "2 Column Grid: applies t-MediaList--cols t-MediaList--2cols within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/media-list/3_COLUMN_GRID",
      "name": "3_COLUMN_GRID",
      "label": "3 Column Grid",
      "cssClasses": [
        "t-MediaList--cols t-MediaList--3cols"
      ],
      "groupId": "template-group:report/layout-3",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Media List"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "3 Column Grid: applies t-MediaList--cols t-MediaList--3cols within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/media-list/4_COLUMN_GRID",
      "name": "4_COLUMN_GRID",
      "label": "4 Column Grid",
      "cssClasses": [
        "t-MediaList--cols t-MediaList--4cols"
      ],
      "groupId": "template-group:report/layout-3",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Media List"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "4 Column Grid: applies t-MediaList--cols t-MediaList--4cols within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/media-list/5_COLUMN_GRID",
      "name": "5_COLUMN_GRID",
      "label": "5 Column Grid",
      "cssClasses": [
        "t-MediaList--cols t-MediaList--5cols"
      ],
      "groupId": "template-group:report/layout-3",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Media List"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "5 Column Grid: applies t-MediaList--cols t-MediaList--5cols within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/media-list/APPLY_THEME_COLORS",
      "name": "APPLY_THEME_COLORS",
      "label": "Apply Theme Colors",
      "cssClasses": [
        "u-colors"
      ],
      "groupId": null,
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Media List"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Apply Theme Colors: applies u-colors.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/media-list/ICONS_ROUNDED",
      "name": "ICONS_ROUNDED",
      "label": "Rounded Corners",
      "cssClasses": [
        "t-MediaList--iconsRounded"
      ],
      "groupId": "template-group:report/icon-shape-3",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Media List"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "The icons are displayed within a square with rounded corners.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/media-list/ICONS_SQUARE",
      "name": "ICONS_SQUARE",
      "label": "Square",
      "cssClasses": [
        "t-MediaList--iconsSquare"
      ],
      "groupId": "template-group:report/icon-shape-3",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Media List"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "The icons are displayed within a square shape.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/media-list/LARGE",
      "name": "LARGE",
      "label": "Large",
      "cssClasses": [
        "t-MediaList--large force-fa-lg"
      ],
      "groupId": "template-group:report/size-4",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Media List"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Increases the size of the text and icons in the list.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/media-list/SHOW_BADGES",
      "name": "SHOW_BADGES",
      "label": "Show Badges",
      "cssClasses": [
        "t-MediaList--showBadges"
      ],
      "groupId": null,
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Media List"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Show Badges: applies t-MediaList--showBadges.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/media-list/SHOW_DESCRIPTION",
      "name": "SHOW_DESCRIPTION",
      "label": "Show Description",
      "cssClasses": [
        "t-MediaList--showDesc"
      ],
      "groupId": null,
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Media List"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Show Description: applies t-MediaList--showDesc.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/media-list/SHOW_ICONS",
      "name": "SHOW_ICONS",
      "label": "Show Icons",
      "cssClasses": [
        "t-MediaList--showIcons"
      ],
      "groupId": null,
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Media List"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Show Icons: applies t-MediaList--showIcons.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/media-list/SPAN_HORIZONTAL",
      "name": "SPAN_HORIZONTAL",
      "label": "Span Horizontal",
      "cssClasses": [
        "t-MediaList--horizontal"
      ],
      "groupId": "template-group:report/layout-3",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Media List"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Span Horizontal: applies t-MediaList--horizontal within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/media-list/STACK",
      "name": "STACK",
      "label": "Stack",
      "cssClasses": [
        "t-MediaList--stack"
      ],
      "groupId": "template-group:report/layout-3",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Media List"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Stack: applies t-MediaList--stack within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/standard/ALTROWCOLORSDISABLE",
      "name": "ALTROWCOLORSDISABLE",
      "label": "Disable",
      "cssClasses": [
        "t-Report--staticRowColors"
      ],
      "groupId": "template-group:report/alternating-rows",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Standard"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Disable: applies t-Report--staticRowColors within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/standard/ALTROWCOLORSENABLE",
      "name": "ALTROWCOLORSENABLE",
      "label": "Enable",
      "cssClasses": [
        "t-Report--altRowsDefault"
      ],
      "groupId": "template-group:report/alternating-rows",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Standard"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Enable: applies t-Report--altRowsDefault within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/standard/ENABLE",
      "name": "ENABLE",
      "label": "Enable",
      "cssClasses": [
        "t-Report--rowHighlight"
      ],
      "groupId": "template-group:report/row-highlighting",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Standard"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Enable row highlighting on mouse over",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/standard/HORIZONTALBORDERS",
      "name": "HORIZONTALBORDERS",
      "label": "Horizontal Only",
      "cssClasses": [
        "t-Report--horizontalBorders"
      ],
      "groupId": "template-group:report/report-border",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Standard"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Horizontal Only: applies t-Report--horizontalBorders within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/standard/REMOVEALLBORDERS",
      "name": "REMOVEALLBORDERS",
      "label": "No Borders",
      "cssClasses": [
        "t-Report--noBorders"
      ],
      "groupId": "template-group:report/report-border",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Standard"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "No Borders: applies t-Report--noBorders within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/standard/REMOVEOUTERBORDERS",
      "name": "REMOVEOUTERBORDERS",
      "label": "No Outer Borders",
      "cssClasses": [
        "t-Report--inline"
      ],
      "groupId": "template-group:report/report-border",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Standard"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "No Outer Borders: applies t-Report--inline within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/standard/ROWHIGHLIGHTDISABLE",
      "name": "ROWHIGHLIGHTDISABLE",
      "label": "Disable",
      "cssClasses": [
        "t-Report--rowHighlightOff"
      ],
      "groupId": "template-group:report/row-highlighting",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Standard"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Disable row highlighting on mouse over",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/standard/STRETCHREPORT",
      "name": "STRETCHREPORT",
      "label": "Stretch Report",
      "cssClasses": [
        "t-Report--stretch"
      ],
      "groupId": null,
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Standard"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Stretch Report: applies t-Report--stretch.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/standard/VERTICALBORDERS",
      "name": "VERTICALBORDERS",
      "label": "Vertical Only",
      "cssClasses": [
        "t-Report--verticalBorders"
      ],
      "groupId": "template-group:report/report-border",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Standard"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Vertical Only: applies t-Report--verticalBorders within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/timeline/COMPACT",
      "name": "COMPACT",
      "label": "Compact",
      "cssClasses": [
        "t-Timeline--compact"
      ],
      "groupId": "template-group:report/style-4",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Timeline"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Displays a compact version of timeline with smaller text and fewer columns.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-option:report/value-attribute-pairs-row/FIXED_LARGE",
      "name": "FIXED_LARGE",
      "label": "Fixed - Large",
      "cssClasses": [
        "t-AVPList--fixedLabelLarge"
      ],
      "groupId": "template-group:report/label-width",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Value Attribute Pairs - Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Fixed - Large: applies t-AVPList--fixedLabelLarge within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/value-attribute-pairs-row/FIXED_MEDIUM",
      "name": "FIXED_MEDIUM",
      "label": "Fixed - Medium",
      "cssClasses": [
        "t-AVPList--fixedLabelMedium"
      ],
      "groupId": "template-group:report/label-width",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Value Attribute Pairs - Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Fixed - Medium: applies t-AVPList--fixedLabelMedium within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/value-attribute-pairs-row/FIXED_SMALL",
      "name": "FIXED_SMALL",
      "label": "Fixed - Small",
      "cssClasses": [
        "t-AVPList--fixedLabelSmall"
      ],
      "groupId": "template-group:report/label-width",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Value Attribute Pairs - Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Fixed - Small: applies t-AVPList--fixedLabelSmall within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/value-attribute-pairs-row/LEFT_ALIGNED_DETAILS",
      "name": "LEFT_ALIGNED_DETAILS",
      "label": "Left Aligned Details",
      "cssClasses": [
        "t-AVPList--leftAligned"
      ],
      "groupId": "template-group:report/layout-3",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Value Attribute Pairs - Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Left Aligned Details: applies t-AVPList--leftAligned within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/value-attribute-pairs-row/RIGHT_ALIGNED_DETAILS",
      "name": "RIGHT_ALIGNED_DETAILS",
      "label": "Right Aligned Details",
      "cssClasses": [
        "t-AVPList--rightAligned"
      ],
      "groupId": "template-group:report/layout-3",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Value Attribute Pairs - Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Right Aligned Details: applies t-AVPList--rightAligned within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/value-attribute-pairs-row/VARIABLE_LARGE",
      "name": "VARIABLE_LARGE",
      "label": "Variable - Large",
      "cssClasses": [
        "t-AVPList--variableLabelLarge"
      ],
      "groupId": "template-group:report/label-width",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Value Attribute Pairs - Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Variable - Large: applies t-AVPList--variableLabelLarge within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/value-attribute-pairs-row/VARIABLE_MEDIUM",
      "name": "VARIABLE_MEDIUM",
      "label": "Variable - Medium",
      "cssClasses": [
        "t-AVPList--variableLabelMedium"
      ],
      "groupId": "template-group:report/label-width",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Value Attribute Pairs - Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Variable - Medium: applies t-AVPList--variableLabelMedium within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-option:report/value-attribute-pairs-row/VARIABLE_SMALL",
      "name": "VARIABLE_SMALL",
      "label": "Variable - Small",
      "cssClasses": [
        "t-AVPList--variableLabelSmall"
      ],
      "groupId": "template-group:report/label-width",
      "templateTypes": [
        "REPORT"
      ],
      "templates": {
        "report": "Value Attribute Pairs - Row"
      },
      "virtualTemplateType": "REPORT",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Variable - Small: applies t-AVPList--variableLabelSmall within its option group.",
      "descriptionOrigin": "apexrest-factual-summary"
    }
  ],
  "templateOptionGroups": [
    {
      "id": "template-group:list/animation",
      "sourceId": "2331467078895335022",
      "name": "ANIMATION",
      "label": "Animation",
      "templateTypes": [
        "LIST"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Sets the hover and focus animation.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:list/badge-size",
      "sourceId": "2137439150625345391",
      "name": "BADGE_SIZE",
      "label": "Badge Size",
      "templateTypes": [
        "LIST"
      ],
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Badge Size choices for LIST templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:list/body-text",
      "sourceId": "2888251331346797992",
      "name": "BODY_TEXT",
      "label": "Body Text",
      "templateTypes": [
        "LIST"
      ],
      "nullText": "Auto",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Determines the height of the card body.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:list/display-icons",
      "sourceId": "2137440689885345391",
      "name": "DISPLAY_ICONS",
      "label": "Display Icons",
      "templateTypes": [
        "LIST"
      ],
      "nullText": "No Icons",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Display Icons choices for LIST templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:list/icon-shape",
      "sourceId": "1690836524071557897",
      "name": "ICON_SHAPE",
      "label": "Icon Shape",
      "templateTypes": [
        "LIST"
      ],
      "nullText": "Circle",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Determines the shape of the icon.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:list/icons",
      "sourceId": "2888250647366794963",
      "name": "ICONS",
      "label": "Icons",
      "templateTypes": [
        "LIST"
      ],
      "nullText": "No Icons",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Icons choices for LIST templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:list/layout",
      "sourceId": "2137437531898345391",
      "name": "LAYOUT",
      "label": "Layout",
      "templateTypes": [
        "LIST"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Layout choices for LIST templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:list/size-3",
      "sourceId": "3291144685499979932",
      "name": "SIZE",
      "label": "Size",
      "templateTypes": [
        "LIST"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Size choices for LIST templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:list/style-2",
      "sourceId": "2544033074206311020",
      "name": "STYLE",
      "label": "Style",
      "templateTypes": [
        "LIST"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Style choices for LIST templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
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
    },
    {
      "id": "template-group:report/alternating-rows",
      "sourceId": "2137435702932345390",
      "name": "ALTERNATING_ROWS",
      "label": "Alternating Rows",
      "templateTypes": [
        "REPORT"
      ],
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Shades alternate rows in the report with slightly different background colors.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:report/col-actions",
      "sourceId": "1801290627575547953",
      "name": "COL_ACTIONS",
      "label": "Actions",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": false,
      "description": "Actions choices for REPORT templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:report/col-content-description",
      "sourceId": "1801289983379544820",
      "name": "COL_CONTENT_DESCRIPTION",
      "label": "Description",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": false,
      "description": "Description choices for REPORT templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:report/col-content-title",
      "sourceId": "1801289748846542970",
      "name": "COL_CONTENT_TITLE",
      "label": "Title",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": false,
      "description": "Title choices for REPORT templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:report/col-icon",
      "sourceId": "1801289376180540891",
      "name": "COL_ICON",
      "label": "Icon",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": false,
      "description": "Icon choices for REPORT templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:report/col-misc",
      "sourceId": "1801290288964546697",
      "name": "COL_MISC",
      "label": "Misc",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": false,
      "description": "Misc choices for REPORT templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:report/col-selection",
      "sourceId": "1801289149061539251",
      "name": "COL_SELECTION",
      "label": "Selection",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": false,
      "description": "Selection choices for REPORT templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:report/comments-style",
      "sourceId": "2968035056708786709",
      "name": "COMMENTS_STYLE",
      "label": "Comments Style",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Determines the style in which comments are displayed.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:report/content-alignment",
      "sourceId": "1806006347963626595",
      "name": "CONTENT_ALIGNMENT",
      "label": "Content Alignment",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Center (Default)",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Content Alignment choices for REPORT templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:report/display-items",
      "sourceId": "2117250324354447504",
      "name": "DISPLAY_ITEMS",
      "label": "Display Items",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Inline (Default)",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Display Items choices for REPORT templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:report/display-labels",
      "sourceId": "2117250936407454030",
      "name": "DISPLAY_LABELS",
      "label": "Display Labels",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Inline (Default)",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Display Labels choices for REPORT templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:report/icon-shape-3",
      "sourceId": "1690836851829559407",
      "name": "ICON_SHAPE",
      "label": "Icon Shape",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Circle",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Determines the shape of the icon.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:report/label-width",
      "sourceId": "2788312444037496009",
      "name": "LABEL_WIDTH",
      "label": "Label Width",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Label Width choices for REPORT templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:report/layout-3",
      "sourceId": "2137439749294345391",
      "name": "LAYOUT",
      "label": "Layout",
      "templateTypes": [
        "REPORT"
      ],
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Determines the layout of Cards in the report.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:report/pagination-display",
      "sourceId": "1836306723151421805",
      "name": "PAGINATION_DISPLAY",
      "label": "Pagination Display",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Controls the display of pagination for this region.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:report/report-border",
      "sourceId": "2137439312677345391",
      "name": "REPORT_BORDER",
      "label": "Report Border",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Controls the display of the Report's borders.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:report/row-highlighting",
      "sourceId": "2137440764532345391",
      "name": "ROW_HIGHLIGHTING",
      "label": "Row Highlighting",
      "templateTypes": [
        "REPORT"
      ],
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Determines whether you want the row to be highlighted on hover.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:report/size-4",
      "sourceId": "1897238674959502663",
      "name": "SIZE",
      "label": "Size",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": false,
      "description": "Size choices for REPORT templates.",
      "descriptionOrigin": "apexrest-factual-summary"
    },
    {
      "id": "template-group:report/stack-on-mobile",
      "sourceId": "11801804347016545",
      "name": "STACK_ON_MOBILE",
      "label": "Stack on Mobile",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Default",
      "advanced": true,
      "sourceHasHelp": true,
      "description": "Controls the layout of items on mobile breakpoints.",
      "descriptionOrigin": "oracle-upl"
    },
    {
      "id": "template-group:report/style-4",
      "sourceId": "2976462553975878567",
      "name": "STYLE",
      "label": "Style",
      "templateTypes": [
        "REPORT"
      ],
      "nullText": "Default",
      "advanced": false,
      "sourceHasHelp": true,
      "description": "Determines the overall style for the component.",
      "descriptionOrigin": "oracle-upl"
    }
  ],
  "templateDefaults": [
    {
      "id": "list-template:badge-list",
      "type": "list",
      "name": "Badge List",
      "key": "badge-list",
      "internalName": "BADGE_LIST",
      "defaultOptions": [],
      "presetOptions": [
        "t-BadgeList--circular",
        "t-BadgeList--cols t-BadgeList--3cols",
        "t-BadgeList--large"
      ]
    },
    {
      "id": "list-template:cards",
      "type": "list",
      "name": "Cards",
      "key": "cards",
      "internalName": "CARDS",
      "defaultOptions": [],
      "presetOptions": [
        "t-Cards--basic",
        "t-Cards--3cols",
        "t-Cards--animColorFill"
      ]
    },
    {
      "id": "list-template:links-list",
      "type": "list",
      "name": "Links List",
      "key": "links-list",
      "internalName": "LINKS_LIST",
      "defaultOptions": [],
      "presetOptions": []
    },
    {
      "id": "list-template:media-list",
      "type": "list",
      "name": "Media List",
      "key": "media-list",
      "internalName": "MEDIA_LIST",
      "defaultOptions": [
        "t-MediaList--showIcons",
        "t-MediaList--showDesc"
      ],
      "presetOptions": []
    },
    {
      "id": "list-template:menu-bar",
      "type": "list",
      "name": "Menu Bar",
      "key": "menu-bar",
      "internalName": "MENU_BAR",
      "defaultOptions": [
        "js-showSubMenuIcons"
      ],
      "presetOptions": []
    },
    {
      "id": "list-template:tabs",
      "type": "list",
      "name": "Tabs",
      "key": "tabs",
      "internalName": "TABS",
      "defaultOptions": [],
      "presetOptions": [
        "t-Tabs--simple"
      ]
    },
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
    },
    {
      "id": "report-template:comments",
      "type": "report",
      "name": "Comments",
      "key": "comments",
      "internalName": "COMMENTS",
      "defaultOptions": [],
      "presetOptions": [
        "t-Comments--chat"
      ]
    },
    {
      "id": "report-template:content-row",
      "type": "report",
      "name": "Content Row",
      "key": "content-row",
      "internalName": "CONTENT_ROW",
      "defaultOptions": [],
      "presetOptions": []
    },
    {
      "id": "report-template:contextual-info",
      "type": "report",
      "name": "Contextual Info",
      "key": "contextual-info",
      "internalName": "CONTEXTUAL_INFO",
      "defaultOptions": [],
      "presetOptions": []
    },
    {
      "id": "report-template:media-list",
      "type": "report",
      "name": "Media List",
      "key": "media-list",
      "internalName": "MEDIA_LIST",
      "defaultOptions": [
        "t-MediaList--showIcons",
        "t-MediaList--showDesc"
      ],
      "presetOptions": [
        "t-MediaList--stack"
      ]
    },
    {
      "id": "report-template:standard",
      "type": "report",
      "name": "Standard",
      "key": "standard",
      "internalName": "STANDARD",
      "defaultOptions": [],
      "presetOptions": [
        "t-Report--altRowsDefault",
        "t-Report--rowHighlight"
      ]
    },
    {
      "id": "report-template:timeline",
      "type": "report",
      "name": "Timeline",
      "key": "timeline",
      "internalName": "TIMELINE",
      "defaultOptions": [],
      "presetOptions": []
    },
    {
      "id": "report-template:value-attribute-pairs-row",
      "type": "report",
      "name": "Value Attribute Pairs - Row",
      "key": "value-attribute-pairs-row",
      "internalName": "VALUE_ATTRIBUTE_PAIRS_ROW",
      "defaultOptions": [],
      "presetOptions": [
        "t-AVPList--leftAligned"
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
      "id": "mmd:5110:384",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "384",
      "builderLabel": "List",
      "apexlangPath": "region.source.list",
      "type": "COMPONENT",
      "required": true,
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
              "NATIVE_LIST"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "List (component) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:385",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "385",
      "builderLabel": "Breadcrumb",
      "apexlangPath": "region.source.breadcrumb",
      "type": "COMPONENT",
      "required": true,
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
              "NATIVE_BREADCRUMB"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Breadcrumb (component) in region.source.",
      "descriptionOrigin": "apexrest-factual-summary",
      "source": "SQLcl MMD 26.1.0+3102",
      "sourceHasHelp": false,
      "nativeType": null
    },
    {
      "id": "mmd:5110:390",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "390",
      "builderLabel": "Use Generic Column Names",
      "apexlangPath": "region.source.useGenericColumnNames",
      "type": "YES NO",
      "required": true,
      "defaultValue": "DERIVED_REPORT_COLUMNS",
      "values": [],
      "condition": {
        "operator": "AND",
        "conditions": [
          {
            "type": "EQUALS",
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_SQL_REPORT"
          },
          {
            "type": "EQUALS",
            "propertyId": "959",
            "path": "region.source.type",
            "hasToExist": true,
            "value": "FUNC_BODY_RETURNING_SQL"
          }
        ]
      },
      "maxLength": 32767,
      "description": "Use Generic Column Names (yes no) in region.source.",
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
      "id": "mmd:5110:1090",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "1090",
      "builderLabel": "Filtered Region",
      "apexlangPath": "region.source.filteredRegion",
      "type": "COMPONENT",
      "required": true,
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
              "NATIVE_FACETED_SEARCH",
              "NATIVE_SMART_FILTERS"
            ]
          }
        ]
      },
      "maxLength": null,
      "description": "Filtered Region (component) in region.source.",
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
      "id": "mmd:5110:6000",
      "context": "region",
      "componentTypeId": "5110",
      "componentTitle": "Region",
      "parentContext": "page",
      "parentComponentTypeId": "5000",
      "componentCondition": null,
      "propertyId": "6000",
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
            "propertyId": "94",
            "path": "region.type",
            "hasToExist": true,
            "value": "NATIVE_DYNAMIC_CONTENT"
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
    }
  ],
  "currentExamples": {
    "regions": [
      {
        "id": "page:300/region:demo",
        "pageId": 300,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:300/region:demo-2",
        "pageId": 300,
        "key": "demo-2",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:300/region:overview",
        "pageId": 300,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:300/region:responsive-classes",
        "pageId": 300,
        "key": "responsive-classes",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Standard",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-Report--stretch",
          "t-Report--staticRowColors",
          "t-Report--rowHighlightOff",
          "t-Report--horizontalBorders",
          "t-Report--hideNoPagination"
        ],
        "settings": {}
      },
      {
        "id": "page:300/region:responsive-design",
        "pageId": 300,
        "key": "responsive-design",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:300/region:visibility-classes",
        "pageId": 300,
        "key": "visibility-classes",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:401/region:key-principles",
        "pageId": 401,
        "key": "key-principles",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:401/region:what-is-universal-theme",
        "pageId": 401,
        "key": "what-is-universal-theme",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:402/region:general-colors",
        "pageId": 402,
        "key": "general-colors",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:402/region:introduction",
        "pageId": 402,
        "key": "introduction",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:402/region:stateful-colors",
        "pageId": 402,
        "key": "stateful-colors",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:405/region:official-theme-styles",
        "pageId": 405,
        "key": "official-theme-styles",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:405/region:overview",
        "pageId": 405,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:407/region:mega-menu",
        "pageId": 407,
        "key": "mega-menu",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:407/region:menu-bar",
        "pageId": 407,
        "key": "menu-bar",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:407/region:navigation-bar",
        "pageId": 407,
        "key": "navigation-bar",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:407/region:navigation-menus",
        "pageId": 407,
        "key": "navigation-menus",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:407/region:overview",
        "pageId": 407,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:407/region:side-tree-navigation",
        "pageId": 407,
        "key": "side-tree-navigation",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:407/region:tabs",
        "pageId": 407,
        "key": "tabs",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:421/region:overview",
        "pageId": 421,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:421/region:side-menu",
        "pageId": 421,
        "key": "side-menu",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:421/region:tab-menu",
        "pageId": 421,
        "key": "tab-menu",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:422/region:mobile-page-footer",
        "pageId": 422,
        "key": "mobile-page-footer",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:422/region:mobile-page-header",
        "pageId": 422,
        "key": "mobile-page-header",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:422/region:overview",
        "pageId": 422,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:423/region:form-design",
        "pageId": 423,
        "key": "form-design",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:423/region:good-design-practices",
        "pageId": 423,
        "key": "good-design-practices",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:423/region:mobile-form-example",
        "pageId": 423,
        "key": "mobile-form-example",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:423/region:overview",
        "pageId": 423,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:424/region:available-gestures",
        "pageId": 424,
        "key": "available-gestures",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:424/region:overview",
        "pageId": 424,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:424/region:pan",
        "pageId": 424,
        "key": "pan",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:424/region:press",
        "pageId": 424,
        "key": "press",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:424/region:swipe",
        "pageId": 424,
        "key": "swipe",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:424/region:tap",
        "pageId": 424,
        "key": "tap",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:425/region:column-toggle-report",
        "pageId": 425,
        "key": "column-toggle-report",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:425/region:list-view",
        "pageId": 425,
        "key": "list-view",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:425/region:mobile-ui-patterns",
        "pageId": 425,
        "key": "mobile-ui-patterns",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:425/region:overview",
        "pageId": 425,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:425/region:reflow-report",
        "pageId": 425,
        "key": "reflow-report",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:425/region:responsive-design-and-mobile-ui-patterns",
        "pageId": 425,
        "key": "responsive-design-and-mobile-ui-patterns",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:500/region:about",
        "pageId": 500,
        "key": "about",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:500/region:explore-universal-theme",
        "pageId": 500,
        "key": "explore-universal-theme",
        "type": "list",
        "template": "Content Block",
        "componentTemplate": "Cards",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-Cards--featured force-fa-lg",
          "t-Cards--displayIcons",
          "t-Cards--3cols",
          "t-Cards--hideBody",
          "t-Cards--iconsRounded",
          "t-Cards--animColorFill"
        ],
        "settings": {}
      },
      {
        "id": "page:500/region:getting-started",
        "pageId": 500,
        "key": "getting-started",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1100/region:both-side-column",
        "pageId": 1100,
        "key": "both-side-column",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1100/region:dialog",
        "pageId": 1100,
        "key": "dialog",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1100/region:left-side-column",
        "pageId": 1100,
        "key": "left-side-column",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1100/region:marquee-detail",
        "pageId": 1100,
        "key": "marquee-detail",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1100/region:other",
        "pageId": 1100,
        "key": "other",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1100/region:overview",
        "pageId": 1100,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1100/region:right-side-column",
        "pageId": 1100,
        "key": "right-side-column",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1100/region:standard",
        "pageId": 1100,
        "key": "standard",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1201/region:button-positions",
        "pageId": 1201,
        "key": "button-positions",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1201/region:demo",
        "pageId": 1201,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1201/region:instructions",
        "pageId": 1201,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1201/region:overview",
        "pageId": 1201,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1201/region:template-options",
        "pageId": 1201,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1202/region:button-positions",
        "pageId": 1202,
        "key": "button-positions",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1202/region:custom-icon",
        "pageId": 1202,
        "key": "custom-icon",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1202/region:default",
        "pageId": 1202,
        "key": "default",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1202/region:demo",
        "pageId": 1202,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1202/region:instructions",
        "pageId": 1202,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "AlertDemo1"
        }
      },
      {
        "id": "page:1202/region:overview",
        "pageId": 1202,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1202/region:template-options",
        "pageId": 1202,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "AlertDemo1"
        }
      },
      {
        "id": "page:1202/region:template-options-2",
        "pageId": 1202,
        "key": "template-options-2",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "AlertDemo2"
        }
      },
      {
        "id": "page:1202/region:use-cases",
        "pageId": 1202,
        "key": "use-cases",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1203/region:button-positions",
        "pageId": 1203,
        "key": "button-positions",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1203/region:demo",
        "pageId": 1203,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1203/region:instructions",
        "pageId": 1203,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1203/region:overview",
        "pageId": 1203,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1203/region:template-options",
        "pageId": 1203,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1204/region:additional-example",
        "pageId": 1204,
        "key": "additional-example",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "margin-top-lg"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1204/region:overview",
        "pageId": 1204,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1204/region:using-page-buttons",
        "pageId": 1204,
        "key": "using-page-buttons",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1204/region:using-page-items",
        "pageId": 1204,
        "key": "using-page-items",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1205/region:button-positions",
        "pageId": 1205,
        "key": "button-positions",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1205/region:demo",
        "pageId": 1205,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1205/region:instructions",
        "pageId": 1205,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1205/region:overview",
        "pageId": 1205,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1205/region:template-options",
        "pageId": 1205,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1206/region:1-default",
        "pageId": 1206,
        "key": "1-default",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1206/region:2-collapsed-state",
        "pageId": 1206,
        "key": "2-collapsed-state",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1206/region:3-scrolling-body",
        "pageId": 1206,
        "key": "3-scrolling-body",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1206/region:button-positions",
        "pageId": 1206,
        "key": "button-positions",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1206/region:demo",
        "pageId": 1206,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1206/region:instructions",
        "pageId": 1206,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1206/region:overview",
        "pageId": 1206,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1206/region:template-options",
        "pageId": 1206,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1206/region:template-options-2",
        "pageId": 1206,
        "key": "template-options-2",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo2"
        }
      },
      {
        "id": "page:1206/region:template-options-3",
        "pageId": 1206,
        "key": "template-options-3",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo3"
        }
      },
      {
        "id": "page:1207/region:button-positions",
        "pageId": 1207,
        "key": "button-positions",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1207/region:demo",
        "pageId": 1207,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1207/region:instructions",
        "pageId": 1207,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1207/region:overview",
        "pageId": 1207,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1207/region:template-options",
        "pageId": 1207,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1208/region:demo",
        "pageId": 1208,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1208/region:instructions",
        "pageId": 1208,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1",
          "additionalText": "<strong>Tip.</strong> Create a sub-region within the Wizard Container to store your form items and other content to be place in your wizard body."
        }
      },
      {
        "id": "page:1208/region:modal-dialog-wizard",
        "pageId": 1208,
        "key": "modal-dialog-wizard",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1208/region:overview",
        "pageId": 1208,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1208/region:template-options",
        "pageId": 1208,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1209/region:button-positions",
        "pageId": 1209,
        "key": "button-positions",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1209/region:content-block-region-template",
        "pageId": 1209,
        "key": "content-block-region-template",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1209/region:demo",
        "pageId": 1209,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1209/region:instructions",
        "pageId": 1209,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1209/region:overview",
        "pageId": 1209,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1209/region:region-title",
        "pageId": 1209,
        "key": "region-title",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1209/region:template-options",
        "pageId": 1209,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1210/region:demo",
        "pageId": 1210,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1210/region:instructions",
        "pageId": 1210,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1210/region:overview",
        "pageId": 1210,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1210/region:template-options",
        "pageId": 1210,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1250/region:button-positions",
        "pageId": 1250,
        "key": "button-positions",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1250/region:demo",
        "pageId": 1250,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1250/region:instructions",
        "pageId": 1250,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1250/region:overview",
        "pageId": 1250,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1250/region:template-options",
        "pageId": 1250,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1301/region:column-aliases",
        "pageId": 1301,
        "key": "column-aliases",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Value Attribute Pairs - Row",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-AVPList--leftAligned"
        ],
        "settings": {}
      },
      {
        "id": "page:1301/region:demo",
        "pageId": 1301,
        "key": "demo",
        "type": "list",
        "template": "Content Block",
        "componentTemplate": "Media List",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "u-colors"
        ],
        "settings": {}
      },
      {
        "id": "page:1301/region:demo-2",
        "pageId": 1301,
        "key": "demo-2",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Media List",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "u-colors",
          "t-MediaList--stack"
        ],
        "settings": {}
      },
      {
        "id": "page:1301/region:instructions",
        "pageId": 1301,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1301/region:instructions-2",
        "pageId": 1301,
        "key": "instructions-2",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo2"
        }
      },
      {
        "id": "page:1301/region:list-attributes",
        "pageId": 1301,
        "key": "list-attributes",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Value Attribute Pairs - Row",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-AVPList--leftAligned"
        ],
        "settings": {}
      },
      {
        "id": "page:1301/region:media-list-as-a-list-template",
        "pageId": 1301,
        "key": "media-list-as-a-list-template",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1301/region:media-list-as-a-report-template",
        "pageId": 1301,
        "key": "media-list-as-a-report-template",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1301/region:overview",
        "pageId": 1301,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1301/region:sample-sql-query",
        "pageId": 1301,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "Demo2"
        }
      },
      {
        "id": "page:1301/region:template-options",
        "pageId": 1301,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1301/region:template-options-2",
        "pageId": 1301,
        "key": "template-options-2",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo2"
        }
      },
      {
        "id": "page:1303/region:demo",
        "pageId": 1303,
        "key": "demo",
        "type": "list",
        "template": "Content Block",
        "componentTemplate": "Links List",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-LinksList--showArrow"
        ],
        "settings": {}
      },
      {
        "id": "page:1303/region:instructions",
        "pageId": 1303,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1303/region:list-attributes",
        "pageId": 1303,
        "key": "list-attributes",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Value Attribute Pairs - Row",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-AVPList--leftAligned"
        ],
        "settings": {}
      },
      {
        "id": "page:1303/region:overview",
        "pageId": 1303,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1303/region:template-options",
        "pageId": 1303,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1304/region:column-names",
        "pageId": 1304,
        "key": "column-names",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Value Attribute Pairs - Row",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-AVPList--leftAligned"
        ],
        "settings": {}
      },
      {
        "id": "page:1304/region:demo",
        "pageId": 1304,
        "key": "demo",
        "type": "list",
        "template": "Content Block",
        "componentTemplate": "Badge List",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "u-colors",
          "t-BadgeList--circular",
          "t-BadgeList--cols t-BadgeList--3cols",
          "t-BadgeList--large"
        ],
        "settings": {}
      },
      {
        "id": "page:1304/region:instructions",
        "pageId": 1304,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "BadgeDemo"
        }
      },
      {
        "id": "page:1304/region:overview",
        "pageId": 1304,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1304/region:template-options",
        "pageId": 1304,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "BadgeDemo"
        }
      },
      {
        "id": "page:1305/region:demo",
        "pageId": 1305,
        "key": "demo",
        "type": "list",
        "template": "Content Block",
        "componentTemplate": "Menu Bar",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "js-menu-callout"
        ],
        "settings": {}
      },
      {
        "id": "page:1305/region:instructions",
        "pageId": 1305,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1305/region:list-attributes",
        "pageId": 1305,
        "key": "list-attributes",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Value Attribute Pairs - Row",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-AVPList--leftAligned"
        ],
        "settings": {}
      },
      {
        "id": "page:1305/region:overview",
        "pageId": 1305,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1305/region:template-options",
        "pageId": 1305,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1306/region:customized-menu",
        "pageId": 1306,
        "key": "customized-menu",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1306/region:instructions",
        "pageId": 1306,
        "key": "instructions",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1306/region:multi-level-menu-example",
        "pageId": 1306,
        "key": "multi-level-menu-example",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1306/region:overview",
        "pageId": 1306,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1307/region:demo",
        "pageId": 1307,
        "key": "demo",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Contextual Info",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [
          "#DEFAULT#"
        ],
        "settings": {}
      },
      {
        "id": "page:1307/region:instructions",
        "pageId": 1307,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1307/region:overview",
        "pageId": 1307,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1307/region:sample-sql-query",
        "pageId": 1307,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "Demo1"
        }
      },
      {
        "id": "page:1307/region:template-options",
        "pageId": 1307,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1401/region:demo",
        "pageId": 1401,
        "key": "demo",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Standard",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [
          "t-Report--stretch",
          "#DEFAULT#",
          "t-Report--altRowsDefault",
          "t-Report--rowHighlight"
        ],
        "settings": {}
      },
      {
        "id": "page:1401/region:instructions",
        "pageId": 1401,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1401/region:overview",
        "pageId": 1401,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1401/region:template-options",
        "pageId": 1401,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1402/region:button-positions",
        "pageId": 1402,
        "key": "button-positions",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1402/region:demo",
        "pageId": 1402,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1402/region:instructions",
        "pageId": 1402,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1402/region:overview",
        "pageId": 1402,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1402/region:template-options",
        "pageId": 1402,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1403/region:column-based",
        "pageId": 1403,
        "key": "column-based",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1403/region:demo",
        "pageId": 1403,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1403/region:demo-2",
        "pageId": 1403,
        "key": "demo-2",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1403/region:instructions",
        "pageId": 1403,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1403/region:instructions-2",
        "pageId": 1403,
        "key": "instructions-2",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo2"
        }
      },
      {
        "id": "page:1403/region:overview",
        "pageId": 1403,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1403/region:row-based",
        "pageId": 1403,
        "key": "row-based",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1403/region:sample-sql-query",
        "pageId": 1403,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "Demo1"
        }
      },
      {
        "id": "page:1403/region:sample-sql-query-2",
        "pageId": 1403,
        "key": "sample-sql-query-2",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "Demo2"
        }
      },
      {
        "id": "page:1403/region:template-options",
        "pageId": 1403,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1403/region:template-options-2",
        "pageId": 1403,
        "key": "template-options-2",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo2"
        }
      },
      {
        "id": "page:1405/region:demo",
        "pageId": 1405,
        "key": "demo",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Comments",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-Comments--chat"
        ],
        "settings": {}
      },
      {
        "id": "page:1405/region:instructions",
        "pageId": 1405,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1405/region:overview",
        "pageId": 1405,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1405/region:sample-sql-query",
        "pageId": 1405,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "Demo1"
        }
      },
      {
        "id": "page:1405/region:substution-strings",
        "pageId": 1405,
        "key": "substution-strings",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Value Attribute Pairs - Row",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-AVPList--leftAligned"
        ],
        "settings": {}
      },
      {
        "id": "page:1405/region:template-options",
        "pageId": 1405,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1406/region:column-names",
        "pageId": 1406,
        "key": "column-names",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Value Attribute Pairs - Row",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-AVPList--leftAligned"
        ],
        "settings": {}
      },
      {
        "id": "page:1406/region:demo",
        "pageId": 1406,
        "key": "demo",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Timeline",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-Report--hideNoPagination"
        ],
        "settings": {}
      },
      {
        "id": "page:1406/region:instructions",
        "pageId": 1406,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "TimelineDemo"
        }
      },
      {
        "id": "page:1406/region:overview",
        "pageId": 1406,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1406/region:sample-sql-query",
        "pageId": 1406,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "TimelineDemo"
        }
      },
      {
        "id": "page:1406/region:template-options",
        "pageId": 1406,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "TimelineDemo"
        }
      },
      {
        "id": "page:1407/region:column-names",
        "pageId": 1407,
        "key": "column-names",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Value Attribute Pairs - Row",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-AVPList--leftAligned",
          "t-Report--hideNoPagination"
        ],
        "settings": {}
      },
      {
        "id": "page:1407/region:demo",
        "pageId": 1407,
        "key": "demo",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Content Row",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-Report--hideNoPagination"
        ],
        "settings": {}
      },
      {
        "id": "page:1407/region:instructions",
        "pageId": 1407,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1407/region:overview",
        "pageId": 1407,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1407/region:sample-sql-query",
        "pageId": 1407,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "Demo1"
        }
      },
      {
        "id": "page:1407/region:template-options",
        "pageId": 1407,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1410/region:demo",
        "pageId": 1410,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1410/region:instructions",
        "pageId": 1410,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1410/region:overview",
        "pageId": 1410,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1410/region:template-options",
        "pageId": 1410,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1411/region:demo",
        "pageId": 1411,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1411/region:instructions",
        "pageId": 1411,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1411/region:overview",
        "pageId": 1411,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1411/region:template-options",
        "pageId": 1411,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1412/region:demo",
        "pageId": 1412,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1412/region:instructions",
        "pageId": 1412,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1412/region:overview",
        "pageId": 1412,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1412/region:template-options",
        "pageId": 1412,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1413/region:demo",
        "pageId": 1413,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1413/region:instructions",
        "pageId": 1413,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1413/region:overview",
        "pageId": 1413,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1413/region:template-options",
        "pageId": 1413,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1500/region:demo",
        "pageId": 1500,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1500/region:demo-2",
        "pageId": 1500,
        "key": "demo-2",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1500/region:demo-3",
        "pageId": 1500,
        "key": "demo-3",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1500/region:demo-4",
        "pageId": 1500,
        "key": "demo-4",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1500/region:hot",
        "pageId": 1500,
        "key": "hot",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1500/region:icon-only",
        "pageId": 1500,
        "key": "icon-only",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1500/region:instructions",
        "pageId": 1500,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "button",
          "staticId": "Button2"
        }
      },
      {
        "id": "page:1500/region:instructions-2",
        "pageId": 1500,
        "key": "instructions-2",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "button",
          "staticId": "Button3"
        }
      },
      {
        "id": "page:1500/region:instructions-3",
        "pageId": 1500,
        "key": "instructions-3",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "button",
          "staticId": "Button1"
        }
      },
      {
        "id": "page:1500/region:instructions-4",
        "pageId": 1500,
        "key": "instructions-4",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "button",
          "staticId": "Button4"
        }
      },
      {
        "id": "page:1500/region:overview",
        "pageId": 1500,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1500/region:template-options",
        "pageId": 1500,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "button",
          "staticId": "Button2"
        }
      },
      {
        "id": "page:1500/region:template-options-2",
        "pageId": 1500,
        "key": "template-options-2",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "button",
          "staticId": "Button3"
        }
      },
      {
        "id": "page:1500/region:template-options-3",
        "pageId": 1500,
        "key": "template-options-3",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "button",
          "staticId": "Button1"
        }
      },
      {
        "id": "page:1500/region:template-options-4",
        "pageId": 1500,
        "key": "template-options-4",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "button",
          "staticId": "Button4"
        }
      },
      {
        "id": "page:1500/region:text-only",
        "pageId": 1500,
        "key": "text-only",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1500/region:text-with-icon",
        "pageId": 1500,
        "key": "text-with-icon",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1600/region:demo",
        "pageId": 1600,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1600/region:demo-2",
        "pageId": 1600,
        "key": "demo-2",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1600/region:demo-3",
        "pageId": 1600,
        "key": "demo-3",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1600/region:floating-labels",
        "pageId": 1600,
        "key": "floating-labels",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1600/region:instructions",
        "pageId": 1600,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "item",
          "staticId": "P1600_FLOATING"
        }
      },
      {
        "id": "page:1600/region:instructions-2",
        "pageId": 1600,
        "key": "instructions-2",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "item",
          "staticId": "P1600_ABOVE"
        }
      },
      {
        "id": "page:1600/region:instructions-3",
        "pageId": 1600,
        "key": "instructions-3",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "item",
          "staticId": "P1600_HORIZONTAL"
        }
      },
      {
        "id": "page:1600/region:label-above",
        "pageId": 1600,
        "key": "label-above",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1600/region:label-horizontal",
        "pageId": 1600,
        "key": "label-horizontal",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1600/region:overview",
        "pageId": 1600,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1600/region:template-options",
        "pageId": 1600,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "item",
          "staticId": "P1600_FLOATING"
        }
      },
      {
        "id": "page:1600/region:template-options-2",
        "pageId": 1600,
        "key": "template-options-2",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "item",
          "staticId": "P1600_ABOVE"
        }
      },
      {
        "id": "page:1600/region:template-options-3",
        "pageId": 1600,
        "key": "template-options-3",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "componentType": "item",
          "staticId": "P1600_HORIZONTAL"
        }
      },
      {
        "id": "page:1601/region:overview",
        "pageId": 1601,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1601/region:region-with-items",
        "pageId": 1601,
        "key": "region-with-items",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1601/region:template-options",
        "pageId": 1601,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1700/region:1-default",
        "pageId": 1700,
        "key": "1-default",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1700/region:2-with-list-divider-and-badge",
        "pageId": 1700,
        "key": "2-with-list-divider-and-badge",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1700/region:examples",
        "pageId": 1700,
        "key": "examples",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1700/region:overview",
        "pageId": 1700,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1710/region:demo",
        "pageId": 1710,
        "key": "demo",
        "type": "reflowReport",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1710/region:instructions",
        "pageId": 1710,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "DemoA"
        }
      },
      {
        "id": "page:1710/region:overview",
        "pageId": 1710,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1710/region:template-options",
        "pageId": 1710,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "DemoA"
        }
      },
      {
        "id": "page:1720/region:demo",
        "pageId": 1720,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1720/region:instructions",
        "pageId": 1720,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1720/region:overview",
        "pageId": 1720,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1800/region:demo",
        "pageId": 1800,
        "key": "demo",
        "type": "calendar",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "displayColumn": "TASK_NAME",
          "startDateColumn": "START_DATE",
          "showTime": "true",
          "cssClass": "CSS_CLASS"
        }
      },
      {
        "id": "page:1800/region:instructions",
        "pageId": 1800,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1800/region:overview",
        "pageId": 1800,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1800/region:sample-sql-query",
        "pageId": 1800,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "Demo1"
        }
      },
      {
        "id": "page:1901/region:demo",
        "pageId": 1901,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1901/region:instructions",
        "pageId": 1901,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1901/region:overview",
        "pageId": 1901,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1901/region:sample-sql-query",
        "pageId": 1901,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "Demo1"
        }
      },
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
      },
      {
        "id": "page:1902/region:demo",
        "pageId": 1902,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1902/region:overview",
        "pageId": 1902,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1902/region:sample-sql-query-bar",
        "pageId": 1902,
        "key": "sample-sql-query-bar",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1902/region:sample-sql-query-dial-gauge",
        "pageId": 1902,
        "key": "sample-sql-query-dial-gauge",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1902/region:sample-sql-query-donut",
        "pageId": 1902,
        "key": "sample-sql-query-donut",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1903/region:help-example",
        "pageId": 1903,
        "key": "help-example",
        "type": "helpText",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1903/region:overview",
        "pageId": 1903,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1905/region:instructions",
        "pageId": 1905,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1905/region:overview",
        "pageId": 1905,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1906/region:demo",
        "pageId": 1906,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1906/region:instructions",
        "pageId": 1906,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "map_demo"
        }
      },
      {
        "id": "page:1906/region:overview",
        "pageId": 1906,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1906/region:sample-sql-query",
        "pageId": 1906,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "map_demo"
        }
      },
      {
        "id": "page:1907/region:demo",
        "pageId": 1907,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1907/region:instructions",
        "pageId": 1907,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1907/region:instructions-2",
        "pageId": 1907,
        "key": "instructions-2",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo2",
          "additionalText": "<p><strong>Tip:</strong> You can add icons to these tabs simply by modifying the icon attribute of the list entry.</p>"
        }
      },
      {
        "id": "page:1907/region:overview",
        "pageId": 1907,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1907/region:tabs-as-a-list",
        "pageId": 1907,
        "key": "tabs-as-a-list",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1907/region:tabs-as-regions",
        "pageId": 1907,
        "key": "tabs-as-regions",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1907/region:tabs-list",
        "pageId": 1907,
        "key": "tabs-list",
        "type": "list",
        "template": "Content Block",
        "componentTemplate": "Tabs",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-Tabs--simple"
        ],
        "settings": {}
      },
      {
        "id": "page:1907/region:template-options",
        "pageId": 1907,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1907/region:template-options-2",
        "pageId": 1907,
        "key": "template-options-2",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo2"
        }
      },
      {
        "id": "page:1908/region:demo",
        "pageId": 1908,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1908/region:instructions",
        "pageId": 1908,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1908/region:overview",
        "pageId": 1908,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1908/region:sample-code",
        "pageId": 1908,
        "key": "sample-code",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "Demo1"
        }
      },
      {
        "id": "page:1910/region:demo",
        "pageId": 1910,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1910/region:overview",
        "pageId": 1910,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1910/region:region-positions",
        "pageId": 1910,
        "key": "region-positions",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1911/region:demo",
        "pageId": 1911,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1911/region:overview",
        "pageId": 1911,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1914/region:overview",
        "pageId": 1914,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1915/region:demo",
        "pageId": 1915,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1915/region:overview",
        "pageId": 1915,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1916/region:demo",
        "pageId": 1916,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1916/region:overview",
        "pageId": 1916,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1917/region:demo",
        "pageId": 1917,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1917/region:overview",
        "pageId": 1917,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1917/region:region-positions",
        "pageId": 1917,
        "key": "region-positions",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:1923/region:instructions",
        "pageId": 1923,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:1923/region:overview",
        "pageId": 1923,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:2000/region:bookmarklet",
        "pageId": 2000,
        "key": "bookmarklet",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:2000/region:creating-the-theme",
        "pageId": 2000,
        "key": "creating-the-theme",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:2000/region:how-to-refresh",
        "pageId": 2000,
        "key": "how-to-refresh",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:2000/region:migrating-from-other-themes",
        "pageId": 2000,
        "key": "migrating-from-other-themes",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:2000/region:overview",
        "pageId": 2000,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "margin-bottom-lg"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:2000/region:post-migration",
        "pageId": 2000,
        "key": "post-migration",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:2000/region:re-apply-your-theme-style",
        "pageId": 2000,
        "key": "re-apply-your-theme-style",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:2000/region:refresh-universal-theme",
        "pageId": 2000,
        "key": "refresh-universal-theme",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:2000/region:restoring-subscription",
        "pageId": 2000,
        "key": "restoring-subscription",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:2000/region:switching-the-theme",
        "pageId": 2000,
        "key": "switching-the-theme",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--padded",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3001/region:demo-classic-report",
        "pageId": 3001,
        "key": "demo-classic-report",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3001/region:demo-interactive-report",
        "pageId": 3001,
        "key": "demo-interactive-report",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3001/region:demo-multiple-report",
        "pageId": 3001,
        "key": "demo-multiple-report",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3001/region:overview",
        "pageId": 3001,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3002/region:demo-classic-report",
        "pageId": 3002,
        "key": "demo-classic-report",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3002/region:demo-interactive-report",
        "pageId": 3002,
        "key": "demo-interactive-report",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3002/region:overview",
        "pageId": 3002,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3003/region:demo-basic",
        "pageId": 3003,
        "key": "demo-basic",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3003/region:demo-chat",
        "pageId": 3003,
        "key": "demo-chat",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3003/region:demo-thread",
        "pageId": 3003,
        "key": "demo-thread",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3003/region:instructions",
        "pageId": 3003,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "CommentsDemo"
        }
      },
      {
        "id": "page:3003/region:overview",
        "pageId": 3003,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3003/region:sample-sql-query",
        "pageId": 3003,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "ChatDemo"
        }
      },
      {
        "id": "page:3004/region:demo",
        "pageId": 3004,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3004/region:instructions",
        "pageId": 3004,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "ContentRowDemo"
        }
      },
      {
        "id": "page:3004/region:overview",
        "pageId": 3004,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3004/region:sample-sql-query",
        "pageId": 3004,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "ContentRowDemo"
        }
      },
      {
        "id": "page:3005/region:demo",
        "pageId": 3005,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3005/region:instructions",
        "pageId": 3005,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "MediaListDemo"
        }
      },
      {
        "id": "page:3005/region:overview",
        "pageId": 3005,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3005/region:sample-sql-query",
        "pageId": 3005,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "MediaListDemo"
        }
      },
      {
        "id": "page:3006/region:demo",
        "pageId": 3006,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3006/region:instructions",
        "pageId": 3006,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "TimelineDemo"
        }
      },
      {
        "id": "page:3006/region:overview",
        "pageId": 3006,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3006/region:sample-sql-query",
        "pageId": 3006,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "TimelineDemo"
        }
      },
      {
        "id": "page:3007/region:default-layout",
        "pageId": 3007,
        "key": "default-layout",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3007/region:demo",
        "pageId": 3007,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3007/region:inline-avatar-and-3-column-layout",
        "pageId": 3007,
        "key": "inline-avatar-and-3-column-layout",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3007/region:MetricCardDemo",
        "pageId": 3007,
        "key": "MetricCardDemo",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1",
          "t-ContentBlock--shadowBG"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "MetricCardDemo"
        }
      },
      {
        "id": "page:3007/region:overview",
        "pageId": 3007,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3007/region:stacked-layout",
        "pageId": 3007,
        "key": "stacked-layout",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3008/region:demo",
        "pageId": 3008,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3008/region:demo-alignment",
        "pageId": 3008,
        "key": "demo-alignment",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3008/region:demo-direction",
        "pageId": 3008,
        "key": "demo-direction",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3008/region:demo-wrapping",
        "pageId": 3008,
        "key": "demo-wrapping",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3008/region:instructions",
        "pageId": 3008,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "FlexboxDemo"
        }
      },
      {
        "id": "page:3008/region:overview",
        "pageId": 3008,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3008/region:stretching",
        "pageId": 3008,
        "key": "stretching",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3100/region:cards-as-a-list-template",
        "pageId": 3100,
        "key": "cards-as-a-list-template",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3100/region:cards-as-a-report-template",
        "pageId": 3100,
        "key": "cards-as-a-report-template",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3100/region:column-aliases",
        "pageId": 3100,
        "key": "column-aliases",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3100/region:demo",
        "pageId": 3100,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3100/region:demo-2",
        "pageId": 3100,
        "key": "demo-2",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3100/region:instructions",
        "pageId": 3100,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:3100/region:instructions-2",
        "pageId": 3100,
        "key": "instructions-2",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo2"
        }
      },
      {
        "id": "page:3100/region:list-custom-attributes",
        "pageId": 3100,
        "key": "list-custom-attributes",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3100/region:overview",
        "pageId": 3100,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3100/region:sample-sql-query",
        "pageId": 3100,
        "key": "sample-sql-query",
        "type": "plugin/regionSourceCode",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG"
        ],
        "componentOptions": [],
        "settings": {
          "regionStaticId": "Demo2"
        }
      },
      {
        "id": "page:3100/region:template-options",
        "pageId": 3100,
        "key": "template-options",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo1"
        }
      },
      {
        "id": "page:3100/region:template-options-2",
        "pageId": 3100,
        "key": "template-options-2",
        "type": "plugin/previewTemplateOptions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "Demo2"
        }
      },
      {
        "id": "page:3110/region:demo",
        "pageId": 3110,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3110/region:overview",
        "pageId": 3110,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3110/region:sample-sql-query",
        "pageId": 3110,
        "key": "sample-sql-query",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3110/region:with-all-attributes-buttons-and-pagination",
        "pageId": 3110,
        "key": "with-all-attributes-buttons-and-pagination",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3110/region:with-backgrounds",
        "pageId": 3110,
        "key": "with-backgrounds",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3110/region:with-badges",
        "pageId": 3110,
        "key": "with-badges",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3110/region:with-grid-layout",
        "pageId": 3110,
        "key": "with-grid-layout",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3110/region:with-image-first",
        "pageId": 3110,
        "key": "with-image-first",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3810/region:demo",
        "pageId": 3810,
        "key": "demo",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3810/region:instructions",
        "pageId": 3810,
        "key": "instructions",
        "type": "plugin/componentInstructions",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--shadowBG",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {
          "staticId": "BreadcrumbDemo"
        }
      },
      {
        "id": "page:3810/region:overview",
        "pageId": 3810,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:3810/region:within-the-blank-with-attributes-template",
        "pageId": 3810,
        "key": "within-the-blank-with-attributes-template",
        "type": "staticContent",
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
        "id": "page:3810/region:within-the-title-bar-template",
        "pageId": 3810,
        "key": "within-the-title-bar-template",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6000/region:css-utilities",
        "pageId": 6000,
        "key": "css-utilities",
        "type": "list",
        "template": "Content Block",
        "componentTemplate": "Media List",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "u-colors"
        ],
        "settings": {}
      },
      {
        "id": "page:6000/region:javascript-utilities",
        "pageId": 6000,
        "key": "javascript-utilities",
        "type": "list",
        "template": "Content Block",
        "componentTemplate": "Media List",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "u-colors"
        ],
        "settings": {}
      },
      {
        "id": "page:6000/region:tools",
        "pageId": 6000,
        "key": "tools",
        "type": "list",
        "template": "Content Block",
        "componentTemplate": "Media List",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "t-ContentBlock--lightBG"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "u-colors"
        ],
        "settings": {}
      },
      {
        "id": "page:6200/region:api-list",
        "pageId": 6200,
        "key": "api-list",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6200/region:introduction",
        "pageId": 6200,
        "key": "introduction",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6201/region:api-list",
        "pageId": 6201,
        "key": "api-list",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6201/region:introduction",
        "pageId": 6201,
        "key": "introduction",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6302/region:general-color-utilities",
        "pageId": 6302,
        "key": "general-color-utilities",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6302/region:opacity-utility-class",
        "pageId": 6302,
        "key": "opacity-utility-class",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6302/region:shadow-utility-class",
        "pageId": 6302,
        "key": "shadow-utility-class",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6302/region:stateful-color-utilities",
        "pageId": 6302,
        "key": "stateful-color-utilities",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:classes",
        "pageId": 6303,
        "key": "classes",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:classes-2",
        "pageId": 6303,
        "key": "classes-2",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:classes-3",
        "pageId": 6303,
        "key": "classes-3",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:example-markup",
        "pageId": 6303,
        "key": "example-markup",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:example-markup_1",
        "pageId": 6303,
        "key": "example-markup_1",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:example-markup_1_1",
        "pageId": 6303,
        "key": "example-markup_1_1",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:example-markup-2",
        "pageId": 6303,
        "key": "example-markup-2",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:example-markup-3",
        "pageId": 6303,
        "key": "example-markup-3",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:example-markup-4",
        "pageId": 6303,
        "key": "example-markup-4",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:example-markup-5",
        "pageId": 6303,
        "key": "example-markup-5",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:example-markup-6",
        "pageId": 6303,
        "key": "example-markup-6",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:example-markup-7",
        "pageId": 6303,
        "key": "example-markup-7",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:example-markup-8",
        "pageId": 6303,
        "key": "example-markup-8",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:flex",
        "pageId": 6303,
        "key": "flex",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:floats",
        "pageId": 6303,
        "key": "floats",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:gap",
        "pageId": 6303,
        "key": "gap",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:height",
        "pageId": 6303,
        "key": "height",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:introduction",
        "pageId": 6303,
        "key": "introduction",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:margin",
        "pageId": 6303,
        "key": "margin",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:options",
        "pageId": 6303,
        "key": "options",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:options-2",
        "pageId": 6303,
        "key": "options-2",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:options-2_1",
        "pageId": 6303,
        "key": "options-2_1",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:options-2_1_1",
        "pageId": 6303,
        "key": "options-2_1_1",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:options-3",
        "pageId": 6303,
        "key": "options-3",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:options-4",
        "pageId": 6303,
        "key": "options-4",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:options-5",
        "pageId": 6303,
        "key": "options-5",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:order",
        "pageId": 6303,
        "key": "order",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:other-classes",
        "pageId": 6303,
        "key": "other-classes",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:other-classes-2",
        "pageId": 6303,
        "key": "other-classes-2",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:other-classes-3",
        "pageId": 6303,
        "key": "other-classes-3",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:overflow",
        "pageId": 6303,
        "key": "overflow",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:padding",
        "pageId": 6303,
        "key": "padding",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:vertical-alignment",
        "pageId": 6303,
        "key": "vertical-alignment",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6303/region:width",
        "pageId": 6303,
        "key": "width",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:accessibility",
        "pageId": 6304,
        "key": "accessibility",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:classes",
        "pageId": 6304,
        "key": "classes",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-Region--removeHeader js-removeLandmark"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:classes-2",
        "pageId": 6304,
        "key": "classes-2",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-Region--removeHeader js-removeLandmark"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:classes-3",
        "pageId": 6304,
        "key": "classes-3",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-Region--removeHeader js-removeLandmark"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:classes-4",
        "pageId": 6304,
        "key": "classes-4",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-Region--removeHeader js-removeLandmark"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:classes-5",
        "pageId": 6304,
        "key": "classes-5",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-Region--removeHeader js-removeLandmark"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:classes-6",
        "pageId": 6304,
        "key": "classes-6",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-Region--removeHeader js-removeLandmark"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:classes-7",
        "pageId": 6304,
        "key": "classes-7",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-Region--removeHeader js-removeLandmark"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:classes-8",
        "pageId": 6304,
        "key": "classes-8",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-Region--removeHeader js-removeLandmark"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:classes-9",
        "pageId": 6304,
        "key": "classes-9",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-Region--removeHeader js-removeLandmark"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:colors",
        "pageId": 6304,
        "key": "colors",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:content",
        "pageId": 6304,
        "key": "content",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:headings",
        "pageId": 6304,
        "key": "headings",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:introduction",
        "pageId": 6304,
        "key": "introduction",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:line-clamp-truncate-hyphenate",
        "pageId": 6304,
        "key": "line-clamp-truncate-hyphenate",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:text-alignment",
        "pageId": 6304,
        "key": "text-alignment",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:text-style",
        "pageId": 6304,
        "key": "text-style",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:text-transform",
        "pageId": 6304,
        "key": "text-transform",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6304/region:text-wrap",
        "pageId": 6304,
        "key": "text-wrap",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6305/region:page_plug",
        "pageId": 6305,
        "key": "page_plug",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6305/region:page_plug-2",
        "pageId": 6305,
        "key": "page_plug-2",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6305/region:page_plug-3",
        "pageId": 6305,
        "key": "page_plug-3",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6305/region:page_plug-4",
        "pageId": 6305,
        "key": "page_plug-4",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6305/region:page_plug-5",
        "pageId": 6305,
        "key": "page_plug-5",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6305/region:page_plug-5_1",
        "pageId": 6305,
        "key": "page_plug-5_1",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6305/region:page_plug-6",
        "pageId": 6305,
        "key": "page_plug-6",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6305/region:page_plug-7",
        "pageId": 6305,
        "key": "page_plug-7",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6307/region:color-palette-variables",
        "pageId": 6307,
        "key": "color-palette-variables",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Standard",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-Report--stretch",
          "t-Report--staticRowColors",
          "t-Report--rowHighlightOff",
          "t-Report--inline",
          "t-Report--hideNoPagination"
        ],
        "settings": {}
      },
      {
        "id": "page:6307/region:color-variables",
        "pageId": 6307,
        "key": "color-variables",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6307/region:component-variables",
        "pageId": 6307,
        "key": "component-variables",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6307/region:overview",
        "pageId": 6307,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6307/region:sample-component-preview",
        "pageId": 6307,
        "key": "sample-component-preview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6307/region:shadow-variables",
        "pageId": 6307,
        "key": "shadow-variables",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h2",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6307/region:stateful-color-variables",
        "pageId": 6307,
        "key": "stateful-color-variables",
        "type": "classicReport",
        "template": "Content Block",
        "componentTemplate": "Standard",
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [
          "#DEFAULT#",
          "t-Report--stretch",
          "t-Report--staticRowColors",
          "t-Report--rowHighlightOff",
          "t-Report--inline",
          "t-Report--hideNoPagination"
        ],
        "settings": {}
      },
      {
        "id": "page:6400/region:case-directives",
        "pageId": 6400,
        "key": "case-directives",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:evaluation",
        "pageId": 6400,
        "key": "evaluation",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:example",
        "pageId": 6400,
        "key": "example",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:example-2",
        "pageId": 6400,
        "key": "example-2",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:example-3",
        "pageId": 6400,
        "key": "example-3",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:example-4",
        "pageId": 6400,
        "key": "example-4",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:if-directives",
        "pageId": 6400,
        "key": "if-directives",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:loop-directives",
        "pageId": 6400,
        "key": "loop-directives",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:overview",
        "pageId": 6400,
        "key": "overview",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1",
          "js-headingLevel-2"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:syntax",
        "pageId": 6400,
        "key": "syntax",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:syntax-2",
        "pageId": 6400,
        "key": "syntax-2",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:syntax-3",
        "pageId": 6400,
        "key": "syntax-3",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:syntax-4",
        "pageId": 6400,
        "key": "syntax-4",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3",
          "t-ContentBlock--lightBG",
          "js-headingLevel-3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:token-modifiers",
        "pageId": 6400,
        "key": "token-modifiers",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h3"
        ],
        "componentOptions": [],
        "settings": {}
      },
      {
        "id": "page:6400/region:with-apply-directives",
        "pageId": 6400,
        "key": "with-apply-directives",
        "type": "staticContent",
        "template": "Content Block",
        "componentTemplate": null,
        "regionOptions": [
          "#DEFAULT#",
          "t-ContentBlock--h1",
          "js-headingLevel-2"
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
