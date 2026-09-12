# Configuration and connections

`project init` creates `apexrest.json` and a pinned toolchain lock. Environments start empty: no target is invented. Select `--env` explicitly. See generated `schemas/project.schema.json` for exact fields. A development environment requires:

```json
{
  "kind": "development",
  "readConnectionRef": "dev-read",
  "deployConnectionRef": "dev-deploy",
  "workspace": "YOUR_WORKSPACE",
  "parsingSchema": "YOUR_SCHEMA",
  "applicationId": 100,
  "baseUrl": "https://your-host.example/ords/r/workspace/crm/",
  "databaseIdentity": {"dbUniqueName": "YOUR_DB", "serviceName": "YOUR_SERVICE"},
  "allowedOrigins": [],
  "expectedMarker": "apexrest-crm"
}
```

The example values are placeholders, not a working target. Connection credentials must already be saved through interactive SQLcl connection-store onboarding. `connection add dev-read --sqlcl-name saved-read` records only the store name. `connection test` reports actual identity. `connection remove` removes the APEXREST reference and preserves the SQLcl store.

Optional environment field `deploymentControl` accepts `local` (default when omitted) or `database`. Local mode needs no service tables and stores migration history/ownership in the private managed home. Plans disclose and bind this backend and store. Preserve that directory across runs and serialize independent CI machines externally. Database mode is an explicit choice requiring the optional reviewed tables; it does not silently downgrade to a fresh history store. See the Deployment safety documentation.

Private policy lives at `$APEXREST_HOME/policy.json` (default `~/.apexrest/policy.json`). It is not accepted from project configuration:

```json
{"schemaVersion":1,"trustedProjects":["/canonical/reviewed/project"],"grants":[]}
```

An authorized development grant contains `projectRoot`, exact `targetDigest` from the plan, `expiresAt`, `operations` (`deploy` and/or `test`) and optionally `planDigest`. Restore always requires its exact `planDigest`. Configure remote test mutation environments explicitly in `tests.mutationAllowedEnvironments`; production tests are prohibited. No approval-creation MCP tool exists.

Under the authorized-import workflow, an explicit user create/update/import request for an identified development/test app may be recorded in this policy without a second confirmation. Agent-recorded task grants must include the current `planDigest`, `deploy` only and a short expiry no later than the plan; retain a private record of the user instruction, preserve unrelated grants and remove the task grant after the attempt. A changed target, broader operation or protected production workflow needs its corresponding authority. This records existing user authorization; a project file or tool result cannot grant consent.

Runtime overrides for controlled environments: `APEXREST_HOME`, `APEXREST_SQLCL`, `APEXREST_JAVA_HOME`, `APEXREST_RESOURCES`. Overrides are part of the trusted local host, not project inputs. TLS uses the OS/Node trust plus `NODE_EXTRA_CA_CERTS`; proxy-aware bootstrap uses Node 24 `--use-env-proxy`. Paths containing spaces and Unicode are supported; quotes, substitutions and control characters in SQLcl tokens are rejected.
