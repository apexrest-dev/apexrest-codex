# Region Image

Region Image with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 1210. Component: component:regions/image.

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
        name: Example
        type: staticContent
        layout {
            sequence: 10
            slot: body
        }
        image {
            fileUrl: #APP_FILES#catalog/example.svg
        }
        appearance {
            template: @/image
            templateOptions: #DEFAULT#
        }
    )

)

```

## shared-components/static-files.apx

```apexlang
file "catalog/example.svg" (
    mimeType: image/svg+xml
    charSet: utf-8
)

```

## shared-components/static-files/catalog/example.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="240" height="80" viewBox="0 0 240 80"><rect width="240" height="80" fill="#315f87"/><text x="16" y="47" fill="white" font-family="sans-serif" font-size="20">Component example</text></svg>

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "34b3545b8b9fd7da455e220838543ade9d9c8849aae49864e11b19f7f8f8d1e8",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
