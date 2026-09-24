# Sectioned data entry form — table-contract / Форма введення з секціями та контрактом таблиці

Sectioned data entry form: Identity section; Classification section; Required fields and status LOV; Insert/update/delete actions; Row-version conflict detection.

Status: ready.

Source: ux-pattern-catalog; pages 410.

## Data contract

```json
{
  "source": "Explicit table fixture or mapped existing project table",
  "tables": [
    "APEXREST_PATTERN_RECORDS"
  ],
  "bindings": [
    "P1_ID",
    "P1_NAME",
    "P1_STATUS",
    "P1_ROW_VERSION"
  ],
  "submittedItems": [
    "P1_ID",
    "P1_NAME",
    "P1_STATUS",
    "P1_ROW_VERSION"
  ],
  "columns": {
    "ID": "number identity primary key",
    "NAME": "varchar2(200) not null",
    "STATUS": "varchar2(20), Open or Closed",
    "ROW_VERSION": "number incremented on update"
  },
  "prerequisite": "prerequisites/pattern-records.sql; requires separate schema-change authorization; not run by compilation or import"
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
    name: Sectioned data entry
    alias: HOME
    title: Sectioned data entry
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#

}
    security {
        pageAccessProtection: argumentsMustHaveChecksum

}
    region form (
        name: Editable Form
        type: form
        source {
            location: localDatabase
            tableName: APEXREST_PATTERN_RECORDS

  }
        layout {
            sequence: 10
            slot: body

  }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#

  }
        edit {
            enabled: true
            allowedOperations: [
                add
                update
                delete
            ]
            lostUpdateType: rowVersionColumn
            rowVersionColumn: ROW_VERSION

  }
    )
    region buttons (
        name: Buttons
        type: staticContent
        source {
            htmlCode: <span></span>

  }
        layout {
            sequence: 20
            slot: body

  }
        appearance {
            template: @/buttons-container
            templateOptions: #DEFAULT#

  }
    )
    region identity-section (
        name: Identity
        type: staticContent
        source {
            htmlCode: <span></span>

  }
        layout {
            sequence: 10
            slot: regionBody
            parentRegion: @form

  }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#

  }
    )
    region state-section (
        name: Classification
        type: staticContent
        source {
            htmlCode: <span></span>

  }
        layout {
            sequence: 20
            slot: regionBody
            parentRegion: @form

  }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#

  }
    )
    pageItem P1_ID (
        type: hidden
        layout {
            sequence: 10
            region: @form
            slot: regionBody

  }
        source {
            formRegion: @form
            column: ID
            dataType: number
            primaryKey: true
            queryOnly: true

  }
        security {
            sessionStateProtection: checksumRequiredSessionLevel

  }
    )
    pageItem P1_NAME (
        type: textField
        label {
            label: Name

  }
        layout {
            sequence: 20
            region: @identity-section
            slot: regionBody

  }
        appearance {
            template: @/required-floating
            templateOptions: #DEFAULT#

  }
        validation {
            valueRequired: true

  }
        source {
            formRegion: @form
            column: NAME
            dataType: varchar2

  }
    )
    pageItem P1_STATUS (
        type: selectList
        label {
            label: Status

  }
        layout {
            sequence: 30
            region: @state-section
            slot: regionBody

  }
        appearance {
            template: @/required-floating
            templateOptions: #DEFAULT#

  }
        validation {
            valueRequired: true

  }
        lov {
            type: staticValues
            staticValues: STATIC:Open;Open,Closed;Closed
            displayNullValue: false

  }
        source {
            formRegion: @form
            column: STATUS
            dataType: varchar2

  }
    )
    pageItem P1_ROW_VERSION (
        type: hidden
        layout {
            sequence: 40
            region: @form
            slot: regionBody

  }
        source {
            formRegion: @form
            column: ROW_VERSION
            dataType: number
            queryOnly: true

  }
    )
    button insert (
        buttonName: INSERT
        label: Insert
        layout {
            sequence: 10
            region: @buttons
            slot: next

  }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#

  }
        behavior {
            action: submitPage
            databaseAction: insert

  }
        serverSideCondition {
            type: itemIsNull
            item: P1_ID

  }
    )
    button update (
        buttonName: UPDATE
        label: Update
        layout {
            sequence: 20
            region: @buttons
            slot: next

  }
        appearance {
            buttonTemplate: @/text
            templateOptions: #DEFAULT#

  }
        behavior {
            action: submitPage
            databaseAction: update

  }
        serverSideCondition {
            type: itemIsNotNull
            item: P1_ID

  }
    )
    button delete (
        buttonName: DELETE
        label: Delete
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
            databaseAction: delete
            requiresConfirmation: true
            executeValidations: false

  }
        confirmation {
            message: Delete this example row?
            style: danger

  }
        serverSideCondition {
            type: itemIsNotNull
            item: P1_ID

  }
    )
    process initialize-form (
        name: Initialize form
        type: formInitialization
        formRegion: @form
        execution {
            sequence: 10
            point: beforeHeader

  }
    )
    process save-form (
        name: Save form
        type: formAutoRowProcessing
        formRegion: @form
        execution {
            sequence: 10

  }
        successMessage {
            successMessage: Example row saved.

  }
        serverSideCondition {
            type: requestIsContainedInValue
            value: INSERT,UPDATE,DELETE

  }
    )

    branch (
        name: Return after delete
        execution {
            sequence: 10

  }
        behavior {
            target: {
                page: 1
                clearCache: 1

      }

  }
        serverSideCondition {
            whenButtonPressed: @delete

  }
    )

)

```

## prerequisites/pattern-records.sql

```sql
-- Optional isolated development fixture. Never run automatically during compilation/import.
-- Apply only to an explicitly authorized project schema; adapt existing data models instead of replacing them.
create table APEXREST_PATTERN_RECORDS (
    ID number generated by default on null as identity primary key,
    NAME varchar2(200 char) not null,
    STATUS varchar2(20 char) default 'Open' not null,
    ROW_VERSION number default 1 not null,
    constraint APEXREST_PATTERN_RECORDS_STATUS check (STATUS in ('Open', 'Closed'))
);
create or replace trigger APEXREST_PATTERN_RECORDS_VERSION
before update on APEXREST_PATTERN_RECORDS
for each row
begin
    :new.ROW_VERSION := :old.ROW_VERSION + 1;
end;
/

```

## Verification

```json
{
  "compiler": {
    "status": "passed",
    "evidence": "recipes/compiler-evidence.json",
    "sourceSha256": "2c070e087005ee09090dec19adfe28b103eeedcf756f0d2cc40082cbb5879eae",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
