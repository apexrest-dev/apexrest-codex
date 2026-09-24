// Real offline Oracle compilation. Never connects to a database or imports an application.
import { cp, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { assertPinnedCompilerVersion, reusableCompilerRun } from './component-recipe-verification.mjs';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalogArgument = process.argv.find((argument) => argument.startsWith('--catalog='))?.slice(10);
const catalog = path.resolve(catalogArgument ?? path.join(repo, 'resources/components'));
const registryPath = path.join(catalog, 'recipes/registry.json');
const evidencePath = path.join(catalog, 'recipes/compiler-evidence.json');
const registry = JSON.parse(await readFile(registryPath, 'utf8'));
const sqlcl = process.env.APEXREST_SQLCL ?? 'sql';
const filter = process.argv.find((argument) => argument.startsWith('--filter='))?.slice(9);
const changedOnly = process.argv.includes('--changed');
const hasClosedDependencies = (recipe) =>
  recipe.patternId ? recipe.dependenciesClosed === true : recipe.dependenciesClosed !== false;
let selected = registry.recipes.filter(
  (recipe) => recipe.files.length && (!filter || new RegExp(filter).test(recipe.id)),
);
const sha = (value) => createHash('sha256').update(value).digest('hex');
const sorted = (object) =>
  Object.fromEntries(Object.entries(object).sort(([a], [b]) => a.localeCompare(b, 'en')));
async function listFiles(directory, prefix = '') {
  const files = [];
  for (const entry of await readdir(path.join(directory, prefix), { withFileTypes: true })) {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Symlink is not an allowed compiler input: ${relative}`);
    if (entry.isDirectory()) files.push(...(await listFiles(directory, relative)));
    else files.push(relative);
  }
  return files.sort();
}
function run(command, args, input = '', timeout = 120000) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ['pipe', 'pipe', 'pipe'] });
    let output = '';
    const timer = setTimeout(() => child.kill('SIGKILL'), timeout);
    child.stdout.on('data', (part) => {
      output += part;
    });
    child.stderr.on('data', (part) => {
      output += part;
    });
    child.on('error', (error) => {
      clearTimeout(timer);
      reject(error);
    });
    child.on('close', (code, signal) => {
      clearTimeout(timer);
      resolve({ code, signal, output });
    });
    child.stdin.end(input);
  });
}
const version = await run(sqlcl, ['-version']);
if (version.code !== 0) throw new Error(`Cannot identify SQLcl: ${version.output}`);
assertPinnedCompilerVersion(registry.compilerVersion, version.output.trim());
const scaffold = path.join(catalog, registry.scaffold.directory);
const scaffoldFiles = {};
for (const file of await listFiles(scaffold))
  scaffoldFiles[file] = sha(await readFile(path.join(scaffold, file)));
const scaffoldSha256 = sha(JSON.stringify(sorted(scaffoldFiles)));
const mmd = JSON.parse(await readFile(path.join(scaffold, '.apex/apexlang.json'), 'utf8'));
if (mmd.mmdVersion !== registry.mmdVersion) throw new Error('Registry and scaffold MMD differ.');
const previous =
  filter || changedOnly
    ? JSON.parse(await readFile(evidencePath, 'utf8').catch(() => '{"runs":[]}'))
    : { runs: [] };
if (changedOnly) {
  const candidates = [];
  for (const recipe of selected) {
    const inputs = { ...scaffoldFiles };
    for (const file of recipe.files)
      inputs[file] = sha(await readFile(path.join(catalog, recipe.directory, file)));
    const prior = previous.runs.find((entry) => entry.recipeId === recipe.id);
    if (
      !hasClosedDependencies(recipe) ||
      !reusableCompilerRun({
        recipe,
        evidence: previous,
        run: prior,
        inputFiles: inputs,
        scaffoldFiles,
        scaffoldSha256,
        compilerVersion: registry.compilerVersion,
        mmdVersion: mmd.mmdVersion,
      })
    )
      candidates.push(recipe);
  }
  selected = candidates;
}
const evidence = {
  schemaVersion: 1,
  timestamp: new Date().toISOString(),
  mock: false,
  scope:
    'Real offline Oracle APEXlang validation only. Synthetic SQL is not executed. No database connection, application import or browser/runtime verification.',
  compiler: version.output.trim(),
  mmdVersion: mmd.mmdVersion,
  sourceHashAlgorithm:
    'sha256(JSON.stringify(inputFiles sorted by application-relative path using en locale)); inputFiles contains sha256 of every scaffold and overlay file; overlays replace scaffold paths',
  scaffoldSha256,
  scaffoldFiles: sorted(scaffoldFiles),
  runs: previous.runs.filter(
    (entry) =>
      registry.recipes.some((recipe) => recipe.id === entry.recipeId) &&
      !selected.some((recipe) => recipe.id === entry.recipeId),
  ),
};
const pending = [...selected];
async function worker() {
  while (pending.length) {
    const recipe = pending.shift();
    const temporary = await mkdtemp(path.join(tmpdir(), 'apexrest-component-'));
    const application = path.join(temporary, 'application');
    try {
      await cp(scaffold, application, { recursive: true });
      const inputs = { ...scaffoldFiles };
      for (const file of recipe.files) {
        if (path.isAbsolute(file) || file.split('/').includes('..'))
          throw new Error(`Unsafe recipe path: ${file}`);
        const from = path.join(catalog, recipe.directory, file);
        const to = path.join(application, file);
        await mkdir(path.dirname(to), { recursive: true });
        await cp(from, to);
        inputs[file] = sha(await readFile(from));
      }
      const inputFiles = sorted(inputs);
      const sourceSha256 = sha(JSON.stringify(inputFiles));
      const result = await run(sqlcl, ['-S', '/nolog'], `apex validate -input "${application}"\nexit\n`);
      const output = result.output.replaceAll(temporary, '<temporary-directory>').trim();
      const unchanged = (
        await Promise.all(
          Object.entries(inputFiles).map(
            async ([file, hash]) => sha(await readFile(path.join(application, file))) === hash,
          ),
        )
      ).every(Boolean);
      const passed =
        result.code === 0 &&
        /Validation successful/.test(output) &&
        !/APEXLang Compile Errors|ORA-\d{5}|\bError:|\bWarning:/i.test(output) &&
        unchanged;
      evidence.runs.push({
        recipeId: recipe.id,
        passed,
        sourceSha256,
        inputFiles,
        inputUnchanged: unchanged,
        exitCode: result.code,
        output,
      });
      recipe.verification.compiler = {
        status: passed ? 'passed' : 'failed',
        evidence: 'recipes/compiler-evidence.json',
        sourceSha256,
        scaffoldSha256,
        mmdVersion: mmd.mmdVersion,
      };
      const dependenciesClosed = hasClosedDependencies(recipe);
      recipe.readiness = passed && dependenciesClosed ? 'ready' : 'unresolved';
      if (passed && dependenciesClosed) delete recipe.reason;
      else if (!passed)
        recipe.reason =
          'Offline Oracle validation did not pass without warnings. See the exact recipe run in compiler-evidence.json.';
      else recipe.reason ??= 'Compiler validation passed; the declared dependencies are not yet closed.';
      console.log(`${passed ? 'PASS' : 'FAIL'} ${recipe.id}${passed ? '' : '\n' + output}`);
    } finally {
      await rm(temporary, { recursive: true, force: true });
    }
  }
}
await Promise.all(Array.from({ length: 3 }, () => worker()));
evidence.runs.sort((a, b) => a.recipeId.localeCompare(b.recipeId, 'en'));
evidence.status = evidence.runs.every((run) => run.passed) ? 'passed' : 'failed';
await writeFile(evidencePath, JSON.stringify(evidence, null, 2) + '\n');
await writeFile(registryPath, JSON.stringify(registry, null, 2) + '\n');
if (evidence.status !== 'passed') process.exitCode = 1;
