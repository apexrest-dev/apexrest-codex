import test, { type TestContext } from 'node:test';
import assert from 'node:assert/strict';
import { PassThrough } from 'node:stream';
import { setImmediate } from 'node:timers/promises';
import { stripVTControlCharacters } from 'node:util';
import { z } from 'zod';
import { runTui, terminalText } from '../../packages/cli/src/tui.ts';
import { resultLines, resultTitle, resultTone, wrap } from '../../packages/cli/src/tui-view.ts';
import { commands, fieldsFor, parseFields, commandPreview } from '../../packages/cli/src/tui-catalog.ts';
import { schemas, type Operation } from '../../packages/core/src/operations.ts';
import { success, failure, Fault } from '../../packages/core/src/result.ts';
import type { dispatch } from '../../packages/core/src/service.ts';
import { loadApexlangCatalogue } from '../../packages/cli/src/tui-apexlang.ts';

class Input extends PassThrough {
  isTTY = true;
  isRaw = false;
  setRawMode(mode: boolean) {
    this.isRaw = mode;
  }
}
class Output extends PassThrough {
  isTTY = true;
  columns = 80;
  rows = 24;
}
function terminalEnvironment(t: TestContext, term: string) {
  const previous = process.env.TERM;
  process.env.TERM = term;
  t.after(() => {
    if (previous === undefined) delete process.env.TERM;
    else process.env.TERM = previous;
  });
}
function session(
  t: TestContext,
  execute: typeof dispatch = async (op, data) => success(op, data),
  loadCatalogue = loadApexlangCatalogue,
) {
  // The streams below simulate an interactive terminal regardless of the
  // shell that launched the tests (CI/Codex commonly provides TERM=dumb).
  terminalEnvironment(t, 'xterm-256color');
  const input = new Input(),
    output = new Output();
  let transcript = '';
  output.on('data', (chunk) => {
    transcript += chunk.toString();
  });
  const beforeSignals = process.listenerCount('SIGINT');
  const done = runTui({
    input,
    output,
    project: '/tmp/my project',
    execute,
    loadCatalogue,
    loadSqlcl: async () => ({ schemaVersion: 1, mode: 'cli', mcpRestrictLevel: '4' }),
  });
  const key = (name: string, ctrl = false) => input.emit('keypress', undefined, { name, ctrl });
  const screen = () => stripVTControlCharacters(transcript.split('\x1b[2J').at(-1) ?? '');
  const select = (label: string) => {
    // Follow the actual focused row, including scrolling, rather than relying on field positions.
    for (let i = 0; i < 64; i++) key('up');
    for (let i = 0; i < 64; i++) {
      if (
        screen()
          .split('\r\n')
          .some((line) => /^\s*>/.test(line) && line.includes(label))
      )
        return;
      key('down');
    }
    assert.fail(`Could not select ${label}:\n${screen()}`);
  };
  t.after(async () => {
    key('c', true);
    await done;
    assert.equal(input.isRaw, false);
    assert.equal(input.isPaused(), true);
    assert.equal(input.listenerCount('keypress'), 0);
    assert.equal(input.listenerCount('data'), 0);
    assert.equal(output.listenerCount('resize'), 0);
    assert.equal(process.listenerCount('SIGINT'), beforeSignals);
    assert.ok(transcript.endsWith('\x1b[0m\x1b[?25h\x1b[?1049l'));
  });
  return {
    input,
    output,
    done,
    key,
    select,
    type: (text: string) => input.emit('keypress', text, {}),
    screen,
    transcript: () => transcript,
  };
}
const fieldLabel = (operation: Operation, name: string) => {
  const field = fieldsFor(operation, '/tmp/my project').find((item) => item.name === name);
  assert.ok(field, `${operation} exposes ${name}`);
  return field.label;
};

test('home exposes the requested actions and SQLcl mode selection and no unsupported fields', (t) => {
  assert.deepEqual(
    commands.map((item) => item.operation),
    [
      'dependencies.install',
      'dependencies.uninstall',
      'plugin.install',
      'plugin.uninstall',
      'connection.list',
      'connection.test',
      'sqlcl.configure',
    ],
  );
  const s = session(t);
  for (const command of commands) assert.ok(s.screen().includes(command.label));
  assert.doesNotMatch(s.screen(), /Project:|Deployment|Setup|APEX application/);
  s.type('project');
  assert.match(s.screen(), /No matching actions/);
  s.key('escape');
  assert.match(s.screen(), /APEXREST/);
  assert.ok(
    fieldsFor('plugin.install').every(
      (field) =>
        !['scope', 'nativeOnly', 'acceptOracleLicense', 'skipBrowser', 'project'].includes(field.name),
    ),
  );
  for (const { operation } of commands) {
    const schema = z.toJSONSchema(schemas[operation], { io: 'input' });
    for (const field of fieldsFor(operation)) {
      assert.ok(schema.properties?.[field.name]);
      assert.ok(!['dryRun', 'yes'].includes(field.name));
    }
  }
  const plugin = parseFields('plugin.install', fieldsFor('plugin.install'), {});
  assert.ok(plugin.success);
  assert.equal((plugin.data as Record<string, unknown>).nativeOnly, true);
  assert.equal(
    parseFields('dependencies.install', fieldsFor('dependencies.install'), { acceptOracleLicense: 'maybe' })
      .success,
    false,
  );
  assert.match(
    commandPreview('plugin.install', { from: "a'b $(touch unsafe)" }),
    /'a'\\''b \$\(touch unsafe\)'/,
  );
});

test('SQLcl mode is editable, cancellation does not save, and Enter persists the selected backend', async (t) => {
  const calls: { op: string; input: Record<string, unknown> }[] = [];
  const s = session(t, async (op, input = {}) => {
    calls.push({ op, input });
    return success(op, { schemaVersion: 1, ...input });
  });
  await setImmediate();
  assert.match(s.screen(), /SQLcl: CLI/);
  s.type('sqlcl configure');
  s.key('return');
  await setImmediate();
  s.select('SQLcl execution mode');
  s.key('return');
  s.key('down');
  s.key('return');
  s.key('r', true);
  assert.match(s.screen(), /DBTOOLS\$MCP_LOG/);
  assert.equal(calls.length, 0);
  s.key('escape');
  s.key('r', true);
  s.key('return');
  await setImmediate();
  assert.deepEqual(calls, [
    { op: 'sqlcl.configure', input: { mode: 'mcp', databaseTransport: 'direct', mcpRestrictLevel: '4' } },
  ]);
  assert.match(s.screen(), /SQLcl mode: MCP/);
  s.key('escape');
  assert.match(s.screen(), /SQLcl: MCP/);
});

test('ORDS transport forces CLI execution and persists the network choice from the TUI', async (t) => {
  const calls: { op: string; input: Record<string, unknown> }[] = [];
  const s = session(t, async (op, input = {}) => {
    calls.push({ op, input });
    return success(op, { schemaVersion: 1, ...input });
  });
  s.type('sqlcl configure');
  s.key('return');
  await setImmediate();
  s.select('SQLcl execution mode');
  s.key('return');
  s.key('down');
  s.key('return');
  s.select('Database network transport');
  s.key('return');
  s.key('down');
  s.key('return');
  s.select('SQLcl execution mode');
  s.key('return');
  assert.doesNotMatch(s.screen(), /(?:^|\r\n)[> ]+mcp(?:\r\n|$)/);
  s.key('return');
  s.key('r', true);
  assert.match(s.screen(), /ORDS requires CLI/);
  s.key('return');
  await setImmediate();
  assert.deepEqual(calls, [
    { op: 'sqlcl.configure', input: { mode: 'cli', databaseTransport: 'ords', mcpRestrictLevel: '4' } },
  ]);
  assert.match(s.screen(), /Database network: ORDS HTTP\(S\)/);
  s.key('escape');
  assert.match(s.screen(), /SQLcl: CLI · ORDS HTTP\(S\)/);
});

test('home catalogue filters and scrolls independently without dispatching actions', async (t) => {
  const catalogue = await loadApexlangCatalogue('resources/references/index.json');
  let calls = 0;
  const s = session(
    t,
    async (op, data) => {
      calls++;
      return success(op, data);
    },
    async () => catalogue,
  );
  await setImmediate();
  assert.match(s.screen(), /Checkbox/);
  assert.match(s.screen(), /Item \/ component.*Group.*Docs/);
  s.type('plugin install');
  s.key('tab');
  s.type('page items select');
  for (const name of ['Select list', 'Select many', 'Select one']) assert.match(s.screen(), new RegExp(name));
  assert.doesNotMatch(s.screen(), /Checkbox/);
  s.key('return');
  assert.equal(calls, 0);
  s.key('escape');
  s.key('end');
  assert.match(s.screen(), /REST data source servers/);
  s.key('home');
  assert.match(s.screen(), /> Checkbox/);
  s.key('pagedown');
  assert.doesNotMatch(s.screen(), /> Checkbox/);
  s.key('pageup');
  assert.match(s.screen(), /> Checkbox/);
  s.type('no such component');
  assert.match(s.screen(), /No matching components/);
  s.key('escape');
  s.type('\x1b[2JКиїв界');
  assert.match(s.screen(), /Find APEXlang: Київ界/);
  s.key('backspace');
  assert.match(s.screen(), /Find APEXlang: Київ/);
  s.key('escape');
  s.key('tab');
  assert.match(s.screen(), /Search: plugin install/);
  s.key('return');
  assert.match(s.screen(), /Ready to run/);
  assert.equal(calls, 0);
});

test('catalogue load failure preserves actions and supports retry; late loading never redraws an exited TUI', async (t) => {
  const catalogue = await loadApexlangCatalogue('resources/references/index.json');
  let attempts = 0;
  let complete!: (value: typeof catalogue) => void;
  const s = session(t, undefined, async () => {
    if (++attempts === 1) throw new Error('missing catalogue');
    return new Promise((resolve) => {
      complete = resolve;
    });
  });
  await setImmediate();
  assert.match(s.screen(), /Catalogue unavailable/);
  for (const action of commands) assert.ok(s.screen().includes(action.label));
  s.key('r', true);
  complete(catalogue);
  await setImmediate();
  assert.match(s.screen(), /Checkbox/);
  s.key('r', true);
  s.key('c', true);
  await s.done;
  const final = s.transcript();
  complete(catalogue);
  await setImmediate();
  assert.equal(s.transcript(), final);
});

test('forms retain advanced edits and dispatch plugin-only installation', async (t) => {
  const actual: Record<string, unknown>[] = [];
  const s = session(t, async (op, data) => {
    actual.push(data ?? {});
    return success(op, data);
  });
  s.type('plugin install');
  s.key('return');
  s.key('escape');
  s.key('o', true);
  s.select('Package source directory');
  s.key('return');
  s.type('/tmp/package');
  s.key('return');
  s.key('o', true);
  s.key('o', true);
  s.select('Package source directory');
  assert.match(s.screen(), /\/tmp\/package/);
  s.key('return');
  s.key('u', true);
  s.type('/tmp/discard');
  s.key('escape');
  assert.match(s.screen(), /\/tmp\/package/);
  s.key('r', true);
  assert.equal(actual.length, 0);
  s.key('return');
  await setImmediate();
  assert.equal(actual[0]?.nativeOnly, true);
  assert.equal(actual[0]?.from, '/tmp/package');
});

test('saved connections load directly, support search, and test the exact selected SQLcl name', async (t) => {
  const calls: { op: string; data: unknown }[] = [];
  const s = session(t, async (op, data) => {
    calls.push({ op, data });
    return success(
      op,
      op === 'connection.list'
        ? { connections: [{ name: 'Dev / Київ' }, { name: 'Other' }] }
        : { name: data?.name, parsing_schema: 'FIXTURE', password: 'hidden-secret' },
    );
  });
  s.type('connection list');
  s.key('return');
  await setImmediate();
  assert.deepEqual(calls, [{ op: 'connection.list', data: { saved: true } }]);
  assert.match(s.screen(), /2 saved connections/);
  s.type('Київ');
  assert.doesNotMatch(s.screen(), /Other/);
  s.key('return');
  await setImmediate();
  assert.deepEqual(calls[1], { op: 'connection.test', data: { saved: true, name: 'Dev / Київ' } });
  assert.match(s.screen(), /Connection successful/);
  assert.doesNotMatch(s.transcript(), /hidden-secret/);
  s.type('d');
  assert.match(s.screen(), /"schemaVersion": 1/);
  s.key('return');
  await setImmediate();
  assert.match(s.screen(), /Saved SQLcl connections/);
  s.key('escape');
  s.key('r', true);
  await setImmediate();
  assert.equal(calls.filter((call) => call.op === 'connection.list').length, 3);
});

test('empty connection stores, load failures and refresh have actionable results', async (t) => {
  let count = 0;
  const s = session(t, async (op) =>
    ++count === 1
      ? success(op, { connections: [] })
      : failure(op, new Fault('DEPENDENCY_MISSING', 'SQLcl is unavailable.', 3, 'dependency_missing')),
  );
  s.type('connection test');
  s.key('return');
  await setImmediate();
  assert.match(s.screen(), /No saved SQLcl connections found/);
  s.key('return');
  assert.equal(count, 1);
  s.key('r', true);
  await setImmediate();
  assert.match(s.screen(), /SQLcl is unavailable/);
  s.key('return');
  await setImmediate();
  assert.equal(count, 3);
});

test('install and uninstall run directly after review with separate license consent', async (t) => {
  const actual: { op: string; data: Record<string, unknown> }[] = [];
  const s = session(t, async (op, data) => {
    actual.push({ op, data: data ?? {} });
    return success(op, { status: 'completed' });
  });
  for (const operation of ['dependencies.install', 'dependencies.uninstall', 'plugin.install']) {
    s.type(operation.replace('.', ' '));
    s.key('return');
    assert.doesNotMatch(s.screen(), /Preview only|Approve changes/);
    if (operation === 'dependencies.install') {
      s.key('r', true);
      assert.match(s.screen().replaceAll('\r\n', ''), /oracle-free-license.html/);
    }
    assert.match(s.screen(), /Ready to run/);
    const before = actual.length;
    s.key('escape');
    assert.equal(actual.length, before, 'Leaving review never executes an action');
    s.key('r', true);
    s.key('return');
    await setImmediate();
    assert.equal(actual.length, before + 1);
    assert.equal(actual.at(-1)?.op, operation);
    assert.equal(actual.at(-1)?.data.dryRun, false);
    assert.equal(actual.at(-1)?.data.yes, true);
    if (operation === 'dependencies.install') {
      assert.equal(actual.at(-1)?.data.acceptOracleLicense, false);
      assert.equal(actual.at(-1)?.data.installOsDeps, false);
    }
    assert.match(s.screen(), /Completed/);
    s.key('escape');
    s.key('escape');
  }
});

test('cancellation waits for actual outcome instead of claiming rollback or successful cancellation', async (t) => {
  let signal: AbortSignal | undefined, complete!: () => void;
  const s = session(t, async (op, _data, abort) => {
    signal = abort;
    await new Promise<void>((resolve) => {
      complete = resolve;
    });
    return failure(
      op,
      new Fault('OUTCOME_UNKNOWN', 'Inspect the run before retrying.', 6, 'outcome_unknown'),
    );
  });
  s.type('plugin uninstall');
  s.key('return');
  s.key('return');
  s.key('c', true);
  assert.equal(signal?.aborted, true);
  assert.match(s.screen(), /Cancellation requested/);
  assert.equal(s.input.isRaw, true);
  complete();
  await setImmediate();
  assert.match(s.screen(), /Outcome unknown/);
  assert.match(s.screen(), /Inspect the run before retrying/);
});

test('resize, Unicode editing and untrusted terminal controls do not corrupt the screen', (t) => {
  const s = session(t);
  assert.equal(terminalText('\x1b[2Jtest\x1b]52;c;payload\x07\r\u202eevil'), 'testevil');
  s.output.columns = 20;
  s.output.rows = 5;
  s.output.emit('resize');
  assert.match(s.screen(), /Resize terminal/);
  s.output.columns = 50;
  s.output.rows = 14;
  s.output.emit('resize');
  assert.match(s.screen(), /APEXREST/);
  assert.ok(s.screen().split('\r\n').length <= 14);
  assert.ok(
    s
      .screen()
      .split('\r\n')
      .every((line) => line.length <= 48),
  );
  s.output.columns = 80;
  s.output.rows = 24;
  s.output.emit('resize');
  s.type('plugin install');
  s.key('return');
  s.key('escape');
  s.key('o', true);
  s.select(fieldLabel('plugin.install', 'from'));
  s.key('return');
  s.type('Київ界');
  s.key('backspace');
  s.key('return');
  assert.match(s.screen(), /Київ/);
  assert.doesNotMatch(s.screen(), /界/);
});

test('explicit TUI rejects non-interactive input without changing terminal state', async () => {
  const input = new Input(),
    output = new Output();
  input.isTTY = false;
  await assert.rejects(runTui({ input, output }), { code: 'TTY_REQUIRED', exitCode: 2 });
  assert.equal(input.isRaw, false);
});

test('explicit TUI rejects a dumb terminal even when its streams are interactive', async (t) => {
  terminalEnvironment(t, 'dumb');
  const input = new Input(),
    output = new Output();
  await assert.rejects(runTui({ input, output }), { code: 'TTY_REQUIRED', exitCode: 2 });
  assert.equal(input.isRaw, false);
  assert.equal(input.listenerCount('keypress'), 0);
});

test('minimum terminal size keeps the value and caret visible while editing a long field label', (t) => {
  const s = session(t);
  s.type('plugin install');
  s.key('return');
  s.key('escape');
  s.key('o', true);
  s.select(fieldLabel('plugin.install', 'from'));
  s.output.columns = 30;
  s.output.rows = 10;
  s.output.emit('resize');
  s.key('return');
  s.type('saved-dev');
  assert.match(s.screen(), /> saved-dev│/);
  assert.ok(
    s
      .screen()
      .split('\r\n')
      .every((line) => line.length <= 28),
  );
  assert.ok(s.screen().split('\r\n').length <= 10);
  s.key('left');
  assert.match(s.screen(), /> saved-de│v/);
});

test('minimum terminal size keeps a boolean state visible while toggling a long field label', (t) => {
  const s = session(t);
  s.type('dependencies install');
  s.key('return');
  s.select(fieldLabel('dependencies.install', 'acceptOracleLicense'));
  s.output.columns = 30;
  s.output.rows = 10;
  s.output.emit('resize');
  const selectedRow = () =>
    s
      .screen()
      .split('\r\n')
      .find((line) => /^\s*>/.test(line)) ?? '';
  assert.match(selectedRow(), /\[ \] No/);
  s.key('return');
  assert.match(selectedRow(), /\[x\] Yes/);
  s.key('return');
  assert.match(selectedRow(), /\[ \] No/);
  assert.ok(
    s
      .screen()
      .split('\r\n')
      .every((line) => line.length <= 28),
  );
});

test('successful status reads preserve failures, pending work and unknown outcomes in their labels and tones', () => {
  const cases = [
    {
      operation: 'jobs.status',
      data: { status: 'outcome_unknown' },
      title: 'Outcome unknown',
      tone: 'warning',
    },
    {
      operation: 'jobs.status',
      data: { status: 'cancellation_requested' },
      title: 'Cancellation requested',
      tone: 'warning',
    },
    { operation: 'jobs.status', data: { status: 'running' }, title: 'Still running', tone: 'accent' },
    {
      operation: 'setup',
      data: { status: 'needs-user-action' },
      title: 'Needs your attention',
      tone: 'warning',
    },
    {
      operation: 'deploy.status',
      data: { state: { state: 'outcome_unknown' } },
      title: 'Outcome unknown',
      tone: 'warning',
    },
    {
      operation: 'jobs.status',
      data: { status: 'completed', result: { ok: false, status: 'failed' } },
      title: 'Could not complete',
      tone: 'error',
    },
    {
      operation: 'jobs.status',
      data: { status: 'completed', result: { ok: false, status: 'outcome_unknown' } },
      title: 'Outcome unknown',
      tone: 'warning',
    },
    { operation: 'test.report', data: { ok: false }, title: 'Could not complete', tone: 'error' },
  ];
  for (const { operation, data, title, tone } of cases) {
    const result = success(operation, data);
    assert.equal(result.ok, true, 'The status read itself succeeded');
    assert.equal(resultTitle(result), title, `${operation}: ${JSON.stringify(data)}`);
    assert.equal(resultTone(result), tone, `${operation}: ${JSON.stringify(data)}`);
  }
});

test('setup previews preserve existing plugin context and summarize tool actions without hiding consent', () => {
  const result = success('setup', {
    status: 'planned',
    package: { status: 'valid', version: '0.2.0' },
    native: {
      state: 'planned',
      codexHome: '/tmp/codex-profile',
      source: '/tmp/source-plugin',
      destination: '/tmp/managed/native/new-payload',
      sourceDigest: 'a'.repeat(64),
      registration: {
        action: 'adopt',
        previousRoot: '/tmp/previous-apexrest',
        previousVersion: '0.1.0',
      },
    },
    toolchain: {
      home: '/tmp/managed',
      steps: [
        { artifact: { id: 'node', version: '24.21.0' }, reuse: '/usr/bin/node', action: 'reuse' },
        {
          artifact: { id: 'java', version: '25', consentRequired: true },
          action: 'verify',
          consent: 'required',
        },
        {
          artifact: {
            id: 'sqlcl',
            version: '26.1',
            consentRequired: true,
            license: 'https://example.test/oracle-license',
            sha256: 'b'.repeat(64),
            url: 'https://example.test/sqlcl-download.zip',
          },
          action: 'download-install',
          consent: 'required',
        },
      ],
      browser: { action: 'skip' },
    },
  });
  const raw = JSON.stringify(result),
    lines = resultLines(result),
    summary = lines.map((line) => line.text).join('\n');
  assert.match(summary, /Plugin: Update existing APEXREST installation/);
  assert.match(summary, /Version: 0\.1\.0 → 0\.2\.0/);
  assert.match(summary, /Current location: \/tmp\/previous-apexrest/);
  assert.match(summary, /Codex profile: \/tmp\/codex-profile/);
  assert.match(summary, /Node\.js: Reuse 24\.21\.0/);
  assert.match(summary, /Java: Verify installed 25\n/);
  assert.match(summary, /SQLcl: Install 26\.1 · license consent needed/);
  assert.match(summary, /Chromium: Skip/);
  assert.match(summary, /Tools directory: \/tmp\/managed/);
  assert.match(summary, /Oracle terms: https:\/\/example.test\/oracle-license/);
  assert.match(summary, /enable Accept Oracle license terms/);
  assert.match(summary, /review and run the action/);
  assert.doesNotMatch(summary, /[ab]{64}|sqlcl-download|Source digest|Schema version/);
  assert.ok(lines.flatMap((line) => wrap(line.text, 78)).length < 26);
  assert.equal(JSON.stringify(result), raw, 'The complete plan remains available in D Details');
  assert.match(raw, /sqlcl-download.zip/);
  assert.ok(raw.includes('a'.repeat(64)));
});

test('plugin-only previews omit tool and license prompts for installation and managed updates', () => {
  for (const [operation, action, label] of [
    ['setup', 'install', 'Install APEXREST'],
    ['plugin.install', 'install', 'Install APEXREST'],
    ['plugin.update', 'update', 'Update managed installation'],
  ]) {
    const result = success(operation!, {
      status: 'planned',
      package: { version: '0.2.0' },
      native: {
        state: 'planned',
        codexHome: '/tmp/codex-profile',
        registration: { action },
      },
      toolchain: { status: 'not-requested', components: {} },
    });
    const summary = resultLines(result)
      .map((line) => line.text)
      .join('\n');
    assert.ok(summary.includes(`Plugin: ${label}`));
    assert.match(summary, /Tools: Not requested \(plugin only\)/);
    assert.match(summary, /review and run the action/);
    assert.doesNotMatch(summary, /Node\.js:|Java:|SQLcl:|Chromium:|Oracle terms|license consent|download/i);
    assert.equal(resultTitle(result), 'Preview ready');
  }
});
