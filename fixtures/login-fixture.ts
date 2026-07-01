import { test as base } from '@playwright/test';

type LoginFixture = {
     login: (username: string, password: string) => Promise<void>;
}

export const test = base.extend<LoginFixture>({
    login: async ({ page }, use) => {
        await page.goto('https://www.saucedemo.com/');
        const login = async (username: string, password: string) => {
            await page.getByPlaceholder('Username').fill(username);
            await page.getByPlaceholder('Password').fill(password);
            await page.getByRole('button', { name: 'Login' }).click();
        };
        await use(login);
    },
});

export {expect} from '@playwright/test'