# Full item detail / Повні деталі об’єкта з вкладками

Full item detail: Record heading and measures; Region Display Selector; Key facts section; Activity section; Read-only discussion section.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    320
  ],
  "examples": [],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Record heading and measures",
  "Region Display Selector",
  "Key facts section",
  "Activity section",
  "Read-only discussion section"
]
```

## Interaction and states

```json
[
  "Switch the visible supporting section while keeping record context."
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

- pattern:details/full/recipes/read-only: ready

## Adaptation

- Choose unused page numbers and rename all page items, region keys and DOM IDs together.
- Replace synthetic projections with authorized application queries while preserving keys, column types and bindings.
- Preserve destination authentication, authorization, checksums and application configuration.
- Compile the adapted complete application; verify SQL, import and browser behavior separately.

## Limits

- Original APEXREST composition based on observed source structure; source JavaScript and prose are not redistributed.
- This read-only variant omits attachment download, comment posting and editing contracts that require application APIs.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
