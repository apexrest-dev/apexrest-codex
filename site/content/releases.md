# Release {{version}}

English | [Українська](releases.uk.md)

Release 1.1.0 adds an offline Universal Theme component catalog to the current Codex conversation workflow. The plugin preserves 18 MCP tools and 12 skills for Oracle/APEX work, with Codex managing the conversation and collaboration.

## Changes

- Search 109 component families and adapt 138 compiler-checked APEXlang recipes. One unsupported recipe remains visible with an explicit unresolved reason.
- Read contextual parameters, defaults, conditions and source descriptions; distinguish native regions, report/list templates, template components, page items, buttons and page layouts.
- Use `corpus: "components"` with the existing reference tools or CLI. Existing Oracle reference IDs and the `apexlang` default remain compatible.
- Use the bundled catalog offline without a project or database connection. Source capture, dependency declarations, hashes and real compiler evidence remain separate from application deployment.

Browse the [component list and examples](https://apex.oracle.com/ut) and follow the [catalog guide](../../docs/component-catalog.md). Install with `npm install -g apexrest`, or pin `apexrest@1.1.0`.

## Evidence and distribution

[Catalog evidence](../../docs/evidence/component-catalog-local.json) records 138 offline compiler passes without warnings, 181 unit tests, 42 contract tests and 19 packaging tests, plus deterministic catalog, documentation, plugin and offline retrieval checks. SQL execution, application import, authenticated browser behavior and native model execution retain their separate [verification limits](../../docs/next-actions.md).

[Release notes](../../docs/release-notes.md) and the [1.1.0 publication record](../../docs/evidence/npm-110-publication.json) identify the actual distribution outcome. npm publication, canonical GitHub source, signed GitHub artifacts and website deployment remain distinct. The protected GitHub artifact publisher stays disabled.

Historical [1.0.0 publication](../../docs/evidence/npm-100-publication.json) and [connected Oracle evidence](../../docs/evidence/ords-connected.json) retain their original source identities and limits.
