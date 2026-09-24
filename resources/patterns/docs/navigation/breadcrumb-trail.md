# Hierarchical page trail with return navigation / Ієрархічний шлях сторінок із поверненням

Hierarchical page trail with return navigation composed from native APEX page, region and navigation contracts with original local sample content.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    3810
  ],
  "examples": [
    {
      "pageId": 3810,
      "componentKeys": [
        "title-bar",
        "blank-region"
      ],
      "behavior": "One breadcrumb source is rendered in title-bar and plain-region hosts."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Shared breadcrumb hierarchy",
  "Page title host or plain region host",
  "Parent and child destination pages"
]
```

## Interaction and states

```json
[
  "A child page shows its hierarchy and links back to the parent page."
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

- pattern:navigation/breadcrumb-trail/recipes/plain: ready
- pattern:navigation/breadcrumb-trail/recipes/title: ready

## Adaptation

- Map sample page numbers, lists, regions and static IDs into the target application.
- Preserve existing authentication, authorization and protected navigation.
- Replace sample content with authorized project data and validate the resulting behavior.

## Limits

- Plain versus title-bar host is a presentation variant of the same page hierarchy.
- Offline compiler validation does not prove import, SQL execution or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
