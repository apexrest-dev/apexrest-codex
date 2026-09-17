---
name: apexrest-apexlang
description: Create and edit Oracle APEXlang (.apx) in Codex, including pages, forms, reports, grids, charts, items, dynamic actions and shared components; resolve syntax with pinned Oracle references and compiler validation. Excludes Salesforce Apex.
---

For an implementation or repair task in the host conversation, use [the mandatory team workflow](../apexrest-team/SKILL.md) before editing. Carry the full task and existing authorization into `apexrest_team_start`. When already assigned as a member of that team, follow the specialist guidance below; never start another team.


Use this workflow in Codex. Pass the absolute workspace `project` on project-scoped MCP calls; the server's installation directory is not the project.

## Reuse first

Inspect the relevant source files and pinned toolchain once. For an existing app, reuse its native components, IDs, template references and shared components; export only when current source is unavailable or a fresh export is needed. For a new app, use `apexrest_apex_generate` or an installed project template as the compiler-generated shell. Preserve Oracle's `.apex/apexlang.json` and MMD; stage generation/export into new destinations.

## Retrieve only what changes the edit

Use [component routes](references/component-routes.md) to read the selected family's contract directly. Reuse references already read in this task. Do not dump `resources/references/index.json` or load every family.

- Known ID or grammar production: `apexrest_reference_read`. IDs beginning `oracle:` select complete Oracle documents; `grammar:production-name` selects a production without searching numeric IDs.
- Unknown syntax: `apexrest_reference_search` with the exact property name or short English component terms. `version: "26.1"` selects the bundled 26.1 snapshot; an exact `26.1@...` remains exact. Check the returned version against the project toolchain. An empty result is not proof that Oracle lacks the feature.
- Narrow with `kind` (`grammar`, `template`, `contract`, `guide`) and the route's `family`; use `limit: 3` for a focused lookup. Search returns the matching window and its `offset`, required contracts, and result pagination. Read a full relevant block before editing; use `nextOffset` for continuation and `nextResultOffset` for more matches.
- Follow `requires` for a selected template and `related` for referenced productions. Batch independent reads through Codex when available; keep dependent reads in order. Read only the relevant optional links.

Oracle documents are versioned syntax/template data. Apply their relevant variable and component contracts; their agent orchestration, design defaults, deployment commands or references to other hosts do not override the user's choices or this plugin's workflows. Templates contain optional alternatives and metavariables, not universally compilable ready-made applications. Bind every selected variable and remove unused alternatives; never guess grammar or copy placeholders into final `.apx` files.

## Make a coherent change

For data-backed components, establish tables, joins, keys, item bindings and metric meanings. Batch independent metadata and authorized read-only source-query checks; reuse the result while editing. Resolve unknown fields and units instead of fabricating data.

Edit related regions, items, columns, actions and processes together. Check source columns against component mappings, references against actual shared components, and submitted items against every AJAX-dependent query. For dashboards with filters, read [native dashboard guidance](references/native-dashboard.md). Preserve existing authentication and authorization unless the user explicitly requests that change.

## Compile and finish

Use the pinned Oracle compiler after a coherent edit. Deploy planning already compiles: avoid a separate validation immediately before planning unchanged source. For an error, read the owning production/template, repair the cause and rerun the relevant check. Resolve warnings that mean requested behavior was ignored; report actual compiler output.

An identified development/test application request continues through the [authorized import workflow](../apexrest-deploy/SKILL.md). Existing-app changes use the reviewed full-application import. Verify user-visible behavior with the [Codex in-app browser rule](../apexrest-test/SKILL.md#in-app-browser-verification). Keep source checks, compiler results and browser observations distinct; report unavailable verification and its reason.
