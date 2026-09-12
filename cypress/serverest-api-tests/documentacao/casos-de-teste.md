# Casos de Teste - Fluxos da Aplicação

## Usuários

| ID     | Cenário                              | Pré-condição                                | Dados de Teste                                                         | Resultado Esperado                                              | Resultado Obtido                                                | Status   | Prioridade |
| ------ | --------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | -------- | ---------- |
| CT-001 | Consultar lista de usuários             | API de usuários disponível                     | Nenhum (requisição GET simples)                                       | A API deve retornar status 200 com a lista de usuários cadastrados. | A API retornou status 200 com a lista de usuários.                | ✅ Passou | Média      |
| CT-002 | Criar usuário com dados válidos         | API de usuários disponível                     | Payload com nome, e-mail aleatório, senha e flag de administrador     | A API deve retornar status 201 e os dados do usuário criado.      | A API retornou status 201 e o `_id` do usuário foi armazenado.    | ✅ Passou | Alta       |
| CT-003 | Consultar usuário recém-criado          | Usuário criado no cenário anterior             | `_id` do usuário criado                                               | A API deve retornar status 200 com os dados do usuário.           | A API retornou status 200 com os dados do usuário criado.         | ✅ Passou | Alta       |
| CT-004 | Editar dados de um usuário existente    | Usuário criado e `_id` disponível              | Payload com nome, e-mail e senha atualizados                          | A API deve retornar status 200 confirmando a edição.              | A API retornou status 200 e os dados foram atualizados.           | ✅ Passou | Média      |
| CT-005 | Excluir usuário existente               | Usuário criado e `_id` disponível              | `_id` do usuário a ser excluído                                       | A API deve retornar status 200 confirmando a exclusão.            | A API retornou status 200 confirmando a exclusão do usuário.      | ✅ Passou | Média      |

---

## Autenticação

| ID     | Cenário                                        | Pré-condição                                | Dados de Teste                                        | Resultado Esperado                                                           | Resultado Obtido                                                                                      | Status                    | Prioridade |
| ------ | -------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------- | ---------- |
| CT-006 | Criar usuário para autenticação (fluxo de produtos) | API de usuários disponível                     | Payload com nome, e-mail aleatório, senha e administrador  | A API deve retornar status 201 e os dados do usuário criado.                     | A API retornou status 201 e o usuário foi criado com sucesso.                                            | ✅ Passou                  | Alta       |
| CT-007 | Realizar login e obter token de autenticação        | Usuário criado no cenário anterior             | E-mail e senha do usuário criado                           | A API deve retornar status 201 (Created), conforme o padrão REST para o método POST | A API retornou status 200 em vez de 201, mas o token de autorização foi devolvido corretamente no corpo. | ⚠️ Passou com observação | Média      |

---

## Produtos

| ID     | Cenário                              | Pré-condição                                            | Dados de Teste                                                     | Resultado Esperado                                              | Resultado Obtido                                                | Status   | Prioridade |
| ------ | --------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | -------- | ---------- |
| CT-008 | Consultar lista de produtos             | API de produtos disponível                                   | Nenhum (requisição GET simples)                                      | A API deve retornar status 200 com a lista de produtos cadastrados. | A API retornou status 200 com a lista de produtos.                 | ✅ Passou | Média      |
| CT-009 | Criar produto autenticado               | Usuário autenticado com token válido                          | Payload com nome aleatório, preço, quantidade e descrição            | A API deve retornar status 201 e os dados do produto criado.      | A API retornou status 201 e o `_id` do produto foi armazenado.    | ✅ Passou | Alta       |
| CT-010 | Consultar produto recém-criado          | Produto criado no cenário anterior                            | `_id` do produto criado                                              | A API deve retornar status 200 com os dados do produto.           | A API retornou status 200 com os dados do produto criado.         | ✅ Passou | Alta       |
| CT-011 | Editar dados de um produto existente    | Produto criado, `_id` e token disponíveis                     | Payload com descrição atualizada                                     | A API deve retornar status 200 confirmando a edição.              | A API retornou status 200 e os dados foram atualizados.           | ✅ Passou | Média      |
| CT-012 | Excluir produto existente               | Produto criado, `_id` e token disponíveis                     | `_id` do produto a ser excluído                                      | A API deve retornar status 200 confirmando a exclusão.            | A API retornou status 200 confirmando a exclusão do produto.      | ✅ Passou | Média      |

> **Observação:** O caso CT-007 evidencia o defeito descrito na seção "Problemas e Riscos" do README do projeto: a requisição de login retorna status 200 em vez de 201, divergindo do padrão REST esperado para o método POST.
