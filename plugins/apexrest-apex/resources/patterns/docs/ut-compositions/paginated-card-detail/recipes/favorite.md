# Persistent card favorite action / Збереження картки у вибраному

The source Favorite target is #. A user/record key, storage or API, authorization, toggle semantics and refresh/error behavior are not implemented in the source.

Status: unresolved. The source Favorite target is #. A user/record key, storage or API, authorization, toggle semantics and refresh/error behavior are not implemented in the source.

Source: universal-theme-reference; pages 3110.

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_SELECTED_ID"
  ],
  "submittedItems": [
    "P1_SELECTED_ID"
  ]
}
```

## Adaptation

- Rename page, item, region and DOM IDs together, preserving SQL bindings and submitted items.
- Replace synthetic DUAL projections with an authorized data contract; preserve key uniqueness and deterministic ordering.
- Preserve destination authentication and authorization; compile after adaptation.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## Verification

```json
{
  "compiler": {
    "status": "not-run"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
