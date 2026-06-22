# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter_13\automating_single_file_uploads_test.spec.ts >> should upload a single file
- Location: tests\chapter_13\automating_single_file_uploads_test.spec.ts:4:5

# Error details

```
Error: page.goto: net::ERR_TIMED_OUT at https://demoqa.com/automation-practice-form
Call log:
  - navigating to "https://demoqa.com/automation-practice-form", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import path from 'path'
  3  | 
  4  | test('should upload a single file', async ({ page }) => {
  5  | 
  6  |     // Navigate to the page with the file input
> 7  |     await page.goto('https://demoqa.com/automation-practice-form');
     |                ^ Error: page.goto: net::ERR_TIMED_OUT at https://demoqa.com/automation-practice-form
  8  | 
  9  |     // Build an absolute path to the file you want to upload
  10 |     const filePath = path.join(__dirname, 'document.pdf');
  11 | 
  12 |     console.log(filePath);
  13 | 
  14 |     // Locate the input element and set the file
  15 |     await page.locator('input[type="file"]').setInputFiles(filePath);
  16 | 
  17 |     // Confirm the file input reflects the selected file
  18 |     await expect(page.locator('#uploadPicture')).toHaveValue(/document\.pdf$/);
  19 | 
  20 |     // You can also click the submit button and
  21 |     // add assertions to verify the upload was successful
  22 | 
  23 |     // Wipes out the file selection, so it’s as if the user never picked anything
  24 |     await page.locator('#uploadPicture').setInputFiles([]);
  25 | });
  26 | 
  27 | 
  28 | 
```