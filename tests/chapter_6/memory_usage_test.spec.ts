import { test, expect } from '@playwright/test';

// only works for chromium-based broswers
test('Measure memory usage', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const memoryUsage = await page.evaluate(() => {
        const memory = (performance as any).memory;

        return memory
            ? {
                usedJSHeapSize: memory.usedJSHeapSize,
                totalJSHeapSize: memory.totalJSHeapSize,
            }
            : null;
    });
    console.log('Memory usage:', memoryUsage);
});