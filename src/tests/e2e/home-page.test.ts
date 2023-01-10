import { expect, test } from '@playwright/test';

test('home page', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText('Home page');
});
