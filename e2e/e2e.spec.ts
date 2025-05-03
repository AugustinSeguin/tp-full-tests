import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Change value of number input moon", () => {
  test("pass value of input 1 to 2 the value is 2", async ({ page }) => {
    await page.locator("#moon").fill("2");
    await expect(page.locator("input#moon").inputValue()).toBe("2");
  });
  test("pass value of input 2 to 1 the value is 1", async ({ page }) => {
    await page.locator("#moon").fill("1");
    await expect(page.locator("input#moon").inputValue()).toBe("1");
  });
  test("pass value of input 1 to 3 the value is 1", async ({ page }) => {
    await page.locator("#moon").fill("3");
    await expect(page.locator("input#moon").inputValue()).toBe("1");
  });
});

test.describe("Check function of calcul hour ", () => {
  test("Moon =2, sun =1, earth=1", async ({ page }) => {
    await page.locator("#moon").fill("2");
    await page.locator("#sun").fill("1");
    await page.locator("#earth").fill("1");
    await page.locator("button").click();
    await expect(page.locator("#result")).toHaveText("Mortin");
  });
  test("moon=2, sun=2, earth=2", async ({ page }) => {
    await page.locator("#moon").fill("2");
    await page.locator("#sun").fill("2");
    await page.locator("#earth").fill("2");
    await page.locator("button").click();
    await expect(page.locator("#result")).toHaveText("Nuight");
  });
});

test.describe("screenshot", () => {
  test("screen shot App moon=0, sun=0, earth=0: button non display", async ({
    page,
  }) => {
    await page.locator(".App").screenshot({
      path: "tests-screenshot/screenshot-button-not-display.png",
    });
  });
  test("click sur le bouton result valid champs: moon=2, sun=2, earth=2", async ({
    page,
  }) => {
    await page.locator("#moon").fill("1");
    await page.locator("#sun").fill("1");
    await page.locator("#earth").fill("1");
    await page.locator("button").click();
    await page.locator(".App").screenshot({
      path: "tests-screenshot/click-button-result.png",
    });
  });
  test("screen shot App moon=0, sun=0, earth=0: result non display", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/");
    await page.locator(".App").screenshot({
      path: "tests-screenshot/screenshot-result-not-display.png",
    });
  });
  test("screen shot App pass value of inputs: the values of input juste be 1 or 2", async ({
    page,
  }) => {
    await page.locator("#moon").fill("3");
    await page.locator("#sun").fill("0");
    await page.locator(".App").screenshot({
      path: "tests-screenshot/screenshot-input-values-1or2.png",
    });
  });
});
