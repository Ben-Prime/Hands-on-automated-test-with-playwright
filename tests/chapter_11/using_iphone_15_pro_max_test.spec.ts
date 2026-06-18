import { test, expect, devices } from '@playwright/test';

test.describe('Responsive layout on mobile', () => {

    test('should display the mobile navigation menu on iPhone 15 Pro Max',
        async ({ browser }) => {
            const iPhone15PM = devices['iPhone 15 Pro Max'];

            // Create a new browser context with iPhone 15 Pro Max settings
            const context = await browser.newContext({...iPhone15PM});
            const page = await context.newPage();
            await page.goto('https://github.com');
            const mobileMenuButton = page.getByRole('button', {name: 'Toggle navigation'});
            await expect(mobileMenuButton).toBeVisible();
            await page.touchscreen.tap(10, 10); // Taps near the top-left corner

            // Clean up the context
            await context.close();
            
            // Return list of built-in emulated devices
            console.log(Object.keys(devices));
        });
});