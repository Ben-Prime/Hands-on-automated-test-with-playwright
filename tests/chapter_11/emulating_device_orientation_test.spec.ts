import { test, expect, devices } from '@playwright/test'

test.use({
    ...devices['iPhone 16'],
    viewport: {
        width: 844, // Landscape width
        height: 390 // Landscape height
    },
    geolocation: {
        latitude: 41.889938, // Mock latitude (Rome, Italy)
        longitude: 12.492507 // Mock longitude (Rome, Italy)
    },
    permissions: ['geolocation']
});

test('should mock landscape mode', async ({ page }) => {
    // const context = await browser.newContext({

    // });

    //const page = await context.newPage();
    await page.goto('https://www.openstreetmap.org/');
    // Click the locator button
    await page.getByRole('button', { name: /Show My Location/i }).click();

    // flip page back
    await page.setViewportSize({ width: 393, height: 852 });

    // Wait for URL to contain Rome coordinates
    await expect(page).toHaveURL(/41\.88/);

    //context.close();
}); 