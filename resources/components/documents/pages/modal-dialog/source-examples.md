# Modal Dialog: source examples

UPL-licensed prose from the reference application's component list and Overview/Configuration regions. Page-level overviews may describe several variants. Configuration prose describes its original example, not a promise that every setting belongs in the minimal recipe. Helper links use explicit same-page targets rather than region titles.

```json
{
  "descriptions": [
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
      "id": "page:1914/region:overview",
      "description": "This modal dialog page stretches to fit the window and is useful for displaying large reports, charts, and other information where maximum screen real estate is desired.",
      "descriptionOrigin": "oracle-upl",
      "descriptionSource": {
        "applicationId": 100,
        "pageId": 1914,
        "componentId": "page:1914/region:overview",
        "sourceFile": "pages/p01914-modal-dialog-demo-fit-window.apx",
        "line": 42,
        "license": "UPL-1.0"
      }
    }
  ],
  "helperLinks": []
}
```
