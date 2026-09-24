# Status overview / Огляд станів

A repeated status summary exposes state as text alongside supporting context. Success, warning and danger states are derived from the same row status.

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
        "status-list-2"
      ],
      "behavior": "Status labels, icons and badge state express one consistent meaning."
    },
    {
      "pageId": 1110,
      "componentKeys": [
        "status-list-2"
      ],
      "behavior": "Record cards show identity and current condition."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "A repeated status summary exposes state as text alongside supporting context.",
  "Success, warning and danger states are derived from the same row status."
]
```

## Interaction and states

```json
[]
```

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "ID": "number",
    "TITLE": "varchar2 subsystem",
    "DESCRIPTION": "varchar2 explanation",
    "STATUS": "varchar2 readable condition",
    "BADGE_STATE": "success, warning or danger"
  },
  "bindings": [],
  "submittedItems": [],
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

- pattern:status/overview/recipes/cards: ready
- pattern:status/overview/recipes/content-row: ready

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

## Limits

- Original APEXREST recipe; source implementation assets and explanatory prose are not redistributed.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
