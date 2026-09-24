// Maintainer-only, read-only acquisition. Runtime retrieval never calls this command.
import { mkdir, readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { writeFileSync } from 'node:fs';
import {
  normalizeComponentSnapshot,
  writeNormalizedSnapshot,
  parseSqlclJson,
  parseCaptureArgs,
  extractCompilerResources,
} from './lib/component-source.mjs';

const args = parseCaptureArgs(process.argv.slice(2));
if (args.snapshot) {
  if (!args.publish)
    throw new Error('Offline normalization requires --snapshot PRIVATE_DIR --publish OUTPUT_DIR.');
  await writeNormalizedSnapshot(
    await normalizeComponentSnapshot(path.resolve(args.snapshot)),
    path.resolve(args.publish),
  );
  console.log('Normalized component source written.');
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
    templateOptions: `select template_option_id,name,static_id,display_name,display_sequence,page_template,region_template,report_template,breadcrumb_template,list_template,field_template,button_template,virtual_template_type,css_classes,group_id,help_text,is_advanced,template_types from apex_appl_template_options where ${scoped} and theme_number=42 order by template_option_id`,
    templateOptionGroups: `select template_opt_group_id,name,static_id,display_name,template_types,help_text,null_text,is_advanced from apex_appl_template_opt_groups where ${scoped} and theme_number=42 order by template_opt_group_id`,
    utPlugins: `select plugin_id,static_id,apexlang_name,display_name,plugin_type,supported_component_types,standard_attributes from apex_appl_plugins where ${scoped} and theme_number=42 order by plugin_id`,
    utAttributes: `select a.plugin_attribute_id,a.plugin_id,a.plugin_static_id,a.static_id,a.apexlang_name,a.prompt,a.attribute_scope,a.attribute_type,a.attribute_group_title,a.is_required,a.default_value,a.min_value,a.max_value,a.column_data_types,a.supported_component_types,a.depending_on_attribute_id,a.depending_on_comp_prop_id,a.depending_on_condition_type,a.depending_on_expression,a.help_text from apex_appl_plugin_attributes a where a.application_id=${app} and a.plugin_id in (select plugin_id from apex_appl_plugins where ${scoped} and theme_number=42) order by a.plugin_id,a.display_sequence`,
    utAttributeValues: `select v.plugin_attribute_id,v.apexlang_name,v.display_value,v.return_value,v.is_quick_pick from apex_appl_plugin_attr_values v where v.application_id=${app} and v.plugin_attribute_id in (select a.plugin_attribute_id from apex_appl_plugin_attributes a join apex_appl_plugins p on p.plugin_id=a.plugin_id where p.application_id=${app} and p.theme_number=42) order by v.plugin_attribute_id,v.display_sequence`,
  };
  for (const type of ['page', 'region', 'report', 'list', 'button', 'label', 'breadcrumb']) {
    queries[`templates_${type}`] =
      `select template_name,static_id,internal_name,default_template_options,preset_template_options from apex_application_temp_${type === 'breadcrumb' ? 'bc' : type} where ${scoped} and theme_number=42 order by template_name`;
  }
  // Oracle component identifiers exceed Number.MAX_SAFE_INTEGER; retain exact decimal strings.
  for (const [key, query] of Object.entries(queries)) {
    if (key === 'identity') continue;
    queries[key] = query.replace(
      /^(select )(.*?)( from )/s,
      (_, start, columns, end) =>
        start +
        columns.replace(
          /\b(?:[av]\.)?(?:region_id|parent_region_id|item_id|button_id|list_id|list_entry_id|list_entry_parent_id|template_option_id|group_id|template_opt_group_id|plugin_id|plugin_attribute_id|depending_on_attribute_id|depending_on_comp_prop_id)\b/g,
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
    identity[0].workspace !== args.workspace ||
    identity[0].owner !== args.schema ||
    identity[0].session_user !== args.schema ||
    identity[0].current_schema !== args.schema
  )
    throw new Error('Target identity mismatch; no metadata export performed.');
  const guard = `declare n number; begin select count(*) into n from apex_applications where ${scoped} and workspace='${args.workspace}' and owner='${args.schema}' and sys_context('USERENV','SESSION_USER')='${args.schema}' and sys_context('USERENV','CURRENT_SCHEMA')='${args.schema}'; if n<>1 then raise_application_error(-20001,'Component snapshot identity mismatch'); end if; end;\n/\n`;
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
      },
      null,
      2,
    ) + '\n',
    { mode: 0o600 },
  );
  // Validate and summarize locally. Publication is a separate explicit offline operation.
  const normalized = await normalizeComponentSnapshot(output);
  console.log(
    JSON.stringify(
      {
        privateSnapshot: output,
        counts: normalized.snapshot.counts,
        drift: normalized.snapshot.baselineDiff,
      },
      null,
      2,
    ),
  );
}
