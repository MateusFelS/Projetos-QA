# Casos de Teste - Criação de Evento Presencial

## Informações Básicas do Evento

| ID     | Cenário                                                            | Pré-condição                                                                       | Dados de Teste                                                                                        | Resultado Esperado                                                                          | Resultado Obtido                                                    | Status     | Prioridade |
| ------ | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------- | ---------- |
| CT-001 | Criar evento preenchendo todos os campos obrigatórios corretamente | Usuário autenticado na Área do Produtor e no fluxo de criação de evento presencial | Nome, categoria, data, horário, local e demais informações obrigatórias preenchidas com dados válidos | Usuário deve conseguir avançar entre as etapas sem erros.                                   | Funcionou conforme esperado.                                        | ✅ Aprovado | Alta       |
| CT-002 | Tentar avançar sem preencher o nome do evento                      | Usuário na etapa de informações básicas                                            | Campo nome do evento vazio e demais campos preenchidos                                                | Sistema deve impedir o avanço e apresentar mensagem indicando preenchimento obrigatório.    | O sistema impediu o avanço e indicou o preenchimento obrigatório.   | ✅ Aprovado | Alta       |
| CT-003 | Informar nome do evento contendo apenas espaços                    | Usuário na etapa de informações básicas                                            | Nome: `"     "`                                                                                       | Sistema deve identificar o valor como inválido e impedir o avanço.                          | O sistema identificou o valor como inválido e impediu o avanço.     | ✅ Aprovado | Alta       |
| CT-004 | Informar nome do evento utilizando quantidade máxima permitida     | Usuário na etapa de informações básicas                                            | Nome utilizando o limite máximo aceito pela aplicação                                                 | Sistema deve aceitar o valor informado.                                                     | O sistema aceitou o valor informado.                                | ✅ Aprovado | Média      |
| CT-005 | Informar nome do evento acima do limite permitido                  | Usuário na etapa de informações básicas                                            | Nome excedendo o limite aceito pela aplicação                                                         | Sistema deve impedir o envio ou limitar a quantidade de caracteres conforme regra definida. | O sistema impediu o envio ou aplicou a limitação conforme esperado. | ✅ Aprovado | Média      |

---

## Categoria

| ID     | Cenário                                          | Pré-condição                                                            | Dados de Teste                   | Resultado Esperado                                                 | Resultado Obtido                                                     | Status     | Prioridade |
| ------ | ------------------------------------------------ | ----------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------- | ---------- | ---------- |
| CT-006 | Selecionar uma categoria válida                  | Usuário na etapa de categoria                                           | Categoria disponível selecionada | Categoria deve ser salva corretamente.                             | Categoria salva corretamente.                                        | ✅ Aprovado | Alta       |
| CT-007 | Tentar avançar sem selecionar categoria          | Usuário na etapa de categoria                                           | Campo categoria vazio            | Sistema deve impedir o avanço e informar a necessidade de seleção. | O sistema impediu o avanço e solicitou o preenchimento da categoria. | ✅ Aprovado | Alta       |
| CT-008 | Alterar categoria selecionada antes de continuar | Usuário na etapa de categoria com uma categoria previamente selecionada | Alterar a categoria escolhida    | Nova categoria deve substituir a anterior corretamente.            | A nova categoria foi salva corretamente.                             | ✅ Aprovado | Média      |

---

## Data e Horário

| ID     | Cenário                                            | Pré-condição                       | Dados de Teste                  | Resultado Esperado                                                 | Resultado Obtido                                                     | Status     | Prioridade |
| ------ | -------------------------------------------------- | ---------------------------------- | ------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------- | ---------- | ---------- |
| CT-009 | Informar data futura válida                        | Usuário na etapa de data e horário | Data futura válida              | Sistema deve aceitar a data informada.                             | Data aceita corretamente.                                            | ✅ Aprovado | Alta       |
| CT-010 | Informar data anterior ao dia atual                | Usuário na etapa de data e horário | Data passada                    | Sistema deve impedir a seleção ou informar inconsistência.         | O sistema impediu a seleção da data inválida.                        | ✅ Aprovado | Alta       |
| CT-011 | Informar horário final anterior ao horário inicial | Usuário na etapa de data e horário | Início: 18:00 / Fim: 16:00      | Sistema deve informar que o período do evento é inválido.          | O sistema apresentou validação informando inconsistência no período. | ✅ Aprovado | Alta       |
| CT-012 | Criar evento com início e término no mesmo dia     | Usuário na etapa de data e horário | Data inicial igual à data final | Sistema deve permitir caso esteja dentro das regras da plataforma. | O sistema permitiu a configuração conforme esperado.                 | ✅ Aprovado | Média      |

---

## Localização

| ID     | Cenário                                                    | Pré-condição                       | Dados de Teste                        | Resultado Esperado                                           | Resultado Obtido                                                 | Status     | Prioridade |
| ------ | ---------------------------------------------------------- | ---------------------------------- | ------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------- | ---------- | ---------- |
| CT-013 | Informar endereço válido                                   | Evento configurado como presencial | Endereço válido                       | Sistema deve aceitar e salvar a localização corretamente.    | Endereço salvo corretamente.                                     | ✅ Aprovado | Alta       |
| CT-014 | Informar CEP inválido                                      | Campo de endereço disponível       | CEP inválido ou inexistente           | Sistema deve informar erro de validação.                     | O sistema apresentou mensagem de validação para o CEP informado. | ✅ Aprovado | Média      |
| CT-015 | Avançar sem preencher informações obrigatórias do endereço | Usuário na etapa de localização    | Rua, número ou cidade não preenchidos | Sistema deve impedir o avanço e indicar os campos pendentes. | O sistema impediu o avanço e destacou os campos obrigatórios.    | ✅ Aprovado | Alta       |

---

## Banner do Evento

| ID     | Cenário                                             | Pré-condição                         | Dados de Teste                               | Resultado Esperado                                                | Resultado Obtido                                              | Status     | Prioridade |
| ------ | --------------------------------------------------- | ------------------------------------ | -------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------- | ---------- | ---------- |
| CT-016 | Realizar upload de imagem válida                    | Usuário na etapa de imagem do evento | Arquivo de imagem aceito pela plataforma     | Upload deve ser concluído com sucesso.                            | Upload realizado com sucesso.                                 | ✅ Aprovado | Alta       |
| CT-017 | Realizar upload de formato não suportado            | Usuário na etapa de imagem           | Arquivo incompatível com os formatos aceitos | Sistema deve informar que o formato não é permitido.              | O sistema rejeitou o arquivo e apresentou mensagem de erro.   | ✅ Aprovado | Alta       |
| CT-018 | Realizar upload de imagem acima do limite permitido | Usuário na etapa de imagem           | Arquivo excedendo o limite aceito            | Sistema deve informar a restrição do arquivo.                     | O sistema impediu o upload e informou a restrição do arquivo. | ✅ Aprovado | Média      |
| CT-019 | Cancelar ou interromper upload                      | Upload iniciado                      | Interrupção durante o envio do arquivo       | Sistema deve permanecer estável e informar a situação ao usuário. | A aplicação permaneceu estável após o cancelamento do upload. | ✅ Aprovado | Baixa      |

---

## Descrição do Evento

| ID     | Cenário                                   | Pré-condição                   | Dados de Teste                              | Resultado Esperado                                                    | Resultado Obtido                               | Status     | Prioridade |
| ------ | ----------------------------------------- | ------------------------------ | ------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------- | ---------- | ---------- |
| CT-020 | Inserir descrição simples                 | Campo de descrição disponível  | Texto descritivo válido                     | Descrição deve ser salva corretamente.                                | Descrição salva corretamente.                  | ✅ Aprovado | Média      |
| CT-021 | Utilizar recursos de formatação do editor | Editor de descrição disponível | Texto com negrito, listas e outros recursos | Formatação deve permanecer após salvar.                               | A formatação foi preservada após o salvamento. | ✅ Aprovado | Média      |
| CT-022 | Inserir descrição extensa                 | Campo de descrição disponível  | Texto com grande quantidade de caracteres   | Sistema deve manter o funcionamento e respeitar os limites definidos. | O sistema manteve o funcionamento esperado.    | ✅ Aprovado | Baixa      |

---

## Configuração de Ingressos

| ID     | Cenário                                       | Pré-condição                  | Dados de Teste                                              | Resultado Esperado                                                                                                     | Resultado Obtido                                                                                                                                         | Status      | Prioridade |
| ------ | --------------------------------------------- | ----------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------- |
| CT-023 | Criar evento gratuito                         | Usuário na etapa de ingressos | Evento configurado como gratuito                            | Sistema deve permitir criação sem necessidade de pagamento.                                                            | Evento gratuito configurado corretamente.                                                                                                                | ✅ Aprovado  | Alta       |
| CT-024 | Criar evento pago                             | Usuário na etapa de ingressos | Ingresso com valor configurado e período de vendas definido | Sistema deve permitir a configuração do ingresso pago conforme as regras da plataforma e impedir datas inconsistentes. | O sistema permitiu configurar o ingresso pago, porém aceitou datas inconsistentes para o período de vendas. Bugs registrados: **BUG-001** e **BUG-002**. | ❌ Reprovado | Alta       |
| CT-025 | Configurar quantidade máxima de participantes | Usuário na etapa de ingressos | Limite de participantes definido                            | Sistema deve salvar corretamente a capacidade configurada.                                                             | Capacidade salva corretamente.                                                                                                                           | ✅ Aprovado  | Média      |

---

## Navegação e Persistência de Dados

| ID     | Cenário                                         | Pré-condição                       | Dados de Teste                   | Resultado Esperado                                                                     | Resultado Obtido                                                         | Status     | Prioridade |
| ------ | ----------------------------------------------- | ---------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ---------- | ---------- |
| CT-026 | Avançar entre todas as etapas com dados válidos | Formulário preenchido corretamente | Dados válidos em todas as etapas | Usuário deve conseguir concluir o fluxo.                                               | Fluxo concluído normalmente.                                             | ✅ Aprovado | Alta       |
| CT-027 | Retornar para etapa anterior                    | Dados preenchidos parcialmente     | Utilizar botão voltar            | Informações preenchidas devem permanecer salvas.                                       | Os dados permaneceram preenchidos após retornar à etapa anterior.        | ✅ Aprovado | Alta       |
| CT-028 | Atualizar página durante preenchimento          | Usuário no meio do cadastro        | Atualização da página            | Sistema deve apresentar comportamento esperado para recuperação ou descarte dos dados. | O comportamento observado foi consistente com o esperado pela aplicação. | ✅ Aprovado | Média      |
| CT-029 | Cancelar criação do evento                      | Usuário em qualquer etapa do fluxo | Acionar opção de cancelamento    | Sistema deve retornar ao local esperado sem criar evento incompleto.                   | O cancelamento ocorreu corretamente e o usuário retornou ao painel.      | ✅ Aprovado | Média      |

---

## Fluxo Completo

| ID     | Cenário                                         | Pré-condição                                      | Dados de Teste                    | Resultado Esperado                                                            | Resultado Obtido                                                 | Status     | Prioridade |
| ------ | ----------------------------------------------- | ------------------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------- | ---------- | ---------- |
| CT-030 | Criar evento presencial completo                | Usuário autenticado e fluxo de criação disponível | Dados válidos em todas as etapas  | Evento deve ser criado e ficar disponível conforme as regras da plataforma.   | Evento criado com sucesso.                                       | ✅ Aprovado | Crítica    |
| CT-031 | Corrigir erro de validação e continuar cadastro | Sistema apresentou erro de validação              | Corrigir campo informado          | Usuário deve conseguir continuar após a correção.                             | O sistema permitiu prosseguir após a correção dos dados.         | ✅ Aprovado | Alta       |
| CT-032 | Revisar informações antes da publicação         | Todas as etapas preenchidas                       | Conferência dos dados cadastrados | Todas as informações devem ser apresentadas corretamente antes da publicação. | As informações foram apresentadas corretamente na revisão final. | ✅ Aprovado | Alta       |
