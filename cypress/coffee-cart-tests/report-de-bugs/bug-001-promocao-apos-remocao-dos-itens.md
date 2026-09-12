# Promoção disponível após remoção dos itens que a ativaram

## Descrição

O sistema mantém a promoção ativa mesmo após a remoção de todos os itens que atenderam aos critérios para ativá-la.

---

## Pré-condições

* Usuário acessando a aplicação **Coffee Cart**.
* Promoção ativada após adicionar os 3 itens necessários ao carrinho.

---

## Passos para reprodução

1. Acessar a aplicação **Coffee Cart**.
2. Adicionar os 3 itens necessários para ativar a promoção.
3. Confirmar a promoção.
4. Remover do carrinho todos os itens que originaram a promoção.
5. Verificar o estado da promoção.

---

## Resultado esperado

O sistema deve desativar a promoção quando os itens que atenderam aos critérios para ativá-la forem removidos do carrinho.

---

## Resultado obtido

A promoção permanece ativa mesmo após a remoção de todos os itens que a originaram.

---

## Impacto

A permanência da promoção pode permitir que o usuário mantenha um benefício mesmo sem atender aos critérios necessários para obtê-lo, gerando inconsistência na aplicação da regra promocional.

---

## Evidências

* [Imagem](INSERIR_LINK_DA_EVIDENCIA)
