# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chapter_13\handling_file_downloads_test.spec.ts >> Trigger and verify image download
- Location: tests\chapter_13\handling_file_downloads_test.spec.ts:4:5

# Error details

```
TimeoutError: page.waitForEvent: Timeout 30000ms exceeded while waiting for event "download"
=========================== logs ===========================
waiting for event "download"
============================================================
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('link', { name: 'Download', exact: true })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - img "Icon for www.nga.gov" [ref=e5]
        - heading "www.nga.gov" [level=1] [ref=e6]
      - heading "Performing security verification" [level=2] [ref=e7]
      - paragraph [ref=e8]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e9]:
    - generic [ref=e11]:
      - generic [ref=e13]:
        - text: "Ray ID:"
        - code [ref=e14]: a0fb98993b7e227b
      - generic [ref=e15]:
        - generic [ref=e16]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e17] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e19] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import fs from 'fs/promises'
  3  | 
  4  | test('Trigger and verify image download', async ({ page }) => {
  5  | 
  6  |     // Navigate to the famous art download page
  7  |     await page.goto('https://www.nga.gov/artworks/106382-self-portrait');
  8  | 
  9  |     // Wait for the download event
  10 |     const downloadPromise = page.waitForEvent('download', {
  11 |         timeout: 30000
  12 |     });
  13 | 
  14 |     // Locate and click the primary download button
> 15 |     await page.getByRole('link', { name: 'Download', exact: true }).click();
     |                                                                     ^ Error: locator.click: Test ended.
  16 | 
  17 |     // Wait for the download to start
  18 |     const download = await downloadPromise;
  19 | 
  20 |     // Verify the download file
  21 |     const fileName = download.suggestedFilename();
  22 | 
  23 |     // Match expected downloaded file name
  24 |     expect(fileName).toMatch(/self-portrait_1998.74.5.jpg/);
  25 | 
  26 |     // Save the downloaded file to verify it later (for CI environments)
  27 |     await download.saveAs(`./downloads/${fileName}`);
  28 | 
  29 |     // Verify the download path exists
  30 |     const downloadPath = await download.path();
  31 |     expect(downloadPath).not.toBeNull();
  32 | 
  33 |     // Verify the file size
  34 |     const stats = await fs.stat(downloadPath);
  35 | 
  36 |     // Convert bytes to MB
  37 |     const fileSizeInMB = stats.size / (1024 * 1024);
  38 | 
  39 |     // Ensure file size is reasonable (>100KB)
  40 |     expect(fileSizeInMB).toBeGreaterThan(0.1);
  41 |     
  42 |     // Ensure file size isn't unrealistically large (<100MB)
  43 |     expect(fileSizeInMB).toBeLessThan(100);
  44 | 
  45 |     console.log(`Downloaded file: ${fileName} at ${downloadPath}`);
  46 |     console.log(`Downloaded file: ${fileName} at ${downloadPath}, Size:${fileSizeInMB.toFixed(2)} MB`);
  47 | 
  48 | });
```