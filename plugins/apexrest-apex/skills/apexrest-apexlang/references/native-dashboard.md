# Native APEX dashboards with filters

Use this reference for native cards/charts driven by page items. Confirm the exact syntax against the pinned compiler's reference or a current Oracle export; these are behavior requirements, not a substitute grammar.

- Prefer a native Dynamic Action to refresh the affected regions when filters only change displayed data. Keep full page submit for behavior that needs processing or navigation.
- Submit each SQL-dependent filter item with every affected region or chart series (`pageItemsToSubmit` in the supported APEXlang source). Refresh all dependent cards, charts and date labels together so they describe the same filter state.
- Use an explicit local database SQL source when the native component supports it. Match the nesting of Dynamic Action actions in the native example; do not add an event property already supplied by the parent action. Resolve compiler warnings that indicate a requested behavior was ignored.
- Put date-range text in a refreshed region, or refresh its own component explicitly. A display-only item outside refreshed regions can retain the old range even when the amounts change.
- Check chart readability with actual labels. Horizontal bars are useful for long category names; choose orientation from the data rather than assuming a chart is empty while it initializes.

Before import, reconcile the source queries for the default filters, a changed period, a single entity and an empty result where applicable. In the browser, wait for the affected regions to finish loading, compare those same scenarios, then restore the intended default view. Do not re-import merely because a chart briefly shows its loading or empty placeholder.
