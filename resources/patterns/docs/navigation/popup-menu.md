# Button-triggered hierarchical navigation menu / Ієрархічне навігаційне меню з кнопкою відкриття

Button-triggered hierarchical navigation menu composed from native APEX page, region and navigation contracts with original local sample content.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1306
  ],
  "examples": [
    {
      "pageId": 1306,
      "componentKeys": [
        "menu-popup",
        "menu-button"
      ],
      "behavior": "The trigger addresses actions_menu generated from the list region DOM ID."
    },
    {
      "pageId": 1306,
      "componentKeys": [
        "customized-menu-2",
        "menu-button-2"
      ],
      "behavior": "Customized popup adds icons, a separator, callout and js-addActions; source targets are placeholders."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Visible trigger button",
  "Menu-popup list region with stable DOM ID",
  "Shared list and local destination pages"
]
```

## Interaction and states

```json
[
  "Button data-menu association opens the native popup.",
  "Nested menu entries navigate to protected local pages."
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

- pattern:navigation/popup-menu/recipes/decorated: ready
- pattern:navigation/popup-menu/recipes/hierarchy: ready

## Adaptation

- Map sample page numbers, lists, regions and static IDs into the target application.
- Preserve existing authentication, authorization and protected navigation.
- Replace sample content with authorized project data and validate the resulting behavior.

## Limits

- The source action_a reference has no observed implementation in this composition. The decorated original recipe provides explicit navigation instead of claiming an application action handler.
- Offline compiler validation does not prove import, SQL execution or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
