import Menu from '../pages/menu_page.js';
import Cart from '../pages/cart_page.js';

import _ from 'lodash';

const menu = new Menu() 
const cart = new Cart()

describe('Carrinho de compras', () => {
  describe('Adicionar produto válido no carrinho', () => {  
    it('Entrar na página inicial', () => {
      cy.visit('/')
    })

    it('Adicionar um Café Expresso', () => {
      menu.selectFirstProduct()
    })
    
    it('Selecionar a tela do carrinho', () => {
      menu.goToCartPage()
    })

    it('Verificar se existe algum produto no carrinho', () => {
      cart.verifyCartHasItems()
    })
  })

  describe('Entrar no carrinho sem nenhum item', () => {
    it('Entrar na página inicial', () =>{
      cy.visit('/')
    })

    it('Selecionar a tela do carrinho', () => {
      menu.goToCartPage()
    })

    it("Verificar se aparece a mensagem 'No coffee, go add some.'", () => {
      cart.verifyCartIsEmpty()
    })
  })

  describe('Item com desconto no carrinho', () => {
    it('Entrar na página inicial', () => {
      cy.visit('/')
    })

    it('Adicionar 3 Café Expresso', () => {
      _.times(3, () => {
        menu.selectFirstProduct()
      });
    })

    it('Aceitar o item promocional', () => {
      menu.confirmPromo()
    })

    it('Selecionar a tela do carrinho', () => {
      menu.goToCartPage()
    })

    it('Verificar item com desconto', () => {
      cart.verifyItemIsDiscounted()
    })
  })

  describe('Remover item do carrinho', () => {
    it('Entrar na página inicial', () => {
      cy.visit('/')
    })

    it('Adicionar um Café Expresso', () => {
      menu.selectFirstProduct()
    })

    it('Selecionar a tela do carrinho', () => {
      menu.goToCartPage()
    })

    it('Remover o item do carrinho', () => {
      cart.removeItemFromCart()
    })

    it('Verificar carrinho vazio', () => {
      cart.verifyCartIsEmpty()
    })
  })

  describe('Aumentar quantidade do item no carrinho', () => {
    it('Entrar na página inicial', () => {
      cy.visit('/')
    })

    it('Adicionar um Café Expresso', () => {
      menu.selectFirstProduct()
    })

    it('Selecionar a tela do carrinho', () => {
      menu.goToCartPage()
    })

    it('Aumentar a quantidade do item', () => {
      cart.increaseItemQuantity()
    })

    it('Verificar se preço total é igual a $20.00', () => {
      cart.verifyTotalPriceIsCorrect()
    })
  })
})
