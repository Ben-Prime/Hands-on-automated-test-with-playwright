import { expect, Locator } from '@playwright/test';

/**
 * Asserts that a field is in invalid state
 */
export async function expectFieldInvalid(field: Locator) {
    // UI error state (class-based validation)
    await expect(field).toHaveClass(/.*error|invalid.*/);

    // Accessibility fallback (if supported by app)
    const ariaInvalid = await field.getAttribute('aria-invalid');
    if (ariaInvalid !== null) {
        await expect(field).toHaveAttribute('aria-invalid', 'true');
    }
}