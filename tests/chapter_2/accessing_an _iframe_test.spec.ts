import { test, expect } from '@playwright/test';

test('Interact with iframe', async ({ page }) => {
    await page.goto('https://testpages.eviltester.com/pages/embedded-pages/iframes/');
    // Locate the iframe
    const frame =  page.locator('#iframe-container1').frameLocator('#alist');
    // Or const frame = page.locator('#alist').first().contentFrame();

    // Interact with elements inside the iframe
    await expect(frame.getByRole('heading', { name: 'iFrame' })).toBeVisible();
});