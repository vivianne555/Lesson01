import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.guru99.com/xpath-selenium.html/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/XPath in Selenium/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.guru99.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Selenium' }).first().click();

  // Expects page to have a heading with the name of Installation.
  await page.getByRole('link', { name: 'Selenium' }).first().click();
