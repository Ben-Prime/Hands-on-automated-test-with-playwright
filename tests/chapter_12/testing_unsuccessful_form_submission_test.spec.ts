import { test, expect } from '@playwright/test';
import { expectFieldInvalid } from '../../src/helpers/client_side_validation'

test('Login with invalid credentials shows error message', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Auto-waiting locators
    const usernameField = page.getByPlaceholder('Username');
    const passwordField = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'Login' });
    const errorContainer = page.locator('[data-test="error"]');

    // Fill + submit
    await usernameField.fill('invalid_user');
    await passwordField.fill('wrong_password');
    await loginButton.click();

    // Assert error is visible and has exact text
    await expect(errorContainer).toBeVisible();
    await expect(errorContainer)
        .toContainText('Epic sadface: Username and password do not match any user in this service'
        ); // or .toHaveText for a stricter match

    // Client-side / UI validation (adjust based on actual DOM)
    await expectFieldInvalid(usernameField);
    await expectFieldInvalid(passwordField);
});