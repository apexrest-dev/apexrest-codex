# Media List: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
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
      "id": "page:1301/region:overview",
      "description": "The Media List template is a very common design pattern that has an icon, heading, description, and a badge. With Universal Theme, you can style both Lists or Classic Reports regions to appear as a Media List by setting the appropriate template.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1301,
        "componentId": "page:1301/region:overview",
        "sourceFile": "pages/p01301-media-list.apx",
        "line": 473,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": [
    {
      "sourceId": "page:1301/region:instructions-2",
      "pageId": 1301,
      "helperType": "componentInstructions",
      "targetType": "region",
      "targetKey": "Demo2",
      "targetId": "page:1301/region:demo-2",
      "status": "resolved"
    },
    {
      "sourceId": "page:1301/region:sample-sql-query",
      "pageId": 1301,
      "helperType": "regionSourceCode",
      "targetType": "region",
      "targetKey": "Demo2",
      "targetId": "page:1301/region:demo-2",
      "status": "resolved"
    },
    {
      "sourceId": "page:1301/region:template-options-2",
      "pageId": 1301,
      "helperType": "previewTemplateOptions",
      "targetType": "region",
      "targetKey": "Demo2",
      "targetId": "page:1301/region:demo-2",
      "status": "resolved"
    }
  ]
}
```
