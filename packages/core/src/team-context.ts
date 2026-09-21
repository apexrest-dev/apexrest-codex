import { recordedExecutionMode, type TeamRole, type TeamState } from './team-schema.ts';

// Each role has one persistent session. Send its assignment once, with durable
// pointers for recovery after host compaction. Findings and new messages remain
// in the live context on every turn; this never replaces verification evidence.
export function taskBriefing(task: string, directory: string) {
  const tasks = new Set<TeamRole>(),
    plans = new Set<TeamRole>();
  return {
    rememberPlan(role: TeamRole) {
      plans.add(role);
    },
    next(role: TeamRole, plan?: string) {
      const includeTask = !tasks.has(role),
        includePlan = plan !== undefined && !plans.has(role);
      tasks.add(role);
      if (includePlan) plans.add(role);
      return {
        taskFile: directory + '/request.json',
        planFile: directory + '/plan.json',
        ...(includeTask ? { task } : {}),
        ...(includePlan ? { plan } : {}),
      };
    },
  };
}

// Tool transcripts remain in the durable report; repeating them on every turn
// inflated context without replacing independent inspection of source/evidence.
export function compactTeamContext(state: TeamState, role: TeamRole, fullReport: string) {
  return {
    executionMode: recordedExecutionMode(state),
    browserMode: state.browserMode ?? 'codex',
    phase: state.phase,
    revision: state.revision,
    fullReport,
    evidenceNote:
      'Summaries below are bounded. Read relevant fullReport fields for omitted findings or messages. Independently inspect source and check evidence; summaries are not proof.',
    members: state.members.map((m) => ({
      role: m.role,
      name: m.name,
      status: m.status,
      ...(m.role !== role ? { result: m.result.slice(-1200) } : {}),
    })),
    messages: state.messages
      .filter((m) => m.to === role || m.from === 'user')
      .slice(-12)
      .map((m) => ({ from: m.from, to: m.to, text: m.text.slice(0, 1500), status: m.status })),
    reviews: state.reviews.slice(-2).map((r) => ({
      phase: r.phase,
      revision: r.revision,
      decision: r.report.decision,
      summary: r.report.summary.slice(0, 800),
      findings: r.report.findings.map((f) => f.slice(0, 300)),
    })),
    qa: state.qa.slice(-1).map((q) => ({
      revision: q.revision,
      decision: q.report.decision,
      summary: q.report.summary.slice(0, 800),
      checks: q.report.checks.map((c) => ({
        name: c.name.slice(0, 160),
        status: c.status,
        evidence: c.evidence.slice(0, 300),
      })),
    })),
    verification: state.verification?.slice(-1).map((v) => ({
      revision: v.revision,
      decision: v.report.decision,
      summary: v.report.summary.slice(0, 800),
      checks: v.report.checks.map((c) => ({
        name: c.name.slice(0, 160),
        status: c.status,
        evidence: c.evidence.slice(0, 300),
      })),
    })),
  };
}
