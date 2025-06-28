import { test, expect } from '@playwright/test';

test('Adicionar um produto no carrinho e prosseguir para o checkout', async ({ page }) => {
  await test.step('Entre na página inicial', async () => {
    await page.goto('/');
  });

  await test.step('Selecione o primeiro produto', async () => {
    await page.locator('[class="product-image-photo"]').first().click();
  });

  await test.step('Escolha o tamanho e a cor do produto', async () => {
    await page.locator('[id="option-label-size-143-item-166"]').click(); // Tamanho
    await page.locator('[id="option-label-color-93-item-56"]').click(); // Cor
  });

  await test.step('Adicione o produto ao carrinho', async () => {
    await page.locator('[id="product-addtocart-button"]').click();
  });

  await test.step('Abra o minicarrinho e verifique o subtotal', async () => {
    await page.locator('[class="minicart-wrapper"]').click();
    await expect(page.locator('[class="minicart-price"]')).toHaveText('$22.00');
  });

  await test.step('Navegue até a página de checkout', async () => {
    await page.locator('[class="minicart-wrapper"]').click();
    await page.locator('[id="top-cart-btn-checkout"]').click();
  });

  await test.step('Preencha o formulário de checkout', async () => {
    await page.waitForTimeout(5000); // Aguarda 5 segundos
    await page.locator('[id="customer-email"]').nth(0).fill('johndoe12@domain.com'); // Email
    await page.locator('[name="firstname"]').fill('John'); // Nome
    await page.locator('[name="lastname"]').fill('Doe'); // Sobrenome
    await page.locator('[name="company"]').fill('Google'); // Empresa
    await page.locator('[name="street[0]"]').fill('Rua xxx'); // Endereço
    await page.locator('[name="city"]').fill('XXX'); // Cidade
    await page.locator('[name="region_id"]').selectOption({ index: 1 }); // Região
    await page.locator('[name="postcode"]').fill('11111-1111'); // Código postal
    await page.locator('[name="country_id"]').selectOption({ index: 1 }); // País
    await page.locator('[name="telephone"]').fill('+55993223412'); // Telefone
  });

  await test.step('Selecione o método de envio e confirme o checkout', async () => {
    await page.locator('[name="ko_unique_3"]').click(); // Método de envio
    await page.locator('.button').click(); // Confirmar envio
  });

  await test.step('Finalize a compra', async () => {
    await page.locator('.payment-method-content > :nth-child(4) > div.primary > .action').click(); // Botão "Finalizar Pedido"
  });

  await test.step('Verifique a mensagem de confirmação de pedido', async () => {
    await expect(page.locator('.base')).toHaveText('Thank you for your purchase!');
  });
});
