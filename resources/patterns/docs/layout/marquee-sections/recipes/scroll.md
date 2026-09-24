# Marquee with scrolling sections / Підсумковий банер із прокручуванням секцій

Summary, sidebar and three native scroll-selector targets.

Status: ready.

Source: universal-theme-reference; pages 1107, 1108.

## Data contract

```json
{
  "source": "Original static sample content and local page targets; no application tables.",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Adaptation

- Map sample page numbers, lists, regions and static IDs into the target application.
- Preserve existing authentication, authorization and protected navigation.
- Replace sample content with authorized project data and validate the resulting behavior.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Service review
    alias: HOME
    title: Service review
    appearance {
        pageTemplate: @/marquee
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region summary (
        name: Quarterly service review
        type: staticContent
        source {
            htmlCode: <p>Read the overview, workload and follow-up sections.</p>
        }
        layout {
            sequence: 10
            slot: masterDetail
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region sections (
        name: Sections
        type: regionDisplaySelector
        layout {
            sequence: 20
            slot: masterDetail
        }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#
        }
        settings {
            mode: scrollWindow
            rememberSelection: false
        }
    )
    region overview (
        name: Overview
        type: staticContent
        source {
            htmlCode: <p>Demand remains stable across all service areas.</p>
        }
        layout {
            sequence: 30
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        advanced {
            htmlDomId: review_overview
            regionDisplaySelector: true
        }
    )
    region workload (
        name: Workload
        type: staticContent
        source {
            htmlCode: <p>Twenty requests are active and six are awaiting review.</p>
        }
        layout {
            sequence: 40
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        advanced {
            htmlDomId: review_workload
            regionDisplaySelector: true
        }
    )
    region followup (
        name: Follow-up
        type: staticContent
        source {
            htmlCode: <p>Review staffing capacity before the next planning cycle.</p>
        }
        layout {
            sequence: 50
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        advanced {
            htmlDomId: review_followup
            regionDisplaySelector: true
        }
    )
    region context (
        name: Review context
        type: staticContent
        source {
            htmlCode: <p>Reporting period: current quarter. Audience: operations leads.</p>
        }
        layout {
            sequence: 60
            slot: rightSideColumn
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
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
    "sourceSha256": "2ef3097de90f1354785b97c87c2c92082b5d39efd2ce401476d7cfa35d13370a",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
