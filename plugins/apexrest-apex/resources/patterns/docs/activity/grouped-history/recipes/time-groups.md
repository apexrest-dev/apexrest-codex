# Activity history grouped by period / Історія подій із групуванням за періодами

A grouped Content Row report preserves an explicit period and event ordering.

Status: ready.

Source: ux-pattern-catalog; pages 1100, 320.

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "ID": "number event identity",
    "GROUP_LABEL": "varchar2 display group",
    "GROUP_ORDER": "number chronological group order",
    "EVENT_TIME": "timestamp",
    "TITLE": "varchar2 event",
    "DESCRIPTION": "varchar2 context"
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
    name: Grouped activity history
    alias: HOME
    title: Grouped activity history
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region history (
        name: Activity history
        type: themeTemplateComponent/contentRow
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 1 ID, 1 GROUP_ORDER, 'Latest' GROUP_LABEL, timestamp '2026-03-03 09:00:00' EVENT_TIME, 'Review completed' TITLE, 'An example review was recorded.' DESCRIPTION from dual union all select 2, 1, 'Latest', timestamp '2026-03-03 08:30:00', 'Record assigned', 'The example record entered review.' from dual union all select 3, 2, 'Earlier', timestamp '2026-03-02 12:00:00', 'Record created', 'The example record was opened.' from dual
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
            miscellaneous: &EVENT_TIME.
        }
        orderBy {
            type: staticValue
            orderByClause: GROUP_ORDER, EVENT_TIME desc, ID
        }
        plugin-grouping {
            title: &GROUP_LABEL.
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
        column GROUP_ORDER (
            layout {
                sequence: 20
            }
            source {
                databaseColumn: GROUP_ORDER
                dataType: number
            }
        )
        column GROUP_LABEL (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: GROUP_LABEL
                dataType: varchar2
            }
            appearance {
                group: true
            }
        )
        column EVENT_TIME (
            layout {
                sequence: 40
            }
            source {
                databaseColumn: EVENT_TIME
                dataType: timestamp
            }
        )
        column TITLE (
            layout {
                sequence: 50
            }
            source {
                databaseColumn: TITLE
                dataType: varchar2
            }
        )
        column DESCRIPTION (
            layout {
                sequence: 60
            }
            source {
                databaseColumn: DESCRIPTION
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
    "sourceSha256": "94bf57a654df715dc58ac6903a25833ed107662c75618e4b8bf48eb587e0792d",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
