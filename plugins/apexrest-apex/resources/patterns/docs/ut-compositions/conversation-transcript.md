# Two-party conversation transcript / Двостороння історія розмови

Chronological, read-only messages map their sender to inbound/outbound alignment without implying a working message composer.

Status: ready.

## Source

```json
{
  "sourceId": "universal-theme-reference",
  "pages": [
    3003
  ],
  "examples": [
    {
      "pageId": 3003,
      "componentKeys": [
        "comments-b",
        "comments-c"
      ],
      "behavior": "Chronological, read-only messages map their sender to inbound/outbound alignment without implying a working message composer."
    }
  ],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Message transcript",
  "Sender/date projection",
  "Inbound/outbound alignment"
]
```

## Interaction and states

```json
[
  "Read the ordered history; paginate when the adapted query contains more messages."
]
```

## Data contract

```json
{
  "source": "Synthetic DUAL rows only.",
  "tables": [],
  "bindings": [],
  "submittedItems": [],
  "projections": {
    "USER_NAME": "varchar2",
    "COMMENT_TEXT": "varchar2",
    "COMMENT_DATE": "timestamp",
    "ALIGNMENT": "inbound or outbound"
  }
}
```

## Dependencies

```json
[
  {
    "kind": "theme",
    "reference": "Universal Theme 26.1",
    "requirement": "Use the pinned native/theme component definitions and adapt destination IDs."
  }
]
```

## Recipes

- pattern:ut-compositions/conversation-transcript/recipes/basic: ready
- pattern:ut-compositions/conversation-transcript/recipes/delete-message: unresolved — The source Delete target is #. Message identity, ownership rules, delete API and transcript refresh are unresolved. A read-only transcript does not supply this contract.

## Adaptation

- Rename page, item, region and DOM IDs together, preserving SQL bindings and submitted items.
- Replace synthetic DUAL projections with an authorized data contract; preserve key uniqueness and deterministic ordering.
- Preserve destination authentication and authorization; compile after adaptation.

## Limits

- Offline compilation does not verify SQL execution, import or browser behavior.
- The source Delete action points to #; delete, send, edit, threading persistence and authorization require an explicit application API.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
