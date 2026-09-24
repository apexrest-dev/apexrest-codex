# Nested responsive workspace / Вкладена адаптивна робоча область

A twelve-column 8/4 desktop layout containing a nested 6/6 row, with explicit small-screen stacking.

Status: ready.

Source: universal-theme-reference; pages 300.

## Data contract

```json
{
  "source": "Original static sample content and local page targets; no application tables.",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Adaptation

- Map sample page numbers, lists, regions and static IDs into the target application.
- Preserve existing authentication, authorization and protected navigation.
- Replace sample content with authorized project data and validate the resulting behavior.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Responsive workspace
    alias: HOME
    title: Responsive workspace
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region primary (
        name: Work summary
        type: staticContent
        source {
            htmlCode: <p>Review the current service workload.</p>
        }
        layout {
            sequence: 10
            slot: body
            columnSpan: 8
            columnCssClasses: col-sm-12
            startNewRow: true
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region secondary (
        name: Context
        type: staticContent
        source {
            htmlCode: <p>Three teams share this workspace.</p>
        }
        layout {
            sequence: 20
            slot: body
            columnSpan: 4
            columnCssClasses: col-sm-12
            startNewRow: false
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region intake (
        name: Intake
        type: staticContent
        source {
            htmlCode: <p>Twelve requests are ready for triage.</p>
        }
        layout {
            sequence: 10
            parentRegion: @primary
            slot: subRegions
            columnSpan: 6
            columnCssClasses: col-sm-12
            startNewRow: true
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region delivery (
        name: Delivery
        type: staticContent
        source {
            htmlCode: <p>Eight requests are being prepared.</p>
        }
        layout {
            sequence: 20
            parentRegion: @primary
            slot: subRegions
            columnSpan: 6
            columnCssClasses: col-sm-12
            startNewRow: false
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
    "sourceSha256": "cfe67d15f2edf0da6faeea6a7d1c380bb732bbb049c15251c93f18d40aa2abaf",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
