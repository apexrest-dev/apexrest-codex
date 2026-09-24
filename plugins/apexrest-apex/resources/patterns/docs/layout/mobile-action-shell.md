# Mobile workspace with persistent navigation actions / Мобільна робоча область із постійними навігаційними діями

Mobile workspace with persistent navigation actions composed from native APEX page, region and navigation contracts with original local sample content.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1116,
    1117
  ],
  "examples": [
    {
      "pageId": 1116,
      "componentKeys": [
        "header-buttons",
        "page-header",
        "back",
        "edit"
      ],
      "behavior": "Sticky mobile header has alternative button-container and hero hosts; source action buttons have no handlers."
    },
    {
      "pageId": 1117,
      "componentKeys": [
        "page-footer",
        "page-footer-2",
        "previous"
      ],
      "behavior": "Bottom-stuck button containers demonstrate footer variations; source action buttons have no handlers."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Long-form page content",
  "Sticky header or footer action region",
  "Real local detail and return destinations"
]
```

## Interaction and states

```json
[
  "Native sticky behavior retains the action area while content scrolls.",
  "Details and Back navigate between existing local pages."
]
```

## Data contract

```json
{
  "source": "Original static sample content and local page targets; no application tables.",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Dependencies

```json
[
  {
    "kind": "theme",
    "reference": "Universal Theme 26.1",
    "requirement": "Use compatible native templates and preserve application authentication."
  }
]
```

## Recipes

- pattern:layout/mobile-action-shell/recipes/footer: ready
- pattern:layout/mobile-action-shell/recipes/header: ready

## Adaptation

- Map sample page numbers, lists, regions and static IDs into the target application.
- Preserve existing authentication, authorization and protected navigation.
- Replace sample content with authorized project data and validate the resulting behavior.

## Limits

- Sticky behavior and narrow-screen visibility require browser verification on the target theme.
- Original examples implement navigation only, not the source decorative Edit or Actions labels.
- Offline compiler validation does not prove import, SQL execution or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
