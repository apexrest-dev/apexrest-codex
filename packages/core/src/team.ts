import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { readdir } from 'node:fs/promises';
import { z } from 'zod';
import { contained, exists, readJson, writeJson, withLock } from './fs.ts';
import { parse, requireTrust, type ProjectContext } from './config.ts';
import { Fault } from './result.ts';
import { teamSourceDigest } from './team-source.ts';
import {
  teamStartSchema,
  teamMessageSchema,
  recordedExecutionMode,
  type TeamRequest,
  type TeamState,
} from './team-schema.ts';
import { resolveWorkRequest } from './work-preferences.ts';

export const teamActive = new Set(['queued', 'running', 'cancelling']);
export const teamRuntime = () => path.join(path.dirname(fileURLToPath(import.meta.url)), 'apexrest.mjs');
export class TeamService {
  constructor(private ctx: ProjectContext) {}
  async directory(id: string) {
    parse(z.uuid(), id);
    return contained(this.ctx.root, '.apexrest/teams/' + id);
  }
  async start(input: TeamRequest, id: string = randomUUID()) {
    await requireTrust(this.ctx.root);
    if (process.env.APEXREST_TEAM_WORKER === '1')
      throw new Fault('TEAM_RECURSION', 'Team workers cannot create another team.', 2);
    const request = await resolveWorkRequest(this.ctx.root, parse(teamStartSchema, input));
    const root = await this.directory(id);
    if (await exists(path.join(root, 'request.json')))
      throw new Fault(
        'TEAM_ALREADY_STARTED',
        'This team request already exists; inspect its status.',
        5,
        'conflict',
      );
    await writeJson(path.join(root, 'request.json'), {
      ...request,
      project: this.ctx.root,
      multiAgentEnabled: request.executionMode === 'team',
    });
    await writeJson(path.join(root, 'state.json'), {
      id,
      executionMode: request.executionMode,
      browserMode: request.browserMode,
      status: 'queued',
      phase: 'queued',
      revision: 0,
      updatedAt: new Date().toISOString(),
      members: [],
      messages: [],
      result: '',
      diagnostics: [],
      reviews: [],
      qa: [],
    } satisfies TeamState);
    const worker = spawn(process.execPath, [teamRuntime(), '--team-worker', this.ctx.root, id], {
      cwd: this.ctx.root,
      env: process.env,
      detached: true,
      stdio: 'ignore',
      windowsHide: true,
    });
    try {
      await new Promise<void>((resolve, reject) => {
        worker.once('spawn', resolve);
        worker.once('error', reject);
      });
      worker.unref();
    } catch {
      const state = await this.status(id);
      await writeJson(path.join(root, 'state.json'), {
        ...state,
        status: 'blocked',
        diagnostics: ['Team worker could not start.'],
      });
      throw new Fault('TEAM_START_FAILED', 'Team worker could not start.', 3, 'blocked');
    }
    return {
      teamId: id,
      executionMode: request.executionMode,
      browserMode: request.browserMode,
      status: 'queued',
      nextAction:
        'Use team status for progress and verification evidence; team message sends task updates; team cancel requests a stop.',
    };
  }
  async status(id: string): Promise<TeamState> {
    const state = (await readJson(path.join(await this.directory(id), 'state.json'))) as TeamState;
    state.executionMode = recordedExecutionMode(state);
    if (teamActive.has(state.status) && Date.parse(state.updatedAt) + 60000 < Date.now())
      return {
        ...state,
        status: 'outcome_unknown',
        diagnostics: [
          ...state.diagnostics,
          'Worker heartbeat expired. Inspect changes before starting another team.',
        ],
      };
    return state;
  }
  async snapshot(id: string) {
    const state = await this.status(id);
    const single = state.executionMode === 'single';
    if (
      state.status === 'completed' &&
      (single ? state.completedDigest : state.approvedDigest) !== (await teamSourceDigest(this.ctx.root))
    ) {
      state.status = single ? 'result_stale' : 'review_stale';
      state.diagnostics.push(
        single
          ? 'Project files changed after verification. Verify the new source.'
          : 'Project files changed after approval. Run the full review cycle for the new source.',
      );
    }
    return {
      ...state,
      observations: state.observations
        ?.slice(-8)
        .map((entry) => ({ ...entry, detail: entry.detail.slice(0, 200) })),
      result: state.result.slice(0, 4000),
      members: state.members.map((m) => ({ ...m, result: m.result.slice(-800) })),
      messages: state.messages.slice(-10).map((m) => ({ ...m, text: m.text.slice(0, 160) })),
      reviews: state.reviews.slice(-6).map((r) => ({
        ...r,
        report: {
          ...r.report,
          summary: r.report.summary.slice(0, 400),
          findings: r.report.findings.slice(0, 3).map((f) => f.slice(0, 200)),
        },
      })),
      qa: state.qa.slice(-3).map((q) => ({
        ...q,
        report: {
          ...q.report,
          summary: q.report.summary.slice(0, 400),
          checks: q.report.checks
            .slice(0, 4)
            .map((c) => ({ ...c, name: c.name.slice(0, 100), evidence: c.evidence.slice(0, 200) })),
        },
      })),
      verification: (state.verification ?? []).slice(-3).map((v) => ({
        ...v,
        report: {
          ...v.report,
          summary: v.report.summary.slice(0, 400),
          checks: v.report.checks
            .slice(0, 4)
            .map((c) => ({ ...c, name: c.name.slice(0, 100), evidence: c.evidence.slice(0, 200) })),
        },
      })),
      fullReport: '.apexrest/teams/' + id + '/state.json',
    };
  }
  async message(id: string, message: string) {
    await requireTrust(this.ctx.root);
    parse(teamMessageSchema, { id, message });
    const root = await this.directory(id);
    return withLock(path.join(root, 'control.lock'), async () => {
      if (!teamActive.has((await this.status(id)).status))
        throw new Fault('TEAM_FINISHED', 'This team has ended; its result remains available.', 5, 'conflict');
      const queue = (await exists(path.join(root, 'inbox'))) ? await readdir(path.join(root, 'inbox')) : [];
      if (queue.length >= 100)
        throw new Fault('TEAM_MESSAGE_LIMIT', 'This team reached its message limit.', 2);
      const messageId = randomUUID();
      await writeJson(await contained(root, 'inbox/' + messageId + '.json'), { id: messageId, message });
      return {
        teamId: id,
        messageId,
        status: 'queued',
        nextAction: 'Team status reports delivery. A task change invalidates earlier approvals.',
      };
    });
  }
  async cancel(id: string) {
    await requireTrust(this.ctx.root);
    const root = await this.directory(id);
    return withLock(path.join(root, 'control.lock'), async () => {
      if (!teamActive.has((await this.status(id)).status)) return this.snapshot(id);
      await writeJson(path.join(root, 'cancel.json'), {
        requestedAt: new Date().toISOString(),
      });
      return { teamId: id, status: 'cancellation_requested', rollbackConfirmed: false };
    });
  }
}
