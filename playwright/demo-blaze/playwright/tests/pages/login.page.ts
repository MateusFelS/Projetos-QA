import { Page } from '@playwright/test'

export class LoginPage {
  constructor(private readonly page: Page) {}

  async preencherCredenciais(usuario: string, senha: string) {
    await this.page.locator('#loginusername').fill(usuario)
    await this.page.locator('#loginpassword').fill(senha)
  }

  async entrar() {
    await this.page
      .locator('.btn.btn-primary')
      .filter({ hasText: 'Log in' })
      .click()
  }

  async fazerLogin(usuario: string, senha: string) {
    await this.preencherCredenciais(usuario, senha)
    await this.entrar()
  }
}
