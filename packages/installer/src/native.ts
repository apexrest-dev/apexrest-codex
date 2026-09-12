import path from 'node:path';
import { cp, mkdir, readFile, rename, rm, chmod, realpath } from 'node:fs/promises';
import {
  canonical,
  exists,
  hash,
  inventory,
  readJson,
  withLock,
  writeJson,
  atomicWrite,
} from '../../core/src/fs.ts';
import { runProcess } from '../../core/src/process.ts';
import { Fault } from '../../core/src/result.ts';
export interface NativeInstallRequest {
  source: string;
  home: string;
  codexHome: string;
  codex?: string;
  node?: string;
  dryRun?: boolean;
}
export async function installNative(r: NativeInstallRequest) {
  const source = await realpath(r.source);
  if (!r.dryRun) {
    await mkdir(r.home, { recursive: true, mode: 0o700 });
    await mkdir(r.codexHome, { recursive: true, mode: 0o700 });
  }
  const home = (await exists(r.home)) ? await realpath(r.home) : path.resolve(r.home);
  const codexHome = (await exists(r.codexHome)) ? await realpath(r.codexHome) : path.resolve(r.codexHome);
  const digest = hash(canonical(await inventory(source)));
  const destination = path.join(home, 'native', digest);
  const node = r.node ?? process.execPath;
  if (r.dryRun) return { state: 'planned', sourceDigest: digest, destination, node, codexHome };
  return withLock(path.join(home, 'install.lock'), async () => {
    await mkdir(codexHome, { recursive: true, mode: 0o700 });
    const invoke = async (args: string[]) => {
      const result = await runProcess({
        executable: r.codex ?? 'codex',
        args,
        cwd: home,
        env: { ...process.env, CODEX_HOME: codexHome },
        timeoutMs: 60000,
      });
      if (result.code !== 0 || result.timedOut)
        throw new Fault('CODEX_REGISTRATION_FAILED', result.stderr || result.stdout, 3, 'blocked');
      return JSON.parse(result.stdout) as unknown;
    };
    const markets = (await invoke(['plugin', 'marketplace', 'list', '--json'])) as {
      marketplaces: { name: string; root: string }[];
    };
    const existing = markets.marketplaces.find((m) => m.name === 'apexrest');
    const stateFile = path.join(home, 'installation.json');
    const previous = (await exists(stateFile))
      ? ((await readJson(stateFile)) as { destination: string })
      : undefined;
    if (existing && existing.root !== previous?.destination && existing.root !== destination)
      throw new Fault(
        'MARKETPLACE_OWNERSHIP_CONFLICT',
        'An apexrest marketplace from another installation exists. It was left unchanged.',
        5,
      );
    const config = path.join(codexHome, 'config.toml');
    if (await exists(config))
      await cp(config, path.join(home, 'config-before-install-' + Date.now() + '.toml'));
    if (!(await exists(destination))) {
      const staging = destination + '.staging';
      await rm(staging, { recursive: true, force: true });
      await mkdir(staging, { recursive: true, mode: 0o700 });
      await cp(source, staging, { recursive: true });
      if (hash(canonical(await inventory(staging))) !== digest)
        throw new Fault('PACKAGE_COPY_INVALID', 'Native package copy changed.', 5);
      await rename(staging, destination);
    }
    const root = path.join(destination, 'plugins/apexrest-apex');
    const portable = await exists(path.join(root, 'plugin.json'));
    const mcpPath = path.join(root, portable ? 'mcp.json' : '.mcp.json');
    const mcp = JSON.parse(await readFile(mcpPath, 'utf8')) as {
      mcpServers: Record<string, { command: string; args: string[]; env?: Record<string, string> }>;
    };
    const server = mcp.mcpServers.apexrest;
    if (!server) throw new Fault('INVALID_PACKAGE', 'Native package has no apexrest MCP server.', 2);
    server.command = node;
    server.args = [path.join(root, 'runtime/mcp.mjs')];
    server.env = { APEXREST_HOME: home };
    await writeJson(mcpPath, mcp);
    const marketplace = await invoke(['plugin', 'marketplace', 'add', destination, '--json']);
    const installed = await invoke(['plugin', 'add', 'apexrest-apex@apexrest', '--json']);
    const listing = await invoke(['plugin', 'list', '--marketplace', 'apexrest', '--json']);
    const state = {
      schemaVersion: 1,
      state: 'registered',
      sourceDigest: digest,
      destination,
      root,
      node,
      codexHome,
      marketplace,
      installed,
      listing,
      actions: ['CODEX_RELOAD_REQUIRED', 'NATIVE_HOST_VERIFICATION_REQUIRED'],
    };
    await writeJson(path.join(home, 'installation.json'), state);
    const cli = path.join(root, 'runtime/apexrest.mjs');
    const quote = (value: string) => "'" + value.replaceAll("'", "'\"'\"'") + "'";
    await mkdir(path.join(home, 'bin'), { recursive: true });
    if (process.platform === 'win32') {
      const ps = (value: string) => "'" + value.replaceAll("'", "''") + "'";
      await atomicWrite(
        path.join(home, 'bin/apexrest.ps1'),
        `$env:APEXREST_HOME=${ps(home)}\n& ${ps(node)} ${ps(cli)} @args\nexit $LASTEXITCODE\n`,
      );
    } else {
      const launcher = path.join(home, 'bin/apexrest');
      await atomicWrite(
        launcher,
        `#!/bin/sh\nexport APEXREST_HOME=${quote(home)}\nexec ${quote(node)} ${quote(cli)} \"$@\"\n`,
      );
      await chmod(launcher, 0o700);
    }
    return state;
  });
}
export async function installationState(home: string) {
  return readJson(path.join(home, 'installation.json'));
}
