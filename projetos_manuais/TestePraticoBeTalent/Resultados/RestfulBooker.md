# Relatório de Execução de Testes de API - Restful-Booker

## 1. Plano de Testes

## 1.1 Objetivo
O objetivo é garantir que a API funcione corretamente, forneça respostas consistentes e trate erros de forma apropriada. Além disso, busca-se identificar possíveis falhas que possam impactar a experiência do usuário ou causar problemas no sistema integrado.

## 1.2 Escopo
Este relatório abrange a validação da API **Restful-Booker**, utilizada para gerenciar reservas em um sistema hoteleiro. O teste foca em verificar a funcionalidade dos principais endpoints antes da integração com o front-end, validando requisitos de autenticação, gestão de reservas e buscas, e assegurando a conformidade com os padrões de resposta HTTP.

## 1.3 Ambiente de Teste

### 1.3.1 Ferramenta Utilizada
- **Postman**: Ferramenta escolhida para execução e automação dos testes.

### 1.3.2 Variáveis de Ambiente Configuradas
- **Base URL**: `https://restful-booker.herokuapp.com`
- **Token**: Gerado durante o teste de autenticação e armazenado como variável.

---

## 2. Casos de Teste

### 2.1 Autenticação
| ID       | Cenário                              | Passos                                                                                         | Resultado Esperado                | Resultado Real     |
|----------|--------------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------|--------------------|
| TC01     | Gerar token de autenticação          | 1. Enviar requisição para `/auth` com credenciais válidas.<br>2. Verificar se o token é gerado.| Retorno HTTP 200 e token gerado.  | ✅ Pass            |
| TC02     | Gerar token com credenciais inválidas| 1. Enviar requisição para `/auth` com credenciais inválidas.<br>2. Verificar resposta de erro. | Retorno HTTP 403 com mensagem.    | ✅ Pass            |

---

### 2.2 Gestão de Reservas
| ID       | Cenário                         | Passos                                                                                         | Resultado Esperado                | Resultado Real     |
|----------|---------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------|--------------------|
| TC03     | Criar nova reserva              | 1. Enviar requisição POST para `/booking` com dados válidos.<br>2. Verificar retorno e dados.  | Retorno HTTP 201 com ID gerado.   | ⚠️ Pass, mas retornou 200 - OK ao invés de 201 - Created |
| TC04     | Buscar reserva específica       | 1. Enviar requisição GET para `/booking/{id}`.<br>2. Verificar se os dados estão corretos.     | Retorno HTTP 200 com dados válidos| ✅ Pass            |
| TC05     | Listar todas as reservas        | 1. Enviar requisição GET para `/booking`.<br>2. Verificar se todas as reservas aparecem.       | Retorno HTTP 200 com lista.       | ✅ Pass            |
| TC06     | Atualizar reserva existente     | 1. Enviar requisição PUT para `/booking/{id}` com dados válidos.<br>2. Verificar atualização.  | Retorno HTTP 200 com dados atualizados. | ✅ Pass      |
| TC07     | Deletar reserva existente       | 1. Enviar requisição DELETE para `/booking/{id}`.<br>2. Verificar exclusão da reserva.         | Retorno HTTP 200 para sucesso.    | ⚠️ Pass, mas retornou 201 - Created ao invés de 200 - OK |

---

### 2.3 Filtros e Buscas
| ID       | Cenário                          | Passos                                                                                         | Resultado Esperado                | Resultado Real     |
|----------|----------------------------------|-----------------------------------------------------------------------------------------------|-----------------------------------|--------------------|
| TC08     | Buscar reservas por nome         | 1. Enviar requisição GET para `/booking` com query `?firstname=John`.<br>2. Verificar resultado.| Retorno HTTP 200 com resultados. | ✅ Pass            |
| TC09     | Buscar reservas por check-in     | 1. Enviar requisição GET para `/booking` com query `?checkin=2024-01-01`.<br>2. Verificar resultado.| Retorno HTTP 200 com resultados.| ✅ Pass            |
| TC10     | Buscar reservas por check-out    | 1. Enviar requisição GET para `/booking` com query `?checkout=2024-01-10`.<br>2. Verificar resultado.| Retorno HTTP 200 com resultados.| ✅ Pass            |

---

## 3. Resultados Obtidos

### 3.1 Resumo Geral
| Categoria              | Total | Pass | Fail |
|------------------------|-------|------|------|
| Autenticação           | 2     | 2    | 0    |
| Gestão de Reservas     | 5     | 5    | 0    |
| Filtros e Buscas       | 3     | 3    | 0    |

### 3.2 Resultados Detalhados

| Cenário                              | Resultado                         | 
|--------------------------------------|-----------------------------------|
| **Criar nova reserva**               | ⚠️ Pass, mas retornou 200 ao invés de 201 |
| **Deletar reserva existente**        | ⚠️ Pass, mas retornou 201 ao invés de 200 |

---

## 4. Bugs Encontrados
- Algumas requisições estão com códigos diferentes do padrão, o que pode afetar seriamente a confiabilidade, a integração e a manutenção de sistemas.

---

## 5. Evidencias
- Post com código 200 - OK ao invés de 201 - Created: ![image](https://github.com/user-attachments/assets/ff535fa0-ee57-4742-82d4-0b24428c2b55)
- Delete com código 201 - Created ao invés de 200 - OK: ![Sem título](https://github.com/user-attachments/assets/ea411bdf-3edc-4cc2-a159-fecee35dd4bf)

## 6. Considerações Finais

### 6.1 Dificuldades Encontradas
- Nenhuma dificuldade significativa identificada.

### 6.2 Próximos Passos
- Automatizar os cenários de teste utilizando alguma ferramenta como o próprio **Postman** ou um framework como **Cypress**.
