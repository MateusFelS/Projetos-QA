# Estudo de Testes com Cypress - Serverest API

Este é um projeto de estudo para aprender e praticar automação de testes com Cypress, focado em testes de API na plataforma [Serverest.dev](https://serverest.dev). O objetivo é verificar funcionalidades essenciais de um sistema de gerenciamento de usuários e produtos, cobrindo cenários de autenticação, manipulação de dados de usuários, criação e edição de produtos.

## Índice

- [Objetivo](#objetivo)
- [Funcionalidades Testadas](#funcionalidades-testadas)
- [Problemas e Riscos](#problemas-e-riscos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Execução](#instalação-e-execução)

## Objetivo

Este projeto foi desenvolvido para exercitar habilidades de QA em automação, utilizando o Cypress para testar endpoints de uma API RESTful. Os testes cobrem funcionalidades como criação e autenticação de usuários, manipulação de produtos e exclusão de registros.

## Funcionalidades Testadas

- **Autenticação de Usuário**: Testa o login com credenciais válidas para verificar o recebimento de um token de autenticação.
- **Criação de Usuário**: Verifica se usuários podem ser criados com dados válidos e únicos.
- **Consulta de Usuário**: Testa a obtenção de informações de um usuário específico.
- **Edição de Usuário**: Verifica se é possível editar os dados de um usuário existente.
- **Exclusão de Usuário**: Testa a remoção de um usuário existente.
- **Criação de Produto**: Valida se produtos podem ser adicionados ao sistema com dados válidos.
- **Consulta de Produto**: Verifica a obtenção de dados de produtos disponíveis no sistema.
- **Edição de Produto**: Testa a atualização de dados de um produto específico.
- **Exclusão de Produto**: Valida a remoção de produtos cadastrados.

## Problemas e Riscos

Durante a execução dos testes, foram identificados alguns problemas:

1. **Algumas requests retornando código errado**
   - **Descrição**: A request login está retornando código diferente do padrão utilizado.
   - **Risco**: Pode ser difícil para o consumidor da API entender a semântica correta da resposta, criando possíveis falhas na integração com o front-end ou com outros serviços que dependem dessa resposta. E pode afetar a automação de testes, já que o código de status esperado não corresponde ao que é retornado pela API. Isso pode levar a falhas nos testes e uma análise errada dos resultados.

## Tecnologias Utilizadas

- **Cypress**: Framework de automação de testes end-to-end.
- **JavaScript**: Linguagem principal para escrita dos testes.

## Estrutura do Projeto

A estrutura de pastas e arquivos é organizada para facilitar a manutenção e entendimento dos testes.

   ```bash
   ├── cypress/
   │   ├── e2e/
   │   │   ├── users.cy.js       # Testes de usuários (CRUD de usuários)
   │   │   ├── products.cy.js    # Testes de produtos (CRUD de produtos)
   │   ├── support/
   │   │   ├── commands.js       # Comandos customizados do Cypress
   │   │   ├── e2e.js            # Configurações globais para o Cypress
   ├── README.md                # Documentação do projeto
   ```
## Instalação e Execução

Para rodar os testes em sua máquina local, siga os passos abaixo:

1. **Clone este repositório**:

   ```bash
   git clone https://github.com/MateusFels/serverest-api-tests.git
   cd "seu_repositorio"

2. **Instale as dependências**:

   ```bash
   npm install

3. **Execute os testes**:

 - Para rodar os testes em modo interativo:

   ```bash
   npx cypress open

 - Para rodar os testes em modo headless (sem interface):

   ```bash
   npx cypress run
