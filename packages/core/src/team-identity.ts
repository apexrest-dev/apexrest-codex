import type { TeamRole } from './team-schema.ts';

// Stable role keys remain the routing and review authority; names are presentation.
export const teamIdentities = {
  manager: { name: 'Mewtwo', pokemon: 150, label: 'Project manager' },
  'developer-1': { name: 'Pikachu', pokemon: 25, label: 'Developer 1' },
  'developer-2': { name: 'Charmander', pokemon: 4, label: 'Developer 2' },
  'developer-3': { name: 'Bulbasaur', pokemon: 1, label: 'Developer 3' },
  qa: { name: 'Squirtle', pokemon: 7, label: 'Independent QA' },
} satisfies Record<TeamRole, { name: string; pokemon: number; label: string }>;
export const teamLabel = (role: TeamRole | 'user') =>
  role === 'user' ? 'You' : teamIdentities[role].name + ' · ' + teamIdentities[role].label;
