// @ts-check
import { test, expect } from '@playwright/test';



test("login page",async ({ page }) => {
  await page.goto('http://localhost:3004');
  await expect(page).toHaveTitle("Login");
});

test("login with valid credentials",async ({ page }) => {

  await page.goto('http://localhost:3004');
  await page.locator("#signupLink").click();
 
  await page.locator("#regEmail").fill("vinayksgowda123@gmail.com");
  await page.locator("#regPassword").fill("vinay@123");
  await page.locator("#signUpButton").click();

  await page.goto('http://localhost:3004');
  await page.locator("#loginEmail").fill("vinayksgowda123@gmail.com");
  await page.locator("#loginPassword").fill("vinay@123");
  await page.locator('#submitButton').click();
  await page.screenshot({ path: 'screenshot.png',fullPage: true });
  await expect(page).toHaveTitle("Cloth Shop - Home");
});



test('testing amazon page', async ({ page }) => {
  await page.goto('https://www.amazon.com/');

  
const submitButton = page.getByRole('button', { name: 'Submit' });

if (await submitButton.count() > 0 && await submitButton.first().isVisible()) {
  await submitButton.first().click();
}

  await page.getByRole('link', { name: 'Today\'s Deals' }).click();
  await page.getByRole('link', { name: 'Samsung Galaxy S26 Ultra, Unlocked Android Smartphone + $200 Gift Card, 512GB, Privacy Display, Galaxy AI, AI Camera, Super Fast Charging 3.0, Durable Battery, 2026, US 1 Year Warranty, Sky Blue', exact: true }).click();
  await page.getByRole('button', { name: 'Pre-order now' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).fill('vinayksgowda');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Invalid email address').click();
  await page.screenshot({ path: 'screenshot1.png',fullPage: true });
  
  await expect(page.getByText('Invalid email address')).toBeVisible();
  
});                       


test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  
  await expect(page).toHaveTitle(/Playwright/);
});
  

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
