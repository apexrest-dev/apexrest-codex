import { z } from 'zod';
import { teamStartSchema } from './team-schema.ts';
import { sqlclConfigSchema } from './sqlcl-config.ts';

export const panelPreferencesSchema = teamStartSchema.omit({ project: true, task: true });
export const panelReadSchema = z.strictObject({
  project: z.string().min(1).max(4096).optional(),
  team: z.uuid().optional(),
});
export const panelActionSchema = z.strictObject({
  project: z.string().min(1).max(4096).optional(),
  action: z.discriminatedUnion('kind', [
    z.strictObject({ kind: z.literal('preferences'), settings: panelPreferencesSchema }),
    z.strictObject({ kind: z.literal('sqlcl'), settings: sqlclConfigSchema }),
    z.strictObject({ kind: z.literal('start'), request: teamStartSchema.omit({ project: true }) }),
    z.strictObject({ kind: z.literal('message'), id: z.uuid(), message: z.string().trim().min(1).max(8000) }),
    z.strictObject({ kind: z.literal('cancel-team'), id: z.uuid() }),
    z.strictObject({ kind: z.literal('cancel-job'), id: z.uuid() }),
    z.strictObject({ kind: z.literal('validate') }),
    z.strictObject({
      kind: z.literal('test'),
      suite: z.enum(['unit', 'sql', 'api', 'e2e', 'all']),
      env: z.string().min(1).max(100).optional(),
    }),
    z.strictObject({ kind: z.literal('plan'), env: z.string().min(1).max(100) }),
  ]),
});
export type PanelAction = z.infer<typeof panelActionSchema>['action'];
export type PanelPreferences = z.infer<typeof panelPreferencesSchema>;
