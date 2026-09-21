import { z } from 'zod';

const workOptionsSchema = z.strictObject({
  executionMode: z.enum(['single', 'team']).default('single'),
  browserMode: z.enum(['codex', 'external']).default('codex'),
  developers: z.number().int().min(1).max(3).default(1),
  sandbox: z.enum(['read-only', 'workspace-write']).default('workspace-write'),
  timeoutSeconds: z.number().int().min(30).max(3600).default(900),
});
export const workPreferencesSchema = workOptionsSchema.extend({
  // Legacy executionMode: team was also written by unrelated settings saves.
  // Only this explicit settings opt-in authorizes new multi-agent runs.
  multiAgentEnabled: z.boolean().default(false),
});
// Keep omitted options absent at transport boundaries so saved preferences win.
export const teamStartSchema = z.strictObject({
  executionMode: workPreferencesSchema.shape.executionMode.removeDefault().optional(),
  browserMode: workPreferencesSchema.shape.browserMode.removeDefault().optional(),
  developers: workPreferencesSchema.shape.developers.removeDefault().optional(),
  sandbox: workPreferencesSchema.shape.sandbox.removeDefault().optional(),
  timeoutSeconds: workPreferencesSchema.shape.timeoutSeconds.removeDefault().optional(),
  project: z.string().optional(),
  task: z.string().trim().min(1).max(16000),
});
export const resolvedTeamStartSchema = workOptionsSchema.extend({
  project: z.string().optional(),
  task: teamStartSchema.shape.task,
});
export const queuedWorkSchema = resolvedTeamStartSchema.extend({
  multiAgentEnabled: z.boolean().default(false),
});

// Historical display only: never use a roster or old reviews to authorize a launch.
export function recordedExecutionMode(state: {
  executionMode?: unknown;
  members?: unknown;
  reviews?: unknown;
  qa?: unknown;
}): 'single' | 'team' {
  if (state.executionMode === 'single' || state.executionMode === 'team') return state.executionMode;
  const reviewed = [state.reviews, state.qa].some((rows) => Array.isArray(rows) && rows.length > 0);
  const peers =
    Array.isArray(state.members) &&
    state.members.some(
      (member) => member && ['manager', 'qa', 'developer-2', 'developer-3'].includes(member.role),
    );
  return reviewed || peers ? 'team' : 'single';
}
export const teamIdSchema = z.strictObject({ project: z.string().optional(), id: z.uuid() });
export const workStartSchema = teamStartSchema.extend({ requestId: z.uuid() });
export const teamWaitSchema = teamIdSchema.extend({
  cursor: z
    .string()
    .regex(/^[a-f0-9]{64}$/)
    .optional(),
  waitSeconds: z.number().int().min(1).max(30).default(25),
});
export const teamMessageSchema = teamIdSchema.extend({ message: z.string().trim().min(1).max(8000) });
export const planningSchema = z.strictObject({
  plan: z.string().min(1).max(6000),
  complexity: z.enum(['simple', 'standard', 'complex']),
  reason: z.string().min(1).max(600),
});
export const reviewSchema = z.strictObject({
  decision: z.enum(['approve', 'revise']),
  summary: z.string().min(1).max(4000),
  findings: z.array(z.string().min(1).max(2000)).max(20),
});
// Routing advice is separate from the approval gate; old persisted reviews remain readable.
export const routedReviewSchema = reviewSchema.extend({
  revisionCause: z.enum(['none', 'implementation', 'prerequisite']),
});
export const qaSchema = z.strictObject({
  decision: z.enum(['pass', 'fail', 'blocked']),
  summary: z.string().min(1).max(4000),
  checks: z
    .array(
      z.strictObject({
        name: z.string().min(1).max(500),
        status: z.enum(['passed', 'failed', 'not_run']),
        evidence: z.string().min(1).max(2000),
      }),
    )
    .min(1)
    .max(20),
});
export type TeamRequest = z.infer<typeof teamStartSchema>;
export type Review = z.infer<typeof reviewSchema>;
export type QaReport = z.infer<typeof qaSchema>;
export type TeamRole = 'manager' | 'qa' | 'developer-1' | 'developer-2' | 'developer-3';
export type TeamPhase =
  'queued' | 'planning' | 'development' | 'code_review' | 'qa' | 'final_review' | 'verification';
export interface ModelSelection {
  mode: 'auto';
  tier: 'fast' | 'balanced' | 'strong';
  model: string;
  effort: string;
  reason: string;
}
export interface TokenUsage {
  totalTokens: number;
  inputTokens?: number;
  cachedInputTokens?: number;
  cacheWriteInputTokens?: number;
  outputTokens?: number;
  reasoningOutputTokens?: number;
}
export interface TeamMember {
  role: TeamRole;
  name?: string;
  threadId: string;
  sessionId: string;
  turnId?: string;
  status: string;
  result: string;
  configuration?: {
    model: string | null;
    reasoningEffort: string | null;
    sandbox: string;
    approvalPolicy: string;
  };
  currentAction?: { id: string; kind: string; title: string; startedAt: string };
  totalTokens?: number;
  tokenUsage?: TokenUsage;
  selection?: ModelSelection;
}
export interface TeamMessage {
  id: string;
  from: TeamRole | 'user';
  to: TeamRole;
  text: string;
  status: 'queued' | 'delivered' | 'not_delivered' | 'outcome_unknown';
}
export interface TeamState {
  id: string;
  executionMode?: 'team' | 'single';
  browserMode?: 'codex' | 'external';
  status: string;
  phase: TeamPhase;
  updatedAt: string;
  revision: number;
  members: TeamMember[];
  messages: TeamMessage[];
  result: string;
  diagnostics: string[];
  reviews: { revision: number; phase: 'code_review' | 'final_review'; digest: string; report: Review }[];
  qa: { revision: number; digest: string; report: QaReport }[];
  observations?: {
    role: TeamRole;
    revision: number;
    phase: TeamPhase;
    kind: string;
    detail: string;
    at?: string;
  }[];
  approvedDigest?: string;
  completedDigest?: string;
  verification?: { revision: number; digest: string; report: QaReport }[];
  modelPolicy?: {
    mode: 'auto';
    complexity: 'simple' | 'standard' | 'complex';
    reason: string;
    repairFailures: number;
  };
  limits?: { startedAt: string; timeoutSeconds: number };
}
