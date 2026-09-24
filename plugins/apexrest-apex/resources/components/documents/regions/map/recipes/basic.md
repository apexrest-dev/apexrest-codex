# Map with one point layer

Map with one point layer with self-contained synthetic data and explicit component mappings.

Status: ready.

Source pages: 1906. Component: component:regions/map.

## Data contract

```json
{
  "source": "synthetic DUAL row",
  "columns": [
    {
      "name": "ID",
      "type": "number"
    },
    {
      "name": "TITLE",
      "type": "varchar2"
    },
    {
      "name": "GEOMETRY",
      "type": "SDO_GEOMETRY"
    }
  ],
  "tables": [
    "DUAL"
  ],
  "runtimeDependencies": [
    "Oracle Spatial SDO_GEOMETRY/SDO_POINT_TYPE",
    "APEX built-in map background network access"
  ],
  "bindings": [],
  "submittedItems": [],
  "writes": false
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
        name: Map
        type: map
        source {
            location: localDatabase
            type: sqlQuery
            sqlQuery:
                ```sql
                select 1 ID, 'Example location' TITLE, sdo_geometry(2001, 4326, sdo_point_type(13.4, 52.5, null), null, null) GEOMETRY from dual
                ```
        }
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
        map {
            background: builtIn
            standard: oracleWorldMap
        }
        layer locations (
            name: Locations
            layout {
                sequence: 10
            }
            source {
                location: regionSource
            }
            columnMapping {
                geometryColumn: GEOMETRY
            }
            tooltip {
                advancedFormatting: true
                htmlExpression: &TITLE!HTML.
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
    "sourceSha256": "b18bc97958051635bc78d77284997dd0cc5a3aa349242cce3dcfc44a1e419e04",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile again after adapting. Compiler success is not SQL, imported application or browser evidence.
