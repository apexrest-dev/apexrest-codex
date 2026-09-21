---
name: apexrest-review
description: Review APEXREST changes for source preservation, deployment risk, security and release readiness.
---

Pass the user's absolute workspace as `project` on project-scoped calls.
Compare the exact diff, immutable plan and target. Check Oracle IDs/MMD, shared components, migration checksums, private credential boundaries and required test results. Separate implemented code from fixture coverage and actual native/Oracle evidence. Reject stale or missing evidence for stable release. Verify checksums and packaged paths outside the repository. No publication or server mutation follows from a review request.

For user-visible changes, follow the [in-app browser verification rule](../apexrest-test/SKILL.md#in-app-browser-verification) and report missing access or observations as a verification gap.
