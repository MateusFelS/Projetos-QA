# Projeto de Testes - FakeStore (LetCode)

## Introdução
Este projeto tem como objetivo testar o fluxo de login e de carrinho de compras da plataforma **FakeStore**, um e-commerce fictício disponibilizado pela LetCode, garantindo que suas funcionalidades essenciais estejam funcionando corretamente.

Os testes são **100% automatizados**, utilizando **Cypress**, e integrados ao **GitHub Actions** para execução contínua.

---

## Sobre os Testes

### Escopo
As seguintes funcionalidades foram testadas:

- **Fluxo de Login**: Credenciais válidas, inválidas e campos em branco.
- **Fluxo de Carrinho**: Adicionar itens, remover itens, checkout e carrinho vazio.
- **Múltiplos Produtos**: Adição de vários itens e validação da quantidade total no carrinho.

### Critérios de Aceitação
- O usuário deve conseguir realizar login corretamente com credenciais válidas.
- O usuário deve conseguir adicionar e remover itens do carrinho sem erros.
- O usuário deve conseguir concluir o checkout com sucesso.
- As mensagens de erro e feedback devem ser claras e objetivas.

### Ambientes e Ferramentas
- **Ambiente de Teste**: Ambiente de demonstração público (LetCode).
- **Ferramentas Utilizadas**: Cypress, GitHub Actions e Github (para documentação e reporte de bugs).

---

## Automação de Testes

A automação foi realizada utilizando **Cypress**, garantindo a execução dos principais fluxos automaticamente.

### Tecnologias Utilizadas
- **Linguagem**: JavaScript
- **Framework de Teste**: Cypress

---

## Integração Contínua

Os testes estão configurados para serem executados automaticamente sempre que houver uma nova alteração no código, utilizando o **GitHub Actions**. Isso garante que qualquer nova implementação seja testada antes de ser mesclada ao código principal, aumentando a confiança na qualidade do software.

---

## Estrutura do Projeto

```bash
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js        # Testes de login
│   │   ├── cart.cy.js         # Testes do carrinho de compras
│   ├── pages/
│   │   ├── loginPage.js       # Elementos e ações da página de login
│   │   ├── cartPage.js        # Elementos e ações da página de carrinho
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
   git clone https://github.com/MateusFels/cypress-fakestore-tests.git
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
Este projeto garante a qualidade da FakeStore, validando o comportamento dos fluxos de login e carrinho de compras, incluindo cenários de erro e a finalização de pedidos.

Se você quiser contribuir, sinta-se à vontade para abrir um Pull Request ou reportar um Issue!
