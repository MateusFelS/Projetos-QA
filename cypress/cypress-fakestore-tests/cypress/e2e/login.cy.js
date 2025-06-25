import LoginPage from "../pages/loginPage"

const loginPage = new LoginPage()

describe('Funcionalidade de Login', () => {
  beforeEach(() => {
    cy.visit('/')
    loginPage.openLoginModal()
  })

  describe('Login com credenciais válidas', () => {
    it('Deve fazer login com sucesso', () => {
      loginPage.login('mor_2314', '83r5^_')
      loginPage.verifyLoginSuccess()
    })
  })

  describe('Login com credenciais inválidas', () => {
    it('Deve falhar ao fazer login', () => {
      loginPage.login('invalid_username', 'invalid_password')
      loginPage.verifyLoginFailure()
    })
  })

  describe('Login com campos em branco', () => {
    it('Deve falhar ao tentar login sem preencher os campos', () => {
      loginPage.login('', '')
      loginPage.verifyLoginFailure()
    })
  })
})
