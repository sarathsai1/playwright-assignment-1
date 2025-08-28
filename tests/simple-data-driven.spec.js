import { test, expect } from "@playwright/test";
import credentials from "../test-data/credentials.json" assert { type: "json" };

test.describe("Simple JSON Data Driven Test", () => {
  for (const user of credentials) {
    test(`Login check for ${user.username}`, async ({ page }) => {
      await page.goto("https://the-internet.herokuapp.com/login");

      await page.fill("#username", user.username);
      await page.fill("#password", user.password);
      await page.click('button[type="submit"]');

      const flash = page.locator("#flash");

      if (user.expected === "success") {
        await expect(flash).toContainText("You logged into a secure area!");
      } else {
        await expect(flash).toHaveText(/Your (username|password) is invalid!/);
      }
    });
  }
});
