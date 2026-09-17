import { z } from 'zod';

export const teamStartSchema = z.strictObject({
  project: z.string().optional(),
  task: z.string().trim().min(1).max(16000),
  developers: z.number().int().min(1).max(3).default(1),
  sandbox: z.enum(['read-only', 'workspace-write']).default('workspace-write'),
  timeoutSeconds: z.number().int().min(30).max(3600).default(900),
});
export const teamIdSchema = z.strictObject({ project: z.string().optional(), id: z.uuid() });
export const teamMessageSchema = teamIdSchema.extend({ message: z.string().trim().min(1).max(8000) });
export const reviewSchema = z.strictObject({
  decision: z.enum(['approve', 'revise']),
  summary: z.string().min(1).max(4000),
  findings: z.array(z.string().min(1).max(2000)).max(20),
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
export type TeamPhase = 'queued' | 'planning' | 'development' | 'code_review' | 'qa' | 'final_review';
export interface TeamMember {
  role: TeamRole;
  threadId: string;
  sessionId: string;
  turnId?: string;
  status: string;
  result: string;
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
  }[];
  approvedDigest?: string;
}
