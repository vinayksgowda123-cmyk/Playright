export class ContactPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#loginEmail');
    // Using data-testid as it's a best practice mentioned in Playwright docs
    this.password = page.locator('#loginPassword');
    this.submitButton = page.locator("#submitButton");
  }
    
  async navigate() {
    // Replace with your actual local or hosted URL
    await this.page.goto('http://localhost:3004/');
  }

  async fillForm(email, password) {
    await this.emailInput.fill(email);
    await this.password.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }
}