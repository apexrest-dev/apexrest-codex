# List and detail selection / Вибір зі списку та деталі

List and detail selection: Selectable Content Row list; Checksum-protected selected key; Empty-selection state; Selected-record details.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    330
  ],
  "examples": [],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Selectable Content Row list",
  "Checksum-protected selected key",
  "Empty-selection state",
  "Selected-record details"
]
```

## Interaction and states

```json
[
  "A native link navigates to the same page with a signed selected key.",
  "Only details matching that selected key are displayed."
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
    "ID": "number primary key",
    "TITLE": "varchar2",
    "STATUS": "varchar2"
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

- pattern:selection/list-detail/recipes/filtered-selection-reconciliation: unresolved — The source uses an external JavaScript controller to preserve or reselect rows after filtering and pagination. An independently tested controller is not yet included; the page-navigation and unfiltered native-selection variants remain separate.
- pattern:selection/list-detail/recipes/page-navigation: ready
- pattern:selection/list-detail/recipes/single-selection-ajax: ready

## Adaptation

- Choose unused page numbers and rename all page items, region keys and DOM IDs together.
- Replace synthetic projections with authorized application queries while preserving keys, column types and bindings.
- Preserve destination authentication, authorization, checksums and application configuration.
- Compile the adapted complete application; verify SQL, import and browser behavior separately.

## Limits

- Original APEXREST composition based on observed source structure; source JavaScript and prose are not redistributed.
- This native page-navigation variant reloads the page; the source catalog uses custom JavaScript for in-place selection.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
