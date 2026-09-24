# Project progress overview / Огляд виконання проєктів

A percent-graph report compares project completion. Exact counts remain visible; a zero total produces an explicit unknown percentage rather than a divide-by-zero value.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    1120
  ],
  "examples": [
    {
      "pageId": 1120,
      "componentKeys": [
        "pattern-project-progress",
        "pattern-project-detail-summary",
        "project-details"
      ],
      "behavior": "Row progress is paired with exact completed/total quantities and selected-record facts."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "A percent-graph report compares project completion.",
  "Exact counts remain visible; a zero total produces an explicit unknown percentage rather than a divide-by-zero value."
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
    "ID": "number project key",
    "TITLE": "varchar2 project",
    "DONE_COUNT": "number complete tasks",
    "TOTAL_COUNT": "number planned tasks",
    "PROGRESS_PCT": "number 0..100 or null for unplanned",
    "DETAIL": "varchar2 accessible count explanation"
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

- pattern:metrics/project-progress/recipes/detail-summary: ready
- pattern:metrics/project-progress/recipes/percent-and-counts: ready

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

## Limits

- Original APEXREST recipe; source implementation assets and explanatory prose are not redistributed.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
