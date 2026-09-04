import { test, expect } from '@playwright/test'
import { HomePage } from './pages/home.page'
import { LoginPage } from './pages/login.page'
import { usuarios } from './data/test-data'

test.describe('Login', () => {
  test('Login com credenciais válidas', async ({ page }) => {
    const home = new HomePage(page)
    const login = new LoginPage(page)

    await home.acessar()
    await home.acessarLogin()
    await login.fazerLogin(
      usuarios.valido.username,
      usuarios.valido.password
    )

    await expect(page.locator('#nameofuser'))
      .toHaveText('Welcome testeqa_01')
  })

  test('Login com credenciais inválidas', async ({ page }) => {
    const home = new HomePage(page)
    const login = new LoginPage(page)

    await home.acessar()
    await home.acessarLogin()

    page.once('dialog', async dialog => {
      await expect(dialog.message()).toBe('Wrong password.')
      await dialog.accept()
    })

    await login.fazerLogin(
      usuarios.invalido.username,
      usuarios.invalido.password
    )
  })

  test('Login com campos vazios', async ({ page }) => {
    const home = new HomePage(page)
    const login = new LoginPage(page)

    await home.acessar()
    await home.acessarLogin()

    page.once('dialog', async dialog => {
      await expect(dialog.message())
        .toBe('Please fill out Username and Password.')
      await dialog.accept()
    })

    await login.fazerLogin('', '')
  })
})
