import { test as base, expect } from '@playwright/test';
import type { Page } from '@playwright/test';
export const test = base.extend({
  request: async ({ request, baseURL }, use) => {
    const origins = JSON.parse(process.env.APEXREST_ALLOWED_ORIGINS ?? '[]') as string[];
    const guarded = new Proxy(request, {
      get(target, property) {
        const value = Reflect.get(target, property);
        if (typeof value !== 'function') return value;
        if (!['get', 'post', 'put', 'patch', 'delete', 'head', 'fetch'].includes(String(property)))
          return value.bind(target);
        return (url: string, options: Record<string, unknown> = {}) => {
          if (typeof url !== 'string' || !origins.includes(new URL(url, baseURL).origin))
            throw new Error('API request left the allowed origins');
          return value.call(target, url, { ...options, maxRedirects: 0 });
        };
      },
    });
    await use(guarded);
  },
  context: async ({ context }, use) => {
    const origins = JSON.parse(process.env.APEXREST_ALLOWED_ORIGINS ?? '[]') as string[];
    await context.route('**/*', async (route) => {
      const url = new URL(route.request().url());
      if (['http:', 'https:'].includes(url.protocol) && !origins.includes(url.origin)) {
        await route.abort('blockedbyclient');
        throw new Error('Browser request left the allowed origins');
      }
      await route.continue();
    });
    await use(context);
  },
});
export { expect };
export async function assertApplication(page: Page, marker: string) {
  if (!marker) throw new Error('Set a real authenticated application marker');
  await expect(page.getByTestId(marker)).toBeVisible();
}
export async function reportSearch(page: Page, label: string, value: string) {
  await page.getByRole('searchbox', { name: label, exact: true }).fill(value);
  await page.getByRole('searchbox', { name: label, exact: true }).press('Enter');
}
export async function submitForm(page: Page, button: string, expectedText: string) {
  await page.getByRole('button', { name: button, exact: true }).click();
  await expect(page.getByText(expectedText, { exact: true })).toBeVisible();
}
export async function modalFrame(page: Page, title: string) {
  const frame = page.frameLocator(`iframe[title=${JSON.stringify(title)}]`);
  await expect(frame.getByRole('button').first()).toBeVisible();
  return frame;
}
