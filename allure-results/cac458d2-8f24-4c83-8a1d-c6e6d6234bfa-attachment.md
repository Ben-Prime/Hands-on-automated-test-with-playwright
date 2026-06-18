# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter_2\handling_alerts_and_confirmation_dialogs_test.spec.ts >> handle all dialogs
- Location: tests\chapter_2\handling_alerts_and_confirmation_dialogs_test.spec.ts:3:5

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Show alert box' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e4]:
        - link [ref=e5] [cursor=pointer]:
          - /url: /
          - img [ref=e7]:
            - generic "Test Pages" [ref=e10]
            - generic "PRACTICE SOFTWARE TESTING" [ref=e11]
        - list [ref=e13]:
          - listitem [ref=e14]:
            - link "Pages" [ref=e15] [cursor=pointer]:
              - /url: /pages/
          - listitem [ref=e16]:
            - link "Apps" [ref=e17] [cursor=pointer]:
              - /url: /apps/
          - listitem [ref=e18]:
            - link "Challenges" [ref=e19] [cursor=pointer]:
              - /url: /challenges/
          - listitem [ref=e20]:
            - link "Reference Information and Tutorials" [ref=e21] [cursor=pointer]:
              - /url: /reference/
    - generic [ref=e22]:
      - text: Support this site by joining our Patreon. For as little as $1 a month you receive exclusive ad-free content, ebooks and online training courses. —
      - link "Learn more" [ref=e23] [cursor=pointer]:
        - /url: https://patreon.com/eviltester
  - generic [ref=e24]:
    - main [ref=e25]:
      - generic [ref=e26]:
        - heading "Not found" [level=1] [ref=e27]
        - paragraph [ref=e28]:
          - text: Oops! This page doesn't exist. Try going back to the
          - link "home page" [ref=e29] [cursor=pointer]:
            - /url: /
          - text: .
    - contentinfo [ref=e30]:
      - generic [ref=e31]:
        - paragraph [ref=e32]:
          - text: Help keep this site free by joining our
          - link "Patreon Membership site" [ref=e33] [cursor=pointer]:
            - /url: https://patreon.com/eviltester
          - text: . Membership costs as little as $1 a month and includes access to exclusive
          - link "e-books and online training courses" [ref=e34] [cursor=pointer]:
            - /url: https://www.testerhq.com/
          - text: .
        - paragraph [ref=e35]:
          - text: If you'd like to see your advertising message here or learn about corporate sponsorship then
          - link "Contact Us" [ref=e36] [cursor=pointer]:
            - /url: https://linkedin.com/in/eviltester
          - text: .
      - generic [ref=e38]:
        - list [ref=e40]:
          - listitem "Twitter" [ref=e41]:
            - link "Twitter" [ref=e42] [cursor=pointer]:
              - /url: https://twitter.com/eviltester
              - generic [ref=e43]: 
          - listitem "LinkedIn" [ref=e44]:
            - link "LinkedIn" [ref=e45] [cursor=pointer]:
              - /url: https://linkedin.com/in/eviltester
              - generic [ref=e46]: 
        - list [ref=e48]:
          - listitem "GitHub" [ref=e49]:
            - link "GitHub" [ref=e50] [cursor=pointer]:
              - /url: https://github.com/eviltester
              - generic [ref=e51]: 
        - generic [ref=e52]:
          - generic [ref=e53]: © 2025–2026 Compendium Developments Ltd
          - link "Privacy Policy" [ref=e55] [cursor=pointer]:
            - /url: https://www.eviltester.com/page/privacy/
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test('handle all dialogs', async ({ page }) => {
  4  |     page.on('dialog', async dialog => {
  5  |         console.log(`Dialog type: ${dialog.type()},
  6  | message: ${dialog.message()}`);
  7  |         if (dialog.type() === 'prompt')
  8  |             await dialog.accept('some answer');
  9  |         else if (dialog.type() === 'confirm')
  10 |             await dialog.accept(); // clicks "OK"
  11 |         else
  12 |             await dialog.dismiss(); // clicks "Cancel"
  13 |     });
  14 |     await page.goto(' https://testpages.eviltester.com/styled/alerts/alerttest.html');
> 15 |     await page.getByRole('button', { name: 'Show alert box' }).click();
     |                                                                ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  16 |     await page.getByRole('button', { name: 'Show confirm box' }).click();
  17 | });
```