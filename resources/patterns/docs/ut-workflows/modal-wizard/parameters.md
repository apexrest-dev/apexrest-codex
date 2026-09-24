# Three-step modal wizard: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "wizard pages",
    "path": "page.appearance.dialogTemplate",
    "type": "UT page template",
    "value": "@/wizard-modal-dialog"
  },
  {
    "context": "wizard progress region",
    "path": "region.source.list",
    "type": "shared list reference",
    "value": "@workflow-progress"
  },
  {
    "context": "next and previous buttons",
    "path": "button.behavior.target.page",
    "type": "included page number",
    "value": [
      2,
      3,
      4
    ]
  },
  {
    "context": "final page / process finish-review",
    "path": "process.serverSideCondition.whenButtonPressed",
    "type": "button reference",
    "value": "@finish"
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
