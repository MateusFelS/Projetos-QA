import { test, expect } from '@playwright/test'
import { HomePage } from './pages/home.page'

test('Filtrar por Laptops', async ({ page }) => {
  const home = new HomePage(page)

  await home.acessar()
  await home.selecionarCategoria('Laptops')

  await expect(page.locator('.hrefch').first())
    .toHaveText('Sony vaio i5')
})
