import { VERSION } from '../../core/src/version.ts';
import path from 'node:path';
import { homedir } from 'node:os';
import { readFile, rm } from 'node:fs/promises';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { exists, readJson, writeJson, contained } from '../../core/src/fs.ts';
import { managedHome, requireTrust } from '../../core/src/config.ts';
import { Fault } from '../../core/src/result.ts';
import { runProcess } from '../../core/src/process.ts';
import { installNative, installationState } from './native.ts';
import { resolveNativePlugin, validateNative } from './package-source.ts';
export { validateNative } from './package-source.ts';
import { ToolchainService, runtimeState } from './toolchain.ts';
import type { SetupRequest } from './toolchain.ts';
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
  const source = await resolveNativePlugin(text('from'));
  const validation = await validateNative(source);
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
  const existingRuntime = await runtimeState(home);
  const nativePlan = await installNative({
    source,
    home,
    codexHome,
    dryRun: true,
    node: existingRuntime.node ?? process.execPath,
  });
  if (input.dryRun)
    return {
      status: 'planned',
      package: validation,
      toolchain: input.nativeOnly
        ? { status: 'not-requested', components: {} }
        : await new ToolchainService().plan(request),
      native: nativePlan,
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
  const native = await installNative({
    source,
    home,
    codexHome,
    node: runtime.node ?? process.execPath,
    expectedRegistration: nativePlan.registration.fingerprint,
  });
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
