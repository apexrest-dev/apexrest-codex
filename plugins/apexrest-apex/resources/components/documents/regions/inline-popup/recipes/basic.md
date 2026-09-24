# Inline Popup

Inline Popup with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 1915. Component: component:regions/inline-popup.

## Data contract

```json
{
  "source": "static",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Adaptation

- Choose a free page number and rename all P1_ items consistently.
- Rename region, button and DOM identifiers before merging into an existing page.
- Preserve the target application authentication and authorization.
- Replace synthetic projections with authorized project SQL; retain projected column names and types.
- Preserve the matched opener/closer button references, native openRegion/closeRegion dynamic actions and stable example_inline DOM ID.

Apply the files below as an overlay to component:scaffold for offline validation. In an existing project, adapt and merge the component into its existing page and shared objects. The example is not an import authorization.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Component Example
    alias: HOME
    title: Component Example
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region example (
        name: Example
        type: staticContent
        source {
            htmlCode: <p>Local component example.</p>
        }
        layout {
            sequence: 10
            slot: body
        }
        advanced {
            htmlDomId: example_inline
        }
        appearance {
            template: @/inline-popup
            templateOptions: #DEFAULT#
        }
    )

    region controls (
        name: Open component
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

)

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "2379b8d453f6470ec96b897b790d3c9efe956c2261fa5d2d5cfd2c718213c3e2",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
