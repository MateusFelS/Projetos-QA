# Plano de Testes

## Informações Gerais

| Item        | Valor                        |
| ----------- | ----------------------------- |
| Projeto     | QA Case Study - API Lanches   |
| Módulo      | API de Categorias, Produtos, Pedidos e Usuários |
| Responsável | Mateus Felipe dos Santos      |
| Versão      | 1.0                           |
| Data        | 03/09/2026                    |

---

# Objetivo

Avaliar o funcionamento da **API Lanches** (backend Contentful), verificando o comportamento esperado dos endpoints de criação, publicação, consulta e remoção de categorias, produtos, pedidos e usuários, incluindo validações de campos, referências entre entidades e controle de acesso.

Todos os testes serão automatizados com **Playwright**, utilizando o módulo de API Request.

---

# Escopo

## Funcionalidades contempladas

* Criação, publicação, consulta e exclusão de categorias
* Criação de produtos vinculados a uma categoria
* Validação de tipos de campo (ex.: preço como string)
* Validação de referências entre entidades (ex.: categoria inexistente)
* Criação de pedidos vinculados a usuário e produto
* Controle de versão na publicação de entradas
* Criação, validação e exclusão de usuários
* Validação de autenticação via token de acesso

## Fora do escopo

* Testes de performance e carga
* Testes de segurança avançados (pentest)
* Testes de interface (o projeto não possui UI)
* Integração com sistemas de pagamento
* Testes de infraestrutura do Contentful

---

# Estratégia de Testes

Serão utilizados os seguintes tipos de teste:

* Testes Funcionais
* Testes de API
* Testes de Validação de Campos
* Testes de Segurança (autenticação)
* Testes Automatizados

Todos os cenários deste projeto são cobertos por **testes automatizados com Playwright**, não havendo execução manual via Postman. Os testes priorizam os fluxos de CRUD de cada entidade e os cenários negativos de validação e segurança.

---

# Ambiente

| Item                | Valor                          |
| ------------------- | ------------------------------- |
| Aplicação           | API Lanches (Contentful Management API) |
| Ambiente            | Ambiente de teste/homologação   |
| Sistema Operacional | Windows 11                      |
| Ferramentas         | Playwright, TypeScript, dotenv  |

---

# Critérios de Entrada

* API acessível através da `BASE_URL` configurada.
* Token de acesso (`CONTENTFUL_ACCESS_TOKEN`) válido disponível.
* Variáveis de ambiente configuradas (arquivo `.env`).
* Dependências do projeto instaladas (`npm install`).

---

# Critérios de Saída

A execução dos testes será considerada concluída quando:

* Todos os casos de teste planejados forem executados.
* Os resultados dos testes forem registrados.
* Os defeitos encontrados forem documentados.
* Os testes automatizados forem executados com sucesso via `npx playwright test`.

---

# Critérios de Aceitação

A API será considerada aprovada para os cenários testados quando:

* Permitir o CRUD completo de categorias, produtos, pedidos e usuários.
* Rejeitar a criação de registros com tipos de campo inválidos.
* Rejeitar a publicação de entradas com referências inválidas ou versão incorreta.
* Rejeitar requisições autenticadas com token inválido (401).
* Rejeitar a exclusão de entradas inexistentes.

---

# Critérios de Priorização

Os testes serão executados seguindo a ordem:

1. Autenticação e segurança
2. CRUD de categorias
3. CRUD de produtos
4. CRUD de pedidos
5. CRUD de usuários
6. Validações e cenários negativos

---

# Casos de Teste

| ID     | Cenário                                             | Resultado Esperado                                                     |
| ------ | ---------------------------------------------------- | ------------------------------------------------------------------------ |
| CT-001 | Criar, publicar e consultar categoria válida         | A categoria deve ser criada, publicada e localizada na consulta.        |
| CT-002 | Publicar categoria com versão incorreta              | A API deve rejeitar a publicação.                                       |
| CT-003 | Consultar categorias com token inválido              | A API deve retornar erro 401.                                           |
| CT-004 | Criar produto vinculado a categoria válida           | O produto deve ser criado, publicado e localizado na consulta.          |
| CT-005 | Criar produto com preço em formato inválido          | A API deve rejeitar a criação do produto.                               |
| CT-006 | Criar produto referenciando categoria inexistente    | A API deve rejeitar a publicação do produto.                            |
| CT-007 | Publicar produto com versão incorreta                | A API deve rejeitar a publicação.                                       |
| CT-008 | Consultar produtos com token inválido                | A API deve retornar erro 401.                                           |
| CT-009 | Criar pedido vinculado a usuário e produto existentes | O pedido deve ser criado, publicado e localizado na consulta.          |
| CT-010 | Criar pedido com `totalPrice` inválido               | A API deve rejeitar a criação do pedido.                                |
| CT-011 | Publicar pedido com versão incorreta                 | A API deve rejeitar a publicação.                                       |
| CT-012 | Consultar pedidos com token inválido                 | A API deve retornar erro 401.                                           |
| CT-013 | Criar, publicar e consultar usuário válido           | O usuário deve ser criado, publicado e localizado na consulta.          |
| CT-014 | Criar usuário com campo `name` em tipo incorreto     | A API deve rejeitar a criação do usuário.                               |
| CT-015 | Publicar usuário com versão incorreta                | A API deve rejeitar a publicação.                                       |
| CT-016 | Excluir entrada de usuário inexistente               | A API deve retornar erro 400 ou 404.                                    |
| CT-017 | Consultar usuários com token inválido                | A API deve retornar erro 401.                                           |

---

# Testes de API

Todos os testes de API foram automatizados com **Playwright**, cobrindo os principais endpoints da aplicação.

## Categorias

| Método | Endpoint   | Cenário                          |
| ------ | ---------- | --------------------------------- |
| POST   | `/entries` | Criação de categoria              |
| PUT    | `/entries/{id}/published` | Publicação de categoria |
| GET    | `/entries` | Consulta de categorias            |

## Produtos

| Método | Endpoint   | Cenário                                  |
| ------ | ---------- | ------------------------------------------ |
| POST   | `/entries` | Criação de produto vinculado a categoria   |
| PUT    | `/entries/{id}/published` | Publicação de produto      |
| GET    | `/entries` | Consulta de produtos                       |

## Pedidos

| Método | Endpoint   | Cenário                                       |
| ------ | ---------- | ------------------------------------------------ |
| POST   | `/entries` | Criação de pedido vinculado a usuário e produto  |
| PUT    | `/entries/{id}/published` | Publicação de pedido           |
| GET    | `/entries` | Consulta de pedidos                              |

## Usuários

| Método | Endpoint            | Cenário                       |
| ------ | -------------------- | ------------------------------- |
| POST   | `/entries`            | Criação de usuário             |
| PUT    | `/entries/{id}/published` | Publicação de usuário     |
| GET    | `/entries`            | Consulta de usuários            |
| DELETE | `/entries/{id}`       | Exclusão de usuário             |

Os testes de API contemplaram a validação das requisições, respostas retornadas e comportamento dos endpoints nos cenários executados.

---

# Gerenciamento de Defeitos

* **Plataforma utilizada:** GitHub
* **Documentação:** Relatórios de bugs contendo descrição, passos para reprodução, resultado esperado, resultado obtido, impacto, severidade, prioridade e evidências.

## Critérios de Severidade

* **Alta:** Problemas que impedem ou comprometem funcionalidades importantes, como criação ou publicação de entidades.
* **Média:** Problemas que dificultam a utilização da API, mas não impedem completamente o fluxo principal.
* **Baixa:** Problemas de baixo impacto funcional, como mensagens de erro pouco descritivas.

## Critérios de Prioridade

* **Alta:** Correção necessária devido ao impacto significativo no funcionamento da API.
* **Média:** Correção recomendada, mas sem bloqueio do fluxo principal.
* **Baixa:** Correção de menor impacto, podendo ser realizada posteriormente.

---

# Riscos

| Risco                                          | Impacto | Prioridade |
| ------------------------------------------------ | ------- | ---------- |
| Indisponibilidade da API do Contentful            | Alto    | Alta       |
| Alteração no schema dos content types             | Alto    | Alta       |
| Instabilidade no serviço de autenticação          | Alto    | Alta       |
| Inconsistência de dados entre entidades relacionadas | Médio | Média      |

---

# Dependências

* Disponibilidade da API do Contentful.
* Token de acesso válido.
* Conexão com a internet.
* Ambiente configurado corretamente (variáveis em `.env`).

---

# Entregáveis

* Plano de Testes
* Casos de Teste
* Testes Automatizados com Playwright
* Relatórios de execução (Playwright HTML Report)
* Relatórios de Bugs (quando aplicável)
