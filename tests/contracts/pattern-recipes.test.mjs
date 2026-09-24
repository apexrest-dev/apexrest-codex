import test from 'node:test';
import assert from 'node:assert/strict';
import { cp, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseApxDeclarations } from '../../scripts/lib/component-source.mjs';

test('drawer cancellation runs only after the Cancel button click, never during initialization', async () => {
  const source = await readFile(
    'resources/patterns/recipes/data-entry-drawer-form/pages/p00002-pattern-form.apx',
    'utf8',
  );
  const declarations = parseApxDeclarations(source);
  const controller = declarations.find(
    (entry) => entry.kind === 'dynamicAction' && entry.key === 'cancel-edit',
  );
  assert.ok(controller, 'The drawer must expose an explicit Cancel action.');
  assert.equal(controller.properties['when.event'], 'click');
  assert.equal(controller.properties['when.selectionType'], 'button');
  assert.equal(controller.properties['when.button'], '@cancel');
  const actions = parseApxDeclarations(controller.text).filter(
    (entry) => entry.kind === 'action' && entry.properties.action === 'cancelDialog',
  );
  assert.ok(actions.length > 0);
  for (const action of actions)
    assert.equal(
      action.properties['execution.fireOnInit'],
      'false',
      'MMD defaults Fire on Initialization to Yes; a drawer must remain open on initial render.',
    );
});

test('list and tree selection detail queries preserve selected-row binding and AJAX item submission', async () => {
  for (const recipe of ['selection-list-detail', 'selection-tree-detail']) {
    const source = await readFile(`resources/patterns/recipes/${recipe}/pages/p00001-home.apx`, 'utf8');
    const declarations = parseApxDeclarations(source);
    assert.ok(
      declarations.some((entry) => entry.kind === 'pageItem' && entry.key === 'P1_SELECTED_ID'),
      recipe,
    );
    const details = declarations.find((entry) => entry.kind === 'region' && entry.key === 'details');
    assert.ok(details, recipe);
    assert.match(
      details.text,
      /where\s+ID\s*=\s*:P1_SELECTED_ID\b/i,
      `${recipe}: the child query must select only the chosen record.`,
    );
    assert.ok(
      details.properties['source.pageItemsToSubmit']?.split(/\s*,\s*/).includes('P1_SELECTED_ID'),
      `${recipe}: an AJAX refresh must submit the selected identity.`,
    );
  }
});

test('changed-only pattern verification requires explicit dependency closure even with reusable source hashes', async (t) => {
  // This subprocess exercises local verifier state transitions using fake SQLcl.
  // Its temporary output is a workflow fixture, never Oracle/compiler evidence.
  const temporary = await mkdtemp(path.join(tmpdir(), 'apexrest-verifier-workflow-fixture-'));
  t.after(() => rm(temporary, { recursive: true, force: true }));
  const catalog = path.join(temporary, 'catalog');
  const source = path.resolve('resources/patterns');
  const originalRegistry = JSON.parse(await readFile(path.join(source, 'recipes/registry.json'), 'utf8'));
  const originalEvidence = JSON.parse(
    await readFile(path.join(source, 'recipes/compiler-evidence.json'), 'utf8'),
  );
  const originalRecipe = originalRegistry.recipes.find(
    (recipe) => recipe.readiness === 'ready' && recipe.dependenciesClosed === true && recipe.files.length > 0,
  );
  assert.ok(originalRecipe);
  const originalRun = originalEvidence.runs.find((run) => run.recipeId === originalRecipe.id);
  assert.ok(originalRun);
  await cp(
    path.join(source, originalRegistry.scaffold.directory),
    path.join(catalog, originalRegistry.scaffold.directory),
    { recursive: true },
  );
  await cp(path.join(source, originalRecipe.directory), path.join(catalog, originalRecipe.directory), {
    recursive: true,
  });
  const fixtureVersion = 'LOCAL WORKFLOW FIXTURE - NOT ORACLE';
  const baselineRegistry = {
    ...originalRegistry,
    compilerVersion: fixtureVersion,
    recipes: [originalRecipe],
  };
  const baselineEvidence = {
    ...originalEvidence,
    compiler: fixtureVersion,
    scope: fixtureVersion,
    runs: [originalRun],
  };
  const log = path.join(temporary, 'fake-sqlcl-calls.jsonl');
  const fake = path.join(temporary, 'fake-sqlcl.mjs');
  const preload = path.join(temporary, 'route-fake-sqlcl.mjs');
  await writeFile(
    fake,
    `
import assert from 'node:assert/strict';
import { appendFile } from 'node:fs/promises';
const args = process.argv.slice(2);
await appendFile(process.env.PATTERN_TEST_SQLCL_LOG, JSON.stringify(args) + '\\n');
if (args.length === 1 && args[0] === '-version') {
  console.log(process.env.PATTERN_TEST_SQLCL_VERSION);
} else {
  assert.deepEqual(args, ['-S', '/nolog']);
  let input = '';
  for await (const chunk of process.stdin) input += chunk;
  assert.match(input, /^apex validate -input "[^"\\n]+"\\nexit\\n$/);
  console.log('LOCAL WORKFLOW FIXTURE - NOT ORACLE');
  console.log('Validation successful');
}
`,
  );
  // Route only the configured SQLcl executable to a Node fixture. This avoids
  // platform-specific shell launchers and cannot fall through to real SQLcl.
  await writeFile(
    preload,
    `
import childProcess from 'node:child_process';
import { syncBuiltinESMExports } from 'node:module';
const spawn = childProcess.spawn;
childProcess.spawn = (command, args, options) => {
  if (command !== process.env.APEXREST_SQLCL) throw new Error('Unexpected fixture process: ' + command);
  return spawn(process.execPath, [process.env.PATTERN_TEST_SQLCL_SCRIPT, ...args], options);
};
syncBuiltinESMExports();
`,
  );
  const registryPath = path.join(catalog, 'recipes/registry.json');
  const evidencePath = path.join(catalog, 'recipes/compiler-evidence.json');
  for (const closure of [false, undefined, true]) {
    const registry = structuredClone(baselineRegistry);
    const before = registry.recipes[0];
    if (closure === undefined) delete before.dependenciesClosed;
    else before.dependenciesClosed = closure;
    if (closure === false) before.reason = 'Local fixture: an external dependency remains unresolved.';
    else delete before.reason;
    await writeFile(registryPath, JSON.stringify(registry));
    await writeFile(evidencePath, JSON.stringify(baselineEvidence));
    await writeFile(log, '');
    const result = spawnSync(
      process.execPath,
      [
        '--import',
        pathToFileURL(preload).href,
        path.resolve('scripts/verify-pattern-recipes.mjs'),
        '--catalog=' + catalog,
        '--changed',
      ],
      {
        cwd: temporary,
        encoding: 'utf8',
        timeout: 20000,
        env: {
          ...process.env,
          APEXREST_SQLCL: path.join(temporary, 'fixture-only-sqlcl'),
          PATTERN_TEST_SQLCL_SCRIPT: fake,
          PATTERN_TEST_SQLCL_LOG: log,
          PATTERN_TEST_SQLCL_VERSION: fixtureVersion,
        },
      },
    );
    assert.equal(result.status, 0, result.stdout + result.stderr);
    const after = JSON.parse(await readFile(registryPath, 'utf8')).recipes[0];
    const evidence = JSON.parse(await readFile(evidencePath, 'utf8'));
    const calls = (await readFile(log, 'utf8'))
      .trim()
      .split('\n')
      .map((line) => JSON.parse(line));
    assert.equal(calls.filter((args) => args[0] === '-version').length, 1);
    assert.equal(
      after.verification.compiler.sourceSha256,
      originalRecipe.verification.compiler.sourceSha256,
      'Dependency flags do not change scaffold or recipe source bytes.',
    );
    assert.equal(evidence.runs[0].sourceSha256, originalRun.sourceSha256);
    assert.deepEqual(evidence.runs[0].inputFiles, originalRun.inputFiles);
    if (closure === true) {
      assert.equal(calls.length, 1, 'Unchanged, explicitly closed recipes can skip compiler execution.');
      assert.deepEqual(after, before);
      assert.equal(after.readiness, 'ready');
    } else {
      assert.equal(
        calls.filter((args) => args[0] === '-S').length,
        1,
        'Missing closure must bypass the changed-only cache.',
      );
      assert.equal(
        after.verification.compiler.status,
        'passed',
        'The fake compiler success must not imply dependency closure.',
      );
      assert.equal(after.readiness, 'unresolved');
      if (closure === false) assert.equal(after.reason, before.reason);
      else assert.match(after.reason, /dependencies.*not yet closed/i);
    }
  }
});
