class Menu {
    elements = {
      firstProduct: () => cy.get(".cup").first(),
      cartPageLink: () => cy.get("a[href='/cart']"),
      promoMessage: () => cy.get(".promo span"),
      promoSection: () => cy.get(".promo"),
      promoConfirmButton: () => cy.get(".yes"),
    }
  
    selectFirstProduct() {
      this.elements.firstProduct().click()
    }
  
    goToCartPage() {
      this.elements.cartPageLink().click()
    }
  
    confirmPromo() {
      this.elements.promoConfirmButton().click()
    }
  
    verifyPromoDisplayed() {
      this.elements.promoMessage().should('contain', "It's your lucky day! Get an extra cup of Mocha for $4.")
    }
  
    verifyNoPromoDisplayed() {
      this.elements.promoSection().should('not.exist')
    }
  }
  
  export default Menu;
  