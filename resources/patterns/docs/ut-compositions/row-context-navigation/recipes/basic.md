# Row context menu with local navigation / Контекстне меню рядка з локальними переходами

A content-row primary link and dropdown menu carry the same record identity into distinct read-only detail views.

Status: ready.

Source: universal-theme-reference; pages 3004.

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_SELECTED_ID",
    "P1_VIEW"
  ],
  "submittedItems": [
    "P1_SELECTED_ID",
    "P1_VIEW"
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
    name: Row context menu with local navigation
    alias: HOME
    title: Row context menu with local navigation
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
    pageItem P1_VIEW (
        type: hidden
        layout {
            sequence: 20
            region: @controls
            slot: regionBody
        }

    )
    region records (
        name: Records
        type: themeTemplateComponent/contentRow
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
            sqlQuery:
                ```sql
                with records (ID,TITLE,STATUS) as (select 1,'First record','Open' from dual union all select 2,'Second record','Closed' from dual union all select 3,'Third record','Open' from dual)
                select ID,TITLE,STATUS,apex_page.get_url(p_page=>1,p_items=>'P1_SELECTED_ID,P1_VIEW',p_values=>to_char(ID)||',SUMMARY') SUMMARY_URL,apex_page.get_url(p_page=>1,p_items=>'P1_SELECTED_ID,P1_VIEW',p_values=>to_char(ID)||',ACTIVITY') ACTIVITY_URL from records order by ID
                ```
        }
        componentAppearance {
            display: report
        }
        settings {
            title: &TITLE.
            miscellaneous: &STATUS.
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
        column STATUS (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: STATUS
                dataType: varchar2
            }
        )
        column SUMMARY_URL (
            layout {
                sequence: 40
            }
            source {
                databaseColumn: SUMMARY_URL
                dataType: varchar2
            }
        )
        column ACTIVITY_URL (
            layout {
                sequence: 50
            }
            source {
                databaseColumn: ACTIVITY_URL
                dataType: varchar2
            }
        )
        action summary (
            position: primaryActions
            template: button
            label: Summary
            layout {
                sequence: 10
            }
            behavior {
                type: redirectUrl
                targetUrl: &SUMMARY_URL.
            }
        )
        action menu (
            position: primaryActions
            template: menu
            label: More
            layout {
                sequence: 20
            }
            menu activity (
                label: Activity
                layout {
                    sequence: 10
                }
                behavior {
                    type: redirectUrl
                    targetUrl: &ACTIVITY_URL.
                }
            )
        )
    )
    region details (
        name: Selected view
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
            pageItemsToSubmit: P1_SELECTED_ID,P1_VIEW
            sqlQuery:
                ```sql
                with records (ID,TITLE,STATUS) as (select 1,'First record','Open' from dual union all select 2,'Second record','Closed' from dual union all select 3,'Third record','Open' from dual)
                select ID,TITLE,case when :P1_VIEW='ACTIVITY' then 'Synthetic activity for '||TITLE else STATUS end DETAILS from records where to_char(ID)=:P1_SELECTED_ID
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
        column DETAILS (
            reportColumnQueryId: 3
            derivedColumn: N
            heading {
                heading: DETAILS
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
    "sourceSha256": "56536ed5fa6903c0bd890d7244cf2d9eb8b5603b32b5f4ba3fd612b9e64f0735",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
