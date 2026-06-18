import { test, expect } from '@playwright/test';

test('Homepage should look the same', async ({ page }) => {
    //await page.goto('https://practicesoftwaretesting.com/contact'); // correct page
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/contact'); // buggy page
    // This is the magic line!
    await expect(page).toHaveScreenshot('homepage.png', {
        maxDiffPixels: 10000, // allow up to 10000 differing pixels
        //threshold: 0.2, // 20% pixel ratio difference allowed
        
        // Pass an array of locators to mask
        mask: [page.locator('.dynamic-timestamp'),
        page.locator('.user-avatar')],
        animations: 'disabled' // to enable stable visual tests
    });
});

