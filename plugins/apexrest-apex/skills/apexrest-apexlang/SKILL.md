---
name: apexrest-apexlang
description: Generate or edit real Oracle APEXlang applications and validate them with the installed Oracle compiler.
---

Pass the absolute workspace `project` path on project-scoped MCP calls. The native server starts in its installed plugin directory, which is not the user project.
Reuse the inspected project and pinned compiler. Search bounded references for missing syntax and version; read matching fragments or reuse a native component from the current export. Inspect relevant files and preserve Oracle-generated IDs, .apex metadata and shared components. Generate/export to staging then new destinations.

For source-backed pages, identify the needed tables, joins and metric definitions. Batch independent metadata reads and authorized read-only query checks; reuse the source map for editing and verification. Investigate unresolved fields instead of rescanning the schema. Do not invent real data or infer units and financial definitions from column names.

Batch coherent component edits before Oracle compilation. Deploy plan already compiles: avoid standalone validate immediately before planning unchanged source. Use it for an editing checkpoint or isolating a compiler error. Repair the reported cause; never invent grammar, IDs or success output. Existing-app page changes still use a reviewed full-application import. For dashboards with filters, read [native dashboard guidance](references/native-dashboard.md).

When the user asks to create or update an identified development/test application, continue through the [authorized import workflow](../apexrest-deploy/SKILL.md); do not stop after generating sources or a plan.

For user-visible changes, follow the [in-app browser verification rule](../apexrest-test/SKILL.md#in-app-browser-verification) once the change is available on the authorized target; report any pending browser verification.
