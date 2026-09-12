import { runProcess } from './process.ts';
import { Fault } from './result.ts';
export async function sandboxAction(action: string) {
  const engines = await Promise.all(
    ['docker', 'podman'].map(async (executable) => {
      try {
        const r = await runProcess({
          executable,
          args: ['info', '--format', '{{json .}}'],
          cwd: process.cwd(),
          timeoutMs: 10000,
        });
        return { engine: executable, available: r.code === 0 };
      } catch {
        return { engine: executable, available: false };
      }
    }),
  );
  const state = {
    profile: 'optional',
    platform: `${process.platform}/${process.arch}`,
    engines,
    supported: false,
    reason: 'No provisioned Oracle DB Free + APEX 26.1 + ORDS artifact tuple has been verified on this host.',
    volumesRemoved: false,
  };
  if (action === 'status') return state;
  if (action === 'down') return { ...state, status: 'not-configured', changed: false };
  throw new Fault(
    'SANDBOX_PROFILE_UNVERIFIED',
    state.reason + ' Remote APEX targets remain independent.',
    3,
    'blocked',
  );
}
