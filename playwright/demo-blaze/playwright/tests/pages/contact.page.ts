import { Page } from '@playwright/test'

export class ContactPage {
  constructor(private readonly page: Page) {}

  async preencherMensagem(dados: {
    email: string
    nome: string
    mensagem: string
  }) {
    await this.page.locator('#recipient-email').fill(dados.email)
    await this.page.locator('#recipient-name').fill(dados.nome)
    await this.page.locator('#message-text').fill(dados.mensagem)
  }

  async enviar() {
    await this.page
      .locator('.btn.btn-primary')
      .filter({ hasText: 'Send message' })
      .click()
  }
}
