import { chromium, Browser, BrowserContext, Page } from 'playwright';

//npx ts-node tests/chapter_8/run_test_directly_in_node_with_extra.spec.ts
(async () => {
    const browserHeadful  = await chromium.launch( {
        headless: false,
        slowMo: 50,
    });
    const context: BrowserContext = await browserHeadful.newContext();
    const page: Page = await context.newPage();
    await page.goto('https://playwright.dev/');
    await page.screenshot({ path: 'example.png' });

    await page.pause(); // 🔥 Execution will pause here and open thenpx  Playwright Inspector

    await browserHeadful.close();
})();