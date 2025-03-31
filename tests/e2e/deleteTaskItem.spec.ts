import { expect, test } from "@playwright/test";

test("Vérifier que la suppression de tâche fonctionne", async ({ page }) => {
  await page.goto("/");

  const firstTodoItem = await page
    .getByTestId("todo-item")
    .filter({ hasText: "Hello la todo" });
  const deleteButtton = await firstTodoItem.getByTestId("button-delete");

  await deleteButtton.click();

  expect(firstTodoItem).toBeHidden();
});
