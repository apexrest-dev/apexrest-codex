# Nested region tabs — original example / Вкладені вкладки регіонів

Place independently defined child regions in a Tabs Container so users switch sections without leaving the page.

Status: ready.

Source: universal-theme-reference; pages 1907.

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
    name: Tabbed reference workspace
    alias: HOME
    title: Tabbed reference workspace
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region example (
        name: Reference sections
        type: staticContent
        source {
            htmlCode: <p>Choose a section to inspect its content.</p>
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/tabs-container
            templateOptions: #DEFAULT#
        }
    )
    region first-panel (
        name: Overview
        type: staticContent
        source {
            htmlCode: <p>The overview describes the record and its purpose.</p>
        }
        layout {
            sequence: 10
            parentRegion: @example
            slot: regionBody
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region second-panel (
        name: Checklist
        type: staticContent
        source {
            htmlCode: <ul><li>Review the scope.</li><li>Confirm the next action.</li></ul>
        }
        layout {
            sequence: 20
            parentRegion: @example
            slot: regionBody
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
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
    "sourceSha256": "9f373bad1cee8cfff6963c4cc90ce2c9e79cc8f63ea338fcf3e29fa1b65d3ea0",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
