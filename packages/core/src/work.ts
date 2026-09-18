import path from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { z } from 'zod';
import { canonical, hash, contained, exists, readJson, writeJson, withLock } from './fs.ts';
import { parse, requireTrust, type ProjectContext } from './config.ts';
import { Fault, redact } from './result.ts';
import { TeamService, teamActive } from './team.ts';
import {
  teamStartSchema,
  resolvedTeamStartSchema,
  workStartSchema,
  teamWaitSchema,
  type TeamState,
} from './team-schema.ts';
import { resolveWorkRequest } from './work-preferences.ts';
import { openPanel } from './panel-server.ts';

export function teamProgressCursor(
  state: Pick<TeamState, 'status' | 'phase' | 'revision' | 'members' | 'reviews' | 'qa' | 'verification'>,
) {
  // Heartbeats and token updates alone must not cause a chat polling loop.
  return hash(
    canonical({
      status: state.status,
      phase: state.phase,
      revision: state.revision,
      members: state.members.map((m) => [m.role, m.status]),
      reviews: state.reviews.length,
      qa: state.qa.length,
      verification: state.verification?.length ?? 0,
    }),
  );
}

export async function startWork(
  ctx: ProjectContext,
  input: z.infer<typeof workStartSchema>,
  panel = openPanel,
  team: Pick<TeamService, 'directory' | 'start' | 'snapshot'> = new TeamService(ctx),
) {
  await requireTrust(ctx.root);
  if (process.env.APEXREST_TEAM_WORKER === '1')
    throw new Fault('TEAM_RECURSION', 'Team workers cannot start another chat workflow.', 2);
  const { requestId, ...fields } = parse(workStartSchema, input);
  const request = teamStartSchema.parse({ ...fields, project: ctx.root });
  const state = await withLock(
    await contained(ctx.root, '.apexrest/work-' + requestId + '.lock'),
    async () => {
      const directory = await team.directory(requestId);
      const inputFile = path.join(directory, 'work-input.json');
      if (await exists(path.join(directory, 'request.json'))) {
        const saved = await readJson(path.join(directory, 'request.json'));
        const matches = (await exists(inputFile))
          ? canonical(await readJson(inputFile)) === canonical(request)
          : canonical(resolvedTeamStartSchema.parse(saved)) ===
            canonical(resolvedTeamStartSchema.parse(request));
        if (!matches)
          throw new Fault(
            'WORK_REQUEST_CONFLICT',
            'This request ID belongs to a different task. Inspect the original team.',
            5,
            'conflict',
          );
        if (!(await exists(path.join(directory, 'state.json'))))
          throw new Fault(
            'WORK_START_UNKNOWN',
            'Task creation is incomplete. Inspect this request ID before any retry.',
            6,
            'outcome_unknown',
          );
      } else {
        const effective = await resolveWorkRequest(ctx.root, request);
        await writeJson(inputFile, request);
        await team.start(effective, requestId);
      }
      return team.snapshot(requestId);
    },
  );
  let display: { status: string; url?: string; message?: string };
  try {
    const opened = await panel(ctx.root),
      url = new URL(opened.url);
    const fragment = new URLSearchParams(url.hash.slice(1));
    fragment.set('team', requestId);
    fragment.set('view', 'team');
    url.hash = fragment.toString();
    display = { status: 'ready', url: url.toString() };
  } catch (error) {
    // A display failure must not hide a started team or encourage duplicate work.
    display = {
      status: 'unavailable',
      message: redact(error instanceof Error ? error.message : String(error)).slice(0, 600),
    };
  }
  return {
    teamId: requestId,
    executionMode: state.executionMode ?? 'team',
    browserMode: state.browserMode ?? 'codex',
    status: state.status,
    cursor: teamProgressCursor(state),
    panel: display,
    nextAction:
      'Open panel.url in the Codex in-app browser when available. Follow this team with apexrest_team_wait; deliver its terminal result in the originating chat. Reuse requestId only for an exact retry.',
  };
}

export async function waitForTeam(
  ctx: ProjectContext,
  input: z.infer<typeof teamWaitSchema>,
  signal?: AbortSignal,
) {
  const request = parse(teamWaitSchema, input),
    team = new TeamService(ctx);
  const deadline = Date.now() + request.waitSeconds * 1000;
  let state = await team.status(request.id);
  while (
    teamActive.has(state.status) &&
    request.cursor === teamProgressCursor(state) &&
    Date.now() < deadline &&
    !signal?.aborted
  ) {
    await delay(Math.min(250, Math.max(1, deadline - Date.now())));
    state = await team.status(request.id);
  }
  const result = await team.snapshot(request.id);
  return { cursor: teamProgressCursor(result), terminal: !teamActive.has(result.status), team: result };
}
