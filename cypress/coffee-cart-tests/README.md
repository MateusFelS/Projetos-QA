# Projeto de Testes - Coffee Cart

## Introdução
Este projeto tem como objetivo testar o fluxo de carrinho de compras da plataforma **Coffee Cart**, garantindo que suas funcionalidades essenciais — adição e remoção de itens, controle de quantidade e regra de promoção — estejam funcionando corretamente.

Os testes são **100% automatizados**, utilizando **Cypress**.

---

## Sobre os Testes

### Escopo
As seguintes funcionalidades foram testadas:

- **Carrinho de Compras**: Adicionar itens, remover itens, verificar carrinho vazio e alterar quantidade com recálculo de preço.
- **Promoção**: Ativação da promoção ao atingir 3 itens, ausência de promoção com menos de 3 itens, comportamento após remoção dos itens e limite de uso por usuário.

### Critérios de Aceitação
- O usuário deve conseguir adicionar e remover produtos do carrinho sem erros.
- O carrinho deve refletir corretamente a quantidade e o preço total dos itens.
- A promoção deve seguir as regras de negócio esperadas, sem ser aplicada indevidamente.

### Ambientes e Ferramentas
- **Ambiente de Teste**: Produção (demo pública).
- **Ferramentas Utilizadas**: Cypress e Github (para documentação e reporte de bugs).

---

## Automação de Testes

A automação foi realizada utilizando **Cypress**, garantindo a execução dos principais fluxos automaticamente.

### Tecnologias Utilizadas
- **Linguagem**: JavaScript
- **Framework de Teste**: Cypress

---

## Problemas e Riscos

Durante a execução dos testes, foram identificados dois problemas principais:

1. **Cupom de desconto acionado infinitamente para o mesmo usuário**
   - **Descrição**: O cupom de desconto pode ser aplicado várias vezes para o mesmo usuário, sem limite.
   - **Risco**: Esse comportamento pode resultar em perda de receita, pois o usuário pode acumular descontos indevidamente. Além disso, compromete a credibilidade das promoções, impactando a imagem e a lucratividade do negócio.

2. **Cupom continua ativo mesmo após a remoção dos itens necessários para sua ativação**
   - **Descrição**: Após o usuário remover itens do carrinho que ativaram o cupom de desconto, o desconto ainda permanece aplicado.
   - **Risco**: Esse problema gera inconsistência na experiência do usuário e pode causar confusão quanto ao funcionamento correto do carrinho. Além disso, o cliente pode continuar recebendo o desconto mesmo sem atender aos requisitos, o que representa uma perda financeira.

Ambos os problemas estão detalhados e evidenciados nos casos CT-008 e CT-009 dos [Casos de Teste](./documentacao/casos-de-teste.md).

---

## Estrutura do Projeto

```bash
├── cypress/
│   ├── e2e/
│   │   ├── cart.cy.js         # Testes do carrinho de compras
│   │   ├── promo.cy.js        # Testes de promoção
│   ├── pages/
│   │   ├── cart_page.js       # Elementos e ações da página de carrinho
│   │   ├── menu_page.js       # Elementos e ações do menu do site
│   ├── support/
│   │   ├── commands.js        # Comandos customizados do Cypress
│   │   ├── e2e.js             # Configurações globais para o Cypress
├── documentacao/
│   ├── plano-de-teste.md      # Plano de testes do projeto
│   ├── casos-de-teste.md      # Casos de teste detalhados
├── README.md                  # Documentação do projeto
```

---

## Instalação e Execução

Para rodar os testes em sua máquina local, siga os passos abaixo:

1. **Clone este repositório**:

   ```bash
   git clone https://github.com/MateusFels/coffee-cart_tests.git
   cd "seu_repositorio"
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Execute os testes**:

   - Para rodar os testes em modo interativo:

     ```bash
     npx cypress open
     ```

   - Para rodar os testes em modo headless (sem interface):

     ```bash
     npx cypress run
     ```

---

## Conclusão
Este projeto garante a qualidade do Coffee Cart, identificando erros de regra de negócio na promoção e automatizando os testes dos principais fluxos do carrinho.

Se você quiser contribuir, sinta-se à vontade para abrir um Pull Request ou reportar um Issue!
