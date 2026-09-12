import { build } from 'esbuild';
import { mkdir, readFile, writeFile, cp, rm, chmod } from 'node:fs/promises';
const metadata = JSON.parse(await readFile('plugins/metadata.json', 'utf8'));
await rm('dist/runtime', { recursive: true, force: true });
await mkdir('dist/runtime', { recursive: true });
await rm('dist/resources', { recursive: true, force: true });
await mkdir('dist/resources/third-party', { recursive: true });
const lock = JSON.parse(await readFile('package-lock.json', 'utf8'));
const { readdir } = await import('node:fs/promises');
for (const folder of Object.keys(lock.packages).filter((p) => p.includes('node_modules/'))) {
  let list;
  try {
    list = await readdir(folder);
  } catch {
    continue;
  }
  for (const file of list.filter((f) => /^(LICENSE|LICENCE|NOTICE)(?:[.-].*)?$/i.test(f))) {
    const destination = 'dist/resources/third-party/' + folder.replaceAll('/', '__') + '__' + file;
    try {
      await cp(folder + '/' + file, destination, { recursive: true });
    } catch {
      /* absent optional package */
    }
  }
}
for (const folder of ['toolchains', 'schemas', 'templates'])
  await cp(folder, `dist/resources/${folder}`, { recursive: true });
await cp('resources', 'dist/resources', { recursive: true });
await build({
  entryPoints: ['packages/testkit/src/apex.ts'],
  outfile: 'dist/resources/testkit/apex.mjs',
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'node24',
  external: ['@playwright/test'],
});
await build({
  entryPoints: { apexrest: 'packages/cli/src/main.ts', mcp: 'packages/mcp/src/main.ts' },
  outdir: 'dist/runtime',
  outExtension: { '.js': '.mjs' },
  // Keep chunks beside the entrypoints: resource and job paths use import.meta.url.
  chunkNames: 'chunk-[hash]',
  splitting: true,
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'node24',
  banner: {
    js: "import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);",
  },
});
for (const name of ['apexrest', 'mcp']) await chmod(`dist/runtime/${name}.mjs`, 0o755);
for (const profile of ['portable', 'codex-compat']) {
  const root = `dist/${profile}/plugins/apexrest-apex`;
  await rm(`dist/${profile}`, { recursive: true, force: true });
  await mkdir(root, { recursive: true });
  await cp('plugins/apexrest-apex/skills', `${root}/skills`, { recursive: true });
  await cp('dist/runtime', `${root}/runtime`, { recursive: true });
  for (const file of ['LICENSE', 'NOTICE']) await cp(file, `${root}/${file}`);
  await cp('dist/resources', `${root}/resources`, { recursive: true });
  const { interface: presentation, ...identity } = metadata;
  const portable = profile === 'portable';
  const manifest = portable
    ? {
        $schema: 'https://agent-plugins.org/schemas/1.0.0/plugin.schema.json',
        ...identity,
        extensions: { 'com.openai': { interface: presentation } },
      }
    : { ...metadata, skills: './skills/', mcpServers: './.mcp.json' };
  if (!portable) await mkdir(`${root}/.codex-plugin`);
  await writeFile(
    `${root}/${portable ? 'plugin.json' : '.codex-plugin/plugin.json'}`,
    JSON.stringify(manifest, null, 2) + '\n',
  );
  const mcp = {
    ...(portable ? { $schema: 'https://agent-plugins.org/schemas/1.0.0/mcp.schema.json' } : {}),
    mcpServers: {
      apexrest: {
        ...(portable ? { type: 'stdio' } : {}),
        command: 'node',
        args: ['${PLUGIN_ROOT}/runtime/mcp.mjs'],
      },
    },
  };
  await writeFile(`${root}/${portable ? 'mcp.json' : '.mcp.json'}`, JSON.stringify(mcp, null, 2) + '\n');
  await mkdir(`dist/${profile}/.agents/plugins`, { recursive: true });
  await writeFile(
    `dist/${profile}/.agents/plugins/marketplace.json`,
    JSON.stringify(
      {
        name: 'apexrest',
        interface: { displayName: 'APEXREST' },
        plugins: [
          {
            name: metadata.name,
            source: { source: 'local', path: './plugins/apexrest-apex' },
            policy: { installation: 'AVAILABLE', authentication: 'ON_USE' },
            category: 'Productivity',
          },
        ],
      },
      null,
      2,
    ) + '\n',
  );
}
console.log('Built self-contained portable and codex-compat native packages.');
