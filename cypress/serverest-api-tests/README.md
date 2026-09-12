# Projeto de Testes - Serverest API

## Introdução
Este projeto tem como objetivo testar a **API Serverest**, uma API pública voltada para prática de testes, garantindo que os endpoints de gerenciamento de usuários e produtos estejam funcionando corretamente.

Os testes são **100% automatizados**, utilizando **Cypress** (comando nativo `cy.request`) para validar as requisições e respostas da API.

---

## Sobre os Testes

### Escopo
As seguintes funcionalidades foram testadas:

- **Usuários**: Consulta, criação, edição e exclusão.
- **Autenticação**: Login e obtenção de token de autorização.
- **Produtos**: Consulta, criação autenticada, edição e exclusão.

### Critérios de Aceitação
- A API deve permitir o CRUD completo de usuários e produtos.
- A API deve retornar os códigos de status corretos para cada operação.
- A API deve permitir a autenticação e devolver um token válido.

### Ambientes e Ferramentas
- **Ambiente de Teste**: Ambiente público do Serverest (serverest.dev).
- **Ferramentas Utilizadas**: Cypress, JavaScript e Github (para documentação e reporte de bugs).

---

## Automação de Testes

A automação foi realizada utilizando o comando nativo `cy.request` do **Cypress**, encapsulado em comandos customizados (`getAPI`, `postAPI`, `putAPI`, `deleteAPI`), cobrindo o CRUD completo de usuários e produtos.

### Tecnologias Utilizadas
- **Linguagem**: JavaScript
- **Framework de Teste**: Cypress (cy.request)

---

## Testes de API

Os testes de API foram automatizados com **Cypress**. Abaixo estão os principais testes realizados:

### Endpoints Testados

1. **Usuários**
   - **Endpoint**: `GET/POST/PUT/DELETE /usuarios`
   - **Cenários**:
     - Consulta da lista de usuários.
     - Criação de usuário com dados válidos e únicos.
     - Consulta de usuário recém-criado.
     - Edição de dados de um usuário existente.
     - Exclusão de usuário.

2. **Autenticação**
   - **Endpoint**: `POST /login`
   - **Cenários**:
     - Login com credenciais válidas e obtenção de token.

3. **Produtos**
   - **Endpoint**: `GET/POST/PUT/DELETE /produtos`
   - **Cenários**:
     - Consulta da lista de produtos.
     - Criação de produto autenticado.
     - Consulta de produto recém-criado.
     - Edição de dados de um produto existente.
     - Exclusão de produto.

---

## Problemas e Riscos

Durante a execução dos testes, foi identificado um problema principal:

1. **Algumas requisições retornando código de status incorreto**
   - **Descrição**: A requisição de login (`POST /login`) retorna o código de status 200, quando o padrão esperado para uma criação de sessão via POST seria 201.
   - **Risco**: Pode ser difícil para o consumidor da API entender a semântica correta da resposta, criando possíveis falhas na integração com o front-end ou com outros serviços que dependem dessa resposta. Também pode afetar a automação de testes, já que o código de status esperado não corresponde ao que é retornado pela API, levando a análises equivocadas dos resultados.

Esse problema está detalhado e evidenciado no caso CT-007 dos [Casos de Teste](./documentacao/casos-de-teste.md).

---

## Estrutura do Projeto

```bash
├── cypress/
│   ├── e2e/
│   │   ├── users.cy.js        # Testes de usuários (CRUD de usuários)
│   │   ├── product.cy.js      # Testes de produtos (CRUD de produtos)
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
   git clone https://github.com/MateusFels/serverest-api-tests.git
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
Este projeto garante a qualidade da API Serverest, validando o comportamento dos principais endpoints de usuários e produtos, incluindo o fluxo de autenticação.

Se você quiser contribuir, sinta-se à vontade para abrir um Pull Request ou reportar um Issue!
