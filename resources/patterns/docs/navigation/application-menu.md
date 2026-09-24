# Application menu with real page routes / Меню застосунку з реальними переходами

Application menu with real page routes composed from native APEX page, region and navigation contracts with original local sample content.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1101,
    1102,
    1115,
    1120,
    1121,
    1122,
    1123,
    1124,
    1305
  ],
  "examples": [
    {
      "pageId": 1101,
      "componentKeys": [
        "region-a"
      ],
      "behavior": "Side navigation shares a list across the page shell."
    },
    {
      "pageId": 1102,
      "componentKeys": [
        "region-a"
      ],
      "behavior": "Top menu changes navigation host."
    },
    {
      "pageId": 1115,
      "componentKeys": [
        "region-a"
      ],
      "behavior": "Tab navigation replaces menu presentation."
    },
    {
      "pageId": 1120,
      "componentKeys": [
        "region-a"
      ],
      "behavior": "Menu bar preview."
    },
    {
      "pageId": 1121,
      "componentKeys": [
        "region-a"
      ],
      "behavior": "Tab preview."
    },
    {
      "pageId": 1122,
      "componentKeys": [
        "region-a"
      ],
      "behavior": "Hierarchical mega menu preview."
    },
    {
      "pageId": 1123,
      "componentKeys": [
        "region-a"
      ],
      "behavior": "Collapsed side navigation preview."
    },
    {
      "pageId": 1124,
      "componentKeys": [
        "region-a"
      ],
      "behavior": "Mega menu callout presentation."
    },
    {
      "pageId": 1305,
      "componentKeys": [
        "demo"
      ],
      "behavior": "Menu-bar list host with hierarchical entries."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Page shell",
  "Shared navigation list",
  "Three protected local destination pages"
]
```

## Interaction and states

```json
[
  "Native menu selection navigates to an existing local page.",
  "Hierarchical variants expose a child destination."
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

- pattern:navigation/application-menu/recipes/mega: ready
- pattern:navigation/application-menu/recipes/side: ready
- pattern:navigation/application-menu/recipes/side-collapsed: ready
- pattern:navigation/application-menu/recipes/tabs: ready
- pattern:navigation/application-menu/recipes/top: ready

## Adaptation

- Map sample page numbers, lists, regions and static IDs into the target application.
- Preserve existing authentication, authorization and protected navigation.
- Replace sample content with authorized project data and validate the resulting behavior.

## Limits

- Source preview JavaScript suppresses navigation; original recipes provide real local destinations instead.
- Mega-menu callout is a visual parameter of the same routing composition.
- Offline compiler validation does not prove import, SQL execution or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
