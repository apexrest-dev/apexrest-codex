# Filtered list selection with reconciliation / Узгодження вибору в списку після фільтрації

The source uses an external JavaScript controller to preserve or reselect rows after filtering and pagination. An independently tested controller is not yet included; the page-navigation and unfiltered native-selection variants remain separate.

Status: unresolved. The source uses an external JavaScript controller to preserve or reselect rows after filtering and pagination. An independently tested controller is not yet included; the page-navigation and unfiltered native-selection variants remain separate.

Source: ux-pattern-catalog; pages 330.

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

## Adaptation

- Choose unused page numbers and rename all page items, region keys and DOM IDs together.
- Replace synthetic projections with authorized application queries while preserving keys, column types and bindings.
- Preserve destination authentication, authorization, checksums and application configuration.
- Compile the adapted complete application; verify SQL, import and browser behavior separately.

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
