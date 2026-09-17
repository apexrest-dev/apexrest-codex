import { VERSION } from '../../core/src/version.ts';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import type { Tool } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dispatch } from '../../core/src/service.ts';
import { schemas, toolCatalog } from '../../core/src/operations.ts';
import type { Operation } from '../../core/src/operations.ts';
import { failure, success, Fault } from '../../core/src/result.ts';
import { parse, loadProject } from '../../core/src/config.ts';
import { JobService } from '../../core/src/jobs.ts';
import { panelDocument } from '../../core/src/panel-server.ts';
const panelUri = 'ui://apexrest/development-panel.html';

const absoluteProject = z
  .string()
  .min(1)
  .max(4096)
  .refine(
    (value) =>
      path.isAbsolute(value) &&
      (process.platform !== 'win32' || /^(?:[A-Za-z]:[\\/]|[\\/]{2}[^\\/]+[\\/][^\\/]+)/.test(value)),
    'Provide the absolute project directory containing apexrest.json; the plugin runs from its installation directory.',
  )
  .describe(
    'Absolute path to the project directory containing apexrest.json. The plugin working directory is its installation directory, not the current Codex project.',
  );

// MCP hosts may launch this process from a plugin cache. Keep this constraint
// at the transport boundary so the CLI retains its current-directory behavior.
const mcpSchemas = new Map<Operation, z.ZodType<Record<string, unknown>>>();
for (const { operation } of toolCatalog) {
  const schema = schemas[operation];
  mcpSchemas.set(
    operation,
    'project' in schema.shape
      ? schema.extend({ project: operation === 'doctor' ? absoluteProject.optional() : absoluteProject })
      : schema,
  );
}

export async function startMcp() {
  // Internal team sessions receive the domain tools, never another team launcher.
  // Reviewer sessions receive only read-only tools; local compiler/test execution
  // stays subject to Codex's read-only sandbox.
  const exposed = toolCatalog.filter(
    (t) =>
      process.env.APEXREST_TEAM_WORKER !== '1' ||
      (!t.operation.startsWith('team.') &&
        !t.operation.startsWith('work.') &&
        !t.operation.startsWith('panel.') &&
        (process.env.APEXREST_TEAM_ROLE?.startsWith('developer') || t.readOnly)),
  );
  const server = new Server(
    { name: 'apexrest-apex', version: VERSION },
    { capabilities: { tools: {}, resources: {} } },
  );
  server.setRequestHandler(ListResourcesRequestSchema, async () => ({
    resources: [
      {
        uri: panelUri,
        name: 'APEXREST development panel',
        mimeType: 'text/html;profile=mcp-app',
        description: 'Live Codex project settings, agent activity, mandatory reviews and APEX operations.',
      },
    ],
  }));
  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    if (request.params.uri !== panelUri) throw new Error('Unknown resource.');
    return {
      contents: [
        {
          uri: panelUri,
          mimeType: 'text/html;profile=mcp-app',
          text: await panelDocument(),
          _meta: { ui: { prefersBorder: true, csp: { connectDomains: [], resourceDomains: [] } } },
        },
      ],
    };
  });
  let catalog: { tools: Tool[] } | undefined;
  server.setRequestHandler(
    ListToolsRequestSchema,
    async () =>
      (catalog ??= {
        tools: exposed.map((t) => ({
          name: t.name,
          description: t.description,
          ...(t.operation === 'panel.open' ? { _meta: { ui: { resourceUri: panelUri } } } : {}),
          inputSchema: z.toJSONSchema(mcpSchemas.get(t.operation)!, { target: 'draft-7' }) as {
            type: 'object';
          },
          annotations: {
            readOnlyHint: t.readOnly,
            destructiveHint: t.destructive ?? !t.readOnly,
            idempotentHint: t.readOnly,
            openWorldHint: ![
              'doctor',
              'docs.search',
              'docs.read',
              'project.inspect',
              'jobs.status',
              'jobs.cancel',
              'artifacts.read',
            ].includes(t.operation),
          },
        })),
      }),
  );
  server.setRequestHandler(CallToolRequestSchema, async (request, extra) => {
    const tool = exposed.find((t) => t.name === request.params.name);
    let result;
    try {
      if (!tool) throw new Fault('UNKNOWN_TOOL', 'Tool is not in the catalog.', 2);
      const input = parse(mcpSchemas.get(tool.operation)!, request.params.arguments ?? {});
      result = tool.long
        ? success(
            tool.operation,
            await new JobService(await loadProject(String(input.project))).start(
              tool.operation,
              input,
              path.join(path.dirname(fileURLToPath(import.meta.url)), 'apexrest.mjs'),
            ),
          )
        : await dispatch(tool.operation, input, extra.signal);
    } catch (e) {
      result = failure(tool?.operation ?? 'unknown', e);
    }
    let text = JSON.stringify(result);
    if (text.length > 32768) {
      result = failure(
        tool?.operation ?? 'unknown',
        new Fault('OUTPUT_LIMIT', 'Use a smaller page/range or the artifact reader.', 1),
      );
      text = JSON.stringify(result);
    }
    return {
      isError: !result.ok,
      content: [{ type: 'text', text }],
      ...(tool?.operation.startsWith('panel.') ? { structuredContent: result } : {}),
    };
  });
  await server.connect(new StdioServerTransport());
}
