import {test, expect} from '../../fixtures/auth';

test('should display shopping cart after login', async ({ loggedInPage }) => {
const cartLink = loggedInPage.locator('.shopping_cart_link');
await expect(cartLink).toBeVisible();
});