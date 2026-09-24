# Information dialog with close action / Інформаційний діалог із дією закриття

A complete launcher-to-modal-to-close interaction using native dialog behavior.

Status: ready.

Source: universal-theme-reference; pages 1100, 1111.

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
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region intro (
        name: Service guidelines
        type: staticContent
        source {
            htmlCode: <p>Open a short reference without leaving the workspace.</p>
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
    button open-info (
        buttonName: OPEN_INFO
        label: Read guidelines
        layout {
            sequence: 10
            region: @intro
            slot: next
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: redirectThisApp
            target: {
                page: 2
            }
        }
    )
)

```

## pages/p00002-page-2.apx

```apexlang
page 2 (
    name: Response guidelines
    alias: PAGE-2
    title: Response guidelines
    appearance {
        pageMode: modalDialog
        dialogTemplate: @/modal-dialog
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region info (
        name: Response guidelines
        type: staticContent
        source {
            htmlCode: <p>Acknowledge requests promptly, record the responsible team and agree the next review time.</p>
        }
        layout {
            sequence: 10
            slot: contentBody
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    button close-info (
        buttonName: CLOSE_INFO
        label: Close
        layout {
            sequence: 10
            region: @info
            slot: next
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: definedByDynamicAction
        }
    )
    dynamicAction dismiss (
        name: Dismiss information
        execution {
            sequence: 10
        }
        when {
            event: click
            selectionType: button
            button: @close-info
        }
        action close (
            action: cancelDialog
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
    "sourceSha256": "87abdd886b83244ec193d05e440e21be298c4d211b6e8072848e33aa3c10cf17",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
