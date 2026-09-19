# Documentation graphics

English | [Українська](README.uk.md)

The owner-supplied APEXREST pencil-and-ruler symbol comes from `APEXREST-logo/apex rgb.svg`. The original file remains unchanged in the owner's folder. Display copies contain only the symbol, with the lettering paths removed and no background shape. Original symbol geometry and colors are preserved; a square viewBox trims empty artboard margins and an accessible title identifies the image.

[apexrest-logo.svg](apexrest-logo.svg) is shared by both README languages, the documentation index and every site header. The [plugin logo](../../plugins/apexrest-apex/assets/apexrest-logo.svg) and [composer icon](../../plugins/apexrest-apex/assets/apexrest-icon.svg) are byte-identical to it. Plugin metadata references the transparent SVGs through `interface.composerIcon`, `interface.logo` and `interface.logoDark`. The site and native builds include their respective assets. Logo-specific site styling preserves transparency without a background or border.

The English and Ukrainian SVG diagrams below are maintained directly in this repository; Ukrainian filenames end in `.uk.svg`. They use native vector shapes and system fonts, with no scripts, external resources or embedded HTML. Each graphic has an accessible title and description, and a `viewBox` for proportional resizing.

| Asset                                      | Purpose                                                            | Text reference                               |
| ------------------------------------------ | ------------------------------------------------------------------ | -------------------------------------------- |
| [overview.svg](overview.svg)               | Codex skills, shared MCP/CLI runtime, SQLcl and Oracle APEX        | [Architecture](../architecture.md)           |
| [deployment-flow.svg](deployment-flow.svg) | Delivery steps, coordination defaults and authorization boundaries | [Deployment safety](../deployment-safety.md) |
| [agent-workflow.svg](agent-workflow.svg) | Fixed agent roles, mandatory reviews, repair loop and completion gate | [Complete agent workflow](../agent-workflow.md) |

Use meaningful alternative text when embedding these images in Markdown. Keep the linked text documentation available so the graphics are never the only source of operational instructions.

[ords-codex-cloud.png](ords-codex-cloud.png) is the owner-requested, AI-generated APEXREST infographic prepared for the ORDS/Cloud announcement on 19 September 2026. Both README languages use the same English graphic with localized alternative text and a complete text explanation. It illustrates CLI connectivity and a proposed Cloud agent-team workflow; it is not a product screenshot or evidence of Cloud execution. Its example account and URL are placeholders.

The four `panel-*.jpg` files are unretouched 872 × 683 viewport captures from the actual installed panel in the Codex in-app browser on 17 September 2026. They show agent identities, manager reviews and QA, SQLcl/team settings, and operation state for an isolated local coding fixture. Captures use scrolling without changing the recorded results; no local capability URL or credentials are included. See the [capture manifest](../evidence/agent-workflow-documentation.json) for hashes and evidence limits.

Pokémon artwork visible inside the screenshots comes from the locally bundled [PokeAPI sprite sources](../../packages/panel/assets/sources.json). The [upstream notice](../../packages/panel/assets/LICENCE.txt) applies to these images; the repository code license does not relicense the Pokémon artwork.
