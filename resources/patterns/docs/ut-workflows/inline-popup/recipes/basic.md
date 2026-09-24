# Inline popup open and close — original example / Відкриття та закриття вбудованого спливного вікна

Open and dismiss an inline popup from explicit page controls while retaining the surrounding page context.

Status: ready.

Source: universal-theme-reference; pages 1915.

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
- Replace legacy javascript: opener URLs with the declared native openRegion action; never copy source application JavaScript.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Inline popup workspace
    alias: HOME
    title: Inline popup workspace
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region example (
        name: Local reference
        type: staticContent
        source {
            htmlCode: <p>Inspect this local reference and close the panel to return to the page.</p>
        }
        layout {
            sequence: 10
            slot: dialogsDrawersAndPopups
        }
        advanced {
            htmlDomId: workflow_inline_popup
        }
        appearance {
            template: @/inline-popup
            templateOptions: #DEFAULT#
        }
    )

    region controls (
        name: Reference controls
        type: staticContent
        layout {
            sequence: 20
            slot: body
        }
        appearance {
            template: @/buttons-container
            templateOptions: #DEFAULT#
        }
    )
    button open (
        buttonName: OPEN
        label: Open
        layout {
            sequence: 10
            region: @controls
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
    dynamicAction open-inline (
        name: Open inline region
        execution {
            sequence: 10
        }
        when {
            event: click
            selectionType: button
            button: @open
        }
        action open-region (
            action: openRegion
            affectedElements {
                selectionType: region
                region: @example
            }
            execution {
                sequence: 10
                fireOnInit: false
            }
        )
    )
    button close (
        buttonName: CLOSE
        label: Close
        layout {
            sequence: 10
            region: @example
            slot: create
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: definedByDynamicAction
        }
    )
    dynamicAction close-inline (
        name: Close inline region
        execution {
            sequence: 20
        }
        when {
            event: click
            selectionType: button
            button: @close
        }
        action close-region (
            action: closeRegion
            affectedElements {
                selectionType: region
                region: @example
            }
            execution {
                sequence: 10
                fireOnInit: false
            }
        )
    )

    region more-detail (
        name: Additional detail
        type: staticContent
        source {
            htmlCode: <p>Supporting details can be expanded independently inside the overlay.</p>
        }
        layout {
            sequence: 10
            parentRegion: @example
            slot: regionBody
        }
        appearance {
            template: @/collapsible
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
    "sourceSha256": "f7deb8b1ef7c51b15bccc03d14743e17a7eb8944df4981b4f4c6ab3b5fd63cd2",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
