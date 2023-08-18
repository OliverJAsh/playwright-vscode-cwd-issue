import { test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto(
    `data:text/html;charset=utf-8,${encodeURIComponent(
      '<input type="file" />'
    )}`
  );

  const fileChooserPromise = page.waitForEvent('filechooser');

  await page.getByRole('textbox').click();

  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('./assets/spacer.gif');
});
