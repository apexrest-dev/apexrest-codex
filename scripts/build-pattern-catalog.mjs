// Deterministic offline build from reviewed pattern contracts and source facts.
import { readFile, writeFile, mkdir, rm, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { files, sha256 } from './lib/release.mjs';
import { reusableCompilerRun } from './component-recipe-verification.mjs';
import { validatePatternCoverage } from './pattern-coverage.mjs';

const json = (value) => JSON.stringify(value, null, 2) + '\n';
const block = (value) => '```json\n' + json(value) + '```\n';
const ordered = (items) => [...items].sort((a, b) => a.id.localeCompare(b.id, 'en'));
const sortedMap = (value) =>
  Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b, 'en')));
const safe = (value) => {
  if (
    typeof value !== 'string' ||
    !/^[a-zA-Z0-9_./-]+$/.test(value) ||
    path.isAbsolute(value) ||
    value.split('/').some((part) => !part || part === '.' || part === '..')
  )
    throw new Error(`Unsafe pattern catalog path: ${value}`);
  return value;
};
const unique = (items) => [...new Set(items)];

export async function buildPatternCatalog(root = 'resources/patterns', check = false) {
  const read = async (file) => JSON.parse(await readFile(path.join(root, safe(file)), 'utf8'));
  const registry = await read('recipes/registry.json');
  if (registry.schemaVersion !== 1 || !registry.patterns?.length || !Array.isArray(registry.recipes))
    throw new Error('Pattern registry must contain reviewed patterns and recipes.');
  const compatibility = {
    apexVersion: registry.apexVersion,
    themeVersion: registry.themeVersion,
    mmdVersion: registry.mmdVersion,
  };
  for (const value of Object.values(compatibility))
    if (typeof value !== 'string' || !value) throw new Error('Missing pattern compatibility pin.');
  const sources = new Map();
  const allowed = new Set(['recipes/registry.json', 'recipes/compiler-evidence.json']);
  for (const sourceId of (await readdir(path.join(root, 'source'))).sort()) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(sourceId)) throw new Error('Invalid pattern source ID.');
    const snapshot = await read(`source/${sourceId}/snapshot.json`);
    const inventory = await read(`source/${sourceId}/inventory.json`);
    if (snapshot.schemaVersion !== 1 || inventory.schemaVersion !== 1 || !Array.isArray(inventory.pages))
      throw new Error('Invalid pattern snapshot.');
    if (snapshot.sourceId !== sourceId || inventory.sourceId !== sourceId)
      throw new Error(`Pattern source namespace disagrees with its provenance: ${sourceId}`);
    // Keep captured facts immutable; explicit curation survives source refreshes.
    const classifications = registry.sourceClassifications?.[sourceId] ?? {};
    for (const pageId of Object.keys(classifications))
      if (!inventory.pages.some((page) => String(page.pageId) === pageId))
        throw new Error(`Unknown page in reviewed classifications: ${sourceId}/${pageId}`);
    inventory.pages = inventory.pages.map((page) =>
      Object.hasOwn(classifications, page.pageId)
        ? { ...page, classification: classifications[page.pageId], classificationOrigin: 'reviewed-registry' }
        : page,
    );
    const ids = inventory.pages.map((page) => page.pageId);
    if (new Set(ids).size !== ids.length || ids.length !== snapshot.counts.pages)
      throw new Error('Incomplete or duplicate pattern page inventory.');
    for (const page of inventory.pages)
      if (
        !['pattern', 'group', 'primitives', 'documentation', 'scaffolding', 'placeholder'].includes(
          page.classification,
        )
      )
        throw new Error(`Unclassified source page: ${sourceId}/${page.pageId}`);
    sources.set(sourceId, { snapshot, inventory });
    allowed.add(`source/${sourceId}/snapshot.json`);
    allowed.add(`source/${sourceId}/inventory.json`);
  }
  for (const sourceId of Object.keys(registry.sourceClassifications ?? {}))
    if (!sources.has(sourceId)) throw new Error(`Unknown source in reviewed classifications: ${sourceId}`);
  const scaffoldDirectory = safe(registry.scaffold.directory);
  const scaffoldFiles = {};
  for (const file of await files(path.join(root, scaffoldDirectory))) {
    scaffoldFiles[safe(file)] = sha256(await readFile(path.join(root, scaffoldDirectory, file)));
    allowed.add(`${scaffoldDirectory}/${file}`);
  }
  const scaffoldSha256 = sha256(JSON.stringify(sortedMap(scaffoldFiles)));
  const evidence = await read('recipes/compiler-evidence.json');
  const patterns = new Map();
  for (const pattern of registry.patterns) {
    if (!/^pattern:[a-z0-9]+(?:[/-][a-z0-9]+)*$/.test(pattern.id) || patterns.has(pattern.id))
      throw new Error(`Invalid or duplicate pattern ID: ${pattern.id}`);
    const source = sources.get(pattern.sourceId);
    if (
      !source ||
      !pattern.sourcePageIds?.length ||
      pattern.sourcePageIds.some((id) => !source.inventory.pages.some((page) => page.pageId === id))
    )
      throw new Error(`Pattern has unknown source pages: ${pattern.id}`);
    if (
      !pattern.title ||
      !pattern.titleUk ||
      !pattern.description ||
      !pattern.structure?.length ||
      !pattern.adaptation?.length
    )
      throw new Error(`Incomplete pattern contract: ${pattern.id}`);
    patterns.set(pattern.id, pattern);
  }
  for (const [sourceId, { inventory }] of sources)
    for (const page of inventory.pages.filter((page) => page.classification === 'pattern'))
      if (
        !registry.patterns.some(
          (pattern) => pattern.sourceId === sourceId && pattern.sourcePageIds.includes(page.pageId),
        )
      )
        throw new Error(`Pattern page has no catalog entry: ${sourceId}/${page.pageId}`);
  const pageReviews = validatePatternCoverage(registry, sources, patterns);
  const recipeIds = new Set();
  for (const recipe of registry.recipes) {
    if (
      !patterns.has(recipe.patternId) ||
      !recipe.id.startsWith(recipe.patternId + '/recipes/') ||
      recipeIds.has(recipe.id)
    )
      throw new Error(`Invalid or duplicate pattern recipe: ${recipe.id}`);
    recipeIds.add(recipe.id);
    if (
      !['ready', 'unresolved'].includes(recipe.readiness) ||
      (recipe.readiness === 'unresolved' && !recipe.reason)
    )
      throw new Error(`Missing recipe readiness/reason: ${recipe.id}`);
    const inputFiles = { ...scaffoldFiles };
    for (const file of recipe.files) {
      const relative = `${safe(recipe.directory)}/${safe(file)}`;
      allowed.add(relative);
      const content = await readFile(path.join(root, relative));
      if (
        /EBA_UT_|EBA_UX_|plugin\/(componentInstructions|previewTemplateOptions|regionSourceCode)|Prism\.|https?:\/\/[^\s"']+\.oraclecloudapps\.com/i.test(
          content.toString('utf8'),
        )
      )
        throw new Error(`Unresolved demonstration dependency in ${recipe.id}`);
      inputFiles[file] = sha256(content);
    }
    const runs = evidence.runs.filter((run) => run.recipeId === recipe.id);
    if (
      recipe.readiness === 'ready' &&
      (!recipe.files.length ||
        recipe.dependenciesClosed !== true ||
        runs.length !== 1 ||
        !reusableCompilerRun({
          recipe,
          evidence,
          run: runs[0],
          inputFiles,
          scaffoldFiles,
          scaffoldSha256,
          compilerVersion: registry.compilerVersion,
          mmdVersion: registry.mmdVersion,
        }))
    )
      throw new Error(`Missing dependency closure or stale compiler evidence: ${recipe.id}`);
  }
  for (const file of await files(root))
    if (
      file !== 'manifest.json' &&
      file !== 'index.json' &&
      !/^docs\/[a-z0-9/-]+\.md$/.test(file) &&
      !allowed.has(file)
    )
      throw new Error(`Unregistered pattern package file: ${file}`);
  const inputs = {};
  for (const file of [...allowed].sort()) inputs[file] = sha256(await readFile(path.join(root, file)));
  const generatorSha256 = sha256(
    Buffer.concat(
      await Promise.all([
        readFile(fileURLToPath(import.meta.url)),
        readFile(new URL('./component-recipe-verification.mjs', import.meta.url)),
        readFile(new URL('./pattern-coverage.mjs', import.meta.url)),
      ]),
    ),
  );
  const sourceSha256 = sha256(json({ inputs, generatorSha256 }));
  const version = `${registry.apexVersion}@${sourceSha256.slice(0, 12)}`;
  const output = new Map(),
    index = [];
  const add = (record, text) => {
    if (
      index.some((item) => item.id === record.id) ||
      !/^pattern:[a-z0-9]+(?:[/-][a-z0-9]+)*$/.test(record.id)
    )
      throw new Error(`Duplicate or invalid pattern document: ${record.id}`);
    const document = `docs/${record.id.slice('pattern:'.length)}.md`;
    text = text.replace(/[\t ]+$/gm, '').trim() + '\n';
    output.set(document, text);
    index.push({
      id: record.id,
      title: record.title,
      kind: record.kind ?? 'guide',
      family: record.family ?? 'catalog',
      version,
      source: record.source ?? 'apexrest:patterns',
      document,
      sha256: sha256(text),
      searchText: record.searchText ?? record.title,
      requires: unique(record.requires ?? []),
      related: unique(record.related ?? []),
      readiness: record.readiness ?? 'reference',
      compatibility,
      length: text.length,
    });
  };
  for (const pattern of ordered(registry.patterns)) {
    const recipes = registry.recipes.filter((recipe) => recipe.patternId === pattern.id);
    const readiness = recipes.some((recipe) => recipe.readiness === 'ready') ? 'ready' : 'unresolved';
    const searchText = [pattern.title, pattern.titleUk, ...(pattern.aliases ?? []), pattern.description].join(
      ' ',
    );
    const source = `apex-application:${pattern.sourceId}`;
    add(
      {
        ...pattern,
        kind: 'contract',
        source,
        searchText,
        readiness,
        requires: [`${pattern.id}/parameters`],
        related: [...recipes.map((recipe) => recipe.id), `pattern:source/${pattern.sourceId}`],
      },
      `# ${pattern.title} / ${pattern.titleUk}\n\n${pattern.description}\n\nStatus: ${readiness}. ${pattern.reason ?? ''}\n\n## Source\n\n${block({ sourceId: pattern.sourceId, pages: pattern.sourcePageIds, examples: pattern.sourceExamples ?? [], provenance: 'Observed application structure; original APEXREST explanations and synthetic recipes.' })}\n## Composition\n\n${block(pattern.structure)}\n## Interaction and states\n\n${block(pattern.interactions ?? [])}\n## Data contract\n\n${block(pattern.dataContract ?? {})}\n## Dependencies\n\n${block(pattern.dependencies ?? [])}\n## Recipes\n\n${recipes.length ? recipes.map((recipe) => `- ${recipe.id}: ${recipe.readiness}${recipe.reason ? ' — ' + recipe.reason : ''}`).join('\n') : (pattern.reason ?? 'No compiled recipe is available.')}\n\n## Adaptation\n\n${pattern.adaptation.map((line) => '- ' + line).join('\n')}\n\n## Limits\n\n${(pattern.limits ?? []).map((line) => '- ' + line).join('\n')}\n\nOffline compiler evidence does not prove SQL execution, import or browser behavior. Preserve the destination application security and configuration.`,
    );
    add(
      {
        id: pattern.id + '/parameters',
        title: `${pattern.title} parameters / Параметри`,
        kind: 'contract',
        family: pattern.family,
        source,
        searchText: `${searchText} ${JSON.stringify(pattern.parameters ?? [])}`,
        related: [pattern.id],
        requires: pattern.componentReferences ?? [],
      },
      `# ${pattern.title}: parameters\n\nParameter paths are qualified by their owning page, region, item or action. Use the linked component contracts for complete component options.\n\n${block(pattern.parameters ?? [])}\n## Data mappings\n\n${block(pattern.dataContract ?? {})}\n## Dependencies\n\n${block(pattern.dependencies ?? [])}`,
    );
  }
  for (const recipe of ordered(registry.recipes)) {
    const pattern = patterns.get(recipe.patternId);
    let text = `# ${recipe.title}${recipe.titleUk ? ' / ' + recipe.titleUk : ''}\n\n${recipe.description}\n\nStatus: ${recipe.readiness}.${recipe.reason ? ' ' + recipe.reason : ''}\n\nSource: ${pattern.sourceId}; pages ${pattern.sourcePageIds.join(', ')}.\n\n## Data contract\n\n${block(recipe.dataContract ?? pattern.dataContract)}\n## Adaptation\n\n${(recipe.adaptation ?? pattern.adaptation).map((line) => '- ' + line).join('\n')}\n\nOverlay these files on pattern:scaffold for offline compilation. Merge the selected composition into an existing project; never replace its authentication or application settings with the compiler scaffold.\n\n`;
    for (const file of recipe.files)
      text += `## ${file}\n\n\`\`\`${file.endsWith('.json') ? 'json' : file.endsWith('.sql') ? 'sql' : 'apexlang'}\n${await readFile(path.join(root, recipe.directory, file), 'utf8')}\n\`\`\`\n\n`;
    text += `## Verification\n\n${block(recipe.verification)}\nCompile after adaptation. SQL execution, import and browser checks are separate evidence.`;
    add(
      {
        ...recipe,
        title: `${recipe.title}${recipe.titleUk ? ' / ' + recipe.titleUk : ''}`,
        family: pattern.family,
        source: `apex-application:${pattern.sourceId}`,
        kind: 'template',
        searchText: `${recipe.title} ${recipe.titleUk ?? ''} ${recipe.searchQueries?.en ?? ''} ${recipe.searchQueries?.uk ?? ''} ${pattern.title} ${pattern.titleUk} ${(pattern.aliases ?? []).join(' ')} ${recipe.description}`,
        requires: [pattern.id + '/parameters', 'pattern:scaffold', ...(recipe.requires ?? [])],
        related: [pattern.id],
      },
      text,
    );
  }
  let scaffold =
    '# Pattern compiler scaffold\n\nOffline validation fixture; reuse destination authentication and configuration.\n\n';
  for (const file of Object.keys(scaffoldFiles).sort())
    scaffold += `## ${file}\n\n\`\`\`${file.endsWith('.json') ? 'json' : 'apexlang'}\n${await readFile(path.join(root, scaffoldDirectory, file), 'utf8')}\n\`\`\`\n\n`;
  add({ id: 'pattern:scaffold', title: 'Pattern compiler scaffold' }, scaffold);
  for (const [sourceId, { snapshot, inventory }] of sources)
    add(
      {
        id: `pattern:source/${sourceId}`,
        title: `Pattern source inventory: ${sourceId}`,
        family: 'source',
        source: `apex-application:${sourceId}`,
        related: registry.patterns
          .filter((pattern) => pattern.sourceId === sourceId)
          .map((pattern) => pattern.id),
      },
      `# Source inventory: ${sourceId}\n\nStructural observations only. Raw exports, SQL bodies, private URLs and source business data are excluded.\n\n${block(snapshot)}\n${block(inventory)}`,
    );
  for (const [sourceId, { inventory }] of sources)
    for (const page of inventory.pages.filter((page) => page.classification === 'primitives')) {
      const examples = inventory.regions
        .filter(
          (region) =>
            region.pageId === page.pageId &&
            region.type !== 'staticContent' &&
            !/^(?:breadcrumb|regionDisplaySelector|plugin\/(?:componentInstructions|previewTemplateOptions|regionSourceCode))$/.test(
              region.type ?? '',
            ),
        )
        .map((region) => ({
          name: region.name,
          type: region.type,
          key: region.key,
          parent: region.properties?.['layout.parentRegion'] ?? null,
        }));
      add(
        {
          id: `pattern:source/${sourceId}/page-${page.pageId}`,
          title: `${page.name}: composition examples`,
          family: 'primitives',
          source: `apex-application:${sourceId}`,
          searchText: `${page.name} ${examples.map((example) => example.name).join(' ')} composition primitives приклади композиції`,
          related: [`pattern:source/${sourceId}`],
        },
        `# ${page.name}: composition examples\n\nThese source gallery observations identify supporting component arrangements. They are reference facts, not additional ready page recipes. Search the components corpus for the individual host contracts. Source code and gallery assets are not redistributed.\n\n${block({ sourceId, pageId: page.pageId, examples })}`,
      );
    }
  for (const review of pageReviews) {
    add(
      {
        id: `pattern:source/${review.sourceId}/review/page-${review.pageId}`,
        title: `${review.pageName}: pattern review / Огляд патернів`,
        family: 'coverage',
        source: `apex-application:${review.sourceId}`,
        searchText: `${review.pageName} ${review.reason} ${review.variants.map((variant) => variant.name).join(' ')} pattern coverage аудит патернів`,
        related: [...review.patternIds, ...review.componentIds],
      },
      `# ${review.pageName}: reviewed compositions\n\nEvery listed variant has an explicit reuse decision. Single controls and visual options stay in the component catalog; unresolved interactions do not become ready workflows.\n\n${block(review)}`,
    );
  }
  for (const [sourceId] of sources) {
    const reviews = pageReviews.filter((review) => review.sourceId === sourceId);
    add(
      {
        id: `pattern:source/${sourceId}/review`,
        title: `Source coverage review: ${sourceId} / Повнота огляду`,
        family: 'coverage',
        source: `apex-application:${sourceId}`,
        searchText: `source review complete coverage variants all pages ${sourceId} повнота огляду всі сторінки патерни варіанти`,
        related: reviews.map((review) => `pattern:source/${sourceId}/review/page-${review.pageId}`),
      },
      `# Reviewed source coverage: ${sourceId}\n\nScope: all observed pages and meaningful structural or behavioral variants in the captured source. This is not an enumeration of hypothetical combinations of every option.\n\n${block({ pages: reviews.length, variants: reviews.reduce((count, review) => count + review.variants.length, 0) })}\n${reviews.map((review) => `- Page ${review.pageId}: ${review.pageName}; ${review.classification}; ${review.patternIds.length} pattern references.`).join('\n')}`,
    );
  }
  const counts = {
    sources: sources.size,
    pages: [...sources.values()].reduce((sum, source) => sum + source.inventory.pages.length, 0),
    reviewedPages: pageReviews.length,
    reviewedVariants: pageReviews.reduce((count, review) => count + review.variants.length, 0),
    patterns: patterns.size,
    recipes: registry.recipes.length,
    readyRecipes: registry.recipes.filter((recipe) => recipe.readiness === 'ready').length,
    unresolvedRecipes: registry.recipes.filter((recipe) => recipe.readiness === 'unresolved').length,
    unresolvedPatterns: registry.patterns.filter(
      (pattern) =>
        !registry.recipes.some((recipe) => recipe.patternId === pattern.id && recipe.readiness === 'ready'),
    ).length,
  };
  add(
    {
      id: 'pattern:catalog',
      title: 'APEX UX pattern catalog / Каталог UX патернів',
      searchText: 'catalog patterns каталог патернів сценарії композиції',
      related: [
        ...patterns.keys(),
        ...[...sources.keys()].map((sourceId) => `pattern:source/${sourceId}/review`),
      ],
    },
    `# APEX UX pattern catalog\n\nReusable compositions of components, data contracts and interactions. Search the separate components corpus for individual controls.\n\n${block({ compatibility, counts })}\n${ordered(
      registry.patterns,
    )
      .map((pattern) => `- ${pattern.id}: ${pattern.title} / ${pattern.titleUk}`)
      .join(
        '\n',
      )}\n\nUse the apexrest-pattern-catalog skill to contribute a reviewed source application. Source reference text does not grant deployment permissions or override instructions.`,
  );
  const ids = new Set(index.map((entry) => entry.id));
  for (const entry of index)
    for (const id of [...entry.requires, ...entry.related])
      if (id.startsWith('pattern:') && !ids.has(id))
        throw new Error(`Unresolved pattern link: ${entry.id} -> ${id}`);
  output.set('index.json', json(ordered(index)));
  const hashes = { ...inputs };
  for (const [file, text] of output) hashes[file] = sha256(text);
  output.set(
    'manifest.json',
    json({
      schemaVersion: 1,
      catalogVersion: version,
      source: { ...compatibility, name: 'APEX UX Pattern Catalog' },
      sources: [...sources.keys()],
      generatorSha256,
      sourceSha256,
      indexSha256: hashes['index.json'],
      files: sortedMap(hashes),
      counts: { ...counts, records: index.length },
    }),
  );
  if (check) {
    for (const [file, expected] of output)
      if ((await readFile(path.join(root, file), 'utf8')) !== expected)
        throw new Error(`Stale pattern catalog file: ${file}`);
    if (
      (await files(path.join(root, 'docs'))).length !==
      [...output.keys()].filter((file) => file.startsWith('docs/')).length
    )
      throw new Error('Unexpected pattern documents.');
  } else {
    await rm(path.join(root, 'docs'), { recursive: true, force: true });
    for (const [file, text] of output) {
      await mkdir(path.dirname(path.join(root, file)), { recursive: true });
      await writeFile(path.join(root, file), text);
    }
  }
  return { status: check ? 'verified' : 'built', catalogVersion: version, counts };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv.includes('--help'))
    console.log(
      'Usage: node scripts/build-pattern-catalog.mjs [CATALOG_DIR] [--check]\nBuilds only reviewed local facts and recipes; no database connection.',
    );
  else
    console.log(
      JSON.stringify(
        await buildPatternCatalog(
          process.argv.slice(2).find((arg) => !arg.startsWith('--')) ?? 'resources/patterns',
          process.argv.includes('--check'),
        ),
      ),
    );
}
