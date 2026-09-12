# Plano de Testes

## Informações Gerais

| Item        | Valor                              |
| ----------- | ------------------------------------ |
| Projeto     | QA Case Study - FakeStore (LetCode)  |
| Módulo      | Fluxo de Login e Carrinho de Compras |
| Responsável | Mateus Felipe dos Santos             |
| Versão      | 1.0                                  |
| Data        | 12/09/2026                           |

---

# Objetivo

Avaliar o funcionamento do fluxo de login e do carrinho de compras da plataforma **FakeStore** (LetCode), verificando comportamentos esperados, validações de credenciais, adição e remoção de produtos, cálculo de quantidade e finalização de compra.

Todos os testes serão automatizados com **Cypress**.

---

# Escopo

## Funcionalidades contempladas

* Login com credenciais válidas
* Login com credenciais inválidas
* Login com campos em branco
* Adição de produto ao carrinho
* Finalização de compra (checkout)
* Comportamento do carrinho vazio ao tentar finalizar a compra
* Remoção de item do carrinho
* Adição de múltiplos produtos e validação da quantidade total

## Fora do escopo

* Testes de performance
* Testes de segurança
* Testes de carga e estresse
* Testes de API
* Processamento real de pagamentos
* Testes de infraestrutura
* Testes em dispositivos físicos

---

# Estratégia de Testes

Serão utilizados os seguintes tipos de teste:

* Testes Funcionais
* Testes de Validação de Campos
* Testes Automatizados

Os testes serão executados considerando os principais fluxos da aplicação, priorizando autenticação e gerenciamento do carrinho de compras.

Todos os cenários deste projeto são cobertos por **testes automatizados com Cypress**, integrados ao **GitHub Actions** para execução contínua.

---

# Ambiente

| Item                | Valor                        |
| ------------------- | ----------------------------- |
| Aplicação           | FakeStore (LetCode)            |
| URL Base            | https://letcode.in/home        |
| Ambiente            | Ambiente de demonstração público |
| Sistema Operacional | Windows 11                     |
| Navegador           | Electron (Cypress)             |
| Ferramentas         | Cypress, JavaScript e GitHub Actions |

---

# Critérios de Entrada

* Aplicação FakeStore disponível para acesso.
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

A aplicação será considerada aprovada para os cenários testados quando:

* O usuário conseguir realizar login com credenciais válidas.
* O sistema rejeitar login com credenciais inválidas ou campos em branco.
* O usuário conseguir adicionar e remover produtos do carrinho.
* O usuário conseguir finalizar a compra com sucesso.
* O sistema impedir a finalização da compra com o carrinho vazio.
* A quantidade de itens no carrinho refletir corretamente os produtos adicionados.

---

# Critérios de Priorização

Os testes serão executados seguindo a ordem:

1. Login com credenciais válidas
2. Login com credenciais inválidas e campos em branco
3. Adição de produto ao carrinho e checkout
4. Carrinho vazio no checkout
5. Remoção de item do carrinho
6. Adição de múltiplos produtos

---

# Casos de Teste

| ID     | Cenário                                             | Resultado Esperado                                                                        |
| ------ | ------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| CT-001 | Login com credenciais válidas                          | O sistema deve permitir o acesso e exibir a mensagem "Login Successful".                       |
| CT-002 | Login com credenciais inválidas                        | O sistema deve rejeitar o acesso e exibir a mensagem "Login Failed".                           |
| CT-003 | Login com campos em branco                             | O sistema deve rejeitar o acesso e exibir a mensagem "Login Failed".                           |
| CT-004 | Compra realizada com sucesso                           | O sistema deve permitir o checkout e o carrinho deve ficar vazio após a finalização.           |
| CT-005 | Tentativa de checkout com carrinho vazio               | O sistema deve impedir a finalização e sinalizar que o carrinho está vazio.                    |
| CT-006 | Usuário cancela a compra removendo o item do carrinho  | O item deve ser removido e o carrinho deve exibir a mensagem de carrinho vazio.                |
| CT-007 | Adicionar múltiplos produtos ao carrinho               | O carrinho deve refletir a quantidade correta de produtos adicionados.                         |

---

# Gerenciamento de Defeitos

* **Plataforma utilizada:** GitHub
* **Documentação:** Relatórios de bugs contendo descrição, passos para reprodução, resultado esperado, resultado obtido, impacto, severidade, prioridade e evidências.

## Critérios de Severidade

* **Alta:** Problemas que impedem ou comprometem funcionalidades importantes, como login ou finalização de compra.
* **Média:** Problemas que dificultam a utilização do carrinho, mas não impedem completamente o fluxo principal.
* **Baixa:** Problemas visuais ou de usabilidade com baixo impacto funcional.

## Critérios de Prioridade

* **Alta:** Correção necessária devido ao impacto significativo na experiência ou no funcionamento da aplicação.
* **Média:** Correção recomendada, mas sem bloqueio do fluxo principal.
* **Baixa:** Correção de menor impacto, podendo ser realizada posteriormente.

---

# Riscos

| Risco                                          | Impacto | Prioridade |
| ------------------------------------------------ | ------- | ---------- |
| Indisponibilidade da aplicação                    | Alto    | Alta       |
| Falha no serviço de autenticação                  | Alto    | Alta       |
| Falha no gerenciamento do carrinho                | Alto    | Alta       |
| Falha na finalização da compra                    | Alto    | Alta       |
| Inconsistência na contagem de itens do carrinho   | Médio   | Média      |

---

# Dependências

* Disponibilidade do ambiente FakeStore (LetCode).
* Funcionamento do serviço de autenticação.
* Conexão com a internet.
* Funcionamento do ambiente utilizado para execução dos testes automatizados (incluindo GitHub Actions).

---

# Entregáveis

* Plano de Testes
* Casos de Teste
* Testes Automatizados com Cypress
* Integração contínua via GitHub Actions
* Relatórios de Bugs (quando aplicável)
