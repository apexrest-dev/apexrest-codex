---
name: apexrest-test
description: Run real SQL, API and authenticated APEX browser tests and interpret required-suite gates.
---

Pass the absolute workspace `project` path on project-scoped MCP calls. The native server starts in its installed plugin directory, which is not the user project.
Check the applicable framework, exact target, mutation authorization when tests write, auth freshness and allowed origins. For CRUD changes, use dedicated synthetic run-specific records with cleanup and assert CRUD plus negative validation. API suites exist only for real endpoints. Login is interactive outside chat, without trace/video capture. Required absent/empty/skipped/blocked suites fail. Distinguish unit mocks, local compiler runs and actual connected integration.

## Application-only verification scope

For a page/dashboard change without database migrations, stored-code changes or new APIs, validate with the Oracle compiler, reconcile its real read-only SQL queries and inspect the deployed page in the in-app browser. Include filters, navigation, empty/error states and responsive layout when relevant. Do not require synthetic CRUD or installation of utPLSQL for this scope.

Choose applicable required suites when establishing a project profile. Preserve existing requirements unless the user authorizes a scope change. When the user explicitly approves source-query and in-app checks for an application-only task, use an isolated profile with no unrelated automated suites if needed. Preserve the original profile and historical failures; record that no automated suites ran and report the actual source/browser checks separately. Do not make this the default for database, CRUD, API, production or full plugin integration work, and do not claim the broader acceptance matrix passed.

## In-app browser verification

For user-visible application changes, check whether the Codex in-app browser is available through the tools exposed in the current session. When available, use it to open the exact target application and inspect the affected pages after the change is available there. Verify rendering, navigation and the changed interactions, including relevant validation and error states. Use the browser tool's documented controls; opening a tab or receiving HTTP 200 alone is not verification.

Wait within a bounded interval for asynchronous regions to finish loading before judging them; initial chart "No data" text can be transient. Compare filter values, dates and chart content with source checks; include a real empty case when available and a narrow viewport for responsive changes. Reproduce and diagnose a stuck submit/refresh before another import. Reuse the authenticated tab where possible; exclude credentials and session tokens from evidence.

Stay within the existing environment and mutation authorization. Authenticate interactively without exposing credentials or capturing login. This rule does not authorize deployment or database writes merely to obtain browser evidence.

Record the target, pages/scenarios checked, observed results and remaining failures; retain only evidence safe to share. Report in-app observations separately from compiler, Playwright and other automated results. This check complements required suites and cannot turn absent or failing tests green. If the in-app browser, authentication, target or deployed change is unavailable, state the reason and leave that verification incomplete while continuing independent checks. Do not silently substitute another browser and label it in-app verification.
