# Full item detail — read-only / Повні деталі об’єкта лише для читання

Full item detail: Record heading and measures; Region Display Selector; Key facts section; Activity section; Read-only discussion section.

Status: ready.

Source: ux-pattern-catalog; pages 320.

## Data contract

```json
{
  "source": "synthetic local SQL",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Adaptation

- Choose unused page numbers and rename all page items, region keys and DOM IDs together.
- Replace synthetic projections with authorized application queries while preserving keys, column types and bindings.
- Preserve destination authentication, authorization, checksums and application configuration.
- Compile the adapted complete application; verify SQL, import and browser behavior separately.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Full item detail
    alias: HOME
    title: Full item detail
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#

}
    security {
        pageAccessProtection: argumentsMustHaveChecksum

}
    region record-heading (
        name: Initiative
        type: staticContent
        source {
            htmlCode: <p>North initiative</p>

  }
        layout {
            sequence: 10
            slot: body

  }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#

  }
    )
    region summary-metrics (
        name: Overview measures
        type: themeTemplateComponent/metricCard
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Open actions' TITLE, 3 METRIC, 'Current record' META from dual
                ```

  }
        layout {
            sequence: 20
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
            metric: &METRIC.
            meta: &META.

  }
        column TITLE (
            layout {
                sequence: 10

      }
            source {
                databaseColumn: TITLE
                dataType: varchar2

      }
        )
        column METRIC (
            layout {
                sequence: 20

      }
            source {
                databaseColumn: METRIC
                dataType: number

      }
        )
        column META (
            layout {
                sequence: 30

      }
            source {
                databaseColumn: META
                dataType: varchar2

      }
        )
    )
    region selector (
        name: Sections
        type: regionDisplaySelector
        layout {
            sequence: 10
            slot: body

  }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#

  }
        advanced {
            htmlDomId: example_selector

  }
        settings {
            mode: viewSingleRegion
            rememberSelection: false
            includeShowAll: true

  }
    )
    region facts (
        name: Key facts
        type: classicReport
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select ID, TITLE, STATUS from (select 1 ID, 'North initiative' TITLE, 'Open' STATUS from dual union all select 2, 'South initiative', 'Closed' from dual) where ID = 1
                ```

  }
        layout {
            sequence: 30
            slot: body

  }
        advanced {
            regionDisplaySelector: true

  }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#

  }
        componentAppearance {
            template: @/value-attribute-pairs-column
            templateOptions: #DEFAULT#

  }
        column ID (
            reportColumnQueryId: 1
            derivedColumn: N
            heading {
                heading: Id

      }
            layout {
                sequence: 10

      }
        )
        column TITLE (
            reportColumnQueryId: 2
            derivedColumn: N
            heading {
                heading: Title

      }
            layout {
                sequence: 20

      }
        )
        column STATUS (
            reportColumnQueryId: 3
            derivedColumn: N
            heading {
                heading: Status

      }
            layout {
                sequence: 30

      }
        )
    )
    region activity (
        name: Recent activity
        type: themeTemplateComponent/contentRow
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Record reviewed' TITLE, 'Review completed today' DESCRIPTION from dual
                ```

  }
        layout {
            sequence: 50
            slot: body

  }
        advanced {
            regionDisplaySelector: true

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
        column TITLE (
            layout {
                sequence: 10

      }
            source {
                databaseColumn: TITLE
                dataType: varchar2

      }
        )
        column DESCRIPTION (
            layout {
                sequence: 20

      }
            source {
                databaseColumn: DESCRIPTION
                dataType: varchar2

      }
        )
    )
    region comments (
        name: Discussion history
        type: themeTemplateComponent/comments
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 'Example user' USER_NAME, 'A local comment.' COMMENT_TEXT, timestamp '2026-01-01 09:00:00' COMMENT_DATE from dual
                ```

  }
        layout {
            sequence: 70
            slot: body

  }
        advanced {
            regionDisplaySelector: true

  }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#

  }
        componentAppearance {
            display: report

  }
        settings {
            userName: USER_NAME
            commentText: COMMENT_TEXT
            date: COMMENT_DATE
            style: basic

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
    )
)

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "543edbae5d50a37883bf036c8ce008f9d953dccbc1ab5e6bae1ceffc37f66409",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
