class LoginPage {
    elements = {
        openLoginModalButton: () => cy.get('.is-inline-flex > :nth-child(2)'),
        usernameInput: () => cy.get(':nth-child(2) > .control > .input'),
        passwordInput: () => cy.get(':nth-child(3) > .control > .input'),
        submitLoginButton: () => cy.get('.button'),
        successPopup: () => cy.contains('Login Successful'),
        failurePopup: () => cy.contains('Login Failed')
    }
    
    login(username, password) {
        if (username) {
            this.elements.usernameInput().type(username)
        }
        if (password) {
            this.elements.passwordInput().type(password)
        }
        this.elements.submitLoginButton().click()
    }
    
    
    openLoginModal() {
        this.elements.openLoginModalButton().click()
    }

    verifyLoginSuccess() {
        this.elements.successPopup().should('be.visible')
    }

    verifyLoginFailure() {
        this.elements.failurePopup().should('be.visible')
    }
}

export default LoginPage
