import { test, expect } from '@playwright/test';
import fs from 'fs/promises'

test('Trigger and verify image download', async ({ page }, testInfo) => {

    // Navigate to the famous art download page
    await page.goto('https://www.nga.gov/artworks/106382-self-portrait');

    // Wait for the download event
    const downloadPromise = page.waitForEvent('download', {
        timeout: 30000
    });

    // Locate and click the primary download button
    await page.getByRole('link', { name: 'Download', exact: true }).click();

    // Wait for the download to start
    const download = await downloadPromise;

    // Confirm download success
    const failure = await download.failure();
    expect(failure).toBeNull();

    // Verify the download file
    const fileName = download.suggestedFilename();

    // Match expected downloaded file name
    expect(fileName).toMatch(/self-portrait_1998.74.5.jpg/);

    // Save the downloaded file to verify it later (for CI environments)
    const savedFilePath = testInfo.outputPath(fileName); // instead of using `./downloads/${fileName}`;
    const tpath = testInfo.outputPath(fileName);
    await download.saveAs(savedFilePath);
    
    // Verify the temporary download path exists
    const downloadedFilePath = await download.path(); // returns Playwright's temporary download location
    
    //expect(downloadedFilePath).not.toBeNull();
    if (!downloadedFilePath) {
    throw new Error('Download path is null');
    }

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
});