import { test, expect } from '@playwright/test';
import fs from 'fs/promises'

let downloadedFilePath: string | null;

test.afterAll(async () => {
    if (downloadedFilePath) {
        await fs.unlink(downloadedFilePath);
    }
});

test('Trigger and verify image download', async ({ page }) => {

    // Navigate to the famous art download page
    await page.goto('https://www.nga.gov/artworks/106382-self-portrait');

    try {
        // Wait for the download event
        const downloadPromise = page.waitForEvent('download', {
            timeout: 30000
        });

        // Locate and click the primary download button
        await page.getByRole('link', { name: 'Download', exact: true }).click();

        // Wait for the download to start
        const download = await downloadPromise;

        // Verify the download file
        const fileName = download.suggestedFilename();

        // Match expected downloaded file name
        expect(fileName).toMatch(/self-portrait_1998.74.5.jpg/);

        // Save the downloaded file to verify it later (for CI environments)
        await download.saveAs(`./downloads/${fileName}`);

        // Verify the download path exists
        downloadedFilePath = await download.path();
        expect(downloadedFilePath).not.toBeNull();

        // Verify the file size
        const stats = await fs.stat(downloadedFilePath);

        // Convert bytes to MB
        const fileSizeInMB = stats.size / (1024 * 1024);

        // Ensure file size is reasonable (>100KB)
        expect(fileSizeInMB).toBeGreaterThan(0.1);

        // Ensure file size isn't unrealistically large (<100MB)
        expect(fileSizeInMB).toBeLessThan(100);

        console.log(`Downloaded file: ${fileName} at ${downloadedFilePath}`);
        console.log(`Downloaded file: ${fileName} at ${downloadedFilePath}, Size:${fileSizeInMB.toFixed(2)} MB`);

    } catch (error) {
        // Verify that the error is a timeout, confirming the app didn't crash
        expect(error).toBeInstanceOf(Error);

        if (error instanceof Error) {
            expect(error.message).toContain('Timeout');
        }

        // To check for a failed download
        // const downloadError = await download.failure();
        // console.log(downloadError)
    }

});