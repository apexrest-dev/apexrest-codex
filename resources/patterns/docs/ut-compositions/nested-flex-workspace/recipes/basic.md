# Nested flexible workspace / Вкладена гнучка робоча область

A row container owns two column containers, each retaining its own content order when the available width changes.

Status: ready.

Source: universal-theme-reference; pages 3008.

## Data contract

```json
{
  "source": "Static, original HTML sections only; no SQL or bindings.",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Adaptation

- Rename page, item, region and DOM IDs together, preserving SQL bindings and submitted items.
- Replace static sections with project-specific regions while preserving parent IDs, plugin-body slots and their independent content order.
- Preserve destination authentication and authorization; compile after adaptation.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Nested flexible workspace
    alias: HOME
    title: Nested flexible workspace
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region workspace (
        name: Workspace
        type: themeTemplateComponent/flexboxContainer
        layout {
            sequence: 10
            slot: body
        }
        componentAppearance {
            display: regionOnly
        }
        settings {
            direction: row
            wrap: wrap
            gap: lg
        }
    )
    region primary (
        name: Main content
        type: themeTemplateComponent/flexboxContainer
        layout {
            sequence: 10
            parentRegion: @workspace
            slot: plugin-body
        }
        componentAppearance {
            display: regionOnly
        }
        settings {
            direction: column
            wrap: wrap
            gap: lg
        }
    )
    region secondary (
        name: Supporting context
        type: themeTemplateComponent/flexboxContainer
        layout {
            sequence: 20
            parentRegion: @workspace
            slot: plugin-body
        }
        componentAppearance {
            display: regionOnly
        }
        settings {
            direction: column
            wrap: wrap
            gap: lg
        }
    )
    region overview (
        name: Overview
        type: staticContent
        layout {
            sequence: 10
            parentRegion: @primary
            slot: plugin-body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        source {
            htmlCode: <p>Record overview.</p>
        }
    )
    region history (
        name: History
        type: staticContent
        layout {
            sequence: 20
            parentRegion: @primary
            slot: plugin-body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        source {
            htmlCode: <p>Chronological activity.</p>
        }
    )
    region status (
        name: Status
        type: staticContent
        layout {
            sequence: 10
            parentRegion: @secondary
            slot: plugin-body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        source {
            htmlCode: <p>Open, awaiting review.</p>
        }
    )
    region help (
        name: Help
        type: staticContent
        layout {
            sequence: 20
            parentRegion: @secondary
            slot: plugin-body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        source {
            htmlCode: <p>Contextual guidance.</p>
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
    "sourceSha256": "da72f32c182b044351772c580210e005c3358dd389e0fcd6adc6a8a7c60d8baa",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
