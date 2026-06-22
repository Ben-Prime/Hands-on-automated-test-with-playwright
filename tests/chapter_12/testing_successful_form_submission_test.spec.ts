import { test, expect } from '@playwright/test';

test('valid form submission redirects to confirmation', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const usernameField = page.getByPlaceholder('Username');
    const passwordField = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'Login' });
    await usernameField.fill('standard_user');
    await passwordField.fill('secret_sauce');
    await loginButton.click();
    
    // Verify redirection to confirmation page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});