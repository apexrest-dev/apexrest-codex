# Three-step modal wizard — original example / Модальний майстер із трьома кроками

Guide the user through three included modal pages with a progress list, previous/next navigation, cancel and a real finish-close process.

Status: ready.

Source: universal-theme-reference; pages 1920, 1921, 1922.

## Data contract

```json
{
  "source": "Original static instructional content; no persistent writes or external resources.",
  "tables": [],
  "bindings": [],
  "submittedItems": []
}
```

## Adaptation

- Use free page numbers; rename page items, static IDs, region/action identifiers and all references together.
- Merge only the selected composition into the destination application; preserve authentication, authorization and existing settings.
- Keep source SQL projections, type mappings and all local links closed after adaptation.
- Merge workflow-progress into existing shared lists without replacing the destination navigation lists.

Overlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.

## pages/p00001-home.apx

```apexlang
page 1 (
    name: Guided review
    alias: HOME
    title: Guided review
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region launch (
        name: Review guide
        type: staticContent
        source {
            htmlCode: <p>Walk through three review steps and finish by returning to this page.</p>
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
    button start (
        buttonName: START
        label: Start review
        layout {
            sequence: 10
            region: @launch
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

## pages/p00002-step-1.apx

```apexlang
page 2 (
    name: Review step 1
    alias: STEP-1
    title: Review step 1
    appearance {
        pageMode: modalDialog
        dialogTemplate: @/wizard-modal-dialog
        templateOptions: #DEFAULT#
    }
    dialog {
        chained: true
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region progress (
        name: Review progress
        type: list
        source {
            list: @workflow-progress
        }
        layout {
            sequence: 10
            slot: wizardProgressBar
        }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            listTemplate: @/wizard-progress
            templateOptions: t-WizardSteps--displayLabels
        }
    )
    region step (
        name: Step 1 - Scope
        type: staticContent
        source {
            htmlCode: <p>Review the scope and the record to be considered.</p>
        }
        layout {
            sequence: 10
            slot: wizardBody
        }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#
        }
    )
    region buttons (
        name: Wizard actions
        type: staticContent
        layout {
            sequence: 20
            slot: wizardButtons
        }
        appearance {
            template: @/buttons-container
            templateOptions: #DEFAULT#
        }
    )
    button cancel (
        buttonName: CANCEL
        label: Cancel
        layout {
            sequence: 10
            region: @buttons
            slot: close
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: definedByDynamicAction
        }
    )
    dynamicAction dismiss-dialog (
        name: Close the dialog
        execution {
            sequence: 10
        }
        when {
            event: click
            selectionType: button
            button: @cancel
        }
        action close (
            action: cancelDialog
            execution {
                sequence: 10
                fireOnInit: false
            }
        )
    )
    button next (
        buttonName: NEXT
        label: Next
        layout {
            sequence: 30
            region: @buttons
            slot: next
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: redirectThisApp
            target: {
                page: 3
            }
        }
    )
)

```

## pages/p00003-step-2.apx

```apexlang
page 3 (
    name: Review step 2
    alias: STEP-2
    title: Review step 2
    appearance {
        pageMode: modalDialog
        dialogTemplate: @/wizard-modal-dialog
        templateOptions: #DEFAULT#
    }
    dialog {
        chained: true
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region progress (
        name: Review progress
        type: list
        source {
            list: @workflow-progress
        }
        layout {
            sequence: 10
            slot: wizardProgressBar
        }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            listTemplate: @/wizard-progress
            templateOptions: t-WizardSteps--displayLabels
        }
    )
    region step (
        name: Step 2 - Checklist
        type: staticContent
        source {
            htmlCode: <p>Confirm that the required information is available.</p>
        }
        layout {
            sequence: 10
            slot: wizardBody
        }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#
        }
    )
    region buttons (
        name: Wizard actions
        type: staticContent
        layout {
            sequence: 20
            slot: wizardButtons
        }
        appearance {
            template: @/buttons-container
            templateOptions: #DEFAULT#
        }
    )
    button cancel (
        buttonName: CANCEL
        label: Cancel
        layout {
            sequence: 10
            region: @buttons
            slot: close
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: definedByDynamicAction
        }
    )
    dynamicAction dismiss-dialog (
        name: Close the dialog
        execution {
            sequence: 10
        }
        when {
            event: click
            selectionType: button
            button: @cancel
        }
        action close (
            action: cancelDialog
            execution {
                sequence: 10
                fireOnInit: false
            }
        )
    )
    button previous (
        buttonName: PREVIOUS
        label: Previous
        layout {
            sequence: 20
            region: @buttons
            slot: previous
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
    button next (
        buttonName: NEXT
        label: Next
        layout {
            sequence: 30
            region: @buttons
            slot: next
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: redirectThisApp
            target: {
                page: 4
            }
        }
    )
)

```

## pages/p00004-step-3.apx

```apexlang
page 4 (
    name: Review step 3
    alias: STEP-3
    title: Review step 3
    appearance {
        pageMode: modalDialog
        dialogTemplate: @/wizard-modal-dialog
        templateOptions: #DEFAULT#
    }
    dialog {
        chained: true
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region progress (
        name: Review progress
        type: list
        source {
            list: @workflow-progress
        }
        layout {
            sequence: 10
            slot: wizardProgressBar
        }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#
        }
        componentAppearance {
            listTemplate: @/wizard-progress
            templateOptions: t-WizardSteps--displayLabels
        }
    )
    region step (
        name: Step 3 - Review
        type: staticContent
        source {
            htmlCode: <p>The walkthrough is complete. Finish to return to the originating page.</p>
        }
        layout {
            sequence: 10
            slot: wizardBody
        }
        appearance {
            template: @/blank-with-attributes
            templateOptions: #DEFAULT#
        }
    )
    region buttons (
        name: Wizard actions
        type: staticContent
        layout {
            sequence: 20
            slot: wizardButtons
        }
        appearance {
            template: @/buttons-container
            templateOptions: #DEFAULT#
        }
    )
    button cancel (
        buttonName: CANCEL
        label: Cancel
        layout {
            sequence: 10
            region: @buttons
            slot: close
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: definedByDynamicAction
        }
    )
    dynamicAction dismiss-dialog (
        name: Close the dialog
        execution {
            sequence: 10
        }
        when {
            event: click
            selectionType: button
            button: @cancel
        }
        action close (
            action: cancelDialog
            execution {
                sequence: 10
                fireOnInit: false
            }
        )
    )
    button previous (
        buttonName: PREVIOUS
        label: Previous
        layout {
            sequence: 20
            region: @buttons
            slot: previous
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: redirectThisApp
            target: {
                page: 3
            }
        }
    )
    button finish (
        buttonName: FINISH
        label: Finish
        layout {
            sequence: 30
            region: @buttons
            slot: next
        }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#
        }
        behavior {
            action: submitPage
        }
    )
    process finish-review (
        name: Finish the review walkthrough
        type: closeDialog
        settings {
            showSuccessMessages: false
        }
        execution {
            sequence: 10
        }
        serverSideCondition {
            whenButtonPressed: @finish
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


list workflow-progress (
    name: Workflow progress
    entry step-1 (
        label: Scope
        layout {
            sequence: 10
        }
        link {
            target: {
                page: 2
            }
        }
    )
    entry step-2 (
        label: Checklist
        layout {
            sequence: 20
        }
        link {
            target: {
                page: 3
            }
        }
    )
    entry step-3 (
        label: Review
        layout {
            sequence: 30
        }
        link {
            target: {
                page: 4
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
    "sourceSha256": "bdacea96f22010b65699180912ccf5996464af64c037def99c2caef6bd5df1de",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
