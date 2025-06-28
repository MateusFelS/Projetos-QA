# Desafio QA - Testes em Aplicação Bancária  

Este projeto contém a análise de qualidade e testes funcionais em um site bancário de testes. O objetivo é identificar bugs, sugerir melhorias e validar funcionalidades como depósito, saque e transferência.  

## Funcionalidades Testadas  
- Depósito  
- Saque  
- Transferência  
- Exibição de saldo  
- Histórico de transações  

## Bugs Encontrados  
- Saque de valor maior que o saldo é permitido  
- Sacar valor negativo aumenta o saldo  
- Depósito de valor negativo reduz o saldo  
- Campos numéricos preenchem automaticamente ao inserir um valor  
- Permite digitar caracteres inválidos como "e" em campos numéricos  
- Transferência não funciona corretamente entre contas  
- Transferência para conta inexistente é permitida  

## Pontos Positivos  
- Não permite transações com valor zero  
- Histórico de transações funcionando corretamente  
- Arredondamento de valores para 2 casas decimais  

## Melhorias Sugeridas  
- Bloquear saques acima do saldo disponível  
- Impedir valores negativos em depósito e saque  
- Validar corretamente transferências entre contas  
- Melhorar restrições nos campos numéricos  

## Tecnologias e Ferramentas  
- **Testes manuais e exploratórios**  
- **Casos de Teste em Markdown**   
