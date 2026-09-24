# Page trail in plain host / Шлях сторінки у звичайному контейнері

Two local pages share a parent-child breadcrumb with a real return target.

Status: ready.

Source: universal-theme-reference; pages 3810.

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

## shared-components/breadcrumbs.apx

```apexlang
breadcrumb workspace-trail (
    name: Workspace trail
    entry overview (
        name: Overview
        pageNumber: 1
        execution {
            sequence: 10
        }
        link {
            target: {
                page: 1
            }
        }
    )
    entry detail (
        name: Work details
        pageNumber: 2
        execution {
            sequence: 20
        }
        appearance {
            parentEntry: @overview
        }
        link {
            target: {
                page: 2
            }
        }
    )
)

```

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Overview
    alias: HOME
    title: Overview
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region trail (
        name: Page trail
        type: breadcrumb
        source {
            breadcrumb: @workspace-trail
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/blank-with-attributes-no-grid
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            breadcrumbTemplate: @/breadcrumb
            templateOptions: #DEFAULT#
        }
    )
    region content (
        name: Overview
        type: staticContent
        source {
            htmlCode: <p>Review the current service work and use the page trail to return.</p>
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
    button detail (
        buttonName: DETAIL
        label: Open work details
        layout {
            sequence: 10
            region: @content
            slot: next
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: redirectThisApp
            target: {
                page: 2
            }
        }
    )
)

```

## pages/p00002-page-2.apx

```apexlang
page 2 (
    name: Work details
    alias: PAGE-2
    title: Work details
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region trail (
        name: Page trail
        type: breadcrumb
        source {
            breadcrumb: @workspace-trail
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/blank-with-attributes-no-grid
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            breadcrumbTemplate: @/breadcrumb
            templateOptions: #DEFAULT#
        }
    )
    region content (
        name: Work details
        type: staticContent
        source {
            htmlCode: <p>Review the current service work and use the page trail to return.</p>
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
)

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "ce648d5143f071ad12152b8d2ed5d27fb03f90930db028a2bf34ea71f84364b2",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
