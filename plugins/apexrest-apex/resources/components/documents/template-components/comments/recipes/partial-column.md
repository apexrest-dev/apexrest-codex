# Comments in Interactive Report column

Comments in Interactive Report column with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 3003. Component: component:template-components/comments.

## Data contract

```json
{
  "source": "localDatabase/sqlQuery; synthetic DUAL rows",
  "columns": [
    {
      "name": "USER_NAME",
      "type": "varchar2"
    },
    {
      "name": "COMMENT_TEXT",
      "type": "varchar2"
    },
    {
      "name": "COMMENT_DATE",
      "type": "timestamp"
    },
    {
      "name": "COMPONENT",
      "type": "varchar2"
    }
  ],
  "tables": [
    "DUAL"
  ],
  "bindings": [],
  "submittedItems": [],
  "writes": false
}
```

## Adaptation

- Choose a free page number and rename all P1_ items consistently.
- Rename region, button and DOM identifiers before merging into an existing page.
- Preserve the target application authentication and authorization.
- Replace synthetic projections with authorized project SQL; retain projected column names and types.

Apply the files below as an overlay to component:scaffold for offline validation. In an existing project, adapt and merge the component into its existing page and shared objects. The example is not an import authorization.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Component Example
    alias: HOME
    title: Component Example
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region results (
        name: Partial Column Example
        type: interactiveReport
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Example user' USER_NAME, 'A local comment.' COMMENT_TEXT, timestamp '2026-01-01 09:00:00' COMMENT_DATE, 'component' COMPONENT from dual
                ```
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/interactive-report
            templateOptions: #DEFAULT#
        }
        column USER_NAME (
            type: plainText
            heading {
                heading: User Name
            }
            layout {
                sequence: 10
            }
            source {
                dataType: STRING
            }
        )
        column COMMENT_TEXT (
            type: plainText
            heading {
                heading: Comment Text
            }
            layout {
                sequence: 20
            }
            source {
                dataType: STRING
            }
        )
        column COMMENT_DATE (
            type: plainText
            heading {
                heading: Comment Date
            }
            layout {
                sequence: 30
            }
            source {
                dataType: DATE
            }
        )
        column COMPONENT (
            type: themeTemplateComponent/comments
            heading {
                heading: Comments
            }
            layout {
                sequence: 100
            }
            source {
                dataType: STRING
            }
            settings {
            userName: USER_NAME
            commentText: COMMENT_TEXT
            date: COMMENT_DATE
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
    "sourceSha256": "2ba038bbd1eabbbfbbecea091ca1dd547fab9c60719cee2141b1e83387f21d0d",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
