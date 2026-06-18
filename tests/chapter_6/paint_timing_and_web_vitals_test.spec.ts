import { test, expect } from '@playwright/test';

declare global {
  interface Window {
    __lcp: () => number | undefined;
  }
}

test('Measure paint timings', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const paintMetrics = await page.evaluate(() => {
        const paintEntries = performance.getEntriesByType('paint');
        return paintEntries.map(e => ({
            name: e.name,
            startTime: e.startTime,
        }));
    });
    console.log('Paint timings:', paintMetrics);
});

test('measure LCP on youtube.com', async ({ page }) => {
    // Inject the LCP observer *before* navigation
    await page.addInitScript(() => {
        let lcp: number | undefined;
        new PerformanceObserver((entries) => {
            entries.getEntries().forEach((e) => {
                lcp = e.startTime;
            });
        }).observe({ type: 'largest-contentful-paint', buffered: true });
        window.__lcp = () => lcp;
    });
    await page.goto('https://www.youtube.com', { waitUntil: 'load' });
    // Wait a bit to let paints complete
    await page.waitForTimeout(3000);
    // Read the LCP value
    const lcpValue = await page.evaluate(() => window.__lcp());
    console.log('Largest Contentful Paint:', lcpValue, 'ms');

    // Good LCP is <= 2s
    expect(lcpValue).toBeLessThanOrEqual(10000);

    page.close();
});