# Item Selection: reviewed compositions

Every listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.

```json
{
  "sourceId": "ux-pattern-catalog",
  "pageId": 330,
  "pageName": "Item Selection",
  "classification": "pattern",
  "sourceSha256": "4fc701862cef219a06edc904cc901fd6a4abff98cd446266546aa218a4fd904c",
  "patternIds": [
    "pattern:selection/list-detail"
  ],
  "componentIds": [
    "component:template-components/content-row",
    "component:regions/faceted-search",
    "component:reports/value-attribute-pairs-column",
    "component:template-components/metric-card"
  ],
  "reason": "Split list and detail coordinates selected identity, filter state, dependent refresh and empty selection.",
  "variants": [
    {
      "name": "Native Content Row single selection and detail refresh",
      "disposition": "pattern",
      "patternIds": [
        "pattern:selection/list-detail"
      ],
      "reason": "The added AJAX variant uses one client-owned selected key and an always-present detail target."
    },
    {
      "name": "Same-app page navigation",
      "disposition": "pattern",
      "patternIds": [
        "pattern:selection/list-detail"
      ],
      "reason": "Existing basic recipe offers a separate checksum-signed page-navigation variant."
    },
    {
      "name": "Filtered/paginated selection reconciliation",
      "disposition": "unresolved",
      "patternIds": [
        "pattern:selection/list-detail"
      ],
      "reason": "Source external controller reconciles separate UI/canonical items after filtering and pagination; that controller is not redistributed or claimed as independently verified."
    },
    {
      "name": "Detail facts, activity, metrics and related rows",
      "disposition": "component",
      "patternIds": [],
      "reason": "These panels consume the selected record and must reapply authorization."
    },
    {
      "name": "Generic contextual commands",
      "disposition": "unresolved",
      "patternIds": [],
      "reason": "Source placeholder links and generic command buttons do not define project-specific commands; a working operation is not claimed."
    }
  ]
}
```
