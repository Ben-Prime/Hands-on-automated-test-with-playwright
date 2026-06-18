import {test, expect} from '../../fixtures/login.fixture'

test('login test', async ({ loginPage }) => {
await loginPage.login('standard_user', 'secret_sauce');
await loginPage.validateLoginSuccess();
});