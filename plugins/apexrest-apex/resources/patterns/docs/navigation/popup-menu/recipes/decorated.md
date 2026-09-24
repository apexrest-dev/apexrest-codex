# Popup navigation: decorated / Спливне меню навігації з піктограмами та оформленням

Native menu trigger, nested entries and local routes with icons, separator and callout.

Status: ready.

Source: universal-theme-reference; pages 1306.

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
    name: Workspace navigation
    alias: HOME
    title: Workspace navigation
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region intro (
        name: Workspace navigation
        type: staticContent
        source {
            htmlCode: <p>Choose a destination from the menu.</p>
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
    region popup (
        name: Destinations
        type: list
        source {
            list: @workspace-menu
        }
        layout {
            sequence: 20
            slot: body
        }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#
        }
        advanced {
            htmlDomId: workspace_popup
        }
        componentAppearance {
            listTemplate: @/menu-popup
            templateOptions: [
                #DEFAULT#
                js-menu-callout
            ]
        }
    )
    button open-menu (
        buttonName: OPEN_MENU
        label: Choose destination
        layout {
            sequence: 10
            region: @intro
            slot: next
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: definedByDynamicAction
        }
        advanced {
            customAttributes: data-menu="workspace_popup_menu"
        }
    )
)

```

## shared-components/lists.apx

```apexlang
list navigation-bar (
    name: Navigation Bar
    entry --- (
        label: ---
        layout {
            sequence: 20
            parentEntry: @app-user
        }
        link {
            target: {
                type: url
                url: separator
            }
        }
        serverSideCondition {
            type: userIsAuthenticated
        }
    )
    entry app-user (
        label: &APP_USER.
        icon {
            imageIconCssClasses: fa-user
        }
        layout {
            sequence: 10
        }
        link {
            target: {
                type: url
                url: #
            }
        }
        userDefinedAttributes {
            2: has-username
        }
    )
    entry sign-out (
        label: Sign Out
        icon {
            imageIconCssClasses: fa-sign-out
        }
        layout {
            sequence: 30
            parentEntry: @app-user
        }
        link {
            target: {
                type: url
                url: &LOGOUT_URL.
            }
        }
        serverSideCondition {
            type: userIsAuthenticated
        }
    )
)
list navigation-menu (
    name: Navigation Menu
    entry home (
        label: Home
        icon {
            imageIconCssClasses: fa-home
        }
        layout {
            sequence: 10
        }
        link {
            target: {
                page: 1
            }
        }
    )
)
list workspace-menu (
    name: Workspace menu
    entry overview (
        label: Overview
        layout {
            sequence: 10
        }
        icon {
            imageIconCssClasses: fa-home
        }
        link {
            target: {
                page: 1
            }
        }
    )
    entry work (
        label: Work queue
        layout {
            sequence: 20
        }
        icon {
            imageIconCssClasses: fa-list
        }
        link {
            target: {
                page: 2
            }
        }
    )
    entry completed (
        label: Completed
        layout {
            sequence: 30
            parentEntry: @work
        }
        icon {
            imageIconCssClasses: fa-list
        }
        link {
            target: {
                page: 3
            }
        }
    )
    entry divider (
        label: ---
        layout {
            sequence: 15
        }
        link {
            target: {
                type: url
                url: separator
            }
        }
    )
)

```

## pages/p00002-page-2.apx

```apexlang
page 2 (
    name: Work queue
    alias: PAGE-2
    title: Work queue
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region content (
        name: Work queue
        type: staticContent
        source {
            htmlCode: <p>This local page is a working menu destination.</p>
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
    button home (
        buttonName: HOME
        label: Return to menu
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
                page: 1
            }
        }
    )
)

```

## pages/p00003-page-3.apx

```apexlang
page 3 (
    name: Completed
    alias: PAGE-3
    title: Completed
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region content (
        name: Completed
        type: staticContent
        source {
            htmlCode: <p>This local page is a working menu destination.</p>
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
    button home (
        buttonName: HOME
        label: Return to menu
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
    "sourceSha256": "f9750a9176dee7c1a6767e7dc139965eb39dbef41c7679aff531b5e5fa936834",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
