# Offering comparison browser / Каталог пропозицій для порівняння

Comparable offerings expose consistent attributes and availability. Favorites require a defined storage scope; media requires original or authorized assets.

Status: unresolved.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    1110
  ],
  "examples": [
    {
      "pageId": 1110,
      "componentKeys": [
        "related-information"
      ],
      "behavior": "Media cards combine visual identity, attributes, availability and a favorite toggle."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Comparable offerings expose consistent attributes and availability.",
  "Favorites require a defined storage scope; media requires original or authorized assets."
]
```

## Interaction and states

```json
[]
```

## Data contract

```json
{
  "source": "Project-specific offering query and authorized media assets",
  "tables": [],
  "bindings": [],
  "submittedItems": [],
  "writeContract": "Unresolved favorite persistence contract."
}
```

## Dependencies

```json
[
  {
    "kind": "native",
    "reference": "Oracle APEX 26.1",
    "requirement": "Use the native component implementations pinned by the compiler."
  },
  {
    "kind": "theme",
    "reference": "Universal Theme 26.1",
    "requirement": "Resolve inherited templates in the destination application."
  },
  {
    "kind": "scaffold",
    "reference": "pattern:scaffold",
    "requirement": "Offline compiler scaffold only; preserve destination authentication and authorization."
  }
]
```

## Recipes

- pattern:media/offering-browser/recipes/media-and-favorites: unresolved — Source asset rights and a target route are unresolved; no working offering-selection or persisted-favorites recipe is claimed.

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

## Limits

- Original APEXREST recipe; source implementation assets and explanatory prose are not redistributed.
- The source favorite action is client-only and the offering link targets #; production persistence is not established.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
