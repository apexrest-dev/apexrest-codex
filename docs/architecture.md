# Architecture

The CLI parser and the fourteen-tool MCP server dispatch to one strict Zod-validated core service. Core owns project/environment resolution, references, SQLcl, deployment, tests, artifacts and background jobs. Installer owns vendor downloads, extraction, managed dependencies and native registration. Testkit provides Playwright helpers; it does not impersonate Oracle.

`plugins/metadata.json` drives the two independent package layouts. `scripts/build-plugin.mjs` bundles ESM runtime and copies eight skills, reference fragments, schemas, templates and toolchain locks. No MCP startup path refers back to this repository or downloads anything. Installer specializes a private copied manifest to absolute Node and runtime paths. There is no duplicate global MCP server.

Long MCP tasks return a job ID, continue in a detached CLI worker and write bounded status. Poll with `apexrest_job_status`; request cancellation with `apexrest_job_cancel`. A missing heartbeat is outcome_unknown, not proof of rollback. Workers time out after 15 minutes. SQLcl processes time out with classified diagnostics even if SQLcl printed an error and exited zero.

References are indexed data from a pinned reviewed Oracle snapshot, loaded in bounded fragments on request. Upstream Oracle router instructions and arbitrary scripts are not installed. Database descriptions, source comments and test output are untrusted data, not instructions to expand permissions.

Filesystem boundaries reject traversal, symlinks and special files. State uses atomic writes and exclusive locks. Process execution is shell-free. Configuration and source hashes, DB identity, migration history and exported app content bind deployment plans.
