# Two-party conversation transcript: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "path": "region.conversation.settings.alignment",
    "value": "&ALIGNMENT."
  },
  {
    "path": "region.conversation.settings.style",
    "value": "chatSpeechBubbles"
  }
]
```

## Data mappings

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [],
  "submittedItems": [],
  "projections": {
    "USER_NAME": "varchar2",
    "COMMENT_TEXT": "varchar2",
    "COMMENT_DATE": "timestamp",
    "ALIGNMENT": "inbound or outbound"
  }
}
```

## Dependencies

```json
[
  {
    "kind": "theme",
    "reference": "Universal Theme 26.1",
    "requirement": "Use the pinned native/theme component definitions and adapt destination IDs."
  }
]
```
