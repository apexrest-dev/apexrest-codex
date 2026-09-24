# Paginated cards with record detail / Картки з пагінацією та деталями запису

Stable card keys, page pagination and a real read-only detail link form a reusable browse/detail composition.

Status: ready.

Source: universal-theme-reference; pages 3110.

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_SELECTED_ID"
  ],
  "submittedItems": [
    "P1_SELECTED_ID"
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
    name: Paginated cards with record detail
    alias: HOME
    title: Paginated cards with record detail
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
    pageItem P1_SELECTED_ID (
        type: hidden
        layout {
            sequence: 10
            region: @controls
            slot: regionBody
        }

    )
    region cards (
        name: Records
        type: cards
        layout {
            sequence: 20
            slot: body
        }
        appearance {
            template: @/cards-container
            templateOptions: #DEFAULT#
        }
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                with records (ID,TITLE,STATUS) as (select 1,'First record','Open' from dual union all select 2,'Second record','Closed' from dual union all select 3,'Third record','Open' from dual)
                select ID,TITLE,STATUS,apex_page.get_url(p_page=>1,p_items=>'P1_SELECTED_ID',p_values=>to_char(ID)) TARGET_URL from records order by ID
                ```
        }
        card {
            primaryKeyColumn1: ID
        }
        title {
            column: TITLE
        }
        body {
            column: STATUS
        }
        pagination {
            type: page
            cardsPerPage: 2
        }
        action open-record (
            label: Details
            layout {
                sequence: 10
            }
            behavior {
                type: redirectUrl
                targetUrl: &TARGET_URL.
            }
        )
    )
    region detail (
        name: Record detail
        type: classicReport
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
            pageItemsToSubmit: P1_SELECTED_ID
            sqlQuery:
                ```sql
                with records (ID,TITLE,STATUS) as (select 1,'First record','Open' from dual union all select 2,'Second record','Closed' from dual union all select 3,'Third record','Open' from dual)
                select ID,TITLE,STATUS from records where to_char(ID)=:P1_SELECTED_ID
                ```
        }
        componentAppearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        column ID (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: ID
            }
            layout {
                sequence: 10
            }
        )
        column TITLE (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: TITLE
            }
            layout {
                sequence: 20
            }
        )
        column STATUS (
            reportColumnQueryId: 3
            derivedColumn: N
            heading {
                heading: STATUS
            }
            layout {
                sequence: 30
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
    "sourceSha256": "94c8b814facacc9c66686f8db78569effa5bcd9ec20305b7d5cf5c5177d5eec6",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
