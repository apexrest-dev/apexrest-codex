// Shared, side-effect-free checks for reusing real offline compiler evidence.
import { createHash } from 'node:crypto';

const sorted = (value) =>
  Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b, 'en')));
const sameMap = (actual, expected) =>
  actual !== null &&
  typeof actual === 'object' &&
  !Array.isArray(actual) &&
  JSON.stringify(sorted(actual)) === JSON.stringify(sorted(expected));

export function assertPinnedCompilerVersion(expected, actual) {
  if (typeof expected !== 'string' || !expected.trim() || actual !== expected)
    throw new Error(
      `SQLcl compiler version mismatch. Expected ${expected ?? '<missing pin>'}; found ${actual}.`,
    );
}

export function reusableCompilerRun({
  recipe,
  evidence,
  run,
  inputFiles,
  scaffoldFiles,
  scaffoldSha256,
  compilerVersion,
  mmdVersion,
}) {
  const digest = createHash('sha256')
    .update(JSON.stringify(sorted(inputFiles)))
    .digest('hex');
  return (
    recipe.readiness === 'ready' &&
    recipe.verification?.compiler?.status === 'passed' &&
    recipe.verification.compiler.sourceSha256 === digest &&
    recipe.verification.compiler.scaffoldSha256 === scaffoldSha256 &&
    recipe.verification.compiler.mmdVersion === mmdVersion &&
    evidence.mock === false &&
    evidence.compiler === compilerVersion &&
    evidence.mmdVersion === mmdVersion &&
    evidence.scaffoldSha256 === scaffoldSha256 &&
    sameMap(evidence.scaffoldFiles, scaffoldFiles) &&
    run?.recipeId === recipe.id &&
    run.passed === true &&
    run.sourceSha256 === digest &&
    sameMap(run.inputFiles, inputFiles) &&
    run.inputUnchanged === true &&
    run.exitCode === 0 &&
    typeof run.output === 'string' &&
    /Validation successful/.test(run.output) &&
    !/APEXLang Compile Errors|ORA-\d{5}|\bError:|\bWarning:/i.test(run.output)
  );
}
