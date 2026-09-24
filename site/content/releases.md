# Release {{version}}

English | [Українська](releases.uk.md)

Release 1.2.0 adds a separate offline UX pattern catalog and a skill for expanding it from APEX applications. The plugin provides 18 MCP tools and 13 skills for Oracle/APEX work, with Codex managing the conversation and collaboration.

## Changes

- Search 58 patterns and adapt 84 recipes: 69 compile with the matching Oracle compiler, while 15 remain visible with explicit unresolved dependencies or behavior contracts.
- Review coverage accounts for 150 pages from two source applications and 818 variant decisions. Page hashes bind each review to its captured source; these counts describe the reviewed sources, not every possible APEX composition.
- Use `corpus: "patterns"` with the existing reference tools or CLI. Read pattern contracts, individual recipes and page coverage on demand, offline and without a configured project or database connection.
- Use the new `$apexrest-pattern-catalog` skill to capture an authorized source application, classify its examples, author reusable recipes and extend the catalog with compiler evidence.
- Keep access to 109 component families and 138 compiler-checked component recipes through `corpus: "components"`. Existing Oracle reference IDs and the `apexlang` default remain compatible.

Follow the [pattern catalog guide](../../docs/pattern-catalog.md) and [component catalog guide](../../docs/component-catalog.md), or browse the [Universal Theme component list and examples](https://apex.oracle.com/ut). Install with `npm install -g apexrest`, or pin `apexrest@1.2.0`.

## Evidence and distribution

[Pattern evidence](../../docs/evidence/pattern-catalog-local.json) records source coverage, offline compiler checks, retrieval and package verification. The [component evidence](../../docs/evidence/component-catalog-local.json) retains its original scope. Compiler readiness means that the recipe's declared dependencies are closed and its scaffold compiles; SQL execution, application import, authenticated browser behavior and native model execution retain separate [verification limits](../../docs/next-actions.md).

[Release notes](../../docs/release-notes.md) identify the actual distribution outcome. npm publication, canonical GitHub source, signed GitHub artifacts and website deployment remain distinct. The protected GitHub artifact publisher stays disabled.

Historical [1.1.0 publication](../../docs/evidence/npm-110-publication.json), [1.0.0 publication](../../docs/evidence/npm-100-publication.json) and [connected Oracle evidence](../../docs/evidence/ords-connected.json) retain their original source identities and limits.
