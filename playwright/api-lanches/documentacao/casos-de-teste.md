# Casos de Teste - Fluxos da Aplicação

## Categorias
| ID | Cenário | Pré-condição | Dados de Teste | Resultado Esperado | Resultado Obtido | Status | Prioridade |
| ------ | --------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | -------- | ---------- |
| CT-001 | Criar, publicar e consultar categoria válida  | API de categorias disponível                   | Payload com dados válidos de categoria                                | A categoria deve ser criada, publicada e localizada na consulta.  | Categoria criada, publicada e localizada na consulta com sucesso. | ✅ Passou | Alta       |
| CT-002 | Publicar categoria com versão incorreta       | Categoria cadastrada na aplicação              | Header ou payload contendo versão incompatível/incorreta              | A API deve rejeitar a publicação.                                 | A API rejeitou a publicação conforme esperado.                    | ✅ Passou | Média      |
| CT-003 | Consultar categorias com token inválido       | Endpoint de categorias disponível              | Token de autenticação inválido, expirado ou ausente                   | A API deve retornar erro 401.                                     | A API retornou erro 401 Unauthorized.                             | ✅ Passou | Alta       |

---

## Produtos
| ID | Cenário | Pré-condição | Dados de Teste | Resultado Esperado | Resultado Obtido | Status | Prioridade |
| ------ | --------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | -------- | ---------- |
| CT-004 | Criar produto vinculado a categoria válida    | Categoria válida existente e publicada         | Payload do produto associado ao ID de uma categoria existente          | O produto deve ser criado, publicado e localizado na consulta.    | O produto foi criado, publicado e localizado na consulta.         | ✅ Passou | Alta       |
| CT-005 | Criar produto com preço em formato inválido   | Categoria válida disponível                    | Payload contendo o campo de preço em formato inválido (ex: texto)     | A API deve rejeitar a criação do produto.                         | A API validou a tipagem e rejeitou a criação do produto.          | ✅ Passou | Média      |
| CT-006 | Criar produto referenciando categoria inexistente | API de produtos operacional                | Payload com ID de categoria inexistente                               | A API deve rejeitar a publicação do produto.                      | A API rejeitou a publicação do produto por inconsistência do ID.   | ✅ Passou | Alta       |
| CT-007 | Publicar produto com versão incorreta         | Produto existente cadastrado                   | Requisição de publicação com versão de produto divergente             | A API deve rejeitar a publicação.                                 | A API rejeitou a publicação por conflito de versão.              | ✅ Passou | Média      |
| CT-008 | Consultar produtos com token inválido         | Endpoint de produtos disponível                | Token de autorização inválido ou corrompido                           | A API deve retornar erro 401.                                     | A API retornou erro 401 Unauthorized.                             | ✅ Passou | Alta       |

---

## Pedidos
| ID | Cenário | Pré-condição | Dados de Teste | Resultado Esperado | Resultado Obtido | Status | Prioridade |
| ------ | --------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | -------- | ---------- |
| CT-009 | Criar pedido vinculado a usuário e produto existentes | Usuário e produto cadastrados e válidos      | Payload com IDs válidos de usuário e produto                          | O pedido deve ser criado, publicado e localizado na consulta.     | O pedido foi criado, publicado e localizado na consulta.          | ✅ Passou | Crítica    |
| CT-010 | Criar pedido com totalPrice inválido          | Usuário e produto cadastrados                  | Payload com o campo `totalPrice` contendo tipo ou valor inválido       | A API deve rejeitar a criação do pedido.                          | A API rejeitou a criação do pedido devido ao formato do campo.   | ✅ Passou | Alta       |
| CT-011 | Publicar pedido com versão incorreta          | Pedido previamente gerado                      | Requisição enviada com versão incorreta                               | A API deve rejeitar a publicação.                                 | A API rejeitou a alteração mantendo o pedido intacto.             | ✅ Passou | Média      |
| CT-012 | Consultar pedidos com token inválido          | Endpoint de pedidos disponível                 | Token de autorização expirado ou inválido                             | A API deve retornar erro 401.                                     | A API retornou erro 401 Unauthorized.                             | ✅ Passou | Alta       |

---

## Usuários
| ID | Cenário | Pré-condição | Dados de Teste | Resultado Esperado | Resultado Obtido | Status | Prioridade |
| ------ | --------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | -------- | ---------- |
| CT-013 | Criar, publicar e consultar usuário válido    | API de usuários disponível                     | Payload contendo dados válidos de um novo usuário                     | O usuário deve ser criado, publicado e localizado na consulta.    | O usuário foi criado, publicado e localizado na consulta.         | ✅ Passou | Alta       |
| CT-014 | Criar usuário com campo name em tipo incorreto| API de usuários disponível                     | Payload com o campo `name` em tipo incompatível (ex: número/array)   | A API deve rejeitar a criação do usuário.                         | A API rejeitou a criação com erro de validação de campo.          | ✅ Passou | Média      |
| CT-015 | Publicar usuário com versão incorreta         | Usuário cadastrado no sistema                  | Alteração de estado enviada com versão incorreta                      | A API deve rejeitar a publicação.                                 | A API rejeitou a publicação do usuário.                           | ✅ Passou | Média      |
| CT-016 | Excluir entrada de usuário inexistente        | API de usuários disponível                     | Requisição DELETE informando ID de usuário inexistente                | A API deve retornar erro 400 ou 404.                              | A API retornou erro 404 Not Found (ou 400 Bad Request).          | ✅ Passou | Média      |
| CT-017 | Consultar usuários com token inválido         | Endpoint de usuários disponível                | Token de acesso ausente ou malformatado                               | A API deve retornar erro 401.                                     | A API impediu a consulta e retornou erro 401.                    | ✅ Passou | Alta       |
