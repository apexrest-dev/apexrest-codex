# Sticky footer navigation / Закріплена навігація внизу мобільної сторінки

Two protected local pages with a native persistent footer and working page navigation.

Status: ready.

Source: universal-theme-reference; pages 1116, 1117.

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
    name: Service overview
    alias: HOME
    title: Service overview
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region section-1 (
        name: Service topic 1
        type: staticContent
        source {
            htmlCode: <p>Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. </p>
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
    region section-2 (
        name: Service topic 2
        type: staticContent
        source {
            htmlCode: <p>Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. </p>
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
    region section-3 (
        name: Service topic 3
        type: staticContent
        source {
            htmlCode: <p>Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. </p>
        }
        layout {
            sequence: 30
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region section-4 (
        name: Service topic 4
        type: staticContent
        source {
            htmlCode: <p>Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. </p>
        }
        layout {
            sequence: 40
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region section-5 (
        name: Service topic 5
        type: staticContent
        source {
            htmlCode: <p>Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. </p>
        }
        layout {
            sequence: 50
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region section-6 (
        name: Service topic 6
        type: staticContent
        source {
            htmlCode: <p>Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. </p>
        }
        layout {
            sequence: 60
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region actions (
        name: Page navigation
        type: staticContent
        layout {
            sequence: 80
            slot: body
        }
        appearance {
            template: @/buttons-container
            templateOptions: [
                #DEFAULT#
                t-ButtonRegion--slimPadding
                t-ButtonRegion--stickToBottom
            ]
        }
    )
    button navigate (
        buttonName: NAVIGATE
        label: View details
        layout {
            sequence: 10
            region: @actions
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
    name: Service details
    alias: PAGE-2
    title: Service details
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region section-1 (
        name: Service topic 1
        type: staticContent
        source {
            htmlCode: <p>Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. </p>
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
    region section-2 (
        name: Service topic 2
        type: staticContent
        source {
            htmlCode: <p>Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. </p>
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
    region section-3 (
        name: Service topic 3
        type: staticContent
        source {
            htmlCode: <p>Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. </p>
        }
        layout {
            sequence: 30
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region section-4 (
        name: Service topic 4
        type: staticContent
        source {
            htmlCode: <p>Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. </p>
        }
        layout {
            sequence: 40
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region section-5 (
        name: Service topic 5
        type: staticContent
        source {
            htmlCode: <p>Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. </p>
        }
        layout {
            sequence: 50
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region section-6 (
        name: Service topic 6
        type: staticContent
        source {
            htmlCode: <p>Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. Review the service scope, assigned responsibility and next expected update. </p>
        }
        layout {
            sequence: 60
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region actions (
        name: Page navigation
        type: staticContent
        layout {
            sequence: 80
            slot: body
        }
        appearance {
            template: @/buttons-container
            templateOptions: [
                #DEFAULT#
                t-ButtonRegion--slimPadding
                t-ButtonRegion--stickToBottom
            ]
        }
    )
    button navigate (
        buttonName: NAVIGATE
        label: Back to overview
        layout {
            sequence: 10
            region: @actions
            slot: next
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
    "sourceSha256": "47b1a3b1a5067d4b13f376a83204996a9a88669087730edc7f094930b525c88c",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
