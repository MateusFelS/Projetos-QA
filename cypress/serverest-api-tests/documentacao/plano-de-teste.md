# Plano de Testes

## Informações Gerais

| Item        | Valor                                |
| ----------- | -------------------------------------- |
| Projeto     | QA Case Study - Serverest API          |
| Módulo      | API de Usuários e Produtos             |
| Responsável | Mateus Felipe dos Santos               |
| Versão      | 1.0                                    |
| Data        | 12/09/2026                             |

---

# Objetivo

Avaliar o funcionamento da **API Serverest**, verificando o comportamento esperado dos endpoints de criação, consulta, edição e exclusão de usuários e produtos, incluindo a autenticação via login.

Todos os testes serão automatizados com **Cypress**, utilizando o comando nativo `cy.request`.

---

# Escopo

## Funcionalidades contempladas

* Consulta da lista de usuários
* Criação de usuário com dados válidos e únicos
* Consulta de um usuário específico após a criação
* Edição de dados de um usuário existente
* Exclusão de usuário
* Criação de usuário para autenticação (fluxo de produtos)
* Login e obtenção de token de autenticação
* Consulta da lista de produtos
* Criação de produto autenticada
* Consulta de um produto específico após a criação
* Edição de dados de um produto existente
* Exclusão de produto

## Fora do escopo

* Testes de performance e carga
* Testes de segurança avançados (pentest)
* Testes de interface (o projeto testa apenas a API)
* Integração com sistemas de pagamento
* Testes de infraestrutura da plataforma Serverest

---

# Estratégia de Testes

Serão utilizados os seguintes tipos de teste:

* Testes Funcionais
* Testes de API
* Testes de Autenticação
* Testes Automatizados

Todos os cenários deste projeto são cobertos por **testes automatizados com Cypress**, através de comandos customizados (`getAPI`, `postAPI`, `putAPI`, `deleteAPI`), não havendo execução manual via Postman.

---

# Ambiente

| Item                | Valor                          |
| ------------------- | -------------------------------- |
| Aplicação           | Serverest API                    |
| URL Base            | https://serverest.dev             |
| Ambiente            | Ambiente de testes público (Serverest.dev) |
| Sistema Operacional | Windows 11                        |
| Ferramentas         | Cypress e JavaScript              |

---

# Critérios de Entrada

* API acessível através da `baseUrl` configurada.
* Conexão com a internet disponível.
* Dependências do projeto instaladas (`npm install`).
* Ambiente configurado para execução dos testes automatizados.

---

# Critérios de Saída

A execução dos testes será considerada concluída quando:

* Todos os casos de teste planejados forem executados.
* Os resultados dos testes forem registrados.
* Os defeitos encontrados forem documentados.
* Os testes automatizados forem executados com sucesso via `npx cypress run`.

---

# Critérios de Aceitação

A API será considerada aprovada para os cenários testados quando:

* Permitir o CRUD completo de usuários e produtos.
* Retornar o código de status correto (200/201) para operações bem-sucedidas.
* Permitir a autenticação via login e retornar um token válido.
* Retornar corretamente os dados criados, editados e consultados.

---

# Critérios de Priorização

Os testes serão executados seguindo a ordem:

1. Consulta e criação de usuários
2. Edição e exclusão de usuários
3. Criação de usuário e login para autenticação de produtos
4. Consulta e criação de produtos
5. Edição e exclusão de produtos

---

# Casos de Teste

| ID     | Cenário                                    | Resultado Esperado                                                          |
| ------ | --------------------------------------------- | -------------------------------------------------------------------------------- |
| CT-001 | Consultar lista de usuários                    | A API deve retornar status 200 com a lista de usuários cadastrados.               |
| CT-002 | Criar usuário com dados válidos                | A API deve retornar status 201 e os dados do usuário criado.                      |
| CT-003 | Consultar usuário recém-criado                 | A API deve retornar status 200 com os dados do usuário criado.                    |
| CT-004 | Editar dados de um usuário existente           | A API deve retornar status 200 confirmando a edição.                              |
| CT-005 | Excluir usuário existente                      | A API deve retornar status 200 confirmando a exclusão.                            |
| CT-006 | Criar usuário para autenticação                | A API deve retornar status 201 e os dados do usuário criado.                      |
| CT-007 | Realizar login e obter token de autenticação   | A API deve retornar o token de autorização (status observado na execução).        |
| CT-008 | Consultar lista de produtos                    | A API deve retornar status 200 com a lista de produtos cadastrados.               |
| CT-009 | Criar produto autenticado                      | A API deve retornar status 201 e os dados do produto criado.                      |
| CT-010 | Consultar produto recém-criado                 | A API deve retornar status 200 com os dados do produto criado.                    |
| CT-011 | Editar dados de um produto existente           | A API deve retornar status 200 confirmando a edição.                              |
| CT-012 | Excluir produto existente                      | A API deve retornar status 200 confirmando a exclusão.                            |

---

# Testes de API

Todos os testes de API foram automatizados com **Cypress**, cobrindo os principais endpoints da aplicação.

## Usuários

| Método | Endpoint            | Cenário                       |
| ------ | --------------------- | ------------------------------- |
| GET    | `/usuarios`            | Consulta da lista de usuários   |
| POST   | `/usuarios`            | Criação de usuário              |
| GET    | `/usuarios/{id}`       | Consulta de usuário criado      |
| PUT    | `/usuarios/{id}`       | Edição de usuário               |
| DELETE | `/usuarios/{id}`       | Exclusão de usuário             |

## Autenticação

| Método | Endpoint | Cenário                            |
| ------ | ---------- | ------------------------------------- |
| POST   | `/login`   | Autenticação e obtenção de token       |

## Produtos

| Método | Endpoint            | Cenário                       |
| ------ | --------------------- | ------------------------------- |
| GET    | `/produtos`            | Consulta da lista de produtos   |
| POST   | `/produtos`            | Criação de produto (autenticado) |
| GET    | `/produtos/{id}`       | Consulta de produto criado      |
| PUT    | `/produtos/{id}`       | Edição de produto               |
| DELETE | `/produtos/{id}`       | Exclusão de produto             |

Os testes de API contemplaram a validação das requisições, respostas retornadas e comportamento dos endpoints nos cenários executados.

---

# Gerenciamento de Defeitos

* **Plataforma utilizada:** GitHub
* **Documentação:** Relatórios de bugs contendo descrição, passos para reprodução, resultado esperado, resultado obtido, impacto, severidade, prioridade e evidências.

## Critérios de Severidade

* **Alta:** Problemas que impedem ou comprometem funcionalidades importantes, como criação ou autenticação.
* **Média:** Problemas que dificultam a utilização da API, mas não impedem completamente o fluxo principal, como códigos de status inconsistentes.
* **Baixa:** Problemas de baixo impacto funcional, como mensagens de erro pouco descritivas.

## Critérios de Prioridade

* **Alta:** Correção necessária devido ao impacto significativo no funcionamento da API.
* **Média:** Correção recomendada, mas sem bloqueio do fluxo principal.
* **Baixa:** Correção de menor impacto, podendo ser realizada posteriormente.

---

# Riscos

| Risco                                                | Impacto | Prioridade |
| ------------------------------------------------------- | ------- | ---------- |
| Indisponibilidade da API do Serverest                    | Alto    | Alta       |
| Retorno de código de status divergente do padrão REST    | Médio   | Média      |
| Instabilidade no serviço de autenticação                 | Alto    | Alta       |
| Conflito de dados por execuções simultâneas de testes     | Médio   | Média      |

---

# Dependências

* Disponibilidade da API do Serverest.
* Conexão com a internet.
* Ambiente configurado corretamente (`baseUrl` no `cypress.config.js`).

---

# Entregáveis

* Plano de Testes
* Casos de Teste
* Testes Automatizados com Cypress
* Registro dos defeitos identificados (Problemas e Riscos)
