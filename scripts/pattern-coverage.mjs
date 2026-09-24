// Every captured page needs a current, explicit review; counts alone are not coverage.
export function validatePatternCoverage(registry, sources, patterns) {
  const reviews = registry.sourceReviews;
  if (!reviews || typeof reviews !== 'object' || Array.isArray(reviews))
    throw new Error('Missing complete source page reviews.');
  for (const sourceId of Object.keys(reviews))
    if (!sources.has(sourceId)) throw new Error(`Review refers to unknown source: ${sourceId}`);
  const result = [];
  for (const [sourceId, { inventory }] of sources) {
    const sourceReviews = reviews[sourceId];
    if (!sourceReviews || Object.keys(sourceReviews).length !== inventory.pages.length)
      throw new Error(`Incomplete page review coverage: ${sourceId}`);
    for (const page of inventory.pages) {
      const review = sourceReviews[page.pageId];
      if (!review || review.sourceSha256 !== page.provenance.sha256)
        throw new Error(`Missing or stale page review: ${sourceId}/${page.pageId}`);
      if (
        review.classification !== page.classification ||
        !review.reason?.trim() ||
        !Array.isArray(review.patternIds) ||
        !Array.isArray(review.componentIds) ||
        !Array.isArray(review.variants) ||
        !review.variants.length
      )
        throw new Error(`Incomplete page review decision: ${sourceId}/${page.pageId}`);
      for (const id of review.patternIds)
        if (!patterns.has(id)) throw new Error(`Unknown reviewed pattern: ${id}`);
      if (review.classification === 'pattern' && !review.patternIds.length)
        throw new Error(`Reviewed pattern page has no pattern IDs: ${sourceId}/${page.pageId}`);
      for (const variant of review.variants) {
        if (
          !variant.name?.trim() ||
          !variant.reason?.trim() ||
          !['pattern', 'component', 'visual', 'documentation', 'unresolved'].includes(variant.disposition) ||
          !Array.isArray(variant.patternIds) ||
          (variant.disposition === 'pattern' && !variant.patternIds.length)
        )
          throw new Error(`Incomplete variant review: ${sourceId}/${page.pageId}`);
        for (const id of variant.patternIds)
          if (!patterns.has(id) || !review.patternIds.includes(id))
            throw new Error(`Variant pattern is missing from page review: ${id}`);
      }
      for (const id of review.componentIds)
        if (!/^component:[a-z0-9/-]+$/.test(id)) throw new Error(`Invalid reviewed component: ${id}`);
      result.push({ sourceId, pageId: page.pageId, pageName: page.name, ...review });
    }
  }
  for (const pattern of patterns.values()) {
    for (const pageId of pattern.sourcePageIds)
      if (!reviews[pattern.sourceId]?.[pageId]?.patternIds.includes(pattern.id))
        throw new Error(`Pattern source is not accounted for in page review: ${pattern.id}/${pageId}`);
    for (const example of pattern.sourceExamples ?? []) {
      if (
        !pattern.sourcePageIds.includes(example.pageId) ||
        !example.behavior?.trim() ||
        !Array.isArray(example.componentKeys) ||
        !example.componentKeys.length
      )
        throw new Error(`Invalid observed pattern composition: ${pattern.id}`);
      const objects = sources.get(pattern.sourceId).inventory.objects;
      for (const key of example.componentKeys)
        if (!objects.some((object) => object.pageId === example.pageId && object.key === key))
          throw new Error(`Unknown source component: ${pattern.id}/${example.pageId}/${key}`);
    }
  }
  return result;
}
