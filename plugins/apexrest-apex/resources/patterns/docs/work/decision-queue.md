# Conditional decision queue / Черга умовних рішень

Rows expose state-specific approval, rejection or review commands. A server transition must re-check identity, state, permissions and concurrency before committing.

Status: unresolved.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    1100,
    1110
  ],
  "examples": [
    {
      "pageId": 1100,
      "componentKeys": [
        "action-list"
      ],
      "behavior": "Content Row commands vary by approval/review state."
    },
    {
      "pageId": 1110,
      "componentKeys": [
        "section-summary"
      ],
      "behavior": "Cards expose the same pending/review/completed action distinctions."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Rows expose state-specific approval, rejection or review commands.",
  "A server transition must re-check identity, state, permissions and concurrency before committing."
]
```

## Interaction and states

```json
[
  "Pending rows may allow approve/reject; review rows permit inspection; completed rows omit commands."
]
```

## Data contract

```json
{
  "source": "A project-specific workflow table or API is required.",
  "tables": [],
  "bindings": [],
  "submittedItems": [],
  "writeContract": "Unresolved: authorize a state transition using stable record key, expected row version and allowed transition."
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

- pattern:work/decision-queue/recipes/cards: unresolved — Source actions have placeholder targets and no server transition contract; no working approval/rejection recipe is claimed.
- pattern:work/decision-queue/recipes/content-row: unresolved — Source actions have placeholder targets and no server transition contract; no working approval/rejection recipe is claimed.

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

## Limits

- Original APEXREST recipe; source implementation assets and explanatory prose are not redistributed.
- The source actions target # and implement no approval or rejection operation.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
