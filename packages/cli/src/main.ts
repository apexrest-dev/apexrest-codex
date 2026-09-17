#!/usr/bin/env node
import { dispatch } from '../../core/src/service.ts';
import { schemas } from '../../core/src/operations.ts';
import type { Operation } from '../../core/src/operations.ts';
import { failure, Fault } from '../../core/src/result.ts';
import { executeJob } from '../../core/src/jobs.ts';
import { loadProject } from '../../core/src/config.ts';
const argv = process.argv.slice(2);
const positional: Record<string, string[]> = {
  'project.init': ['directory'],
  'connection.add': ['name'],
  'connection.test': ['name'],
  'connection.remove': ['name'],
  'docs.search': ['query'],
  'docs.read': ['id'],
  'jobs.status': ['id'],
  'jobs.cancel': ['id'],
  'artifacts.read': ['id'],
  'team.start': ['task'],
  'team.status': ['id'],
  'team.message': ['id', 'message'],
  'team.cancel': ['id'],
};
function operationFrom(args: string[]) {
  const first = args[0];
  if (['doctor', 'version', 'setup'].includes(first ?? '')) return { op: first!, start: 1 };
  if (first === 'test' && ['unit', 'sql', 'api', 'e2e', 'all'].includes(args[1] ?? ''))
    return { op: 'test.run', start: 2, suite: args[1] };
  return { op: args.slice(0, 2).join('.'), start: 2 };
}
const selected = operationFrom(argv);
function help() {
  const key = selected.op as Operation;
  const lines = [
    'APEXREST for Codex — independent Oracle APEX developer tools',
    'Usage: apexrest [command] [options]',
    'Run apexrest in a terminal to manage tools, plugins and saved SQLcl connections.',
    '  tui [--project PATH]   Open the terminal UI explicitly',
    '  panel tui [--project PATH]   Live development panel inside Codex CLI',
    '',
    ...Object.keys(schemas)
      .filter((x) => x !== 'test.run')
      .map((x) => '  ' + x.replace('.', ' ')),
    '  test unit|sql|api|e2e|all [--env NAME]',
    '  mcp',
    '',
    '--json emits one structured JSON result; diagnostics use stderr.',
    'Use --project PATH for project operations. Environment never defaults.',
    'Exit codes: 0 success, 1 failed, 2 input, 3 dependency, 4 approval, 5 conflict, 6 unknown/cancelled.',
  ];
  if (schemas[key])
    lines.push(
      '',
      `Options for ${selected.op.replace('.', ' ')}:`,
      ...Object.keys(schemas[key].shape).map(
        (k) => '  --' + k.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase()),
      ),
      ...(positional[key] ?? []).map((p) => '  <' + p + '>'),
    );
  if (key === 'panel.action')
    lines.push(
      '',
      'Pass --action as one JSON object. Supported kinds: preferences, sqlcl, start, message, cancel-team, cancel-job, validate, test, plan.',
      'Example: apexrest panel action --action \'{"kind":"validate"}\' --project PATH --json',
    );
  if (key === 'team.start')
    lines.push(
      '',
      'Run separate Codex manager, developer and QA sessions with mandatory reviews.',
      '--developers 1..3 defaults to 1; edits are serialized in the project.',
      '--sandbox read-only|workspace-write defaults to workspace-write for developers.',
      '--timeout-seconds 30..3600 defaults to 900. No interactive approvals are auto-granted.',
      'The configured project must already be trusted and Codex must be logged in.',
      'Returns a team ID immediately. Read team status for the reviewed result.',
    );
  if (key === 'dependencies.install')
    lines.push(
      '',
      'Install managed Node.js, Java, SQLcl, Playwright and Chromium without registering the plugin.',
      'Preview: apexrest dependencies install --dry-run',
      'Install: apexrest dependencies install --yes',
      '--accept-oracle-license records separate consent to the Oracle terms shown in the preview.',
      '--skip-browser omits Playwright/Chromium; --install-os-deps explicitly enables browser OS packages.',
      '--offline uses cached downloads; --home and --cache-dir select managed storage.',
    );
  if (key === 'dependencies.uninstall')
    lines.push(
      '',
      'Preview: apexrest dependencies uninstall --dry-run',
      'Remove managed tools: apexrest dependencies uninstall --yes',
      'Preserves external runtimes, projects, saved connections and cache.',
      'Node.js required by the APEXREST launcher or plugin is retained.',
    );
  if (key === 'connection.list' || key === 'connection.test')
    lines.push('', '--saved uses the SQLcl connection store directly, without an APEXREST reference.');
  if (key === 'sqlcl.configure' || key === 'sqlcl.status')
    lines.push(
      '',
      'Select the Oracle backend for CLI and APEXREST MCP operations; existing sessions keep their mode.',
      'apexrest sqlcl configure --mode cli|mcp --json',
      'cli: SQLcl subprocess (default). mcp: official SQLcl stdio server (sql -mcp).',
      '--mcp-restrict-level 4|1: 4 is the default; 1 explicitly permits scripts but blocks host commands.',
      'Saved in APEXREST_HOME/sqlcl.json. No connection, download or Codex registration is changed.',
      'SQLcl MCP can write its own database audit log on connected operations. No silent CLI fallback.',
    );
  console.log(lines.join('\n'));
}
try {
  if (argv.includes('--help') || argv.includes('-h')) help();
  else if (
    argv[0] === 'tui' ||
    (!argv.length && process.stdin.isTTY && process.stdout.isTTY && process.env.TERM !== 'dumb')
  ) {
    if (
      argv.length > 1 &&
      (argv.length !== 3 || argv[1] !== '--project' || !argv[2] || argv[2].startsWith('--'))
    )
      throw new Fault('INVALID_INPUT', 'Usage: apexrest tui [--project PATH]', 2);
    const { runTui } = await import('./tui.ts');
    await runTui(argv[2] ? { project: argv[2] } : {});
  } else if (!argv.length) help();
  else if (argv[0] === 'panel' && argv[1] === 'tui') {
    if (argv.length !== 2 && (argv.length !== 4 || argv[2] !== '--project' || !argv[3]))
      throw new Fault('INVALID_INPUT', 'Usage: apexrest panel tui [--project PATH]', 2);
    const { runPanelTui } = await import('./panel-tui.ts');
    await runPanelTui(argv[3] ?? process.cwd());
  } else if (argv[0] === '--panel-worker') {
    if (argv.length !== 2 || !argv[1]) throw new Fault('INVALID_INPUT', 'Invalid panel worker request.', 2);
    const { servePanel } = await import('../../core/src/panel-server.ts');
    await servePanel(argv[1]);
  } else if (argv[0] === '--job-worker') {
    if (argv.length !== 3) throw new Fault('INVALID_INPUT', 'Invalid internal job request.', 2);
    await executeJob(await loadProject(argv[1]!), argv[2]!, dispatch);
  } else if (argv[0] === '--team-worker') {
    if (argv.length !== 3) throw new Fault('INVALID_INPUT', 'Invalid internal team request.', 2);
    const { executeTeam } = await import('../../core/src/team-runner.ts');
    await executeTeam(await loadProject(argv[1]!), argv[2]!);
  } else if (argv[0] === 'mcp') {
    if (argv.length !== 1) throw new Fault('INVALID_INPUT', 'mcp accepts no arguments.', 2);
    const { startMcp } = await import('../../mcp/src/server.ts');
    await startMcp();
  } else {
    const selectedOp = argv[0] === '--version' ? { op: 'version', start: 1 } : selected;
    if (!(selectedOp.op in schemas)) throw new Fault('INVALID_INPUT', 'Unknown command. Use --help.', 2);
    const schema = schemas[selectedOp.op as Operation];
    const input: Record<string, unknown> = selected.suite ? { suite: selected.suite } : {};
    const booleans = new Set([
      'json',
      'yes',
      'nonInteractive',
      'offline',
      'dryRun',
      'acceptOracleLicense',
      'skipBrowser',
      'installOsDeps',
      'nativeOnly',
      'keepRuntime',
      'headed',
      'saved',
    ]);
    const numbers = new Set(['appId', 'offset', 'limit', 'developers', 'timeoutSeconds']);
    let index = 0;
    for (let i = selectedOp.start; i < argv.length; i++) {
      const token = argv[i]!;
      if (token.startsWith('--')) {
        const name = token.slice(2).replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
        if (name === 'json') continue;
        if (!(name in schema.shape) || name in input)
          throw new Fault('INVALID_INPUT', `Unknown or duplicate option: ${token}`, 2);
        if (booleans.has(name)) input[name] = true;
        else {
          const value = argv[++i];
          if (!value || value.startsWith('--'))
            throw new Fault('INVALID_INPUT', `Missing value for ${token}`, 2);
          input[name] =
            name === 'action' && selectedOp.op === 'panel.action'
              ? JSON.parse(value)
              : numbers.has(name)
                ? Number(value)
                : value;
        }
      } else {
        const field = positional[selectedOp.op]?.[index++];
        if (!field || field in input) throw new Fault('INVALID_INPUT', `Unexpected argument: ${token}`, 2);
        input[field] = token;
      }
    }
    const result = await dispatch(selectedOp.op, input);
    console.log(JSON.stringify(result, null, argv.includes('--json') ? 0 : 2));
    process.exitCode = result.exitCode;
  }
} catch (e) {
  const result = failure(selected.op, e);
  console.log(JSON.stringify(result));
  process.exitCode = result.exitCode;
}
