# Pattern compiler scaffold

Offline validation fixture; reuse destination authentication and configuration.

## .apex/apexlang.json

```json
{
  "mmdVersion" : "26.1.0+3102"
}
```

## application.apx

```apexlang
app APEXREST-BLANK (
    name: APEXREST Blank
    logo {
        type: text
        text: &APP_TITLE.
    }
    navigation {
        homeUrl: {
            page: 1
        }
        loginUrl: {
            page: LOGIN
        }
    }
    navigationMenu {
        listTemplate: @/side-navigation-menu
        templateOptions: [
            #DEFAULT#
            js-defaultCollapsed
            js-navCollapsed--hidden
            t-TreeNav--styleA
        ]
        list: @navigation-menu
    }
    navigationBar {
        list: @navigation-bar
        listTemplate: @/navigation-bar
        templateOptions: #DEFAULT#
    }
    userInterface {
        currentTheme: @universal-theme
        globalPage: 0
        addBuiltWithApexToFooter: false
    }
    appFormatMasks {
        date: DS
        timestamp: DS
        timestampTimeZone: DS
    }
    authentication {
        scheme: @oracle-apex-accounts
    }
    runtime {
        allowFeedback: true
        compatibilityMode: 24.2
    }
)


```

## pages/p00000-global-page.apx

```apexlang
page 0 (
    name: Global Page
)


```

## pages/p09999-login.apx

```apexlang
page 9999 (
    name: Login Page
    alias: LOGIN
    title: &APP_TITLE. - Log In
    appearance {
        pageTemplate: @/login
        templateOptions: #DEFAULT#
    }
    navigation {
        warnOnUnsavedChanges: false
    }
    security {
        authentication: public
        pageAccessProtection: argumentsMustHaveChecksum
        formAutoComplete: false
    }

    region app-name (
        name: Login
        title: &APP_TITLE.
        type: staticContent
        layout {
            sequence: 10
            slot: contentBody
        }
        appearance {
            template: @/login
            templateOptions: #DEFAULT#
        }
    )

    pageItem P9999_PASSWORD (
        type: password
        label {
            label: Password
            alignment: right
        }
        layout {
            sequence: 20
            region: @app-name
            slot: regionBody
            alignment: left
        }
        appearance {
            template: @/hidden
            templateOptions: #DEFAULT#
            icon: fa-key
            width: 40
            valuePlaceholder: Password
        }
        validation {
            maxLength: 100
        }
        advanced {
            customAttributes: autocomplete="current-password"
        }
        sessionState {
            storage: request
        }
    )

    pageItem P9999_REMEMBER (
        type: checkbox
        label {
            label: Remember username
            alignment: right
        }
        layout {
            sequence: 30
            region: @app-name
            slot: regionBody
            alignment: left
        }
        appearance {
            template: @/hidden
            templateOptions: #DEFAULT#
        }
        serverSideCondition {
            type: expression
            plsqlExpression: apex_authentication.persistent_cookies_enabled
        }
    )

    pageItem P9999_USERNAME (
        type: textField
        label {
            label: Username
            alignment: right
        }
        layout {
            sequence: 10
            region: @app-name
            slot: regionBody
            alignment: left
        }
        appearance {
            template: @/hidden
            templateOptions: #DEFAULT#
            icon: fa-user
            width: 40
            valuePlaceholder: Username
        }
        validation {
            maxLength: 100
        }
        advanced {
            customAttributes: autocomplete="username"
        }
        sessionState {
            storage: request
        }
    )

    button login (
        buttonName: LOGIN
        label: Sign In
        layout {
            sequence: 40
            region: @app-name
            slot: next
        }
        appearance {
            buttonTemplate: @/text
            hot: true
            templateOptions: #DEFAULT#
        }
        behavior {
            warnOnUnsavedChanges: doNotCheck
        }
    )

    process clear-page-s-cache (
        name: Clear Page(s) Cache
        type: clearSessionState
        execution {
            sequence: 30
        }
        advanced {
            executionMappingIdentifier: 3073906448829089
        }
    )

    process get-username-cookie (
        name: Get Username Cookie
        type: executeCode
        source {
            plsqlCode:
                ```plsql
                :P9999_USERNAME := apex_authentication.get_login_username_cookie;
                :P9999_REMEMBER := case when :P9999_USERNAME is not null then 'Y' end;
                ```
        }
        execution {
            sequence: 10
            point: beforeHeader
        }
        advanced {
            executionMappingIdentifier: 3073526297829089
        }
    )

    process login (
        name: Login
        type: invokeApi
        invoke {
            package: APEX_AUTHENTICATION
            procedureOrFunction: LOGIN
        }
        execution {
            sequence: 20
        }
        advanced {
            executionMappingIdentifier: 3070275942829086
        }

        parameter p_password (
            value {
                type: item
                item: P9999_PASSWORD
            }
            advanced {
                displaySequence: 2
            }
        )

        parameter p_set_persistent_auth (
            parameter {
                dataType: boolean
                hasDefault: true
            }
            value {
                type: apiDefault
            }
            advanced {
                displaySequence: 3
            }
        )

        parameter p_username (
            value {
                type: item
                item: P9999_USERNAME
            }
            advanced {
                displaySequence: 1
            }
        )

    )

    process set-username-cookie (
        name: Set Username Cookie
        type: invokeApi
        invoke {
            package: APEX_AUTHENTICATION
            procedureOrFunction: SEND_LOGIN_USERNAME_COOKIE
        }
        execution {
            sequence: 10
        }
        advanced {
            executionMappingIdentifier: 3072157592829088
        }

        parameter p_consent (
            parameter {
                dataType: boolean
            }
            value {
                type: item
                item: P9999_REMEMBER
            }
            advanced {
                displaySequence: 2
            }
        )

        parameter p_username (
            value {
                type: expression
                plsqlExpression: lower( :P9999_USERNAME )
            }
            advanced {
                displaySequence: 1
            }
        )

    )

)


```

## shared-components/authentications.apx

```apexlang
authentication oracle-apex-accounts (
    name: Oracle APEX Accounts
    type: oracleApexAccounts
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


```

## shared-components/themes/universal-theme/theme.apx

```apexlang
theme universal-theme (
    name: Universal Theme
    themeNumber: 42
    baseTheme: ut-26.1
    style {
        currentThemeStyle: @/iris
    }
    javaScript {
        fileUrls: [
            #APEX_FILES#libraries/apex/#MIN_DIRECTORY#widget.stickyWidget#MIN#.js?v=#APEX_VERSION#
            #THEME_FILES#js/theme42#MIN#.js?v=#APEX_VERSION#
        ]
    }
    css {
        fileUrls: #THEME_FILES#css/Core#MIN#.css?v=#APEX_VERSION#
    }
    componentDefaults {
        page: @/standard
        navigationBarList: @/navigation-bar
        navigationMenuListPosition: side
        navigationMenuListTop: @/top-navigation-menu
        navigationMenuListSide: @/side-navigation-menu
        loginPage: @/login
        errorPage: @/login
        printerFriendlyPage: @/standard
        breadcrumb: @/breadcrumb
        button: @/text
        defaultLabel: @/optional-floating
        optionalLabel: @/optional-floating
        requiredLabel: @/required-floating
        list: @/links-list
        region: @/standard
        classicReport: @/standard
    }
    regionDefaults {
        breadcrumbs: @/title-bar
        charts: @/standard
        forms: @/standard
        lists: @/standard
        reports: @/standard
        wizards: @/standard
        interactiveReports: @/interactive-report
    }
    dialogDefaults {
        dialogContentRegion: @/blank-with-attributes
        dialogButtonRegion: @/buttons-container
        dialogPage: @/modal-dialog
    }
    icons {
        library: fontApex
    }
    advanced {
        filePrefix: #APEX_FILES#themes/theme_42/26.1/
        identifier: UNIVERSAL_THEME
    }
)


```
