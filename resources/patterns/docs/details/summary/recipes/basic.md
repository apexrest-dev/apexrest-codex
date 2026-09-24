# Item detail summary — basic / Базовий короткий огляд деталей об’єкта

Item detail summary: Record heading; Summary metric; Key-value facts; Recent activity.

Status: ready.

Source: ux-pattern-catalog; pages 310.

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
    name: Item detail summary
    alias: HOME
    title: Item detail summary
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
)

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "96319f76403ff5c8365b422206b78f7efeb283fc7a0e7974f02b557438a9bebe",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
