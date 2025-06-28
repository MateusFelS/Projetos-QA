# Casos de Teste - Desafio QA

## **Testes Funcionais**

| ID   | Caso de Teste                           | Pré-condição | Passos | Resultado Esperado |
|------|----------------------------------------|--------------|--------|--------------------|
| CT001 | **Depósito Válido** | Usuário logado | 1. Acessar a página de depósito. <br> 2. Inserir um valor válido (ex: R$ 100,00). <br> 3. Clicar no botão "Depositar". | O saldo deve ser atualizado corretamente e um aviso de sucesso deve ser exibido. |
| CT002 | **Depósito com Valor Negativo** | Usuário logado | 1. Acessar a página de depósito. <br> 2. Inserir um valor negativo (ex: R$ -100,00). <br> 3. Clicar no botão "Depositar". | O sistema deve exibir uma mensagem de erro e impedir o depósito. |
| CT003 | **Depósito com Valor Zero** | Usuário logado | 1. Acessar a página de depósito. <br> 2. Inserir o valor R$ 0,00. <br> 3. Clicar no botão "Depositar". | O sistema deve exibir uma mensagem de erro e impedir o depósito. |
| CT004 | **Saque Válido** | Usuário tem saldo suficiente | 1. Acessar a página de saque. <br> 2. Inserir um valor dentro do saldo disponível (ex: R$ 50,00). <br> 3. Clicar no botão "Sacar". | O saldo deve ser atualizado corretamente e uma mensagem de sucesso deve ser exibida. |
| CT005 | **Saque acima do Saldo** | Usuário com saldo menor que o valor a ser sacado | 1. Acessar a página de saque. <br> 2. Inserir um valor maior que o saldo disponível (ex: R$ 1000,00). <br> 3. Clicar no botão "Sacar". | O sistema deve exibir uma mensagem de erro e impedir a transação. |
| CT006 | **Saque com Valor Zero** | Usuário logado | 1. Acessar a página de saque. <br> 2. Inserir o valor R$ 0,00. <br> 3. Clicar no botão "Sacar". | O sistema deve exibir uma mensagem de erro e impedir o saque. |
| CT007 | **Transferência para outra Conta** | Usuário tem saldo suficiente e conhece o número da conta de destino | 1. Acessar a página de transferência. <br> 2. Inserir o número da conta de destino. <br> 3. Inserir um valor válido (ex: R$ 200,00). <br> 4. Clicar no botão "Transferir". | O saldo do remetente deve ser reduzido e o saldo do destinatário deve ser aumentado corretamente. |
| CT008 | **Transferência para Conta Inexistente** | Usuário logado | 1. Acessar a página de transferência. <br> 2. Inserir um número de conta inexistente. <br> 3. Inserir um valor válido. <br> 4. Clicar no botão "Transferir". | O sistema deve exibir um erro informando que a conta não existe. |
| CT009 | **Transferência com Valor Zero** | Usuário logado | 1. Acessar a página de transferência. <br> 2. Inserir o número da conta de destino. <br> 3. Inserir o valor R$ 0,00. <br> 4. Clicar no botão "Transferir". | O sistema deve exibir uma mensagem de erro e impedir a transferência. |

---

## **Testes de Interface (UI)**

| ID   | Caso de Teste                           | Passos | Resultado Esperado |
|------|----------------------------------------|--------|--------------------|
| CT010 | **Responsividade no Mobile** | 1. Acessar o site em um dispositivo móvel ou reduzir a tela do navegador. <br> 2. Navegar pelas funcionalidades do site. | Todos os elementos devem estar visíveis e utilizáveis corretamente. |
