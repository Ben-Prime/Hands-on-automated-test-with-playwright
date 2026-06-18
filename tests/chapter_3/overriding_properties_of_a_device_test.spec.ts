import { test, expect, devices } from '@playwright/test';

// Override the default device settings for this test suite
// But best practice is to create a new project in the config file and use that project for the test suite instead of overriding the device settings in the test file. This is because it keeps the test file cleaner and more maintainable, and also allows for better organization of tests based on different device configurations.
test.use({
    ...devices['iPhone 16'], // Start with iPhone 16 settings
    viewport: { width: 390, height: 600 }, // Override the screen size
    locale: 'es-ES', // Switch to Spanish
});

test('iPhone16 viewport & locale test', async ({ page }) => {
    // Verify page elements
    await page.goto('https://github.com');
    // Add assertions or interactions here
    await page.close();
});