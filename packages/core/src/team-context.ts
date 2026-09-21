import { createHash } from 'node:crypto';
import { recordedExecutionMode, type TeamRole, type TeamState } from './team-schema.ts';

// Each role has one persistent session. Send its assignment once, with durable
// pointers for recovery after host compaction. The independent delivery ledger
// supplies new findings and messages; neither mechanism replaces verification evidence.
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

const fingerprint = (value: unknown) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const visibleMessage = (message: TeamState['messages'][number], role: TeamRole) =>
  message.to === role || message.from === 'user';

// Summaries are navigation aids. Stable JSON pointers identify complete evidence
// in the durable report, including every omitted finding and check.
export function compactTeamContext(state: TeamState, role: TeamRole, fullReport: string) {
  const checks = (entries: NonNullable<TeamState['verification']>, field: 'qa' | 'verification') =>
    entries.slice(-1).map((entry, i) => ({
      reference: `/${field}/${entries.length - 1 + i}/report`,
      revision: entry.revision,
      decision: entry.report.decision,
      summary: entry.report.summary.slice(0, 600),
      ...(entry.report.summary.length > 600 ? { summaryTruncated: true } : {}),
      checks: entry.report.checks.slice(0, 4).map((check) => ({
        name: check.name.slice(0, 100),
        status: check.status,
        evidence: check.evidence.slice(0, 200),
        ...(check.name.length > 100 || check.evidence.length > 200 ? { truncated: true } : {}),
      })),
      ...(entry.report.checks.length > 4 ? { omittedChecks: entry.report.checks.length - 4 } : {}),
    }));
  return {
    executionMode: recordedExecutionMode(state),
    browserMode: state.browserMode ?? 'codex',
    phase: state.phase,
    revision: state.revision,
    fullReport,
    evidenceNote:
      'Bounded summaries are not proof. JSON pointers reference fullReport; read omitted findings/checks in full. Independently inspect source and evidence. Earlier user constraints remain binding: recover /messages after compaction. mode=snapshot restores summaries; messageId reads a whole visible message.',
    members: state.members.map((member, i) => ({
      reference: `/members/${i}`,
      role: member.role,
      name: member.name,
      ...(member.role !== role
        ? {
            status: member.status,
            result: member.result.slice(-800),
            ...(member.result.length > 800 ? { resultTruncated: true } : {}),
          }
        : {}),
    })),
    reviews: state.reviews.slice(-2).map((entry, i) => ({
      reference: `/reviews/${Math.max(0, state.reviews.length - 2) + i}/report`,
      phase: entry.phase,
      revision: entry.revision,
      decision: entry.report.decision,
      summary: entry.report.summary.slice(0, 600),
      ...(entry.report.summary.length > 600 ? { summaryTruncated: true } : {}),
      findings: entry.report.findings.slice(0, 3).map((finding) => finding.slice(0, 200)),
      ...(entry.report.findings.slice(0, 3).some((finding) => finding.length > 200)
        ? { truncatedFindings: true }
        : {}),
      ...(entry.report.findings.length > 3 ? { omittedFindings: entry.report.findings.length - 3 } : {}),
    })),
    qa: checks(state.qa, 'qa'),
    verification: checks(state.verification ?? [], 'verification'),
    omitted: {
      reviews: Math.max(0, state.reviews.length - 2),
      qa: Math.max(0, state.qa.length - 1),
      verification: Math.max(0, (state.verification?.length ?? 0) - 1),
    },
  };
}

// Each isolated role retains its own delivery ledger for this worker's lifetime.
// New messages bypass summary limits: user constraints must never be truncated
// and then silently marked delivered. Runtime message limits still apply.
export class TeamContextDelivery {
  private seen = new Map<TeamRole, Map<string, string>>();
  private delivered = new Map<TeamRole, Set<string>>();

  markMessage(role: TeamRole, id: string) {
    const ids = this.delivered.get(role) ?? new Set<string>();
    ids.add(id);
    this.delivered.set(role, ids);
  }

  read(state: TeamState, role: TeamRole, fullReport: string, mode: 'changes' | 'snapshot' = 'changes') {
    const previous = this.seen.get(role) ?? new Map<string, string>();
    const snapshot = compactTeamContext(state, role, fullReport);
    const { members, reviews, qa, verification, ...metadata } = snapshot;
    const initial = previous.size === 0 || mode === 'snapshot';
    const changed = (key: string, value: unknown) => {
      const hash = fingerprint(value),
        differs = previous.get(key) !== hash;
      previous.set(key, hash);
      return initial || differs;
    };
    const metadataChanges = Object.fromEntries(
      Object.entries(metadata).filter(([field, value]) => changed(`metadata/${field}`, value)),
    );
    const metadataChanged = Object.keys(metadataChanges).length > 0;
    const sections = Object.fromEntries(
      Object.entries({ members, reviews, qa, verification }).map(([field, entries]) => [
        field,
        entries.filter((entry) => changed(entry.reference, entry)),
      ]),
    );
    const ids = this.delivered.get(role) ?? new Set<string>();
    const visible = state.messages
      .map((message, i) => ({ ...message, reference: `/messages/${i}` }))
      .filter((message) => visibleMessage(message, role));
    const messages = visible.filter((message) => !ids.has(message.id));
    messages.forEach((message) => this.markMessage(role, message.id));
    this.seen.set(role, previous);
    const cursor = fingerprint({ snapshot, messages: visible.map((message) => message.id) });
    const anyChanges =
      metadataChanged || messages.length > 0 || Object.values(sections).some((entries) => entries.length > 0);
    return {
      messageIds: messages.map((message) => message.id),
      context: {
        kind: initial ? 'snapshot' : anyChanges ? 'changes' : 'unchanged',
        cursor,
        fullReport,
        ...metadataChanges,
        ...Object.fromEntries(
          Object.entries(sections).filter(([, entries]) => initial || entries.length > 0),
        ),
        ...(messages.length ? { messages } : {}),
        ...(initial && visible.length
          ? {
              messageIndex: visible
                .slice(-12)
                .map(({ id, from, to, reference }) => ({ id, from, to, reference })),
              ...(visible.length > 12 ? { omittedMessageIndex: visible.length - 12 } : {}),
            }
          : {}),
      },
    };
  }

  message(state: TeamState, role: TeamRole, id: string, fullReport: string) {
    const index = state.messages.findIndex((message) => message.id === id && visibleMessage(message, role));
    if (index < 0) throw new Error('Unknown or unavailable team message.');
    this.markMessage(role, id);
    return { fullReport, message: { ...state.messages[index], reference: `/messages/${index}` } };
  }
}
