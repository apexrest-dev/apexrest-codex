# Internal theme Button helper

Internal theme Button helper

Status: unresolved. Live UT metadata declares no supported component host for THEME$BUTTON (supportedComponentTypes is empty). It is an internal rendering helper, not a standalone region/item recipe. Use the compiler-checked native text/icon/text-with-icon button recipes or the containing component action contract.

Source pages: 1500. Component: component:template-components/button.

## Data contract

```json
{
  "source": "project-specific"
}
```

## Adaptation



Apply the files below as an overlay to component:scaffold for offline validation. In an existing project, adapt and merge the component into its existing page and shared objects. The example is not an import authorization.

## Verification

```json
{
  "compiler": {
    "status": "not-run"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
