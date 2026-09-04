import { test, expect } from '@playwright/test'
import { HomePage } from './pages/home.page'
import { ContactPage } from './pages/contact.page'
import { contato } from './data/test-data'

test('Enviar mensagem pelo formulário de contato', async ({ page }) => {
  const home = new HomePage(page)
  const contact = new ContactPage(page)

  await home.acessar()
  await home.acessarContato()

  page.once('dialog', async dialog => {
    await expect(dialog.message()).toBe('Thanks for the message!!')
    await dialog.accept()
  })

  await contact.preencherMensagem(contato)
  await contact.enviar()
})
