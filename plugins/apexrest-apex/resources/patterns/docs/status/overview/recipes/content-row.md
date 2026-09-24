# Status overview — semantic rows / Огляд статусів у змістових рядках

Accessible state labels and badge semantics agree with each row.

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
        type: themeTemplateComponent/contentRow
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
            template: @/standard
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            display: report
        }
        settings {
            title: &TITLE.
            description: &DESCRIPTION.
            displayBadge: true
        }
        plugin-badge {
            label: State
            value: STATUS
            state: BADGE_STATE
            style: subtle
        }
        column ID (
            layout {
                sequence: 10
            }
            source {
                databaseColumn: ID
                dataType: number
                primaryKey: true
            }
        )
        column TITLE (
            layout {
                sequence: 20
            }
            source {
                databaseColumn: TITLE
                dataType: varchar2
            }
        )
        column DESCRIPTION (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: DESCRIPTION
                dataType: varchar2
            }
        )
        column STATUS (
            layout {
                sequence: 40
            }
            source {
                databaseColumn: STATUS
                dataType: varchar2
            }
        )
        column BADGE_STATE (
            layout {
                sequence: 50
            }
            source {
                databaseColumn: BADGE_STATE
                dataType: varchar2
            }
        )
    )
)

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "667496403516e5dcd191c0961002fe75a935c2bd43783358a539a6cace8a7211",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
