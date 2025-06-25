class CartPage {
    elements = {
        firstProductCard: () => cy.get('.card-footer-item').first(),
        addToCartButton: () => cy.get('.card-content > .columns > :nth-child(1) > .button'),
        cartIconButton: () => cy.get('.is-inline-flex > :nth-child(1)'),
        checkoutButton: () => cy.get('.has-text-centered > .button'),
        emptyCartMessage: () => cy.contains('Your cart is empty'),
        removeItemButton: () => cy.get(':nth-child(5) > .button'),
        cartQuantity: () => cy.get('span.mx-2')
    }

    addFirstProductToCart() {
        this.elements.firstProductCard().click().then(() => {
            this.elements.addToCartButton().click()
        })
    }
    

    goToCart() {
        this.elements.cartIconButton().click()
    }

    removeItemFromCart() {
        this.elements.removeItemButton().click()
    }

    clickCheckout() {
        this.elements.checkoutButton().click()
    }

    verifyEmptyCartMessage() {
        this.elements.emptyCartMessage().should('be.visible')
    }

    verifyCartStillHasItems() {
        this.elements.checkoutButton().should('have.text', 'Continue Shopping')
    }

    verifyCartQuantity(){
        this.elements.cartQuantity().should('have.text', '2') 
    }
}

export default CartPage
