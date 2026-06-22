import { test, expect } from '@playwright/test'

test.skip('Handling date pickers', async ({ page }) => {
    page.goto('url');
    // Define locators

    const datePickerInput = page.locator('#date-picker-input');
    const calendar = page.locator('.calendar');
    const yearDropdown = page.locator('.year-dropdown');
    const monthSelectorAugust = page.locator('.month-selector[datamonth="August"]');
    const daySelector8 = page.locator('.day-selector[data-day="8"]');

    // Open the date picker
    await datePickerInput.click();

    // Wait for the calendar to appear
    await calendar.waitFor({ state: 'visible' });

    // Select year (dropdown)
    await yearDropdown.selectOption('2025');

    // Select month (clicking a month button)
    await monthSelectorAugust.click();

    // Select day
    await daySelector8.click();
});

test.skip('Handling custom date pickers', async ({ page }) => {
    page.goto('url');
    
    // This skips the UI UI altogether and set the input’s value directly with JavaScript
    // Note: skipping the UI can sometimes skip built-in validation
    await page.evaluate((date) => {

    // Using JavaScript to interact with the date picker
    const input = document.querySelector('#date-picker-input') as HTMLInputElement | null;

    if (!input) {
        throw new Error('Date picker input not found');
    }

    input.value = date;

    // To imitate actual user behaviour
    input.dispatchEvent(new Event('input', { bubbles: true })); 
    // To ensure the application notices there is a change
    input.dispatchEvent(new Event('change', { bubbles: true }));
    }, '2025-08-08');

    // Add this to make your test extra reliable
    await expect(page.locator('#date-picker-input')).toHaveValue('2025-08-08');
});