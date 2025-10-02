import { expect, test } from "@playwright/test";

function makeid(length: number) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

test("Arturo Test", async ({ page }) => {
    await page.goto("");

    const email = makeid(30) + "@live.dk";

    await page.getByRole("link", { name: "Sign up" }).click();
    await page.getByRole("textbox", { name: "E-mail" }).click();
    await page.getByRole("textbox", { name: "E-mail" }).fill(email);
    await page.getByRole("textbox", { name: "Password", exact: true }).click();
    await page.getByRole("textbox", { name: "Password", exact: true }).fill("Testing");
    await page.getByRole("textbox", { name: "Repeat password" }).click();
    await page.getByRole("textbox", { name: "Repeat password" }).fill("Testing");
    await page.getByRole("button", { name: "Sign up" }).click();
    await page.getByRole("link", { name: "log in" }).click();
    await page.getByRole("textbox", { name: "E-mail" }).click();
    await page.getByRole("textbox", { name: "E-mail" }).fill(email);
    await page.getByRole("textbox", { name: "E-mail" }).press("Tab");
    await page.getByRole("textbox", { name: "Password" }).fill("Testing");
    await page.getByRole("button", { name: "Log in" }).click();
    await page
        .getByRole("article")
        .filter({ hasText: "men's clothingMens Casual Premium Slim Fit T-ShirtsSlim-fitting style, contrast" })
        .getByRole("button")
        .click();
    await page.getByRole("article").filter({ hasText: "electronicsSanDisk SSD PLUS" }).getByRole("spinbutton").click();
    await page.getByRole("article").filter({ hasText: "electronicsSanDisk SSD PLUS" }).getByRole("spinbutton").click();
    await page.getByRole("article").filter({ hasText: "electronicsSanDisk SSD PLUS" }).getByRole("spinbutton").click();
    await page.getByRole("article").filter({ hasText: "electronicsSanDisk SSD PLUS" }).getByRole("spinbutton").fill("2");
    await page.locator("div").filter({ hasText: "109" }).nth(1).click();
    await page.getByRole("article").filter({ hasText: "electronicsSanDisk SSD PLUS" }).getByRole("button").click();
    await page.getByRole("link", { name: "Cart" }).click();
    await page.getByRole("row", { name: "SanDisk SSD PLUS 1TB Internal" }).getByRole("spinbutton").click();
    await page.getByRole("row", { name: "SanDisk SSD PLUS 1TB Internal" }).getByRole("spinbutton").fill("3");
    await page.locator("div").filter({ hasText: "Mens Casual Premium Slim Fit" }).click();
    await page.getByRole("button", { name: "Check Out" }).click();
    await page.getByRole("group", { name: "Delivery address" }).getByLabel("Address").click();
    await page.getByRole("group", { name: "Delivery address" }).getByLabel("Address").fill("Guldbergsgade 29N");
    await page.getByRole("group", { name: "Delivery address" }).getByLabel("Postal code").click();
    await page.getByRole("group", { name: "Delivery address" }).getByLabel("Postal code").fill("2200");
    await page.getByRole("group", { name: "Delivery address" }).getByLabel("City").click();
    await page.getByRole("group", { name: "Delivery address" }).getByLabel("City").fill("Copenhagen");
    await page.getByText("Same as delivery address").click();
    await page.getByRole("textbox", { name: "Name on card" }).click();
    await page.getByRole("textbox", { name: "Name on card" }).fill("Pernille L. Hansen");
    await page.getByRole("textbox", { name: "Expiration" }).click();
    await page.getByRole("textbox", { name: "Expiration" }).fill("2027-12");
    await page.getByRole("textbox", { name: "CVV" }).click();
    await page.getByRole("textbox", { name: "CVV" }).fill("666");
    await page.locator("div").filter({ hasText: "Place Purchase" }).click();
    await page.getByRole("button", { name: "Place Purchase" }).click();
    await page.getByRole("link", { name: "Cart" }).click();

    // Confirm cart is empty
    await expect(page.locator("#alert")).toMatchAriaSnapshot(`- paragraph: The cart is empty. Please add some products to the cart.`);

    await page.getByRole("button", { name: "×" }).click();
    await page.getByRole("link", { name: "Log out" }).click();

    // Confirm that the option "Log in" is on the page
    await expect(page.getByRole("link", { name: "Log in" })).toBeVisible();
});
