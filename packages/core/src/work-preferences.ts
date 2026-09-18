import { contained, exists, readJson } from './fs.ts';
import { parse } from './config.ts';
import {
  workPreferencesSchema,
  resolvedTeamStartSchema,
  teamStartSchema,
  type TeamRequest,
} from './team-schema.ts';

export async function workPreferences(root: string) {
  const file = await contained(root, '.apexrest/panel/preferences.json');
  return parse(workPreferencesSchema, (await exists(file)) ? await readJson(file) : {});
}

export async function resolveWorkRequest(root: string, input: TeamRequest) {
  const fields = parse(teamStartSchema, input);
  const overrides = Object.fromEntries(Object.entries(fields).filter(([, value]) => value !== undefined));
  const request = resolvedTeamStartSchema.parse({
    ...(await workPreferences(root)),
    ...overrides,
    project: root,
  });
  if (request.executionMode === 'single') request.developers = 1;
  return request;
}
