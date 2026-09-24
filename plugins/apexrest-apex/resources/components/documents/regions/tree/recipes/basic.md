# Tree

Tree with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 1901. Component: component:regions/tree.

## Data contract

```json
{
  "source": "localDatabase/sqlQuery; synthetic DUAL rows",
  "columns": [
    {
      "name": "STATUS",
      "type": "number"
    },
    {
      "name": "TREE_LEVEL",
      "type": "number"
    },
    {
      "name": "TITLE",
      "type": "varchar2"
    },
    {
      "name": "ICON",
      "type": "varchar2"
    },
    {
      "name": "NODE_ID",
      "type": "number"
    }
  ],
  "tables": [
    "DUAL"
  ],
  "bindings": [],
  "submittedItems": [],
  "writes": false
}
```

## Adaptation

- Choose a free page number and rename all P1_ items consistently.
- Rename region, button and DOM identifiers before merging into an existing page.
- Preserve the target application authentication and authorization.
- Replace synthetic projections with authorized project SQL; retain projected column names and types.

Apply the files below as an overlay to component:scaffold for offline validation. In an existing project, adapt and merge the component into its existing page and shared objects. The example is not an import authorization.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Component Example
    alias: HOME
    title: Component Example
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region example (
        name: Tree
        type: tree
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 0 STATUS, 1 TREE_LEVEL, 'Example node' TITLE, 'fa-folder' ICON, 1 NODE_ID from dual
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

)

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "fe51462dc7823a2d2cb87f1cd9db733cef963e401ed6334168e46fc7713a046b",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
