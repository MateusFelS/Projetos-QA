# Casos de Teste - Fluxos da Aplicação

## Login

| ID     | Cenário                              | Pré-condição                                              | Dados de Teste                   | Resultado Esperado                                                                                          | Resultado Obtido                                                           | Status   | Prioridade |
| ------ | ------------------------------------ | --------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------- | ---------- |
| CT-001 | Realizar login com cadastro válido   | Usuário na tela de login e cadastro previamente realizado | Usuário e senha válidos          | Sistema deve realizar o login e apresentar a mensagem "Welcome (nome do usuário)" no canto superior direito | A mensagem "Welcome (nome do usuário)" apareceu corretamente.              | ✅ Passou | Alta       |
| CT-002 | Realizar login com cadastro inválido | Usuário na tela de login                                  | Usuário e senha inexistentes     | Sistema deve impedir o login e apresentar a mensagem de erro "User does not exist."                         | A mensagem "User does not exist." apareceu corretamente.                   | ✅ Passou | Alta       |
| CT-003 | Realizar login com campos vazios     | Usuário na tela de login                                  | Campos de usuário e senha vazios | Sistema deve impedir o login e apresentar a mensagem "Please fill out Username and Password."               | A mensagem "Please fill out Username and Password." apareceu corretamente. | ✅ Passou | Alta       |

---

## Cadastro de Usuário

| ID     | Cenário                                  | Pré-condição                                                   | Dados de Teste                     | Resultado Esperado                                                                 | Resultado Obtido                                             | Status   | Prioridade |
| ------ | ---------------------------------------- | -------------------------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------ | -------- | ---------- |
| CT-004 | Realizar signup com cadastro válido      | Usuário na tela de cadastro                                    | Novo usuário e senha válidos       | Sistema deve concluir o cadastro e apresentar a mensagem "Sign up successful."     | A mensagem "Sign up successful." apareceu corretamente.      | ✅ Passou | Alta       |
| CT-005 | Realizar signup com usuário já existente | Usuário na tela de cadastro e usuário já cadastrado no sistema | Usuário existente e qualquer senha | Sistema deve impedir o cadastro e apresentar a mensagem "This user already exist." | A mensagem "This user already exist." apareceu corretamente. | ✅ Passou | Alta       |

---

## Carrinho de Compras

| ID     | Cenário                    | Pré-condição                                            | Dados de Teste                                                           | Resultado Esperado                                                                                        | Resultado Obtido                                                                             | Status                   | Prioridade |
| ------ | -------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| CT-006 | Adicionar item ao carrinho | Usuário com acesso à listagem de produtos               | Selecionar um produto e clicar em "Add to cart"                          | Sistema deve apresentar a mensagem "Product added" e adicionar o item ao carrinho                         | O produto foi adicionado corretamente e a mensagem "Product added" apareceu.                 | ✅ Passou                 | Alta       |
| CT-007 | Remover item do carrinho   | Existência de pelo menos um item adicionado ao carrinho | Adicionar um item e clicar em "Delete"                                   | Sistema deve remover o item do carrinho e atualizar a lista de produtos                                   | O item foi removido corretamente e a lista foi atualizada.                                   | ✅ Passou                 | Alta       |
| CT-008 | Comprar item com sucesso   | Usuário com produto adicionado ao carrinho              | Produto no carrinho, dados de compra preenchidos e confirmação da compra | Sistema deve finalizar a compra, apresentar a mensagem "Thank you for your purchase" e registrar o pedido | A compra foi concluída corretamente, a mensagem esperada apareceu e o pedido foi registrado. | ✅ Passou                 | Crítica    |
| CT-009 | Acessar carrinho vazio     | Usuário sem itens adicionados ao carrinho               | Acessar o carrinho sem adicionar produtos                                | Sistema deve apresentar a mensagem "Your cart is empty"                                                   | Nenhuma mensagem de erro ou aviso aparece, o que pode dificultar o entendimento do cliente.  | ⚠️ Passou com observação | Média      |

---

## Navegação

| ID     | Cenário                                        | Pré-condição                                     | Dados de Teste             | Resultado Esperado                                                                             | Resultado Obtido                                                              | Status   | Prioridade |
| ------ | ---------------------------------------------- | ------------------------------------------------ | -------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | -------- | ---------- |
| CT-010 | Acessar página de contato                      | Usuário na aplicação e página inicial disponível | Clicar no link "Contact"   | Página de contato deve carregar corretamente e permitir o envio de uma mensagem                | A página de contato carregou corretamente e foi possível enviar uma mensagem. | ✅ Passou | Média      |
| CT-011 | Acessar página "About us"                      | Usuário na aplicação e página inicial disponível | Clicar no link "About us"  | Página "About us" deve abrir corretamente e apresentar o vídeo com informações sobre a empresa | A página abriu corretamente e apresentou o vídeo esperado.                    | ✅ Passou | Média      |
| CT-012 | Acessar página do carrinho pela barra superior | Usuário na aplicação e barra superior disponível | Clicar no link do carrinho | Página do carrinho deve abrir corretamente                                                     | A página do carrinho abriu corretamente.                                      | ✅ Passou | Alta       |

---

## Filtro de Produtos

| ID     | Cenário                     | Pré-condição                                           | Dados de Teste                               | Resultado Esperado                                                       | Resultado Obtido                                                                   | Status   | Prioridade |
| ------ | --------------------------- | ------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | -------- | ---------- |
| CT-013 | Filtrar itens por categoria | Usuário na página de produtos e categorias disponíveis | Escolher uma categoria no filtro de produtos | Sistema deve exibir apenas os itens pertencentes à categoria selecionada | O filtro funcionou corretamente e exibiu apenas os itens da categoria selecionada. | ✅ Passou | Média      |

---

## UI/UX - Responsividade

| ID     | Cenário                                             | Pré-condição                                                    | Dados de Teste                                          | Resultado Esperado                                                                                                  | Resultado Obtido                                                                                      | Status   | Prioridade |
| ------ | --------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------- | ---------- |
| CT-014 | Verificar responsividade em diferentes dispositivos | Aplicação disponível para acesso em diferentes tamanhos de tela | Acessar o site em dispositivos mobile, tablet e desktop | Layout deve se adaptar corretamente aos diferentes tamanhos de tela, mantendo todos os elementos e links acessíveis | No mobile, alguns links do header ficaram cortados. No desktop e tablet, o comportamento foi correto. | ❌ Falhou | Alta       |

---

## UI/UX - Acessibilidade

| ID     | Cenário                                          | Pré-condição                        | Dados de Teste                                                          | Resultado Esperado                                                                             | Resultado Obtido                                                | Status   | Prioridade |
| ------ | ------------------------------------------------ | ----------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | -------- | ---------- |
| CT-015 | Verificar acessibilidade e navegação via teclado | Aplicação disponível para interação | Verificar descrições alternativas e navegar utilizando apenas o teclado | Site deve apresentar descrições alternativas adequadas e permitir navegação sem o uso do mouse | O site apresentou comportamento adequado durante a verificação. | ✅ Passou | Alta       |
