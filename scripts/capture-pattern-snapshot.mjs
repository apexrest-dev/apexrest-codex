// Maintainer-only, read-only acquisition. Runtime retrieval never calls this command.
import { mkdir, readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { writeFileSync } from 'node:fs';
import { parseSqlclJson, extractCompilerResources } from './lib/component-source.mjs';
import {
  normalizePatternSnapshot,
  writePatternSnapshot,
  parsePatternCaptureArgs,
} from './lib/pattern-source.mjs';

if (process.argv.includes('--help')) {
  console.log(
    'Usage: node scripts/capture-pattern-snapshot.mjs --source-id ID --connection NAME --application ID --workspace NAME --schema NAME --compiler JAR --output NEW_PRIVATE_DIR [--sqlcl PATH]\n       node scripts/capture-pattern-snapshot.mjs --source-id ID --snapshot PRIVATE_DIR --publish SOURCES_DIR [--replace]\nLive capture is read-only. Offline normalization publishes sanitized structural facts only; --replace is for a reviewed refresh of the same source.',
  );
  process.exit(0);
}
const args = parsePatternCaptureArgs(process.argv.slice(2));
if (args.snapshot) {
  if (!args.publish)
    throw new Error('Offline normalization requires --snapshot PRIVATE_DIR --publish OUTPUT_DIR.');
  const diff = await writePatternSnapshot(
    await normalizePatternSnapshot(path.resolve(args.snapshot), { sourceId: args.sourceId }),
    path.resolve(args.publish),
    { replace: args.replace },
  );
  console.log(JSON.stringify({ status: 'normalized', ...diff }, null, 2));
} else {
  const output = path.resolve(args.output);
  await mkdir(output, { mode: 0o700 }); // Existing paths fail: never overwrite another capture.
  const app = Number(args.application);
  const scoped = `application_id=${app}`;
  const queries = {
    identity: `select application_id, application_name, alias, workspace, owner, (select version_no from apex_release) apex_version, sys_context('USERENV','SESSION_USER') session_user, sys_context('USERENV','CURRENT_SCHEMA') current_schema from apex_applications where ${scoped}`,
    themes: `select theme_number, theme_name, version, current_theme_style, is_current from apex_application_themes where ${scoped} order by theme_number`,
    pages: `select page_id,page_name,page_alias,page_group,page_template,page_mode,page_template_options from apex_application_pages where ${scoped} order by page_id`,
    regions: `select page_id,region_id,region_name,static_id,region_static_id,html_dom_id,parent_region_id,template,report_template,list_template_override,breadcrumb_template,source_type,source_type_code,template_component_type_code,region_template_options,component_template_options,attribute_01,attribute_02 from apex_application_page_regions where ${scoped} order by page_id,region_id`,
    items: `select page_id,item_id,item_name,display_as,display_as_code,region_id,item_label_template,item_template_options from apex_application_page_items where ${scoped} order by page_id,item_id`,
    buttons: `select page_id,button_id,button_name,static_id,button_static_id,html_dom_id,region_id,button_template,button_template_options,button_action_code from apex_application_page_buttons where ${scoped} order by page_id,button_id`,
    lists: `select list_id,list_name,static_id,list_type_code,list_entries from apex_application_lists where ${scoped} order by list_id`,
    listEntries: `select list_name,list_entry_id,list_id,list_entry_parent_id,static_id,entry_text,display_sequence,entry_target from apex_application_list_entries where ${scoped} order by list_id,display_sequence,list_entry_id`,
    plugins: `select plugin_id,static_id,apexlang_name,display_name,plugin_type,theme_number from apex_appl_plugins where ${scoped} order by plugin_id`,
    dynamicActions: `select page_id,dynamic_action_id,dynamic_action_name,static_id,when_selection_type_code,when_event_internal_name,when_region_id,when_button_id,condition_type_code,number_of_actions from apex_application_page_da where ${scoped} order by page_id,dynamic_action_id`,
    actions: `select page_id,action_id,dynamic_action_id,static_id,action_name,action_code,affected_elements_type_code,affected_region_id,affected_button_id,execute_on_page_init,server_condition_type_code,client_condition_type_code from apex_application_page_da_acts where ${scoped} order by page_id,dynamic_action_id,action_sequence,action_id`,
    processes: `select page_id,process_id,process_name,static_id,process_type_code,process_point_code,region_id,condition_type_code from apex_application_page_proc where ${scoped} order by page_id,process_id`,
    validations: `select page_id,validation_id,validation_name,static_id,validation_type_code,region_id,condition_type_code from apex_application_page_val where ${scoped} order by page_id,validation_id`,
    branches: `select page_id,branch_id,branch_name,branch_type,branch_point,process_sequence,when_button_pressed,condition_type_code from apex_application_page_branches where ${scoped} order by page_id,branch_id`,
  };
  // Oracle component identifiers exceed Number.MAX_SAFE_INTEGER; retain exact decimal strings.
  for (const [key, query] of Object.entries(queries)) {
    if (key === 'identity') continue;
    queries[key] = query.replace(
      /^(select )(.*?)( from )/s,
      (_, start, columns, end) =>
        start +
        columns.replace(
          /\b(?:[av]\.)?(?:dynamic_action_id|action_id|process_id|validation_id|branch_id|when_region_id|when_button_id|affected_region_id|affected_button_id|region_id|parent_region_id|item_id|button_id|list_id|list_entry_id|list_entry_parent_id|template_option_id|group_id|template_opt_group_id|plugin_id|plugin_attribute_id|depending_on_attribute_id|depending_on_comp_prop_id)\b/g,
          (field) => `to_char(${field}) ${field.split('.').at(-1)}`,
        ) +
        end,
    );
  }
  const setup =
    'set sqlformat json\nset feedback off\nset long 1000000\nset longchunksize 1000000\nset pagesize 0\nset define off\nwhenever sqlerror exit failure rollback\n';
  const run = (script) => {
    try {
      return execFileSync(args.sqlcl ?? 'sql', ['-s', '-name', args.connection], {
        input: setup + script + '\nexit\n',
        encoding: 'utf8',
        maxBuffer: 64 * 1024 * 1024,
        cwd: output,
        timeout: 240000,
      });
    } catch (error) {
      writeFileSync(
        path.join(output, 'failed-acquisition.log'),
        String(error.stdout ?? '') + String(error.stderr ?? ''),
        { mode: 0o600 },
      );
      throw new Error('SQLcl acquisition failed; inspect the private failed-acquisition.log.');
    }
  };
  // Identity is checked before collecting metadata or exporting; repeat the guard in the capture session.
  const identity = parseSqlclJson(run(queries.identity + ';'))[0];
  if (
    !identity ||
    identity.length !== 1 ||
    identity[0].application_id !== app ||
    identity[0].workspace !== args.workspace ||
    identity[0].owner !== args.schema ||
    identity[0].session_user !== args.schema ||
    identity[0].current_schema !== args.schema
  )
    throw new Error('Target identity mismatch; no metadata export performed.');
  const guard = `declare n number; begin select count(*) into n from apex_applications where ${scoped} and workspace='${args.workspace}' and owner='${args.schema}' and sys_context('USERENV','SESSION_USER')='${args.schema}' and sys_context('USERENV','CURRENT_SCHEMA')='${args.schema}'; if n<>1 then raise_application_error(-20001,'Pattern snapshot identity mismatch'); end if; end;\n/\n`;
  const raw = run(
    guard +
      Object.values(queries)
        .map((query) => query + ';')
        .join('\n'),
  );
  const results = parseSqlclJson(raw);
  if (results.length !== Object.keys(queries).length) throw new Error('Incomplete metadata snapshot.');
  const metadata = Object.fromEntries(Object.keys(queries).map((key, i) => [key, results[i]]));
  await writeFile(path.join(output, 'metadata.json'), JSON.stringify(metadata, null, 2) + '\n', {
    mode: 0o600,
  });
  const compilerPath = path.resolve(args.compiler);
  if ((await stat(compilerPath)).size > 128 * 1024 * 1024)
    throw new Error('Compiler archive exceeds the 128 MiB acquisition limit.');
  const compilerResources = extractCompilerResources(await readFile(compilerPath));
  for (const [name, bytes] of Object.entries(compilerResources))
    await writeFile(path.join(output, name), bytes, { mode: 0o600 });
  const exportLog = run(
    guard + `apex export -applicationid ${app} -exptype APEXLANG -skipExportDate -expOriginalIds -dir .\n`,
  );
  await writeFile(path.join(output, 'export.log'), exportLog, { mode: 0o600 });
  const children = await readdir(output);
  const exportDirs = [];
  for (const child of children)
    if ((await stat(path.join(output, child))).isDirectory()) {
      try {
        await stat(path.join(output, child, 'application.apx'));
        exportDirs.push(child);
      } catch {}
    }
  if (exportDirs.length !== 1)
    throw new Error('APEXlang export did not produce one application directory. Inspect private export.log.');
  await writeFile(
    path.join(output, 'capture.json'),
    JSON.stringify(
      {
        schemaVersion: 1,
        capturedAt: new Date().toISOString(),
        exportDirectory: exportDirs[0],
        applicationId: app,
        workspace: args.workspace,
        schema: args.schema,
        sourceId: args.sourceId,
      },
      null,
      2,
    ) + '\n',
    { mode: 0o600 },
  );
  // Validate and summarize locally. Publication is a separate explicit offline operation.
  const normalized = await normalizePatternSnapshot(output);
  console.log(
    JSON.stringify(
      {
        privateSnapshot: output,
        counts: normalized.snapshot.counts,
      },
      null,
      2,
    ),
  );
}
