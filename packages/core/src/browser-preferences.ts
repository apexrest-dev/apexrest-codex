import { z } from 'zod';
import { contained, exists, readJson } from './fs.ts';
import { parse } from './config.ts';

export const browserPreferencesSchema = z.strictObject({
  browserMode: z.enum(['codex', 'external']).default('codex'),
});

export async function browserPreferences(root: string) {
  const file = await contained(root, '.apexrest/panel/preferences.json');
  // Older installations may have execution settings here. Read only the browser preference;
  // writes use the strict schema so removed settings cannot be reintroduced.
  return parse(z.object(browserPreferencesSchema.shape), (await exists(file)) ? await readJson(file) : {});
}
