import { devices } from '@playwright/test';

/** @type import('@playwright/test').PlaywrightTestConfig */
const config = {
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  testDir: 'src/tests/e2e',
  timeout: 5 * 1000,
  webServer: {
    command: 'npm run build && npm run preview',
    port: 4173,
  },
};

export default config;
