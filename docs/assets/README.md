# Documentation graphics

These English SVGs are maintained directly in this repository. They use native vector shapes and system fonts, with no scripts, external resources or embedded HTML. Each graphic has an accessible title and description, and a `viewBox` for proportional resizing.

| Asset | Purpose | Text reference |
| --- | --- | --- |
| [overview.svg](overview.svg) | Codex skills, shared MCP/CLI runtime, SQLcl and Oracle APEX | [Architecture](../architecture.md) |
| [deployment-flow.svg](deployment-flow.svg) | Delivery steps, coordination defaults and authorization boundaries | [Deployment safety](../deployment-safety.md) |
| [performance.svg](performance.svg) | Observed planning and import times on application 175 | [Methodology](../optimization-review.md), [measurement evidence](../evidence/optimization-oracle-app175.json) |

The planning comparison uses the median of three samples per version with unchanged source and target. Import figures compare historical estimates with one optimized run; they are descriptive, not a controlled repeated benchmark. Neither graphic implies a general speed guarantee or completion of open release gates.

Use meaningful alternative text when embedding these images in Markdown. Keep the linked text documentation available so the graphics are never the only source of operational instructions.
