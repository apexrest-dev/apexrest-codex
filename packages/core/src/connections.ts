import path from 'node:path';
import { z } from 'zod';
import { exists, readJson, withLock, writeJson } from './fs.ts';
import { managedHome, parse, refName } from './config.ts';
import { Fault } from './result.ts';
// Passed as one SQLcl argv value, never interpolated into a command or SQL.
export const savedConnectionName = z
  .string()
  .min(1)
  .max(512)
  .regex(/^[^\x00-\x1f\x7f-\x9f]+$/);
export const connectionSchema = z.strictObject({ kind: z.literal('sqlcl-store'), name: savedConnectionName });
export type Connection = z.infer<typeof connectionSchema>;
const storeSchema = z.record(refName, connectionSchema);
export async function connections(): Promise<Record<string, Connection>> {
  const file = path.join(managedHome(), 'connections.json');
  return (await exists(file)) ? parse(storeSchema, await readJson(file)) : {};
}
export async function resolveConnection(name: string): Promise<Connection> {
  const connection = (await connections())[name];
  if (!connection)
    throw new Fault(
      'CONNECTION_REQUIRED',
      'Configure the requested SQLcl connection reference locally; do not send credentials in chat.',
      3,
      'blocked',
    );
  return connection;
}
export async function editConnection(name: string, value?: Connection) {
  parse(refName, name);
  return withLock(path.join(managedHome(), 'connections.lock'), async () => {
    const current = await connections();
    if (value) current[name] = parse(connectionSchema, value);
    else delete current[name];
    await writeJson(path.join(managedHome(), 'connections.json'), current);
    return { name, status: value ? 'configured' : 'removed', credentialsDeleted: false };
  });
}
