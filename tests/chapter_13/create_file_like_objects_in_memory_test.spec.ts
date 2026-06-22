import { test, expect } from '@playwright/test';

test('should upload multiple files successfully', async ({ page }) => {

    // Navigate to the file upload page.
    await page.goto('https://filebin.net/');

    // Locate the file input element
    const fileInput = page.locator('input[type="file"]');

    // Creats an array of objects that act like files
    await fileInput.setInputFiles([
        {
            name: 'file1.txt',
            mimeType: 'text/plain',
            buffer: Buffer.from("Hey, this is the first file's content!")
        },
        {
            name: 'file2.txt',
            mimeType: 'text/plain',
            buffer: Buffer.from("Yo, this is the second file's content!")
        }
    ]);

    // Wait for the shareable link to appear,
    // indicating upload has finished
    await expect(page.getByRole('link', { name: ' Download files' })).toBeVisible();

    // Verify that the file names are displayed in the UI
    await expect(page.getByRole('link', { name: 'file1.txt' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'file2.txt' }).first()).toBeVisible();
});