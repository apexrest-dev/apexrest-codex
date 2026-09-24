import test from 'node:test';
import assert from 'node:assert/strict';
import { validatePatternCoverage } from '../../scripts/pattern-coverage.mjs';

function fixture() {
  const id = 'pattern:example/selection';
  const sources = new Map([
    [
      'example',
      {
        inventory: {
          pages: [
            {
              pageId: 1,
              name: 'Selection',
              classification: 'pattern',
              provenance: { sha256: 'a'.repeat(64) },
            },
          ],
          objects: [{ pageId: 1, key: 'results' }],
        },
      },
    ],
  ]);
  const patterns = new Map([
    [
      id,
      {
        id,
        sourceId: 'example',
        sourcePageIds: [1],
        sourceExamples: [{ pageId: 1, componentKeys: ['results'], behavior: 'Choose a record.' }],
      },
    ],
  ]);
  const registry = {
    sourceReviews: {
      example: {
        1: {
          sourceSha256: 'a'.repeat(64),
          classification: 'pattern',
          reason: 'Reviewed record selection.',
          patternIds: [id],
          componentIds: ['component:regions/cards'],
          variants: [
            {
              name: 'Record selection',
              disposition: 'pattern',
              patternIds: [id],
              reason: 'A control and detail share a key.',
            },
          ],
        },
      },
    },
  };
  return { registry, sources, patterns, id };
}

test('coverage binds a reviewed decision and every variant to exact captured page source', () => {
  const { registry, sources, patterns } = fixture();
  const reviewed = validatePatternCoverage(registry, sources, patterns);
  assert.equal(reviewed.length, 1);
  assert.equal(reviewed[0].variants.length, 1);
  assert.equal(reviewed[0].pageName, 'Selection');
});

test('a changed source or missing page cannot inherit a previous complete-coverage claim', () => {
  const { registry, sources, patterns } = fixture();
  registry.sourceReviews.example[1].sourceSha256 = 'b'.repeat(64);
  assert.throws(() => validatePatternCoverage(registry, sources, patterns), /stale page review/);
  registry.sourceReviews.example[1].sourceSha256 = 'a'.repeat(64);
  delete registry.sourceReviews.example[1];
  assert.throws(() => validatePatternCoverage(registry, sources, patterns), /Incomplete page review/);
});

test('coverage rejects orphaned patterns, nonexistent source anchors and unreviewed variants', () => {
  const { registry, sources, patterns, id } = fixture();
  patterns.get(id).sourceExamples[0].componentKeys = ['missing'];
  assert.throws(() => validatePatternCoverage(registry, sources, patterns), /Unknown source component/);
  patterns.get(id).sourceExamples[0].componentKeys = ['results'];
  registry.sourceReviews.example[1].variants[0].patternIds = ['pattern:unknown'];
  assert.throws(() => validatePatternCoverage(registry, sources, patterns), /Variant pattern/);
  registry.sourceReviews.example[1].variants[0].patternIds = [];
  assert.throws(() => validatePatternCoverage(registry, sources, patterns), /Incomplete variant/);
});
