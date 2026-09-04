import { expect, Page } from '@playwright/test'

export class CartPage {
  constructor(private readonly page: Page) {}

  async adicionarProduto() {
    await this.page
      .locator('.btn.btn-success.btn-lg')
      .filter({ hasText: 'Add to cart' })
      .click()
  }

  async removerProduto() {
    await this.page.locator('text=Delete').click()

    await this.page.waitForSelector('#tbodyid tr', {
      state: 'detached',
      timeout: 5000,
    })
  }

  async finalizarCompra(dados: {
    nome: string
    pais: string
    cidade: string
    cartao: string
    mes: string
    ano: string
  }) {
    await this.page
      .locator('.btn.btn-success')
      .filter({ hasText: 'Place Order' })
      .click()

    await this.page.fill('#name', dados.nome)
    await this.page.fill('#country', dados.pais)
    await this.page.fill('#city', dados.cidade)
    await this.page.fill('#card', dados.cartao)
    await this.page.fill('#month', dados.mes)
    await this.page.fill('#year', dados.ano)

    await this.page
      .locator('.btn.btn-primary')
      .filter({ hasText: 'Purchase' })
      .click()
  }

  async esperarCarrinhoVazio() {
    await expect(this.page.locator('#page-wrapper'))
      .toHaveText('Your cart is empty')
  }

  async quantidadeDeItens() {
    return this.page.locator('#tbodyid tr').count()
  }

  async esperarMensagemCompraRealizada() {
    await expect(this.page.locator('.sweet-alert'))
      .toHaveText(/Thank you for your purchase/)
  }
}
