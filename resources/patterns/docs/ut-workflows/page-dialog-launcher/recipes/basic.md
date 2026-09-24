# Launch and close a page dialog — original example / Відкриття та закриття діалогової сторінки

Launch an included dialog page from a parent page, inspect its content and return by a native close action.

Status: ready.

Source: universal-theme-reference; pages 1910, 1912, 1913, 1914.

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
    name: Open page dialog
    alias: HOME
    title: Open page dialog
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region controls (
        name: Reference
        type: staticContent
        source {
            htmlCode: <p>Open the reference in a separate dialog page.</p>
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
    button open (
        buttonName: OPEN
        label: Open reference
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
            action: redirectThisApp
            target: {
                page: 2
            }
        }
    )
)

```

## pages/p00002-reference.apx

```apexlang
page 2 (
    name: Reference dialog
    alias: REFERENCE
    title: Reference dialog
    appearance {
        pageMode: modalDialog
        dialogTemplate: @/modal-dialog
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region details (
        name: Reference details
        type: staticContent
        source {
            htmlCode: <p>This included destination displays local reference information.</p>
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
    region more-detail (
        name: Additional detail
        type: staticContent
        source {
            htmlCode: <p>Expand this section to review supporting information.</p>
        }
        layout {
            sequence: 20
            slot: contentBody
        }
        appearance {
            template: @/collapsible
            templateOptions: #DEFAULT#
        }
    )
    region buttons (
        name: Actions
        type: staticContent
        layout {
            sequence: 30
            slot: dialogFooter
        }
        appearance {
            template: @/buttons-container
            templateOptions: #DEFAULT#
        }
    )
    button close (
        buttonName: CLOSE
        label: Close
        layout {
            sequence: 10
            region: @buttons
            slot: close
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: definedByDynamicAction
        }
    )
    dynamicAction dismiss-dialog (
        name: Close the dialog
        execution {
            sequence: 10
        }
        when {
            event: click
            selectionType: button
            button: @close
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
    "sourceSha256": "9eda7ecd3691eb33f8d3c3ff55e5a481ee03d423a0accabac6216b59939db170",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
