import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

test.describe('Testes de acessibilidade no SauceDemo', () => {
  
  // Função para analisar acessibilidade e exibir erros
  async function checkA11y(page, stepName) {
    const results = await new AxeBuilder({ page }).analyze();
    
    console.log(`\n🔍 Teste de acessibilidade: ${stepName}`);
    if (results.violations.length > 0) {
      console.log(`❌ ${results.violations.length} problemas encontrados:`);
      results.violations.forEach((violation, index) => {
        console.log(`\n${index + 1}. ${violation.description}`);
        console.log(`Impacto: ${violation.impact}`);
        console.log(`Elementos afetados:`, violation.nodes.map((node) => node.target));
      });
    } else {
      console.log('✅ Nenhum problema encontrado.');
    }

    expect(results.violations).toHaveLength(0);
  }

  test('Tela de Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await checkA11y(page, 'Tela de Login');
  });

  test('Tela de Produtos (Pós-Login)', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory/);

    await checkA11y(page, 'Tela de Produtos');
  });

  test('Tela do Carrinho', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('text=Add to cart');
    await page.click('.shopping_cart_link');

    await checkA11y(page, 'Tela do Carrinho');
  });

  test('Tela de Checkout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('text=Add to cart');
    await page.click('.shopping_cart_link');
    await page.click('#checkout');

    await checkA11y(page, 'Tela de Checkout');
  });

});
