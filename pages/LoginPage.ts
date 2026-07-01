import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly submitButton: Locator;
    private readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.submitButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator('[data-test="error"]');
    }
    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    /**
    * Logs in with the given username and password.
    * @param {string} username - The username to use for login.
    * @param {string} password - The password to use for login.
    * Logs into the site using the provided credentials.
    */
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
    async validateLoginSuccess() {
        await this.page.waitForURL('**/inventory.html');
    }

    async getErrorMessage() {
        return this.errorMessage.textContent();
    }
}