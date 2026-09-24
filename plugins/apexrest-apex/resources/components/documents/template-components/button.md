# Button

Aliases: Button; кнопка шаблонного компонента метадані кнопки непідтримане розміщення; Internal theme Button helper

Describe the UT Button template-component metadata; this source snapshot declares no supported placement.

Source pages: see recipe provenance. Family: template-components.

## Compatibility

```json
{
  "apexVersion": "26.1",
  "themeVersion": "26.1",
  "mmdVersion": "26.1.0+3102"
}
```

## Recipes

- component:template-components/button/recipes/standalone: unresolved — Live UT metadata declares no supported component host for THEME$BUTTON (supportedComponentTypes is empty). It is an internal rendering helper, not a standalone region/item recipe. Use the compiler-checked native text/icon/text-with-icon button recipes or the containing component action contract.

## Parameters and adaptation

Read component:template-components/button/parameters. Reuse existing project components first. Adapt page/item names, DOM IDs, SQL projections, keys, shared references and submitted items together. Preserve the project authentication and authorization. Compile the complete adapted application.

Source observations, offline compilation, SQL execution, import and browser evidence are separate. A source example never authorizes deployment or makes an untested behavior pass.
