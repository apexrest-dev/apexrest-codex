# Destination hub — cards / Центр переходів із картками

Original same-app navigation with an explicit target and readable empty state.

Status: ready.

Source: ux-pattern-catalog; pages 1100, 1110, 1.

## Data contract

```json
{
  "source": "Original synthetic SQL selected from DUAL; no application tables or external resources.",
  "tables": [],
  "columns": {
    "ID": "number stable destination key",
    "TITLE": "varchar2 label",
    "DESCRIPTION": "varchar2 context",
    "TARGET_URL": "checksum-signed same-app URL"
  },
  "bindings": [
    "P2_ID"
  ],
  "submittedItems": [
    "P2_ID"
  ],
  "writeContract": "Read-only."
}
```

## Adaptation

- Choose unused page numbers and rename page items, region keys and target URLs together.
- Replace synthetic queries with authorized application sources; preserve keys, types, ordering, item bindings and required row authorization.
- Preserve the destination authentication and shared configuration.
- Compile the adapted application; SQL execution, import and browser behavior require separate checks.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Destination hub
    alias: HOME
    title: Destination hub
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region directory (
        name: Destination hub
        type: cards
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select d.*, apex_page.get_url(p_page => 2, p_items => 'P2_ID', p_values => ID) TARGET_URL from (select 1 ID, 'Open work' TITLE, 'Current assignments and owners' DESCRIPTION from dual union all select 2, 'Recent changes', 'Latest reviewed changes' from dual) d
                ```
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/cards-container
            templateOptions: #DEFAULT#
        }
        card {
            primaryKeyColumn1: ID
        }
        title {
            column: TITLE
        }
        body {
            column: DESCRIPTION
        }
        action open-record (
            type: fullCard
            layout {
                sequence: 10
            }
            behavior {
                type: redirectUrl
                targetUrl: &TARGET_URL.
            }
        )
    )
)

```

## pages/p00002-destination.apx

```apexlang
page 2 (
    name: Selected destination
    alias: DESTINATION
    title: Selected destination
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region profile (
        name: Selected destination
        type: classicReport
        source {
            location: localDatabase
            type: sqlQuery
            pageItemsToSubmit: P2_ID
            sqlQuery:
                ```sql
                select TITLE, DESCRIPTION from (select 1 ID, 'Open work' TITLE, 'Current assignments and owners' DESCRIPTION from dual union all select 2, 'Recent changes', 'Latest reviewed changes' from dual) where ID = :P2_ID
                ```
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        messages {
            whenNoDataFound: No matching destination.
        }
        column TITLE (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: TITLE
            }
            layout {
                sequence: 10
            }
        )
        column DESCRIPTION (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: DESCRIPTION
            }
            layout {
                sequence: 20
            }
        )
    )
    pageItem P2_ID (
        type: hidden
        layout {
            sequence: 10
            region: @profile
            slot: regionBody
        }
        security {
            sessionStateProtection: checksumRequiredSessionLevel
        }
    )
    button back (
        buttonName: BACK
        label: Back
        layout {
            sequence: 10
            region: @profile
            slot: previous
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: redirectThisApp
            target: {
                page: 1
            }
        }
    )
)

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "e5236e3a1164372e747f843ab6e2e15f40e7d4a3266999006e4f8547795e32fe",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
