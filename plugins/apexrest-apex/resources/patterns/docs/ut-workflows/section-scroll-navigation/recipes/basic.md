# Scroll navigation across page sections — original example / Навігація прокручуванням між секціями сторінки

Bind one Region Display Selector to explicitly eligible sections and scroll between them while keeping all sections on the page.

Status: ready.

Source: universal-theme-reference; pages 1923.

## Data contract

```json
{
  "source": "Original static instructional content; no persistent writes or external resources.",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Adaptation

- Use free page numbers; rename page items, static IDs, region/action identifiers and all references together.
- Merge only the selected composition into the destination application; preserve authentication, authorization and existing settings.
- Keep source SQL projections, type mappings and all local links closed after adaptation.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Section navigation
    alias: HOME
    title: Section navigation
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region selector (
        name: Sections
        type: regionDisplaySelector
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#
        }
        advanced {
            htmlDomId: workflow_selector
        }
        settings {
            mode: scrollWindow
            rememberSelection: false
        }
    )
    region first (
        name: Overview
        type: staticContent
        source {
            htmlCode: <p>Review this overview before moving to the checklist.</p>
        }
        layout {
            sequence: 20
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        advanced {
            htmlDomId: workflow_overview
            regionDisplaySelector: true
        }
    )
    region second (
        name: Checklist
        type: staticContent
        source {
            htmlCode: <ul><li>Check the selected record.</li><li>Choose the next task.</li></ul>
        }
        layout {
            sequence: 30
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        advanced {
            htmlDomId: workflow_checklist
            regionDisplaySelector: true
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
    "sourceSha256": "4c5122ef2e165c93b88eea06ee961d4bb6023f50893e15ddf9b0629872249b20",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
