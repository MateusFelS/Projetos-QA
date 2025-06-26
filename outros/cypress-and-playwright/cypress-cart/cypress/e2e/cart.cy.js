import CartPage from '../pages/cartPage';

const cartPage = new CartPage();

describe('E-commerce Checkout Flow', () => {
  it('Deve acessar a página inicial', () => {
    cy.visit('/');
  });

  it('Deve adicionar um produto ao carrinho', () => {
    cartPage.clickFirstProduct();
    cartPage.addToCart();
  });

  it('Deve verificar se o produto foi adicionado ao carrinho', () => {
    cartPage.verifyCartSubtotal('$22.00'); // Atualize o valor conforme necessário
  });

  it('Deve acessar a página de checkout', () => {
    cartPage.goToCheckout();
  });

  it('Deve preencher o formulário de checkout', () => {
    cartPage.fillCheckoutForm();
  });

  it('Deve confirmar o pedido', () => {
    cartPage.confirmOrder();
  });

  it('Deve verificar a mensagem de sucesso do pedido', () => {
    cartPage.verifyOrderConfirmation();
  });
});
