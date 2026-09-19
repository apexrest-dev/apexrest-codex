import { emitKeypressEvents, type Key } from 'node:readline';
import type { Readable, Writable } from 'node:stream';
import { dispatch } from '../../core/src/service.ts';
import { failure, Fault, sanitized, type Result } from '../../core/src/result.ts';
import { commands, commandPreview, fieldsFor, parseFields, type Command, type Field } from './tui-catalog.ts';
import { filterApexlang, loadApexlangCatalogue, type ApexlangCatalogue } from './tui-apexlang.ts';
import { homeFrame } from './tui-home.ts';
import { sqlclConfig, type SqlclConfig } from '../../core/src/sqlcl-config.ts';
import {
  clip,
  paint,
  wrap,
  terminalText,
  resultLines,
  resultTitle,
  resultTone,
  valueText,
  type Line,
  type Tone,
} from './tui-view.ts';
export { terminalText } from './tui-view.ts';

interface TerminalInput extends Readable {
  isTTY?: boolean;
  isRaw?: boolean;
  setRawMode(mode: boolean): unknown;
}
interface TerminalOutput extends Writable {
  isTTY?: boolean;
  columns?: number;
  rows?: number;
}
interface TuiOptions {
  project?: string;
  input?: TerminalInput;
  output?: TerminalOutput;
  execute?: typeof dispatch;
  loadCatalogue?: typeof loadApexlangCatalogue;
  loadSqlcl?: typeof sqlclConfig;
}
type FormRow = { kind: 'field'; field: Field } | { kind: 'advanced' } | { kind: 'review' };
export async function runTui({
  project = process.cwd(),
  input = process.stdin,
  output = process.stdout,
  execute = dispatch,
  loadCatalogue = loadApexlangCatalogue,
  loadSqlcl = sqlclConfig,
}: TuiOptions = {}): Promise<void> {
  if (!input.isTTY || !output.isTTY || process.env.TERM === 'dumb')
    throw new Fault(
      'TTY_REQUIRED',
      'The TUI requires an interactive terminal. Use apexrest --help for commands.',
      2,
    );

  let screen: 'menu' | 'form' | 'edit' | 'choices' | 'review' | 'running' | 'result' | 'connections' = 'menu';
  let query = '',
    selected = 0,
    fieldIndex = 0,
    scroll = 0,
    choiceIndex = 0;
  let homeFocus: 'actions' | 'apexlang' = 'actions';
  let catalogue: ApexlangCatalogue | undefined;
  let catalogueQuery = '',
    catalogueSelected = 0,
    catalogueError = false,
    catalogueLoading = false;
  let command: Command = commands[0]!;
  let sqlcl: SqlclConfig | undefined,
    sqlclError = false,
    sqlclRevision = 0;
  let fields: Field[] = [],
    values: Record<string, string> = {},
    parsed: Record<string, unknown> = {};
  let error = '',
    editing = '',
    cursor = 0,
    result: Result | undefined,
    editField: Field | undefined;
  let advanced = false,
    details = false;
  let controller: AbortController | undefined,
    started = 0,
    closeAfterRun = false,
    closed = false;
  let finish!: () => void, reject!: (error: unknown) => void;
  const done = new Promise<void>((resolve, fail) => {
    finish = resolve;
    reject = fail;
  });
  const crash = (error: unknown) => {
    closed = true;
    reject(error);
  };
  const drafts = new Map<string, Record<string, string>>();
  let savedNames: string[] = [],
    connectionQuery = '';
  const visibleConnections = () =>
    savedNames.filter((name) => name.toLowerCase().includes(connectionQuery.toLowerCase()));
  const filtered = () =>
    commands.filter((item) =>
      `${item.label} ${item.command} ${item.description}`.toLowerCase().includes(query.toLowerCase()),
    );
  async function reloadCatalogue() {
    if (catalogueLoading) return;
    catalogueLoading = true;
    catalogueError = false;
    try {
      catalogue = await loadCatalogue();
    } catch {
      catalogue = undefined;
      catalogueError = true;
    } finally {
      catalogueLoading = false;
      if (screen === 'menu') renderSafe();
    }
  }
  const formRows = (): FormRow[] => [
    ...fields.filter((field) => !field.advanced).map((field): FormRow => ({ kind: 'field', field })),
    ...(fields.some((field) => field.advanced) ? [{ kind: 'advanced' } as const] : []),
    ...(advanced
      ? fields.filter((field) => field.advanced).map((field): FormRow => ({ kind: 'field', field }))
      : []),
    { kind: 'review' },
  ];
  const choices = () => {
    const available =
      command.operation === 'sqlcl.configure' &&
      editField!.name === 'mode' &&
      values.databaseTransport === 'ords'
        ? editField!.choices.filter((choice) => choice === 'cli')
        : editField!.choices;
    return editField!.required || editField!.name === 'databaseTransport' ? available : ['', ...available];
  };
  const close = () => {
    closed = true;
    finish();
  };
  const cancel = (exitAfter = false) => {
    if (screen === 'running') {
      closeAfterRun ||= exitAfter;
      controller?.abort();
      render();
    } else close();
  };
  const fieldValue = (field: Field) => {
    const value = values[field.name] ?? '';
    return field.type === 'boolean'
      ? value === 'true'
        ? '[x] Yes'
        : '[ ] No'
      : value || (field.required ? 'Enter a value' : 'Default');
  };
  const stage = (step: number) =>
    ['Configure', 'Review', 'Result']
      .map((name, index) => (index + 1 === step ? `[${name}]` : name))
      .join('  ›  ');

  function render() {
    if (closed) return;
    const width = Math.max(1, (output.columns || 80) - 2),
      height = Math.max(1, (output.rows || 24) - 1);
    if (width < 28 || height < 9) {
      output.write('\x1b[H\x1b[2J' + clip('Resize terminal (30x10 minimum). Ctrl+C exits.', width));
      return;
    }
    const color = !('NO_COLOR' in process.env);
    if (screen === 'menu') {
      const actions = filtered();
      selected = Math.max(0, Math.min(selected, actions.length - 1));
      output.write(
        '\x1b[H\x1b[2J' +
          homeFrame({
            width,
            height,
            color,
            actions,
            selected,
            query,
            focus: homeFocus,
            catalogue,
            catalogueError,
            catalogueQuery,
            catalogueSelected,
            sqlclMode: sqlclError ? 'Configuration unavailable' : sqlcl?.mode.toUpperCase(),
            databaseTransport: sqlcl?.databaseTransport,
          }).join('\r\n'),
      );
      return;
    }
    const styled = (text: string, tone: Tone = 'plain') => paint(clip(text, width), tone, color);
    const header: string[] = [];
    let body: Line[] = [],
      footer = '',
      focused = -1;
    const heading = (title: string, step?: number) => {
      header.push(styled(` APEXREST  /  ${title}`, 'accent'));
      if (step && height >= 16) header.push(styled(` ${stage(step)}`, 'muted'));
      header.push('');
    };
    const row = (text: string, index: number, active: number): Line => ({
      text: `${index === active ? '> ' : '  '}${text}`,
      tone: index === active ? 'selected' : 'plain',
    });
    if (screen === 'connections') {
      heading('Saved SQLcl connections');
      header.push(
        styled(
          connectionQuery
            ? ` Search: ${connectionQuery}`
            : ` ${savedNames.length} saved connection${savedNames.length === 1 ? '' : 's'}`,
          'muted',
        ),
        '',
      );
      const names = visibleConnections();
      selected = Math.max(0, Math.min(selected, names.length - 1));
      body = names.map((name, index) => row(name, index, selected));
      if (!savedNames.length)
        body = [
          { text: 'No saved SQLcl connections found.', tone: 'muted' },
          { text: 'Save a connection in SQLcl, then press Ctrl+R to refresh.' },
        ];
      else if (!names.length)
        body.push({ text: 'No matching connections. Esc clears the search.', tone: 'muted' });
      focused = names.length ? selected : -1;
      footer =
        width >= 64
          ? ' ↑↓ Move   Enter Test   Type to search   ^R Refresh   Esc Back'
          : ' ↑↓ Enter Test  Type Search  ^R Refresh  Esc';
    } else if (screen === 'form' || screen === 'edit') {
      heading(command.label, 1);
      if (error) header.push(styled(` ${error}`, 'error'));
      else if (height >= 17) header.push(styled(` ${command.description}`, 'muted'));
      if (height >= 17) header.push('');
      const rows = formRows();
      fieldIndex = Math.min(fieldIndex, rows.length - 1);
      body = rows.map((item, index) => {
        if (item.kind === 'advanced')
          return row(
            `${advanced ? '[-]' : '[+]'} Advanced options (${fields.filter((field) => field.advanced).length})`,
            index,
            fieldIndex,
          );
        if (item.kind === 'review') return row('[ Review & run ]', index, fieldIndex);
        const field = item.field;
        const labelWidth = Math.min(28, Math.max(7, Math.floor((width - 7) / 2)));
        const label = field.label + (field.required ? ' *' : '');
        const shortLabel = label.length > labelWidth ? clip(label, labelWidth - 1) + '…' : label;
        return row(`${shortLabel.padEnd(labelWidth)} ${fieldValue(field)}`, index, fieldIndex);
      });
      focused = fieldIndex;
      const selectedRow = rows[fieldIndex];
      if (screen === 'edit') {
        const chars = Array.from(editing);
        const editorLabel = width < 54 ? '' : clip(editField!.label, Math.floor(width / 3)) + ': ';
        const room = Math.max(5, width - editorLabel.length - 4);
        const start = Math.max(0, cursor - Math.floor(room / 2));
        body[fieldIndex] = {
          text: `> ${editorLabel}${start ? '…' : ''}${chars.slice(start, cursor).join('')}│${chars.slice(cursor).join('')}`,
          tone: 'selected',
        };
        header.push(styled(` ${width < 54 ? editField!.label : editField!.hint}`, 'muted'));
        footer =
          width >= 64
            ? ' Enter Save & next   Esc Cancel   Ctrl+U Clear'
            : ' Enter Save   Esc Cancel   Ctrl+U Clear';
      } else {
        if (height >= 17 && selectedRow?.kind === 'field')
          header.push(styled(` ${selectedRow.field.hint}`, 'muted'));
        footer =
          width >= 68
            ? ' Enter Edit   Ctrl+R Review   Ctrl+O Advanced   Esc Back'
            : ' Enter Edit  ^R Review  ^O More  Esc Back';
      }
    } else if (screen === 'choices') {
      heading(command.label, 1);
      header.push(styled(` ${editField!.label}`, 'accent'));
      if (height >= 17) header.push(styled(` ${editField!.hint}`, 'muted'));
      header.push('');
      body = choices().map((value, index) => row(value || 'Use default', index, choiceIndex));
      focused = choiceIndex;
      footer = ' ↑↓ Move   Enter Save & next   Esc Cancel';
    } else if (screen === 'review') {
      heading(command.label, 2);
      header.push(styled(' Ready to run', 'accent'), '');
      if (details) {
        body = [
          { text: commandPreview(command.operation, parsed) },
          { text: '' },
          { text: JSON.stringify(sanitized(parsed), null, 2) },
        ];
      } else {
        body.push({ text: command.description, tone: 'muted' }, { text: '' });
        for (const field of fields) {
          const value = parsed[field.name];
          if (value === undefined || value === '' || field.name === 'project') continue;
          if (field.advanced && values[field.name] === field.initial) continue;
          body.push({ text: `  ${field.label}: ${valueText(value)}` });
        }
        if (command.operation === 'dependencies.install')
          body.push(
            { text: '' },
            {
              text: 'Oracle terms: https://www.oracle.com/downloads/licenses/oracle-free-license.html',
              tone: 'muted',
            },
          );
        if (command.operation === 'sqlcl.configure')
          body.push(
            { text: '' },
            {
              text: 'Saved for new Oracle operations in this APEXREST home. Current operations keep their mode.',
            },
            ...(parsed.databaseTransport === 'ords'
              ? [
                  {
                    text: 'ORDS requires CLI execution. Configure each reference with connection add --ords-url URL --ords-username USER --password-file PATH.',
                    tone: 'muted' as const,
                  },
                ]
              : []),
            ...(parsed.mode === 'mcp'
              ? [
                  {
                    text: 'Oracle MCP may write DBTOOLS$MCP_LOG during connected operations.',
                    tone: 'muted' as const,
                  },
                ]
              : []),
          );
        body.push({ text: '' }, { text: `> [ ${command.action} ]`, tone: 'selected' });
      }
      footer =
        width >= 64
          ? ' Enter Run   Esc Edit   D Details   ↑↓ Scroll'
          : ' Enter Run  Esc Edit  D Details  ↑↓ Scroll';
    } else if (screen === 'running') {
      heading(command.label);
      const elapsed = Math.floor((Date.now() - started) / 1000);
      const spinner = ['◐', '◓', '◑', '◒'][Math.floor(Date.now() / 250) % 4];
      header.push(
        styled(
          ` ${spinner} ${controller?.signal.aborted ? 'Cancelling' : 'Running'}  ·  ${elapsed}s`,
          'accent',
        ),
        '',
      );
      body = [
        {
          text: controller?.signal.aborted
            ? 'Cancellation requested. Waiting for the actual outcome; some steps cannot be interrupted.'
            : command.description,
        },
      ];
      footer = ' Ctrl+C Request cancellation';
    } else {
      heading(command.label, command.operation.startsWith('connection.') ? undefined : 3);
      header.push(styled(` ${resultTitle(result!)}`, resultTone(result!)), '');
      body = details ? [{ text: JSON.stringify(sanitized(result), null, 2) }] : resultLines(result!);
      footer = command.operation.startsWith('connection.')
        ? ' Enter Connections   Esc Menu   D Details   ↑↓ Scroll'
        : width >= 68
          ? ' Enter Edit   Esc Menu   D Details   ↑↓ / PgUp PgDn Scroll'
          : ' Enter Edit  Esc Menu  D Details  ↑↓ Scroll';
    }
    if (width < 44)
      footer =
        screen === 'form'
          ? ' Enter  ^R Run  ^O More  Esc'
          : screen === 'edit'
            ? ' Enter Save  Esc Cancel'
            : screen === 'choices'
              ? ' ↑↓ Enter Save  Esc Cancel'
              : screen === 'running'
                ? ' Ctrl+C Cancel'
                : ' Enter  Esc  D Details  ↑↓';
    const available = Math.max(1, height - header.length - 2);
    // Lists keep one row per entry; prose and results wrap without losing content.
    if (focused < 0)
      body = body.flatMap((line) => wrap(line.text, width - 1).map((text) => ({ ...line, text })));
    if (focused >= 0) scroll = Math.max(0, focused - Math.floor(available / 2));
    scroll = Math.min(scroll, Math.max(0, body.length - available));
    const visible = body.slice(scroll, scroll + available).map((line) => styled(line.text, line.tone));
    while (visible.length < available) visible.push('');
    const position =
      body.length > available
        ? ` ${scroll + 1}–${Math.min(scroll + available, body.length)} / ${body.length} `
        : '';
    const divider = position + '─'.repeat(Math.max(0, width - position.length));
    const frame = [...header, ...visible, styled(divider, 'muted'), styled(footer, 'muted')].slice(0, height);
    output.write('\x1b[H\x1b[2J' + frame.join('\r\n'));
  }

  function review() {
    const validated = parseFields(command.operation, fields, values);
    if (!validated.success) {
      const issue = validated.error.issues[0]!;
      const field = fields.find((field) => field.name === issue.path[0]);
      error =
        field && !(values[field.name] ?? '').trim()
          ? `Enter ${field.label.toLowerCase()}.`
          : `${field?.label ?? 'Input'}: ${issue.message}`;
      if (field?.advanced) advanced = true;
      const first = formRows().findIndex((item) => item.kind === 'field' && item.field.name === field?.name);
      if (first >= 0) fieldIndex = first;
      screen = 'form';
    } else {
      parsed = validated.data;
      screen = 'review';
      scroll = 0;
      error = '';
      details = false;
    }
  }
  function open(item: Command) {
    command = item;
    fields = fieldsFor(command.operation, project).sort((a, b) => Number(b.required) - Number(a.required));
    values =
      drafts.get(command.operation) ?? Object.fromEntries(fields.map((field) => [field.name, field.initial]));
    drafts.set(command.operation, values);
    fieldIndex = 0;
    scroll = 0;
    error = '';
    advanced = false;
    details = false;
    screen = 'form';
    if (command.operation === 'sqlcl.configure') {
      void loadSqlclSettings(true).catch(crash);
      return;
    }
    if (command.operation.startsWith('connection.')) {
      void loadConnections().catch(crash);
      return;
    }
    if (!fields.some((field) => !field.advanced)) review();
  }
  async function loadSqlclSettings(edit = false) {
    const revision = ++sqlclRevision;
    if (edit) {
      screen = 'running';
      started = Date.now();
      controller = new AbortController();
      render();
    }
    try {
      const loaded = await loadSqlcl();
      if (revision !== sqlclRevision) return;
      sqlcl = loaded;
      sqlclError = false;
      if (edit) {
        values = {
          mode: sqlcl.mode,
          databaseTransport: sqlcl.databaseTransport ?? 'direct',
          mcpRestrictLevel: sqlcl.mcpRestrictLevel,
        };
        drafts.set(command.operation, values);
        screen = 'form';
      }
    } catch (error) {
      if (revision !== sqlclRevision) return;
      sqlclError = true;
      if (edit) {
        result = failure('sqlcl.status', error);
        screen = 'result';
      }
    }
    if (edit && closeAfterRun) close();
    else renderSafe();
  }
  function nextField() {
    error = '';
    screen = 'form';
    fieldIndex = Math.min(formRows().length - 1, fieldIndex + 1);
  }
  function toggleAdvanced() {
    advanced = !advanced;
    const index = formRows().findIndex((row) => row.kind === 'advanced');
    if (index >= 0) fieldIndex = index;
  }
  async function loadConnections() {
    screen = 'running';
    scroll = 0;
    started = Date.now();
    controller = new AbortController();
    render();
    try {
      result = await execute('connection.list', { saved: true }, controller.signal);
      if (result.ok) {
        const data = result.data as { connections?: { name: string }[] };
        if (
          !Array.isArray(data?.connections) ||
          !data.connections.every((item) => typeof item.name === 'string')
        )
          throw new Fault(
            'CONNECTION_LIST_UNCONFIRMED',
            'SQLcl did not return a valid saved connection list.',
            3,
          );
        savedNames = data.connections.map((item) => item.name);
        screen = 'connections';
        selected = 0;
      } else screen = 'result';
    } catch (error) {
      result = failure('connection.list', error);
      screen = 'result';
    }
    details = false;
    if (closeAfterRun) close();
    else render();
  }
  async function run() {
    screen = 'running';
    scroll = 0;
    started = Date.now();
    controller = new AbortController();
    render();
    try {
      result = await execute(command.operation, parsed, controller.signal);
      if (result.ok && command.operation === 'sqlcl.configure') {
        sqlclRevision++;
        sqlcl = result.data as SqlclConfig;
        sqlclError = false;
      }
    } catch (e) {
      result = failure(command.operation, e);
    }
    screen = 'result';
    scroll = 0;
    details = false;
    if (closeAfterRun) close();
    else render();
  }
  function onKey(text: string | undefined, key: Key = {}) {
    if (closed) return;
    if (key.ctrl && key.name === 'c') {
      cancel();
      return;
    }
    if (screen === 'running') return;
    const up = key.name === 'up',
      down = key.name === 'down',
      enter = key.name === 'return',
      escape = key.name === 'escape';
    if (screen === 'menu' && key.name === 'tab') {
      homeFocus = homeFocus === 'actions' ? 'apexlang' : 'actions';
      render();
      return;
    }
    if (screen === 'menu' && key.ctrl && key.name === 'r') {
      void reloadCatalogue().catch(crash);
      render();
      return;
    }
    if (screen === 'menu' && homeFocus === 'apexlang') {
      const length = filterApexlang(catalogue, catalogueQuery).length;
      if (up) catalogueSelected = Math.max(0, catalogueSelected - 1);
      else if (down) catalogueSelected = Math.min(Math.max(0, length - 1), catalogueSelected + 1);
      else if (key.name === 'pageup') catalogueSelected = Math.max(0, catalogueSelected - 8);
      else if (key.name === 'pagedown')
        catalogueSelected = Math.min(Math.max(0, length - 1), catalogueSelected + 8);
      else if (key.name === 'home') catalogueSelected = 0;
      else if (key.name === 'end') catalogueSelected = Math.max(0, length - 1);
      else if (escape) {
        if (catalogueQuery) {
          catalogueQuery = '';
          catalogueSelected = 0;
        } else homeFocus = 'actions';
      } else if (key.name === 'backspace') {
        catalogueQuery = Array.from(catalogueQuery).slice(0, -1).join('');
        catalogueSelected = 0;
      } else if (text && !key.ctrl && !key.meta && !enter) {
        catalogueQuery = (catalogueQuery + terminalText(text)).slice(0, 256);
        catalogueSelected = 0;
      }
      render();
      return;
    }
    if (screen === 'menu' || screen === 'connections') {
      const connectionsScreen = screen === 'connections';
      const length = connectionsScreen ? visibleConnections().length : filtered().length;
      if (up) selected = Math.max(0, selected - 1);
      else if (down) selected = Math.min(Math.max(0, length - 1), selected + 1);
      else if (key.name === 'pageup') selected = Math.max(0, selected - 8);
      else if (key.name === 'pagedown') selected = Math.min(Math.max(0, length - 1), selected + 8);
      else if (key.name === 'home') selected = 0;
      else if (key.name === 'end') selected = Math.max(0, length - 1);
      else if (connectionsScreen && key.ctrl && key.name === 'r') {
        void loadConnections().catch(crash);
        return;
      } else if (enter && length) {
        if (connectionsScreen) {
          command = commands.find((item) => item.operation === 'connection.test')!;
          parsed = { saved: true, name: visibleConnections()[selected]! };
          void run().catch(crash);
          return;
        }
        open(filtered()[selected]!);
      } else if (escape) {
        if (connectionsScreen) {
          if (connectionQuery) connectionQuery = '';
          else {
            screen = 'menu';
            selected = 0;
          }
        } else if (query) {
          query = '';
          selected = 0;
        } else close();
      } else if (key.name === 'backspace') {
        if (connectionsScreen) connectionQuery = Array.from(connectionQuery).slice(0, -1).join('');
        else query = Array.from(query).slice(0, -1).join('');
        selected = 0;
      } else if (text && !key.ctrl && !key.meta) {
        if (connectionsScreen) connectionQuery = (connectionQuery + terminalText(text)).slice(0, 512);
        else query = (query + terminalText(text)).slice(0, 256);
        selected = 0;
      }
    } else if (screen === 'form') {
      const rows = formRows(),
        item = rows[fieldIndex]!;
      if (up || (key.name === 'tab' && key.shift)) fieldIndex = Math.max(0, fieldIndex - 1);
      else if (down || key.name === 'tab') fieldIndex = Math.min(rows.length - 1, fieldIndex + 1);
      else if (escape) {
        screen = 'menu';
        scroll = 0;
      } else if (key.ctrl && key.name === 'r') review();
      else if (key.ctrl && key.name === 'o') toggleAdvanced();
      else if (enter || (key.name === 'space' && item.kind === 'field' && item.field.type === 'boolean')) {
        if (item.kind === 'review') review();
        else if (item.kind === 'advanced') toggleAdvanced();
        else {
          editField = item.field;
          if (editField.type === 'boolean')
            values[editField.name] = values[editField.name] === 'true' ? 'false' : 'true';
          else if (editField.choices.length) {
            choiceIndex = Math.max(0, choices().indexOf(values[editField.name] ?? ''));
            screen = 'choices';
          } else {
            editing = values[editField.name] ?? '';
            cursor = Array.from(editing).length;
            screen = 'edit';
          }
          error = '';
        }
      }
    } else if (screen === 'choices') {
      if (up) choiceIndex = Math.max(0, choiceIndex - 1);
      else if (down) choiceIndex = Math.min(choices().length - 1, choiceIndex + 1);
      else if (enter) {
        values[editField!.name] = choices()[choiceIndex]!;
        if (
          command.operation === 'sqlcl.configure' &&
          editField!.name === 'databaseTransport' &&
          values.databaseTransport === 'ords'
        )
          values.mode = 'cli';
        nextField();
      } else if (escape) screen = 'form';
    } else if (screen === 'edit') {
      const chars = Array.from(editing);
      if (escape) screen = 'form';
      else if (enter) {
        values[editField!.name] = editing;
        nextField();
      } else if (key.name === 'left') cursor = Math.max(0, cursor - 1);
      else if (key.name === 'right') cursor = Math.min(chars.length, cursor + 1);
      else if (key.name === 'home' || (key.ctrl && key.name === 'a')) cursor = 0;
      else if (key.name === 'end' || (key.ctrl && key.name === 'e')) cursor = chars.length;
      else if (key.ctrl && key.name === 'u') {
        editing = '';
        cursor = 0;
      } else if (key.name === 'backspace' && cursor > 0) {
        chars.splice(--cursor, 1);
        editing = chars.join('');
      } else if (key.name === 'delete') {
        chars.splice(cursor, 1);
        editing = chars.join('');
      } else if (text && !key.ctrl && !key.meta && chars.length < 8192) {
        const inserted = Array.from(terminalText(text)).slice(0, 8192 - chars.length);
        chars.splice(cursor, 0, ...inserted);
        editing = chars.join('');
        cursor += inserted.length;
      }
    } else {
      if (up) scroll = Math.max(0, scroll - 1);
      else if (down) scroll++;
      else if (key.name === 'pageup') scroll = Math.max(0, scroll - Math.max(1, (output.rows || 24) - 8));
      else if (key.name === 'pagedown') scroll += Math.max(1, (output.rows || 24) - 8);
      else if (key.name === 'home') scroll = 0;
      else if (key.name === 'end') scroll = Number.MAX_SAFE_INTEGER;
      else if (key.name === 'd' || text === 'd') {
        details = !details;
        scroll = 0;
      } else if (escape) {
        screen = screen === 'result' ? 'menu' : 'form';
        scroll = 0;
      } else if (enter) {
        if (screen === 'review') {
          void run().catch(crash);
          return;
        }
        if (command.operation.startsWith('connection.')) {
          void loadConnections().catch(crash);
          return;
        }
        screen = 'form';
        scroll = 0;
      }
    }
    render();
  }

  const raw = input.isRaw ?? false;
  const flowing = input.readableFlowing === true;
  const onSignal = () => cancel(true);
  const onKeySafe = (text: string | undefined, key: Key) => {
    try {
      onKey(text, key);
    } catch (error) {
      crash(error);
    }
  };
  const renderSafe = () => {
    try {
      render();
    } catch (error) {
      crash(error);
    }
  };
  // emitKeypressEvents installs its own data decoder lazily on the first keypress listener.
  const previousData = new Set(input.listeners('data'));
  const previousNewListener = new Set(input.listeners('newListener'));
  let timer: ReturnType<typeof setInterval> | undefined;
  try {
    emitKeypressEvents(input);
    input.on('keypress', onKeySafe);
    input.on('end', onSignal);
    input.on('error', crash);
    output.on('error', crash);
    process.on('SIGINT', onSignal);
    process.on('SIGTERM', onSignal);
    output.on('resize', renderSafe);
    input.setRawMode(true);
    input.resume();
    output.write('\x1b[?1049h\x1b[?25l');
    timer = setInterval(() => {
      if (screen === 'running') renderSafe();
    }, 250);
    render();
    void reloadCatalogue().catch(crash);
    void loadSqlclSettings().catch(crash);
    await done;
  } finally {
    if (timer) clearInterval(timer);
    input.off('keypress', onKeySafe);
    input.off('end', onSignal);
    input.off('error', crash);
    output.off('error', crash);
    process.off('SIGINT', onSignal);
    process.off('SIGTERM', onSignal);
    output.off('resize', renderSafe);
    for (const listener of input.listeners('data'))
      if (!previousData.has(listener)) input.off('data', listener as (...args: unknown[]) => void);
    for (const listener of input.listeners('newListener'))
      if (!previousNewListener.has(listener))
        input.off('newListener', listener as (...args: unknown[]) => void);
    input.setRawMode(raw);
    if (!flowing) input.pause();
    output.write('\x1b[0m\x1b[?25h\x1b[?1049l');
  }
}
