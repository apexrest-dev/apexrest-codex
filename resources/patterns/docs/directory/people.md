# People directory / Довідник людей

A directory presents synthetic names, role context and readable presence status. A selected person opens a bounded profile query.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    1100,
    1110
  ],
  "examples": [
    {
      "pageId": 1100,
      "componentKeys": [
        "users-list"
      ],
      "behavior": "Identity, role, initials and semantic presence displayed as rows."
    },
    {
      "pageId": 1110,
      "componentKeys": [
        "users-list"
      ],
      "behavior": "People cards use the same identity and role contract."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "A directory presents synthetic names, role context and readable presence status.",
  "A selected person opens a bounded profile query."
]
```

## Interaction and states

```json
[
  "Open one profile through a signed same-app link."
]
```

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "ID": "number identity",
    "TITLE": "varchar2 display name",
    "DESCRIPTION": "varchar2 role",
    "INITIALS": "varchar2 initials",
    "STATUS": "varchar2 presence",
    "BADGE_STATE": "success or warning"
  },
  "bindings": [
    "P2_ID"
  ],
  "submittedItems": [
    "P2_ID"
  ],
  "writeContract": "Read-only."
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

- pattern:directory/people/recipes/cards: ready
- pattern:directory/people/recipes/content-row: ready

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

## Limits

- Original APEXREST recipe; source implementation assets and explanatory prose are not redistributed.
- Presence values in the fixture are illustrative, not live availability.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
