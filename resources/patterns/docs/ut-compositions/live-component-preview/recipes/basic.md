# Live button configuration preview / Живий перегляд налаштувань кнопки

Input controls refresh an escaped button preview and the corresponding source markup without exposing an active business action.

Status: ready.

Source: universal-theme-reference; pages 6100.

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_LABEL",
    "P1_STYLE"
  ],
  "submittedItems": [
    "P1_LABEL",
    "P1_STYLE"
  ]
}
```

## Adaptation

- Rename page, item, region and DOM IDs together, preserving SQL bindings and submitted items.
- Replace synthetic DUAL projections with an authorized data contract; preserve key uniqueness and deterministic ordering.
- Preserve destination authentication and authorization; compile after adaptation.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Live button configuration preview
    alias: HOME
    title: Live button configuration preview
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region controls (
        name: Controls
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
    pageItem P1_LABEL (
        type: textField
        label {
            label: Button label
        }
        layout {
            sequence: 10
            region: @controls
            slot: regionBody
        }
        appearance {
            template: @/optional-floating
            templateOptions: #DEFAULT#
        }
        default {
            type: static
            staticValue: Continue
        }
    )
    pageItem P1_STYLE (
        type: selectList
        label {
            label: Button style
        }
        layout {
            sequence: 20
            region: @controls
            slot: regionBody
        }
        appearance {
            template: @/optional-floating
            templateOptions: #DEFAULT#
        }
        lov {
            type: staticValues
            staticValues: STATIC2:Normal;NORMAL,Hot;HOT
            displayNullValue: false
            displayExtraValues: false
        }
        default {
            type: static
            staticValue: NORMAL
        }
    )
    region preview (
        name: Preview and markup
        type: classicReport
        layout {
            sequence: 20
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        source {
            location: localDatabase
            type: sqlQuery
            pageItemsToSubmit: P1_LABEL,P1_STYLE
            sqlQuery:
                ```sql
                with input as (select substr(nvl(:P1_LABEL,'Continue'),1,80) LABEL,case when :P1_STYLE='HOT' then 't-Button t-Button--hot' else 't-Button' end CSS_CLASS from dual), markup as (select LABEL,'<button type="button" class="'||CSS_CLASS||'" disabled>'||apex_escape.html(LABEL)||'</button>' CODE from input)
                select LABEL,CODE PREVIEW,CODE from markup
                ```
        }
        componentAppearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        column LABEL (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: LABEL
            }
            layout {
                sequence: 10
            }
        )
        column PREVIEW (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: PREVIEW
            }
            layout {
                sequence: 20
            }
            columnFormatting {
                htmlExpression: #PREVIEW!RAW#
            }
        )
        column CODE (
            reportColumnQueryId: 3
            derivedColumn: N
            heading {
                heading: CODE
            }
            layout {
                sequence: 30
            }
        )
    )
    dynamicAction refresh-results (
        name: Refresh preview
        execution {
            sequence: 10
        }
        when {
            event: change
            selectionType: items
            items: P1_LABEL,P1_STYLE
        }
        action refresh-preview (
            action: refresh
            affectedElements {
                selectionType: region
                region: @preview
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
    "sourceSha256": "9649344cbe8dda8b03d09335d53fa067f16dff090a79ab9ff169212a3e4f2443",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
