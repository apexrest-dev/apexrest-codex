# Launch and close a page dialog: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "page 1 / button open",
    "path": "button.behavior.target.page",
    "type": "page number",
    "value": 2
  },
  {
    "context": "page 2",
    "path": "page.appearance.pageMode",
    "type": "enum",
    "value": "modalDialog"
  },
  {
    "context": "page 2",
    "path": "page.appearance.dialogTemplate",
    "type": "UT page template",
    "value": "@/modal-dialog"
  },
  {
    "context": "page 2 / action close",
    "path": "action.execution.fireOnInit",
    "type": "boolean",
    "value": false
  },
  {
    "context": "Dialog destination page",
    "path": "page.appearance.templateOptions",
    "type": "verified UT option tokens",
    "value": [
      "ui-dialog--stretch"
    ],
    "notes": "Observed source variants. #DEFAULT# means template defaults, not a CSS class; compatible option groups must not be combined arbitrarily."
  },
  {
    "context": "Dialog destination page",
    "path": "page.dialog.height",
    "type": "text dimension",
    "value": "400",
    "notes": "Observed fixed-height variant; automatic and fit-window variants use different template/dialog settings."
  }
]
```

## Data mappings

```json
{
  "source": "Original static instructional content; no persistent writes or external resources.",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Dependencies

```json
[
  "APEX 26.1 native components",
  "Universal Theme 26.1 inherited templates",
  "pattern:scaffold for compilation only"
]
```
