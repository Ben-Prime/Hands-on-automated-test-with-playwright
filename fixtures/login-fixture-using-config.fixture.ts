import { test as base, Page } from '@playwright/test'
import config from 'config.json' // can import like this because resolveJsonModule in tsconfig is true

// Define a new type for our custom fixtures.
// This allows for better autocompletion and type safety.
type myFixture = {
    loggedInPage: Page
}

export const test = base.extend<myFixture>({
    loggedInPage: async ({ page }, use) => {
        // This is the setup code for the fixture.
        await page.goto(config.baseUrl);
        await page.getByPlaceholder('Username')
            .fill(config.users.standard.username);
        await page.getByPlaceholder('Password')
            .fill(config.users.standard.password);
        await page.getByRole('button', { name: 'Login' }).click();
        // Use the fixture. This is where the test code runs.
        await use(page);
        // This is the teardown code for the fixture (if any).
        // In this case, there is no specific cleanup needed.

    }
});

export {expect} from '@playwright/test'