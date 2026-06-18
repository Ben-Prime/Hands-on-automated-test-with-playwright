import { test, expect, devices } from '@playwright/test';

// Use a built-in mobile device
const iPhone16 = devices['iPhone 16'];

test.use({
    ...iPhone16,
    hasTouch: true,
    viewport: { width: 393, height: 659 },
    deviceScaleFactor: 3,
    permissions: ['geolocation', 'notifications'],
});

test('Wikipedia search field interaction on mobile', async ({ page }) => {

   console.log(devices['iPhone 15']);

    // Navigate to Wikipedia
    await page.goto('https://www.wikipedia.org/');

    // Tap the search input field
    await page.tap('input[name="search"]');

    // Type something
    await page.fill('input[name="search"]', 'Playwright');

    // Tap the search button
    await page.tap('button[type="submit"]');

    // Assert that a new page loads
    await expect(page).toHaveURL(/.*Playwright.*/);
});