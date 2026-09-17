import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);

// packages/core/src/team-identity.ts
var teamIdentities = {
  manager: { name: "Mewtwo", pokemon: 150, label: "Project manager" },
  "developer-1": { name: "Pikachu", pokemon: 25, label: "Developer 1" },
  "developer-2": { name: "Charmander", pokemon: 4, label: "Developer 2" },
  "developer-3": { name: "Bulbasaur", pokemon: 1, label: "Developer 3" },
  qa: { name: "Squirtle", pokemon: 7, label: "Independent QA" }
};
var teamLabel = (role) => role === "user" ? "You" : teamIdentities[role].name + " \xB7 " + teamIdentities[role].label;

export {
  teamIdentities,
  teamLabel
};
