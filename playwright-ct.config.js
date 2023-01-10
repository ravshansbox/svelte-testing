import { devices } from '@playwright/experimental-ct-svelte';

/** @type import('@playwright/experimental-ct-svelte').PlaywrightTestConfig */
const config = {
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  testDir: 'src/tests/component',
  timeout: 5 * 1000,
};

export default config;
