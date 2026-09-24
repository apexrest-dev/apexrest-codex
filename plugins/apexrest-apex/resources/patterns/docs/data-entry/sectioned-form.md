# Sectioned data entry form / Форма введення з секціями

Sectioned data entry form: Identity section; Classification section; Required fields and status LOV; Insert/update/delete actions; Row-version conflict detection.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    410
  ],
  "examples": [],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Identity section",
  "Classification section",
  "Required fields and status LOV",
  "Insert/update/delete actions",
  "Row-version conflict detection"
]
```

## Interaction and states

```json
[
  "Initialize the selected row before header.",
  "Validate required input, save through native form processing, and confirm deletion."
]
```

## Data contract

```json
{
  "source": "Explicit table fixture or mapped existing project table",
  "tables": [
    "APEXREST_PATTERN_RECORDS"
  ],
  "bindings": [
    "P1_ID",
    "P1_NAME",
    "P1_STATUS",
    "P1_ROW_VERSION"
  ],
  "submittedItems": [
    "P1_ID",
    "P1_NAME",
    "P1_STATUS",
    "P1_ROW_VERSION"
  ],
  "columns": {
    "ID": "number identity primary key",
    "NAME": "varchar2(200) not null",
    "STATUS": "varchar2(20), Open or Closed",
    "ROW_VERSION": "number incremented on update"
  },
  "prerequisite": "prerequisites/pattern-records.sql; requires separate schema-change authorization; not run by compilation or import"
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

- pattern:data-entry/sectioned-form/recipes/table-contract: ready

## Adaptation

- Choose unused page numbers and rename all page items, region keys and DOM IDs together.
- Replace synthetic projections with authorized application queries while preserving keys, column types and bindings.
- Preserve destination authentication, authorization, checksums and application configuration.
- Compile the adapted complete application; verify SQL, import and browser behavior separately.

## Limits

- Original APEXREST composition based on observed source structure; source JavaScript and prose are not redistributed.
- The source demonstrates layout and initialization only. The original recipe adds a declared persistence fixture; it has not been applied to a database.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
