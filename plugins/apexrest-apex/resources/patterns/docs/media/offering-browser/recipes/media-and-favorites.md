# Offering media and favorites / Медіавміст пропозицій і вибране

Source asset rights and a target route are unresolved; no working offering-selection or persisted-favorites recipe is claimed.

Status: unresolved. Source asset rights and a target route are unresolved; no working offering-selection or persisted-favorites recipe is claimed.

Source: ux-pattern-catalog; pages 1110.

## Data contract

```json
{
  "source": "Project-specific offering query and authorized media assets",
  "tables": [],
  "bindings": [],
  "submittedItems": [],
  "writeContract": "Unresolved favorite persistence contract."
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
