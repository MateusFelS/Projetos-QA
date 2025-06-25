class Cart {
  elements = {
    payButton: () => cy.get(".pay"),
    cartMessage: () => cy.get(".list p"),
    firstCartItem: () => cy.get(".list-item").first(),
    removeItemButton: () => cy.get('.delete'),
    removeAllCoffesButton: () => cy.get(':nth-child(3) > :nth-child(4) > .delete'),
    increaseItemQuantityButton: () => cy.get(':nth-child(2) > .unit-controller > [aria-label="Add one Espresso"]'),
    itemTotalPrice: () => cy.get('.list-item > :nth-child(3)'),
    promoItem: () => cy.get('ul[data-v-8965af83=""] > :nth-child(2) > :nth-child(1)')
  }

  verifyCartHasItems() {
    this.elements.cartMessage().should('not.contain', 'No coffee, go add some.')
  }

  verifyCartIsEmpty() {
    this.elements.cartMessage().should('contain', 'No coffee, go add some.')
  }

  verifyItemIsDiscounted() {
    this.elements.firstCartItem().should('contain', 'Discounted')
  }

  removeItemFromCart() {
    this.elements.removeItemButton().click()
  }

  increaseItemQuantity() {
    this.elements.increaseItemQuantityButton().click()
  }

  verifyTotalPriceIsCorrect() {
    this.elements.itemTotalPrice().should('contain', '$20.00')
  }

  removeAllCoffes(){
    this.elements.removeAllCoffesButton().click()
  }

  verifyPromoItemIsActive(){
    this.elements.promoItem().should('not.contain', '(Discounted)')
  }
}

export default Cart;
