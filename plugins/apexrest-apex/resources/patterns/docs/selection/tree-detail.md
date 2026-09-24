# Tree and detail selection / Вибір у дереві та деталі

Tree and detail selection: Native tree selection; Selected key; Empty-selection state; Selected-record details.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    340
  ],
  "examples": [],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Native tree selection",
  "Selected key",
  "Empty-selection state",
  "Selected-record details"
]
```

## Interaction and states

```json
[
  "Follow a native tree-node link to load details for its key."
]
```

## Data contract

```json
{
  "source": "synthetic local SQL",
  "tables": [],
  "bindings": [
    "P1_SELECTED_ID"
  ],
  "submittedItems": [
    "P1_SELECTED_ID"
  ],
  "columns": {
    "NODE_ID": "number",
    "TREE_LEVEL": "number",
    "STATUS": "number tree status",
    "TITLE": "varchar2",
    "TARGET_URL": "checksum-signed URL"
  }
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

- pattern:selection/tree-detail/recipes/ajax-search: ready
- pattern:selection/tree-detail/recipes/page-navigation: ready

## Adaptation

- Choose unused page numbers and rename all page items, region keys and DOM IDs together.
- Replace synthetic projections with authorized application queries while preserving keys, column types and bindings.
- Preserve destination authentication, authorization, checksums and application configuration.
- Compile the adapted complete application; verify SQL, import and browser behavior separately.

## Limits

- Original APEXREST composition based on observed source structure; source JavaScript and prose are not redistributed.
- The synthetic tree has a parent and two leaves; map hierarchy and record authorization to the target data model.
- This native navigation variant does not redistribute the source tree-search JavaScript.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
