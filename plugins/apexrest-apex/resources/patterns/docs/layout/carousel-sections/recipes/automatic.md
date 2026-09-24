# Content carousel: automatic / Карусель змістових секцій з автоматичним перемиканням

Three original nested content sections with native slide transition and ten-second automatic progression.

Status: ready.

Source: universal-theme-reference; pages 1205.

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
    name: Service topics
    alias: HOME
    title: Service topics
    appearance {
        pageTemplate: @/standard
        templateOptions: #DEFAULT#
    }
    security {
        pageAccessProtection: argumentsMustHaveChecksum
    }
    region topics (
        name: Service topics
        type: staticContent
        layout {
            sequence: 10
            slot: body
        }
        appearance {
            template: @/carousel-container
            templateOptions: [
                #DEFAULT#
                t-Region--carouselSlide
                js-cycle10s
                t-Region--hiddenOverflow
            ]
        }
    )
    region intake (
        name: Intake
        type: staticContent
        source {
            htmlCode: <p>Record the request and confirm its scope.</p>
        }
        layout {
            sequence: 10
            parentRegion: @topics
            slot: slides
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region delivery (
        name: Delivery
        type: staticContent
        source {
            htmlCode: <p>Assign a responsible team and review progress.</p>
        }
        layout {
            sequence: 20
            parentRegion: @topics
            slot: slides
        }
        appearance {
            template: @/standard
            templateOptions: #DEFAULT#
        }
    )
    region completion (
        name: Completion
        type: staticContent
        source {
            htmlCode: <p>Confirm the outcome and document the next steps.</p>
        }
        layout {
            sequence: 30
            parentRegion: @topics
            slot: slides
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
    "sourceSha256": "e4c48945fdceb27b07ecf43104ac9fcce77ccb130b1da344aeafd52e7984d789",
    "scaffoldSha256": "a7570417d18c1e496e702fa199d3055cec72d5caf7539db71ca300992c1ce7c8",
    "mmdVersion": "26.1.0+3102"
  },
  "sql": "not-run",
  "import": "not-run",
  "browser": "not-run"
}
```

Compile after adaptation. SQL execution, import and browser checks are separate evidence.
