# Native search across two collections: parameters

Parameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.

```json
[
  {
    "context": "region example",
    "path": "region.settings.searchPageItem",
    "type": "page item",
    "value": "P1_SEARCH"
  },
  {
    "context": "region example / searchSource handbook",
    "path": "searchSource.searchConfig",
    "type": "shared reference",
    "value": "@workflow-handbook"
  },
  {
    "context": "region example / searchSource notes",
    "path": "searchSource.searchConfig",
    "type": "shared reference",
    "value": "@workflow-notes"
  },
  {
    "context": "shared search configurations",
    "path": "searchConfig.source.searchableColumns",
    "type": "column list",
    "value": [
      "TITLE",
      "DESCRIPTION"
    ]
  }
]
```

## Data mappings

```json
{
  "source": "Two separately named shared search configurations, each with two original synthetic DUAL rows.",
  "tables": [],
  "bindings": [],
  "submittedItems": [
    "P1_SEARCH (native Search region-owned query input)"
  ],
  "columns": [
    {
      "name": "ID",
      "type": "NUMBER"
    },
    {
      "name": "TITLE",
      "type": "VARCHAR2"
    },
    {
      "name": "DESCRIPTION",
      "type": "VARCHAR2"
    }
  ],
  "searchContract": "Native Search reads settings.searchPageItem; each configuration defines its searchable column allowlist. The native engine owns query submission and result rendering."
}
```

## Dependencies

```json
[
  "APEX 26.1 native components",
  "Universal Theme 26.1 inherited templates",
  "pattern:scaffold for compilation only"
]
```
