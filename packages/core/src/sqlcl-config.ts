import path from 'node:path';
import { z } from 'zod';
import { managedHome, parse } from './config.ts';
import { contained, exists, readJson, withLock, writeJson } from './fs.ts';

export const sqlclMode = z.enum(['cli', 'mcp']);
export const sqlclRestriction = z.enum(['4', '1']);
export const sqlclConfigSchema = z.strictObject({
  schemaVersion: z.literal(1),
  mode: sqlclMode,
  mcpRestrictLevel: sqlclRestriction,
});
export type SqlclConfig = z.infer<typeof sqlclConfigSchema>;
export async function sqlclConfig(): Promise<SqlclConfig> {
  const home = managedHome();
  if (!(await exists(home))) return { schemaVersion: 1, mode: 'cli', mcpRestrictLevel: '4' };
  const file = await contained(home, 'sqlcl.json');
  return (await exists(file))
    ? parse(sqlclConfigSchema, await readJson(file))
    : { schemaVersion: 1, mode: 'cli', mcpRestrictLevel: '4' };
}
export async function configureSqlcl(mode: SqlclConfig['mode'], level?: SqlclConfig['mcpRestrictLevel']) {
  const home = managedHome();
  return withLock(path.join(home, 'sqlcl-config.lock'), async () => {
    const previous = await sqlclConfig();
    const configuration = parse(sqlclConfigSchema, {
      ...previous,
      mode,
      mcpRestrictLevel: level ?? previous.mcpRestrictLevel,
    });
    await writeJson(await contained(home, 'sqlcl.json'), configuration);
    return configuration;
  });
}
