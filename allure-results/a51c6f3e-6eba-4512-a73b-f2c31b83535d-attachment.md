# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter_13\automating_single_file_uploads_test.spec.ts >> should upload a single file
- Location: tests\chapter_13\automating_single_file_uploads_test.spec.ts:4:5

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\USER\Documents\TestAutomation\Hands-on-automated-test-with-playwright\tests\chapter_13\document.pdf'
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e14] [cursor=pointer]:
        - generic [ref=e15]:
          - img [ref=e17]
          - text: Elements
        - img [ref=e22]
      - generic [ref=e24]:
        - generic [ref=e26] [cursor=pointer]:
          - generic [ref=e27]:
            - img [ref=e29]
            - text: Forms
          - img [ref=e35]
        - list [ref=e38]:
          - listitem [ref=e39] [cursor=pointer]:
            - link "Practice Form" [ref=e40]:
              - /url: /automation-practice-form
              - img [ref=e41]
              - text: Practice Form
      - generic [ref=e45] [cursor=pointer]:
        - generic [ref=e46]:
          - img [ref=e48]
          - text: Alerts, Frame & Windows
        - img [ref=e53]
      - generic [ref=e57] [cursor=pointer]:
        - generic [ref=e58]:
          - img [ref=e60]
          - text: Widgets
        - img [ref=e66]
      - generic [ref=e70] [cursor=pointer]:
        - generic [ref=e71]:
          - img [ref=e73]
          - text: Interactions
        - img [ref=e78]
      - generic [ref=e82] [cursor=pointer]:
        - generic [ref=e83]:
          - img [ref=e85]
          - text: Book Store Application
        - img [ref=e90]
    - generic [ref=e93]:
      - heading "Practice Form" [level=1] [ref=e94]
      - heading "Student Registration Form" [level=5] [ref=e95]
      - generic [ref=e96]:
        - generic [ref=e97]:
          - generic [ref=e99]: Name
          - textbox "First Name" [ref=e101]
          - textbox "Last Name" [ref=e103]
        - generic [ref=e104]:
          - generic [ref=e106]: Email
          - textbox "name@example.com" [ref=e108]
        - generic [ref=e109]:
          - generic [ref=e110]: Gender
          - generic [ref=e111]:
            - generic [ref=e112]:
              - radio "Male" [ref=e113]
              - generic [ref=e114]: Male
            - generic [ref=e115]:
              - radio "Female" [ref=e116]
              - generic [ref=e117]: Female
            - generic [ref=e118]:
              - radio "Other" [ref=e119]
              - generic [ref=e120]: Other
        - generic [ref=e121]:
          - generic [ref=e123]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=e125]
        - generic [ref=e126]:
          - generic [ref=e128]: Date of Birth
          - textbox [ref=e132]: 22 Jun 2026
        - generic [ref=e133]:
          - generic [ref=e135]: Subjects
          - generic [ref=e137]:
            - log [ref=e139]
            - combobox [ref=e143]
        - generic [ref=e146]:
          - generic [ref=e148]: Hobbies
          - generic [ref=e149]:
            - generic [ref=e150]:
              - checkbox "Sports" [ref=e151]
              - generic [ref=e152]: Sports
            - generic [ref=e153]:
              - checkbox "Reading" [ref=e154]
              - generic [ref=e155]: Reading
            - generic [ref=e156]:
              - checkbox "Music" [ref=e157]
              - generic [ref=e158]: Music
        - generic [ref=e159]:
          - generic [ref=e161]: Picture
          - button "Choose File" [ref=e163] [cursor=pointer]
        - generic [ref=e164]:
          - generic [ref=e166]: Current Address
          - textbox "Current Address" [ref=e168]
        - generic [ref=e169]:
          - generic [ref=e171]: State and City
          - generic [ref=e173]:
            - log [ref=e175]
            - generic [ref=e176]:
              - generic [ref=e177]:
                - generic [ref=e178]: Select State
                - combobox [ref=e180]
              - img [ref=e184]
          - generic [ref=e186]:
            - generic:
              - log
              - generic:
                - generic:
                  - generic: Select City
                - generic:
                  - generic:
                    - img
        - button "Submit" [ref=e189] [cursor=pointer]
  - contentinfo [ref=e196]:
    - generic [ref=e197]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import path from 'path'
  3  | 
  4  | test('should upload a single file', async ({ page }) => {
  5  | 
  6  |     // Navigate to the page with the file input
  7  |     await page.goto('https://demoqa.com/automation-practice-form');
  8  | 
  9  |     // Build an absolute path to the file you want to upload
  10 |     const filePath = path.join(__dirname, 'document.pdf');
  11 | 
  12 |     // Locate the input element and set the file
> 13 |     await page.locator('input[type="file"]').setInputFiles(filePath);
     |     ^ Error: ENOENT: no such file or directory, stat 'C:\Users\USER\Documents\TestAutomation\Hands-on-automated-test-with-playwright\tests\chapter_13\document.pdf'
  14 | 
  15 |     // Confirm the file input reflects the selected file
  16 |     await expect(page.locator('#uploadPicture')).toHaveValue(/document\.pdf$/);
  17 | 
  18 |     // You can also click the submit button and
  19 |     // add assertions to verify the upload was successful
  20 | 
  21 |     // Wipes out the file selection, so it’s as if the user never picked anything
  22 |     await page.locator('#uploadPicture').setInputFiles([]);
  23 | });
```