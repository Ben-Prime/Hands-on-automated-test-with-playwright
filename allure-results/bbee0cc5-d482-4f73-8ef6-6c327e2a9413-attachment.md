# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter_10\comparing_screenshots_visual_regression_testing_test.spec.ts >> Homepage should look the same
- Location: tests\chapter_10\comparing_screenshots_visual_regression_testing_test.spec.ts:3:5

# Error details

```
Error: A snapshot doesn't exist at C:\Users\bjegede\Documents\Test_Automation\HandsOnAutomatedTestWithPlaywright\tests\chapter_10\comparing_screenshots_visual_regression_testing_test.spec.ts-snapshots\homepage-Google-Chrome-win32.png, writing actual.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - text: View the
    - link "Documentation" [ref=e4] [cursor=pointer]:
      - /url: https://testsmith-io.github.io/practice-software-testing/#/
    - text: for this application.
  - generic [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]: Practice Black Box Testing & Bug Hunting
      - button "Testing Guide" [ref=e9] [cursor=pointer]
      - button "🐛 Bug Hunting" [ref=e10] [cursor=pointer]
    - navigation [ref=e11]:
      - generic [ref=e12]:
        - link "Practice Software Testing - Toolshop" [ref=e13] [cursor=pointer]:
          - /url: /
          - img [ref=e14]
        - generic [ref=e32]:
          - menubar "Main menu" [ref=e33]:
            - menuitem "Home" [ref=e34]:
              - link "Home" [ref=e35] [cursor=pointer]:
                - /url: /
            - menuitem "Categories" [ref=e36]:
              - button "Categories" [ref=e37] [cursor=pointer]
            - menuitem "Contact" [ref=e38]:
              - link "Contact" [ref=e39] [cursor=pointer]:
                - /url: /contact
            - menuitem "Sign in" [ref=e40]:
              - link "Sign in" [ref=e41] [cursor=pointer]:
                - /url: /auth/login
          - button "Select language" [ref=e43] [cursor=pointer]:
            - img [ref=e45]
            - text: EN
  - generic [ref=e51]:
    - heading "Contact" [level=3] [ref=e52]
    - generic [ref=e54]:
      - generic [ref=e55]:
        - generic [ref=e57]:
          - generic [ref=e58]: First name
          - textbox "First name" [ref=e59]:
            - /placeholder: Your first name *
        - generic [ref=e61]:
          - generic [ref=e62]: Last name
          - textbox "Last name" [ref=e63]:
            - /placeholder: Your last name *
        - generic [ref=e64]:
          - generic [ref=e65]: Email address
          - textbox "Email address" [ref=e66]:
            - /placeholder: Your email *
      - generic [ref=e67]:
        - generic [ref=e69]:
          - generic [ref=e70]: Subject
          - combobox "Subject" [ref=e71]:
            - option "Customer service"
            - option "Webmaster"
            - option "Return"
            - option "Payments"
            - option "Warranty"
            - option "Status of my order"
        - generic [ref=e72]:
          - generic [ref=e73]: Message *
          - textbox "Message *" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]: Attachment
          - generic [ref=e78]:
            - button "Attachment" [ref=e79] [cursor=pointer]
            - generic [ref=e80]:
              - text: Only files with the
              - strong [ref=e81]: txt
              - text: extension are allowed, and files must be 0kb.
        - button "Send" [ref=e83] [cursor=pointer]
  - paragraph [ref=e86]:
    - text: This is a DEMO application (
    - link "GitHub repo" [ref=e87] [cursor=pointer]:
      - /url: https://github.com/testsmith-io/practice-software-testing
    - text: ), used for software testing training purpose. |
    - link "Privacy Policy" [ref=e88] [cursor=pointer]:
      - /url: /privacy
    - text: "| Banner photo by"
    - link "Barn Images" [ref=e89] [cursor=pointer]:
      - /url: https://unsplash.com/@barnimages
    - text: "on"
    - link "Unsplash" [ref=e90] [cursor=pointer]:
      - /url: https://unsplash.com/photos/t5YUoHW6zRo
    - text: .
  - button "Open chat" [ref=e92] [cursor=pointer]:
    - img [ref=e93]
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | test('Homepage should look the same', async ({ page }) => {
  4 |     await page.goto('https://practicesoftwaretesting.com/contact');
  5 |     // This is the magic line!
> 6 |     await expect(page).toHaveScreenshot('homepage.png');
    |     ^ Error: A snapshot doesn't exist at C:\Users\bjegede\Documents\Test_Automation\HandsOnAutomatedTestWithPlaywright\tests\chapter_10\comparing_screenshots_visual_regression_testing_test.spec.ts-snapshots\homepage-Google-Chrome-win32.png, writing actual.
  7 | });
```