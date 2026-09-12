import { z } from 'zod';
import { identifier, parse } from './config.ts';
import type { Environment } from './config.ts';
import type { Connection } from './connections.ts';
import { OracleAdapter } from './oracle.ts';
import { Fault } from './result.ts';
export const metadataRequest = z.strictObject({
  kind: z.enum(['objects', 'columns', 'constraints', 'signatures', 'applications', 'pages']),
  schema: identifier,
  name: identifier.optional(),
  offset: z.number().int().min(0).max(100000).default(0),
  limit: z.number().int().min(1).max(100).default(30),
});
const queries = {
  objects:
    "select object_name, object_type from all_objects where owner=:p_owner and object_type in ('TABLE','VIEW','PACKAGE') and (:p_name is null or object_name=:p_name) order by object_name, object_type",
  columns:
    'select table_name,column_name,data_type,nullable,column_id from all_tab_columns where owner=:p_owner and table_name=:p_name order by column_id',
  constraints:
    'select table_name,constraint_name,constraint_type,r_owner,r_constraint_name,status from all_constraints where owner=:p_owner and table_name=:p_name order by constraint_name',
  signatures:
    'select package_name,object_name,argument_name,position,in_out,data_type,overload from all_arguments where owner=:p_owner and package_name=:p_name order by object_name,overload,sequence',
  applications:
    'select application_id,application_name,alias from apex_applications where owner=:p_owner and application_id=:p_app_id order by application_id',
  pages:
    'select application_id,page_id,page_name,page_alias from apex_application_pages where application_id=:p_app_id and workspace=:p_workspace order by page_id',
};
export async function metadataRead(
  adapter: OracleAdapter,
  env: Environment,
  connection: Connection,
  value: unknown,
) {
  const r = parse(metadataRequest, value);
  if (r.schema !== env.parsingSchema)
    throw new Fault('SCHEMA_DENIED', 'Metadata is restricted to the configured parsing schema.', 4);
  if (['columns', 'constraints', 'signatures'].includes(r.kind) && !r.name)
    throw new Fault('OBJECT_REQUIRED', 'Select a specific object first.', 2);
  await adapter.verifyTarget(env, connection);
  const rows = await adapter.jsonQuery(
    queries[r.kind] + ' offset :p_offset rows fetch next :p_limit rows only',
    connection,
    {
      p_owner: r.schema,
      p_name: r.name ?? '',
      p_app_id: env.applicationId,
      p_workspace: env.workspace,
      p_offset: r.offset,
      p_limit: r.limit,
    },
  );
  return {
    dataClassification: 'untrusted_database_content',
    rows,
    offset: r.offset,
    nextOffset: rows.length === r.limit ? r.offset + r.limit : null,
  };
}
