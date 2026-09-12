import { build } from 'esbuild';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
await mkdir('.apexrest/schema-build', { recursive: true });
await build({
  stdin: {
    contents: `import {z} from 'zod';import {projectSchema,policySchema} from './packages/core/src/config.ts';import{deployPlanSchema}from'./packages/core/src/deploy.ts';import{schemas}from'./packages/core/src/operations.ts';import{lockSchema}from'./packages/installer/src/toolchain.ts';console.log(JSON.stringify({project: z.toJSONSchema(projectSchema), policy:z.toJSONSchema(policySchema), 'deploy-plan':z.toJSONSchema(deployPlanSchema), 'toolchain-lock':z.toJSONSchema(lockSchema), operations:Object.fromEntries(Object.entries(schemas).map(([k,s])=>[k,z.toJSONSchema(s)]))}));`,
    resolveDir: process.cwd(),
  },
  outfile: '.apexrest/schema-build/generate.mjs',
  bundle: true,
  platform: 'node',
  format: 'esm',
  packages: 'external',
});
const r = spawnSync(process.execPath, ['.apexrest/schema-build/generate.mjs'], { encoding: 'utf8' });
if (r.status !== 0) throw new Error(r.stderr);
for (const [name, schema] of Object.entries(JSON.parse(r.stdout)))
  await writeFile('schemas/' + name + '.schema.json', JSON.stringify(schema, null, 2) + '\n');
