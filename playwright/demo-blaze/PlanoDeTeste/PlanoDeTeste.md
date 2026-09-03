# Plano de Testes

## Informações Gerais

| Item        | Valor                       |
| ----------- | --------------------------- |
| Projeto     | QA Case Study - DemoBlaze   |
| Módulo      | Fluxo de Compra e Navegação |
| Responsável | Mateus Felipe dos Santos    |
| Versão      | 1.0                         |
| Data        | 03/09/2026                  |

---

# Objetivo

Avaliar o funcionamento do fluxo de compra da plataforma **DemoBlaze**, verificando comportamentos esperados, regras de negócio, validações, navegação e aspectos de UI/UX.

Também serão realizadas validações dos principais endpoints da aplicação, utilizando o **Postman**, além de testes automatizados com **Playwright** quando aplicável.

---

# Escopo

## Funcionalidades contempladas

* Cadastro de usuário
* Login
* Validação de credenciais
* Validação de campos obrigatórios
* Mensagens de erro e feedback ao usuário
* Adição de produtos ao carrinho
* Remoção de produtos do carrinho
* Consulta do carrinho
* Comportamento do carrinho vazio
* Finalização da compra
* Navegação entre páginas
* Filtro por categoria
* Responsividade
* Aspectos básicos de acessibilidade
* Testes de API relacionados à autenticação, produtos e carrinho

## Fora do escopo

* Testes de performance
* Testes de segurança
* Testes de carga e estresse
* Integrações com serviços externos
* Processamento real de pagamentos
* Testes de infraestrutura
* Testes em dispositivos físicos além dos utilizados durante a execução

---

# Estratégia de Testes

Serão utilizados os seguintes tipos de teste:

* Testes Funcionais
* Testes Exploratórios
* Testes de Validação de Campos
* Testes de Navegação
* Testes de Usabilidade
* Testes de Responsividade
* Testes de Acessibilidade
* Testes de API
* Testes Manuais
* Testes Automatizados

Os testes serão executados considerando os principais fluxos da aplicação, priorizando funcionalidades diretamente relacionadas à autenticação, compra e navegação.

Os testes de API serão realizados utilizando o **Postman**, enquanto os testes automatizados serão executados utilizando o **Playwright**.

---

# Ambiente

| Item                | Valor                |
| ------------------- | -------------------- |
| Aplicação           | DemoBlaze            |
| Ambiente            | Ambiente de teste    |
| Sistema Operacional | Windows 11           |
| Navegadores         | Chrome e Brave       |
| Dispositivo Mobile  | Xiaomi Redmi 9A      |
| Sistema Mobile      | Android 10           |
| Ferramentas         | Playwright e Postman |

---

# Critérios de Entrada

* Aplicação DemoBlaze disponível para acesso.
* Servidor da aplicação funcionando corretamente.
* Conexão com a internet disponível.
* Usuário de teste disponível para execução dos cenários que exigem autenticação.
* Ambiente configurado para execução dos testes automatizados.
* Postman disponível para execução dos testes de API.

---

# Critérios de Saída

A execução dos testes será considerada concluída quando:

* Todos os casos de teste planejados forem executados.
* Os resultados dos testes forem registrados.
* Os defeitos encontrados forem documentados.
* As evidências dos principais cenários e defeitos forem anexadas.
* Os testes de API previstos forem executados.
* Os testes automatizados planejados forem executados.

---

# Critérios de Aceitação

A aplicação será considerada aprovada para os cenários testados quando:

* O usuário conseguir realizar cadastro e login conforme esperado.
* O usuário conseguir adicionar e remover produtos do carrinho.
* O usuário conseguir concluir o fluxo de compra.
* O carrinho apresentar comportamento adequado quando estiver vazio.
* As páginas principais puderem ser acessadas corretamente.
* Os filtros de produtos funcionarem conforme esperado.
* As mensagens de erro e feedback forem apresentadas de forma adequada.
* A interface apresentar comportamento adequado nos dispositivos e tamanhos de tela testados.

---

# Critérios de Priorização

Os testes serão executados seguindo a ordem:

1. Autenticação
2. Fluxo principal de compra
3. Gerenciamento do carrinho
4. Validações e cenários negativos
5. Navegação
6. Filtros de produtos
7. Responsividade
8. Acessibilidade
9. Testes de API
10. Testes automatizados

---

# Casos de Teste

| ID     | Cenário                         | Resultado Esperado                                                                                                                   |
| ------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| CT-001 | Login com cadastro válido       | O usuário deve ser autenticado e a mensagem de boas-vindas deve ser exibida.                                                         |
| CT-002 | Login com cadastro inválido     | A aplicação deve informar que o usuário não existe.                                                                                  |
| CT-003 | Login com campos vazios         | A aplicação deve informar que usuário e senha precisam ser preenchidos.                                                              |
| CT-004 | Signup com cadastro válido      | O cadastro deve ser realizado com sucesso e uma mensagem de confirmação deve ser exibida.                                            |
| CT-005 | Signup com usuário já existente | A aplicação deve informar que o usuário já existe.                                                                                   |
| CT-006 | Adicionar item ao carrinho      | O produto deve ser adicionado ao carrinho e uma mensagem de confirmação deve ser exibida.                                            |
| CT-007 | Remover item do carrinho        | O produto deve ser removido e a lista do carrinho deve ser atualizada.                                                               |
| CT-008 | Comprar item com sucesso        | A compra deve ser concluída e uma mensagem de confirmação deve ser exibida.                                                          |
| CT-009 | Acessar carrinho vazio          | O sistema deve informar que o carrinho está vazio.                                                                                   |
| CT-010 | Acessar página de contato       | A página de contato deve ser carregada corretamente e permitir o envio de uma mensagem.                                              |
| CT-011 | Acessar página "About us"       | A página deve ser carregada corretamente com as informações da empresa.                                                              |
| CT-012 | Acessar página do carrinho      | A página do carrinho deve ser aberta corretamente.                                                                                   |
| CT-013 | Filtrar produtos por categoria  | Somente produtos pertencentes à categoria selecionada devem ser exibidos.                                                            |
| CT-014 | Responsividade                  | Os elementos da interface devem se adaptar adequadamente aos diferentes tamanhos de tela testados.                                   |
| CT-015 | Acessibilidade                  | Os principais elementos devem possuir identificação adequada e a navegação deve ser possível utilizando o teclado, quando aplicável. |

---

# Testes de API

Foram realizados testes manuais utilizando o **Postman** para validação dos principais endpoints da aplicação.

## Autenticação

| Método | Endpoint  | Cenário             |
| ------ | --------- | ------------------- |
| POST   | `/login`  | Realização de login |
| POST   | `/signup` | Cadastro de usuário |

## Produtos

| Método | Endpoint   | Cenário                       |
| ------ | ---------- | ----------------------------- |
| GET    | `/entries` | Consulta da lista de produtos |

## Carrinho

| Método | Endpoint      | Cenário                        |
| ------ | ------------- | ------------------------------ |
| POST   | `/addtocart`  | Adição de produto ao carrinho  |
| GET    | `/viewcart`   | Consulta dos itens do carrinho |
| DELETE | `/deletecart` | Remoção de produto do carrinho |

Os testes de API contemplaram a validação das requisições, respostas retornadas e comportamento dos endpoints nos cenários executados.

---

# Gerenciamento de Defeitos

* **Plataforma utilizada:** GitHub
* **Documentação:** Relatórios de bugs contendo descrição, passos para reprodução, resultado esperado, resultado obtido, impacto, severidade, prioridade e evidências.

## Critérios de Severidade

* **Alta:** Problemas que impedem ou comprometem funcionalidades importantes, como login ou conclusão da compra.
* **Média:** Problemas que dificultam a utilização ou navegação, mas não impedem completamente o fluxo principal.
* **Baixa:** Problemas visuais, de usabilidade ou acessibilidade com baixo impacto funcional.

## Critérios de Prioridade

* **Alta:** Correção necessária devido ao impacto significativo na experiência ou no funcionamento da aplicação.
* **Média:** Correção recomendada, mas sem bloqueio do fluxo principal.
* **Baixa:** Correção de menor impacto, podendo ser realizada posteriormente.

---

# Riscos

| Risco                              | Impacto | Prioridade |
| ---------------------------------- | ------- | ---------- |
| Indisponibilidade da aplicação     | Alto    | Alta       |
| Falha no serviço de autenticação   | Alto    | Alta       |
| Falha no gerenciamento do carrinho | Alto    | Alta       |
| Falha na finalização da compra     | Alto    | Alta       |
| Problemas de navegação             | Médio   | Média      |
| Problemas de responsividade        | Médio   | Média      |
| Problemas de acessibilidade        | Médio   | Média      |
| Instabilidade dos endpoints da API | Alto    | Alta       |

---

# Dependências

* Disponibilidade do ambiente DemoBlaze.
* Funcionamento dos serviços responsáveis pela autenticação.
* Disponibilidade dos endpoints da API.
* Conexão com a internet.
* Funcionamento do ambiente utilizado para execução dos testes automatizados.

---

# Entregáveis

* Plano de Testes
* Casos de Teste
* Testes Automatizados com Playwright
* Testes de API realizados no Postman
* Relatórios de Bugs
* Evidências dos testes executados
