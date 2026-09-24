# Authorized message deletion / Видалення повідомлення з перевіркою дозволів

The source Delete target is #. Message identity, ownership rules, delete API and transcript refresh are unresolved. A read-only transcript does not supply this contract.

Status: unresolved. The source Delete target is #. Message identity, ownership rules, delete API and transcript refresh are unresolved. A read-only transcript does not supply this contract.

Source: universal-theme-reference; pages 3003.

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [],
  "submittedItems": [],
  "projections": {
    "USER_NAME": "varchar2",
    "COMMENT_TEXT": "varchar2",
    "COMMENT_DATE": "timestamp",
    "ALIGNMENT": "inbound or outbound"
  }
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
