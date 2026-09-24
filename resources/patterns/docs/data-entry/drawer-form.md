# Contextual drawer form / Контекстна форма у висувній панелі

Contextual drawer form: Originating page and create action; Drawer with sections; Native form persistence; Success close and cancel.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    420
  ],
  "examples": [],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Originating page and create action",
  "Drawer with sections",
  "Native form persistence",
  "Success close and cancel"
]
```

## Interaction and states

```json
[
  "Open the drawer from its parent page.",
  "Save through a native server process before closing; cancel without saving."
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
    "P2_ID",
    "P2_NAME",
    "P2_STATUS",
    "P2_ROW_VERSION"
  ],
  "submittedItems": [
    "P2_ID",
    "P2_NAME",
    "P2_STATUS",
    "P2_ROW_VERSION"
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

- pattern:data-entry/drawer-form/recipes/table-contract: ready

## Adaptation

- Choose unused page numbers and rename all page items, region keys and DOM IDs together.
- Replace synthetic projections with authorized application queries while preserving keys, column types and bindings.
- Preserve destination authentication, authorization, checksums and application configuration.
- Compile the adapted complete application; verify SQL, import and browser behavior separately.

## Limits

- Original APEXREST composition based on observed source structure; source JavaScript and prose are not redistributed.
- The source has no save process. This recipe adds an explicit original table contract and native save/close sequence.
- The minimal parent page launches create; add a project-specific selected-record link and dialog-closed refresh for existing records.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
