# Local release {{version}}

This build produces native ZIPs, platform runtime ZIPs, bootstraps, checksums, a CycloneDX SBOM, provenance and a static site ZIP. Runtime ZIPs contain APEXREST JavaScript and permitted dependency notices; Oracle binaries are downloaded separately after consent.

The generated `releases/manifest.json` binds installer and native artifact versions/checksums. The full local manifest and release-readiness report are in `dist/releases/`. Unsigned beta artifacts are not a published stable release.

The repository marketplace supports installation from source control today. Stable release qualification separately requires source-bound native-host evidence on each target platform and the remaining Oracle, utPLSQL and authenticated application test evidence. Local tests do not replace those broader release gates. Dry run never creates tags, releases or npm packages.
