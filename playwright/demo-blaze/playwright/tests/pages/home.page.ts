import { Page } from '@playwright/test'

export class HomePage {
  constructor(private readonly page: Page) {}

  async acessar() {
    await this.page.goto('https://www.demoblaze.com')
  }

  async acessarCarrinho() {
    await this.page.locator('#cartur').click()
  }

  async acessarLogin() {
    await this.page.locator('#login2').click()
  }

  async acessarContato() {
    await this.page.locator('.nav-link').filter({ hasText: 'Contact' }).click()
  }

  async selecionarCategoria(categoria: string) {
    await this.page.locator('#itemc').filter({ hasText: categoria }).click()
  }

  async selecionarProduto(produto: string) {
    await this.page
      .locator('.hrefch')
      .filter({ hasText: produto })
      .click()
  }
}
