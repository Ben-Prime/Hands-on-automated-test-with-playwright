import { chromium } from 'playwright';

// first install the necessary packages
// npm install typescript ts-node @types/node
// then initialise typescrip config with: npx tsc --init only if you don't have an existing tsconfig.json file
// npx ts-node tests\chapter_8\run_test_directly_in_nodejs.spec.ts

(async () => {
    // Headless mode
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://playwright.dev/');
    // ... more actions
    await browser.close();
})();

