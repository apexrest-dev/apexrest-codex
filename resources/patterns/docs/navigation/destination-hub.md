# Destination hub / Навігаційний огляд розділів

A scannable collection presents named destinations with supporting context. Each destination opens a declared target that uses its stable selected key.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    1100,
    1110,
    1
  ],
  "examples": [
    {
      "pageId": 1100,
      "componentKeys": [
        "patterns"
      ],
      "behavior": "Content Row destinations navigate to declared pages."
    },
    {
      "pageId": 1110,
      "componentKeys": [
        "patterns"
      ],
      "behavior": "Full-card destinations use the same navigation contract."
    },
    {
      "pageId": 1,
      "componentKeys": [
        "patterns",
        "component-primitives"
      ],
      "behavior": "Category navigation and component entry points."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "A scannable collection presents named destinations with supporting context.",
  "Each destination opens a declared target that uses its stable selected key."
]
```

## Interaction and states

```json
[
  "Follow a destination link; use the target Back link to return."
]
```

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "ID": "number stable destination key",
    "TITLE": "varchar2 label",
    "DESCRIPTION": "varchar2 context",
    "TARGET_URL": "checksum-signed same-app URL"
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

- pattern:navigation/destination-hub/recipes/cards: ready
- pattern:navigation/destination-hub/recipes/content-row: ready

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

## Limits

- Original APEXREST recipe; source implementation assets and explanatory prose are not redistributed.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
