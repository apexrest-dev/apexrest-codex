# Map: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
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
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1906/region:instructions",
      "pageId": 1906,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "map_demo",
      "targetId": "page:1906/region:map",
      "status": "resolved"
    },
    {
      "sourceId": "page:1906/region:sample-sql-query",
      "pageId": 1906,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "map_demo",
      "targetId": "page:1906/region:map",
      "status": "resolved"
    }
  ]
}
```
