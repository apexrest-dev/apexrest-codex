---
name: apexrest-project
description: Initialize, adopt and inspect APEXREST projects with explicit environment mapping.
---

Pass the absolute workspace `project` path on project-scoped MCP calls. The native server starts in its installed plugin directory, which is not the user project.
Inspect configuration and source inventory once; reuse the project, environment, connection reference and toolchain until an input changes or a diagnostic requires rediscovery. Initialize in a new directory or adopt an explicitly identified test target; do not re-adopt a working source tree. Never overwrite local edits. Preserve Oracle IDs and .apex metadata. Ask only for missing non-secret target information; never infer production or defaults. Review executable project code before granting trust. Reused discovery never replaces fresh target and drift checks before writes.
