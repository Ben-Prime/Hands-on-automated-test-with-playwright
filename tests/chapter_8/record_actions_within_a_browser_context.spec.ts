import { chromium } from 'playwright';

// npx ts-node tests/chapter_8/record_actions_within_a_browser_context.spec.ts
(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo: {
            dir: 'test-results/my-videos/',
            size: { width: 1280, height: 720 },
        },
    });
    const page = await context.newPage();
    // Your automation steps here
    await page.goto('https://playwright.dev/');
    page.getByText('Get started');

    // ...
    // Important: Videos are saved upon browser context closure.
    // Make sure to close the context and browser.
    await context.close();
    await browser.close();

    // Get the path to the video file for this page
    const videoPath = await page.video()?.path();
    console.log(`Video saved at: ${videoPath}`);
})();