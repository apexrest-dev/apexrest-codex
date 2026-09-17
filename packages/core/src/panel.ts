import path from 'node:path';
import { readdir, realpath, stat } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import { contained, exists, readJson, writeJson } from './fs.ts';
import { loadProject, parse, policy, requireTrust } from './config.ts';
import { sanitized, Fault } from './result.ts';
import { sqlclConfig, configureSqlcl } from './sqlcl-config.ts';
import { connections } from './connections.ts';
import { TeamService, teamRuntime } from './team.ts';
import { JobService } from './jobs.ts';
import { panelPreferencesSchema, panelActionSchema, type PanelAction } from './panel-schema.ts';
import { VERSION } from './version.ts';
import { runProcess } from './process.ts';

type Row = Record<string, unknown>;
const safe = <T>(value: T) => sanitized(value) as T;
export class PanelService {
  constructor(private root: string) {}
  async preferences() {
    const file = await contained(this.root, '.apexrest/panel/preferences.json');
    return (await exists(file))
      ? parse(panelPreferencesSchema, await readJson(file))
      : panelPreferencesSchema.parse({});
  }
  private async records(folder: string) {
    const base = await contained(this.root, '.apexrest/' + folder);
    if (!(await exists(base))) return [];
    const entries = (await readdir(base, { withFileTypes: true })).filter(
      (e) => e.isDirectory() && z.uuid().safeParse(e.name).success,
    );
    if (entries.length > 2000)
      throw new Fault(
        'PANEL_HISTORY_LIMIT',
        'Archive old operation records before loading more than 2000 runs.',
        2,
      );
    const files = await Promise.all(
      entries.map(async (entry) => {
        const file = await contained(base, entry.name + '/state.json');
        const info = await stat(file).catch(() => null);
        return { id: entry.name, file, at: info?.mtimeMs ?? 0, size: info?.size ?? 0 };
      }),
    );
    return Promise.all(
      files
        .filter((f) => f.size > 0)
        .sort((a, b) => b.at - a.at)
        .slice(0, 12)
        .map(async (f) => {
          if (f.size > 2 * 1024 * 1024)
            return {
              id: f.id,
              status: 'unavailable',
              diagnostics: ['Record exceeds the panel limit.'],
            } as Row;
          try {
            return { ...((await readJson(f.file)) as Row), id: f.id };
          } catch {
            return {
              id: f.id,
              status: 'unavailable',
              diagnostics: ['Cannot read this operation record.'],
            } as Row;
          }
        }),
    );
  }
  async snapshot(selectedTeam?: string) {
    this.root = await realpath(this.root);
    if (selectedTeam) parse(z.uuid(), selectedTeam);
    const ctx = await loadProject(this.root).catch((error: unknown) => {
      if (error instanceof Fault && error.code === 'PROJECT_NOT_CONFIGURED') return null;
      throw error;
    });
    const [prefs, sqlcl, refs, security, teamRecords, jobRecords, deploymentRecords] = await Promise.all([
      this.preferences(),
      sqlclConfig(),
      connections(),
      policy(),
      this.records('teams'),
      this.records('jobs'),
      this.records('deployments'),
    ]);
    const teams = teamRecords
      .map((row) => ({
        id: String(row.id),
        status: String(row.status),
        phase: String(row.phase ?? 'unknown'),
        revision: Number(row.revision ?? 0),
        updatedAt: String(row.updatedAt ?? ''),
        members: Array.isArray(row.members) ? row.members.length : 0,
      }))
      .map((row) =>
        ['queued', 'running'].includes(row.status) && Date.parse(row.updatedAt) + 60000 < Date.now()
          ? { ...row, status: 'outcome_unknown' }
          : row,
      );
    const chosen =
      selectedTeam ?? teams.find((t) => ['running', 'queued'].includes(t.status))?.id ?? teams[0]?.id;
    const team = ctx && chosen ? await new TeamService(ctx).snapshot(chosen) : null;
    const assignment =
      ctx && chosen
        ? ((await readJson(await contained(this.root, '.apexrest/teams/' + chosen + '/request.json')).catch(
            () => null,
          )) as { task?: string } | null)
        : null;
    const jobs = await Promise.all(
      jobRecords.map(async (row) => {
        const state = ctx ? ((await new JobService(ctx).status(String(row.id))) as Row) : row;
        const result = (state.result ?? {}) as Row;
        return {
          id: String(row.id),
          operation: String(row.operation ?? result.operation ?? 'operation'),
          status: String(result.status ?? state.status),
          updatedAt: String(state.updatedAt ?? ''),
          summary: String(result.summary ?? '').slice(0, 1000),
          diagnostics: Array.isArray(result.diagnostics) ? result.diagnostics.slice(0, 5) : [],
          artifacts: Array.isArray(result.artifacts) ? result.artifacts.slice(0, 10) : [],
        };
      }),
    );
    const deployments = deploymentRecords.map((row) => ({
      id: String(row.id),
      status: String(row.state ?? 'unknown'),
      at: String(row.at ?? ''),
      details: JSON.stringify(safe(row.details ?? {})).slice(0, 1200),
    }));
    let changes: { status: string; files: string[] } = { status: 'unavailable', files: [] };
    try {
      const git = await runProcess({
        executable: 'git',
        args: ['status', '--porcelain=v1', '--untracked-files=normal'],
        cwd: this.root,
        timeoutMs: 3000,
      });
      if (git.code === 0)
        changes = { status: 'available', files: git.stdout.split('\n').filter(Boolean).slice(0, 80) };
    } catch {
      /* A configured APEX project does not require Git. */
    }
    let toolchain: unknown = null;
    if (ctx) {
      const file = await contained(this.root, ctx.config.toolchain.lockFile);
      if (await exists(file)) {
        if ((await stat(file)).size <= 128000) toolchain = await readJson(file);
      }
    }
    return safe({
      version: VERSION,
      updatedAt: new Date().toISOString(),
      project: this.root,
      configured: !!ctx,
      trusted: security.trustedProjects.includes(this.root),
      configuration: ctx?.config ?? null,
      sqlcl,
      preferences: prefs,
      connections: refs,
      toolchain,
      teams,
      team,
      task: typeof assignment?.task === 'string' ? assignment.task.slice(0, 2000) : null,
      jobs,
      deployments,
      changes,
      permissions: {
        activeGrants: security.grants
          .filter((g) => g.projectRoot === this.root && Date.parse(g.expiresAt) > Date.now())
          .map((g) => ({ operations: g.operations, expiresAt: g.expiresAt, exactPlan: !!g.planDigest })),
      },
    });
  }
  async act(action: PanelAction) {
    parse(panelActionSchema, { action });
    this.root = await realpath(this.root);
    await requireTrust(this.root);
    if (action.kind === 'preferences') {
      await writeJson(await contained(this.root, '.apexrest/panel/preferences.json'), action.settings);
      return { saved: true, appliesTo: 'new-teams' };
    }
    if (action.kind === 'sqlcl') {
      return configureSqlcl(action.settings.mode, action.settings.mcpRestrictLevel);
    }
    const ctx = await loadProject(this.root),
      team = new TeamService(ctx);
    if (action.kind === 'start') return team.start({ ...action.request, project: this.root });
    if (action.kind === 'message') return team.message(action.id, action.message);
    if (action.kind === 'cancel-team') return team.cancel(action.id);
    if (action.kind === 'cancel-job') return new JobService(ctx).cancel(action.id);
    const operation =
      action.kind === 'validate' ? 'apex.validate' : action.kind === 'plan' ? 'deploy.plan' : 'test.run';
    const input =
      action.kind === 'plan'
        ? { env: action.env, out: '.apexrest/plans/' + randomUUID() + '.json' }
        : action.kind === 'test'
          ? { suite: action.suite, ...(action.env ? { env: action.env } : {}) }
          : {};
    return new JobService(ctx).start(operation, input, teamRuntime());
  }
}
export type PanelSnapshot = Awaited<ReturnType<PanelService['snapshot']>>;
