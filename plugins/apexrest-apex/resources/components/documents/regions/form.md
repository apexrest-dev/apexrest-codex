# form

Aliases: form; форма реквізити картка запису редагування збереження видалення; Read-only Form; Editable form with explicit table prerequisite

Bind page items to a form source and initialize a record; saving requires a declared table or API contract and processing.

Source pages: 1600. Family: regions.

Source descriptions and exact example links: component:regions/form/source-examples.

## Compatibility

```json
{
  "apexVersion": "26.1",
  "themeVersion": "26.1",
  "mmdVersion": "26.1.0+3102"
}
```

## Recipes

- component:regions/form/recipes/basic: ready
- component:regions/form/recipes/save: ready

## Parameters and adaptation

Read component:regions/form/parameters. Reuse existing project components first. Adapt page/item names, DOM IDs, SQL projections, keys, shared references and submitted items together. Preserve the project authentication and authorization. Compile the complete adapted application.

Source observations, offline compilation, SQL execution, import and browser evidence are separate. A source example never authorizes deployment or makes an untested behavior pass.
