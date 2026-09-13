import path from 'node:path';
import { cp, mkdir, mkdtemp, readFile, rename, chmod, statfs, realpath } from 'node:fs/promises';
import { z } from 'zod';
import { exists, readJson, withLock, writeJson } from '../../core/src/fs.ts';
import { managedHome, parse } from '../../core/src/config.ts';
import { resourceRoot } from '../../core/src/project.ts';
import { runProcess } from '../../core/src/process.ts';
import { Fault } from '../../core/src/result.ts';
import { download } from './download.ts';
import type { Artifact } from './download.ts';
import { extractArchive } from './archive.ts';
const artifactSchema = z.strictObject({
  id: z.enum(['node', 'java', 'sqlcl']),
  version: z.string().min(1),
  url: z.url(),
  sha256: z.string().regex(/^[a-f0-9]{64}$/),
  os: z.string(),
  arch: z.string(),
  type: z.enum(['zip', 'tar.gz']),
  executable: z.string(),
  allowedHosts: z.array(z.string()).min(1),
  license: z.string(),
  consentRequired: z.boolean(),
});
export const lockSchema = z.strictObject({
  schemaVersion: z.literal(1),
  artifacts: z.array(artifactSchema),
  playwright: z.strictObject({ version: z.string(), browsers: z.array(z.record(z.string(), z.unknown())) }),
  provenance: z.record(z.string(), z.unknown()),
});
export interface SetupRequest {
  home?: string;
  cacheDir?: string;
  offline?: boolean;
  dryRun?: boolean;
  yes?: boolean;
  nonInteractive?: boolean;
  acceptOracleLicense?: boolean;
  skipBrowser?: boolean;
  installOsDeps?: boolean;
}
export interface ToolchainState {
  schemaVersion: 1;
  node?: string;
  java?: string;
  sqlcl?: string;
  playwright?: string;
  browser?: string;
  components: Record<string, string>;
}
export async function runtimeState(home = managedHome()): Promise<ToolchainState> {
  const file = path.join(home, 'runtime.json');
  return (await exists(file))
    ? ((await readJson(file)) as ToolchainState)
    : { schemaVersion: 1, components: {} };
}
export function platformProfile(os = process.platform, arch = process.arch) {
  if (
    ![
      ['darwin', 'arm64'],
      ['linux', 'x64'],
      ['win32', 'x64'],
    ].some(([o, a]) => os === o && arch === a)
  )
    throw new Fault(
      'UNSUPPORTED_PLATFORM',
      `No locked client profile for ${os}/${arch}. Use a supported runner or remote development host.`,
      3,
      'blocked',
    );
  return { os, arch, status: os === 'darwin' ? 'locally-tested' : 'requires-platform-CI' };
}
async function findExecutable(name: string) {
  for (const directory of (process.env.PATH ?? '').split(path.delimiter))
    for (const suffix of process.platform === 'win32' ? ['', '.exe', '.cmd'] : ['']) {
      const candidate = path.join(directory, name + suffix);
      if (await exists(candidate)) return realpath(candidate);
    }
  return undefined;
}
export class ToolchainService {
  async inspect() {
    return { platform: platformProfile(), state: await runtimeState() };
  }
  async plan(r: SetupRequest) {
    const platform = platformProfile();
    const lock = parse(
      lockSchema,
      await readJson(path.join(resourceRoot(), 'toolchains/toolchain.lock.json')),
    );
    const home = path.resolve(r.home ?? managedHome()),
      cache = path.resolve(r.cacheDir ?? path.join(home, 'cache'));
    const artifacts = lock.artifacts.filter((a) => a.os === platform.os && a.arch === platform.arch);
    const steps = await Promise.all(
      artifacts.map(async (artifact) => {
        const candidate =
          artifact.id === 'node'
            ? process.execPath
            : artifact.id === 'sqlcl'
              ? (process.env.APEXREST_SQLCL ?? (await findExecutable('sql')))
              : process.env.APEXREST_JAVA_HOME
                ? path.join(
                    process.env.APEXREST_JAVA_HOME,
                    'bin',
                    process.platform === 'win32' ? 'java.exe' : 'java',
                  )
                : undefined;
        let reuse: string | undefined;
        if (candidate) {
          try {
            const result = await runProcess({
              executable: candidate,
              args: artifact.id === 'node' ? ['--version'] : ['-version'],
              cwd: process.cwd(),
              timeoutMs: 15000,
            });
            if (
              result.code === 0 &&
              (result.stdout + result.stderr).includes(
                artifact.id === 'java' ? artifact.version.split('+')[0]! : artifact.version,
              )
            )
              reuse = candidate;
          } catch {
            /* Use the pinned managed artifact instead. */
          }
        }
        const destination = path.join(home, 'toolchains', artifact.id, artifact.version);
        return {
          artifact,
          destination,
          reuse,
          action: reuse
            ? 'reuse'
            : (await exists(path.join(destination, artifact.executable)))
              ? 'verify'
              : 'download-install',
          consent: artifact.consentRequired && !r.acceptOracleLicense && !reuse ? 'required' : 'not-required',
        };
      }),
    );
    return {
      schemaVersion: 1,
      home,
      cache,
      platform,
      steps,
      playwright: lock.playwright.version,
      browser: {
        action: r.skipBrowser ? 'skip' : 'install-verify',
        engine: 'chromium',
        installOsDeps: Boolean(r.installOsDeps && !r.skipBrowser),
      },
      offline: r.offline ?? false,
      elevation: r.installOsDeps ? 'explicitly-requested' : 'not-authorized',
      proxy: Boolean(process.env.HTTPS_PROXY || process.env.https_proxy),
      extraCA: Boolean(process.env.NODE_EXTRA_CA_CERTS),
    };
  }
  async apply(r: SetupRequest) {
    const plan = await this.plan(r);
    if (r.dryRun) return { status: 'planned', plan };
    if (!r.yes)
      throw new Fault(
        'SETUP_APPROVAL_REQUIRED',
        'Review dependencies install --dry-run, then pass --yes for technical steps. License and elevation consent are separate.',
        4,
        'needs-user-action',
      );
    await mkdir(plan.home, { recursive: true, mode: 0o700 });
    const disk = await statfs(plan.home);
    if (disk.bavail * disk.bsize < 1024 * 1024 * 1024)
      throw new Fault('INSUFFICIENT_DISK', 'At least 1 GiB of free local space is required.', 3);
    return withLock(path.join(plan.home, 'toolchain.lock'), async () => {
      const state = await runtimeState(plan.home);
      const actions: { code: string; component?: string; details?: string }[] = [];
      for (const step of plan.steps) {
        const artifact = step.artifact;
        if (step.consent === 'required' && step.action !== 'verify') {
          state.components[artifact.id] = 'needs-consent';
          actions.push({
            code: 'ORACLE_LICENSE_CONSENT_REQUIRED',
            component: artifact.id,
            details: artifact.license,
          });
          continue;
        }
        const executable = step.reuse ?? path.join(step.destination, artifact.executable);
        if (!(await exists(executable))) {
          const file = await download(artifact, plan.cache, r.offline);
          await mkdir(path.dirname(step.destination), { recursive: true });
          const staging = await mkdtemp(step.destination + '.staging-');
          await extractArchive(file, staging, artifact.type, artifact.id !== 'sqlcl');
          if (!(await exists(path.join(staging, artifact.executable))))
            throw new Fault(
              'ARTIFACT_LAYOUT_MISMATCH',
              'Vendor executable is missing from the locked archive layout.',
              3,
            );
          await rename(staging, step.destination);
        }
        if (process.platform !== 'win32' && !step.reuse) await chmod(executable, 0o700);
        const javaHome = state.java ? path.dirname(path.dirname(state.java)) : undefined;
        const result = await runProcess({
          executable,
          args: artifact.id === 'node' ? ['--version'] : ['-version'],
          cwd: plan.home,
          env: { ...process.env, ...(javaHome ? { JAVA_HOME: javaHome } : {}) },
          timeoutMs: 20000,
        });
        if (
          result.code !== 0 ||
          !(result.stdout + result.stderr).includes(
            artifact.id === 'java' ? artifact.version.split('+')[0]! : artifact.version,
          )
        )
          throw new Fault('TOOLCHAIN_PROBE_FAILED', `${artifact.id} did not report its locked version.`, 3);
        state[artifact.id] = executable;
        state.components[artifact.id] = 'verified';
        await writeJson(path.join(plan.home, 'runtime.json'), state);
      }
      if (!r.skipBrowser && state.node) {
        const browserHome = path.join(plan.home, 'playwright', plan.playwright),
          browserCache = path.join(plan.home, 'browsers');
        await mkdir(browserHome, { recursive: true });
        await cp(
          path.join(resourceRoot(), 'playwright/package.json'),
          path.join(browserHome, 'package.json'),
        );
        await cp(
          path.join(resourceRoot(), 'playwright/package-lock.json'),
          path.join(browserHome, 'package-lock.json'),
        );
        const npm = path.resolve(
          path.dirname(state.node),
          process.platform === 'win32'
            ? 'node_modules/npm/bin/npm-cli.js'
            : '../lib/node_modules/npm/bin/npm-cli.js',
        );
        const env = {
          ...process.env,
          PLAYWRIGHT_BROWSERS_PATH: browserCache,
          npm_config_cache: path.join(plan.cache, 'npm'),
          PATH: path.dirname(state.node) + path.delimiter + (process.env.PATH ?? ''),
        };
        if (!(await exists(path.join(browserHome, 'node_modules/@playwright/test/cli.js')))) {
          const installed = await runProcess({
            executable: state.node,
            args: [
              npm,
              'ci',
              '--ignore-scripts',
              '--no-audit',
              '--no-fund',
              ...(r.offline ? ['--offline'] : []),
            ],
            cwd: browserHome,
            env,
            timeoutMs: 180000,
          });
          if (installed.code !== 0)
            throw new Fault(
              r.offline ? 'OFFLINE_CACHE_MISS' : 'PLAYWRIGHT_INSTALL_FAILED',
              installed.stderr,
              3,
              'blocked',
            );
        }
        const cli = path.join(browserHome, 'node_modules/@playwright/test/cli.js');
        if (!r.offline) {
          const installed = await runProcess({
            executable: state.node,
            args: [cli, 'install', ...(r.installOsDeps ? ['--with-deps'] : []), 'chromium'],
            cwd: browserHome,
            env,
            timeoutMs: 180000,
          });
          if (installed.code !== 0) throw new Fault('BROWSER_INSTALL_FAILED', installed.stderr, 3, 'blocked');
        }
        const smoke = await runProcess({
          executable: state.node,
          args: [
            '--input-type=module',
            '-e',
            "import {chromium} from '@playwright/test'; const b=await chromium.launch(); console.log(b.version()); await b.close();",
          ],
          cwd: browserHome,
          env,
          timeoutMs: 30000,
        });
        if (smoke.code !== 0) {
          state.components.playwright = 'installed';
          actions.push({
            code: r.offline
              ? 'OFFLINE_BROWSER_CACHE_MISS'
              : 'BROWSER_SYSTEM_DEPENDENCIES_OR_SANDBOX_REQUIRED',
          });
        } else {
          state.components.playwright = 'verified';
          state.browser = smoke.stdout.trim();
        }
        state.playwright = cli;
      } else {
        if (!state.playwright) {
          state.components.playwright = 'not-installed';
          actions.push({ code: 'PLAYWRIGHT_SETUP_REQUIRED' });
        }
      }
      await writeJson(path.join(plan.home, 'runtime.json'), state);
      return {
        schemaVersion: 1,
        status: actions.length ? 'needs-user-action' : 'toolchain-verified',
        components: state.components,
        actions,
        state,
      };
    });
  }
}
