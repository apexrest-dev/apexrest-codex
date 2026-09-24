# Summary banner with section navigation and sidebar / Підсумок із навігацією по секціях і бічною колонкою

Summary banner with section navigation and sidebar composed from native APEX page, region and navigation contracts with original local sample content.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1107,
    1108
  ],
  "examples": [
    {
      "pageId": 1107,
      "componentKeys": [
        "main-content",
        "region-display-selector",
        "region-a",
        "region-b",
        "region-c",
        "side-content"
      ],
      "behavior": "Summary and section navigation occupy masterDetail; detail sections are selector targets; side context stays separate."
    },
    {
      "pageId": 1108,
      "componentKeys": [
        "main-content",
        "region-display-selector",
        "region-a",
        "region-b",
        "region-c",
        "side-content"
      ],
      "behavior": "Summary and section navigation occupy masterDetail; detail sections are selector targets; side context stays separate."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Summary in masterDetail slot",
  "Region selector",
  "Three content sections",
  "Right supporting context"
]
```

## Interaction and states

```json
[
  "Selecting a region-display-selector entry scrolls to that content section."
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

- pattern:layout/marquee-sections/recipes/scroll: ready

## Adaptation

- Map sample page numbers, lists, regions and static IDs into the target application.
- Preserve existing authentication, authorization and protected navigation.
- Replace sample content with authorized project data and validate the resulting behavior.

## Limits

- Marquee template naming does not establish relational master-detail editing.
- Offline compiler validation does not prove import, SQL execution or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
