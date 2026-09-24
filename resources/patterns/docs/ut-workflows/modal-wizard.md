# Three-step modal wizard / Трикроковий діалоговий майстер

Guide the user through three included modal pages with a progress list, previous/next navigation, cancel and a real finish-close process.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    1920,
    1921,
    1922
  ],
  "examples": [
    {
      "pageId": 1920,
      "componentKeys": [
        "wizard-progress",
        "step",
        "buttons",
        "next",
        "cancel"
      ],
      "behavior": "Guide the user through three included modal pages with a progress list, previous/next navigation, cancel and a real finish-close process."
    },
    {
      "pageId": 1921,
      "componentKeys": [
        "wizard-progress",
        "step",
        "previous",
        "next",
        "cancel"
      ],
      "behavior": "Guide the user through three included modal pages with a progress list, previous/next navigation, cancel and a real finish-close process."
    },
    {
      "pageId": 1922,
      "componentKeys": [
        "wizard-progress",
        "step",
        "previous",
        "finish",
        "close-dialog"
      ],
      "behavior": "Guide the user through three included modal pages with a progress list, previous/next navigation, cancel and a real finish-close process."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "A launcher opens the first of three wizard-modal-dialog pages.",
  "A shared progress list links the included steps.",
  "Each step has explicit previous/next destinations and a Cancel action.",
  "The final Finish submission invokes closeDialog only for the Finish button."
]
```

## Interaction and states

```json
[
  "Next and Previous navigate among included step pages.",
  "Cancel closes the current dialog without a submit.",
  "Finish submits the final step and closes the wizard through its conditional process."
]
```

## Data contract

```json
{
  "source": "Original static instructional content; no persistent writes or external resources.",
  "tables": [],
  "bindings": [],
  "submittedItems": []
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

## Recipes

- pattern:ut-workflows/modal-wizard/recipes/basic: ready

## Adaptation

- Use free page numbers; rename page items, static IDs, region/action identifiers and all references together.
- Merge only the selected composition into the destination application; preserve authentication, authorization and existing settings.
- Keep source SQL projections, type mappings and all local links closed after adaptation.
- Merge workflow-progress into existing shared lists without replacing the destination navigation lists.

## Limits

- Derived from observed structure in Universal Theme Reference; recipe code and explanatory text are original APEXREST material.
- Offline compilation does not prove SQL execution, import or browser behavior.
- This observed wizard is a navigation walkthrough with static content; it is not a multi-step data-entry transaction.
- A real data-entry wizard needs validation, persisted or session-scoped state, rollback and final-save contracts before claiming completion.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
