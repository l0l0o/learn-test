import { test, expect } from "@playwright/test";

test("Vérifier que le rajout de tâche fonctionne", async ({ page }) => {
  await page.goto("/");

  const buttonAdd = await page.getByTestId("buttonAdd");
  await buttonAdd.click();

  const dialog = await page.getByRole("dialog");

  const textBox = await dialog.getByPlaceholder("Ajouter une todo");
  await textBox.fill("Coucou c'est la nouvelle tâche");

  const taskStatus = await dialog.getByRole("combobox");
  await taskStatus.selectOption("EN COURS");

  const buttonAddTask = await dialog.getByRole("button", {
    name: "Ajouter",
  });
  await buttonAddTask.click();

  const newTodoItem = await page
    .getByTestId("todo-item")
    .getByText("Coucou c'est la nouvelle tâche");

  await expect(newTodoItem).toBeVisible();
});

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
