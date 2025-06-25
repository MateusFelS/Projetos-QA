import Menu from '../pages/menu_page.js';
import Cart from '../pages/cart_page.js';

import _ from 'lodash';

const menu = new Menu() 
const cart = new Cart()

describe('Promoção', () => {
    describe('Verificar promoção após 3 itens no carrinho', () => {
      it('Entrar na página inicial', () => {
        cy.visit('/')
      })
  
      it('Adicionar 3 Café Expresso', () => {
        _.times(3, () => {
          menu.selectFirstProduct();
        });
      })
  
      it('Verificar mensagem promocional', () => {
        menu.verifyPromoDisplayed()
      })
    })
  
    describe('Sem promoção disponível com menos de 3 itens no carrinho', () => {
      it('Entrar na página inicial', () => {
        cy.visit('/')
      })
  
      it('Adicionar apenas 2 Café Expresso', () => {
        menu.selectFirstProduct();
      })
  
      it('Verificar se a mensagem promocional não está disponível', () => {
        menu.verifyNoPromoDisplayed()
      })
    })

    describe('Promoção disponível com diferentes produtos', () => {
      it('Entrar na página inicial', () => {
        cy.visit('/')
      })
  
      it('Adicionar 3 Café Expresso', () => {
        _.times(3, () => {
          menu.selectFirstProduct();
        });
      })

      it('Aceitar a promoção', () => {
        menu.confirmPromo()
      })

      it('Selecionar a tela de carrinho', () => {
        menu.goToCartPage()
      })

      it('Remover os Café Expresso', () => {
        cart.removeAllCoffes()
      })
    
      it('Verificar se a promoção está disponível', () => {
        //cart.verifyPromoItemIsActive()
      })
    })

    describe('Limite de uma promoção por usuário', () => {
      it('Entrar na página inicial', () => {
        cy.visit('/')
      })
  
      it('Adicionar 3 Café Expresso', () => {
        _.times(3, () => {
          menu.selectFirstProduct();
        });
      })
    
      it('Aceitar a promoção', () => {
        menu.confirmPromo()
      })

      it('Adicionar 2 novos Café Expresso', () => {
        _.times(2, () => {
          menu.selectFirstProduct();
        });
      })
      
      it('Verificar se a promoção foi acionada novamente', () => {
        menu.verifyPromoDisplayed()
      })
    })
  })