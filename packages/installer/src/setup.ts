import { VERSION } from '../../core/src/version.ts';
import path from 'node:path';
import { homedir } from 'node:os';
import { readFile, rm } from 'node:fs/promises';
import { Ajv2020 } from 'ajv/dist/2020.js';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { exists, inventory, readJson, writeJson, contained } from '../../core/src/fs.ts';
import { managedHome, requireTrust } from '../../core/src/config.ts';
import { resourceRoot } from '../../core/src/project.ts';
import { Fault } from '../../core/src/result.ts';
import { runProcess } from '../../core/src/process.ts';
import { installNative, installationState } from './native.ts';
import { ToolchainService, runtimeState } from './toolchain.ts';
import type { SetupRequest } from './toolchain.ts';
export async function validateNative(source?: string) {
  const root = path.resolve(source ?? path.join(resourceRoot(), '..'));
  await inventory(root);
  const portable = await exists(path.join(root, 'plugin.json'));
  const manifest = (await readJson(
    path.join(root, portable ? 'plugin.json' : '.codex-plugin/plugin.json'),
  )) as { name: string; version: string; mcpServers?: string };
  if (
    manifest.name !== 'apexrest-apex' ||
    !/^\d+\.\d+\.\d+(?:-[\w.-]+)?(?:\+[\w.-]+)?$/.test(manifest.version)
  )
    throw new Fault('INVALID_PACKAGE', 'Invalid plugin identity or version.', 2);
  const mcp = (await readJson(path.join(root, portable ? 'mcp.json' : '.mcp.json'))) as {
    mcpServers: Record<string, { command: string; args: string[] }>;
  };
  if (!mcp.mcpServers.apexrest || Object.keys(mcp.mcpServers).length !== 1)
    throw new Fault('INVALID_PACKAGE', 'Package must expose exactly its own MCP server.', 2);
  if (portable) {
    const ajv = new Ajv2020({ strict: false });
    for (const [file, value] of [
      ['plugin', manifest],
      ['mcp', mcp],
    ] as const)
      if (
        !ajv.validate(
          (await readJson(path.join(resourceRoot(), `schemas/vendor/${file}.schema.json`))) as object,
          value,
        )
      )
        throw new Fault('MANIFEST_SCHEMA_INVALID', ajv.errorsText(), 2);
  } else if (manifest.mcpServers !== './.mcp.json')
    throw new Fault('MANIFEST_SCHEMA_INVALID', 'Compatibility manifest must use the companion .mcp.json.', 2);
  for (const file of ['runtime/mcp.mjs', 'runtime/apexrest.mjs', 'skills/apexrest-setup/SKILL.md'])
    if (!(await exists(path.join(root, file)))) throw new Fault('INCOMPLETE_PACKAGE', `Missing ${file}`, 2);
  return { status: 'valid', profile: portable ? 'portable' : 'codex-compat', version: manifest.version };
}
export async function setup(input: Record<string, unknown>) {
  const text = (key: string) => input[key] as string | undefined;
  const home = path.resolve(
    text('home') ??
      (input.scope === 'project'
        ? path.join(text('project') ?? process.cwd(), '.apexrest/managed')
        : managedHome()),
  );
  if (input.scope === 'project') {
    await requireTrust(text('project') ?? process.cwd());
    throw new Fault(
      'PROJECT_HOST_SCOPE_UNAVAILABLE',
      'Codex 0.154.0 plugin add enables in the selected user profile. Use --scope user with a dedicated --codex-home until project-only enablement is verified.',
      3,
      'blocked',
    );
  }
  const source = path.resolve(text('from') ?? path.join(resourceRoot(), '../../..'));
  const validation = await validateNative(path.join(source, 'plugins/apexrest-apex'));
  if (text('version') && text('version') !== validation.version)
    throw new Fault(
      'VERSION_MISMATCH',
      'Requested version does not match the supplied immutable package.',
      2,
    );
  const codexHome = path.resolve(
    text('codexHome') ?? process.env.CODEX_HOME ?? path.join(homedir(), '.codex'),
  );
  const request: SetupRequest = {
    home,
    ...(text('cacheDir') ? { cacheDir: text('cacheDir')! } : {}),
    offline: Boolean(input.offline),
    dryRun: Boolean(input.dryRun),
    yes: Boolean(input.yes),
    nonInteractive: Boolean(input.nonInteractive),
    acceptOracleLicense: Boolean(input.acceptOracleLicense),
    skipBrowser: Boolean(input.skipBrowser),
    installOsDeps: Boolean(input.installOsDeps),
  };
  if (input.dryRun)
    return {
      status: 'planned',
      package: validation,
      toolchain: await new ToolchainService().plan(request),
      native: await installNative({ source, home, codexHome, dryRun: true }),
    };
  if (!input.yes)
    throw new Fault(
      'SETUP_APPROVAL_REQUIRED',
      'Use --dry-run to review, then --yes for technical installation steps.',
      4,
      'needs-user-action',
    );
  const toolchain = input.nativeOnly
    ? { status: 'not-requested', components: {} }
    : await new ToolchainService().apply(request);
  const runtime = await runtimeState(home);
  const native = await installNative({ source, home, codexHome, node: runtime.node ?? process.execPath });
  if (!('root' in native)) throw new Fault('INSTALL_NOT_COMPLETED', 'Native install remained a plan.', 3);
  const mcp = JSON.parse(
    await readFile(
      path.join(native.root, validation.profile === 'portable' ? 'mcp.json' : '.mcp.json'),
      'utf8',
    ),
  ) as { mcpServers: { apexrest: { command: string; args: string[] } } };
  const env: Record<string, string> = Object.fromEntries(
    Object.entries(process.env).filter((entry): entry is [string, string] => entry[1] !== undefined),
  );
  env.APEXREST_HOME = home;
  const client = new Client({ name: 'apexrest-installer', version: VERSION });
  const transport = new StdioClientTransport({ ...mcp.mcpServers.apexrest, env, stderr: 'pipe' });
  try {
    await client.connect(transport);
    await client.listTools();
  } finally {
    await client.close();
  }
  const result = {
    schemaVersion: 1,
    status: 'needs-user-action',
    components: {
      ...('components' in toolchain ? toolchain.components : {}),
      nativePlugin: 'registered',
      mcp: 'verified',
      database: 'not-configured',
    },
    actions: [{ code: 'CODEX_RELOAD_REQUIRED' }, { code: 'DATABASE_CONNECTION_REQUIRED' }],
    native,
    toolchain,
  };
  await writeJson(path.join(home, 'setup-result.json'), result);
  return result;
}
export async function uninstallNative(home: string, keepRuntime: boolean) {
  const state = (await installationState(home)) as { codexHome: string; destination: string };
  const markets = await runProcess({
    executable: 'codex',
    args: ['plugin', 'marketplace', 'list', '--json'],
    cwd: home,
    env: { ...process.env, CODEX_HOME: state.codexHome },
    timeoutMs: 30000,
  });
  const owned =
    markets.code === 0 &&
    (JSON.parse(markets.stdout) as { marketplaces: { name: string; root: string }[] }).marketplaces.some(
      (m) => m.name === 'apexrest' && m.root === state.destination,
    );
  if (!owned)
    throw new Fault(
      'MARKETPLACE_OWNERSHIP_CONFLICT',
      'Current marketplace no longer belongs to this installation; nothing was removed.',
      5,
    );
  const result = await runProcess({
    executable: 'codex',
    args: ['plugin', 'remove', 'apexrest-apex@apexrest'],
    cwd: home,
    env: { ...process.env, CODEX_HOME: state.codexHome },
    timeoutMs: 30000,
  });
  if (result.code !== 0) throw new Fault('UNINSTALL_FAILED', result.stderr, 3);
  const removal = await runProcess({
    executable: 'codex',
    args: ['plugin', 'marketplace', 'remove', 'apexrest'],
    cwd: home,
    env: { ...process.env, CODEX_HOME: state.codexHome },
    timeoutMs: 30000,
  });
  if (removal.code !== 0) throw new Fault('MARKETPLACE_REMOVE_FAILED', removal.stderr, 3);
  const listing = await runProcess({
    executable: 'codex',
    args: ['plugin', 'list', '--json'],
    cwd: home,
    env: { ...process.env, CODEX_HOME: state.codexHome },
    timeoutMs: 30000,
  });
  if (listing.code !== 0 || listing.stdout.includes('apexrest-apex@apexrest'))
    throw new Fault('UNINSTALL_UNCONFIRMED', 'Codex still lists this plugin.', 3);
  const destination = await contained(home, state.destination);
  if (!keepRuntime) await rm(destination, { recursive: true, force: true });
  await writeJson(path.join(home, 'uninstalled.json'), {
    at: new Date().toISOString(),
    keepRuntime,
    sharedRuntimePreserved: true,
  });
  return {
    status: 'uninstalled',
    projectsPreserved: true,
    backupsPreserved: true,
    credentialsPreserved: true,
    sharedRuntimePreserved: true,
  };
}
