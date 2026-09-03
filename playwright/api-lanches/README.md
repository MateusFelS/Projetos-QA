# Projeto de Testes - API Lanches

## Introdução
Este projeto tem como objetivo testar a **API Lanches**, um backend baseado no Contentful CMS, garantindo que os endpoints de gerenciamento de categorias, produtos, pedidos e usuários estejam funcionando corretamente.

Os testes são **100% automatizados**, utilizando **Playwright** (módulo de API Request) para validar as requisições e respostas da API.

---

## Sobre os Testes

### Escopo
As seguintes funcionalidades foram testadas:

- **Categorias**: Criação, publicação, consulta e exclusão.
- **Produtos**: Criação vinculada a uma categoria, validação de tipos de campo e referências, publicação e exclusão.
- **Pedidos**: Criação vinculada a usuário e produto, validação de campos e versão de publicação.
- **Usuários**: Criação, validação de tipos de campo, publicação e exclusão.
- **Segurança**: Acesso à API com token inválido.

### Critérios de Aceitação
- A API deve permitir o CRUD completo de categorias, produtos, pedidos e usuários.
- A API deve rejeitar dados com tipos de campo inválidos.
- A API deve rejeitar a publicação de entradas com versão incorreta.
- A API deve rejeitar requisições autenticadas com token inválido.

### Ambientes e Ferramentas
- **Ambiente de Teste**: Ambiente de homologação (Contentful).
- **Ferramentas Utilizadas**: Playwright, TypeScript e Github (para documentação e reporte de bugs).

---

## Automação de Testes

A automação foi realizada utilizando o módulo de **API Request** do **Playwright**, cobrindo cenários positivos (CRUD completo) e negativos (validações e segurança) para cada entidade da API.

### Tecnologias Utilizadas
- **Linguagem**: TypeScript
- **Framework de Teste**: Playwright (Test Runner + API Request)
- **Gerenciamento de variáveis de ambiente**: dotenv

---

## Testes de API

Os testes de API foram automatizados com **Playwright**, substituindo a execução manual via Postman. Abaixo estão os principais testes realizados:

### Endpoints Testados

1. **Categorias**
   - **Endpoint**: `POST /entries` (content type `categoria`)
   - **Cenários**:
     - Criação, publicação e consulta de categoria com dados válidos.
     - Publicação de categoria com versão incorreta.
     - Consulta com token inválido.

2. **Produtos**
   - **Endpoint**: `POST /entries` (content type `produto`)
   - **Cenários**:
     - Criação de produto vinculado a uma categoria.
     - Criação de produto com preço em formato inválido.
     - Criação de produto referenciando categoria inexistente.
     - Publicação de produto com versão incorreta.
     - Consulta com token inválido.

3. **Pedidos**
   - **Endpoint**: `POST /entries` (content type `pedido`)
   - **Cenários**:
     - Criação de pedido vinculado a usuário e produto existentes.
     - Criação de pedido com `totalPrice` inválido.
     - Publicação de pedido com versão incorreta.
     - Consulta com token inválido.

4. **Usuários**
   - **Endpoint**: `POST /entries` (content type `user`)
   - **Cenários**:
     - Criação, publicação e consulta de usuário com dados válidos.
     - Criação de usuário com campo `name` em tipo incorreto.
     - Publicação de usuário com versão incorreta.
     - Exclusão de entrada inexistente.
     - Consulta com token inválido.

---

## Conclusão
Este projeto garante a qualidade da API Lanches, validando o comportamento dos principais endpoints de categorias, produtos, pedidos e usuários, incluindo cenários de erro e segurança.

Se você quiser contribuir, sinta-se à vontade para abrir um Pull Request ou reportar um Issue!
