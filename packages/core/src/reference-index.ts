// Shared by the offline corpus builder and the runtime fallback for custom references.
export const referenceWords = (text: string) =>
  text
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .match(/[\p{L}\p{N}]+/gu) ?? [];
export const normalizeReference = (text: string) => referenceWords(text).join(' ');
export function buildReferencePostings(entries: { id: string; title?: string; text: string }[]) {
  const postings: Record<string, number[]> = Object.create(null);
  entries.forEach((entry, position) => {
    for (const word of new Set(referenceWords(entry.id + ' ' + (entry.title ?? '') + ' ' + entry.text)))
      (postings[word] ??= []).push(position);
  });
  return postings;
}
