# Contributing

Use Node 24 LTS and `npm ci`. Keep TypeScript strict, ESM and public CLI/MCP schemas synchronized. Execute the mandatory local checks in README. Change source and behavior tests together; never replace real Oracle/native smoke with a fixture.

Preserve Oracle-generated `.apex` and IDs. Use reviewed documentation fragments for the selected compiler version. Dependency/schema upgrades need pinned URLs/hashes, license review, an ADR and real compatibility evidence. Do not alter the original build specification as a way of changing acceptance.

Local release builds are unsigned beta candidates until all required evidence is bound to the exact source digest. Publishing, tagging, credentials and server provisioning are separate maintainer actions. Submit focused changes with test commands, environment and unresolved limitations.
