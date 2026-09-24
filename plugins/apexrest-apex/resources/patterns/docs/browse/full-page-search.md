# Full-page search / Повносторінковий пошук

A full-page search composition with a labeled query input, an initial prompt, results refreshed after typing, and a separate zero-match message.

Status: ready.

## Source

```json
{
  "sourceId": "ux-pattern-catalog",
  "pages": [
    240
  ],
  "examples": [],
  "provenance": "Observed application structure; original APEXREST explanations and synthetic recipes."
}
```

## Composition

```json
[
  "A labeled P1_QUERY text field is placed in a search-controls region.",
  "A prompt region explains how to start when the trimmed query is empty.",
  "A Content Row report renders a bound query with results.source.pageItemsToSubmit=P1_QUERY.",
  "Native dynamic actions establish the initial visible state and refresh results after debounced input."
]
```

## Interaction and states

```json
[
  "On page load, restored nonblank session state shows results; blank state shows the prompt.",
  "Typing a nonblank query hides the prompt, shows results and refreshes using the submitted query.",
  "Clearing the field or entering only whitespace hides results and restores the prompt.",
  "A nonblank query without matches retains the result area and displays the no-data message."
]
```

## Data contract

```json
{
  "source": "Four original synthetic rows selected from DUAL; no application tables, views, packages or external resources.",
  "tables": [],
  "columns": [
    {
      "name": "ID",
      "type": "NUMBER",
      "role": "Stable record identity"
    },
    {
      "name": "TITLE",
      "type": "VARCHAR2",
      "role": "Record title and searchable text"
    },
    {
      "name": "DESCRIPTION",
      "type": "VARCHAR2",
      "role": "Record summary and searchable text"
    },
    {
      "name": "CATEGORY",
      "type": "VARCHAR2",
      "role": "Category refinement"
    },
    {
      "name": "STATUS",
      "type": "VARCHAR2",
      "role": "Status refinement"
    }
  ],
  "bindings": [
    "P1_QUERY"
  ],
  "submittedItems": [
    "P1_QUERY"
  ],
  "facetItems": [],
  "writeContract": "Read-only. No editing or persistence API is claimed.",
  "searchContract": "Case-insensitive literal substring search over TITLE and DESCRIPTION; trim whitespace and return zero rows for an empty term. Bind P1_QUERY and submit it on every results refresh; % and _ are ordinary characters because INSTR is used."
}
```

## Dependencies

```json
[
  "Oracle APEX 26.1 native components",
  "Universal Theme 26.1 inherited templates",
  "pattern:scaffold for offline compiler validation only"
]
```

## Recipes

- pattern:browse/full-page-search/recipes/basic: ready

## Adaptation

- Choose a free page number and rename every P1_ item, region reference and dynamic action consistently.
- Replace the synthetic SELECT with an authorized project query; preserve column aliases, types and a stable unique ID.
- Merge the composition into the destination application and preserve its authentication, authorization and page-access policy.
- Verify populated, empty, restored-session and narrow-screen states after importing into an identified test target.
- Rename P1_QUERY in the SQL bind, pageItemsToSubmit, item declaration and every client condition/event together.
- Keep initial, populated and no-match states distinct; ensure clearing a term restores the prompt.
- For larger data sets choose a search/index strategy and minimum term length appropriate to the authorized source; no performance claim is made for substring search.

## Limits

- The source application contributes structural observations only; recipe text, SQL and data are original APEXREST material.
- The recipe is read-only and does not include business actions, editing, persistence or an authorization model for a real data set.
- Offline compiler validation does not prove SQL execution, application import or browser behavior.

Offline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.
