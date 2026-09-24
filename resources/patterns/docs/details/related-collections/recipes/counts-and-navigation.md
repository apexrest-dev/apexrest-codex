# Related collections with matching counts / Пов’язані колекції з узгодженими лічильниками та переходами

The displayed collection count and detail list share one synthetic data contract.

Status: ready.

Source: ux-pattern-catalog; pages 1100, 320.

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "COLLECTION_ID": "number collection key",
    "ID": "number child key",
    "TITLE": "varchar2 collection title",
    "ITEM_COUNT": "number actual matching count"
  },
  "bindings": [
    "P2_COLLECTION_ID"
  ],
  "submittedItems": [
    "P2_COLLECTION_ID"
  ],
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
    name: Related collection overview
    alias: HOME
    title: Related collection overview
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region collections (
        name: Related collections
        type: themeTemplateComponent/contentRow
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select COLLECTION_ID ID, case COLLECTION_ID when 10 then 'Checks' else 'Notes' end TITLE, 'Related records' DESCRIPTION, count(*) ITEM_COUNT, apex_page.get_url(p_page => 2, p_items => 'P2_COLLECTION_ID', p_values => COLLECTION_ID) TARGET_URL from (select 1 ID, 10 COLLECTION_ID, 'Check source mapping' TITLE from dual union all select 2, 10, 'Review naming' from dual union all select 3, 20, 'Confirm acceptance note' from dual) group by COLLECTION_ID
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
            label: Records
            value: ITEM_COUNT
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
        column TARGET_URL (
            layout {
                sequence: 40
            }
            source {
                databaseColumn: TARGET_URL
                dataType: varchar2
            }
        )
        column ITEM_COUNT (
            layout {
                sequence: 50
            }
            source {
                databaseColumn: ITEM_COUNT
                dataType: number
            }
        )
        action open-record (
            position: titleLink
            layout {
                sequence: 10
            }
            behavior {
                type: redirectUrl
                targetUrl: &TARGET_URL.
            }
        )
    )
)

```

## pages/p00002-destination.apx

```apexlang
page 2 (
    name: Collection records
    alias: DESTINATION
    title: Collection records
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region children (
        name: Selected collection
        type: classicReport
        source {
            location: localDatabase
            type: sqlQuery
            pageItemsToSubmit: P2_COLLECTION_ID
            sqlQuery:
                ```sql
                select ID,TITLE from (select 1 ID, 10 COLLECTION_ID, 'Check source mapping' TITLE from dual union all select 2, 10, 'Review naming' from dual union all select 3, 20, 'Confirm acceptance note' from dual) where COLLECTION_ID = :P2_COLLECTION_ID
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
            template: @/standard
            templateOptions: #DEFAULT#
        }
        messages {
            whenNoDataFound: No records in this collection.
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
    )
    pageItem P2_COLLECTION_ID (
        type: hidden
        layout {
            sequence: 10
            region: @children
            slot: regionBody
        }
        security {
            sessionStateProtection: checksumRequiredSessionLevel
        }
    )
    button back (
        buttonName: BACK
        label: Back
        layout {
            sequence: 10
            region: @children
            slot: previous
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: redirectThisApp
            target: {
                page: 1
            }
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
    "sourceSha256": "5b279fd37a74430c5c8e678b35bc7ff38e705038f8d50470ed33b23d69c330b2",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
