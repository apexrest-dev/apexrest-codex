# Interactive report browser — synthetic example / Перегляд інтерактивного звіту із синтетичними даними

Browse a stable read-only record projection using the native Interactive Report search, filters and report controls.

Status: ready.

Source: ux-pattern-catalog; pages 230.

## Data contract

```json
{
  "source": "Four original synthetic rows selected from DUAL; no application tables, views, packages or external resources.",
  "tables": [],
  "columns": [
    {
      "name": "ID",
      "type": "NUMBER",
      "role": "Stable record identity"
    },
    {
      "name": "TITLE",
      "type": "VARCHAR2",
      "role": "Record title and searchable text"
    },
    {
      "name": "DESCRIPTION",
      "type": "VARCHAR2",
      "role": "Record summary and searchable text"
    },
    {
      "name": "CATEGORY",
      "type": "VARCHAR2",
      "role": "Category refinement"
    },
    {
      "name": "STATUS",
      "type": "VARCHAR2",
      "role": "Status refinement"
    }
  ],
  "bindings": [],
  "submittedItems": [],
  "facetItems": [],
  "writeContract": "Read-only. No editing or persistence API is claimed."
}
```

## Adaptation

- Choose a free page number and rename every P1_ item, region reference and dynamic action consistently.
- Replace the synthetic SELECT with an authorized project query; preserve column aliases, types and a stable unique ID.
- Merge the composition into the destination application and preserve its authentication, authorization and page-access policy.
- Verify populated, empty, restored-session and narrow-screen states after importing into an identified test target.
- Keep the report column metadata aligned with SQL aliases and data types; configure report download and saved-report policies for the target application.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Interactive report browser
    alias: HOME
    title: Interactive report browser
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region results (
        name: Browse records
        type: interactiveReport
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 1 ID, 'Archive review' TITLE, 'Review the retention schedule.' DESCRIPTION, 'Operations' CATEGORY, 'Open' STATUS from dual
                union all select 2, 'Catalog refresh', 'Publish the current catalog entries.', 'Documentation', 'Open' from dual
                union all select 3, 'Access audit', 'Check the project access list.', 'Operations', 'Done' from dual
                union all select 4, 'Service notes', 'Record the latest support observations.', 'Documentation', 'Done' from dual
                ```
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/interactive-report
            templateOptions: #DEFAULT#
        }
        messages {
            whenNoDataFound: No matching records. Change or reset the report filters.
        }
        column ID (
            type: plainText
            heading {
                heading: ID
            }
            layout {
                sequence: 10
            }
            source {
                dataType: NUMBER
            }
        )
        column TITLE (
            type: plainText
            heading {
                heading: Title
            }
            layout {
                sequence: 20
            }
            source {
                dataType: STRING
            }
        )
        column DESCRIPTION (
            type: plainText
            heading {
                heading: Description
            }
            layout {
                sequence: 30
            }
            source {
                dataType: STRING
            }
        )
        column CATEGORY (
            type: plainText
            heading {
                heading: Category
            }
            layout {
                sequence: 40
            }
            source {
                dataType: STRING
            }
        )
        column STATUS (
            type: plainText
            heading {
                heading: Status
            }
            layout {
                sequence: 50
            }
            source {
                dataType: STRING
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
    "sourceSha256": "b875dafdf511f85422f23f0a642ca018d3142119ac13c9f939c56a5c02148e51",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
