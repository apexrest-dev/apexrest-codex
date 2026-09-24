# Tabs list

Tabs list with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 1907. Component: component:lists/tabs.

## Data contract

```json
{
  "source": "static",
  "tables": [],
  "bindings": [],
  "submittedItems": []
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
    region example (
        name: Example List
        type: list
        source {
            list: @example-list
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
            listTemplate: @/tabs
            templateOptions: #DEFAULT#
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


list example-list (
    name: Example List
    entry first (
        label: First entry
        layout {
            sequence: 10
        }
        link {
            target: {
                page: 1
            }
        }
        icon {
            imageIconCssClasses: fa-home
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
    "sourceSha256": "89bf2628503ec3ef034a291767af5c7f8efa0925cf7c8c47cb609e7500b019cb",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
