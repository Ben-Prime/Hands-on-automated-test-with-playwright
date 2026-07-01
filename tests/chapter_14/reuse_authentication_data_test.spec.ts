import { test, expect } from '@playwright/test';

// Use the saved storage state to bypass login
test.use({ storageState: '.auth/standard_user.json' });

test('should access inventory page with saved storage state', async ({
    page, browser }) => {
    // Navigate directly to the inventory page
    
    // Method 1
    const context = await browser.newContext({ storageState: '.auth/standard_user.json' });
    const newPage = await context.newPage();
    newPage.goto('https://www.saucedemo.com/inventory.html');

    // Method 2
    await page.goto('https://www.saucedemo.com/inventory.html');

    // Verify the inventory page is accessible without redirection
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.inventory_list')).toBeVisible();

    // Example: Perform an action on the inventory page
    await expect(page.locator('.inventory_item').first()).toBeVisible();
    await page.getByText('Add to cart').first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});