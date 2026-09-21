import { z } from 'zod';
import { teamStartSchema, workPreferencesSchema } from './team-schema.ts';
import { sqlclConfigSchema } from './sqlcl-config.ts';
import { refName } from './config.ts';
import { savedConnectionName, ordsUrl, ordsUsername } from './connections.ts';

// Keep absent fields absent so changing browser settings preserves an explicit opt-in.
export const panelPreferencesSchema = z.strictObject({
  executionMode: workPreferencesSchema.shape.executionMode.removeDefault().optional(),
  multiAgentEnabled: workPreferencesSchema.shape.multiAgentEnabled.removeDefault().optional(),
  browserMode: workPreferencesSchema.shape.browserMode.removeDefault().optional(),
  developers: workPreferencesSchema.shape.developers.removeDefault().optional(),
  sandbox: workPreferencesSchema.shape.sandbox.removeDefault().optional(),
  timeoutSeconds: workPreferencesSchema.shape.timeoutSeconds.removeDefault().optional(),
});
export const panelReadSchema = z.strictObject({
  project: z.string().min(1).max(4096).optional(),
  team: z.uuid().optional(),
});
const connectionActionSchema = z.strictObject({
  kind: z.literal('connection'),
  name: refName,
  sqlclName: savedConnectionName.optional(),
  ordsUrl: ordsUrl.optional(),
  ordsUsername: ordsUsername.optional(),
  password: z.string().min(1).max(4096).optional(),
});
export const panelActionSchema = z.strictObject({
  project: z.string().min(1).max(4096).optional(),
  action: z.discriminatedUnion('kind', [
    z.strictObject({ kind: z.literal('preferences'), settings: panelPreferencesSchema }),
    z.strictObject({ kind: z.literal('sqlcl'), settings: sqlclConfigSchema }),
    z.strictObject({ kind: z.literal('saved-connections') }),
    connectionActionSchema,
    z.strictObject({ kind: z.literal('start'), request: teamStartSchema.omit({ project: true }) }),
    z.strictObject({ kind: z.literal('message'), id: z.uuid(), message: z.string().trim().min(1).max(8000) }),
    z.strictObject({ kind: z.literal('cancel-team'), id: z.uuid() }),
    z.strictObject({ kind: z.literal('cancel-job'), id: z.uuid() }),
    z.strictObject({ kind: z.literal('validate') }),
    z.strictObject({ kind: z.literal('browser'), env: z.string().min(1).max(100) }),
    z.strictObject({
      kind: z.literal('test'),
      suite: z.enum(['unit', 'sql', 'api', 'e2e', 'all']),
      env: z.string().min(1).max(100).optional(),
    }),
    z.strictObject({ kind: z.literal('plan'), env: z.string().min(1).max(100) }),
  ]),
});
// Only the local browser form accepts a password. MCP and CLI advertise and
// validate a public schema without any credential entry field.
export const publicPanelActionSchema = panelActionSchema.extend({
  action: z.discriminatedUnion('kind', [
    panelActionSchema.shape.action.options[0],
    ...panelActionSchema.shape.action.options
      .slice(1)
      .map((option) =>
        option.shape.kind.value === 'connection' ? connectionActionSchema.omit({ password: true }) : option,
      ),
  ]),
});
export type PanelAction = z.input<typeof panelActionSchema>['action'];
export type PanelPreferences = z.infer<typeof workPreferencesSchema>;
