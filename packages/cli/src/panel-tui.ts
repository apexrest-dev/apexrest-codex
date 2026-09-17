import { emitKeypressEvents } from 'node:readline';
import { PanelService, type PanelSnapshot } from '../../core/src/panel.ts';
import { teamLabel } from '../../core/src/team-identity.ts';
import { Fault } from '../../core/src/result.ts';
import { clip, wrap, paint } from './tui-view.ts';

export function panelLines(data: PanelSnapshot, tab: number): string[] {
  const team = data.team;
  if (tab === 3)
    return [
      `Oracle transport: SQLcl ${data.sqlcl.mode.toUpperCase()} · restriction ${data.sqlcl.mcpRestrictLevel}`,
      `Trusted: ${data.trusted} · configured: ${data.configured}`,
      'Future team defaults: ' + JSON.stringify(data.preferences),
      ...JSON.stringify(
        {
          project: data.configuration,
          toolchain: data.toolchain,
          connections: data.connections,
          authorization: data.permissions,
        },
        null,
        2,
      ).split('\n'),
    ];
  if (tab === 2)
    return [
      'APEX OPERATIONS',
      ...data.jobs.flatMap((job) => [`${job.operation} · ${job.status}`, job.summary]),
      ...(data.jobs.length ? [] : ['No operation jobs recorded.']),
      '',
      'DEPLOYMENT & IMPORT JOURNAL',
      ...data.deployments.flatMap((run) => [run.status + ' · ' + run.at, run.details]),
      '',
      'Commands: apexrest apex validate · apexrest test unit · apexrest deploy plan --env NAME --out PATH',
      'Existing project trust and deployment authorization remain required.',
    ];
  const lines = [
    team
      ? `TEAM · ${team.status} · ${team.phase} · revision ${team.revision}`
      : 'No team yet. Use apexrest team start "Task" in Codex.',
    '',
  ];
  if (data.task) lines.push(data.task, '');
  for (const member of team?.members ?? [])
    lines.push(
      `${teamLabel(member.role)} · ${member.status}`,
      member.currentAction?.title ?? 'No active tool reported',
      [
        member.configuration?.model,
        member.configuration?.reasoningEffort,
        member.configuration?.sandbox,
        member.totalTokens == null ? '' : member.totalTokens + ' tokens',
      ]
        .filter(Boolean)
        .join(' · '),
      '',
    );
  if (tab === 1) {
    lines.push('MANDATORY REVIEWS');
    for (const r of team?.reviews ?? [])
      lines.push(
        `${r.phase}: ${r.report.decision} · revision ${r.revision}`,
        r.report.summary,
        ...r.report.findings,
      );
    for (const q of team?.qa ?? [])
      lines.push(
        `QA: ${q.report.decision} · revision ${q.revision}`,
        q.report.summary,
        ...q.report.checks.map((c) => `${c.status} · ${c.name}: ${c.evidence}`),
      );
    lines.push('', 'PEER MESSAGES');
    for (const m of team?.messages ?? [])
      lines.push(`${teamLabel(m.from)} → ${teamLabel(m.to)} · ${m.status}`, m.text);
  } else {
    lines.push('WORKING CHANGES', ...data.changes.files, '', 'OBSERVED AGENT STEPS');
    for (const o of [...(team?.observations ?? [])].reverse())
      lines.push(`${teamLabel(o.role)} · ${o.kind}`, o.detail);
  }
  if (team?.diagnostics.length) lines.push('', ...team.diagnostics);
  return lines;
}

export async function runPanelTui(root: string) {
  if (!process.stdin.isTTY || !process.stdout.isTTY || process.env.TERM === 'dumb')
    throw new Fault('TTY_REQUIRED', 'Use an interactive Codex terminal, or apexrest panel status --json.', 2);
  const service = new PanelService(root),
    output = process.stdout,
    input = process.stdin;
  let data: PanelSnapshot | undefined,
    error = '',
    tab = 0,
    offset = 0,
    refreshing = false,
    stopped = false;
  const color = !process.env.NO_COLOR;
  const draw = () => {
    if (stopped) return;
    const width = Math.max(20, output.columns || 80),
      height = Math.max(7, output.rows || 24);
    const body = data ? panelLines(data, tab).flatMap((line) => wrap(line, width - 2)) : [];
    offset = Math.max(0, Math.min(offset, Math.max(0, body.length - (height - 6))));
    const lines = [
      paint(' APEXREST · Development panel', 'accent', color),
      clip(' ' + root, width),
      ['Overview', 'Agent team', 'APEX operations', 'Settings']
        .map((name, i) => `${i + 1} ${i === tab ? '[' + name + ']' : name}`)
        .join('  '),
      error
        ? 'Disconnected · ' + error
        : data
          ? 'Live · ' + new Date(data.updatedAt).toLocaleTimeString()
          : 'Connecting…',
      ...body.slice(offset, offset + height - 6),
      '1–4 / ←→ views · ↑↓ scroll · r refresh · q exit | Actions: apexrest panel action --help',
    ];
    output.write('\x1b[H\x1b[2J' + lines.map((line, i) => (i === 0 ? line : clip(line, width))).join('\r\n'));
  };
  const refresh = async () => {
    if (refreshing || stopped) return;
    refreshing = true;
    try {
      data = await service.snapshot();
      error = '';
    } catch (e) {
      error = e instanceof Error ? e.message : String(e);
    } finally {
      refreshing = false;
      draw();
    }
  };
  const wasRaw = input.isRaw;
  emitKeypressEvents(input);
  input.setRawMode(true);
  input.resume();
  output.write('\x1b[?1049h\x1b[?25l');
  await new Promise<void>((resolve) => {
    const close = () => {
      if (stopped) return;
      stopped = true;
      clearInterval(timer);
      input.off('keypress', key);
      output.off('resize', draw);
      process.off('SIGINT', close);
      process.off('SIGTERM', close);
      input.setRawMode(wasRaw);
      input.pause();
      output.write('\x1b[?25h\x1b[?1049l');
      resolve();
    };
    const key = (_text: string, k: { name?: string; ctrl?: boolean }) => {
      if (k.name === 'q' || (k.ctrl && k.name === 'c')) return close();
      if (/^[1-4]$/.test(k.name ?? '')) {
        tab = Number(k.name) - 1;
        offset = 0;
      }
      if (k.name === 'right' || k.name === 'left') {
        tab = (tab + (k.name === 'right' ? 1 : 3)) % 4;
        offset = 0;
      }
      if (k.name === 'up') offset--;
      if (k.name === 'down') offset++;
      if (k.name === 'pageup') offset -= 10;
      if (k.name === 'pagedown') offset += 10;
      if (k.name === 'r') void refresh();
      else draw();
    };
    const timer = setInterval(() => {
      void refresh();
    }, 2000);
    input.on('keypress', key);
    output.on('resize', draw);
    process.once('SIGINT', close);
    process.once('SIGTERM', close);
    void refresh();
  });
}
