---
name: apexrest-review
description: Review APEXREST changes for source preservation, deployment risk, security and release readiness.
---

Pass the user's absolute workspace as `project` on project-scoped calls.
Compare the exact diff, immutable plan and target. Check Oracle IDs/MMD, shared components, migration checksums, private credential boundaries and required test results. Separate implemented code from fixture coverage and actual native/Oracle evidence. Reject stale or missing evidence for stable release. Verify checksums and packaged paths outside the repository. No publication or server mutation follows from a review request.

For changed Media List, Comments, Metric Card, Cards, Smart Filters/Search or Region Display Selector components, read only the relevant [component contract notes](../apexrest-apexlang/references/component-contracts.md). Check complete source projections, family-specific bindings/actions and target-build support; theme inventory alone is not compiler evidence.

For user-visible changes, follow the [in-app browser verification rule](../apexrest-test/SKILL.md#in-app-browser-verification) and report missing access or observations as a verification gap.
