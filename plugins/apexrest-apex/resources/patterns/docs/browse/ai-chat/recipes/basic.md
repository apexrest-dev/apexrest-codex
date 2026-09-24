# Inline AI chat / Вбудований AI чат

The source declares an inline assistant action but no approved provider service. A working provider, data-access policy and conversation contract must be supplied before a reusable recipe can be compiled and tested.

Status: unresolved. The source declares an inline assistant action but no approved provider service. A working provider, data-access policy and conversation contract must be supplied before a reusable recipe can be compiled and tested.

Source: ux-pattern-catalog; pages 250.

## Data contract

```json
{
  "source": "unresolved",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Adaptation

- Resolve the missing implementation and data contracts before declaring a ready recipe.
- Preserve existing application authorization and security.

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
