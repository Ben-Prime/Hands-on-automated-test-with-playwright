import { test, expect } from '@playwright/test';

test('take a simple screenshot of header', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Take a screenshot of just the header element
    const element = page.locator('header');
    await element.screenshot({
        path: 'test-results/element-screenshot.png',
        omitBackground: true, // Transparent background
        scale: 'css', // Smaller file size
        animations: 'disabled', // Freeze all animations
        timeout: 5000, // Wait a maximum of 5 seconds
        caret: 'hide' // Hide the text caret (cursor) in input fields
    });
});