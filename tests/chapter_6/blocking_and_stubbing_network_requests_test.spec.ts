import { test, expect } from '@playwright/test'

test.skip('Blocking and stubbing in Playwright', async ({ page }) => {
    // skip loading image formats such as .png, .jpeg, .svg, and so on
    await page.route('**/*.{png,jpg,jpeg,svg,gif}', (route) => route.abort());
    // block requests to specific domains, such as ads or analytics
    await page.route('**/ads.googleads.com/**', (route) => route.abort());
    await page.route('**/analytics.googleads.net/**', (route) => route.abort());

    await page.goto('url');

    // using Playwright’s route interception, to fake responses for API calls
    await page.route('**/api/user/profile', (route) => {
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ name: 'Test User', id: 123 }),
        });
    });
});