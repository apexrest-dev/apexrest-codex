# AI Chat: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 250,
  "pageName": "AI Chat",
  "classification": "pattern",
  "sourceSha256": "3279d852c7672b2aa4abc2a928c5c1d6753a28be99362aed9bfafa91359b6f9f",
  "patternIds": [
    "pattern:browse/ai-chat"
  ],
  "componentIds": [],
  "reason": "AI page is a provider-dependent assistant host with an unresolved service contract.",
  "variants": [
    {
      "name": "Inline showAiAssistant action",
      "disposition": "unresolved",
      "patternIds": [
        "pattern:browse/ai-chat"
      ],
      "reason": "No approved service/provider configuration, data policy or conversation contract is supplied."
    },
    {
      "name": "Page-specific CSS and initialization script",
      "disposition": "visual",
      "patternIds": [],
      "reason": "Source presentation and script assets are inventoried but not copied."
    }
  ]
}
```
