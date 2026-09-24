# Inline AI chat / Вбудований AI чат

Conversation host with a native assistant action; provider-dependent behavior remains unresolved.

Status: unresolved. The source declares an inline assistant action but no approved provider service. A working provider, data-access policy and conversation contract must be supplied before a reusable recipe can be compiled and tested.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    250
  ],
  "examples": [],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "Inline assistant host",
  "Native showAiAssistant action",
  "External provider contract"
]
```

## Interaction and states

```json
[]
```

## Data contract

```json
{
  "source": "unresolved",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Dependencies

```json
[
  {
    "kind": "external-service",
    "reference": "Approved APEX AI service",
    "requirement": "Provider, credentials, data exposure and availability require project-specific configuration."
  }
]
```

## Recipes

- pattern:browse/ai-chat/recipes/basic: unresolved — The source declares an inline assistant action but no approved provider service. A working provider, data-access policy and conversation contract must be supplied before a reusable recipe can be compiled and tested.

## Adaptation

- Resolve the missing implementation and data contracts before declaring a ready recipe.
- Preserve existing application authorization and security.

## Limits

- The source declares an inline assistant action but no approved provider service. A working provider, data-access policy and conversation contract must be supplied before a reusable recipe can be compiled and tested.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
