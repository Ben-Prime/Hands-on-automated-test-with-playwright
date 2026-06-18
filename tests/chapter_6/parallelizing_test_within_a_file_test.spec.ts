import { test, expect } from '@playwright/test';

test.describe.parallel('Parallel test suite', () => {
    test('Test 1 - Playwright.dev has correct title', async ({ page }) => {
        await page.goto('https://playwright.dev');
        await expect(page).toHaveTitle(/Playwright/);
    });
    
    test('Test 2 - GitHub has correct title', async ({ page }) => {
        await page.goto('https://github.com');
        await expect(page).toHaveTitle(/GitHub/);
    });

    test('Test 3 - Youtube has correct title', async ({ page }) => {
        await page.goto('https://youtube.com');
        await expect(page).toHaveTitle(/YouTube/);
    });
});

// or use

test.describe.configure({ mode: 'parallel' });
test('V2 Test 1 - Youtube has correct title', async ({ page }) => {
    await page.goto('https://youtube.com');
    await expect(page).toHaveTitle('/YouTube/');
});

test('V2 Test 2 - Playwright.dev has correct title', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);
});

test('V2 Test 3 - GitHub has correct title', async ({ page }) => {
    await page.goto('https://github.com');
    await expect(page).toHaveTitle(/GitHub/);
});

