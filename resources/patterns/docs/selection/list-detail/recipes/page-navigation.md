# List and detail selection — page-navigation / Вибір рядка списку з переходом до сторінки деталей

List and detail selection: Selectable Content Row list; Checksum-protected selected key; Empty-selection state; Selected-record details.

Status: ready.

Source: ux-pattern-catalog; pages 330.

## Data contract

```json
{
  "source": "synthetic local SQL",
  "tables": [],
  "bindings": [
    "P1_SELECTED_ID"
  ],
  "submittedItems": [
    "P1_SELECTED_ID"
  ],
  "columns": {
    "ID": "number primary key",
    "TITLE": "varchar2",
    "STATUS": "varchar2"
  }
}
```

## Adaptation

- Choose unused page numbers and rename all page items, region keys and DOM IDs together.
- Replace synthetic projections with authorized application queries while preserving keys, column types and bindings.
- Preserve destination authentication, authorization, checksums and application configuration.
- Compile the adapted complete application; verify SQL, import and browser behavior separately.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: List and detail selection
    alias: HOME
    title: List and detail selection
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#

}
    security {
        pageAccessProtection: argumentsMustHaveChecksum

}
    region selection (
        name: Choose an initiative
        type: themeTemplateComponent/contentRow
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select ID, TITLE, STATUS DESCRIPTION, apex_page.get_url(p_page => 1, p_items => 'P1_SELECTED_ID', p_values => ID) TARGET_URL from (select 1 ID, 'North initiative' TITLE, 'Open' STATUS from dual union all select 2, 'South initiative', 'Closed' from dual)
                ```

  }
        layout {
            sequence: 10
            slot: body
            columnSpan: 4

  }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#

  }
        componentAppearance {
            display: report

  }
        settings {
            title: &TITLE.
            description: &DESCRIPTION.

  }
        column TITLE (
            layout {
                sequence: 10

      }
            source {
                databaseColumn: TITLE
                dataType: varchar2

      }
        )
        column DESCRIPTION (
            layout {
                sequence: 20

      }
            source {
                databaseColumn: DESCRIPTION
                dataType: varchar2

      }
        )
        column ID (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: ID
                dataType: number
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
        action open-home (
            position: primaryActions
            template: button
            label: Select
            layout {
                sequence: 10

      }
            behavior {
                type: redirectUrl
                targetUrl: &TARGET_URL.

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
            sessionStateProtection: checksumRequiredSessionLevel

  }
    )
    region empty-selection (
        name: Selection
        type: staticContent
        source {
            htmlCode: <p>Select an initiative to view its details.</p>

  }
        layout {
            sequence: 20
            slot: body
            startNewRow: false
            columnSpan: 8

  }
        serverSideCondition {
            type: itemIsNull
            item: P1_SELECTED_ID

  }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#

  }
    )
    region details (
        name: Selected initiative
        type: classicReport
        source {
            location: localDatabase
            type: sqlQuery
            pageItemsToSubmit: P1_SELECTED_ID
            sqlQuery:
                ```sql
                select ID, TITLE, STATUS from (select 1 ID, 'North initiative' TITLE, 'Open' STATUS from dual union all select 2, 'South initiative', 'Closed' from dual) where ID = :P1_SELECTED_ID
                ```

  }
        layout {
            sequence: 30
            slot: body
            startNewRow: false
            columnSpan: 8

  }
        serverSideCondition {
            type: itemIsNotNull
            item: P1_SELECTED_ID
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#

  }
        componentAppearance {
            template: @/value-attribute-pairs-column
            templateOptions: #DEFAULT#

  }
        column ID (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: Id

      }
            layout {
                sequence: 10

      }
        )
        column TITLE (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: Title

      }
            layout {
                sequence: 20

      }
        )
        column STATUS (
            reportColumnQueryId: 3
            derivedColumn: N
            heading {
                heading: Status

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
    "sourceSha256": "55239e9944d6292d2096642225570d561bf968d7e9a2e0f3c92d5a17c7820f0b",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
