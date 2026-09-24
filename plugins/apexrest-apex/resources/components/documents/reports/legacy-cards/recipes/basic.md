# Classic Report Legacy Cards

Classic Report Legacy Cards with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 3100. Component: component:reports/legacy-cards.

## Data contract

```json
{
  "source": "localDatabase/sqlQuery; synthetic DUAL rows",
  "columns": [
    {
      "name": "CARD_TITLE",
      "type": "varchar2"
    },
    {
      "name": "CARD_TEXT",
      "type": "varchar2"
    },
    {
      "name": "CARD_SUBTEXT",
      "type": "varchar2"
    },
    {
      "name": "CARD_ICON",
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
        name: Legacy Report Template
        type: classicReport
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Example card title' CARD_TITLE, 'Example card text' CARD_TEXT, 'Example card subtext' CARD_SUBTEXT, 'fa-info-circle' CARD_ICON from dual
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
            template: @/cards
            templateOptions: #DEFAULT#
        }
        column CARD_TITLE (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: Card Title
            }
            layout {
                sequence: 10
            }
        )
        column CARD_TEXT (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: Card Text
            }
            layout {
                sequence: 20
            }
        )
        column CARD_SUBTEXT (
            reportColumnQueryId: 3
            derivedColumn: N
            heading {
                heading: Card Subtext
            }
            layout {
                sequence: 30
            }
        )
        column CARD_ICON (
            reportColumnQueryId: 4
            derivedColumn: N
            heading {
                heading: Card Icon
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
    "sourceSha256": "1af14f828f05defd78ca1500482c1639b5120af1d15f051f9e4c02df12ae962d",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
