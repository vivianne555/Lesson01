import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.guru99.com/xpath-selenium.html/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Xpath in Selenium/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.guru99.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Selenium' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Selenium Tutorial Syllabus' })).toBeVisible();
});
