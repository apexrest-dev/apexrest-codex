# Full-page search — synthetic example / Повносторінковий пошук із синтетичними даними

A full-page search composition with a labeled query input, an initial prompt, results refreshed after typing, and a separate zero-match message.

Status: ready.

Source: ux-pattern-catalog; pages 240.

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

## Adaptation

- Choose a free page number and rename every P1_ item, region reference and dynamic action consistently.
- Replace the synthetic SELECT with an authorized project query; preserve column aliases, types and a stable unique ID.
- Merge the composition into the destination application and preserve its authentication, authorization and page-access policy.
- Verify populated, empty, restored-session and narrow-screen states after importing into an identified test target.
- Rename P1_QUERY in the SQL bind, pageItemsToSubmit, item declaration and every client condition/event together.
- Keep initial, populated and no-match states distinct; ensure clearing a term restores the prompt.
- For larger data sets choose a search/index strategy and minimum term length appropriate to the authorized source; no performance claim is made for substring search.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Full-page search
    alias: HOME
    title: Full-page search
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region search-controls (
        name: Search records
        type: staticContent
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    pageItem P1_QUERY (
        type: textField
        label {
            label: Search title or description
        }
        layout {
            sequence: 10
            region: @search-controls
            slot: regionBody
        }
        appearance {
            template: @/optional-floating
            templateOptions: #DEFAULT#
        }
    )
    region search-prompt (
        name: Start a search
        type: staticContent
        source {
            htmlCode: <p>Enter a word from a record title or description. Try archive, catalog, access or service.</p>
        }
        layout {
            sequence: 20
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region results (
        name: Matching records
        type: themeTemplateComponent/contentRow
        source {
            location: localDatabase
            type: sqlQuery
            pageItemsToSubmit: P1_QUERY
            sqlQuery:
                ```sql
                with records as (
                select 1 ID, 'Archive review' TITLE, 'Review the retention schedule.' DESCRIPTION, 'Operations' CATEGORY, 'Open' STATUS from dual
                union all select 2, 'Catalog refresh', 'Publish the current catalog entries.', 'Documentation', 'Open' from dual
                union all select 3, 'Access audit', 'Check the project access list.', 'Operations', 'Done' from dual
                union all select 4, 'Service notes', 'Record the latest support observations.', 'Documentation', 'Done' from dual
                )
                select ID, TITLE, DESCRIPTION, CATEGORY, STATUS from records
                where trim(:P1_QUERY) is not null
                  and instr(lower(TITLE || ' ' || DESCRIPTION), lower(trim(:P1_QUERY))) > 0
                ```
        }
        layout {
            sequence: 30
            slot: body
        }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            display: report
        }
        settings {
            title: &TITLE.
            description: &DESCRIPTION.
        }
        messages {
            whenNoDataFound: No matching records. Change or clear your search.
        }
        column ID (
            layout {
                sequence: 10
            }
            source {
                databaseColumn: ID
                dataType: number
            }
        )
        column TITLE (
            layout {
                sequence: 20
            }
            source {
                databaseColumn: TITLE
                dataType: varchar2
            }
        )
        column DESCRIPTION (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: DESCRIPTION
                dataType: varchar2
            }
        )
        column CATEGORY (
            layout {
                sequence: 40
            }
            source {
                databaseColumn: CATEGORY
                dataType: varchar2
            }
        )
        column STATUS (
            layout {
                sequence: 50
            }
            source {
                databaseColumn: STATUS
                dataType: varchar2
            }
        )
    )
    dynamicAction query-changed (
        name: Refresh search results
        execution {
            sequence: 10
            type: debounce
            time: 250
        }
        when {
            event: input
            selectionType: items
            items: P1_QUERY
        }
        clientSideCondition {
            type: jsExpression
            javaScriptExpression: String(apex.item("P1_QUERY").getValue()).trim().length > 0
        }
        action show-results (
            action: show
            affectedElements {
                selectionType: region
                region: @results
            }
            execution {
                sequence: 10
                fireWhenEventResultIs: true
                fireOnInit: false
            }
        )
        action hide-search-prompt (
            action: hide
            affectedElements {
                selectionType: region
                region: @search-prompt
            }
            execution {
                sequence: 20
                fireWhenEventResultIs: true
                fireOnInit: false
            }
        )
        action hide-results (
            action: hide
            affectedElements {
                selectionType: region
                region: @results
            }
            execution {
                sequence: 30
                fireWhenEventResultIs: false
                fireOnInit: false
            }
        )
        action show-search-prompt (
            action: show
            affectedElements {
                selectionType: region
                region: @search-prompt
            }
            execution {
                sequence: 40
                fireWhenEventResultIs: false
                fireOnInit: false
            }
        )
        action refresh-results (
            action: refresh
            affectedElements {
                selectionType: region
                region: @results
            }
            execution {
                sequence: 50
                fireOnInit: false
            }
        )
        action clear-results (
            action: refresh
            affectedElements {
                selectionType: region
                region: @results
            }
            execution {
                sequence: 50
                fireWhenEventResultIs: false
                fireOnInit: false
            }
        )
    )
    dynamicAction initial-search-state (
        name: Restore search state
        execution {
            sequence: 20
        }
        when {
            event: ready
        }
        clientSideCondition {
            type: jsExpression
            javaScriptExpression: String(apex.item("P1_QUERY").getValue()).trim().length > 0
        }
        action show-results (
            action: show
            affectedElements {
                selectionType: region
                region: @results
            }
            execution {
                sequence: 10
                fireWhenEventResultIs: true
            }
        )
        action hide-search-prompt (
            action: hide
            affectedElements {
                selectionType: region
                region: @search-prompt
            }
            execution {
                sequence: 20
                fireWhenEventResultIs: true
            }
        )
        action hide-results (
            action: hide
            affectedElements {
                selectionType: region
                region: @results
            }
            execution {
                sequence: 30
                fireWhenEventResultIs: false
            }
        )
        action show-search-prompt (
            action: show
            affectedElements {
                selectionType: region
                region: @search-prompt
            }
            execution {
                sequence: 40
                fireWhenEventResultIs: false
            }
        )
    )
)

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "9d3593421b952b930ff8894e5de9a0c313bf79a5dd2f38295a396a954d1847bb",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
