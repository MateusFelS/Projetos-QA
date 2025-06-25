# Estudo de Testes com Fakerest API

Este é um projeto de estudo para aprender e praticar automação de testes com Playwright, focado em testes de API na plataforma [Fakerest.dev](https://fakerestapi.azurewebsites.net/index.html). O objetivo é verificar funcionalidades essenciais de um sistema de gerenciamento de atividades, autores e livros, cobrindo cenários de criação, consulta, edição e exclusão.

## Índice

- [Objetivo](#objetivo)
- [Funcionalidades Testadas](#funcionalidades-testadas)
- [Problemas e Riscos](#problemas-e-riscos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Objetivo

Este projeto foi desenvolvido para exercitar habilidades de QA em automação, utilizando o Playwright para testar endpoints de uma API RESTful. Os testes cobrem funcionalidades como gerenciamento de atividades, autores e livros.

## Funcionalidades Testadas

- **Gerenciamento de Atividades**: 
  - Criação de atividades com dados válidos.
  - Consulta de atividades existentes.
  - Edição de atividades existentes.
  - Exclusão de atividades.

- **Gerenciamento de Autores**:
  - Criação de autores com dados válidos.
  - Consulta de autores existentes.
  - Edição de autores existentes.
  - Exclusão de autores.

- **Gerenciamento de Livros**:
  - Criação de livros com dados válidos.
  - Consulta de livros existentes.
  - Edição de livros existentes.
  - Exclusão de livros.

## Problemas e Riscos

Durante a execução dos testes, foram identificados alguns problemas:

1. **Algumas requests retornando código errado**
   - **Descrição**: Algumas requisições estão retornando códigos diferentes do esperado.
   - **Risco**: Isso pode dificultar a compreensão da resposta pela API, resultando em falhas na integração com o front-end ou outros serviços. Também pode afetar a automação de testes, pois os códigos de status esperados não correspondem ao que é retornado pela API, levando a falhas nos testes.

## Tecnologias Utilizadas

- **Playwright**: Framework de automação de testes end-to-end.
- **Typescript**: Linguagem principal para escrita dos testes.
