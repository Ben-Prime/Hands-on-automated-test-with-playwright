import { test, expect } from '@playwright/test'

test.skip('Interacting with dropdowns (<select>) - single selection', async ({ page }) => {
    const countryDropdown = page.getByLabel('Country');

    // Select by value('DE' for Germany)
    await countryDropdown.selectOption('DE');

    // Select by label(visible text)
    await countryDropdown.selectOption({ label: 'United Kingdom' });

    // Select by index
    await countryDropdown.selectOption({ index: 2 });
});

test.skip('Interacting with dropdowns (<select>) - multiple selection', async ({ page }) => {
    const toppingsDropdown = page.getByLabel('Toppings');

    // Select multiple toppings by their values
    await toppingsDropdown.selectOption([
        'pepperoni',
        'mushrooms',
        'onions'
    ]);

    // Or by labels
    await toppingsDropdown.selectOption([
        { label: 'Pepperoni' },
        { label: 'Mushrooms' },
        { label: 'Onions' }
    ]);
});

test('Handling custom dropdowns (non-<select>)', async ({ page }) => {
    // Navigate to the form page
    await page.goto('https://demoqa.com/automation-practice-form');

    // Locate the state dropdown
    const stateDropdown = page.locator('#state');

    // Click state dropdown to open it
    await stateDropdown.click();
    
    // Select a state ("Haryana")
    const stateOption = page.getByText('Haryana');
    await expect(stateOption).toBeVisible();
    await stateOption.click();
});
