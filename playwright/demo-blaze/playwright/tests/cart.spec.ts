import { test, expect } from '@playwright/test'
import { HomePage } from './pages/home.page'
import { CartPage } from './pages/cart.page'
import { pedido, produto } from './data/test-data'

test.describe('Carrinho', () => {
  test('Fluxo de navegação - Página do carrinho', async ({ page }) => {
    const home = new HomePage(page)

    await home.acessar()
    await home.acessarCarrinho()

    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
  })

  test('Adicionar item ao carrinho', async ({ page }) => {
    const home = new HomePage(page)
    const cart = new CartPage(page)

    await home.acessar()
    await home.selecionarProduto(produto)

    page.once('dialog', async dialog => {
      await expect(dialog.message()).toBe('Product added')
      await dialog.accept()
    })

    await cart.adicionarProduto()
  })

  test('Remover item do carrinho', async ({ page }) => {
    const home = new HomePage(page)
    const cart = new CartPage(page)

    await home.acessar()
    await home.selecionarProduto(produto)

    page.once('dialog', async dialog => {
      await dialog.accept()
    })

    await cart.adicionarProduto()
    await home.acessarCarrinho()
    await cart.removerProduto()

    await expect(await cart.quantidadeDeItens()).toBe(0)
  })

  test('Mensagem de carrinho vazio', async ({ page }) => {
    const home = new HomePage(page)
    const cart = new CartPage(page)

    await home.acessar()
    await home.selecionarProduto(produto)

    page.once('dialog', async dialog => {
      await dialog.accept()
    })

    await cart.adicionarProduto()
    await home.acessarCarrinho()

    await cart.esperarCarrinhoVazio()
  })

  test('Adicionar item ao carrinho e finalizar compra', async ({ page }) => {
    const home = new HomePage(page)
    const cart = new CartPage(page)

    await home.acessar()
    await home.selecionarProduto(produto)

    page.once('dialog', async dialog => {
      await dialog.accept()
    })

    await cart.adicionarProduto()
    await home.acessarCarrinho()

    await cart.finalizarCompra(pedido)
    await cart.esperarMensagemCompraRealizada()
  })
})
