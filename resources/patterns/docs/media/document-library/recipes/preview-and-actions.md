# Document previews and actions / Попередній перегляд документів із діями

The source does not implement downloads and its preview assets have unverified redistribution terms; an authorized file endpoint and original assets are required.

Status: unresolved. The source does not implement downloads and its preview assets have unverified redistribution terms; an authorized file endpoint and original assets are required.

Source: ux-pattern-catalog; pages 1110, 320.

## Data contract

```json
{
  "source": "Project-managed files and authorized download endpoint",
  "tables": [],
  "bindings": [],
  "submittedItems": [],
  "writeContract": "Unresolved bookmark and download contracts."
}
```

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

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
