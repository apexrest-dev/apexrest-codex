# Local release {{version}}

This build produces native ZIPs, platform runtime ZIPs, bootstraps, checksums, a CycloneDX SBOM, provenance and a static site ZIP. Runtime ZIPs contain APEXREST JavaScript and permitted dependency notices; Oracle binaries are downloaded separately after consent.

The generated `releases/manifest.json` binds installer and native artifact versions/checksums. The full local manifest and release-readiness report are in `dist/releases/`. Unsigned beta artifacts are not a published stable release.

Stable readiness is blocked without native-host evidence on each target platform and actual Oracle deployment, utPLSQL and authenticated browser evidence bound to current sources. Dry run never creates tags, releases or npm packages.
