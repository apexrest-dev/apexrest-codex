# Workspace with left supporting columns / Робоча область із лівою допоміжною колонкою

Original read-only content assigned to native left column slots.

Status: ready.

Source: universal-theme-reference; pages 1103, 1104, 1105, 1106, 1109, 1110.

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
    name: Service workspace
    alias: HOME
    title: Service workspace
    appearance {
        pageTemplate: @/left-side-column
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region overview (
        name: Current work
        type: staticContent
        source {
            htmlCode: <p>The workspace contains twenty open service requests.</p>
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region summary (
        name: Delivery summary
        type: staticContent
        source {
            htmlCode: <p>Four requests are due today.</p>
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
    region context (
        name: Workspace context
        type: staticContent
        source {
            htmlCode: <p>Operations workspace. Current reporting week.</p>
        }
        layout {
            sequence: 30
            slot: leftColumn
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
    "sourceSha256": "ced9d8896d3be0ee2d5005a089d5bb060f70da2850e2a43125cfd22d48afc47f",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
