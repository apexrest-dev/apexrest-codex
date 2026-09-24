# Grouped activity history / Історія подій із групуванням

A stable event ID identifies each activity. Ordered date buckets group rows without mixing the event timestamp into status text.

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
        "recent-activity"
      ],
      "behavior": "Activities are grouped by time period and ordered chronologically within the group."
    },
    {
      "pageId": 320,
      "componentKeys": [
        "activity-2"
      ],
      "behavior": "Supporting activity remains separate from the current record facts."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "A stable event ID identifies each activity.",
  "Ordered date buckets group rows without mixing the event timestamp into status text."
]
```

## Interaction and states

```json
[]
```

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "ID": "number event identity",
    "GROUP_LABEL": "varchar2 display group",
    "GROUP_ORDER": "number chronological group order",
    "EVENT_TIME": "timestamp",
    "TITLE": "varchar2 event",
    "DESCRIPTION": "varchar2 context"
  },
  "bindings": [],
  "submittedItems": [],
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

- pattern:activity/grouped-history/recipes/time-groups: ready

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

## Limits

- Original APEXREST recipe; source implementation assets and explanatory prose are not redistributed.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
