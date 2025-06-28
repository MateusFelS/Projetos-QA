# Lista de Bugs e Melhorias

## Bugs Encontrados

1. **Saque acima do saldo** → Permite sacar um valor maior do que o saldo disponível.
2. **Saque com valor negativo aumenta o saldo** → Se inserir um valor negativo ao sacar, o saldo aumenta em vez de diminuir.
3. **Depósito com valor negativo reduz o saldo** → Depositar um valor negativo faz com que o saldo diminua, em vez de exibir um erro.
4. **Preenchimento automático de campos numéricos** → Quando um campo numérico é preenchido, os outros são automaticamente preenchidos.
5. **Caracter inválido em campo numérico** → É possível digitar o caractere `"e"` no campo de valor.
6. **Transferência não funciona corretamente** → O valor não é transferido para outra conta, mesmo usando nome ou código corretamente.
7. **Transferência para conta inexistente** → O sistema permite transferir para contas inexistentes.

---

# Pontos Positivos

- O sistema **impede** saque, depósito ou transferência com valor zero.  
- O **histórico de transações** funciona corretamente.  
- Mesmo que seja possível digitar mais de **duas casas decimais**, o sistema **arredonda para duas casas** corretamente.  

---

# Sugestões de Melhorias

- **Adicionar uma validação mais rigorosa** para evitar saques e depósitos com valores negativos.
- **Corrigir o bug da transferência**, garantindo que o valor seja realmente enviado para outra conta válida.
- **Bloquear caracteres não numéricos** no campo de valor (exemplo: impedir a digitação do caractere `"e"`).
- **Evitar preenchimento automático dos campos numéricos**, garantindo que cada transação seja preenchida individualmente.
- **Exibir uma mensagem de erro** ao tentar transferir para uma conta inexistente.
- **Incluir um modal de confirmação** antes de finalizar uma transferência, evitando erros acidentais.
- **Melhorar a exibição do histórico de transações**, incluindo **data e hora formatadas**.
