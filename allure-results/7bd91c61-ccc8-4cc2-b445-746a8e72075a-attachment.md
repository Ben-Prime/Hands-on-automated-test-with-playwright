# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter_2\handling_alerts_and_confirmation_dialogs_test.spec.ts >> handle all dialogs
- Location: tests\chapter_2\handling_alerts_and_confirmation_dialogs_test.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Show alert box' })

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test('handle all dialogs', async ({ page }) => {
  4  |     page.on('dialog', async dialog => {
  5  |         console.log(`Dialog type: ${dialog.type()}, message: ${dialog.message()}`);
  6  |         if (dialog.type() === 'prompt')
  7  |             await dialog.accept('some answer');
  8  |         else if (dialog.type() === 'confirm')
  9  |             await dialog.accept(); // clicks "OK"
  10 |         else
  11 |             await dialog.dismiss(); // clicks "Cancel"
  12 |     });
  13 |     await page.goto('https://testpages.eviltester.com/styled/alerts/alerttest.html');
> 14 |     await page.getByRole('button', { name: 'Show alert box' }).click();
     |                                                                ^ Error: locator.click: Target page, context or browser has been closed
  15 |     await page.getByRole('button', { name: 'Show confirm box' }).click();
  16 | });
```