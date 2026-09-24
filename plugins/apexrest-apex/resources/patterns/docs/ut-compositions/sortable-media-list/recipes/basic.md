# Sortable media list / Сортування медіасписку

A selector changes the ordered media-list result while retaining a stable tie-break key.

Status: ready.

Source: universal-theme-reference; pages 3005.

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_SORT"
  ],
  "submittedItems": [
    "P1_SORT"
  ]
}
```

## Adaptation

- Rename page, item, region and DOM IDs together, preserving SQL bindings and submitted items.
- Replace synthetic DUAL projections with an authorized data contract; preserve key uniqueness and deterministic ordering.
- Preserve destination authentication and authorization; compile after adaptation.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Sortable media list
    alias: HOME
    title: Sortable media list
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region controls (
        name: Controls
        type: staticContent
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }

    )
    pageItem P1_SORT (
        type: selectList
        label {
            label: Order by
        }
        layout {
            sequence: 10
            region: @controls
            slot: regionBody
        }
        appearance {
            template: @/optional-floating
            templateOptions: #DEFAULT#
        }
        lov {
            type: staticValues
            staticValues: STATIC2:Name;NAME,Status;STATUS
            displayNullValue: false
            displayExtraValues: false
        }
        default {
            type: static
            staticValue: NAME
        }
    )
    region results (
        name: Ordered records
        type: themeTemplateComponent/mediaList
        layout {
            sequence: 20
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        source {
            location: localDatabase
            type: sqlQuery
            pageItemsToSubmit: P1_SORT
            sqlQuery:
                ```sql
                with records (ID,TITLE,DESCRIPTION,STATUS) as (select 1,'Alpha','First project','Open' from dual union all select 2,'Beta','Second project','Closed' from dual union all select 3,'Gamma','Third project','Open' from dual)
                select ID,TITLE,DESCRIPTION,STATUS from records
                order by case when :P1_SORT = 'STATUS' then STATUS end, TITLE, ID
                ```
        }
        componentAppearance {
            display: report
        }
        settings {
            title: TITLE
            description: DESCRIPTION
            displayAvatar: false
            displayBadge: true
        }
        plugin-badge {
            label: Status
            value: STATUS
        }
        column ID (
            layout {
                sequence: 10
            }
            source {
                databaseColumn: ID
                dataType: number
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
    )
    dynamicAction refresh-results (
        name: Refresh preview
        execution {
            sequence: 10
        }
        when {
            event: change
            selectionType: items
            items: P1_SORT
        }
        action refresh-results (
            action: refresh
            affectedElements {
                selectionType: region
                region: @results
            }
            execution {
                sequence: 10
                fireOnInit: false
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
    "sourceSha256": "5d12489915f8132447a29818f2f92fbdb5a66ccc451b7bee2f907f8b9fa533f1",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
