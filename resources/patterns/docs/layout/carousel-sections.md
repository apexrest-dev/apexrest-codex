# Carousel containing complete content sections / Карусель із вкладеними змістовими секціями

Carousel containing complete content sections composed from native APEX page, region and navigation contracts with original local sample content.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1205
  ],
  "examples": [
    {
      "pageId": 1205,
      "componentKeys": [
        "carousel-region",
        "region-a",
        "region-b",
        "region-c"
      ],
      "behavior": "Default carousel uses nested slides."
    },
    {
      "pageId": 1205,
      "componentKeys": [
        "carousel-region-with-buttons",
        "region-a-2",
        "region-b-2",
        "region-c-2"
      ],
      "behavior": "Sliding carousel enables js-cycle10s; gallery buttons have no functional handlers."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Native carousel container",
  "Three child slide regions"
]
```

## Interaction and states

```json
[
  "Native carousel controls choose a section.",
  "Automatic variant advances every ten seconds using native theme behavior."
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

- pattern:layout/carousel-sections/recipes/automatic: ready
- pattern:layout/carousel-sections/recipes/manual: ready

## Adaptation

- Map sample page numbers, lists, regions and static IDs into the target application.
- Preserve existing authentication, authorization and protected navigation.
- Replace sample content with authorized project data and validate the resulting behavior.

## Limits

- Source gallery action buttons are excluded because they are inert.
- Timing, keyboard behavior and reduced-motion accessibility need runtime verification.
- Offline compiler validation does not prove import, SQL execution or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
