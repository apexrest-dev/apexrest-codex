# Modal icon picker returning a chosen value / Модальний вибір іконки з поверненням вибраного значення

The source popup picker depends on gallery JavaScript and an application icon dictionary. The included original browser uses native page navigation. A reviewed dialog return-item contract, complete allowed dictionary and close/focus handling are required for the modal variant.

Status: unresolved. The source popup picker depends on gallery JavaScript and an application icon dictionary. The included original browser uses native page navigation. A reviewed dialog return-item contract, complete allowed dictionary and close/focus handling are required for the modal variant.

Source: universal-theme-reference; pages 4000.

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_QUERY",
    "P1_ICON"
  ],
  "submittedItems": [
    "P1_QUERY",
    "P1_ICON"
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
