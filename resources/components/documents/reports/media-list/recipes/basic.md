# Media List Classic Report template

Media List Classic Report template with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 1301. Component: component:reports/media-list.

## Data contract

```json
{
  "source": "localDatabase/sqlQuery; synthetic DUAL rows",
  "columns": [
    {
      "name": "TITLE",
      "type": "varchar2"
    },
    {
      "name": "DESCRIPTION",
      "type": "varchar2"
    },
    {
      "name": "ICON_CLASS",
      "type": "varchar2"
    },
    {
      "name": "LINK",
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
    region results (
        name: Media List Report
        type: classicReport
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Example entry' TITLE, 'Local description' DESCRIPTION, 'fa-info-circle' ICON_CLASS, apex_page.get_url(p_page => 1) LINK from dual
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
            template: @/media-list
            templateOptions: #DEFAULT#
        }
        column TITLE (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: Title
            }
            layout {
                sequence: 10
            }
        )
        column DESCRIPTION (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: Description
            }
            layout {
                sequence: 20
            }
        )
        column ICON_CLASS (
            reportColumnQueryId: 3
            derivedColumn: N
            heading {
                heading: Icon Class
            }
            layout {
                sequence: 30
            }
        )
        column LINK (
            reportColumnQueryId: 4
            derivedColumn: N
            heading {
                heading: Link
            }
            layout {
                sequence: 40
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
    "sourceSha256": "826f23c2b909d452d9b5e921461429c981842ced4bf0591c0cbb4bc1ed9b77d7",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
