# Row create/edit/duplicate/delete actions / Створення редагування дублювання та видалення рядків

Source business action URLs are #. Destination record APIs, permissions, transactional semantics, validation and success/error refresh must be defined before these are working commands.

Status: unresolved. Source business action URLs are #. Destination record APIs, permissions, transactional semantics, validation and success/error refresh must be defined before these are working commands.

Source: universal-theme-reference; pages 3004.

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_SELECTED_ID",
    "P1_VIEW"
  ],
  "submittedItems": [
    "P1_SELECTED_ID",
    "P1_VIEW"
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
