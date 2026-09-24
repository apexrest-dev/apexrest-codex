# Combobox form item

Combobox form item with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 1601. Component: component:items/combobox.

## Data contract

```json
{
  "source": "session state or inline static LOV",
  "tables": [],
  "bindings": [],
  "submittedItems": [],
  "persistence": "No automatic DML. Bind to a project form/API before saving business data."
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
    region form (
        name: Form
        type: staticContent
        source {
            htmlCode: <p>Local component example.</p>
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
    pageItem P1_VALUE (
        type: combobox
        label {
            label: Combobox
            alignment: left
        }
        settings {
            infiniteScroll: false
        }
        lov {
            type: staticValues
            staticValues: STATIC:Alpha;A,Beta;B
        }
        layout {
            sequence: 10
            region: @form
            slot: regionBody
            alignment: left
            columnSpan: 6
        }
        appearance {
            template: @/optional
            templateOptions: #DEFAULT#
            width: 30
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
    "sourceSha256": "9dfb16bc1c5eaa9e81720f5c5e768b03b3c9407af73d767368b4ffb147ee81b1",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
