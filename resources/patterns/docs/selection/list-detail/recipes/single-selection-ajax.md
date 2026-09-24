# Single selection with dependent AJAX details / Одиничний вибір у списку з оновленням залежних деталей через AJAX

Native Content Row selection updates a client-owned item and refreshes the always-present detail region.

Status: ready.

Source: ux-pattern-catalog; pages 330.

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "ID": "number selected key",
    "TITLE": "varchar2",
    "STATUS": "varchar2"
  },
  "bindings": [
    "P1_SELECTED_ID"
  ],
  "submittedItems": [
    "P1_SELECTED_ID"
  ],
  "writeContract": "Read-only."
}
```

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.
- Selection is a UI state, not authorization. This bounded variant has no filter or automatic first-row selection.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Select a record
    alias: HOME
    title: Select a record
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region selection (
        name: Choose a record
        type: themeTemplateComponent/contentRow
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select ID,TITLE,STATUS DESCRIPTION from (select 1 ID, 'North review' TITLE, 'Open' STATUS from dual union all select 2, 'South review', 'Closed' from dual)
                ```
        }
        layout {
            sequence: 10
            slot: body
            columnSpan: 4
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
        }
        rowSelection {
            type: singleSelection
            currentSelectionPageItem: P1_SELECTED_ID
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
    )
    region details (
        name: Selected record
        type: classicReport
        source {
            location: localDatabase
            type: sqlQuery
            pageItemsToSubmit: P1_SELECTED_ID
            sqlQuery:
                ```sql
                select ID,TITLE,STATUS from (select 1 ID, 'North review' TITLE, 'Open' STATUS from dual union all select 2, 'South review', 'Closed' from dual) where ID=:P1_SELECTED_ID
                ```
        }
        layout {
            sequence: 20
            slot: body
            startNewRow: false
            columnSpan: 8
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
            whenNoDataFound: Choose a record to see its details.
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
    pageItem P1_SELECTED_ID (
        type: hidden
        layout {
            sequence: 10
            region: @selection
            slot: regionBody
        }
        security {
            sessionStateProtection: unrestricted
        }
    )
    dynamicAction refresh-detail (
        name: Refresh dependent results
        execution {
            sequence: 20
        }
        when {
            event: change
            selectionType: items
            items: P1_SELECTED_ID
        }
        action refresh (
            action: refresh
            affectedElements {
                selectionType: region
                region: @details
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
    "sourceSha256": "b70ff7441ce2d26d3bea2cbdd3fff93d3719babbbc946b54301485c73b65ba96",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
