// Real local SQLcl CLI/MCP checks only: no database connection or import.
import { build } from 'esbuild';
import { mkdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const output = path.resolve(process.argv[2] ?? 'docs/evidence/sqlcl-transport-oracle-local.json');
await mkdir('.apexrest/sqlcl-verification', { recursive: true });
const driver = '.apexrest/sqlcl-verification/verify.mjs';
await build({
  stdin: {
    resolveDir: process.cwd(),
    contents: `
import assert from 'node:assert/strict';
import {OracleAdapter} from './packages/core/src/oracle.ts';
import {configureSqlcl} from './packages/core/src/sqlcl-config.ts';
import {mkdtemp,rm,writeFile,mkdir} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
const home=await mkdtemp(path.join(tmpdir(),'apexrest-sqlcl-verification-'));
process.env.APEXREST_HOME=home;
const evidence={timestamp:new Date().toISOString(),scope:'Real SQLcl CLI and official SQLcl MCP: saved-name listing and offline APEX compilation. No database connection, import or native Codex registration.',platform:process.platform,node:process.version,status:'running',results:[]};
let names;
try {
 for(const [mode,level] of [['cli','4'],['mcp','4'],['mcp','1']]) {
  await configureSqlcl(mode,level);
  const adapter=new OracleAdapter(), start=Date.now();
  const list=await adapter.savedConnections();
  const current=list.connections.map(c=>c.name).sort();
  if(names) assert.deepEqual(current,names,'CLI and MCP saved names differ'); else names=current;
  const validation=await adapter.validate(path.resolve('templates/blank-app/application'));
  if(mode==='mcp'&&level==='4') await assert.rejects(adapter.requireMutationSupport(),{code:'SQLCL_MCP_RESTRICTED'});
  else await adapter.requireMutationSupport();
  evidence.results.push({mode,mcpRestrictLevel:level,status:'passed',savedConnectionCount:current.length,savedNamesMatchCli:true,compiler:validation.compiler,validation:validation.status,elapsedMs:Date.now()-start});
 }
 evidence.status='passed';
} catch(error) {evidence.status='blocked';evidence.blocker={code:error.code,message:error.message};process.exitCode=1;}
finally {await rm(home,{recursive:true,force:true});}
await mkdir(path.dirname(process.argv[2]),{recursive:true});
await writeFile(process.argv[2],JSON.stringify(evidence,null,2)+'\\n');
console.log(JSON.stringify(evidence,null,2));
`,
  },
  outfile: driver,
  bundle: true,
  packages: 'external',
  platform: 'node',
  format: 'esm',
  target: 'node24',
});
const result = spawnSync(process.execPath, [driver, output], { stdio: 'inherit', timeout: 180000 });
process.exitCode = result.status ?? 1;
