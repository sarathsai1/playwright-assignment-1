import { test, expect } from "@playwright/test";
import { readJson } from "../utils/jsonReader.js";

const testData = readJson("test-data/credentials.json");

test.describe("Data Driven Login Tests", () => {
  testData.forEach((data, index) => {
    test(`Login dataset #${index + 1} - ${data.username}`, async ({ page }) => {
      await page.goto("https://the-internet.herokuapp.com/login");

      await page.fill("#username", data.username);
      await page.fill("#password", data.password);
      await page.click('button[type="submit"]');

      const flash = page.locator("#flash");

      if (data.expected === "success") {
        await expect(flash).toContainText("You logged into a secure area!");
      } else {
        await expect(flash).toHaveText(/Your (username|password) is invalid!/);
      }
    });
  });
});
