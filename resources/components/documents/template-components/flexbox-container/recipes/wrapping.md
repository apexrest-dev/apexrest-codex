# Flexbox Container wrapping

Flexbox Container wrapping with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 3008. Component: component:template-components/flexbox-container.

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
        name: Flexbox Container
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
    region first-child (
        name: First Child
        type: staticContent
        source {
            htmlCode: <p>Local component example.</p>
        }
        layout {
            sequence: 10
            parentRegion: @example
            slot: plugin-body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region second-child (
        name: Second Child
        type: staticContent
        source {
            htmlCode: <p>Local component example.</p>
        }
        layout {
            sequence: 20
            parentRegion: @example
            slot: plugin-body
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
    "sourceSha256": "986890aea4745560d6c6f15f0f3f2adfd3eb1be2121fa0a8a0c0861b72a23a2b",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
