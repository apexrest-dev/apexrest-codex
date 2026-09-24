# Searchable icon browser with preview / Пошук іконок з попереднім переглядом

Search a fixed icon dictionary, navigate to a selected icon and preview its allowed class name.

Status: ready.

Source: universal-theme-reference; pages 4000.

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [
    "P1_QUERY",
    "P1_ICON"
  ],
  "submittedItems": [
    "P1_QUERY",
    "P1_ICON"
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
    name: Searchable icon browser with preview
    alias: HOME
    title: Searchable icon browser with preview
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
    pageItem P1_QUERY (
        type: textField
        label {
            label: Search icons
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
    )
    pageItem P1_ICON (
        type: hidden
        layout {
            sequence: 20
            region: @controls
            slot: regionBody
        }

    )
    region icons (
        name: Icons
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
            pageItemsToSubmit: P1_QUERY
            sqlQuery:
                ```sql
                with icons (ICON,LABEL) as (select 'fa-home','Home' from dual union all select 'fa-user','Person' from dual union all select 'fa-check','Complete' from dual)
                select LABEL,ICON,apex_page.get_url(p_page=>1,p_items=>'P1_ICON',p_values=>ICON) TARGET_URL from icons where :P1_QUERY is null or instr(upper(LABEL),upper(:P1_QUERY)) > 0 order by LABEL
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
            columnFormatting {
                htmlExpression: <a href="#TARGET_URL!ATTR#"><span class="fa #ICON!ATTR#" aria-hidden="true"></span> #LABEL!HTML#</a>
            }
        )
        column ICON (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: ICON
            }
            layout {
                sequence: 20
            }
        )
        column TARGET_URL (
            reportColumnQueryId: 3
            derivedColumn: N
            type: hidden
            layout {
                sequence: 30
            }
        )
    )
    region preview (
        name: Selected icon
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
            pageItemsToSubmit: P1_ICON
            sqlQuery:
                ```sql
                with icons (ICON,LABEL) as (select 'fa-home','Home' from dual union all select 'fa-user','Person' from dual union all select 'fa-check','Complete' from dual)
                select LABEL,ICON from icons where ICON=:P1_ICON
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
        column ICON (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: ICON
            }
            layout {
                sequence: 20
            }
            columnFormatting {
                htmlExpression: <span class="fa #ICON!ATTR#" aria-hidden="true"></span> #ICON!HTML#
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
            items: P1_QUERY
        }
        action refresh-icons (
            action: refresh
            affectedElements {
                selectionType: region
                region: @icons
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
    "sourceSha256": "d2b2fdd8cb63b8edc60d0888563c65c240eed58d45aadd576483b50cd02451d6",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
