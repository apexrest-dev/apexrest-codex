# Status overview — record cards / Огляд статусів у картках записів

Native Cards expose readable status alongside record context.

Status: ready.

Source: ux-pattern-catalog; pages 1100, 1110.

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "ID": "number",
    "TITLE": "varchar2 subsystem",
    "DESCRIPTION": "varchar2 explanation",
    "STATUS": "varchar2 readable condition",
    "BADGE_STATE": "success, warning or danger"
  },
  "bindings": [],
  "submittedItems": [],
  "writeContract": "Read-only."
}
```

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Status overview
    alias: HOME
    title: Status overview
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region statuses (
        name: Service conditions
        type: cards
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 1 ID, 'Import service' TITLE, 'The latest batch completed.' DESCRIPTION, 'Healthy' STATUS, 'success' BADGE_STATE from dual union all select 2, 'Review queue', 'Two records need review.', 'Attention', 'warning' from dual union all select 3, 'Outbound delivery', 'One delivery requires correction.', 'Blocked', 'danger' from dual
                ```
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/cards-container
            templateOptions: #DEFAULT#
        }
        card {
            primaryKeyColumn1: ID
        }
        title {
            column: TITLE
        }
        body {
            column: DESCRIPTION
        }
        secondaryBody {
            column: STATUS
        }
    )
)

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "99822981e2346f64a9124e7cafee3c5425e3150694b002e8d0df0a5117132ef5",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
