# Plano de Teste - Open Brewery DB (Performance com K6)

## 1. Introdução  
O objetivo deste plano é avaliar o desempenho da API Open Brewery DB, garantindo tempos de resposta adequados, estabilidade sob carga moderada e comportamento sob carga crescente.  

---

## 2. Escopo  
Serão testados:  
- **Endpoints da API** (listagem de cervejarias, busca por estado, cidade, nome e tipo).  
- **Tempo de resposta** (latência e throughput).  
- **Carga moderada e crescente** (testes simulando múltiplos usuários simultâneos).  
- **Estabilidade da API** (comportamento sob carga constante e erros).  

⚠ **Importante:** Testes de estresse não serão aplicados, pois a API é um ambiente público.  

---

## 3. Tipos de Testes  
- **Testes de carga (moderada e crescente)**  
- **Testes de tempo de resposta**  
- **Testes de estabilidade**  

---

## 4. Critérios de Aceitação  
- O tempo de resposta deve ser **inferior a 2 segundos** para chamadas críticas.  
- O sistema deve **suportar a carga esperada sem degradação severa**.  
- A taxa de erro deve ser **inferior a 5%** durante os testes de carga.  

---

## 5. Ambientes e Ferramentas  
- **Ambiente:** Produção (https://api.openbrewerydb.org/)  
- **Ferramentas:** K6  

---

## 6. Cenários de Teste  

| ID  | Cenário | Passos | Métricas Avaliadas |
|-----|---------|--------|--------------------|
| 1   | Teste de tempo de resposta - Listagem de cervejarias | Simular requisições à listagem de cervejarias | Tempo médio de resposta, taxa de erro |
| 2   | Teste de tempo de resposta - Busca por estado | Simular busca de cervejarias por estado | Latência, throughput |
| 3   | Teste de tempo de resposta - Busca por cidade | Simular busca de cervejarias por cidade | Latência, throughput |
| 4   | Teste de tempo de resposta - Busca por nome | Simular busca de cervejaria específica pelo nome | Tempo médio de resposta, taxa de erro |
| 5   | Teste de tempo de resposta - Obter detalhes | Simular requisições para obter detalhes de uma cervejaria | Tempo médio de resposta, latência |
| 6   | Teste de carga - Filtro por tipo | Simular X usuários filtrando cervejarias por tipo (micro, brewpub, etc.) | Estabilidade do sistema |
| 7   | Teste de carga - Paginação | Simular múltiplos usuários acessando diferentes páginas de listagem | Tempo médio de resposta, taxa de erro |
| 8   | Teste de carga crescente | Aumentar progressivamente o número de usuários | Tempo médio de resposta, taxa de erro, picos de latência |
| 9   | Teste de estabilidade | Simular carga constante durante um período | Degradação do sistema, tempo médio de resposta |
| 10  | Teste de erro - ID inexistente | Simular busca por ID inválido | Status HTTP esperado (404), tempo de resposta |

---

## 7. Riscos e Dependências  
- **Possíveis problemas:** Mudanças na API pública da Open Brewery DB podem afetar os testes.  
- **Dependências:** API Open Brewery DB acessível e estável durante os testes.  
- **Limitações:** Como a API é pública, não é possível testar sob alta carga sem impactar o serviço.  
