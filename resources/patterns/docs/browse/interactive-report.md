# Interactive report browser / Перегляд інтерактивного звіту

Browse a stable read-only record projection using the native Interactive Report search, filters and report controls.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    230
  ],
  "examples": [],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "A native Interactive Report region owns the authoritative SQL projection.",
  "Typed columns expose ID, title, description, category and status.",
  "A no-data message keeps an empty filtered result understandable."
]
```

## Interaction and states

```json
[
  "The native report search bar and column filters refine the same secured query.",
  "Native report controls manage report presentation and navigation.",
  "A filter with no matching rows displays the report no-data message; users can reset or change report filters."
]
```

## Data contract

```json
{
  "source": "Four original synthetic rows selected from DUAL; no application tables, views, packages or external resources.",
  "tables": [],
  "columns": [
    {
      "name": "ID",
      "type": "NUMBER",
      "role": "Stable record identity"
    },
    {
      "name": "TITLE",
      "type": "VARCHAR2",
      "role": "Record title and searchable text"
    },
    {
      "name": "DESCRIPTION",
      "type": "VARCHAR2",
      "role": "Record summary and searchable text"
    },
    {
      "name": "CATEGORY",
      "type": "VARCHAR2",
      "role": "Category refinement"
    },
    {
      "name": "STATUS",
      "type": "VARCHAR2",
      "role": "Status refinement"
    }
  ],
  "bindings": [],
  "submittedItems": [],
  "facetItems": [],
  "writeContract": "Read-only. No editing or persistence API is claimed."
}
```

## Dependencies

```json
[
  "Oracle APEX 26.1 native components",
  "Universal Theme 26.1 inherited templates",
  "pattern:scaffold for offline compiler validation only"
]
```

## Recipes

- pattern:browse/interactive-report/recipes/basic: ready

## Adaptation

- Choose a free page number and rename every P1_ item, region reference and dynamic action consistently.
- Replace the synthetic SELECT with an authorized project query; preserve column aliases, types and a stable unique ID.
- Merge the composition into the destination application and preserve its authentication, authorization and page-access policy.
- Verify populated, empty, restored-session and narrow-screen states after importing into an identified test target.
- Keep the report column metadata aligned with SQL aliases and data types; configure report download and saved-report policies for the target application.

## Limits

- The source application contributes structural observations only; recipe text, SQL and data are original APEXREST material.
- The recipe is read-only and does not include business actions, editing, persistence or an authorization model for a real data set.
- Offline compiler validation does not prove SQL execution, application import or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
