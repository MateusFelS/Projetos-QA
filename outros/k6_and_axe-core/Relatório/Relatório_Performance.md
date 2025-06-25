# Relatório de Teste de Carga

## Configuração do Teste  

| **Configuração**        | **Detalhes**         |
|-------------------------|----------------------|
| Máximo de VUs           | 50                   |
| Duração máxima          | 1m15s                |
| Execução                | 45s em 3 estágios    |
| Graceful Ramp Down      | 30s                  |
| Graceful Stop           | 30s                  |

## Resultados  

### Status das Requisições  

| **Requisição**               | **Status**       | **Tempo < 2s**                   |
|------------------------------|------------------|----------------------------------|
| Listar todas                 | ✅ Status 200     | ❌ 99% sucesso (305/1 falha)     |
| Buscar por estado             | ✅ Status 200     | ✅ Tempo < 2s                    |
| Buscar por nome               | ✅ Status 200     | ✅ Tempo < 2s                    |
| Buscar por tipo               | ✅ Status 200     | ✅ Tempo < 2s                    |
| Obter detalhes                | ✅ Status 200     | ✅ Tempo < 2s                    |
| Testar paginação             | ✅ Status 200     | ✅ Tempo < 2s                    |
| Buscar por cidade             | ✅ Status 200     | ✅ Tempo < 2s                    |
| Buscar por postal             | ✅ Status 200     | ✅ Tempo < 2s                    |
| ID inexistente               | ✅ Status 404     | ❌ 70% sucesso (215/91 falhas)   |
| Múltiplos filtros            | ✅ Status 200     | ✅ Tempo < 2s                    |

### Métricas Gerais  

| **Métrica**                          | **Valor**                       |
|--------------------------------------|---------------------------------|
| Taxa de sucesso                      | ✅ 98.49% (6026/6118)           |
| Total de requisições                 | 3059 (~44 req/s)                |
| Duração média das requisições        | ❌ 229.88ms (máx: 15s)          |
| Requisições com falha                | ❌ 10.00% (306/3059)            |
| Duração média da iteração            | 3.31s (p95: 8.54s)              |
| VUs utilizados                       | 1-50                            |

## Problemas Identificados  

| **Problema**                        | **Descrição**                                                       |
|-------------------------------------|--------------------------------------------------------------------|
| Tempo de resposta alto              | Algumas requisições ultrapassaram o limite de 2s.<br>P95 da `http_req_duration`: **942.9ms**<br>Máximo registrado: **15s** |
| Falhas em requisições               | **10% de falhas nas requisições HTTP**.<br>Principalmente em buscas por ID inexistente (30% acima de 2s).                          |
| Thresholds violados                 | `http_req_duration` e `http_req_failed` superaram os limites aceitáveis. |

## Recomendação  

- Analisar as requisições que excedem 2s para otimização.  
- Verificar possíveis gargalos na API para reduzir falhas.  
- Ajustar a infraestrutura caso necessário para suportar maior carga.  
