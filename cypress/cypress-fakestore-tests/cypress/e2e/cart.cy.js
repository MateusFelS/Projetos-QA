import CartPage from "../pages/cartPage"

const cartPage = new CartPage()

describe('Funcionalidade de Carrinho de Compra', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Compra realizada com sucesso', () => {
    it('Deve finalizar a compra com sucesso', () => {
      cartPage.addFirstProductToCart()
      cartPage.goToCart()
      cartPage.clickCheckout()
      cartPage.verifyEmptyCartMessage()
    })
  })

  describe('Tentativa de checkout com carrinho vazio', () => {
    it('Deve mostrar que o carrinho está vazio e não permitir finalizar compra', () => {
      cartPage.goToCart()
      cartPage.verifyCartStillHasItems() 
      cartPage.verifyEmptyCartMessage()
    })
  })

  describe('Usuário decide cancelar a compra', () => {
    it('Deve remover item do carrinho e mostrar carrinho vazio', () => {
      cartPage.addFirstProductToCart()
      cartPage.goToCart()
      cartPage.removeItemFromCart()
      cartPage.verifyEmptyCartMessage()
    })
  })

  describe('Adicionar múltiplos produtos ao carrinho', () => {
    it('Deve adicionar vários produtos ao carrinho e verificar a quantidade correta', () => {
      cartPage.addFirstProductToCart()
      cy.visit('/') 
      cartPage.addFirstProductToCart() 
      cartPage.goToCart()
      cartPage.verifyCartQuantity()
    })
  })
})
