# Searchable tree with AJAX details / Дерево з пошуком і оновленням деталей через AJAX

The native tree drives one selected key and dependent details; changing search clears the selected key before refreshing the tree.

Status: ready.

Source: ux-pattern-catalog; pages 340.

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "NODE_ID": "number leaf key or zero grouping node",
    "TREE_LEVEL": "number ordered depth",
    "STATUS": "number native tree state",
    "TITLE": "varchar2"
  },
  "bindings": [
    "P1_QUERY",
    "P1_SELECTED_ID"
  ],
  "submittedItems": [
    "P1_QUERY",
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
- This original variant deliberately clears selection on search changes instead of copying the source controller. Treat every client-selected key as untrusted input and reapply row authorization.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Search and select a record
    alias: HOME
    title: Search and select a record
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region search (
        name: Find a record
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
    pageItem P1_QUERY (
        type: textField
        label {
            label: Search records
        }
        layout {
            sequence: 10
            region: @search
            slot: regionBody
        }
        appearance {
            template: @/optional-floating
            templateOptions: #DEFAULT#
        }
    )
    region selection (
        name: Review hierarchy
        type: tree
        source {
            location: localDatabase
            type: sqlQuery
            pageItemsToSubmit: P1_QUERY
            sqlQuery:
                ```sql
                select STATUS,TREE_LEVEL,TITLE,ICON,NODE_ID from (select 1 STATUS,1 TREE_LEVEL,'Reviews' TITLE,'fa-folder' ICON,0 NODE_ID from dual union all select 0,2,TITLE,'fa-file-o',ID from (select 1 ID, 'North review' TITLE, 'Open' STATUS from dual union all select 2, 'South review', 'Closed' from dual) where :P1_QUERY is null or instr(lower(TITLE),lower(trim(:P1_QUERY)))>0) order by TREE_LEVEL,NODE_ID
                ```
        }
        layout {
            sequence: 20
            slot: body
            columnSpan: 4
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        advanced {
            htmlDomId: ux_example_tree
        }
        settings {
            nodeLabelColumn: TITLE
            nodeValueColumn: NODE_ID
            hierarchy: notComputed
            nodeStatusColumn: STATUS
            hierarchyLevelColumn: TREE_LEVEL
            iconCssClassColumn: ICON
            iconTypeCssClass: fa
        }
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
    dynamicAction select-node (
        name: Set selected record
        execution {
            sequence: 10
        }
        when {
            event: region/tree/treeviewselectionchange
            selectionType: region
            region: @selection
        }
        action set-key (
            action: executeJsCode
            settings {
                jsCode:
                    ```javascript-browser
                    const nodes = apex.region("ux_example_tree").call("getSelectedNodes");
                    const key = nodes.length ? Number(nodes[0].id) : 0;
                    apex.item("P1_SELECTED_ID").setValue(Number.isInteger(key) && key > 0 ? String(key) : "");
                    ```
            }
            execution {
                sequence: 10
                fireOnInit: false
            }
        )
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
    dynamicAction filter-tree (
        name: Refresh dependent results
        execution {
            sequence: 30
        }
        when {
            event: change
            selectionType: items
            items: P1_QUERY
        }
        action clear-key (
            action: executeJsCode
            settings {
                jsCode: apex.item("P1_SELECTED_ID").setValue("");
            }
            execution {
                sequence: 5
                fireOnInit: false
            }
        )
        action refresh (
            action: refresh
            affectedElements {
                selectionType: region
                region: @selection
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
    "sourceSha256": "de431b6ec787a2a3021ddeac41172c89b3fe93f838694fa3f1752864a6b48f01",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
