# Top menu / Верхнє меню навігації застосунку

Native top menu with three local pages and no inert preview targets.

Status: ready.

Source: universal-theme-reference; pages 1101, 1102, 1115, 1120, 1121, 1122, 1123, 1124, 1305.

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
    navigationMenu {
        overrideUserInterfaceLevel: true
        list: @workspace-menu
        listPosition: top
        listTemplate: @/top-navigation-menu
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region content (
        name: Overview
        type: staticContent
        source {
            htmlCode: <p>Overview is an original local navigation destination.</p>
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
    navigationMenu {
        overrideUserInterfaceLevel: true
        list: @workspace-menu
        listPosition: top
        listTemplate: @/top-navigation-menu
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region content (
        name: Work queue
        type: staticContent
        source {
            htmlCode: <p>Work queue is an original local navigation destination.</p>
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
    navigationMenu {
        overrideUserInterfaceLevel: true
        list: @workspace-menu
        listPosition: top
        listTemplate: @/top-navigation-menu
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region content (
        name: Completed
        type: staticContent
        source {
            htmlCode: <p>Completed is an original local navigation destination.</p>
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
)

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "06b6cb208de1301ee14795843760c5e3e0959f1662170e0d9abd175339354bc5",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
