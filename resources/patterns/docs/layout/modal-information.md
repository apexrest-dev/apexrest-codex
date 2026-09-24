# Open and dismiss an information dialog / Відкриття та закриття інформаційного діалогу

Open and dismiss an information dialog composed from native APEX page, region and navigation contracts with original local sample content.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1100,
    1111
  ],
  "examples": [
    {
      "pageId": 1100,
      "componentKeys": [
        "dialog",
        "std-dialog-view"
      ],
      "behavior": "Launcher targets the standard dialog example."
    },
    {
      "pageId": 1111,
      "componentKeys": [
        "region-a",
        "region-b",
        "region-c"
      ],
      "behavior": "Three static regions are hosted by modal-dialog page template."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Protected launcher page",
  "Modal page with content",
  "Native cancel-dialog action"
]
```

## Interaction and states

```json
[
  "Open navigates to the modal page.",
  "Close cancels the dialog without a submit or data write."
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

- pattern:layout/modal-information/recipes/basic: ready

## Adaptation

- Map sample page numbers, lists, regions and static IDs into the target application.
- Preserve existing authentication, authorization and protected navigation.
- Replace sample content with authorized project data and validate the resulting behavior.

## Limits

- No form save, validation or transactional behavior is claimed.
- Offline compiler validation does not prove import, SQL execution or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
