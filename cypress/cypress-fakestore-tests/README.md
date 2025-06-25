# FakeStore - LetCode

Este repositório contém os testes automatizados do site **FakeStore**, uma plataforma de e-commerce fictícia. Os testes foram desenvolvidos utilizando o **Cypress** e estão integrados ao **GitHub Actions** para execução contínua.

## Descrição do Projeto

O projeto visa garantir a qualidade e a confiabilidade das funcionalidades do site FakeStore, validando os fluxos de login e carrinho de compras. Com os testes automatizados, conseguimos identificar e corrigir bugs de forma eficiente, reduzindo o tempo de validação e melhorando a entrega de novas funcionalidades. Esses testes garantem que os usuários possam realizar login corretamente e adicionar/remover itens do carrinho sem problemas.

## Testes Automatizados

- **Ferramenta Utilizada**: Cypress
- **Tipo de Testes**: Testes E2E (End-to-End)
- **Funcionalidades Testadas**: Fluxo de login do usuário, adição e remoção de produtos no carrinho, checkout e visualização do carrinho.

## Testes de Funcionalidades

### 1. Teste de Login
- **Login com credenciais válidas**: O sistema deve permitir que o usuário acesse a plataforma com um usuário e senha corretos.
- **Login com credenciais inválidas**: O sistema deve apresentar uma mensagem de erro quando as credenciais forem incorretas.
- **Login com campos em branco**: O sistema deve exibir uma mensagem de erro quando os campos de login (usuário ou senha) estiverem em branco.

### 2. Teste de Carrinho
- **Checkout válido**: O sistema deve permitir o usuário realizar um checkout com sucesso quando o carrinho estiver preenchido com itens.
- **Carrinho vazio**: O sistema deve exibir uma mensagem quando o carrinho estiver vazio ao tentar acessar o checkout.
- **Vários itens no carrinho**: O sistema deve permitir adicionar múltiplos itens ao carrinho e garantir que o valor total seja atualizado corretamente.
- **Remover todos os itens do carrinho**: O sistema deve permitir que o usuário remova todos os itens do carrinho com sucesso.

## Testes de Aceitação Manual

Os testes de aceitação manual são realizados para verificar as funcionalidades do site em um ambiente real. Eles são essenciais para garantir que todas as interações do usuário estejam funcionando conforme o esperado, especialmente para garantir que o processo de login e o gerenciamento do carrinho estejam sem falhas.

## Integração Contínua

Os testes estão configurados para serem executados automaticamente sempre que houver uma nova alteração no código, utilizando o **GitHub Actions**. Isso garante que qualquer nova implementação seja testada antes de ser mesclada ao código principal, aumentando a confiança na qualidade do software.
