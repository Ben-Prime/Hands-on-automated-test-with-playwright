import { test as base, expect } from '@playwright/test';

type ConsoleFixture = {
    noConsoleErrors: void;
};

/**
 * Checks for console errors during test execution.
 */
export const test = base.extend<ConsoleFixture>({
    noConsoleErrors: async ({ page }, use) => {
        const consoleErrors: string[] = [];

        // Set up a listener for the 'console' event.
        page.on('console', msg => {
            // Check if the message type is 'error'.
            if (msg.type() === 'error') {
                consoleErrors.push(msg.text());
            }
        });

        // Use the fixture in the test. The test code will run here.
        await use();

        // After the test, assert that no console errors were logged.
        // This part is the "teardown" of the fixture.
        // expect(value, message) returns message if the assertion fails, otherwise it returns undefined.
        expect(
            consoleErrors,
            `Unexpected console errors:\n${consoleErrors.join('\n')}`
        ).toHaveLength(0);
    },
});