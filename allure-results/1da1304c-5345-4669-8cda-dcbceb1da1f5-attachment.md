# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter_14\writing_tests_using_authenticated_states_test.spec.ts >> should access inventory page with authenticated state
- Location: tests\chapter_14\writing_tests_using_authenticated_states_test.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/inventory.html"
Received: "https://www.saucedemo.com/"
Timeout:  60000ms

Call log:
  - Expect "toHaveURL" with timeout 60000ms
    121 × unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- textbox "Username"
- textbox "Password"
- 'heading "Epic sadface: You can only access ''/inventory.html'' when you are logged in." [level=3]':
  - button
  - text: "Epic sadface: You can only access '/inventory.html' when you are logged in."
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('should access inventory page with authenticated state', async ({
  4  |     page }) => {
  5  |     // No need to log in,
  6  |     // the storage state is applied from .auth/standard_user.json
  7  |     await page.goto('https://www.saucedemo.com/inventory.html');
  8  | 
  9  |     // Verify the inventory page is accessible
> 10 |     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  11 |     await expect(page.locator('.inventory_list')).toBeVisible();
  12 |     
  13 |     // Perform an action on the inventory page
  14 |     await expect(page.locator('.inventory_item').first()).toBeVisible();
  15 |     await page.getByText('Add to cart').first().click();
  16 |     await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  17 | });
```