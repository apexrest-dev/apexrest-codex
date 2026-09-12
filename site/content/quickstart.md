# From source to evidence

## 1. Generate and validate

```sh
apexrest doctor --json
apexrest project init ./crm --template customer-crm
apexrest apex validate --project ./crm --json
```

Review the project and add its canonical path to private policy before executing project code. Generation uses the real Oracle compiler. The template includes report, modal form, dashboard, validation package and SQL/browser tests.

## 2. Identify the target

Store read/deploy connections locally in SQLcl, register their names with `connection add`, and configure an explicit environment. Workspace, schema, app ID, DB unique name and service must match actual identity. Never paste a password into chat.

## 3. Review a plan

```sh
apexrest deploy plan --project ./crm --env dev --out plans/dev.json
apexrest deploy apply --project ./crm --plan plans/dev.json
```

Deploy works on a clean supported APEX installation without service tables. Local migration history and coordination are the default; preserve the managed home between runs and serialize independent CI runners. Database-backed coordination is an explicit optional mode. Apply requires a matching external policy grant. A changed source or target needs a new plan. Production needs external signed CI approval.

## 4. Exercise the app

```sh
apexrest test auth --project ./crm --env dev
apexrest test all --project ./crm --env dev --json
```

Use a dedicated test user, explicit mutation permission and synthetic records. Required empty, skipped or blocked suites fail. The local beta contains test code; live application results remain to be verified on an authorized target.
