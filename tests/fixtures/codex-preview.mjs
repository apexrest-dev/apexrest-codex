// CLI contracts exercise source resolution without requiring a native Codex host.
// Actual registration is covered separately by verify-setup-registration.mjs.
import childProcess from 'node:child_process';
import { EventEmitter } from 'node:events';
import { syncBuiltinESMExports } from 'node:module';
import { PassThrough } from 'node:stream';

const spawn = childProcess.spawn;
childProcess.spawn = (executable, args, options) => {
  if (executable !== 'codex') return spawn(executable, args, options);
  let output;
  if (args.join(' ') === 'plugin marketplace list --json') output = '{"marketplaces":[]}\n';
  else if (args.join(' ') === '--version') output = 'codex-cli 0.154.0\n';
  else throw new Error('Preview attempted a mutating or unexpected Codex command: ' + args.join(' '));
  const child = new EventEmitter();
  child.stdout = new PassThrough();
  child.stderr = new PassThrough();
  child.stdin = new PassThrough();
  child.kill = () => true;
  setImmediate(() => {
    child.stdout.end(output);
    child.emit('close', 0);
  });
  return child;
};
syncBuiltinESMExports();
