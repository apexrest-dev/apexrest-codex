import { z } from 'zod';
import { schemas, type Operation } from '../../core/src/operations.ts';

// Keep the terminal menu intentionally small. Other operations remain CLI/MCP commands.
type SupportedOperation =
  | 'dependencies.install'
  | 'dependencies.uninstall'
  | 'plugin.install'
  | 'plugin.uninstall'
  | 'connection.list'
  | 'connection.test'
  | 'sqlcl.configure';
const descriptions: Record<SupportedOperation, [string, string, string]> = {
  'dependencies.install': [
    'Install tools',
    'Install Node.js, Java, SQLcl and browser tools.',
    'Install tools',
  ],
  'dependencies.uninstall': [
    'Uninstall tools',
    'Remove managed tools; preserve external runtimes and saved connections.',
    'Uninstall tools',
  ],
  'plugin.install': [
    'Install plugin',
    'Register the APEXREST plugin in Codex using the existing runtime.',
    'Install plugin',
  ],
  'plugin.uninstall': [
    'Uninstall plugin',
    'Remove the APEXREST plugin registration and managed plugin files.',
    'Uninstall plugin',
  ],
  'connection.list': [
    'List saved SQLcl connections',
    'Browse connections saved in your local SQLcl connection store.',
    'List connections',
  ],
  'connection.test': [
    'Test saved SQLcl connection',
    'Choose a saved connection and read its database identity.',
    'Test connection',
  ],
  'sqlcl.configure': [
    'SQLcl mode: CLI / MCP',
    'Choose SQLcl CLI or the official SQLcl MCP server for Oracle operations.',
    'Save SQLcl mode',
  ],
};
export const commands = (Object.keys(descriptions) as SupportedOperation[]).map((operation) => ({
  operation,
  command: operation.replace('.', ' '),
  label: descriptions[operation][0],
  description: descriptions[operation][1],
  action: descriptions[operation][2],
}));
export type Command = (typeof commands)[number];
export interface Field {
  name: string;
  label: string;
  type: string;
  required: boolean;
  initial: string;
  choices: string[];
  hint: string;
  advanced: boolean;
}
const labels: Record<string, string> = {
  mode: 'SQLcl execution mode',
  mcpRestrictLevel: 'MCP restrict level',
  home: 'Managed tools directory',
  offline: 'Use cached downloads only',
  cacheDir: 'Download cache directory',
  acceptOracleLicense: 'Accept Oracle license terms',
  skipBrowser: 'Skip browser installation',
  installOsDeps: 'Install browser system packages',
  from: 'Package source directory',
  codexHome: 'Codex profile directory',
  keepRuntime: 'Keep plugin files',
};
const hints: Record<string, string> = {
  mode: 'CLI runs SQLcl directly. MCP uses the official sql -mcp server. Applies to new operations.',
  mcpRestrictLevel:
    '4: Oracle default restrictions. 1: allow scripts, block host commands. Applies only to MCP.',
  home: 'Optional directory for managed APEXREST tools and installation records.',
  acceptOracleLicense: 'Enable only after accepting the Oracle terms linked on the review screen.',
  installOsDeps: 'Explicit permission for browser operating-system package installation.',
  offline: 'Use previously cached artifacts; fail if a required download is missing.',
  cacheDir: 'Optional directory containing cached toolchain downloads.',
  skipBrowser: 'Skip Chromium and browser tooling.',
  from: 'Optional local APEXREST package; defaults to the package running this menu.',
  codexHome: 'Optional Codex profile directory; defaults to your active user profile.',
  keepRuntime: 'Keep plugin files after removing registration. Shared tools are preserved.',
};
const visibleFields: Record<SupportedOperation, string[]> = {
  'dependencies.install': [
    'acceptOracleLicense',
    'skipBrowser',
    'home',
    'cacheDir',
    'offline',
    'installOsDeps',
  ],
  'dependencies.uninstall': ['home'],
  'plugin.install': ['from', 'home', 'codexHome'],
  'plugin.uninstall': ['keepRuntime', 'home'],
  'connection.list': [],
  'connection.test': [],
  'sqlcl.configure': ['mode', 'mcpRestrictLevel'],
};
const advancedFields = new Set([
  'mcpRestrictLevel',
  'home',
  'cacheDir',
  'codexHome',
  'offline',
  'installOsDeps',
  'keepRuntime',
  'from',
]);

export function fieldsFor(operation: Operation, _project = ''): Field[] {
  const schema = z.toJSONSchema(schemas[operation], { io: 'input' });
  return (visibleFields[operation as SupportedOperation] ?? []).map((name) => {
    const property = schema.properties?.[name];
    if (!property || typeof property === 'boolean') throw new Error(`Unsupported field schema: ${name}`);
    return {
      name,
      label: labels[name] ?? name,
      type: String(property.type ?? 'string'),
      required: schema.required?.includes(name) ?? false,
      initial: property.default === undefined ? '' : String(property.default),
      choices: property.enum?.map(String) ?? [],
      hint: hints[name] ?? '',
      advanced: advancedFields.has(name),
    };
  });
}
export function parseFields(operation: Operation, fields: Field[], values: Record<string, string>) {
  const input: Record<string, unknown> = operation === 'plugin.install' ? { nativeOnly: true } : {};
  // Enter on the review screen is the technical approval. License and OS-package
  // consent still come from their separate form fields.
  if (['dependencies.install', 'dependencies.uninstall', 'plugin.install'].includes(operation)) {
    input.dryRun = false;
    input.yes = true;
  }
  if (operation.startsWith('connection.')) input.saved = true;
  for (const field of fields) {
    const value = values[field.name] ?? '';
    if (value === '') continue;
    input[field.name] =
      field.type === 'boolean' ? (value === 'true' ? true : value === 'false' ? false : value) : value;
  }
  return schemas[operation].safeParse(input);
}

export function commandPreview(operation: Operation, input: Record<string, unknown>): string {
  const quote = (value: string) =>
    /^[a-zA-Z0-9_./:@=-]+$/.test(value) ? value : `'${value.replaceAll("'", "'\\''")}'`;
  const args = ['apexrest', ...operation.split('.')];
  for (const [name, value] of Object.entries(input)) {
    if (value === false || value === undefined) continue;
    args.push('--' + name.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase()));
    if (value !== true) args.push(quote(String(value)));
  }
  return args.join(' ');
}
