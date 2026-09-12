# Documentation graphics

English | [Українська](README.uk.md)

The owner-supplied APEXREST pencil-and-ruler artwork comes from `APEXREST-logo/apex rgb.svg` and `APEXREST-logo/apex rgb line.svg`. The source files remain unchanged in the owner's folder. Display copies trim empty artboard margins, add accessible titles and a white background for contrast; the original paths, lettering and colors are preserved.

[apexrest-logo.svg](apexrest-logo.svg) is used in both README languages, the documentation index and the plugin details. [apexrest-wordmark.svg](apexrest-wordmark.svg) is the horizontal site-header variant. The [plugin logo](../../plugins/apexrest-apex/assets/apexrest-logo.svg) is byte-identical to the documentation logo; the [composer icon](../../plugins/apexrest-apex/assets/apexrest-icon.svg) frames the pencil-and-ruler symbol from the same source. Plugin metadata references these SVGs through `interface.composerIcon`, `interface.logo` and `interface.logoDark`. The site and native builds include their respective assets.

The English and Ukrainian SVG diagrams below are maintained directly in this repository; Ukrainian filenames end in `.uk.svg`. They use native vector shapes and system fonts, with no scripts, external resources or embedded HTML. Each graphic has an accessible title and description, and a `viewBox` for proportional resizing.

| Asset                                      | Purpose                                                            | Text reference                               |
| ------------------------------------------ | ------------------------------------------------------------------ | -------------------------------------------- |
| [overview.svg](overview.svg)               | Codex skills, shared MCP/CLI runtime, SQLcl and Oracle APEX        | [Architecture](../architecture.md)           |
| [deployment-flow.svg](deployment-flow.svg) | Delivery steps, coordination defaults and authorization boundaries | [Deployment safety](../deployment-safety.md) |

Use meaningful alternative text when embedding these images in Markdown. Keep the linked text documentation available so the graphics are never the only source of operational instructions.
