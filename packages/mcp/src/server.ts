import { VERSION } from '../../core/src/version.ts';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
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
  const server = new Server({ name: 'apexrest-apex', version: VERSION }, { capabilities: { tools: {} } });
  let catalog: { tools: Tool[] } | undefined;
  server.setRequestHandler(
    ListToolsRequestSchema,
    async () =>
      (catalog ??= {
        tools: toolCatalog.map((t) => ({
          name: t.name,
          description: t.description,
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
    const tool = toolCatalog.find((t) => t.name === request.params.name);
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
    return { isError: !result.ok, content: [{ type: 'text', text }] };
  });
  await server.connect(new StdioServerTransport());
}
