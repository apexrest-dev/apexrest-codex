# Two-party conversation transcript / Двостороння історія розмови

Chronological, read-only messages map their sender to inbound/outbound alignment without implying a working message composer.

Status: ready.

Source: universal-theme-reference; pages 3003.

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

## Adaptation

- Rename page, item, region and DOM IDs together, preserving SQL bindings and submitted items.
- Replace synthetic DUAL projections with an authorized data contract; preserve key uniqueness and deterministic ordering.
- Preserve destination authentication and authorization; compile after adaptation.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Two-party conversation transcript
    alias: HOME
    title: Two-party conversation transcript
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region conversation (
        name: Conversation
        type: themeTemplateComponent/comments
        layout {
            sequence: 20
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Customer' USER_NAME,'Please review this request.' COMMENT_TEXT,timestamp '2026-01-01 09:00:00' COMMENT_DATE,'inbound' ALIGNMENT from dual
                union all select 'Agent','Review completed.',timestamp '2026-01-01 09:05:00','outbound' from dual
                order by COMMENT_DATE
                ```
        }
        componentAppearance {
            display: report
        }
        settings {
            userName: USER_NAME
            commentText: COMMENT_TEXT
            date: COMMENT_DATE
            style: chatSpeechBubbles
            alignment: &ALIGNMENT.
        }
        pagination {
            entitiesPerPage: 10
            showTotalCount: true
        }
        column USER_NAME (
            layout {
                sequence: 10
            }
            source {
                databaseColumn: USER_NAME
                dataType: varchar2
            }
        )
        column COMMENT_TEXT (
            layout {
                sequence: 20
            }
            source {
                databaseColumn: COMMENT_TEXT
                dataType: varchar2
            }
        )
        column COMMENT_DATE (
            layout {
                sequence: 30
            }
            source {
                databaseColumn: COMMENT_DATE
                dataType: timestamp
            }
        )
        column ALIGNMENT (
            layout {
                sequence: 40
            }
            source {
                databaseColumn: ALIGNMENT
                dataType: varchar2
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
    "sourceSha256": "fb135400573a36c1f3ddf5404577fc95fb6b190121bba061acba05bf6039b210",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
