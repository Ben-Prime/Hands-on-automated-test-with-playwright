import {test, expect} from '@playwright/test';

test('Interact with shadow DOM elements using the host element', async ({ page }) => {
    await page.goto('https://testpages.eviltester.com/pages/web-components/shadow-widget/');

    // Locate the shadow host element by its ID
    const shadowHost = page.locator('#counter-widget');

    // Locate the increment button inside the shadow DOM
    const incrementButton = shadowHost.locator('button#increment');
    // Click the increment button three times
    await incrementButton.click();
    await incrementButton.click();
    await incrementButton.click();
    // Locate the counter value element inside the shadow DOM
    const counterValue = shadowHost.locator('#counter-count');
    // Assert that the counter value is '3'
    await expect(counterValue).toHaveText('3');
    // Locate the decrement button inside the shadow DOM
    const decrementButton = shadowHost.locator('button#decrement');
    // Click the decrement button once
    await decrementButton.click();
    // Assert that the counter value is '2'
    await expect(counterValue).toHaveText('2');
});
