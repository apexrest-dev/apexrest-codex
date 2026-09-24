// Share the exact offline Oracle validation and evidence rules with component recipes.
import { fileURLToPath } from 'node:url';

if (process.argv.includes('--help')) {
  console.log(
    'Usage: node scripts/verify-pattern-recipes.mjs [--catalog=DIR] [--changed] [--filter=REGEX]\nRuns the pinned SQLcl compiler offline; never connects to or imports an application.',
  );
} else {
  if (!process.argv.some((argument) => argument.startsWith('--catalog=')))
    process.argv.push('--catalog=' + fileURLToPath(new URL('../resources/patterns', import.meta.url)));
  await import('./verify-component-recipes.mjs');
}
