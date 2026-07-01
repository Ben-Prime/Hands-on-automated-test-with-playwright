import { defineConfig, devices } from '@playwright/test';
/// <reference types="node" />

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  //globalSetup: require.resolve('./global-setup'), // Path to the global setup file that will run before all tests. This is where you can perform any necessary setup tasks, such as logging in and saving the authentication state.
  timeout: 600_000, // (for each test) same as 10 * 60 * 1000, which is 10 minutes - minutes, seconds, milliseconds
  globalTimeout: 60 * 60 * 1000, // (for the entire test suite) same as 1 * 60 * 60 * 1000, which is 1 hour - hours, minutes, seconds, milliseconds
  expect: {
    timeout: 60000,
  },

  testDir: './tests',
  testMatch: '/*.spec.ts', // Defines a pattern to match test files. In this case, it will match any TypeScript files in the tests directory that end with .spec.ts.
  testIgnore: '/*.unit.ts', // Defines a pattern to ignore test files. In this case, it will ignore any TypeScript files in the tests directory that end with .unit.ts.
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  //forbidOnly: !!process.env.CI,
  /* Retry */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : '50%',
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  /* Sets a global threshold for how many test failures are allowed before Playwright
  stops the entire test run to 10*/
  maxFailures: 10,
  reporter: [
    ['html', { open: 'never' }], // Prevents the HTML report from automatically opening which causes issues in CI environments. You can change 'never' to 'on-failure' if you want the report to open only when tests fail.
    //['dot'], 
    ['list'],
    ['json', { outputFile: 'playwright-report/test-results.json' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
    ['junit', { outputFile: 'playwright-report/test-results.xml' }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    testIdAttribute: 'data-tab-item',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: !!process.env.CI, // true in CI, false localy
    actionTimeout: 60000,
    navigationTimeout: 60000,
    trace: 'on-first-retry',
    locale: 'en-NG', // Set the locale to English (Nigeria)
    timezoneId: 'Africa/Lagos', // Set the timezone to Lagos, Nigeria
    //storageState: 'auth/storageState.json', // Use the storage state file generated after login to maintain the session across tests
    // launchOptions: {
    //   args: ['--start-maximized'], // Start the browser maximized
    // },
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },


    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // Setup project
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    // {
    //   name: 'e2e-tests',
    //   dependencies: ['setup'],
    //   use: {
    //     storageState: '.auth/standard_user.json',
    //   },
    // },
    // Standard Functional Project
    {
      name: 'Google Chrome',
      //dependencies: ['setup'],
      // fullyParallel: true, // only this project runs all tests in parallel
      // IMPORTANT: Set standard projects to ignore visual tests i,e with tag @visual in test description
      grepInvert: /@visual/, // to allow visual test use grep: /@visual/
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        storageState: '.auth/standard_user.json',
        // launchOptions: {
        //   slowMo: 1000, // pauses for 1000 milliseconds between actions
        // }
        // viewport: { width: 1920, height: 1080 }, // Set the viewport size to 1920x1080 for desktop testing
        // deviceScaleFactor: 2, // Set the device scale factor to 2 for high-resolution displays
        // isMobile: false, // Set isMobile to false for desktop testing
        // javaScriptEnabled: false, // Disables JavaScript for testing non-JavaScript scenarios
        // ignoreHTTPSErrors: true, // Ignores HTTPS errors, which can be useful when testing against local servers with self-signed certificates
        // proxy: {
        //   server: 'http://username:password@yourproxy.com:8080',
        //   bypass: 'localhost', // Bypass the proxy for localhost
        //   username: 'username', // Proxy username
        //   password: 'password', // Proxy password
        // },
        // permissions: ['geolocation', 'camera'], // Grants geolocation & camera permission to the browser or leave empty to block all permissions, which can be useful for testing permission-related scenarios
        // storageState: 'storageState.json', // Use the storage state file generated after login to maintain the session across tests
        // channel: 'chrome-stable', // Use the installed Chrome browser instead of the bundled version, which can be useful for testing against the latest stable release of Chrome
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
