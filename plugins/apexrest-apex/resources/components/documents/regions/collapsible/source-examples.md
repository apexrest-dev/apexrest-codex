# Collapsible: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
    {
      "id": "list-entry:avatar",
      "description": "Display an icon, image, or initials.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3001,
        "componentId": "list-entry:avatar",
        "sourceFile": "shared-components/lists.apx",
        "line": 252,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:badge",
      "description": "Display content within a badge.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3002,
        "componentId": "list-entry:badge",
        "sourceFile": "shared-components/lists.apx",
        "line": 271,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:card-regions",
      "description": "Present a variety of information in small blocks and can be heavily customized.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3110,
        "componentId": "list-entry:card-regions",
        "sourceFile": "shared-components/lists.apx",
        "line": 406,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:collapsible",
      "description": "Toggle the visibility of a region's content on the page.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1206,
        "componentId": "list-entry:collapsible",
        "sourceFile": "shared-components/lists.apx",
        "line": 502,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:comments",
      "description": "Display user comments and status updates.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3003,
        "componentId": "list-entry:comments",
        "sourceFile": "shared-components/lists.apx",
        "line": 541,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:content-row",
      "description": "Display content using a column for selection, such as a checkbox or radio button, an icon, and actions.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3004,
        "componentId": "list-entry:content-row",
        "sourceFile": "shared-components/lists.apx",
        "line": 580,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:inline-dialog",
      "description": "Display a region on the current page within a modal dialog.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1911,
        "componentId": "list-entry:inline-dialog",
        "sourceFile": "shared-components/lists.apx",
        "line": 714,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:media-list",
      "description": "Design lists that involve an icon, heading, description, and a badge.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3005,
        "componentId": "list-entry:media-list",
        "sourceFile": "shared-components/lists.apx",
        "line": 810,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:metric-card",
      "description": "Used to display a single key value alongside a label and supporting details.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3007,
        "componentId": "list-entry:metric-card",
        "sourceFile": "shared-components/lists.apx",
        "line": 868,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "list-entry:timeline",
      "description": "Display recent updates and interactions within an application.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3006,
        "componentId": "list-entry:timeline",
        "sourceFile": "shared-components/lists.apx",
        "line": 1022,
        "attribute": "userDefinedAttributes.1",
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1206/region:overview",
      "description": "Allow your users to toggle the visibility of a region's content on the page.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1206,
        "componentId": "page:1206/region:overview",
        "sourceFile": "pages/p01206-collapsible-region.apx",
        "line": 309,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1906/region:configuration",
      "description": "Region\nType: Map\nTemplate: Blank with Attributes (No Grid)\nAttributes\nMap Background: Built-In\nMap Standard: Oracle World Map\nAdvanced: Custom SVG Style for Airport\nLayer: Major US Airports\nType: Points\nGeometry Column Data Type: SDO_GEOMETRY\nGeometry Column: The SDO_GEOMETRY column returning geometry objects to display on the map\nPoint Objects Style: SVG\nPoint Objects Shape: Airport SVG Style\nPoint Objects Shape Scale: 2\nTooltip: HTML Expression\nInfo Window: Custom HTML Expression",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1906,
        "componentId": "page:1906/region:configuration",
        "sourceFile": "pages/p01906-map.apx",
        "line": 42,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "517216968003471442"
    },
    {
      "id": "page:1906/region:overview",
      "description": "The Map region is useful for displaying coordinate data and is highly customizable. Supports points, lines and polygon data, as well as a variety of map backgrounds from OpenStreetMap and Oracle World Map to custom backgrounds.\nMaps can be connected with additional APEX components such as Faceted Search and Reports, to make filtering and viewing data even easier.\nTo see additional Map examples, visit the Sample Maps App.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1906,
        "componentId": "page:1906/region:overview",
        "sourceFile": "pages/p01906-map.apx",
        "line": 317,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1911/region:overview",
      "description": "An inline dialog displays a region on the current page within a modal dialog.\nCreate a region, set its \"Position\" attribute to Inline Dialogs, and use Inline Dialog as its Region template.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1911,
        "componentId": "page:1911/region:overview",
        "sourceFile": "pages/p01911-inline-dialog.apx",
        "line": 107,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1912/region:overview",
      "description": "This dialog will automatically expand to fit its contents. Try it out by by expanding the region below.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1912,
        "componentId": "page:1912/region:overview",
        "sourceFile": "pages/p01912-modal-dialog-demo.apx",
        "line": 54,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1913/region:overview",
      "description": "This modal dialog has a fixed height of 400px and will not automatically resize to fit its contents. This type of dialog is useful for wizards where the navigation buttons should remain in a constant position.\nTo set a height for a modal dialog page, simply set the \"Height\" property for the page in the Property Editor.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1913,
        "componentId": "page:1913/region:overview",
        "sourceFile": "pages/p01913-modal-dialog-demo-fixed-size.apx",
        "line": 24,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1915/region:overview",
      "description": "An inline popup displays a region on the current page within a small popup component. It is similar to a dialog, however does not have a header bar, title, or close button.\nCreate a region, set its \"Position\" attribute to Inline Dialogs, and use Inline Popup as its Region template.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1915,
        "componentId": "page:1915/region:overview",
        "sourceFile": "pages/p01915-inline-popup.apx",
        "line": 139,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:1918/region:overview",
      "description": "This drawer will automatically expand to fit its contents.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1918,
        "componentId": "page:1918/region:overview",
        "sourceFile": "pages/p01918-drawer-demo.apx",
        "line": 58,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3001/region:overview",
      "description": "Avatars are useful for displaying an icon, image, or initials within a region. An Avatar can be used to display a single (partial) avatar, as multiple (report) avatars, or can be applied as a column type or in report templates to display an avatar for each report row. The multiple (report) display type is useful for being able to display multiple avatars as one region on a page outside of a report.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3001,
        "componentId": "page:3001/region:overview",
        "sourceFile": "pages/p03001-avatar-component.apx",
        "line": 559,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3002/region:overview",
      "description": "The Badge partial is useful for displaying badges or counters.\nThis partial can be used to display a single badge, or can be applied in report templates to display a badge for each report row.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3002,
        "componentId": "page:3002/region:overview",
        "sourceFile": "pages/p03002-badge-component.apx",
        "line": 643,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3003/region:overview",
      "description": "The Comments component is used to display user comments and status updates.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3003,
        "componentId": "page:3003/region:overview",
        "sourceFile": "pages/p03003-comments-component.apx",
        "line": 628,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3004/region:configuration",
      "description": "Region\nType: Content Row\nTemplate Blank with Attributes (No Grid)\nAttributes\nEach row has a Title, Description, Miscellaneous, and Actions\nAvatar\nType: Icon\nIcon: the ICON_CLASS column\nShape: No Shape\nSize: Small\nPrimary Actions\nTwo actions are in the Primary Actions position for each content row item.\nThe first action uses the Button template, with Display Type set to Icon and the Icon and Hot properties set.\nThe second action uses the Menu template, and has three sub actions: Create, Duplicate, amd Delete.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3004,
        "componentId": "page:3004/region:configuration",
        "sourceFile": "pages/p03004-content-row-component.apx",
        "line": 292,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "1764677404860185859"
    },
    {
      "id": "page:3004/region:overview",
      "description": "Content Row is a theme component that is suitable for displaying most types of content. This component features a column for an icon, title and description, miscellaneous attributes, and actions.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3004,
        "componentId": "page:3004/region:overview",
        "sourceFile": "pages/p03004-content-row-component.apx",
        "line": 377,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3005/region:configuration",
      "description": "Region\nType: Media List\nTemplate: Blank with Attributes (No Grid)\nAttributes\nEach row has a Title and Description. Both Avatar and Badge are displayed.\nAvatar\nType: Icon\nIcon: fa-cloud\nShape: Rounded\nBadge\nEach badge has a label and value that each maps to a column from the region source.\nThe label for each badge is set to not display, so that only the badge value is visible.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3005,
        "componentId": "page:3005/region:configuration",
        "sourceFile": "pages/p03005-media-list-component.apx",
        "line": 198,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "1764677737293185863"
    },
    {
      "id": "page:3005/region:overview",
      "description": "Media List is a very common design pattern that has an icon, heading, description, and a badge.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3005,
        "componentId": "page:3005/region:overview",
        "sourceFile": "pages/p03005-media-list-component.apx",
        "line": 283,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3006/region:configuration",
      "description": "Region\nType: Timeline\nTemplate: Blank with Attributes (No Grid)\nAttributes\nEach row has a User Name, Date, Title, and Description. Both Avatar and Badge are displayed, with Avatar representing the user and Badge representing the project status.\nAvatar\nType: Icon\nIcon: fa-user\nShape: Circular\nBadge\nEach badge has a value, state, and icon that each maps to a column from the region source.\nThe label for each badge is set to not display, so that only the badge value is visible.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3006,
        "componentId": "page:3006/region:configuration",
        "sourceFile": "pages/p03006-timeline-component.apx",
        "line": 218,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "1764678213196185867"
    },
    {
      "id": "page:3006/region:overview",
      "description": "Timeline is a theme component new in APEX 23.1 that is useful for displaying a series of events. It can be used to showcase the history of a given widget, recent updates, or new interactions within an application.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3006,
        "componentId": "page:3006/region:overview",
        "sourceFile": "pages/p03006-timeline-component.apx",
        "line": 302,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3007/region:configuration",
      "description": "Region\nType: Metric Card\nSettings\nUtilizes Title, Metric and Meta with the 3 Column Layout. Metric CSS Classes set with u-bold utility class.\nAvatar\nType: Icon\nPosition: Inline\nBadge\nUtilizes State and Icon with the Subtle Style set.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3007,
        "componentId": "page:3007/region:configuration",
        "sourceFile": "pages/p03007-metric-card.apx",
        "line": 79,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "14448319605583509"
    },
    {
      "id": "page:3007/region:configuration_1",
      "description": "Region\nType: Metric Card\nSettings\nUtilizes Title, Metric and Meta with the Default Layout.\nAvatar\nType: Icon\nPosition: Top\nShape: Circular\nBadge\nUtilizes State and Icon with the Outline Style set.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3007,
        "componentId": "page:3007/region:configuration_1",
        "sourceFile": "pages/p03007-metric-card.apx",
        "line": 117,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "14846689235363160"
    },
    {
      "id": "page:3007/region:configuration_2",
      "description": "Region\nType: Metric Card\nSettings\nUtilizes Title, Metric and Meta with the Stacked Layout. Metric CSS Classes set with u-text-title-5 utility class\nAvatar\nType: Icon\nPosition: Top\nAlignment: Center\nBadge\nUtilizes State and Icon with the Default Style set.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3007,
        "componentId": "page:3007/region:configuration_2",
        "sourceFile": "pages/p03007-metric-card.apx",
        "line": 155,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "14846744812363161"
    },
    {
      "id": "page:3007/region:overview",
      "description": "Metric Card is a compact card used to display a single key value alongside a label and supporting details, ideal for presenting KPIs, stats, or at-a-glance data points in a dashboard.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3007,
        "componentId": "page:3007/region:overview",
        "sourceFile": "pages/p03007-metric-card.apx",
        "line": 681,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:3110/region:configuration",
      "description": "Region\nType: Cards\nGrid Columns: 2\nPagination: enabled with 2 entries.\nCard Attributes\nTop area has an icon class, title, subtitle and badge information.\nBelow the media is a paragraph as the body and a small timestamp as secondary body.\nMedia\nSource: Image URL\nPosition: Body\nAppearance: Auto\nSizing: Cover\nActions\nButton in Primary position that opens a modal page.\nButton in Secondary position, only icon.\nLive Template Options\nStyle: C",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3110,
        "componentId": "page:3110/region:configuration",
        "sourceFile": "pages/p03110-card-regions.apx",
        "line": 298,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "5825039263743253508"
    },
    {
      "id": "page:3110/region:configuration-2",
      "description": "Region\nType: Cards\nGrid Columns: 3\nPagination: scroll (default)\nCard Attributes\nTop area has an icon class, title, subtitle and badge information.\nMedia is set as background, on top is a paragraph as the body with no secondary body.\nMedia\nSource: Image URL\nPosition: As Background Image\nAppearance: Auto\nSizing: Cover\nActions\nButton in Primary position that opens a modal page.\nLive Template Options\nStyle: A",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3110,
        "componentId": "page:3110/region:configuration-2",
        "sourceFile": "pages/p03110-card-regions.apx",
        "line": 349,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "5825039386071253509"
    },
    {
      "id": "page:3110/region:configuration-3",
      "description": "Region\nType: Cards\nGrid Columns: 3\nPagination: scroll (default)\nCard Attributes\nFrom top to bottom there is an image, icon, title, subtitle, badge and body information.\nMedia\nSource: URL Column\nPosition: First\nAppearance: Widescreen\nSizing: Cover\nActions\nEntire Card as a link.\nLive Template Options\nStyle: B",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3110,
        "componentId": "page:3110/region:configuration-3",
        "sourceFile": "pages/p03110-card-regions.apx",
        "line": 399,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "5825039721734253512"
    },
    {
      "id": "page:3110/region:configuration-4",
      "description": "Region\nType: Cards\nGrid Columns: Auto\nPagination: scroll (default)\nCard Attributes\nFrom top to bottom there is an icon, title and subtitle. No Media.\nIcon\nSource: Icon Class Column\nPosition: Top\nActions\nEntire Card as a link.\nLive Template Options\nStyle: B\nLabel Alignment: Right",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3110,
        "componentId": "page:3110/region:configuration-4",
        "sourceFile": "pages/p03110-card-regions.apx",
        "line": 448,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "5825039916100253514"
    },
    {
      "id": "page:3110/region:configuration-5",
      "description": "Region\nType: Cards\nGrid Columns: 3\nPagination: scroll (default)\nCard Attributes\nFrom top to bottom there is an icon with image URL, title, subtitle and body information.\nMedia is not set.\nIcon\nSource: Image URL\nPosition: Start\nActions\nEntire Card as a link.\nLive Template Options\nStyle: B",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3110,
        "componentId": "page:3110/region:configuration-5",
        "sourceFile": "pages/p03110-card-regions.apx",
        "line": 496,
        "license": "UPL-1.0"
      },
      "parentRegionSourceId": "5825040474679253520"
    },
    {
      "id": "page:3110/region:overview",
      "description": "Cards Regions are useful for presenting a variety of information in small blocks and can be heavily customized. They can be displayed in three styles, with icons or initials, images as part of the body or as the background, to enhance each card presentation and you can control the layout.\nActions can be added to each card's image, title, subtitle, as new buttons or even using the entire card to enhance user experience.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 3110,
        "componentId": "page:3110/region:overview",
        "sourceFile": "pages/p03110-card-regions.apx",
        "line": 698,
        "license": "UPL-1.0"
      }
    },
    {
      "id": "page:6307/region:overview",
      "description": "You can use these CSS variables, instead of hard-coded values, in your custom CSS definitions.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 6307,
        "componentId": "page:6307/region:overview",
        "sourceFile": "pages/p06307-css-variables.apx",
        "line": 459,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1206/region:instructions",
      "pageId": 1206,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1206/region:collapsible-region",
      "status": "resolved"
    },
    {
      "sourceId": "page:1206/region:template-options",
      "pageId": 1206,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo1",
      "targetId": "page:1206/region:collapsible-region",
      "status": "resolved"
    },
    {
      "sourceId": "page:1206/region:template-options-2",
      "pageId": 1206,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo2",
      "targetId": "page:1206/region:collapsible-region-2",
      "status": "resolved"
    },
    {
      "sourceId": "page:1206/region:template-options-3",
      "pageId": 1206,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo3",
      "targetId": "page:1206/region:collapsible-region-3",
      "status": "resolved"
    }
  ]
}
```
