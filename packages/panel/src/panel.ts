import type { PanelSnapshot } from '../../core/src/panel.ts';
import type { PanelAction } from '../../core/src/panel-schema.ts';
import { teamIdentities, teamLabel } from '../../core/src/team-identity.ts';
import { avatars } from './avatars.ts';
import logo from '../../../plugins/apexrest-apex/assets/apexrest-logo.svg';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
const input = (id: string) => $<HTMLInputElement>(id);
const node = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text = '') => {
  const element = document.createElement(tag);
  element.className = cls;
  element.textContent = text;
  return element;
};
const human = (value: string) =>
  value === 'qa'
    ? 'QA'
    : value === 'inProgress'
      ? 'Working'
      : value
          .replaceAll('_', ' ')
          .replaceAll('-', ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase());
const active = (s: string) => ['running', 'queued', 'inProgress', 'cancelling'].includes(s);
const badge = (value: string) =>
  node(
    'span',
    'badge ' +
      (['completed', 'pass', 'passed', 'approve', 'succeeded', 'live'].includes(value)
        ? 'good'
        : active(value)
          ? 'running'
          : [
                'failed',
                'fail',
                'blocked',
                'review_failed',
                'verification_failed',
                'outcome_unknown',
                'unavailable',
              ].includes(value)
            ? 'bad'
            : ['revise', 'review_stale', 'result_stale', 'not_run', 'cancelled'].includes(value)
              ? 'warn'
              : ''),
    human(value),
  );
const empty = (message: string) => node('div', 'empty', message);
const card = (title: string, content: HTMLElement, subtitle?: string) => {
  const box = node('div', 'card'),
    heading = node('div', 'section-heading'),
    label = node('div');
  label.append(node('h2', '', title));
  if (subtitle) label.append(node('p', 'subtle', subtitle));
  heading.append(label);
  box.append(heading, content);
  return box;
};
const kv = (items: [string, unknown][]) => {
  const dl = node('dl');
  for (const [key, value] of items) {
    const row = node('div', 'kv');
    row.append(node('dt', '', key), node('dd', '', value == null ? 'Not available' : String(value)));
    dl.append(row);
  }
  return dl;
};
const codeDetails = (title: string, value: unknown) => {
  const d = node('details');
  d.append(node('summary', '', title), node('pre', '', JSON.stringify(value, null, 2)));
  return d;
};
const notice = (message: string, error = false) => {
  const box = $('notice');
  box.hidden = !message;
  box.classList.toggle('error', error);
  box.textContent = message;
};

const launch = new URLSearchParams(location.hash.slice(1));
let snapshot: PanelSnapshot | undefined,
  chosenTeam: string | undefined = launch.get('team') ?? undefined,
  busy = false,
  connected = false,
  initialized = false,
  sqlclDirty = false,
  sqlclSignature = '',
  preferencesDirty = false,
  preferencesSignature = '';
let bridgeProject: string | undefined,
  bridgeReady = false,
  requestId = 0;
let currentView = 'overview',
  savedConnectionsState: 'idle' | 'loading' | 'loaded' | 'error' = 'idle',
  savedConnectionNames: string[] = [],
  savedConnectionsError = '';
const embedded = window.parent !== window;
const token = launch.get('session') ?? '';
const pending = new Map<
  number,
  { resolve: (v: unknown) => void; reject: (e: Error) => void; timer: ReturnType<typeof setTimeout> }
>();
function bridge(method: string, params: unknown): Promise<unknown> {
  const id = ++requestId;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error('Codex did not answer the panel request.'));
    }, 20000);
    pending.set(id, { resolve, reject, timer });
    window.parent.postMessage({ jsonrpc: '2.0', id, method, params }, '*');
  });
}
window.addEventListener('message', (event) => {
  if (event.source !== window.parent || !embedded || !event.data || event.data.jsonrpc !== '2.0') return;
  const message = event.data;
  const waiter = pending.get(message.id);
  if (waiter) {
    clearTimeout(waiter.timer);
    pending.delete(message.id);
    if (message.error) waiter.reject(new Error(String(message.error.message)));
    else waiter.resolve(message.result);
  }
  if (
    message.method === 'ui/notifications/tool-input' &&
    typeof message.params?.arguments?.project === 'string'
  )
    bridgeProject = message.params.arguments.project;
  if (message.method === 'ui/notifications/tool-result') {
    const result = message.params?._meta?.['apexrest/panelResult'] ?? message.params?.structuredContent;
    if (typeof result?.data?.project === 'string') bridgeProject = result.data.project;
    if (bridgeProject) void refresh();
  }
});
async function api(action?: PanelAction): Promise<unknown> {
  if (embedded) {
    if (action?.kind === 'connection' && action.password)
      throw new Error('Enter the password in the local dashboard or use CLI --password-file.');
    if (!bridgeReady || !bridgeProject) throw new Error('Waiting for the Codex workspace context.');
    const response = (await bridge('tools/call', {
      name: action ? 'apexrest_panel_action' : 'apexrest_panel_status',
      arguments: {
        project: bridgeProject,
        ...(action ? { action } : chosenTeam ? { team: chosenTeam } : {}),
      },
    })) as {
      _meta?: { 'apexrest/panelResult'?: { ok: boolean; summary: string; data: unknown } };
      structuredContent?: { ok: boolean; summary: string; data: unknown };
      content?: { type: string; text?: string }[];
    };
    const envelope =
      response._meta?.['apexrest/panelResult'] ??
      response.structuredContent ??
      JSON.parse(response.content?.find((c) => c.type === 'text')?.text ?? '{}');
    if (!envelope.ok) throw new Error(envelope.summary ?? 'Codex rejected this panel action.');
    return envelope.data;
  }
  const response = await fetch(
    action ? '/api/action' : '/api/status' + (chosenTeam ? '?team=' + encodeURIComponent(chosenTeam) : ''),
    {
      method: action ? 'POST' : 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        ...(action ? { 'Content-Type': 'application/json' } : {}),
      },
      ...(action ? { body: JSON.stringify(action) } : {}),
      signal: AbortSignal.timeout(action?.kind === 'saved-connections' ? 60000 : 15000),
    },
  );
  const result = await response.json();
  if (!response.ok) throw new Error(result.summary ?? result.error ?? 'The local panel request failed.');
  return result;
}
function renderSavedConnections(selected = input('connection-direct').value) {
  const select = $<HTMLSelectElement>('connection-direct'),
    current = snapshot?.connections[input('connection-ref').value.trim()]?.name,
    selectedCurrent = !!current && selected === current,
    names = [
      ...new Set([...savedConnectionNames, ...(current ? [current] : []), ...(selected ? [selected] : [])]),
    ];
  const placeholder = node('option', '', 'Choose a saved connection');
  placeholder.value = '';
  select.replaceChildren(
    placeholder,
    ...names.map((name) => {
      const retained = !savedConnectionNames.includes(name);
      const label =
        retained && savedConnectionsState === 'loaded'
          ? `${name} · ${name === current ? 'current mapping' : 'previous selection'} (not in SQLcl list)`
          : retained && name === current
            ? `${name} · current mapping`
            : name;
      const option = node('option', '', label);
      option.value = name;
      return option;
    }),
  );
  select.value = selected;
  select.disabled = savedConnectionsState === 'loading';
  const status = $('saved-connections-status');
  status.dataset.state = savedConnectionsState;
  status.textContent =
    savedConnectionsState === 'loading'
      ? 'Loading saved connections from SQLcl…'
      : savedConnectionsState === 'error'
        ? 'Could not load saved SQLcl connections. ' + savedConnectionsError + ' Use Retry to try again.'
        : savedConnectionsState === 'loaded'
          ? savedConnectionNames.length
            ? `${savedConnectionNames.length} saved SQLcl connection${savedConnectionNames.length === 1 ? '' : 's'} loaded.${selectedCurrent && !savedConnectionNames.includes(current) ? ' The current mapping is retained even though SQLcl did not list it.' : ''}`
            : 'No saved SQLcl connections found. Save a direct connection in SQLcl, then refresh.' +
              (selectedCurrent ? ' The current mapping is retained.' : '')
          : snapshot && !snapshot.trusted
            ? 'Trust this project before loading saved SQLcl connections.'
            : 'Saved connections load when you open Direct connection settings.';
  $('saved-connections-refresh').textContent =
    savedConnectionsState === 'loading'
      ? 'Loading…'
      : savedConnectionsState === 'error'
        ? 'Retry'
        : savedConnectionsState === 'idle'
          ? 'Load saved connections'
          : 'Refresh saved connections';
  controls();
}
async function loadSavedConnections(force = false) {
  if (
    !connected ||
    !snapshot?.trusted ||
    busy ||
    savedConnectionsState === 'loading' ||
    (!force && savedConnectionsState === 'loaded')
  )
    return;
  savedConnectionsState = 'loading';
  savedConnectionsError = '';
  renderSavedConnections();
  try {
    const result = (await api({ kind: 'saved-connections' })) as {
      source?: unknown;
      connections?: { name?: unknown }[];
    };
    if (
      result.source !== 'sqlcl-store' ||
      !Array.isArray(result.connections) ||
      result.connections.some((connection) => typeof connection?.name !== 'string' || !connection.name)
    )
      throw new Error('SQLcl returned an invalid connection list.');
    savedConnectionNames = result.connections.map((connection) => connection.name as string);
    savedConnectionsState = 'loaded';
  } catch (error) {
    savedConnectionsState = 'error';
    savedConnectionsError = error instanceof Error ? error.message : String(error);
  }
  renderSavedConnections();
}
function controls() {
  const canAct = connected && !!snapshot?.trusted && !busy;
  for (const id of ['new-task', 'validate', 'run-tests', 'plan'])
    $<HTMLButtonElement>(id).disabled = !canAct || !snapshot?.configured;
  for (const form of ['sqlcl-form', 'connection-form', 'preferences-form', 'task-form'])
    $(form)
      .querySelectorAll<HTMLButtonElement>('button[type=submit]')
      .forEach((button) => {
        button.disabled = !canAct;
      });
  $<HTMLButtonElement>('saved-connections-refresh').disabled = !canAct || savedConnectionsState === 'loading';
  $<HTMLButtonElement>('connection-save').disabled =
    !canAct || (input('sqlcl-transport').value === 'direct' && savedConnectionsState === 'loading');
  $('message-form')
    .querySelectorAll<HTMLButtonElement>('button')
    .forEach((b) => {
      b.disabled = !canAct || !snapshot?.team || !active(snapshot.team.status);
    });
}
async function act(action: PanelAction) {
  if (busy || !connected) return;
  busy = true;
  controls();
  try {
    const result = (await api(action)) as { teamId?: string };
    if (action.kind === 'start' && result.teamId) {
      chosenTeam = result.teamId;
      $<HTMLDialogElement>('task-dialog').close();
      view('team');
    }
    notice(
      ['sqlcl', 'connection', 'preferences'].includes(action.kind)
        ? 'Settings saved for future runs.'
        : action.kind === 'message'
          ? 'Task update queued for the active workflow.'
          : action.kind.startsWith('cancel')
            ? 'Stop requested. Existing changes are not rolled back.'
            : 'Operation accepted. Follow its actual status below.',
    );
    if (action.kind === 'message') input('message').value = '';
    if (action.kind === 'preferences') preferencesDirty = false;
    if (action.kind === 'sqlcl') sqlclDirty = false;
    if (action.kind === 'connection') input('connection-ords-password').value = '';
    await refresh();
  } catch (error) {
    notice(error instanceof Error ? error.message : String(error), true);
  } finally {
    busy = false;
    controls();
  }
}
const rendered = new Map<string, string>();
function draw(id: string, data: unknown, render: () => HTMLElement[]) {
  const key = JSON.stringify(data);
  if (rendered.get(id) === key) return;
  // Live polling must not replace a focused control while the user is operating it.
  if ($(id).contains(document.activeElement) && document.activeElement !== document.body) return;
  $(id).replaceChildren(...render());
  rendered.set(id, key);
}
function pipeline(data: PanelSnapshot) {
  const team = data.team,
    box = node('div');
  if (!team) {
    box.append(empty('No run yet. Start a task to follow its agents, tools and verification here.'));
    return card('Development workflow', box);
  }
  const head = node('div', 'section-heading');
  if (data.task) box.append(node('p', 'task-summary', data.task));
  head.append(node('h3', '', 'Revision ' + team.revision), badge(team.status));
  box.append(head);
  if (team.modelPolicy)
    box.append(
      node(
        'p',
        'subtle',
        'Auto models · ' + team.modelPolicy.complexity + ' task · ' + team.modelPolicy.reason,
      ),
    );
  if (team.limits)
    box.append(
      node(
        'p',
        'subtle',
        'Task time limit: ' +
          team.limits.timeoutSeconds +
          ' seconds. Token counts are cumulative, including cached input; they are not a cost estimate.',
      ),
    );
  const stages =
      team.executionMode === 'single'
        ? ['planning', 'development', 'verification']
        : ['planning', 'development', 'code_review', 'qa', 'final_review'],
    index = stages.indexOf(team.phase);
  const bar = node('div', 'steps');
  stages.forEach((phase, i) =>
    bar.append(
      node(
        'div',
        'step ' + (team.status === 'completed' || i < index ? 'done' : i === index ? 'active' : ''),
        human(phase),
      ),
    ),
  );
  box.append(bar);
  const agents = node('div', 'agents');
  for (const member of team.members) {
    const cell = node('article', 'agent'),
      title = node('div', 'agent-title'),
      label = node('h3'),
      avatar = node('img', 'avatar'),
      identity = teamIdentities[member.role];
    avatar.src = avatars[member.role];
    avatar.alt = identity.name;
    avatar.width = 64;
    avatar.height = 64;
    label.append(
      node('span', '', member.name ?? identity.name),
      node('small', 'subtle', team.executionMode === 'single' ? 'Single agent' : identity.label),
    );
    title.append(avatar);
    title.append(label);
    cell.append(
      title,
      badge(member.status),
      node(
        'p',
        'agent-action',
        member.currentAction?.title ??
          (member.status === 'completed'
            ? 'Assigned step completed'
            : member.status === 'inProgress'
              ? 'Working on the current phase'
              : 'Waiting for the scheduled step'),
      ),
    );
    const meta = node('div', 'agent-meta');
    meta.append(
      node('span', '', member.configuration?.model ?? 'Model not reported'),
      node(
        'span',
        '',
        [
          member.configuration?.reasoningEffort,
          member.configuration?.sandbox,
          member.totalTokens == null ? '' : member.totalTokens.toLocaleString() + ' cumulative tokens',
        ]
          .filter(Boolean)
          .join(' · '),
      ),
    );
    if (member.selection)
      meta.append(node('span', '', 'Auto · ' + member.selection.tier + ' · ' + member.selection.reason));
    if (member.tokenUsage)
      meta.append(
        node(
          'span',
          '',
          [
            member.tokenUsage.inputTokens == null
              ? ''
              : 'Input ' + member.tokenUsage.inputTokens.toLocaleString(),
            member.tokenUsage.cachedInputTokens == null
              ? ''
              : 'Cached input ' + member.tokenUsage.cachedInputTokens.toLocaleString(),
            member.tokenUsage.outputTokens == null
              ? ''
              : 'Output ' + member.tokenUsage.outputTokens.toLocaleString(),
            member.tokenUsage.reasoningOutputTokens == null
              ? ''
              : 'Reasoning output ' + member.tokenUsage.reasoningOutputTokens.toLocaleString(),
          ]
            .filter(Boolean)
            .join(' · '),
        ),
      );
    cell.append(meta);
    agents.append(cell);
  }
  box.append(agents);
  if (team.diagnostics.length) box.append(node('p', 'notice error', team.diagnostics.join('\n')));
  if (team.result) box.append(node('p', 'notice', team.result));
  return card(
    'Development workflow',
    box,
    (team.executionMode === 'single'
      ? 'Single agent · implementation and self-verification'
      : 'Agent team · mandatory manager and QA reviews') +
      ' · Browser: ' +
      (team.browserMode === 'external' ? 'External' : 'Codex in-app'),
  );
}
function reviews(data: PanelSnapshot) {
  const box = node('div'),
    team = data.team;
  if (team?.executionMode === 'single')
    box.append(
      node(
        'p',
        'subtle',
        'Checks performed by the implementation agent. Independent manager review and QA are not part of this run.',
      ),
    );
  if (!team?.reviews.length && !team?.qa.length && !team?.verification?.length)
    box.append(empty('Review evidence appears after development.'));
  for (const item of team?.reviews ?? []) {
    const row = node('div', 'review'),
      head = node('div', 'section-heading');
    head.append(
      node('h3', '', human(item.phase) + ' · revision ' + item.revision),
      badge(item.report.decision),
    );
    row.append(head, node('p', '', item.report.summary));
    const list = node('ul');
    item.report.findings.forEach((finding) => list.append(node('li', '', finding)));
    if (list.childNodes.length) row.append(list);
    box.append(row);
  }
  for (const item of team?.executionMode === 'single' ? (team.verification ?? []) : (team?.qa ?? [])) {
    const row = node('div', 'review'),
      head = node('div', 'section-heading');
    head.append(
      node(
        'h3',
        '',
        (team?.executionMode === 'single' ? 'Agent verification · revision ' : 'Independent QA · revision ') +
          item.revision,
      ),
      badge(item.report.decision),
    );
    row.append(head, node('p', '', item.report.summary));
    for (const check of item.report.checks) {
      const checkRow = node('div', 'review');
      checkRow.append(badge(check.status), node('p', '', check.name), node('p', 'subtle', check.evidence));
      row.append(checkRow);
    }
    box.append(row);
  }
  return card('Reviews & verification', box);
}
function activity(data: PanelSnapshot) {
  const box = node('div'),
    records = data.team?.observations ?? [];
  if (!records.length) box.append(empty('Observed tool activity will appear here.'));
  for (const item of [...records].reverse()) {
    const row = node('div', 'activity');
    row.append(
      node('h3', '', teamLabel(item.role) + ' · ' + human(item.kind)),
      node('span', 'subtle', 'Revision ' + item.revision + ' · ' + human(item.phase)),
      node('p', '', item.detail),
    );
    box.append(row);
  }
  return card('Observed activity', box, 'From Codex events, not estimated progress');
}
function messages(data: PanelSnapshot) {
  const box = node('div');
  if (!data.team?.messages.length) box.append(empty('Task updates and agent messages will appear here.'));
  for (const message of data.team?.messages ?? []) {
    const row = node('div', 'activity');
    row.append(
      node('h3', '', teamLabel(message.from) + ' → ' + teamLabel(message.to)),
      badge(message.status),
      node('p', '', message.text),
    );
    box.append(row);
  }
  return card('Communication', box);
}
function operations(data: PanelSnapshot) {
  const box = node('div', 'table-wrap');
  if (!data.jobs.length) box.append(empty('No APEX operation jobs recorded for this project.'));
  else {
    const table = node('table'),
      head = node('tr');
    ['Operation', 'Status', 'Result', ''].forEach((s) => head.append(node('th', '', s)));
    const thead = node('thead');
    thead.append(head);
    table.append(thead);
    const body = node('tbody');
    for (const job of data.jobs) {
      const row = node('tr'),
        state = node('td'),
        summary = node('td'),
        action = node('td');
      state.append(badge(job.status));
      summary.append(node('p', '', job.summary || 'Awaiting a result'));
      if (job.diagnostics.length || job.artifacts.length)
        summary.append(
          codeDetails('Diagnostics & artifacts', { diagnostics: job.diagnostics, artifacts: job.artifacts }),
        );
      if (active(job.status)) {
        const stop = node('button', 'danger', 'Stop');
        stop.disabled = !connected || busy || !data.trusted;
        stop.onclick = () => {
          void act({ kind: 'cancel-job', id: job.id });
        };
        action.append(stop);
      }
      row.append(node('td', '', job.operation), state, summary, action);
      body.append(row);
    }
    table.append(body);
    box.append(table);
  }
  const output = [card('Operation jobs', box, 'Compile, export, tests and deployment work')];
  const deployments = node('div');
  if (!data.deployments.length) deployments.append(empty('No deployment runs recorded.'));
  for (const deployment of data.deployments) {
    const row = node('div', 'review');
    row.append(
      badge(deployment.status),
      node('p', 'subtle', new Date(deployment.at).toLocaleString()),
      node('pre', '', deployment.details),
    );
    deployments.append(row);
  }
  output.push(
    card(
      'Deployment & import journal',
      deployments,
      'Actual durable runtime state; an unknown outcome remains unknown',
    ),
  );
  return output;
}
function render(data: PanelSnapshot) {
  const connectionsChanged = JSON.stringify(snapshot?.connections) !== JSON.stringify(data.connections);
  snapshot = data;
  connected = true;
  $('project-name').textContent = data.configuration?.application.alias ?? 'Unconfigured workspace';
  $('project-path').textContent = data.project;
  $('version').textContent = data.version;
  $('connection').className = 'badge good';
  $('connection').textContent = 'Live';
  $('updated').textContent = 'Updated ' + new Date(data.updatedAt).toLocaleTimeString();
  $('connection-error').hidden = true;
  document.body.dataset.disconnected = 'false';
  const nextPreferences = JSON.stringify(data.preferences);
  const nextSqlcl = JSON.stringify(data.sqlcl);
  if (!sqlclDirty && nextSqlcl !== sqlclSignature) {
    input('sqlcl-mode').value = data.sqlcl.mode;
    input('sqlcl-level').value = data.sqlcl.mcpRestrictLevel;
    input('sqlcl-transport').value = data.sqlcl.databaseTransport ?? 'direct';
    sqlclControls();
    sqlclSignature = nextSqlcl;
  }
  if (!preferencesDirty && nextPreferences !== preferencesSignature) {
    for (const prefix of ['default', 'task']) {
      input(prefix + '-execution-mode').value = data.preferences.executionMode;
      input(prefix + '-browser-mode').value = data.preferences.browserMode;
      input(prefix + '-developers').value = String(data.preferences.developers);
      modeControls(prefix);
      input(prefix + '-sandbox').value = data.preferences.sandbox;
      input(prefix + '-timeout').value = String(data.preferences.timeoutSeconds);
    }
    preferencesSignature = nextPreferences;
  }
  if (!initialized) {
    initialized = true;
    if (embedded) {
      input('connection-ords-password').disabled = true;
      $('connection-password-note').textContent =
        'Set the password in the local dashboard opened by apexrest panel open, or use CLI --password-file. Passwords are never sent through the embedded Codex panel.';
    }
    const environment = $<HTMLSelectElement>('environment');
    for (const [name, env] of Object.entries(data.configuration?.environments ?? {})) {
      const option = node('option', '', name + ' · ' + env.kind);
      option.value = name;
      environment.append(option);
    }
    if (!data.configured)
      notice(
        'This folder has no apexrest.json. Initialize or open an APEXREST application project to run development tasks.',
      );
    else if (!data.trusted)
      notice(
        'This project is not trusted in APEXREST. The panel can display its state; actions require the existing project trust setup.',
      );
  }
  draw('connection-refs', [data.connections, data.configuration?.environments], () =>
    Array.from(
      new Set([
        ...Object.keys(data.connections),
        ...Object.values(data.configuration?.environments ?? {}).flatMap((env) => [
          env.readConnectionRef,
          env.deployConnectionRef,
        ]),
      ]),
    ).map((name) => {
      const option = node('option');
      option.value = name;
      return option;
    }),
  );
  const teamSelect = $<HTMLSelectElement>('team-select');
  if (document.activeElement !== teamSelect) {
    const options = data.teams.map((team) => {
      const option = node(
        'option',
        '',
        human(team.status) +
          ' · revision ' +
          team.revision +
          ' · ' +
          new Date(team.updatedAt).toLocaleTimeString(),
      );
      option.value = team.id;
      return option;
    });
    teamSelect.replaceChildren(...options);
    teamSelect.value = data.team?.id ?? '';
    teamSelect.disabled = !options.length;
  }
  draw(
    'metrics',
    [
      data.teams,
      data.sqlcl,
      data.jobs,
      data.team?.status,
      data.team?.executionMode,
      data.preferences.executionMode,
    ],
    () =>
      [
        [
          'Active runs',
          String(data.teams.filter((team) => active(team.status)).length),
          data.team ? human(data.team.phase) : 'Ready for a new task',
        ],
        [
          (data.team?.executionMode ?? data.preferences.executionMode) === 'single'
            ? 'Verification'
            : 'Review gate',
          data.team ? human(data.team.status) : 'No result',
          (data.team?.executionMode ?? data.preferences.executionMode) === 'single'
            ? 'Single-agent checks'
            : 'Manager + independent QA',
        ],
        [
          'APEX operations',
          String(data.jobs.filter((job) => active(job.status)).length),
          'Running or queued',
        ],
        [
          'Database connectivity',
          data.sqlcl.databaseTransport === 'ords' ? 'ORDS HTTP(S)' : 'Direct Oracle',
          data.sqlcl.mode === 'mcp' ? 'SQLcl MCP · restriction ' + data.sqlcl.mcpRestrictLevel : 'SQLcl CLI',
        ],
      ].map(([label, value, sub]) => {
        const box = node('div', 'metric');
        box.append(node('div', 'subtle', label), node('div', 'value', value), node('div', 'subtle', sub));
        return box;
      }),
  );
  const stableTeam = data.team ? { ...data.team, updatedAt: '' } : null;
  draw('overview-live', [stableTeam, data.changes, data.configuration, data.trusted], () => {
    const columns = node('div', 'two-columns'),
      changeBox = node('div');
    changeBox.append(
      data.changes.files.length
        ? node('pre', '', data.changes.files.join('\n'))
        : empty(
            data.changes.status === 'available'
              ? 'No uncommitted Git changes.'
              : 'Git status is unavailable for this folder.',
          ),
    );
    columns.append(
      card(
        'Project context',
        kv([
          ['Application', data.configuration?.application.alias],
          ['Source', data.configuration?.application.sourceDir],
          [
            'Environments',
            Object.keys(data.configuration?.environments ?? {}).join(', ') || 'None configured',
          ],
          ['Required suites', data.configuration?.tests.requiredSuites.join(', ') || 'None declared'],
          ['Trust', data.trusted ? 'Trusted project' : 'Not granted'],
        ]),
      ),
      card('Working changes', changeBox),
    );
    return [pipeline(data), columns, activity(data)];
  });
  draw('team-live', stableTeam, () => {
    const columns = node('div', 'two-columns');
    columns.append(reviews(data), messages(data));
    return [pipeline(data), columns, activity(data)];
  });
  draw('operations-live', [data.jobs, data.deployments, busy], () => operations(data));
  draw(
    'settings-live',
    [
      data.preferences,
      data.configuration,
      data.connections,
      data.toolchain,
      data.permissions,
      stableTeam?.members.map((m) => m.configuration),
    ],
    () => {
      const box = node('div');
      box.append(
        card(
          'Project & target settings',
          kv([
            ['Project', data.project],
            ['Source directory', data.configuration?.application.sourceDir],
            ['Artifacts', data.configuration?.artifacts.directory],
            [
              'Artifact retention',
              data.configuration ? data.configuration.artifacts.retentionDays + ' days' : null,
            ],
            ['Required suites', data.configuration?.tests.requiredSuites.join(', ') || 'None declared'],
            ['Automated browser', data.configuration?.tests.defaultBrowser],
            [
              'Verification browser',
              data.preferences.browserMode === 'external'
                ? 'External system browser'
                : 'Codex in-app browser',
            ],
            ['Execution mode', data.preferences.executionMode === 'single' ? 'Single agent' : 'Agent team'],
            ['Active deploy/test grants', data.permissions.activeGrants.length],
          ]),
        ),
      );
      for (const [name, env] of Object.entries(data.configuration?.environments ?? {}))
        box.append(
          card(
            name + ' · ' + human(env.kind),
            kv([
              ['Application ID', env.applicationId],
              ['Workspace', env.workspace],
              ['Parsing schema', env.parsingSchema],
              ['Database', env.databaseIdentity.dbUniqueName],
              ['Service', env.databaseIdentity.serviceName],
              ['Read connection', env.readConnectionRef],
              ['Deploy connection', env.deployConnectionRef],
              ['Control mode', env.deploymentControl ?? 'local'],
              ['Application URL', env.baseUrl],
            ]),
          ),
        );
      box.append(
        card(
          'Configuration details',
          codeDetails('Project, toolchain and connection references', {
            configuration: data.configuration,
            toolchain: data.toolchain,
            connectionReferences: data.connections,
            authorization: data.permissions,
          }),
        ),
      );
      return [box];
    },
  );
  if (connectionsChanged) renderSavedConnections();
  controls();
  if (
    currentView === 'settings' &&
    input('sqlcl-transport').value === 'direct' &&
    savedConnectionsState === 'idle'
  )
    void loadSavedConnections();
}
let refreshing = false;
async function refresh() {
  if (refreshing) return;
  refreshing = true;
  try {
    render((await api()) as PanelSnapshot);
  } catch (error) {
    connected = false;
    $('connection').textContent = 'Disconnected';
    $('connection').className = 'badge bad';
    $('connection-error').hidden = false;
    $('connection-error').textContent =
      (error instanceof Error ? error.message : String(error)) +
      (snapshot ? ' Showing the last received state.' : '');
    document.body.dataset.disconnected = 'true';
    controls();
  } finally {
    refreshing = false;
  }
}
const views: Record<string, [string, string]> = {
  overview: ['Workspace overview', 'Your team, settings and APEX work in one place.'],
  team: ['Agents', 'Follow implementation, communication and verification.'],
  operations: ['APEX operations', 'Compile, verify and follow deployment state.'],
  settings: ['Workspace settings', 'Inspect effective configuration and choose defaults for future work.'],
};
function view(name: string) {
  currentView = name;
  document.querySelectorAll<HTMLElement>('[data-page]').forEach((page) => {
    page.hidden = page.dataset.page !== name;
  });
  document.querySelectorAll('[data-view]').forEach((button) => {
    if ((button as HTMLElement).dataset.view === name) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  const titles = views[name]!;
  $('view-title').textContent = titles[0];
  $('view-subtitle').textContent = titles[1];
  if (name === 'settings' && input('sqlcl-transport').value === 'direct') void loadSavedConnections();
}
document.querySelectorAll<HTMLButtonElement>('[data-view]').forEach((button) => {
  button.onclick = () => view(button.dataset.view!);
});
$('refresh').onclick = () => {
  void refresh();
};
$('new-task').onclick = () => {
  if (snapshot) {
    input('task-execution-mode').value = snapshot.preferences.executionMode;
    input('task-browser-mode').value = snapshot.preferences.browserMode;
    input('task-developers').value = String(snapshot.preferences.developers);
    modeControls('task');
    input('task-sandbox').value = snapshot.preferences.sandbox;
    input('task-timeout').value = String(snapshot.preferences.timeoutSeconds);
  }
  $<HTMLDialogElement>('task-dialog').showModal();
  input('task').focus();
};
$('close-task').onclick = () => $<HTMLDialogElement>('task-dialog').close();
$('team-select').onchange = () => {
  chosenTeam = input('team-select').value || undefined;
  void refresh();
};
$('task-form').onsubmit = (event) => {
  event.preventDefault();
  void act({
    kind: 'start',
    request: {
      task: input('task').value,
      executionMode: input('task-execution-mode').value as 'team' | 'single',
      browserMode: input('task-browser-mode').value as 'codex' | 'external',
      developers: Number(input('task-developers').value),
      sandbox: input('task-sandbox').value as 'read-only' | 'workspace-write',
      timeoutSeconds: Number(input('task-timeout').value),
    },
  });
};
function modeControls(prefix: string) {
  if (prefix === 'task') {
    const teamOption =
      $<HTMLSelectElement>('task-execution-mode').querySelector<HTMLOptionElement>('option[value=team]')!;
    teamOption.disabled = !snapshot?.preferences.multiAgentEnabled;
    if (teamOption.disabled) input('task-execution-mode').value = 'single';
  }
  const single = input(prefix + '-execution-mode').value === 'single';
  input(prefix + '-developers').disabled = single;
  if (prefix === 'task')
    input('task-developers').value = single ? '1' : String(snapshot?.preferences.developers ?? 1);
  $(prefix + '-workflow-note').textContent = single
    ? 'Single agent is the default: one agent plans, implements and verifies. Enable Agent team explicitly in Settings and save to allow multi-agent runs.'
    : 'Plan → developers → manager review → independent QA → final manager review. Reviewers remain read only.';
}
for (const prefix of ['default', 'task'])
  input(prefix + '-execution-mode').onchange = () => modeControls(prefix);
$('preferences-form').oninput = () => {
  preferencesDirty = true;
};
$('preferences-form').onsubmit = (event) => {
  event.preventDefault();
  void act({
    kind: 'preferences',
    settings: {
      executionMode: input('default-execution-mode').value as 'team' | 'single',
      multiAgentEnabled: input('default-execution-mode').value === 'team',
      browserMode: input('default-browser-mode').value as 'codex' | 'external',
      developers: Number(input('default-developers').value),
      sandbox: input('default-sandbox').value as 'read-only' | 'workspace-write',
      timeoutSeconds: Number(input('default-timeout').value),
    },
  });
};
$('sqlcl-form').onsubmit = (event) => {
  event.preventDefault();
  void act({
    kind: 'sqlcl',
    settings: {
      schemaVersion: 1,
      mode: input('sqlcl-mode').value as 'cli' | 'mcp',
      mcpRestrictLevel: input('sqlcl-level').value as '4' | '1',
      databaseTransport: input('sqlcl-transport').value as 'direct' | 'ords',
    },
  });
};
function sqlclControls() {
  const ords = input('sqlcl-transport').value === 'ords';
  if (ords) input('sqlcl-mode').value = 'cli';
  $<HTMLSelectElement>('sqlcl-mode').querySelector<HTMLOptionElement>('option[value=mcp]')!.disabled = ords;
  input('sqlcl-level').disabled = input('sqlcl-mode').value !== 'mcp';
  $('sqlcl-transport-note').textContent = ords
    ? 'Connect through ORDS over HTTP(S) when the Oracle listener is unavailable. Uses SQLcl CLI and the ORDS settings for each connection reference below.'
    : 'Connect through the Oracle listener using saved SQLcl connections.';
  for (const [id, enabled] of [
    ['connection-direct-group', !ords],
    ['connection-ords-group', ords],
  ] as const) {
    const group = $<HTMLFieldSetElement>(id);
    group.hidden = !enabled;
    group.disabled = !enabled;
  }
  input('connection-ords-password').disabled = embedded;
  $('connection-mode-note').textContent = ords
    ? 'Editing ORDS HTTP(S) settings for the selected connection reference.'
    : 'Editing the direct Oracle connection for the selected connection reference.';
  $('connection-save').textContent = ords ? 'Save ORDS connection' : 'Save direct connection';
  controls();
}
$('sqlcl-form').oninput = (event) => {
  sqlclDirty = true;
  sqlclControls();
  if (
    (event.target as HTMLElement).id === 'sqlcl-transport' &&
    input('sqlcl-transport').value === 'direct' &&
    currentView === 'settings'
  )
    void loadSavedConnections();
};
$('saved-connections-refresh').onclick = () => {
  void loadSavedConnections(true);
};
input('connection-direct').onchange = () => renderSavedConnections();
input('connection-ref').onchange = () => {
  const connection = snapshot?.connections[input('connection-ref').value.trim()];
  renderSavedConnections(connection?.name ?? '');
  input('connection-ords-url').value = connection?.ords?.url ?? '';
  input('connection-ords-user').value = connection?.ords?.username ?? '';
  input('connection-ords-password').value = '';
};
$('connection-form').onsubmit = (event) => {
  event.preventDefault();
  const ords = input('sqlcl-transport').value === 'ords',
    sqlclName = input('connection-direct').value,
    ordsUrl = input('connection-ords-url').value.trim(),
    ordsUsername = input('connection-ords-user').value.trim(),
    password = input('connection-ords-password').value;
  if (ords && embedded && password) {
    notice('Enter the password in the local dashboard or use CLI --password-file.', true);
    return;
  }
  if (!ords && !sqlclName) {
    notice('Choose a saved SQLcl connection for this reference.', true);
    return;
  }
  if (ords && (!ordsUrl || !ordsUsername)) {
    notice('Enter the ORDS schema URL and your database username.', true);
    return;
  }
  void act({
    kind: 'connection',
    name: input('connection-ref').value.trim(),
    ...(!ords ? { sqlclName } : { ordsUrl, ordsUsername, ...(password ? { password } : {}) }),
  });
};
$('message-form').onsubmit = (event) => {
  event.preventDefault();
  if (snapshot?.team) void act({ kind: 'message', id: snapshot.team.id, message: input('message').value });
};
$('cancel-team').onclick = () => {
  if (snapshot?.team) void act({ kind: 'cancel-team', id: snapshot.team.id });
};
$('validate').onclick = () => {
  void act({ kind: 'validate' });
};
$('plan').onclick = () => {
  const env = input('environment').value;
  if (!env) {
    notice('Choose an explicit environment before planning a deployment.', true);
    return;
  }
  void act({ kind: 'plan', env });
};
$('run-tests').onclick = () => {
  const suite = input('suite').value as 'unit' | 'sql' | 'api' | 'e2e' | 'all',
    env = input('environment').value;
  if (suite !== 'unit' && !env) {
    notice('Choose an explicit environment for this test suite.', true);
    return;
  }
  void act({ kind: 'test', suite, ...(env ? { env } : {}) });
};
controls();
if (launch.get('view') === 'team') view('team');
const mark = document.querySelector('.brand-mark');
if (mark) {
  const icon = node('img');
  icon.src = logo;
  icon.alt = '';
  icon.width = 38;
  icon.height = 38;
  mark.replaceChildren(icon);
}
if (embedded) {
  void bridge('ui/initialize', {
    protocolVersion: '2026-01-26',
    appInfo: { name: 'apexrest-panel', version: '1.0.0' },
    appCapabilities: {},
  })
    .then(() => {
      bridgeReady = true;
      window.parent.postMessage({ jsonrpc: '2.0', method: 'ui/notifications/initialized', params: {} }, '*');
      void refresh();
    })
    .catch((error) => notice(String(error), true));
} else void refresh();
setInterval(() => {
  if (!document.hidden) void refresh();
}, 2000);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) void refresh();
});
