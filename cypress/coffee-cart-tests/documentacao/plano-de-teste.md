# Plano de Testes

## Informações Gerais

| Item        | Valor                             |
| ----------- | ---------------------------------- |
| Projeto     | QA Case Study - Coffee Cart        |
| Módulo      | Fluxo de Carrinho e Promoções      |
| Responsável | Mateus Felipe dos Santos           |
| Versão      | 1.0                                |
| Data        | 12/09/2026                         |

---

# Objetivo

Avaliar o funcionamento do fluxo de carrinho de compras da aplicação **Coffee Cart**, verificando comportamentos esperados, regras de negócio de promoção, adição e remoção de itens, atualização de quantidade e preço total.

Todos os testes serão automatizados com **Cypress**.

---

# Escopo

## Funcionalidades contempladas

* Adição de produto ao carrinho
* Consulta do carrinho com itens
* Consulta do carrinho vazio
* Remoção de item do carrinho
* Alteração da quantidade de um item e recálculo do preço total
* Ativação de promoção ao atingir 3 itens no carrinho
* Ausência de promoção com menos de 3 itens
* Comportamento da promoção após remoção dos itens que a ativaram
* Comportamento da promoção ao adicionar novos itens após já ativada

## Fora do escopo

* Testes de performance
* Testes de segurança
* Testes de carga e estresse
* Testes de API (a aplicação não expõe endpoints públicos testáveis)
* Processamento real de pagamentos
* Testes de infraestrutura
* Testes em dispositivos físicos

---

# Estratégia de Testes

Serão utilizados os seguintes tipos de teste:

* Testes Funcionais
* Testes de Regras de Negócio (promoção)
* Testes Automatizados

Os testes serão executados considerando os principais fluxos da aplicação, priorizando o gerenciamento do carrinho e a regra de negócio de promoção, que concentra os principais riscos identificados no projeto.

Todos os cenários deste projeto são cobertos por **testes automatizados com Cypress**, não havendo execução manual.

---

# Ambiente

| Item                | Valor                    |
| ------------------- | ------------------------ |
| Aplicação           | Coffee Cart               |
| URL Base            | https://coffee-cart.app/  |
| Ambiente            | Produção (demo pública)   |
| Sistema Operacional | Windows 11                |
| Navegador           | Electron (Cypress)        |
| Ferramentas         | Cypress e JavaScript      |

---

# Critérios de Entrada

* Aplicação Coffee Cart disponível para acesso.
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

* O usuário conseguir adicionar e remover produtos do carrinho.
* O carrinho apresentar comportamento adequado quando vazio e quando possuir itens.
* A quantidade e o preço total do item forem atualizados corretamente.
* A promoção for ativada corretamente ao atingir 3 itens no carrinho.
* A promoção não for exibida com menos de 3 itens no carrinho.
* A promoção respeitar seu limite de uso e ser desativada quando os itens que a originaram forem removidos.

---

# Critérios de Priorização

Os testes serão executados seguindo a ordem:

1. Adição e consulta do carrinho
2. Remoção de itens do carrinho
3. Alteração de quantidade e preço total
4. Ativação da promoção
5. Cenários negativos de promoção (sem itens suficientes)
6. Comportamento da promoção após remoção de itens
7. Limite de promoção por usuário

---

# Casos de Teste

| ID     | Cenário                                                    | Resultado Esperado                                                                          |
| ------ | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| CT-001 | Adicionar produto válido no carrinho                        | O produto deve ser adicionado e o carrinho deve deixar de exibir a mensagem de carrinho vazio. |
| CT-002 | Entrar no carrinho sem nenhum item                          | O sistema deve exibir a mensagem "No coffee, go add some."                                     |
| CT-003 | Adicionar item com desconto ao carrinho                     | Ao atingir 3 itens e confirmar a promoção, o item deve ser exibido como "Discounted".          |
| CT-004 | Remover item do carrinho                                    | O item deve ser removido e o carrinho deve voltar a exibir a mensagem de carrinho vazio.       |
| CT-005 | Aumentar quantidade do item no carrinho                     | O preço total do item deve ser recalculado corretamente para $20.00.                           |
| CT-006 | Verificar promoção após 3 itens no carrinho                 | O sistema deve exibir a mensagem promocional.                                                  |
| CT-007 | Verificar ausência de promoção com menos de 3 itens          | O sistema não deve exibir a mensagem promocional.                                              |
| CT-008 | Verificar promoção após remoção dos itens que a ativaram     | O sistema deve desativar a promoção quando os itens que a originaram forem removidos.          |
| CT-009 | Verificar limite de uma promoção por usuário                | O sistema não deve reativar a promoção para o mesmo usuário após novos itens serem adicionados. |

---

# Gerenciamento de Defeitos

* **Plataforma utilizada:** GitHub
* **Documentação:** Defeitos descritos nesta seção e no README do projeto, contendo descrição, cenário de reprodução, resultado esperado, resultado obtido e impacto.

## Critérios de Severidade

* **Alta:** Problemas que geram impacto financeiro direto, como descontos indevidos.
* **Média:** Problemas que geram inconsistência na experiência do usuário, mas sem impacto financeiro direto.
* **Baixa:** Problemas visuais ou de usabilidade com baixo impacto funcional.

## Critérios de Prioridade

* **Alta:** Correção necessária devido ao impacto financeiro ou na credibilidade das promoções.
* **Média:** Correção recomendada, mas sem bloqueio do fluxo principal.
* **Baixa:** Correção de menor impacto, podendo ser realizada posteriormente.

---

# Riscos

| Risco                                                        | Impacto | Prioridade |
| -------------------------------------------------------------- | ------- | ---------- |
| Indisponibilidade da aplicação                                  | Alto    | Alta       |
| Cupom de desconto acionado infinitamente para o mesmo usuário   | Alto    | Alta       |
| Cupom permanece ativo após remoção dos itens que o originaram   | Alto    | Alta       |
| Falha no cálculo do preço total do carrinho                     | Médio   | Média      |

---

# Dependências

* Disponibilidade do ambiente Coffee Cart.
* Conexão com a internet.
* Funcionamento do ambiente utilizado para execução dos testes automatizados.

---

# Entregáveis

* Plano de Testes
* Casos de Teste
* Testes Automatizados com Cypress
* Registro dos defeitos identificados (Problemas e Riscos)
