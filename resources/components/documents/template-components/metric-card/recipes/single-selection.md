# Metric Card singleSelection

Metric Card singleSelection with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 3007. Component: component:template-components/metric-card.

## Data contract

```json
{
  "source": "localDatabase/sqlQuery; synthetic DUAL rows",
  "columns": [
    {
      "name": "ID",
      "type": "number"
    },
    {
      "name": "CATEGORY",
      "type": "varchar2"
    },
    {
      "name": "TITLE",
      "type": "varchar2"
    },
    {
      "name": "METRIC",
      "type": "number"
    },
    {
      "name": "META",
      "type": "varchar2"
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
        name: Metric Card
        type: themeTemplateComponent/metricCard
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 1 ID, 'Operations' CATEGORY, 'Open tasks' TITLE, 12 METRIC, 'Synthetic example' META from dual union all select 2, 'Operations', 'Closed tasks', 8, 'Synthetic example' from dual
                ```
        }
        layout {
            sequence: 10
            slot: body
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
            metric: &METRIC.
            meta: &META.
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
        column METRIC (
            layout {
                sequence: 20
            }
            source {
                databaseColumn: METRIC
                dataType: number
            }
        )
        column META (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: META
                dataType: varchar2
            }
        )
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
        column CATEGORY (
            layout {
                sequence: 20
            }
            source {
                databaseColumn: CATEGORY
                dataType: varchar2
            }
        )
        rowSelection {
            type: singleSelection
            currentSelectionPageItem: P1_SELECTED
        }
    )
    region selection-state (
        name: Selection State
        type: staticContent
        source {
            htmlCode: <p>Local component example.</p>
        }
        layout {
            sequence: 20
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    pageItem P1_SELECTED (
        type: hidden
        layout {
            sequence: 10
            region: @selection-state
            slot: regionBody
        }
        security {
            sessionStateProtection: unrestricted
        }
        comments {
            comments: Client-owned UI selection only. Never use this item as authorization for row reads or writes.
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
    "sourceSha256": "0585c9ac729e3ae07a84fad7c26d441ef1cc2891cbc0b9a9cceb5f3b727b134d",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
