import { test, expect } from '@playwright/test';

test.describe('Subject: $application.config', () => {
  test('Scenario 01: Content from ./config/application.yaml is injected automatically', async ({ page }) => {
    await page.goto('/sample-react-app');
    expect(await page.getByTestId('app_name').textContent()).toBe("Sample React App (from config)");
  })

  test('Scenario 02: Content from ./config/application.yaml is injected automatically considering environemnt to be productions', async ({ page }) => {
    await page.goto('/configuration-by-env-react-app');
    expect(await page.getByTestId('app_name').textContent()).toBe("Configuration by Env React App (from config)");
    expect(await page.getByTestId('db_host').textContent()).toBe("localhost.prod:5432");
  })
});
