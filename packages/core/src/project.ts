import path from 'node:path';
import { cp, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { contained, exists, inventory, writeJson, atomicWrite } from './fs.ts';
import { loadProject, parse, refName } from './config.ts';
import type { ProjectContext, ProjectConfig } from './config.ts';
import { Fault } from './result.ts';
import { OracleAdapter, installSources } from './oracle.ts';
export function resourceRoot() {
  return (
    process.env.APEXREST_RESOURCES ??
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../resources')
  );
}
export async function projectInit(
  directory: string,
  template: 'blank-app' | 'customer-crm' | 'existing-app',
  alias: string,
) {
  parse(refName, alias);
  const root = path.resolve(directory);
  if (await exists(root))
    throw new Fault('LOCAL_EDITS_CONFLICT', 'Project init requires a new directory.', 5, 'conflict');
  await mkdir(root, { recursive: true, mode: 0o700 });
  const config: ProjectConfig = {
    schemaVersion: 1,
    projectId: alias,
    application: { sourceDir: 'src/apex/' + alias, alias },
    database: {
      migrationsDir: 'src/database/migrations',
      packagesDir: 'src/database/packages',
      testsDir: 'tests/sql',
    },
    toolchain: { lockFile: 'apexrest.toolchain.lock.json' },
    environments: {},
    tests: {
      unitDir: 'tests/unit',
      apiDir: 'tests/api',
      e2eDir: 'tests/e2e',
      requiredSuites: template === 'customer-crm' ? ['sql', 'e2e'] : [],
      defaultBrowser: 'chromium',
      mutationAllowedEnvironments: [],
    },
    artifacts: { directory: '.apexrest/artifacts', retentionDays: 7 },
  };
  await writeJson(path.join(root, 'apexrest.json'), config);
  await atomicWrite(
    path.join(root, '.gitignore'),
    '.apexrest/\nnode_modules/\n.env\nplaywright/.auth/\ntest-results/\n',
  );
  for (const dir of [
    ...Object.values(config.database),
    config.tests.unitDir,
    config.tests.apiDir,
    config.tests.e2eDir,
  ])
    await mkdir(path.join(root, dir), { recursive: true });
  await cp(
    path.join(resourceRoot(), 'toolchains/toolchain.lock.json'),
    path.join(root, config.toolchain.lockFile),
  );
  if (template !== 'existing-app') {
    const generated = await new OracleAdapter().generate(alias, alias);
    await installSources(generated.directory, root, config.application.sourceDir);
    if (template === 'customer-crm') {
      await cp(path.join(resourceRoot(), 'templates/customer-crm/project'), root, { recursive: true });
      await cp(
        path.join(resourceRoot(), 'templates/customer-crm/apex-overlay'),
        path.join(root, config.application.sourceDir),
        { recursive: true },
      );
      const { readFile } = await import('node:fs/promises');
      const file = path.join(root, config.application.sourceDir, 'shared-components/lists.apx');
      const lists = await readFile(file, 'utf8'),
        index = lists.lastIndexOf(')');
      if (index < 0 || !lists.includes('list navigation-menu ('))
        throw new Fault('UNSUPPORTED_TEMPLATE', 'Starter navigation does not match the reviewed fixture.', 3);
      const entries = ['customers', 'dashboard']
        .map(
          (label, i) =>
            `    entry ${label} (\n        label: ${label[0]!.toUpperCase() + label.slice(1)}\n        layout {\n            sequence: ${(i + 2) * 10}\n        }\n        link {\n            target: {\n                page: ${(i + 1) * 10}\n            }\n        }\n    )\n`,
        )
        .join('');
      await atomicWrite(file, lists.slice(0, index) + entries + lists.slice(index));
    }
  }
  return {
    root,
    template,
    configuration: config,
    nextActions: [
      'Configure explicit target identity and connection references.',
      'Review project code and grant project trust before running it.',
    ],
  };
}
export async function projectInspect(ctx: ProjectContext) {
  const sources: Record<string, unknown> = {};
  for (const [kind, relative] of Object.entries({
    apex: ctx.config.application.sourceDir,
    ...ctx.config.database,
  })) {
    const dir = await contained(ctx.root, relative);
    sources[kind] = (await exists(dir)) ? await inventory(dir) : null;
  }
  return {
    projectId: ctx.config.projectId,
    root: ctx.root,
    environments: Object.entries(ctx.config.environments).map(([name, env]) => ({
      name,
      kind: env.kind,
      applicationId: env.applicationId,
      workspace: env.workspace,
    })),
    sources,
  };
}
export { loadProject };
