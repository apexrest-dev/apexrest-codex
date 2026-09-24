# Related collection overview / Огляд пов’язаних колекцій

Collection counts are computed from the same synthetic child records shown at the destination. A signed collection key opens its matching child list.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    1100,
    320
  ],
  "examples": [
    {
      "pageId": 1100,
      "componentKeys": [
        "related-information",
        "section-summary"
      ],
      "behavior": "Collection counts lead into a bounded related-record view."
    },
    {
      "pageId": 320,
      "componentKeys": [
        "related-information",
        "child-records"
      ],
      "behavior": "Related collections remain scoped to the current record."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Collection counts are computed from the same synthetic child records shown at the destination.",
  "A signed collection key opens its matching child list."
]
```

## Interaction and states

```json
[
  "Open a collection and inspect its children; return to the collection overview."
]
```

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "COLLECTION_ID": "number collection key",
    "ID": "number child key",
    "TITLE": "varchar2 collection title",
    "ITEM_COUNT": "number actual matching count"
  },
  "bindings": [
    "P2_COLLECTION_ID"
  ],
  "submittedItems": [
    "P2_COLLECTION_ID"
  ],
  "writeContract": "Read-only."
}
```

## Dependencies

```json
[
  {
    "kind": "native",
    "reference": "Oracle APEX 26.1",
    "requirement": "Use the native component implementations pinned by the compiler."
  },
  {
    "kind": "theme",
    "reference": "Universal Theme 26.1",
    "requirement": "Resolve inherited templates in the destination application."
  },
  {
    "kind": "scaffold",
    "reference": "pattern:scaffold",
    "requirement": "Offline compiler scaffold only; preserve destination authentication and authorization."
  }
]
```

## Recipes

- pattern:details/related-collections/recipes/counts-and-navigation: ready

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

## Limits

- Original APEXREST recipe; source implementation assets and explanatory prose are not redistributed.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
