# Item detail summary / Короткі деталі об’єкта

Item detail summary: Record heading; Summary metric; Key-value facts; Recent activity.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    310
  ],
  "examples": [],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Record heading",
  "Summary metric",
  "Key-value facts",
  "Recent activity"
]
```

## Interaction and states

```json
[
  "Read a compact overview of one record before inspecting supporting activity."
]
```

## Data contract

```json
{
  "source": "synthetic local SQL",
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
    "requirement": "Use the pinned native component and template definitions."
  }
]
```

## Recipes

- pattern:details/summary/recipes/basic: ready

## Adaptation

- Choose unused page numbers and rename all page items, region keys and DOM IDs together.
- Replace synthetic projections with authorized application queries while preserving keys, column types and bindings.
- Preserve destination authentication, authorization, checksums and application configuration.
- Compile the adapted complete application; verify SQL, import and browser behavior separately.

## Limits

- Original APEXREST composition based on observed source structure; source JavaScript and prose are not redistributed.
- Read-only summary; edit commands require a project-specific form route.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
