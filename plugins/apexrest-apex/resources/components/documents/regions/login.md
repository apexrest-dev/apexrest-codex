# Login

Aliases: Login; регіон входу контейнер форми входу поля автентифікації; Login region wrapper

Arrange sign-in fields and commands within a Login region; the application authentication scheme performs sign-in.

Source pages: 1114, 9999. Family: regions.

## Compatibility

```json
{
  "apexVersion": "26.1",
  "themeVersion": "26.1",
  "mmdVersion": "26.1.0+3102"
}
```

## Recipes

- component:regions/login/recipes/basic: ready

## Parameters and adaptation

Read component:regions/login/parameters. Reuse existing project components first. Adapt page/item names, DOM IDs, SQL projections, keys, shared references and submitted items together. Preserve the project authentication and authorization. Compile the complete adapted application.

Source observations, offline compilation, SQL execution, import and browser evidence are separate. A source example never authorizes deployment or makes an untested behavior pass.
