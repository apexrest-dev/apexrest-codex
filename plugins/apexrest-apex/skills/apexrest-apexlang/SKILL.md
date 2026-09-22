---
name: apexrest-apexlang
description: Create or edit Oracle APEXlang (.apx) using pinned Oracle references and compiler validation. Excludes Salesforce Apex.
---

For a new implementation task, follow [work routing](../apexrest-work/SKILL.md) once. Current-session work and assigned team members continue here without restarting orchestration. Pass the user's absolute workspace as `project` on project-scoped calls.

## Reuse first

Inspect relevant source and pinned toolchain once. Reuse existing components, IDs, templates and shared components; export only for missing/stale source. For a new app, use `apexrest_apex_generate` or an installed project template. Preserve `.apex/apexlang.json` and MMD; generate/export into new destinations.

## Retrieve only what changes the edit

Read the selected contract through [component routes](references/component-routes.md). Reuse prior reads; do not dump the reference index or load unrelated families.

- Known ID: `apexrest_reference_read`; `oracle:` selects a complete document, `grammar:production-name` a production.
- Unknown syntax: `apexrest_reference_search` with exact property/short English terms, relevant `kind` (`grammar`, `template`, `contract`, `guide`), route `family` and `limit: 3`. Check the returned version against the toolchain: `26.1` selects the bundled snapshot; `26.1@...` stays exact. Empty results do not prove a feature absent.
- Read the full relevant block using its `offset`/`nextOffset`; `nextResultOffset` pages matches. Follow template `requires` and relevant production `related` links. Batch independent reads only.

Oracle documents supply versioned syntax/template contracts; their orchestration, design defaults and deploy commands do not override user choices or plugin workflows. Bind template variables and remove unused alternatives. Never guess grammar or leave placeholders in `.apx` files.

For Media List, Comments, Metric Card, Cards, Smart Filters/Search or Region Display Selector, read the relevant [component contract notes](references/component-contracts.md) before choosing source mappings, nested blocks or actions. Theme option inventories and release notes do not prove target-build compiler support. When a requested capability lacks a resolved contract, report that specific gap and continue independent work.

## Make a coherent change

Establish tables, joins, keys, bindings and metric meanings. Batch independent metadata/read-only source-query checks within authorization and reuse their results. Resolve unknown fields/units instead of inventing data.

Edit related components together. Check column mappings, shared-component references and submitted items for every AJAX-dependent query. For filtered dashboards, read [native dashboard guidance](references/native-dashboard.md). Preserve authentication/authorization unless explicitly requested otherwise.

## Compile and finish

Compile coherent edits with the pinned Oracle compiler; deployment planning already does this for unchanged source. Fix errors using the owning production/template and rerun relevant checks. Resolve warnings about ignored requested behavior; report actual output.

Continue identified development/test application requests through [authorized import](../apexrest-deploy/SKILL.md); existing apps use a reviewed full-application import. Verify UI using the [selected browser](../apexrest-test/SKILL.md#in-app-browser-verification). Separate source, compiler and browser evidence; report unavailable verification and why.
