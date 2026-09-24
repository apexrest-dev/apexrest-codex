# Document library / Бібліотека документів

File identity, type and revision accompany a preview and authorized file actions. Downloads require an authenticated resource contract; bookmarks require an explicit persistence or client-state boundary.

Status: unresolved.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    1110,
    320
  ],
  "examples": [
    {
      "pageId": 1110,
      "componentKeys": [
        "action-list"
      ],
      "behavior": "Document Cards combine metadata, preview, download and bookmark controls."
    },
    {
      "pageId": 320,
      "componentKeys": [
        "files"
      ],
      "behavior": "Record detail exposes related file actions."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "File identity, type and revision accompany a preview and authorized file actions.",
  "Downloads require an authenticated resource contract; bookmarks require an explicit persistence or client-state boundary."
]
```

## Interaction and states

```json
[]
```

## Data contract

```json
{
  "source": "Project-managed files and authorized download endpoint",
  "tables": [],
  "bindings": [],
  "submittedItems": [],
  "writeContract": "Unresolved bookmark and download contracts."
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

- pattern:media/document-library/recipes/preview-and-actions: unresolved — The source does not implement downloads and its preview assets have unverified redistribution terms; an authorized file endpoint and original assets are required.

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

## Limits

- Original APEXREST recipe; source implementation assets and explanatory prose are not redistributed.
- Source preview images are not redistributed; download links target #.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
