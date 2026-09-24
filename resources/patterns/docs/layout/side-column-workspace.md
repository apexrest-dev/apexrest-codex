# Workspace with persistent supporting columns / Робоча область із постійними бічними колонками

Workspace with persistent supporting columns composed from native APEX page, region and navigation contracts with original local sample content.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1103,
    1104,
    1105,
    1106,
    1109,
    1110
  ],
  "examples": [
    {
      "pageId": 1103,
      "componentKeys": [
        "region-a",
        "side-region"
      ],
      "behavior": "Page-template slots separate supporting context from main content; side/top menu is an independent navigation choice."
    },
    {
      "pageId": 1104,
      "componentKeys": [
        "region-a",
        "side-region"
      ],
      "behavior": "Page-template slots separate supporting context from main content; side/top menu is an independent navigation choice."
    },
    {
      "pageId": 1105,
      "componentKeys": [
        "region-a",
        "side-region"
      ],
      "behavior": "Page-template slots separate supporting context from main content; side/top menu is an independent navigation choice."
    },
    {
      "pageId": 1106,
      "componentKeys": [
        "region-a",
        "side-region"
      ],
      "behavior": "Page-template slots separate supporting context from main content; side/top menu is an independent navigation choice."
    },
    {
      "pageId": 1109,
      "componentKeys": [
        "region-a",
        "side-content",
        "side-content-2"
      ],
      "behavior": "Page-template slots separate supporting context from main content; side/top menu is an independent navigation choice."
    },
    {
      "pageId": 1110,
      "componentKeys": [
        "region-a",
        "side-content",
        "side-content-2"
      ],
      "behavior": "Page-template slots separate supporting context from main content; side/top menu is an independent navigation choice."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Main content regions",
  "Left context column and/or right supporting column"
]
```

## Interaction and states

```json
[]
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

- pattern:layout/side-column-workspace/recipes/both: ready
- pattern:layout/side-column-workspace/recipes/left: ready
- pattern:layout/side-column-workspace/recipes/right: ready

## Adaptation

- Map sample page numbers, lists, regions and static IDs into the target application.
- Preserve existing authentication, authorization and protected navigation.
- Replace sample content with authorized project data and validate the resulting behavior.

## Limits

- These are context layouts, not data filters or an editable master-detail transaction.
- Offline compiler validation does not prove import, SQL execution or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
