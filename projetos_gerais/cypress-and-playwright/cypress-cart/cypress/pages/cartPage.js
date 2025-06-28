class CartPage {
    elements = {
      // Produto
      firstProduct: () => cy.get('.product-item').first(),
      sizeOption: () => cy.get('#option-label-size-143-item-166'),
      colorOption: () => cy.get('#option-label-color-93-item-56'),
      addToCartButton: () => cy.get('#product-addtocart-button'),
  
      // Carrinho
      cartIcon: () => cy.get('.showcart'),
      cartSubtotal: () => cy.get('.minicart-price > .price'),
      checkoutButton: () => cy.get('#top-cart-btn-checkout'),
  
      // Formulário de checkout
      emailInput: () => cy.get('#customer-email'),
      firstNameInput: () => cy.get('[name="firstname"]'),
      lastNameInput: () => cy.get('[name="lastname"]'),
      companyInput: () => cy.get('[name="company"]'),
      streetAddressInput: () => cy.get('[name="street[0]"]'),
      cityInput: () => cy.get('[name="city"]'),
      regionSelect: () => cy.get('[name="region_id"]'),
      postCodeInput: () => cy.get('[name="postcode"]'),
      countrySelect: () => cy.get('[name="country_id"]'),
      telephoneInput: () => cy.get('[name="telephone"]'),
      shippingMethodRadio: () => cy.get('[name="ko_unique_3"]'),
      confirmShippingButton: () => cy.get('.button'),
  
      // Confirmação de pedido
      placeOrderButton: () => cy.get('.payment-method-content > :nth-child(4) > div.primary > .action'),
      orderConfirmationMessage: () => cy.get('.base')
    }
  
    // Métodos
    clickFirstProduct() {
      this.elements.firstProduct().click()
    }
  
    addToCart() {
      this.elements.sizeOption().click()
      this.elements.colorOption().click()
      this.elements.addToCartButton().click()
    }
  
    verifyCartSubtotal(expectedPrice) {
      this.elements.cartIcon().click()
      this.elements.cartSubtotal().should('have.text', expectedPrice)
    }
  
    goToCheckout() {
      this.elements.cartIcon().click()
      this.elements.checkoutButton().click()
    }
  
    fillCheckoutForm() {
      this.elements.emailInput().type('johndoe12@domain.com')
      this.elements.firstNameInput().type('John')
      this.elements.lastNameInput().type('Doe')
      this.elements.companyInput().type('Google')
      this.elements.streetAddressInput().type('Rua xxx')
      this.elements.cityInput().type('XXX')
      this.elements.regionSelect().select(1) // Selecione a primeira região
      this.elements.postCodeInput().type('11111-1111')
      this.elements.countrySelect().select(1) // Selecione o primeiro país
      this.elements.telephoneInput().type('+55993223412')
      this.elements.shippingMethodRadio().click()
      this.elements.confirmShippingButton().click()
    }
  
    confirmOrder() {
      this.elements.placeOrderButton().click()
    }
  
    verifyOrderConfirmation() {
      this.elements.orderConfirmationMessage().should('have.text', 'Thank you for your purchase!')
    }
  }
  
  export default CartPage
  