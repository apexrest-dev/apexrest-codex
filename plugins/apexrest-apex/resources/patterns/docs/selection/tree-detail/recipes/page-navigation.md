# Tree and detail selection — page-navigation / Вибір вузла дерева з переходом до сторінки деталей

Tree and detail selection: Native tree selection; Selected key; Empty-selection state; Selected-record details.

Status: ready.

Source: ux-pattern-catalog; pages 340.

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
    "NODE_ID": "number",
    "TREE_LEVEL": "number",
    "STATUS": "number tree status",
    "TITLE": "varchar2",
    "TARGET_URL": "checksum-signed URL"
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
    name: Tree and detail selection
    alias: HOME
    title: Tree and detail selection
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#

}
    security {
        pageAccessProtection: argumentsMustHaveChecksum

}
    region selection (
        name: Choose an initiative
        type: tree
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 1 STATUS, 1 TREE_LEVEL, 'Initiatives' TITLE, 'fa-folder' ICON, 0 NODE_ID, cast(null as varchar2(4000)) TARGET_URL from dual union all select 0 STATUS, 2 TREE_LEVEL, TITLE, 'fa-file-o' ICON, ID NODE_ID, apex_page.get_url(p_page => 1, p_items => 'P1_SELECTED_ID', p_values => ID) TARGET_URL from (select 1 ID, 'North initiative' TITLE, 'Open' STATUS from dual union all select 2, 'South initiative', 'Closed' from dual)
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
        settings {
            linkColumn: TARGET_URL
            nodeLabelColumn: TITLE
            nodeValueColumn: NODE_ID
            hierarchy: notComputed
            nodeStatusColumn: STATUS
            hierarchyLevelColumn: TREE_LEVEL
            iconCssClassColumn: ICON
            iconTypeCssClass: fa

  }
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
    "sourceSha256": "10e6c57e5ae172315d9dd45380936d8a431e4dd3a7ef1c17d9d4570ad840bec3",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
